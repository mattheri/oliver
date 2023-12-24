import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

import { createCookieSessionStorage } from "@remix-run/node";

import { ERROR_KEY, PROVIDER, SESSION_STORAGE_OPTIONS } from "../constants";
import type { User } from "../types";
import { FormVerifyService } from "./verify.service";

class FormAuthenticatorService {
  private static _instance: Authenticator<User>;

  static get sessionStorage() {
    return createCookieSessionStorage(SESSION_STORAGE_OPTIONS);
  }

  static get instance(): Authenticator<User> {
    if (this._instance) return this._instance;

    const authenticator = new Authenticator<User>(this.sessionStorage, {
      sessionErrorKey: ERROR_KEY,
      throwOnError: true,
    });
    const formVerifyService = new FormVerifyService();

    authenticator.use(
      new FormStrategy(formVerifyService.verify.bind(formVerifyService)),
      PROVIDER.LOCAL,
    );

    return (this._instance = authenticator);
  }
}

export const {
  instance: formAuthenticator,
  sessionStorage: { getSession },
} = FormAuthenticatorService;
