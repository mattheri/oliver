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

// css-bundle-update-plugin-ns:C:\Users\mathi\Documents\Projects\pantry-pal\frontend\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\mathi\\Documents\\Projects\\pantry-pal\\frontend\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/routes/($locale).auth.login.actions.tsx
var require_locale_auth_login_actions = __commonJS({
  "app/routes/($locale).auth.login.actions.tsx"() {
    "use strict";
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
  loader: () => loader,
  shouldRevalidate: () => shouldRevalidate
});
var import_css_bundle = __toESM(require_dist()), import_react20 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SI5B2EZ2.css";

// app/common/store/AppContext/AppContext.ts
var import_react2 = require("react");

// app/common/constants/modals.ts
var MODALS = {
  MENU: "menu",
  LOGIN: "login"
};

// app/common/store/AppContext/AppContext.ts
var initialModalState = Object.keys(MODALS).reduce((acc, key) => (acc[MODALS[key]] = !1, acc), {}), initialDataState = {
  recipes: []
}, AppContext = (0, import_react2.createContext)({
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
var import_react3 = require("react");

// app/common/store/AppContext/modalsReducer.ts
var Action = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};
function modalsReducer(state, action2) {
  switch (action2.type) {
    case Action.OPEN_MODAL:
      return {
        ...state,
        [action2.payload.modalId]: !0
      };
    case Action.CLOSE_MODAL:
      return {
        ...state,
        [action2.payload.modalId]: !1
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
function dataReducer(state, action2) {
  switch (action2.type) {
    case Action2.UPDATE_RECIPES:
      return {
        ...state,
        recipes: action2.payload.recipes
      };
    case Action2.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => recipe.id === action2.payload.recipe.id ? action2.payload.recipe : recipe)
      };
    default:
      throw new Error("Invalid action type");
  }
}

// app/common/store/AppContext/AppContext.Provider.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function AppContextProvider({ children, recipes = [] }) {
  let [modalsState, dispatchModalsState] = (0, import_react3.useReducer)(
    modalsReducer,
    initialModalState
  ), [dataState, dispatchDataState] = (0, import_react3.useReducer)(dataReducer, {
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

// app/common/components/Button/Button.tsx
var import_tailwind_merge = require("tailwind-merge");

// app/common/components/Link/Link.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Link(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { ...props }, void 0, !1, {
    fileName: "app/common/components/Link/Link.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/common/components/Button/Button.style.ts
var import_cva = require("cva"), button = (0, import_cva.cva)(
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
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button({
  to,
  className,
  intent,
  size,
  ...props
}) {
  return to ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Link,
    {
      to,
      className: (0, import_tailwind_merge.twMerge)(
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
      lineNumber: 33,
      columnNumber: 7
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: (0, import_tailwind_merge.twMerge)(
        button({ intent: intent ?? "primary", size: size ?? "md", className })
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/common/components/Button/Button.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}

// app/common/components/Drawer/Drawer.tsx
var import_react9 = require("@headlessui/react"), import_tailwind_merge5 = require("tailwind-merge");

// app/common/components/Drawer/Control.tsx
var import_react6 = require("react");

// app/common/hooks/useModal.ts
var import_react5 = require("react");
var useModal = (modalId) => {
  let { modals } = (0, import_react5.useContext)(AppContext_default), isOpen = modals.state[modalId], open = (0, import_react5.useCallback)(() => {
    modals.dispatch({ type: "OPEN_MODAL", payload: { modalId } });
  }, []), close = (0, import_react5.useCallback)(() => {
    modals.dispatch({ type: "CLOSE_MODAL", payload: { modalId } });
  }, []);
  return {
    isOpen,
    open,
    close
  };
};

// app/common/components/Drawer/Control.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Control({ modalId, children, ...props }) {
  let { isOpen, close, open } = useModal(modalId), Component = (0, import_react6.isValidElement)(children) ? import_react6.Children.only(children) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ...props, children: import_react6.Children.only(children) }, void 0, !1, {
    fileName: "app/common/components/Drawer/Control.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
  return children ? (0, import_react6.cloneElement)(Component, {
    ...props,
    onClick: isOpen ? close : open
  }) : null;
}

// app/common/components/Drawer/Body.tsx
var import_tailwind_merge2 = require("tailwind-merge"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Body({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: (0, import_tailwind_merge2.twMerge)("flex-grow order-2", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Body.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/common/components/Drawer/Header.tsx
var import_tailwind_merge3 = require("tailwind-merge"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Header({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: (0, import_tailwind_merge3.twMerge)("order-1", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Header.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/common/components/Drawer/Footer.tsx
var import_tailwind_merge4 = require("tailwind-merge"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Footer({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("footer", { className: (0, import_tailwind_merge4.twMerge)("order-3", className), ...props }, void 0, !1, {
    fileName: "app/common/components/Drawer/Footer.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/common/components/Drawer/Backdrop.tsx
var import_react7 = require("@headlessui/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Backdrop({
  className,
  isOpen,
  onClose,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react7.Transition,
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
var import_cva2 = require("cva"), drawer = (0, import_cva2.cva)("bg-white flex flex-col fixed p-4 z-1", {
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
  enterFrom: (0, import_cva2.cx)({
    "-translate-y-full": position === "top",
    "translate-y-full": position === "bottom",
    "-translate-x-full": position === "left",
    "translate-x-full": position === "right"
  }),
  enterTo: (0, import_cva2.cx)({
    "translate-y-0": position === "top",
    "-translate-y-0": position === "bottom",
    "translate-x-0": position === "left",
    "-translate-x-0": position === "right"
  }),
  enter: "transform-gpu transition-transform ease-default duration-default",
  leave: "transform-gpu transition-transform ease-default duration-default",
  leaveFrom: (0, import_cva2.cx)({
    "translate-y-0": position === "top",
    "-translate-y-0": position === "bottom",
    "translate-x-0": position === "left",
    "-translate-x-0": position === "right"
  }),
  leaveTo: (0, import_cva2.cx)({
    "-translate-y-full": position === "top",
    "translate-y-full": position === "bottom",
    "-translate-x-full": position === "left",
    "translate-x-full": position === "right"
  })
});

// app/common/hooks/useKeyboard.ts
var import_react8 = require("react");

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
  let onKeyDown = (0, import_react8.useCallback)(
    (event) => key && event.key === key ? keyboardRegistry.emit(key, event) : fn(event),
    [fn, key]
  );
  (0, import_react8.useEffect)(() => (key && keyboardRegistry.register(key, fn), window.addEventListener("keydown", onKeyDown), () => {
    key && keyboardRegistry.unregister(key, fn), window.removeEventListener("keydown", onKeyDown);
  }), [fn, key]);
};

// app/common/components/Drawer/Drawer.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Drawer = ({
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
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Backdrop, { isOpen, onClose: close }, void 0, !1, {
      fileName: "app/common/components/Drawer/Drawer.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react9.Transition,
      {
        ...getTransition(position ?? "right"),
        show: isOpen,
        as: "aside",
        ...props,
        className: (0, import_tailwind_merge5.twMerge)(
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

// app/common/components/Heading/Heading.tsx
var import_tailwind_merge6 = require("tailwind-merge");

// app/common/components/Heading/Heading.style.ts
var import_cva3 = require("cva"), heading = (0, import_cva3.cva)("font-semibold text-gray-900", {
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
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Heading({
  className,
  intent,
  as: As = "h1",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    As,
    {
      className: (0, import_tailwind_merge6.twMerge)(heading({ intent: intent ?? "h1" }), className),
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

// app/common/components/Menu/Menu.tsx
var import_md = require("react-icons/md");
var import_react12 = require("@remix-run/react");

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
};

// app/auth/hooks/useIsAuthenticated.ts
var import_react11 = require("react");

// app/auth/store/UserContext/UserContext.ts
var import_react10 = require("react"), UserContext = (0, import_react10.createContext)({
  isAuthenticated: !1
}), UserContext_default = UserContext;

// app/auth/hooks/useIsAuthenticated.ts
function useIsAuthenticated() {
  let { isAuthenticated } = (0, import_react11.useContext)(UserContext_default);
  return isAuthenticated;
}

// app/auth/components/AuthNavMenu/AuthNavMenu.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AuthNavMenu() {
  let routes2 = useIsAuthenticated() ? { PROFILE: USER_ROUTES.PROFILE, LOG_OUT: USER_ROUTES.LOG_OUT } : { LOGIN: USER_ROUTES.LOGIN, SIGN_UP: USER_ROUTES.SIGN_UP };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VNavigation_default.Secondary, { title: "Profile", children: Object.entries(routes2).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Menu() {
  let location = (0, import_react12.useLocation)(), canRender = ![
    USER_ROUTES.LOGIN,
    USER_ROUTES.SIGN_UP,
    USER_ROUTES.LOG_OUT
  ].some((route) => location.pathname === route);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(If_default, { condition: canRender, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(If_default.Then, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { intent: "unstyled", className: "fixed left-4 top-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_md.MdMenu, { size: "2rem" }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Drawer_default, { modalId: MODALS.MENU, position: "left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Drawer_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { intent: "unstyled", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_md.MdClose, { size: "1rem" }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Drawer_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VNavigation_default, { children: Object.entries(ROUTES).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          VNavigation_default.Item,
          {
            to: value,
            name: ROUTES_NAMES[key]
          },
          key,
          !1,
          {
            fileName: "app/common/components/Menu/Menu.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AuthNavMenu, {}, void 0, !1, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/common/components/Input/Input.tsx
var import_react14 = require("react"), import_cva5 = require("cva"), import_tailwind_merge9 = require("tailwind-merge");

// app/common/components/If/If.tsx
var import_react13 = require("react");

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
  return import_react13.Children.toArray(children).find((child) => typeof child == "object" && "type" in child && typeof child.type == "function" ? child.type.name === name : !1);
}
function If({ condition, children }) {
  return condition ? findChildren(children, "Then") : findChildren(children, "Else") ?? null;
}
var If_default = Object.assign(If, {
  Then,
  Else
});

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
var import_tailwind_merge7 = require("tailwind-merge");
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
      className: (0, import_tailwind_merge7.twMerge)(
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
var import_tailwind_merge8 = require("tailwind-merge");
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
      className: (0, import_tailwind_merge8.twMerge)(
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
var import_cva4 = require("cva"), input = (0, import_cva4.cva)(
  "isolate text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 invalid:ring-red-300 invalid:placeholder:text-red-300 focus:ring-2 focus:ring-inset invalid:focus:ring-red-500 disabled:cursor-not-allowed sm:leading-6"
);

// app/common/components/Input/Input.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), Input_default = (0, import_react14.forwardRef)(function({
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
          className: (0, import_tailwind_merge9.twMerge)(
            input({
              className: (0, import_cva5.cx)({ "pl-10": !!leading, "pr-10": !!trailing })
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

// app/common/components/Toast/Toast.tsx
var import_outline = require("@heroicons/react/24/outline"), import_tailwind_merge13 = require("tailwind-merge");

// app/common/components/Toast/ToastAction.tsx
var import_tailwind_merge10 = require("tailwind-merge");

// app/common/components/Toast/ToastAction.style.ts
var import_cva6 = require("cva"), toastAction = (0, import_cva6.cva)(
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
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ToastAction({
  intent,
  className,
  children,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "button",
    {
      ...props,
      type,
      className: (0, import_tailwind_merge10.twMerge)(
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
var import_tailwind_merge11 = require("tailwind-merge");

// app/common/components/Toast/ToastHeading.style.ts
var import_cva7 = require("cva"), toastHeading = (0, import_cva7.cva)("font-medium text-sm", {
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
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ToastHeading({
  intent,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "p",
    {
      ...props,
      className: (0, import_tailwind_merge11.twMerge)(
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
var import_tailwind_merge12 = require("tailwind-merge");

// app/common/components/Toast/ToastLink.style.ts
var import_cva8 = require("cva"), toastLink = (0, import_cva8.cva)("whitespace-nowrap font-medium", {
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
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function ToastLink({ intent, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    Link,
    {
      ...props,
      className: (0, import_tailwind_merge12.twMerge)(ToastLink_style_default({ intent: intent ?? "success", className }))
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
var import_cva9 = require("cva"), toast = (0, import_cva9.cva)("rounded-md p-4", {
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
var import_react_toastify = require("react-toastify"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), DEFAULT_TIMEOUT = 5e3, DEFAULT_LIMIT = 3, DEFAULT_POSITION = import_react_toastify.toast.POSITION.TOP_RIGHT, DEFAULT_TRANSITION = import_react_toastify.Slide, DEFAULT_AUTO_CLOSE_ON_CLICK = !1;
function ToastProvider({
  closeOnClick = DEFAULT_AUTO_CLOSE_ON_CLICK,
  limit = DEFAULT_LIMIT,
  autoClose = DEFAULT_TIMEOUT,
  transition = DEFAULT_TRANSITION,
  position = DEFAULT_POSITION,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge13.twMerge)(Toast_style_default({ intent: intent ?? "success", className })),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(If_default, { condition: !!icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "icon-container flex-shrink-0", children: icon }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-grow flex-col gap-2", children }, void 0, !1, {
          fileName: "app/common/components/Toast/Toast.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(If_default, { condition: !!displayClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          ToastAction,
          {
            className: "flex-shrink-0 self-start",
            intent: intent ?? "success",
            onClick: closeToast,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_outline.XMarkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
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

// app/common/components/ActionCard/ActionCard.tsx
var import_react15 = require("@remix-run/react"), import_tailwind_merge14 = require("tailwind-merge"), import_cva10 = require("cva");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ActionCard({
  to,
  action: action2,
  icon: Icon,
  background = "bg-blue-500",
  description,
  heading: heading2,
  className,
  ...props
}) {
  let navigate = (0, import_react15.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    Button,
    {
      intent: "unstyled",
      onClick: async () => {
        action2 && await action2(), to && navigate(to);
      },
      type: "button",
      className: "p-0",
      role: "link",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("article", { ...props, className: (0, import_tailwind_merge14.twMerge)("flow-root", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "focus-within:ring-indigo-500 hover:bg-gray-50 relative flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default, { condition: !!Icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            className: (0, import_tailwind_merge14.twMerge)(
              (0, import_cva10.cx)(
                "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg",
                { [background]: !!background }
              )
            ),
            children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              Icon,
              {
                className: (0, import_tailwind_merge14.twMerge)(
                  (0, import_cva10.cx)("h-6 w-6", {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-grow flex-col items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default, { condition: !!heading2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Heading, { as: "h3", intent: "h6", className: "text-left font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: heading2 }, void 0, !1, {
              fileName: "app/common/components/ActionCard/ActionCard.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default, { condition: !!description, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1 text-left", children: description }, void 0, !1, {
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

// app/common/components/VNavigation/VNavigation.tsx
var import_tailwind_merge17 = require("tailwind-merge");

// app/common/components/VNavigation/VNavigationItem.tsx
var import_tailwind_merge15 = require("tailwind-merge"), import_cva11 = require("cva");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function VNavigationItem({
  name,
  to,
  current,
  icon: Icon,
  count,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    Link,
    {
      ...props,
      to,
      className: (0, import_tailwind_merge15.twMerge)(
        (0, import_cva11.cx)(
          "text-sm group flex gap-x-3 rounded-md p-2 font-semibold leading-6",
          { "bg-gray-50 text-indigo-600": current },
          {
            "text-gray-700 hover:text-indigo-600 hover:bg-gray-50": !current
          }
        ),
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default, { condition: !!Icon, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default.Then, { children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            Icon,
            {
              className: (0, import_tailwind_merge15.twMerge)(
                (0, import_cva11.cx)("h-6 w-6 shrink-0", {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "span",
            {
              className: (0, import_tailwind_merge15.twMerge)(
                (0, import_cva11.cx)(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                  { "text-indigo-600 border-indigo-600": current },
                  {
                    "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600": !current
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "flex-grow", children: name }, void 0, !1, {
          fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default, { condition: !!count, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "span",
          {
            className: "text-xs text-gray-600 ring-gray-200 ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center font-medium leading-5 ring-1 ring-inset",
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
var import_tailwind_merge16 = require("tailwind-merge"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function VSecondaryNavigation({
  title,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("nav", { ...props, className: (0, import_tailwind_merge16.twMerge)("flex flex-1 flex-col", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "text-xs text-gray-400 font-semibold leading-6", children: title }, void 0, !1, {
      fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, !1, {
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
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function VNavigation({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("nav", { ...props, className: (0, import_tailwind_merge17.twMerge)("flex flex-1 flex-col", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, !1, {
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

// app/common/components/Loader/Loader.tsx
var import_cva13 = require("cva"), import_tailwind_merge18 = require("tailwind-merge");

// app/common/components/Loader/Loader.style.ts
var import_cva12 = require("cva"), variants = (0, import_cva12.cva)("", {
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
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function Loader({
  show,
  className,
  size,
  color,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(If_default, { condition: show, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    "div",
    {
      ...props,
      className: (0, import_tailwind_merge18.twMerge)(
        (0, import_cva13.cx)(
          "absolute flex h-full w-full items-center justify-center",
          className
        )
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "div",
        {
          role: "status",
          className: (0, import_tailwind_merge18.twMerge)(
            "animate-spin",
            Loader_style_default({ size: size ?? "default", color: color ?? "blue" })
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
              "svg",
              {
                "aria-hidden": "true",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
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

// app/auth/store/UserContext/UserContext.Provider.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function UserContextProvider({
  id,
  email,
  name,
  provider,
  isAuthenticated,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    UserContext_default.Provider,
    {
      value: { isAuthenticated, email, id, name, provider },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/auth/store/UserContext/UserContext.Provider.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/auth/service/authenticator.service.ts
var import_node2 = require("@remix-run/node"), import_remix_auth = require("remix-auth"), import_remix_auth_form = require("remix-auth-form");

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
  LOCAL: "local"
}, ERROR = {
  INVALID_CREDENTIALS: "Invalid credentials"
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
  "Content-Type": "application/json",
  "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET ?? ""
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
var import_graphql = require("graphql"), Mutation = class {
  constructor(base, query, options, cache = Cache) {
    this.options = {};
    this.base = base, this.query = query, this.options = options || {}, this.cache = cache;
  }
  getDomain() {
    let normalizedQuery = (0, import_graphql.stripIgnoredCharacters)(this.query), queryWithoutName = normalizedQuery.slice(
      normalizedQuery.indexOf("{") + 1,
      normalizedQuery.length
    ), endNameIndex = queryWithoutName.indexOf("(") > -1 ? queryWithoutName.indexOf("(") : queryWithoutName.indexOf("{");
    return queryWithoutName.slice(0, endNameIndex).split("_")[1];
  }
  async execute() {
    if (typeof this.query != "string")
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    if (typeof this.options.variables != "object")
      throw new Error(
        `${HTTP_ERROR.INVALID_VARIABLES}: ${this.options.variables}`
      );
    let body = JSON.stringify({
      query: this.query,
      variables: this.options.variables
    }), response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: HTTP_HEADERS,
      body
    });
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    return this.options.invalidateCache && this.cache.invalidateByDomain(this.getDomain()), await response.json();
  }
};

// app/http/utils/Query.ts
var import_graphql2 = require("graphql"), Query = class {
  constructor(base, query, options) {
    this.options = {};
    this.base = base, this.query = query, this.options = options || {}, this.cache = this.options.cache || Cache.Default();
  }
  getDomain() {
    let normalizedQuery = (0, import_graphql2.stripIgnoredCharacters)(this.query), queryWithoutName = normalizedQuery.slice(
      normalizedQuery.indexOf("{") + 1,
      normalizedQuery.length
    ), endNameIndex = queryWithoutName.indexOf("(") > -1 ? queryWithoutName.indexOf("(") : queryWithoutName.indexOf("{");
    return queryWithoutName.slice(0, endNameIndex).split("_")[0];
  }
  async execute() {
    if (typeof this.query != "string")
      throw new Error(HTTP_ERROR.INVALID_QUERY);
    if (typeof this.options.variables != "object")
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
    }), response = await fetch(this.base, {
      method: HTTP_METHOD,
      headers: HTTP_HEADERS,
      body
    });
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    return this.cache.set(
      {
        query: this.query,
        variables: this.options.variables,
        domain: this.getDomain()
      },
      await response.json()
    );
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
    onError
  }) {
    try {
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
var import_react16 = require("react");
function useClientLoader() {
  let [loading, setLoading] = (0, import_react16.useState)(!1), [error, setError] = (0, import_react16.useState)(void 0), controller = (0, import_react16.useRef)(new AbortController()), onRequestStart = (0, import_react16.useCallback)(() => {
    setLoading(!0);
  }, []), onRequestEnd = (0, import_react16.useCallback)(() => {
    setLoading(!1);
  }, []), onError = (0, import_react16.useCallback)((error2) => {
    setError(error2);
  }, []), loaderService = (0, import_react16.useMemo)(() => new LoaderService(), []);
  return { loader: (0, import_react16.useCallback)(
    (args) => {
      let { signal } = controller.current;
      return loaderService.fromClient({
        ...args,
        signal,
        onRequestStart,
        onRequestEnd,
        onError
      });
    },
    [loaderService]
  ), loading, error, abort: controller.current.abort };
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

// app/auth/service/validator.service.ts
var import_joi = __toESM(require("joi")), crypto = __toESM(require("crypto")), import_util = require("util");
var ValidatorService = class {
  constructor(validator = import_joi.default) {
    this.hasher = (0, import_util.promisify)(crypto.scrypt);
    this.validator = validator;
  }
  async hash(password) {
    let salt = crypto.randomBytes(16).toString("hex");
    return `${(await this.hasher(password, salt, 64)).toString("hex")}.${salt}`;
  }
  async compare(password, hash) {
    let [hashedPassword, salt] = hash.split("."), hashedPasswordBuffer = Buffer.from(hashedPassword, "hex"), suppliedPasswordBuffer = await this.hasher(
      password,
      salt,
      64
    );
    return crypto.timingSafeEqual(hashedPasswordBuffer, suppliedPasswordBuffer);
  }
  validateEmail(email) {
    return this.validator.string().email().required().validate(email).value;
  }
  validatePassword(password) {
    return this.validator.string().pattern(PASSWORD_REGEX).required().validate(password).value;
  }
};

// app/auth/graphql/query/GetUserByEmailQuery.ts
var GET_USER_BY_EMAIL_QUERY = `#graphql
	query GetUserByEmail($email: String!) @cached {
		users(distinct_on: email, where: {email: {_eq: $email}}) {
			email
			id
			name
			password
			provider
		}
	}
`, GetUserByEmailQuery_default = GET_USER_BY_EMAIL_QUERY;

// app/auth/graphql/mutation/CreateUserMutation.ts
var CREATE_USER_MUTATION = `#graphql
	mutation CreateUser($email: String!, $password: String!, $provider: String!) {
		insert_users_one(object: { email: $email, password: $password, provider: $provider }) {
			email
			id
			name
			provider
		}
	}
`, CreateUserMutation_default = CREATE_USER_MUTATION;

// app/auth/service/user.service.ts
var UserService = class {
  constructor(httpClient = client, validator = new ValidatorService()) {
    this.client = httpClient, this.validator = validator;
  }
  async getUser({
    email
  }) {
    let { data } = await this.client.query(
      GetUserByEmailQuery_default,
      {
        variables: { email }
      }
    );
    return (data == null ? void 0 : data.users[0]) ?? null;
  }
  async validateCredentials({ password }, user) {
    return this.validator.compare(password, user.password);
  }
  async hashPassword(password) {
    return this.validator.hash(password);
  }
  async createUser(user) {
    let hashedPassword = await this.hashPassword(user.password), { data } = await this.client.mutate(
      CreateUserMutation_default,
      {
        variables: {
          email: user.email,
          name: user.name,
          password: hashedPassword,
          provider: user.provider
        },
        invalidateCache: !0
      }
    );
    return (data == null ? void 0 : data.insert_users_one) ?? null;
  }
};

// app/auth/service/verify.service.ts
var FormVerifyService = class {
  constructor(userService = new UserService(), validator = new ValidatorService()) {
    this.userService = userService, this.validator = validator;
  }
  async verify({
    form,
    context
  }) {
    try {
      let email = this.validator.validateEmail(String(form.get("email"))), password = this.validator.validatePassword(
        String(form.get("password"))
      ), user = null, userFromDb = await this.userService.getUser({ email });
      if (console.log(...oo_oo("2362841471_33_6_33_29_4", userFromDb)), userFromDb ? user = await this.validator.compare(password, userFromDb.password) ? userFromDb : null : user = await this.userService.createUser({
        email,
        password,
        provider: PROVIDER.LOCAL
      }), !user)
        throw new Error(ERROR.INVALID_CREDENTIALS);
      return delete user.password, user;
    } catch {
      throw new Error(ERROR.INVALID_CREDENTIALS);
    }
  }
};
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x212723=_0xd1c1;(function(_0x5b17a4,_0x611e00){var _0x12aa36=_0xd1c1,_0x491c98=_0x5b17a4();while(!![]){try{var _0x1bec0d=-parseInt(_0x12aa36(0x1a1))/0x1*(parseInt(_0x12aa36(0x1e7))/0x2)+parseInt(_0x12aa36(0x235))/0x3*(parseInt(_0x12aa36(0x16b))/0x4)+-parseInt(_0x12aa36(0x1c4))/0x5*(-parseInt(_0x12aa36(0x1e6))/0x6)+-parseInt(_0x12aa36(0x24c))/0x7+-parseInt(_0x12aa36(0x219))/0x8+parseInt(_0x12aa36(0x231))/0x9+parseInt(_0x12aa36(0x1de))/0xa;if(_0x1bec0d===_0x611e00)break;else _0x491c98['push'](_0x491c98['shift']());}catch(_0x3c6a86){_0x491c98['push'](_0x491c98['shift']());}}}(_0x3b7a,0x328b7));var j=Object['create'],H=Object[_0x212723(0x18f)],G=Object[_0x212723(0x21b)],ee=Object['getOwnPropertyNames'],te=Object[_0x212723(0x16c)],ne=Object['prototype'][_0x212723(0x195)],re=(_0x4de8b6,_0x48d56b,_0x21038e,_0x4b5402)=>{var _0x7e0771=_0x212723;if(_0x48d56b&&typeof _0x48d56b==_0x7e0771(0x1da)||typeof _0x48d56b=='function'){for(let _0x403e0d of ee(_0x48d56b))!ne[_0x7e0771(0x22d)](_0x4de8b6,_0x403e0d)&&_0x403e0d!==_0x21038e&&H(_0x4de8b6,_0x403e0d,{'get':()=>_0x48d56b[_0x403e0d],'enumerable':!(_0x4b5402=G(_0x48d56b,_0x403e0d))||_0x4b5402[_0x7e0771(0x217)]});}return _0x4de8b6;},x=(_0x3b12ef,_0xc9f9a7,_0x5ee752)=>(_0x5ee752=_0x3b12ef!=null?j(te(_0x3b12ef)):{},re(_0xc9f9a7||!_0x3b12ef||!_0x3b12ef['__es'+'Module']?H(_0x5ee752,_0x212723(0x1f7),{'value':_0x3b12ef,'enumerable':!0x0}):_0x5ee752,_0x3b12ef)),X=class{constructor(_0x55d88b,_0x294fec,_0x424e4b,_0x3ef28e,_0x5323d6){var _0x38ee8f=_0x212723;this[_0x38ee8f(0x21a)]=_0x55d88b,this[_0x38ee8f(0x194)]=_0x294fec,this[_0x38ee8f(0x19a)]=_0x424e4b,this['nodeModules']=_0x3ef28e,this['dockerizedApp']=_0x5323d6,this[_0x38ee8f(0x248)]=!0x0,this[_0x38ee8f(0x20f)]=!0x0,this[_0x38ee8f(0x185)]=!0x1,this[_0x38ee8f(0x168)]=!0x1,this[_0x38ee8f(0x1f9)]=_0x55d88b['process']?.[_0x38ee8f(0x1bc)]?.[_0x38ee8f(0x1c2)]===_0x38ee8f(0x1d0),this[_0x38ee8f(0x18d)]=!this['global']['process']?.[_0x38ee8f(0x213)]?.[_0x38ee8f(0x206)]&&!this['_inNextEdge'],this['_WebSocketClass']=null,this[_0x38ee8f(0x186)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x38ee8f(0x208)]='https://tinyurl.com/37x8b79t',this[_0x38ee8f(0x16a)]=(this['_inBrowser']?_0x38ee8f(0x184):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x212723(0x23c)](){var _0x53ffde=_0x212723;if(this[_0x53ffde(0x1af)])return this[_0x53ffde(0x1af)];let _0x35811c;if(this[_0x53ffde(0x18d)]||this[_0x53ffde(0x1f9)])_0x35811c=this[_0x53ffde(0x21a)]['WebSocket'];else{if(this[_0x53ffde(0x21a)]['process']?.[_0x53ffde(0x1db)])_0x35811c=this[_0x53ffde(0x21a)][_0x53ffde(0x1c1)]?.[_0x53ffde(0x1db)];else try{let _0x5f3ac8=await import(_0x53ffde(0x1ed));_0x35811c=(await import((await import(_0x53ffde(0x190)))[_0x53ffde(0x1ef)](_0x5f3ac8['join'](this[_0x53ffde(0x24d)],_0x53ffde(0x1bd)))['toString']()))[_0x53ffde(0x1f7)];}catch{try{_0x35811c=require(require(_0x53ffde(0x1ed))[_0x53ffde(0x1b4)](this[_0x53ffde(0x24d)],'ws'));}catch{throw new Error(_0x53ffde(0x17c));}}}return this[_0x53ffde(0x1af)]=_0x35811c,_0x35811c;}[_0x212723(0x239)](){var _0x119d50=_0x212723;this['_connecting']||this[_0x119d50(0x185)]||this['_connectAttemptCount']>=this[_0x119d50(0x210)]||(this[_0x119d50(0x20f)]=!0x1,this[_0x119d50(0x168)]=!0x0,this[_0x119d50(0x186)]++,this[_0x119d50(0x1e0)]=new Promise((_0xd71cbf,_0x4f02f8)=>{var _0x37cc72=_0x119d50;this['getWebSocketClass']()[_0x37cc72(0x202)](_0x2c6c41=>{var _0x1391f4=_0x37cc72;let _0x23d605=new _0x2c6c41(_0x1391f4(0x1cb)+(!this[_0x1391f4(0x18d)]&&this[_0x1391f4(0x233)]?'gateway.docker.internal':this[_0x1391f4(0x194)])+':'+this[_0x1391f4(0x19a)]);_0x23d605[_0x1391f4(0x236)]=()=>{var _0x5ef0e6=_0x1391f4;this['_allowedToSend']=!0x1,this[_0x5ef0e6(0x180)](_0x23d605),this['_attemptToReconnectShortly'](),_0x4f02f8(new Error(_0x5ef0e6(0x21d)));},_0x23d605[_0x1391f4(0x165)]=()=>{var _0x592b97=_0x1391f4;this[_0x592b97(0x18d)]||_0x23d605['_socket']&&_0x23d605[_0x592b97(0x1b9)][_0x592b97(0x16e)]&&_0x23d605['_socket']['unref'](),_0xd71cbf(_0x23d605);},_0x23d605[_0x1391f4(0x177)]=()=>{var _0xbc6ded=_0x1391f4;this[_0xbc6ded(0x20f)]=!0x0,this[_0xbc6ded(0x180)](_0x23d605),this[_0xbc6ded(0x1a0)]();},_0x23d605['onmessage']=_0x26846d=>{var _0x2057ad=_0x1391f4;try{_0x26846d&&_0x26846d[_0x2057ad(0x23d)]&&this['_inBrowser']&&JSON[_0x2057ad(0x207)](_0x26846d[_0x2057ad(0x23d)])[_0x2057ad(0x237)]===_0x2057ad(0x198)&&this[_0x2057ad(0x21a)][_0x2057ad(0x1dc)][_0x2057ad(0x198)]();}catch{}};})[_0x37cc72(0x202)](_0x418e10=>(this[_0x37cc72(0x185)]=!0x0,this[_0x37cc72(0x168)]=!0x1,this[_0x37cc72(0x20f)]=!0x1,this[_0x37cc72(0x248)]=!0x0,this[_0x37cc72(0x186)]=0x0,_0x418e10))[_0x37cc72(0x221)](_0x36ea21=>(this[_0x37cc72(0x185)]=!0x1,this[_0x37cc72(0x168)]=!0x1,console[_0x37cc72(0x1eb)](_0x37cc72(0x1e3)+this[_0x37cc72(0x208)]),_0x4f02f8(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x36ea21&&_0x36ea21['message'])))));}));}[_0x212723(0x180)](_0x53a6a1){var _0x446c55=_0x212723;this[_0x446c55(0x185)]=!0x1,this[_0x446c55(0x168)]=!0x1;try{_0x53a6a1[_0x446c55(0x177)]=null,_0x53a6a1['onerror']=null,_0x53a6a1[_0x446c55(0x165)]=null;}catch{}try{_0x53a6a1['readyState']<0x2&&_0x53a6a1[_0x446c55(0x1cc)]();}catch{}}[_0x212723(0x1a0)](){var _0x75f664=_0x212723;clearTimeout(this[_0x75f664(0x23f)]),!(this[_0x75f664(0x186)]>=this['_maxConnectAttemptCount'])&&(this[_0x75f664(0x23f)]=setTimeout(()=>{var _0x40c8f5=_0x75f664;this[_0x40c8f5(0x185)]||this['_connecting']||(this[_0x40c8f5(0x239)](),this['_ws']?.['catch'](()=>this[_0x40c8f5(0x1a0)]()));},0x1f4),this[_0x75f664(0x23f)][_0x75f664(0x16e)]&&this[_0x75f664(0x23f)][_0x75f664(0x16e)]());}async[_0x212723(0x17a)](_0x586815){var _0x59ee7f=_0x212723;try{if(!this[_0x59ee7f(0x248)])return;this[_0x59ee7f(0x20f)]&&this[_0x59ee7f(0x239)](),(await this[_0x59ee7f(0x1e0)])['send'](JSON[_0x59ee7f(0x204)](_0x586815));}catch(_0x37e105){console['warn'](this[_0x59ee7f(0x16a)]+':\\x20'+(_0x37e105&&_0x37e105[_0x59ee7f(0x1fc)])),this['_allowedToSend']=!0x1,this[_0x59ee7f(0x1a0)]();}}};function b(_0x2a13a0,_0x2d13ba,_0x130d5e,_0xdb4763,_0x4463f9,_0x3ce359){var _0x234661=_0x212723;let _0x1af000=_0x130d5e['split'](',')[_0x234661(0x1df)](_0x371aa3=>{var _0x681b53=_0x234661;try{_0x2a13a0['_console_ninja_session']||((_0x4463f9===_0x681b53(0x187)||_0x4463f9==='remix'||_0x4463f9==='astro'||_0x4463f9===_0x681b53(0x230))&&(_0x4463f9+=!_0x2a13a0[_0x681b53(0x1c1)]?.[_0x681b53(0x213)]?.[_0x681b53(0x206)]&&_0x2a13a0['process']?.[_0x681b53(0x1bc)]?.['NEXT_RUNTIME']!==_0x681b53(0x1d0)?_0x681b53(0x19e):_0x681b53(0x1d2)),_0x2a13a0[_0x681b53(0x246)]={'id':+new Date(),'tool':_0x4463f9});let _0x2d5198=new X(_0x2a13a0,_0x2d13ba,_0x371aa3,_0xdb4763,_0x3ce359);return _0x2d5198[_0x681b53(0x17a)]['bind'](_0x2d5198);}catch(_0x2eccaa){return console[_0x681b53(0x1eb)](_0x681b53(0x23e),_0x2eccaa&&_0x2eccaa[_0x681b53(0x1fc)]),()=>{};}});return _0x420043=>_0x1af000[_0x234661(0x1aa)](_0x37a36b=>_0x37a36b(_0x420043));}function _0x3b7a(){var _0x4bd5fc=['totalStrLength','default','[object\\x20Date]','_inNextEdge','_blacklistedProperty','autoExpandLimit','message','_propertyName','time','name','parent','_setNodePermissions','then','match','stringify','_dateToString','node','parse','_webSocketErrorDocsLink','hrtime','slice','date','current','unknown','127.0.0.1','_allowedToConnectOnSend','_maxConnectAttemptCount','Error','_isSet','versions','_capIfString','capped','substr','enumerable','length','794896NHSPZJ','global','getOwnPropertyDescriptor','array','logger\\x20websocket\\x20error','autoExpandPropertyCount','...','_addProperty','catch','null','nan','_setNodeExpandableState','_console_ninja','_setNodeId','_numberRegExp','Buffer','Map','strLength','hits','noFunctions','call','_isNegativeZero','_isArray','angular','817560YFqrDT','autoExpandMaxDepth','dockerizedApp','NEGATIVE_INFINITY','36138yHKXQN','onerror','method','timeEnd','_connectToHostNow','Symbol','log','getWebSocketClass','data','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_reconnectTimeout','_p_length','_processTreeNodeResult','get','_HTMLAllCollection','_consoleNinjaAllowedToStart','expId','_console_ninja_session','now','_allowedToSend','Set','timeStamp','negativeInfinity','542402zkRDAd','nodeModules','elapsed','value','reduceLimits','toString','POSITIVE_INFINITY','onopen','_p_name','symbol','_connecting','_keyStrRegExp','_sendErrorMessage','124UAfYsg','getPrototypeOf','remix','unref','setter','unshift','_getOwnPropertyDescriptor','perf_hooks','_type','_Symbol','negativeZero','resolveGetters','onclose','_addObjectProperty','allStrLength','send','funcName','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','root_exp','console','indexOf','_disposeWebsocket','_additionalMetadata','_addLoadNode','_undefined','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connected','_connectAttemptCount','next.js','_isPrimitiveType','valueOf','positiveInfinity','isExpressionToEvaluate','autoExpandPreviousObjects','_inBrowser','type','defineProperty','url','disabledLog','elements','1703100662494','host','hasOwnProperty','toLowerCase','hostname','reload','HTMLAllCollection','port','level','replace','stackTraceLimit','\\x20browser','_hasMapOnItsPath','_attemptToReconnectShortly','1FUxdqg','cappedElements','_setNodeLabel','_regExpToString','_treeNodePropertiesBeforeFullValue','string','_property','count','_getOwnPropertySymbols','forEach','index',':logPointId:','[object\\x20Set]','boolean','_WebSocketClass','_addFunctionsNode','_isPrimitiveWrapperType','_isUndefined','prototype','join','performance','push','coverage','_quotedRegExp','_socket','stack','serialize','env','ws/index.js','split','[object\\x20Map]','test','process','NEXT_RUNTIME','_isMap','6705FEzOiw',["localhost","127.0.0.1","example.cypress.io","mattheri","192.168.2.16"],'props','Boolean','undefined','50597','cappedProps','ws://','close','trace','disabledTrace','_setNodeQueryPath','edge','sortProps','\\x20server','_setNodeExpressionPath','rootExpression','number','autoExpand','nuxt','error','[object\\x20Array]','object','_WebSocket','location','_objectToString','2160750xurfAx','map','_ws','constructor','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','expressionsToEvaluate','root_exp_id','330xOuMnL','740434wewpAd','_treeNodePropertiesAfterFullValue','String','_cleanNode','warn','_hasSetOnItsPath','path','depth','pathToFileURL',"c:\\\\Users\\\\mathi\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.268\\\\node_modules",'getOwnPropertyNames','_getOwnPropertyNames','Number','_p_','function'];_0x3b7a=function(){return _0x4bd5fc;};return _0x3b7a();}function W(_0x54d4ee){var _0x34a036=_0x212723;let _0x905354=function(_0x7582c2,_0x91dc3b){return _0x91dc3b-_0x7582c2;},_0x55878c;if(_0x54d4ee[_0x34a036(0x1b5)])_0x55878c=function(){var _0x491441=_0x34a036;return _0x54d4ee[_0x491441(0x1b5)]['now']();};else{if(_0x54d4ee[_0x34a036(0x1c1)]&&_0x54d4ee['process'][_0x34a036(0x209)]&&_0x54d4ee[_0x34a036(0x1c1)]?.[_0x34a036(0x1bc)]?.[_0x34a036(0x1c2)]!==_0x34a036(0x1d0))_0x55878c=function(){var _0x10e56b=_0x34a036;return _0x54d4ee[_0x10e56b(0x1c1)][_0x10e56b(0x209)]();},_0x905354=function(_0x5cf2e4,_0x321067){return 0x3e8*(_0x321067[0x0]-_0x5cf2e4[0x0])+(_0x321067[0x1]-_0x5cf2e4[0x1])/0xf4240;};else try{let {performance:_0x4283dc}=require(_0x34a036(0x172));_0x55878c=function(){return _0x4283dc['now']();};}catch{_0x55878c=function(){return+new Date();};}}return{'elapsed':_0x905354,'timeStamp':_0x55878c,'now':()=>Date['now']()};}function J(_0x373b2,_0x1a4caf,_0x242640){var _0x16a6a6=_0x212723;if(_0x373b2[_0x16a6a6(0x244)]!==void 0x0)return _0x373b2[_0x16a6a6(0x244)];let _0x379e0f=_0x373b2[_0x16a6a6(0x1c1)]?.[_0x16a6a6(0x213)]?.[_0x16a6a6(0x206)]||_0x373b2['process']?.[_0x16a6a6(0x1bc)]?.[_0x16a6a6(0x1c2)]===_0x16a6a6(0x1d0);return _0x379e0f&&_0x242640===_0x16a6a6(0x1d7)?_0x373b2[_0x16a6a6(0x244)]=!0x1:_0x373b2[_0x16a6a6(0x244)]=_0x379e0f||!_0x1a4caf||_0x373b2['location']?.[_0x16a6a6(0x197)]&&_0x1a4caf['includes'](_0x373b2[_0x16a6a6(0x1dc)][_0x16a6a6(0x197)]),_0x373b2[_0x16a6a6(0x244)];}function _0xd1c1(_0x17882d,_0x12bda3){var _0x3b7ad4=_0x3b7a();return _0xd1c1=function(_0xd1c155,_0x143287){_0xd1c155=_0xd1c155-0x165;var _0x42b36a=_0x3b7ad4[_0xd1c155];return _0x42b36a;},_0xd1c1(_0x17882d,_0x12bda3);}function Y(_0x1fa5d0,_0x4b89d2,_0x2f1331,_0x3d9357){var _0x33d8d7=_0x212723;_0x1fa5d0=_0x1fa5d0,_0x4b89d2=_0x4b89d2,_0x2f1331=_0x2f1331,_0x3d9357=_0x3d9357;let _0x4bc36b=W(_0x1fa5d0),_0x593b17=_0x4bc36b[_0x33d8d7(0x24e)],_0x4ed4bc=_0x4bc36b[_0x33d8d7(0x24a)];class _0x13ccf3{constructor(){var _0x4a956c=_0x33d8d7;this[_0x4a956c(0x169)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4a956c(0x227)]=/^(0|[1-9][0-9]*)$/,this[_0x4a956c(0x1b8)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x1fa5d0[_0x4a956c(0x1c8)],this[_0x4a956c(0x243)]=_0x1fa5d0[_0x4a956c(0x199)],this['_getOwnPropertyDescriptor']=Object[_0x4a956c(0x21b)],this[_0x4a956c(0x1f2)]=Object[_0x4a956c(0x1f1)],this[_0x4a956c(0x174)]=_0x1fa5d0[_0x4a956c(0x23a)],this['_regExpToString']=RegExp[_0x4a956c(0x1b3)][_0x4a956c(0x251)],this['_dateToString']=Date[_0x4a956c(0x1b3)][_0x4a956c(0x251)];}[_0x33d8d7(0x1bb)](_0x54f18d,_0x4b28ef,_0x103aba,_0x1f7e1c){var _0x356c8d=_0x33d8d7,_0x31ced0=this,_0x373c08=_0x103aba[_0x356c8d(0x1d6)];function _0x533745(_0xce2884,_0x54901f,_0x50c387){var _0x51a1c5=_0x356c8d;_0x54901f[_0x51a1c5(0x18e)]=_0x51a1c5(0x20d),_0x54901f[_0x51a1c5(0x1d8)]=_0xce2884[_0x51a1c5(0x1fc)],_0x4d1f43=_0x50c387[_0x51a1c5(0x206)][_0x51a1c5(0x20c)],_0x50c387['node'][_0x51a1c5(0x20c)]=_0x54901f,_0x31ced0[_0x51a1c5(0x1a5)](_0x54901f,_0x50c387);}try{_0x103aba[_0x356c8d(0x19b)]++,_0x103aba['autoExpand']&&_0x103aba[_0x356c8d(0x18c)]['push'](_0x4b28ef);var _0x3f1e33,_0x44a924,_0x43f7fa,_0x5eae6b,_0x479a6f=[],_0x342bbc=[],_0x28e6b1,_0x147658=this[_0x356c8d(0x173)](_0x4b28ef),_0x4d7da6=_0x147658===_0x356c8d(0x21c),_0x3182d5=!0x1,_0x37ca56=_0x147658===_0x356c8d(0x1f5),_0x7159fb=this[_0x356c8d(0x188)](_0x147658),_0x46bf44=this[_0x356c8d(0x1b1)](_0x147658),_0x364fd8=_0x7159fb||_0x46bf44,_0x472887={},_0x4bc5d8=0x0,_0x225ccd=!0x1,_0x4d1f43,_0x22e692=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x103aba[_0x356c8d(0x1ee)]){if(_0x4d7da6){if(_0x44a924=_0x4b28ef[_0x356c8d(0x218)],_0x44a924>_0x103aba[_0x356c8d(0x192)]){for(_0x43f7fa=0x0,_0x5eae6b=_0x103aba[_0x356c8d(0x192)],_0x3f1e33=_0x43f7fa;_0x3f1e33<_0x5eae6b;_0x3f1e33++)_0x342bbc[_0x356c8d(0x1b6)](_0x31ced0[_0x356c8d(0x220)](_0x479a6f,_0x4b28ef,_0x147658,_0x3f1e33,_0x103aba));_0x54f18d[_0x356c8d(0x1a2)]=!0x0;}else{for(_0x43f7fa=0x0,_0x5eae6b=_0x44a924,_0x3f1e33=_0x43f7fa;_0x3f1e33<_0x5eae6b;_0x3f1e33++)_0x342bbc['push'](_0x31ced0[_0x356c8d(0x220)](_0x479a6f,_0x4b28ef,_0x147658,_0x3f1e33,_0x103aba));}_0x103aba[_0x356c8d(0x21e)]+=_0x342bbc[_0x356c8d(0x218)];}if(!(_0x147658==='null'||_0x147658===_0x356c8d(0x1c8))&&!_0x7159fb&&_0x147658!==_0x356c8d(0x1e9)&&_0x147658!==_0x356c8d(0x228)&&_0x147658!==_0x356c8d(0x1e2)){var _0x1f127c=_0x1f7e1c[_0x356c8d(0x1c6)]||_0x103aba[_0x356c8d(0x1c6)];if(this[_0x356c8d(0x212)](_0x4b28ef)?(_0x3f1e33=0x0,_0x4b28ef[_0x356c8d(0x1aa)](function(_0x4108e4){var _0x4b3d9a=_0x356c8d;if(_0x4bc5d8++,_0x103aba[_0x4b3d9a(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;return;}if(!_0x103aba[_0x4b3d9a(0x18b)]&&_0x103aba[_0x4b3d9a(0x1d6)]&&_0x103aba['autoExpandPropertyCount']>_0x103aba[_0x4b3d9a(0x1fb)]){_0x225ccd=!0x0;return;}_0x342bbc[_0x4b3d9a(0x1b6)](_0x31ced0['_addProperty'](_0x479a6f,_0x4b28ef,_0x4b3d9a(0x249),_0x3f1e33++,_0x103aba,function(_0x5b808e){return function(){return _0x5b808e;};}(_0x4108e4)));})):this[_0x356c8d(0x1c3)](_0x4b28ef)&&_0x4b28ef['forEach'](function(_0x54e166,_0x4b52cd){var _0x304ee2=_0x356c8d;if(_0x4bc5d8++,_0x103aba[_0x304ee2(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;return;}if(!_0x103aba[_0x304ee2(0x18b)]&&_0x103aba[_0x304ee2(0x1d6)]&&_0x103aba[_0x304ee2(0x21e)]>_0x103aba[_0x304ee2(0x1fb)]){_0x225ccd=!0x0;return;}var _0x22ce48=_0x4b52cd[_0x304ee2(0x251)]();_0x22ce48[_0x304ee2(0x218)]>0x64&&(_0x22ce48=_0x22ce48[_0x304ee2(0x20a)](0x0,0x64)+_0x304ee2(0x21f)),_0x342bbc[_0x304ee2(0x1b6)](_0x31ced0[_0x304ee2(0x220)](_0x479a6f,_0x4b28ef,'Map',_0x22ce48,_0x103aba,function(_0x492ab3){return function(){return _0x492ab3;};}(_0x54e166)));}),!_0x3182d5){try{for(_0x28e6b1 in _0x4b28ef)if(!(_0x4d7da6&&_0x22e692['test'](_0x28e6b1))&&!this[_0x356c8d(0x1fa)](_0x4b28ef,_0x28e6b1,_0x103aba)){if(_0x4bc5d8++,_0x103aba['autoExpandPropertyCount']++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;break;}if(!_0x103aba[_0x356c8d(0x18b)]&&_0x103aba[_0x356c8d(0x1d6)]&&_0x103aba[_0x356c8d(0x21e)]>_0x103aba[_0x356c8d(0x1fb)]){_0x225ccd=!0x0;break;}_0x342bbc['push'](_0x31ced0[_0x356c8d(0x178)](_0x479a6f,_0x472887,_0x4b28ef,_0x147658,_0x28e6b1,_0x103aba));}}catch{}if(_0x472887[_0x356c8d(0x240)]=!0x0,_0x37ca56&&(_0x472887[_0x356c8d(0x166)]=!0x0),!_0x225ccd){var _0x2b4772=[]['concat'](this[_0x356c8d(0x1f2)](_0x4b28ef))['concat'](this[_0x356c8d(0x1a9)](_0x4b28ef));for(_0x3f1e33=0x0,_0x44a924=_0x2b4772[_0x356c8d(0x218)];_0x3f1e33<_0x44a924;_0x3f1e33++)if(_0x28e6b1=_0x2b4772[_0x3f1e33],!(_0x4d7da6&&_0x22e692[_0x356c8d(0x1c0)](_0x28e6b1[_0x356c8d(0x251)]()))&&!this[_0x356c8d(0x1fa)](_0x4b28ef,_0x28e6b1,_0x103aba)&&!_0x472887[_0x356c8d(0x1f4)+_0x28e6b1[_0x356c8d(0x251)]()]){if(_0x4bc5d8++,_0x103aba[_0x356c8d(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;break;}if(!_0x103aba[_0x356c8d(0x18b)]&&_0x103aba[_0x356c8d(0x1d6)]&&_0x103aba['autoExpandPropertyCount']>_0x103aba[_0x356c8d(0x1fb)]){_0x225ccd=!0x0;break;}_0x342bbc[_0x356c8d(0x1b6)](_0x31ced0[_0x356c8d(0x178)](_0x479a6f,_0x472887,_0x4b28ef,_0x147658,_0x28e6b1,_0x103aba));}}}}}if(_0x54f18d[_0x356c8d(0x18e)]=_0x147658,_0x364fd8?(_0x54f18d['value']=_0x4b28ef[_0x356c8d(0x189)](),this[_0x356c8d(0x214)](_0x147658,_0x54f18d,_0x103aba,_0x1f7e1c)):_0x147658==='date'?_0x54f18d['value']=this[_0x356c8d(0x205)][_0x356c8d(0x22d)](_0x4b28ef):_0x147658===_0x356c8d(0x1e2)?_0x54f18d[_0x356c8d(0x24f)]=_0x4b28ef['toString']():_0x147658==='RegExp'?_0x54f18d[_0x356c8d(0x24f)]=this[_0x356c8d(0x1a4)][_0x356c8d(0x22d)](_0x4b28ef):_0x147658===_0x356c8d(0x167)&&this[_0x356c8d(0x174)]?_0x54f18d['value']=this[_0x356c8d(0x174)][_0x356c8d(0x1b3)][_0x356c8d(0x251)][_0x356c8d(0x22d)](_0x4b28ef):!_0x103aba[_0x356c8d(0x1ee)]&&!(_0x147658===_0x356c8d(0x222)||_0x147658===_0x356c8d(0x1c8))&&(delete _0x54f18d[_0x356c8d(0x24f)],_0x54f18d[_0x356c8d(0x215)]=!0x0),_0x225ccd&&(_0x54f18d[_0x356c8d(0x1ca)]=!0x0),_0x4d1f43=_0x103aba[_0x356c8d(0x206)]['current'],_0x103aba['node'][_0x356c8d(0x20c)]=_0x54f18d,this[_0x356c8d(0x1a5)](_0x54f18d,_0x103aba),_0x342bbc[_0x356c8d(0x218)]){for(_0x3f1e33=0x0,_0x44a924=_0x342bbc[_0x356c8d(0x218)];_0x3f1e33<_0x44a924;_0x3f1e33++)_0x342bbc[_0x3f1e33](_0x3f1e33);}_0x479a6f[_0x356c8d(0x218)]&&(_0x54f18d['props']=_0x479a6f);}catch(_0x439f12){_0x533745(_0x439f12,_0x54f18d,_0x103aba);}return this['_additionalMetadata'](_0x4b28ef,_0x54f18d),this[_0x356c8d(0x1e8)](_0x54f18d,_0x103aba),_0x103aba[_0x356c8d(0x206)][_0x356c8d(0x20c)]=_0x4d1f43,_0x103aba[_0x356c8d(0x19b)]--,_0x103aba[_0x356c8d(0x1d6)]=_0x373c08,_0x103aba['autoExpand']&&_0x103aba[_0x356c8d(0x18c)]['pop'](),_0x54f18d;}['_getOwnPropertySymbols'](_0x417f97){return Object['getOwnPropertySymbols']?Object['getOwnPropertySymbols'](_0x417f97):[];}[_0x33d8d7(0x212)](_0x2454b9){var _0x1abd13=_0x33d8d7;return!!(_0x2454b9&&_0x1fa5d0['Set']&&this[_0x1abd13(0x1dd)](_0x2454b9)===_0x1abd13(0x1ad)&&_0x2454b9[_0x1abd13(0x1aa)]);}[_0x33d8d7(0x1fa)](_0x52a944,_0x3a6503,_0x10b99c){var _0x3c1f57=_0x33d8d7;return _0x10b99c[_0x3c1f57(0x22c)]?typeof _0x52a944[_0x3a6503]==_0x3c1f57(0x1f5):!0x1;}[_0x33d8d7(0x173)](_0x44e446){var _0x15e800=_0x33d8d7,_0x22cb40='';return _0x22cb40=typeof _0x44e446,_0x22cb40==='object'?this['_objectToString'](_0x44e446)===_0x15e800(0x1d9)?_0x22cb40='array':this[_0x15e800(0x1dd)](_0x44e446)===_0x15e800(0x1f8)?_0x22cb40=_0x15e800(0x20b):this['_objectToString'](_0x44e446)==='[object\\x20BigInt]'?_0x22cb40=_0x15e800(0x1e2):_0x44e446===null?_0x22cb40=_0x15e800(0x222):_0x44e446['constructor']&&(_0x22cb40=_0x44e446[_0x15e800(0x1e1)]['name']||_0x22cb40):_0x22cb40===_0x15e800(0x1c8)&&this[_0x15e800(0x243)]&&_0x44e446 instanceof this[_0x15e800(0x243)]&&(_0x22cb40=_0x15e800(0x199)),_0x22cb40;}[_0x33d8d7(0x1dd)](_0x4a32a7){var _0x366eca=_0x33d8d7;return Object[_0x366eca(0x1b3)]['toString'][_0x366eca(0x22d)](_0x4a32a7);}[_0x33d8d7(0x188)](_0x509d14){var _0x4f00f2=_0x33d8d7;return _0x509d14===_0x4f00f2(0x1ae)||_0x509d14===_0x4f00f2(0x1a6)||_0x509d14==='number';}[_0x33d8d7(0x1b1)](_0x16f9f8){var _0xc3af35=_0x33d8d7;return _0x16f9f8===_0xc3af35(0x1c7)||_0x16f9f8===_0xc3af35(0x1e9)||_0x16f9f8===_0xc3af35(0x1f3);}['_addProperty'](_0x38a046,_0x236699,_0x3d08fa,_0x32634a,_0x3bbe8d,_0x317ae3){var _0x1a7b9d=this;return function(_0x51c727){var _0x46584f=_0xd1c1,_0x1ca955=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x20c)],_0x4ad0eb=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x1ab)],_0x5f4826=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x200)];_0x3bbe8d[_0x46584f(0x206)]['parent']=_0x1ca955,_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x1ab)]=typeof _0x32634a=='number'?_0x32634a:_0x51c727,_0x38a046[_0x46584f(0x1b6)](_0x1a7b9d[_0x46584f(0x1a7)](_0x236699,_0x3d08fa,_0x32634a,_0x3bbe8d,_0x317ae3)),_0x3bbe8d[_0x46584f(0x206)]['parent']=_0x5f4826,_0x3bbe8d['node'][_0x46584f(0x1ab)]=_0x4ad0eb;};}['_addObjectProperty'](_0x211aff,_0x266e8a,_0xfa9bd3,_0x3c0acf,_0x58079b,_0x599d22,_0x31e50c){var _0x1ba153=_0x33d8d7,_0x18298c=this;return _0x266e8a[_0x1ba153(0x1f4)+_0x58079b[_0x1ba153(0x251)]()]=!0x0,function(_0x8c0660){var _0x27a593=_0x1ba153,_0x387b42=_0x599d22[_0x27a593(0x206)]['current'],_0x596dd2=_0x599d22[_0x27a593(0x206)]['index'],_0x3adf9c=_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)];_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)]=_0x387b42,_0x599d22[_0x27a593(0x206)]['index']=_0x8c0660,_0x211aff[_0x27a593(0x1b6)](_0x18298c[_0x27a593(0x1a7)](_0xfa9bd3,_0x3c0acf,_0x58079b,_0x599d22,_0x31e50c)),_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)]=_0x3adf9c,_0x599d22[_0x27a593(0x206)][_0x27a593(0x1ab)]=_0x596dd2;};}[_0x33d8d7(0x1a7)](_0x2cbc21,_0x354b22,_0x3b9d4f,_0x3a0031,_0x194063){var _0x2b17c0=_0x33d8d7,_0x5b1ce3=this;_0x194063||(_0x194063=function(_0xc5d098,_0x1a8b49){return _0xc5d098[_0x1a8b49];});var _0x1a0c55=_0x3b9d4f['toString'](),_0x41d9cc=_0x3a0031[_0x2b17c0(0x1e4)]||{},_0x407e44=_0x3a0031[_0x2b17c0(0x1ee)],_0x43eb7c=_0x3a0031[_0x2b17c0(0x18b)];try{var _0x5b2660=this[_0x2b17c0(0x1c3)](_0x2cbc21),_0x2c1fc3=_0x1a0c55;_0x5b2660&&_0x2c1fc3[0x0]==='\\x27'&&(_0x2c1fc3=_0x2c1fc3[_0x2b17c0(0x216)](0x1,_0x2c1fc3['length']-0x2));var _0x217e01=_0x3a0031['expressionsToEvaluate']=_0x41d9cc[_0x2b17c0(0x1f4)+_0x2c1fc3];_0x217e01&&(_0x3a0031[_0x2b17c0(0x1ee)]=_0x3a0031['depth']+0x1),_0x3a0031[_0x2b17c0(0x18b)]=!!_0x217e01;var _0x4fb17b=typeof _0x3b9d4f==_0x2b17c0(0x167),_0x12bd61={'name':_0x4fb17b||_0x5b2660?_0x1a0c55:this[_0x2b17c0(0x1fd)](_0x1a0c55)};if(_0x4fb17b&&(_0x12bd61[_0x2b17c0(0x167)]=!0x0),!(_0x354b22===_0x2b17c0(0x21c)||_0x354b22===_0x2b17c0(0x211))){var _0x2ad47e=this[_0x2b17c0(0x171)](_0x2cbc21,_0x3b9d4f);if(_0x2ad47e&&(_0x2ad47e['set']&&(_0x12bd61[_0x2b17c0(0x16f)]=!0x0),_0x2ad47e[_0x2b17c0(0x242)]&&!_0x217e01&&!_0x3a0031[_0x2b17c0(0x176)]))return _0x12bd61['getter']=!0x0,this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031),_0x12bd61;}var _0x45993a;try{_0x45993a=_0x194063(_0x2cbc21,_0x3b9d4f);}catch(_0x41cacc){return _0x12bd61={'name':_0x1a0c55,'type':_0x2b17c0(0x20d),'error':_0x41cacc[_0x2b17c0(0x1fc)]},this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031),_0x12bd61;}var _0x2f6f88=this[_0x2b17c0(0x173)](_0x45993a),_0x364a79=this['_isPrimitiveType'](_0x2f6f88);if(_0x12bd61['type']=_0x2f6f88,_0x364a79)this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031,_0x45993a,function(){var _0x463e83=_0x2b17c0;_0x12bd61['value']=_0x45993a[_0x463e83(0x189)](),!_0x217e01&&_0x5b1ce3[_0x463e83(0x214)](_0x2f6f88,_0x12bd61,_0x3a0031,{});});else{var _0x180677=_0x3a0031[_0x2b17c0(0x1d6)]&&_0x3a0031[_0x2b17c0(0x19b)]<_0x3a0031['autoExpandMaxDepth']&&_0x3a0031[_0x2b17c0(0x18c)][_0x2b17c0(0x17f)](_0x45993a)<0x0&&_0x2f6f88!==_0x2b17c0(0x1f5)&&_0x3a0031['autoExpandPropertyCount']<_0x3a0031[_0x2b17c0(0x1fb)];_0x180677||_0x3a0031[_0x2b17c0(0x19b)]<_0x407e44||_0x217e01?(this[_0x2b17c0(0x1bb)](_0x12bd61,_0x45993a,_0x3a0031,_0x217e01||{}),this[_0x2b17c0(0x181)](_0x45993a,_0x12bd61)):this['_processTreeNodeResult'](_0x12bd61,_0x3a0031,_0x45993a,function(){var _0x18cf0d=_0x2b17c0;_0x2f6f88===_0x18cf0d(0x222)||_0x2f6f88==='undefined'||(delete _0x12bd61['value'],_0x12bd61[_0x18cf0d(0x215)]=!0x0);});}return _0x12bd61;}finally{_0x3a0031[_0x2b17c0(0x1e4)]=_0x41d9cc,_0x3a0031[_0x2b17c0(0x1ee)]=_0x407e44,_0x3a0031[_0x2b17c0(0x18b)]=_0x43eb7c;}}[_0x33d8d7(0x214)](_0x3d4b53,_0x59ae7b,_0x4b7fff,_0x1e4479){var _0x29b0cd=_0x33d8d7,_0x2e289e=_0x1e4479[_0x29b0cd(0x22a)]||_0x4b7fff[_0x29b0cd(0x22a)];if((_0x3d4b53===_0x29b0cd(0x1a6)||_0x3d4b53===_0x29b0cd(0x1e9))&&_0x59ae7b['value']){let _0x252ef3=_0x59ae7b['value'][_0x29b0cd(0x218)];_0x4b7fff[_0x29b0cd(0x179)]+=_0x252ef3,_0x4b7fff[_0x29b0cd(0x179)]>_0x4b7fff[_0x29b0cd(0x1f6)]?(_0x59ae7b[_0x29b0cd(0x215)]='',delete _0x59ae7b[_0x29b0cd(0x24f)]):_0x252ef3>_0x2e289e&&(_0x59ae7b[_0x29b0cd(0x215)]=_0x59ae7b[_0x29b0cd(0x24f)][_0x29b0cd(0x216)](0x0,_0x2e289e),delete _0x59ae7b['value']);}}[_0x33d8d7(0x1c3)](_0x573113){var _0x434a8e=_0x33d8d7;return!!(_0x573113&&_0x1fa5d0[_0x434a8e(0x229)]&&this['_objectToString'](_0x573113)===_0x434a8e(0x1bf)&&_0x573113[_0x434a8e(0x1aa)]);}[_0x33d8d7(0x1fd)](_0x255e60){var _0x389d15=_0x33d8d7;if(_0x255e60['match'](/^\\d+$/))return _0x255e60;var _0x1e90e4;try{_0x1e90e4=JSON[_0x389d15(0x204)](''+_0x255e60);}catch{_0x1e90e4='\\x22'+this[_0x389d15(0x1dd)](_0x255e60)+'\\x22';}return _0x1e90e4[_0x389d15(0x203)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1e90e4=_0x1e90e4['substr'](0x1,_0x1e90e4['length']-0x2):_0x1e90e4=_0x1e90e4[_0x389d15(0x19c)](/'/g,'\\x5c\\x27')[_0x389d15(0x19c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1e90e4;}[_0x33d8d7(0x241)](_0x86f5e9,_0x1a7676,_0xd4c2cd,_0xefca8e){var _0x54ee02=_0x33d8d7;this[_0x54ee02(0x1a5)](_0x86f5e9,_0x1a7676),_0xefca8e&&_0xefca8e(),this['_additionalMetadata'](_0xd4c2cd,_0x86f5e9),this[_0x54ee02(0x1e8)](_0x86f5e9,_0x1a7676);}[_0x33d8d7(0x1a5)](_0x5aa706,_0x5ca2f0){var _0x286bfd=_0x33d8d7;this['_setNodeId'](_0x5aa706,_0x5ca2f0),this[_0x286bfd(0x1cf)](_0x5aa706,_0x5ca2f0),this['_setNodeExpressionPath'](_0x5aa706,_0x5ca2f0),this[_0x286bfd(0x201)](_0x5aa706,_0x5ca2f0);}['_setNodeId'](_0x526b5f,_0xf45b65){}[_0x33d8d7(0x1cf)](_0x176ebd,_0x2f877d){}[_0x33d8d7(0x1a3)](_0x2b417d,_0x48b0d7){}[_0x33d8d7(0x1b2)](_0x20904f){var _0x556fa0=_0x33d8d7;return _0x20904f===this[_0x556fa0(0x183)];}[_0x33d8d7(0x1e8)](_0x374336,_0x15001b){var _0x56adcb=_0x33d8d7;this['_setNodeLabel'](_0x374336,_0x15001b),this['_setNodeExpandableState'](_0x374336),_0x15001b[_0x56adcb(0x1d1)]&&this['_sortProps'](_0x374336),this[_0x56adcb(0x1b0)](_0x374336,_0x15001b),this[_0x56adcb(0x182)](_0x374336,_0x15001b),this[_0x56adcb(0x1ea)](_0x374336);}[_0x33d8d7(0x181)](_0xde5ccd,_0x111a8d){var _0x38b743=_0x33d8d7;let _0x1f74c0;try{_0x1fa5d0['console']&&(_0x1f74c0=_0x1fa5d0['console'][_0x38b743(0x1d8)],_0x1fa5d0[_0x38b743(0x17e)][_0x38b743(0x1d8)]=function(){}),_0xde5ccd&&typeof _0xde5ccd[_0x38b743(0x218)]==_0x38b743(0x1d5)&&(_0x111a8d[_0x38b743(0x218)]=_0xde5ccd[_0x38b743(0x218)]);}catch{}finally{_0x1f74c0&&(_0x1fa5d0[_0x38b743(0x17e)][_0x38b743(0x1d8)]=_0x1f74c0);}if(_0x111a8d[_0x38b743(0x18e)]===_0x38b743(0x1d5)||_0x111a8d['type']===_0x38b743(0x1f3)){if(isNaN(_0x111a8d[_0x38b743(0x24f)]))_0x111a8d[_0x38b743(0x223)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];else switch(_0x111a8d[_0x38b743(0x24f)]){case Number[_0x38b743(0x252)]:_0x111a8d[_0x38b743(0x18a)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];break;case Number[_0x38b743(0x234)]:_0x111a8d[_0x38b743(0x24b)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];break;case 0x0:this[_0x38b743(0x22e)](_0x111a8d[_0x38b743(0x24f)])&&(_0x111a8d[_0x38b743(0x175)]=!0x0);break;}}else _0x111a8d[_0x38b743(0x18e)]===_0x38b743(0x1f5)&&typeof _0xde5ccd[_0x38b743(0x1ff)]==_0x38b743(0x1a6)&&_0xde5ccd['name']&&_0x111a8d['name']&&_0xde5ccd[_0x38b743(0x1ff)]!==_0x111a8d[_0x38b743(0x1ff)]&&(_0x111a8d[_0x38b743(0x17b)]=_0xde5ccd[_0x38b743(0x1ff)]);}[_0x33d8d7(0x22e)](_0x3f87a8){var _0x3d0a2b=_0x33d8d7;return 0x1/_0x3f87a8===Number[_0x3d0a2b(0x234)];}['_sortProps'](_0x2986e0){var _0x202fb4=_0x33d8d7;!_0x2986e0[_0x202fb4(0x1c6)]||!_0x2986e0[_0x202fb4(0x1c6)][_0x202fb4(0x218)]||_0x2986e0[_0x202fb4(0x18e)]===_0x202fb4(0x21c)||_0x2986e0['type']===_0x202fb4(0x229)||_0x2986e0[_0x202fb4(0x18e)]===_0x202fb4(0x249)||_0x2986e0[_0x202fb4(0x1c6)]['sort'](function(_0x36133a,_0x3025f2){var _0xeec050=_0x202fb4,_0x44f2ce=_0x36133a['name']['toLowerCase'](),_0x1e067c=_0x3025f2['name'][_0xeec050(0x196)]();return _0x44f2ce<_0x1e067c?-0x1:_0x44f2ce>_0x1e067c?0x1:0x0;});}[_0x33d8d7(0x1b0)](_0x10588d,_0xfc904){var _0x36c1e4=_0x33d8d7;if(!(_0xfc904[_0x36c1e4(0x22c)]||!_0x10588d['props']||!_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x218)])){for(var _0x395b33=[],_0x45ad74=[],_0x5dbdc3=0x0,_0x50a0c0=_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x218)];_0x5dbdc3<_0x50a0c0;_0x5dbdc3++){var _0x31217e=_0x10588d['props'][_0x5dbdc3];_0x31217e[_0x36c1e4(0x18e)]==='function'?_0x395b33[_0x36c1e4(0x1b6)](_0x31217e):_0x45ad74[_0x36c1e4(0x1b6)](_0x31217e);}if(!(!_0x45ad74[_0x36c1e4(0x218)]||_0x395b33[_0x36c1e4(0x218)]<=0x1)){_0x10588d['props']=_0x45ad74;var _0x5c4438={'functionsNode':!0x0,'props':_0x395b33};this[_0x36c1e4(0x226)](_0x5c4438,_0xfc904),this[_0x36c1e4(0x1a3)](_0x5c4438,_0xfc904),this[_0x36c1e4(0x224)](_0x5c4438),this[_0x36c1e4(0x201)](_0x5c4438,_0xfc904),_0x5c4438['id']+='\\x20f',_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x170)](_0x5c4438);}}}['_addLoadNode'](_0x2687e5,_0x11a805){}['_setNodeExpandableState'](_0x1ab1a0){}[_0x33d8d7(0x22f)](_0x7d1ae8){var _0x58f8ea=_0x33d8d7;return Array['isArray'](_0x7d1ae8)||typeof _0x7d1ae8==_0x58f8ea(0x1da)&&this['_objectToString'](_0x7d1ae8)===_0x58f8ea(0x1d9);}[_0x33d8d7(0x201)](_0x3f54ea,_0x123312){}[_0x33d8d7(0x1ea)](_0x354bd4){var _0x529acc=_0x33d8d7;delete _0x354bd4['_hasSymbolPropertyOnItsPath'],delete _0x354bd4[_0x529acc(0x1ec)],delete _0x354bd4[_0x529acc(0x19f)];}[_0x33d8d7(0x1d3)](_0x504baa,_0x8854bf){}}let _0x46aab6=new _0x13ccf3(),_0x299932={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5d2bb0={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x21b343(_0x4b4bfb,_0x3ccb71,_0x4e9abd,_0x3f4466,_0x2e9d71,_0x59255f){var _0x251ba0=_0x33d8d7;let _0x4339f4,_0x1a4c74;try{_0x1a4c74=_0x4ed4bc(),_0x4339f4=_0x2f1331[_0x3ccb71],!_0x4339f4||_0x1a4c74-_0x4339f4['ts']>0x1f4&&_0x4339f4['count']&&_0x4339f4['time']/_0x4339f4[_0x251ba0(0x1a8)]<0x64?(_0x2f1331[_0x3ccb71]=_0x4339f4={'count':0x0,'time':0x0,'ts':_0x1a4c74},_0x2f1331['hits']={}):_0x1a4c74-_0x2f1331['hits']['ts']>0x32&&_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]&&_0x2f1331['hits'][_0x251ba0(0x1fe)]/_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]<0x64&&(_0x2f1331['hits']={});let _0x5c9150=[],_0x297681=_0x4339f4['reduceLimits']||_0x2f1331['hits'][_0x251ba0(0x250)]?_0x5d2bb0:_0x299932,_0x26b1c9=_0x21fd2d=>{var _0x17bbd7=_0x251ba0;let _0x113335={};return _0x113335[_0x17bbd7(0x1c6)]=_0x21fd2d[_0x17bbd7(0x1c6)],_0x113335[_0x17bbd7(0x192)]=_0x21fd2d['elements'],_0x113335[_0x17bbd7(0x22a)]=_0x21fd2d['strLength'],_0x113335[_0x17bbd7(0x1f6)]=_0x21fd2d[_0x17bbd7(0x1f6)],_0x113335[_0x17bbd7(0x1fb)]=_0x21fd2d[_0x17bbd7(0x1fb)],_0x113335[_0x17bbd7(0x232)]=_0x21fd2d[_0x17bbd7(0x232)],_0x113335['sortProps']=!0x1,_0x113335[_0x17bbd7(0x22c)]=!_0x4b89d2,_0x113335['depth']=0x1,_0x113335[_0x17bbd7(0x19b)]=0x0,_0x113335[_0x17bbd7(0x245)]=_0x17bbd7(0x1e5),_0x113335[_0x17bbd7(0x1d4)]=_0x17bbd7(0x17d),_0x113335[_0x17bbd7(0x1d6)]=!0x0,_0x113335[_0x17bbd7(0x18c)]=[],_0x113335[_0x17bbd7(0x21e)]=0x0,_0x113335[_0x17bbd7(0x176)]=!0x0,_0x113335[_0x17bbd7(0x179)]=0x0,_0x113335[_0x17bbd7(0x206)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x113335;};for(var _0x278ae7=0x0;_0x278ae7<_0x2e9d71[_0x251ba0(0x218)];_0x278ae7++)_0x5c9150[_0x251ba0(0x1b6)](_0x46aab6[_0x251ba0(0x1bb)]({'timeNode':_0x4b4bfb===_0x251ba0(0x1fe)||void 0x0},_0x2e9d71[_0x278ae7],_0x26b1c9(_0x297681),{}));if(_0x4b4bfb==='trace'){let _0xa570f0=Error['stackTraceLimit'];try{Error[_0x251ba0(0x19d)]=0x1/0x0,_0x5c9150['push'](_0x46aab6[_0x251ba0(0x1bb)]({'stackNode':!0x0},new Error()[_0x251ba0(0x1ba)],_0x26b1c9(_0x297681),{'strLength':0x1/0x0}));}finally{Error[_0x251ba0(0x19d)]=_0xa570f0;}}return{'method':_0x251ba0(0x23b),'version':_0x3d9357,'args':[{'ts':_0x4e9abd,'session':_0x3f4466,'args':_0x5c9150,'id':_0x3ccb71,'context':_0x59255f}]};}catch(_0x5dfc8b){return{'method':_0x251ba0(0x23b),'version':_0x3d9357,'args':[{'ts':_0x4e9abd,'session':_0x3f4466,'args':[{'type':_0x251ba0(0x20d),'error':_0x5dfc8b&&_0x5dfc8b[_0x251ba0(0x1fc)]}],'id':_0x3ccb71,'context':_0x59255f}]};}finally{try{if(_0x4339f4&&_0x1a4c74){let _0xc44091=_0x4ed4bc();_0x4339f4['count']++,_0x4339f4['time']+=_0x593b17(_0x1a4c74,_0xc44091),_0x4339f4['ts']=_0xc44091,_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]++,_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1fe)]+=_0x593b17(_0x1a4c74,_0xc44091),_0x2f1331[_0x251ba0(0x22b)]['ts']=_0xc44091,(_0x4339f4[_0x251ba0(0x1a8)]>0x32||_0x4339f4[_0x251ba0(0x1fe)]>0x64)&&(_0x4339f4[_0x251ba0(0x250)]=!0x0),(_0x2f1331[_0x251ba0(0x22b)]['count']>0x3e8||_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1fe)]>0x12c)&&(_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x250)]=!0x0);}}catch{}}}return _0x21b343;}((_0x9ebe41,_0x4e0a72,_0x1b01f5,_0x99fb2,_0x21c2c3,_0x43001e,_0x4dc56f,_0x29f908,_0x15ff22,_0x140422)=>{var _0x5646be=_0x212723;if(_0x9ebe41[_0x5646be(0x225)])return _0x9ebe41[_0x5646be(0x225)];if(!J(_0x9ebe41,_0x29f908,_0x21c2c3))return _0x9ebe41[_0x5646be(0x225)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x9ebe41[_0x5646be(0x225)];let _0x474dcd=W(_0x9ebe41),_0x2597bc=_0x474dcd[_0x5646be(0x24e)],_0xb2b8cb=_0x474dcd[_0x5646be(0x24a)],_0x58804e=_0x474dcd[_0x5646be(0x247)],_0x1be5fb={'hits':{},'ts':{}},_0x3c5be9=Y(_0x9ebe41,_0x15ff22,_0x1be5fb,_0x43001e),_0x41a592=_0xaf5411=>{_0x1be5fb['ts'][_0xaf5411]=_0xb2b8cb();},_0x3aeb28=(_0x3b5724,_0x208469)=>{let _0x381f90=_0x1be5fb['ts'][_0x208469];if(delete _0x1be5fb['ts'][_0x208469],_0x381f90){let _0x3bb8ab=_0x2597bc(_0x381f90,_0xb2b8cb());_0x5a3174(_0x3c5be9('time',_0x3b5724,_0x58804e(),_0x89fcf2,[_0x3bb8ab],_0x208469));}},_0x421a52=_0xeddc6a=>_0x53e2af=>{var _0x396ece=_0x5646be;try{_0x41a592(_0x53e2af),_0xeddc6a(_0x53e2af);}finally{_0x9ebe41['console'][_0x396ece(0x1fe)]=_0xeddc6a;}},_0x5adb26=_0x36c9d6=>_0x26e5f5=>{var _0x4be529=_0x5646be;try{let [_0x2899fa,_0x152676]=_0x26e5f5[_0x4be529(0x1be)](_0x4be529(0x1ac));_0x3aeb28(_0x152676,_0x2899fa),_0x36c9d6(_0x2899fa);}finally{_0x9ebe41[_0x4be529(0x17e)][_0x4be529(0x238)]=_0x36c9d6;}};_0x9ebe41[_0x5646be(0x225)]={'consoleLog':(_0x4c5572,_0x1dead2)=>{var _0x4fac0d=_0x5646be;_0x9ebe41[_0x4fac0d(0x17e)]['log']['name']!==_0x4fac0d(0x191)&&_0x5a3174(_0x3c5be9('log',_0x4c5572,_0x58804e(),_0x89fcf2,_0x1dead2));},'consoleTrace':(_0x34cc22,_0x1e7f66)=>{var _0x42fb2d=_0x5646be;_0x9ebe41['console'][_0x42fb2d(0x23b)][_0x42fb2d(0x1ff)]!==_0x42fb2d(0x1ce)&&_0x5a3174(_0x3c5be9('trace',_0x34cc22,_0x58804e(),_0x89fcf2,_0x1e7f66));},'consoleTime':()=>{var _0x13a169=_0x5646be;_0x9ebe41['console'][_0x13a169(0x1fe)]=_0x421a52(_0x9ebe41[_0x13a169(0x17e)][_0x13a169(0x1fe)]);},'consoleTimeEnd':()=>{var _0x56284f=_0x5646be;_0x9ebe41[_0x56284f(0x17e)]['timeEnd']=_0x5adb26(_0x9ebe41[_0x56284f(0x17e)][_0x56284f(0x238)]);},'autoLog':(_0x322fb5,_0x3a2081)=>{var _0x1aef39=_0x5646be;_0x5a3174(_0x3c5be9(_0x1aef39(0x23b),_0x3a2081,_0x58804e(),_0x89fcf2,[_0x322fb5]));},'autoLogMany':(_0x39c139,_0x1fefac)=>{var _0x3acbc5=_0x5646be;_0x5a3174(_0x3c5be9(_0x3acbc5(0x23b),_0x39c139,_0x58804e(),_0x89fcf2,_0x1fefac));},'autoTrace':(_0x3dd2d6,_0xd8307e)=>{var _0x5f2786=_0x5646be;_0x5a3174(_0x3c5be9(_0x5f2786(0x1cd),_0xd8307e,_0x58804e(),_0x89fcf2,[_0x3dd2d6]));},'autoTraceMany':(_0x891d8c,_0x11b1aa)=>{var _0x5d44a7=_0x5646be;_0x5a3174(_0x3c5be9(_0x5d44a7(0x1cd),_0x891d8c,_0x58804e(),_0x89fcf2,_0x11b1aa));},'autoTime':(_0x1b9d5d,_0x8af011,_0x275260)=>{_0x41a592(_0x275260);},'autoTimeEnd':(_0x21a621,_0x99f92e,_0x52a88e)=>{_0x3aeb28(_0x99f92e,_0x52a88e);},'coverage':_0x26aa2b=>{var _0x533e73=_0x5646be;_0x5a3174({'method':_0x533e73(0x1b7),'version':_0x43001e,'args':[{'id':_0x26aa2b}]});}};let _0x5a3174=b(_0x9ebe41,_0x4e0a72,_0x1b01f5,_0x99fb2,_0x21c2c3,_0x140422),_0x89fcf2=_0x9ebe41['_console_ninja_session'];return _0x9ebe41[_0x5646be(0x225)];})(globalThis,_0x212723(0x20e),_0x212723(0x1c9),_0x212723(0x1f0),_0x212723(0x16d),'1.0.0',_0x212723(0x193),_0x212723(0x1c5),'','');`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

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
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { to: "/auth/login", intent: "link", children: "Sign in" }, void 0, !1, {
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
var import_react18 = require("@remix-run/react"), import_react_hook_form = require("react-hook-form");

// app/common/components/ErrorCard/ErrorCard.tsx
var import_react17 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function ErrorCard({
  heading: heading2,
  error,
  link,
  autoDismiss = 5e3
}) {
  let initialRenderState = !!error, [show, setShow] = (0, import_react17.useState)(initialRenderState), ref = (0, import_react17.useRef)(null), dismiss = () => {
    ref.current && (clearTimeout(ref.current), ref = { current: null }), setShow(!1);
  };
  return (0, import_react17.useEffect)(() => {
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
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function LoginForm() {
  var _a;
  let fetcher = (0, import_react18.useFetcher)(), {
    register,
    formState: { errors }
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
            lineNumber: 28,
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
            lineNumber: 35,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(If_default, { condition: !!formError, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ErrorCard, { error: String(formError) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Button, { type: "submit", size: "lg", children: "Login" }, void 0, !1, {
          fileName: "app/auth/components/LoginForm/LoginForm.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/auth/components/LoginForm/LoginForm.tsx",
      lineNumber: 23,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Button, { to: "/auth/signup", intent: "link", children: "Sign up" }, void 0, !1, {
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
var import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function SignupForm() {
  let fetcher = (0, import_react19.useFetcher)();
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
            type: "email",
            id: "email",
            label: "Email",
            autoComplete: "username",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/SignupForm/SignupForm.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Input_default,
          {
            helpText: "Password must contain at least one letter and one number and have at least 8 characters",
            type: "password",
            id: "password",
            label: "Password",
            autoComplete: "new-password",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/auth/components/SignupForm/SignupForm.tsx",
            lineNumber: 23,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          Input_default,
          {
            type: "password",
            id: "validatePassword",
            label: "Re-type password",
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button, { type: "submit", size: "lg", children: "Sign up" }, void 0, !1, {
          fileName: "app/auth/components/SignupForm/SignupForm.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/auth/components/SignupForm/SignupForm.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/recipes/graphql/fragment/RecipeFragment.ts
var RECIPE_FRAGMENT = `#graphql
	fragment recipeFields on recipe {
		id
		ingredients
		instructions
		url
	}
`;

// app/recipes/graphql/query/RecipesByUserQuery.ts
var RECIPES_BY_USER_QUERY = `#graphql
	query RecipesByUser($userId: String!) @cached {
		recipes(where: {user_id: {_eq: $userId}}) {
			id
			...Recipe
		}
	}

	${RECIPE_FRAGMENT}
`;

// app/recipes/service/recipes.service.ts
var RecipesService = class {
  static get instance() {
    return this.__instance || (this.__instance = new this());
  }
  constructor(httpClient = client) {
    this.client = httpClient;
  }
  async getRecipesByUserId(userId) {
    if (!userId)
      return [];
    let { data } = await this.client.query(
      RECIPES_BY_USER_QUERY,
      {
        variables: { userId }
      }
    );
    return (data == null ? void 0 : data.recipes) ?? [];
  }
}, recipes_service_default = RecipesService.instance;

// app/root.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }
];
async function loader({ request }) {
  let user = await formAuthenticator.isAuthenticated(request), recipes = await recipes_service_default.getRecipesByUserId(user == null ? void 0 : user.id);
  return {
    user,
    isAuthenticated: !!user,
    recipes
  };
}
function App() {
  let { user, isAuthenticated, recipes } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("body", { className: "text-body text-black-900 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(AppContextProvider, { recipes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(UserContextProvider, { isAuthenticated, ...user, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Menu, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react20.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
var shouldRevalidate = () => !1;

// app/routes/($locale).api.recipes.random.$count.tsx
var locale_api_recipes_random_count_exports = {};
__export(locale_api_recipes_random_count_exports, {
  loader: () => loader2
});

// app/recipes/presenters/mealdb.presenter.ts
var MealDBPresenter = class {
  mealDbToRecipe(meal, userId) {
    let image = meal.strMealThumb ? {
      src: meal.strMealThumb
    } : null, url = meal.strSource ? meal.strSource : null;
    return {
      id: Number(meal.idMeal),
      title: meal.strMeal,
      instructions: this.formatInstructions(meal.strInstructions),
      user_id: userId,
      ingredients: this.filterIngredients(meal),
      image,
      url,
      isExternalSrc: !0
    };
  }
  mealDbCategoryToRecipeCategory(mealDbCategory) {
    return {
      name: mealDbCategory.strCategory,
      url: `/recipes/categories/${mealDbCategory.strCategory.toLowerCase()}`,
      image: mealDbCategory.strCategoryThumb
    };
  }
  filterIngredients(meal) {
    let ingredients = Object.entries(meal).filter(([key, value]) => key.includes("Ingredient") && value), measures = Object.entries(meal).filter(([key, value]) => key.includes("Measure") && value);
    return ingredients.map(([key, value], index) => {
      let measure = measures[index][1];
      return `${value} ${measure}`;
    });
  }
  formatInstructions(instructions) {
    return instructions ? instructions.split(`
`).filter((instruction) => instruction).map((instruction) => instruction.trim()) : [];
  }
};

// app/recipes/constants.ts
var MEAL_DB_BASE_URL = "https://www.themealdb.com/api/json/v1/1", MEAL_DB_ENDPOINTS = {
  SEARCH: "search.php",
  RANDOM: "random.php",
  CATEGORIES: "categories.php",
  LIST: "list.php",
  FILTER: "filter.php",
  LOOKUP: "lookup.php",
  PREVIEW_IMAGE: "preview"
}, MEAL_DB_QUERY_PARAMS = {
  SEARCH_BY_NAME: "s",
  SEARCH_BY_FIRST_LETTER: "f",
  SEARCH_BY_ID: "i",
  SEARCH_BY_CATEGORY: "c",
  SEARCH_BY_AREA: "a",
  FILTER_BY_INGREDIENT: "i",
  FILTER_BY_CATEGORY: "c",
  FILTER_BY_AREA: "a"
}, RECIPE_EXTERNAL_QUERY_PARAMS = {
  TITLE: "title",
  INSTRUCTIONS: "instructions",
  INGREDIENTS: "ingredients",
  IMAGE: "image",
  URL: "url",
  USER_ID: "user_id"
};

// app/recipes/service/mealdb.service.ts
var MealDbService = class {
  constructor() {
    this.baseUrl = MEAL_DB_BASE_URL;
    this.endopoints = MEAL_DB_ENDPOINTS;
    this.queryParam = MEAL_DB_QUERY_PARAMS;
    this.presenter = new MealDBPresenter();
  }
  static get instance() {
    return this._instance || (this._instance = new this());
  }
  async getCategories() {
    try {
      let response = await fetch(
        `${this.baseUrl}/${this.endopoints.CATEGORIES}`
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return (await response.json()).categories.map(
        this.presenter.mealDbCategoryToRecipeCategory.bind(this.presenter)
      );
    } catch (e) {
      let error = e;
      throw console.log(...oo_oo2("3386856050_38_6_38_32_4", error.message)), error;
    }
  }
  async getRecipesByCategory(category) {
    try {
      let response = await fetch(
        `${this.baseUrl}/${this.endopoints.FILTER}?${this.queryParam.FILTER_BY_CATEGORY}=${category}`
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return (await response.json()).meals.map(this.presenter.mealDbToRecipe.bind(this.presenter));
    } catch (e) {
      let error = e;
      throw console.log(...oo_oo2("3386856050_58_6_58_32_4", error.message)), error;
    }
  }
  async getRecipeById(id) {
    try {
      let response = await fetch(
        `${this.baseUrl}/${this.endopoints.LOOKUP}?${this.queryParam.SEARCH_BY_ID}=${id}`
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return (await response.json()).meals.map(
        this.presenter.mealDbToRecipe.bind(this.presenter)
      )[0];
    } catch (e) {
      let error = e;
      throw console.log(...oo_oo2("3386856050_80_6_80_32_4", error.message)), error;
    }
  }
  async getRandomRecipe() {
    try {
      let response = await fetch(`${this.baseUrl}/${this.endopoints.RANDOM}`);
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return (await response.json()).meals.map(
        this.presenter.mealDbToRecipe.bind(this.presenter)
      )[0];
    } catch (e) {
      let error = e;
      throw console.log(...oo_oo2("3386856050_99_6_99_32_4", error.message)), error;
    }
  }
  async getMultipeRandomRecipes(amount = 10) {
    try {
      let promises = Array.from({ length: amount }).map(() => this.getRandomRecipe());
      return Promise.all(promises);
    } catch (e) {
      let error = e;
      throw console.log(...oo_oo2("3386856050_114_6_114_32_4", error.message)), error;
    }
  }
}, mealdb_service_default = MealDbService.instance;
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x212723=_0xd1c1;(function(_0x5b17a4,_0x611e00){var _0x12aa36=_0xd1c1,_0x491c98=_0x5b17a4();while(!![]){try{var _0x1bec0d=-parseInt(_0x12aa36(0x1a1))/0x1*(parseInt(_0x12aa36(0x1e7))/0x2)+parseInt(_0x12aa36(0x235))/0x3*(parseInt(_0x12aa36(0x16b))/0x4)+-parseInt(_0x12aa36(0x1c4))/0x5*(-parseInt(_0x12aa36(0x1e6))/0x6)+-parseInt(_0x12aa36(0x24c))/0x7+-parseInt(_0x12aa36(0x219))/0x8+parseInt(_0x12aa36(0x231))/0x9+parseInt(_0x12aa36(0x1de))/0xa;if(_0x1bec0d===_0x611e00)break;else _0x491c98['push'](_0x491c98['shift']());}catch(_0x3c6a86){_0x491c98['push'](_0x491c98['shift']());}}}(_0x3b7a,0x328b7));var j=Object['create'],H=Object[_0x212723(0x18f)],G=Object[_0x212723(0x21b)],ee=Object['getOwnPropertyNames'],te=Object[_0x212723(0x16c)],ne=Object['prototype'][_0x212723(0x195)],re=(_0x4de8b6,_0x48d56b,_0x21038e,_0x4b5402)=>{var _0x7e0771=_0x212723;if(_0x48d56b&&typeof _0x48d56b==_0x7e0771(0x1da)||typeof _0x48d56b=='function'){for(let _0x403e0d of ee(_0x48d56b))!ne[_0x7e0771(0x22d)](_0x4de8b6,_0x403e0d)&&_0x403e0d!==_0x21038e&&H(_0x4de8b6,_0x403e0d,{'get':()=>_0x48d56b[_0x403e0d],'enumerable':!(_0x4b5402=G(_0x48d56b,_0x403e0d))||_0x4b5402[_0x7e0771(0x217)]});}return _0x4de8b6;},x=(_0x3b12ef,_0xc9f9a7,_0x5ee752)=>(_0x5ee752=_0x3b12ef!=null?j(te(_0x3b12ef)):{},re(_0xc9f9a7||!_0x3b12ef||!_0x3b12ef['__es'+'Module']?H(_0x5ee752,_0x212723(0x1f7),{'value':_0x3b12ef,'enumerable':!0x0}):_0x5ee752,_0x3b12ef)),X=class{constructor(_0x55d88b,_0x294fec,_0x424e4b,_0x3ef28e,_0x5323d6){var _0x38ee8f=_0x212723;this[_0x38ee8f(0x21a)]=_0x55d88b,this[_0x38ee8f(0x194)]=_0x294fec,this[_0x38ee8f(0x19a)]=_0x424e4b,this['nodeModules']=_0x3ef28e,this['dockerizedApp']=_0x5323d6,this[_0x38ee8f(0x248)]=!0x0,this[_0x38ee8f(0x20f)]=!0x0,this[_0x38ee8f(0x185)]=!0x1,this[_0x38ee8f(0x168)]=!0x1,this[_0x38ee8f(0x1f9)]=_0x55d88b['process']?.[_0x38ee8f(0x1bc)]?.[_0x38ee8f(0x1c2)]===_0x38ee8f(0x1d0),this[_0x38ee8f(0x18d)]=!this['global']['process']?.[_0x38ee8f(0x213)]?.[_0x38ee8f(0x206)]&&!this['_inNextEdge'],this['_WebSocketClass']=null,this[_0x38ee8f(0x186)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x38ee8f(0x208)]='https://tinyurl.com/37x8b79t',this[_0x38ee8f(0x16a)]=(this['_inBrowser']?_0x38ee8f(0x184):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x212723(0x23c)](){var _0x53ffde=_0x212723;if(this[_0x53ffde(0x1af)])return this[_0x53ffde(0x1af)];let _0x35811c;if(this[_0x53ffde(0x18d)]||this[_0x53ffde(0x1f9)])_0x35811c=this[_0x53ffde(0x21a)]['WebSocket'];else{if(this[_0x53ffde(0x21a)]['process']?.[_0x53ffde(0x1db)])_0x35811c=this[_0x53ffde(0x21a)][_0x53ffde(0x1c1)]?.[_0x53ffde(0x1db)];else try{let _0x5f3ac8=await import(_0x53ffde(0x1ed));_0x35811c=(await import((await import(_0x53ffde(0x190)))[_0x53ffde(0x1ef)](_0x5f3ac8['join'](this[_0x53ffde(0x24d)],_0x53ffde(0x1bd)))['toString']()))[_0x53ffde(0x1f7)];}catch{try{_0x35811c=require(require(_0x53ffde(0x1ed))[_0x53ffde(0x1b4)](this[_0x53ffde(0x24d)],'ws'));}catch{throw new Error(_0x53ffde(0x17c));}}}return this[_0x53ffde(0x1af)]=_0x35811c,_0x35811c;}[_0x212723(0x239)](){var _0x119d50=_0x212723;this['_connecting']||this[_0x119d50(0x185)]||this['_connectAttemptCount']>=this[_0x119d50(0x210)]||(this[_0x119d50(0x20f)]=!0x1,this[_0x119d50(0x168)]=!0x0,this[_0x119d50(0x186)]++,this[_0x119d50(0x1e0)]=new Promise((_0xd71cbf,_0x4f02f8)=>{var _0x37cc72=_0x119d50;this['getWebSocketClass']()[_0x37cc72(0x202)](_0x2c6c41=>{var _0x1391f4=_0x37cc72;let _0x23d605=new _0x2c6c41(_0x1391f4(0x1cb)+(!this[_0x1391f4(0x18d)]&&this[_0x1391f4(0x233)]?'gateway.docker.internal':this[_0x1391f4(0x194)])+':'+this[_0x1391f4(0x19a)]);_0x23d605[_0x1391f4(0x236)]=()=>{var _0x5ef0e6=_0x1391f4;this['_allowedToSend']=!0x1,this[_0x5ef0e6(0x180)](_0x23d605),this['_attemptToReconnectShortly'](),_0x4f02f8(new Error(_0x5ef0e6(0x21d)));},_0x23d605[_0x1391f4(0x165)]=()=>{var _0x592b97=_0x1391f4;this[_0x592b97(0x18d)]||_0x23d605['_socket']&&_0x23d605[_0x592b97(0x1b9)][_0x592b97(0x16e)]&&_0x23d605['_socket']['unref'](),_0xd71cbf(_0x23d605);},_0x23d605[_0x1391f4(0x177)]=()=>{var _0xbc6ded=_0x1391f4;this[_0xbc6ded(0x20f)]=!0x0,this[_0xbc6ded(0x180)](_0x23d605),this[_0xbc6ded(0x1a0)]();},_0x23d605['onmessage']=_0x26846d=>{var _0x2057ad=_0x1391f4;try{_0x26846d&&_0x26846d[_0x2057ad(0x23d)]&&this['_inBrowser']&&JSON[_0x2057ad(0x207)](_0x26846d[_0x2057ad(0x23d)])[_0x2057ad(0x237)]===_0x2057ad(0x198)&&this[_0x2057ad(0x21a)][_0x2057ad(0x1dc)][_0x2057ad(0x198)]();}catch{}};})[_0x37cc72(0x202)](_0x418e10=>(this[_0x37cc72(0x185)]=!0x0,this[_0x37cc72(0x168)]=!0x1,this[_0x37cc72(0x20f)]=!0x1,this[_0x37cc72(0x248)]=!0x0,this[_0x37cc72(0x186)]=0x0,_0x418e10))[_0x37cc72(0x221)](_0x36ea21=>(this[_0x37cc72(0x185)]=!0x1,this[_0x37cc72(0x168)]=!0x1,console[_0x37cc72(0x1eb)](_0x37cc72(0x1e3)+this[_0x37cc72(0x208)]),_0x4f02f8(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x36ea21&&_0x36ea21['message'])))));}));}[_0x212723(0x180)](_0x53a6a1){var _0x446c55=_0x212723;this[_0x446c55(0x185)]=!0x1,this[_0x446c55(0x168)]=!0x1;try{_0x53a6a1[_0x446c55(0x177)]=null,_0x53a6a1['onerror']=null,_0x53a6a1[_0x446c55(0x165)]=null;}catch{}try{_0x53a6a1['readyState']<0x2&&_0x53a6a1[_0x446c55(0x1cc)]();}catch{}}[_0x212723(0x1a0)](){var _0x75f664=_0x212723;clearTimeout(this[_0x75f664(0x23f)]),!(this[_0x75f664(0x186)]>=this['_maxConnectAttemptCount'])&&(this[_0x75f664(0x23f)]=setTimeout(()=>{var _0x40c8f5=_0x75f664;this[_0x40c8f5(0x185)]||this['_connecting']||(this[_0x40c8f5(0x239)](),this['_ws']?.['catch'](()=>this[_0x40c8f5(0x1a0)]()));},0x1f4),this[_0x75f664(0x23f)][_0x75f664(0x16e)]&&this[_0x75f664(0x23f)][_0x75f664(0x16e)]());}async[_0x212723(0x17a)](_0x586815){var _0x59ee7f=_0x212723;try{if(!this[_0x59ee7f(0x248)])return;this[_0x59ee7f(0x20f)]&&this[_0x59ee7f(0x239)](),(await this[_0x59ee7f(0x1e0)])['send'](JSON[_0x59ee7f(0x204)](_0x586815));}catch(_0x37e105){console['warn'](this[_0x59ee7f(0x16a)]+':\\x20'+(_0x37e105&&_0x37e105[_0x59ee7f(0x1fc)])),this['_allowedToSend']=!0x1,this[_0x59ee7f(0x1a0)]();}}};function b(_0x2a13a0,_0x2d13ba,_0x130d5e,_0xdb4763,_0x4463f9,_0x3ce359){var _0x234661=_0x212723;let _0x1af000=_0x130d5e['split'](',')[_0x234661(0x1df)](_0x371aa3=>{var _0x681b53=_0x234661;try{_0x2a13a0['_console_ninja_session']||((_0x4463f9===_0x681b53(0x187)||_0x4463f9==='remix'||_0x4463f9==='astro'||_0x4463f9===_0x681b53(0x230))&&(_0x4463f9+=!_0x2a13a0[_0x681b53(0x1c1)]?.[_0x681b53(0x213)]?.[_0x681b53(0x206)]&&_0x2a13a0['process']?.[_0x681b53(0x1bc)]?.['NEXT_RUNTIME']!==_0x681b53(0x1d0)?_0x681b53(0x19e):_0x681b53(0x1d2)),_0x2a13a0[_0x681b53(0x246)]={'id':+new Date(),'tool':_0x4463f9});let _0x2d5198=new X(_0x2a13a0,_0x2d13ba,_0x371aa3,_0xdb4763,_0x3ce359);return _0x2d5198[_0x681b53(0x17a)]['bind'](_0x2d5198);}catch(_0x2eccaa){return console[_0x681b53(0x1eb)](_0x681b53(0x23e),_0x2eccaa&&_0x2eccaa[_0x681b53(0x1fc)]),()=>{};}});return _0x420043=>_0x1af000[_0x234661(0x1aa)](_0x37a36b=>_0x37a36b(_0x420043));}function _0x3b7a(){var _0x4bd5fc=['totalStrLength','default','[object\\x20Date]','_inNextEdge','_blacklistedProperty','autoExpandLimit','message','_propertyName','time','name','parent','_setNodePermissions','then','match','stringify','_dateToString','node','parse','_webSocketErrorDocsLink','hrtime','slice','date','current','unknown','127.0.0.1','_allowedToConnectOnSend','_maxConnectAttemptCount','Error','_isSet','versions','_capIfString','capped','substr','enumerable','length','794896NHSPZJ','global','getOwnPropertyDescriptor','array','logger\\x20websocket\\x20error','autoExpandPropertyCount','...','_addProperty','catch','null','nan','_setNodeExpandableState','_console_ninja','_setNodeId','_numberRegExp','Buffer','Map','strLength','hits','noFunctions','call','_isNegativeZero','_isArray','angular','817560YFqrDT','autoExpandMaxDepth','dockerizedApp','NEGATIVE_INFINITY','36138yHKXQN','onerror','method','timeEnd','_connectToHostNow','Symbol','log','getWebSocketClass','data','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_reconnectTimeout','_p_length','_processTreeNodeResult','get','_HTMLAllCollection','_consoleNinjaAllowedToStart','expId','_console_ninja_session','now','_allowedToSend','Set','timeStamp','negativeInfinity','542402zkRDAd','nodeModules','elapsed','value','reduceLimits','toString','POSITIVE_INFINITY','onopen','_p_name','symbol','_connecting','_keyStrRegExp','_sendErrorMessage','124UAfYsg','getPrototypeOf','remix','unref','setter','unshift','_getOwnPropertyDescriptor','perf_hooks','_type','_Symbol','negativeZero','resolveGetters','onclose','_addObjectProperty','allStrLength','send','funcName','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','root_exp','console','indexOf','_disposeWebsocket','_additionalMetadata','_addLoadNode','_undefined','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connected','_connectAttemptCount','next.js','_isPrimitiveType','valueOf','positiveInfinity','isExpressionToEvaluate','autoExpandPreviousObjects','_inBrowser','type','defineProperty','url','disabledLog','elements','1703100662494','host','hasOwnProperty','toLowerCase','hostname','reload','HTMLAllCollection','port','level','replace','stackTraceLimit','\\x20browser','_hasMapOnItsPath','_attemptToReconnectShortly','1FUxdqg','cappedElements','_setNodeLabel','_regExpToString','_treeNodePropertiesBeforeFullValue','string','_property','count','_getOwnPropertySymbols','forEach','index',':logPointId:','[object\\x20Set]','boolean','_WebSocketClass','_addFunctionsNode','_isPrimitiveWrapperType','_isUndefined','prototype','join','performance','push','coverage','_quotedRegExp','_socket','stack','serialize','env','ws/index.js','split','[object\\x20Map]','test','process','NEXT_RUNTIME','_isMap','6705FEzOiw',["localhost","127.0.0.1","example.cypress.io","mattheri","192.168.2.16"],'props','Boolean','undefined','50597','cappedProps','ws://','close','trace','disabledTrace','_setNodeQueryPath','edge','sortProps','\\x20server','_setNodeExpressionPath','rootExpression','number','autoExpand','nuxt','error','[object\\x20Array]','object','_WebSocket','location','_objectToString','2160750xurfAx','map','_ws','constructor','bigint','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','expressionsToEvaluate','root_exp_id','330xOuMnL','740434wewpAd','_treeNodePropertiesAfterFullValue','String','_cleanNode','warn','_hasSetOnItsPath','path','depth','pathToFileURL',"c:\\\\Users\\\\mathi\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.268\\\\node_modules",'getOwnPropertyNames','_getOwnPropertyNames','Number','_p_','function'];_0x3b7a=function(){return _0x4bd5fc;};return _0x3b7a();}function W(_0x54d4ee){var _0x34a036=_0x212723;let _0x905354=function(_0x7582c2,_0x91dc3b){return _0x91dc3b-_0x7582c2;},_0x55878c;if(_0x54d4ee[_0x34a036(0x1b5)])_0x55878c=function(){var _0x491441=_0x34a036;return _0x54d4ee[_0x491441(0x1b5)]['now']();};else{if(_0x54d4ee[_0x34a036(0x1c1)]&&_0x54d4ee['process'][_0x34a036(0x209)]&&_0x54d4ee[_0x34a036(0x1c1)]?.[_0x34a036(0x1bc)]?.[_0x34a036(0x1c2)]!==_0x34a036(0x1d0))_0x55878c=function(){var _0x10e56b=_0x34a036;return _0x54d4ee[_0x10e56b(0x1c1)][_0x10e56b(0x209)]();},_0x905354=function(_0x5cf2e4,_0x321067){return 0x3e8*(_0x321067[0x0]-_0x5cf2e4[0x0])+(_0x321067[0x1]-_0x5cf2e4[0x1])/0xf4240;};else try{let {performance:_0x4283dc}=require(_0x34a036(0x172));_0x55878c=function(){return _0x4283dc['now']();};}catch{_0x55878c=function(){return+new Date();};}}return{'elapsed':_0x905354,'timeStamp':_0x55878c,'now':()=>Date['now']()};}function J(_0x373b2,_0x1a4caf,_0x242640){var _0x16a6a6=_0x212723;if(_0x373b2[_0x16a6a6(0x244)]!==void 0x0)return _0x373b2[_0x16a6a6(0x244)];let _0x379e0f=_0x373b2[_0x16a6a6(0x1c1)]?.[_0x16a6a6(0x213)]?.[_0x16a6a6(0x206)]||_0x373b2['process']?.[_0x16a6a6(0x1bc)]?.[_0x16a6a6(0x1c2)]===_0x16a6a6(0x1d0);return _0x379e0f&&_0x242640===_0x16a6a6(0x1d7)?_0x373b2[_0x16a6a6(0x244)]=!0x1:_0x373b2[_0x16a6a6(0x244)]=_0x379e0f||!_0x1a4caf||_0x373b2['location']?.[_0x16a6a6(0x197)]&&_0x1a4caf['includes'](_0x373b2[_0x16a6a6(0x1dc)][_0x16a6a6(0x197)]),_0x373b2[_0x16a6a6(0x244)];}function _0xd1c1(_0x17882d,_0x12bda3){var _0x3b7ad4=_0x3b7a();return _0xd1c1=function(_0xd1c155,_0x143287){_0xd1c155=_0xd1c155-0x165;var _0x42b36a=_0x3b7ad4[_0xd1c155];return _0x42b36a;},_0xd1c1(_0x17882d,_0x12bda3);}function Y(_0x1fa5d0,_0x4b89d2,_0x2f1331,_0x3d9357){var _0x33d8d7=_0x212723;_0x1fa5d0=_0x1fa5d0,_0x4b89d2=_0x4b89d2,_0x2f1331=_0x2f1331,_0x3d9357=_0x3d9357;let _0x4bc36b=W(_0x1fa5d0),_0x593b17=_0x4bc36b[_0x33d8d7(0x24e)],_0x4ed4bc=_0x4bc36b[_0x33d8d7(0x24a)];class _0x13ccf3{constructor(){var _0x4a956c=_0x33d8d7;this[_0x4a956c(0x169)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4a956c(0x227)]=/^(0|[1-9][0-9]*)$/,this[_0x4a956c(0x1b8)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x1fa5d0[_0x4a956c(0x1c8)],this[_0x4a956c(0x243)]=_0x1fa5d0[_0x4a956c(0x199)],this['_getOwnPropertyDescriptor']=Object[_0x4a956c(0x21b)],this[_0x4a956c(0x1f2)]=Object[_0x4a956c(0x1f1)],this[_0x4a956c(0x174)]=_0x1fa5d0[_0x4a956c(0x23a)],this['_regExpToString']=RegExp[_0x4a956c(0x1b3)][_0x4a956c(0x251)],this['_dateToString']=Date[_0x4a956c(0x1b3)][_0x4a956c(0x251)];}[_0x33d8d7(0x1bb)](_0x54f18d,_0x4b28ef,_0x103aba,_0x1f7e1c){var _0x356c8d=_0x33d8d7,_0x31ced0=this,_0x373c08=_0x103aba[_0x356c8d(0x1d6)];function _0x533745(_0xce2884,_0x54901f,_0x50c387){var _0x51a1c5=_0x356c8d;_0x54901f[_0x51a1c5(0x18e)]=_0x51a1c5(0x20d),_0x54901f[_0x51a1c5(0x1d8)]=_0xce2884[_0x51a1c5(0x1fc)],_0x4d1f43=_0x50c387[_0x51a1c5(0x206)][_0x51a1c5(0x20c)],_0x50c387['node'][_0x51a1c5(0x20c)]=_0x54901f,_0x31ced0[_0x51a1c5(0x1a5)](_0x54901f,_0x50c387);}try{_0x103aba[_0x356c8d(0x19b)]++,_0x103aba['autoExpand']&&_0x103aba[_0x356c8d(0x18c)]['push'](_0x4b28ef);var _0x3f1e33,_0x44a924,_0x43f7fa,_0x5eae6b,_0x479a6f=[],_0x342bbc=[],_0x28e6b1,_0x147658=this[_0x356c8d(0x173)](_0x4b28ef),_0x4d7da6=_0x147658===_0x356c8d(0x21c),_0x3182d5=!0x1,_0x37ca56=_0x147658===_0x356c8d(0x1f5),_0x7159fb=this[_0x356c8d(0x188)](_0x147658),_0x46bf44=this[_0x356c8d(0x1b1)](_0x147658),_0x364fd8=_0x7159fb||_0x46bf44,_0x472887={},_0x4bc5d8=0x0,_0x225ccd=!0x1,_0x4d1f43,_0x22e692=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x103aba[_0x356c8d(0x1ee)]){if(_0x4d7da6){if(_0x44a924=_0x4b28ef[_0x356c8d(0x218)],_0x44a924>_0x103aba[_0x356c8d(0x192)]){for(_0x43f7fa=0x0,_0x5eae6b=_0x103aba[_0x356c8d(0x192)],_0x3f1e33=_0x43f7fa;_0x3f1e33<_0x5eae6b;_0x3f1e33++)_0x342bbc[_0x356c8d(0x1b6)](_0x31ced0[_0x356c8d(0x220)](_0x479a6f,_0x4b28ef,_0x147658,_0x3f1e33,_0x103aba));_0x54f18d[_0x356c8d(0x1a2)]=!0x0;}else{for(_0x43f7fa=0x0,_0x5eae6b=_0x44a924,_0x3f1e33=_0x43f7fa;_0x3f1e33<_0x5eae6b;_0x3f1e33++)_0x342bbc['push'](_0x31ced0[_0x356c8d(0x220)](_0x479a6f,_0x4b28ef,_0x147658,_0x3f1e33,_0x103aba));}_0x103aba[_0x356c8d(0x21e)]+=_0x342bbc[_0x356c8d(0x218)];}if(!(_0x147658==='null'||_0x147658===_0x356c8d(0x1c8))&&!_0x7159fb&&_0x147658!==_0x356c8d(0x1e9)&&_0x147658!==_0x356c8d(0x228)&&_0x147658!==_0x356c8d(0x1e2)){var _0x1f127c=_0x1f7e1c[_0x356c8d(0x1c6)]||_0x103aba[_0x356c8d(0x1c6)];if(this[_0x356c8d(0x212)](_0x4b28ef)?(_0x3f1e33=0x0,_0x4b28ef[_0x356c8d(0x1aa)](function(_0x4108e4){var _0x4b3d9a=_0x356c8d;if(_0x4bc5d8++,_0x103aba[_0x4b3d9a(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;return;}if(!_0x103aba[_0x4b3d9a(0x18b)]&&_0x103aba[_0x4b3d9a(0x1d6)]&&_0x103aba['autoExpandPropertyCount']>_0x103aba[_0x4b3d9a(0x1fb)]){_0x225ccd=!0x0;return;}_0x342bbc[_0x4b3d9a(0x1b6)](_0x31ced0['_addProperty'](_0x479a6f,_0x4b28ef,_0x4b3d9a(0x249),_0x3f1e33++,_0x103aba,function(_0x5b808e){return function(){return _0x5b808e;};}(_0x4108e4)));})):this[_0x356c8d(0x1c3)](_0x4b28ef)&&_0x4b28ef['forEach'](function(_0x54e166,_0x4b52cd){var _0x304ee2=_0x356c8d;if(_0x4bc5d8++,_0x103aba[_0x304ee2(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;return;}if(!_0x103aba[_0x304ee2(0x18b)]&&_0x103aba[_0x304ee2(0x1d6)]&&_0x103aba[_0x304ee2(0x21e)]>_0x103aba[_0x304ee2(0x1fb)]){_0x225ccd=!0x0;return;}var _0x22ce48=_0x4b52cd[_0x304ee2(0x251)]();_0x22ce48[_0x304ee2(0x218)]>0x64&&(_0x22ce48=_0x22ce48[_0x304ee2(0x20a)](0x0,0x64)+_0x304ee2(0x21f)),_0x342bbc[_0x304ee2(0x1b6)](_0x31ced0[_0x304ee2(0x220)](_0x479a6f,_0x4b28ef,'Map',_0x22ce48,_0x103aba,function(_0x492ab3){return function(){return _0x492ab3;};}(_0x54e166)));}),!_0x3182d5){try{for(_0x28e6b1 in _0x4b28ef)if(!(_0x4d7da6&&_0x22e692['test'](_0x28e6b1))&&!this[_0x356c8d(0x1fa)](_0x4b28ef,_0x28e6b1,_0x103aba)){if(_0x4bc5d8++,_0x103aba['autoExpandPropertyCount']++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;break;}if(!_0x103aba[_0x356c8d(0x18b)]&&_0x103aba[_0x356c8d(0x1d6)]&&_0x103aba[_0x356c8d(0x21e)]>_0x103aba[_0x356c8d(0x1fb)]){_0x225ccd=!0x0;break;}_0x342bbc['push'](_0x31ced0[_0x356c8d(0x178)](_0x479a6f,_0x472887,_0x4b28ef,_0x147658,_0x28e6b1,_0x103aba));}}catch{}if(_0x472887[_0x356c8d(0x240)]=!0x0,_0x37ca56&&(_0x472887[_0x356c8d(0x166)]=!0x0),!_0x225ccd){var _0x2b4772=[]['concat'](this[_0x356c8d(0x1f2)](_0x4b28ef))['concat'](this[_0x356c8d(0x1a9)](_0x4b28ef));for(_0x3f1e33=0x0,_0x44a924=_0x2b4772[_0x356c8d(0x218)];_0x3f1e33<_0x44a924;_0x3f1e33++)if(_0x28e6b1=_0x2b4772[_0x3f1e33],!(_0x4d7da6&&_0x22e692[_0x356c8d(0x1c0)](_0x28e6b1[_0x356c8d(0x251)]()))&&!this[_0x356c8d(0x1fa)](_0x4b28ef,_0x28e6b1,_0x103aba)&&!_0x472887[_0x356c8d(0x1f4)+_0x28e6b1[_0x356c8d(0x251)]()]){if(_0x4bc5d8++,_0x103aba[_0x356c8d(0x21e)]++,_0x4bc5d8>_0x1f127c){_0x225ccd=!0x0;break;}if(!_0x103aba[_0x356c8d(0x18b)]&&_0x103aba[_0x356c8d(0x1d6)]&&_0x103aba['autoExpandPropertyCount']>_0x103aba[_0x356c8d(0x1fb)]){_0x225ccd=!0x0;break;}_0x342bbc[_0x356c8d(0x1b6)](_0x31ced0[_0x356c8d(0x178)](_0x479a6f,_0x472887,_0x4b28ef,_0x147658,_0x28e6b1,_0x103aba));}}}}}if(_0x54f18d[_0x356c8d(0x18e)]=_0x147658,_0x364fd8?(_0x54f18d['value']=_0x4b28ef[_0x356c8d(0x189)](),this[_0x356c8d(0x214)](_0x147658,_0x54f18d,_0x103aba,_0x1f7e1c)):_0x147658==='date'?_0x54f18d['value']=this[_0x356c8d(0x205)][_0x356c8d(0x22d)](_0x4b28ef):_0x147658===_0x356c8d(0x1e2)?_0x54f18d[_0x356c8d(0x24f)]=_0x4b28ef['toString']():_0x147658==='RegExp'?_0x54f18d[_0x356c8d(0x24f)]=this[_0x356c8d(0x1a4)][_0x356c8d(0x22d)](_0x4b28ef):_0x147658===_0x356c8d(0x167)&&this[_0x356c8d(0x174)]?_0x54f18d['value']=this[_0x356c8d(0x174)][_0x356c8d(0x1b3)][_0x356c8d(0x251)][_0x356c8d(0x22d)](_0x4b28ef):!_0x103aba[_0x356c8d(0x1ee)]&&!(_0x147658===_0x356c8d(0x222)||_0x147658===_0x356c8d(0x1c8))&&(delete _0x54f18d[_0x356c8d(0x24f)],_0x54f18d[_0x356c8d(0x215)]=!0x0),_0x225ccd&&(_0x54f18d[_0x356c8d(0x1ca)]=!0x0),_0x4d1f43=_0x103aba[_0x356c8d(0x206)]['current'],_0x103aba['node'][_0x356c8d(0x20c)]=_0x54f18d,this[_0x356c8d(0x1a5)](_0x54f18d,_0x103aba),_0x342bbc[_0x356c8d(0x218)]){for(_0x3f1e33=0x0,_0x44a924=_0x342bbc[_0x356c8d(0x218)];_0x3f1e33<_0x44a924;_0x3f1e33++)_0x342bbc[_0x3f1e33](_0x3f1e33);}_0x479a6f[_0x356c8d(0x218)]&&(_0x54f18d['props']=_0x479a6f);}catch(_0x439f12){_0x533745(_0x439f12,_0x54f18d,_0x103aba);}return this['_additionalMetadata'](_0x4b28ef,_0x54f18d),this[_0x356c8d(0x1e8)](_0x54f18d,_0x103aba),_0x103aba[_0x356c8d(0x206)][_0x356c8d(0x20c)]=_0x4d1f43,_0x103aba[_0x356c8d(0x19b)]--,_0x103aba[_0x356c8d(0x1d6)]=_0x373c08,_0x103aba['autoExpand']&&_0x103aba[_0x356c8d(0x18c)]['pop'](),_0x54f18d;}['_getOwnPropertySymbols'](_0x417f97){return Object['getOwnPropertySymbols']?Object['getOwnPropertySymbols'](_0x417f97):[];}[_0x33d8d7(0x212)](_0x2454b9){var _0x1abd13=_0x33d8d7;return!!(_0x2454b9&&_0x1fa5d0['Set']&&this[_0x1abd13(0x1dd)](_0x2454b9)===_0x1abd13(0x1ad)&&_0x2454b9[_0x1abd13(0x1aa)]);}[_0x33d8d7(0x1fa)](_0x52a944,_0x3a6503,_0x10b99c){var _0x3c1f57=_0x33d8d7;return _0x10b99c[_0x3c1f57(0x22c)]?typeof _0x52a944[_0x3a6503]==_0x3c1f57(0x1f5):!0x1;}[_0x33d8d7(0x173)](_0x44e446){var _0x15e800=_0x33d8d7,_0x22cb40='';return _0x22cb40=typeof _0x44e446,_0x22cb40==='object'?this['_objectToString'](_0x44e446)===_0x15e800(0x1d9)?_0x22cb40='array':this[_0x15e800(0x1dd)](_0x44e446)===_0x15e800(0x1f8)?_0x22cb40=_0x15e800(0x20b):this['_objectToString'](_0x44e446)==='[object\\x20BigInt]'?_0x22cb40=_0x15e800(0x1e2):_0x44e446===null?_0x22cb40=_0x15e800(0x222):_0x44e446['constructor']&&(_0x22cb40=_0x44e446[_0x15e800(0x1e1)]['name']||_0x22cb40):_0x22cb40===_0x15e800(0x1c8)&&this[_0x15e800(0x243)]&&_0x44e446 instanceof this[_0x15e800(0x243)]&&(_0x22cb40=_0x15e800(0x199)),_0x22cb40;}[_0x33d8d7(0x1dd)](_0x4a32a7){var _0x366eca=_0x33d8d7;return Object[_0x366eca(0x1b3)]['toString'][_0x366eca(0x22d)](_0x4a32a7);}[_0x33d8d7(0x188)](_0x509d14){var _0x4f00f2=_0x33d8d7;return _0x509d14===_0x4f00f2(0x1ae)||_0x509d14===_0x4f00f2(0x1a6)||_0x509d14==='number';}[_0x33d8d7(0x1b1)](_0x16f9f8){var _0xc3af35=_0x33d8d7;return _0x16f9f8===_0xc3af35(0x1c7)||_0x16f9f8===_0xc3af35(0x1e9)||_0x16f9f8===_0xc3af35(0x1f3);}['_addProperty'](_0x38a046,_0x236699,_0x3d08fa,_0x32634a,_0x3bbe8d,_0x317ae3){var _0x1a7b9d=this;return function(_0x51c727){var _0x46584f=_0xd1c1,_0x1ca955=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x20c)],_0x4ad0eb=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x1ab)],_0x5f4826=_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x200)];_0x3bbe8d[_0x46584f(0x206)]['parent']=_0x1ca955,_0x3bbe8d[_0x46584f(0x206)][_0x46584f(0x1ab)]=typeof _0x32634a=='number'?_0x32634a:_0x51c727,_0x38a046[_0x46584f(0x1b6)](_0x1a7b9d[_0x46584f(0x1a7)](_0x236699,_0x3d08fa,_0x32634a,_0x3bbe8d,_0x317ae3)),_0x3bbe8d[_0x46584f(0x206)]['parent']=_0x5f4826,_0x3bbe8d['node'][_0x46584f(0x1ab)]=_0x4ad0eb;};}['_addObjectProperty'](_0x211aff,_0x266e8a,_0xfa9bd3,_0x3c0acf,_0x58079b,_0x599d22,_0x31e50c){var _0x1ba153=_0x33d8d7,_0x18298c=this;return _0x266e8a[_0x1ba153(0x1f4)+_0x58079b[_0x1ba153(0x251)]()]=!0x0,function(_0x8c0660){var _0x27a593=_0x1ba153,_0x387b42=_0x599d22[_0x27a593(0x206)]['current'],_0x596dd2=_0x599d22[_0x27a593(0x206)]['index'],_0x3adf9c=_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)];_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)]=_0x387b42,_0x599d22[_0x27a593(0x206)]['index']=_0x8c0660,_0x211aff[_0x27a593(0x1b6)](_0x18298c[_0x27a593(0x1a7)](_0xfa9bd3,_0x3c0acf,_0x58079b,_0x599d22,_0x31e50c)),_0x599d22[_0x27a593(0x206)][_0x27a593(0x200)]=_0x3adf9c,_0x599d22[_0x27a593(0x206)][_0x27a593(0x1ab)]=_0x596dd2;};}[_0x33d8d7(0x1a7)](_0x2cbc21,_0x354b22,_0x3b9d4f,_0x3a0031,_0x194063){var _0x2b17c0=_0x33d8d7,_0x5b1ce3=this;_0x194063||(_0x194063=function(_0xc5d098,_0x1a8b49){return _0xc5d098[_0x1a8b49];});var _0x1a0c55=_0x3b9d4f['toString'](),_0x41d9cc=_0x3a0031[_0x2b17c0(0x1e4)]||{},_0x407e44=_0x3a0031[_0x2b17c0(0x1ee)],_0x43eb7c=_0x3a0031[_0x2b17c0(0x18b)];try{var _0x5b2660=this[_0x2b17c0(0x1c3)](_0x2cbc21),_0x2c1fc3=_0x1a0c55;_0x5b2660&&_0x2c1fc3[0x0]==='\\x27'&&(_0x2c1fc3=_0x2c1fc3[_0x2b17c0(0x216)](0x1,_0x2c1fc3['length']-0x2));var _0x217e01=_0x3a0031['expressionsToEvaluate']=_0x41d9cc[_0x2b17c0(0x1f4)+_0x2c1fc3];_0x217e01&&(_0x3a0031[_0x2b17c0(0x1ee)]=_0x3a0031['depth']+0x1),_0x3a0031[_0x2b17c0(0x18b)]=!!_0x217e01;var _0x4fb17b=typeof _0x3b9d4f==_0x2b17c0(0x167),_0x12bd61={'name':_0x4fb17b||_0x5b2660?_0x1a0c55:this[_0x2b17c0(0x1fd)](_0x1a0c55)};if(_0x4fb17b&&(_0x12bd61[_0x2b17c0(0x167)]=!0x0),!(_0x354b22===_0x2b17c0(0x21c)||_0x354b22===_0x2b17c0(0x211))){var _0x2ad47e=this[_0x2b17c0(0x171)](_0x2cbc21,_0x3b9d4f);if(_0x2ad47e&&(_0x2ad47e['set']&&(_0x12bd61[_0x2b17c0(0x16f)]=!0x0),_0x2ad47e[_0x2b17c0(0x242)]&&!_0x217e01&&!_0x3a0031[_0x2b17c0(0x176)]))return _0x12bd61['getter']=!0x0,this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031),_0x12bd61;}var _0x45993a;try{_0x45993a=_0x194063(_0x2cbc21,_0x3b9d4f);}catch(_0x41cacc){return _0x12bd61={'name':_0x1a0c55,'type':_0x2b17c0(0x20d),'error':_0x41cacc[_0x2b17c0(0x1fc)]},this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031),_0x12bd61;}var _0x2f6f88=this[_0x2b17c0(0x173)](_0x45993a),_0x364a79=this['_isPrimitiveType'](_0x2f6f88);if(_0x12bd61['type']=_0x2f6f88,_0x364a79)this[_0x2b17c0(0x241)](_0x12bd61,_0x3a0031,_0x45993a,function(){var _0x463e83=_0x2b17c0;_0x12bd61['value']=_0x45993a[_0x463e83(0x189)](),!_0x217e01&&_0x5b1ce3[_0x463e83(0x214)](_0x2f6f88,_0x12bd61,_0x3a0031,{});});else{var _0x180677=_0x3a0031[_0x2b17c0(0x1d6)]&&_0x3a0031[_0x2b17c0(0x19b)]<_0x3a0031['autoExpandMaxDepth']&&_0x3a0031[_0x2b17c0(0x18c)][_0x2b17c0(0x17f)](_0x45993a)<0x0&&_0x2f6f88!==_0x2b17c0(0x1f5)&&_0x3a0031['autoExpandPropertyCount']<_0x3a0031[_0x2b17c0(0x1fb)];_0x180677||_0x3a0031[_0x2b17c0(0x19b)]<_0x407e44||_0x217e01?(this[_0x2b17c0(0x1bb)](_0x12bd61,_0x45993a,_0x3a0031,_0x217e01||{}),this[_0x2b17c0(0x181)](_0x45993a,_0x12bd61)):this['_processTreeNodeResult'](_0x12bd61,_0x3a0031,_0x45993a,function(){var _0x18cf0d=_0x2b17c0;_0x2f6f88===_0x18cf0d(0x222)||_0x2f6f88==='undefined'||(delete _0x12bd61['value'],_0x12bd61[_0x18cf0d(0x215)]=!0x0);});}return _0x12bd61;}finally{_0x3a0031[_0x2b17c0(0x1e4)]=_0x41d9cc,_0x3a0031[_0x2b17c0(0x1ee)]=_0x407e44,_0x3a0031[_0x2b17c0(0x18b)]=_0x43eb7c;}}[_0x33d8d7(0x214)](_0x3d4b53,_0x59ae7b,_0x4b7fff,_0x1e4479){var _0x29b0cd=_0x33d8d7,_0x2e289e=_0x1e4479[_0x29b0cd(0x22a)]||_0x4b7fff[_0x29b0cd(0x22a)];if((_0x3d4b53===_0x29b0cd(0x1a6)||_0x3d4b53===_0x29b0cd(0x1e9))&&_0x59ae7b['value']){let _0x252ef3=_0x59ae7b['value'][_0x29b0cd(0x218)];_0x4b7fff[_0x29b0cd(0x179)]+=_0x252ef3,_0x4b7fff[_0x29b0cd(0x179)]>_0x4b7fff[_0x29b0cd(0x1f6)]?(_0x59ae7b[_0x29b0cd(0x215)]='',delete _0x59ae7b[_0x29b0cd(0x24f)]):_0x252ef3>_0x2e289e&&(_0x59ae7b[_0x29b0cd(0x215)]=_0x59ae7b[_0x29b0cd(0x24f)][_0x29b0cd(0x216)](0x0,_0x2e289e),delete _0x59ae7b['value']);}}[_0x33d8d7(0x1c3)](_0x573113){var _0x434a8e=_0x33d8d7;return!!(_0x573113&&_0x1fa5d0[_0x434a8e(0x229)]&&this['_objectToString'](_0x573113)===_0x434a8e(0x1bf)&&_0x573113[_0x434a8e(0x1aa)]);}[_0x33d8d7(0x1fd)](_0x255e60){var _0x389d15=_0x33d8d7;if(_0x255e60['match'](/^\\d+$/))return _0x255e60;var _0x1e90e4;try{_0x1e90e4=JSON[_0x389d15(0x204)](''+_0x255e60);}catch{_0x1e90e4='\\x22'+this[_0x389d15(0x1dd)](_0x255e60)+'\\x22';}return _0x1e90e4[_0x389d15(0x203)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x1e90e4=_0x1e90e4['substr'](0x1,_0x1e90e4['length']-0x2):_0x1e90e4=_0x1e90e4[_0x389d15(0x19c)](/'/g,'\\x5c\\x27')[_0x389d15(0x19c)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x1e90e4;}[_0x33d8d7(0x241)](_0x86f5e9,_0x1a7676,_0xd4c2cd,_0xefca8e){var _0x54ee02=_0x33d8d7;this[_0x54ee02(0x1a5)](_0x86f5e9,_0x1a7676),_0xefca8e&&_0xefca8e(),this['_additionalMetadata'](_0xd4c2cd,_0x86f5e9),this[_0x54ee02(0x1e8)](_0x86f5e9,_0x1a7676);}[_0x33d8d7(0x1a5)](_0x5aa706,_0x5ca2f0){var _0x286bfd=_0x33d8d7;this['_setNodeId'](_0x5aa706,_0x5ca2f0),this[_0x286bfd(0x1cf)](_0x5aa706,_0x5ca2f0),this['_setNodeExpressionPath'](_0x5aa706,_0x5ca2f0),this[_0x286bfd(0x201)](_0x5aa706,_0x5ca2f0);}['_setNodeId'](_0x526b5f,_0xf45b65){}[_0x33d8d7(0x1cf)](_0x176ebd,_0x2f877d){}[_0x33d8d7(0x1a3)](_0x2b417d,_0x48b0d7){}[_0x33d8d7(0x1b2)](_0x20904f){var _0x556fa0=_0x33d8d7;return _0x20904f===this[_0x556fa0(0x183)];}[_0x33d8d7(0x1e8)](_0x374336,_0x15001b){var _0x56adcb=_0x33d8d7;this['_setNodeLabel'](_0x374336,_0x15001b),this['_setNodeExpandableState'](_0x374336),_0x15001b[_0x56adcb(0x1d1)]&&this['_sortProps'](_0x374336),this[_0x56adcb(0x1b0)](_0x374336,_0x15001b),this[_0x56adcb(0x182)](_0x374336,_0x15001b),this[_0x56adcb(0x1ea)](_0x374336);}[_0x33d8d7(0x181)](_0xde5ccd,_0x111a8d){var _0x38b743=_0x33d8d7;let _0x1f74c0;try{_0x1fa5d0['console']&&(_0x1f74c0=_0x1fa5d0['console'][_0x38b743(0x1d8)],_0x1fa5d0[_0x38b743(0x17e)][_0x38b743(0x1d8)]=function(){}),_0xde5ccd&&typeof _0xde5ccd[_0x38b743(0x218)]==_0x38b743(0x1d5)&&(_0x111a8d[_0x38b743(0x218)]=_0xde5ccd[_0x38b743(0x218)]);}catch{}finally{_0x1f74c0&&(_0x1fa5d0[_0x38b743(0x17e)][_0x38b743(0x1d8)]=_0x1f74c0);}if(_0x111a8d[_0x38b743(0x18e)]===_0x38b743(0x1d5)||_0x111a8d['type']===_0x38b743(0x1f3)){if(isNaN(_0x111a8d[_0x38b743(0x24f)]))_0x111a8d[_0x38b743(0x223)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];else switch(_0x111a8d[_0x38b743(0x24f)]){case Number[_0x38b743(0x252)]:_0x111a8d[_0x38b743(0x18a)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];break;case Number[_0x38b743(0x234)]:_0x111a8d[_0x38b743(0x24b)]=!0x0,delete _0x111a8d[_0x38b743(0x24f)];break;case 0x0:this[_0x38b743(0x22e)](_0x111a8d[_0x38b743(0x24f)])&&(_0x111a8d[_0x38b743(0x175)]=!0x0);break;}}else _0x111a8d[_0x38b743(0x18e)]===_0x38b743(0x1f5)&&typeof _0xde5ccd[_0x38b743(0x1ff)]==_0x38b743(0x1a6)&&_0xde5ccd['name']&&_0x111a8d['name']&&_0xde5ccd[_0x38b743(0x1ff)]!==_0x111a8d[_0x38b743(0x1ff)]&&(_0x111a8d[_0x38b743(0x17b)]=_0xde5ccd[_0x38b743(0x1ff)]);}[_0x33d8d7(0x22e)](_0x3f87a8){var _0x3d0a2b=_0x33d8d7;return 0x1/_0x3f87a8===Number[_0x3d0a2b(0x234)];}['_sortProps'](_0x2986e0){var _0x202fb4=_0x33d8d7;!_0x2986e0[_0x202fb4(0x1c6)]||!_0x2986e0[_0x202fb4(0x1c6)][_0x202fb4(0x218)]||_0x2986e0[_0x202fb4(0x18e)]===_0x202fb4(0x21c)||_0x2986e0['type']===_0x202fb4(0x229)||_0x2986e0[_0x202fb4(0x18e)]===_0x202fb4(0x249)||_0x2986e0[_0x202fb4(0x1c6)]['sort'](function(_0x36133a,_0x3025f2){var _0xeec050=_0x202fb4,_0x44f2ce=_0x36133a['name']['toLowerCase'](),_0x1e067c=_0x3025f2['name'][_0xeec050(0x196)]();return _0x44f2ce<_0x1e067c?-0x1:_0x44f2ce>_0x1e067c?0x1:0x0;});}[_0x33d8d7(0x1b0)](_0x10588d,_0xfc904){var _0x36c1e4=_0x33d8d7;if(!(_0xfc904[_0x36c1e4(0x22c)]||!_0x10588d['props']||!_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x218)])){for(var _0x395b33=[],_0x45ad74=[],_0x5dbdc3=0x0,_0x50a0c0=_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x218)];_0x5dbdc3<_0x50a0c0;_0x5dbdc3++){var _0x31217e=_0x10588d['props'][_0x5dbdc3];_0x31217e[_0x36c1e4(0x18e)]==='function'?_0x395b33[_0x36c1e4(0x1b6)](_0x31217e):_0x45ad74[_0x36c1e4(0x1b6)](_0x31217e);}if(!(!_0x45ad74[_0x36c1e4(0x218)]||_0x395b33[_0x36c1e4(0x218)]<=0x1)){_0x10588d['props']=_0x45ad74;var _0x5c4438={'functionsNode':!0x0,'props':_0x395b33};this[_0x36c1e4(0x226)](_0x5c4438,_0xfc904),this[_0x36c1e4(0x1a3)](_0x5c4438,_0xfc904),this[_0x36c1e4(0x224)](_0x5c4438),this[_0x36c1e4(0x201)](_0x5c4438,_0xfc904),_0x5c4438['id']+='\\x20f',_0x10588d[_0x36c1e4(0x1c6)][_0x36c1e4(0x170)](_0x5c4438);}}}['_addLoadNode'](_0x2687e5,_0x11a805){}['_setNodeExpandableState'](_0x1ab1a0){}[_0x33d8d7(0x22f)](_0x7d1ae8){var _0x58f8ea=_0x33d8d7;return Array['isArray'](_0x7d1ae8)||typeof _0x7d1ae8==_0x58f8ea(0x1da)&&this['_objectToString'](_0x7d1ae8)===_0x58f8ea(0x1d9);}[_0x33d8d7(0x201)](_0x3f54ea,_0x123312){}[_0x33d8d7(0x1ea)](_0x354bd4){var _0x529acc=_0x33d8d7;delete _0x354bd4['_hasSymbolPropertyOnItsPath'],delete _0x354bd4[_0x529acc(0x1ec)],delete _0x354bd4[_0x529acc(0x19f)];}[_0x33d8d7(0x1d3)](_0x504baa,_0x8854bf){}}let _0x46aab6=new _0x13ccf3(),_0x299932={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5d2bb0={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x21b343(_0x4b4bfb,_0x3ccb71,_0x4e9abd,_0x3f4466,_0x2e9d71,_0x59255f){var _0x251ba0=_0x33d8d7;let _0x4339f4,_0x1a4c74;try{_0x1a4c74=_0x4ed4bc(),_0x4339f4=_0x2f1331[_0x3ccb71],!_0x4339f4||_0x1a4c74-_0x4339f4['ts']>0x1f4&&_0x4339f4['count']&&_0x4339f4['time']/_0x4339f4[_0x251ba0(0x1a8)]<0x64?(_0x2f1331[_0x3ccb71]=_0x4339f4={'count':0x0,'time':0x0,'ts':_0x1a4c74},_0x2f1331['hits']={}):_0x1a4c74-_0x2f1331['hits']['ts']>0x32&&_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]&&_0x2f1331['hits'][_0x251ba0(0x1fe)]/_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]<0x64&&(_0x2f1331['hits']={});let _0x5c9150=[],_0x297681=_0x4339f4['reduceLimits']||_0x2f1331['hits'][_0x251ba0(0x250)]?_0x5d2bb0:_0x299932,_0x26b1c9=_0x21fd2d=>{var _0x17bbd7=_0x251ba0;let _0x113335={};return _0x113335[_0x17bbd7(0x1c6)]=_0x21fd2d[_0x17bbd7(0x1c6)],_0x113335[_0x17bbd7(0x192)]=_0x21fd2d['elements'],_0x113335[_0x17bbd7(0x22a)]=_0x21fd2d['strLength'],_0x113335[_0x17bbd7(0x1f6)]=_0x21fd2d[_0x17bbd7(0x1f6)],_0x113335[_0x17bbd7(0x1fb)]=_0x21fd2d[_0x17bbd7(0x1fb)],_0x113335[_0x17bbd7(0x232)]=_0x21fd2d[_0x17bbd7(0x232)],_0x113335['sortProps']=!0x1,_0x113335[_0x17bbd7(0x22c)]=!_0x4b89d2,_0x113335['depth']=0x1,_0x113335[_0x17bbd7(0x19b)]=0x0,_0x113335[_0x17bbd7(0x245)]=_0x17bbd7(0x1e5),_0x113335[_0x17bbd7(0x1d4)]=_0x17bbd7(0x17d),_0x113335[_0x17bbd7(0x1d6)]=!0x0,_0x113335[_0x17bbd7(0x18c)]=[],_0x113335[_0x17bbd7(0x21e)]=0x0,_0x113335[_0x17bbd7(0x176)]=!0x0,_0x113335[_0x17bbd7(0x179)]=0x0,_0x113335[_0x17bbd7(0x206)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x113335;};for(var _0x278ae7=0x0;_0x278ae7<_0x2e9d71[_0x251ba0(0x218)];_0x278ae7++)_0x5c9150[_0x251ba0(0x1b6)](_0x46aab6[_0x251ba0(0x1bb)]({'timeNode':_0x4b4bfb===_0x251ba0(0x1fe)||void 0x0},_0x2e9d71[_0x278ae7],_0x26b1c9(_0x297681),{}));if(_0x4b4bfb==='trace'){let _0xa570f0=Error['stackTraceLimit'];try{Error[_0x251ba0(0x19d)]=0x1/0x0,_0x5c9150['push'](_0x46aab6[_0x251ba0(0x1bb)]({'stackNode':!0x0},new Error()[_0x251ba0(0x1ba)],_0x26b1c9(_0x297681),{'strLength':0x1/0x0}));}finally{Error[_0x251ba0(0x19d)]=_0xa570f0;}}return{'method':_0x251ba0(0x23b),'version':_0x3d9357,'args':[{'ts':_0x4e9abd,'session':_0x3f4466,'args':_0x5c9150,'id':_0x3ccb71,'context':_0x59255f}]};}catch(_0x5dfc8b){return{'method':_0x251ba0(0x23b),'version':_0x3d9357,'args':[{'ts':_0x4e9abd,'session':_0x3f4466,'args':[{'type':_0x251ba0(0x20d),'error':_0x5dfc8b&&_0x5dfc8b[_0x251ba0(0x1fc)]}],'id':_0x3ccb71,'context':_0x59255f}]};}finally{try{if(_0x4339f4&&_0x1a4c74){let _0xc44091=_0x4ed4bc();_0x4339f4['count']++,_0x4339f4['time']+=_0x593b17(_0x1a4c74,_0xc44091),_0x4339f4['ts']=_0xc44091,_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1a8)]++,_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1fe)]+=_0x593b17(_0x1a4c74,_0xc44091),_0x2f1331[_0x251ba0(0x22b)]['ts']=_0xc44091,(_0x4339f4[_0x251ba0(0x1a8)]>0x32||_0x4339f4[_0x251ba0(0x1fe)]>0x64)&&(_0x4339f4[_0x251ba0(0x250)]=!0x0),(_0x2f1331[_0x251ba0(0x22b)]['count']>0x3e8||_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x1fe)]>0x12c)&&(_0x2f1331[_0x251ba0(0x22b)][_0x251ba0(0x250)]=!0x0);}}catch{}}}return _0x21b343;}((_0x9ebe41,_0x4e0a72,_0x1b01f5,_0x99fb2,_0x21c2c3,_0x43001e,_0x4dc56f,_0x29f908,_0x15ff22,_0x140422)=>{var _0x5646be=_0x212723;if(_0x9ebe41[_0x5646be(0x225)])return _0x9ebe41[_0x5646be(0x225)];if(!J(_0x9ebe41,_0x29f908,_0x21c2c3))return _0x9ebe41[_0x5646be(0x225)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x9ebe41[_0x5646be(0x225)];let _0x474dcd=W(_0x9ebe41),_0x2597bc=_0x474dcd[_0x5646be(0x24e)],_0xb2b8cb=_0x474dcd[_0x5646be(0x24a)],_0x58804e=_0x474dcd[_0x5646be(0x247)],_0x1be5fb={'hits':{},'ts':{}},_0x3c5be9=Y(_0x9ebe41,_0x15ff22,_0x1be5fb,_0x43001e),_0x41a592=_0xaf5411=>{_0x1be5fb['ts'][_0xaf5411]=_0xb2b8cb();},_0x3aeb28=(_0x3b5724,_0x208469)=>{let _0x381f90=_0x1be5fb['ts'][_0x208469];if(delete _0x1be5fb['ts'][_0x208469],_0x381f90){let _0x3bb8ab=_0x2597bc(_0x381f90,_0xb2b8cb());_0x5a3174(_0x3c5be9('time',_0x3b5724,_0x58804e(),_0x89fcf2,[_0x3bb8ab],_0x208469));}},_0x421a52=_0xeddc6a=>_0x53e2af=>{var _0x396ece=_0x5646be;try{_0x41a592(_0x53e2af),_0xeddc6a(_0x53e2af);}finally{_0x9ebe41['console'][_0x396ece(0x1fe)]=_0xeddc6a;}},_0x5adb26=_0x36c9d6=>_0x26e5f5=>{var _0x4be529=_0x5646be;try{let [_0x2899fa,_0x152676]=_0x26e5f5[_0x4be529(0x1be)](_0x4be529(0x1ac));_0x3aeb28(_0x152676,_0x2899fa),_0x36c9d6(_0x2899fa);}finally{_0x9ebe41[_0x4be529(0x17e)][_0x4be529(0x238)]=_0x36c9d6;}};_0x9ebe41[_0x5646be(0x225)]={'consoleLog':(_0x4c5572,_0x1dead2)=>{var _0x4fac0d=_0x5646be;_0x9ebe41[_0x4fac0d(0x17e)]['log']['name']!==_0x4fac0d(0x191)&&_0x5a3174(_0x3c5be9('log',_0x4c5572,_0x58804e(),_0x89fcf2,_0x1dead2));},'consoleTrace':(_0x34cc22,_0x1e7f66)=>{var _0x42fb2d=_0x5646be;_0x9ebe41['console'][_0x42fb2d(0x23b)][_0x42fb2d(0x1ff)]!==_0x42fb2d(0x1ce)&&_0x5a3174(_0x3c5be9('trace',_0x34cc22,_0x58804e(),_0x89fcf2,_0x1e7f66));},'consoleTime':()=>{var _0x13a169=_0x5646be;_0x9ebe41['console'][_0x13a169(0x1fe)]=_0x421a52(_0x9ebe41[_0x13a169(0x17e)][_0x13a169(0x1fe)]);},'consoleTimeEnd':()=>{var _0x56284f=_0x5646be;_0x9ebe41[_0x56284f(0x17e)]['timeEnd']=_0x5adb26(_0x9ebe41[_0x56284f(0x17e)][_0x56284f(0x238)]);},'autoLog':(_0x322fb5,_0x3a2081)=>{var _0x1aef39=_0x5646be;_0x5a3174(_0x3c5be9(_0x1aef39(0x23b),_0x3a2081,_0x58804e(),_0x89fcf2,[_0x322fb5]));},'autoLogMany':(_0x39c139,_0x1fefac)=>{var _0x3acbc5=_0x5646be;_0x5a3174(_0x3c5be9(_0x3acbc5(0x23b),_0x39c139,_0x58804e(),_0x89fcf2,_0x1fefac));},'autoTrace':(_0x3dd2d6,_0xd8307e)=>{var _0x5f2786=_0x5646be;_0x5a3174(_0x3c5be9(_0x5f2786(0x1cd),_0xd8307e,_0x58804e(),_0x89fcf2,[_0x3dd2d6]));},'autoTraceMany':(_0x891d8c,_0x11b1aa)=>{var _0x5d44a7=_0x5646be;_0x5a3174(_0x3c5be9(_0x5d44a7(0x1cd),_0x891d8c,_0x58804e(),_0x89fcf2,_0x11b1aa));},'autoTime':(_0x1b9d5d,_0x8af011,_0x275260)=>{_0x41a592(_0x275260);},'autoTimeEnd':(_0x21a621,_0x99f92e,_0x52a88e)=>{_0x3aeb28(_0x99f92e,_0x52a88e);},'coverage':_0x26aa2b=>{var _0x533e73=_0x5646be;_0x5a3174({'method':_0x533e73(0x1b7),'version':_0x43001e,'args':[{'id':_0x26aa2b}]});}};let _0x5a3174=b(_0x9ebe41,_0x4e0a72,_0x1b01f5,_0x99fb2,_0x21c2c3,_0x140422),_0x89fcf2=_0x9ebe41['_console_ninja_session'];return _0x9ebe41[_0x5646be(0x225)];})(globalThis,_0x212723(0x20e),_0x212723(0x1c9),_0x212723(0x1f0),_0x212723(0x16d),'1.0.0',_0x212723(0x193),_0x212723(0x1c5),'','');`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/($locale).api.recipes.random.$count.tsx
async function loader2({ params }) {
  let count = Number(params.count) ?? 10;
  return {
    randomRecipes: await mealdb_service_default.getMultipeRandomRecipes(count)
  };
}

// server-entry-module:@remix-run/dev/server-build
var route2 = __toESM(require_locale_auth_login_actions());

// app/routes/($locale).auth.actions.tsx
var locale_auth_actions_exports = {};
__export(locale_auth_actions_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node"), import_remix_auth2 = require("remix-auth");
async function action({ request }) {
  try {
    await formAuthenticator.authenticate(PROVIDER.LOCAL, request, {
      successRedirect: ROUTES.INDEX
    });
  } catch (e) {
    if (e instanceof Response)
      return e;
    if (e instanceof import_remix_auth2.AuthorizationError) {
      let error = e;
      return console.error(error), (0, import_node3.json)({ message: error.message });
    }
  }
}

// app/routes/($locale).auth.logout.tsx
var locale_auth_logout_exports = {};
__export(locale_auth_logout_exports, {
  default: () => Logout,
  loader: () => loader3
});
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  await formAuthenticator.logout(request, {
    redirectTo: USER_ROUTES.LOGIN
  });
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/($locale).auth.logout.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/routes/($locale).auth.signup.tsx
var locale_auth_signup_exports = {};
__export(locale_auth_signup_exports, {
  default: () => Index
});
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("main", { className: "from-indigo-600 grid min-h-screen w-full grid-cols-1 place-items-center bg-gradient-to-bl lg:place-items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("section", { className: "flex h-full w-full max-w-xl flex-col justify-center bg-white p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(AccountSignIn, {}, void 0, !1, {
      fileName: "app/routes/($locale).auth.signup.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/($locale).auth.signup.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(SignupForm, {}, void 0, !1, {
      fileName: "app/routes/($locale).auth.signup.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/($locale).auth.signup.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/($locale).auth.signup.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/($locale).auth.login.tsx
var locale_auth_login_exports = {};
__export(locale_auth_login_exports, {
  default: () => Index2
});
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("main", { className: "from-indigo-600 grid min-h-screen w-full grid-cols-1 place-items-center bg-gradient-to-bl lg:place-items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("section", { className: "flex h-full w-full max-w-xl flex-col justify-center bg-white p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(NoAccountSignup, {}, void 0, !1, {
      fileName: "app/routes/($locale).auth.login.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/($locale).auth.login.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(LoginForm, {}, void 0, !1, {
      fileName: "app/routes/($locale).auth.login.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/($locale).auth.login.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/($locale).auth.login.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index3,
  meta: () => meta
});

// app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx
var import_outline4 = require("@heroicons/react/24/outline");

// app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx
var import_react22 = require("react");

// app/common/components/Slider/Slider.tsx
var import_react21 = require("react"), import_react_slick = __toESM(require("react-slick"));

// app/common/components/Slider/SliderArrowNext.tsx
var import_tailwind_merge19 = require("tailwind-merge"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function SliderArrowNext({
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
      className: (0, import_tailwind_merge19.twMerge)(
        "absolute right-1 top-1/2 z-1 h-fit w-fit -translate-y-1/2 rounded-full bg-white shadow-lg before:content-none hover:bg-white focus:bg-white focus:ring-1",
        className,
        additionalClassName
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_outline2.ArrowRightIcon, { className: "h-8 w-8 text-gray-500", "aria-hidden": "true" }, void 0, !1, {
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
var import_tailwind_merge20 = require("tailwind-merge"), import_outline3 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function SliderArrowNext2({
  className,
  currentSlide,
  slideCount,
  additionalClassName,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    "button",
    {
      ...rest,
      className: (0, import_tailwind_merge20.twMerge)(
        "absolute left-1 top-1/2 z-1 h-fit w-fit -translate-y-1/2 rounded-full bg-white shadow-lg before:content-none hover:bg-white focus:bg-white focus:ring-1",
        className,
        additionalClassName
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_outline3.ArrowLeftIcon, { className: "h-8 w-8 text-gray-500", "aria-hidden": "true" }, void 0, !1, {
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
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function SliderDotsContainer({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("ul", { className: "scrollbar-hide flex w-full justify-center gap-4 overflow-y-hidden overflow-x-scroll py-[3px] [&_li]:h-4 [&_li]:w-4", children }, void 0, !1, {
    fileName: "app/common/components/Slider/SliderDotsContainer.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/common/components/Slider/SliderDot.tsx
var import_tailwind_merge21 = require("tailwind-merge"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function SliderDot({ className, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
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
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), Slider = (0, import_react21.forwardRef)(
  ({
    children,
    dots = !0,
    infinite = !0,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    nextArrow = /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SliderArrowNext, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 36,
      columnNumber: 19
    }, this),
    prevArrow = /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SliderArrowNext2, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 37,
      columnNumber: 19
    }, this),
    appendDots = (dots2) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SliderDotsContainer, { children: dots2 }, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 38,
      columnNumber: 30
    }, this),
    customPaging = () => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SliderDot, {}, void 0, !1, {
      fileName: "app/common/components/Slider/Slider.tsx",
      lineNumber: 39,
      columnNumber: 28
    }, this),
    slideAs: SlideAs = "article",
    deps = [],
    ...settings
  }, ref) => {
    let sliderRef = (0, import_react21.useRef)(null);
    return (0, import_react21.useEffect)(() => {
      ((ref == null ? void 0 : ref.current) || sliderRef.current).slickGoTo(0);
    }, [sliderRef, ref, ...deps]), /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
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
        children: import_react21.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(SlideAs, { children: child }, void 0, !1, {
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

// app/recipes/hook/useRecipeUrl.ts
function useRecipeUrl({
  id,
  ingredients,
  instructions,
  title,
  user_id,
  image,
  isExternalSrc,
  url
}) {
  let recipeUrl = new URL(`${window.location.origin}/recipes/${id}`);
  return isExternalSrc && (recipeUrl.pathname = "/recipes/external", recipeUrl.searchParams.set(RECIPE_EXTERNAL_QUERY_PARAMS.TITLE, title), recipeUrl.searchParams.set(
    RECIPE_EXTERNAL_QUERY_PARAMS.USER_ID,
    user_id.toString()
  ), image && recipeUrl.searchParams.set(
    RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE,
    image == null ? void 0 : image.src
  ), url && recipeUrl.searchParams.set(RECIPE_EXTERNAL_QUERY_PARAMS.URL, url), instructions && recipeUrl.searchParams.set(
    RECIPE_EXTERNAL_QUERY_PARAMS.INSTRUCTIONS,
    instructions == null ? void 0 : instructions.join(",")
  ), ingredients && recipeUrl.searchParams.set(
    RECIPE_EXTERNAL_QUERY_PARAMS.INGREDIENTS,
    ingredients == null ? void 0 : ingredients.join(",")
  )), recipeUrl.toString();
}

// app/recipes/components/RecipeCard/RecipeCard.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function RecipeCard({
  id,
  title,
  url,
  image,
  isExternalSrc,
  ingredients,
  instructions,
  user_id
}) {
  let to = useRecipeUrl({
    id,
    title,
    url,
    image,
    isExternalSrc,
    ingredients,
    instructions,
    user_id
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Link, { to, className: "block max-h-24 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(If_default, { condition: !!image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
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
        lineNumber: 32,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "max-h-full flex-grow p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "pb-2 text-left text-sm", children: title }, void 0, !1, {
        fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "line-clamp-2 text-sm", children: ingredients == null ? void 0 : ingredients.join(", ") }, void 0, !1, {
        fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/RecipeCard/RecipeCard.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), DEFAULT_NUMBER_OF_RECIPES = 10;
function RandomRecipesSlider({
  numberOfRecipes = DEFAULT_NUMBER_OF_RECIPES
}) {
  let { loader: loader5, loading } = useClientLoader(), [randomRecipes, setRandomRecipes] = (0, import_react22.useState)([]);
  return (0, import_react22.useEffect)(() => {
    loader5({
      route: `/api/recipes/random/${numberOfRecipes}`
    }).then((response) => {
      response && setRandomRecipes(response.randomRecipes);
    });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(HttpState, { loading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Slider_default, { slidesToShow: 2, className: "py-2", children: randomRecipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(RecipeCard, { ...recipe }, recipe.id, !1, {
    fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/RandomRecipesSlider/RandomRecipesSlider.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function EmptyRecipesDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h2", { className: "text-base font-semibold leading-6 text-gray-900", children: "Recipes" }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "You didn\u2019t add any recipes yet. Start by adding your first recipe." }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      "ul",
      {
        role: "list",
        className: "mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("li", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
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
              lineNumber: 21,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("li", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
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
              lineNumber: 29,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
            lineNumber: 28,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(RandomRecipesSlider, {}, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/EmptyRecipesDashboard/EmptyRecipesDashboard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/recipes/hook/useRecipes.ts
var import_react23 = require("react");
function useRecipes() {
  let {
    data: {
      state: { recipes }
    }
  } = (0, import_react23.useContext)(AppContext_default);
  return recipes;
}

// app/recipes/components/RecipesDashboard/RecipesDashboard.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function RecipesDashboard() {
  let recipes = useRecipes();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(If_default, { condition: recipes.length === 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(EmptyRecipesDashboard, {}, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/recipes/components/RecipesDashboard/RecipesDashboard.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("main", { className: "section-container pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(RecipesDashboard, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/recipes/routes/($locale).recipes.external.route.tsx
var locale_recipes_external_route_exports = {};
__export(locale_recipes_external_route_exports, {
  default: () => Index4,
  loader: () => loader4
});
var import_react26 = require("@remix-run/react");

// app/recipes/components/Recipe/RecipeHeader.tsx
var import_react24 = require("react"), import_solid = require("@heroicons/react/20/solid"), import_react25 = require("@headlessui/react"), import_cva14 = require("cva");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function RecipeHeader({
  title,
  url,
  canEdit,
  isFavorite
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "w-full flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h1", { className: "mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight", children: title }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(If_default, { condition: !!canEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Button, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_solid.PencilIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        "Edit"
      ] }, void 0, !0, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(If_default, { condition: !!url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Button, { intent: "secondary", to: url, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_solid.LinkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        "Source"
      ] }, void 0, !0, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react25.Menu, { as: "div", className: "relative sm:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react25.Menu.Button, { className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400", children: [
          "More",
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_solid.ChevronDownIcon,
            {
              className: "-mr-1 ml-1.5 h-5 w-5 text-gray-400",
              "aria-hidden": "true"
            },
            void 0,
            !1,
            {
              fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
          import_react25.Transition,
          {
            as: import_react24.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react25.Menu.Items, { className: "absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react25.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
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
                  lineNumber: 80,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
                lineNumber: 78,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react25.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
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
                  lineNumber: 93,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
            lineNumber: 68,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/recipes/components/Recipe/Recipe.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function Recipe({
  title,
  ingredients,
  instructions,
  image,
  url
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("section", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(RecipeHeader, { title, url: url ?? " ", canEdit: !0 }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!image, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("img", { src: image == null ? void 0 : image.src, alt: title, className: "w-full lg:w-1/2" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!ingredients, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "w-full lg:w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("h2", { className: "text-xl font-bold", children: "Ingredients" }, void 0, !1, {
          fileName: "app/recipes/components/Recipe/Recipe.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("ul", { className: "list-inside list-disc", children: ingredients == null ? void 0 : ingredients.map((ingredient) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("li", { children: ingredient }, ingredient, !1, {
          fileName: "app/recipes/components/Recipe/Recipe.tsx",
          lineNumber: 30,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/recipes/components/Recipe/Recipe.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!instructions, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("h2", { className: "text-xl font-bold", children: "Instructions" }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("ol", { className: "list-inside list-decimal", children: instructions == null ? void 0 : instructions.map((instruction) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("li", { children: instruction }, instruction, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default, { condition: !!url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(If_default.Then, { children: [
      "Original source:",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("a", { href: url, target: "_blank", children: url }, void 0, !1, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/recipes/components/Recipe/Recipe.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/recipes/routes/($locale).recipes.external.route.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let url = new URL(request.url), title = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.TITLE), recipeUrl = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.URL), image = url.searchParams.get(RECIPE_EXTERNAL_QUERY_PARAMS.IMAGE), ingredients = url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.INGREDIENTS
  ), instructions = url.searchParams.get(
    RECIPE_EXTERNAL_QUERY_PARAMS.INSTRUCTIONS
  );
  return {
    title,
    url: recipeUrl,
    imageSrc: image ? { src: image } : void 0,
    ingredients: ingredients == null ? void 0 : ingredients.split(",").map((ingredient) => ingredient.trim()),
    instructions: instructions == null ? void 0 : instructions.split(",").map((instruction) => instruction.trim())
  };
}
function Index4() {
  let { title, url, imageSrc, ingredients, instructions } = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("main", { className: "flex flex-col py-12 section-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    Recipe,
    {
      title: title ?? "",
      url,
      image: imageSrc,
      ingredients,
      instructions
    },
    void 0,
    !1,
    {
      fileName: "app/recipes/routes/($locale).recipes.external.route.tsx",
      lineNumber: 39,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/recipes/routes/($locale).recipes.external.route.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UC4JCOR2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-V2BP6RXK.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-EPD7KPQO.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { "($locale).recipes.external": { id: "($locale).recipes.external", parentId: "root", path: ":locale?/recipes/external", index: !1, caseSensitive: void 0, module: "/build/($locale).recipes.external-6O22WYUS.js", imports: ["/build/_shared/chunk-DBE6PPUO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CTQBORBB.js", imports: ["/build/_shared/chunk-L7QAWGJM.js", "/build/_shared/chunk-IDPQS5UL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).api.recipes.random.$count": { id: "routes/($locale).api.recipes.random.$count", parentId: "root", path: ":locale?/api/recipes/random/:count", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).api.recipes.random.$count-5YPHG4WS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).auth.actions": { id: "routes/($locale).auth.actions", parentId: "root", path: ":locale?/auth/actions", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).auth.actions-DNAJIWKS.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).auth.login": { id: "routes/($locale).auth.login", parentId: "root", path: ":locale?/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).auth.login-HRM7WQZ6.js", imports: ["/build/_shared/chunk-62OQPKZ2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).auth.login.actions": { id: "routes/($locale).auth.login.actions", parentId: "routes/($locale).auth.login", path: "actions", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).auth.login.actions-Z2SDYRKP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).auth.logout": { id: "routes/($locale).auth.logout", parentId: "root", path: ":locale?/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).auth.logout-O7DX2AY7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/($locale).auth.signup": { id: "routes/($locale).auth.signup", parentId: "root", path: ":locale?/auth/signup", index: void 0, caseSensitive: void 0, module: "/build/routes/($locale).auth.signup-SU7U7DSE.js", imports: ["/build/_shared/chunk-62OQPKZ2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-V2PQDOFF.js", imports: ["/build/_shared/chunk-DBE6PPUO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "526d6904", hmr: { runtime: "/build/_shared\\chunk-EPD7KPQO.js", timestamp: 1703100666140 }, url: "/build/manifest-526D6904.js" };

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
  "routes/($locale).api.recipes.random.$count": {
    id: "routes/($locale).api.recipes.random.$count",
    parentId: "root",
    path: ":locale?/api/recipes/random/:count",
    index: void 0,
    caseSensitive: void 0,
    module: locale_api_recipes_random_count_exports
  },
  "routes/($locale).auth.login.actions": {
    id: "routes/($locale).auth.login.actions",
    parentId: "routes/($locale).auth.login",
    path: "actions",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/($locale).auth.actions": {
    id: "routes/($locale).auth.actions",
    parentId: "root",
    path: ":locale?/auth/actions",
    index: void 0,
    caseSensitive: void 0,
    module: locale_auth_actions_exports
  },
  "routes/($locale).auth.logout": {
    id: "routes/($locale).auth.logout",
    parentId: "root",
    path: ":locale?/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: locale_auth_logout_exports
  },
  "routes/($locale).auth.signup": {
    id: "routes/($locale).auth.signup",
    parentId: "root",
    path: ":locale?/auth/signup",
    index: void 0,
    caseSensitive: void 0,
    module: locale_auth_signup_exports
  },
  "routes/($locale).auth.login": {
    id: "routes/($locale).auth.login",
    parentId: "root",
    path: ":locale?/auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: locale_auth_login_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "($locale).recipes.external": {
    id: "($locale).recipes.external",
    parentId: "root",
    path: ":locale?/recipes/external",
    index: !1,
    caseSensitive: void 0,
    module: locale_recipes_external_route_exports
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
