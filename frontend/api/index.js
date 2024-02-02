var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\mathi\Documents\Projects\oliver\frontend\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\mathi\\Documents\\Projects\\oliver\\frontend\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 52,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleDataRequest(response, { request }) {
  return request.url === process.env.API_ENDPOINT && request.method === "POST" && process.env.HASURA_ADMIN_SECRET && (response.headers.set("Content-Type", "application/json"), response.headers.set(
    "x-hasura-admin-secret",
    process.env.HASURA_ADMIN_SECRET
  )), response;
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6XI2ZFFV.css";

// app/root.tsx
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react26 = require("@remix-run/react");

// app/auth/service/authenticator.service.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_form = require("remix-auth-form"), import_node2 = require("@remix-run/node");

// app/auth/constants.ts
var PASSWORD_REGEX = new RegExp(".*"), SESSION_STORAGE_NAME = "__session", SESSION_STORAGE_SAME_SITE = "lax", SESSION_STORAGE_PATH = "/", SESSION_STORAGE_HTTP_ONLY = !0, SESSION_STORAGE_SECRETS = [process.env.SESSION_SECRET ?? "s3cr3t"], SESSION_STORAGE_SECURE = !1, SESSION_STORAGE_OPTIONS = {
  cookie: {
    name: SESSION_STORAGE_NAME,
    sameSite: SESSION_STORAGE_SAME_SITE,
    path: SESSION_STORAGE_PATH,
    httpOnly: SESSION_STORAGE_HTTP_ONLY,
    secrets: SESSION_STORAGE_SECRETS,
    secure: SESSION_STORAGE_SECURE
  }
}, PROVIDER = {
  LOCAL: "LOCAL",
  GOOGLE: "GOOGLE",
  FACEBOOK: "FACEBOOK"
}, ERROR = {
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  PASSWORD_DOES_NOT_MATCH: "PASSWORD_DOES_NOT_MATCH",
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  USER_NOT_LOGGED_IN: "USER_NOT_LOGGED_IN"
}, ERROR_KEY = "authError";

// app/http/utils/BaseCache.ts
var BaseCache = class {
  constructor(timeout) {
    this.cache = /* @__PURE__ */ new Map();
    this.timeout = timeout;
  }
  invalidate(key) {
    Date.now() - this.cache.get(key).timestamp > this.timeout && this.cache.delete(key);
  }
  createKey(key, variables = {}) {
    return Buffer.from(JSON.stringify({ key, variables })).toString("base64");
  }
  get({ query, variables }) {
    var _a;
    let internalKey = this.createKey(query, variables);
    return this.cache.has(internalKey) && this.invalidate(internalKey), ((_a = this.cache.get(internalKey)) == null ? void 0 : _a.value) ?? null;
  }
  set({ query, variables, domain }, value) {
    let internalKey = this.createKey(query, variables);
    return this.cache.set(internalKey, {
      value,
      timestamp: Date.now(),
      domain
    }), value;
  }
  forceInvalidationByDomain(domain) {
    this.cache.forEach((value, key) => {
      value.domain === domain && this.cache.delete(key);
    });
  }
};

// app/http/utils/CacheCustom.ts
var CacheCustom = class extends BaseCache {
  constructor(timeout) {
    super(timeout);
  }
};

// app/http/constants.ts
var HTTP_ERROR = {
  INVALID_QUERY: "Invalid query",
  INVALID_VARIABLES: "Invalid variables"
}, HTTP_HEADERS = {
  "Content-Type": "application/json"
}, HTTP_METHOD = "POST", TIMEOUTS = {
  SHORT: 1e4,
  DEFAULT: 2e4,
  LONG: 3e4
};

// app/http/utils/CacheDefault.ts
var CacheDefault = class extends BaseCache {
  constructor() {
    super(TIMEOUTS.DEFAULT);
  }
};

// app/http/utils/CacheLong.ts
var CacheLong = class extends BaseCache {
  constructor() {
    super(TIMEOUTS.LONG);
  }
};

// app/http/utils/CacheShort.ts
var CacheShort = class extends BaseCache {
  constructor() {
    super(TIMEOUTS.SHORT);
  }
};

// app/http/utils/Cache.ts
var _Cache = class {
  static Short() {
    return _Cache.shortCache || (_Cache.shortCache = new CacheShort()), _Cache.shortCache;
  }
  static Default() {
    return _Cache.defaultCache || (_Cache.defaultCache = new CacheDefault()), _Cache.defaultCache;
  }
  static Long() {
    return _Cache.longCache || (_Cache.longCache = new CacheLong()), _Cache.longCache;
  }
  static Custom(timeout) {
    return _Cache.customCaches.has(timeout) || _Cache.customCaches.set(timeout, new CacheCustom(timeout)), _Cache.customCaches.get(timeout);
  }
  static invalidateByDomain(domain) {
    var _a, _b, _c;
    (_a = _Cache.shortCache) == null || _a.forceInvalidationByDomain(domain), (_b = _Cache.longCache) == null || _b.forceInvalidationByDomain(domain), (_c = _Cache.defaultCache) == null || _c.forceInvalidationByDomain(domain), _Cache.customCaches.forEach((cache) => {
      cache.forceInvalidationByDomain(domain);
    });
  }
}, Cache = _Cache;
Cache.customCaches = /* @__PURE__ */ new Map();

// app/http/utils/Mutation.ts
var Mutation = class {
  constructor(base, query, options, cache = Cache) {
    this.options = {};
    this.base = base, this.query = query, this.options = options || {}, this.cache = cache;
  }
  async execute() {
    if (typeof this.query != "string")
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    if (this.options.variables && typeof this.options.variables != "object")
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`
      );
    let body = JSON.stringify({
      query: this.query,
      variables: this.options.variables
    }), headers = this.options.headers || {}, response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: {
        ...HTTP_HEADERS,
        ...headers
      },
      body
    });
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  }
};

// app/http/utils/Query.ts
var Query = class {
  constructor(base, query, options) {
    this.options = {};
    this.base = base, this.query = query, this.options = options || {}, this.cache = this.options.cache || Cache.Default();
  }
  async execute() {
    if (typeof this.query != "string")
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    if (this.options.variables && typeof this.options.variables != "object")
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`
      );
    let cached = this.cache.get({
      query: this.query,
      variables: this.options.variables
    });
    if (cached)
      return cached;
    let body = JSON.stringify({
      query: this.query,
      variables: this.options.variables
    }), headers = this.options.headers || {}, response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: {
        ...headers,
        ...HTTP_HEADERS
      },
      body
    });
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  }
};

// app/http/utils/Http.ts
var Http = class {
  constructor(base = process.env.API_URL ?? "") {
    this.base = base;
    this.base = base;
  }
  query(query, options) {
    return new Query(this.base, query, options).execute();
  }
  mutate(query, options) {
    return new Mutation(this.base, query, options).execute();
  }
};

// app/http/utils/client.ts
var client = new Http(process.env.API_URL ?? "");

// app/http/service/loader.service.ts
var LoaderService = class {
  get isClient() {
    return typeof window < "u";
  }
  async fromClient({
    route,
    method,
    headers,
    signal,
    onRequestStart,
    onRequestEnd,
    onError,
    canRequest = !0
  }) {
    try {
      if (!canRequest)
        return;
      onRequestStart && onRequestStart();
      let origin = window.location.origin, url = new URL(route, origin), headerObj = Object.fromEntries(headers ?? []), response = await fetch(url.toString(), {
        method: method ?? "GET",
        headers: {
          "Content-Type": "application/json",
          ...headerObj
        },
        signal
      });
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return await response.json();
    } catch (e) {
      let error = e;
      console.error(error), onError && onError(error);
    } finally {
      onRequestEnd && onRequestEnd();
    }
  }
  async fromServer({
    route,
    method,
    headers,
    request
  }) {
    try {
      let origin = new URL(request.url).origin, url = new URL(route, origin), headerObj = Object.fromEntries(headers ?? []), response = await fetch(url.toString(), {
        method: method ?? "GET",
        headers: {
          "Content-Type": "application/json",
          ...headerObj
        }
      });
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
};

// app/http/hooks/useClientLoader.ts
var import_react2 = require("react");
function useClientLoader() {
  let [loading, setLoading] = (0, import_react2.useState)(!1), [error, setError] = (0, import_react2.useState)(void 0), controller = (0, import_react2.useRef)(new AbortController()), canDo = (0, import_react2.useRef)(!0), onRequestStart = (0, import_react2.useCallback)(() => {
    setLoading(!0), canDo.current = !1;
  }, []), onRequestEnd = (0, import_react2.useCallback)(() => {
    setLoading(!1);
  }, []), onError = (0, import_react2.useCallback)((error2) => {
    setError(error2);
  }, []), loaderService = (0, import_react2.useMemo)(() => new LoaderService(), []);
  return { loader: (0, import_react2.useCallback)(
    (args) => {
      let { signal } = controller.current;
      return loaderService.fromClient({
        ...args,
        signal,
        onRequestStart,
        onRequestEnd,
        onError,
        canRequest: canDo.current
      });
    },
    [loaderService]
  ), loading, error, abort: controller.current.abort };
}

// app/common/store/AppContext/AppContext.ts
var import_react3 = require("react");

// app/common/constants/theme.ts
var BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
}, THEME = {
  BREAKPOINTS
};

// app/common/constants/modals.ts
var MODALS = {
  MENU: "menu",
  LOGIN: "login"
};

// app/common/constants/routes.ts
var ROUTES = {
  INDEX: "/"
}, USER_ROUTES = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/signup",
  PROFILE: "/profile",
  LOG_OUT: "/auth/logout"
}, ROUTES_NAMES = {
  INDEX: "Home",
  LOGIN: "Login",
  SIGN_UP: "Sign Up"
}, USER_ROUTES_NAMES = {
  LOGIN: "Login",
  SIGN_UP: "Sign Up",
  PROFILE: "Profile",
  LOG_OUT: "Log Out"
}, PROTECTED_ROUTES = {
  ...ROUTES,
  LOG_OUT: USER_ROUTES.LOG_OUT
}, PROTECTED_ROUTES_ARRAY = Object.values(
  PROTECTED_ROUTES
);

// app/common/store/AppContext/AppContext.ts
var initialModalState = Object.keys(MODALS).reduce((acc, key) => (acc[MODALS[key]] = !1, acc), {}), initialDataState = {
  recipes: []
}, AppContext = (0, import_react3.createContext)({
  modals: {
    state: initialModalState,
    dispatch: () => {
    }
  },
  data: {
    state: initialDataState,
    dispatch: () => {
    }
  }
}), AppContext_default = AppContext;

// app/common/store/AppContext/AppContext.Provider.tsx
var import_react4 = require("react");

// app/common/store/AppContext/modalsReducer.ts
var Action = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};
function modalsReducer(state, action3) {
  switch (action3.type) {
    case Action.OPEN_MODAL:
      return {
        ...state,
        [action3.payload.modalId]: !0
      };
    case Action.CLOSE_MODAL:
      return {
        ...state,
        [action3.payload.modalId]: !1
      };
    default:
      throw new Error("Invalid action type");
  }
}

// app/common/store/AppContext/dataReducer.ts
var Action2 = {
  UPDATE_RECIPES: "UPDATE_RECIPES",
  UPDATE_RECIPE: "UPDATE_RECIPE"
};
function dataReducer(state, action3) {
  switch (action3.type) {
    case Action2.UPDATE_RECIPES:
      return {
        ...state,
        recipes: action3.payload.recipes
      };
    case Action2.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => recipe.id === action3.payload.recipe.id ? action3.payload.recipe : recipe)
      };
    default:
      throw new Error("Invalid action type");
  }
}

// app/common/store/AppContext/AppContext.Provider.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function AppContextProvider({ children, recipes = [] }) {
  let [modalsState, dispatchModalsState] = (0, import_react4.useReducer)(
    modalsReducer,
    initialModalState
  ), [dataState, dispatchDataState] = (0, import_react4.useReducer)(dataReducer, {
    ...initialDataState,
    recipes
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    AppContext_default.Provider,
    {
      value: {
        modals: { state: modalsState, dispatch: dispatchModalsState },
        data: { state: dataState, dispatch: dispatchDataState }
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/common/store/AppContext/AppContext.Provider.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/ActionCard/ActionCard.tsx
var import_react9 = require("@remix-run/react"), import_tailwind_merge3 = require("tailwind-merge"), import_cva3 = require("cva");

// app/common/components/Heading/Heading.tsx
var import_tailwind_merge = require("tailwind-merge");

// app/common/components/Heading/Heading.style.ts
var import_cva = require("cva"), heading = (0, import_cva.cva)("font-semibold text-gray-900", {
  variants: {
    intent: {
      h1: "text-3xl mb-1",
      h2: "text-2xl mb-1",
      h3: "text-xl mb-1",
      h4: "text-lg mb-1",
      h5: "text-base mb-1",
      h6: "text-sm mb-1"
    }
  }
});

// app/common/components/Heading/Heading.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Heading({
  className,
  intent,
  as: As = "h1",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    As,
    {
      className: (0, import_tailwind_merge.twMerge)(heading({ intent: intent ?? "h1" }), className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Heading/Heading.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/If/If.tsx
var import_react5 = require("react");

// app/common/components/If/Then.tsx
function Then({ children }) {
  return children;
}

// app/common/components/If/Else.tsx
function Else({ children }) {
  return children;
}

// app/common/components/If/If.tsx
function findChildren(children, name) {
  return import_react5.Children.toArray(children).find((child) => typeof child == "object" && "type" in child && typeof child.type == "function" ? child.type.name === name : !1);
}
function If({ condition, children }) {
  return condition ? findChildren(children, "Then") : findChildren(children, "Else") ?? null;
}
var If_default = Object.assign(If, {
  Then,
  Else
});

// app/common/components/Button/Button.tsx
var import_tailwind_merge2 = require("tailwind-merge"), import_react8 = require("react");

// app/common/components/Link/Link.tsx
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Link = (0, import_react6.forwardRef)(function({ to, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { ref, to, ...props }, void 0, !1, {
    fileName: "app/common/components/Link/Link.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}), Link_default = Link;

// app/common/components/Button/Button.style.ts
var import_cva2 = require("cva"), button = (0, import_cva2.cva)(
  "rounded font-semibold shadow-sm flex items-center justify-center gap-2",
  {
    variants: {
      intent: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        secondary: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        link: "shadow-none text-indigo-600 hover:text-indigo-500",
        unstyled: "shadow-none"
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-2 py-1 text-sm",
        lg: "rounded-md px-2.5 py-1.5 text-sm",
        xl: "rounded-md px-3 py-2 text-sm"
      }
    },
    compoundVariants: [
      {
        intent: "link",
        className: "hover:underline text-base"
      }
    ]
  }
);

// app/common/components/Button/Button.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Button = (0, import_react8.forwardRef)(
  function({ to, className, intent, size, ...props }, ref) {
    return to ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Link_default,
      {
        to,
        className: (0, import_tailwind_merge2.twMerge)(
          button({
            intent: intent ?? "primary",
            size: size ?? "md",
            className
          })
        ),
        ...props,
        ref
      },
      void 0,
      !1,
      {
        fileName: "app/common/components/Button/Button.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        ref,
        className: (0, import_tailwind_merge2.twMerge)(
          button({
            intent: intent ?? "primary",
            size: size ?? "md",
            className
          })
        ),
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/common/components/Button/Button.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    );
  }
), Button_default = Button;

// app/common/components/ActionCard/ActionCard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ActionCard({
  to,
  action: action3,
  icon: Icon,
  background = "bg-blue-500",
  description,
  heading: heading2,
  className,
  ...props
}) {
  let navigate = (0, import_react9.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    Button_default,
    {
      intent: "unstyled",
      onClick: async () => {
        action3 && await action3(), to && navigate(to);
      },
      type: "button",
      className: "p-0",
      role: "link",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("article", { ...props, className: (0, import_tailwind_merge3.twMerge)("flow-root", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "focus-within:ring-indigo-500 hover:bg-gray-50 relative flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default, { condition: !!Icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            className: (0, import_tailwind_merge3.twMerge)(
              (0, import_cva3.cx)(
                "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg",
                { [background]: !!background }
              )
            ),
            children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              Icon,
              {
                className: (0, import_tailwind_merge3.twMerge)(
                  (0, import_cva3.cx)("h-6 w-6", {
                    "text-white": !!background
                  })
                )
              },
              void 0,
              !1,
              {
                fileName: "app/common/components/ActionCard/ActionCard.tsx",
                lineNumber: 65,
                columnNumber: 19
              },
              this
            ) : null
          },
          void 0,
          !1,
          {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 56,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/common/components/ActionCard/ActionCard.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/common/components/ActionCard/ActionCard.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-grow flex-col items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default, { condition: !!heading2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Heading, { as: "h3", intent: "h6", className: "text-left font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: heading2 }, void 0, !1, {
              fileName: "app/common/components/ActionCard/ActionCard.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, !1, {
              fileName: "app/common/components/ActionCard/ActionCard.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default, { condition: !!description, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1 text-left", children: description }, void 0, !1, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/common/components/ActionCard/ActionCard.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/common/components/ActionCard/ActionCard.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Drawer/Drawer.tsx
var import_react14 = require("@headlessui/react"), import_tailwind_merge7 = require("tailwind-merge");

// app/common/components/Drawer/Control.tsx
var import_react11 = require("react");

// app/common/hooks/useModal.ts
var import_react10 = require("react");
var useModal = (modalId) => {
  let { modals } = (0, import_react10.useContext)(AppContext_default), isOpen = modals.state[modalId], open = (0, import_react10.useCallback)(() => {
    modals.dispatch({ type: "OPEN_MODAL", payload: { modalId } });
  }, []), close = (0, import_react10.useCallback)(() => {
    modals.dispatch({ type: "CLOSE_MODAL", payload: { modalId } });
  }, []);
  return {
    isOpen,
    open,
    close
  };
};

// app/common/components/Drawer/Control.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Control({ modalId, children, ...props }) {
  let { isOpen, close, open } = useModal(modalId), Component = (0, import_react11.isValidElement)(children) ? import_react11.Children.only(children) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { ...props, children: import_react11.Children.only(children) }, void 0, !1, {
    fileName: "app/common/components/Drawer/Control.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
  return children ? (0, import_react11.cloneElement)(Component, {
    ...props,
    onClick: isOpen ? close : open
  }) : null;
}

// app/common/components/Drawer/Body.tsx
var import_tailwind_merge4 = require("tailwind-merge"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Body({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: (0, import_tailwind_merge4.twMerge)("flex-grow order-2", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Body.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/common/components/Drawer/Header.tsx
var import_tailwind_merge5 = require("tailwind-merge"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Header({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("header", { className: (0, import_tailwind_merge5.twMerge)("order-1", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Header.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/common/components/Drawer/Footer.tsx
var import_tailwind_merge6 = require("tailwind-merge"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Footer({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("footer", { className: (0, import_tailwind_merge6.twMerge)("order-3", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Footer.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/common/components/Drawer/Backdrop.tsx
var import_react12 = require("@headlessui/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Backdrop({
  className,
  isOpen,
  onClose,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react12.Transition,
    {
      show: isOpen,
      enterFrom: "opacity-0",
      enter: "opacity-100",
      leaveFrom: "opacity-100",
      leave: "opacity-0",
      as: "div",
      className: "bg-black fixed left-0 top-0 z-1 h-full w-full transform bg-opacity-40 backdrop-blur-[2px] duration-default ease-default",
      onClick: onClose,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Drawer/Backdrop.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Drawer/Drawer.style.ts
var import_cva4 = require("cva"), drawer = (0, import_cva4.cva)("bg-white flex flex-col fixed p-4 z-1", {
  variants: {
    position: {
      top: "top-0",
      bottom: "bottom-0",
      left: "left-0",
      right: "right-0"
    }
  },
  compoundVariants: [
    {
      position: ["top", "bottom"],
      className: "h-[min(400px,_100dvh)] left-0 overflow-y-auto overflow-x-hidden w-full"
    },
    {
      position: ["left", "right"],
      className: "h-full overflow-y-hidden overflow-x-auto w-[min(400px,_100%)] top-0"
    }
  ]
}), getTransition = (position) => ({
  enterFrom: (0, import_cva4.cx)({
    "-translate-y-full": position === "top",
    "translate-y-full": position === "bottom",
    "-translate-x-full": position === "left",
    "translate-x-full": position === "right"
  }),
  enterTo: (0, import_cva4.cx)({
    "translate-y-0": position === "top",
    "-translate-y-0": position === "bottom",
    "translate-x-0": position === "left",
    "-translate-x-0": position === "right"
  }),
  enter: "transform-gpu transition-transform ease-default duration-default",
  leave: "transform-gpu transition-transform ease-default duration-default",
  leaveFrom: (0, import_cva4.cx)({
    "translate-y-0": position === "top",
    "-translate-y-0": position === "bottom",
    "translate-x-0": position === "left",
    "-translate-x-0": position === "right"
  }),
  leaveTo: (0, import_cva4.cx)({
    "-translate-y-full": position === "top",
    "translate-y-full": position === "bottom",
    "-translate-x-full": position === "left",
    "translate-x-full": position === "right"
  })
});

// app/common/hooks/useKeyboard.ts
var import_react13 = require("react");

// app/common/utils/PubSub.ts
var PubSub = class {
  constructor(events2) {
    this.listeners = new Map(
      Object.values(events2).map((event) => [event, []])
    );
  }
  on(event, callback) {
    var _a;
    this.listeners.has(event) || this.listeners.set(event, []), (_a = this.listeners.get(event)) == null || _a.push(callback);
  }
  off(event, callback) {
    if (!this.listeners.has(event))
      return;
    let callbacks = this.listeners.get(event);
    !callbacks || !callbacks.length || this.listeners.set(
      event,
      callbacks.filter((cb) => cb !== callback)
    );
  }
  emit(event, ...args) {
    if (!this.listeners.has(event))
      return;
    let callbacks = this.listeners.get(event);
    !callbacks || !callbacks.length || callbacks.forEach((callback) => callback(...args));
  }
};

// app/common/utils/KeyboardRegistry.ts
var events = {}, KeyboardRegistry = class {
  static get instance() {
    return this._instance || (this._instance = new KeyboardRegistry());
  }
  constructor(pubSub = new PubSub(events)) {
    this.pubSub = pubSub;
  }
  register(key, callback) {
    this.pubSub.on(key, callback);
  }
  unregister(key, callback) {
    this.pubSub.off(key, callback);
  }
  emit(key, ...args) {
    this.pubSub.emit(key, ...args);
  }
}, keyboardRegistry = KeyboardRegistry.instance;

// app/common/hooks/useKeyboard.ts
var useKeyboard = ({ fn, key }) => {
  let onKeyDown = (0, import_react13.useCallback)(
    (event) => key && event.key === key ? keyboardRegistry.emit(key, event) : fn(event),
    [fn, key]
  );
  (0, import_react13.useEffect)(() => (key && keyboardRegistry.register(key, fn), window.addEventListener("keydown", onKeyDown), () => {
    key && keyboardRegistry.unregister(key, fn), window.removeEventListener("keydown", onKeyDown);
  }), [fn, key]);
};

// app/common/components/Drawer/Drawer.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Drawer = ({
  modalId,
  position,
  className,
  children,
  ...props
}) => {
  let { isOpen, close } = useModal(modalId);
  return useKeyboard({
    key: "Escape",
    fn: close
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Backdrop, { isOpen, onClose: close }, void 0, !1, {
      fileName: "app/common/components/Drawer/Drawer.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react14.Transition,
      {
        ...getTransition(position ?? "right"),
        show: isOpen,
        as: "aside",
        ...props,
        className: (0, import_tailwind_merge7.twMerge)(
          drawer({ position: position ?? "right", className })
        ),
        children
      },
      void 0,
      !1,
      {
        fileName: "app/common/components/Drawer/Drawer.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/common/components/Drawer/Drawer.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, Drawer_default = Object.assign(Drawer, { Control, Header, Body, Footer });

// app/common/components/Image/getImageAspectRatio.ts
function getSmallestCommonDenominator(a, b) {
  return b === 0 ? a : getSmallestCommonDenominator(b, a % b);
}
function getImageAspectRatio(width, height) {
  if (width && height) {
    let w = Number(width), h = Number(height), scd = getSmallestCommonDenominator(w, h);
    return `${w / scd}/${h / scd}`;
  }
  return "unset";
}

// app/common/components/Image/getImageSizes.ts
function getImageSizes(sizes) {
  return sizes == null ? void 0 : sizes.map((size) => `${size.src} ${size.width}w`).join(", ");
}

// app/common/components/Image/Image.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Image({ src, alt, width, height, loading = "lazy", sizes, forceAspectRatio = !0, ...rest }) {
  let aspectRatio = getImageAspectRatio(width, height), imageSizes = getImageSizes(sizes);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "img",
    {
      ...rest,
      src,
      alt,
      width,
      height,
      loading,
      sizes: imageSizes,
      style: forceAspectRatio ? { aspectRatio } : {}
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Image/Image.tsx",
      lineNumber: 17,
      columnNumber: 3
    },
    this
  );
}

// app/common/components/Input/Input.tsx
var import_react15 = require("react"), import_cva6 = require("cva"), import_tailwind_merge10 = require("tailwind-merge");

// app/common/components/Input/InputLabel.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function InputLabel({ label, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(If_default, { condition: !!label, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "label",
    {
      ...props,
      className: "text-sm text-gray-900 block font-medium leading-6",
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Input/InputLabel.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/common/components/Input/InputLabel.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputLabel.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/InputHelperText.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function InputHelperText({ helperText, id }) {
  let label = id ? `${id} helper text` : "helper text", $id = id ? `${id}-helper-text` : "helper-text";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(If_default, { condition: !!helperText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-sm text-gray-500 mt-2", id: $id, "aria-label": label, children: helperText }, void 0, !1, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/InputCornerHint.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function InputCornerHint({ cornerHint, id, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(If_default, { condition: !!cornerHint, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { ...props, className: "text-sm text-gray-500 leading-6", children: cornerHint }, void 0, !1, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/InputLeadingContainer.tsx
var import_tailwind_merge8 = require("tailwind-merge");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function InputLeadingContainer({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(If_default, { condition: !!children, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge8.twMerge)(
        "absolute inset-y-0 left-0 flex items-center pl-3",
        className
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Input/InputLeadingContainer.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/common/components/Input/InputLeadingContainer.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputLeadingContainer.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/InputTrailingContainer.tsx
var import_tailwind_merge9 = require("tailwind-merge");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function InputTrailingContainer({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(If_default, { condition: !!children, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge9.twMerge)(
        "absolute inset-y-0 right-0 flex items-center pr-3",
        className
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Input/InputTrailingContainer.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/common/components/Input/InputTrailingContainer.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Input/InputTrailingContainer.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/Input.style.ts
var import_cva5 = require("cva"), input = (0, import_cva5.cva)(
  "isolate text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 invalid:ring-red-300 invalid:placeholder:text-red-300 focus:ring-2 focus:ring-inset invalid:focus:ring-red-500 disabled:cursor-not-allowed sm:leading-6"
);

// app/common/components/Input/Input.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), Input_default = (0, import_react15.forwardRef)(function({
  label,
  helpText,
  id,
  name,
  type,
  cornerHint,
  leading,
  leadingContainerProps,
  trailing,
  trailingContainerProps,
  className,
  placeholder,
  ...props
}, ref) {
  let nameOrId = name ?? id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputLabel, { htmlFor: nameOrId, label }, void 0, !1, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputCornerHint, { cornerHint }, void 0, !1, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputLeadingContainer, { ...leadingContainerProps, children: leading }, void 0, !1, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "input",
        {
          ref,
          type: type ?? "text",
          name: nameOrId,
          id: nameOrId,
          className: (0, import_tailwind_merge10.twMerge)(
            input({
              className: (0, import_cva6.cx)({ "pl-10": !!leading, "pr-10": !!trailing })
            }),
            className
          ),
          placeholder,
          "aria-describedby": `${nameOrId}-description`,
          ...props
        },
        void 0,
        !1,
        {
          fileName: "app/common/components/Input/Input.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputTrailingContainer, { ...trailingContainerProps, children: trailing }, void 0, !1, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputHelperText, { helperText: helpText, id: nameOrId }, void 0, !1, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/Input/Input.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
});

// app/common/components/Loader/Loader.tsx
var import_cva8 = require("cva"), import_tailwind_merge11 = require("tailwind-merge");

// app/common/components/Loader/Loader.style.ts
var import_cva7 = require("cva"), variants = (0, import_cva7.cva)("", {
  variants: {
    size: {
      default: "h-3 w-3",
      large: "h-5 w-5",
      huge: "h-10 w-10"
    },
    color: {
      blue: "text-blue-500",
      yellow: "text-yellow-500",
      red: "text-red-500",
      green: "text-green-500",
      white: "text-white"
    }
  }
}), Loader_style_default = variants;

// app/common/components/Loader/Loader.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Loader({
  show,
  className,
  size,
  color,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(If_default, { condition: show, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge11.twMerge)(
        (0, import_cva8.cx)(
          "absolute flex h-full w-full items-center justify-center",
          className
        )
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "div",
        {
          role: "status",
          className: (0, import_tailwind_merge11.twMerge)(
            "animate-spin",
            Loader_style_default({ size: size ?? "default", color: color ?? "blue" })
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "svg",
              {
                "aria-hidden": "true",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    "path",
                    {
                      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                      fill: "currentColor",
                      opacity: "0.3"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/common/components/Loader/Loader.tsx",
                      lineNumber: 48,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    "path",
                    {
                      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                      fill: "currentColor"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/common/components/Loader/Loader.tsx",
                      lineNumber: 53,
                      columnNumber: 15
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/common/components/Loader/Loader.tsx",
                lineNumber: 42,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
              fileName: "app/common/components/Loader/Loader.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/common/components/Loader/Loader.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Loader/Loader.tsx",
      lineNumber: 26,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/common/components/Menu/Menu.tsx
var import_md = require("react-icons/md");
var import_react18 = require("@remix-run/react");

// app/auth/hooks/useIsAuthenticated.ts
var import_react17 = require("react");

// app/auth/store/UserContext/UserContext.ts
var import_react16 = require("react"), UserContext = (0, import_react16.createContext)({
  isAuthenticated: !1,
  user: null
}), UserContext_default = UserContext;

// app/auth/hooks/useIsAuthenticated.ts
function useIsAuthenticated() {
  let { isAuthenticated } = (0, import_react17.useContext)(UserContext_default);
  return isAuthenticated;
}

// app/auth/components/AuthNavMenu/AuthNavMenu.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function AuthNavMenu() {
  let routes2 = useIsAuthenticated() ? { PROFILE: USER_ROUTES.PROFILE, LOG_OUT: USER_ROUTES.LOG_OUT } : { LOGIN: USER_ROUTES.LOGIN, SIGN_UP: USER_ROUTES.SIGN_UP };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(VNavigation_default.Secondary, { title: "Profile", children: Object.entries(routes2).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    VNavigation_default.Item,
    {
      to: value,
      name: USER_ROUTES_NAMES[key]
    },
    key,
    !1,
    {
      fileName: "app/auth/components/AuthNavMenu/AuthNavMenu.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/auth/components/AuthNavMenu/AuthNavMenu.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/common/components/Menu/Menu.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Menu() {
  let location = (0, import_react18.useLocation)(), canRender = ![
    USER_ROUTES.LOGIN,
    USER_ROUTES.SIGN_UP,
    USER_ROUTES.LOG_OUT
  ].some((route) => location.pathname === route), { close } = useModal(MODALS.MENU);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default, { condition: canRender, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default.Then, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button_default, { intent: "unstyled", className: "fixed left-4 top-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_md.MdMenu, { size: "2rem" }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Drawer_default, { modalId: MODALS.MENU, position: "left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Drawer_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button_default, { intent: "unstyled", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_md.MdClose, { size: "1rem" }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Drawer_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(VNavigation_default, { children: Object.entries(ROUTES).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          VNavigation_default.Item,
          {
            to: value,
            name: ROUTES_NAMES[key],
            onClick: close
          },
          key,
          !1,
          {
            fileName: "app/common/components/Menu/Menu.tsx",
            lineNumber: 38,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(AuthNavMenu, {}, void 0, !1, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/common/components/Toast/Toast.tsx
var import_outline = require("@heroicons/react/24/outline"), import_tailwind_merge15 = require("tailwind-merge");

// app/common/components/Toast/ToastAction.tsx
var import_tailwind_merge12 = require("tailwind-merge");

// app/common/components/Toast/ToastAction.style.ts
var import_cva9 = require("cva"), toastAction = (0, import_cva9.cva)(
  "rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        success: "bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50",
        warning: "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50",
        error: "bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50",
        info: "bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50"
      }
    }
  }
), ToastAction_style_default = toastAction;

// app/common/components/Toast/ToastAction.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ToastAction({
  intent,
  className,
  children,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "button",
    {
      ...props,
      type,
      className: (0, import_tailwind_merge12.twMerge)(
        ToastAction_style_default({ intent: intent ?? "success", className })
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Toast/ToastAction.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Toast/ToastHeading.tsx
var import_tailwind_merge13 = require("tailwind-merge");

// app/common/components/Toast/ToastHeading.style.ts
var import_cva10 = require("cva"), toastHeading = (0, import_cva10.cva)("font-medium text-sm", {
  variants: {
    intent: {
      info: "text-blue-800",
      success: "text-green-800",
      warning: "text-yellow-800",
      error: "text-red-800"
    }
  }
}), ToastHeading_style_default = toastHeading;

// app/common/components/Toast/ToastHeading.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ToastHeading({
  intent,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "p",
    {
      ...props,
      className: (0, import_tailwind_merge13.twMerge)(
        ToastHeading_style_default({ intent: intent ?? "success", className })
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Toast/ToastHeading.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Toast/ToastLink.tsx
var import_tailwind_merge14 = require("tailwind-merge");

// app/common/components/Toast/ToastLink.style.ts
var import_cva11 = require("cva"), toastLink = (0, import_cva11.cva)("whitespace-nowrap font-medium", {
  variants: {
    intent: {
      info: "text-blue-700 hover:text-blue-600",
      success: "text-green-700 hover:text-green-600",
      warning: "text-yellow-700 hover:text-yellow-600",
      error: "text-red-700 hover:text-red-600"
    }
  }
}), ToastLink_style_default = toastLink;

// app/common/components/Toast/ToastLink.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ToastLink({ intent, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Link_default,
    {
      ...props,
      className: (0, import_tailwind_merge14.twMerge)(ToastLink_style_default({ intent: intent ?? "success", className }))
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Toast/ToastLink.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Toast/Toast.style.ts
var import_cva12 = require("cva"), toast = (0, import_cva12.cva)("rounded-md p-4", {
  variants: {
    intent: {
      info: "bg-blue-50 text-blue-700 [&_.icon-container]:text-blue-400",
      success: "bg-green-50 text-green-700 [&_.icon-container]:text-green-400",
      warning: "bg-yellow-50 text-yellow-700 [&_.icon-container]:text-yellow-400",
      error: "bg-red-50 text-red-700  [&_.icon-container]:text-red-400"
    }
  }
}), Toast_style_default = toast;

// app/common/components/Toast/ToastProvider.tsx
var import_react_toastify = require("react-toastify"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), DEFAULT_TIMEOUT = 5e3, DEFAULT_LIMIT = 3, DEFAULT_POSITION = import_react_toastify.toast.POSITION.TOP_RIGHT, DEFAULT_TRANSITION = import_react_toastify.Slide, DEFAULT_AUTO_CLOSE_ON_CLICK = !1;
function ToastProvider({
  closeOnClick = DEFAULT_AUTO_CLOSE_ON_CLICK,
  limit = DEFAULT_LIMIT,
  autoClose = DEFAULT_TIMEOUT,
  transition = DEFAULT_TRANSITION,
  position = DEFAULT_POSITION,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_react_toastify.ToastContainer,
    {
      ...props,
      closeOnClick,
      limit,
      autoClose,
      transition,
      position
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Toast/ToastProvider.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Toast/Toast.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Toast({
  intent,
  className,
  children,
  icon,
  toastProps,
  closeToast,
  displayClose = !0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge15.twMerge)(Toast_style_default({ intent: intent ?? "success", className })),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(If_default, { condition: !!icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "icon-container flex-shrink-0", children: icon }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-grow flex-col gap-2", children }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(If_default, { condition: !!displayClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          ToastAction,
          {
            className: "flex-shrink-0 self-start",
            intent: intent ?? "success",
            onClick: closeToast,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_outline.XMarkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/common/components/Toast/Toast.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/common/components/Toast/Toast.tsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/common/components/Toast/Toast.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
var Toast_default = Object.assign(Toast, {
  Action: ToastAction,
  Heading: ToastHeading,
  Link: ToastLink,
  Provider: ToastProvider
});

// app/common/components/VNavigation/VNavigation.tsx
var import_tailwind_merge18 = require("tailwind-merge");

// app/common/components/VNavigation/VNavigationItem.tsx
var import_tailwind_merge16 = require("tailwind-merge"), import_cva13 = require("cva");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function VNavigationItem({
  name,
  to,
  current,
  icon: Icon,
  count,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    Link_default,
    {
      ...props,
      to,
      className: (0, import_tailwind_merge16.twMerge)(
        (0, import_cva13.cx)(
          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
          { "bg-gray-50 text-indigo-600": current },
          {
            "text-gray-700 hover:bg-gray-50 hover:text-indigo-600": !current
          }
        ),
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default, { condition: !!Icon, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default.Then, { children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            Icon,
            {
              className: (0, import_tailwind_merge16.twMerge)(
                (0, import_cva13.cx)("h-6 w-6 shrink-0", {
                  "text-indigo-600": current,
                  "text-gray-400 group-hover:text-indigo-600": !current
                })
              ),
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
              lineNumber: 45,
              columnNumber: 15
            },
            this
          ) : null }, void 0, !1, {
            fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "span",
            {
              className: (0, import_tailwind_merge16.twMerge)(
                (0, import_cva13.cx)(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                  { "border-indigo-600 text-indigo-600": current },
                  {
                    "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600": !current
                  }
                )
              ),
              children: name.slice(0, 1).toUpperCase()
            },
            void 0,
            !1,
            {
              fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
              lineNumber: 57,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "flex-grow", children: name }, void 0, !1, {
          fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default, { condition: !!count, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "span",
          {
            className: "ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200",
            "aria-hidden": "true",
            children: count
          },
          void 0,
          !1,
          {
            fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
            lineNumber: 76,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/common/components/VNavigation/VSecondaryNavigation.tsx
var import_tailwind_merge17 = require("tailwind-merge"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function VSecondaryNavigation({
  title,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("nav", { ...props, className: (0, import_tailwind_merge17.twMerge)("flex flex-1 flex-col", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-xs text-gray-400 font-semibold leading-6", children: title }, void 0, !1, {
      fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, !1, {
      fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/common/components/VNavigation/VNavigation.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function VNavigation({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("nav", { ...props, className: (0, import_tailwind_merge18.twMerge)("flex flex-1 flex-col", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, !1, {
    fileName: "app/common/components/VNavigation/VNavigation.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/VNavigation/VNavigation.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var VNavigation_default = Object.assign(VNavigation, {
  Item: VNavigationItem,
  Secondary: VSecondaryNavigation
});

// app/common/hooks/useToast.ts
var import_react19 = require("react"), import_react_toastify2 = require("react-toastify");
function useToast() {
  let ref = (0, import_react19.useRef)(null);
  return {
    id: ref.current,
    toast: (...args) => {
      ref = { current: (0, import_react_toastify2.toast)(...args) };
    },
    promise: import_react_toastify2.toast.promise
  };
}

// app/http/components/HttpState/HttpState.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function HttpState({ loading, error, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default, { condition: !!error, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: error == null ? void 0 : error.message }, void 0, !1, {
      fileName: "app/http/components/HttpState/HttpState.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/http/components/HttpState/HttpState.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default, { condition: loading, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Loader, { show: loading }, void 0, !1, {
        fileName: "app/http/components/HttpState/HttpState.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/http/components/HttpState/HttpState.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(If_default.Else, { children }, void 0, !1, {
        fileName: "app/http/components/HttpState/HttpState.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/http/components/HttpState/HttpState.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/http/components/HttpState/HttpState.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/http/components/HttpState/HttpState.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/auth/graphql/mutation/LoginMutation.ts
var LOGIN_MUTATION = `#graphql
	mutation Login($input: LoginDto!) {
		login(input: $input) {
			id
			email
			name
			accessToken
			refreshToken
		}
	}
`, LoginMutation_default = LOGIN_MUTATION;

// app/auth/graphql/mutation/RegisterMutation.ts
var REGISTER_MUTATION = `#graphql
	mutation Register($input: SignUpDto!) {
		register(input: $input) {
			id
			email
			name
			accessToken
			refreshToken
		}
	}
`, RegisterMutation_default = REGISTER_MUTATION;

// app/auth/service/user.service.ts
var UserService = class {
  constructor(httpClient = client) {
    this.client = httpClient;
  }
  async login(email, password) {
    let { data, errors } = await this.client.mutate(
      LoginMutation_default,
      {
        variables: {
          input: {
            email,
            password
          }
        }
      }
    );
    if (errors && errors.length) {
      let error = errors[0].message;
      switch (error) {
        case ERROR.INVALID_CREDENTIALS:
          throw new Error(ERROR.INVALID_CREDENTIALS);
        case ERROR.USER_NOT_FOUND:
          throw new Error(ERROR.USER_NOT_FOUND);
        default:
          throw new Error(error);
      }
    }
    return data.login;
  }
  async register(email, password, passwordCheck) {
    let { data, errors } = await this.client.mutate(
      RegisterMutation_default,
      {
        variables: {
          input: {
            email,
            password,
            passwordCheck
          }
        }
      }
    );
    if (errors && errors.length) {
      let error = errors[0].message;
      switch (error) {
        case ERROR.PASSWORD_DOES_NOT_MATCH:
          throw new Error(ERROR.PASSWORD_DOES_NOT_MATCH);
        case ERROR.USER_ALREADY_EXISTS:
          throw new Error(ERROR.USER_ALREADY_EXISTS);
        default:
          throw new Error(error);
      }
    }
    return data.register;
  }
};

// app/auth/service/validator.service.ts
var import_joi = __toESM(require("joi"));
var ValidatorService = class {
  constructor(validator = import_joi.default) {
    this.validator = validator;
  }
  validateEmail(email) {
    return this.validator.string().email().required().validate(email).value;
  }
  validatePassword(password) {
    return this.validator.string().pattern(PASSWORD_REGEX).required().validate(password).value;
  }
};

// app/auth/service/verify.service.ts
var FormVerifyService = class {
  constructor(userService = new UserService(), validator = new ValidatorService()) {
    this.userService = userService, this.validator = validator;
  }
  async verify({
    form
  }) {
    try {
      let email = this.validator.validateEmail(String(form.get("email"))), password = this.validator.validatePassword(
        String(form.get("password"))
      );
      if (form.has("passwordConfirm")) {
        let passwordConfirm = String(form.get("passwordConfirm"));
        if (password !== passwordConfirm)
          throw new Error(ERROR.PASSWORD_DOES_NOT_MATCH);
        return this.userService.register(email, password, passwordConfirm);
      }
      return this.userService.login(email, password);
    } catch (e) {
      switch (e.message) {
        default:
          throw new Error(ERROR.INVALID_CREDENTIALS);
      }
    }
  }
};

// app/auth/service/authenticator.service.ts
var FormAuthenticatorService = class {
  static get sessionStorage() {
    return (0, import_node2.createCookieSessionStorage)(SESSION_STORAGE_OPTIONS);
  }
  static get instance() {
    if (this._instance)
      return this._instance;
    let authenticator = new import_remix_auth.Authenticator(this.sessionStorage, {
      sessionErrorKey: ERROR_KEY,
      throwOnError: !0
    }), formVerifyService = new FormVerifyService();
    return authenticator.use(
      new import_remix_auth_form.FormStrategy(formVerifyService.verify.bind(formVerifyService)),
      PROVIDER.LOCAL
    ), this._instance = authenticator;
  }
}, {
  instance: formAuthenticator,
  sessionStorage: { getSession }
} = FormAuthenticatorService;

// app/auth/components/AccountSignIn/AccountSignIn.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function AccountSignIn() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Heading, { as: "h2", intent: "h1", children: "Create your account" }, void 0, !1, {
      fileName: "app/auth/components/AccountSignIn/AccountSignIn.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button_default, { to: "/auth/login", intent: "link", children: "Sign in" }, void 0, !1, {
        fileName: "app/auth/components/AccountSignIn/AccountSignIn.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/auth/components/AccountSignIn/AccountSignIn.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/auth/components/AccountSignIn/AccountSignIn.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/auth/components/LoginForm/LoginForm.tsx
var import_react_hook_form = require("react-hook-form");

// app/common/components/ErrorCard/ErrorCard.tsx
var import_react20 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function ErrorCard({
  heading: heading2,
  error,
  link,
  autoDismiss = 5e3
}) {
  let initialRenderState = !!error, [show, setShow] = (0, import_react20.useState)(initialRenderState), ref = (0, import_react20.useRef)(null), dismiss = () => {
    ref.current && (clearTimeout(ref.current), ref = { current: null }), setShow(!1);
  };
  return (0, import_react20.useEffect)(() => {
    if (initialRenderState && autoDismiss)
      return ref = { current: setTimeout(dismiss, autoDismiss) }, () => {
        ref.current && (clearTimeout(ref.current), ref = { current: null }), setShow(initialRenderState);
      };
  }, [initialRenderState, autoDismiss]), /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default, { condition: show, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Toast_default, { intent: "error", displayClose: !0, closeToast: dismiss, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default, { condition: !!heading2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Toast_default.Heading, { children: heading2 }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 55,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    error,
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default, { condition: !!link, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Toast_default.Link, { to: link == null ? void 0 : link.to, children: link == null ? void 0 : link.label }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 61,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/ErrorCard/ErrorCard.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/auth/components/LoginForm/LoginForm.tsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function LoginForm() {
  var _a;
  let fetcher = (0, import_react21.useFetcher)(), {
    register
  } = (0, import_react_hook_form.useForm)({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: ""
    }
  }), formError = (fetcher.state === "idle" && ((_a = fetcher.data) == null ? void 0 : _a.message)) ?? null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    fetcher.Form,
    {
      action: "/auth/actions",
      method: "POST",
      className: "row-gap-8 grid w-full grid-cols-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          Input_default,
          {
            ...register("email", { required: !0 }),
            type: "email",
            label: "Email",
            autoComplete: "username",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/LoginForm/LoginForm.tsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          Input_default,
          {
            ...register("password", { required: !0 }),
            type: "password",
            label: "Password",
            autoComplete: "password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/LoginForm/LoginForm.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(If_default, { condition: !!formError, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ErrorCard, { error: String(formError) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Button_default, { type: "submit", size: "lg", children: "Login" }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/auth/components/LoginForm/LoginForm.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/auth/components/NoAccountSignup/NoAccountSignup.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function NoAccountSignup() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Heading, { as: "h2", intent: "h1", children: "Sign in to your account" }, void 0, !1, {
      fileName: "app/auth/components/NoAccountSignup/NoAccountSignup.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button_default, { to: "/auth/signup", intent: "link", children: "Sign up" }, void 0, !1, {
        fileName: "app/auth/components/NoAccountSignup/NoAccountSignup.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/auth/components/NoAccountSignup/NoAccountSignup.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/auth/components/NoAccountSignup/NoAccountSignup.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/auth/components/SignupForm/SignupForm.tsx
var import_react_hook_form2 = require("react-hook-form");
var import_react22 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function SignupForm() {
  let fetcher = (0, import_react22.useFetcher)(), { register } = (0, import_react_hook_form2.useForm)({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    fetcher.Form,
    {
      action: "/auth/actions",
      method: "POST",
      className: "row-gap-8 grid w-full grid-cols-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Input_default,
          {
            ...register("email", { required: !0 }),
            type: "email",
            label: "Email",
            autoComplete: "username",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/SignupForm/SignupForm.tsx",
            lineNumber: 24,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Input_default,
          {
            ...register("password", { required: !0 }),
            helpText: "Password must contain at least one letter and one number and have at least 8 characters",
            type: "password",
            label: "Password",
            autoComplete: "new-password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/SignupForm/SignupForm.tsx",
            lineNumber: 31,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Input_default,
          {
            ...register("passwordConfirm", { required: !0 }),
            type: "password",
            label: "Re-type password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/SignupForm/SignupForm.tsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button_default, { type: "submit", size: "lg", children: "Sign up" }, void 0, !1, {
          fileName: "app/auth/components/SignupForm/SignupForm.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/auth/components/SignupForm/SignupForm.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/auth/store/UserContext/UserContext.Provider.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function UserContextProvider({
  user,
  isAuthenticated,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(UserContext_default.Provider, { value: { isAuthenticated, user }, children }, void 0, !1, {
    fileName: "app/auth/store/UserContext/UserContext.Provider.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/utils/formatGqlErrors.ts
var handleGqlErrors = (errors) => {
  var _a, _b;
  if (errors) {
    let formattedErrors = errors.map((error) => {
      var _a2, _b2, _c, _d;
      return console.error(error), (_b2 = (_a2 = error.extensions) == null ? void 0 : _a2.originalError) != null && _b2.message && console.error((_d = (_c = error.extensions) == null ? void 0 : _c.originalError) == null ? void 0 : _d.message), error.message;
    }).join(`
`);
    throw new Response(formattedErrors, {
      status: ((_b = (_a = errors[0].extensions) == null ? void 0 : _a.originalError) == null ? void 0 : _b.statusCode) || 500
    });
  }
};

// app/recipes/graphql/mutation/CreateRecipeMutation.ts
var CREATE_RECIPE_MUTATION = `#graphql
	mutation CreateRecipe($input: CreateRecipeDto!) {
		createRecipe(input: $input) {
			id
		}
	}
`, CreateRecipeMutation_default = CREATE_RECIPE_MUTATION;

// app/recipes/graphql/fragment/MinimalRecipeFragment.ts
var MINIMAL_RECIPE_FRAGMENT = `#graphql
	fragment recipeFields on Recipe {
		id
		title
		ingredients
		image {
			alt
			height
			width
			src
		}
		isExternalSrc
		isWishList
	}
`;

// app/recipes/graphql/query/RecipesQuery.ts
var RECIPES_QUERY = `#graphql
	query RecipesByUser {
		recipesByUser {
			...recipeFields
		}
	}

	${MINIMAL_RECIPE_FRAGMENT}
`, RecipesQuery_default = RECIPES_QUERY;

// app/recipes/service/recipes.service.ts
var RecipesService = class {
  static get instance() {
    return this.__instance || (this.__instance = new this());
  }
  constructor(httpClient = client) {
    this.client = httpClient;
  }
  async getRecipesByUser(options) {
    let { data } = await this.client.query(
      RecipesQuery_default,
      options
    );
    return (data == null ? void 0 : data.recipesByUser) || [];
  }
  async createRecipeAndAddToWishList(input2, headers) {
    let { data, errors } = await this.client.mutate(CreateRecipeMutation_default, {
      variables: {
        input: input2
      },
      headers
    });
    return handleGqlErrors(errors), data == null ? void 0 : data.createRecipe;
  }
  recipeToCreateRecipeDto(formData, key = "recipe") {
    let rawRecipe = String(formData.get(key));
    if (!rawRecipe)
      return null;
    let parsedRecipe = JSON.parse(rawRecipe), { id, userId, image, ...recipe } = parsedRecipe, { alt, ...img } = image;
    return {
      ...recipe,
      image: {
        ...img
      },
      allowDelete: recipe.allowDelete || [],
      allowEdit: recipe.allowEdit || [],
      allowView: recipe.allowView || []
    };
  }
}, recipes_service_default = RecipesService.instance;

// app/auth/utils/createBearerAccessTokenHeader.ts
var createBearerAccessTokenHeader = async (authenticator, request) => {
  let user = await authenticator.isAuthenticated(request);
  return user ? {
    Authorization: `Bearer ${user.accessToken}`
  } : {
    Authorization: ""
  };
};

// app/http/store/HttpContext.Provider.tsx
var import_react24 = require("@remix-run/react");

// app/http/store/HttpContext.ts
var import_react23 = require("react"), HttpContext = (0, import_react23.createContext)({
  url: new URL("http://localhost:3000")
}), HttpContext_default = HttpContext;

// app/http/store/HttpContext.Provider.tsx
var import_react25 = require("react"), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function HttpContextProvider({ children }) {
  let data = (0, import_react24.useRouteLoaderData)("root"), serverUrl = (0, import_react25.useMemo)(() => new URL(data.url), [data]), location = (0, import_react24.useLocation)(), [url, setUrl] = (0, import_react25.useState)(serverUrl);
  return (0, import_react25.useEffect)(() => {
    let clientUrl = new URL(location.pathname, serverUrl.origin);
    Object.entries(location).forEach(([key, value]) => {
      clientUrl[key] = value;
    }), setUrl(clientUrl);
  }, [location, serverUrl]), /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(HttpContext_default.Provider, { value: { url }, children }, void 0, !1, {
    fileName: "app/http/store/HttpContext.Provider.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }
];
async function loader({ request }) {
  let user = await formAuthenticator.isAuthenticated(request), recipes = await recipes_service_default.getRecipesByUser({
    headers: await createBearerAccessTokenHeader(formAuthenticator, request)
  }), isAuthenticated = !!user;
  return PROTECTED_ROUTES_ARRAY.includes(new URL(request.url).pathname) && !isAuthenticated ? (0, import_node3.redirect)(USER_ROUTES.LOGIN) : {
    user,
    isAuthenticated,
    recipes,
    url: request.url
  };
}
function App() {
  let { user, isAuthenticated, recipes } = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("body", { className: "text-body text-black-900 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(HttpContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(AppContextProvider, { recipes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(UserContextProvider, { isAuthenticated, user, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Menu, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react26.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx
var import_outline4 = require("@heroicons/react/24/outline");

// app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx
var import_react29 = require("react");

// app/common/components/Slider/Slider.tsx
var import_react27 = require("react"), import_react_slick = __toESM(require("react-slick"));

// app/common/components/Slider/SliderArrowNext.tsx
var import_tailwind_merge19 = require("tailwind-merge"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function SliderArrowNext({
  className,
  currentSlide,
  slideCount,
  additionalClassName,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    "button",
    {
      ...rest,
      className: (0, import_tailwind_merge19.twMerge)(
        "absolute right-1 top-1/2 z-1 h-fit w-fit -translate-y-1/2 rounded-full bg-white shadow-lg before:content-none hover:bg-white focus:bg-white focus:ring-1",
        className,
        additionalClassName
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_outline2.ArrowRightIcon, { className: "h-8 w-8 text-gray-500", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/common/components/Slider/SliderArrowNext.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Slider/SliderArrowNext.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Slider/SliderArrowPrevious.tsx
var import_tailwind_merge20 = require("tailwind-merge"), import_outline3 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function SliderArrowNext2({
  className,
  currentSlide,
  slideCount,
  additionalClassName,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    "button",
    {
      ...rest,
      className: (0, import_tailwind_merge20.twMerge)(
        "absolute left-1 top-1/2 z-1 h-fit w-fit -translate-y-1/2 rounded-full bg-white shadow-lg before:content-none hover:bg-white focus:bg-white focus:ring-1",
        className,
        additionalClassName
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_outline3.ArrowLeftIcon, { className: "h-8 w-8 text-gray-500", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/common/components/Slider/SliderArrowPrevious.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Slider/SliderArrowPrevious.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Slider/SliderDotsContainer.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function SliderDotsContainer({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("ul", { className: "scrollbar-hide flex w-full justify-center gap-4 overflow-y-hidden overflow-x-scroll py-[3px] [&_li]:h-4 [&_li]:w-4", children }, void 0, !1, {
    fileName: "app/common/components/Slider/SliderDotsContainer.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/common/components/Slider/SliderDot.tsx
var import_tailwind_merge21 = require("tailwind-merge"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function SliderDot({ className, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    "button",
    {
      ...rest,
      className: (0, import_tailwind_merge21.twMerge)(
        "!h-3 !w-3 rounded-full !p-0 !outline !outline-1 !outline-black transition-colors duration-300 before:!content-none [.slick-active_&]:bg-black",
        className
      )
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Slider/SliderDot.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Slider/Slider.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), Slider = (0, import_react27.forwardRef)(
  ({
    children,
    dots = !0,
    infinite = !0,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    nextArrow = /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SliderArrowNext, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 36,
      columnNumber: 19
    }, this),
    prevArrow = /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SliderArrowNext2, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 37,
      columnNumber: 19
    }, this),
    appendDots = (dots2) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SliderDotsContainer, { children: dots2 }, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 38,
      columnNumber: 30
    }, this),
    customPaging = () => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SliderDot, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 39,
      columnNumber: 28
    }, this),
    slideAs: SlideAs = "article",
    deps = [],
    ...settings
  }, ref) => {
    let sliderRef = (0, import_react27.useRef)(null);
    return (0, import_react27.useEffect)(() => {
      ((ref == null ? void 0 : ref.current) || sliderRef.current).slickGoTo(0);
    }, [sliderRef, ref, ...deps]), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react_slick.default,
      {
        ref: ref || sliderRef,
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        nextArrow,
        prevArrow,
        customPaging,
        appendDots,
        ...settings,
        children: import_react27.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SlideAs, { children: child }, void 0, !1, {
          fileName: "app/common/components/Slider/Slider.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/common/components/Slider/Slider.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    );
  }
), Slider_default = Object.assign(Slider, {
  ArrowNext: SliderArrowNext,
  ArrowPrevious: SliderArrowNext2,
  Dot: SliderDot,
  DotsContainer: SliderDotsContainer
});

// app/http/hooks/useUrl.ts
var import_react28 = require("react");
function useUrl() {
  let { url } = (0, import_react28.useContext)(HttpContext_default);
  return new URL(url);
}

// app/recipes/constants.ts
var RECIPE_EXTERNAL_QUERY_PARAMS = {
  IS_EXTERNAL_SRC: "isExternalSrc"
};
var RECIPE_API_ERROR_CODES = {
  INVALID_RECIPE: "INVALID_RECIPE",
  RECIPE_NOT_CREATED: "RECIPE_NOT_CREATED"
};

// app/recipes/hook/useRecipeUrl.ts
function useRecipeUrl({ id, isExternalSrc }) {
  let url = useUrl(), recipeUrl = new URL(`${url.origin}/recipes/${id}`);
  return isExternalSrc && recipeUrl.searchParams.set(
    RECIPE_EXTERNAL_QUERY_PARAMS.IS_EXTERNAL_SRC,
    "true"
  ), recipeUrl.toString().replace(url.origin, "");
}

// app/recipes/components/RecipeCard/RecipeCard.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function RecipeCard({
  id,
  title,
  image,
  isExternalSrc = !1,
  ingredients
}) {
  let to = useRecipeUrl({
    id,
    isExternalSrc
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Link_default, { to, className: "block max-h-24 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(If_default, { condition: !!image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      "img",
      {
        className: "h-24 w-24 rounded-md",
        src: image == null ? void 0 : image.src,
        alt: title
      },
      void 0,
      !1,
      {
        fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "max-h-full flex-grow p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "pb-2 text-left text-sm", children: title }, void 0, !1, {
        fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "line-clamp-2 text-sm", children: ingredients == null ? void 0 : ingredients.join(", ") }, void 0, !1, {
        fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), DEFAULT_NUMBER_OF_RECIPES = 10;
function RandomRecipesSlider({
  numberOfRecipes = DEFAULT_NUMBER_OF_RECIPES
}) {
  let { loader: loader5, loading } = useClientLoader(), [randomRecipes, setRandomRecipes] = (0, import_react29.useState)([]);
  return (0, import_react29.useEffect)(() => {
    loader5({
      route: `/api/recipes/random/${numberOfRecipes}`
    }).then((response) => {
      response && setRandomRecipes(response.randomRecipes);
    });
  }, [loader5, numberOfRecipes]), /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(HttpState, { loading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    Slider_default,
    {
      slidesToShow: 2,
      responsive: [
        { breakpoint: THEME.BREAKPOINTS.LG, settings: { slidesToShow: 1 } }
      ],
      className: "isolate py-2",
      children: randomRecipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        RecipeCard,
        {
          id: recipe.id,
          ingredients: recipe.ingredients,
          isExternalSrc: recipe.isExternalSrc,
          title: recipe.title,
          image: recipe.image
        },
        recipe.id,
        !1,
        {
          fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
      lineNumber: 32,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function EmptyRecipesDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h2", { className: "text-base font-semibold leading-6 text-gray-900", children: "Recipes" }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "You didn\u2019t add any recipes yet. Start by adding your first recipe." }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      "ul",
      {
        className: "mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("li", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            ActionCard,
            {
              heading: "Add a custom recipe",
              description: "Create a custom recipe from scratch.",
              to: "/recipes/custom/create",
              icon: import_outline4.PencilIcon
            },
            void 0,
            !1,
            {
              fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
              lineNumber: 20,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("li", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            ActionCard,
            {
              heading: "Add a recipe from a URL",
              description: "Import a recipe from a URL.",
              to: "/recipes/url/create",
              icon: import_outline4.LinkIcon,
              background: "bg-green-500"
            },
            void 0,
            !1,
            {
              fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
              lineNumber: 28,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(RandomRecipesSlider, {}, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/recipes/hook/useRecipes.ts
var import_react30 = require("react");
function useRecipes() {
  let {
    data: {
      state: { recipes }
    }
  } = (0, import_react30.useContext)(AppContext_default);
  return recipes;
}

// app/recipes/components/RecipesDashboard/RecipesDashboard.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function RecipesDashboard() {
  let recipes = useRecipes();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(If_default, { condition: recipes.length === 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(EmptyRecipesDashboard, {}, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Slider_default, { children: recipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      RecipeCard,
      {
        id: recipe.id,
        ingredients: recipe.ingredients,
        isExternalSrc: recipe.isExternalSrc,
        title: recipe.title,
        image: recipe.image
      },
      recipe.id,
      !1,
      {
        fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
        lineNumber: 22,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("main", { className: "section-container pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(RecipesDashboard, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/recipes/routes/($locale).api.recipes.add-external-wishlist.route.tsx
var locale_api_recipes_add_external_wishlist_route_exports = {};
__export(locale_api_recipes_add_external_wishlist_route_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");
async function action({ request }) {
  let formData = await request.formData(), recipeDto = recipes_service_default.recipeToCreateRecipeDto(formData);
  if (!recipeDto)
    return (0, import_node4.json)(
      { code: RECIPE_API_ERROR_CODES.INVALID_RECIPE },
      { status: 400 }
    );
  let headers = await createBearerAccessTokenHeader(
    formAuthenticator,
    request
  );
  console.log(headers);
  let recipe = await recipes_service_default.createRecipeAndAddToWishList(
    recipeDto,
    headers
  );
  return recipe ? (0, import_node4.json)(recipe) : (0, import_node4.json)(
    { code: RECIPE_API_ERROR_CODES.RECIPE_NOT_CREATED },
    { status: 500 }
  );
}

// app/recipes/routes/($locale).api.recipes.random.$count.route.tsx
var locale_api_recipes_random_count_route_exports = {};
__export(locale_api_recipes_random_count_route_exports, {
  loader: () => loader2
});

// app/recipes/graphql/query/RandomRecipesQuery.ts
var RANDOM_RECIPES_QUERY = `#graphql
	query RandomRecipes($amount: Int = 10) {
		randomRecipes(input: { amount: $amount }) {
			...recipeFields
		}
	}

	${MINIMAL_RECIPE_FRAGMENT}
`, RandomRecipesQuery_default = RANDOM_RECIPES_QUERY;

// app/recipes/routes/($locale).api.recipes.random.$count.route.tsx
var DEFAULT_RANDOM_RECIPES_COUNT = 10;
async function loader2({ params, request }) {
  let count = Number(params.count) ?? DEFAULT_RANDOM_RECIPES_COUNT, { data, errors } = await client.query(
    RandomRecipesQuery_default,
    {
      variables: {
        input: {
          amount: count
        }
      },
      headers: {
        ...await createBearerAccessTokenHeader(formAuthenticator, request)
      },
      cache: Cache.Long()
    }
  );
  return handleGqlErrors(errors), {
    randomRecipes: (data == null ? void 0 : data.randomRecipes) ?? []
  };
}

// app/auth/routes/($locale).auth.actions.route.tsx
var locale_auth_actions_route_exports = {};
__export(locale_auth_actions_route_exports, {
  action: () => action2
});
var import_remix_auth2 = require("remix-auth");
var import_node5 = require("@remix-run/node");
async function action2({ request }) {
  try {
    await formAuthenticator.authenticate(PROVIDER.LOCAL, request, {
      successRedirect: ROUTES.INDEX
    });
  } catch (e) {
    if (e instanceof Response)
      return e;
    if (e instanceof import_remix_auth2.AuthorizationError) {
      let error = e;
      return console.error(error), (0, import_node5.json)({ message: error.message });
    }
  }
}

// app/auth/routes/($locale).auth.logout.route.tsx
var locale_auth_logout_route_exports = {};
__export(locale_auth_logout_route_exports, {
  default: () => Logout,
  loader: () => loader3
});
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  await formAuthenticator.logout(request, {
    redirectTo: USER_ROUTES.LOGIN
  });
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/auth/routes/($locale).auth.logout.route.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/auth/routes/($locale).auth.signup.route.tsx
var locale_auth_signup_route_exports = {};
__export(locale_auth_signup_route_exports, {
  default: () => Index2
});
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("main", { className: "from-indigo-600 grid min-h-screen w-full grid-cols-1 place-items-center bg-gradient-to-bl lg:place-items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "flex h-full w-full max-w-xl flex-col justify-center bg-white p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(AccountSignIn, {}, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.signup.route.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.signup.route.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(SignupForm, {}, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.signup.route.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/auth/routes/($locale).auth.signup.route.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/auth/routes/($locale).auth.signup.route.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/recipes/routes/($locale).recipes.$id.route.tsx
var locale_recipes_id_route_exports = {};
__export(locale_recipes_id_route_exports, {
  default: () => Index3,
  loader: () => loader4
});
var import_react35 = require("@remix-run/react");

// app/recipes/components/Recipe/RecipeHeader.tsx
var import_cva14 = require("cva"), import_react31 = require("react");
var import_react32 = require("@headlessui/react"), import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function RecipeHeader({
  url,
  canEdit,
  isFavorite
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("section", { className: "flex items-center justify-between py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("section", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!canEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Button_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_solid.PencilIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      "Edit"
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 29,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Button_default, { intent: "secondary", to: url, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_solid.LinkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      "Source"
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react32.Menu, { as: "div", className: "relative sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react32.Menu.Button, { className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400", children: [
        "More",
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          import_solid.ChevronDownIcon,
          {
            className: "-mr-1 ml-1.5 h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
            lineNumber: 50,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        import_react32.Transition,
        {
          as: import_react31.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react32.Menu.Items, { className: "absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react32.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "a",
              {
                href: "#",
                className: (0, import_cva14.cx)(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                ),
                children: "Edit"
              },
              void 0,
              !1,
              {
                fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
                lineNumber: 68,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react32.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "a",
              {
                href: "#",
                className: (0, import_cva14.cx)(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                ),
                children: "View"
              },
              void 0,
              !1,
              {
                fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
                lineNumber: 81,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/recipes/components/Recipe/RecipeHeaderSection.tsx
var import_cva15 = require("cva");
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function RecipeHeaderSection({ image, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("section", { className: "grid grid-cols-1 grid-rows-1 max-h-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(If_default, { condition: !!(image != null && image.src), children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Image, { ...image, alt: title, className: "w-full bg-cover bg-top block max-w-full h-auto" }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 15,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "col-start-1 col-end-2 row-start-1 row-end-2 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("h1", { className: (0, import_cva15.cx)("text-3xl font-bold text-center", {
      "bg-black text-white p-2": !!(image != null && image.src)
    }), children: title }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/recipes/components/Recipe/RecipeMetadata.tsx
var import_outline5 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function RecipeMetadata({ prepTime, cookTime, servings, externalUrl, mainIngredient }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("section", { className: "flex flex-wrap items-center gap-y-2 gap-x-4 py-2 text-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default, { condition: !!prepTime, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "text-sm", children: [
      "Preparation: ",
      prepTime
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 19,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default, { condition: !!cookTime, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "text-sm", children: [
      "Cooking: ",
      cookTime
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 26,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default, { condition: !!servings, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "text-sm", children: [
      "Serves: ",
      servings
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 33,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default, { condition: !!mainIngredient, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "text-sm", children: [
      "Main Ingredient: ",
      mainIngredient
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 40,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default, { condition: !!externalUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Button_default, { intent: "secondary", to: externalUrl, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_outline5.LinkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      "Source"
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 47,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

// app/common/components/WishlistButton/WishlistButton.tsx
var import_cva16 = require("cva"), import_tailwind_merge22 = require("tailwind-merge"), import_outline6 = require("@heroicons/react/24/outline");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function WishlistButton({
  isWishlist,
  children,
  compact = !0,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Button_default, { ...props, type: "button", intent: "secondary", onClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
      import_outline6.HeartIcon,
      {
        className: (0, import_tailwind_merge22.twMerge)(
          (0, import_cva16.cx)("h-5 w-5", { "fill-red-600 text-red-600": isWishlist })
        )
      },
      void 0,
      !1,
      {
        fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(If_default, { condition: !compact, children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "ml-2", children: isWishlist ? "Remove from Wishlist" : "Add to Wishlist" }, void 0, !1, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/recipes/components/RecipeWishlistButton/RecipeWishlistButton.tsx
var import_react33 = require("@remix-run/react"), import_react34 = require("react");
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function RecipeWishlistButton({
  recipe,
  createRecipe = !1
}) {
  let navigate = (0, import_react33.useNavigate)(), fetcher = (0, import_react33.useFetcher)(), { toast: toast4 } = useToast(), onClick = async () => {
    fetcher.submit(
      {
        recipe: JSON.stringify({
          ...recipe,
          isWishList: !0,
          isExternalSrc: !1
        })
      },
      {
        method: "POST",
        action: "/api/recipes/add-external-wishlist"
      }
    );
  };
  return (0, import_react34.useEffect)(() => {
    if (fetcher.data) {
      let data = fetcher.data;
      "id" in data ? navigate(`/recipes/${data.id}`) : toast4(data.code, {
        autoClose: 5e3,
        type: "error"
      });
    }
  }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(WishlistButton, { isWishlist: recipe.isWishList, onClick }, void 0, !1, {
    fileName: "app/recipes/components/RecipeWishlistButton/RecipeWishlistButton.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}

// app/recipes/components/Recipe/Recipe.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function Recipe({
  title,
  ingredients,
  instructions,
  image,
  url,
  cookTime,
  mainIngredient,
  prepTime,
  servings,
  id,
  userId,
  isExternalSrc,
  isWishList,
  allowDelete,
  allowEdit,
  allowView
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("section", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
      RecipeWishlistButton,
      {
        recipe: {
          title,
          ingredients,
          instructions,
          image,
          url,
          cookTime,
          mainIngredient,
          prepTime,
          servings,
          id,
          userId,
          isExternalSrc,
          isWishList,
          allowDelete,
          allowEdit,
          allowView
        },
        createRecipe: !0
      },
      void 0,
      !1,
      {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(RecipeHeader, { url: url ?? " ", canEdit: !0 }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(RecipeHeaderSection, { image, title }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
      RecipeMetadata,
      {
        cookTime,
        prepTime,
        servings,
        mainIngredient,
        externalUrl: url
      },
      void 0,
      !1,
      {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(If_default, { condition: !!ingredients, children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "w-full lg:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h2", { className: "text-xl font-bold", children: "Ingredients" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("ul", { className: "list-inside list-disc", children: ingredients == null ? void 0 : ingredients.map((ingredient) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("li", { children: ingredient }, ingredient, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(If_default, { condition: !!instructions, children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(If_default.Then, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("h2", { className: "text-xl font-bold", children: "Instructions" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("ol", { className: "list-inside list-decimal", children: instructions == null ? void 0 : instructions.map((instruction) => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("li", { children: instruction }, instruction, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/Recipe.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/recipes/graphql/fragment/RecipeFragment.ts
var RECIPE_FRAGMENT = `#graphql
	fragment recipeFields on Recipe {
		id
		title
		ingredients
		instructions
		servings
		prepTime
		cookTime
		userId
		image {
			alt
			height
			width
			src
		}
		isExternalSrc
		url
		allowView
		allowEdit
		allowDelete
		isWishList
	}
`;

// app/recipes/graphql/query/ExternalRecipeQuery.ts
var EXTERNAL_RECIPE_QUERY = `#graphql
	query ExternalRecipe($id: String!) {
		externalRecipe(input: { id: $id }) {
			...recipeFields
		}
	}

	${RECIPE_FRAGMENT}
`, ExternalRecipeQuery_default = EXTERNAL_RECIPE_QUERY;

// app/recipes/graphql/query/RecipeQuery.ts
var RECIPE_QUERY = `#graphql
	query RecipeById($id: ID!) {
		recipe(input: { id: $id }) {
			...recipeFields
		}
	}

	${RECIPE_FRAGMENT}
`;

// app/recipes/routes/($locale).recipes.$id.route.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  var _a, _b;
  let isExternalSrc = new URL(request.url).searchParams.get("isExternalSrc") === "true", id = String(params.id), variables = {
    id
  }, errors = [], data;
  if (!id)
    throw new Response("Not found", { status: 404 });
  if (isExternalSrc) {
    let res = await client.query(ExternalRecipeQuery_default, {
      variables,
      headers: {
        ...await createBearerAccessTokenHeader(formAuthenticator, request)
      },
      cache: Cache.Long()
    });
    errors = res.errors ?? [], data = (_a = res.data) == null ? void 0 : _a.externalRecipe;
  } else {
    let res = await client.query(RECIPE_QUERY, {
      variables,
      headers: {
        ...await createBearerAccessTokenHeader(formAuthenticator, request)
      },
      cache: Cache.Long()
    });
    errors = res.errors ?? [], data = (_b = res.data) == null ? void 0 : _b.recipe;
  }
  return errors.length && handleGqlErrors(errors), {
    recipe: data
  };
};
function Index3() {
  let { recipe } = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("main", { className: "flex flex-col py-12 section-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
    Recipe,
    {
      ...recipe
    },
    void 0,
    !1,
    {
      fileName: "app/recipes/routes/($locale).recipes.$id.route.tsx",
      lineNumber: 67,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/recipes/routes/($locale).recipes.$id.route.tsx",
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

// app/auth/routes/($locale).auth.login.route.tsx
var locale_auth_login_route_exports = {};
__export(locale_auth_login_route_exports, {
  default: () => Index4
});
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("main", { className: "from-indigo-600 grid min-h-screen w-full grid-cols-1 place-items-center bg-gradient-to-bl lg:place-items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("section", { className: "flex h-full w-full max-w-xl flex-col justify-center bg-white p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(NoAccountSignup, {}, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.login.route.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.login.route.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(LoginForm, {}, void 0, !1, {
      fileName: "app/auth/routes/($locale).auth.login.route.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/auth/routes/($locale).auth.login.route.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/auth/routes/($locale).auth.login.route.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QYIG72RU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-OVNFYIRE.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-EF32OAUC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { "($locale).api.recipes.add-external-wishlist": { id: "($locale).api.recipes.add-external-wishlist", parentId: "root", path: ":locale?/api/recipes/add-external-wishlist", index: !1, caseSensitive: void 0, module: "/build/($locale).api.recipes.add-external-wishlist-TS5VNA3B.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).api.recipes.random.$count": { id: "($locale).api.recipes.random.$count", parentId: "root", path: ":locale?/api/recipes/random/:count", index: !1, caseSensitive: void 0, module: "/build/($locale).api.recipes.random.$count-4X3G3VQ4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).auth.actions": { id: "($locale).auth.actions", parentId: "root", path: ":locale?/auth/actions", index: !1, caseSensitive: void 0, module: "/build/($locale).auth.actions-OTGDRZFQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).auth.login": { id: "($locale).auth.login", parentId: "root", path: ":locale?/auth/login", index: !1, caseSensitive: void 0, module: "/build/($locale).auth.login-KMHECNYZ.js", imports: ["/build/_shared/chunk-TCFIUGTE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).auth.logout": { id: "($locale).auth.logout", parentId: "root", path: ":locale?/auth/logout", index: !1, caseSensitive: void 0, module: "/build/($locale).auth.logout-JNHMIU6U.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).auth.signup": { id: "($locale).auth.signup", parentId: "root", path: ":locale?/auth/signup", index: !1, caseSensitive: void 0, module: "/build/($locale).auth.signup-RDKUFD2G.js", imports: ["/build/_shared/chunk-TCFIUGTE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "($locale).recipes.$id": { id: "($locale).recipes.$id", parentId: "root", path: ":locale?/recipes/:id", index: !1, caseSensitive: void 0, module: "/build/($locale).recipes.$id-AVEFNEKT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WKDTVBYP.js", imports: ["/build/_shared/chunk-4CXWZWNZ.js", "/build/_shared/chunk-LJDFXF47.js", "/build/_shared/chunk-QLFRGZQC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JSM7AXRM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ec875435", hmr: { runtime: "/build/_shared\\chunk-EF32OAUC.js", timestamp: 1706832808404 }, url: "/build/manifest-EC875435.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "($locale).api.recipes.add-external-wishlist": {
    id: "($locale).api.recipes.add-external-wishlist",
    parentId: "root",
    path: ":locale?/api/recipes/add-external-wishlist",
    index: !1,
    caseSensitive: void 0,
    module: locale_api_recipes_add_external_wishlist_route_exports
  },
  "($locale).api.recipes.random.$count": {
    id: "($locale).api.recipes.random.$count",
    parentId: "root",
    path: ":locale?/api/recipes/random/:count",
    index: !1,
    caseSensitive: void 0,
    module: locale_api_recipes_random_count_route_exports
  },
  "($locale).auth.actions": {
    id: "($locale).auth.actions",
    parentId: "root",
    path: ":locale?/auth/actions",
    index: !1,
    caseSensitive: void 0,
    module: locale_auth_actions_route_exports
  },
  "($locale).auth.logout": {
    id: "($locale).auth.logout",
    parentId: "root",
    path: ":locale?/auth/logout",
    index: !1,
    caseSensitive: void 0,
    module: locale_auth_logout_route_exports
  },
  "($locale).auth.signup": {
    id: "($locale).auth.signup",
    parentId: "root",
    path: ":locale?/auth/signup",
    index: !1,
    caseSensitive: void 0,
    module: locale_auth_signup_route_exports
  },
  "($locale).recipes.$id": {
    id: "($locale).recipes.$id",
    parentId: "root",
    path: ":locale?/recipes/:id",
    index: !1,
    caseSensitive: void 0,
    module: locale_recipes_id_route_exports
  },
  "($locale).auth.login": {
    id: "($locale).auth.login",
    parentId: "root",
    path: ":locale?/auth/login",
    index: !1,
    caseSensitive: void 0,
    module: locale_auth_login_route_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
