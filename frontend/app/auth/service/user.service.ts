import { client } from "~/http";

import { ERROR } from "../constants";
import LOGIN_MUTATION from "../graphql/mutation/LoginMutation";
import REGISTER_MUTATION from "../graphql/mutation/RegisterMutation";
import type {
  User,
} from "../types";

export default class UserService {
  private readonly client: typeof client;

  constructor(
    httpClient: typeof client = client,
  ) {
    this.client = httpClient;
  }

  public async login(email: string, password: string): Promise<User> {
    const { data, errors } = await this.client.mutate<{ login: User }>(
      LOGIN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          }
        }
      }
    );

    if (errors && errors.length) {
      const error = errors[0].message;

      switch (error) {
        case ERROR.INVALID_CREDENTIALS:
          throw new Error(ERROR.INVALID_CREDENTIALS);
        case ERROR.USER_NOT_FOUND:
          throw new Error(ERROR.USER_NOT_FOUND);
        default:
          throw new Error(error);
      }
    }

    return data!.login;
  }

  public async register(email: string, password: string, passwordCheck: string): Promise<User> {
    const { data, errors } = await this.client.mutate<{ register: User }>(
      REGISTER_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
            passwordCheck,
          }
        }
      }
    );

    if (errors && errors.length) {
      const error = errors[0].message;

      switch (error) {
        case ERROR.PASSWORD_DOES_NOT_MATCH:
          throw new Error(ERROR.PASSWORD_DOES_NOT_MATCH);
        case ERROR.USER_ALREADY_EXISTS:
          throw new Error(ERROR.USER_ALREADY_EXISTS);
        default:
          throw new Error(error);
      }
    }

    return data!.register;
  }
}
