import {
  Button_default,
  C,
  HeartIcon_default,
  If_default,
  Image,
  LinkIcon_default,
  O,
  U,
  cx,
  d,
  l,
  l2,
  o,
  o2,
  p,
  qe,
  s,
  s2,
  s3,
  twMerge,
  u,
  u2,
  useToast,
  y
} from "/build/_shared/chunk-LJDFXF47.js";
import {
  useFetcher,
  useLoaderData,
  useNavigate
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react = __toESM(require_react(), 1);
var o3;
var I = (o3 = import_react.default.useId) != null ? o3 : function() {
  let n3 = l2(), [e, u5] = import_react.default.useState(n3 ? () => s.nextId() : null);
  return l(() => {
    e === null && u5(s.nextId());
  }, [e]), e != null ? "" + e : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/owner.js
function o4(r2) {
  return s.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var M = ((n3) => (n3[n3.First = 1] = "First", n3[n3.Previous = 2] = "Previous", n3[n3.Next = 4] = "Next", n3[n3.Last = 8] = "Last", n3[n3.WrapAround = 16] = "WrapAround", n3[n3.NoScroll = 32] = "NoScroll", n3))(M || {});
var N = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(N || {});
var F = ((t5) => (t5[t5.Previous = -1] = "Previous", t5[t5.Next = 1] = "Next", t5))(F || {});
function f(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r2, t5) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t5.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t5) => (t5[t5.Strict = 0] = "Strict", t5[t5.Loose = 1] = "Loose", t5))(T || {});
function h(e, r2 = 0) {
  var t5;
  return e === ((t5 = o4(e)) == null ? void 0 : t5.body) ? false : u(r2, { [0]() {
    return e.matches(c);
  }, [1]() {
    let l4 = e;
    for (; l4 !== null; ) {
      if (l4.matches(c))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function D(e) {
  let r2 = o4(e);
  o2().nextFrame(() => {
    r2 && !h(r2.activeElement, 0) && y2(e);
  });
}
var w = ((t5) => (t5[t5.Keyboard = 0] = "Keyboard", t5[t5.Mouse = 1] = "Mouse", t5))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e) {
  e == null || e.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e) {
  var r2, t5;
  return (t5 = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, S)) != null ? t5 : false;
}
function I2(e, r2 = (t5) => t5) {
  return e.slice().sort((t5, l4) => {
    let o9 = r2(t5), i4 = r2(l4);
    if (o9 === null || i4 === null)
      return 0;
    let n3 = o9.compareDocumentPosition(i4);
    return n3 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n3 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e, r2) {
  return O2(f(), r2, { relativeTo: e });
}
function O2(e, r2, { sorted: t5 = true, relativeTo: l4 = null, skipElements: o9 = [] } = {}) {
  let i4 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, n3 = Array.isArray(e) ? t5 ? I2(e) : e : f(e);
  o9.length > 0 && n3.length > 1 && (n3 = n3.filter((s6) => !o9.includes(s6))), l4 = l4 != null ? l4 : i4.activeElement;
  let E2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n3.indexOf(l4)) - 1;
    if (r2 & 4)
      return Math.max(0, n3.indexOf(l4)) + 1;
    if (r2 & 8)
      return n3.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d5 = 0, a2 = n3.length, u5;
  do {
    if (d5 >= a2 || d5 + a2 <= 0)
      return 0;
    let s6 = x + d5;
    if (r2 & 16)
      s6 = (s6 + a2) % a2;
    else {
      if (s6 < 0)
        return 3;
      if (s6 >= a2)
        return 1;
    }
    u5 = n3[s6], u5 == null || u5.focus(p2), d5 += E2;
  } while (u5 !== i4.activeElement);
  return r2 & 6 && H(u5) && u5.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n() {
  return t2() || i();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react2 = __toESM(require_react(), 1);
function d2(e, r2, n3) {
  let o9 = s2(r2);
  (0, import_react2.useEffect)(() => {
    function t5(u5) {
      o9.current(u5);
    }
    return document.addEventListener(e, t5, n3), () => document.removeEventListener(e, t5, n3);
  }, [e, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react3 = __toESM(require_react(), 1);
function s4(e, r2, n3) {
  let o9 = s2(r2);
  (0, import_react3.useEffect)(() => {
    function t5(i4) {
      o9.current(i4);
    }
    return window.addEventListener(e, t5, n3), () => window.removeEventListener(e, t5, n3);
  }, [e, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y3(s6, m3, a2 = true) {
  let i4 = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    requestAnimationFrame(() => {
      i4.current = a2;
    });
  }, [a2]);
  function c3(e, r2) {
    if (!i4.current || e.defaultPrevented)
      return;
    let t5 = r2(e);
    if (t5 === null || !t5.getRootNode().contains(t5) || !t5.isConnected)
      return;
    let E2 = function u5(n3) {
      return typeof n3 == "function" ? u5(n3()) : Array.isArray(n3) || n3 instanceof Set ? n3 : [n3];
    }(s6);
    for (let u5 of E2) {
      if (u5 === null)
        continue;
      let n3 = u5 instanceof HTMLElement ? u5 : u5.current;
      if (n3 != null && n3.contains(t5) || e.composed && e.composedPath().includes(n3))
        return;
    }
    return !h(t5, T.Loose) && t5.tabIndex !== -1 && e.preventDefault(), m3(e, t5);
  }
  let o9 = (0, import_react4.useRef)(null);
  d2("pointerdown", (e) => {
    var r2, t5;
    i4.current && (o9.current = ((t5 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t5[0]) || e.target);
  }, true), d2("mousedown", (e) => {
    var r2, t5;
    i4.current && (o9.current = ((t5 = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t5[0]) || e.target);
  }, true), d2("click", (e) => {
    n() || o9.current && (c3(e, () => o9.current), o9.current = null);
  }, true), d2("touchend", (e) => c3(e, () => e.target instanceof HTMLElement ? e.target : null), true), s4("blur", (e) => c3(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react5 = __toESM(require_react(), 1);
function n2(...e) {
  return (0, import_react5.useMemo)(() => o4(...e), [...e]);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react6 = __toESM(require_react(), 1);
function i2(t5) {
  var n3;
  if (t5.type)
    return t5.type;
  let e = (n3 = t5.as) != null ? n3 : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T2(t5, e) {
  let [n3, u5] = (0, import_react6.useState)(() => i2(t5));
  return l(() => {
    u5(i2(t5));
  }, [t5.type, t5.as]), l(() => {
    n3 || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u5("button");
  }, [n3, e]), n3;
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react7 = __toESM(require_react(), 1);
function t4(e) {
  return [e.screenX, e.screenY];
}
function u3() {
  let e = (0, import_react7.useRef)([-1, -1]);
  return { wasMoved(r2) {
    let n3 = t4(r2);
    return e.current[0] === n3[0] && e.current[1] === n3[1] ? false : (e.current = n3, true);
  }, update(r2) {
    e.current = t4(r2);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react8 = __toESM(require_react(), 1);
function F2({ container: e, accept: t5, walk: r2, enabled: c3 = true }) {
  let o9 = (0, import_react8.useRef)(t5), l4 = (0, import_react8.useRef)(r2);
  (0, import_react8.useEffect)(() => {
    o9.current = t5, l4.current = r2;
  }, [t5, r2]), l(() => {
    if (!e || !c3)
      return;
    let n3 = o4(e);
    if (!n3)
      return;
    let f4 = o9.current, p2 = l4.current, d5 = Object.assign((i4) => f4(i4), { acceptNode: f4 }), u5 = n3.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d5, false);
    for (; u5.nextNode(); )
      p2(u5.currentNode);
  }, [e, c3, o9, l4]);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r(n3) {
  let e = n3.parentElement, l4 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l4 = e), e = e.parentElement;
  let t5 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t5 && i3(l4) ? false : t5;
}
function i3(n3) {
  if (!n3)
    return false;
  let e = n3.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u4(l4) {
  throw new Error("Unexpected object: " + l4);
}
var c2 = ((i4) => (i4[i4.First = 0] = "First", i4[i4.Previous = 1] = "Previous", i4[i4.Next = 2] = "Next", i4[i4.Last = 3] = "Last", i4[i4.Specific = 4] = "Specific", i4[i4.Nothing = 5] = "Nothing", i4))(c2 || {});
function f3(l4, n3) {
  let t5 = n3.resolveItems();
  if (t5.length <= 0)
    return null;
  let r2 = n3.resolveActiveIndex(), s6 = r2 != null ? r2 : -1;
  switch (l4.focus) {
    case 0: {
      for (let e = 0; e < t5.length; ++e)
        if (!n3.resolveDisabled(t5[e], e, t5))
          return e;
      return r2;
    }
    case 1: {
      for (let e = s6 - 1; e >= 0; --e)
        if (!n3.resolveDisabled(t5[e], e, t5))
          return e;
      return r2;
    }
    case 2: {
      for (let e = s6 + 1; e < t5.length; ++e)
        if (!n3.resolveDisabled(t5[e], e, t5))
          return e;
      return r2;
    }
    case 3: {
      for (let e = t5.length - 1; e >= 0; --e)
        if (!n3.resolveDisabled(t5[e], e, t5))
          return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t5.length; ++e)
        if (n3.resolveId(t5[e], e, t5) === l4.id)
          return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u4(l4);
  }
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o8(e) {
  var r2, i4;
  let n3 = (r2 = e.innerText) != null ? r2 : "", t5 = e.cloneNode(true);
  if (!(t5 instanceof HTMLElement))
    return n3;
  let u5 = false;
  for (let f4 of t5.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f4.remove(), u5 = true;
  let l4 = u5 ? (i4 = t5.innerText) != null ? i4 : "" : n3;
  return a.test(l4) && (l4 = l4.replace(a, "")), l4;
}
function g(e) {
  let n3 = e.getAttribute("aria-label");
  if (typeof n3 == "string")
    return n3.trim();
  let t5 = e.getAttribute("aria-labelledby");
  if (t5) {
    let u5 = t5.split(" ").map((l4) => {
      let r2 = document.getElementById(l4);
      if (r2) {
        let i4 = r2.getAttribute("aria-label");
        return typeof i4 == "string" ? i4.trim() : o8(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u5.length > 0)
      return u5.join(", ");
  }
  return o8(e).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s5(c3) {
  let t5 = (0, import_react9.useRef)(""), r2 = (0, import_react9.useRef)("");
  return o(() => {
    let e = c3.current;
    if (!e)
      return "";
    let u5 = e.innerText;
    if (t5.current === u5)
      return r2.current;
    let n3 = g(e).trim().toLowerCase();
    return t5.current = u5, r2.current = n3, n3;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react10 = __toESM(require_react(), 1);
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(fe || {});
function w2(e, u5 = (r2) => r2) {
  let r2 = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, s6 = I2(u5(e.items.slice()), (t5) => t5.dataRef.current.domRef.current), i4 = r2 ? s6.indexOf(r2) : null;
  return i4 === -1 && (i4 = null), { items: s6, activeItemIndex: i4 };
}
var Te = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: false, menuState: 0 };
}, [2]: (e, u5) => {
  var i4;
  let r2 = w2(e), s6 = f3(u5, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t5) => t5.id, resolveDisabled: (t5) => t5.dataRef.current.disabled });
  return { ...e, ...r2, searchQuery: "", activeItemIndex: s6, activationTrigger: (i4 = u5.trigger) != null ? i4 : 1 };
}, [3]: (e, u5) => {
  let s6 = e.searchQuery !== "" ? 0 : 1, i4 = e.searchQuery + u5.value.toLowerCase(), o9 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + s6).concat(e.items.slice(0, e.activeItemIndex + s6)) : e.items).find((l4) => {
    var m3;
    return ((m3 = l4.dataRef.current.textValue) == null ? void 0 : m3.startsWith(i4)) && !l4.dataRef.current.disabled;
  }), a2 = o9 ? e.items.indexOf(o9) : -1;
  return a2 === -1 || a2 === e.activeItemIndex ? { ...e, searchQuery: i4 } : { ...e, searchQuery: i4, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, u5) => {
  let r2 = w2(e, (s6) => [...s6, { id: u5.id, dataRef: u5.dataRef }]);
  return { ...e, ...r2 };
}, [6]: (e, u5) => {
  let r2 = w2(e, (s6) => {
    let i4 = s6.findIndex((t5) => t5.id === u5.id);
    return i4 !== -1 && s6.splice(i4, 1), s6;
  });
  return { ...e, ...r2, activationTrigger: 1 };
} };
var U2 = (0, import_react10.createContext)(null);
U2.displayName = "MenuContext";
function C2(e) {
  let u5 = (0, import_react10.useContext)(U2);
  if (u5 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, C2), r2;
  }
  return u5;
}
function ye(e, u5) {
  return u(u5.type, Te, e, u5);
}
var Ie = import_react10.Fragment;
function Me(e, u5) {
  let { __demoMode: r2 = false, ...s6 } = e, i4 = (0, import_react10.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react10.createRef)(), itemsRef: (0, import_react10.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t5, itemsRef: o9, buttonRef: a2 }, l4] = i4, m3 = y(u5);
  y3([a2, o9], (g2, R) => {
    var p2;
    l4({ type: 1 }), h(R, T.Loose) || (g2.preventDefault(), (p2 = a2.current) == null || p2.focus());
  }, t5 === 0);
  let I3 = o(() => {
    l4({ type: 1 });
  }), A = (0, import_react10.useMemo)(() => ({ open: t5 === 0, close: I3 }), [t5, I3]), f4 = { ref: m3 };
  return import_react10.default.createElement(U2.Provider, { value: i4 }, import_react10.default.createElement(s3, { value: u(t5, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: f4, theirProps: s6, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e, u5) {
  var R;
  let r2 = I(), { id: s6 = `headlessui-menu-button-${r2}`, ...i4 } = e, [t5, o9] = C2("Menu.Button"), a2 = y(t5.buttonRef, u5), l4 = p(), m3 = o((p2) => {
    switch (p2.key) {
      case o7.Space:
      case o7.Enter:
      case o7.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o9({ type: 0 }), l4.nextFrame(() => o9({ type: 2, focus: c2.First }));
        break;
      case o7.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o9({ type: 0 }), l4.nextFrame(() => o9({ type: 2, focus: c2.Last }));
        break;
    }
  }), I3 = o((p2) => {
    switch (p2.key) {
      case o7.Space:
        p2.preventDefault();
        break;
    }
  }), A = o((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e.disabled || (t5.menuState === 0 ? (o9({ type: 1 }), l4.nextFrame(() => {
      var M2;
      return (M2 = t5.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o9({ type: 0 })));
  }), f4 = (0, import_react10.useMemo)(() => ({ open: t5.menuState === 0 }), [t5]), g2 = { ref: a2, id: s6, type: T2(e, t5.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t5.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": t5.menuState === 0, onKeyDown: m3, onKeyUp: I3, onClick: A };
  return C({ ourProps: g2, theirProps: i4, slot: f4, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = O.RenderStrategy | O.Static;
function Ee(e, u5) {
  var M2, b;
  let r2 = I(), { id: s6 = `headlessui-menu-items-${r2}`, ...i4 } = e, [t5, o9] = C2("Menu.Items"), a2 = y(t5.itemsRef, u5), l4 = n2(t5.itemsRef), m3 = p(), I3 = u2(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t5.menuState === 0)();
  (0, import_react10.useEffect)(() => {
    let n3 = t5.itemsRef.current;
    n3 && t5.menuState === 0 && n3 !== (l4 == null ? void 0 : l4.activeElement) && n3.focus({ preventScroll: true });
  }, [t5.menuState, t5.itemsRef, l4]), F2({ container: t5.itemsRef.current, enabled: t5.menuState === 0, accept(n3) {
    return n3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n3) {
    n3.setAttribute("role", "none");
  } });
  let f4 = o((n3) => {
    var E2, x;
    switch (m3.dispose(), n3.key) {
      case o7.Space:
        if (t5.searchQuery !== "")
          return n3.preventDefault(), n3.stopPropagation(), o9({ type: 3, value: n3.key });
      case o7.Enter:
        if (n3.preventDefault(), n3.stopPropagation(), o9({ type: 1 }), t5.activeItemIndex !== null) {
          let { dataRef: S2 } = t5.items[t5.activeItemIndex];
          (x = (E2 = S2.current) == null ? void 0 : E2.domRef.current) == null || x.click();
        }
        D(t5.buttonRef.current);
        break;
      case o7.ArrowDown:
        return n3.preventDefault(), n3.stopPropagation(), o9({ type: 2, focus: c2.Next });
      case o7.ArrowUp:
        return n3.preventDefault(), n3.stopPropagation(), o9({ type: 2, focus: c2.Previous });
      case o7.Home:
      case o7.PageUp:
        return n3.preventDefault(), n3.stopPropagation(), o9({ type: 2, focus: c2.First });
      case o7.End:
      case o7.PageDown:
        return n3.preventDefault(), n3.stopPropagation(), o9({ type: 2, focus: c2.Last });
      case o7.Escape:
        n3.preventDefault(), n3.stopPropagation(), o9({ type: 1 }), o2().nextFrame(() => {
          var S2;
          return (S2 = t5.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
        });
        break;
      case o7.Tab:
        n3.preventDefault(), n3.stopPropagation(), o9({ type: 1 }), o2().nextFrame(() => {
          _(t5.buttonRef.current, n3.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n3.key.length === 1 && (o9({ type: 3, value: n3.key }), m3.setTimeout(() => o9({ type: 4 }), 350));
        break;
    }
  }), g2 = o((n3) => {
    switch (n3.key) {
      case o7.Space:
        n3.preventDefault();
        break;
    }
  }), R = (0, import_react10.useMemo)(() => ({ open: t5.menuState === 0 }), [t5]), p2 = { "aria-activedescendant": t5.activeItemIndex === null || (M2 = t5.items[t5.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b = t5.buttonRef.current) == null ? void 0 : b.id, id: s6, onKeyDown: f4, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a2 };
  return C({ ourProps: p2, theirProps: i4, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react10.Fragment;
function xe(e, u5) {
  let r2 = I(), { id: s6 = `headlessui-menu-item-${r2}`, disabled: i4 = false, ...t5 } = e, [o9, a2] = C2("Menu.Item"), l4 = o9.activeItemIndex !== null ? o9.items[o9.activeItemIndex].id === s6 : false, m3 = (0, import_react10.useRef)(null), I3 = y(u5, m3);
  l(() => {
    if (o9.__demoMode || o9.menuState !== 0 || !l4 || o9.activationTrigger === 0)
      return;
    let T3 = o2();
    return T3.requestAnimationFrame(() => {
      var P, B;
      (B = (P = m3.current) == null ? void 0 : P.scrollIntoView) == null || B.call(P, { block: "nearest" });
    }), T3.dispose;
  }, [o9.__demoMode, m3, l4, o9.menuState, o9.activationTrigger, o9.activeItemIndex]);
  let A = s5(m3), f4 = (0, import_react10.useRef)({ disabled: i4, domRef: m3, get textValue() {
    return A();
  } });
  l(() => {
    f4.current.disabled = i4;
  }, [f4, i4]), l(() => (a2({ type: 5, id: s6, dataRef: f4 }), () => a2({ type: 6, id: s6 })), [f4, s6]);
  let g2 = o(() => {
    a2({ type: 1 });
  }), R = o((T3) => {
    if (i4)
      return T3.preventDefault();
    a2({ type: 1 }), D(o9.buttonRef.current);
  }), p2 = o(() => {
    if (i4)
      return a2({ type: 2, focus: c2.Nothing });
    a2({ type: 2, focus: c2.Specific, id: s6 });
  }), M2 = u3(), b = o((T3) => M2.update(T3)), n3 = o((T3) => {
    M2.wasMoved(T3) && (i4 || l4 || a2({ type: 2, focus: c2.Specific, id: s6, trigger: 0 }));
  }), E2 = o((T3) => {
    M2.wasMoved(T3) && (i4 || l4 && a2({ type: 2, focus: c2.Nothing }));
  }), x = (0, import_react10.useMemo)(() => ({ active: l4, disabled: i4, close: g2 }), [l4, i4, g2]);
  return C({ ourProps: { id: s6, ref: I3, role: "menuitem", tabIndex: i4 === true ? void 0 : -1, "aria-disabled": i4 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p2, onPointerEnter: b, onMouseEnter: b, onPointerMove: n3, onMouseMove: n3, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t5, slot: x, defaultTag: Se, name: "Menu.Item" });
}
var Pe = U(Me);
var ve = U(Re);
var he = U(Ee);
var De = U(xe);
var qe2 = Object.assign(Pe, { Button: ve, Items: he, Item: De });

// app/recipes/components/Recipe/RecipeHeader.tsx
var import_react11 = __toESM(require_react());

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
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
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
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    d: "M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
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
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    d: "m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, { condition: !!canEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, { condition: !!url, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { intent: "secondary", to: url, children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe2, { as: "div", className: "relative sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe2.Button, { className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400", children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe, { as: import_react11.Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe2.Items, { className: "absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe2.Item, { children: ({
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe2.Item, { children: ({
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default, { condition: !!externalUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(If_default.Then, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { intent: "secondary", to: externalUrl, children: [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { ...props, type: "button", intent: "secondary", onClick, children: [
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
var import_react14 = __toESM(require_react());
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
  import.meta.hot.lastModified = "1706832807377.1719";
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
        isWishList: true,
        isExternalSrc: false
      })
    }, {
      method: "POST",
      action: "/api/recipes/add-external-wishlist"
    });
  };
  (0, import_react14.useEffect)(() => {
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
    lineNumber: 61,
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
//# sourceMappingURL=/build/($locale).recipes.$id-AVEFNEKT.js.map
