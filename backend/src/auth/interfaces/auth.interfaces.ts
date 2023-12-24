import { User } from '@prisma/client';

export interface JwtPayload {
  username: string;
  sub: string;
}

export type UserWithoutPassword = Omit<User, 'password'>;

export enum AuthorizationLevel {
  View = 'view',
  Edit = 'edit',
  Delete = 'delete',
}

export type CanIObjectArgs = {
  email: string;
  allowView?: string[];
  allowEdit?: string[];
  allowDelete?: string[];
  level: AuthorizationLevel;
  ownerEmail: string;
};

export type AddEmailToListArgs = {
  list: string[];
  email: string;
};
