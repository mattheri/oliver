import type { DeepPartial, PartialBy } from "~/types";

import type { PROVIDER } from "./constants";

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

export type UserContextState = DeepPartial<User> & {
  isAuthenticated: boolean;
};

export type LoginResponse = Pick<User, "accessToken" | "refreshToken">;
