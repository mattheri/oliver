import {
  HttpContext_default
} from "/build/_shared/chunk-4CXWZWNZ.js";
import {
  AppContextProvider,
  Menu,
  UserContext_default
} from "/build/_shared/chunk-LJDFXF47.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteLoaderData
} from "/build/_shared/chunk-OVNFYIRE.js";
import "/build/_shared/chunk-QLFRGZQC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EF32OAUC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6XI2ZFFV.css";

// css-bundle-update-plugin-ns:C:\Users\mathi\Documents\Projects\oliver\frontend\node_modules\@remix-run\css-bundle\dist\esm\index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.tsx
var import_node = __toESM(require_node());

// app/auth/store/UserContext/UserContext.Provider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\auth\\\\store\\\\UserContext\\\\UserContext.Provider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\auth\\store\\UserContext\\UserContext.Provider.tsx"
  );
  import.meta.hot.lastModified = "1705974777055.8704";
}
function UserContextProvider({
  user,
  isAuthenticated,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext_default.Provider, { value: {
    isAuthenticated,
    user
  }, children }, void 0, false, {
    fileName: "app/auth/store/UserContext/UserContext.Provider.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = UserContextProvider;
var _c;
$RefreshReg$(_c, "UserContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/http/store/HttpContext.Provider.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\http\\\\store\\\\HttpContext.Provider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\http\\store\\HttpContext.Provider.tsx"
  );
  import.meta.hot.lastModified = "1706795635937.6074";
}
function HttpContextProvider({
  children
}) {
  _s();
  const data = useRouteLoaderData("root");
  const serverUrl = (0, import_react2.useMemo)(() => new URL(data.url), [data]);
  const location = useLocation();
  const [url, setUrl] = (0, import_react2.useState)(serverUrl);
  (0, import_react2.useEffect)(() => {
    const clientUrl = new URL(location.pathname, serverUrl.origin);
    Object.entries(location).forEach(([key, value]) => {
      clientUrl[key] = value;
    });
    setUrl(clientUrl);
  }, [location, serverUrl]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HttpContext_default.Provider, { value: {
    url
  }, children }, void 0, false, {
    fileName: "app/http/store/HttpContext.Provider.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(HttpContextProvider, "+6YIQTERRDhEmJ9DkEJHCYtzAFM=", false, function() {
  return [useRouteLoaderData, useLocation];
});
_c2 = HttpContextProvider;
var _c2;
$RefreshReg$(_c2, "HttpContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : [], {
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
}];
function App() {
  _s2();
  const {
    user,
    isAuthenticated,
    recipes
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "text-body text-black-900 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HttpContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppContextProvider, { recipes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserContextProvider, { isAuthenticated, user, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Menu, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s2(App, "M6ey+VJ7rGOyNIf59ofUWJYE2aY=", false, function() {
  return [useLoaderData];
});
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/index.js:
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
//# sourceMappingURL=/build/root-WKDTVBYP.js.map
