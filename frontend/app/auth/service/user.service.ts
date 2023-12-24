import { client } from "~/http";

import { ERROR } from "../constants";
import CREATE_USER_MUTATION from "../graphql/mutation/CreateUserMutation";
import LOGIN_MUTATION from "../graphql/mutation/LoginMutation";
import REGISTER_MUTATION from "../graphql/mutation/RegisterMutation";
import GET_USER_BY_EMAIL_QUERY from "../graphql/query/GetUserByEmailQuery";
import type {
  Credentials,
  EmailCredential,
  User,
  UserDTO,
  UserWithPassword,
} from "../types";
import Validator from "./validator.service";

export default class UserService {
  private readonly client: typeof client;
  private readonly validator: Validator;

  constructor(
    httpClient: typeof client = client,
    validator: Validator = new Validator(),
  ) {
    this.client = httpClient;
    this.validator = validator;
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

  public async getUser({
    email,
  }: EmailCredential): Promise<UserWithPassword | null> {
    const { data } = await this.client.query<{ users: UserWithPassword[] }>(
      GET_USER_BY_EMAIL_QUERY,
      {
        variables: { email },
      },
    );

    return data?.users[0] ?? null;
  }

  public async validateCredentials(
    { password }: Credentials,
    user: UserWithPassword,
  ): Promise<boolean> {
    return this.validator.compare(password, user.password);
  }

  public async hashPassword(password: string): Promise<string> {
    return this.validator.hash(password);
  }

  public async createUser(user: UserDTO) {
    const hashedPassword = await this.hashPassword(user.password);

    const { data } = await this.client.mutate<{ insert_users_one: User }>(
      CREATE_USER_MUTATION,
      {
        variables: {
          email: user.email,
          name: user.name,
          password: hashedPassword,
          provider: user.provider,
        },
        invalidateCache: true,
      },
    );

    return data?.insert_users_one ?? null;
  }
}
