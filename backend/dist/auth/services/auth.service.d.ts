import { HashService } from 'src/users/services/hash.service';
import { UserService } from 'src/users/services/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import { UserWithoutPassword } from '../interfaces/auth.interfaces';
export declare class AuthService {
    private readonly userService;
    private readonly hashService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UserService, hashService: HashService, jwtService: JwtService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<UserWithoutPassword>;
    getUser(id: string): Promise<UserWithoutPassword | null>;
    login(payload: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        created: Date;
        updated: Date;
    }>;
    register(payload: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        created: Date;
        updated: Date;
    }>;
    getAccessToken(userId: string, email: string): Promise<string>;
    getRefreshToken(userId: string, email: string): Promise<string>;
    getTokens(userId: string, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<{
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        refreshToken: string;
        created: Date;
        updated: Date;
    }>;
    refreshToken(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        id: string;
        name: string;
        email: string;
        provider: string;
        password: string;
        created: Date;
        updated: Date;
    }>;
}
