import type {
  Credentials,
  EmailCredential,
  User,
  UserDTO,
  UserWithPassword,
} from "../types";

import { client } from "~/http";

import Validator from "./validator.service";

import GET_USER_BY_EMAIL_QUERY from "../graphql/query/GetUserByEmailQuery";
import CREATE_USER_MUTATION from "../graphql/mutation/CreateUserMutation";

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
