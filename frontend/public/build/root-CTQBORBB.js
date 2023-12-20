import {
  AppContextProvider,
  Menu,
  UserContext_default
} from "/build/_shared/chunk-L7QAWGJM.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-V2BP6RXK.js";
import "/build/_shared/chunk-IDPQS5UL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EPD7KPQO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// css-bundle-update-plugin-ns:C:\Users\mathi\Documents\Projects\pantry-pal\frontend\node_modules\@remix-run\css-bundle\dist\esm\index.js
var cssBundleHref = false ? void 0 : void 0;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SI5B2EZ2.css";

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
  import.meta.hot.lastModified = "1695599789039.7407";
}
function UserContextProvider({
  id,
  email,
  name,
  provider,
  isAuthenticated,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext_default.Provider, { value: {
    isAuthenticated,
    email,
    id,
    name,
    provider
  }, children }, void 0, false, {
    fileName: "app/auth/store/UserContext/UserContext.Provider.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = UserContextProvider;
var _c;
$RefreshReg$(_c, "UserContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
var _s = $RefreshSig$();
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
  _s();
  const {
    user,
    isAuthenticated,
    recipes
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "text-body text-black-900 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppContextProvider, { recipes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserContextProvider, { isAuthenticated, ...user, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(App, "M6ey+VJ7rGOyNIf59ofUWJYE2aY=", false, function() {
  return [useLoaderData];
});
_c2 = App;
var shouldRevalidate = () => false;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  shouldRevalidate
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
//# sourceMappingURL=/build/root-CTQBORBB.js.map
