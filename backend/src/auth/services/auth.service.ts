import { HashService } from 'src/users/services/hash.service';
import { UserService } from 'src/users/services/user.service';
import { Provider } from 'src/users/users.constants';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { LoginDto } from '../dto/login.dto';
import { SignUpDto } from '../dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.getUserByEmail(email);
    if (user && (await this.hashService.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async getUser(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.getUser(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      ...result,
    };
  }

  async login(payload: LoginDto) {
    const user = await this.validateUser(payload.email, payload.password);
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      ...user,
      ...tokens,
    };
  }

  async register(user: SignUpDto) {
    const userExists = await this.userService.getUserByEmail(user.email);

    if (userExists) {
      throw new UnauthorizedException('User already exists');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordCheck, ...tUser } = user;

    const createdUser = await this.userService.createUser({
      ...tUser,
      provider: Provider.Local,
    });
    const tokens = await this.getTokens(createdUser.id, createdUser.email);
    await this.updateRefreshToken(createdUser.id, tokens.refreshToken);

    return {
      ...createdUser,
      ...tokens,
    };
  }

  async getAccessToken(userId: string, email: string) {
    return this.jwtService.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
      },
    );
  }

  async getRefreshToken(userId: string, email: string) {
    return this.jwtService.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN'),
      },
    );
  }

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.getAccessToken(userId, email),
      this.getRefreshToken(userId, email),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const token = await this.hashService.hash(refreshToken);
    return this.userService.updateUser(userId, { refreshToken: token });
  }

  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.getUser(userId);
    if (!user) throw new UnauthorizedException();

    const isRefreshTokenValid = await this.hashService.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!isRefreshTokenValid) throw new UnauthorizedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      ...user,
      ...tokens,
    };
  }
}
