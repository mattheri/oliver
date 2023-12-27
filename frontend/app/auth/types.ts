import type { PartialBy } from "~/types";

import type { PROVIDER, USER_ACTION } from "./constants";

export type Credentials = {
  email: string;
  password: string;
};

export type EmailCredential = {
  email: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  provider: typeof PROVIDER[keyof typeof PROVIDER];
  accessToken: string;
  refreshToken: string;
};

export type UserWithPassword = User & {
  password: string;
};

export type UserDTO = Omit<PartialBy<User, "name">, "id"> & {
  password: string;
};

export type UserContextState = {
  isAuthenticated: boolean;
  user: User | null;
};

export type LoginResponse = Pick<User, "accessToken" | "refreshToken">;

export type UserActions = typeof USER_ACTION[keyof typeof USER_ACTION];

export type CanIContextState = {
  user?: User;
  canI: UserActions | null;
}
