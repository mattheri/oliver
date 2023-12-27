import type { createCookieSessionStorage } from "@remix-run/node";

// export const PASSWORD_REGEX = new RegExp(
//   "^(?=.*[A-Za-zd])(?=.*d)[A-Za-zd]{8,}$",
// );

export const PASSWORD_REGEX = new RegExp(".*");

type SessionStorageOptions = Parameters<typeof createCookieSessionStorage>[0];

export const SESSION_STORAGE_NAME = "__session";
export const SESSION_STORAGE_SAME_SITE = "lax";
export const SESSION_STORAGE_PATH = "/";
export const SESSION_STORAGE_HTTP_ONLY = true;
export const SESSION_STORAGE_SECRETS = [process.env.SESSION_SECRET ?? "s3cr3t"];
export const SESSION_STORAGE_SECURE = process.env.NODE_ENV === "production";

export const SESSION_STORAGE_OPTIONS: SessionStorageOptions = {
  cookie: {
    name: SESSION_STORAGE_NAME,
    sameSite: SESSION_STORAGE_SAME_SITE,
    path: SESSION_STORAGE_PATH,
    httpOnly: SESSION_STORAGE_HTTP_ONLY,
    secrets: SESSION_STORAGE_SECRETS,
    secure: SESSION_STORAGE_SECURE,
  },
};

export const PROVIDER = {
  LOCAL: "LOCAL",
  GOOGLE: "GOOGLE",
  FACEBOOK: "FACEBOOK",
} as const;

export const ERROR = {
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  PASSWORD_DOES_NOT_MATCH: "PASSWORD_DOES_NOT_MATCH",
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  USER_NOT_LOGGED_IN: 'USER_NOT_LOGGED_IN',
} as const;

export const ERROR_KEY = "authError";

export const USER_ACTION = {
  VIEW: "VIEW",
  EDIT: "EDIT",
  DELETE: "DELETE",
} as const;
