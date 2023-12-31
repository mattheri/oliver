import {
  createHotContext
} from "/build/_shared/chunk-OGTFSPUD.js";

// app/common/constants/routes.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/common/constants/routes.ts"
  );
  import.meta.hot.lastModified = "1703119630107.2969";
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

export {
  ROUTES,
  USER_ROUTES,
  ROUTES_NAMES,
  USER_ROUTES_NAMES
};
//# sourceMappingURL=/build/_shared/chunk-VOXRDU2P.js.map
