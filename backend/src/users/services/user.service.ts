import { DatabaseService } from 'src/db/services/db.service';

import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from '../dto/create-user.dto';
import { FindUserByEmailDto } from '../dto/find-user-by-email.dto';
import { Provider } from '../users.constants';
import { HashService } from './hash.service';

@Injectable()
export class UserService {
  constructor(
    private readonly db: DatabaseService,
    private readonly hasher: HashService,
  ) {}

  async getUser(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email } });
  }

  async createUser({
    email,
    name,
    provider = Provider.Local,
    password,
  }: CreateUserDto): Promise<Omit<User, 'password' | 'refreshToken'>> {
    const hashedPassword = await this.hasher.hash(password);

    const createdUser = await this.db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        provider,
      },
      select: {
        id: true,
        email: true,
        name: true,
        provider: true,
        password: false,
        created: true,
        updated: true,
      },
    });

    return createdUser;
  }

  async updatePassword(
    id: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const user = await this.db.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await this.hasher.compare(
      currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await this.hasher.hash(newPassword);

    return this.db.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  async updateUser(id: string, data: Partial<User>) {
    return this.db.user.update({ where: { id }, data });
  }

  async findUserByEmail({ email }: FindUserByEmailDto) {
    return this.db.user.findUnique({ where: { email } });
  }

  async deleteUserByEmail({ email }: FindUserByEmailDto) {
    return this.db.user.delete({ where: { email } });
  }

  async deleteAllUsers() {
    return this.db.user.deleteMany();
  }
}
