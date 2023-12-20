export const HTTP_ERROR = {
  INVALID_QUERY: "Invalid query",
  INVALID_VARIABLES: "Invalid variables",
} as const;

export const HTTP_HEADERS = {
  "Content-Type": "application/json",
  "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET ?? "",
} as const;

export const HTTP_METHOD = "POST" as const;

export const TIMEOUTS = {
  SHORT: 10000,
  DEFAULT: 20000,
  LONG: 30000,
};
