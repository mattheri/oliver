import {
  Link,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-V2BP6RXK.js";
import {
  ROUTES,
  ROUTES_NAMES,
  USER_ROUTES,
  USER_ROUTES_NAMES
} from "/build/_shared/chunk-IDPQS5UL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EPD7KPQO.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/common/store/AppContext/AppContext.Provider.tsx
var import_react2 = __toESM(require_react());

// app/common/store/AppContext/AppContext.ts
var import_react = __toESM(require_react());

// app/common/constants/modals.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\constants\\modals.ts"
  );
  import.meta.hot.lastModified = "1694885557447.8303";
}
var MODALS = {
  MENU: "menu",
  LOGIN: "login"
};

// app/common/store/AppContext/AppContext.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\store\\AppContext\\AppContext.ts"
  );
  import.meta.hot.lastModified = "1695778909139.2576";
}
var initialModalState = Object.keys(MODALS).reduce((acc, key) => {
  acc[MODALS[key]] = false;
  return acc;
}, {});
var initialDataState = {
  recipes: []
};
var AppContext = (0, import_react.createContext)({
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
});
var AppContext_default = AppContext;

// app/common/store/AppContext/modalsReducer.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\store\\AppContext\\modalsReducer.ts"
  );
  import.meta.hot.lastModified = "1695481467176.6355";
}
var Action = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};
function modalsReducer(state, action) {
  switch (action.type) {
    case Action.OPEN_MODAL:
      return {
        ...state,
        [action.payload.modalId]: true
      };
    case Action.CLOSE_MODAL:
      return {
        ...state,
        [action.payload.modalId]: false
      };
    default:
      throw new Error("Invalid action type");
  }
}

// app/common/store/AppContext/dataReducer.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\store\\AppContext\\dataReducer.ts"
  );
  import.meta.hot.lastModified = "1695778847373.72";
}
var Action2 = {
  UPDATE_RECIPES: "UPDATE_RECIPES",
  UPDATE_RECIPE: "UPDATE_RECIPE"
};
function dataReducer(state, action) {
  switch (action.type) {
    case Action2.UPDATE_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes
      };
    case Action2.UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          if (recipe.id === action.payload.recipe.id) {
            return action.payload.recipe;
          }
          return recipe;
        })
      };
    default:
      throw new Error("Invalid action type");
  }
}

// app/common/store/AppContext/AppContext.Provider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\store\\\\AppContext\\\\AppContext.Provider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\store\\AppContext\\AppContext.Provider.tsx"
  );
  import.meta.hot.lastModified = "1695779026654.6353";
}
function AppContextProvider({
  children,
  recipes = []
}) {
  _s();
  const [modalsState, dispatchModalsState] = (0, import_react2.useReducer)(modalsReducer, initialModalState);
  const [dataState, dispatchDataState] = (0, import_react2.useReducer)(dataReducer, {
    ...initialDataState,
    recipes
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContext_default.Provider, { value: {
    modals: {
      state: modalsState,
      dispatch: dispatchModalsState
    },
    data: {
      state: dataState,
      dispatch: dispatchDataState
    }
  }, children }, void 0, false, {
    fileName: "app/common/store/AppContext/AppContext.Provider.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(AppContextProvider, "p1Jb7lkvoEogfrt3kFGzAOp6oP4=");
_c = AppContextProvider;
var _c;
$RefreshReg$(_c, "AppContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t8, e2, n4) => e2 in t8 ? i(t8, e2, { enumerable: true, configurable: true, writable: true, value: n4 }) : t8[e2] = n4;
var r = (t8, e2, n4) => (d(t8, typeof e2 != "symbol" ? e2 + "" : e2, n4), n4);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e2, f4) => {
  s.isServer ? (0, import_react3.useEffect)(e2, f4) : (0, import_react3.useLayoutEffect)(e2, f4);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react4 = __toESM(require_react(), 1);
function s2(e2) {
  let r6 = (0, import_react4.useRef)(e2);
  return l(() => {
    r6.current = e2;
  }, [e2]), r6;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o6) => setTimeout(() => {
    throw o6;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n4 = [], r6 = { addEventListener(e2, t8, s6, a3) {
    return e2.addEventListener(t8, s6, a3), r6.add(() => e2.removeEventListener(t8, s6, a3));
  }, requestAnimationFrame(...e2) {
    let t8 = requestAnimationFrame(...e2);
    return r6.add(() => cancelAnimationFrame(t8));
  }, nextFrame(...e2) {
    return r6.requestAnimationFrame(() => r6.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t8 = setTimeout(...e2);
    return r6.add(() => clearTimeout(t8));
  }, microTask(...e2) {
    let t8 = { current: true };
    return t3(() => {
      t8.current && e2[0]();
    }), r6.add(() => {
      t8.current = false;
    });
  }, style(e2, t8, s6) {
    let a3 = e2.style.getPropertyValue(t8);
    return Object.assign(e2.style, { [t8]: s6 }), this.add(() => {
      Object.assign(e2.style, { [t8]: a3 });
    });
  }, group(e2) {
    let t8 = o2();
    return e2(t8), this.add(() => t8.dispose());
  }, add(e2) {
    return n4.push(e2), () => {
      let t8 = n4.indexOf(e2);
      if (t8 >= 0)
        for (let s6 of n4.splice(t8, 1))
          s6();
    };
  }, dispose() {
    for (let e2 of n4.splice(0))
      e2();
  } };
  return r6;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e2] = (0, import_react5.useState)(o2);
  return (0, import_react5.useEffect)(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react6 = __toESM(require_react(), 1);
var o4 = function(t8) {
  let e2 = s2(t8);
  return import_react6.default.useCallback((...r6) => e2.current(...r6), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r6 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o6) => o6.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r6) : false;
}
function l2() {
  let r6 = s4(), [e2, n4] = t4.useState(s.isHandoffComplete);
  return e2 && s.isHandoffComplete === false && n4(false), t4.useEffect(() => {
    e2 !== true && n4(true);
  }, [e2]), t4.useEffect(() => s.handoff(), []), r6 ? false : e2;
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r6, n4, ...a3) {
  if (r6 in n4) {
    let e2 = n4[r6];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t8 = new Error(`Tried to handle "${r6}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t8, u), t8;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react7 = __toESM(require_react(), 1);
var u2 = Symbol();
function y(...t8) {
  let n4 = (0, import_react7.useRef)(t8);
  (0, import_react7.useEffect)(() => {
    n4.current = t8;
  }, [t8]);
  let c5 = o4((e2) => {
    for (let o6 of n4.current)
      o6 != null && (typeof o6 == "function" ? o6(e2) : o6.current = e2);
  });
  return t8.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u2])) ? void 0 : c5;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t5(...r6) {
  return Array.from(new Set(r6.flatMap((n4) => typeof n4 == "string" ? n4.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S || {});
var j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r6, theirProps: t8, slot: e2, defaultTag: a3, features: s6, visible: n4 = true, name: f4 }) {
  let o6 = N(t8, r6);
  if (n4)
    return c2(o6, e2, a3, f4);
  let u4 = s6 != null ? s6 : 0;
  if (u4 & 2) {
    let { static: l7 = false, ...p4 } = o6;
    if (l7)
      return c2(p4, e2, a3, f4);
  }
  if (u4 & 1) {
    let { unmount: l7 = true, ...p4 } = o6;
    return u(l7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c2({ ...p4, hidden: true, style: { display: "none" } }, e2, a3, f4);
    } });
  }
  return c2(o6, e2, a3, f4);
}
function c2(r6, t8 = {}, e2, a3) {
  let { as: s6 = e2, children: n4, refName: f4 = "ref", ...o6 } = g(r6, ["unmount", "static"]), u4 = r6.ref !== void 0 ? { [f4]: r6.ref } : {}, l7 = typeof n4 == "function" ? n4(t8) : n4;
  "className" in o6 && o6.className && typeof o6.className == "function" && (o6.className = o6.className(t8));
  let p4 = {};
  if (t8) {
    let i4 = false, m3 = [];
    for (let [y3, d4] of Object.entries(t8))
      typeof d4 == "boolean" && (i4 = true), d4 === true && m3.push(y3);
    i4 && (p4["data-headlessui-state"] = m3.join(" "));
  }
  if (s6 === import_react8.Fragment && Object.keys(R(o6)).length > 0) {
    if (!(0, import_react8.isValidElement)(l7) || Array.isArray(l7) && l7.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o6).map((d4) => `  - ${d4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d4) => `  - ${d4}`).join(`
`)].join(`
`));
    let i4 = l7.props, m3 = typeof (i4 == null ? void 0 : i4.className) == "function" ? (...d4) => t5(i4 == null ? void 0 : i4.className(...d4), o6.className) : t5(i4 == null ? void 0 : i4.className, o6.className), y3 = m3 ? { className: m3 } : {};
    return (0, import_react8.cloneElement)(l7, Object.assign({}, N(l7.props, R(g(o6, ["ref"]))), p4, u4, w(l7.ref, u4.ref), y3));
  }
  return (0, import_react8.createElement)(s6, Object.assign({}, g(o6, ["ref"]), s6 !== import_react8.Fragment && u4, s6 !== import_react8.Fragment && p4), l7);
}
function w(...r6) {
  return { ref: r6.every((t8) => t8 == null) ? void 0 : (t8) => {
    for (let e2 of r6)
      e2 != null && (typeof e2 == "function" ? e2(t8) : e2.current = t8);
  } };
}
function N(...r6) {
  var a3;
  if (r6.length === 0)
    return {};
  if (r6.length === 1)
    return r6[0];
  let t8 = {}, e2 = {};
  for (let s6 of r6)
    for (let n4 in s6)
      n4.startsWith("on") && typeof s6[n4] == "function" ? ((a3 = e2[n4]) != null || (e2[n4] = []), e2[n4].push(s6[n4])) : t8[n4] = s6[n4];
  if (t8.disabled || t8["aria-disabled"])
    return Object.assign(t8, Object.fromEntries(Object.keys(e2).map((s6) => [s6, void 0])));
  for (let s6 in e2)
    Object.assign(t8, { [s6](n4, ...f4) {
      let o6 = e2[s6];
      for (let u4 of o6) {
        if ((n4 instanceof Event || (n4 == null ? void 0 : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        u4(n4, ...f4);
      }
    } });
  return t8;
}
function D(r6) {
  var t8;
  return Object.assign((0, import_react8.forwardRef)(r6), { displayName: (t8 = r6.displayName) != null ? t8 : r6.name });
}
function R(r6) {
  let t8 = Object.assign({}, r6);
  for (let e2 in t8)
    t8[e2] === void 0 && delete t8[e2];
  return t8;
}
function g(r6, t8 = []) {
  let e2 = Object.assign({}, r6);
  for (let a3 of t8)
    a3 in e2 && delete e2[a3];
  return e2;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react9 = __toESM(require_react(), 1);
var n = (0, import_react9.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d2 || {});
function C() {
  return (0, import_react9.useContext)(n);
}
function c3({ value: o6, children: r6 }) {
  return import_react9.default.createElement(n.Provider, { value: o6 }, r6);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react10 = __toESM(require_react(), 1);
function f() {
  let e2 = (0, import_react10.useRef)(false);
  return l(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react11 = __toESM(require_react(), 1);
function c4(a3 = 0) {
  let [l7, r6] = (0, import_react11.useState)(a3), t8 = f(), o6 = (0, import_react11.useCallback)((e2) => {
    t8.current && r6((u4) => u4 | e2);
  }, [l7, t8]), m3 = (0, import_react11.useCallback)((e2) => Boolean(l7 & e2), [l7]), s6 = (0, import_react11.useCallback)((e2) => {
    t8.current && r6((u4) => u4 & ~e2);
  }, [r6, t8]), g4 = (0, import_react11.useCallback)((e2) => {
    t8.current && r6((u4) => u4 ^ e2);
  }, [r6]);
  return { flags: l7, addFlag: o6, hasFlag: m3, removeFlag: s6, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l5(r6) {
  let e2 = { called: false };
  return (...t8) => {
    if (!e2.called)
      return e2.called = true, r6(...t8);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g2(t8, ...e2) {
  t8 && e2.length > 0 && t8.classList.add(...e2);
}
function v(t8, ...e2) {
  t8 && e2.length > 0 && t8.classList.remove(...e2);
}
function b2(t8, e2) {
  let n4 = o2();
  if (!t8)
    return n4.dispose;
  let { transitionDuration: m3, transitionDelay: a3 } = getComputedStyle(t8), [u4, p4] = [m3, a3].map((l7) => {
    let [r6 = 0] = l7.split(",").filter(Boolean).map((i4) => i4.includes("ms") ? parseFloat(i4) : parseFloat(i4) * 1e3).sort((i4, T3) => T3 - i4);
    return r6;
  }), o6 = u4 + p4;
  if (o6 !== 0) {
    n4.group((r6) => {
      r6.setTimeout(() => {
        e2(), r6.dispose();
      }, o6), r6.addEventListener(t8, "transitionrun", (i4) => {
        i4.target === i4.currentTarget && r6.dispose();
      });
    });
    let l7 = n4.addEventListener(t8, "transitionend", (r6) => {
      r6.target === r6.currentTarget && (e2(), l7());
    });
  } else
    e2();
  return n4.add(() => e2()), n4.dispose;
}
function M(t8, e2, n4, m3) {
  let a3 = n4 ? "enter" : "leave", u4 = o2(), p4 = m3 !== void 0 ? l5(m3) : () => {
  };
  a3 === "enter" && (t8.removeAttribute("hidden"), t8.style.display = "");
  let o6 = u(a3, { enter: () => e2.enter, leave: () => e2.leave }), l7 = u(a3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r6 = u(a3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t8, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g2(t8, ...e2.base, ...o6, ...r6), u4.nextFrame(() => {
    v(t8, ...e2.base, ...o6, ...r6), g2(t8, ...e2.base, ...o6, ...l7), b2(t8, () => (v(t8, ...e2.base, ...o6), g2(t8, ...e2.base, ...e2.entered), p4()));
  }), u4.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function E2({ immediate: t8, container: s6, direction: n4, classes: u4, onStart: a3, onStop: c5 }) {
  let l7 = f(), d4 = p(), e2 = s2(n4);
  l(() => {
    t8 && (e2.current = "enter");
  }, [t8]), l(() => {
    let r6 = o2();
    d4.add(r6.dispose);
    let i4 = s6.current;
    if (i4 && e2.current !== "idle" && l7.current)
      return r6.dispose(), a3.current(e2.current), r6.add(M(i4, u4.current, e2.current === "enter", () => {
        r6.dispose(), c5.current(e2.current);
      })), r6.dispose;
  }, [n4]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S2(t8 = "") {
  return t8.split(" ").filter((n4) => n4.trim().length > 1);
}
var _ = (0, import_react12.createContext)(null);
_.displayName = "TransitionContext";
var be = ((r6) => (r6.Visible = "visible", r6.Hidden = "hidden", r6))(be || {});
function Se() {
  let t8 = (0, import_react12.useContext)(_);
  if (t8 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t8;
}
function Ne() {
  let t8 = (0, import_react12.useContext)(M2);
  if (t8 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t8;
}
var M2 = (0, import_react12.createContext)(null);
M2.displayName = "NestingContext";
function U(t8) {
  return "children" in t8 ? U(t8.children) : t8.current.filter(({ el: n4 }) => n4.current !== null).filter(({ state: n4 }) => n4 === "visible").length > 0;
}
function oe(t8, n4) {
  let r6 = s2(t8), s6 = (0, import_react12.useRef)([]), y3 = f(), D3 = p(), c5 = o4((i4, e2 = j.Hidden) => {
    let a3 = s6.current.findIndex(({ el: o6 }) => o6 === i4);
    a3 !== -1 && (u(e2, { [j.Unmount]() {
      s6.current.splice(a3, 1);
    }, [j.Hidden]() {
      s6.current[a3].state = "hidden";
    } }), D3.microTask(() => {
      var o6;
      !U(s6) && y3.current && ((o6 = r6.current) == null || o6.call(r6));
    }));
  }), x3 = o4((i4) => {
    let e2 = s6.current.find(({ el: a3 }) => a3 === i4);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : s6.current.push({ el: i4, state: "visible" }), () => c5(i4, j.Unmount);
  }), p4 = (0, import_react12.useRef)([]), h3 = (0, import_react12.useRef)(Promise.resolve()), u4 = (0, import_react12.useRef)({ enter: [], leave: [], idle: [] }), v3 = o4((i4, e2, a3) => {
    p4.current.splice(0), n4 && (n4.chains.current[e2] = n4.chains.current[e2].filter(([o6]) => o6 !== i4)), n4 == null || n4.chains.current[e2].push([i4, new Promise((o6) => {
      p4.current.push(o6);
    })]), n4 == null || n4.chains.current[e2].push([i4, new Promise((o6) => {
      Promise.all(u4.current[e2].map(([f4, P2]) => P2)).then(() => o6());
    })]), e2 === "enter" ? h3.current = h3.current.then(() => n4 == null ? void 0 : n4.wait.current).then(() => a3(e2)) : a3(e2);
  }), d4 = o4((i4, e2, a3) => {
    Promise.all(u4.current[e2].splice(0).map(([o6, f4]) => f4)).then(() => {
      var o6;
      (o6 = p4.current.shift()) == null || o6();
    }).then(() => a3(e2));
  });
  return (0, import_react12.useMemo)(() => ({ children: s6, register: x3, unregister: c5, onStart: v3, onStop: d4, wait: h3, chains: u4 }), [x3, c5, s6, v3, d4, u4, h3]);
}
function xe() {
}
var Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se(t8) {
  var r6;
  let n4 = {};
  for (let s6 of Pe)
    n4[s6] = (r6 = t8[s6]) != null ? r6 : xe;
  return n4;
}
function Re(t8) {
  let n4 = (0, import_react12.useRef)(se(t8));
  return (0, import_react12.useEffect)(() => {
    n4.current = se(t8);
  }, [t8]), n4;
}
var ye = "div";
var ae = S.RenderStrategy;
function De(t8, n4) {
  var K, Q2;
  let { beforeEnter: r6, afterEnter: s6, beforeLeave: y3, afterLeave: D3, enter: c5, enterFrom: x3, enterTo: p4, entered: h3, leave: u4, leaveFrom: v3, leaveTo: d4, ...i4 } = t8, e2 = (0, import_react12.useRef)(null), a3 = y(e2, n4), o6 = (K = i4.unmount) == null || K ? j.Unmount : j.Hidden, { show: f4, appear: P2, initial: T3 } = Se(), [l7, j2] = (0, import_react12.useState)(f4 ? "visible" : "hidden"), q2 = Ne(), { register: O2, unregister: V } = q2;
  (0, import_react12.useEffect)(() => O2(e2), [O2, e2]), (0, import_react12.useEffect)(() => {
    if (o6 === j.Hidden && e2.current) {
      if (f4 && l7 !== "visible") {
        j2("visible");
        return;
      }
      return u(l7, { ["hidden"]: () => V(e2), ["visible"]: () => O2(e2) });
    }
  }, [l7, e2, O2, V, f4, o6]);
  let k2 = s2({ base: S2(i4.className), enter: S2(c5), enterFrom: S2(x3), enterTo: S2(p4), entered: S2(h3), leave: S2(u4), leaveFrom: S2(v3), leaveTo: S2(d4) }), w3 = Re({ beforeEnter: r6, afterEnter: s6, beforeLeave: y3, afterLeave: D3 }), G = l2();
  (0, import_react12.useEffect)(() => {
    if (G && l7 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, l7, G]);
  let ue = T3 && !P2, z2 = P2 && f4 && T3, Te = (() => !G || ue ? "idle" : f4 ? "enter" : "leave")(), H2 = c4(0), de = o4((g4) => u(g4, { enter: () => {
    H2.addFlag(d2.Opening), w3.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d2.Closing), w3.current.beforeLeave();
  }, idle: () => {
  } })), fe = o4((g4) => u(g4, { enter: () => {
    H2.removeFlag(d2.Opening), w3.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d2.Closing), w3.current.afterLeave();
  }, idle: () => {
  } })), A2 = oe(() => {
    j2("hidden"), V(e2);
  }, q2);
  E2({ immediate: z2, container: e2, classes: k2, direction: Te, onStart: s2((g4) => {
    A2.onStart(e2, g4, de);
  }), onStop: s2((g4) => {
    A2.onStop(e2, g4, fe), g4 === "leave" && !U(A2) && (j2("hidden"), V(e2));
  }) });
  let R3 = i4, me = { ref: a3 };
  return z2 ? R3 = { ...R3, className: t5(i4.className, ...k2.current.enter, ...k2.current.enterFrom) } : (R3.className = t5(i4.className, (Q2 = e2.current) == null ? void 0 : Q2.className), R3.className === "" && delete R3.className), import_react12.default.createElement(M2.Provider, { value: A2 }, import_react12.default.createElement(c3, { value: u(l7, { ["visible"]: d2.Open, ["hidden"]: d2.Closed }) | H2.flags }, X({ ourProps: me, theirProps: R3, defaultTag: ye, features: ae, visible: l7 === "visible", name: "Transition.Child" })));
}
function He(t8, n4) {
  let { show: r6, appear: s6 = false, unmount: y3 = true, ...D3 } = t8, c5 = (0, import_react12.useRef)(null), x3 = y(c5, n4);
  l2();
  let p4 = C();
  if (r6 === void 0 && p4 !== null && (r6 = (p4 & d2.Open) === d2.Open), ![true, false].includes(r6))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h3, u4] = (0, import_react12.useState)(r6 ? "visible" : "hidden"), v3 = oe(() => {
    u4("hidden");
  }), [d4, i4] = (0, import_react12.useState)(true), e2 = (0, import_react12.useRef)([r6]);
  l(() => {
    d4 !== false && e2.current[e2.current.length - 1] !== r6 && (e2.current.push(r6), i4(false));
  }, [e2, r6]);
  let a3 = (0, import_react12.useMemo)(() => ({ show: r6, appear: s6, initial: d4 }), [r6, s6, d4]);
  (0, import_react12.useEffect)(() => {
    if (r6)
      u4("visible");
    else if (!U(v3))
      u4("hidden");
    else {
      let T3 = c5.current;
      if (!T3)
        return;
      let l7 = T3.getBoundingClientRect();
      l7.x === 0 && l7.y === 0 && l7.width === 0 && l7.height === 0 && u4("hidden");
    }
  }, [r6, v3]);
  let o6 = { unmount: y3 }, f4 = o4(() => {
    var T3;
    d4 && i4(false), (T3 = t8.beforeEnter) == null || T3.call(t8);
  }), P2 = o4(() => {
    var T3;
    d4 && i4(false), (T3 = t8.beforeLeave) == null || T3.call(t8);
  });
  return import_react12.default.createElement(M2.Provider, { value: v3 }, import_react12.default.createElement(_.Provider, { value: a3 }, X({ ourProps: { ...o6, as: import_react12.Fragment, children: import_react12.default.createElement(le, { ref: x3, ...o6, ...D3, beforeEnter: f4, beforeLeave: P2 }) }, theirProps: {}, defaultTag: import_react12.Fragment, features: ae, visible: h3 === "visible", name: "Transition" })));
}
function Fe(t8, n4) {
  let r6 = (0, import_react12.useContext)(_) !== null, s6 = C() !== null;
  return import_react12.default.createElement(import_react12.default.Fragment, null, !r6 && s6 ? import_react12.default.createElement(W, { ref: n4, ...t8 }) : import_react12.default.createElement(le, { ref: n4, ...t8 }));
}
var W = D(He);
var le = D(De);
var Le = D(Fe);
var tt = Object.assign(W, { Child: Le, Root: W });

// node_modules/tailwind-merge/dist/lib/tw-join.mjs
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  var resolvedValue;
  var string = "";
  for (var k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}

// node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function(_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  var theme = config.theme, prefix = config.prefix;
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function(_ref2) {
    var classGroupId = _ref2[0], classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function(classDefinition) {
    if (typeof classDefinition === "string") {
      var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function(_ref3) {
      var key = _ref3[0], classGroup2 = _ref3[1];
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function(_ref4) {
    var classGroupId = _ref4[0], classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function(classDefinition) {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
          var key = _ref5[0], value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// node_modules/tailwind-merge/dist/lib/lru-cache.mjs
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return void 0;
      },
      set: function set() {
      }
    };
  }
  var cacheSize = 0;
  var cache = /* @__PURE__ */ new Map();
  var previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}

// node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  var separator = config.separator || ":";
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function(modifier) {
    var isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}

// node_modules/tailwind-merge/dist/lib/config-utils.mjs
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}

// node_modules/tailwind-merge/dist/lib/merge-classlist.mjs
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  var classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(":");
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter(function(parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function(parsed) {
    return parsed.originalClassName;
  }).join(" ");
}

// node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs
function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}

// node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}

// node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}

// node_modules/tailwind-merge/dist/lib/default-config.mjs
function getDefaultConfig() {
  var colors = fromTheme("colors");
  var spacing = fromTheme("spacing");
  var blur = fromTheme("blur");
  var brightness = fromTheme("brightness");
  var borderColor = fromTheme("borderColor");
  var borderRadius = fromTheme("borderRadius");
  var borderSpacing = fromTheme("borderSpacing");
  var borderWidth = fromTheme("borderWidth");
  var contrast = fromTheme("contrast");
  var grayscale = fromTheme("grayscale");
  var hueRotate = fromTheme("hueRotate");
  var invert = fromTheme("invert");
  var gap = fromTheme("gap");
  var gradientColorStops = fromTheme("gradientColorStops");
  var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  var inset = fromTheme("inset");
  var margin = fromTheme("margin");
  var opacity = fromTheme("opacity");
  var padding = fromTheme("padding");
  var saturate = fromTheme("saturate");
  var scale = fromTheme("scale");
  var sepia = fromTheme("sepia");
  var skew = fromTheme("skew");
  var space = fromTheme("space");
  var translate = fromTheme("translate");
  var getOverscroll = function getOverscroll2() {
    return ["auto", "contain", "none"];
  };
  var getOverflow = function getOverflow2() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
    return ["auto", isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ["", isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
    return ["auto", isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions2() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  };
  var getLineStyles = function getLineStyles2() {
    return ["solid", "dashed", "dotted", "double", "none"];
  };
  var getBlendModes = function getBlendModes2() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  };
  var getAlign = function getAlign2() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  };
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ["", "0", isArbitraryValue];
  };
  var getBreaks = function getBreaks2() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(getAlign(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(getAlign(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(getLineStyles(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(getLineStyles(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}

// node_modules/tailwind-merge/dist/lib/tw-merge.mjs
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// app/common/components/Drawer/Control.tsx
var import_react14 = __toESM(require_react());

// app/common/hooks/useModal.ts
var import_react13 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\hooks\\useModal.ts"
  );
  import.meta.hot.lastModified = "1695581333677.5647";
}
var useModal = (modalId) => {
  const { modals } = (0, import_react13.useContext)(AppContext_default);
  const isOpen = modals.state[modalId];
  const open = (0, import_react13.useCallback)(() => {
    modals.dispatch({ type: "OPEN_MODAL", payload: { modalId } });
  }, []);
  const close = (0, import_react13.useCallback)(() => {
    modals.dispatch({ type: "CLOSE_MODAL", payload: { modalId } });
  }, []);
  return {
    isOpen,
    open,
    close
  };
};

// app/common/components/Drawer/Control.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Control.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Control.tsx"
  );
  import.meta.hot.lastModified = "1694885556276.1135";
}
function Control({
  modalId,
  children,
  ...props
}) {
  _s2();
  const {
    isOpen,
    close,
    open
  } = useModal(modalId);
  const Component = (0, import_react14.isValidElement)(children) ? import_react14.Children.only(children) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ...props, children: import_react14.Children.only(children) }, void 0, false, {
    fileName: "app/common/components/Drawer/Control.tsx",
    lineNumber: 35,
    columnNumber: 74
  }, this);
  return children ? (0, import_react14.cloneElement)(Component, {
    ...props,
    onClick: isOpen ? close : open
  }) : null;
}
_s2(Control, "epbHpxBmHHgpNQ9jlF1Ybn7DJWE=", false, function() {
  return [useModal];
});
_c2 = Control;
var _c2;
$RefreshReg$(_c2, "Control");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Drawer/Body.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Body.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Body.tsx"
  );
  import.meta.hot.lastModified = "1694882019871.4976";
}
function Body({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: twMerge("flex-grow order-2", className), ...props }, void 0, false, {
    fileName: "app/common/components/Drawer/Body.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = Body;
var _c3;
$RefreshReg$(_c3, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Drawer/Header.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Header.tsx"
  );
  import.meta.hot.lastModified = "1694882106195.504";
}
function Header({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: twMerge("order-1", className), ...props }, void 0, false, {
    fileName: "app/common/components/Drawer/Header.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c4 = Header;
var _c4;
$RefreshReg$(_c4, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Drawer/Footer.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1694882077068.6736";
}
function Footer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: twMerge("order-3", className), ...props }, void 0, false, {
    fileName: "app/common/components/Drawer/Footer.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c5 = Footer;
var _c5;
$RefreshReg$(_c5, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Drawer/Backdrop.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Backdrop.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Backdrop.tsx"
  );
  import.meta.hot.lastModified = "1695476234855.5554";
}
function Backdrop({
  className,
  isOpen,
  onClose,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(tt, { show: isOpen, enterFrom: "opacity-0", enter: "opacity-100", leaveFrom: "opacity-100", leave: "opacity-0", as: "div", className: "bg-black fixed left-0 top-0 z-1 h-full w-full transform bg-opacity-40 backdrop-blur-[2px] duration-default ease-default", onClick: onClose, ...props }, void 0, false, {
    fileName: "app/common/components/Drawer/Backdrop.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c6 = Backdrop;
var _c6;
$RefreshReg$(_c6, "Backdrop");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/clsx/dist/clsx.mjs
function r3(e2) {
  var t8, f4, n4 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n4 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t8 = 0; t8 < e2.length; t8++)
        e2[t8] && (f4 = r3(e2[t8])) && (n4 && (n4 += " "), n4 += f4);
    else
      for (t8 in e2)
        e2[t8] && (n4 && (n4 += " "), n4 += t8);
  return n4;
}
function clsx() {
  for (var e2, t8, f4 = 0, n4 = ""; f4 < arguments.length; )
    (e2 = arguments[f4++]) && (t8 = r3(e2)) && (n4 && (n4 += " "), n4 += t8);
  return n4;
}

// node_modules/cva/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants: variants2, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants2).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants2[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// app/common/components/Drawer/Drawer.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Drawer.style.ts"
  );
  import.meta.hot.lastModified = "1695476245049.8801";
}
var drawer = cva("bg-white flex flex-col fixed p-4 z-1", {
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
});
var getTransition = (position) => {
  return {
    enterFrom: cx({
      "-translate-y-full": position === "top",
      "translate-y-full": position === "bottom",
      "-translate-x-full": position === "left",
      "translate-x-full": position === "right"
    }),
    enterTo: cx({
      "translate-y-0": position === "top",
      "-translate-y-0": position === "bottom",
      "translate-x-0": position === "left",
      "-translate-x-0": position === "right"
    }),
    enter: "transform-gpu transition-transform ease-default duration-default",
    leave: "transform-gpu transition-transform ease-default duration-default",
    leaveFrom: cx({
      "translate-y-0": position === "top",
      "-translate-y-0": position === "bottom",
      "translate-x-0": position === "left",
      "-translate-x-0": position === "right"
    }),
    leaveTo: cx({
      "-translate-y-full": position === "top",
      "translate-y-full": position === "bottom",
      "-translate-x-full": position === "left",
      "translate-x-full": position === "right"
    })
  };
};

// app/common/hooks/useKeyboard.ts
var import_react16 = __toESM(require_react());

// app/common/utils/PubSub.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\utils\\PubSub.ts"
  );
  import.meta.hot.lastModified = "1694290737418.163";
}
var PubSub = class {
  constructor(events2) {
    this.listeners = new Map(
      Object.values(events2).map((event) => [event, []])
    );
  }
  on(event, callback) {
    var _a;
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    (_a = this.listeners.get(event)) == null ? void 0 : _a.push(callback);
  }
  off(event, callback) {
    if (!this.listeners.has(event)) {
      return;
    }
    const callbacks = this.listeners.get(event);
    if (!callbacks || !callbacks.length) {
      return;
    }
    this.listeners.set(
      event,
      callbacks.filter((cb) => cb !== callback)
    );
  }
  emit(event, ...args) {
    if (!this.listeners.has(event)) {
      return;
    }
    const callbacks = this.listeners.get(event);
    if (!callbacks || !callbacks.length) {
      return;
    }
    callbacks.forEach((callback) => callback(...args));
  }
};

// app/common/utils/KeyboardRegistry.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\utils\\KeyboardRegistry.ts"
  );
  import.meta.hot.lastModified = "1694290736418.163";
}
var events = {};
var KeyboardRegistry = class {
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
};
var keyboardRegistry = KeyboardRegistry.instance;

// app/common/hooks/useKeyboard.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\hooks\\useKeyboard.ts"
  );
  import.meta.hot.lastModified = "1694291256773.558";
}
var useKeyboard = ({ fn, key }) => {
  const onKeyDown = (0, import_react16.useCallback)(
    (event) => {
      if (key && event.key === key) {
        return keyboardRegistry.emit(key, event);
      }
      return fn(event);
    },
    [fn, key]
  );
  (0, import_react16.useEffect)(() => {
    if (key) {
      keyboardRegistry.register(key, fn);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (key) {
        keyboardRegistry.unregister(key, fn);
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [fn, key]);
};

// app/common/components/Drawer/Drawer.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Drawer\\\\Drawer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Drawer\\Drawer.tsx"
  );
  import.meta.hot.lastModified = "1694887546532.232";
}
var Drawer = ({
  modalId,
  position,
  className,
  children,
  ...props
}) => {
  _s3();
  const {
    isOpen,
    close
  } = useModal(modalId);
  useKeyboard({
    key: "Escape",
    fn: close
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Backdrop, { isOpen, onClose: close }, void 0, false, {
      fileName: "app/common/components/Drawer/Drawer.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(tt, { ...getTransition(position != null ? position : "right"), show: isOpen, as: "aside", ...props, className: twMerge(drawer({
      position: position != null ? position : "right",
      className
    })), children }, void 0, false, {
      fileName: "app/common/components/Drawer/Drawer.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/Drawer/Drawer.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s3(Drawer, "HCjxNHwb2Tz2VYYtpNSmzoIm++o=", false, function() {
  return [useModal, useKeyboard];
});
_c7 = Drawer;
var Drawer_default = _c22 = Object.assign(Drawer, {
  Control,
  Header,
  Body,
  Footer
});
var _c7;
var _c22;
$RefreshReg$(_c7, "Drawer");
$RefreshReg$(_c22, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Link/Link.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Link\\\\Link.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Link\\Link.tsx"
  );
  import.meta.hot.lastModified = "1694882235822.8447";
}
function Link2(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link, { ...props }, void 0, false, {
    fileName: "app/common/components/Link/Link.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c8 = Link2;
var _c8;
$RefreshReg$(_c8, "Link");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Button/Button.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Button\\Button.style.ts"
  );
  import.meta.hot.lastModified = "1698016230960.878";
}
var button = cva(
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
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Button\\\\Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Button\\Button.tsx"
  );
  import.meta.hot.lastModified = "1695560722111.248";
}
function Button({
  to,
  className,
  intent,
  size,
  ...props
}) {
  if (to) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Link2, { to, className: twMerge(button({
      intent: intent != null ? intent : "primary",
      size: size != null ? size : "md",
      className
    })), ...props }, void 0, false, {
      fileName: "app/common/components/Button/Button.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: twMerge(button({
    intent: intent != null ? intent : "primary",
    size: size != null ? size : "md",
    className
  })), ...props }, void 0, false, {
    fileName: "app/common/components/Button/Button.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c9 = Button;
var _c9;
$RefreshReg$(_c9, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-icons/lib/esm/iconBase.js
var import_react20 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react19 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react19.default.createContext && import_react19.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t8) {
    for (var s6, i4 = 1, n4 = arguments.length; i4 < n4; i4++) {
      s6 = arguments[i4];
      for (var p4 in s6)
        if (Object.prototype.hasOwnProperty.call(s6, p4))
          t8[p4] = s6[p4];
    }
    return t8;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s6, e2) {
  var t8 = {};
  for (var p4 in s6)
    if (Object.prototype.hasOwnProperty.call(s6, p4) && e2.indexOf(p4) < 0)
      t8[p4] = s6[p4];
  if (s6 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p4 = Object.getOwnPropertySymbols(s6); i4 < p4.length; i4++) {
      if (e2.indexOf(p4[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s6, p4[i4]))
        t8[p4[i4]] = s6[p4[i4]];
    }
  return t8;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i4) {
    return import_react20.default.createElement(node.tag, __assign({
      key: i4
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react20.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react20.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react20.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react20.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/md/index.esm.js
function MdClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(props);
}
function MdMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" } }] })(props);
}

// app/common/components/Heading/Heading.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Heading\\Heading.style.ts"
  );
  import.meta.hot.lastModified = "1695477234566.595";
}
var heading = cva("font-semibold text-gray-900", {
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
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Heading\\\\Heading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Heading\\Heading.tsx"
  );
  import.meta.hot.lastModified = "1694882210312.235";
}
function Heading({
  className,
  intent,
  as: As = "h1",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(As, { className: twMerge(heading({
    intent: intent != null ? intent : "h1"
  }), className), ...props }, void 0, false, {
    fileName: "app/common/components/Heading/Heading.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c10 = Heading;
var _c10;
$RefreshReg$(_c10, "Heading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/Input.tsx
var import_react22 = __toESM(require_react());

// app/common/components/If/If.tsx
var import_react21 = __toESM(require_react());

// app/common/components/If/Then.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\If\\\\Then.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\If\\Then.tsx"
  );
  import.meta.hot.lastModified = "1695169212448.2705";
}
function Then({
  children
}) {
  return children;
}
_c11 = Then;
var _c11;
$RefreshReg$(_c11, "Then");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/If/Else.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\If\\\\Else.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\If\\Else.tsx"
  );
  import.meta.hot.lastModified = "1695169622870.8127";
}
function Else({
  children
}) {
  return children;
}
_c12 = Else;
var _c12;
$RefreshReg$(_c12, "Else");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/If/If.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\If\\\\If.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\If\\If.tsx"
  );
  import.meta.hot.lastModified = "1695169663172.5735";
}
function findChildren(children, name) {
  return import_react21.Children.toArray(children).find((child) => {
    if (typeof child === "object" && "type" in child) {
      if (typeof child.type === "function") {
        return child.type.name === name;
      }
    }
    return false;
  });
}
function If({
  condition,
  children
}) {
  var _a;
  return condition ? findChildren(children, "Then") : (_a = findChildren(children, "Else")) != null ? _a : null;
}
_c13 = If;
var If_default = _c23 = Object.assign(If, {
  Then,
  Else
});
var _c13;
var _c23;
$RefreshReg$(_c13, "If");
$RefreshReg$(_c23, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/InputLabel.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\InputLabel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\InputLabel.tsx"
  );
  import.meta.hot.lastModified = "1695253935322.6926";
}
function InputLabel({
  label,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(If_default, { condition: !!label, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { ...props, className: "text-sm text-gray-900 block font-medium leading-6", children: label }, void 0, false, {
    fileName: "app/common/components/Input/InputLabel.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputLabel.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputLabel.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c14 = InputLabel;
var _c14;
$RefreshReg$(_c14, "InputLabel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/InputHelperText.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\InputHelperText.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\InputHelperText.tsx"
  );
  import.meta.hot.lastModified = "1695254226631.6584";
}
function InputHelperText({
  helperText,
  id
}) {
  const label = id ? `${id} helper text` : "helper text";
  const $id = id ? `${id}-helper-text` : "helper-text";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(If_default, { condition: !!helperText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-sm text-gray-500 mt-2", id: $id, "aria-label": label, children: helperText }, void 0, false, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputHelperText.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c15 = InputHelperText;
var _c15;
$RefreshReg$(_c15, "InputHelperText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/InputCornerHint.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\InputCornerHint.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\InputCornerHint.tsx"
  );
  import.meta.hot.lastModified = "1695254689809.3455";
}
function InputCornerHint({
  cornerHint,
  id,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(If_default, { condition: !!cornerHint, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { ...props, className: "text-sm text-gray-500 leading-6", children: cornerHint }, void 0, false, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputCornerHint.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c16 = InputCornerHint;
var _c16;
$RefreshReg$(_c16, "InputCornerHint");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/InputLeadingContainer.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\InputLeadingContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\InputLeadingContainer.tsx"
  );
  import.meta.hot.lastModified = "1695295864061.1172";
}
function InputLeadingContainer({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(If_default, { condition: !!children, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...props, className: twMerge("absolute inset-y-0 left-0 flex items-center pl-3", className), children }, void 0, false, {
    fileName: "app/common/components/Input/InputLeadingContainer.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputLeadingContainer.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputLeadingContainer.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c17 = InputLeadingContainer;
var _c17;
$RefreshReg$(_c17, "InputLeadingContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/InputTrailingContainer.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\InputTrailingContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\InputTrailingContainer.tsx"
  );
  import.meta.hot.lastModified = "1695296171681.3457";
}
function InputTrailingContainer({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(If_default, { condition: !!children, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { ...props, className: twMerge("absolute inset-y-0 right-0 flex items-center pr-3", className), children }, void 0, false, {
    fileName: "app/common/components/Input/InputTrailingContainer.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputTrailingContainer.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Input/InputTrailingContainer.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c18 = InputTrailingContainer;
var _c18;
$RefreshReg$(_c18, "InputTrailingContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Input/Input.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\Input.style.ts"
  );
  import.meta.hot.lastModified = "1695476046730.942";
}
var input = cva(
  "isolate text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 invalid:ring-red-300 invalid:placeholder:text-red-300 focus:ring-2 focus:ring-inset invalid:focus:ring-red-500 disabled:cursor-not-allowed sm:leading-6"
);

// app/common/components/Input/Input.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Input\\\\Input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Input\\Input.tsx"
  );
  import.meta.hot.lastModified = "1695641867421.0977";
}
var Input_default = _c24 = (0, import_react22.forwardRef)(_c19 = function Input({
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
  const nameOrId = name != null ? name : id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(InputLabel, { htmlFor: nameOrId, label }, void 0, false, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(InputCornerHint, { cornerHint }, void 0, false, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "relative mt-2 rounded-md shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(InputLeadingContainer, { ...leadingContainerProps, children: leading }, void 0, false, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { ref, type: type != null ? type : "text", name: nameOrId, id: nameOrId, className: twMerge(input({
        className: cx({
          "pl-10": !!leading,
          "pr-10": !!trailing
        })
      }), className), placeholder, "aria-describedby": `${nameOrId}-description`, ...props }, void 0, false, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(InputTrailingContainer, { ...trailingContainerProps, children: trailing }, void 0, false, {
        fileName: "app/common/components/Input/Input.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(InputHelperText, { helperText: helpText, id: nameOrId }, void 0, false, {
      fileName: "app/common/components/Input/Input.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/Input/Input.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
});
var _c19;
var _c24;
$RefreshReg$(_c19, "%default%$forwardRef");
$RefreshReg$(_c24, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js
var React3 = __toESM(require_react(), 1);
function ArrowLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
  }));
}
var ForwardRef = React3.forwardRef(ArrowLeftIcon);
var ArrowLeftIcon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js
var React4 = __toESM(require_react(), 1);
function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
  }));
}
var ForwardRef2 = React4.forwardRef(ArrowRightIcon);
var ArrowRightIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/LinkIcon.js
var React5 = __toESM(require_react(), 1);
function LinkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
  }));
}
var ForwardRef3 = React5.forwardRef(LinkIcon);
var LinkIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/PencilIcon.js
var React6 = __toESM(require_react(), 1);
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React6.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React6.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React6.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
  }));
}
var ForwardRef4 = React6.forwardRef(PencilIcon);
var PencilIcon_default = ForwardRef4;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React7 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React7.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React7.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React7.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef5 = React7.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef5;

// app/common/components/Toast/ToastAction.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastAction.style.ts"
  );
  import.meta.hot.lastModified = "1695531986770.4473";
}
var toastAction = cva(
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
);
var ToastAction_style_default = toastAction;

// app/common/components/Toast/ToastAction.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Toast\\\\ToastAction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastAction.tsx"
  );
  import.meta.hot.lastModified = "1695533451833.1743";
}
function ToastAction({
  intent,
  className,
  children,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { ...props, type, className: twMerge(ToastAction_style_default({
    intent: intent != null ? intent : "success",
    className
  })), children }, void 0, false, {
    fileName: "app/common/components/Toast/ToastAction.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c20 = ToastAction;
var _c20;
$RefreshReg$(_c20, "ToastAction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Toast/ToastHeading.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastHeading.style.ts"
  );
  import.meta.hot.lastModified = "1695531659337.755";
}
var toastHeading = cva("font-medium text-sm", {
  variants: {
    intent: {
      info: "text-blue-800",
      success: "text-green-800",
      warning: "text-yellow-800",
      error: "text-red-800"
    }
  }
});
var ToastHeading_style_default = toastHeading;

// app/common/components/Toast/ToastHeading.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Toast\\\\ToastHeading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastHeading.tsx"
  );
  import.meta.hot.lastModified = "1695531798373.8096";
}
function ToastHeading({
  intent,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { ...props, className: twMerge(ToastHeading_style_default({
    intent: intent != null ? intent : "success",
    className
  })), children }, void 0, false, {
    fileName: "app/common/components/Toast/ToastHeading.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c21 = ToastHeading;
var _c21;
$RefreshReg$(_c21, "ToastHeading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Toast/ToastLink.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastLink.style.ts"
  );
  import.meta.hot.lastModified = "1695533247717.297";
}
var toastLink = cva("whitespace-nowrap font-medium", {
  variants: {
    intent: {
      info: "text-blue-700 hover:text-blue-600",
      success: "text-green-700 hover:text-green-600",
      warning: "text-yellow-700 hover:text-yellow-600",
      error: "text-red-700 hover:text-red-600"
    }
  }
});
var ToastLink_style_default = toastLink;

// app/common/components/Toast/ToastLink.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Toast\\\\ToastLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastLink.tsx"
  );
  import.meta.hot.lastModified = "1695533428264.4463";
}
function ToastLink({
  intent,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Link2, { ...props, className: twMerge(ToastLink_style_default({
    intent: intent != null ? intent : "success",
    className
  })) }, void 0, false, {
    fileName: "app/common/components/Toast/ToastLink.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c25 = ToastLink;
var _c25;
$RefreshReg$(_c25, "ToastLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Toast/Toast.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\Toast.style.ts"
  );
  import.meta.hot.lastModified = "1695533040546.575";
}
var toast = cva("rounded-md p-4", {
  variants: {
    intent: {
      info: "bg-blue-50 text-blue-700 [&_.icon-container]:text-blue-400",
      success: "bg-green-50 text-green-700 [&_.icon-container]:text-green-400",
      warning: "bg-yellow-50 text-yellow-700 [&_.icon-container]:text-yellow-400",
      error: "bg-red-50 text-red-700  [&_.icon-container]:text-red-400"
    }
  }
});
var Toast_style_default = toast;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/react-toastify/node_modules/clsx/dist/clsx.m.js
function r4(e2) {
  var t8, f4, n4 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n4 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t8 = 0; t8 < e2.length; t8++)
        e2[t8] && (f4 = r4(e2[t8])) && (n4 && (n4 += " "), n4 += f4);
    else
      for (t8 in e2)
        e2[t8] && (n4 && (n4 += " "), n4 += t8);
  return n4;
}
function clsx2() {
  for (var e2, t8, f4 = 0, n4 = ""; f4 < arguments.length; )
    (e2 = arguments[f4++]) && (t8 = r4(e2)) && (n4 && (n4 += " "), n4 += t8);
  return n4;
}
var clsx_m_default = clsx2;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
"use client";
var u3 = (t8) => "number" == typeof t8 && !isNaN(t8);
var d3 = (t8) => "string" == typeof t8;
var p3 = (t8) => "function" == typeof t8;
var m2 = (t8) => d3(t8) || p3(t8) ? t8 : null;
var f3 = (t8) => (0, import_react23.isValidElement)(t8) || d3(t8) || p3(t8) || u3(t8);
function g3(t8, e2, n4) {
  void 0 === n4 && (n4 = 300);
  const { scrollHeight: o6, style: s6 } = t8;
  requestAnimationFrame(() => {
    s6.minHeight = "initial", s6.height = o6 + "px", s6.transition = `all ${n4}ms`, requestAnimationFrame(() => {
      s6.height = "0", s6.padding = "0", s6.margin = "0", setTimeout(e2, n4);
    });
  });
}
function h2(e2) {
  let { enter: a3, exit: r6, appendPosition: i4 = false, collapse: l7 = true, collapseDuration: c5 = 300 } = e2;
  return function(e3) {
    let { children: u4, position: d4, preventExitTransition: p4, done: m3, nodeRef: f4, isIn: h3 } = e3;
    const y3 = i4 ? `${a3}--${d4}` : a3, v3 = i4 ? `${r6}--${d4}` : r6, T3 = (0, import_react23.useRef)(0);
    return (0, import_react23.useLayoutEffect)(() => {
      const t8 = f4.current, e4 = y3.split(" "), n4 = (o6) => {
        o6.target === f4.current && (t8.dispatchEvent(new Event("d")), t8.removeEventListener("animationend", n4), t8.removeEventListener("animationcancel", n4), 0 === T3.current && "animationcancel" !== o6.type && t8.classList.remove(...e4));
      };
      t8.classList.add(...e4), t8.addEventListener("animationend", n4), t8.addEventListener("animationcancel", n4);
    }, []), (0, import_react23.useEffect)(() => {
      const t8 = f4.current, e4 = () => {
        t8.removeEventListener("animationend", e4), l7 ? g3(t8, m3, c5) : m3();
      };
      h3 || (p4 ? e4() : (T3.current = 1, t8.className += ` ${v3}`, t8.addEventListener("animationend", e4)));
    }, [h3]), import_react23.default.createElement(import_react23.default.Fragment, null, u4);
  };
}
function y2(t8, e2) {
  return null != t8 ? { content: t8.content, containerId: t8.props.containerId, id: t8.props.toastId, theme: t8.props.theme, type: t8.props.type, data: t8.props.data || {}, isLoading: t8.props.isLoading, icon: t8.props.icon, status: e2 } : {};
}
var v2 = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t8, e2) {
  return this.list.has(t8) || this.list.set(t8, []), this.list.get(t8).push(e2), this;
}, off(t8, e2) {
  if (e2) {
    const n4 = this.list.get(t8).filter((t9) => t9 !== e2);
    return this.list.set(t8, n4), this;
  }
  return this.list.delete(t8), this;
}, cancelEmit(t8) {
  const e2 = this.emitQueue.get(t8);
  return e2 && (e2.forEach(clearTimeout), this.emitQueue.delete(t8)), this;
}, emit(t8) {
  this.list.has(t8) && this.list.get(t8).forEach((e2) => {
    const n4 = setTimeout(() => {
      e2(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t8) || this.emitQueue.set(t8, []), this.emitQueue.get(t8).push(n4);
  });
} };
var T2 = (e2) => {
  let { theme: n4, type: o6, ...s6 } = e2;
  return import_react23.default.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n4 ? "currentColor" : `var(--toastify-icon-color-${o6})`, ...s6 });
};
var E3 = { info: function(e2) {
  return import_react23.default.createElement(T2, { ...e2 }, import_react23.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e2) {
  return import_react23.default.createElement(T2, { ...e2 }, import_react23.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e2) {
  return import_react23.default.createElement(T2, { ...e2 }, import_react23.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e2) {
  return import_react23.default.createElement(T2, { ...e2 }, import_react23.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return import_react23.default.createElement("div", { className: "Toastify__spinner" });
} };
function C3(t8) {
  const [, o6] = (0, import_react23.useReducer)((t9) => t9 + 1, 0), [l7, c5] = (0, import_react23.useState)([]), g4 = (0, import_react23.useRef)(null), h3 = (0, import_react23.useRef)(/* @__PURE__ */ new Map()).current, T3 = (t9) => -1 !== l7.indexOf(t9), C4 = (0, import_react23.useRef)({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t8, containerId: null, isToastActive: T3, getToast: (t9) => h3.get(t9) }).current;
  function b4(t9) {
    let { containerId: e2 } = t9;
    const { limit: n4 } = C4.props;
    !n4 || e2 && C4.containerId !== e2 || (C4.count -= C4.queue.length, C4.queue = []);
  }
  function I2(t9) {
    c5((e2) => null == t9 ? [] : e2.filter((e3) => e3 !== t9));
  }
  function _3() {
    const { toastContent: t9, toastProps: e2, staleId: n4 } = C4.queue.shift();
    O2(t9, e2, n4);
  }
  function L2(t9, n4) {
    let { delay: s6, staleId: r6, ...i4 } = n4;
    if (!f3(t9) || function(t10) {
      return !g4.current || C4.props.enableMultiContainer && t10.containerId !== C4.props.containerId || h3.has(t10.toastId) && null == t10.updateId;
    }(i4))
      return;
    const { toastId: l8, updateId: c6, data: T4 } = i4, { props: b5 } = C4, L3 = () => I2(l8), N3 = null == c6;
    N3 && C4.count++;
    const M4 = { ...b5, style: b5.toastStyle, key: C4.toastKey++, ...Object.fromEntries(Object.entries(i4).filter((t10) => {
      let [e2, n5] = t10;
      return null != n5;
    })), toastId: l8, updateId: c6, data: T4, closeToast: L3, isIn: false, className: m2(i4.className || b5.toastClassName), bodyClassName: m2(i4.bodyClassName || b5.bodyClassName), progressClassName: m2(i4.progressClassName || b5.progressClassName), autoClose: !i4.isLoading && (R3 = i4.autoClose, w3 = b5.autoClose, false === R3 || u3(R3) && R3 > 0 ? R3 : w3), deleteToast() {
      const t10 = y2(h3.get(l8), "removed");
      h3.delete(l8), v2.emit(4, t10);
      const e2 = C4.queue.length;
      if (C4.count = null == l8 ? C4.count - C4.displayedToast : C4.count - 1, C4.count < 0 && (C4.count = 0), e2 > 0) {
        const t11 = null == l8 ? C4.props.limit : 1;
        if (1 === e2 || 1 === t11)
          C4.displayedToast++, _3();
        else {
          const n5 = t11 > e2 ? e2 : t11;
          C4.displayedToast = n5;
          for (let t12 = 0; t12 < n5; t12++)
            _3();
        }
      } else
        o6();
    } };
    var R3, w3;
    M4.iconOut = function(t10) {
      let { theme: n5, type: o7, isLoading: s7, icon: r7 } = t10, i5 = null;
      const l9 = { theme: n5, type: o7 };
      return false === r7 || (p3(r7) ? i5 = r7(l9) : (0, import_react23.isValidElement)(r7) ? i5 = (0, import_react23.cloneElement)(r7, l9) : d3(r7) || u3(r7) ? i5 = r7 : s7 ? i5 = E3.spinner() : ((t11) => t11 in E3)(o7) && (i5 = E3[o7](l9))), i5;
    }(M4), p3(i4.onOpen) && (M4.onOpen = i4.onOpen), p3(i4.onClose) && (M4.onClose = i4.onClose), M4.closeButton = b5.closeButton, false === i4.closeButton || f3(i4.closeButton) ? M4.closeButton = i4.closeButton : true === i4.closeButton && (M4.closeButton = !f3(b5.closeButton) || b5.closeButton);
    let x3 = t9;
    (0, import_react23.isValidElement)(t9) && !d3(t9.type) ? x3 = (0, import_react23.cloneElement)(t9, { closeToast: L3, toastProps: M4, data: T4 }) : p3(t9) && (x3 = t9({ closeToast: L3, toastProps: M4, data: T4 })), b5.limit && b5.limit > 0 && C4.count > b5.limit && N3 ? C4.queue.push({ toastContent: x3, toastProps: M4, staleId: r6 }) : u3(s6) ? setTimeout(() => {
      O2(x3, M4, r6);
    }, s6) : O2(x3, M4, r6);
  }
  function O2(t9, e2, n4) {
    const { toastId: o7 } = e2;
    n4 && h3.delete(n4);
    const s6 = { content: t9, props: e2 };
    h3.set(o7, s6), c5((t10) => [...t10, o7].filter((t11) => t11 !== n4)), v2.emit(4, y2(s6, null == s6.props.updateId ? "added" : "updated"));
  }
  return (0, import_react23.useEffect)(() => (C4.containerId = t8.containerId, v2.cancelEmit(3).on(0, L2).on(1, (t9) => g4.current && I2(t9)).on(5, b4).emit(2, C4), () => {
    h3.clear(), v2.emit(3, C4);
  }), []), (0, import_react23.useEffect)(() => {
    C4.props = t8, C4.isToastActive = T3, C4.displayedToast = l7.length;
  }), { getToastToRender: function(e2) {
    const n4 = /* @__PURE__ */ new Map(), o7 = Array.from(h3.values());
    return t8.newestOnTop && o7.reverse(), o7.forEach((t9) => {
      const { position: e3 } = t9.props;
      n4.has(e3) || n4.set(e3, []), n4.get(e3).push(t9);
    }), Array.from(n4, (t9) => e2(t9[0], t9[1]));
  }, containerRef: g4, isToastActive: T3 };
}
function b3(t8) {
  return t8.targetTouches && t8.targetTouches.length >= 1 ? t8.targetTouches[0].clientX : t8.clientX;
}
function I(t8) {
  return t8.targetTouches && t8.targetTouches.length >= 1 ? t8.targetTouches[0].clientY : t8.clientY;
}
function _2(t8) {
  const [o6, a3] = (0, import_react23.useState)(false), [r6, l7] = (0, import_react23.useState)(false), c5 = (0, import_react23.useRef)(null), u4 = (0, import_react23.useRef)({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, boundingRect: null, didMove: false }).current, d4 = (0, import_react23.useRef)(t8), { autoClose: m3, pauseOnHover: f4, closeToast: g4, onClick: h3, closeOnClick: y3 } = t8;
  function v3(e2) {
    if (t8.draggable) {
      "touchstart" === e2.nativeEvent.type && e2.nativeEvent.preventDefault(), u4.didMove = false, document.addEventListener("mousemove", _3), document.addEventListener("mouseup", L2), document.addEventListener("touchmove", _3), document.addEventListener("touchend", L2);
      const n4 = c5.current;
      u4.canCloseOnClick = true, u4.canDrag = true, u4.boundingRect = n4.getBoundingClientRect(), n4.style.transition = "", u4.x = b3(e2.nativeEvent), u4.y = I(e2.nativeEvent), "x" === t8.draggableDirection ? (u4.start = u4.x, u4.removalDistance = n4.offsetWidth * (t8.draggablePercent / 100)) : (u4.start = u4.y, u4.removalDistance = n4.offsetHeight * (80 === t8.draggablePercent ? 1.5 * t8.draggablePercent : t8.draggablePercent / 100));
    }
  }
  function T3(e2) {
    if (u4.boundingRect) {
      const { top: n4, bottom: o7, left: s6, right: a4 } = u4.boundingRect;
      "touchend" !== e2.nativeEvent.type && t8.pauseOnHover && u4.x >= s6 && u4.x <= a4 && u4.y >= n4 && u4.y <= o7 ? C4() : E4();
    }
  }
  function E4() {
    a3(true);
  }
  function C4() {
    a3(false);
  }
  function _3(e2) {
    const n4 = c5.current;
    u4.canDrag && n4 && (u4.didMove = true, o6 && C4(), u4.x = b3(e2), u4.y = I(e2), u4.delta = "x" === t8.draggableDirection ? u4.x - u4.start : u4.y - u4.start, u4.start !== u4.x && (u4.canCloseOnClick = false), n4.style.transform = `translate${t8.draggableDirection}(${u4.delta}px)`, n4.style.opacity = "" + (1 - Math.abs(u4.delta / u4.removalDistance)));
  }
  function L2() {
    document.removeEventListener("mousemove", _3), document.removeEventListener("mouseup", L2), document.removeEventListener("touchmove", _3), document.removeEventListener("touchend", L2);
    const e2 = c5.current;
    if (u4.canDrag && u4.didMove && e2) {
      if (u4.canDrag = false, Math.abs(u4.delta) > u4.removalDistance)
        return l7(true), void t8.closeToast();
      e2.style.transition = "transform 0.2s, opacity 0.2s", e2.style.transform = `translate${t8.draggableDirection}(0)`, e2.style.opacity = "1";
    }
  }
  (0, import_react23.useEffect)(() => {
    d4.current = t8;
  }), (0, import_react23.useEffect)(() => (c5.current && c5.current.addEventListener("d", E4, { once: true }), p3(t8.onOpen) && t8.onOpen((0, import_react23.isValidElement)(t8.children) && t8.children.props), () => {
    const t9 = d4.current;
    p3(t9.onClose) && t9.onClose((0, import_react23.isValidElement)(t9.children) && t9.children.props);
  }), []), (0, import_react23.useEffect)(() => (t8.pauseOnFocusLoss && (document.hasFocus() || C4(), window.addEventListener("focus", E4), window.addEventListener("blur", C4)), () => {
    t8.pauseOnFocusLoss && (window.removeEventListener("focus", E4), window.removeEventListener("blur", C4));
  }), [t8.pauseOnFocusLoss]);
  const O2 = { onMouseDown: v3, onTouchStart: v3, onMouseUp: T3, onTouchEnd: T3 };
  return m3 && f4 && (O2.onMouseEnter = C4, O2.onMouseLeave = E4), y3 && (O2.onClick = (t9) => {
    h3 && h3(t9), u4.canCloseOnClick && g4();
  }), { playToast: E4, pauseToast: C4, isRunning: o6, preventExitTransition: r6, toastRef: c5, eventHandlers: O2 };
}
function L(e2) {
  let { closeToast: n4, theme: o6, ariaLabel: s6 = "close" } = e2;
  return import_react23.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o6}`, type: "button", onClick: (t8) => {
    t8.stopPropagation(), n4(t8);
  }, "aria-label": s6 }, import_react23.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react23.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function O(e2) {
  let { delay: n4, isRunning: o6, closeToast: s6, type: a3 = "default", hide: r6, className: i4, style: l7, controlledProgress: u4, progress: d4, rtl: m3, isIn: f4, theme: g4 } = e2;
  const h3 = r6 || u4 && 0 === d4, y3 = { ...l7, animationDuration: `${n4}ms`, animationPlayState: o6 ? "running" : "paused", opacity: h3 ? 0 : 1 };
  u4 && (y3.transform = `scaleX(${d4})`);
  const v3 = clsx_m_default("Toastify__progress-bar", u4 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g4}`, `Toastify__progress-bar--${a3}`, { "Toastify__progress-bar--rtl": m3 }), T3 = p3(i4) ? i4({ rtl: m3, type: a3, defaultClassName: v3 }) : clsx_m_default(v3, i4);
  return import_react23.default.createElement("div", { role: "progressbar", "aria-hidden": h3 ? "true" : "false", "aria-label": "notification timer", className: T3, style: y3, [u4 && d4 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u4 && d4 < 1 ? null : () => {
    f4 && s6();
  } });
}
var N2 = (n4) => {
  const { isRunning: o6, preventExitTransition: s6, toastRef: r6, eventHandlers: i4 } = _2(n4), { closeButton: l7, children: u4, autoClose: d4, onClick: m3, type: f4, hideProgressBar: g4, closeToast: h3, transition: y3, position: v3, className: T3, style: E4, bodyClassName: C4, bodyStyle: b4, progressClassName: I2, progressStyle: N3, updateId: M4, role: R3, progress: w3, rtl: x3, toastId: $3, deleteToast: k2, isIn: P2, isLoading: B3, iconOut: D3, closeOnClick: A2, theme: z2 } = n4, F3 = clsx_m_default("Toastify__toast", `Toastify__toast-theme--${z2}`, `Toastify__toast--${f4}`, { "Toastify__toast--rtl": x3 }, { "Toastify__toast--close-on-click": A2 }), H2 = p3(T3) ? T3({ rtl: x3, position: v3, type: f4, defaultClassName: F3 }) : clsx_m_default(F3, T3), S4 = !!w3 || !d4, q2 = { closeToast: h3, type: f4, theme: z2 };
  let Q2 = null;
  return false === l7 || (Q2 = p3(l7) ? l7(q2) : (0, import_react23.isValidElement)(l7) ? (0, import_react23.cloneElement)(l7, q2) : L(q2)), import_react23.default.createElement(y3, { isIn: P2, done: k2, position: v3, preventExitTransition: s6, nodeRef: r6 }, import_react23.default.createElement("div", { id: $3, onClick: m3, className: H2, ...i4, style: E4, ref: r6 }, import_react23.default.createElement("div", { ...P2 && { role: R3 }, className: p3(C4) ? C4({ type: f4 }) : clsx_m_default("Toastify__toast-body", C4), style: b4 }, null != D3 && import_react23.default.createElement("div", { className: clsx_m_default("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !B3 }) }, D3), import_react23.default.createElement("div", null, u4)), Q2, import_react23.default.createElement(O, { ...M4 && !S4 ? { key: `pb-${M4}` } : {}, rtl: x3, theme: z2, delay: d4, isRunning: o6, isIn: P2, closeToast: h3, hide: g4, type: f4, style: N3, className: I2, controlledProgress: S4, progress: w3 || 0 })));
};
var M3 = function(t8, e2) {
  return void 0 === e2 && (e2 = false), { enter: `Toastify--animate Toastify__${t8}-enter`, exit: `Toastify--animate Toastify__${t8}-exit`, appendPosition: e2 };
};
var R2 = h2(M3("bounce", true));
var w2 = h2(M3("slide", true));
var x2 = h2(M3("zoom"));
var $2 = h2(M3("flip"));
var k = (0, import_react23.forwardRef)((e2, n4) => {
  const { getToastToRender: o6, containerRef: a3, isToastActive: r6 } = C3(e2), { className: i4, style: l7, rtl: u4, containerId: d4 } = e2;
  function f4(t8) {
    const e3 = clsx_m_default("Toastify__toast-container", `Toastify__toast-container--${t8}`, { "Toastify__toast-container--rtl": u4 });
    return p3(i4) ? i4({ position: t8, rtl: u4, defaultClassName: e3 }) : clsx_m_default(e3, m2(i4));
  }
  return (0, import_react23.useEffect)(() => {
    n4 && (n4.current = a3.current);
  }, []), import_react23.default.createElement("div", { ref: a3, className: "Toastify", id: d4 }, o6((e3, n5) => {
    const o7 = n5.length ? { ...l7 } : { ...l7, pointerEvents: "none" };
    return import_react23.default.createElement("div", { className: f4(e3), style: o7, key: `container-${e3}` }, n5.map((e4, o8) => {
      let { content: s6, props: a4 } = e4;
      return import_react23.default.createElement(N2, { ...a4, isIn: r6(a4.toastId), style: { ...a4.style, "--nth": o8 + 1, "--len": n5.length }, key: `toast-${a4.key}` }, s6);
    }));
  }));
});
k.displayName = "ToastContainer", k.defaultProps = { position: "top-right", transition: R2, autoClose: 5e3, closeButton: L, pauseOnHover: true, pauseOnFocusLoss: true, closeOnClick: true, draggable: true, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
var P;
var B2 = /* @__PURE__ */ new Map();
var D2 = [];
var A = 1;
function z() {
  return "" + A++;
}
function F2(t8) {
  return t8 && (d3(t8.toastId) || u3(t8.toastId)) ? t8.toastId : z();
}
function H(t8, e2) {
  return B2.size > 0 ? v2.emit(0, t8, e2) : D2.push({ content: t8, options: e2 }), e2.toastId;
}
function S3(t8, e2) {
  return { ...e2, type: e2 && e2.type || t8, toastId: F2(e2) };
}
function q(t8) {
  return (e2, n4) => H(e2, S3(t8, n4));
}
function Q(t8, e2) {
  return H(t8, S3("default", e2));
}
Q.loading = (t8, e2) => H(t8, S3("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...e2 })), Q.promise = function(t8, e2, n4) {
  let o6, { pending: s6, error: a3, success: r6 } = e2;
  s6 && (o6 = d3(s6) ? Q.loading(s6, n4) : Q.loading(s6.render, { ...n4, ...s6 }));
  const i4 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l7 = (t9, e3, s7) => {
    if (null == e3)
      return void Q.dismiss(o6);
    const a4 = { type: t9, ...i4, ...n4, data: s7 }, r7 = d3(e3) ? { render: e3 } : e3;
    return o6 ? Q.update(o6, { ...a4, ...r7 }) : Q(r7.render, { ...a4, ...r7 }), s7;
  }, c5 = p3(t8) ? t8() : t8;
  return c5.then((t9) => l7("success", r6, t9)).catch((t9) => l7("error", a3, t9)), c5;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t8, e2) => H(t8, S3("default", { theme: "dark", ...e2 })), Q.dismiss = (t8) => {
  B2.size > 0 ? v2.emit(1, t8) : D2 = D2.filter((e2) => null != t8 && e2.options.toastId !== t8);
}, Q.clearWaitingQueue = function(t8) {
  return void 0 === t8 && (t8 = {}), v2.emit(5, t8);
}, Q.isActive = (t8) => {
  let e2 = false;
  return B2.forEach((n4) => {
    n4.isToastActive && n4.isToastActive(t8) && (e2 = true);
  }), e2;
}, Q.update = function(t8, e2) {
  void 0 === e2 && (e2 = {}), setTimeout(() => {
    const n4 = function(t9, e3) {
      let { containerId: n5 } = e3;
      const o6 = B2.get(n5 || P);
      return o6 && o6.getToast(t9);
    }(t8, e2);
    if (n4) {
      const { props: o6, content: s6 } = n4, a3 = { delay: 100, ...o6, ...e2, toastId: e2.toastId || t8, updateId: z() };
      a3.toastId !== t8 && (a3.staleId = t8);
      const r6 = a3.render || s6;
      delete a3.render, H(r6, a3);
    }
  }, 0);
}, Q.done = (t8) => {
  Q.update(t8, { progress: 1 });
}, Q.onChange = (t8) => (v2.on(4, t8), () => {
  v2.off(4, t8);
}), Q.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Q.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, v2.on(2, (t8) => {
  P = t8.containerId || t8, B2.set(P, t8), D2.forEach((t9) => {
    v2.emit(0, t9.content, t9.options);
  }), D2 = [];
}).on(3, (t8) => {
  B2.delete(t8.containerId || t8), 0 === B2.size && v2.off(0).off(1).off(5);
});

// app/common/components/Toast/ToastProvider.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Toast\\\\ToastProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\ToastProvider.tsx"
  );
  import.meta.hot.lastModified = "1695556592434.264";
}
var DEFAULT_TIMEOUT = 5e3;
var DEFAULT_LIMIT = 3;
var DEFAULT_POSITION = Q.POSITION.TOP_RIGHT;
var DEFAULT_TRANSITION = w2;
var DEFAULT_AUTO_CLOSE_ON_CLICK = false;
function ToastProvider({
  closeOnClick = DEFAULT_AUTO_CLOSE_ON_CLICK,
  limit = DEFAULT_LIMIT,
  autoClose = DEFAULT_TIMEOUT,
  transition = DEFAULT_TRANSITION,
  position = DEFAULT_POSITION,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(k, { ...props, closeOnClick, limit, autoClose, transition, position }, void 0, false, {
    fileName: "app/common/components/Toast/ToastProvider.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c26 = ToastProvider;
var _c26;
$RefreshReg$(_c26, "ToastProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Toast/Toast.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Toast\\\\Toast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Toast\\Toast.tsx"
  );
  import.meta.hot.lastModified = "1695558709872.755";
}
function Toast({
  intent,
  className,
  children,
  icon,
  toastProps,
  closeToast,
  displayClose = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { ...props, className: twMerge(Toast_style_default({
    intent: intent != null ? intent : "success",
    className
  })), children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(If_default, { condition: !!icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "icon-container flex-shrink-0", children: icon }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-grow flex-col gap-2", children }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(If_default, { condition: !!displayClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ToastAction, { className: "flex-shrink-0 self-start", intent: intent != null ? intent : "success", onClick: closeToast, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(XMarkIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 53,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/common/components/Toast/Toast.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/Toast/Toast.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Toast/Toast.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c27 = Toast;
var Toast_default = _c28 = Object.assign(Toast, {
  Action: ToastAction,
  Heading: ToastHeading,
  Link: ToastLink,
  Provider: ToastProvider
});
var _c27;
var _c28;
$RefreshReg$(_c27, "Toast");
$RefreshReg$(_c28, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/ActionCard/ActionCard.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\ActionCard\\\\ActionCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\ActionCard\\ActionCard.tsx"
  );
  import.meta.hot.lastModified = "1695816259825.5105";
}
function ActionCard({
  to,
  action,
  icon: Icon,
  background = "bg-blue-500",
  description,
  heading: heading2,
  className,
  ...props
}) {
  _s4();
  const navigate = useNavigate();
  const onClick = async () => {
    if (action) {
      await action();
    }
    if (to) {
      navigate(to);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { intent: "unstyled", onClick, type: "button", className: "p-0", role: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("article", { ...props, className: twMerge("flow-root", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "focus-within:ring-indigo-500 hover:bg-gray-50 relative flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default, { condition: !!Icon, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: twMerge(cx("flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg", {
      [background]: !!background
    })), children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Icon, { className: twMerge(cx("h-6 w-6", {
      "text-white": !!background
    })) }, void 0, false, {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 56,
      columnNumber: 25
    }, this) : null }, void 0, false, {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 53,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-grow flex-col items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default, { condition: !!heading2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Heading, { as: "h3", intent: "h6", className: "text-left font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: heading2 }, void 0, false, {
          fileName: "app/common/components/ActionCard/ActionCard.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
          fileName: "app/common/components/ActionCard/ActionCard.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default, { condition: !!description, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1 text-left", children: description }, void 0, false, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/common/components/ActionCard/ActionCard.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/ActionCard/ActionCard.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/ActionCard/ActionCard.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/ActionCard/ActionCard.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/ActionCard/ActionCard.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s4(ActionCard, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c29 = ActionCard;
var _c29;
$RefreshReg$(_c29, "ActionCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/VNavigation/VNavigationItem.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\VNavigation\\\\VNavigationItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\VNavigation\\VNavigationItem.tsx"
  );
  import.meta.hot.lastModified = "1695579481222.3792";
}
function VNavigationItem({
  name,
  to,
  current,
  icon: Icon,
  count,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Link2, { ...props, to, className: twMerge(cx("text-sm group flex gap-x-3 rounded-md p-2 font-semibold leading-6", {
    "bg-gray-50 text-indigo-600": current
  }, {
    "text-gray-700 hover:text-indigo-600 hover:bg-gray-50": !current
  }), className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(If_default, { condition: !!Icon, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(If_default.Then, { children: Icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { className: twMerge(cx("h-6 w-6 shrink-0", {
        "text-indigo-600": current,
        "text-gray-400 group-hover:text-indigo-600": !current
      })), "aria-hidden": "true" }, void 0, false, {
        fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) : null }, void 0, false, {
        fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(If_default.Else, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: twMerge(cx("flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium", {
        "text-indigo-600 border-indigo-600": current
      }, {
        "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600": !current
      })), children: name.slice(0, 1).toUpperCase() }, void 0, false, {
        fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "flex-grow", children: name }, void 0, false, {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(If_default, { condition: !!count, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "text-xs text-gray-600 ring-gray-200 ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center font-medium leading-5 ring-1 ring-inset", "aria-hidden": "true", children: count }, void 0, false, {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/VNavigation/VNavigationItem.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c30 = VNavigationItem;
var _c30;
$RefreshReg$(_c30, "VNavigationItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/VNavigation/VSecondaryNavigation.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\VNavigation\\\\VSecondaryNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\VNavigation\\VSecondaryNavigation.tsx"
  );
  import.meta.hot.lastModified = "1695577902716.1743";
}
function VSecondaryNavigation({
  title,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { ...props, className: twMerge("flex flex-1 flex-col", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "text-xs text-gray-400 font-semibold leading-6", children: title }, void 0, false, {
      fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, false, {
      fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/VNavigation/VSecondaryNavigation.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c31 = VSecondaryNavigation;
var _c31;
$RefreshReg$(_c31, "VSecondaryNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/VNavigation/VNavigation.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\VNavigation\\\\VNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\VNavigation\\VNavigation.tsx"
  );
  import.meta.hot.lastModified = "1695579539962.2288";
}
function VNavigation({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { ...props, className: twMerge("flex flex-1 flex-col", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { role: "list", className: "col-gap-2 flex flex-col", children }, void 0, false, {
    fileName: "app/common/components/VNavigation/VNavigation.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/VNavigation/VNavigation.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c32 = VNavigation;
var VNavigation_default = _c210 = Object.assign(VNavigation, {
  Item: VNavigationItem,
  Secondary: VSecondaryNavigation
});
var _c32;
var _c210;
$RefreshReg$(_c32, "VNavigation");
$RefreshReg$(_c210, "%default%");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Loader/Loader.style.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Loader\\Loader.style.ts"
  );
  import.meta.hot.lastModified = "1697397188130.6116";
}
var variants = cva("", {
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
});
var Loader_style_default = variants;

// app/common/components/Loader/Loader.tsx
var import_jsx_dev_runtime26 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Loader\\\\Loader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Loader\\Loader.tsx"
  );
  import.meta.hot.lastModified = "1697397522118.9814";
}
function Loader({
  show,
  className,
  size,
  color,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default, { condition: show, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { ...props, className: twMerge(cx("absolute flex h-full w-full items-center justify-center", className)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { role: "status", className: twMerge("animate-spin", Loader_style_default({
    size: size != null ? size : "default",
    color: color != null ? color : "blue"
  })), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor", opacity: "0.3" }, void 0, false, {
        fileName: "app/common/components/Loader/Loader.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" }, void 0, false, {
        fileName: "app/common/components/Loader/Loader.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/Loader/Loader.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, false, {
      fileName: "app/common/components/Loader/Loader.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 35,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Loader/Loader.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c33 = Loader;
var _c33;
$RefreshReg$(_c33, "Loader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\index.ts"
  );
  import.meta.hot.lastModified = "1697397529236.6975";
}

// app/auth/hooks/useIsAuthenticated.ts
var import_react26 = __toESM(require_react());

// app/auth/store/UserContext/UserContext.ts
var import_react25 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\auth\\store\\UserContext\\UserContext.ts"
  );
  import.meta.hot.lastModified = "1695599790274.3423";
}
var UserContext = (0, import_react25.createContext)({
  isAuthenticated: false
});
var UserContext_default = UserContext;

// app/auth/hooks/useIsAuthenticated.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\auth\\hooks\\useIsAuthenticated.ts"
  );
  import.meta.hot.lastModified = "1695583919852.576";
}
function useIsAuthenticated() {
  const { isAuthenticated } = (0, import_react26.useContext)(UserContext_default);
  return isAuthenticated;
}

// app/auth/components/AuthNavMenu/AuthNavMenu.tsx
var import_jsx_dev_runtime27 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\auth\\\\components\\\\AuthNavMenu\\\\AuthNavMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\auth\\components\\AuthNavMenu\\AuthNavMenu.tsx"
  );
  import.meta.hot.lastModified = "1695599666853.3647";
}
function AuthNavMenu() {
  _s5();
  const isAuthenticated = useIsAuthenticated();
  const routes = isAuthenticated ? {
    PROFILE: USER_ROUTES.PROFILE,
    LOG_OUT: USER_ROUTES.LOG_OUT
  } : {
    LOGIN: USER_ROUTES.LOGIN,
    SIGN_UP: USER_ROUTES.SIGN_UP
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(VNavigation_default.Secondary, { title: "Profile", children: Object.entries(routes).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(VNavigation_default.Item, { to: value, name: USER_ROUTES_NAMES[key] }, key, false, {
    fileName: "app/auth/components/AuthNavMenu/AuthNavMenu.tsx",
    lineNumber: 36,
    columnNumber: 53
  }, this)) }, void 0, false, {
    fileName: "app/auth/components/AuthNavMenu/AuthNavMenu.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s5(AuthNavMenu, "Kid1KK9s42lG8S9oCmMHzg7A/aM=", false, function() {
  return [useIsAuthenticated];
});
_c34 = AuthNavMenu;
var _c34;
$RefreshReg$(_c34, "AuthNavMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/Menu/Menu.tsx
var import_jsx_dev_runtime28 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\Menu\\\\Menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\Menu\\Menu.tsx"
  );
  import.meta.hot.lastModified = "1697295984161.5007";
}
function Menu() {
  _s6();
  const location = useLocation();
  const canRender = ![USER_ROUTES.LOGIN, USER_ROUTES.SIGN_UP, USER_ROUTES.LOG_OUT].some((route) => location.pathname === route);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default, { condition: canRender, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(If_default.Then, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { intent: "unstyled", className: "fixed left-4 top-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MdMenu, { size: "2rem" }, void 0, false, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Drawer_default, { modalId: MODALS.MENU, position: "left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Drawer_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Drawer_default.Control, { modalId: MODALS.MENU, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { intent: "unstyled", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MdClose, { size: "1rem" }, void 0, false, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Drawer_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(VNavigation_default, { children: Object.entries(ROUTES).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(VNavigation_default.Item, { to: value, name: ROUTES_NAMES[key] }, key, false, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 51,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(AuthNavMenu, {}, void 0, false, {
          fileName: "app/common/components/Menu/Menu.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/common/components/Menu/Menu.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/common/components/Menu/Menu.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/common/components/Menu/Menu.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s6(Menu, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c35 = Menu;
var _c35;
$RefreshReg$(_c35, "Menu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AppContext_default,
  AppContextProvider,
  twMerge,
  Link2 as Link,
  cx,
  Button,
  s,
  l,
  s2,
  o2 as o,
  p,
  o4 as o2,
  l2,
  u,
  y,
  S,
  X,
  D,
  d2 as d,
  C,
  c3 as c,
  tt,
  Heading,
  UserContext_default,
  Menu,
  If_default,
  Input_default,
  ArrowLeftIcon_default,
  ArrowRightIcon_default,
  LinkIcon_default,
  PencilIcon_default,
  Toast_default,
  ActionCard,
  Loader
};
//# sourceMappingURL=/build/_shared/chunk-L7QAWGJM.js.map
