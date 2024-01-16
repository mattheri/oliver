import {
  Button,
  C,
  D,
  HeartIcon_default,
  If_default,
  Image,
  LinkIcon_default,
  Q,
  S,
  X,
  c,
  cx,
  d,
  l,
  l2,
  o,
  o2,
  p,
  s,
  s2,
  tt,
  twMerge,
  u,
  y
} from "/build/_shared/chunk-M3EURUYW.js";
import {
  useFetcher,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-OVNFYIRE.js";
import "/build/_shared/chunk-DMOCQSAF.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react = __toESM(require_react(), 1);
var o3;
var I = (o3 = import_react.default.useId) != null ? o3 : function() {
  let n2 = l2(), [e2, u3] = import_react.default.useState(n2 ? () => s.nextId() : null);
  return l(() => {
    e2 === null && u3(s.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r2) {
  return s.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M || {});
var N = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N || {});
var F = ((t4) => (t4[t4.Previous = -1] = "Previous", t4[t4.Next = 1] = "Next", t4))(F || {});
function f(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c2)).sort((r2, t4) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t4) => (t4[t4.Strict = 0] = "Strict", t4[t4.Loose = 1] = "Loose", t4))(T || {});
function h(e2, r2 = 0) {
  var t4;
  return e2 === ((t4 = e(e2)) == null ? void 0 : t4.body) ? false : u(r2, { [0]() {
    return e2.matches(c2);
  }, [1]() {
    let l4 = e2;
    for (; l4 !== null; ) {
      if (l4.matches(c2))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function D2(e2) {
  let r2 = e(e2);
  o().nextFrame(() => {
    r2 && !h(r2.activeElement, 0) && y2(e2);
  });
}
var w = ((t4) => (t4[t4.Keyboard = 0] = "Keyboard", t4[t4.Mouse = 1] = "Mouse", t4))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
var S2 = ["textarea", "input"].join(",");
function H(e2) {
  var r2, t4;
  return (t4 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, S2)) != null ? t4 : false;
}
function I2(e2, r2 = (t4) => t4) {
  return e2.slice().sort((t4, l4) => {
    let o8 = r2(t4), i3 = r2(l4);
    if (o8 === null || i3 === null)
      return 0;
    let n2 = o8.compareDocumentPosition(i3);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e2, r2) {
  return O(f(), r2, { relativeTo: e2 });
}
function O(e2, r2, { sorted: t4 = true, relativeTo: l4 = null, skipElements: o8 = [] } = {}) {
  let i3 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n2 = Array.isArray(e2) ? t4 ? I2(e2) : e2 : f(e2);
  o8.length > 0 && n2.length > 1 && (n2 = n2.filter((s5) => !o8.includes(s5))), l4 = l4 != null ? l4 : i3.activeElement;
  let E2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l4)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l4)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d5 = 0, a3 = n2.length, u3;
  do {
    if (d5 >= a3 || d5 + a3 <= 0)
      return 0;
    let s5 = x3 + d5;
    if (r2 & 16)
      s5 = (s5 + a3) % a3;
    else {
      if (s5 < 0)
        return 3;
      if (s5 >= a3)
        return 1;
    }
    u3 = n2[s5], u3 == null || u3.focus(p2), d5 += E2;
  } while (u3 !== i3.activeElement);
  return r2 & 6 && H(u3) && u3.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react2 = __toESM(require_react(), 1);
function d2(e2, r2, n2) {
  let o8 = s2(r2);
  (0, import_react2.useEffect)(() => {
    function t4(u3) {
      o8.current(u3);
    }
    return document.addEventListener(e2, t4, n2), () => document.removeEventListener(e2, t4, n2);
  }, [e2, n2]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react3 = __toESM(require_react(), 1);
function s3(e2, r2, n2) {
  let o8 = s2(r2);
  (0, import_react3.useEffect)(() => {
    function t4(i3) {
      o8.current(i3);
    }
    return window.addEventListener(e2, t4, n2), () => window.removeEventListener(e2, t4, n2);
  }, [e2, n2]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s5, m3, a3 = true) {
  let i3 = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    requestAnimationFrame(() => {
      i3.current = a3;
    });
  }, [a3]);
  function c3(e2, r2) {
    if (!i3.current || e2.defaultPrevented)
      return;
    let t4 = r2(e2);
    if (t4 === null || !t4.getRootNode().contains(t4) || !t4.isConnected)
      return;
    let E2 = function u3(n2) {
      return typeof n2 == "function" ? u3(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(s5);
    for (let u3 of E2) {
      if (u3 === null)
        continue;
      let n2 = u3 instanceof HTMLElement ? u3 : u3.current;
      if (n2 != null && n2.contains(t4) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !h(t4, T.Loose) && t4.tabIndex !== -1 && e2.preventDefault(), m3(e2, t4);
  }
  let o8 = (0, import_react4.useRef)(null);
  d2("pointerdown", (e2) => {
    var r2, t4;
    i3.current && (o8.current = ((t4 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t4[0]) || e2.target);
  }, true), d2("mousedown", (e2) => {
    var r2, t4;
    i3.current && (o8.current = ((t4 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t4[0]) || e2.target);
  }, true), d2("click", (e2) => {
    o8.current && (c3(e2, () => o8.current), o8.current = null);
  }, true), d2("touchend", (e2) => c3(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), s3("blur", (e2) => c3(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react5 = __toESM(require_react(), 1);
function i(t4) {
  var n2;
  if (t4.type)
    return t4.type;
  let e2 = (n2 = t4.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s4(t4, e2) {
  let [n2, u3] = (0, import_react5.useState)(() => i(t4));
  return l(() => {
    u3(i(t4));
  }, [t4.type, t4.as]), l(() => {
    n2 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u3("button");
  }, [n2, e2]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react6 = __toESM(require_react(), 1);
function F2({ container: e2, accept: t4, walk: r2, enabled: c3 = true }) {
  let o8 = (0, import_react6.useRef)(t4), l4 = (0, import_react6.useRef)(r2);
  (0, import_react6.useEffect)(() => {
    o8.current = t4, l4.current = r2;
  }, [t4, r2]), l(() => {
    if (!e2 || !c3)
      return;
    let n2 = e(e2);
    if (!n2)
      return;
    let f4 = o8.current, p2 = l4.current, d5 = Object.assign((i3) => f4(i3), { acceptNode: f4 }), u3 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d5, false);
    for (; u3.nextNode(); )
      p2(u3.currentNode);
  }, [e2, c3, o8, l4]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a || {});
function x(r2, n2) {
  let t4 = n2.resolveItems();
  if (t4.length <= 0)
    return null;
  let l4 = n2.resolveActiveIndex(), s5 = l4 != null ? l4 : -1, d5 = (() => {
    switch (r2.focus) {
      case 0:
        return t4.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t4.slice().reverse().findIndex((i3, c3, u3) => s5 !== -1 && u3.length - c3 - 1 >= s5 ? false : !n2.resolveDisabled(i3));
        return e2 === -1 ? e2 : t4.length - 1 - e2;
      }
      case 2:
        return t4.findIndex((e2, i3) => i3 <= s5 ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t4.slice().reverse().findIndex((i3) => !n2.resolveDisabled(i3));
        return e2 === -1 ? e2 : t4.length - 1 - e2;
      }
      case 4:
        return t4.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f3(r2);
    }
  })();
  return d5 === -1 ? l4 : d5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r(n2) {
  let e2 = n2.parentElement, l4 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l4 = e2), e2 = e2.parentElement;
  let t4 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t4 && i2(l4) ? false : t4;
}
function i2(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o5 || {});

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react7 = __toESM(require_react(), 1);
function t2(e2) {
  return [e2.screenX, e2.screenY];
}
function u2() {
  let e2 = (0, import_react7.useRef)([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t2(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t2(r2);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react8 = __toESM(require_react(), 1);
function n(...e2) {
  return (0, import_react8.useMemo)(() => e(...e2), [...e2]);
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a2 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o7(e2) {
  var r2, i3;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t4 = e2.cloneNode(true);
  if (!(t4 instanceof HTMLElement))
    return n2;
  let u3 = false;
  for (let f4 of t4.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f4.remove(), u3 = true;
  let l4 = u3 ? (i3 = t4.innerText) != null ? i3 : "" : n2;
  return a2.test(l4) && (l4 = l4.replace(a2, "")), l4;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t4 = e2.getAttribute("aria-labelledby");
  if (t4) {
    let u3 = t4.split(" ").map((l4) => {
      let r2 = document.getElementById(l4);
      if (r2) {
        let i3 = r2.getAttribute("aria-label");
        return typeof i3 == "string" ? i3.trim() : o7(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u3.length > 0)
      return u3.join(", ");
  }
  return o7(e2).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b(c3) {
  let t4 = (0, import_react9.useRef)(""), r2 = (0, import_react9.useRef)("");
  return o2(() => {
    let e2 = c3.current;
    if (!e2)
      return "";
    let u3 = e2.innerText;
    if (t4.current === u3)
      return r2.current;
    let n2 = g(e2).trim().toLowerCase();
    return t4.current = u3, r2.current = n2, n2;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react10 = __toESM(require_react(), 1);
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a3) => (a3[a3.OpenMenu = 0] = "OpenMenu", a3[a3.CloseMenu = 1] = "CloseMenu", a3[a3.GoToItem = 2] = "GoToItem", a3[a3.Search = 3] = "Search", a3[a3.ClearSearch = 4] = "ClearSearch", a3[a3.RegisterItem = 5] = "RegisterItem", a3[a3.UnregisterItem = 6] = "UnregisterItem", a3))(fe || {});
function w2(e2, u3 = (r2) => r2) {
  let r2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, i3 = I2(u3(e2.items.slice()), (t4) => t4.dataRef.current.domRef.current), s5 = r2 ? i3.indexOf(r2) : null;
  return s5 === -1 && (s5 = null), { items: i3, activeItemIndex: s5 };
}
var Te = { [1](e2) {
  return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, menuState: 1 };
}, [0](e2) {
  return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, menuState: 0 };
}, [2]: (e2, u3) => {
  var s5;
  let r2 = w2(e2), i3 = x(u3, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t4) => t4.id, resolveDisabled: (t4) => t4.dataRef.current.disabled });
  return { ...e2, ...r2, searchQuery: "", activeItemIndex: i3, activationTrigger: (s5 = u3.trigger) != null ? s5 : 1 };
}, [3]: (e2, u3) => {
  let i3 = e2.searchQuery !== "" ? 0 : 1, s5 = e2.searchQuery + u3.value.toLowerCase(), o8 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + i3).concat(e2.items.slice(0, e2.activeItemIndex + i3)) : e2.items).find((l4) => {
    var m3;
    return ((m3 = l4.dataRef.current.textValue) == null ? void 0 : m3.startsWith(s5)) && !l4.dataRef.current.disabled;
  }), a3 = o8 ? e2.items.indexOf(o8) : -1;
  return a3 === -1 || a3 === e2.activeItemIndex ? { ...e2, searchQuery: s5 } : { ...e2, searchQuery: s5, activeItemIndex: a3, activationTrigger: 1 };
}, [4](e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e2, u3) => {
  let r2 = w2(e2, (i3) => [...i3, { id: u3.id, dataRef: u3.dataRef }]);
  return { ...e2, ...r2 };
}, [6]: (e2, u3) => {
  let r2 = w2(e2, (i3) => {
    let s5 = i3.findIndex((t4) => t4.id === u3.id);
    return s5 !== -1 && i3.splice(s5, 1), i3;
  });
  return { ...e2, ...r2, activationTrigger: 1 };
} };
var U = (0, import_react10.createContext)(null);
U.displayName = "MenuContext";
function O2(e2) {
  let u3 = (0, import_react10.useContext)(U);
  if (u3 === null) {
    let r2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, O2), r2;
  }
  return u3;
}
function ye(e2, u3) {
  return u(u3.type, Te, e2, u3);
}
var Ie = import_react10.Fragment;
function Me(e2, u3) {
  let { __demoMode: r2 = false, ...i3 } = e2, s5 = (0, import_react10.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react10.createRef)(), itemsRef: (0, import_react10.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t4, itemsRef: o8, buttonRef: a3 }, l4] = s5, m3 = y(u3);
  h2([a3, o8], (g2, R) => {
    var p2;
    l4({ type: 1 }), h(R, T.Loose) || (g2.preventDefault(), (p2 = a3.current) == null || p2.focus());
  }, t4 === 0);
  let I3 = o2(() => {
    l4({ type: 1 });
  }), A = (0, import_react10.useMemo)(() => ({ open: t4 === 0, close: I3 }), [t4, I3]), f4 = { ref: m3 };
  return import_react10.default.createElement(U.Provider, { value: s5 }, import_react10.default.createElement(c, { value: u(t4, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: f4, theirProps: i3, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e2, u3) {
  var R;
  let r2 = I(), { id: i3 = `headlessui-menu-button-${r2}`, ...s5 } = e2, [t4, o8] = O2("Menu.Button"), a3 = y(t4.buttonRef, u3), l4 = p(), m3 = o2((p2) => {
    switch (p2.key) {
      case o5.Space:
      case o5.Enter:
      case o5.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o8({ type: 0 }), l4.nextFrame(() => o8({ type: 2, focus: a.First }));
        break;
      case o5.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o8({ type: 0 }), l4.nextFrame(() => o8({ type: 2, focus: a.Last }));
        break;
    }
  }), I3 = o2((p2) => {
    switch (p2.key) {
      case o5.Space:
        p2.preventDefault();
        break;
    }
  }), A = o2((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e2.disabled || (t4.menuState === 0 ? (o8({ type: 1 }), l4.nextFrame(() => {
      var M2;
      return (M2 = t4.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o8({ type: 0 })));
  }), f4 = (0, import_react10.useMemo)(() => ({ open: t4.menuState === 0 }), [t4]), g2 = { ref: a3, id: i3, type: s4(e2, t4.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t4.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": t4.menuState === 0, onKeyDown: m3, onKeyUp: I3, onClick: A };
  return X({ ourProps: g2, theirProps: s5, slot: f4, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = S.RenderStrategy | S.Static;
function Ee(e2, u3) {
  var M2, b2;
  let r2 = I(), { id: i3 = `headlessui-menu-items-${r2}`, ...s5 } = e2, [t4, o8] = O2("Menu.Items"), a3 = y(t4.itemsRef, u3), l4 = n(t4.itemsRef), m3 = p(), I3 = C(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t4.menuState === 0)();
  (0, import_react10.useEffect)(() => {
    let n2 = t4.itemsRef.current;
    n2 && t4.menuState === 0 && n2 !== (l4 == null ? void 0 : l4.activeElement) && n2.focus({ preventScroll: true });
  }, [t4.menuState, t4.itemsRef, l4]), F2({ container: t4.itemsRef.current, enabled: t4.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f4 = o2((n2) => {
    var E2, P;
    switch (m3.dispose(), n2.key) {
      case o5.Space:
        if (t4.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o8({ type: 3, value: n2.key });
      case o5.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), t4.activeItemIndex !== null) {
          let { dataRef: S3 } = t4.items[t4.activeItemIndex];
          (P = (E2 = S3.current) == null ? void 0 : E2.domRef.current) == null || P.click();
        }
        D2(t4.buttonRef.current);
        break;
      case o5.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: a.Next });
      case o5.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: a.Previous });
      case o5.Home:
      case o5.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: a.First });
      case o5.End:
      case o5.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: a.Last });
      case o5.Escape:
        n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), o().nextFrame(() => {
          var S3;
          return (S3 = t4.buttonRef.current) == null ? void 0 : S3.focus({ preventScroll: true });
        });
        break;
      case o5.Tab:
        n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), o().nextFrame(() => {
          _(t4.buttonRef.current, n2.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o8({ type: 3, value: n2.key }), m3.setTimeout(() => o8({ type: 4 }), 350));
        break;
    }
  }), g2 = o2((n2) => {
    switch (n2.key) {
      case o5.Space:
        n2.preventDefault();
        break;
    }
  }), R = (0, import_react10.useMemo)(() => ({ open: t4.menuState === 0 }), [t4]), p2 = { "aria-activedescendant": t4.activeItemIndex === null || (M2 = t4.items[t4.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b2 = t4.buttonRef.current) == null ? void 0 : b2.id, id: i3, onKeyDown: f4, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a3 };
  return X({ ourProps: p2, theirProps: s5, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react10.Fragment;
function Pe(e2, u3) {
  let r2 = I(), { id: i3 = `headlessui-menu-item-${r2}`, disabled: s5 = false, ...t4 } = e2, [o8, a3] = O2("Menu.Item"), l4 = o8.activeItemIndex !== null ? o8.items[o8.activeItemIndex].id === i3 : false, m3 = (0, import_react10.useRef)(null), I3 = y(u3, m3);
  l(() => {
    if (o8.__demoMode || o8.menuState !== 0 || !l4 || o8.activationTrigger === 0)
      return;
    let T2 = o();
    return T2.requestAnimationFrame(() => {
      var v, B;
      (B = (v = m3.current) == null ? void 0 : v.scrollIntoView) == null || B.call(v, { block: "nearest" });
    }), T2.dispose;
  }, [o8.__demoMode, m3, l4, o8.menuState, o8.activationTrigger, o8.activeItemIndex]);
  let A = b(m3), f4 = (0, import_react10.useRef)({ disabled: s5, domRef: m3, get textValue() {
    return A();
  } });
  l(() => {
    f4.current.disabled = s5;
  }, [f4, s5]), l(() => (a3({ type: 5, id: i3, dataRef: f4 }), () => a3({ type: 6, id: i3 })), [f4, i3]);
  let g2 = o2(() => {
    a3({ type: 1 });
  }), R = o2((T2) => {
    if (s5)
      return T2.preventDefault();
    a3({ type: 1 }), D2(o8.buttonRef.current);
  }), p2 = o2(() => {
    if (s5)
      return a3({ type: 2, focus: a.Nothing });
    a3({ type: 2, focus: a.Specific, id: i3 });
  }), M2 = u2(), b2 = o2((T2) => M2.update(T2)), n2 = o2((T2) => {
    M2.wasMoved(T2) && (s5 || l4 || a3({ type: 2, focus: a.Specific, id: i3, trigger: 0 }));
  }), E2 = o2((T2) => {
    M2.wasMoved(T2) && (s5 || l4 && a3({ type: 2, focus: a.Nothing }));
  }), P = (0, import_react10.useMemo)(() => ({ active: l4, disabled: s5, close: g2 }), [l4, s5, g2]);
  return X({ ourProps: { id: i3, ref: I3, role: "menuitem", tabIndex: s5 === true ? void 0 : -1, "aria-disabled": s5 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p2, onPointerEnter: b2, onMouseEnter: b2, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t4, slot: P, defaultTag: Se, name: "Menu.Item" });
}
var ve = D(Me);
var xe = D(Re);
var he = D(Ee);
var De = D(Pe);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De });

// app/common/hooks/useToast.ts
var import_react11 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\hooks\\useToast.ts"
  );
  import.meta.hot.lastModified = "1704756518969.1245";
}
function useToast() {
  let ref = (0, import_react11.useRef)(null);
  return {
    id: ref.current,
    toast: (...args) => {
      ref = { current: Q(...args) };
    },
    promise: Q.promise
  };
}

// app/common/hooks/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\hooks\\index.ts"
  );
  import.meta.hot.lastModified = "1704756518968.1147";
}

// app/recipes/components/Recipe/RecipeHeader.tsx
var import_react12 = __toESM(require_react());

// node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
var React = __toESM(require_react(), 1);
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(ChevronDownIcon);
var ChevronDownIcon_default = ForwardRef;

// node_modules/@heroicons/react/20/solid/esm/LinkIcon.js
var React2 = __toESM(require_react(), 1);
function LinkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
  }));
}
var ForwardRef2 = React2.forwardRef(LinkIcon);
var LinkIcon_default2 = ForwardRef2;

// node_modules/@heroicons/react/20/solid/esm/PencilIcon.js
var React3 = __toESM(require_react(), 1);
function PencilIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    d: "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
  }));
}
var ForwardRef3 = React3.forwardRef(PencilIcon);
var PencilIcon_default = ForwardRef3;

// app/recipes/components/Recipe/RecipeHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\components\\\\Recipe\\\\RecipeHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\components\\Recipe\\RecipeHeader.tsx"
  );
  import.meta.hot.lastModified = "1704756518981.134";
}
function RecipeHeader({
  url,
  canEdit,
  isFavorite
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex items-center justify-between py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, { condition: !!canEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      "Edit"
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, { condition: !!url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { intent: "secondary", to: url, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkIcon_default2, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this),
      "Source"
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "relative sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400", children: [
        "More",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "-mr-1 ml-1.5 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt, { as: import_react12.Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: cx(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "Edit" }, void 0, false, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: cx(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "View" }, void 0, false, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/recipes/components/Recipe/RecipeHeader.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = RecipeHeader;
var _c;
$RefreshReg$(_c, "RecipeHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/recipes/components/Recipe/RecipeHeaderSection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\components\\\\Recipe\\\\RecipeHeaderSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\components\\Recipe\\RecipeHeaderSection.tsx"
  );
  import.meta.hot.lastModified = "1704756518981.134";
}
function RecipeHeaderSection({
  image,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "grid grid-cols-1 grid-rows-1 max-h-96", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(If_default, { condition: !!(image == null ? void 0 : image.src), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { ...image, alt: title, className: "w-full bg-cover bg-top block max-w-full h-auto" }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 30,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-start-1 col-end-2 row-start-1 row-end-2 grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: cx("text-3xl font-bold text-center", {
      "bg-black text-white p-2": !!(image == null ? void 0 : image.src)
    }), children: title }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/recipes/components/Recipe/RecipeHeaderSection.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = RecipeHeaderSection;
var _c2;
$RefreshReg$(_c2, "RecipeHeaderSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/recipes/components/Recipe/RecipeMetadata.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\components\\\\Recipe\\\\RecipeMetadata.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\components\\Recipe\\RecipeMetadata.tsx"
  );
  import.meta.hot.lastModified = "1704756518981.134";
}
function RecipeMetadata({
  prepTime,
  cookTime,
  servings,
  externalUrl,
  mainIngredient
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "flex flex-wrap items-center gap-y-2 gap-x-4 py-2 text-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!prepTime, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm", children: [
      "Preparation: ",
      prepTime
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 33,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!cookTime, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm", children: [
      "Cooking: ",
      cookTime
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 40,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 38,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!servings, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm", children: [
      "Serves: ",
      servings
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 47,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!mainIngredient, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm", children: [
      "Main Ingredient: ",
      mainIngredient
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 54,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!externalUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { intent: "secondary", to: externalUrl, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LinkIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this),
      "Source"
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 61,
      columnNumber: 4
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
      lineNumber: 59,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/recipes/components/Recipe/RecipeMetadata.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = RecipeMetadata;
var _c3;
$RefreshReg$(_c3, "RecipeMetadata");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/components/WishlistButton/WishlistButton.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\common\\\\components\\\\WishlistButton\\\\WishlistButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\common\\components\\WishlistButton\\WishlistButton.tsx"
  );
  import.meta.hot.lastModified = "1705370259561.3972";
}
function WishlistButton({
  isWishlist,
  children,
  compact = true,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { ...props, type: "button", intent: "secondary", onClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeartIcon_default, { className: twMerge(cx("h-5 w-5", {
      "fill-red-600 text-red-600": isWishlist
    })) }, void 0, false, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(If_default, { condition: !compact, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-2", children: isWishlist ? "Remove from Wishlist" : "Add to Wishlist" }, void 0, false, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/components/WishlistButton/WishlistButton.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c4 = WishlistButton;
var _c4;
$RefreshReg$(_c4, "WishlistButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/recipes/components/RecipeWishlistButton/RecipeWishlistButton.tsx
var import_react15 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\components\\\\RecipeWishlistButton\\\\RecipeWishlistButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\components\\RecipeWishlistButton\\RecipeWishlistButton.tsx"
  );
  import.meta.hot.lastModified = "1705324721610.6763";
}
function RecipeWishlistButton({
  recipe,
  createRecipe = false
}) {
  _s();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const {
    toast
  } = useToast();
  const onClick = async () => {
    fetcher.submit({
      recipe: JSON.stringify({
        ...recipe,
        isWishList: true
      })
    }, {
      method: "POST",
      action: "/api/recipes/add-external-wishlist"
    });
  };
  (0, import_react15.useEffect)(() => {
    if (fetcher.data) {
      const data = fetcher.data;
      if ("id" in data) {
        navigate(`/recipes/${data.id}`);
      } else {
        toast(data.code, {
          autoClose: 5e3,
          type: "error"
        });
      }
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(WishlistButton, { isWishlist: recipe.isWishList, onClick }, void 0, false, {
    fileName: "app/recipes/components/RecipeWishlistButton/RecipeWishlistButton.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(RecipeWishlistButton, "0LbsCBuZvn5r4ni8OxHdfzBU3Jw=", false, function() {
  return [useNavigate, useFetcher, useToast];
});
_c5 = RecipeWishlistButton;
var _c5;
$RefreshReg$(_c5, "RecipeWishlistButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/recipes/components/Recipe/Recipe.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\components\\\\Recipe\\\\Recipe.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\components\\Recipe\\Recipe.tsx"
  );
  import.meta.hot.lastModified = "1705152695481.303";
}
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeWishlistButton, { recipe: {
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
    }, createRecipe: true }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeHeader, { url: url != null ? url : " ", canEdit: true }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeHeaderSection, { image, title }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RecipeMetadata, { cookTime, prepTime, servings, mainIngredient, externalUrl: url }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default, { condition: !!ingredients, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full lg:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold", children: "Ingredients" }, void 0, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "list-inside list-disc", children: ingredients == null ? void 0 : ingredients.map((ingredient) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: ingredient }, ingredient, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 71,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default, { condition: !!instructions, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(If_default.Then, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-xl font-bold", children: "Instructions" }, void 0, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "list-inside list-decimal", children: instructions == null ? void 0 : instructions.map((instruction) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: instruction }, instruction, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 80,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/recipes/components/Recipe/Recipe.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/recipes/components/Recipe/Recipe.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/recipes/components/Recipe/Recipe.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c6 = Recipe;
var _c6;
$RefreshReg$(_c6, "Recipe");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/recipes/routes/($locale).recipes.$id.route.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\recipes\\\\routes\\\\($locale).recipes.$id.route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\recipes\\routes\\($locale).recipes.$id.route.tsx"
  );
  import.meta.hot.lastModified = "1704756518987.6584";
}
function Index() {
  _s2();
  const {
    recipe
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "flex flex-col py-12 section-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Recipe, { ...recipe }, void 0, false, {
    fileName: "app/recipes/routes/($locale).recipes.$id.route.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/recipes/routes/($locale).recipes.$id.route.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s2(Index, "eC+M3WYIHKrYMA1G94x3bX1nmuY=", false, function() {
  return [useLoaderData];
});
_c7 = Index;
var _c7;
$RefreshReg$(_c7, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/($locale).recipes.$id-OPLTS2HC.js.map
