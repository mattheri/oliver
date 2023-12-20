import { User } from '@prisma/client';

export interface JwtPayload {
  username: string;
  sub: string;
}

export type UserWithoutPassword = Omit<User, 'password'>;
