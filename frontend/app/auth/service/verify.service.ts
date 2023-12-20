import type { FormStrategyVerifyParams } from "remix-auth-form";

import UserService from "./user.service";
import ValidatorService from "./validator.service";
import { User } from "../types";
import { ERROR, PROVIDER } from "../constants";

export class FormVerifyService {
  private readonly userService: UserService;
  private readonly validator: ValidatorService;

  constructor(
    userService = new UserService(),
    validator = new ValidatorService(),
  ) {
    this.userService = userService;
    this.validator = validator;
  }

  public async verify({
    form,
    context,
  }: FormStrategyVerifyParams): Promise<User> {
    try {
      const email = this.validator.validateEmail(String(form.get("email")));
      const password = this.validator.validatePassword(
        String(form.get("password")),
      );

      let user: (User & { password?: string }) | null = null;
      const userFromDb = await this.userService.getUser({ email });

      console.log(userFromDb);

      if (!userFromDb) {
        user = await this.userService.createUser({
          email,
          password,
          provider: PROVIDER.LOCAL,
        });
      } else {
        user = (await this.validator.compare(password, userFromDb.password))
          ? userFromDb
          : null;
      }

      if (!user) {
        throw new Error(ERROR.INVALID_CREDENTIALS);
      }

      delete user.password;
      return user as User;
    } catch (e) {
      throw new Error(ERROR.INVALID_CREDENTIALS);
    }
  }
}
