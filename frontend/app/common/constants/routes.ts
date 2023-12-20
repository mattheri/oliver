export const ROUTES = {
  INDEX: "/",
} as const;

export const USER_ROUTES = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/signup",
  PROFILE: "/profile",
  LOG_OUT: "/auth/logout",
} as const;

export const ROUTES_NAMES = {
  INDEX: "Home",
  LOGIN: "Login",
  SIGN_UP: "Sign Up",
} as const;

export const USER_ROUTES_NAMES = {
  LOGIN: "Login",
  SIGN_UP: "Sign Up",
  PROFILE: "Profile",
  LOG_OUT: "Log Out",
} as const;

export type Routes = typeof ROUTES;
