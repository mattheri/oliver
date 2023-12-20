import type { DeepPartial, PartialBy } from "~/types";

export type Credentials = {
  email: string;
  password: string;
};

export type EmailCredential = {
  email: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  provider: string;
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
