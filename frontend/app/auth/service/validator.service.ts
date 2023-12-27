import Joi from "joi";

import { PASSWORD_REGEX } from "../constants";

export default class ValidatorService {
  private readonly validator: typeof Joi;

  constructor(validator: typeof Joi = Joi) {
    this.validator = validator;
  }

  public validateEmail(email: string): string {
    return this.validator.string().email().required().validate(email).value;
  }

  public validatePassword(password: string): string {
    return this.validator
      .string()
      .pattern(PASSWORD_REGEX)
      .required()
      .validate(password).value;
  }
}
