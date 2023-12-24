import * as crypto from "crypto";
import { promisify } from "util";

import Joi from "joi";

import { PASSWORD_REGEX } from "../constants";

export default class ValidatorService {
  private readonly validator: typeof Joi;
  private readonly hasher = promisify(crypto.scrypt);

  constructor(validator: typeof Joi = Joi) {
    this.validator = validator;
  }

  public async hash(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString("hex");
    const buffer = (await this.hasher(password, salt, 64)) as Buffer;

    return `${buffer.toString("hex")}.${salt}`;
  }

  public async compare(password: string, hash: string): Promise<boolean> {
    const [hashedPassword, salt] = hash.split(".");
    const hashedPasswordBuffer = Buffer.from(hashedPassword, "hex");
    const suppliedPasswordBuffer = (await this.hasher(
      password,
      salt,
      64
    )) as Buffer;

    return crypto.timingSafeEqual(hashedPasswordBuffer, suppliedPasswordBuffer);
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
