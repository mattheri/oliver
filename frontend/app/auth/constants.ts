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
  LOCAL: "local",
};

export const ERROR = {
  INVALID_CREDENTIALS: "Invalid credentials",
};

export const ERROR_KEY = "authError";
