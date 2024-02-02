import {
  createHotContext
} from "/build/_shared/chunk-EF32OAUC.js";

// app/common/constants/routes.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\constants\\routes.ts"
  );
  import.meta.hot.lastModified = "1705974802860.2917";
}
var ROUTES = {
  INDEX: "/"
};
var USER_ROUTES = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/signup",
  PROFILE: "/profile",
  LOG_OUT: "/auth/logout"
};
var ROUTES_NAMES = {
  INDEX: "Home",
  LOGIN: "Login",
  SIGN_UP: "Sign Up"
};
var USER_ROUTES_NAMES = {
  LOGIN: "Login",
  SIGN_UP: "Sign Up",
  PROFILE: "Profile",
  LOG_OUT: "Log Out"
};
var PROTECTED_ROUTES = {
  ...ROUTES,
  LOG_OUT: USER_ROUTES.LOG_OUT
};
var PROTECTED_ROUTES_ARRAY = Object.values(
  PROTECTED_ROUTES
);

export {
  ROUTES,
  USER_ROUTES,
  ROUTES_NAMES,
  USER_ROUTES_NAMES
};
//# sourceMappingURL=/build/_shared/chunk-QLFRGZQC.js.map
