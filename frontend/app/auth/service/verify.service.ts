import type { FormStrategyVerifyParams } from "remix-auth-form";

import { ERROR } from "../constants";
import type { User } from "../types";
import UserService from "./user.service";
import ValidatorService from "./validator.service";

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
  }: FormStrategyVerifyParams): Promise<User> {
    try {
      const email = this.validator.validateEmail(String(form.get("email")));
      const password = this.validator.validatePassword(
        String(form.get("password")),
      );

      if (form.has("passwordConfirm")) {
        const passwordConfirm = String(form.get("passwordConfirm"));

        if (password !== passwordConfirm) {
          throw new Error(ERROR.PASSWORD_DOES_NOT_MATCH);
        }
        
        return this.userService.register(email, password, passwordConfirm);
      }

      return this.userService.login(email, password);
    } catch (e) {
      const error = e as Error;

      switch (error.message) {
        default:
          throw new Error(ERROR.INVALID_CREDENTIALS);
      }
    }
  }
}
