function hy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r) {
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          if (s) {
            Object.defineProperty(e, i, s.get ? s : {
              enumerable: true,
              get: () => r[i]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const i of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    r(i);
  }
  new MutationObserver(i => {
    for (const s of i) {
      if (s.type === "childList") {
        for (const o of s.addedNodes) {
          if (o.tagName === "LINK" && o.rel === "modulepreload") {
            r(o);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function n(i) {
    const s = {};
    if (i.integrity) {
      s.integrity = i.integrity;
    }
    if (i.referrerPolicy) {
      s.referrerPolicy = i.referrerPolicy;
    }
    if (i.crossOrigin === "use-credentials") {
      s.credentials = "include";
    } else if (i.crossOrigin === "anonymous") {
      s.credentials = "omit";
    } else {
      s.credentials = "same-origin";
    }
    return s;
  }
  function r(i) {
    if (i.ep) {
      return;
    }
    i.ep = true;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function py(e) {
  if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
    return e.default;
  } else {
    return e;
  }
}
var qf = {
  exports: {}
};
var oo = {};
var Jf = {
  exports: {}
};
var B = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ji = Symbol.for("react.element");
var my = Symbol.for("react.portal");
var gy = Symbol.for("react.fragment");
var yy = Symbol.for("react.strict_mode");
var vy = Symbol.for("react.profiler");
var xy = Symbol.for("react.provider");
var wy = Symbol.for("react.context");
var ky = Symbol.for("react.forward_ref");
var jy = Symbol.for("react.suspense");
var Sy = Symbol.for("react.memo");
var by = Symbol.for("react.lazy");
var cc = Symbol.iterator;
function Cy(e) {
  if (e === null || typeof e != "object") {
    return null;
  } else {
    e = cc && e[cc] || e["@@iterator"];
    if (typeof e == "function") {
      return e;
    } else {
      return null;
    }
  }
}
var eh = {
  isMounted: function () {
    return false;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var th = Object.assign;
var nh = {};
function yr(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = nh;
  this.updater = n || eh;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) {
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  }
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rh() {}
rh.prototype = yr.prototype;
function Wl(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = nh;
  this.updater = n || eh;
}
var Ul = Wl.prototype = new rh();
Ul.constructor = Wl;
th(Ul, yr.prototype);
Ul.isPureReactComponent = true;
var dc = Array.isArray;
var ih = Object.prototype.hasOwnProperty;
var Hl = {
  current: null
};
var sh = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function oh(e, t, n) {
  var r;
  var i = {};
  var s = null;
  var o = null;
  if (t != null) {
    if (t.ref !== undefined) {
      o = t.ref;
    }
    if (t.key !== undefined) {
      s = "" + t.key;
    }
    for (r in t) {
      if (ih.call(t, r) && !sh.hasOwnProperty(r)) {
        i[r] = t[r];
      }
    }
  }
  var l = arguments.length - 2;
  if (l === 1) {
    i.children = n;
  } else if (l > 1) {
    var u = Array(l);
    for (var c = 0; c < l; c++) {
      u[c] = arguments[c + 2];
    }
    i.children = u;
  }
  if (e && e.defaultProps) {
    l = e.defaultProps;
    for (r in l) {
      if (i[r] === undefined) {
        i[r] = l[r];
      }
    }
  }
  return {
    $$typeof: ji,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Hl.current
  };
}
function Ty(e, t) {
  return {
    $$typeof: ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ji;
}
function Py(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n];
  });
}
var fc = /\/+/g;
function Ao(e, t) {
  if (typeof e == "object" && e !== null && e.key != null) {
    return Py("" + e.key);
  } else {
    return t.toString(36);
  }
}
function rs(e, t, n, r, i) {
  var s = typeof e;
  if (s === "undefined" || s === "boolean") {
    e = null;
  }
  var o = false;
  if (e === null) {
    o = true;
  } else {
    switch (s) {
      case "string":
      case "number":
        o = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case ji:
          case my:
            o = true;
        }
    }
  }
  if (o) {
    o = e;
    i = i(o);
    e = r === "" ? "." + Ao(o, 0) : r;
    if (dc(i)) {
      n = "";
      if (e != null) {
        n = e.replace(fc, "$&/") + "/";
      }
      rs(i, t, n, "", function (c) {
        return c;
      });
    } else if (i != null) {
      if ($l(i)) {
        i = Ty(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(fc, "$&/") + "/") + e);
      }
      t.push(i);
    }
    return 1;
  }
  o = 0;
  r = r === "" ? "." : r + ":";
  if (dc(e)) {
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = r + Ao(s, l);
      o += rs(s, t, n, u, i);
    }
  } else {
    u = Cy(e);
    if (typeof u == "function") {
      e = u.call(e);
      l = 0;
      while (!(s = e.next()).done) {
        s = s.value;
        u = r + Ao(s, l++);
        o += rs(s, t, n, u, i);
      }
    } else if (s === "object") {
      t = String(e);
      throw Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
  }
  return o;
}
function Ii(e, t, n) {
  if (e == null) {
    return e;
  }
  var r = [];
  var i = 0;
  rs(e, r, "", "", function (s) {
    return t.call(n, s, i++);
  });
  return r;
}
function Ny(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t();
    t.then(function (n) {
      if (e._status === 0 || e._status === -1) {
        e._status = 1;
        e._result = n;
      }
    }, function (n) {
      if (e._status === 0 || e._status === -1) {
        e._status = 2;
        e._result = n;
      }
    });
    if (e._status === -1) {
      e._status = 0;
      e._result = t;
    }
  }
  if (e._status === 1) {
    return e._result.default;
  }
  throw e._result;
}
var Ne = {
  current: null
};
var is = {
  transition: null
};
var Ey = {
  ReactCurrentDispatcher: Ne,
  ReactCurrentBatchConfig: is,
  ReactCurrentOwner: Hl
};
function ah() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: Ii,
  forEach: function (e, t, n) {
    Ii(e, function () {
      t.apply(this, arguments);
    }, n);
  },
  count: function (e) {
    var t = 0;
    Ii(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return Ii(e, function (t) {
      return t;
    }) || [];
  },
  only: function (e) {
    if (!$l(e)) {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
    return e;
  }
};
B.Component = yr;
B.Fragment = gy;
B.Profiler = vy;
B.PureComponent = Wl;
B.StrictMode = yy;
B.Suspense = jy;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey;
B.act = ah;
B.cloneElement = function (e, t, n) {
  if (e == null) {
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  }
  var r = th({}, e.props);
  var i = e.key;
  var s = e.ref;
  var o = e._owner;
  if (t != null) {
    if (t.ref !== undefined) {
      s = t.ref;
      o = Hl.current;
    }
    if (t.key !== undefined) {
      i = "" + t.key;
    }
    if (e.type && e.type.defaultProps) {
      var l = e.type.defaultProps;
    }
    for (u in t) {
      if (ih.call(t, u) && !sh.hasOwnProperty(u)) {
        r[u] = t[u] === undefined && l !== undefined ? l[u] : t[u];
      }
    }
  }
  var u = arguments.length - 2;
  if (u === 1) {
    r.children = n;
  } else if (u > 1) {
    l = Array(u);
    for (var c = 0; c < u; c++) {
      l[c] = arguments[c + 2];
    }
    r.children = l;
  }
  return {
    $$typeof: ji,
    type: e.type,
    key: i,
    ref: s,
    props: r,
    _owner: o
  };
};
B.createContext = function (e) {
  e = {
    $$typeof: wy,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  e.Provider = {
    $$typeof: xy,
    _context: e
  };
  return e.Consumer = e;
};
B.createElement = oh;
B.createFactory = function (e) {
  var t = oh.bind(null, e);
  t.type = e;
  return t;
};
B.createRef = function () {
  return {
    current: null
  };
};
B.forwardRef = function (e) {
  return {
    $$typeof: ky,
    render: e
  };
};
B.isValidElement = $l;
B.lazy = function (e) {
  return {
    $$typeof: by,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Ny
  };
};
B.memo = function (e, t) {
  return {
    $$typeof: Sy,
    type: e,
    compare: t === undefined ? null : t
  };
};
B.startTransition = function (e) {
  var t = is.transition;
  is.transition = {};
  try {
    e();
  } finally {
    is.transition = t;
  }
};
B.unstable_act = ah;
B.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Ne.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
B.useId = function () {
  return Ne.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Ne.current.useRef(e);
};
B.useState = function (e) {
  return Ne.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Ne.current.useTransition();
};
B.version = "18.3.1";
Jf.exports = B;
var j = Jf.exports;
const Et = py(j);
const My = hy({
  __proto__: null,
  default: Et
}, [j]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ay = j;
var Ly = Symbol.for("react.element");
var Ry = Symbol.for("react.fragment");
var Dy = Object.prototype.hasOwnProperty;
var Iy = Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var Vy = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function lh(e, t, n) {
  var r;
  var i = {};
  var s = null;
  var o = null;
  if (n !== undefined) {
    s = "" + n;
  }
  if (t.key !== undefined) {
    s = "" + t.key;
  }
  if (t.ref !== undefined) {
    o = t.ref;
  }
  for (r in t) {
    if (Dy.call(t, r) && !Vy.hasOwnProperty(r)) {
      i[r] = t[r];
    }
  }
  if (e && e.defaultProps) {
    t = e.defaultProps;
    for (r in t) {
      if (i[r] === undefined) {
        i[r] = t[r];
      }
    }
  }
  return {
    $$typeof: Ly,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Iy.current
  };
}
oo.Fragment = Ry;
oo.jsx = lh;
oo.jsxs = lh;
qf.exports = oo;
var a = qf.exports;
var wa = {};
var uh = {
  exports: {}
};
var $e = {};
var ch = {
  exports: {}
};
var dh = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) {
  function t(E, L) {
    var D = E.length;
    E.push(L);
    e: while (D > 0) {
      var _ = D - 1 >>> 1;
      var re = E[_];
      if (i(re, L) > 0) {
        E[_] = L;
        E[D] = re;
        D = _;
      } else {
        break e;
      }
    }
  }
  function n(E) {
    if (E.length === 0) {
      return null;
    } else {
      return E[0];
    }
  }
  function r(E) {
    if (E.length === 0) {
      return null;
    }
    var L = E[0];
    var D = E.pop();
    if (D !== L) {
      E[0] = D;
      e: for (var _ = 0, re = E.length, Ri = re >>> 1; _ < Ri;) {
        var pn = (_ + 1) * 2 - 1;
        var Mo = E[pn];
        var mn = pn + 1;
        var Di = E[mn];
        if (i(Mo, D) < 0) {
          if (mn < re && i(Di, Mo) < 0) {
            E[_] = Di;
            E[mn] = D;
            _ = mn;
          } else {
            E[_] = Mo;
            E[pn] = D;
            _ = pn;
          }
        } else if (mn < re && i(Di, D) < 0) {
          E[_] = Di;
          E[mn] = D;
          _ = mn;
        } else {
          break e;
        }
      }
    }
    return L;
  }
  function i(E, L) {
    var D = E.sortIndex - L.sortIndex;
    if (D !== 0) {
      return D;
    } else {
      return E.id - L.id;
    }
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date;
    var l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [];
  var c = [];
  var d = 1;
  var f = null;
  var h = 3;
  var m = false;
  var v = false;
  var x = false;
  var k = typeof setTimeout == "function" ? setTimeout : null;
  var g = typeof clearTimeout == "function" ? clearTimeout : null;
  var p = typeof setImmediate !== "undefined" ? setImmediate : null;
  if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  }
  function y(E) {
    for (var L = n(c); L !== null;) {
      if (L.callback === null) {
        r(c);
      } else if (L.startTime <= E) {
        r(c);
        L.sortIndex = L.expirationTime;
        t(u, L);
      } else {
        break;
      }
      L = n(c);
    }
  }
  function w(E) {
    x = false;
    y(E);
    if (!v) {
      if (n(u) !== null) {
        v = true;
        Me(S);
      } else {
        var L = n(c);
        if (L !== null) {
          Li(w, L.startTime - E);
        }
      }
    }
  }
  function S(E, L) {
    v = false;
    if (x) {
      x = false;
      g(T);
      T = -1;
    }
    m = true;
    var D = h;
    try {
      y(L);
      f = n(u);
      while (f !== null && (!(f.expirationTime > L) || E && !O())) {
        var _ = f.callback;
        if (typeof _ == "function") {
          f.callback = null;
          h = f.priorityLevel;
          var re = _(f.expirationTime <= L);
          L = e.unstable_now();
          if (typeof re == "function") {
            f.callback = re;
          } else if (f === n(u)) {
            r(u);
          }
          y(L);
        } else {
          r(u);
        }
        f = n(u);
      }
      if (f !== null) {
        var Ri = true;
      } else {
        var pn = n(c);
        if (pn !== null) {
          Li(w, pn.startTime - L);
        }
        Ri = false;
      }
      return Ri;
    } finally {
      f = null;
      h = D;
      m = false;
    }
  }
  var b = false;
  var P = null;
  var T = -1;
  var V = 5;
  var N = -1;
  function O() {
    return !(e.unstable_now() - N < V);
  }
  function ne() {
    if (P !== null) {
      var E = e.unstable_now();
      N = E;
      var L = true;
      try {
        L = P(true, E);
      } finally {
        if (L) {
          Be();
        } else {
          b = false;
          P = null;
        }
      }
    } else {
      b = false;
    }
  }
  var Be;
  if (typeof p == "function") {
    Be = function () {
      p(ne);
    };
  } else if (typeof MessageChannel !== "undefined") {
    var Oe = new MessageChannel();
    var it = Oe.port2;
    Oe.port1.onmessage = ne;
    Be = function () {
      it.postMessage(null);
    };
  } else {
    Be = function () {
      k(ne, 0);
    };
  }
  function Me(E) {
    P = E;
    if (!b) {
      b = true;
      Be();
    }
  }
  function Li(E, L) {
    T = k(function () {
      E(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5;
  e.unstable_ImmediatePriority = 1;
  e.unstable_LowPriority = 4;
  e.unstable_NormalPriority = 3;
  e.unstable_Profiling = null;
  e.unstable_UserBlockingPriority = 2;
  e.unstable_cancelCallback = function (E) {
    E.callback = null;
  };
  e.unstable_continueExecution = function () {
    if (!v && !m) {
      v = true;
      Me(S);
    }
  };
  e.unstable_forceFrameRate = function (E) {
    if (E < 0 || E > 125) {
      console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
    } else {
      V = E > 0 ? Math.floor(1000 / E) : 5;
    }
  };
  e.unstable_getCurrentPriorityLevel = function () {
    return h;
  };
  e.unstable_getFirstCallbackNode = function () {
    return n(u);
  };
  e.unstable_next = function (E) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = h;
    }
    var D = h;
    h = L;
    try {
      return E();
    } finally {
      h = D;
    }
  };
  e.unstable_pauseExecution = function () {};
  e.unstable_requestPaint = function () {};
  e.unstable_runWithPriority = function (E, L) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var D = h;
    h = E;
    try {
      return L();
    } finally {
      h = D;
    }
  };
  e.unstable_scheduleCallback = function (E, L, D) {
    var _ = e.unstable_now();
    if (typeof D == "object" && D !== null) {
      D = D.delay;
      D = typeof D == "number" && D > 0 ? _ + D : _;
    } else {
      D = _;
    }
    switch (E) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 10000;
        break;
      default:
        re = 5000;
    }
    re = D + re;
    E = {
      id: d++,
      callback: L,
      priorityLevel: E,
      startTime: D,
      expirationTime: re,
      sortIndex: -1
    };
    if (D > _) {
      E.sortIndex = D;
      t(c, E);
      if (n(u) === null && E === n(c)) {
        if (x) {
          g(T);
          T = -1;
        } else {
          x = true;
        }
        Li(w, D - _);
      }
    } else {
      E.sortIndex = re;
      t(u, E);
      if (!v && !m) {
        v = true;
        Me(S);
      }
    }
    return E;
  };
  e.unstable_shouldYield = O;
  e.unstable_wrapCallback = function (E) {
    var L = h;
    return function () {
      var D = h;
      h = L;
      try {
        return E.apply(this, arguments);
      } finally {
        h = D;
      }
    };
  };
})(dh);
ch.exports = dh;
var By = ch.exports; /**
                     * @license React
                     * react-dom.production.min.js
                     *
                     * Copyright (c) Facebook, Inc. and its affiliates.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */
var Oy = j;
var He = By;
function C(e) {
  var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e;
  for (var n = 1; n < arguments.length; n++) {
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fh = new Set();
var Jr = {};
function Dn(e, t) {
  ar(e, t);
  ar(e + "Capture", t);
}
function ar(e, t) {
  Jr[e] = t;
  e = 0;
  for (; e < t.length; e++) {
    fh.add(t[e]);
  }
}
var At = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ka = Object.prototype.hasOwnProperty;
var Fy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var hc = {};
var pc = {};
function zy(e) {
  if (ka.call(pc, e)) {
    return true;
  } else if (ka.call(hc, e)) {
    return false;
  } else if (Fy.test(e)) {
    return pc[e] = true;
  } else {
    hc[e] = true;
    return false;
  }
}
function _y(e, t, n, r) {
  if (n !== null && n.type === 0) {
    return false;
  }
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (r) {
        return false;
      } else if (n !== null) {
        return !n.acceptsBooleans;
      } else {
        e = e.toLowerCase().slice(0, 5);
        return e !== "data-" && e !== "aria-";
      }
    default:
      return false;
  }
}
function Wy(e, t, n, r) {
  if (t === null || typeof t === "undefined" || _y(e, t, n, r)) {
    return true;
  }
  if (r) {
    return false;
  }
  if (n !== null) {
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || t < 1;
    }
  }
  return false;
}
function Ee(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4;
  this.attributeName = r;
  this.attributeNamespace = i;
  this.mustUseProperty = n;
  this.propertyName = e;
  this.type = t;
  this.sanitizeURL = s;
  this.removeEmptyString = o;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ve[e] = new Ee(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  ve[t] = new Ee(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Ee(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ve[e] = new Ee(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  ve[e] = new Ee(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Ee(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Ee(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Ee(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Ee(e, 5, false, e.toLowerCase(), null, false, false);
});
var Kl = /[\-:]([a-z])/g;
function Gl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Kl, Gl);
  ve[t] = new Ee(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Kl, Gl);
  ve[t] = new Ee(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Kl, Gl);
  ve[t] = new Ee(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Ee(e, 1, false, e.toLowerCase(), null, false, false);
});
ve.xlinkHref = new Ee("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Ee(e, 1, false, e.toLowerCase(), null, true, true);
});
function Yl(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  if (i !== null ? i.type !== 0 : r || !(t.length > 2) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") {
    if (Wy(t, n, i, r)) {
      n = null;
    }
    if (r || i === null) {
      if (zy(t)) {
        if (n === null) {
          e.removeAttribute(t);
        } else {
          e.setAttribute(t, "" + n);
        }
      }
    } else if (i.mustUseProperty) {
      e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n;
    } else {
      t = i.attributeName;
      r = i.attributeNamespace;
      if (n === null) {
        e.removeAttribute(t);
      } else {
        i = i.type;
        n = i === 3 || i === 4 && n === true ? "" : "" + n;
        if (r) {
          e.setAttributeNS(r, t, n);
        } else {
          e.setAttribute(t, n);
        }
      }
    }
  }
}
var It = Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var Vi = Symbol.for("react.element");
var zn = Symbol.for("react.portal");
var _n = Symbol.for("react.fragment");
var Xl = Symbol.for("react.strict_mode");
var ja = Symbol.for("react.profiler");
var hh = Symbol.for("react.provider");
var ph = Symbol.for("react.context");
var Ql = Symbol.for("react.forward_ref");
var Sa = Symbol.for("react.suspense");
var ba = Symbol.for("react.suspense_list");
var Zl = Symbol.for("react.memo");
var _t = Symbol.for("react.lazy");
var mh = Symbol.for("react.offscreen");
var mc = Symbol.iterator;
function br(e) {
  if (e === null || typeof e != "object") {
    return null;
  } else {
    e = mc && e[mc] || e["@@iterator"];
    if (typeof e == "function") {
      return e;
    } else {
      return null;
    }
  }
}
var Z = Object.assign;
var Lo;
function Dr(e) {
  if (Lo === undefined) {
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Lo = t && t[1] || "";
    }
  }
  return `
${Lo}${e}`;
}
var Ro = false;
function Do(e, t) {
  if (!e || Ro) {
    return "";
  }
  Ro = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = undefined;
  try {
    if (t) {
      t = function () {
        throw Error();
      };
      Object.defineProperty(t.prototype, "props", {
        set: function () {
          throw Error();
        }
      });
      if (typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; o >= 1 && l >= 0 && i[o] !== s[l];) {
        l--;
      }
      for (; o >= 1 && l >= 0; o--, l--) {
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1) {
            do {
              o--;
              l--;
              if (l < 0 || i[o] !== s[l]) {
                var u = `
${i[o].replace(" at new ", " at ")}`;
                if (e.displayName && u.includes("<anonymous>")) {
                  u = u.replace("<anonymous>", e.displayName);
                }
                return u;
              }
            } while (o >= 1 && l >= 0);
          }
          break;
        }
      }
    }
  } finally {
    Ro = false;
    Error.prepareStackTrace = n;
  }
  if (e = e ? e.displayName || e.name : "") {
    return Dr(e);
  } else {
    return "";
  }
}
function Uy(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      e = Do(e.type, false);
      return e;
    case 11:
      e = Do(e.type.render, false);
      return e;
    case 1:
      e = Do(e.type, true);
      return e;
    default:
      return "";
  }
}
function Ca(e) {
  if (e == null) {
    return null;
  }
  if (typeof e == "function") {
    return e.displayName || e.name || null;
  }
  if (typeof e == "string") {
    return e;
  }
  switch (e) {
    case _n:
      return "Fragment";
    case zn:
      return "Portal";
    case ja:
      return "Profiler";
    case Xl:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case ba:
      return "SuspenseList";
  }
  if (typeof e == "object") {
    switch (e.$$typeof) {
      case ph:
        return (e.displayName || "Context") + ".Consumer";
      case hh:
        return (e._context.displayName || "Context") + ".Provider";
      case Ql:
        var t = e.render;
        e = e.displayName;
        if (!e) {
          e = t.displayName || t.name || "";
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef";
        }
        return e;
      case Zl:
        t = e.displayName || null;
        if (t !== null) {
          return t;
        } else {
          return Ca(e.type) || "Memo";
        }
      case _t:
        t = e._payload;
        e = e._init;
        try {
          return Ca(e(t));
        } catch {}
    }
  }
  return null;
}
function Hy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      e = t.render;
      e = e.displayName || e.name || "";
      return t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ca(t);
    case 8:
      if (t === Xl) {
        return "StrictMode";
      } else {
        return "Mode";
      }
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") {
        return t.displayName || t.name || null;
      }
      if (typeof t == "string") {
        return t;
      }
  }
  return null;
}
function sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $y(e) {
  var t = gh(e) ? "checked" : "value";
  var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
  var r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n !== "undefined" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get;
    var s = n.set;
    Object.defineProperty(e, t, {
      configurable: true,
      get: function () {
        return i.call(this);
      },
      set: function (o) {
        r = "" + o;
        s.call(this, o);
      }
    });
    Object.defineProperty(e, t, {
      enumerable: n.enumerable
    });
    return {
      getValue: function () {
        return r;
      },
      setValue: function (o) {
        r = "" + o;
      },
      stopTracking: function () {
        e._valueTracker = null;
        delete e[t];
      }
    };
  }
}
function Bi(e) {
  e._valueTracker ||= $y(e);
}
function yh(e) {
  if (!e) {
    return false;
  }
  var t = e._valueTracker;
  if (!t) {
    return true;
  }
  var n = t.getValue();
  var r = "";
  if (e) {
    r = gh(e) ? e.checked ? "true" : "false" : e.value;
  }
  e = r;
  if (e !== n) {
    t.setValue(e);
    return true;
  } else {
    return false;
  }
}
function js(e) {
  e = e || (typeof document !== "undefined" ? document : undefined);
  if (typeof e === "undefined") {
    return null;
  }
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ta(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: undefined,
    defaultValue: undefined,
    value: undefined,
    checked: n ?? e._wrapperState.initialChecked
  });
}
function gc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue;
  var r = t.checked ?? t.defaultChecked;
  n = sn(t.value ?? n);
  e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  };
}
function vh(e, t) {
  t = t.checked;
  if (t != null) {
    Yl(e, "checked", t, false);
  }
}
function Pa(e, t) {
  vh(e, t);
  var n = sn(t.value);
  var r = t.type;
  if (n != null) {
    if (r === "number") {
      if (n === 0 && e.value === "" || e.value != n) {
        e.value = "" + n;
      }
    } else if (e.value !== "" + n) {
      e.value = "" + n;
    }
  } else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  if (t.hasOwnProperty("value")) {
    Na(e, t.type, n);
  } else if (t.hasOwnProperty("defaultValue")) {
    Na(e, t.type, sn(t.defaultValue));
  }
  if (t.checked == null && t.defaultChecked != null) {
    e.defaultChecked = !!t.defaultChecked;
  }
}
function yc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if ((r === "submit" || r === "reset") && (t.value === undefined || t.value === null)) {
      return;
    }
    t = "" + e._wrapperState.initialValue;
    if (!n && t !== e.value) {
      e.value = t;
    }
    e.defaultValue = t;
  }
  n = e.name;
  if (n !== "") {
    e.name = "";
  }
  e.defaultChecked = !!e._wrapperState.initialChecked;
  if (n !== "") {
    e.name = n;
  }
}
function Na(e, t, n) {
  if (t !== "number" || js(e.ownerDocument) !== e) {
    if (n == null) {
      e.defaultValue = "" + e._wrapperState.initialValue;
    } else if (e.defaultValue !== "" + n) {
      e.defaultValue = "" + n;
    }
  }
}
var Ir = Array.isArray;
function tr(e, t, n, r) {
  e = e.options;
  if (t) {
    t = {};
    for (var i = 0; i < n.length; i++) {
      t["$" + n[i]] = true;
    }
    for (n = 0; n < e.length; n++) {
      i = t.hasOwnProperty("$" + e[n].value);
      if (e[n].selected !== i) {
        e[n].selected = i;
      }
      if (i && r) {
        e[n].defaultSelected = true;
      }
    }
  } else {
    n = "" + sn(n);
    t = null;
    i = 0;
    for (; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = true;
        if (r) {
          e[i].defaultSelected = true;
        }
        return;
      }
      if (t === null && !e[i].disabled) {
        t = e[i];
      }
    }
    if (t !== null) {
      t.selected = true;
    }
  }
}
function Ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) {
    throw Error(C(91));
  }
  return Z({}, t, {
    value: undefined,
    defaultValue: undefined,
    children: "" + e._wrapperState.initialValue
  });
}
function vc(e, t) {
  var n = t.value;
  if (n == null) {
    n = t.children;
    t = t.defaultValue;
    if (n != null) {
      if (t != null) {
        throw Error(C(92));
      }
      if (Ir(n)) {
        if (n.length > 1) {
          throw Error(C(93));
        }
        n = n[0];
      }
      t = n;
    }
    if (t == null) {
      t = "";
    }
    n = t;
  }
  e._wrapperState = {
    initialValue: sn(n)
  };
}
function xh(e, t) {
  var n = sn(t.value);
  var r = sn(t.defaultValue);
  if (n != null) {
    n = "" + n;
    if (n !== e.value) {
      e.value = n;
    }
    if (t.defaultValue == null && e.defaultValue !== n) {
      e.defaultValue = n;
    }
  }
  if (r != null) {
    e.defaultValue = "" + r;
  }
}
function xc(e) {
  var t = e.textContent;
  if (t === e._wrapperState.initialValue && t !== "" && t !== null) {
    e.value = t;
  }
}
function wh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e, t) {
  if (e == null || e === "http://www.w3.org/1999/xhtml") {
    return wh(t);
  } else if (e === "http://www.w3.org/2000/svg" && t === "foreignObject") {
    return "http://www.w3.org/1999/xhtml";
  } else {
    return e;
  }
}
var Oi;
var kh = function (e) {
  if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
    return function (t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function () {
        return e(t, n, r, i);
      });
    };
  } else {
    return e;
  }
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) {
    e.innerHTML = t;
  } else {
    Oi = Oi || document.createElement("div");
    Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
    t = Oi.firstChild;
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
    while (t.firstChild) {
      e.appendChild(t.firstChild);
    }
  }
});
function ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fr = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var Ky = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function (e) {
  Ky.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1);
    Fr[t] = Fr[e];
  });
});
function jh(e, t, n) {
  if (t == null || typeof t == "boolean" || t === "") {
    return "";
  } else if (n || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e]) {
    return ("" + t).trim();
  } else {
    return t + "px";
  }
}
function Sh(e, t) {
  e = e.style;
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0;
      var i = jh(n, t[n], r);
      if (n === "float") {
        n = "cssFloat";
      }
      if (r) {
        e.setProperty(n, i);
      } else {
        e[n] = i;
      }
    }
  }
}
var Gy = Z({
  menuitem: true
}, {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
});
function Aa(e, t) {
  if (t) {
    if (Gy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) {
      throw Error(C(137, e));
    }
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) {
        throw Error(C(60));
      }
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) {
        throw Error(C(61));
      }
    }
    if (t.style != null && typeof t.style != "object") {
      throw Error(C(62));
    }
  }
}
function La(e, t) {
  if (e.indexOf("-") === -1) {
    return typeof t.is == "string";
  }
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Ra = null;
function ql(e) {
  e = e.target || e.srcElement || window;
  if (e.correspondingUseElement) {
    e = e.correspondingUseElement;
  }
  if (e.nodeType === 3) {
    return e.parentNode;
  } else {
    return e;
  }
}
var Da = null;
var nr = null;
var rr = null;
function wc(e) {
  if (e = Ci(e)) {
    if (typeof Da != "function") {
      throw Error(C(280));
    }
    var t = e.stateNode;
    if (t) {
      t = fo(t);
      Da(e.stateNode, e.type, t);
    }
  }
}
function bh(e) {
  if (nr) {
    if (rr) {
      rr.push(e);
    } else {
      rr = [e];
    }
  } else {
    nr = e;
  }
}
function Ch() {
  if (nr) {
    var e = nr;
    var t = rr;
    rr = nr = null;
    wc(e);
    if (t) {
      for (e = 0; e < t.length; e++) {
        wc(t[e]);
      }
    }
  }
}
function Th(e, t) {
  return e(t);
}
function Ph() {}
var Io = false;
function Nh(e, t, n) {
  if (Io) {
    return e(t, n);
  }
  Io = true;
  try {
    return Th(e, t, n);
  } finally {
    Io = false;
    if (nr !== null || rr !== null) {
      Ph();
      Ch();
    }
  }
}
function ti(e, t) {
  var n = e.stateNode;
  if (n === null) {
    return null;
  }
  var r = fo(n);
  if (r === null) {
    return null;
  }
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      if (!(r = !r.disabled)) {
        e = e.type;
        r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea";
      }
      e = !r;
      break e;
    default:
      e = false;
  }
  if (e) {
    return null;
  }
  if (n && typeof n != "function") {
    throw Error(C(231, t, typeof n));
  }
  return n;
}
var Ia = false;
if (At) {
  try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", {
      get: function () {
        Ia = true;
      }
    });
    window.addEventListener("test", Cr, Cr);
    window.removeEventListener("test", Cr, Cr);
  } catch {
    Ia = false;
  }
}
function Yy(e, t, n, r, i, s, o, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var zr = false;
var Ss = null;
var bs = false;
var Va = null;
var Xy = {
  onError: function (e) {
    zr = true;
    Ss = e;
  }
};
function Qy(e, t, n, r, i, s, o, l, u) {
  zr = false;
  Ss = null;
  Yy.apply(Xy, arguments);
}
function Zy(e, t, n, r, i, s, o, l, u) {
  Qy.apply(this, arguments);
  if (zr) {
    if (zr) {
      var c = Ss;
      zr = false;
      Ss = null;
    } else {
      throw Error(C(198));
    }
    if (!bs) {
      bs = true;
      Va = c;
    }
  }
}
function In(e) {
  var t = e;
  var n = e;
  if (e.alternate) {
    while (t.return) {
      t = t.return;
    }
  } else {
    e = t;
    do {
      t = e;
      if (t.flags & 4098) {
        n = t.return;
      }
      e = t.return;
    } while (e);
  }
  if (t.tag === 3) {
    return n;
  } else {
    return null;
  }
}
function Eh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null) {
      e = e.alternate;
      if (e !== null) {
        t = e.memoizedState;
      }
    }
    if (t !== null) {
      return t.dehydrated;
    }
  }
  return null;
}
function kc(e) {
  if (In(e) !== e) {
    throw Error(C(188));
  }
}
function qy(e) {
  var t = e.alternate;
  if (!t) {
    t = In(e);
    if (t === null) {
      throw Error(C(188));
    }
    if (t !== e) {
      return null;
    } else {
      return e;
    }
  }
  var n = e;
  var r = t;
  while (true) {
    var i = n.return;
    if (i === null) {
      break;
    }
    var s = i.alternate;
    if (s === null) {
      r = i.return;
      if (r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s;) {
        if (s === n) {
          kc(i);
          return e;
        }
        if (s === r) {
          kc(i);
          return t;
        }
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) {
      n = i;
      r = s;
    } else {
      var o = false;
      for (var l = i.child; l;) {
        if (l === n) {
          o = true;
          n = i;
          r = s;
          break;
        }
        if (l === r) {
          o = true;
          r = i;
          n = s;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l;) {
          if (l === n) {
            o = true;
            n = s;
            r = i;
            break;
          }
          if (l === r) {
            o = true;
            r = s;
            n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o) {
          throw Error(C(189));
        }
      }
    }
    if (n.alternate !== r) {
      throw Error(C(190));
    }
  }
  if (n.tag !== 3) {
    throw Error(C(188));
  }
  if (n.stateNode.current === n) {
    return e;
  } else {
    return t;
  }
}
function Mh(e) {
  e = qy(e);
  if (e !== null) {
    return Ah(e);
  } else {
    return null;
  }
}
function Ah(e) {
  if (e.tag === 5 || e.tag === 6) {
    return e;
  }
  for (e = e.child; e !== null;) {
    var t = Ah(e);
    if (t !== null) {
      return t;
    }
    e = e.sibling;
  }
  return null;
}
var Lh = He.unstable_scheduleCallback;
var jc = He.unstable_cancelCallback;
var Jy = He.unstable_shouldYield;
var e0 = He.unstable_requestPaint;
var te = He.unstable_now;
var t0 = He.unstable_getCurrentPriorityLevel;
var Jl = He.unstable_ImmediatePriority;
var Rh = He.unstable_UserBlockingPriority;
var Cs = He.unstable_NormalPriority;
var n0 = He.unstable_LowPriority;
var Dh = He.unstable_IdlePriority;
var ao = null;
var kt = null;
function r0(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function") {
    try {
      kt.onCommitFiberRoot(ao, e, undefined, (e.current.flags & 128) === 128);
    } catch {}
  }
}
var dt = Math.clz32 ? Math.clz32 : o0;
var i0 = Math.log;
var s0 = Math.LN2;
function o0(e) {
  e >>>= 0;
  if (e === 0) {
    return 32;
  } else {
    return 31 - (i0(e) / s0 | 0) | 0;
  }
}
var Fi = 64;
var zi = 4194304;
function Vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) {
    return 0;
  }
  var r = 0;
  var i = e.suspendedLanes;
  var s = e.pingedLanes;
  var o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    if (l !== 0) {
      r = Vr(l);
    } else {
      s &= o;
      if (s !== 0) {
        r = Vr(s);
      }
    }
  } else {
    o = n & ~i;
    if (o !== 0) {
      r = Vr(o);
    } else if (s !== 0) {
      r = Vr(s);
    }
  }
  if (r === 0) {
    return 0;
  }
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) {
    return t;
  }
  if (r & 4) {
    r |= n & 16;
  }
  t = e.entangledLanes;
  if (t !== 0) {
    e = e.entanglements;
    t &= r;
    while (t > 0) {
      n = 31 - dt(t);
      i = 1 << n;
      r |= e[n];
      t &= ~i;
    }
  }
  return r;
}
function a0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5000;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function l0(e, t) {
  var n = e.suspendedLanes;
  var r = e.pingedLanes;
  var i = e.expirationTimes;
  for (var s = e.pendingLanes; s > 0;) {
    var o = 31 - dt(s);
    var l = 1 << o;
    var u = i[o];
    if (u === -1) {
      if (!(l & n) || l & r) {
        i[o] = a0(l, t);
      }
    } else if (u <= t) {
      e.expiredLanes |= l;
    }
    s &= ~l;
  }
}
function Ba(e) {
  e = e.pendingLanes & -1073741825;
  if (e !== 0) {
    return e;
  } else if (e & 1073741824) {
    return 1073741824;
  } else {
    return 0;
  }
}
function Ih() {
  var e = Fi;
  Fi <<= 1;
  if (!(Fi & 4194240)) {
    Fi = 64;
  }
  return e;
}
function Vo(e) {
  var t = [];
  for (var n = 0; n < 31; n++) {
    t.push(e);
  }
  return t;
}
function Si(e, t, n) {
  e.pendingLanes |= t;
  if (t !== 536870912) {
    e.suspendedLanes = 0;
    e.pingedLanes = 0;
  }
  e = e.eventTimes;
  t = 31 - dt(t);
  e[t] = n;
}
function u0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t;
  e.suspendedLanes = 0;
  e.pingedLanes = 0;
  e.expiredLanes &= t;
  e.mutableReadLanes &= t;
  e.entangledLanes &= t;
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; n > 0;) {
    var i = 31 - dt(n);
    var s = 1 << i;
    t[i] = 0;
    r[i] = -1;
    e[i] = -1;
    n &= ~s;
  }
}
function eu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - dt(n);
    var i = 1 << r;
    if (i & t | e[r] & t) {
      e[r] |= t;
    }
    n &= ~i;
  }
}
var z = 0;
function Vh(e) {
  e &= -e;
  if (e > 1) {
    if (e > 4) {
      if (e & 268435455) {
        return 16;
      } else {
        return 536870912;
      }
    } else {
      return 4;
    }
  } else {
    return 1;
  }
}
var Bh;
var tu;
var Oh;
var Fh;
var zh;
var Oa = false;
var _i = [];
var Xt = null;
var Qt = null;
var Zt = null;
var ni = new Map();
var ri = new Map();
var Ut = [];
var c0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ri.delete(t.pointerId);
  }
}
function Tr(e, t, n, r, i, s) {
  if (e === null || e.nativeEvent !== s) {
    e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: s,
      targetContainers: [i]
    };
    if (t !== null) {
      t = Ci(t);
      if (t !== null) {
        tu(t);
      }
    }
    return e;
  } else {
    e.eventSystemFlags |= r;
    t = e.targetContainers;
    if (i !== null && t.indexOf(i) === -1) {
      t.push(i);
    }
    return e;
  }
}
function d0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      Xt = Tr(Xt, e, t, n, r, i);
      return true;
    case "dragenter":
      Qt = Tr(Qt, e, t, n, r, i);
      return true;
    case "mouseover":
      Zt = Tr(Zt, e, t, n, r, i);
      return true;
    case "pointerover":
      var s = i.pointerId;
      ni.set(s, Tr(ni.get(s) || null, e, t, n, r, i));
      return true;
    case "gotpointercapture":
      s = i.pointerId;
      ri.set(s, Tr(ri.get(s) || null, e, t, n, r, i));
      return true;
  }
  return false;
}
function _h(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      t = n.tag;
      if (t === 13) {
        t = Eh(n);
        if (t !== null) {
          e.blockedOn = t;
          zh(e.priority, function () {
            Oh(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ss(e) {
  if (e.blockedOn !== null) {
    return false;
  }
  for (var t = e.targetContainers; t.length > 0;) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ra = r;
      n.target.dispatchEvent(r);
      Ra = null;
    } else {
      t = Ci(n);
      if (t !== null) {
        tu(t);
      }
      e.blockedOn = n;
      return false;
    }
    t.shift();
  }
  return true;
}
function bc(e, t, n) {
  if (ss(e)) {
    n.delete(t);
  }
}
function f0() {
  Oa = false;
  if (Xt !== null && ss(Xt)) {
    Xt = null;
  }
  if (Qt !== null && ss(Qt)) {
    Qt = null;
  }
  if (Zt !== null && ss(Zt)) {
    Zt = null;
  }
  ni.forEach(bc);
  ri.forEach(bc);
}
function Pr(e, t) {
  if (e.blockedOn === t) {
    e.blockedOn = null;
    if (!Oa) {
      Oa = true;
      He.unstable_scheduleCallback(He.unstable_NormalPriority, f0);
    }
  }
}
function ii(e) {
  function t(i) {
    return Pr(i, e);
  }
  if (_i.length > 0) {
    Pr(_i[0], e);
    for (var n = 1; n < _i.length; n++) {
      var r = _i[n];
      if (r.blockedOn === e) {
        r.blockedOn = null;
      }
    }
  }
  if (Xt !== null) {
    Pr(Xt, e);
  }
  if (Qt !== null) {
    Pr(Qt, e);
  }
  if (Zt !== null) {
    Pr(Zt, e);
  }
  ni.forEach(t);
  ri.forEach(t);
  n = 0;
  for (; n < Ut.length; n++) {
    r = Ut[n];
    if (r.blockedOn === e) {
      r.blockedOn = null;
    }
  }
  while (Ut.length > 0 && (n = Ut[0], n.blockedOn === null)) {
    _h(n);
    if (n.blockedOn === null) {
      Ut.shift();
    }
  }
}
var ir = It.ReactCurrentBatchConfig;
var Ps = true;
function h0(e, t, n, r) {
  var i = z;
  var s = ir.transition;
  ir.transition = null;
  try {
    z = 1;
    nu(e, t, n, r);
  } finally {
    z = i;
    ir.transition = s;
  }
}
function p0(e, t, n, r) {
  var i = z;
  var s = ir.transition;
  ir.transition = null;
  try {
    z = 4;
    nu(e, t, n, r);
  } finally {
    z = i;
    ir.transition = s;
  }
}
function nu(e, t, n, r) {
  if (Ps) {
    var i = Fa(e, t, n, r);
    if (i === null) {
      Ko(e, t, r, Ns, n);
      Sc(e, r);
    } else if (d0(i, e, t, n, r)) {
      r.stopPropagation();
    } else {
      Sc(e, r);
      if (t & 4 && c0.indexOf(e) > -1) {
        while (i !== null) {
          var s = Ci(i);
          if (s !== null) {
            Bh(s);
          }
          s = Fa(e, t, n, r);
          if (s === null) {
            Ko(e, t, r, Ns, n);
          }
          if (s === i) {
            break;
          }
          i = s;
        }
        if (i !== null) {
          r.stopPropagation();
        }
      } else {
        Ko(e, t, r, null, n);
      }
    }
  }
}
var Ns = null;
function Fa(e, t, n, r) {
  Ns = null;
  e = ql(r);
  e = wn(e);
  if (e !== null) {
    t = In(e);
    if (t === null) {
      e = null;
    } else {
      n = t.tag;
      if (n === 13) {
        e = Eh(t);
        if (e !== null) {
          return e;
        }
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) {
          if (t.tag === 3) {
            return t.stateNode.containerInfo;
          } else {
            return null;
          }
        }
        e = null;
      } else if (t !== e) {
        e = null;
      }
    }
  }
  Ns = e;
  return null;
}
function Wh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (t0()) {
        case Jl:
          return 1;
        case Rh:
          return 4;
        case Cs:
        case n0:
          return 16;
        case Dh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null;
var ru = null;
var os = null;
function Uh() {
  if (os) {
    return os;
  }
  var e;
  var t = ru;
  var n = t.length;
  var r;
  var i = "value" in $t ? $t.value : $t.textContent;
  var s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return os = i.slice(e, r > 1 ? 1 - r : undefined);
}
function as(e) {
  var t = e.keyCode;
  if ("charCode" in e) {
    e = e.charCode;
    if (e === 0 && t === 13) {
      e = 13;
    }
  } else {
    e = t;
  }
  if (e === 10) {
    e = 13;
  }
  if (e >= 32 || e === 13) {
    return e;
  } else {
    return 0;
  }
}
function Wi() {
  return true;
}
function Cc() {
  return false;
}
function Ke(e) {
  function t(n, r, i, s, o) {
    this._reactName = n;
    this._targetInst = i;
    this.type = r;
    this.nativeEvent = s;
    this.target = o;
    this.currentTarget = null;
    for (var l in e) {
      if (e.hasOwnProperty(l)) {
        n = e[l];
        this[l] = n ? n(s) : s[l];
      }
    }
    this.isDefaultPrevented = s.defaultPrevented ?? s.returnValue === false ? Wi : Cc;
    this.isPropagationStopped = Cc;
    return this;
  }
  Z(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      if (n) {
        if (n.preventDefault) {
          n.preventDefault();
        } else if (typeof n.returnValue != "unknown") {
          n.returnValue = false;
        }
        this.isDefaultPrevented = Wi;
      }
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      if (n) {
        if (n.stopPropagation) {
          n.stopPropagation();
        } else if (typeof n.cancelBubble != "unknown") {
          n.cancelBubble = true;
        }
        this.isPropagationStopped = Wi;
      }
    },
    persist: function () {},
    isPersistent: Wi
  });
  return t;
}
var vr = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var iu = Ke(vr);
var bi = Z({}, vr, {
  view: 0,
  detail: 0
});
var m0 = Ke(bi);
var Bo;
var Oo;
var Nr;
var lo = Z({}, bi, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: su,
  button: 0,
  buttons: 0,
  relatedTarget: function (e) {
    if (e.relatedTarget === undefined) {
      if (e.fromElement === e.srcElement) {
        return e.toElement;
      } else {
        return e.fromElement;
      }
    } else {
      return e.relatedTarget;
    }
  },
  movementX: function (e) {
    if ("movementX" in e) {
      return e.movementX;
    } else {
      if (e !== Nr) {
        if (Nr && e.type === "mousemove") {
          Bo = e.screenX - Nr.screenX;
          Oo = e.screenY - Nr.screenY;
        } else {
          Oo = Bo = 0;
        }
        Nr = e;
      }
      return Bo;
    }
  },
  movementY: function (e) {
    if ("movementY" in e) {
      return e.movementY;
    } else {
      return Oo;
    }
  }
});
var Tc = Ke(lo);
var g0 = Z({}, lo, {
  dataTransfer: 0
});
var y0 = Ke(g0);
var v0 = Z({}, bi, {
  relatedTarget: 0
});
var Fo = Ke(v0);
var x0 = Z({}, vr, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var w0 = Ke(x0);
var k0 = Z({}, vr, {
  clipboardData: function (e) {
    if ("clipboardData" in e) {
      return e.clipboardData;
    } else {
      return window.clipboardData;
    }
  }
});
var j0 = Ke(k0);
var S0 = Z({}, vr, {
  data: 0
});
var Pc = Ke(S0);
var b0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var C0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var T0 = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function P0(e) {
  var t = this.nativeEvent;
  if (t.getModifierState) {
    return t.getModifierState(e);
  } else if (e = T0[e]) {
    return !!t[e];
  } else {
    return false;
  }
}
function su() {
  return P0;
}
var N0 = Z({}, bi, {
  key: function (e) {
    if (e.key) {
      var t = b0[e.key] || e.key;
      if (t !== "Unidentified") {
        return t;
      }
    }
    if (e.type === "keypress") {
      e = as(e);
      if (e === 13) {
        return "Enter";
      } else {
        return String.fromCharCode(e);
      }
    } else if (e.type === "keydown" || e.type === "keyup") {
      return C0[e.keyCode] || "Unidentified";
    } else {
      return "";
    }
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: su,
  charCode: function (e) {
    if (e.type === "keypress") {
      return as(e);
    } else {
      return 0;
    }
  },
  keyCode: function (e) {
    if (e.type === "keydown" || e.type === "keyup") {
      return e.keyCode;
    } else {
      return 0;
    }
  },
  which: function (e) {
    if (e.type === "keypress") {
      return as(e);
    } else if (e.type === "keydown" || e.type === "keyup") {
      return e.keyCode;
    } else {
      return 0;
    }
  }
});
var E0 = Ke(N0);
var M0 = Z({}, lo, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
});
var Nc = Ke(M0);
var A0 = Z({}, bi, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: su
});
var L0 = Ke(A0);
var R0 = Z({}, vr, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var D0 = Ke(R0);
var I0 = Z({}, lo, {
  deltaX: function (e) {
    if ("deltaX" in e) {
      return e.deltaX;
    } else if ("wheelDeltaX" in e) {
      return -e.wheelDeltaX;
    } else {
      return 0;
    }
  },
  deltaY: function (e) {
    if ("deltaY" in e) {
      return e.deltaY;
    } else if ("wheelDeltaY" in e) {
      return -e.wheelDeltaY;
    } else if ("wheelDelta" in e) {
      return -e.wheelDelta;
    } else {
      return 0;
    }
  },
  deltaZ: 0,
  deltaMode: 0
});
var V0 = Ke(I0);
var B0 = [9, 13, 27, 32];
var ou = At && "CompositionEvent" in window;
var _r = null;
if (At && "documentMode" in document) {
  _r = document.documentMode;
}
var O0 = At && "TextEvent" in window && !_r;
var Hh = At && (!ou || _r && _r > 8 && _r <= 11);
var Ec = " ";
var Mc = false;
function $h(e, t) {
  switch (e) {
    case "keyup":
      return B0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Kh(e) {
  e = e.detail;
  if (typeof e == "object" && "data" in e) {
    return e.data;
  } else {
    return null;
  }
}
var Wn = false;
function F0(e, t) {
  switch (e) {
    case "compositionend":
      return Kh(t);
    case "keypress":
      if (t.which !== 32) {
        return null;
      } else {
        Mc = true;
        return Ec;
      }
    case "textInput":
      e = t.data;
      if (e === Ec && Mc) {
        return null;
      } else {
        return e;
      }
    default:
      return null;
  }
}
function z0(e, t) {
  if (Wn) {
    if (e === "compositionend" || !ou && $h(e, t)) {
      e = Uh();
      os = ru = $t = null;
      Wn = false;
      return e;
    } else {
      return null;
    }
  }
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!t.ctrlKey && !t.altKey && !t.metaKey || t.ctrlKey && t.altKey) {
        if (t.char && t.char.length > 1) {
          return t.char;
        }
        if (t.which) {
          return String.fromCharCode(t.which);
        }
      }
      return null;
    case "compositionend":
      if (Hh && t.locale !== "ko") {
        return null;
      } else {
        return t.data;
      }
    default:
      return null;
  }
}
var _0 = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
function Ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  if (t === "input") {
    return !!_0[e.type];
  } else {
    return t === "textarea";
  }
}
function Gh(e, t, n, r) {
  bh(r);
  t = Es(t, "onChange");
  if (t.length > 0) {
    n = new iu("onChange", "change", null, n, r);
    e.push({
      event: n,
      listeners: t
    });
  }
}
var Wr = null;
var si = null;
function W0(e) {
  ip(e, 0);
}
function uo(e) {
  var t = $n(e);
  if (yh(t)) {
    return e;
  }
}
function U0(e, t) {
  if (e === "change") {
    return t;
  }
}
var Yh = false;
if (At) {
  var zo;
  if (At) {
    var _o = "oninput" in document;
    if (!_o) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;");
      _o = typeof Lc.oninput == "function";
    }
    zo = _o;
  } else {
    zo = false;
  }
  Yh = zo && (!document.documentMode || document.documentMode > 9);
}
function Rc() {
  if (Wr) {
    Wr.detachEvent("onpropertychange", Xh);
    si = Wr = null;
  }
}
function Xh(e) {
  if (e.propertyName === "value" && uo(si)) {
    var t = [];
    Gh(t, si, e, ql(e));
    Nh(W0, t);
  }
}
function H0(e, t, n) {
  if (e === "focusin") {
    Rc();
    Wr = t;
    si = n;
    Wr.attachEvent("onpropertychange", Xh);
  } else if (e === "focusout") {
    Rc();
  }
}
function $0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") {
    return uo(si);
  }
}
function K0(e, t) {
  if (e === "click") {
    return uo(t);
  }
}
function G0(e, t) {
  if (e === "input" || e === "change") {
    return uo(t);
  }
}
function Y0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : Y0;
function oi(e, t) {
  if (pt(e, t)) {
    return true;
  }
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
    return false;
  }
  var n = Object.keys(e);
  var r = Object.keys(t);
  if (n.length !== r.length) {
    return false;
  }
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ka.call(t, i) || !pt(e[i], t[i])) {
      return false;
    }
  }
  return true;
}
function Dc(e) {
  while (e && e.firstChild) {
    e = e.firstChild;
  }
  return e;
}
function Ic(e, t) {
  var n = Dc(e);
  e = 0;
  var r;
  for (; n;) {
    if (n.nodeType === 3) {
      r = e + n.textContent.length;
      if (e <= t && r >= t) {
        return {
          node: n,
          offset: t - e
        };
      }
      e = r;
    }
    e: {
      while (n) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = undefined;
    }
    n = Dc(n);
  }
}
function Qh(e, t) {
  if (e && t) {
    if (e === t) {
      return true;
    } else if (e && e.nodeType === 3) {
      return false;
    } else if (t && t.nodeType === 3) {
      return Qh(e, t.parentNode);
    } else if ("contains" in e) {
      return e.contains(t);
    } else if (e.compareDocumentPosition) {
      return !!(e.compareDocumentPosition(t) & 16);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function Zh() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) {
      e = t.contentWindow;
    } else {
      break;
    }
    t = js(e.document);
  }
  return t;
}
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function X0(e) {
  var t = Zh();
  var n = e.focusedElem;
  var r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qh(n.ownerDocument.documentElement, n)) {
    if (r !== null && au(n)) {
      t = r.start;
      e = r.end;
      if (e === undefined) {
        e = t;
      }
      if ("selectionStart" in n) {
        n.selectionStart = t;
        n.selectionEnd = Math.min(e, n.value.length);
      } else {
        e = (t = n.ownerDocument || document) && t.defaultView || window;
        if (e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length;
          var s = Math.min(r.start, i);
          r = r.end === undefined ? s : Math.min(r.end, i);
          if (!e.extend && s > r) {
            i = r;
            r = s;
            s = i;
          }
          i = Ic(n, s);
          var o = Ic(n, r);
          if (i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset)) {
            t = t.createRange();
            t.setStart(i.node, i.offset);
            e.removeAllRanges();
            if (s > r) {
              e.addRange(t);
              e.extend(o.node, o.offset);
            } else {
              t.setEnd(o.node, o.offset);
              e.addRange(t);
            }
          }
        }
      }
    }
    t = [];
    e = n;
    while (e = e.parentNode) {
      if (e.nodeType === 1) {
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
      }
    }
    if (typeof n.focus == "function") {
      n.focus();
    }
    n = 0;
    for (; n < t.length; n++) {
      e = t[n];
      e.element.scrollLeft = e.left;
      e.element.scrollTop = e.top;
    }
  }
}
var Q0 = At && "documentMode" in document && document.documentMode <= 11;
var Un = null;
var za = null;
var Ur = null;
var _a = false;
function Vc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  if (!_a && Un != null && Un === js(r)) {
    r = Un;
    if ("selectionStart" in r && au(r)) {
      r = {
        start: r.selectionStart,
        end: r.selectionEnd
      };
    } else {
      r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection();
      r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      };
    }
    if (!Ur || !oi(Ur, r)) {
      Ur = r;
      r = Es(za, "onSelect");
      if (r.length > 0) {
        t = new iu("onSelect", "select", null, t, n);
        e.push({
          event: t,
          listeners: r
        });
        t.target = Un;
      }
    }
  }
}
function Ui(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit" + e] = "webkit" + t;
  n["Moz" + e] = "moz" + t;
  return n;
}
var Hn = {
  animationend: Ui("Animation", "AnimationEnd"),
  animationiteration: Ui("Animation", "AnimationIteration"),
  animationstart: Ui("Animation", "AnimationStart"),
  transitionend: Ui("Transition", "TransitionEnd")
};
var Wo = {};
var qh = {};
if (At) {
  qh = document.createElement("div").style;
  if (!("AnimationEvent" in window)) {
    delete Hn.animationend.animation;
    delete Hn.animationiteration.animation;
    delete Hn.animationstart.animation;
  }
  if (!("TransitionEvent" in window)) {
    delete Hn.transitionend.transition;
  }
}
function co(e) {
  if (Wo[e]) {
    return Wo[e];
  }
  if (!Hn[e]) {
    return e;
  }
  var t = Hn[e];
  var n;
  for (n in t) {
    if (t.hasOwnProperty(n) && n in qh) {
      return Wo[e] = t[n];
    }
  }
  return e;
}
var Jh = co("animationend");
var ep = co("animationiteration");
var tp = co("animationstart");
var np = co("transitionend");
var rp = new Map();
var Bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  rp.set(e, t);
  Dn(t, [e]);
}
for (var Uo = 0; Uo < Bc.length; Uo++) {
  var Ho = Bc[Uo];
  var Z0 = Ho.toLowerCase();
  var q0 = Ho[0].toUpperCase() + Ho.slice(1);
  un(Z0, "on" + q0);
}
un(Jh, "onAnimationEnd");
un(ep, "onAnimationIteration");
un(tp, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(np, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var J0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
function Oc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n;
  Zy(r, t, undefined, e);
  e.currentTarget = null;
}
function ip(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    var i = r.event;
    r = r.listeners;
    e: {
      var s = undefined;
      if (t) {
        for (var o = r.length - 1; o >= 0; o--) {
          var l = r[o];
          var u = l.instance;
          var c = l.currentTarget;
          l = l.listener;
          if (u !== s && i.isPropagationStopped()) {
            break e;
          }
          Oc(i, l, c);
          s = u;
        }
      } else {
        for (o = 0; o < r.length; o++) {
          l = r[o];
          u = l.instance;
          c = l.currentTarget;
          l = l.listener;
          if (u !== s && i.isPropagationStopped()) {
            break e;
          }
          Oc(i, l, c);
          s = u;
        }
      }
    }
  }
  if (bs) {
    e = Va;
    bs = false;
    Va = null;
    throw e;
  }
}
function $(e, t) {
  var n = t[Ka];
  if (n === undefined) {
    n = t[Ka] = new Set();
  }
  var r = e + "__bubble";
  if (!n.has(r)) {
    sp(t, e, 2, false);
    n.add(r);
  }
}
function $o(e, t, n) {
  var r = 0;
  if (t) {
    r |= 4;
  }
  sp(n, e, r, t);
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Hi]) {
    e[Hi] = true;
    fh.forEach(function (n) {
      if (n !== "selectionchange") {
        if (!J0.has(n)) {
          $o(n, false, e);
        }
        $o(n, true, e);
      }
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    if (t !== null && !t[Hi]) {
      t[Hi] = true;
      $o("selectionchange", false, t);
    }
  }
}
function sp(e, t, n, r) {
  switch (Wh(t)) {
    case 1:
      var i = h0;
      break;
    case 4:
      i = p0;
      break;
    default:
      i = nu;
  }
  n = i.bind(null, t, n, e);
  i = undefined;
  if (!!Ia && (t === "touchstart" || t === "touchmove" || t === "wheel")) {
    i = true;
  }
  if (r) {
    if (i !== undefined) {
      e.addEventListener(t, n, {
        capture: true,
        passive: i
      });
    } else {
      e.addEventListener(t, n, true);
    }
  } else if (i !== undefined) {
    e.addEventListener(t, n, {
      passive: i
    });
  } else {
    e.addEventListener(t, n, false);
  }
}
function Ko(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) {
    e: while (true) {
      if (r === null) {
        return;
      }
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || l.nodeType === 8 && l.parentNode === i) {
          break;
        }
        if (o === 4) {
          for (o = r.return; o !== null;) {
            var u = o.tag;
            if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) {
              return;
            }
            o = o.return;
          }
        }
        while (l !== null) {
          o = wn(l);
          if (o === null) {
            return;
          }
          u = o.tag;
          if (u === 5 || u === 6) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  }
  Nh(function () {
    var c = s;
    var d = ql(n);
    var f = [];
    e: {
      var h = rp.get(e);
      if (h !== undefined) {
        var m = iu;
        var v = e;
        switch (e) {
          case "keypress":
            if (as(n) === 0) {
              break e;
            }
          case "keydown":
          case "keyup":
            m = E0;
            break;
          case "focusin":
            v = "focus";
            m = Fo;
            break;
          case "focusout":
            v = "blur";
            m = Fo;
            break;
          case "beforeblur":
          case "afterblur":
            m = Fo;
            break;
          case "click":
            if (n.button === 2) {
              break e;
            }
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Tc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = y0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = L0;
            break;
          case Jh:
          case ep:
          case tp:
            m = w0;
            break;
          case np:
            m = D0;
            break;
          case "scroll":
            m = m0;
            break;
          case "wheel":
            m = V0;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = j0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Nc;
        }
        var x = (t & 4) !== 0;
        var k = !x && e === "scroll";
        var g = x ? h !== null ? h + "Capture" : null : h;
        x = [];
        for (var p = c, y; p !== null;) {
          y = p;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null) {
            y = w;
            if (g !== null) {
              w = ti(p, g);
              if (w != null) {
                x.push(li(p, w, y));
              }
            }
          }
          if (k) {
            break;
          }
          p = p.return;
        }
        if (x.length > 0) {
          h = new m(h, v, null, n, d);
          f.push({
            event: h,
            listeners: x
          });
        }
      }
    }
    if (!(t & 7)) {
      e: {
        h = e === "mouseover" || e === "pointerover";
        m = e === "mouseout" || e === "pointerout";
        if (h && n !== Ra && (v = n.relatedTarget || n.fromElement) && (wn(v) || v[Lt])) {
          break e;
        }
        if ((m || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (v = n.relatedTarget || n.toElement, m = c, v = v ? wn(v) : null, v !== null && (k = In(v), v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = c), m !== v)) {
          x = Tc;
          w = "onMouseLeave";
          g = "onMouseEnter";
          p = "mouse";
          if (e === "pointerout" || e === "pointerover") {
            x = Nc;
            w = "onPointerLeave";
            g = "onPointerEnter";
            p = "pointer";
          }
          k = m == null ? h : $n(m);
          y = v == null ? h : $n(v);
          h = new x(w, p + "leave", m, n, d);
          h.target = k;
          h.relatedTarget = y;
          w = null;
          if (wn(d) === c) {
            x = new x(g, p + "enter", v, n, d);
            x.target = y;
            x.relatedTarget = k;
            w = x;
          }
          k = w;
          if (m && v) {
            t: {
              x = m;
              g = v;
              p = 0;
              y = x;
              for (; y; y = On(y)) {
                p++;
              }
              y = 0;
              w = g;
              for (; w; w = On(w)) {
                y++;
              }
              while (p - y > 0) {
                x = On(x);
                p--;
              }
              while (y - p > 0) {
                g = On(g);
                y--;
              }
              while (p--) {
                if (x === g || g !== null && x === g.alternate) {
                  break t;
                }
                x = On(x);
                g = On(g);
              }
              x = null;
            }
          } else {
            x = null;
          }
          if (m !== null) {
            Fc(f, h, m, x, false);
          }
          if (v !== null && k !== null) {
            Fc(f, k, v, x, true);
          }
        }
      }
      e: {
        h = c ? $n(c) : window;
        m = h.nodeName && h.nodeName.toLowerCase();
        if (m === "select" || m === "input" && h.type === "file") {
          var S = U0;
        } else if (Ac(h)) {
          if (Yh) {
            S = G0;
          } else {
            S = $0;
            var b = H0;
          }
        } else if ((m = h.nodeName) && m.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio")) {
          S = K0;
        }
        if (S &&= S(e, c)) {
          Gh(f, S, n, d);
          break e;
        }
        if (b) {
          b(e, h, c);
        }
        if (e === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number") {
          Na(h, "number", h.value);
        }
      }
      b = c ? $n(c) : window;
      switch (e) {
        case "focusin":
          if (Ac(b) || b.contentEditable === "true") {
            Un = b;
            za = c;
            Ur = null;
          }
          break;
        case "focusout":
          Ur = za = Un = null;
          break;
        case "mousedown":
          _a = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _a = false;
          Vc(f, n, d);
          break;
        case "selectionchange":
          if (Q0) {
            break;
          }
        case "keydown":
        case "keyup":
          Vc(f, n, d);
      }
      var P;
      if (ou) {
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = undefined;
        }
      } else if (Wn) {
        if ($h(e, n)) {
          T = "onCompositionEnd";
        }
      } else if (e === "keydown" && n.keyCode === 229) {
        T = "onCompositionStart";
      }
      if (T) {
        if (Hh && n.locale !== "ko") {
          if (Wn || T !== "onCompositionStart") {
            if (T === "onCompositionEnd" && Wn) {
              P = Uh();
            }
          } else {
            $t = d;
            ru = "value" in $t ? $t.value : $t.textContent;
            Wn = true;
          }
        }
        b = Es(c, T);
        if (b.length > 0) {
          T = new Pc(T, e, null, n, d);
          f.push({
            event: T,
            listeners: b
          });
          if (P) {
            T.data = P;
          } else {
            P = Kh(n);
            if (P !== null) {
              T.data = P;
            }
          }
        }
      }
      if (P = O0 ? F0(e, n) : z0(e, n)) {
        c = Es(c, "onBeforeInput");
        if (c.length > 0) {
          d = new Pc("onBeforeInput", "beforeinput", null, n, d);
          f.push({
            event: d,
            listeners: c
          });
          d.data = P;
        }
      }
    }
    ip(f, t);
  });
}
function li(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  };
}
function Es(e, t) {
  var n = t + "Capture";
  var r = [];
  for (; e !== null;) {
    var i = e;
    var s = i.stateNode;
    if (i.tag === 5 && s !== null) {
      i = s;
      s = ti(e, n);
      if (s != null) {
        r.unshift(li(e, s, i));
      }
      s = ti(e, t);
      if (s != null) {
        r.push(li(e, s, i));
      }
    }
    e = e.return;
  }
  return r;
}
function On(e) {
  if (e === null) {
    return null;
  }
  do {
    e = e.return;
  } while (e && e.tag !== 5);
  return e || null;
}
function Fc(e, t, n, r, i) {
  var s = t._reactName;
  var o = [];
  for (; n !== null && n !== r;) {
    var l = n;
    var u = l.alternate;
    var c = l.stateNode;
    if (u !== null && u === r) {
      break;
    }
    if (l.tag === 5 && c !== null) {
      l = c;
      if (i) {
        u = ti(n, s);
        if (u != null) {
          o.unshift(li(n, u, l));
        }
      } else if (!i) {
        u = ti(n, s);
        if (u != null) {
          o.push(li(n, u, l));
        }
      }
    }
    n = n.return;
  }
  if (o.length !== 0) {
    e.push({
      event: t,
      listeners: o
    });
  }
}
var ev = /\r\n?/g;
var tv = /\u0000|\uFFFD/g;
function zc(e) {
  return (typeof e == "string" ? e : "" + e).replace(ev, `
`).replace(tv, "");
}
function $i(e, t, n) {
  t = zc(t);
  if (zc(e) !== t && n) {
    throw Error(C(425));
  }
}
function Ms() {}
var Wa = null;
var Ua = null;
function Ha(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var $a = typeof setTimeout == "function" ? setTimeout : undefined;
var nv = typeof clearTimeout == "function" ? clearTimeout : undefined;
var _c = typeof Promise == "function" ? Promise : undefined;
var rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof _c !== "undefined" ? function (e) {
  return _c.resolve(null).then(e).catch(iv);
} : $a;
function iv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Go(e, t) {
  var n = t;
  var r = 0;
  do {
    var i = n.nextSibling;
    e.removeChild(n);
    if (i && i.nodeType === 8) {
      n = i.data;
      if (n === "/$") {
        if (r === 0) {
          e.removeChild(i);
          ii(t);
          return;
        }
        r--;
      } else if (n === "$" || n === "$?" || n === "$!") {
        r++;
      }
    }
    n = i;
  } while (n);
  ii(t);
}
function qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) {
      break;
    }
    if (t === 8) {
      t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        break;
      }
      if (t === "/$") {
        return null;
      }
    }
  }
  return e;
}
function Wc(e) {
  e = e.previousSibling;
  var t = 0;
  for (; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) {
          return e;
        }
        t--;
      } else if (n === "/$") {
        t++;
      }
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2);
var wt = "__reactFiber$" + xr;
var ui = "__reactProps$" + xr;
var Lt = "__reactContainer$" + xr;
var Ka = "__reactEvents$" + xr;
var sv = "__reactListeners$" + xr;
var ov = "__reactHandles$" + xr;
function wn(e) {
  var t = e[wt];
  if (t) {
    return t;
  }
  for (var n = e.parentNode; n;) {
    if (t = n[Lt] || n[wt]) {
      n = t.alternate;
      if (t.child !== null || n !== null && n.child !== null) {
        for (e = Wc(e); e !== null;) {
          if (n = e[wt]) {
            return n;
          }
          e = Wc(e);
        }
      }
      return t;
    }
    e = n;
    n = e.parentNode;
  }
  return null;
}
function Ci(e) {
  e = e[wt] || e[Lt];
  if (!e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) {
    return null;
  } else {
    return e;
  }
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) {
    return e.stateNode;
  }
  throw Error(C(33));
}
function fo(e) {
  return e[ui] || null;
}
var Ga = [];
var Kn = -1;
function cn(e) {
  return {
    current: e
  };
}
function G(e) {
  if (!(Kn < 0)) {
    e.current = Ga[Kn];
    Ga[Kn] = null;
    Kn--;
  }
}
function H(e, t) {
  Kn++;
  Ga[Kn] = e.current;
  e.current = t;
}
var on = {};
var je = cn(on);
var De = cn(false);
var En = on;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) {
    return on;
  }
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) {
    return r.__reactInternalMemoizedMaskedChildContext;
  }
  var i = {};
  var s;
  for (s in n) {
    i[s] = t[s];
  }
  if (r) {
    e = e.stateNode;
    e.__reactInternalMemoizedUnmaskedChildContext = t;
    e.__reactInternalMemoizedMaskedChildContext = i;
  }
  return i;
}
function Ie(e) {
  e = e.childContextTypes;
  return e != null;
}
function As() {
  G(De);
  G(je);
}
function Uc(e, t, n) {
  if (je.current !== on) {
    throw Error(C(168));
  }
  H(je, t);
  H(De, n);
}
function op(e, t, n) {
  var r = e.stateNode;
  t = t.childContextTypes;
  if (typeof r.getChildContext != "function") {
    return n;
  }
  r = r.getChildContext();
  for (var i in r) {
    if (!(i in t)) {
      throw Error(C(108, Hy(e) || "Unknown", i));
    }
  }
  return Z({}, n, r);
}
function Ls(e) {
  e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on;
  En = je.current;
  H(je, e);
  H(De, De.current);
  return true;
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (!r) {
    throw Error(C(169));
  }
  if (n) {
    e = op(e, t, En);
    r.__reactInternalMemoizedMergedChildContext = e;
    G(De);
    G(je);
    H(je, e);
  } else {
    G(De);
  }
  H(De, n);
}
var Tt = null;
var ho = false;
var Yo = false;
function ap(e) {
  if (Tt === null) {
    Tt = [e];
  } else {
    Tt.push(e);
  }
}
function av(e) {
  ho = true;
  ap(e);
}
function dn() {
  if (!Yo && Tt !== null) {
    Yo = true;
    var e = 0;
    var t = z;
    try {
      var n = Tt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(true);
        } while (r !== null);
      }
      Tt = null;
      ho = false;
    } catch (i) {
      if (Tt !== null) {
        Tt = Tt.slice(e + 1);
      }
      Lh(Jl, dn);
      throw i;
    } finally {
      z = t;
      Yo = false;
    }
  }
  return null;
}
var Gn = [];
var Yn = 0;
var Rs = null;
var Ds = 0;
var Xe = [];
var Qe = 0;
var Mn = null;
var Pt = 1;
var Nt = "";
function yn(e, t) {
  Gn[Yn++] = Ds;
  Gn[Yn++] = Rs;
  Rs = e;
  Ds = t;
}
function lp(e, t, n) {
  Xe[Qe++] = Pt;
  Xe[Qe++] = Nt;
  Xe[Qe++] = Mn;
  Mn = e;
  var r = Pt;
  e = Nt;
  var i = 32 - dt(r) - 1;
  r &= ~(1 << i);
  n += 1;
  var s = 32 - dt(t) + i;
  if (s > 30) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32);
    r >>= o;
    i -= o;
    Pt = 1 << 32 - dt(t) + i | n << i | r;
    Nt = s + e;
  } else {
    Pt = 1 << s | n << i | r;
    Nt = e;
  }
}
function lu(e) {
  if (e.return !== null) {
    yn(e, 1);
    lp(e, 1, 0);
  }
}
function uu(e) {
  while (e === Rs) {
    Rs = Gn[--Yn];
    Gn[Yn] = null;
    Ds = Gn[--Yn];
    Gn[Yn] = null;
  }
  while (e === Mn) {
    Mn = Xe[--Qe];
    Xe[Qe] = null;
    Nt = Xe[--Qe];
    Xe[Qe] = null;
    Pt = Xe[--Qe];
    Xe[Qe] = null;
  }
}
var We = null;
var _e = null;
var Y = false;
var ct = null;
function up(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED";
  n.stateNode = t;
  n.return = e;
  t = e.deletions;
  if (t === null) {
    e.deletions = [n];
    e.flags |= 16;
  } else {
    t.push(n);
  }
}
function $c(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t;
      if (t !== null) {
        e.stateNode = t;
        We = e;
        _e = qt(t.firstChild);
        return true;
      } else {
        return false;
      }
    case 6:
      t = e.pendingProps === "" || t.nodeType !== 3 ? null : t;
      if (t !== null) {
        e.stateNode = t;
        We = e;
        _e = null;
        return true;
      } else {
        return false;
      }
    case 13:
      t = t.nodeType !== 8 ? null : t;
      if (t !== null) {
        n = Mn !== null ? {
          id: Pt,
          overflow: Nt
        } : null;
        e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        };
        n = Ze(18, null, null, 0);
        n.stateNode = t;
        n.return = e;
        e.child = n;
        We = e;
        _e = null;
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}
function Ya(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xa(e) {
  if (Y) {
    var t = _e;
    if (t) {
      var n = t;
      if (!$c(e, t)) {
        if (Ya(e)) {
          throw Error(C(418));
        }
        t = qt(n.nextSibling);
        var r = We;
        if (t && $c(e, t)) {
          up(r, n);
        } else {
          e.flags = e.flags & -4097 | 2;
          Y = false;
          We = e;
        }
      }
    } else {
      if (Ya(e)) {
        throw Error(C(418));
      }
      e.flags = e.flags & -4097 | 2;
      Y = false;
      We = e;
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) {
    e = e.return;
  }
  We = e;
}
function Ki(e) {
  if (e !== We) {
    return false;
  }
  if (!Y) {
    Kc(e);
    Y = true;
    return false;
  }
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5)) {
    t = e.type;
    t = t !== "head" && t !== "body" && !Ha(e.type, e.memoizedProps);
  }
  if (t &&= _e) {
    if (Ya(e)) {
      cp();
      throw Error(C(418));
    }
    while (t) {
      up(e, t);
      t = qt(t.nextSibling);
    }
  }
  Kc(e);
  if (e.tag === 13) {
    e = e.memoizedState;
    e = e !== null ? e.dehydrated : null;
    if (!e) {
      throw Error(C(317));
    }
    e: {
      e = e.nextSibling;
      t = 0;
      while (e) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = qt(e.nextSibling);
              break e;
            }
            t--;
          } else if (n === "$" || n === "$!" || n === "$?") {
            t++;
          }
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else {
    _e = We ? qt(e.stateNode.nextSibling) : null;
  }
  return true;
}
function cp() {
  for (var e = _e; e;) {
    e = qt(e.nextSibling);
  }
}
function ur() {
  _e = We = null;
  Y = false;
}
function cu(e) {
  if (ct === null) {
    ct = [e];
  } else {
    ct.push(e);
  }
}
var lv = It.ReactCurrentBatchConfig;
function Er(e, t, n) {
  e = n.ref;
  if (e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      n = n._owner;
      if (n) {
        if (n.tag !== 1) {
          throw Error(C(309));
        }
        var r = n.stateNode;
      }
      if (!r) {
        throw Error(C(147, e));
      }
      var i = r;
      var s = "" + e;
      if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s) {
        return t.ref;
      } else {
        t = function (o) {
          var l = i.refs;
          if (o === null) {
            delete l[s];
          } else {
            l[s] = o;
          }
        };
        t._stringRef = s;
        return t;
      }
    }
    if (typeof e != "string") {
      throw Error(C(284));
    }
    if (!n._owner) {
      throw Error(C(290, e));
    }
  }
  return e;
}
function Gi(e, t) {
  e = Object.prototype.toString.call(t);
  throw Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Gc(e) {
  var t = e._init;
  return t(e._payload);
}
function dp(e) {
  function t(g, p) {
    if (e) {
      var y = g.deletions;
      if (y === null) {
        g.deletions = [p];
        g.flags |= 16;
      } else {
        y.push(p);
      }
    }
  }
  function n(g, p) {
    if (!e) {
      return null;
    }
    while (p !== null) {
      t(g, p);
      p = p.sibling;
    }
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null;) {
      if (p.key !== null) {
        g.set(p.key, p);
      } else {
        g.set(p.index, p);
      }
      p = p.sibling;
    }
    return g;
  }
  function i(g, p) {
    g = nn(g, p);
    g.index = 0;
    g.sibling = null;
    return g;
  }
  function s(g, p, y) {
    g.index = y;
    if (e) {
      y = g.alternate;
      if (y !== null) {
        y = y.index;
        if (y < p) {
          g.flags |= 2;
          return p;
        } else {
          return y;
        }
      } else {
        g.flags |= 2;
        return p;
      }
    } else {
      g.flags |= 1048576;
      return p;
    }
  }
  function o(g) {
    if (e && g.alternate === null) {
      g.flags |= 2;
    }
    return g;
  }
  function l(g, p, y, w) {
    if (p === null || p.tag !== 6) {
      p = ta(y, g.mode, w);
      p.return = g;
      return p;
    } else {
      p = i(p, y);
      p.return = g;
      return p;
    }
  }
  function u(g, p, y, w) {
    var S = y.type;
    if (S === _n) {
      return d(g, p, y.props.children, w, y.key);
    } else if (p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === _t && Gc(S) === p.type)) {
      w = i(p, y.props);
      w.ref = Er(g, p, y);
      w.return = g;
      return w;
    } else {
      w = ps(y.type, y.key, y.props, null, g.mode, w);
      w.ref = Er(g, p, y);
      w.return = g;
      return w;
    }
  }
  function c(g, p, y, w) {
    if (p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation) {
      p = na(y, g.mode, w);
      p.return = g;
      return p;
    } else {
      p = i(p, y.children || []);
      p.return = g;
      return p;
    }
  }
  function d(g, p, y, w, S) {
    if (p === null || p.tag !== 7) {
      p = Tn(y, g.mode, w, S);
      p.return = g;
      return p;
    } else {
      p = i(p, y);
      p.return = g;
      return p;
    }
  }
  function f(g, p, y) {
    if (typeof p == "string" && p !== "" || typeof p == "number") {
      p = ta("" + p, g.mode, y);
      p.return = g;
      return p;
    }
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Vi:
          y = ps(p.type, p.key, p.props, null, g.mode, y);
          y.ref = Er(g, null, p);
          y.return = g;
          return y;
        case zn:
          p = na(p, g.mode, y);
          p.return = g;
          return p;
        case _t:
          var w = p._init;
          return f(g, w(p._payload), y);
      }
      if (Ir(p) || br(p)) {
        p = Tn(p, g.mode, y, null);
        p.return = g;
        return p;
      }
      Gi(g, p);
    }
    return null;
  }
  function h(g, p, y, w) {
    var S = p !== null ? p.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") {
      if (S !== null) {
        return null;
      } else {
        return l(g, p, "" + y, w);
      }
    }
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Vi:
          if (y.key === S) {
            return u(g, p, y, w);
          } else {
            return null;
          }
        case zn:
          if (y.key === S) {
            return c(g, p, y, w);
          } else {
            return null;
          }
        case _t:
          S = y._init;
          return h(g, p, S(y._payload), w);
      }
      if (Ir(y) || br(y)) {
        if (S !== null) {
          return null;
        } else {
          return d(g, p, y, w, null);
        }
      }
      Gi(g, y);
    }
    return null;
  }
  function m(g, p, y, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") {
      g = g.get(y) || null;
      return l(p, g, "" + w, S);
    }
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vi:
          g = g.get(w.key === null ? y : w.key) || null;
          return u(p, g, w, S);
        case zn:
          g = g.get(w.key === null ? y : w.key) || null;
          return c(p, g, w, S);
        case _t:
          var b = w._init;
          return m(g, p, y, b(w._payload), S);
      }
      if (Ir(w) || br(w)) {
        g = g.get(y) || null;
        return d(p, g, w, S, null);
      }
      Gi(p, w);
    }
    return null;
  }
  function v(g, p, y, w) {
    var S = null;
    var b = null;
    for (var P = p, T = p = 0, V = null; P !== null && T < y.length; T++) {
      if (P.index > T) {
        V = P;
        P = null;
      } else {
        V = P.sibling;
      }
      var N = h(g, P, y[T], w);
      if (N === null) {
        if (P === null) {
          P = V;
        }
        break;
      }
      if (e && P && N.alternate === null) {
        t(g, P);
      }
      p = s(N, p, T);
      if (b === null) {
        S = N;
      } else {
        b.sibling = N;
      }
      b = N;
      P = V;
    }
    if (T === y.length) {
      n(g, P);
      if (Y) {
        yn(g, T);
      }
      return S;
    }
    if (P === null) {
      for (; T < y.length; T++) {
        P = f(g, y[T], w);
        if (P !== null) {
          p = s(P, p, T);
          if (b === null) {
            S = P;
          } else {
            b.sibling = P;
          }
          b = P;
        }
      }
      if (Y) {
        yn(g, T);
      }
      return S;
    }
    for (P = r(g, P); T < y.length; T++) {
      V = m(P, g, T, y[T], w);
      if (V !== null) {
        if (e && V.alternate !== null) {
          P.delete(V.key === null ? T : V.key);
        }
        p = s(V, p, T);
        if (b === null) {
          S = V;
        } else {
          b.sibling = V;
        }
        b = V;
      }
    }
    if (e) {
      P.forEach(function (O) {
        return t(g, O);
      });
    }
    if (Y) {
      yn(g, T);
    }
    return S;
  }
  function x(g, p, y, w) {
    var S = br(y);
    if (typeof S != "function") {
      throw Error(C(150));
    }
    y = S.call(y);
    if (y == null) {
      throw Error(C(151));
    }
    var b = S = null;
    for (var P = p, T = p = 0, V = null, N = y.next(); P !== null && !N.done; T++, N = y.next()) {
      if (P.index > T) {
        V = P;
        P = null;
      } else {
        V = P.sibling;
      }
      var O = h(g, P, N.value, w);
      if (O === null) {
        if (P === null) {
          P = V;
        }
        break;
      }
      if (e && P && O.alternate === null) {
        t(g, P);
      }
      p = s(O, p, T);
      if (b === null) {
        S = O;
      } else {
        b.sibling = O;
      }
      b = O;
      P = V;
    }
    if (N.done) {
      n(g, P);
      if (Y) {
        yn(g, T);
      }
      return S;
    }
    if (P === null) {
      for (; !N.done; T++, N = y.next()) {
        N = f(g, N.value, w);
        if (N !== null) {
          p = s(N, p, T);
          if (b === null) {
            S = N;
          } else {
            b.sibling = N;
          }
          b = N;
        }
      }
      if (Y) {
        yn(g, T);
      }
      return S;
    }
    for (P = r(g, P); !N.done; T++, N = y.next()) {
      N = m(P, g, T, N.value, w);
      if (N !== null) {
        if (e && N.alternate !== null) {
          P.delete(N.key === null ? T : N.key);
        }
        p = s(N, p, T);
        if (b === null) {
          S = N;
        } else {
          b.sibling = N;
        }
        b = N;
      }
    }
    if (e) {
      P.forEach(function (ne) {
        return t(g, ne);
      });
    }
    if (Y) {
      yn(g, T);
    }
    return S;
  }
  function k(g, p, y, w) {
    if (typeof y == "object" && y !== null && y.type === _n && y.key === null) {
      y = y.props.children;
    }
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Vi:
          e: {
            var S = y.key;
            for (var b = p; b !== null;) {
              if (b.key === S) {
                S = y.type;
                if (S === _n) {
                  if (b.tag === 7) {
                    n(g, b.sibling);
                    p = i(b, y.props.children);
                    p.return = g;
                    g = p;
                    break e;
                  }
                } else if (b.elementType === S || typeof S == "object" && S !== null && S.$$typeof === _t && Gc(S) === b.type) {
                  n(g, b.sibling);
                  p = i(b, y.props);
                  p.ref = Er(g, b, y);
                  p.return = g;
                  g = p;
                  break e;
                }
                n(g, b);
                break;
              } else {
                t(g, b);
              }
              b = b.sibling;
            }
            if (y.type === _n) {
              p = Tn(y.props.children, g.mode, w, y.key);
              p.return = g;
              g = p;
            } else {
              w = ps(y.type, y.key, y.props, null, g.mode, w);
              w.ref = Er(g, p, y);
              w.return = g;
              g = w;
            }
          }
          return o(g);
        case zn:
          e: {
            for (b = y.key; p !== null;) {
              if (p.key === b) {
                if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                  n(g, p.sibling);
                  p = i(p, y.children || []);
                  p.return = g;
                  g = p;
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              } else {
                t(g, p);
              }
              p = p.sibling;
            }
            p = na(y, g.mode, w);
            p.return = g;
            g = p;
          }
          return o(g);
        case _t:
          b = y._init;
          return k(g, p, b(y._payload), w);
      }
      if (Ir(y)) {
        return v(g, p, y, w);
      }
      if (br(y)) {
        return x(g, p, y, w);
      }
      Gi(g, y);
    }
    if (typeof y == "string" && y !== "" || typeof y == "number") {
      y = "" + y;
      if (p !== null && p.tag === 6) {
        n(g, p.sibling);
        p = i(p, y);
        p.return = g;
        g = p;
      } else {
        n(g, p);
        p = ta(y, g.mode, w);
        p.return = g;
        g = p;
      }
      return o(g);
    } else {
      return n(g, p);
    }
  }
  return k;
}
var cr = dp(true);
var fp = dp(false);
var Is = cn(null);
var Vs = null;
var Xn = null;
var du = null;
function fu() {
  du = Xn = Vs = null;
}
function hu(e) {
  var t = Is.current;
  G(Is);
  e._currentValue = t;
}
function Qa(e, t, n) {
  while (e !== null) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t) {
      e.childLanes |= t;
      if (r !== null) {
        r.childLanes |= t;
      }
    } else if (r !== null && (r.childLanes & t) !== t) {
      r.childLanes |= t;
    }
    if (e === n) {
      break;
    }
    e = e.return;
  }
}
function sr(e, t) {
  Vs = e;
  du = Xn = null;
  e = e.dependencies;
  if (e !== null && e.firstContext !== null) {
    if (e.lanes & t) {
      Re = true;
    }
    e.firstContext = null;
  }
}
function nt(e) {
  var t = e._currentValue;
  if (du !== e) {
    e = {
      context: e,
      memoizedValue: t,
      next: null
    };
    if (Xn === null) {
      if (Vs === null) {
        throw Error(C(308));
      }
      Xn = e;
      Vs.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else {
      Xn = Xn.next = e;
    }
  }
  return t;
}
var kn = null;
function pu(e) {
  if (kn === null) {
    kn = [e];
  } else {
    kn.push(e);
  }
}
function hp(e, t, n, r) {
  var i = t.interleaved;
  if (i === null) {
    n.next = n;
    pu(t);
  } else {
    n.next = i.next;
    i.next = n;
  }
  t.interleaved = n;
  return Rt(e, r);
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  if (n !== null) {
    n.lanes |= t;
  }
  n = e;
  e = e.return;
  while (e !== null) {
    e.childLanes |= t;
    n = e.alternate;
    if (n !== null) {
      n.childLanes |= t;
    }
    n = e;
    e = e.return;
  }
  if (n.tag === 3) {
    return n.stateNode;
  } else {
    return null;
  }
}
var Wt = false;
function mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function pp(e, t) {
  e = e.updateQueue;
  if (t.updateQueue === e) {
    t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    };
  }
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) {
    return null;
  }
  r = r.shared;
  if (F & 2) {
    var i = r.pending;
    if (i === null) {
      t.next = t;
    } else {
      t.next = i.next;
      i.next = t;
    }
    r.pending = t;
    return Rt(e, n);
  }
  i = r.interleaved;
  if (i === null) {
    t.next = t;
    pu(r);
  } else {
    t.next = i.next;
    i.next = t;
  }
  r.interleaved = t;
  return Rt(e, n);
}
function ls(e, t, n) {
  t = t.updateQueue;
  if (t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes;
    n |= r;
    t.lanes = n;
    eu(e, n);
  }
}
function Yc(e, t) {
  var n = e.updateQueue;
  var r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null;
    var s = null;
    n = n.firstBaseUpdate;
    if (n !== null) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        if (s === null) {
          i = s = o;
        } else {
          s = s.next = o;
        }
        n = n.next;
      } while (n !== null);
      if (s === null) {
        i = s = t;
      } else {
        s = s.next = t;
      }
    } else {
      i = s = t;
    }
    n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects
    };
    e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate;
  if (e === null) {
    n.firstBaseUpdate = t;
  } else {
    e.next = t;
  }
  n.lastBaseUpdate = t;
}
function Bs(e, t, n, r) {
  var i = e.updateQueue;
  Wt = false;
  var s = i.firstBaseUpdate;
  var o = i.lastBaseUpdate;
  var l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l;
    var c = u.next;
    u.next = null;
    if (o === null) {
      s = c;
    } else {
      o.next = c;
    }
    o = u;
    var d = e.alternate;
    if (d !== null) {
      d = d.updateQueue;
      l = d.lastBaseUpdate;
      if (l !== o) {
        if (l === null) {
          d.firstBaseUpdate = c;
        } else {
          l.next = c;
        }
        d.lastBaseUpdate = u;
      }
    }
  }
  if (s !== null) {
    var f = i.baseState;
    o = 0;
    d = c = u = null;
    l = s;
    do {
      var h = l.lane;
      var m = l.eventTime;
      if ((r & h) === h) {
        if (d !== null) {
          d = d.next = {
            eventTime: m,
            lane: 0,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null
          };
        }
        e: {
          var v = e;
          var x = l;
          h = t;
          m = n;
          switch (x.tag) {
            case 1:
              v = x.payload;
              if (typeof v == "function") {
                f = v.call(m, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              v = x.payload;
              h = typeof v == "function" ? v.call(m, f, h) : v;
              if (h == null) {
                break e;
              }
              f = Z({}, f, h);
              break e;
            case 2:
              Wt = true;
          }
        }
        if (l.callback !== null && l.lane !== 0) {
          e.flags |= 64;
          h = i.effects;
          if (h === null) {
            i.effects = [l];
          } else {
            h.push(l);
          }
        }
      } else {
        m = {
          eventTime: m,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        };
        if (d === null) {
          c = d = m;
          u = f;
        } else {
          d = d.next = m;
        }
        o |= h;
      }
      l = l.next;
      if (l === null) {
        l = i.shared.pending;
        if (l === null) {
          break;
        }
        h = l;
        l = h.next;
        h.next = null;
        i.lastBaseUpdate = h;
        i.shared.pending = null;
      }
    } while (true);
    if (d === null) {
      u = f;
    }
    i.baseState = u;
    i.firstBaseUpdate = c;
    i.lastBaseUpdate = d;
    t = i.shared.interleaved;
    if (t !== null) {
      i = t;
      do {
        o |= i.lane;
        i = i.next;
      } while (i !== t);
    } else if (s === null) {
      i.shared.lanes = 0;
    }
    Ln |= o;
    e.lanes = o;
    e.memoizedState = f;
  }
}
function Xc(e, t, n) {
  e = t.effects;
  t.effects = null;
  if (e !== null) {
    for (t = 0; t < e.length; t++) {
      var r = e[t];
      var i = r.callback;
      if (i !== null) {
        r.callback = null;
        r = n;
        if (typeof i != "function") {
          throw Error(C(191, i));
        }
        i.call(r);
      }
    }
  }
}
var Ti = {};
var jt = cn(Ti);
var ci = cn(Ti);
var di = cn(Ti);
function jn(e) {
  if (e === Ti) {
    throw Error(C(174));
  }
  return e;
}
function gu(e, t) {
  H(di, t);
  H(ci, e);
  H(jt, Ti);
  e = t.nodeType;
  switch (e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t;
      t = e.namespaceURI || null;
      e = e.tagName;
      t = Ma(t, e);
  }
  G(jt);
  H(jt, t);
}
function dr() {
  G(jt);
  G(ci);
  G(di);
}
function mp(e) {
  jn(di.current);
  var t = jn(jt.current);
  var n = Ma(t, e.type);
  if (t !== n) {
    H(ci, e);
    H(jt, n);
  }
}
function yu(e) {
  if (ci.current === e) {
    G(jt);
    G(ci);
  }
}
var X = cn(0);
function Os(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) {
        return t;
      }
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== undefined) {
      if (t.flags & 128) {
        return t;
      }
    } else if (t.child !== null) {
      t.child.return = t;
      t = t.child;
      continue;
    }
    if (t === e) {
      break;
    }
    while (t.sibling === null) {
      if (t.return === null || t.return === e) {
        return null;
      }
      t = t.return;
    }
    t.sibling.return = t.return;
    t = t.sibling;
  }
  return null;
}
var Xo = [];
function vu() {
  for (var e = 0; e < Xo.length; e++) {
    Xo[e]._workInProgressVersionPrimary = null;
  }
  Xo.length = 0;
}
var us = It.ReactCurrentDispatcher;
var Qo = It.ReactCurrentBatchConfig;
var An = 0;
var Q = null;
var ae = null;
var de = null;
var Fs = false;
var Hr = false;
var fi = 0;
var uv = 0;
function xe() {
  throw Error(C(321));
}
function xu(e, t) {
  if (t === null) {
    return false;
  }
  for (var n = 0; n < t.length && n < e.length; n++) {
    if (!pt(e[n], t[n])) {
      return false;
    }
  }
  return true;
}
function wu(e, t, n, r, i, s) {
  An = s;
  Q = t;
  t.memoizedState = null;
  t.updateQueue = null;
  t.lanes = 0;
  us.current = e === null || e.memoizedState === null ? hv : pv;
  e = n(r, i);
  if (Hr) {
    s = 0;
    do {
      Hr = false;
      fi = 0;
      if (s >= 25) {
        throw Error(C(301));
      }
      s += 1;
      de = ae = null;
      t.updateQueue = null;
      us.current = mv;
      e = n(r, i);
    } while (Hr);
  }
  us.current = zs;
  t = ae !== null && ae.next !== null;
  An = 0;
  de = ae = Q = null;
  Fs = false;
  if (t) {
    throw Error(C(300));
  }
  return e;
}
function ku() {
  var e = fi !== 0;
  fi = 0;
  return e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  if (de === null) {
    Q.memoizedState = de = e;
  } else {
    de = de.next = e;
  }
  return de;
}
function rt() {
  if (ae === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else {
    e = ae.next;
  }
  var t = de === null ? Q.memoizedState : de.next;
  if (t !== null) {
    de = t;
    ae = e;
  } else {
    if (e === null) {
      throw Error(C(310));
    }
    ae = e;
    e = {
      memoizedState: ae.memoizedState,
      baseState: ae.baseState,
      baseQueue: ae.baseQueue,
      queue: ae.queue,
      next: null
    };
    if (de === null) {
      Q.memoizedState = de = e;
    } else {
      de = de.next = e;
    }
  }
  return de;
}
function hi(e, t) {
  if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
function Zo(e) {
  var t = rt();
  var n = t.queue;
  if (n === null) {
    throw Error(C(311));
  }
  n.lastRenderedReducer = e;
  var r = ae;
  var i = r.baseQueue;
  var s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next;
      s.next = o;
    }
    r.baseQueue = i = s;
    n.pending = null;
  }
  if (i !== null) {
    s = i.next;
    r = r.baseState;
    var l = o = null;
    var u = null;
    var c = s;
    do {
      var d = c.lane;
      if ((An & d) === d) {
        if (u !== null) {
          u = u.next = {
            lane: 0,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null
          };
        }
        r = c.hasEagerState ? c.eagerState : e(r, c.action);
      } else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        if (u === null) {
          l = u = f;
          o = r;
        } else {
          u = u.next = f;
        }
        Q.lanes |= d;
        Ln |= d;
      }
      c = c.next;
    } while (c !== null && c !== s);
    if (u === null) {
      o = r;
    } else {
      u.next = l;
    }
    if (!pt(r, t.memoizedState)) {
      Re = true;
    }
    t.memoizedState = r;
    t.baseState = o;
    t.baseQueue = u;
    n.lastRenderedState = r;
  }
  e = n.interleaved;
  if (e !== null) {
    i = e;
    do {
      s = i.lane;
      Q.lanes |= s;
      Ln |= s;
      i = i.next;
    } while (i !== e);
  } else if (i === null) {
    n.lanes = 0;
  }
  return [t.memoizedState, n.dispatch];
}
function qo(e) {
  var t = rt();
  var n = t.queue;
  if (n === null) {
    throw Error(C(311));
  }
  n.lastRenderedReducer = e;
  var r = n.dispatch;
  var i = n.pending;
  var s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do {
      s = e(s, o.action);
      o = o.next;
    } while (o !== i);
    if (!pt(s, t.memoizedState)) {
      Re = true;
    }
    t.memoizedState = s;
    if (t.baseQueue === null) {
      t.baseState = s;
    }
    n.lastRenderedState = s;
  }
  return [s, r];
}
function gp() {}
function yp(e, t) {
  var n = Q;
  var r = rt();
  var i = t();
  var s = !pt(r.memoizedState, i);
  if (s) {
    r.memoizedState = i;
    Re = true;
  }
  r = r.queue;
  ju(wp.bind(null, n, r, e), [e]);
  if (r.getSnapshot !== t || s || de !== null && de.memoizedState.tag & 1) {
    n.flags |= 2048;
    pi(9, xp.bind(null, n, r, i, t), undefined, null);
    if (fe === null) {
      throw Error(C(349));
    }
    if (!(An & 30)) {
      vp(n, t, i);
    }
  }
  return i;
}
function vp(e, t, n) {
  e.flags |= 16384;
  e = {
    getSnapshot: t,
    value: n
  };
  t = Q.updateQueue;
  if (t === null) {
    t = {
      lastEffect: null,
      stores: null
    };
    Q.updateQueue = t;
    t.stores = [e];
  } else {
    n = t.stores;
    if (n === null) {
      t.stores = [e];
    } else {
      n.push(e);
    }
  }
}
function xp(e, t, n, r) {
  t.value = n;
  t.getSnapshot = r;
  if (kp(t)) {
    jp(e);
  }
}
function wp(e, t, n) {
  return n(function () {
    if (kp(t)) {
      jp(e);
    }
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return true;
  }
}
function jp(e) {
  var t = Rt(e, 1);
  if (t !== null) {
    ft(t, e, 1, -1);
  }
}
function Qc(e) {
  var t = yt();
  if (typeof e == "function") {
    e = e();
  }
  t.memoizedState = t.baseState = e;
  e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: hi,
    lastRenderedState: e
  };
  t.queue = e;
  e = e.dispatch = fv.bind(null, Q, e);
  return [t.memoizedState, e];
}
function pi(e, t, n, r) {
  e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  };
  t = Q.updateQueue;
  if (t === null) {
    t = {
      lastEffect: null,
      stores: null
    };
    Q.updateQueue = t;
    t.lastEffect = e.next = e;
  } else {
    n = t.lastEffect;
    if (n === null) {
      t.lastEffect = e.next = e;
    } else {
      r = n.next;
      n.next = e;
      e.next = r;
      t.lastEffect = e;
    }
  }
  return e;
}
function Sp() {
  return rt().memoizedState;
}
function cs(e, t, n, r) {
  var i = yt();
  Q.flags |= e;
  i.memoizedState = pi(t | 1, n, undefined, r === undefined ? null : r);
}
function po(e, t, n, r) {
  var i = rt();
  r = r === undefined ? null : r;
  var s = undefined;
  if (ae !== null) {
    var o = ae.memoizedState;
    s = o.destroy;
    if (r !== null && xu(r, o.deps)) {
      i.memoizedState = pi(t, n, s, r);
      return;
    }
  }
  Q.flags |= e;
  i.memoizedState = pi(t | 1, n, s, r);
}
function Zc(e, t) {
  return cs(8390656, 8, e, t);
}
function ju(e, t) {
  return po(2048, 8, e, t);
}
function bp(e, t) {
  return po(4, 2, e, t);
}
function Cp(e, t) {
  return po(4, 4, e, t);
}
function Tp(e, t) {
  if (typeof t == "function") {
    e = e();
    t(e);
    return function () {
      t(null);
    };
  }
  if (t != null) {
    e = e();
    t.current = e;
    return function () {
      t.current = null;
    };
  }
}
function Pp(e, t, n) {
  n = n != null ? n.concat([e]) : null;
  return po(4, 4, Tp.bind(null, t, e), n);
}
function Su() {}
function Np(e, t) {
  var n = rt();
  t = t === undefined ? null : t;
  var r = n.memoizedState;
  if (r !== null && t !== null && xu(t, r[1])) {
    return r[0];
  } else {
    n.memoizedState = [e, t];
    return e;
  }
}
function Ep(e, t) {
  var n = rt();
  t = t === undefined ? null : t;
  var r = n.memoizedState;
  if (r !== null && t !== null && xu(t, r[1])) {
    return r[0];
  } else {
    e = e();
    n.memoizedState = [e, t];
    return e;
  }
}
function Mp(e, t, n) {
  if (An & 21) {
    if (!pt(n, t)) {
      n = Ih();
      Q.lanes |= n;
      Ln |= n;
      e.baseState = true;
    }
    return t;
  } else {
    if (e.baseState) {
      e.baseState = false;
      Re = true;
    }
    return e.memoizedState = n;
  }
}
function cv(e, t) {
  var n = z;
  z = n !== 0 && n < 4 ? n : 4;
  e(true);
  var r = Qo.transition;
  Qo.transition = {};
  try {
    e(false);
    t();
  } finally {
    z = n;
    Qo.transition = r;
  }
}
function Ap() {
  return rt().memoizedState;
}
function dv(e, t, n) {
  var r = tn(e);
  n = {
    lane: r,
    action: n,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  if (Lp(e)) {
    Rp(t, n);
  } else {
    n = hp(e, t, n, r);
    if (n !== null) {
      var i = Pe();
      ft(n, e, r, i);
      Dp(n, t, r);
    }
  }
}
function fv(e, t, n) {
  var r = tn(e);
  var i = {
    lane: r,
    action: n,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  if (Lp(e)) {
    Rp(t, i);
  } else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) {
      try {
        var o = t.lastRenderedState;
        var l = s(o, n);
        i.hasEagerState = true;
        i.eagerState = l;
        if (pt(l, o)) {
          var u = t.interleaved;
          if (u === null) {
            i.next = i;
            pu(t);
          } else {
            i.next = u.next;
            u.next = i;
          }
          t.interleaved = i;
          return;
        }
      } catch {} finally {}
    }
    n = hp(e, t, i, r);
    if (n !== null) {
      i = Pe();
      ft(n, e, r, i);
      Dp(n, t, r);
    }
  }
}
function Lp(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Rp(e, t) {
  Hr = Fs = true;
  var n = e.pending;
  if (n === null) {
    t.next = t;
  } else {
    t.next = n.next;
    n.next = t;
  }
  e.pending = t;
}
function Dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes;
    n |= r;
    t.lanes = n;
    eu(e, n);
  }
}
var zs = {
  readContext: nt,
  useCallback: xe,
  useContext: xe,
  useEffect: xe,
  useImperativeHandle: xe,
  useInsertionEffect: xe,
  useLayoutEffect: xe,
  useMemo: xe,
  useReducer: xe,
  useRef: xe,
  useState: xe,
  useDebugValue: xe,
  useDeferredValue: xe,
  useTransition: xe,
  useMutableSource: xe,
  useSyncExternalStore: xe,
  useId: xe,
  unstable_isNewReconciler: false
};
var hv = {
  readContext: nt,
  useCallback: function (e, t) {
    yt().memoizedState = [e, t === undefined ? null : t];
    return e;
  },
  useContext: nt,
  useEffect: Zc,
  useImperativeHandle: function (e, t, n) {
    n = n != null ? n.concat([e]) : null;
    return cs(4194308, 4, Tp.bind(null, t, e), n);
  },
  useLayoutEffect: function (e, t) {
    return cs(4194308, 4, e, t);
  },
  useInsertionEffect: function (e, t) {
    return cs(4, 2, e, t);
  },
  useMemo: function (e, t) {
    var n = yt();
    t = t === undefined ? null : t;
    e = e();
    n.memoizedState = [e, t];
    return e;
  },
  useReducer: function (e, t, n) {
    var r = yt();
    t = n !== undefined ? n(t) : t;
    r.memoizedState = r.baseState = t;
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: t
    };
    r.queue = e;
    e = e.dispatch = dv.bind(null, Q, e);
    return [r.memoizedState, e];
  },
  useRef: function (e) {
    var t = yt();
    e = {
      current: e
    };
    return t.memoizedState = e;
  },
  useState: Qc,
  useDebugValue: Su,
  useDeferredValue: function (e) {
    return yt().memoizedState = e;
  },
  useTransition: function () {
    var e = Qc(false);
    var t = e[0];
    e = cv.bind(null, e[1]);
    yt().memoizedState = e;
    return [t, e];
  },
  useMutableSource: function () {},
  useSyncExternalStore: function (e, t, n) {
    var r = Q;
    var i = yt();
    if (Y) {
      if (n === undefined) {
        throw Error(C(407));
      }
      n = n();
    } else {
      n = t();
      if (fe === null) {
        throw Error(C(349));
      }
      if (!(An & 30)) {
        vp(r, t, n);
      }
    }
    i.memoizedState = n;
    var s = {
      value: n,
      getSnapshot: t
    };
    i.queue = s;
    Zc(wp.bind(null, r, s, e), [e]);
    r.flags |= 2048;
    pi(9, xp.bind(null, r, s, n, t), undefined, null);
    return n;
  },
  useId: function () {
    var e = yt();
    var t = fe.identifierPrefix;
    if (Y) {
      var n = Nt;
      var r = Pt;
      n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n;
      t = ":" + t + "R" + n;
      n = fi++;
      if (n > 0) {
        t += "H" + n.toString(32);
      }
      t += ":";
    } else {
      n = uv++;
      t = ":" + t + "r" + n.toString(32) + ":";
    }
    return e.memoizedState = t;
  },
  unstable_isNewReconciler: false
};
var pv = {
  readContext: nt,
  useCallback: Np,
  useContext: nt,
  useEffect: ju,
  useImperativeHandle: Pp,
  useInsertionEffect: bp,
  useLayoutEffect: Cp,
  useMemo: Ep,
  useReducer: Zo,
  useRef: Sp,
  useState: function () {
    return Zo(hi);
  },
  useDebugValue: Su,
  useDeferredValue: function (e) {
    var t = rt();
    return Mp(t, ae.memoizedState, e);
  },
  useTransition: function () {
    var e = Zo(hi)[0];
    var t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: gp,
  useSyncExternalStore: yp,
  useId: Ap,
  unstable_isNewReconciler: false
};
var mv = {
  readContext: nt,
  useCallback: Np,
  useContext: nt,
  useEffect: ju,
  useImperativeHandle: Pp,
  useInsertionEffect: bp,
  useLayoutEffect: Cp,
  useMemo: Ep,
  useReducer: qo,
  useRef: Sp,
  useState: function () {
    return qo(hi);
  },
  useDebugValue: Su,
  useDeferredValue: function (e) {
    var t = rt();
    if (ae === null) {
      return t.memoizedState = e;
    } else {
      return Mp(t, ae.memoizedState, e);
    }
  },
  useTransition: function () {
    var e = qo(hi)[0];
    var t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: gp,
  useSyncExternalStore: yp,
  useId: Ap,
  unstable_isNewReconciler: false
};
function lt(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t);
    e = e.defaultProps;
    for (var n in e) {
      if (t[n] === undefined) {
        t[n] = e[n];
      }
    }
    return t;
  }
  return t;
}
function Za(e, t, n, r) {
  t = e.memoizedState;
  n = n(r, t);
  n = n == null ? t : Z({}, t, n);
  e.memoizedState = n;
  if (e.lanes === 0) {
    e.updateQueue.baseState = n;
  }
}
var mo = {
  isMounted: function (e) {
    if (e = e._reactInternals) {
      return In(e) === e;
    } else {
      return false;
    }
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe();
    var i = tn(e);
    var s = Mt(r, i);
    s.payload = t;
    if (n != null) {
      s.callback = n;
    }
    t = Jt(e, s, i);
    if (t !== null) {
      ft(t, e, i, r);
      ls(t, e, i);
    }
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe();
    var i = tn(e);
    var s = Mt(r, i);
    s.tag = 1;
    s.payload = t;
    if (n != null) {
      s.callback = n;
    }
    t = Jt(e, s, i);
    if (t !== null) {
      ft(t, e, i, r);
      ls(t, e, i);
    }
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe();
    var r = tn(e);
    var i = Mt(n, r);
    i.tag = 2;
    if (t != null) {
      i.callback = t;
    }
    t = Jt(e, i, r);
    if (t !== null) {
      ft(t, e, r, n);
      ls(t, e, r);
    }
  }
};
function qc(e, t, n, r, i, s, o) {
  e = e.stateNode;
  if (typeof e.shouldComponentUpdate == "function") {
    return e.shouldComponentUpdate(r, s, o);
  } else if (t.prototype && t.prototype.isPureReactComponent) {
    return !oi(n, r) || !oi(i, s);
  } else {
    return true;
  }
}
function Ip(e, t, n) {
  var r = false;
  var i = on;
  var s = t.contextType;
  if (typeof s == "object" && s !== null) {
    s = nt(s);
  } else {
    i = Ie(t) ? En : je.current;
    r = t.contextTypes;
    s = (r = r != null) ? lr(e, i) : on;
  }
  t = new t(n, s);
  e.memoizedState = t.state ?? null;
  t.updater = mo;
  e.stateNode = t;
  t._reactInternals = e;
  if (r) {
    e = e.stateNode;
    e.__reactInternalMemoizedUnmaskedChildContext = i;
    e.__reactInternalMemoizedMaskedChildContext = s;
  }
  return t;
}
function Jc(e, t, n, r) {
  e = t.state;
  if (typeof t.componentWillReceiveProps == "function") {
    t.componentWillReceiveProps(n, r);
  }
  if (typeof t.UNSAFE_componentWillReceiveProps == "function") {
    t.UNSAFE_componentWillReceiveProps(n, r);
  }
  if (t.state !== e) {
    mo.enqueueReplaceState(t, t.state, null);
  }
}
function qa(e, t, n, r) {
  var i = e.stateNode;
  i.props = n;
  i.state = e.memoizedState;
  i.refs = {};
  mu(e);
  var s = t.contextType;
  if (typeof s == "object" && s !== null) {
    i.context = nt(s);
  } else {
    s = Ie(t) ? En : je.current;
    i.context = lr(e, s);
  }
  i.state = e.memoizedState;
  s = t.getDerivedStateFromProps;
  if (typeof s == "function") {
    Za(e, t, s, n);
    i.state = e.memoizedState;
  }
  if (typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) {
    t = i.state;
    if (typeof i.componentWillMount == "function") {
      i.componentWillMount();
    }
    if (typeof i.UNSAFE_componentWillMount == "function") {
      i.UNSAFE_componentWillMount();
    }
    if (t !== i.state) {
      mo.enqueueReplaceState(i, i.state, null);
    }
    Bs(e, n, i, r);
    i.state = e.memoizedState;
  }
  if (typeof i.componentDidMount == "function") {
    e.flags |= 4194308;
  }
}
function fr(e, t) {
  try {
    var n = "";
    var r = t;
    do {
      n += Uy(r);
      r = r.return;
    } while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ${s.message}
${s.stack}`;
  }
  return {
    value: e,
    source: t,
    stack: i,
    digest: null
  };
}
function Jo(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gv = typeof WeakMap == "function" ? WeakMap : Map;
function Vp(e, t, n) {
  n = Mt(-1, n);
  n.tag = 3;
  n.payload = {
    element: null
  };
  var r = t.value;
  n.callback = function () {
    if (!Ws) {
      Ws = true;
      ul = r;
    }
    Ja(e, t);
  };
  return n;
}
function Bp(e, t, n) {
  n = Mt(-1, n);
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function () {
      return r(i);
    };
    n.callback = function () {
      Ja(e, t);
    };
  }
  var s = e.stateNode;
  if (s !== null && typeof s.componentDidCatch == "function") {
    n.callback = function () {
      Ja(e, t);
      if (typeof r != "function") {
        if (en === null) {
          en = new Set([this]);
        } else {
          en.add(this);
        }
      }
      var o = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: o !== null ? o : ""
      });
    };
  }
  return n;
}
function ed(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gv();
    var i = new Set();
    r.set(t, i);
  } else {
    i = r.get(t);
    if (i === undefined) {
      i = new Set();
      r.set(t, i);
    }
  }
  if (!i.has(n)) {
    i.add(n);
    e = Mv.bind(null, e, t, n);
    t.then(e, e);
  }
}
function td(e) {
  do {
    var t;
    if (t = e.tag === 13) {
      t = e.memoizedState;
      t = t !== null ? t.dehydrated !== null : true;
    }
    if (t) {
      return e;
    }
    e = e.return;
  } while (e !== null);
  return null;
}
function nd(e, t, n, r, i) {
  if (e.mode & 1) {
    e.flags |= 65536;
    e.lanes = i;
    return e;
  } else {
    if (e === t) {
      e.flags |= 65536;
    } else {
      e.flags |= 128;
      n.flags |= 131072;
      n.flags &= -52805;
      if (n.tag === 1) {
        if (n.alternate === null) {
          n.tag = 17;
        } else {
          t = Mt(-1, 1);
          t.tag = 2;
          Jt(n, t, 1);
        }
      }
      n.lanes |= 1;
    }
    return e;
  }
}
var yv = It.ReactCurrentOwner;
var Re = false;
function be(e, t, n, r) {
  t.child = e === null ? fp(t, null, n, r) : cr(t, e.child, n, r);
}
function rd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  sr(t, i);
  r = wu(e, t, n, r, s, i);
  n = ku();
  if (e !== null && !Re) {
    t.updateQueue = e.updateQueue;
    t.flags &= -2053;
    e.lanes &= ~i;
    return Dt(e, t, i);
  } else {
    if (Y && n) {
      lu(t);
    }
    t.flags |= 1;
    be(e, t, r, i);
    return t.child;
  }
}
function id(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    if (typeof s == "function" && !Au(s) && s.defaultProps === undefined && n.compare === null && n.defaultProps === undefined) {
      t.tag = 15;
      t.type = s;
      return Op(e, t, s, r, i);
    } else {
      e = ps(n.type, null, r, t, t.mode, i);
      e.ref = t.ref;
      e.return = t;
      return t.child = e;
    }
  }
  s = e.child;
  if (!(e.lanes & i)) {
    var o = s.memoizedProps;
    n = n.compare;
    n = n !== null ? n : oi;
    if (n(o, r) && e.ref === t.ref) {
      return Dt(e, t, i);
    }
  }
  t.flags |= 1;
  e = nn(s, r);
  e.ref = t.ref;
  e.return = t;
  return t.child = e;
}
function Op(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (oi(s, r) && e.ref === t.ref) {
      Re = false;
      t.pendingProps = r = s;
      if ((e.lanes & i) !== 0) {
        if (e.flags & 131072) {
          Re = true;
        }
      } else {
        t.lanes = e.lanes;
        return Dt(e, t, i);
      }
    }
  }
  return el(e, t, n, r, i);
}
function Fp(e, t, n) {
  var r = t.pendingProps;
  var i = r.children;
  var s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") {
    if (!(t.mode & 1)) {
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      };
      H(Zn, ze);
      ze |= n;
    } else {
      if (!(n & 1073741824)) {
        e = s !== null ? s.baseLanes | n : n;
        t.lanes = t.childLanes = 1073741824;
        t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
        t.updateQueue = null;
        H(Zn, ze);
        ze |= e;
        return null;
      }
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      };
      r = s !== null ? s.baseLanes : n;
      H(Zn, ze);
      ze |= r;
    }
  } else {
    if (s !== null) {
      r = s.baseLanes | n;
      t.memoizedState = null;
    } else {
      r = n;
    }
    H(Zn, ze);
    ze |= r;
  }
  be(e, t, i, n);
  return t.child;
}
function zp(e, t) {
  var n = t.ref;
  if (e === null && n !== null || e !== null && e.ref !== n) {
    t.flags |= 512;
    t.flags |= 2097152;
  }
}
function el(e, t, n, r, i) {
  var s = Ie(n) ? En : je.current;
  s = lr(t, s);
  sr(t, i);
  n = wu(e, t, n, r, s, i);
  r = ku();
  if (e !== null && !Re) {
    t.updateQueue = e.updateQueue;
    t.flags &= -2053;
    e.lanes &= ~i;
    return Dt(e, t, i);
  } else {
    if (Y && r) {
      lu(t);
    }
    t.flags |= 1;
    be(e, t, n, i);
    return t.child;
  }
}
function sd(e, t, n, r, i) {
  if (Ie(n)) {
    var s = true;
    Ls(t);
  } else {
    s = false;
  }
  sr(t, i);
  if (t.stateNode === null) {
    ds(e, t);
    Ip(t, n, r);
    qa(t, n, r, i);
    r = true;
  } else if (e === null) {
    var o = t.stateNode;
    var l = t.memoizedProps;
    o.props = l;
    var u = o.context;
    var c = n.contextType;
    if (typeof c == "object" && c !== null) {
      c = nt(c);
    } else {
      c = Ie(n) ? En : je.current;
      c = lr(t, c);
    }
    var d = n.getDerivedStateFromProps;
    var f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    if (!f && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function")) {
      if (l !== r || u !== c) {
        Jc(t, o, r, c);
      }
    }
    Wt = false;
    var h = t.memoizedState;
    o.state = h;
    Bs(t, r, o, i);
    u = t.memoizedState;
    if (l !== r || h !== u || De.current || Wt) {
      if (typeof d == "function") {
        Za(t, n, d, r);
        u = t.memoizedState;
      }
      if (l = Wt || qc(t, n, l, r, h, u, c)) {
        if (!f && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) {
          if (typeof o.componentWillMount == "function") {
            o.componentWillMount();
          }
          if (typeof o.UNSAFE_componentWillMount == "function") {
            o.UNSAFE_componentWillMount();
          }
        }
        if (typeof o.componentDidMount == "function") {
          t.flags |= 4194308;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          t.flags |= 4194308;
        }
        t.memoizedProps = r;
        t.memoizedState = u;
      }
      o.props = r;
      o.state = u;
      o.context = c;
      r = l;
    } else {
      if (typeof o.componentDidMount == "function") {
        t.flags |= 4194308;
      }
      r = false;
    }
  } else {
    o = t.stateNode;
    pp(e, t);
    l = t.memoizedProps;
    c = t.type === t.elementType ? l : lt(t.type, l);
    o.props = c;
    f = t.pendingProps;
    h = o.context;
    u = n.contextType;
    if (typeof u == "object" && u !== null) {
      u = nt(u);
    } else {
      u = Ie(n) ? En : je.current;
      u = lr(t, u);
    }
    var m = n.getDerivedStateFromProps;
    if (!(d = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function")) {
      if (l !== f || h !== u) {
        Jc(t, o, r, u);
      }
    }
    Wt = false;
    h = t.memoizedState;
    o.state = h;
    Bs(t, r, o, i);
    var v = t.memoizedState;
    if (l !== f || h !== v || De.current || Wt) {
      if (typeof m == "function") {
        Za(t, n, m, r);
        v = t.memoizedState;
      }
      if (c = Wt || qc(t, n, c, r, h, v, u) || false) {
        if (!d && (typeof o.UNSAFE_componentWillUpdate == "function" || typeof o.componentWillUpdate == "function")) {
          if (typeof o.componentWillUpdate == "function") {
            o.componentWillUpdate(r, v, u);
          }
          if (typeof o.UNSAFE_componentWillUpdate == "function") {
            o.UNSAFE_componentWillUpdate(r, v, u);
          }
        }
        if (typeof o.componentDidUpdate == "function") {
          t.flags |= 4;
        }
        if (typeof o.getSnapshotBeforeUpdate == "function") {
          t.flags |= 1024;
        }
      } else {
        if (typeof o.componentDidUpdate == "function" && (l !== e.memoizedProps || h !== e.memoizedState)) {
          t.flags |= 4;
        }
        if (typeof o.getSnapshotBeforeUpdate == "function" && (l !== e.memoizedProps || h !== e.memoizedState)) {
          t.flags |= 1024;
        }
        t.memoizedProps = r;
        t.memoizedState = v;
      }
      o.props = r;
      o.state = v;
      o.context = u;
      r = c;
    } else {
      if (typeof o.componentDidUpdate == "function" && (l !== e.memoizedProps || h !== e.memoizedState)) {
        t.flags |= 4;
      }
      if (typeof o.getSnapshotBeforeUpdate == "function" && (l !== e.memoizedProps || h !== e.memoizedState)) {
        t.flags |= 1024;
      }
      r = false;
    }
  }
  return tl(e, t, n, r, s, i);
}
function tl(e, t, n, r, i, s) {
  zp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) {
    if (i) {
      Hc(t, n, false);
    }
    return Dt(e, t, s);
  }
  r = t.stateNode;
  yv.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  t.flags |= 1;
  if (e !== null && o) {
    t.child = cr(t, e.child, null, s);
    t.child = cr(t, null, l, s);
  } else {
    be(e, t, l, s);
  }
  t.memoizedState = r.state;
  if (i) {
    Hc(t, n, true);
  }
  return t.child;
}
function _p(e) {
  var t = e.stateNode;
  if (t.pendingContext) {
    Uc(e, t.pendingContext, t.pendingContext !== t.context);
  } else if (t.context) {
    Uc(e, t.context, false);
  }
  gu(e, t.containerInfo);
}
function od(e, t, n, r, i) {
  ur();
  cu(i);
  t.flags |= 256;
  be(e, t, n, r);
  return t.child;
}
var nl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function rl(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  };
}
function Wp(e, t, n) {
  var r = t.pendingProps;
  var i = X.current;
  var s = false;
  var o = (t.flags & 128) !== 0;
  var l;
  if (!(l = o)) {
    l = e !== null && e.memoizedState === null ? false : (i & 2) !== 0;
  }
  if (l) {
    s = true;
    t.flags &= -129;
  } else if (e === null || e.memoizedState !== null) {
    i |= 1;
  }
  H(X, i & 1);
  if (e === null) {
    Xa(t);
    e = t.memoizedState;
    if (e !== null && (e = e.dehydrated, e !== null)) {
      if (t.mode & 1) {
        if (e.data === "$!") {
          t.lanes = 8;
        } else {
          t.lanes = 1073741824;
        }
      } else {
        t.lanes = 1;
      }
      return null;
    } else {
      o = r.children;
      e = r.fallback;
      if (s) {
        r = t.mode;
        s = t.child;
        o = {
          mode: "hidden",
          children: o
        };
        if (!(r & 1) && s !== null) {
          s.childLanes = 0;
          s.pendingProps = o;
        } else {
          s = vo(o, r, 0, null);
        }
        e = Tn(e, r, n, null);
        s.return = t;
        e.return = t;
        s.sibling = e;
        t.child = s;
        t.child.memoizedState = rl(n);
        t.memoizedState = nl;
        return e;
      } else {
        return bu(t, o);
      }
    }
  }
  i = e.memoizedState;
  if (i !== null && (l = i.dehydrated, l !== null)) {
    return vv(e, t, o, r, l, i, n);
  }
  if (s) {
    s = r.fallback;
    o = t.mode;
    i = e.child;
    l = i.sibling;
    var u = {
      mode: "hidden",
      children: r.children
    };
    if (!(o & 1) && t.child !== i) {
      r = t.child;
      r.childLanes = 0;
      r.pendingProps = u;
      t.deletions = null;
    } else {
      r = nn(i, u);
      r.subtreeFlags = i.subtreeFlags & 14680064;
    }
    if (l !== null) {
      s = nn(l, s);
    } else {
      s = Tn(s, o, n, null);
      s.flags |= 2;
    }
    s.return = t;
    r.return = t;
    r.sibling = s;
    t.child = r;
    r = s;
    s = t.child;
    o = e.child.memoizedState;
    o = o === null ? rl(n) : {
      baseLanes: o.baseLanes | n,
      cachePool: null,
      transitions: o.transitions
    };
    s.memoizedState = o;
    s.childLanes = e.childLanes & ~n;
    t.memoizedState = nl;
    return r;
  }
  s = e.child;
  e = s.sibling;
  r = nn(s, {
    mode: "visible",
    children: r.children
  });
  if (!(t.mode & 1)) {
    r.lanes = n;
  }
  r.return = t;
  r.sibling = null;
  if (e !== null) {
    n = t.deletions;
    if (n === null) {
      t.deletions = [e];
      t.flags |= 16;
    } else {
      n.push(e);
    }
  }
  t.child = r;
  t.memoizedState = null;
  return r;
}
function bu(e, t) {
  t = vo({
    mode: "visible",
    children: t
  }, e.mode, 0, null);
  t.return = e;
  return e.child = t;
}
function Yi(e, t, n, r) {
  if (r !== null) {
    cu(r);
  }
  cr(t, e.child, null, n);
  e = bu(t, t.pendingProps.children);
  e.flags |= 2;
  t.memoizedState = null;
  return e;
}
function vv(e, t, n, r, i, s, o) {
  if (n) {
    if (t.flags & 256) {
      t.flags &= -257;
      r = Jo(Error(C(422)));
      return Yi(e, t, o, r);
    } else if (t.memoizedState !== null) {
      t.child = e.child;
      t.flags |= 128;
      return null;
    } else {
      s = r.fallback;
      i = t.mode;
      r = vo({
        mode: "visible",
        children: r.children
      }, i, 0, null);
      s = Tn(s, i, o, null);
      s.flags |= 2;
      r.return = t;
      s.return = t;
      r.sibling = s;
      t.child = r;
      if (t.mode & 1) {
        cr(t, e.child, null, o);
      }
      t.child.memoizedState = rl(o);
      t.memoizedState = nl;
      return s;
    }
  }
  if (!(t.mode & 1)) {
    return Yi(e, t, o, null);
  }
  if (i.data === "$!") {
    r = i.nextSibling && i.nextSibling.dataset;
    if (r) {
      var l = r.dgst;
    }
    r = l;
    s = Error(C(419));
    r = Jo(s, r, undefined);
    return Yi(e, t, o, r);
  }
  l = (o & e.childLanes) !== 0;
  if (Re || l) {
    r = fe;
    if (r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i;
      if (i !== 0 && i !== s.retryLane) {
        s.retryLane = i;
        Rt(e, i);
        ft(r, e, i, -1);
      }
    }
    Mu();
    r = Jo(Error(C(421)));
    return Yi(e, t, o, r);
  }
  if (i.data === "$?") {
    t.flags |= 128;
    t.child = e.child;
    t = Av.bind(null, e);
    i._reactRetry = t;
    return null;
  } else {
    e = s.treeContext;
    _e = qt(i.nextSibling);
    We = t;
    Y = true;
    ct = null;
    if (e !== null) {
      Xe[Qe++] = Pt;
      Xe[Qe++] = Nt;
      Xe[Qe++] = Mn;
      Pt = e.id;
      Nt = e.overflow;
      Mn = t;
    }
    t = bu(t, r.children);
    t.flags |= 4096;
    return t;
  }
}
function ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  if (r !== null) {
    r.lanes |= t;
  }
  Qa(e.return, t, n);
}
function ea(e, t, n, r, i) {
  var s = e.memoizedState;
  if (s === null) {
    e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
    };
  } else {
    s.isBackwards = t;
    s.rendering = null;
    s.renderingStartTime = 0;
    s.last = r;
    s.tail = n;
    s.tailMode = i;
  }
}
function Up(e, t, n) {
  var r = t.pendingProps;
  var i = r.revealOrder;
  var s = r.tail;
  be(e, t, r.children, n);
  r = X.current;
  if (r & 2) {
    r = r & 1 | 2;
    t.flags |= 128;
  } else {
    if (e !== null && e.flags & 128) {
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) {
          if (e.memoizedState !== null) {
            ad(e, n, t);
          }
        } else if (e.tag === 19) {
          ad(e, n, t);
        } else if (e.child !== null) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === t) {
          break e;
        }
        while (e.sibling === null) {
          if (e.return === null || e.return === t) {
            break e;
          }
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
    r &= 1;
  }
  H(X, r);
  if (!(t.mode & 1)) {
    t.memoizedState = null;
  } else {
    switch (i) {
      case "forwards":
        n = t.child;
        i = null;
        while (n !== null) {
          e = n.alternate;
          if (e !== null && Os(e) === null) {
            i = n;
          }
          n = n.sibling;
        }
        n = i;
        if (n === null) {
          i = t.child;
          t.child = null;
        } else {
          i = n.sibling;
          n.sibling = null;
        }
        ea(t, false, i, n, s);
        break;
      case "backwards":
        n = null;
        i = t.child;
        t.child = null;
        while (i !== null) {
          e = i.alternate;
          if (e !== null && Os(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling;
          i.sibling = n;
          n = i;
          i = e;
        }
        ea(t, true, n, null, s);
        break;
      case "together":
        ea(t, false, null, null, undefined);
        break;
      default:
        t.memoizedState = null;
    }
  }
  return t.child;
}
function ds(e, t) {
  if (!(t.mode & 1) && e !== null) {
    e.alternate = null;
    t.alternate = null;
    t.flags |= 2;
  }
}
function Dt(e, t, n) {
  if (e !== null) {
    t.dependencies = e.dependencies;
  }
  Ln |= t.lanes;
  if (!(n & t.childLanes)) {
    return null;
  }
  if (e !== null && t.child !== e.child) {
    throw Error(C(153));
  }
  if (t.child !== null) {
    e = t.child;
    n = nn(e, e.pendingProps);
    t.child = n;
    n.return = t;
    while (e.sibling !== null) {
      e = e.sibling;
      n = n.sibling = nn(e, e.pendingProps);
      n.return = t;
    }
    n.sibling = null;
  }
  return t.child;
}
function xv(e, t, n) {
  switch (t.tag) {
    case 3:
      _p(t);
      ur();
      break;
    case 5:
      mp(t);
      break;
    case 1:
      if (Ie(t.type)) {
        Ls(t);
      }
      break;
    case 4:
      gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context;
      var i = t.memoizedProps.value;
      H(Is, r._currentValue);
      r._currentValue = i;
      break;
    case 13:
      r = t.memoizedState;
      if (r !== null) {
        if (r.dehydrated !== null) {
          H(X, X.current & 1);
          t.flags |= 128;
          return null;
        } else if (n & t.child.childLanes) {
          return Wp(e, t, n);
        } else {
          H(X, X.current & 1);
          e = Dt(e, t, n);
          if (e !== null) {
            return e.sibling;
          } else {
            return null;
          }
        }
      }
      H(X, X.current & 1);
      break;
    case 19:
      r = (n & t.childLanes) !== 0;
      if (e.flags & 128) {
        if (r) {
          return Up(e, t, n);
        }
        t.flags |= 128;
      }
      i = t.memoizedState;
      if (i !== null) {
        i.rendering = null;
        i.tail = null;
        i.lastEffect = null;
      }
      H(X, X.current);
      if (r) {
        break;
      }
      return null;
    case 22:
    case 23:
      t.lanes = 0;
      return Fp(e, t, n);
  }
  return Dt(e, t, n);
}
var Hp;
var il;
var $p;
var Kp;
Hp = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) {
      e.appendChild(n.stateNode);
    } else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n;
      n = n.child;
      continue;
    }
    if (n === t) {
      break;
    }
    while (n.sibling === null) {
      if (n.return === null || n.return === t) {
        return;
      }
      n = n.return;
    }
    n.sibling.return = n.return;
    n = n.sibling;
  }
};
il = function () {};
$p = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode;
    jn(jt.current);
    var s = null;
    switch (n) {
      case "input":
        i = Ta(e, i);
        r = Ta(e, r);
        s = [];
        break;
      case "select":
        i = Z({}, i, {
          value: undefined
        });
        r = Z({}, r, {
          value: undefined
        });
        s = [];
        break;
      case "textarea":
        i = Ea(e, i);
        r = Ea(e, r);
        s = [];
        break;
      default:
        if (typeof i.onClick != "function" && typeof r.onClick == "function") {
          e.onclick = Ms;
        }
    }
    Aa(n, r);
    var o;
    n = null;
    for (c in i) {
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) {
        if (c === "style") {
          var l = i[c];
          for (o in l) {
            if (l.hasOwnProperty(o)) {
              n ||= {};
              n[o] = "";
            }
          }
        } else if (c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus") {
          if (Jr.hasOwnProperty(c)) {
            s ||= [];
          } else {
            (s = s || []).push(c, null);
          }
        }
      }
    }
    for (c in r) {
      var u = r[c];
      l = i != null ? i[c] : undefined;
      if (r.hasOwnProperty(c) && u !== l && (u != null || l != null)) {
        if (c === "style") {
          if (l) {
            for (o in l) {
              if (!!l.hasOwnProperty(o) && (!u || !u.hasOwnProperty(o))) {
                n ||= {};
                n[o] = "";
              }
            }
            for (o in u) {
              if (u.hasOwnProperty(o) && l[o] !== u[o]) {
                n ||= {};
                n[o] = u[o];
              }
            }
          } else {
            if (!n) {
              s ||= [];
              s.push(c, n);
            }
            n = u;
          }
        } else if (c === "dangerouslySetInnerHTML") {
          u = u ? u.__html : undefined;
          l = l ? l.__html : undefined;
          if (u != null && l !== u) {
            (s = s || []).push(c, u);
          }
        } else if (c === "children") {
          if (typeof u == "string" || typeof u == "number") {
            (s = s || []).push(c, "" + u);
          }
        } else if (c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning") {
          if (Jr.hasOwnProperty(c)) {
            if (u != null && c === "onScroll") {
              $("scroll", e);
            }
            if (!s && l !== u) {
              s = [];
            }
          } else {
            (s = s || []).push(c, u);
          }
        }
      }
    }
    if (n) {
      (s = s || []).push("style", n);
    }
    var c = s;
    if (t.updateQueue = c) {
      t.flags |= 4;
    }
  }
};
Kp = function (e, t, n, r) {
  if (n !== r) {
    t.flags |= 4;
  }
};
function Mr(e, t) {
  if (!Y) {
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        var n = null;
        for (; t !== null;) {
          if (t.alternate !== null) {
            n = t;
          }
          t = t.sibling;
        }
        if (n === null) {
          e.tail = null;
        } else {
          n.sibling = null;
        }
        break;
      case "collapsed":
        n = e.tail;
        var r = null;
        for (; n !== null;) {
          if (n.alternate !== null) {
            r = n;
          }
          n = n.sibling;
        }
        if (r === null) {
          if (t || e.tail === null) {
            e.tail = null;
          } else {
            e.tail.sibling = null;
          }
        } else {
          r.sibling = null;
        }
    }
  }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child;
  var n = 0;
  var r = 0;
  if (t) {
    for (var i = e.child; i !== null;) {
      n |= i.lanes | i.childLanes;
      r |= i.subtreeFlags & 14680064;
      r |= i.flags & 14680064;
      i.return = e;
      i = i.sibling;
    }
  } else {
    for (i = e.child; i !== null;) {
      n |= i.lanes | i.childLanes;
      r |= i.subtreeFlags;
      r |= i.flags;
      i.return = e;
      i = i.sibling;
    }
  }
  e.subtreeFlags |= r;
  e.childLanes = n;
  return t;
}
function wv(e, t, n) {
  var r = t.pendingProps;
  uu(t);
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      we(t);
      return null;
    case 1:
      if (Ie(t.type)) {
        As();
      }
      we(t);
      return null;
    case 3:
      r = t.stateNode;
      dr();
      G(De);
      G(je);
      vu();
      if (r.pendingContext) {
        r.context = r.pendingContext;
        r.pendingContext = null;
      }
      if (e === null || e.child === null) {
        if (Ki(t)) {
          t.flags |= 4;
        } else if (e !== null && (!e.memoizedState.isDehydrated || !!(t.flags & 256))) {
          t.flags |= 1024;
          if (ct !== null) {
            fl(ct);
            ct = null;
          }
        }
      }
      il(e, t);
      we(t);
      return null;
    case 5:
      yu(t);
      var i = jn(di.current);
      n = t.type;
      if (e !== null && t.stateNode != null) {
        $p(e, t, n, r, i);
        if (e.ref !== t.ref) {
          t.flags |= 512;
          t.flags |= 2097152;
        }
      } else {
        if (!r) {
          if (t.stateNode === null) {
            throw Error(C(166));
          }
          we(t);
          return null;
        }
        e = jn(jt.current);
        if (Ki(t)) {
          r = t.stateNode;
          n = t.type;
          var s = t.memoizedProps;
          r[wt] = t;
          r[ui] = s;
          e = (t.mode & 1) !== 0;
          switch (n) {
            case "dialog":
              $("cancel", r);
              $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Br.length; i++) {
                $(Br[i], r);
              }
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r);
              $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              gc(r, s);
              $("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!s.multiple
              };
              $("invalid", r);
              break;
            case "textarea":
              vc(r, s);
              $("invalid", r);
          }
          Aa(n, s);
          i = null;
          for (var o in s) {
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              if (o === "children") {
                if (typeof l == "string") {
                  if (r.textContent !== l) {
                    if (s.suppressHydrationWarning !== true) {
                      $i(r.textContent, l, e);
                    }
                    i = ["children", l];
                  }
                } else if (typeof l == "number" && r.textContent !== "" + l) {
                  if (s.suppressHydrationWarning !== true) {
                    $i(r.textContent, l, e);
                  }
                  i = ["children", "" + l];
                }
              } else if (Jr.hasOwnProperty(o) && l != null && o === "onScroll") {
                $("scroll", r);
              }
            }
          }
          switch (n) {
            case "input":
              Bi(r);
              yc(r, s, true);
              break;
            case "textarea":
              Bi(r);
              xc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              if (typeof s.onClick == "function") {
                r.onclick = Ms;
              }
          }
          r = i;
          t.updateQueue = r;
          if (r !== null) {
            t.flags |= 4;
          }
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument;
          if (e === "http://www.w3.org/1999/xhtml") {
            e = wh(n);
          }
          if (e === "http://www.w3.org/1999/xhtml") {
            if (n === "script") {
              e = o.createElement("div");
              e.innerHTML = "<script></script>";
              e = e.removeChild(e.firstChild);
            } else if (typeof r.is == "string") {
              e = o.createElement(n, {
                is: r.is
              });
            } else {
              e = o.createElement(n);
              if (n === "select") {
                o = e;
                if (r.multiple) {
                  o.multiple = true;
                } else if (r.size) {
                  o.size = r.size;
                }
              }
            }
          } else {
            e = o.createElementNS(e, n);
          }
          e[wt] = t;
          e[ui] = r;
          Hp(e, t, false, false);
          t.stateNode = e;
          e: {
            o = La(n, r);
            switch (n) {
              case "dialog":
                $("cancel", e);
                $("close", e);
                i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e);
                i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Br.length; i++) {
                  $(Br[i], e);
                }
                i = r;
                break;
              case "source":
                $("error", e);
                i = r;
                break;
              case "img":
              case "image":
              case "link":
                $("error", e);
                $("load", e);
                i = r;
                break;
              case "details":
                $("toggle", e);
                i = r;
                break;
              case "input":
                gc(e, r);
                i = Ta(e, r);
                $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                };
                i = Z({}, r, {
                  value: undefined
                });
                $("invalid", e);
                break;
              case "textarea":
                vc(e, r);
                i = Ea(e, r);
                $("invalid", e);
                break;
              default:
                i = r;
            }
            Aa(n, i);
            l = i;
            for (s in l) {
              if (l.hasOwnProperty(s)) {
                var u = l[s];
                if (s === "style") {
                  Sh(e, u);
                } else if (s === "dangerouslySetInnerHTML") {
                  u = u ? u.__html : undefined;
                  if (u != null) {
                    kh(e, u);
                  }
                } else if (s === "children") {
                  if (typeof u == "string") {
                    if (n !== "textarea" || u !== "") {
                      ei(e, u);
                    }
                  } else if (typeof u == "number") {
                    ei(e, "" + u);
                  }
                } else if (s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus") {
                  if (Jr.hasOwnProperty(s)) {
                    if (u != null && s === "onScroll") {
                      $("scroll", e);
                    }
                  } else if (u != null) {
                    Yl(e, s, u, o);
                  }
                }
              }
            }
            switch (n) {
              case "input":
                Bi(e);
                yc(e, r, false);
                break;
              case "textarea":
                Bi(e);
                xc(e);
                break;
              case "option":
                if (r.value != null) {
                  e.setAttribute("value", "" + sn(r.value));
                }
                break;
              case "select":
                e.multiple = !!r.multiple;
                s = r.value;
                if (s != null) {
                  tr(e, !!r.multiple, s, false);
                } else if (r.defaultValue != null) {
                  tr(e, !!r.multiple, r.defaultValue, true);
                }
                break;
              default:
                if (typeof i.onClick == "function") {
                  e.onclick = Ms;
                }
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          if (r) {
            t.flags |= 4;
          }
        }
        if (t.ref !== null) {
          t.flags |= 512;
          t.flags |= 2097152;
        }
      }
      we(t);
      return null;
    case 6:
      if (e && t.stateNode != null) {
        Kp(e, t, e.memoizedProps, r);
      } else {
        if (typeof r != "string" && t.stateNode === null) {
          throw Error(C(166));
        }
        n = jn(di.current);
        jn(jt.current);
        if (Ki(t)) {
          r = t.stateNode;
          n = t.memoizedProps;
          r[wt] = t;
          if ((s = r.nodeValue !== n) && (e = We, e !== null)) {
            switch (e.tag) {
              case 3:
                $i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                if (e.memoizedProps.suppressHydrationWarning !== true) {
                  $i(r.nodeValue, n, (e.mode & 1) !== 0);
                }
            }
          }
          if (s) {
            t.flags |= 4;
          }
        } else {
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r);
          r[wt] = t;
          t.stateNode = r;
        }
      }
      we(t);
      return null;
    case 13:
      G(X);
      r = t.memoizedState;
      if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && _e !== null && t.mode & 1 && !(t.flags & 128)) {
          cp();
          ur();
          t.flags |= 98560;
          s = false;
        } else {
          s = Ki(t);
          if (r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) {
                throw Error(C(318));
              }
              s = t.memoizedState;
              s = s !== null ? s.dehydrated : null;
              if (!s) {
                throw Error(C(317));
              }
              s[wt] = t;
            } else {
              ur();
              if (!(t.flags & 128)) {
                t.memoizedState = null;
              }
              t.flags |= 4;
            }
            we(t);
            s = false;
          } else {
            if (ct !== null) {
              fl(ct);
              ct = null;
            }
            s = true;
          }
        }
        if (!s) {
          if (t.flags & 65536) {
            return t;
          } else {
            return null;
          }
        }
      }
      if (t.flags & 128) {
        t.lanes = n;
        return t;
      } else {
        r = r !== null;
        if (r !== (e !== null && e.memoizedState !== null) && r) {
          t.child.flags |= 8192;
          if (t.mode & 1) {
            if (e === null || X.current & 1) {
              if (le === 0) {
                le = 3;
              }
            } else {
              Mu();
            }
          }
        }
        if (t.updateQueue !== null) {
          t.flags |= 4;
        }
        we(t);
        return null;
      }
    case 4:
      dr();
      il(e, t);
      if (e === null) {
        ai(t.stateNode.containerInfo);
      }
      we(t);
      return null;
    case 10:
      hu(t.type._context);
      we(t);
      return null;
    case 17:
      if (Ie(t.type)) {
        As();
      }
      we(t);
      return null;
    case 19:
      G(X);
      s = t.memoizedState;
      if (s === null) {
        we(t);
        return null;
      }
      r = (t.flags & 128) !== 0;
      o = s.rendering;
      if (o === null) {
        if (r) {
          Mr(s, false);
        } else {
          if (le !== 0 || e !== null && e.flags & 128) {
            for (e = t.child; e !== null;) {
              o = Os(e);
              if (o !== null) {
                t.flags |= 128;
                Mr(s, false);
                r = o.updateQueue;
                if (r !== null) {
                  t.updateQueue = r;
                  t.flags |= 4;
                }
                t.subtreeFlags = 0;
                r = n;
                n = t.child;
                while (n !== null) {
                  s = n;
                  e = r;
                  s.flags &= 14680066;
                  o = s.alternate;
                  if (o === null) {
                    s.childLanes = 0;
                    s.lanes = e;
                    s.child = null;
                    s.subtreeFlags = 0;
                    s.memoizedProps = null;
                    s.memoizedState = null;
                    s.updateQueue = null;
                    s.dependencies = null;
                    s.stateNode = null;
                  } else {
                    s.childLanes = o.childLanes;
                    s.lanes = o.lanes;
                    s.child = o.child;
                    s.subtreeFlags = 0;
                    s.deletions = null;
                    s.memoizedProps = o.memoizedProps;
                    s.memoizedState = o.memoizedState;
                    s.updateQueue = o.updateQueue;
                    s.type = o.type;
                    e = o.dependencies;
                    s.dependencies = e === null ? null : {
                      lanes: e.lanes,
                      firstContext: e.firstContext
                    };
                  }
                  n = n.sibling;
                }
                H(X, X.current & 1 | 2);
                return t.child;
              }
              e = e.sibling;
            }
          }
          if (s.tail !== null && te() > hr) {
            t.flags |= 128;
            r = true;
            Mr(s, false);
            t.lanes = 4194304;
          }
        }
      } else {
        if (!r) {
          e = Os(o);
          if (e !== null) {
            t.flags |= 128;
            r = true;
            n = e.updateQueue;
            if (n !== null) {
              t.updateQueue = n;
              t.flags |= 4;
            }
            Mr(s, true);
            if (s.tail === null && s.tailMode === "hidden" && !o.alternate && !Y) {
              we(t);
              return null;
            }
          } else if (te() * 2 - s.renderingStartTime > hr && n !== 1073741824) {
            t.flags |= 128;
            r = true;
            Mr(s, false);
            t.lanes = 4194304;
          }
        }
        if (s.isBackwards) {
          o.sibling = t.child;
          t.child = o;
        } else {
          n = s.last;
          if (n !== null) {
            n.sibling = o;
          } else {
            t.child = o;
          }
          s.last = o;
        }
      }
      if (s.tail !== null) {
        t = s.tail;
        s.rendering = t;
        s.tail = t.sibling;
        s.renderingStartTime = te();
        t.sibling = null;
        n = X.current;
        H(X, r ? n & 1 | 2 : n & 1);
        return t;
      } else {
        we(t);
        return null;
      }
    case 22:
    case 23:
      Eu();
      r = t.memoizedState !== null;
      if (e !== null && e.memoizedState !== null !== r) {
        t.flags |= 8192;
      }
      if (r && t.mode & 1) {
        if (ze & 1073741824) {
          we(t);
          if (t.subtreeFlags & 6) {
            t.flags |= 8192;
          }
        }
      } else {
        we(t);
      }
      return null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function kv(e, t) {
  uu(t);
  switch (t.tag) {
    case 1:
      if (Ie(t.type)) {
        As();
      }
      e = t.flags;
      if (e & 65536) {
        t.flags = e & -65537 | 128;
        return t;
      } else {
        return null;
      }
    case 3:
      dr();
      G(De);
      G(je);
      vu();
      e = t.flags;
      if (e & 65536 && !(e & 128)) {
        t.flags = e & -65537 | 128;
        return t;
      } else {
        return null;
      }
    case 5:
      yu(t);
      return null;
    case 13:
      G(X);
      e = t.memoizedState;
      if (e !== null && e.dehydrated !== null) {
        if (t.alternate === null) {
          throw Error(C(340));
        }
        ur();
      }
      e = t.flags;
      if (e & 65536) {
        t.flags = e & -65537 | 128;
        return t;
      } else {
        return null;
      }
    case 19:
      G(X);
      return null;
    case 4:
      dr();
      return null;
    case 10:
      hu(t.type._context);
      return null;
    case 22:
    case 23:
      Eu();
      return null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xi = false;
var ke = false;
var jv = typeof WeakSet == "function" ? WeakSet : Set;
var M = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null) {
    if (typeof n == "function") {
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    } else {
      n.current = null;
    }
  }
}
function sl(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var ld = false;
function Sv(e, t) {
  Wa = Ps;
  e = Zh();
  if (au(e)) {
    if ("selectionStart" in e) {
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    } else {
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset;
          var s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType;
            s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0;
          var l = -1;
          var u = -1;
          var c = 0;
          var d = 0;
          var f = e;
          var h = null;
          t: while (true) {
            for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (u = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (m = f.firstChild) !== null;) {
              h = f;
              f = m;
            }
            while (true) {
              if (f === e) {
                break t;
              }
              if (h === n && ++c === i) {
                l = o;
              }
              if (h === s && ++d === r) {
                u = o;
              }
              if ((m = f.nextSibling) !== null) {
                break;
              }
              f = h;
              h = f.parentNode;
            }
            f = m;
          }
          n = l === -1 || u === -1 ? null : {
            start: l,
            end: u
          };
        } else {
          n = null;
        }
      }
    }
    n = n || {
      start: 0,
      end: 0
    };
  } else {
    n = null;
  }
  Ua = {
    focusedElem: e,
    selectionRange: n
  };
  Ps = false;
  M = t;
  while (M !== null) {
    t = M;
    e = t.child;
    if ((t.subtreeFlags & 1028) !== 0 && e !== null) {
      e.return = t;
      M = e;
    } else {
      while (M !== null) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024) {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps;
                  var k = v.memoizedState;
                  var g = t.stateNode;
                  var p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), k);
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                if (y.nodeType === 1) {
                  y.textContent = "";
                } else if (y.nodeType === 9 && y.documentElement) {
                  y.removeChild(y.documentElement);
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
          }
        } catch (w) {
          J(t, t.return, w);
        }
        e = t.sibling;
        if (e !== null) {
          e.return = t.return;
          M = e;
          break;
        }
        M = t.return;
      }
    }
  }
  v = ld;
  ld = false;
  return v;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  r = r !== null ? r.lastEffect : null;
  if (r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = undefined;
        if (s !== undefined) {
          sl(t, n, s);
        }
      }
      i = i.next;
    } while (i !== r);
  }
}
function go(e, t) {
  t = t.updateQueue;
  t = t !== null ? t.lastEffect : null;
  if (t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    if (typeof t == "function") {
      t(e);
    } else {
      t.current = e;
    }
  }
}
function Gp(e) {
  var t = e.alternate;
  if (t !== null) {
    e.alternate = null;
    Gp(t);
  }
  e.child = null;
  e.deletions = null;
  e.sibling = null;
  if (e.tag === 5) {
    t = e.stateNode;
    if (t !== null) {
      delete t[wt];
      delete t[ui];
      delete t[Ka];
      delete t[sv];
      delete t[ov];
    }
  }
  e.stateNode = null;
  e.return = null;
  e.dependencies = null;
  e.memoizedProps = null;
  e.memoizedState = null;
  e.pendingProps = null;
  e.stateNode = null;
  e.updateQueue = null;
}
function Yp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ud(e) {
  e: while (true) {
    while (e.sibling === null) {
      if (e.return === null || Yp(e.return)) {
        return null;
      }
      e = e.return;
    }
    e.sibling.return = e.return;
    e = e.sibling;
    while (e.tag !== 5 && e.tag !== 6 && e.tag !== 18) {
      if (e.flags & 2 || e.child === null || e.tag === 4) {
        continue e;
      }
      e.child.return = e;
      e = e.child;
    }
    if (!(e.flags & 2)) {
      return e.stateNode;
    }
  }
}
function al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) {
    e = e.stateNode;
    if (t) {
      if (n.nodeType === 8) {
        n.parentNode.insertBefore(e, t);
      } else {
        n.insertBefore(e, t);
      }
    } else {
      if (n.nodeType === 8) {
        t = n.parentNode;
        t.insertBefore(e, n);
      } else {
        t = n;
        t.appendChild(e);
      }
      n = n._reactRootContainer;
      if (n == null && t.onclick === null) {
        t.onclick = Ms;
      }
    }
  } else if (r !== 4 && (e = e.child, e !== null)) {
    al(e, t, n);
    e = e.sibling;
    while (e !== null) {
      al(e, t, n);
      e = e.sibling;
    }
  }
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) {
    e = e.stateNode;
    if (t) {
      n.insertBefore(e, t);
    } else {
      n.appendChild(e);
    }
  } else if (r !== 4 && (e = e.child, e !== null)) {
    ll(e, t, n);
    e = e.sibling;
    while (e !== null) {
      ll(e, t, n);
      e = e.sibling;
    }
  }
}
var he = null;
var ut = false;
function Vt(e, t, n) {
  for (n = n.child; n !== null;) {
    Xp(e, t, n);
    n = n.sibling;
  }
}
function Xp(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function") {
    try {
      kt.onCommitFiberUnmount(ao, n);
    } catch {}
  }
  switch (n.tag) {
    case 5:
      if (!ke) {
        Qn(n, t);
      }
    case 6:
      var r = he;
      var i = ut;
      he = null;
      Vt(e, t, n);
      he = r;
      ut = i;
      if (he !== null) {
        if (ut) {
          e = he;
          n = n.stateNode;
          if (e.nodeType === 8) {
            e.parentNode.removeChild(n);
          } else {
            e.removeChild(n);
          }
        } else {
          he.removeChild(n.stateNode);
        }
      }
      break;
    case 18:
      if (he !== null) {
        if (ut) {
          e = he;
          n = n.stateNode;
          if (e.nodeType === 8) {
            Go(e.parentNode, n);
          } else if (e.nodeType === 1) {
            Go(e, n);
          }
          ii(e);
        } else {
          Go(he, n.stateNode);
        }
      }
      break;
    case 4:
      r = he;
      i = ut;
      he = n.stateNode.containerInfo;
      ut = true;
      Vt(e, t, n);
      he = r;
      ut = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i;
          var o = s.destroy;
          s = s.tag;
          if (o !== undefined && (s & 2 || s & 4)) {
            sl(n, t, o);
          }
          i = i.next;
        } while (i !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (!ke && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) {
        try {
          r.props = n.memoizedProps;
          r.state = n.memoizedState;
          r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      if (n.mode & 1) {
        ke = (r = ke) || n.memoizedState !== null;
        Vt(e, t, n);
        ke = r;
      } else {
        Vt(e, t, n);
      }
      break;
    default:
      Vt(e, t, n);
  }
}
function cd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    if (n === null) {
      n = e.stateNode = new jv();
    }
    t.forEach(function (r) {
      var i = Lv.bind(null, e, r);
      if (!n.has(r)) {
        n.add(r);
        r.then(i, i);
      }
    });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e;
        var o = t;
        var l = o;
        e: while (l !== null) {
          switch (l.tag) {
            case 5:
              he = l.stateNode;
              ut = false;
              break e;
            case 3:
              he = l.stateNode.containerInfo;
              ut = true;
              break e;
            case 4:
              he = l.stateNode.containerInfo;
              ut = true;
              break e;
          }
          l = l.return;
        }
        if (he === null) {
          throw Error(C(160));
        }
        Xp(s, o, i);
        he = null;
        ut = false;
        var u = i.alternate;
        if (u !== null) {
          u.return = null;
        }
        i.return = null;
      } catch (c) {
        J(i, t, c);
      }
    }
  }
  if (t.subtreeFlags & 12854) {
    for (t = t.child; t !== null;) {
      Qp(t, e);
      t = t.sibling;
    }
  }
}
function Qp(e, t) {
  var n = e.alternate;
  var r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      st(t, e);
      mt(e);
      if (r & 4) {
        try {
          $r(3, e, e.return);
          go(3, e);
        } catch (x) {
          J(e, e.return, x);
        }
        try {
          $r(5, e, e.return);
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 1:
      st(t, e);
      mt(e);
      if (r & 512 && n !== null) {
        Qn(n, n.return);
      }
      break;
    case 5:
      st(t, e);
      mt(e);
      if (r & 512 && n !== null) {
        Qn(n, n.return);
      }
      if (e.flags & 32) {
        var i = e.stateNode;
        try {
          ei(i, "");
        } catch (x) {
          J(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps;
        var o = n !== null ? n.memoizedProps : s;
        var l = e.type;
        var u = e.updateQueue;
        e.updateQueue = null;
        if (u !== null) {
          try {
            if (l === "input" && s.type === "radio" && s.name != null) {
              vh(i, s);
            }
            La(l, o);
            var c = La(l, s);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o];
              var f = u[o + 1];
              if (d === "style") {
                Sh(i, f);
              } else if (d === "dangerouslySetInnerHTML") {
                kh(i, f);
              } else if (d === "children") {
                ei(i, f);
              } else {
                Yl(i, d, f, c);
              }
            }
            switch (l) {
              case "input":
                Pa(i, s);
                break;
              case "textarea":
                xh(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                if (m != null) {
                  tr(i, !!s.multiple, m, false);
                } else if (h !== !!s.multiple) {
                  if (s.defaultValue != null) {
                    tr(i, !!s.multiple, s.defaultValue, true);
                  } else {
                    tr(i, !!s.multiple, s.multiple ? [] : "", false);
                  }
                }
            }
            i[ui] = s;
          } catch (x) {
            J(e, e.return, x);
          }
        }
      }
      break;
    case 6:
      st(t, e);
      mt(e);
      if (r & 4) {
        if (e.stateNode === null) {
          throw Error(C(162));
        }
        i = e.stateNode;
        s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 3:
      st(t, e);
      mt(e);
      if (r & 4 && n !== null && n.memoizedState.isDehydrated) {
        try {
          ii(t.containerInfo);
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 4:
      st(t, e);
      mt(e);
      break;
    case 13:
      st(t, e);
      mt(e);
      i = e.child;
      if (i.flags & 8192) {
        s = i.memoizedState !== null;
        i.stateNode.isHidden = s;
        if (!!s && (i.alternate === null || i.alternate.memoizedState === null)) {
          Pu = te();
        }
      }
      if (r & 4) {
        cd(e);
      }
      break;
    case 22:
      d = n !== null && n.memoizedState !== null;
      if (e.mode & 1) {
        ke = (c = ke) || d;
        st(t, e);
        ke = c;
      } else {
        st(t, e);
      }
      mt(e);
      if (r & 8192) {
        c = e.memoizedState !== null;
        if ((e.stateNode.isHidden = c) && !d && e.mode & 1) {
          M = e;
          d = e.child;
          while (d !== null) {
            for (f = M = d; M !== null;) {
              h = M;
              m = h.child;
              switch (h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, h, h.return);
                  break;
                case 1:
                  Qn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = h;
                    n = h.return;
                    try {
                      t = r;
                      v.props = t.memoizedProps;
                      v.state = t.memoizedState;
                      v.componentWillUnmount();
                    } catch (x) {
                      J(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Qn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fd(f);
                    continue;
                  }
              }
              if (m !== null) {
                m.return = h;
                M = m;
              } else {
                fd(f);
              }
            }
            d = d.sibling;
          }
        }
        d = null;
        f = e;
        e: while (true) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                i = f.stateNode;
                if (c) {
                  s = i.style;
                  if (typeof s.setProperty == "function") {
                    s.setProperty("display", "none", "important");
                  } else {
                    s.display = "none";
                  }
                } else {
                  l = f.stateNode;
                  u = f.memoizedProps.style;
                  o = u != null && u.hasOwnProperty("display") ? u.display : null;
                  l.style.display = jh("display", o);
                }
              } catch (x) {
                J(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null) {
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (x) {
                J(e, e.return, x);
              }
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f;
            f = f.child;
            continue;
          }
          if (f === e) {
            break e;
          }
          while (f.sibling === null) {
            if (f.return === null || f.return === e) {
              break e;
            }
            if (d === f) {
              d = null;
            }
            f = f.return;
          }
          if (d === f) {
            d = null;
          }
          f.sibling.return = f.return;
          f = f.sibling;
        }
      }
      break;
    case 19:
      st(t, e);
      mt(e);
      if (r & 4) {
        cd(e);
      }
      break;
    case 21:
      break;
    default:
      st(t, e);
      mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Yp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          if (r.flags & 32) {
            ei(i, "");
            r.flags &= -33;
          }
          var s = ud(e);
          ll(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo;
          var l = ud(e);
          al(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  if (t & 4096) {
    e.flags &= -4097;
  }
}
function bv(e, t, n) {
  M = e;
  Zp(e);
}
function Zp(e, t, n) {
  var r = (e.mode & 1) !== 0;
  for (; M !== null;) {
    var i = M;
    var s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Xi;
      if (!o) {
        var l = i.alternate;
        var u = l !== null && l.memoizedState !== null || ke;
        l = Xi;
        var c = ke;
        Xi = o;
        if ((ke = u) && !c) {
          for (M = i; M !== null;) {
            o = M;
            u = o.child;
            if (o.tag === 22 && o.memoizedState !== null) {
              hd(i);
            } else if (u !== null) {
              u.return = o;
              M = u;
            } else {
              hd(i);
            }
          }
        }
        while (s !== null) {
          M = s;
          Zp(s);
          s = s.sibling;
        }
        M = i;
        Xi = l;
        ke = c;
      }
      dd(e);
    } else if (i.subtreeFlags & 8772 && s !== null) {
      s.return = i;
      M = s;
    } else {
      dd(e);
    }
  }
}
function dd(e) {
  while (M !== null) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              if (!ke) {
                go(5, t);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ke) {
                if (n === null) {
                  r.componentDidMount();
                } else {
                  var i = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              }
              var s = t.updateQueue;
              if (s !== null) {
                Xc(t, s, r);
              }
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                n = null;
                if (t.child !== null) {
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                }
                Xc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    if (u.autoFocus) {
                      n.focus();
                    }
                    break;
                  case "img":
                    if (u.src) {
                      n.src = u.src;
                    }
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    if (f !== null) {
                      ii(f);
                    }
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        }
        if (!ke) {
          if (t.flags & 512) {
            ol(t);
          }
        }
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    n = t.sibling;
    if (n !== null) {
      n.return = t.return;
      M = n;
      break;
    }
    M = t.return;
  }
}
function fd(e) {
  while (M !== null) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return;
      M = n;
      break;
    }
    M = t.return;
  }
}
function hd(e) {
  while (M !== null) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            go(4, t);
          } catch (u) {
            J(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              J(t, i, u);
            }
          }
          var s = t.return;
          try {
            ol(t);
          } catch (u) {
            J(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ol(t);
          } catch (u) {
            J(t, o, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return;
      M = l;
      break;
    }
    M = t.return;
  }
}
var Cv = Math.ceil;
var _s = It.ReactCurrentDispatcher;
var Cu = It.ReactCurrentOwner;
var Je = It.ReactCurrentBatchConfig;
var F = 0;
var fe = null;
var se = null;
var ge = 0;
var ze = 0;
var Zn = cn(0);
var le = 0;
var mi = null;
var Ln = 0;
var yo = 0;
var Tu = 0;
var Kr = null;
var Le = null;
var Pu = 0;
var hr = Infinity;
var Ct = null;
var Ws = false;
var ul = null;
var en = null;
var Qi = false;
var Kt = null;
var Us = 0;
var Gr = 0;
var cl = null;
var fs = -1;
var hs = 0;
function Pe() {
  if (F & 6) {
    return te();
  } else if (fs !== -1) {
    return fs;
  } else {
    return fs = te();
  }
}
function tn(e) {
  if (e.mode & 1) {
    if (F & 2 && ge !== 0) {
      return ge & -ge;
    } else if (lv.transition !== null) {
      if (hs === 0) {
        hs = Ih();
      }
      return hs;
    } else {
      e = z;
      if (e === 0) {
        e = window.event;
        e = e === undefined ? 16 : Wh(e.type);
      }
      return e;
    }
  } else {
    return 1;
  }
}
function ft(e, t, n, r) {
  if (Gr > 50) {
    Gr = 0;
    cl = null;
    throw Error(C(185));
  }
  Si(e, n, r);
  if (!(F & 2) || e !== fe) {
    if (e === fe) {
      if (!(F & 2)) {
        yo |= n;
      }
      if (le === 4) {
        Ht(e, ge);
      }
    }
    Ve(e, r);
    if (n === 1 && F === 0 && !(t.mode & 1)) {
      hr = te() + 500;
      if (ho) {
        dn();
      }
    }
  }
}
function Ve(e, t) {
  var n = e.callbackNode;
  l0(e, t);
  var r = Ts(e, e === fe ? ge : 0);
  if (r === 0) {
    if (n !== null) {
      jc(n);
    }
    e.callbackNode = null;
    e.callbackPriority = 0;
  } else {
    t = r & -r;
    if (e.callbackPriority !== t) {
      if (n != null) {
        jc(n);
      }
      if (t === 1) {
        if (e.tag === 0) {
          av(pd.bind(null, e));
        } else {
          ap(pd.bind(null, e));
        }
        rv(function () {
          if (!(F & 6)) {
            dn();
          }
        });
        n = null;
      } else {
        switch (Vh(r)) {
          case 1:
            n = Jl;
            break;
          case 4:
            n = Rh;
            break;
          case 16:
            n = Cs;
            break;
          case 536870912:
            n = Dh;
            break;
          default:
            n = Cs;
        }
        n = sm(n, qp.bind(null, e));
      }
      e.callbackPriority = t;
      e.callbackNode = n;
    }
  }
}
function qp(e, t) {
  fs = -1;
  hs = 0;
  if (F & 6) {
    throw Error(C(327));
  }
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) {
    return null;
  }
  var r = Ts(e, e === fe ? ge : 0);
  if (r === 0) {
    return null;
  }
  if (r & 30 || r & e.expiredLanes || t) {
    t = Hs(e, r);
  } else {
    t = r;
    var i = F;
    F |= 2;
    var s = em();
    if (fe !== e || ge !== t) {
      Ct = null;
      hr = te() + 500;
      Cn(e, t);
    }
    do {
      try {
        Nv();
        break;
      } catch (l) {
        Jp(e, l);
      }
    } while (true);
    fu();
    _s.current = s;
    F = i;
    if (se !== null) {
      t = 0;
    } else {
      fe = null;
      ge = 0;
      t = le;
    }
  }
  if (t !== 0) {
    if (t === 2) {
      i = Ba(e);
      if (i !== 0) {
        r = i;
        t = dl(e, i);
      }
    }
    if (t === 1) {
      n = mi;
      Cn(e, 0);
      Ht(e, r);
      Ve(e, te());
      throw n;
    }
    if (t === 6) {
      Ht(e, r);
    } else {
      i = e.current.alternate;
      if (!(r & 30) && !Tv(i) && (t = Hs(e, r), t === 2 && (s = Ba(e), s !== 0 && (r = s, t = dl(e, s))), t === 1)) {
        n = mi;
        Cn(e, 0);
        Ht(e, r);
        Ve(e, te());
        throw n;
      }
      e.finishedWork = i;
      e.finishedLanes = r;
      switch (t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          vn(e, Le, Ct);
          break;
        case 3:
          Ht(e, r);
          if ((r & 130023424) === r && (t = Pu + 500 - te(), t > 10)) {
            if (Ts(e, 0) !== 0) {
              break;
            }
            i = e.suspendedLanes;
            if ((i & r) !== r) {
              Pe();
              e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = $a(vn.bind(null, e, Le, Ct), t);
            break;
          }
          vn(e, Le, Ct);
          break;
        case 4:
          Ht(e, r);
          if ((r & 4194240) === r) {
            break;
          }
          t = e.eventTimes;
          i = -1;
          while (r > 0) {
            var o = 31 - dt(r);
            s = 1 << o;
            o = t[o];
            if (o > i) {
              i = o;
            }
            r &= ~s;
          }
          r = i;
          r = te() - r;
          r = (r < 120 ? 120 : r < 480 ? 480 : r < 1080 ? 1080 : r < 1920 ? 1920 : r < 3000 ? 3000 : r < 4320 ? 4320 : Cv(r / 1960) * 1960) - r;
          if (r > 10) {
            e.timeoutHandle = $a(vn.bind(null, e, Le, Ct), r);
            break;
          }
          vn(e, Le, Ct);
          break;
        case 5:
          vn(e, Le, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  Ve(e, te());
  if (e.callbackNode === n) {
    return qp.bind(null, e);
  } else {
    return null;
  }
}
function dl(e, t) {
  var n = Kr;
  if (e.current.memoizedState.isDehydrated) {
    Cn(e, t).flags |= 256;
  }
  e = Hs(e, t);
  if (e !== 2) {
    t = Le;
    Le = n;
    if (t !== null) {
      fl(t);
    }
  }
  return e;
}
function fl(e) {
  if (Le === null) {
    Le = e;
  } else {
    Le.push.apply(Le, e);
  }
}
function Tv(e) {
  var t = e;
  for (;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          var s = i.getSnapshot;
          i = i.value;
          try {
            if (!pt(s(), i)) {
              return false;
            }
          } catch {
            return false;
          }
        }
      }
    }
    n = t.child;
    if (t.subtreeFlags & 16384 && n !== null) {
      n.return = t;
      t = n;
    } else {
      if (t === e) {
        break;
      }
      while (t.sibling === null) {
        if (t.return === null || t.return === e) {
          return true;
        }
        t = t.return;
      }
      t.sibling.return = t.return;
      t = t.sibling;
    }
  }
  return true;
}
function Ht(e, t) {
  t &= ~Tu;
  t &= ~yo;
  e.suspendedLanes |= t;
  e.pingedLanes &= ~t;
  e = e.expirationTimes;
  while (t > 0) {
    var n = 31 - dt(t);
    var r = 1 << n;
    e[n] = -1;
    t &= ~r;
  }
}
function pd(e) {
  if (F & 6) {
    throw Error(C(327));
  }
  or();
  var t = Ts(e, 0);
  if (!(t & 1)) {
    Ve(e, te());
    return null;
  }
  var n = Hs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ba(e);
    if (r !== 0) {
      t = r;
      n = dl(e, r);
    }
  }
  if (n === 1) {
    n = mi;
    Cn(e, 0);
    Ht(e, t);
    Ve(e, te());
    throw n;
  }
  if (n === 6) {
    throw Error(C(345));
  }
  e.finishedWork = e.current.alternate;
  e.finishedLanes = t;
  vn(e, Le, Ct);
  Ve(e, te());
  return null;
}
function Nu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n;
    if (F === 0) {
      hr = te() + 500;
      if (ho) {
        dn();
      }
    }
  }
}
function Rn(e) {
  if (Kt !== null && Kt.tag === 0 && !(F & 6)) {
    or();
  }
  var t = F;
  F |= 1;
  var n = Je.transition;
  var r = z;
  try {
    Je.transition = null;
    z = 1;
    if (e) {
      return e();
    }
  } finally {
    z = r;
    Je.transition = n;
    F = t;
    if (!(F & 6)) {
      dn();
    }
  }
}
function Eu() {
  ze = Zn.current;
  G(Zn);
}
function Cn(e, t) {
  e.finishedWork = null;
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1) {
    e.timeoutHandle = -1;
    nv(n);
  }
  if (se !== null) {
    for (n = se.return; n !== null;) {
      var r = n;
      uu(r);
      switch (r.tag) {
        case 1:
          r = r.type.childContextTypes;
          if (r != null) {
            As();
          }
          break;
        case 3:
          dr();
          G(De);
          G(je);
          vu();
          break;
        case 5:
          yu(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          G(X);
          break;
        case 19:
          G(X);
          break;
        case 10:
          hu(r.type._context);
          break;
        case 22:
        case 23:
          Eu();
      }
      n = n.return;
    }
  }
  fe = e;
  se = e = nn(e.current, null);
  ge = ze = t;
  le = 0;
  mi = null;
  Tu = yo = Ln = 0;
  Le = Kr = null;
  if (kn !== null) {
    for (t = 0; t < kn.length; t++) {
      n = kn[t];
      r = n.interleaved;
      if (r !== null) {
        n.interleaved = null;
        var i = r.next;
        var s = n.pending;
        if (s !== null) {
          var o = s.next;
          s.next = i;
          r.next = o;
        }
        n.pending = r;
      }
    }
    kn = null;
  }
  return e;
}
function Jp(e, t) {
  do {
    var n = se;
    try {
      fu();
      us.current = zs;
      if (Fs) {
        for (var r = Q.memoizedState; r !== null;) {
          var i = r.queue;
          if (i !== null) {
            i.pending = null;
          }
          r = r.next;
        }
        Fs = false;
      }
      An = 0;
      de = ae = Q = null;
      Hr = false;
      fi = 0;
      Cu.current = null;
      if (n === null || n.return === null) {
        le = 1;
        mi = t;
        se = null;
        break;
      }
      e: {
        var s = e;
        var o = n.return;
        var l = n;
        var u = t;
        t = ge;
        l.flags |= 32768;
        if (u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u;
          var d = l;
          var f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            if (h) {
              d.updateQueue = h.updateQueue;
              d.memoizedState = h.memoizedState;
              d.lanes = h.lanes;
            } else {
              d.updateQueue = null;
              d.memoizedState = null;
            }
          }
          var m = td(o);
          if (m !== null) {
            m.flags &= -257;
            nd(m, o, l, s, t);
            if (m.mode & 1) {
              ed(s, c, t);
            }
            t = m;
            u = c;
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(u);
              t.updateQueue = x;
            } else {
              v.add(u);
            }
            break e;
          } else {
            if (!(t & 1)) {
              ed(s, c, t);
              Mu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (Y && l.mode & 1) {
          var k = td(o);
          if (k !== null) {
            if (!(k.flags & 65536)) {
              k.flags |= 256;
            }
            nd(k, o, l, s, t);
            cu(fr(u, l));
            break e;
          }
        }
        s = u = fr(u, l);
        if (le !== 4) {
          le = 2;
        }
        if (Kr === null) {
          Kr = [s];
        } else {
          Kr.push(s);
        }
        s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536;
              t &= -t;
              s.lanes |= t;
              var g = Vp(s, u, t);
              Yc(s, g);
              break e;
            case 1:
              l = u;
              var p = s.type;
              var y = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (en === null || !en.has(y)))) {
                s.flags |= 65536;
                t &= -t;
                s.lanes |= t;
                var w = Bp(s, l, t);
                Yc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      nm(n);
    } catch (S) {
      t = S;
      if (se === n && n !== null) {
        se = n = n.return;
      }
      continue;
    }
    break;
  } while (true);
}
function em() {
  var e = _s.current;
  _s.current = zs;
  if (e === null) {
    return zs;
  } else {
    return e;
  }
}
function Mu() {
  if (le === 0 || le === 3 || le === 2) {
    le = 4;
  }
  if (fe !== null && (!!(Ln & 268435455) || !!(yo & 268435455))) {
    Ht(fe, ge);
  }
}
function Hs(e, t) {
  var n = F;
  F |= 2;
  var r = em();
  if (fe !== e || ge !== t) {
    Ct = null;
    Cn(e, t);
  }
  do {
    try {
      Pv();
      break;
    } catch (i) {
      Jp(e, i);
    }
  } while (true);
  fu();
  F = n;
  _s.current = r;
  if (se !== null) {
    throw Error(C(261));
  }
  fe = null;
  ge = 0;
  return le;
}
function Pv() {
  while (se !== null) {
    tm(se);
  }
}
function Nv() {
  while (se !== null && !Jy()) {
    tm(se);
  }
}
function tm(e) {
  var t = im(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps;
  if (t === null) {
    nm(e);
  } else {
    se = t;
  }
  Cu.current = null;
}
function nm(e) {
  var t = e;
  do {
    var n = t.alternate;
    e = t.return;
    if (t.flags & 32768) {
      n = kv(n, t);
      if (n !== null) {
        n.flags &= 32767;
        se = n;
        return;
      }
      if (e !== null) {
        e.flags |= 32768;
        e.subtreeFlags = 0;
        e.deletions = null;
      } else {
        le = 6;
        se = null;
        return;
      }
    } else {
      n = wv(n, t, ze);
      if (n !== null) {
        se = n;
        return;
      }
    }
    t = t.sibling;
    if (t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  if (le === 0) {
    le = 5;
  }
}
function vn(e, t, n) {
  var r = z;
  var i = Je.transition;
  try {
    Je.transition = null;
    z = 1;
    Ev(e, t, n, r);
  } finally {
    Je.transition = i;
    z = r;
  }
  return null;
}
function Ev(e, t, n, r) {
  do {
    or();
  } while (Kt !== null);
  if (F & 6) {
    throw Error(C(327));
  }
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) {
    return null;
  }
  e.finishedWork = null;
  e.finishedLanes = 0;
  if (n === e.current) {
    throw Error(C(177));
  }
  e.callbackNode = null;
  e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  u0(e, s);
  if (e === fe) {
    se = fe = null;
    ge = 0;
  }
  if ((!!(n.subtreeFlags & 2064) || !!(n.flags & 2064)) && !Qi) {
    Qi = true;
    sm(Cs, function () {
      or();
      return null;
    });
  }
  s = (n.flags & 15990) !== 0;
  if (n.subtreeFlags & 15990 || s) {
    s = Je.transition;
    Je.transition = null;
    var o = z;
    z = 1;
    var l = F;
    F |= 4;
    Cu.current = null;
    Sv(e, n);
    Qp(n, e);
    X0(Ua);
    Ps = !!Wa;
    Ua = Wa = null;
    e.current = n;
    bv(n);
    e0();
    F = l;
    z = o;
    Je.transition = s;
  } else {
    e.current = n;
  }
  if (Qi) {
    Qi = false;
    Kt = e;
    Us = i;
  }
  s = e.pendingLanes;
  if (s === 0) {
    en = null;
  }
  r0(n.stateNode);
  Ve(e, te());
  if (t !== null) {
    r = e.onRecoverableError;
    n = 0;
    for (; n < t.length; n++) {
      i = t[n];
      r(i.value, {
        componentStack: i.stack,
        digest: i.digest
      });
    }
  }
  if (Ws) {
    Ws = false;
    e = ul;
    ul = null;
    throw e;
  }
  if (Us & 1 && e.tag !== 0) {
    or();
  }
  s = e.pendingLanes;
  if (s & 1) {
    if (e === cl) {
      Gr++;
    } else {
      Gr = 0;
      cl = e;
    }
  } else {
    Gr = 0;
  }
  dn();
  return null;
}
function or() {
  if (Kt !== null) {
    var e = Vh(Us);
    var t = Je.transition;
    var n = z;
    try {
      Je.transition = null;
      z = e < 16 ? 16 : e;
      if (Kt === null) {
        var r = false;
      } else {
        e = Kt;
        Kt = null;
        Us = 0;
        if (F & 6) {
          throw Error(C(331));
        }
        var i = F;
        F |= 4;
        M = e.current;
        while (M !== null) {
          var s = M;
          var o = s.child;
          if (M.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (M = c; M !== null;) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) {
                    f.return = d;
                    M = f;
                  } else {
                    while (M !== null) {
                      d = M;
                      var h = d.sibling;
                      var m = d.return;
                      Gp(d);
                      if (d === c) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = m;
                        M = h;
                        break;
                      }
                      M = m;
                    }
                  }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var k = x.sibling;
                    x.sibling = null;
                    x = k;
                  } while (x !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) {
            o.return = s;
            M = o;
          } else {
            e: while (M !== null) {
              s = M;
              if (s.flags & 2048) {
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, s, s.return);
                }
              }
              var g = s.sibling;
              if (g !== null) {
                g.return = s.return;
                M = g;
                break e;
              }
              M = s.return;
            }
          }
        }
        var p = e.current;
        for (M = p; M !== null;) {
          o = M;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) {
            y.return = o;
            M = y;
          } else {
            e: for (o = p; M !== null;) {
              l = M;
              if (l.flags & 2048) {
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      go(9, l);
                  }
                } catch (S) {
                  J(l, l.return, S);
                }
              }
              if (l === o) {
                M = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                w.return = l.return;
                M = w;
                break e;
              }
              M = l.return;
            }
          }
        }
        F = i;
        dn();
        if (kt && typeof kt.onPostCommitFiberRoot == "function") {
          try {
            kt.onPostCommitFiberRoot(ao, e);
          } catch {}
        }
        r = true;
      }
      return r;
    } finally {
      z = n;
      Je.transition = t;
    }
  }
  return false;
}
function md(e, t, n) {
  t = fr(n, t);
  t = Vp(e, t, 1);
  e = Jt(e, t, 1);
  t = Pe();
  if (e !== null) {
    Si(e, 1, t);
    Ve(e, t);
  }
}
function J(e, t, n) {
  if (e.tag === 3) {
    md(e, e, n);
  } else {
    while (t !== null) {
      if (t.tag === 3) {
        md(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
          e = fr(n, e);
          e = Bp(t, e, 1);
          t = Jt(t, e, 1);
          e = Pe();
          if (t !== null) {
            Si(t, 1, e);
            Ve(t, e);
          }
          break;
        }
      }
      t = t.return;
    }
  }
}
function Mv(e, t, n) {
  var r = e.pingCache;
  if (r !== null) {
    r.delete(t);
  }
  t = Pe();
  e.pingedLanes |= e.suspendedLanes & n;
  if (fe === e && (ge & n) === n) {
    if (le === 4 || le === 3 && (ge & 130023424) === ge && te() - Pu < 500) {
      Cn(e, 0);
    } else {
      Tu |= n;
    }
  }
  Ve(e, t);
}
function rm(e, t) {
  if (t === 0) {
    if (e.mode & 1) {
      t = zi;
      zi <<= 1;
      if (!(zi & 130023424)) {
        zi = 4194304;
      }
    } else {
      t = 1;
    }
  }
  var n = Pe();
  e = Rt(e, t);
  if (e !== null) {
    Si(e, t, n);
    Ve(e, n);
  }
}
function Av(e) {
  var t = e.memoizedState;
  var n = 0;
  if (t !== null) {
    n = t.retryLane;
  }
  rm(e, n);
}
function Lv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode;
      var i = e.memoizedState;
      if (i !== null) {
        n = i.retryLane;
      }
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  if (r !== null) {
    r.delete(t);
  }
  rm(e, n);
}
var im;
im = function (e, t, n) {
  if (e !== null) {
    if (e.memoizedProps !== t.pendingProps || De.current) {
      Re = true;
    } else {
      if (!(e.lanes & n) && !(t.flags & 128)) {
        Re = false;
        return xv(e, t, n);
      }
      Re = !!(e.flags & 131072);
    }
  } else {
    Re = false;
    if (Y && t.flags & 1048576) {
      lp(t, Ds, t.index);
    }
  }
  t.lanes = 0;
  switch (t.tag) {
    case 2:
      var r = t.type;
      ds(e, t);
      e = t.pendingProps;
      var i = lr(t, je.current);
      sr(t, n);
      i = wu(null, t, r, e, i, n);
      var s = ku();
      t.flags |= 1;
      if (typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === undefined) {
        t.tag = 1;
        t.memoizedState = null;
        t.updateQueue = null;
        if (Ie(r)) {
          s = true;
          Ls(t);
        } else {
          s = false;
        }
        t.memoizedState = i.state ?? null;
        mu(t);
        i.updater = mo;
        t.stateNode = i;
        i._reactInternals = t;
        qa(t, r, e, n);
        t = tl(null, t, r, true, s, n);
      } else {
        t.tag = 0;
        if (Y && s) {
          lu(t);
        }
        be(null, t, i, n);
        t = t.child;
      }
      return t;
    case 16:
      r = t.elementType;
      e: {
        ds(e, t);
        e = t.pendingProps;
        i = r._init;
        r = i(r._payload);
        t.type = r;
        i = t.tag = Dv(r);
        e = lt(r, e);
        switch (i) {
          case 0:
            t = el(null, t, r, e, n);
            break e;
          case 1:
            t = sd(null, t, r, e, n);
            break e;
          case 11:
            t = rd(null, t, r, e, n);
            break e;
          case 14:
            t = id(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      r = t.type;
      i = t.pendingProps;
      i = t.elementType === r ? i : lt(r, i);
      return el(e, t, r, i, n);
    case 1:
      r = t.type;
      i = t.pendingProps;
      i = t.elementType === r ? i : lt(r, i);
      return sd(e, t, r, i, n);
    case 3:
      e: {
        _p(t);
        if (e === null) {
          throw Error(C(387));
        }
        r = t.pendingProps;
        s = t.memoizedState;
        i = s.element;
        pp(e, t);
        Bs(t, r, null, n);
        var o = t.memoizedState;
        r = o.element;
        if (s.isDehydrated) {
          s = {
            element: r,
            isDehydrated: false,
            cache: o.cache,
            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
            transitions: o.transitions
          };
          t.updateQueue.baseState = s;
          t.memoizedState = s;
          if (t.flags & 256) {
            i = fr(Error(C(423)), t);
            t = od(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(C(424)), t);
            t = od(e, t, r, n, i);
            break e;
          } else {
            _e = qt(t.stateNode.containerInfo.firstChild);
            We = t;
            Y = true;
            ct = null;
            n = fp(t, null, r, n);
            t.child = n;
            while (n) {
              n.flags = n.flags & -3 | 4096;
              n = n.sibling;
            }
          }
        } else {
          ur();
          if (r === i) {
            t = Dt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      mp(t);
      if (e === null) {
        Xa(t);
      }
      r = t.type;
      i = t.pendingProps;
      s = e !== null ? e.memoizedProps : null;
      o = i.children;
      if (Ha(r, i)) {
        o = null;
      } else if (s !== null && Ha(r, s)) {
        t.flags |= 32;
      }
      zp(e, t);
      be(e, t, o, n);
      return t.child;
    case 6:
      if (e === null) {
        Xa(t);
      }
      return null;
    case 13:
      return Wp(e, t, n);
    case 4:
      gu(t, t.stateNode.containerInfo);
      r = t.pendingProps;
      if (e === null) {
        t.child = cr(t, null, r, n);
      } else {
        be(e, t, r, n);
      }
      return t.child;
    case 11:
      r = t.type;
      i = t.pendingProps;
      i = t.elementType === r ? i : lt(r, i);
      return rd(e, t, r, i, n);
    case 7:
      be(e, t, t.pendingProps, n);
      return t.child;
    case 8:
      be(e, t, t.pendingProps.children, n);
      return t.child;
    case 12:
      be(e, t, t.pendingProps.children, n);
      return t.child;
    case 10:
      e: {
        r = t.type._context;
        i = t.pendingProps;
        s = t.memoizedProps;
        o = i.value;
        H(Is, r._currentValue);
        r._currentValue = o;
        if (s !== null) {
          if (pt(s.value, o)) {
            if (s.children === i.children && !De.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else {
            s = t.child;
            if (s !== null) {
              s.return = t;
            }
            while (s !== null) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var u = l.firstContext; u !== null;) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      u = Mt(-1, n & -n);
                      u.tag = 2;
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        if (d === null) {
                          u.next = u;
                        } else {
                          u.next = d.next;
                          d.next = u;
                        }
                        c.pending = u;
                      }
                    }
                    s.lanes |= n;
                    u = s.alternate;
                    if (u !== null) {
                      u.lanes |= n;
                    }
                    Qa(s.return, n, t);
                    l.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) {
                o = s.type === t.type ? null : s.child;
              } else if (s.tag === 18) {
                o = s.return;
                if (o === null) {
                  throw Error(C(341));
                }
                o.lanes |= n;
                l = o.alternate;
                if (l !== null) {
                  l.lanes |= n;
                }
                Qa(o, n, t);
                o = s.sibling;
              } else {
                o = s.child;
              }
              if (o !== null) {
                o.return = s;
              } else {
                for (o = s; o !== null;) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  s = o.sibling;
                  if (s !== null) {
                    s.return = o.return;
                    o = s;
                    break;
                  }
                  o = o.return;
                }
              }
              s = o;
            }
          }
        }
        be(e, t, i.children, n);
        t = t.child;
      }
      return t;
    case 9:
      i = t.type;
      r = t.pendingProps.children;
      sr(t, n);
      i = nt(i);
      r = r(i);
      t.flags |= 1;
      be(e, t, r, n);
      return t.child;
    case 14:
      r = t.type;
      i = lt(r, t.pendingProps);
      i = lt(r.type, i);
      return id(e, t, r, i, n);
    case 15:
      return Op(e, t, t.type, t.pendingProps, n);
    case 17:
      r = t.type;
      i = t.pendingProps;
      i = t.elementType === r ? i : lt(r, i);
      ds(e, t);
      t.tag = 1;
      if (Ie(r)) {
        e = true;
        Ls(t);
      } else {
        e = false;
      }
      sr(t, n);
      Ip(t, r, i);
      qa(t, r, i, n);
      return tl(null, t, r, true, e, n);
    case 19:
      return Up(e, t, n);
    case 22:
      return Fp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function sm(e, t) {
  return Lh(e, t);
}
function Rv(e, t, n, r) {
  this.tag = e;
  this.key = n;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = t;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = r;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Ze(e, t, n, r) {
  return new Rv(e, t, n, r);
}
function Au(e) {
  e = e.prototype;
  return !!e && !!e.isReactComponent;
}
function Dv(e) {
  if (typeof e == "function") {
    if (Au(e)) {
      return 1;
    } else {
      return 0;
    }
  }
  if (e != null) {
    e = e.$$typeof;
    if (e === Ql) {
      return 11;
    }
    if (e === Zl) {
      return 14;
    }
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  if (n === null) {
    n = Ze(e.tag, t, e.key, e.mode);
    n.elementType = e.elementType;
    n.type = e.type;
    n.stateNode = e.stateNode;
    n.alternate = e;
    e.alternate = n;
  } else {
    n.pendingProps = t;
    n.type = e.type;
    n.flags = 0;
    n.subtreeFlags = 0;
    n.deletions = null;
  }
  n.flags = e.flags & 14680064;
  n.childLanes = e.childLanes;
  n.lanes = e.lanes;
  n.child = e.child;
  n.memoizedProps = e.memoizedProps;
  n.memoizedState = e.memoizedState;
  n.updateQueue = e.updateQueue;
  t = e.dependencies;
  n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  };
  n.sibling = e.sibling;
  n.index = e.index;
  n.ref = e.ref;
  return n;
}
function ps(e, t, n, r, i, s) {
  var o = 2;
  r = e;
  if (typeof e == "function") {
    if (Au(e)) {
      o = 1;
    }
  } else if (typeof e == "string") {
    o = 5;
  } else {
    e: switch (e) {
      case _n:
        return Tn(n.children, i, s, t);
      case Xl:
        o = 8;
        i |= 8;
        break;
      case ja:
        e = Ze(12, n, t, i | 2);
        e.elementType = ja;
        e.lanes = s;
        return e;
      case Sa:
        e = Ze(13, n, t, i);
        e.elementType = Sa;
        e.lanes = s;
        return e;
      case ba:
        e = Ze(19, n, t, i);
        e.elementType = ba;
        e.lanes = s;
        return e;
      case mh:
        return vo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null) {
          switch (e.$$typeof) {
            case hh:
              o = 10;
              break e;
            case ph:
              o = 9;
              break e;
            case Ql:
              o = 11;
              break e;
            case Zl:
              o = 14;
              break e;
            case _t:
              o = 16;
              r = null;
              break e;
          }
        }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  }
  t = Ze(o, n, t, i);
  t.elementType = e;
  t.type = r;
  t.lanes = s;
  return t;
}
function Tn(e, t, n, r) {
  e = Ze(7, e, r, t);
  e.lanes = n;
  return e;
}
function vo(e, t, n, r) {
  e = Ze(22, e, r, t);
  e.elementType = mh;
  e.lanes = n;
  e.stateNode = {
    isHidden: false
  };
  return e;
}
function ta(e, t, n) {
  e = Ze(6, e, null, t);
  e.lanes = n;
  return e;
}
function na(e, t, n) {
  t = Ze(4, e.children !== null ? e.children : [], e.key, t);
  t.lanes = n;
  t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  };
  return t;
}
function Iv(e, t, n, r, i) {
  this.tag = t;
  this.containerInfo = e;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = Vo(0);
  this.expirationTimes = Vo(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Vo(0);
  this.identifierPrefix = r;
  this.onRecoverableError = i;
  this.mutableSourceEagerHydrationData = null;
}
function Lu(e, t, n, r, i, s, o, l, u) {
  e = new Iv(e, t, n, l, u);
  if (t === 1) {
    t = 1;
    if (s === true) {
      t |= 8;
    }
  } else {
    t = 0;
  }
  s = Ze(3, null, null, t);
  e.current = s;
  s.stateNode = e;
  s.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  };
  mu(s);
  return e;
}
function Vv(e, t, n, r = null) {
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function om(e) {
  if (!e) {
    return on;
  }
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) {
      throw Error(C(170));
    }
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) {
      return op(e, n, t);
    }
  }
  return t;
}
function am(e, t, n, r, i, s, o, l, u) {
  e = Lu(n, r, true, e, i, s, o, l, u);
  e.context = om(null);
  n = e.current;
  r = Pe();
  i = tn(n);
  s = Mt(r, i);
  s.callback = t ?? null;
  Jt(n, s, i);
  e.current.lanes = i;
  Si(e, i, r);
  Ve(e, r);
  return e;
}
function xo(e, t, n, r) {
  var i = t.current;
  var s = Pe();
  var o = tn(i);
  n = om(n);
  if (t.context === null) {
    t.context = n;
  } else {
    t.pendingContext = n;
  }
  t = Mt(s, o);
  t.payload = {
    element: e
  };
  r = r === undefined ? null : r;
  if (r !== null) {
    t.callback = r;
  }
  e = Jt(i, t, o);
  if (e !== null) {
    ft(e, i, o, s);
    ls(e, i, o);
  }
  return o;
}
function $s(e) {
  e = e.current;
  if (!e.child) {
    return null;
  }
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gd(e, t) {
  e = e.memoizedState;
  if (e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ru(e, t) {
  gd(e, t);
  if (e = e.alternate) {
    gd(e, t);
  }
}
function Bv() {
  return null;
}
var lm = typeof reportError == "function" ? reportError : function (e) {
  console.error(e);
};
function Du(e) {
  this._internalRoot = e;
}
wo.prototype.render = Du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) {
    throw Error(C(409));
  }
  xo(e, t, null, null);
};
wo.prototype.unmount = Du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      xo(null, e, null, null);
    });
    t[Lt] = null;
  }
};
function wo(e) {
  this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fh();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e);
    if (n === 0) {
      _h(e);
    }
  }
};
function Iu(e) {
  return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11);
}
function ko(e) {
  return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11 || e.nodeType === 8 && e.nodeValue === " react-mount-point-unstable ");
}
function yd() {}
function Ov(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = $s(o);
        s.call(c);
      };
    }
    var o = am(t, r, e, 0, null, false, false, "", yd);
    e._reactRootContainer = o;
    e[Lt] = o.current;
    ai(e.nodeType === 8 ? e.parentNode : e);
    Rn();
    return o;
  }
  while (i = e.lastChild) {
    e.removeChild(i);
  }
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = $s(u);
      l.call(c);
    };
  }
  var u = Lu(e, 0, false, null, null, false, false, "", yd);
  e._reactRootContainer = u;
  e[Lt] = u.current;
  ai(e.nodeType === 8 ? e.parentNode : e);
  Rn(function () {
    xo(t, u, n, r);
  });
  return u;
}
function jo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = $s(o);
        l.call(u);
      };
    }
    xo(t, o, e, i);
  } else {
    o = Ov(n, t, e, i, r);
  }
  return $s(o);
}
Bh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        if (n !== 0) {
          eu(t, n | 1);
          Ve(t, te());
          if (!(F & 6)) {
            hr = te() + 500;
            dn();
          }
        }
      }
      break;
    case 13:
      Rn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var i = Pe();
          ft(r, e, 1, i);
        }
      });
      Ru(e, 1);
  }
};
tu = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ft(t, e, 134217728, n);
    }
    Ru(e, 134217728);
  }
};
Oh = function (e) {
  if (e.tag === 13) {
    var t = tn(e);
    var n = Rt(e, t);
    if (n !== null) {
      var r = Pe();
      ft(n, e, t, r);
    }
    Ru(e, t);
  }
};
Fh = function () {
  return z;
};
zh = function (e, t) {
  var n = z;
  try {
    z = e;
    return t();
  } finally {
    z = n;
  }
};
Da = function (e, t, n) {
  switch (t) {
    case "input":
      Pa(e, n);
      t = n.name;
      if (n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) {
          n = n.parentNode;
        }
        n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]");
        t = 0;
        for (; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = fo(r);
            if (!i) {
              throw Error(C(90));
            }
            yh(r);
            Pa(r, i);
          }
        }
      }
      break;
    case "textarea":
      xh(e, n);
      break;
    case "select":
      t = n.value;
      if (t != null) {
        tr(e, !!n.multiple, t, false);
      }
  }
};
Th = Nu;
Ph = Rn;
var Fv = {
  usingClientEntryPoint: false,
  Events: [Ci, $n, fo, bh, Ch, Nu]
};
var Ar = {
  findFiberByHostInstance: wn,
  bundleType: 0,
  version: "18.3.1",
  rendererPackageName: "react-dom"
};
var zv = {
  bundleType: Ar.bundleType,
  version: Ar.version,
  rendererPackageName: Ar.rendererPackageName,
  rendererConfig: Ar.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: It.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (e) {
    e = Mh(e);
    if (e === null) {
      return null;
    } else {
      return e.stateNode;
    }
  },
  findFiberByHostInstance: Ar.findFiberByHostInstance || Bv,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zi.isDisabled && Zi.supportsFiber) {
    try {
      ao = Zi.inject(zv);
      kt = Zi;
    } catch {}
  }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fv;
$e.createPortal = function (e, t, n = null) {
  if (!Iu(t)) {
    throw Error(C(200));
  }
  return Vv(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!Iu(e)) {
    throw Error(C(299));
  }
  var n = false;
  var r = "";
  var i = lm;
  if (t != null) {
    if (t.unstable_strictMode === true) {
      n = true;
    }
    if (t.identifierPrefix !== undefined) {
      r = t.identifierPrefix;
    }
    if (t.onRecoverableError !== undefined) {
      i = t.onRecoverableError;
    }
  }
  t = Lu(e, 1, false, null, null, n, false, r, i);
  e[Lt] = t.current;
  ai(e.nodeType === 8 ? e.parentNode : e);
  return new Du(t);
};
$e.findDOMNode = function (e) {
  if (e == null) {
    return null;
  }
  if (e.nodeType === 1) {
    return e;
  }
  var t = e._reactInternals;
  if (t === undefined) {
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  }
  e = Mh(t);
  e = e === null ? null : e.stateNode;
  return e;
};
$e.flushSync = function (e) {
  return Rn(e);
};
$e.hydrate = function (e, t, n) {
  if (!ko(t)) {
    throw Error(C(200));
  }
  return jo(null, e, t, true, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!Iu(e)) {
    throw Error(C(405));
  }
  var r = n != null && n.hydratedSources || null;
  var i = false;
  var s = "";
  var o = lm;
  if (n != null) {
    if (n.unstable_strictMode === true) {
      i = true;
    }
    if (n.identifierPrefix !== undefined) {
      s = n.identifierPrefix;
    }
    if (n.onRecoverableError !== undefined) {
      o = n.onRecoverableError;
    }
  }
  t = am(t, null, e, 1, n ?? null, i, false, s, o);
  e[Lt] = t.current;
  ai(e);
  if (r) {
    for (e = 0; e < r.length; e++) {
      n = r[e];
      i = n._getVersion;
      i = i(n._source);
      if (t.mutableSourceEagerHydrationData == null) {
        t.mutableSourceEagerHydrationData = [n, i];
      } else {
        t.mutableSourceEagerHydrationData.push(n, i);
      }
    }
  }
  return new wo(t);
};
$e.render = function (e, t, n) {
  if (!ko(t)) {
    throw Error(C(200));
  }
  return jo(null, e, t, false, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!ko(e)) {
    throw Error(C(40));
  }
  if (e._reactRootContainer) {
    Rn(function () {
      jo(null, null, e, false, function () {
        e._reactRootContainer = null;
        e[Lt] = null;
      });
    });
    return true;
  } else {
    return false;
  }
};
$e.unstable_batchedUpdates = Nu;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ko(n)) {
    throw Error(C(200));
  }
  if (e == null || e._reactInternals === undefined) {
    throw Error(C(38));
  }
  return jo(e, t, n, false, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function um() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um);
    } catch (e) {
      console.error(e);
    }
  }
}
um();
uh.exports = $e;
var _v = uh.exports;
var vd = _v;
wa.createRoot = vd.createRoot;
wa.hydrateRoot = vd.hydrateRoot;
/**
* @remix-run/router v1.23.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function gi() {
  gi = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  return gi.apply(this, arguments);
}
var Gt;
(function (e) {
  e.Pop = "POP";
  e.Push = "PUSH";
  e.Replace = "REPLACE";
})(Gt ||= {});
const xd = "popstate";
function Wv(e = {}) {
  function t(r, i) {
    let {
      pathname: s,
      search: o,
      hash: l
    } = r.location;
    return hl("", {
      pathname: s,
      search: o,
      hash: l
    }, i.state && i.state.usr || null, i.state && i.state.key || "default");
  }
  function n(r, i) {
    if (typeof i == "string") {
      return i;
    } else {
      return Ks(i);
    }
  }
  return Hv(t, n, null, e);
}
function ee(e, t) {
  if (e === false || e === null || typeof e === "undefined") {
    throw new Error(t);
  }
}
function Vu(e, t) {
  if (!e) {
    if (typeof console !== "undefined") {
      console.warn(t);
    }
    try {
      throw new Error(t);
    } catch {}
  }
}
function Uv() {
  return Math.random().toString(36).substr(2, 8);
}
function wd(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function hl(e, t, n = null, r) {
  return gi({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? wr(t) : t, {
    state: n,
    key: t && t.key || r || Uv()
  });
}
function Ks(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  if (n && n !== "?") {
    t += n.charAt(0) === "?" ? n : "?" + n;
  }
  if (r && r !== "#") {
    t += r.charAt(0) === "#" ? r : "#" + r;
  }
  return t;
}
function wr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    if (n >= 0) {
      t.hash = e.substr(n);
      e = e.substr(0, n);
    }
    let r = e.indexOf("?");
    if (r >= 0) {
      t.search = e.substr(r);
      e = e.substr(0, r);
    }
    if (e) {
      t.pathname = e;
    }
  }
  return t;
}
function Hv(e, t, n, r = {}) {
  let {
    window: i = document.defaultView,
    v5Compat: s = false
  } = r;
  let o = i.history;
  let l = Gt.Pop;
  let u = null;
  let c = d();
  if (c == null) {
    c = 0;
    o.replaceState(gi({}, o.state, {
      idx: c
    }), "");
  }
  function d() {
    return (o.state || {
      idx: null
    }).idx;
  }
  function f() {
    l = Gt.Pop;
    let k = d();
    let g = k == null ? null : k - c;
    c = k;
    if (u) {
      u({
        action: l,
        location: x.location,
        delta: g
      });
    }
  }
  function h(k, g) {
    l = Gt.Push;
    let p = hl(x.location, k, g);
    c = d() + 1;
    let y = wd(p, c);
    let w = x.createHref(p);
    try {
      o.pushState(y, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") {
        throw S;
      }
      i.location.assign(w);
    }
    if (s && u) {
      u({
        action: l,
        location: x.location,
        delta: 1
      });
    }
  }
  function m(k, g) {
    l = Gt.Replace;
    let p = hl(x.location, k, g);
    c = d();
    let y = wd(p, c);
    let w = x.createHref(p);
    o.replaceState(y, "", w);
    if (s && u) {
      u({
        action: l,
        location: x.location,
        delta: 0
      });
    }
  }
  function v(k) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href;
    let p = typeof k == "string" ? k : Ks(k);
    p = p.replace(/ $/, "%20");
    ee(g, "No window.location.(origin|href) available to create URL for href: " + p);
    return new URL(p, g);
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(k) {
      if (u) {
        throw new Error("A history only accepts one active listener");
      }
      i.addEventListener(xd, f);
      u = k;
      return () => {
        i.removeEventListener(xd, f);
        u = null;
      };
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let g = v(k);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: h,
    replace: m,
    go(k) {
      return o.go(k);
    }
  };
  return x;
}
var kd;
(function (e) {
  e.data = "data";
  e.deferred = "deferred";
  e.redirect = "redirect";
  e.error = "error";
})(kd ||= {});
function $v(e, t, n = "/") {
  return Kv(e, t, n);
}
function Kv(e, t, n, r) {
  let i = typeof t == "string" ? wr(t) : t;
  let s = pr(i.pathname || "/", n);
  if (s == null) {
    return null;
  }
  let o = cm(e);
  Gv(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let c = i1(s);
    l = n1(o[u], c);
  }
  return l;
}
function cm(e, t = [], n = [], r = "") {
  let i = (s, o, l) => {
    let u = {
      relativePath: l === undefined ? s.path || "" : l,
      caseSensitive: s.caseSensitive === true,
      childrenIndex: o,
      route: s
    };
    if (u.relativePath.startsWith("/")) {
      ee(u.relativePath.startsWith(r), "Absolute route path \"" + u.relativePath + "\" nested under path " + ("\"" + r + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      u.relativePath = u.relativePath.slice(r.length);
    }
    let c = rn([r, u.relativePath]);
    let d = n.concat(u);
    if (s.children && s.children.length > 0) {
      ee(s.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + c + "\"."));
      cm(s.children, t, d, c);
    }
    if (s.path != null || !!s.index) {
      t.push({
        path: c,
        score: e1(c, s.index),
        routesMeta: d
      });
    }
  };
  e.forEach((s, o) => {
    var l;
    if (s.path === "" || (l = s.path) == null || !l.includes("?")) {
      i(s, o);
    } else {
      for (let u of dm(s.path)) {
        i(s, o, u);
      }
    }
  });
  return t;
}
function dm(e) {
  let t = e.split("/");
  if (t.length === 0) {
    return [];
  }
  let [n, ...r] = t;
  let i = n.endsWith("?");
  let s = n.replace(/\?$/, "");
  if (r.length === 0) {
    if (i) {
      return [s, ""];
    } else {
      return [s];
    }
  }
  let o = dm(r.join("/"));
  let l = [];
  l.push(...o.map(u => u === "" ? s : [s, u].join("/")));
  if (i) {
    l.push(...o);
  }
  return l.map(u => e.startsWith("/") && u === "" ? "/" : u);
}
function Gv(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : t1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)));
}
const Yv = /^:[\w-]+$/;
const Xv = 3;
const Qv = 2;
const Zv = 1;
const qv = 10;
const Jv = -2;
const jd = e => e === "*";
function e1(e, t) {
  let n = e.split("/");
  let r = n.length;
  if (n.some(jd)) {
    r += Jv;
  }
  if (t) {
    r += Qv;
  }
  return n.filter(i => !jd(i)).reduce((i, s) => i + (Yv.test(s) ? Xv : s === "" ? Zv : qv), r);
}
function t1(e, t) {
  if (e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])) {
    return e[e.length - 1] - t[t.length - 1];
  } else {
    return 0;
  }
}
function n1(e, t, n) {
  let {
    routesMeta: r
  } = e;
  let i = {};
  let s = "/";
  let o = [];
  for (let l = 0; l < r.length; ++l) {
    let u = r[l];
    let c = l === r.length - 1;
    let d = s === "/" ? t : t.slice(s.length) || "/";
    let f = pl({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: c
    }, d);
    let h = u.route;
    if (!f) {
      return null;
    }
    Object.assign(i, f.params);
    o.push({
      params: i,
      pathname: rn([s, f.pathname]),
      pathnameBase: u1(rn([s, f.pathnameBase])),
      route: h
    });
    if (f.pathnameBase !== "/") {
      s = rn([s, f.pathnameBase]);
    }
  }
  return o;
}
function pl(e, t) {
  if (typeof e == "string") {
    e = {
      path: e,
      caseSensitive: false,
      end: true
    };
  }
  let [n, r] = r1(e.path, e.caseSensitive, e.end);
  let i = t.match(n);
  if (!i) {
    return null;
  }
  let s = i[0];
  let o = s.replace(/(.)\/+$/, "$1");
  let l = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let {
        paramName: h,
        isOptional: m
      } = d;
      if (h === "*") {
        let x = l[f] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[f];
      if (m && !v) {
        c[h] = undefined;
      } else {
        c[h] = (v || "").replace(/%2F/g, "/");
      }
      return c;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e
  };
}
function r1(e, t = false, n = true) {
  Vu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), "Route path \"" + e + "\" will be treated as if it were " + ("\"" + e.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + e.replace(/\*$/, "/*") + "\"."));
  let r = [];
  let i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, u) => {
    r.push({
      paramName: l,
      isOptional: u != null
    });
    if (u) {
      return "/?([^\\/]+)?";
    } else {
      return "/([^\\/]+)";
    }
  });
  if (e.endsWith("*")) {
    r.push({
      paramName: "*"
    });
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (n) {
    i += "\\/*$";
  } else if (e !== "" && e !== "/") {
    i += "(?:(?=\\/|$))";
  }
  return [new RegExp(i, t ? undefined : "i"), r];
}
function i1(e) {
  try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    Vu(false, "The URL path \"" + e + "\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent " + ("encoding (" + t + ")."));
    return e;
  }
}
function pr(e, t) {
  if (t === "/") {
    return e;
  }
  if (!e.toLowerCase().startsWith(t.toLowerCase())) {
    return null;
  }
  let n = t.endsWith("/") ? t.length - 1 : t.length;
  let r = e.charAt(n);
  if (r && r !== "/") {
    return null;
  } else {
    return e.slice(n) || "/";
  }
}
const s1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const o1 = e => s1.test(e);
function a1(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? wr(e) : e;
  let s;
  if (n) {
    if (o1(n)) {
      s = n;
    } else {
      if (n.includes("//")) {
        let o = n;
        n = n.replace(/\/\/+/g, "/");
        Vu(false, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + n));
      }
      if (n.startsWith("/")) {
        s = Sd(n.substring(1), "/");
      } else {
        s = Sd(n, t);
      }
    }
  } else {
    s = t;
  }
  return {
    pathname: s,
    search: c1(r),
    hash: d1(i)
  };
}
function Sd(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  e.split("/").forEach(i => {
    if (i === "..") {
      if (n.length > 1) {
        n.pop();
      }
    } else if (i !== ".") {
      n.push(i);
    }
  });
  if (n.length > 1) {
    return n.join("/");
  } else {
    return "/";
  }
}
function ra(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
function l1(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function fm(e, t) {
  let n = l1(e);
  if (t) {
    return n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase);
  } else {
    return n.map(r => r.pathnameBase);
  }
}
function hm(e, t, n, r = false) {
  let i;
  if (typeof e == "string") {
    i = wr(e);
  } else {
    i = gi({}, e);
    ee(!i.pathname || !i.pathname.includes("?"), ra("?", "pathname", "search", i));
    ee(!i.pathname || !i.pathname.includes("#"), ra("#", "pathname", "hash", i));
    ee(!i.search || !i.search.includes("#"), ra("#", "search", "hash", i));
  }
  let s = e === "" || i.pathname === "";
  let o = s ? "/" : i.pathname;
  let l;
  if (o == null) {
    l = n;
  } else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      while (h[0] === "..") {
        h.shift();
        f -= 1;
      }
      i.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = a1(i, l);
  let c = o && o !== "/" && o.endsWith("/");
  let d = (s || o === ".") && n.endsWith("/");
  if (!u.pathname.endsWith("/") && (c || d)) {
    u.pathname += "/";
  }
  return u;
}
const rn = e => e.join("/").replace(/\/\/+/g, "/");
const u1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
const c1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
const d1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function f1(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const pm = ["post", "put", "patch", "delete"];
new Set(pm);
const h1 = ["get", ...pm];
new Set(h1); /**
             * React Router v6.30.3
             *
             * Copyright (c) Remix Software Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE.md file in the root directory of this source tree.
             *
             * @license MIT
             */
function yi() {
  yi = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  return yi.apply(this, arguments);
}
const So = j.createContext(null);
const mm = j.createContext(null);
const fn = j.createContext(null);
const bo = j.createContext(null);
const Vn = j.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const gm = j.createContext(null);
function p1(e, t) {
  let {
    relative: n
  } = t === undefined ? {} : t;
  if (!Pi()) {
    ee(false);
  }
  let {
    basename: r,
    navigator: i
  } = j.useContext(fn);
  let {
    hash: s,
    pathname: o,
    search: l
  } = Co(e, {
    relative: n
  });
  let u = o;
  if (r !== "/") {
    u = o === "/" ? r : rn([r, o]);
  }
  return i.createHref({
    pathname: u,
    search: l,
    hash: s
  });
}
function Pi() {
  return j.useContext(bo) != null;
}
function Bn() {
  if (!Pi()) {
    ee(false);
  }
  return j.useContext(bo).location;
}
function ym(e) {
  if (!j.useContext(fn).static) {
    j.useLayoutEffect(e);
  }
}
function vm() {
  let {
    isDataRoute: e
  } = j.useContext(Vn);
  if (e) {
    return P1();
  } else {
    return m1();
  }
}
function m1() {
  if (!Pi()) {
    ee(false);
  }
  let e = j.useContext(So);
  let {
    basename: t,
    future: n,
    navigator: r
  } = j.useContext(fn);
  let {
    matches: i
  } = j.useContext(Vn);
  let {
    pathname: s
  } = Bn();
  let o = JSON.stringify(fm(i, n.v7_relativeSplatPath));
  let l = j.useRef(false);
  ym(() => {
    l.current = true;
  });
  return j.useCallback(function (c, d = {}) {
    if (!l.current) {
      return;
    }
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let f = hm(c, JSON.parse(o), s, d.relative === "path");
    if (e == null && t !== "/") {
      f.pathname = f.pathname === "/" ? t : rn([t, f.pathname]);
    }
    (d.replace ? r.replace : r.push)(f, d.state, d);
  }, [t, r, o, s, e]);
}
function Co(e, t) {
  let {
    relative: n
  } = t === undefined ? {} : t;
  let {
    future: r
  } = j.useContext(fn);
  let {
    matches: i
  } = j.useContext(Vn);
  let {
    pathname: s
  } = Bn();
  let o = JSON.stringify(fm(i, r.v7_relativeSplatPath));
  return j.useMemo(() => hm(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function g1(e, t) {
  return y1(e, t);
}
function y1(e, t, n, r) {
  if (!Pi()) {
    ee(false);
  }
  let {
    navigator: i
  } = j.useContext(fn);
  let {
    matches: s
  } = j.useContext(Vn);
  let o = s[s.length - 1];
  let l = o ? o.params : {};
  if (o) {
    o.pathname;
  }
  let u = o ? o.pathnameBase : "/";
  if (o) {
    o.route;
  }
  let c = Bn();
  let d;
  if (t) {
    var f;
    let k = typeof t == "string" ? wr(t) : t;
    if (u !== "/" && ((f = k.pathname) == null || !f.startsWith(u))) {
      ee(false);
    }
    d = k;
  } else {
    d = c;
  }
  let h = d.pathname || "/";
  let m = h;
  if (u !== "/") {
    let k = u.replace(/^\//, "").split("/");
    m = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let v = $v(e, {
    pathname: m
  });
  let x = j1(v && v.map(k => Object.assign({}, k, {
    params: Object.assign({}, l, k.params),
    pathname: rn([u, i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname]),
    pathnameBase: k.pathnameBase === "/" ? u : rn([u, i.encodeLocation ? i.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
  })), s, n, r);
  if (t && x) {
    return j.createElement(bo.Provider, {
      value: {
        location: yi({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, d),
        navigationType: Gt.Pop
      }
    }, x);
  } else {
    return x;
  }
}
function v1() {
  let e = T1();
  let t = f1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e);
  let n = e instanceof Error ? e.stack : null;
  let i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return j.createElement(j.Fragment, null, j.createElement("h2", null, "Unexpected Application Error!"), j.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? j.createElement("pre", {
    style: i
  }, n) : null, null);
}
const x1 = j.createElement(v1, null);
class w1 extends j.Component {
  constructor(t) {
    super(t);
    this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    if (n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle") {
      return {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      };
    } else {
      return {
        error: t.error !== undefined ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation
      };
    }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    if (this.state.error !== undefined) {
      return j.createElement(Vn.Provider, {
        value: this.props.routeContext
      }, j.createElement(gm.Provider, {
        value: this.state.error,
        children: this.props.component
      }));
    } else {
      return this.props.children;
    }
  }
}
function k1(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e;
  let i = j.useContext(So);
  if (i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary)) {
    i.staticContext._deepestRenderedBoundaryId = n.route.id;
  }
  return j.createElement(Vn.Provider, {
    value: t
  }, r);
}
function j1(e, t, n, r) {
  var i;
  if (t === undefined) {
    t = [];
  }
  if (n === undefined) {
    n = null;
  }
  if (r === undefined) {
    r = null;
  }
  if (e == null) {
    var s;
    if (!n) {
      return null;
    }
    if (n.errors) {
      e = n.matches;
    } else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) {
      e = n.matches;
    } else {
      return null;
    }
  }
  let o = e;
  let l = (i = n) == null ? undefined : i.errors;
  if (l != null) {
    let d = o.findIndex(f => f.route.id && (l == null ? undefined : l[f.route.id]) !== undefined);
    if (!(d >= 0)) {
      ee(false);
    }
    o = o.slice(0, Math.min(o.length, d + 1));
  }
  let u = false;
  let c = -1;
  if (n && r && r.v7_partialHydration) {
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (f.route.HydrateFallback || f.route.hydrateFallbackElement) {
        c = d;
      }
      if (f.route.id) {
        let {
          loaderData: h,
          errors: m
        } = n;
        let v = f.route.loader && h[f.route.id] === undefined && (!m || m[f.route.id] === undefined);
        if (f.route.lazy || v) {
          u = true;
          if (c >= 0) {
            o = o.slice(0, c + 1);
          } else {
            o = [o[0]];
          }
          break;
        }
      }
    }
  }
  return o.reduceRight((d, f, h) => {
    let m;
    let v = false;
    let x = null;
    let k = null;
    if (n) {
      m = l && f.route.id ? l[f.route.id] : undefined;
      x = f.route.errorElement || x1;
      if (u) {
        if (c < 0 && h === 0) {
          N1("route-fallback");
          v = true;
          k = null;
        } else if (c === h) {
          v = true;
          k = f.route.hydrateFallbackElement || null;
        }
      }
    }
    let g = t.concat(o.slice(0, h + 1));
    let p = () => {
      let y;
      if (m) {
        y = x;
      } else if (v) {
        y = k;
      } else if (f.route.Component) {
        y = j.createElement(f.route.Component, null);
      } else if (f.route.element) {
        y = f.route.element;
      } else {
        y = d;
      }
      return j.createElement(k1, {
        match: f,
        routeContext: {
          outlet: d,
          matches: g,
          isDataRoute: n != null
        },
        children: y
      });
    };
    if (n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)) {
      return j.createElement(w1, {
        location: n.location,
        revalidation: n.revalidation,
        component: x,
        error: m,
        children: p(),
        routeContext: {
          outlet: null,
          matches: g,
          isDataRoute: true
        }
      });
    } else {
      return p();
    }
  }, null);
}
var xm = function (e) {
  e.UseBlocker = "useBlocker";
  e.UseRevalidator = "useRevalidator";
  e.UseNavigateStable = "useNavigate";
  return e;
}(xm || {});
var wm = function (e) {
  e.UseBlocker = "useBlocker";
  e.UseLoaderData = "useLoaderData";
  e.UseActionData = "useActionData";
  e.UseRouteError = "useRouteError";
  e.UseNavigation = "useNavigation";
  e.UseRouteLoaderData = "useRouteLoaderData";
  e.UseMatches = "useMatches";
  e.UseRevalidator = "useRevalidator";
  e.UseNavigateStable = "useNavigate";
  e.UseRouteId = "useRouteId";
  return e;
}(wm || {});
function S1(e) {
  let t = j.useContext(So);
  if (!t) {
    ee(false);
  }
  return t;
}
function b1(e) {
  let t = j.useContext(mm);
  if (!t) {
    ee(false);
  }
  return t;
}
function C1(e) {
  let t = j.useContext(Vn);
  if (!t) {
    ee(false);
  }
  return t;
}
function km(e) {
  let t = C1();
  let n = t.matches[t.matches.length - 1];
  if (!n.route.id) {
    ee(false);
  }
  return n.route.id;
}
function T1() {
  var e;
  let t = j.useContext(gm);
  let n = b1();
  let r = km();
  if (t !== undefined) {
    return t;
  } else if ((e = n.errors) == null) {
    return undefined;
  } else {
    return e[r];
  }
}
function P1() {
  let {
    router: e
  } = S1(xm.UseNavigateStable);
  let t = km(wm.UseNavigateStable);
  let n = j.useRef(false);
  ym(() => {
    n.current = true;
  });
  return j.useCallback(function (i, s = {}) {
    if (n.current) {
      if (typeof i == "number") {
        e.navigate(i);
      } else {
        e.navigate(i, yi({
          fromRouteId: t
        }, s));
      }
    }
  }, [e, t]);
}
const bd = {};
function N1(e, t, n) {
  bd[e] ||= true;
}
function E1(e, t) {
  if (e != null) {
    e.v7_startTransition;
  }
  if (e != null) {
    e.v7_relativeSplatPath;
  }
}
function Ot(e) {
  ee(false);
}
function M1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Gt.Pop,
    navigator: s,
    static: o = false,
    future: l
  } = e;
  if (Pi()) {
    ee(false);
  }
  let u = t.replace(/^\/*/, "/");
  let c = j.useMemo(() => ({
    basename: u,
    navigator: s,
    static: o,
    future: yi({
      v7_relativeSplatPath: false
    }, l)
  }), [u, l, s, o]);
  if (typeof r == "string") {
    r = wr(r);
  }
  let {
    pathname: d = "/",
    search: f = "",
    hash: h = "",
    state: m = null,
    key: v = "default"
  } = r;
  let x = j.useMemo(() => {
    let k = pr(d, u);
    if (k == null) {
      return null;
    } else {
      return {
        location: {
          pathname: k,
          search: f,
          hash: h,
          state: m,
          key: v
        },
        navigationType: i
      };
    }
  }, [u, d, f, h, m, v, i]);
  if (x == null) {
    return null;
  } else {
    return j.createElement(fn.Provider, {
      value: c
    }, j.createElement(bo.Provider, {
      children: n,
      value: x
    }));
  }
}
function A1(e) {
  let {
    children: t,
    location: n
  } = e;
  return g1(ml(t), n);
}
new Promise(() => {});
function ml(e, t = []) {
  let n = [];
  j.Children.forEach(e, (r, i) => {
    if (!j.isValidElement(r)) {
      return;
    }
    let s = [...t, i];
    if (r.type === j.Fragment) {
      n.push.apply(n, ml(r.props.children, s));
      return;
    }
    if (r.type !== Ot) {
      ee(false);
    }
    if (!!r.props.index && !!r.props.children) {
      ee(false);
    }
    let o = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    if (r.props.children) {
      o.children = ml(r.props.children, s);
    }
    n.push(o);
  });
  return n;
} /**
  * React Router DOM v6.30.3
  *
  * Copyright (c) Remix Software Inc.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function Gs() {
  Gs = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  return Gs.apply(this, arguments);
}
function jm(e, t) {
  if (e == null) {
    return {};
  }
  var n = {};
  var r = Object.keys(e);
  var i;
  var s;
  for (s = 0; s < r.length; s++) {
    i = r[s];
    if (!(t.indexOf(i) >= 0)) {
      n[i] = e[i];
    }
  }
  return n;
}
function L1(e) {
  return !!e.metaKey || !!e.altKey || !!e.ctrlKey || !!e.shiftKey;
}
function R1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !L1(e);
}
const D1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
const I1 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
const V1 = "6";
try {
  window.__reactRouterVersion = V1;
} catch {}
const B1 = j.createContext({
  isTransitioning: false
});
const O1 = "startTransition";
const Cd = My[O1];
function F1(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e;
  let s = j.useRef();
  if (s.current == null) {
    s.current = Wv({
      window: i,
      v5Compat: true
    });
  }
  let o = s.current;
  let [l, u] = j.useState({
    action: o.action,
    location: o.location
  });
  let {
    v7_startTransition: c
  } = r || {};
  let d = j.useCallback(f => {
    if (c && Cd) {
      Cd(() => u(f));
    } else {
      u(f);
    }
  }, [u, c]);
  j.useLayoutEffect(() => o.listen(d), [o, d]);
  j.useEffect(() => E1(r), [r]);
  return j.createElement(M1, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: o,
    future: r
  });
}
const z1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const _1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const ye = j.forwardRef(function (t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: s,
    replace: o,
    state: l,
    target: u,
    to: c,
    preventScrollReset: d,
    viewTransition: f
  } = t;
  let h = jm(t, D1);
  let {
    basename: m
  } = j.useContext(fn);
  let v;
  let x = false;
  if (typeof c == "string" && _1.test(c) && (v = c, z1)) {
    try {
      let y = new URL(window.location.href);
      let w = c.startsWith("//") ? new URL(y.protocol + c) : new URL(c);
      let S = pr(w.pathname, m);
      if (w.origin === y.origin && S != null) {
        c = S + w.search + w.hash;
      } else {
        x = true;
      }
    } catch {}
  }
  let k = p1(c, {
    relative: i
  });
  let g = H1(c, {
    replace: o,
    state: l,
    target: u,
    preventScrollReset: d,
    relative: i,
    viewTransition: f
  });
  function p(y) {
    if (r) {
      r(y);
    }
    if (!y.defaultPrevented) {
      g(y);
    }
  }
  return j.createElement("a", Gs({}, h, {
    href: v || k,
    onClick: x || s ? r : p,
    ref: n,
    target: u
  }));
});
const W1 = j.forwardRef(function (t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = false,
    className: s = "",
    end: o = false,
    style: l,
    to: u,
    viewTransition: c,
    children: d
  } = t;
  let f = jm(t, I1);
  let h = Co(u, {
    relative: f.relative
  });
  let m = Bn();
  let v = j.useContext(mm);
  let {
    navigator: x,
    basename: k
  } = j.useContext(fn);
  let g = v != null && $1(h) && c === true;
  let p = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname;
  let y = m.pathname;
  let w = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  if (!i) {
    y = y.toLowerCase();
    w = w ? w.toLowerCase() : null;
    p = p.toLowerCase();
  }
  if (w && k) {
    w = pr(w, k) || w;
  }
  const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let b = y === p || !o && y.startsWith(p) && y.charAt(S) === "/";
  let P = w != null && (w === p || !o && w.startsWith(p) && w.charAt(p.length) === "/");
  let T = {
    isActive: b,
    isPending: P,
    isTransitioning: g
  };
  let V = b ? r : undefined;
  let N;
  if (typeof s == "function") {
    N = s(T);
  } else {
    N = [s, b ? "active" : null, P ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let O = typeof l == "function" ? l(T) : l;
  return j.createElement(ye, Gs({}, f, {
    "aria-current": V,
    className: N,
    ref: n,
    style: O,
    to: u,
    viewTransition: c
  }), typeof d == "function" ? d(T) : d);
});
var gl;
(function (e) {
  e.UseScrollRestoration = "useScrollRestoration";
  e.UseSubmit = "useSubmit";
  e.UseSubmitFetcher = "useSubmitFetcher";
  e.UseFetcher = "useFetcher";
  e.useViewTransitionState = "useViewTransitionState";
})(gl ||= {});
var Td;
(function (e) {
  e.UseFetcher = "useFetcher";
  e.UseFetchers = "useFetchers";
  e.UseScrollRestoration = "useScrollRestoration";
})(Td ||= {});
function U1(e) {
  let t = j.useContext(So);
  if (!t) {
    ee(false);
  }
  return t;
}
function H1(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: o,
    viewTransition: l
  } = t === undefined ? {} : t;
  let u = vm();
  let c = Bn();
  let d = Co(e, {
    relative: o
  });
  return j.useCallback(f => {
    if (R1(f, n)) {
      f.preventDefault();
      let h = r !== undefined ? r : Ks(c) === Ks(d);
      u(e, {
        replace: h,
        state: i,
        preventScrollReset: s,
        relative: o,
        viewTransition: l
      });
    }
  }, [c, u, d, r, i, n, e, s, o, l]);
}
function $1(e, t = {}) {
  let n = j.useContext(B1);
  if (n == null) {
    ee(false);
  }
  let {
    basename: r
  } = U1(gl.useViewTransitionState);
  let i = Co(e, {
    relative: t.relative
  });
  if (!n.isTransitioning) {
    return false;
  }
  let s = pr(n.currentLocation.pathname, r) || n.currentLocation.pathname;
  let o = pr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return pl(i.pathname, o) != null || pl(i.pathname, s) != null;
}
const Pd = [{
  label: "Home",
  href: "/"
}, {
  label: "About Us",
  href: "/#about"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "News",
  href: "/#news"
}, {
  label: "Events",
  href: "/events"
}, {
  label: "Contact Us",
  href: "/contact"
}];
function Yr(...e) {
  return e.filter(Boolean).join(" ");
}
const Nd = {
  "/#about": "about",
  "/services": "services",
  "/#news": "news"
};
const K1 = ["about", "services", "news"];
function G1() {
  const [e, t] = j.useState(false);
  const [n, r] = j.useState(null);
  const [i, s] = j.useState(true);
  const o = Bn();
  const l = vm();
  const u = j.useRef(null);
  j.useEffect(() => {
    t(false);
  }, [o.pathname]);
  j.useEffect(() => {
    const m = v => {
      if (v.key === "Escape") {
        t(false);
      }
    };
    window.addEventListener("keydown", m);
    return () => window.removeEventListener("keydown", m);
  }, []);
  j.useEffect(() => {
    if (o.pathname !== "/") {
      s(true);
      return;
    }
    const m = () => s(window.scrollY < 80);
    m();
    window.addEventListener("scroll", m, {
      passive: true
    });
    return () => window.removeEventListener("scroll", m);
  }, [o.pathname]);
  j.useEffect(() => {
    var x;
    var k;
    if (o.pathname !== "/") {
      r(null);
      if ((x = u.current) != null) {
        x.disconnect();
      }
      return;
    }
    if ((k = u.current) != null) {
      k.disconnect();
    }
    const m = new IntersectionObserver(g => {
      const p = g.filter(y => y.isIntersecting).sort((y, w) => y.boundingClientRect.top - w.boundingClientRect.top);
      if (p.length > 0) {
        r(p[0].target.id);
      }
    }, {
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0
    });
    const v = setTimeout(() => {
      K1.forEach(g => {
        const p = document.getElementById(g);
        if (p) {
          m.observe(p);
        }
      });
    }, 120);
    u.current = m;
    return () => {
      clearTimeout(v);
      m.disconnect();
    };
  }, [o.pathname]);
  const c = m => {
    const v = document.getElementById(m);
    if (!v) {
      return;
    }
    const x = v.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top: x,
      behavior: "smooth"
    });
  };
  const d = m => {
    t(false);
    if (o.pathname === "/") {
      c(m);
    } else {
      l("/", {
        state: {
          scrollTo: m
        }
      });
    }
  };
  j.useEffect(() => {
    var m;
    if (o.pathname === "/" && (m = o.state) != null && m.scrollTo) {
      const v = o.state.scrollTo;
      const x = setTimeout(() => c(v), 150);
      return () => clearTimeout(x);
    }
  }, [o]);
  const f = m => {
    const v = Nd[m];
    if (v) {
      return o.pathname === "/" && n === v;
    } else if (m === "/") {
      return o.pathname === "/" && i;
    } else {
      return o.pathname === m;
    }
  };
  const h = (m, v = false) => {
    const x = f(m.href);
    const k = Nd[m.href];
    const g = {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600
    };
    const p = Yr("text-black text-sm tracking-wide uppercase transition-colors duration-150 whitespace-nowrap", x ? "underline underline-offset-4" : "hover:text-black/55");
    const y = Yr("px-3 py-3 text-left text-sm font-semibold uppercase tracking-wide text-black w-full transition-colors", x ? "bg-black/10" : "hover:bg-black/[0.06]");
    if (k) {
      return a.jsx("button", {
        onClick: () => d(k),
        className: v ? y : p,
        style: g,
        children: m.label
      }, m.href);
    } else if (m.href === "/") {
      return a.jsx("button", {
        onClick: () => {
          t(false);
          if (o.pathname === "/") {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          } else {
            l("/");
          }
        },
        className: v ? y : p,
        style: g,
        children: m.label
      }, m.href);
    } else {
      return a.jsx(W1, {
        to: m.href,
        end: m.href === "/",
        className: () => v ? y : p,
        style: g,
        children: m.label
      }, m.href);
    }
  };
  return a.jsxs("header", {
    className: "fixed inset-x-0 top-0 z-50 bg-white shadow-md overflow-hidden",
    children: [a.jsx("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
        .nb-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
      `
    }), a.jsxs("div", {
      className: "container-shell flex h-20 items-center justify-between gap-6",
      children: [a.jsx(ye, {
        to: "/",
        className: "shrink-0",
        style: {
          height: "80px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center"
        },
        onClick: () => window.scrollTo({
          top: 0,
          behavior: "smooth"
        }),
        children: a.jsx("img", {
          src: "/assets/logo.png",
          alt: "Matseke Business Investment logo",
          style: {
            height: "160px",
            width: "auto",
            objectFit: "contain",
            flexShrink: 0
          },
          loading: "eager"
        })
      }), a.jsx("nav", {
        className: "hidden md:flex flex-1 items-center justify-center gap-6",
        "aria-label": "Primary",
        children: Pd.map(m => h(m))
      }), a.jsx("button", {
        type: "button",
        className: "md:hidden inline-flex items-center justify-center rounded-none bg-black/10 px-3 py-2 text-black hover:bg-black/20 focus-visible:outline-none",
        "aria-label": "Toggle menu",
        "aria-expanded": e,
        onClick: () => t(m => !m),
        children: a.jsx("span", {
          className: "text-lg nb-heading",
          children: e ? "✕" : "☰"
        })
      })]
    }), a.jsx("div", {
      className: Yr("md:hidden overflow-hidden bg-white transition-[max-height] duration-300", e ? "max-h-screen" : "max-h-0"),
      children: a.jsxs("div", {
        className: "container-shell py-4",
        children: [a.jsx("nav", {
          className: "flex flex-col",
          "aria-label": "Mobile",
          children: Pd.map(m => h(m, true))
        }), a.jsx("div", {
          className: "mt-4",
          children: a.jsx(ye, {
            to: "/contact",
            children: a.jsx("button", {
              className: "nb-heading w-full bg-black text-white text-sm uppercase tracking-wide hover:opacity-80 transition-opacity py-3",
              onClick: () => t(false),
              children: "Get in Touch"
            })
          })
        })]
      })
    })]
  });
}
var Sm = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var Ed = Et.createContext && Et.createContext(Sm);
var Y1 = ["attr", "size", "title"];
function X1(e, t) {
  if (e == null) {
    return {};
  }
  var n;
  var r;
  var i = Q1(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) {
      n = s[r];
      if (t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n)) {
        i[n] = e[n];
      }
    }
  }
  return i;
}
function Q1(e, t) {
  if (e == null) {
    return {};
  }
  var n = {};
  for (var r in e) {
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) {
        continue;
      }
      n[r] = e[r];
    }
  }
  return n;
}
function Ys() {
  Ys = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if ({}.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  return Ys.apply(null, arguments);
}
function Md(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function Xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] ?? {};
    if (t % 2) {
      Md(Object(n), true).forEach(function (r) {
        Z1(e, r, n[r]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
    } else {
      Md(Object(n)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
    }
  }
  return e;
}
function Z1(e, t, n) {
  if ((t = q1(t)) in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
function q1(e) {
  var t = J1(e, "string");
  if (typeof t == "symbol") {
    return t;
  } else {
    return t + "";
  }
}
function J1(e, t) {
  if (typeof e != "object" || !e) {
    return e;
  }
  var n = e[Symbol.toPrimitive];
  if (n !== undefined) {
    var r = n.call(e, t);
    if (typeof r != "object") {
      return r;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bm(e) {
  return e && e.map((t, n) => Et.createElement(t.tag, Xs({
    key: n
  }, t.attr), bm(t.child)));
}
function Se(e) {
  return t => Et.createElement(ex, Ys({
    attr: Xs({}, e.attr)
  }, t), bm(e.child));
}
function ex(e) {
  var t = n => {
    var {
      attr: r,
      size: i,
      title: s
    } = e;
    var o = X1(e, Y1);
    var l = i || n.size || "1em";
    var u;
    if (n.className) {
      u = n.className;
    }
    if (e.className) {
      u = (u ? u + " " : "") + e.className;
    }
    return Et.createElement("svg", Ys({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, o, {
      className: u,
      style: Xs(Xs({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && Et.createElement("title", null, s), e.children);
  };
  if (Ed !== undefined) {
    return Et.createElement(Ed.Consumer, null, n => t(n));
  } else {
    return t(Sm);
  }
}
function tx(e) {
  return Se({
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      },
      child: []
    }]
  })(e);
}
function nx(e) {
  return Se({
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      },
      child: []
    }]
  })(e);
}
function rx(e) {
  return Se({
    attr: {
      viewBox: "0 0 24 24"
    },
    child: [{
      tag: "path",
      attr: {
        fill: "none",
        d: "M0 0h24v24H0z"
      },
      child: []
    }, {
      tag: "path",
      attr: {
        d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      },
      child: []
    }]
  })(e);
}
function ix(e) {
  return Se({
    attr: {
      viewBox: "0 0 24 24"
    },
    child: [{
      tag: "path",
      attr: {
        fill: "none",
        d: "M0 0h24v24H0z"
      },
      child: []
    }, {
      tag: "path",
      attr: {
        d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
      },
      child: []
    }]
  })(e);
}
const W = "#000000";
function sx() {
  return a.jsxs("footer", {
    className: "bg-white",
    style: {
      color: W,
      fontFamily: "'Montserrat', sans-serif"
    },
    children: [a.jsx("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
        .footer-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: -0.01em; }
        .footer-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; }
      `
    }), a.jsxs("div", {
      className: "container-shell py-5",
      children: [a.jsxs("div", {
        className: "grid gap-8 pb-10 md:grid-cols-3",
        style: {
          borderBottom: `1px solid ${W}33`
        },
        children: [a.jsxs("div", {
          children: [a.jsx("h4", {
            className: "footer-heading font-semibold",
            style: {
              color: W
            },
            children: "Contact Us"
          }), a.jsxs("div", {
            className: "mt-2 flex items-start gap-2 text-sm footer-body",
            style: {
              color: `${W}cc`
            },
            children: [a.jsx(ix, {
              className: "shrink-0 text-xl mt-0.5",
              style: {
                color: W,
                minWidth: "20px"
              }
            }), a.jsx("p", {
              className: "footer-body",
              style: {
                textAlign: "left"
              },
              children: "54 Maxwell drive, Woodmead Office Park, Building B, Waterfall"
            })]
          }), a.jsxs("div", {
            className: "mt-2 flex items-center gap-2 text-sm footer-body",
            style: {
              color: `${W}cc`
            },
            children: [a.jsx(rx, {
              className: "shrink-0 text-xl",
              style: {
                color: W,
                minWidth: "20px"
              }
            }), a.jsx("p", {
              className: "footer-body",
              style: {
                textAlign: "left"
              },
              children: "(010) 005 5942"
            })]
          })]
        }), a.jsxs("div", {
          children: [a.jsx("h4", {
            className: "footer-heading font-semibold",
            style: {
              color: W
            },
            children: "Office Hours"
          }), a.jsx("p", {
            className: "mt-2 text-sm footer-body",
            style: {
              color: `${W}cc`,
              textAlign: "left"
            },
            children: "Monday to Friday"
          }), a.jsx("p", {
            className: "text-sm footer-body",
            style: {
              color: `${W}cc`,
              textAlign: "left"
            },
            children: "9:00 am to 4:00 pm"
          })]
        }), a.jsxs("div", {
          children: [a.jsx("h4", {
            className: "footer-heading font-semibold",
            style: {
              color: W
            },
            children: "Follow us online"
          }), a.jsxs("div", {
            className: "mt-4 flex gap-3",
            children: [a.jsx("a", {
              href: "https://www.linkedin.com/company/matsekebusinessinvestment/?viewAsMember=true",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "grid size-9 place-items-center rounded-xl transition-colors",
              style: {
                backgroundColor: `${W}1a`,
                color: W
              },
              onMouseEnter: e => {
                e.currentTarget.style.backgroundColor = W;
                e.currentTarget.style.color = "white";
              },
              onMouseLeave: e => {
                e.currentTarget.style.backgroundColor = `${W}1a`;
                e.currentTarget.style.color = W;
              },
              children: a.jsx(tx, {
                className: "text-sm"
              })
            }), a.jsx("a", {
              href: "https://www.instagram.com/matsekebusinessinvestment/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "grid size-9 place-items-center rounded-xl transition-colors",
              style: {
                backgroundColor: `${W}1a`,
                color: W
              },
              onMouseEnter: e => {
                e.currentTarget.style.backgroundColor = W;
                e.currentTarget.style.color = "white";
              },
              onMouseLeave: e => {
                e.currentTarget.style.backgroundColor = `${W}1a`;
                e.currentTarget.style.color = W;
              },
              children: a.jsx(nx, {
                className: "text-sm"
              })
            })]
          })]
        })]
      }), a.jsxs("div", {
        className: "mt-6 flex flex-col items-center gap-3 text-center",
        children: [a.jsxs("div", {
          className: "leading-tight",
          children: [a.jsx("div", {
            className: "footer-heading text-sm tracking-wide",
            style: {
              color: W
            },
            children: "MATSEKE BUSINESS INVESTMENT"
          }), a.jsx("div", {
            className: "footer-body text-xs",
            style: {
              color: `${W}b3`
            },
            children: "AUTHORISED FINANCIAL SERVICES PROVIDER"
          })]
        }), a.jsxs("div", {
          className: "mt-1 flex flex-wrap items-center justify-center gap-6 text-xs footer-body",
          style: {
            color: `${W}cc`
          },
          children: [a.jsx(ye, {
            to: "/terms-and-conditions",
            className: "transition-opacity hover:opacity-60 underline underline-offset-2",
            style: {
              color: `${W}cc`
            },
            children: "Terms & Conditions"
          }), a.jsx(ye, {
            to: "/privacy-policy",
            className: "transition-opacity hover:opacity-60 underline underline-offset-2",
            style: {
              color: `${W}cc`
            },
            children: "Privacy Policy"
          })]
        }), a.jsxs("div", {
          className: "mt-1 text-[11px] footer-body",
          style: {
            color: `${W}99`
          },
          children: ["© ", new Date().getFullYear(), " Matseke Business Investment. All rights reserved."]
        })]
      })]
    })]
  });
}
const Cm = j.createContext({});
function ox(e) {
  const t = j.useRef(null);
  if (t.current === null) {
    t.current = e();
  }
  return t.current;
}
const ax = typeof window !== "undefined";
const lx = ax ? j.useLayoutEffect : j.useEffect;
const Bu = j.createContext(null);
function Ou(e, t) {
  if (e.indexOf(t) === -1) {
    e.push(t);
  }
}
function Qs(e, t) {
  const n = e.indexOf(t);
  if (n > -1) {
    e.splice(n, 1);
  }
}
const bt = (e, t, n) => n > t ? t : n < e ? e : n;
let Fu = () => {};
const an = {};
const Tm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Pm(e) {
  return typeof e == "object" && e !== null;
}
const Nm = e => /^0[^.\s]+$/u.test(e);
function Em(e) {
  let t;
  return () => {
    if (t === undefined) {
      t = e();
    }
    return t;
  };
}
const et = e => e;
const ux = (e, t) => n => t(e(n));
const Ni = (...e) => e.reduce(ux);
const vi = (e, t, n) => {
  const r = t - e;
  if (r === 0) {
    return 1;
  } else {
    return (n - e) / r;
  }
};
class zu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    Ou(this.subscriptions, t);
    return () => Qs(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i) {
      if (i === 1) {
        this.subscriptions[0](t, n, r);
      } else {
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          if (o) {
            o(t, n, r);
          }
        }
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ue = e => e * 1000;
const qe = e => e / 1000;
function Mm(e, t) {
  if (t) {
    return e * (1000 / t);
  } else {
    return 0;
  }
}
const Am = (e, t, n) => (((1 - n * 3 + t * 3) * e + (n * 3 - t * 6)) * e + t * 3) * e;
const cx = 1e-7;
const dx = 12;
function fx(e, t, n, r, i) {
  let s;
  let o;
  let l = 0;
  do {
    o = t + (n - t) / 2;
    s = Am(o, r, i) - e;
    if (s > 0) {
      n = o;
    } else {
      t = o;
    }
  } while (Math.abs(s) > cx && ++l < dx);
  return o;
}
function Ei(e, t, n, r) {
  if (e === t && n === r) {
    return et;
  }
  const i = s => fx(s, 0, 1, e, n);
  return s => s === 0 || s === 1 ? s : Am(i(s), t, r);
}
const Lm = e => t => t <= 0.5 ? e(t * 2) / 2 : (2 - e((1 - t) * 2)) / 2;
const Rm = e => t => 1 - e(1 - t);
const Dm = Ei(0.33, 1.53, 0.69, 0.99);
const _u = Rm(Dm);
const Im = Lm(_u);
const Vm = e => e >= 1 ? 1 : (e *= 2) < 1 ? _u(e) * 0.5 : (2 - Math.pow(2, (e - 1) * -10)) * 0.5;
const Wu = e => 1 - Math.sin(Math.acos(e));
const Bm = Rm(Wu);
const Om = Lm(Wu);
const hx = Ei(0.42, 0, 1, 1);
const px = Ei(0, 0, 0.58, 1);
const Fm = Ei(0.42, 0, 0.58, 1);
const mx = e => Array.isArray(e) && typeof e[0] != "number";
const zm = e => Array.isArray(e) && typeof e[0] == "number";
const gx = {
  linear: et,
  easeIn: hx,
  easeInOut: Fm,
  easeOut: px,
  circIn: Wu,
  circInOut: Om,
  circOut: Bm,
  backIn: _u,
  backInOut: Im,
  backOut: Dm,
  anticipate: Vm
};
const yx = e => typeof e == "string";
const Ad = e => {
  if (zm(e)) {
    Fu(e.length === 4);
    const [t, n, r, i] = e;
    return Ei(t, n, r, i);
  } else if (yx(e)) {
    return gx[e];
  }
  return e;
};
const qi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function vx(e, t) {
  let n = new Set();
  let r = new Set();
  let i = false;
  let s = false;
  const o = new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function u(d) {
    if (o.has(d)) {
      c.schedule(d);
      e();
    }
    d(l);
  }
  const c = {
    schedule: (d, f = false, h = false) => {
      const v = h && i ? n : r;
      if (f) {
        o.add(d);
      }
      v.add(d);
      return d;
    },
    cancel: d => {
      r.delete(d);
      o.delete(d);
    },
    process: d => {
      l = d;
      if (i) {
        s = true;
        return;
      }
      i = true;
      const f = n;
      n = r;
      r = f;
      n.forEach(u);
      n.clear();
      i = false;
      if (s) {
        s = false;
        c.process(d);
      }
    }
  };
  return c;
}
const xx = 40;
function _m(e, t) {
  let n = false;
  let r = true;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const s = () => n = true;
  const o = qi.reduce((y, w) => {
    y[w] = vx(s);
    return y;
  }, {});
  const {
    setup: l,
    read: u,
    resolveKeyframes: c,
    preUpdate: d,
    update: f,
    preRender: h,
    render: m,
    postRender: v
  } = o;
  const x = () => {
    const y = an.useManualTiming;
    const w = y ? i.timestamp : performance.now();
    n = false;
    if (!y) {
      i.delta = r ? 1000 / 60 : Math.max(Math.min(w - i.timestamp, xx), 1);
    }
    i.timestamp = w;
    i.isProcessing = true;
    l.process(i);
    u.process(i);
    c.process(i);
    d.process(i);
    f.process(i);
    h.process(i);
    m.process(i);
    v.process(i);
    i.isProcessing = false;
    if (n && t) {
      r = false;
      e(x);
    }
  };
  const k = () => {
    n = true;
    r = true;
    if (!i.isProcessing) {
      e(x);
    }
  };
  return {
    schedule: qi.reduce((y, w) => {
      const S = o[w];
      y[w] = (b, P = false, T = false) => {
        if (!n) {
          k();
        }
        return S.schedule(b, P, T);
      };
      return y;
    }, {}),
    cancel: y => {
      for (let w = 0; w < qi.length; w++) {
        o[qi[w]].cancel(y);
      }
    },
    state: i,
    steps: o
  };
}
const {
  schedule: U,
  cancel: ln,
  state: pe,
  steps: ia
} = _m(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : et, true);
let ms;
function wx() {
  ms = undefined;
}
const Ce = {
  now: () => {
    if (ms === undefined) {
      Ce.set(pe.isProcessing || an.useManualTiming ? pe.timestamp : performance.now());
    }
    return ms;
  },
  set: e => {
    ms = e;
    queueMicrotask(wx);
  }
};
const Wm = e => t => typeof t == "string" && t.startsWith(e);
const Um = Wm("--");
const kx = Wm("var(--");
const Uu = e => kx(e) ? jx.test(e.split("/*")[0].trim()) : false;
const jx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ld(e) {
  if (typeof e != "string") {
    return false;
  } else {
    return e.split("/*")[0].includes("var(--");
  }
}
const kr = {
  test: e => typeof e == "number",
  parse: parseFloat,
  transform: e => e
};
const xi = {
  ...kr,
  transform: e => bt(0, 1, e)
};
const Ji = {
  ...kr,
  default: 1
};
const Xr = e => Math.round(e * 100000) / 100000;
const Hu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Sx(e) {
  return e == null;
}
const bx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
const $u = (e, t) => n => typeof n == "string" && !!bx.test(n) && !!n.startsWith(e) || !!t && !Sx(n) && !!Object.prototype.hasOwnProperty.call(n, t);
const Hm = (e, t, n) => r => {
  if (typeof r != "string") {
    return r;
  }
  const [i, s, o, l] = r.match(Hu);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== undefined ? parseFloat(l) : 1
  };
};
const Cx = e => bt(0, 255, e);
const sa = {
  ...kr,
  transform: e => Math.round(Cx(e))
};
const Sn = {
  test: $u("rgb", "red"),
  parse: Hm("red", "green", "blue"),
  transform: ({
    red: e,
    green: t,
    blue: n,
    alpha: r = 1
  }) => "rgba(" + sa.transform(e) + ", " + sa.transform(t) + ", " + sa.transform(n) + ", " + Xr(xi.transform(r)) + ")"
};
function Tx(e) {
  let t = "";
  let n = "";
  let r = "";
  let i = "";
  if (e.length > 5) {
    t = e.substring(1, 3);
    n = e.substring(3, 5);
    r = e.substring(5, 7);
    i = e.substring(7, 9);
  } else {
    t = e.substring(1, 2);
    n = e.substring(2, 3);
    r = e.substring(3, 4);
    i = e.substring(4, 5);
    t += t;
    n += n;
    r += r;
    i += i;
  }
  return {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const yl = {
  test: $u("#"),
  parse: Tx,
  transform: Sn.transform
};
const Mi = e => ({
  test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: t => `${t}${e}`
});
const Ft = Mi("deg");
const St = Mi("%");
const A = Mi("px");
const Px = Mi("vh");
const Nx = Mi("vw");
const Rd = {
  ...St,
  parse: e => St.parse(e) / 100,
  transform: e => St.transform(e * 100)
};
const qn = {
  test: $u("hsl", "hue"),
  parse: Hm("hue", "saturation", "lightness"),
  transform: ({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r = 1
  }) => "hsla(" + Math.round(e) + ", " + St.transform(Xr(t)) + ", " + St.transform(Xr(n)) + ", " + Xr(xi.transform(r)) + ")"
};
const ie = {
  test: e => Sn.test(e) || yl.test(e) || qn.test(e),
  parse: e => Sn.test(e) ? Sn.parse(e) : qn.test(e) ? qn.parse(e) : yl.parse(e),
  transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Sn.transform(e) : qn.transform(e),
  getAnimatableNone: e => {
    const t = ie.parse(e);
    t.alpha = 0;
    return ie.transform(t);
  }
};
const Ex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mx(e) {
  var t;
  var n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Hu)) == null ? undefined : t.length) || 0) + (((n = e.match(Ex)) == null ? undefined : n.length) || 0) > 0;
}
const $m = "number";
const Km = "color";
const Ax = "var";
const Lx = "var(";
const Dd = "${}";
const Rx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mr(e) {
  const t = e.toString();
  const n = [];
  const r = {
    color: [],
    number: [],
    var: []
  };
  const i = [];
  let s = 0;
  const l = t.replace(Rx, u => {
    if (ie.test(u)) {
      r.color.push(s);
      i.push(Km);
      n.push(ie.parse(u));
    } else if (u.startsWith(Lx)) {
      r.var.push(s);
      i.push(Ax);
      n.push(u);
    } else {
      r.number.push(s);
      i.push($m);
      n.push(parseFloat(u));
    }
    ++s;
    return Dd;
  }).split(Dd);
  return {
    values: n,
    split: l,
    indexes: r,
    types: i
  };
}
function Dx(e) {
  return mr(e).values;
}
function Gm({
  split: e,
  types: t
}) {
  const n = e.length;
  return r => {
    let i = "";
    for (let s = 0; s < n; s++) {
      i += e[s];
      if (r[s] !== undefined) {
        const o = t[s];
        if (o === $m) {
          i += Xr(r[s]);
        } else if (o === Km) {
          i += ie.transform(r[s]);
        } else {
          i += r[s];
        }
      }
    }
    return i;
  };
}
function Ix(e) {
  return Gm(mr(e));
}
const Vx = e => typeof e == "number" ? 0 : ie.test(e) ? ie.getAnimatableNone(e) : e;
const Bx = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : Vx(e);
function Ox(e) {
  const t = mr(e);
  return Gm(t)(t.values.map((r, i) => Bx(r, t.split[i])));
}
const ht = {
  test: Mx,
  parse: Dx,
  createTransformer: Ix,
  getAnimatableNone: Ox
};
function oa(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    n -= 1;
  }
  if (n < 1 / 6) {
    return e + (t - e) * 6 * n;
  } else if (n < 1 / 2) {
    return t;
  } else if (n < 2 / 3) {
    return e + (t - e) * (2 / 3 - n) * 6;
  } else {
    return e;
  }
}
function Fx({
  hue: e,
  saturation: t,
  lightness: n,
  alpha: r
}) {
  e /= 360;
  t /= 100;
  n /= 100;
  let i = 0;
  let s = 0;
  let o = 0;
  if (!t) {
    i = s = o = n;
  } else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t;
    const u = n * 2 - l;
    i = oa(u, l, e + 1 / 3);
    s = oa(u, l, e);
    o = oa(u, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Zs(e, t) {
  return n => n > 0 ? t : e;
}
const K = (e, t, n) => e + (t - e) * n;
const aa = (e, t, n) => {
  const r = e * e;
  const i = n * (t * t - r) + r;
  if (i < 0) {
    return 0;
  } else {
    return Math.sqrt(i);
  }
};
const zx = [yl, Sn, qn];
const _x = e => zx.find(t => t.test(e));
function Id(e) {
  const t = _x(e);
  if (!t) {
    return false;
  }
  let n = t.parse(e);
  if (t === qn) {
    n = Fx(n);
  }
  return n;
}
const Vd = (e, t) => {
  const n = Id(e);
  const r = Id(t);
  if (!n || !r) {
    return Zs(e, t);
  }
  const i = {
    ...n
  };
  return s => {
    i.red = aa(n.red, r.red, s);
    i.green = aa(n.green, r.green, s);
    i.blue = aa(n.blue, r.blue, s);
    i.alpha = K(n.alpha, r.alpha, s);
    return Sn.transform(i);
  };
};
const vl = new Set(["none", "hidden"]);
function Wx(e, t) {
  if (vl.has(e)) {
    return n => n <= 0 ? e : t;
  } else {
    return n => n >= 1 ? t : e;
  }
}
function Ux(e, t) {
  return n => K(e, t, n);
}
function Ku(e) {
  if (typeof e == "number") {
    return Ux;
  } else if (typeof e == "string") {
    if (Uu(e)) {
      return Zs;
    } else if (ie.test(e)) {
      return Vd;
    } else {
      return Kx;
    }
  } else if (Array.isArray(e)) {
    return Ym;
  } else if (typeof e == "object") {
    if (ie.test(e)) {
      return Vd;
    } else {
      return Hx;
    }
  } else {
    return Zs;
  }
}
function Ym(e, t) {
  const n = [...e];
  const r = n.length;
  const i = e.map((s, o) => Ku(s)(s, t[o]));
  return s => {
    for (let o = 0; o < r; o++) {
      n[o] = i[o](s);
    }
    return n;
  };
}
function Hx(e, t) {
  const n = {
    ...e,
    ...t
  };
  const r = {};
  for (const i in n) {
    if (e[i] !== undefined && t[i] !== undefined) {
      r[i] = Ku(e[i])(e[i], t[i]);
    }
  }
  return i => {
    for (const s in r) {
      n[s] = r[s](i);
    }
    return n;
  };
}
function $x(e, t) {
  const n = [];
  const r = {
    color: 0,
    var: 0,
    number: 0
  };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i];
    const o = e.indexes[s][r[s]];
    const l = e.values[o] ?? 0;
    n[i] = l;
    r[s]++;
  }
  return n;
}
const Kx = (e, t) => {
  const n = ht.createTransformer(t);
  const r = mr(e);
  const i = mr(t);
  if (r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length) {
    if (vl.has(e) && !i.values.length || vl.has(t) && !r.values.length) {
      return Wx(e, t);
    } else {
      return Ni(Ym($x(r, i), i.values), n);
    }
  } else {
    return Zs(e, t);
  }
};
function Xm(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number") {
    return K(e, t, n);
  } else {
    return Ku(e)(e, t);
  }
}
const Gx = e => {
  const t = ({
    timestamp: n
  }) => e(n);
  return {
    start: (n = true) => U.update(t, n),
    stop: () => ln(t),
    now: () => pe.isProcessing ? pe.timestamp : Ce.now()
  };
};
const Qm = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++) {
    r += Math.round(e(s / (i - 1)) * 10000) / 10000 + ", ";
  }
  return `linear(${r.substring(0, r.length - 2)})`;
};
const qs = 20000;
function Gu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  while (!r.done && t < qs) {
    t += n;
    r = e.next(t);
  }
  if (t >= qs) {
    return Infinity;
  } else {
    return t;
  }
}
function Yx(e, t = 100, n) {
  const r = n({
    ...e,
    keyframes: [0, t]
  });
  const i = Math.min(Gu(r), qs);
  return {
    type: "keyframes",
    ease: s => r.next(i * s).value / t,
    duration: qe(i)
  };
}
const q = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 0.005,
    default: 0.5
  },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1
};
function xl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Xx = 12;
function Qx(e, t, n) {
  let r = n;
  for (let i = 1; i < Xx; i++) {
    r = r - e(r) / t(r);
  }
  return r;
}
const la = 0.001;
function Zx({
  duration: e = q.duration,
  bounce: t = q.bounce,
  velocity: n = q.velocity,
  mass: r = q.mass
}) {
  let i;
  let s;
  let o = 1 - t;
  o = bt(q.minDamping, q.maxDamping, o);
  e = bt(q.minDuration, q.maxDuration, qe(e));
  if (o < 1) {
    i = c => {
      const d = c * o;
      const f = d * e;
      const h = d - n;
      const m = xl(c, o);
      const v = Math.exp(-f);
      return la - h / m * v;
    };
    s = c => {
      const f = c * o * e;
      const h = f * n + n;
      const m = Math.pow(o, 2) * Math.pow(c, 2) * e;
      const v = Math.exp(-f);
      const x = xl(Math.pow(c, 2), o);
      return (-i(c) + la > 0 ? -1 : 1) * ((h - m) * v) / x;
    };
  } else {
    i = c => {
      const d = Math.exp(-c * e);
      const f = (c - n) * e + 1;
      return -la + d * f;
    };
    s = c => {
      const d = Math.exp(-c * e);
      const f = (n - c) * (e * e);
      return d * f;
    };
  }
  const l = 5 / e;
  const u = Qx(i, s, l);
  e = Ue(e);
  if (isNaN(u)) {
    return {
      stiffness: q.stiffness,
      damping: q.damping,
      duration: e
    };
  }
  {
    const c = Math.pow(u, 2) * r;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const qx = ["duration", "bounce"];
const Jx = ["stiffness", "damping", "mass"];
function Bd(e, t) {
  return t.some(n => e[n] !== undefined);
}
function e2(e) {
  let t = {
    velocity: q.velocity,
    stiffness: q.stiffness,
    damping: q.damping,
    mass: q.mass,
    isResolvedFromDuration: false,
    ...e
  };
  if (!Bd(e, Jx) && Bd(e, qx)) {
    t.velocity = 0;
    if (e.visualDuration) {
      const n = e.visualDuration;
      const r = Math.PI * 2 / (n * 1.2);
      const i = r * r;
      const s = bt(0.05, 1, 1 - (e.bounce || 0)) * 2 * Math.sqrt(i);
      t = {
        ...t,
        mass: q.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = Zx({
        ...e,
        velocity: 0
      });
      t = {
        ...t,
        ...n,
        mass: q.mass
      };
      t.isResolvedFromDuration = true;
    }
  }
  return t;
}
function Js(e = q.visualDuration, t = q.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let {
    restSpeed: r,
    restDelta: i
  } = n;
  const s = n.keyframes[0];
  const o = n.keyframes[n.keyframes.length - 1];
  const l = {
    done: false,
    value: s
  };
  const {
    stiffness: u,
    damping: c,
    mass: d,
    duration: f,
    velocity: h,
    isResolvedFromDuration: m
  } = e2({
    ...n,
    velocity: -qe(n.velocity || 0)
  });
  const v = h || 0;
  const x = c / (Math.sqrt(u * d) * 2);
  const k = o - s;
  const g = qe(Math.sqrt(u / d));
  const p = Math.abs(k) < 5;
  r ||= p ? q.restSpeed.granular : q.restSpeed.default;
  i ||= p ? q.restDelta.granular : q.restDelta.default;
  let y;
  let w;
  let S;
  let b;
  let P;
  let T;
  if (x < 1) {
    S = xl(g, x);
    b = (v + x * g * k) / S;
    y = N => {
      const O = Math.exp(-x * g * N);
      return o - O * (b * Math.sin(S * N) + k * Math.cos(S * N));
    };
    P = x * g * b + k * S;
    T = x * g * k - b * S;
    w = N => Math.exp(-x * g * N) * (P * Math.sin(S * N) + T * Math.cos(S * N));
  } else if (x === 1) {
    y = O => o - Math.exp(-g * O) * (k + (v + g * k) * O);
    const N = v + g * k;
    w = O => Math.exp(-g * O) * (g * N * O - v);
  } else {
    const N = g * Math.sqrt(x * x - 1);
    y = Oe => {
      const it = Math.exp(-x * g * Oe);
      const Me = Math.min(N * Oe, 300);
      return o - it * ((v + x * g * k) * Math.sinh(Me) + N * k * Math.cosh(Me)) / N;
    };
    const O = (v + x * g * k) / N;
    const ne = x * g * O - k * N;
    const Be = x * g * k - O * N;
    w = Oe => {
      const it = Math.exp(-x * g * Oe);
      const Me = Math.min(N * Oe, 300);
      return it * (ne * Math.sinh(Me) + Be * Math.cosh(Me));
    };
  }
  const V = {
    calculatedDuration: m && f || null,
    velocity: N => Ue(w(N)),
    next: N => {
      if (!m && x < 1) {
        const ne = Math.exp(-x * g * N);
        const Be = Math.sin(S * N);
        const Oe = Math.cos(S * N);
        const it = o - ne * (b * Be + k * Oe);
        const Me = Ue(ne * (P * Be + T * Oe));
        l.done = Math.abs(Me) <= r && Math.abs(o - it) <= i;
        l.value = l.done ? o : it;
        return l;
      }
      const O = y(N);
      if (m) {
        l.done = N >= f;
      } else {
        const ne = Ue(w(N));
        l.done = Math.abs(ne) <= r && Math.abs(o - O) <= i;
      }
      l.value = l.done ? o : O;
      return l;
    },
    toString: () => {
      const N = Math.min(Gu(V), qs);
      const O = Qm(ne => V.next(N * ne).value, N, 30);
      return N + "ms " + O;
    },
    toTransition: () => {}
  };
  return V;
}
Js.applyToOptions = e => {
  const t = Yx(e, 100, Js);
  e.ease = t.ease;
  e.duration = Ue(t.duration);
  e.type = "keyframes";
  return e;
};
const t2 = 5;
function Zm(e, t, n) {
  const r = Math.max(t - t2, 0);
  return Mm(n - e(r), t - r);
}
function wl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: u,
  restDelta: c = 0.5,
  restSpeed: d
}) {
  const f = e[0];
  const h = {
    done: false,
    value: f
  };
  const m = T => l !== undefined && T < l || u !== undefined && T > u;
  const v = T => l === undefined ? u : u === undefined || Math.abs(l - T) < Math.abs(u - T) ? l : u;
  let x = n * t;
  const k = f + x;
  const g = o === undefined ? k : o(k);
  if (g !== k) {
    x = g - f;
  }
  const p = T => -x * Math.exp(-T / r);
  const y = T => g + p(T);
  const w = T => {
    const V = p(T);
    const N = y(T);
    h.done = Math.abs(V) <= c;
    h.value = h.done ? g : N;
  };
  let S;
  let b;
  const P = T => {
    if (m(h.value)) {
      S = T;
      b = Js({
        keyframes: [h.value, v(h.value)],
        velocity: Zm(y, T, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d
      });
    }
  };
  P(0);
  return {
    calculatedDuration: null,
    next: T => {
      let V = false;
      if (!b && S === undefined) {
        V = true;
        w(T);
        P(T);
      }
      if (S !== undefined && T >= S) {
        return b.next(T - S);
      } else {
        if (!V) {
          w(T);
        }
        return h;
      }
    }
  };
}
function n2(e, t, n) {
  const r = [];
  const i = n || an.mix || Xm;
  const s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || et : t;
      l = Ni(u, l);
    }
    r.push(l);
  }
  return r;
}
function r2(e, t, {
  clamp: n = true,
  ease: r,
  mixer: i
} = {}) {
  const s = e.length;
  Fu(s === t.length);
  if (s === 1) {
    return () => t[0];
  }
  if (s === 2 && t[0] === t[1]) {
    return () => t[1];
  }
  const o = e[0] === e[1];
  if (e[0] > e[s - 1]) {
    e = [...e].reverse();
    t = [...t].reverse();
  }
  const l = n2(t, r, i);
  const u = l.length;
  const c = d => {
    if (o && d < e[0]) {
      return t[0];
    }
    let f = 0;
    if (u > 1) {
      for (; f < e.length - 2 && !(d < e[f + 1]); f++);
    }
    const h = vi(e[f], e[f + 1], d);
    return l[f](h);
  };
  if (n) {
    return d => c(bt(e[0], e[s - 1], d));
  } else {
    return c;
  }
}
function i2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = vi(0, t, r);
    e.push(K(n, 1, i));
  }
}
function s2(e) {
  const t = [0];
  i2(t, e.length - 1);
  return t;
}
function o2(e, t) {
  return e.map(n => n * t);
}
function a2(e, t) {
  return e.map(() => t || Fm).splice(0, e.length - 1);
}
function Qr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut"
}) {
  const i = mx(r) ? r.map(Ad) : Ad(r);
  const s = {
    done: false,
    value: t[0]
  };
  const o = o2(n && n.length === t.length ? n : s2(t), e);
  const l = r2(o, t, {
    ease: Array.isArray(i) ? i : a2(t, i)
  });
  return {
    calculatedDuration: e,
    next: u => {
      s.value = l(u);
      s.done = u >= e;
      return s;
    }
  };
}
const l2 = e => e !== null;
function To(e, {
  repeat: t,
  repeatType: n = "loop"
}, r, i = 1) {
  const s = e.filter(l2);
  const l = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  if (!l || r === undefined) {
    return s[l];
  } else {
    return r;
  }
}
const u2 = {
  decay: wl,
  inertia: wl,
  tween: Qr,
  keyframes: Qr,
  spring: Js
};
function qm(e) {
  if (typeof e.type == "string") {
    e.type = u2[e.type];
  }
}
class Yu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise(t => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const c2 = e => e / 100;
class eo extends Yu {
  constructor(t) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: undefined
    };
    this.stop = () => {
      var r;
      var i;
      const {
        motionValue: n
      } = this.options;
      if (n && n.updatedAt !== Ce.now()) {
        this.tick(Ce.now());
      }
      this.isStopped = true;
      if (this.state !== "idle") {
        this.teardown();
        if ((i = (r = this.options).onStop) != null) {
          i.call(r);
        }
      }
    };
    this.options = t;
    this.initAnimation();
    this.play();
    if (t.autoplay === false) {
      this.pause();
    }
  }
  initAnimation() {
    const {
      options: t
    } = this;
    qm(t);
    const {
      type: n = Qr,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0
    } = t;
    let {
      keyframes: l
    } = t;
    const u = n || Qr;
    if (u !== Qr && typeof l[0] != "number") {
      this.mixKeyframes = Ni(c2, Xm(l[0], l[1]));
      l = [0, 100];
    }
    const c = u({
      ...t,
      keyframes: l
    });
    if (s === "mirror") {
      this.mirroredGenerator = u({
        ...t,
        keyframes: [...l].reverse(),
        velocity: -o
      });
    }
    if (c.calculatedDuration === null) {
      c.calculatedDuration = Gu(c);
    }
    const {
      calculatedDuration: d
    } = c;
    this.calculatedDuration = d;
    this.resolvedDuration = d + i;
    this.totalDuration = this.resolvedDuration * (r + 1) - i;
    this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = n;
    }
  }
  tick(t, n = false) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: l,
      calculatedDuration: u
    } = this;
    if (this.startTime === null) {
      return r.next(0);
    }
    const {
      delay: c = 0,
      keyframes: d,
      repeat: f,
      repeatType: h,
      repeatDelay: m,
      type: v,
      onUpdate: x,
      finalKeyframe: k
    } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, t);
    } else if (this.speed < 0) {
      this.startTime = Math.min(t - i / this.speed, this.startTime);
    }
    if (n) {
      this.currentTime = t;
    } else {
      this.updateTime(t);
    }
    const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1);
    const p = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = i;
    }
    let y = this.currentTime;
    let w = r;
    if (f) {
      const T = Math.min(this.currentTime, i) / l;
      let V = Math.floor(T);
      let N = T % 1;
      if (!N && T >= 1) {
        N = 1;
      }
      if (N === 1) {
        V--;
      }
      V = Math.min(V, f + 1);
      if (V % 2) {
        if (h === "reverse") {
          N = 1 - N;
          if (m) {
            N -= m / l;
          }
        } else if (h === "mirror") {
          w = o;
        }
      }
      y = bt(0, 1, N) * l;
    }
    let S;
    if (p) {
      this.delayState.value = d[0];
      S = this.delayState;
    } else {
      S = w.next(y);
    }
    if (s && !p) {
      S.value = s(S.value);
    }
    let {
      done: b
    } = S;
    if (!p && u !== null) {
      b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0;
    }
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && b);
    if (P && v !== wl) {
      S.value = To(d, this.options, k, this.speed);
    }
    if (x) {
      x(S.value);
    }
    if (P) {
      this.finish();
    }
    return S;
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return qe(this.calculatedDuration);
  }
  get iterationDuration() {
    const {
      delay: t = 0
    } = this.options || {};
    return this.duration + qe(t);
  }
  get time() {
    return qe(this.currentTime);
  }
  set time(t) {
    t = Ue(t);
    this.currentTime = t;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = t;
    } else if (this.driver) {
      this.startTime = this.driver.now() - t / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = t;
      this.tick(t);
    }
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) {
      return this.options.velocity || 0;
    }
    if (this.generator.velocity) {
      return this.generator.velocity(t);
    }
    const n = this.generator.next(t).value;
    return Zm(r => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    if (n && this.driver) {
      this.updateTime(Ce.now());
    }
    this.playbackSpeed = t;
    if (n && this.driver) {
      this.time = qe(this.currentTime);
    }
  }
  play() {
    var i;
    var s;
    if (this.isStopped) {
      return;
    }
    const {
      driver: t = Gx,
      startTime: n
    } = this.options;
    this.driver ||= t(o => this.tick(o));
    if ((s = (i = this.options).onPlay) != null) {
      s.call(i);
    }
    const r = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = r;
    } else if (this.holdTime !== null) {
      this.startTime = r - this.holdTime;
    } else {
      this.startTime ||= n ?? r;
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(Ce.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    var t;
    var n;
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    if ((n = (t = this.options).onComplete) != null) {
      n.call(t);
    }
  }
  cancel() {
    var t;
    var n;
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    if ((n = (t = this.options).onCancel) != null) {
      n.call(t);
    }
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.startTime = this.holdTime = null;
  }
  stopDriver() {
    if (this.driver) {
      this.driver.stop();
      this.driver = undefined;
    }
  }
  sample(t) {
    this.startTime = 0;
    return this.tick(t, true);
  }
  attachTimeline(t) {
    var n;
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    if ((n = this.driver) != null) {
      n.stop();
    }
    return t.observe(this);
  }
}
function d2(e) {
  for (let t = 1; t < e.length; t++) {
    e[t] ??= e[t - 1];
  }
}
const bn = e => e * 180 / Math.PI;
const kl = e => {
  const t = bn(Math.atan2(e[1], e[0]));
  return jl(t);
};
const f2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: kl,
  rotateZ: kl,
  skewX: e => bn(Math.atan(e[1])),
  skewY: e => bn(Math.atan(e[2])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
};
const jl = e => {
  e = e % 360;
  if (e < 0) {
    e += 360;
  }
  return e;
};
const Od = kl;
const Fd = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]);
const zd = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]);
const h2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Fd,
  scaleY: zd,
  scale: e => (Fd(e) + zd(e)) / 2,
  rotateX: e => jl(bn(Math.atan2(e[6], e[5]))),
  rotateY: e => jl(bn(Math.atan2(-e[2], e[0]))),
  rotateZ: Od,
  rotate: Od,
  skewX: e => bn(Math.atan(e[4])),
  skewY: e => bn(Math.atan(e[1])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Sl(e) {
  if (e.includes("scale")) {
    return 1;
  } else {
    return 0;
  }
}
function bl(e, t) {
  if (!e || e === "none") {
    return Sl(t);
  }
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r;
  let i;
  if (n) {
    r = h2;
    i = n;
  } else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = f2;
    i = l;
  }
  if (!i) {
    return Sl(t);
  }
  const s = r[t];
  const o = i[1].split(",").map(m2);
  if (typeof s == "function") {
    return s(o);
  } else {
    return o[s];
  }
}
const p2 = (e, t) => {
  const {
    transform: n = "none"
  } = getComputedStyle(e);
  return bl(n, t);
};
function m2(e) {
  return parseFloat(e.trim());
}
const jr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
const Sr = new Set(jr);
const _d = e => e === kr || e === A;
const g2 = new Set(["x", "y", "z"]);
const y2 = jr.filter(e => !g2.has(e));
function v2(e) {
  const t = [];
  y2.forEach(n => {
    const r = e.getValue(n);
    if (r !== undefined) {
      t.push([n, r.get()]);
      r.set(n.startsWith("scale") ? 1 : 0);
    }
  });
  return t;
}
const Yt = {
  width: ({
    x: e
  }, {
    paddingLeft: t = "0",
    paddingRight: n = "0",
    boxSizing: r
  }) => {
    const i = e.max - e.min;
    if (r === "border-box") {
      return i;
    } else {
      return i - parseFloat(t) - parseFloat(n);
    }
  },
  height: ({
    y: e
  }, {
    paddingTop: t = "0",
    paddingBottom: n = "0",
    boxSizing: r
  }) => {
    const i = e.max - e.min;
    if (r === "border-box") {
      return i;
    } else {
      return i - parseFloat(t) - parseFloat(n);
    }
  },
  top: (e, {
    top: t
  }) => parseFloat(t),
  left: (e, {
    left: t
  }) => parseFloat(t),
  bottom: ({
    y: e
  }, {
    top: t
  }) => parseFloat(t) + (e.max - e.min),
  right: ({
    x: e
  }, {
    left: t
  }) => parseFloat(t) + (e.max - e.min),
  x: (e, {
    transform: t
  }) => bl(t, "x"),
  y: (e, {
    transform: t
  }) => bl(t, "y")
};
Yt.translateX = Yt.x;
Yt.translateY = Yt.y;
const Pn = new Set();
let Cl = false;
let Tl = false;
let Pl = false;
function Jm() {
  if (Tl) {
    const e = Array.from(Pn).filter(r => r.needsMeasurement);
    const t = new Set(e.map(r => r.element));
    const n = new Map();
    t.forEach(r => {
      const i = v2(r);
      if (i.length) {
        n.set(r, i);
        r.render();
      }
    });
    e.forEach(r => r.measureInitialState());
    t.forEach(r => {
      r.render();
      const i = n.get(r);
      if (i) {
        i.forEach(([s, o]) => {
          var l;
          if ((l = r.getValue(s)) != null) {
            l.set(o);
          }
        });
      }
    });
    e.forEach(r => r.measureEndState());
    e.forEach(r => {
      if (r.suspendedScrollY !== undefined) {
        window.scrollTo(0, r.suspendedScrollY);
      }
    });
  }
  Tl = false;
  Cl = false;
  Pn.forEach(e => e.complete(Pl));
  Pn.clear();
}
function eg() {
  Pn.forEach(e => {
    e.readKeyframes();
    if (e.needsMeasurement) {
      Tl = true;
    }
  });
}
function x2() {
  Pl = true;
  eg();
  Jm();
  Pl = false;
}
class Xu {
  constructor(t, n, r, i, s, o = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...t];
    this.onComplete = n;
    this.name = r;
    this.motionValue = i;
    this.element = s;
    this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      Pn.add(this);
      if (!Cl) {
        Cl = true;
        U.read(eg);
        U.resolveKeyframes(Jm);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i
    } = this;
    if (t[0] === null) {
      const s = i == null ? undefined : i.get();
      const o = t[t.length - 1];
      if (s !== undefined) {
        t[0] = s;
      } else if (r && n) {
        const l = r.readValue(n, o);
        if (l != null) {
          t[0] = l;
        }
      }
      if (t[0] === undefined) {
        t[0] = o;
      }
      if (i && s === undefined) {
        i.set(t[0]);
      }
    }
    d2(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t);
    Pn.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      Pn.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending") {
      this.scheduleResolve();
    }
  }
}
const w2 = e => e.startsWith("--");
function tg(e, t, n) {
  if (w2(t)) {
    e.style.setProperty(t, n);
  } else {
    e.style[t] = n;
  }
}
const k2 = {};
function ng(e, t) {
  const n = Em(e);
  return () => k2[t] ?? n();
}
const j2 = ng(() => window.ScrollTimeline !== undefined, "scrollTimeline");
const rg = ng(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    });
  } catch {
    return false;
  }
  return true;
}, "linearEasing");
const Or = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`;
const Wd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Or([0, 0.65, 0.55, 1]),
  circOut: Or([0.55, 0, 1, 0.45]),
  backIn: Or([0.31, 0.01, 0.66, -0.59]),
  backOut: Or([0.33, 1.53, 0.69, 0.99])
};
function ig(e, t) {
  if (e) {
    if (typeof e == "function") {
      if (rg()) {
        return Qm(e, t);
      } else {
        return "ease-out";
      }
    } else if (zm(e)) {
      return Or(e);
    } else if (Array.isArray(e)) {
      return e.map(n => ig(n, t) || Wd.easeOut);
    } else {
      return Wd[e];
    }
  }
}
function S2(e, t, n, {
  delay: r = 0,
  duration: i = 300,
  repeat: s = 0,
  repeatType: o = "loop",
  ease: l = "easeOut",
  times: u
} = {}, c = undefined) {
  const d = {
    [t]: n
  };
  if (u) {
    d.offset = u;
  }
  const f = ig(l, i);
  if (Array.isArray(f)) {
    d.easing = f;
  }
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  if (c) {
    h.pseudoElement = c;
  }
  return e.animate(d, h);
}
function sg(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function b2({
  type: e,
  ...t
}) {
  if (sg(e) && rg()) {
    return e.applyToOptions(t);
  } else {
    t.duration ??= 300;
    t.ease ??= "easeOut";
    return t;
  }
}
class og extends Yu {
  constructor(t) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!t) {
      return;
    }
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = false,
      finalKeyframe: l,
      onComplete: u
    } = t;
    this.isPseudoElement = !!s;
    this.allowFlatten = o;
    this.options = t;
    Fu(typeof t.type != "string");
    const c = b2(t);
    this.animation = S2(n, r, i, c, s);
    if (c.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = () => {
      this.finishedTime = this.time;
      if (!s) {
        const d = To(i, this.options, l, this.speed);
        if (this.updateMotionValue) {
          this.updateMotionValue(d);
        }
        tg(n, r, d);
        this.animation.cancel();
      }
      if (u != null) {
        u();
      }
      this.notifyFinished();
    };
  }
  play() {
    if (!this.isStopped) {
      this.manualStartTime = null;
      this.animation.play();
      if (this.state === "finished") {
        this.updateFinished();
      }
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t;
    var n;
    if ((n = (t = this.animation).finish) != null) {
      n.call(t);
    }
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) {
      return;
    }
    this.isStopped = true;
    const {
      state: t
    } = this;
    if (t !== "idle" && t !== "finished") {
      if (this.updateMotionValue) {
        this.updateMotionValue();
      } else {
        this.commitStyles();
      }
      if (!this.isPseudoElement) {
        this.cancel();
      }
    }
  }
  commitStyles() {
    var n;
    var r;
    var i;
    const t = (n = this.options) == null ? undefined : n.element;
    if (!this.isPseudoElement && t != null && t.isConnected) {
      if ((i = (r = this.animation).commitStyles) != null) {
        i.call(r);
      }
    }
  }
  get duration() {
    var n;
    var r;
    const t = ((r = (n = this.animation.effect) == null ? undefined : n.getComputedTiming) == null ? undefined : r.call(n).duration) || 0;
    return qe(Number(t));
  }
  get iterationDuration() {
    const {
      delay: t = 0
    } = this.options || {};
    return this.duration + qe(t);
  }
  get time() {
    return qe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = Ue(t);
    if (n) {
      this.animation.pause();
    }
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    if (t < 0) {
      this.finishedTime = null;
    }
    this.animation.playbackRate = t;
  }
  get state() {
    if (this.finishedTime !== null) {
      return "finished";
    } else {
      return this.animation.playState;
    }
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({
    timeline: t,
    rangeStart: n,
    rangeEnd: r,
    observe: i
  }) {
    var s;
    if (this.allowFlatten) {
      if ((s = this.animation.effect) != null) {
        s.updateTiming({
          easing: "linear"
        });
      }
    }
    this.animation.onfinish = null;
    if (t && j2()) {
      this.animation.timeline = t;
      if (n) {
        this.animation.rangeStart = n;
      }
      if (r) {
        this.animation.rangeEnd = r;
      }
      return et;
    } else {
      return i(this);
    }
  }
}
const ag = {
  anticipate: Vm,
  backInOut: Im,
  circInOut: Om
};
function C2(e) {
  return e in ag;
}
function T2(e) {
  if (typeof e.ease == "string" && C2(e.ease)) {
    e.ease = ag[e.ease];
  }
}
const ua = 10;
class P2 extends og {
  constructor(t) {
    T2(t);
    qm(t);
    super(t);
    if (t.startTime !== undefined && t.autoplay !== false) {
      this.startTime = t.startTime;
    }
    this.options = t;
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) {
      return;
    }
    if (t !== undefined) {
      n.set(t);
      return;
    }
    const l = new eo({
      ...o,
      autoplay: false
    });
    const u = Math.max(ua, Ce.now() - this.startTime);
    const c = bt(0, ua, u - ua);
    const d = l.sample(u).value;
    const {
      name: f
    } = this.options;
    if (s && f) {
      tg(s, f, d);
    }
    n.setWithVelocity(l.sample(Math.max(0, u - c)).value, d, c);
    l.stop();
  }
}
const Ud = (e, t) => t === "zIndex" ? false : typeof e == "number" || !!Array.isArray(e) || typeof e == "string" && (!!ht.test(e) || e === "0") && !e.startsWith("url(");
function N2(e) {
  const t = e[0];
  if (e.length === 1) {
    return true;
  }
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== t) {
      return true;
    }
  }
}
function E2(e, t, n, r) {
  const i = e[0];
  if (i === null) {
    return false;
  }
  if (t === "display" || t === "visibility") {
    return true;
  }
  const s = e[e.length - 1];
  const o = Ud(i, t);
  const l = Ud(s, t);
  if (!o || !l) {
    return false;
  } else {
    return N2(e) || (n === "spring" || sg(n)) && r;
  }
}
function Nl(e) {
  e.duration = 0;
  e.type = "keyframes";
}
const lg = new Set(["opacity", "clipPath", "filter", "transform"]);
const M2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function A2(e) {
  for (let t = 0; t < e.length; t++) {
    if (typeof e[t] == "string" && M2.test(e[t])) {
      return true;
    }
  }
  return false;
}
const L2 = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]);
const R2 = Em(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function D2(e) {
  var f;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
    keyframes: l
  } = e;
  if (!(((f = t == null ? undefined : t.owner) == null ? undefined : f.current) instanceof HTMLElement)) {
    return false;
  }
  const {
    onUpdate: c,
    transformTemplate: d
  } = t.owner.getProps();
  return R2() && n && (lg.has(n) || L2.has(n) && A2(l)) && (n !== "transform" || !d) && !c && !r && i !== "mirror" && s !== 0 && o !== "inertia";
}
const I2 = 40;
class V2 extends Yu {
  constructor({
    autoplay: t = true,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: l,
    name: u,
    motionValue: c,
    element: d,
    ...f
  }) {
    var v;
    super();
    this.stop = () => {
      var x;
      var k;
      if (this._animation) {
        this._animation.stop();
        if ((x = this.stopTimeline) != null) {
          x.call(this);
        }
      }
      if ((k = this.keyframeResolver) != null) {
        k.cancel();
      }
    };
    this.createdAt = Ce.now();
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      name: u,
      motionValue: c,
      element: d,
      ...f
    };
    const m = (d == null ? undefined : d.KeyframeResolver) || Xu;
    this.keyframeResolver = new m(l, (x, k, g) => this.onKeyframesResolved(x, k, h, !g), u, c, d);
    if ((v = this.keyframeResolver) != null) {
      v.scheduleResolve();
    }
  }
  onKeyframesResolved(t, n, r, i) {
    var g;
    var p;
    this.keyframeResolver = undefined;
    const {
      name: s,
      type: o,
      velocity: l,
      delay: u,
      isHandoff: c,
      onUpdate: d
    } = r;
    this.resolvedAt = Ce.now();
    let f = true;
    if (!E2(t, s, o, l)) {
      f = false;
      if (an.instantAnimations || !u) {
        if (d != null) {
          d(To(t, r, n));
        }
      }
      t[0] = t[t.length - 1];
      Nl(r);
      r.repeat = 0;
    }
    const m = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > I2 ? this.resolvedAt : this.createdAt : this.createdAt : undefined,
      finalKeyframe: n,
      ...r,
      keyframes: t
    };
    const v = f && !c && D2(m);
    const x = (p = (g = m.motionValue) == null ? undefined : g.owner) == null ? undefined : p.current;
    let k;
    if (v) {
      try {
        k = new P2({
          ...m,
          element: x
        });
      } catch {
        k = new eo(m);
      }
    } else {
      k = new eo(m);
    }
    k.finished.then(() => {
      this.notifyFinished();
    }).catch(et);
    if (this.pendingTimeline) {
      this.stopTimeline = k.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = undefined;
    }
    this._animation = k;
  }
  get finished() {
    if (this._animation) {
      return this.animation.finished;
    } else {
      return this._finished;
    }
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    if (!this._animation) {
      if ((t = this.keyframeResolver) != null) {
        t.resume();
      }
      x2();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(t);
    } else {
      this.pendingTimeline = t;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    if (this._animation) {
      this.animation.cancel();
    }
    if ((t = this.keyframeResolver) != null) {
      t.cancel();
    }
  }
}
function ug(e, t, n, r = 0, i = 1) {
  const s = Array.from(e).sort((c, d) => c.sortNodePosition(d)).indexOf(t);
  const o = e.size;
  const l = (o - 1) * r;
  if (typeof n == "function") {
    return n(s, o);
  } else if (i === 1) {
    return s * r;
  } else {
    return l - s * r;
  }
}
const B2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function O2(e) {
  const t = B2.exec(e);
  if (!t) {
    return [,];
  }
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function cg(e, t, n = 1) {
  const [r, i] = O2(e);
  if (!r) {
    return;
  }
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    if (Tm(o)) {
      return parseFloat(o);
    } else {
      return o;
    }
  }
  if (Uu(i)) {
    return cg(i, t, n + 1);
  } else {
    return i;
  }
}
const F2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
const z2 = e => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? Math.sqrt(550) * 2 : 30,
  restSpeed: 10
});
const _2 = {
  type: "keyframes",
  duration: 0.8
};
const W2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
const U2 = (e, {
  keyframes: t
}) => t.length > 2 ? _2 : Sr.has(e) ? e.startsWith("scale") ? z2(t[1]) : F2 : W2;
function dg(e, t) {
  if (e != null && e.inherit && t) {
    const {
      inherit: n,
      ...r
    } = e;
    return {
      ...t,
      ...r
    };
  }
  return e;
}
function Qu(e, t) {
  const n = (e == null ? undefined : e[t]) ?? (e == null ? undefined : e.default) ?? e;
  if (n !== e) {
    return dg(n, e);
  } else {
    return n;
  }
}
const H2 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function $2(e) {
  for (const t in e) {
    if (!H2.has(t)) {
      return true;
    }
  }
  return false;
}
const Zu = (e, t, n, r = {}, i, s) => o => {
  const l = Qu(r, e) || {};
  const u = l.delay || r.delay || 0;
  let {
    elapsed: c = 0
  } = r;
  c = c - Ue(u);
  const d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -c,
    onUpdate: h => {
      t.set(h);
      if (l.onUpdate) {
        l.onUpdate(h);
      }
    },
    onComplete: () => {
      o();
      if (l.onComplete) {
        l.onComplete();
      }
    },
    name: e,
    motionValue: t,
    element: s ? undefined : i
  };
  if (!$2(l)) {
    Object.assign(d, U2(e, d));
  }
  d.duration &&= Ue(d.duration);
  d.repeatDelay &&= Ue(d.repeatDelay);
  if (d.from !== undefined) {
    d.keyframes[0] = d.from;
  }
  let f = false;
  if (d.type === false || d.duration === 0 && !d.repeatDelay) {
    Nl(d);
    if (d.delay === 0) {
      f = true;
    }
  }
  if (an.instantAnimations || an.skipAnimations || i != null && i.shouldSkipAnimations) {
    f = true;
    Nl(d);
    d.delay = 0;
  }
  d.allowFlatten = !l.type && !l.ease;
  if (f && !s && t.get() !== undefined) {
    const h = To(d.keyframes, l);
    if (h !== undefined) {
      U.update(() => {
        d.onUpdate(h);
        d.onComplete();
      });
      return;
    }
  }
  if (l.isSync) {
    return new eo(d);
  } else {
    return new V2(d);
  }
};
function Hd(e) {
  const t = [{}, {}];
  if (e != null) {
    e.values.forEach((n, r) => {
      t[0][r] = n.get();
      t[1][r] = n.getVelocity();
    });
  }
  return t;
}
function qu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Hd(r);
    t = t(n !== undefined ? n : e.custom, i, s);
  }
  if (typeof t == "string") {
    t = e.variants && e.variants[t];
  }
  if (typeof t == "function") {
    const [i, s] = Hd(r);
    t = t(n !== undefined ? n : e.custom, i, s);
  }
  return t;
}
function Nn(e, t, n) {
  const r = e.getProps();
  return qu(r, t, n !== undefined ? n : r.custom, e);
}
const fg = new Set(["width", "height", "top", "left", "right", "bottom", ...jr]);
const $d = 30;
const K2 = e => !isNaN(parseFloat(e));
class G2 {
  constructor(t, n = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = r => {
      var s;
      const i = Ce.now();
      if (this.updatedAt !== i) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(r);
      if (this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents)) {
        for (const o of this.dependents) {
          o.dirty();
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(t);
    this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t;
    this.updatedAt = Ce.now();
    if (this.canTrackVelocity === null && t !== undefined) {
      this.canTrackVelocity = K2(this.current);
    }
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] ||= new zu();
    const r = this.events[t].add(n);
    if (t === "change") {
      return () => {
        r();
        U.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    } else {
      return r;
    }
  }
  clearListeners() {
    for (const t in this.events) {
      this.events[t].clear();
    }
  }
  attach(t, n) {
    this.passiveEffect = t;
    this.stopPassiveEffect = n;
  }
  set(t) {
    if (this.passiveEffect) {
      this.passiveEffect(t, this.updateAndNotify);
    } else {
      this.updateAndNotify(t);
    }
  }
  setWithVelocity(t, n, r) {
    this.set(n);
    this.prev = undefined;
    this.prevFrameValue = t;
    this.prevUpdatedAt = this.updatedAt - r;
  }
  jump(t, n = true) {
    this.updateAndNotify(t);
    this.prev = t;
    this.prevUpdatedAt = this.prevFrameValue = undefined;
    if (n) {
      this.stop();
    }
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
  dirty() {
    var t;
    if ((t = this.events.change) != null) {
      t.notify(this.current);
    }
  }
  addDependent(t) {
    this.dependents ||= new Set();
    this.dependents.add(t);
  }
  removeDependent(t) {
    if (this.dependents) {
      this.dependents.delete(t);
    }
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ce.now();
    if (!this.canTrackVelocity || this.prevFrameValue === undefined || t - this.updatedAt > $d) {
      return 0;
    }
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $d);
    return Mm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    this.stop();
    return new Promise(n => {
      this.hasAnimated = true;
      this.animation = t(n);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t;
    var n;
    if ((t = this.dependents) != null) {
      t.clear();
    }
    if ((n = this.events.destroy) != null) {
      n.notify();
    }
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function gr(e, t) {
  return new G2(e, t);
}
const El = e => Array.isArray(e);
function Y2(e, t, n) {
  if (e.hasValue(t)) {
    e.getValue(t).set(n);
  } else {
    e.addValue(t, gr(n));
  }
}
function X2(e) {
  if (El(e)) {
    return e[e.length - 1] || 0;
  } else {
    return e;
  }
}
function Q2(e, t) {
  const n = Nn(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...s
  } = n || {};
  s = {
    ...s,
    ...r
  };
  for (const o in s) {
    const l = X2(s[o]);
    Y2(e, o, l);
  }
}
const me = e => !!e && !!e.getVelocity;
function Z2(e) {
  return !!me(e) && !!e.add;
}
function Ml(e, t) {
  const n = e.getValue("willChange");
  if (Z2(n)) {
    return n.add(t);
  }
  if (!n && an.WillChange) {
    const r = new an.WillChange("auto");
    e.addValue("willChange", r);
    r.add(t);
  }
}
function Ju(e) {
  return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`);
}
const q2 = "framerAppearId";
const hg = "data-" + Ju(q2);
function pg(e) {
  return e.props[hg];
}
function J2({
  protectedKeys: e,
  needsAnimating: t
}, n) {
  const r = e.hasOwnProperty(n) && t[n] !== true;
  t[n] = false;
  return r;
}
function mg(e, t, {
  delay: n = 0,
  transitionOverride: r,
  type: i
} = {}) {
  let {
    transition: s,
    transitionEnd: o,
    ...l
  } = t;
  const u = e.getDefaultTransition();
  s = s ? dg(s, u) : u;
  const c = s == null ? undefined : s.reduceMotion;
  if (r) {
    s = r;
  }
  const d = [];
  const f = i && e.animationState && e.animationState.getState()[i];
  for (const h in l) {
    const m = e.getValue(h, e.latestValues[h] ?? null);
    const v = l[h];
    if (v === undefined || f && J2(f, h)) {
      continue;
    }
    const x = {
      delay: n,
      ...Qu(s || {}, h)
    };
    const k = m.get();
    if (k !== undefined && !m.isAnimating() && !Array.isArray(v) && v === k && !x.velocity) {
      U.update(() => m.set(v));
      continue;
    }
    let g = false;
    if (window.MotionHandoffAnimation) {
      const w = pg(e);
      if (w) {
        const S = window.MotionHandoffAnimation(w, h, U);
        if (S !== null) {
          x.startTime = S;
          g = true;
        }
      }
    }
    Ml(e, h);
    const p = c ?? e.shouldReduceMotion;
    m.start(Zu(h, m, v, p && fg.has(h) ? {
      type: false
    } : x, e, g));
    const y = m.animation;
    if (y) {
      d.push(y);
    }
  }
  if (o) {
    const h = () => U.update(() => {
      if (o) {
        Q2(e, o);
      }
    });
    if (d.length) {
      Promise.all(d).then(h);
    } else {
      h();
    }
  }
  return d;
}
function Al(e, t, n = {}) {
  var u;
  const r = Nn(e, t, n.type === "exit" ? (u = e.presenceContext) == null ? undefined : u.custom : undefined);
  let {
    transition: i = e.getDefaultTransition() || {}
  } = r || {};
  if (n.transitionOverride) {
    i = n.transitionOverride;
  }
  const s = r ? () => Promise.all(mg(e, r, n)) : () => Promise.resolve();
  const o = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const {
      delayChildren: d = 0,
      staggerChildren: f,
      staggerDirection: h
    } = i;
    return ew(e, t, c, d, f, h, n);
  } : () => Promise.resolve();
  const {
    when: l
  } = i;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => d());
  } else {
    return Promise.all([s(), o(n.delay)]);
  }
}
function ew(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const l = [];
  for (const u of e.variantChildren) {
    u.notify("AnimationStart", t);
    l.push(Al(u, t, {
      ...o,
      delay: n + (typeof r == "function" ? 0 : r) + ug(e.variantChildren, u, r, i, s)
    }).then(() => u.notify("AnimationComplete", t)));
  }
  return Promise.all(l);
}
function tw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map(s => Al(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") {
    r = Al(e, t, n);
  } else {
    const i = typeof t == "function" ? Nn(e, t, n.custom) : t;
    r = Promise.all(mg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const nw = {
  test: e => e === "auto",
  parse: e => e
};
const gg = e => t => t.test(e);
const yg = [kr, A, St, Ft, Nx, Px, nw];
const Kd = e => yg.find(gg(e));
function rw(e) {
  if (typeof e == "number") {
    return e === 0;
  } else if (e !== null) {
    return e === "none" || e === "0" || Nm(e);
  } else {
    return true;
  }
}
const iw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function sw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") {
    return e;
  }
  const [r] = n.match(Hu) || [];
  if (!r) {
    return e;
  }
  const i = n.replace(r, "");
  let s = iw.has(t) ? 1 : 0;
  if (r !== n) {
    s *= 100;
  }
  return t + "(" + s + i + ")";
}
const ow = /\b([a-z-]*)\(.*?\)/gu;
const Ll = {
  ...ht,
  getAnimatableNone: e => {
    const t = e.match(ow);
    if (t) {
      return t.map(sw).join(" ");
    } else {
      return e;
    }
  }
};
const Rl = {
  ...ht,
  getAnimatableNone: e => {
    const t = ht.parse(e);
    return ht.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
      ...r,
      alpha: 1
    } : r));
  }
};
const Gd = {
  ...kr,
  transform: Math.round
};
const aw = {
  rotate: Ft,
  rotateX: Ft,
  rotateY: Ft,
  rotateZ: Ft,
  scale: Ji,
  scaleX: Ji,
  scaleY: Ji,
  scaleZ: Ji,
  skew: Ft,
  skewX: Ft,
  skewY: Ft,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: xi,
  originX: Rd,
  originY: Rd,
  originZ: A
};
const ec = {
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  inset: A,
  insetBlock: A,
  insetBlockStart: A,
  insetBlockEnd: A,
  insetInline: A,
  insetInlineStart: A,
  insetInlineEnd: A,
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  paddingBlock: A,
  paddingBlockStart: A,
  paddingBlockEnd: A,
  paddingInline: A,
  paddingInlineStart: A,
  paddingInlineEnd: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  marginBlock: A,
  marginBlockStart: A,
  marginBlockEnd: A,
  marginInline: A,
  marginInlineStart: A,
  marginInlineEnd: A,
  fontSize: A,
  backgroundPositionX: A,
  backgroundPositionY: A,
  ...aw,
  zIndex: Gd,
  fillOpacity: xi,
  strokeOpacity: xi,
  numOctaves: Gd
};
const lw = {
  ...ec,
  color: ie,
  backgroundColor: ie,
  outlineColor: ie,
  fill: ie,
  stroke: ie,
  borderColor: ie,
  borderTopColor: ie,
  borderRightColor: ie,
  borderBottomColor: ie,
  borderLeftColor: ie,
  filter: Ll,
  WebkitFilter: Ll,
  mask: Rl,
  WebkitMask: Rl
};
const vg = e => lw[e];
const uw = new Set([Ll, Rl]);
function xg(e, t) {
  let n = vg(e);
  if (!uw.has(n)) {
    n = ht;
  }
  if (n.getAnimatableNone) {
    return n.getAnimatableNone(t);
  } else {
    return undefined;
  }
}
const cw = new Set(["auto", "none", "0"]);
function dw(e, t, n) {
  let r = 0;
  let i;
  while (r < e.length && !i) {
    const s = e[r];
    if (typeof s == "string" && !cw.has(s) && mr(s).values.length) {
      i = e[r];
    }
    r++;
  }
  if (i && n) {
    for (const s of t) {
      e[s] = xg(n, i);
    }
  }
}
class fw extends Xu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, true);
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      element: n,
      name: r
    } = this;
    if (!n || !n.current) {
      return;
    }
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let f = t[d];
      if (typeof f == "string" && (f = f.trim(), Uu(f))) {
        const h = cg(f, n.current);
        if (h !== undefined) {
          t[d] = h;
        }
        if (d === t.length - 1) {
          this.finalKeyframe = f;
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!fg.has(r) || t.length !== 2) {
      return;
    }
    const [i, s] = t;
    const o = Kd(i);
    const l = Kd(s);
    const u = Ld(i);
    const c = Ld(s);
    if (u !== c && Yt[r]) {
      this.needsMeasurement = true;
      return;
    }
    if (o !== l) {
      if (_d(o) && _d(l)) {
        for (let d = 0; d < t.length; d++) {
          const f = t[d];
          if (typeof f == "string") {
            t[d] = parseFloat(f);
          }
        }
      } else if (Yt[r]) {
        this.needsMeasurement = true;
      }
    }
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n
    } = this;
    const r = [];
    for (let i = 0; i < t.length; i++) {
      if (t[i] === null || rw(t[i])) {
        r.push(i);
      }
    }
    if (r.length) {
      dw(t, r, n);
    }
  }
  measureInitialState() {
    const {
      element: t,
      unresolvedKeyframes: n,
      name: r
    } = this;
    if (!t || !t.current) {
      return;
    }
    if (r === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = Yt[r](t.measureViewportBox(), window.getComputedStyle(t.current));
    n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    if (i !== undefined) {
      t.getValue(r, i).jump(i, false);
    }
  }
  measureEndState() {
    var l;
    const {
      element: t,
      name: n,
      unresolvedKeyframes: r
    } = this;
    if (!t || !t.current) {
      return;
    }
    const i = t.getValue(n);
    if (i) {
      i.jump(this.measuredOrigin, false);
    }
    const s = r.length - 1;
    const o = r[s];
    r[s] = Yt[n](t.measureViewportBox(), window.getComputedStyle(t.current));
    if (o !== null && this.finalKeyframe === undefined) {
      this.finalKeyframe = o;
    }
    if ((l = this.removedTransforms) != null && l.length) {
      this.removedTransforms.forEach(([u, c]) => {
        t.getValue(u).set(c);
      });
    }
    this.resolveNoneKeyframes();
  }
}
function wg(e, t, n) {
  if (e == null) {
    return [];
  }
  if (e instanceof EventTarget) {
    return [e];
  }
  if (typeof e == "string") {
    let r = document;
    const i = (n == null ? undefined : n[e]) ?? r.querySelectorAll(e);
    if (i) {
      return Array.from(i);
    } else {
      return [];
    }
  }
  return Array.from(e).filter(r => r != null);
}
const kg = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function hw(e) {
  return Pm(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const {
  schedule: tc
} = _m(queueMicrotask, false);
const at = {
  x: false,
  y: false
};
function jg() {
  return at.x || at.y;
}
function pw(e) {
  if (e === "x" || e === "y") {
    if (at[e]) {
      return null;
    } else {
      at[e] = true;
      return () => {
        at[e] = false;
      };
    }
  } else if (at.x || at.y) {
    return null;
  } else {
    at.x = at.y = true;
    return () => {
      at.x = at.y = false;
    };
  }
}
function Sg(e, t) {
  const n = wg(e);
  const r = new AbortController();
  const i = {
    passive: true,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function mw(e) {
  return e.pointerType !== "touch" && !jg();
}
function gw(e, t, n = {}) {
  const [r, i, s] = Sg(e, n);
  r.forEach(o => {
    let l = false;
    let u = false;
    let c;
    const d = () => {
      o.removeEventListener("pointerleave", v);
    };
    const f = k => {
      if (c) {
        c(k);
        c = undefined;
      }
      d();
    };
    const h = k => {
      l = false;
      window.removeEventListener("pointerup", h);
      window.removeEventListener("pointercancel", h);
      if (u) {
        u = false;
        f(k);
      }
    };
    const m = () => {
      l = true;
      window.addEventListener("pointerup", h, i);
      window.addEventListener("pointercancel", h, i);
    };
    const v = k => {
      if (k.pointerType !== "touch") {
        if (l) {
          u = true;
          return;
        }
        f(k);
      }
    };
    const x = k => {
      if (!mw(k)) {
        return;
      }
      u = false;
      const g = t(o, k);
      if (typeof g == "function") {
        c = g;
        o.addEventListener("pointerleave", v, i);
      }
    };
    o.addEventListener("pointerenter", x, i);
    o.addEventListener("pointerdown", m, i);
  });
  return s;
}
const bg = (e, t) => t ? e === t ? true : bg(e, t.parentElement) : false;
const nc = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== false;
const yw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function vw(e) {
  return yw.has(e.tagName) || e.isContentEditable === true;
}
const xw = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ww(e) {
  return xw.has(e.tagName) || e.isContentEditable === true;
}
const gs = new WeakSet();
function Yd(e) {
  return t => {
    if (t.key === "Enter") {
      e(t);
    }
  };
}
function ca(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, {
    isPrimary: true,
    bubbles: true
  }));
}
const kw = (e, t) => {
  const n = e.currentTarget;
  if (!n) {
    return;
  }
  const r = Yd(() => {
    if (gs.has(n)) {
      return;
    }
    ca(n, "down");
    const i = Yd(() => {
      ca(n, "up");
    });
    const s = () => ca(n, "cancel");
    n.addEventListener("keyup", i, t);
    n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t);
  n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Xd(e) {
  return nc(e) && !jg();
}
const Qd = new WeakSet();
function jw(e, t, n = {}) {
  const [r, i, s] = Sg(e, n);
  const o = l => {
    const u = l.currentTarget;
    if (!Xd(l) || Qd.has(l)) {
      return;
    }
    gs.add(u);
    if (n.stopPropagation) {
      Qd.add(l);
    }
    const c = t(u, l);
    const d = (m, v) => {
      window.removeEventListener("pointerup", f);
      window.removeEventListener("pointercancel", h);
      if (gs.has(u)) {
        gs.delete(u);
      }
      if (Xd(m) && typeof c == "function") {
        c(m, {
          success: v
        });
      }
    };
    const f = m => {
      d(m, u === window || u === document || n.useGlobalTarget || bg(u, m.target));
    };
    const h = m => {
      d(m, false);
    };
    window.addEventListener("pointerup", f, i);
    window.addEventListener("pointercancel", h, i);
  };
  r.forEach(l => {
    (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i);
    if (hw(l)) {
      l.addEventListener("focus", c => kw(c, i));
      if (!vw(l) && !l.hasAttribute("tabindex")) {
        l.tabIndex = 0;
      }
    }
  });
  return s;
}
function rc(e) {
  return Pm(e) && "ownerSVGElement" in e;
}
const ys = new WeakMap();
let zt;
const Cg = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : rc(r) && "getBBox" in r ? r.getBBox()[t] : r[n];
const Sw = Cg("inline", "width", "offsetWidth");
const bw = Cg("block", "height", "offsetHeight");
function Cw({
  target: e,
  borderBoxSize: t
}) {
  var n;
  if ((n = ys.get(e)) != null) {
    n.forEach(r => {
      r(e, {
        get width() {
          return Sw(e, t);
        },
        get height() {
          return bw(e, t);
        }
      });
    });
  }
}
function Tw(e) {
  e.forEach(Cw);
}
function Pw() {
  if (typeof ResizeObserver !== "undefined") {
    zt = new ResizeObserver(Tw);
  }
}
function Nw(e, t) {
  if (!zt) {
    Pw();
  }
  const n = wg(e);
  n.forEach(r => {
    let i = ys.get(r);
    if (!i) {
      i = new Set();
      ys.set(r, i);
    }
    i.add(t);
    if (zt != null) {
      zt.observe(r);
    }
  });
  return () => {
    n.forEach(r => {
      const i = ys.get(r);
      if (i != null) {
        i.delete(t);
      }
      if ((i == null || !i.size) && zt != null) {
        zt.unobserve(r);
      }
    });
  };
}
const vs = new Set();
let Jn;
function Ew() {
  Jn = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    vs.forEach(t => t(e));
  };
  window.addEventListener("resize", Jn);
}
function Mw(e) {
  vs.add(e);
  if (!Jn) {
    Ew();
  }
  return () => {
    vs.delete(e);
    if (!vs.size && typeof Jn == "function") {
      window.removeEventListener("resize", Jn);
      Jn = undefined;
    }
  };
}
function Zd(e, t) {
  if (typeof e == "function") {
    return Mw(e);
  } else {
    return Nw(e, t);
  }
}
function Aw(e) {
  return rc(e) && e.tagName === "svg";
}
const Lw = [...yg, ie, ht];
const Rw = e => Lw.find(gg(e));
const qd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
const er = () => ({
  x: qd(),
  y: qd()
});
const Jd = () => ({
  min: 0,
  max: 0
});
const oe = () => ({
  x: Jd(),
  y: Jd()
});
const Dw = new WeakMap();
function Po(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function wi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ic = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
const sc = ["initial", ...ic];
function No(e) {
  return Po(e.animate) || sc.some(t => wi(e[t]));
}
function Tg(e) {
  return !!No(e) || !!e.variants;
}
function Iw(e, t, n) {
  for (const r in t) {
    const i = t[r];
    const s = n[r];
    if (me(i)) {
      e.addValue(r, i);
    } else if (me(s)) {
      e.addValue(r, gr(i, {
        owner: e
      }));
    } else if (s !== i) {
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        if (o.liveStyle === true) {
          o.jump(i);
        } else if (!o.hasAnimated) {
          o.set(i);
        }
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, gr(o !== undefined ? o : i, {
          owner: e
        }));
      }
    }
  }
  for (const r in n) {
    if (t[r] === undefined) {
      e.removeValue(r);
    }
  }
  return t;
}
const Dl = {
  current: null
};
const Pg = {
  current: false
};
const Vw = typeof window !== "undefined";
function Bw() {
  Pg.current = true;
  if (Vw) {
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)");
      const t = () => Dl.current = e.matches;
      e.addEventListener("change", t);
      t();
    } else {
      Dl.current = false;
    }
  }
}
const ef = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let to = {};
function Ng(e) {
  to = e;
}
function Ow() {
  return to;
}
class Fw {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({
    parent: t,
    props: n,
    presenceContext: r,
    reducedMotionConfig: i,
    skipAnimations: s,
    blockInitialAnimation: o,
    visualState: l
  }, u = {}) {
    this.current = null;
    this.children = new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = new Map();
    this.KeyframeResolver = Xu;
    this.features = {};
    this.valueSubscriptions = new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (this.current) {
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      }
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const m = Ce.now();
      if (this.renderScheduledAt < m) {
        this.renderScheduledAt = m;
        U.render(this.render, false, true);
      }
    };
    const {
      latestValues: c,
      renderState: d
    } = l;
    this.latestValues = c;
    this.baseTarget = {
      ...c
    };
    this.initialValues = n.initial ? {
      ...c
    } : {};
    this.renderState = d;
    this.parent = t;
    this.props = n;
    this.presenceContext = r;
    this.depth = t ? t.depth + 1 : 0;
    this.reducedMotionConfig = i;
    this.skipAnimationsConfig = s;
    this.options = u;
    this.blockInitialAnimation = !!o;
    this.isControllingVariants = No(n);
    this.isVariantNode = Tg(n);
    if (this.isVariantNode) {
      this.variantChildren = new Set();
    }
    this.manuallyAnimateOnMount = !!t && !!t.current;
    const {
      willChange: f,
      ...h
    } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in h) {
      const v = h[m];
      if (c[m] !== undefined && me(v)) {
        v.set(c[m]);
      }
    }
  }
  mount(t) {
    var n;
    var r;
    if (this.hasBeenMounted) {
      for (const i in this.initialValues) {
        if ((n = this.values.get(i)) != null) {
          n.jump(this.initialValues[i]);
        }
        this.latestValues[i] = this.initialValues[i];
      }
    }
    this.current = t;
    Dw.set(t, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(t);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((i, s) => this.bindToMotionValue(s, i));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!Pg.current) {
        Bw();
      }
      this.shouldReduceMotion = Dl.current;
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    if ((r = this.parent) != null) {
      r.addChild(this);
    }
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    var t;
    if (this.projection) {
      this.projection.unmount();
    }
    ln(this.notifyUpdate);
    ln(this.render);
    this.valueSubscriptions.forEach(n => n());
    this.valueSubscriptions.clear();
    if (this.removeFromVariantTree) {
      this.removeFromVariantTree();
    }
    if ((t = this.parent) != null) {
      t.removeChild(this);
    }
    for (const n in this.events) {
      this.events[n].clear();
    }
    for (const n in this.features) {
      const r = this.features[n];
      if (r) {
        r.unmount();
        r.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t);
    this.enteringChildren ??= new Set();
    this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t);
    if (this.enteringChildren) {
      this.enteringChildren.delete(t);
    }
  }
  bindToMotionValue(t, n) {
    if (this.valueSubscriptions.has(t)) {
      this.valueSubscriptions.get(t)();
    }
    if (n.accelerate && lg.has(t) && this.current instanceof HTMLElement) {
      const {
        factory: o,
        keyframes: l,
        times: u,
        ease: c,
        duration: d
      } = n.accelerate;
      const f = new og({
        element: this.current,
        name: t,
        keyframes: l,
        times: u,
        ease: c,
        duration: Ue(d)
      });
      const h = o(f);
      this.valueSubscriptions.set(t, () => {
        h();
        f.cancel();
      });
      return;
    }
    const r = Sr.has(t);
    if (r && this.onBindTransform) {
      this.onBindTransform();
    }
    const i = n.on("change", o => {
      this.latestValues[t] = o;
      if (this.props.onUpdate) {
        U.preRender(this.notifyUpdate);
      }
      if (r && this.projection) {
        this.projection.isTransformDirty = true;
      }
      this.scheduleRender();
    });
    let s;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      s = window.MotionCheckAppearSync(this, t, n);
    }
    this.valueSubscriptions.set(t, () => {
      i();
      if (s) {
        s();
      }
      if (n.owner) {
        n.stop();
      }
    });
  }
  sortNodePosition(t) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== t.type) {
      return 0;
    } else {
      return this.sortInstanceNodePosition(this.current, t.current);
    }
  }
  updateFeatures() {
    let t = "animation";
    for (t in to) {
      const n = to[t];
      if (!n) {
        continue;
      }
      const {
        isEnabled: r,
        Feature: i
      } = n;
      if (!this.features[t] && i && r(this.props)) {
        this.features[t] = new i(this);
      }
      if (this.features[t]) {
        const s = this.features[t];
        if (s.isMounted) {
          s.update();
        } else {
          s.mount();
          s.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    if (this.current) {
      return this.measureInstanceViewportBox(this.current, this.props);
    } else {
      return oe();
    }
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    if (t.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = t;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = n;
    for (let r = 0; r < ef.length; r++) {
      const i = ef[r];
      if (this.propEventSubscriptions[i]) {
        this.propEventSubscriptions[i]();
        delete this.propEventSubscriptions[i];
      }
      const s = "on" + i;
      const o = t[s];
      if (o) {
        this.propEventSubscriptions[i] = this.on(i, o);
      }
    }
    this.prevMotionValues = Iw(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    if (this.props.variants) {
      return this.props.variants[t];
    } else {
      return undefined;
    }
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    if (this.isVariantNode) {
      return this;
    } else if (this.parent) {
      return this.parent.getClosestVariantNode();
    } else {
      return undefined;
    }
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) {
      if (n.variantChildren) {
        n.variantChildren.add(t);
      }
      return () => n.variantChildren.delete(t);
    }
  }
  addValue(t, n) {
    const r = this.values.get(t);
    if (n !== r) {
      if (r) {
        this.removeValue(t);
      }
      this.bindToMotionValue(t, n);
      this.values.set(t, n);
      this.latestValues[t] = n.get();
    }
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    if (n) {
      n();
      this.valueSubscriptions.delete(t);
    }
    delete this.latestValues[t];
    this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) {
      return this.props.values[t];
    }
    let r = this.values.get(t);
    if (r === undefined && n !== undefined) {
      r = gr(n === null ? undefined : n, {
        owner: this
      });
      this.addValue(t, r);
    }
    return r;
  }
  readValue(t, n) {
    let r = this.latestValues[t] !== undefined || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    if (r != null) {
      if (typeof r == "string" && (Tm(r) || Nm(r))) {
        r = parseFloat(r);
      } else if (!Rw(r) && ht.test(n)) {
        r = xg(t, n);
      }
      this.setBaseTarget(t, me(r) ? r.get() : r);
    }
    if (me(r)) {
      return r.get();
    } else {
      return r;
    }
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const {
      initial: n
    } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = qu(this.props, n, (s = this.presenceContext) == null ? undefined : s.custom);
      if (o) {
        r = o[t];
      }
    }
    if (n && r !== undefined) {
      return r;
    }
    const i = this.getBaseTargetFromProps(this.props, t);
    if (i !== undefined && !me(i)) {
      return i;
    } else if (this.initialValues[t] !== undefined && r === undefined) {
      return undefined;
    } else {
      return this.baseTarget[t];
    }
  }
  on(t, n) {
    this.events[t] ||= new zu();
    return this.events[t].add(n);
  }
  notify(t, ...n) {
    if (this.events[t]) {
      this.events[t].notify(...n);
    }
  }
  scheduleRenderMicrotask() {
    tc.render(this.render);
  }
}
class Eg extends Fw {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = fw;
  }
  sortInstanceNodePosition(t, n) {
    if (t.compareDocumentPosition(n) & 2) {
      return 1;
    } else {
      return -1;
    }
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    if (r) {
      return r[n];
    } else {
      return undefined;
    }
  }
  removeValueFromRenderState(t, {
    vars: n,
    style: r
  }) {
    delete n[t];
    delete r[t];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children: t
    } = this.props;
    if (me(t)) {
      this.childSubscription = t.on("change", n => {
        if (this.current) {
          this.current.textContent = `${n}`;
        }
      });
    }
  }
}
class hn {
  constructor(t) {
    this.isMounted = false;
    this.node = t;
  }
  update() {}
}
function Mg({
  top: e,
  left: t,
  right: n,
  bottom: r
}) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  };
}
function zw({
  x: e,
  y: t
}) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  };
}
function _w(e, t) {
  if (!t) {
    return e;
  }
  const n = t({
    x: e.left,
    y: e.top
  });
  const r = t({
    x: e.right,
    y: e.bottom
  });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function da(e) {
  return e === undefined || e === 1;
}
function Il({
  scale: e,
  scaleX: t,
  scaleY: n
}) {
  return !da(e) || !da(t) || !da(n);
}
function xn(e) {
  return Il(e) || Ag(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ag(e) {
  return tf(e.x) || tf(e.y);
}
function tf(e) {
  return e && e !== "0%";
}
function no(e, t, n) {
  const r = e - n;
  const i = t * r;
  return n + i;
}
function nf(e, t, n, r, i) {
  if (i !== undefined) {
    e = no(e, i, r);
  }
  return no(e, n, r) + t;
}
function Vl(e, t = 0, n = 1, r, i) {
  e.min = nf(e.min, t, n, r, i);
  e.max = nf(e.max, t, n, r, i);
}
function Lg(e, {
  x: t,
  y: n
}) {
  Vl(e.x, t.translate, t.scale, t.originPoint);
  Vl(e.y, n.translate, n.scale, n.originPoint);
}
const rf = 0.999999999999;
const sf = 1.0000000000001;
function Ww(e, t, n, r = false) {
  var l;
  const i = n.length;
  if (!i) {
    return;
  }
  t.x = t.y = 1;
  let s;
  let o;
  for (let u = 0; u < i; u++) {
    s = n[u];
    o = s.projectionDelta;
    const {
      visualElement: c
    } = s.options;
    if (!c || !c.props.style || c.props.style.display !== "contents") {
      if (r && s.options.layoutScroll && s.scroll && s !== s.root) {
        xt(e.x, -s.scroll.offset.x);
        xt(e.y, -s.scroll.offset.y);
      }
      if (o) {
        t.x *= o.x.scale;
        t.y *= o.y.scale;
        Lg(e, o);
      }
      if (r && xn(s.latestValues)) {
        xs(e, s.latestValues, (l = s.layout) == null ? undefined : l.layoutBox);
      }
    }
  }
  if (t.x < sf && t.x > rf) {
    t.x = 1;
  }
  if (t.y < sf && t.y > rf) {
    t.y = 1;
  }
}
function xt(e, t) {
  e.min += t;
  e.max += t;
}
function of(e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i);
  Vl(e, t, n, s, r);
}
function af(e, t) {
  if (typeof e == "string") {
    return parseFloat(e) / 100 * (t.max - t.min);
  } else {
    return e;
  }
}
function xs(e, t, n) {
  const r = n ?? e;
  of(e.x, af(t.x, r.x), t.scaleX, t.scale, t.originX);
  of(e.y, af(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Rg(e, t) {
  return Mg(_w(e.getBoundingClientRect(), t));
}
function Uw(e, t, n) {
  const r = Rg(e, n);
  const {
    scroll: i
  } = t;
  if (i) {
    xt(r.x, i.offset.x);
    xt(r.y, i.offset.y);
  }
  return r;
}
const Hw = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
const $w = jr.length;
function Kw(e, t, n) {
  let r = "";
  let i = true;
  for (let s = 0; s < $w; s++) {
    const o = jr[s];
    const l = e[o];
    if (l === undefined) {
      continue;
    }
    let u = true;
    if (typeof l == "number") {
      u = l === (o.startsWith("scale") ? 1 : 0);
    } else {
      const c = parseFloat(l);
      u = o.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = kg(l, ec[o]);
      if (!u) {
        i = false;
        const d = Hw[o] || o;
        r += `${d}(${c}) `;
      }
      if (n) {
        t[o] = c;
      }
    }
  }
  r = r.trim();
  if (n) {
    r = n(t, i ? "" : r);
  } else if (i) {
    r = "none";
  }
  return r;
}
function oc(e, t, n) {
  const {
    style: r,
    vars: i,
    transformOrigin: s
  } = e;
  let o = false;
  let l = false;
  for (const u in t) {
    const c = t[u];
    if (Sr.has(u)) {
      o = true;
      continue;
    } else if (Um(u)) {
      i[u] = c;
      continue;
    } else {
      const d = kg(c, ec[u]);
      if (u.startsWith("origin")) {
        l = true;
        s[u] = d;
      } else {
        r[u] = d;
      }
    }
  }
  if (!t.transform) {
    if (o || n) {
      r.transform = Kw(t, e.transform, n);
    } else {
      r.transform &&= "none";
    }
  }
  if (l) {
    const {
      originX: u = "50%",
      originY: c = "50%",
      originZ: d = 0
    } = s;
    r.transformOrigin = `${u} ${c} ${d}`;
  }
}
function Dg(e, {
  style: t,
  vars: n
}, r, i) {
  const s = e.style;
  let o;
  for (o in t) {
    s[o] = t[o];
  }
  if (i != null) {
    i.applyProjectionStyles(s, r);
  }
  for (o in n) {
    s.setProperty(o, n[o]);
  }
}
function lf(e, t) {
  if (t.max === t.min) {
    return 0;
  } else {
    return e / (t.max - t.min) * 100;
  }
}
const Lr = {
  correct: (e, t) => {
    if (!t.target) {
      return e;
    }
    if (typeof e == "string") {
      if (A.test(e)) {
        e = parseFloat(e);
      } else {
        return e;
      }
    }
    const n = lf(e, t.target.x);
    const r = lf(e, t.target.y);
    return `${n}% ${r}%`;
  }
};
const Gw = {
  correct: (e, {
    treeScale: t,
    projectionDelta: n
  }) => {
    const r = e;
    const i = ht.parse(e);
    if (i.length > 5) {
      return r;
    }
    const s = ht.createTransformer(e);
    const o = typeof i[0] != "number" ? 1 : 0;
    const l = n.x.scale * t.x;
    const u = n.y.scale * t.y;
    i[0 + o] /= l;
    i[1 + o] /= u;
    const c = K(l, u, 0.5);
    if (typeof i[2 + o] == "number") {
      i[2 + o] /= c;
    }
    if (typeof i[3 + o] == "number") {
      i[3 + o] /= c;
    }
    return s(i);
  }
};
const Bl = {
  borderRadius: {
    ...Lr,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Lr,
  borderTopRightRadius: Lr,
  borderBottomLeftRadius: Lr,
  borderBottomRightRadius: Lr,
  boxShadow: Gw
};
function Ig(e, {
  layout: t,
  layoutId: n
}) {
  return Sr.has(e) || e.startsWith("origin") || (t || n !== undefined) && (!!Bl[e] || e === "opacity");
}
function ac(e, t, n) {
  var o;
  const r = e.style;
  const i = t == null ? undefined : t.style;
  const s = {};
  if (!r) {
    return s;
  }
  for (const l in r) {
    if (me(r[l]) || i && me(i[l]) || Ig(l, e) || ((o = n == null ? undefined : n.getValue(l)) == null ? undefined : o.liveStyle) !== undefined) {
      s[l] = r[l];
    }
  }
  return s;
}
function Yw(e) {
  return window.getComputedStyle(e);
}
class Xw extends Eg {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = Dg;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Sr.has(n)) {
      if ((r = this.projection) != null && r.isProjecting) {
        return Sl(n);
      } else {
        return p2(t, n);
      }
    }
    {
      const i = Yw(t);
      const s = (Um(n) ? i.getPropertyValue(n) : i[n]) || 0;
      if (typeof s == "string") {
        return s.trim();
      } else {
        return s;
      }
    }
  }
  measureInstanceViewportBox(t, {
    transformPagePoint: n
  }) {
    return Rg(t, n);
  }
  build(t, n, r) {
    oc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ac(t, n, r);
  }
}
const Qw = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
const Zw = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function qw(e, t, n = 1, r = 0, i = true) {
  e.pathLength = 1;
  const s = i ? Qw : Zw;
  e[s.offset] = `${-r}`;
  e[s.array] = `${t} ${n}`;
}
const Jw = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Vg(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: o = 0,
  ...l
}, u, c, d) {
  oc(e, l, c);
  if (u) {
    if (e.style.viewBox) {
      e.attrs.viewBox = e.style.viewBox;
    }
    return;
  }
  e.attrs = e.style;
  e.style = {};
  const {
    attrs: f,
    style: h
  } = e;
  if (f.transform) {
    h.transform = f.transform;
    delete f.transform;
  }
  if (h.transform || f.transformOrigin) {
    h.transformOrigin = f.transformOrigin ?? "50% 50%";
    delete f.transformOrigin;
  }
  if (h.transform) {
    h.transformBox = (d == null ? undefined : d.transformBox) ?? "fill-box";
    delete f.transformBox;
  }
  for (const m of Jw) {
    if (f[m] !== undefined) {
      h[m] = f[m];
      delete f[m];
    }
  }
  if (t !== undefined) {
    f.x = t;
  }
  if (n !== undefined) {
    f.y = n;
  }
  if (r !== undefined) {
    f.scale = r;
  }
  if (i !== undefined) {
    qw(f, i, s, o, false);
  }
}
const Bg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
const Og = e => typeof e == "string" && e.toLowerCase() === "svg";
function e4(e, t, n, r) {
  Dg(e, t, undefined, r);
  for (const i in t.attrs) {
    e.setAttribute(Bg.has(i) ? i : Ju(i), t.attrs[i]);
  }
}
function Fg(e, t, n) {
  const r = ac(e, t, n);
  for (const i in e) {
    if (me(e[i]) || me(t[i])) {
      const s = jr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  }
  return r;
}
class t4 extends Eg {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = oe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Sr.has(n)) {
      const r = vg(n);
      return r && r.default || 0;
    }
    n = Bg.has(n) ? n : Ju(n);
    return t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Fg(t, n, r);
  }
  build(t, n, r) {
    Vg(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    e4(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Og(t.tagName);
    super.mount(t);
  }
}
const n4 = sc.length;
function zg(e) {
  if (!e) {
    return;
  }
  if (!e.isControllingVariants) {
    const n = e.parent ? zg(e.parent) || {} : {};
    if (e.props.initial !== undefined) {
      n.initial = e.props.initial;
    }
    return n;
  }
  const t = {};
  for (let n = 0; n < n4; n++) {
    const r = sc[n];
    const i = e.props[r];
    if (wi(i) || i === false) {
      t[r] = i;
    }
  }
  return t;
}
function _g(e, t) {
  if (!Array.isArray(t)) {
    return false;
  }
  const n = t.length;
  if (n !== e.length) {
    return false;
  }
  for (let r = 0; r < n; r++) {
    if (t[r] !== e[r]) {
      return false;
    }
  }
  return true;
}
const r4 = [...ic].reverse();
const i4 = ic.length;
function s4(e) {
  return t => Promise.all(t.map(({
    animation: n,
    options: r
  }) => tw(e, n, r)));
}
function o4(e) {
  let t = s4(e);
  let n = uf();
  let r = true;
  let i = false;
  const s = c => (d, f) => {
    var m;
    const h = Nn(e, f, c === "exit" ? (m = e.presenceContext) == null ? undefined : m.custom : undefined);
    if (h) {
      const {
        transition: v,
        transitionEnd: x,
        ...k
      } = h;
      d = {
        ...d,
        ...k,
        ...x
      };
    }
    return d;
  };
  function o(c) {
    t = c(e);
  }
  function l(c) {
    const {
      props: d
    } = e;
    const f = zg(e.parent) || {};
    const h = [];
    const m = new Set();
    let v = {};
    let x = Infinity;
    for (let g = 0; g < i4; g++) {
      const p = r4[g];
      const y = n[p];
      const w = d[p] !== undefined ? d[p] : f[p];
      const S = wi(w);
      const b = p === c ? y.isActive : null;
      if (b === false) {
        x = g;
      }
      let P = w === f[p] && w !== d[p] && S;
      if (P && (r || i) && e.manuallyAnimateOnMount) {
        P = false;
      }
      y.protectedKeys = {
        ...v
      };
      if (!y.isActive && b === null || !w && !y.prevProp || Po(w) || typeof w == "boolean") {
        continue;
      }
      if (p === "exit" && y.isActive && b !== true) {
        if (y.prevResolvedValues) {
          v = {
            ...v,
            ...y.prevResolvedValues
          };
        }
        continue;
      }
      const T = a4(y.prevProp, w);
      let V = T || p === c && y.isActive && !P && S || g > x && S;
      let N = false;
      const O = Array.isArray(w) ? w : [w];
      let ne = O.reduce(s(p), {});
      if (b === false) {
        ne = {};
      }
      const {
        prevResolvedValues: Be = {}
      } = y;
      const Oe = {
        ...Be,
        ...ne
      };
      const it = E => {
        V = true;
        if (m.has(E)) {
          N = true;
          m.delete(E);
        }
        y.needsAnimating[E] = true;
        const L = e.getValue(E);
        if (L) {
          L.liveStyle = false;
        }
      };
      for (const E in Oe) {
        const L = ne[E];
        const D = Be[E];
        if (v.hasOwnProperty(E)) {
          continue;
        }
        let _ = false;
        if (El(L) && El(D)) {
          _ = !_g(L, D);
        } else {
          _ = L !== D;
        }
        if (_) {
          if (L != null) {
            it(E);
          } else {
            m.add(E);
          }
        } else if (L !== undefined && m.has(E)) {
          it(E);
        } else {
          y.protectedKeys[E] = true;
        }
      }
      y.prevProp = w;
      y.prevResolvedValues = ne;
      if (y.isActive) {
        v = {
          ...v,
          ...ne
        };
      }
      if ((r || i) && e.blockInitialAnimation) {
        V = false;
      }
      const Me = P && T;
      if (V && (!Me || N)) {
        h.push(...O.map(E => {
          const L = {
            type: p
          };
          if (typeof E == "string" && (r || i) && !Me && e.manuallyAnimateOnMount && e.parent) {
            const {
              parent: D
            } = e;
            const _ = Nn(D, E);
            if (D.enteringChildren && _) {
              const {
                delayChildren: re
              } = _.transition || {};
              L.delay = ug(D.enteringChildren, e, re);
            }
          }
          return {
            animation: E,
            options: L
          };
        }));
      }
    }
    if (m.size) {
      const g = {};
      if (typeof d.initial != "boolean") {
        const p = Nn(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        if (p && p.transition) {
          g.transition = p.transition;
        }
      }
      m.forEach(p => {
        const y = e.getBaseTarget(p);
        const w = e.getValue(p);
        if (w) {
          w.liveStyle = true;
        }
        g[p] = y ?? null;
      });
      h.push({
        animation: g
      });
    }
    let k = !!h.length;
    if (r && (d.initial === false || d.initial === d.animate) && !e.manuallyAnimateOnMount) {
      k = false;
    }
    r = false;
    i = false;
    if (k) {
      return t(h);
    } else {
      return Promise.resolve();
    }
  }
  function u(c, d) {
    var h;
    if (n[c].isActive === d) {
      return Promise.resolve();
    }
    if ((h = e.variantChildren) != null) {
      h.forEach(m => {
        var v;
        if ((v = m.animationState) == null) {
          return undefined;
        } else {
          return v.setActive(c, d);
        }
      });
    }
    n[c].isActive = d;
    const f = l(c);
    for (const m in n) {
      n[m].protectedKeys = {};
    }
    return f;
  }
  return {
    animateChanges: l,
    setActive: u,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = uf();
      i = true;
    }
  };
}
function a4(e, t) {
  if (typeof t == "string") {
    return t !== e;
  } else if (Array.isArray(t)) {
    return !_g(t, e);
  } else {
    return false;
  }
}
function gn(e = false) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function uf() {
  return {
    animate: gn(true),
    whileInView: gn(),
    whileHover: gn(),
    whileTap: gn(),
    whileDrag: gn(),
    whileFocus: gn(),
    exit: gn()
  };
}
function Ol(e, t) {
  e.min = t.min;
  e.max = t.max;
}
function ot(e, t) {
  Ol(e.x, t.x);
  Ol(e.y, t.y);
}
function cf(e, t) {
  e.translate = t.translate;
  e.scale = t.scale;
  e.originPoint = t.originPoint;
  e.origin = t.origin;
}
const Wg = 0.0001;
const l4 = 1 - Wg;
const u4 = 1 + Wg;
const Ug = 0.01;
const c4 = 0 - Ug;
const d4 = 0 + Ug;
function Te(e) {
  return e.max - e.min;
}
function f4(e, t, n) {
  return Math.abs(e - t) <= n;
}
function df(e, t, n, r = 0.5) {
  e.origin = r;
  e.originPoint = K(t.min, t.max, e.origin);
  e.scale = Te(n) / Te(t);
  e.translate = K(n.min, n.max, e.origin) - e.originPoint;
  if (e.scale >= l4 && e.scale <= u4 || isNaN(e.scale)) {
    e.scale = 1;
  }
  if (e.translate >= c4 && e.translate <= d4 || isNaN(e.translate)) {
    e.translate = 0;
  }
}
function Zr(e, t, n, r) {
  df(e.x, t.x, n.x, r ? r.originX : undefined);
  df(e.y, t.y, n.y, r ? r.originY : undefined);
}
function ff(e, t, n, r = 0) {
  const i = r ? K(n.min, n.max, r) : n.min;
  e.min = i + t.min;
  e.max = e.min + Te(t);
}
function h4(e, t, n, r) {
  ff(e.x, t.x, n.x, r == null ? undefined : r.x);
  ff(e.y, t.y, n.y, r == null ? undefined : r.y);
}
function hf(e, t, n, r = 0) {
  const i = r ? K(n.min, n.max, r) : n.min;
  e.min = t.min - i;
  e.max = e.min + Te(t);
}
function ro(e, t, n, r) {
  hf(e.x, t.x, n.x, r == null ? undefined : r.x);
  hf(e.y, t.y, n.y, r == null ? undefined : r.y);
}
function pf(e, t, n, r, i) {
  e -= t;
  e = no(e, 1 / n, r);
  if (i !== undefined) {
    e = no(e, 1 / i, r);
  }
  return e;
}
function p4(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (St.test(t)) {
    t = parseFloat(t);
    t = K(o.min, o.max, t / 100) - o.min;
  }
  if (typeof t != "number") {
    return;
  }
  let l = K(s.min, s.max, r);
  if (e === s) {
    l -= t;
  }
  e.min = pf(e.min, t, n, l, i);
  e.max = pf(e.max, t, n, l, i);
}
function mf(e, t, [n, r, i], s, o) {
  p4(e, t[n], t[r], t[i], t.scale, s, o);
}
const m4 = ["x", "scaleX", "originX"];
const g4 = ["y", "scaleY", "originY"];
function gf(e, t, n, r) {
  mf(e.x, t, m4, n ? n.x : undefined, r ? r.x : undefined);
  mf(e.y, t, g4, n ? n.y : undefined, r ? r.y : undefined);
}
function yf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Hg(e) {
  return yf(e.x) && yf(e.y);
}
function vf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function y4(e, t) {
  return vf(e.x, t.x) && vf(e.y, t.y);
}
function xf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function $g(e, t) {
  return xf(e.x, t.x) && xf(e.y, t.y);
}
function wf(e) {
  return Te(e.x) / Te(e.y);
}
function kf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function vt(e) {
  return [e("x"), e("y")];
}
function v4(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x;
  const s = e.y.translate / t.y;
  const o = (n == null ? undefined : n.z) || 0;
  if (i || s || o) {
    r = `translate3d(${i}px, ${s}px, ${o}px) `;
  }
  if (t.x !== 1 || t.y !== 1) {
    r += `scale(${1 / t.x}, ${1 / t.y}) `;
  }
  if (n) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: m,
      skewY: v
    } = n;
    if (c) {
      r = `perspective(${c}px) ${r}`;
    }
    if (d) {
      r += `rotate(${d}deg) `;
    }
    if (f) {
      r += `rotateX(${f}deg) `;
    }
    if (h) {
      r += `rotateY(${h}deg) `;
    }
    if (m) {
      r += `skewX(${m}deg) `;
    }
    if (v) {
      r += `skewY(${v}deg) `;
    }
  }
  const l = e.x.scale * t.x;
  const u = e.y.scale * t.y;
  if (l !== 1 || u !== 1) {
    r += `scale(${l}, ${u})`;
  }
  return r || "none";
}
const Kg = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"];
const x4 = Kg.length;
const jf = e => typeof e == "string" ? parseFloat(e) : e;
const Sf = e => typeof e == "number" || A.test(e);
function w4(e, t, n, r, i, s) {
  if (i) {
    e.opacity = K(0, n.opacity ?? 1, k4(r));
    e.opacityExit = K(t.opacity ?? 1, 0, j4(r));
  } else if (s) {
    e.opacity = K(t.opacity ?? 1, n.opacity ?? 1, r);
  }
  for (let o = 0; o < x4; o++) {
    const l = Kg[o];
    let u = bf(t, l);
    let c = bf(n, l);
    if (u === undefined && c === undefined) {
      continue;
    }
    u ||= 0;
    c ||= 0;
    if (u === 0 || c === 0 || Sf(u) === Sf(c)) {
      e[l] = Math.max(K(jf(u), jf(c), r), 0);
      if (St.test(c) || St.test(u)) {
        e[l] += "%";
      }
    } else {
      e[l] = c;
    }
  }
  if (t.rotate || n.rotate) {
    e.rotate = K(t.rotate || 0, n.rotate || 0, r);
  }
}
function bf(e, t) {
  if (e[t] !== undefined) {
    return e[t];
  } else {
    return e.borderRadius;
  }
}
const k4 = Gg(0, 0.5, Bm);
const j4 = Gg(0.5, 0.95, et);
function Gg(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(vi(e, t, r));
}
function S4(e, t, n) {
  const r = me(e) ? e : gr(e);
  r.start(Zu("", r, t, n));
  return r.animation;
}
function ki(e, t, n, r = {
  passive: true
}) {
  e.addEventListener(t, n, r);
  return () => e.removeEventListener(t, n);
}
const b4 = (e, t) => e.depth - t.depth;
class C4 {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(t) {
    Ou(this.children, t);
    this.isDirty = true;
  }
  remove(t) {
    Qs(this.children, t);
    this.isDirty = true;
  }
  forEach(t) {
    if (this.isDirty) {
      this.children.sort(b4);
    }
    this.isDirty = false;
    this.children.forEach(t);
  }
}
function T4(e, t) {
  const n = Ce.now();
  const r = ({
    timestamp: i
  }) => {
    const s = i - n;
    if (s >= t) {
      ln(r);
      e(s - t);
    }
  };
  U.setup(r, true);
  return () => ln(r);
}
function ws(e) {
  if (me(e)) {
    return e.get();
  } else {
    return e;
  }
}
class P4 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ou(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) {
        continue;
      }
      const i = r.instance;
      if ((!i || i.isConnected === false) && !r.snapshot) {
        Qs(this.members, r);
        r.unmount();
      }
    }
    t.scheduleRender();
  }
  remove(t) {
    Qs(this.members, t);
    if (t === this.prevLead) {
      this.prevLead = undefined;
    }
    if (t === this.lead) {
      const n = this.members[this.members.length - 1];
      if (n) {
        this.promote(n);
      }
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (i.isPresent !== false && ((n = i.instance) == null ? undefined : n.isConnected) !== false) {
        this.promote(i);
        return true;
      }
    }
    return false;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.updateSnapshot();
      t.scheduleRender();
      const {
        layoutDependency: s
      } = r.options;
      const {
        layoutDependency: o
      } = t.options;
      if (s === undefined || s !== o) {
        t.resumeFrom = r;
        if (n) {
          r.preserveOpacity = true;
        }
        if (r.snapshot) {
          t.snapshot = r.snapshot;
          t.snapshot.latestValues = r.animationValues || r.latestValues;
        }
        if ((i = t.root) != null && i.isUpdating) {
          t.isLayoutDirty = true;
        }
      }
      if (t.options.crossfade === false) {
        r.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      var n;
      var r;
      var i;
      var s;
      var o;
      if ((r = (n = t.options).onExitComplete) != null) {
        r.call(n);
      }
      if ((o = (i = t.resumingFrom) == null ? undefined : (s = i.options).onExitComplete) != null) {
        o.call(s);
      }
    });
  }
  scheduleRender() {
    this.members.forEach(t => t.instance && t.scheduleRender(false));
  }
  removeLeadSnapshot() {
    var t;
    if ((t = this.lead) != null && t.snapshot) {
      this.lead.snapshot = undefined;
    }
  }
}
const ks = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
const fa = ["", "X", "Y", "Z"];
const N4 = 1000;
let E4 = 0;
function ha(e, t, n, r) {
  const {
    latestValues: i
  } = t;
  if (i[e]) {
    n[e] = i[e];
    t.setStaticValue(e, 0);
    if (r) {
      r[e] = 0;
    }
  }
}
function Yg(e) {
  e.hasCheckedOptimisedAppear = true;
  if (e.root === e) {
    return;
  }
  const {
    visualElement: t
  } = e.options;
  if (!t) {
    return;
  }
  const n = pg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const {
      layout: i,
      layoutId: s
    } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !i && !s);
  }
  const {
    parent: r
  } = e;
  if (r && !r.hasCheckedOptimisedAppear) {
    Yg(r);
  }
}
function Xg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor(o = {}, l = t == null ? undefined : t()) {
      this.id = E4++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = new Map();
      this.hasTreeAnimated = false;
      this.layoutVersion = 0;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(L4);
        this.nodes.forEach(O4);
        this.nodes.forEach(F4);
        this.nodes.forEach(R4);
      };
      this.resolvedRelativeTargetAt = 0;
      this.linkedParentVersion = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = new Map();
      this.latestValues = o;
      this.root = l ? l.root || l : this;
      this.path = l ? [...l.path, l] : [];
      this.parent = l;
      this.depth = l ? l.depth + 1 : 0;
      for (let u = 0; u < this.path.length; u++) {
        this.path[u].shouldResetTransform = true;
      }
      if (this.root === this) {
        this.nodes = new C4();
      }
    }
    addEventListener(o, l) {
      if (!this.eventHandlers.has(o)) {
        this.eventHandlers.set(o, new zu());
      }
      return this.eventHandlers.get(o).add(l);
    }
    notifyListeners(o, ...l) {
      const u = this.eventHandlers.get(o);
      if (u) {
        u.notify(...l);
      }
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) {
        return;
      }
      this.isSVG = rc(o) && !Aw(o);
      this.instance = o;
      const {
        layoutId: l,
        layout: u,
        visualElement: c
      } = this.options;
      if (c && !c.current) {
        c.mount(o);
      }
      this.root.nodes.add(this);
      if (this.parent) {
        this.parent.children.add(this);
      }
      if (this.root.hasTreeAnimated && (u || l)) {
        this.isLayoutDirty = true;
      }
      if (e) {
        let d;
        let f = 0;
        const h = () => this.root.updateBlockedByResize = false;
        U.read(() => {
          f = window.innerWidth;
        });
        e(o, () => {
          const m = window.innerWidth;
          if (m !== f) {
            f = m;
            this.root.updateBlockedByResize = true;
            if (d) {
              d();
            }
            d = T4(h, 250);
            if (ks.hasAnimatedSinceResize) {
              ks.hasAnimatedSinceResize = false;
              this.nodes.forEach(Pf);
            }
          }
        });
      }
      if (l) {
        this.root.registerSharedNode(l, this);
      }
      if (this.options.animate !== false && c && (l || u)) {
        this.addEventListener("didUpdate", ({
          delta: d,
          hasLayoutChanged: f,
          hasRelativeLayoutChanged: h,
          layout: m
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = undefined;
            this.relativeTarget = undefined;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || H4;
          const {
            onLayoutAnimationStart: x,
            onLayoutAnimationComplete: k
          } = c.getProps();
          const g = !this.targetLayout || !$g(this.targetLayout, m);
          const p = !f && h;
          if (this.options.layoutRoot || this.resumeFrom || p || f && (g || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = undefined;
            }
            const y = {
              ...Qu(v, "layout"),
              onPlay: x,
              onComplete: k
            };
            if (c.shouldReduceMotion || this.options.layoutRoot) {
              y.delay = 0;
              y.type = false;
            }
            this.startAnimation(y);
            this.setAnimationOrigin(d, p);
          } else {
            if (!f) {
              Pf(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = m;
        });
      }
    }
    unmount() {
      if (this.options.layoutId) {
        this.willUpdate();
      }
      this.root.nodes.remove(this);
      const o = this.getStack();
      if (o) {
        o.remove(this);
      }
      if (this.parent) {
        this.parent.children.delete(this);
      }
      this.instance = undefined;
      this.eventHandlers.clear();
      ln(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (!this.isUpdateBlocked()) {
        this.isUpdating = true;
        if (this.nodes) {
          this.nodes.forEach(z4);
        }
        this.animationId++;
      }
    }
    getTransformTemplate() {
      const {
        visualElement: o
      } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        if (this.options.onExitComplete) {
          this.options.onExitComplete();
        }
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        Yg(this);
      }
      if (!this.root.isUpdating) {
        this.root.startUpdate();
      }
      if (this.isLayoutDirty) {
        return;
      }
      this.isLayoutDirty = true;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = true;
        if (typeof f.latestValues.x == "string" || typeof f.latestValues.y == "string") {
          f.isLayoutDirty = true;
        }
        f.updateScroll("snapshot");
        if (f.options.layoutRoot) {
          f.willUpdate(false);
        }
      }
      const {
        layoutId: l,
        layout: u
      } = this.options;
      if (l === undefined && !u) {
        return;
      }
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : undefined;
      this.updateSnapshot();
      if (o) {
        this.notifyListeners("willUpdate");
      }
    }
    update() {
      this.updateScheduled = false;
      if (this.isUpdateBlocked()) {
        const u = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (u) {
          this.nodes.forEach(I4);
        }
        this.nodes.forEach(Cf);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Tf);
        return;
      }
      this.animationCommitId = this.animationId;
      if (this.isUpdating) {
        this.isUpdating = false;
        this.nodes.forEach(V4);
        this.nodes.forEach(B4);
        this.nodes.forEach(M4);
        this.nodes.forEach(A4);
      } else {
        this.nodes.forEach(Tf);
      }
      this.clearAllSnapshots();
      const l = Ce.now();
      pe.delta = bt(0, 1000 / 60, l - pe.timestamp);
      pe.timestamp = l;
      pe.isProcessing = true;
      ia.update.process(pe);
      ia.preRender.process(pe);
      ia.render.process(pe);
      pe.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        tc.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(D4);
      this.sharedNodes.forEach(_4);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        U.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (!this.snapshot && !!this.instance) {
        this.snapshot = this.measure();
        if (this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y)) {
          this.snapshot = undefined;
        }
      }
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let u = 0; u < this.path.length; u++) {
          this.path[u].updateScroll();
        }
      }
      const o = this.layout;
      this.layout = this.measure(false);
      this.layoutVersion++;
      this.layoutCorrected ||= oe();
      this.isLayoutDirty = false;
      this.projectionDelta = undefined;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: l
      } = this.options;
      if (l) {
        l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : undefined);
      }
    }
    updateScroll(o = "measure") {
      let l = !!this.options.layoutScroll && !!this.instance;
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o) {
        l = false;
      }
      if (l && this.instance) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u
        };
      }
    }
    resetTransform() {
      if (!i) {
        return;
      }
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const l = this.projectionDelta && !Hg(this.projectionDelta);
      const u = this.getTransformTemplate();
      const c = u ? u(this.latestValues, "") : undefined;
      const d = c !== this.prevTransformTemplateValue;
      if (o && this.instance && (l || xn(this.latestValues) || d)) {
        i(this.instance, c);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(o = true) {
      const l = this.measurePageBox();
      let u = this.removeElementScroll(l);
      if (o) {
        u = this.removeTransform(u);
      }
      $4(u);
      return {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: u,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var c;
      const {
        visualElement: o
      } = this.options;
      if (!o) {
        return oe();
      }
      const l = o.measureViewportBox();
      if (!((c = this.scroll) == null ? undefined : c.wasRoot) && !this.path.some(K4)) {
        const {
          scroll: d
        } = this.root;
        if (d) {
          xt(l.x, d.offset.x);
          xt(l.y, d.offset.y);
        }
      }
      return l;
    }
    removeElementScroll(o) {
      var u;
      const l = oe();
      ot(l, o);
      if ((u = this.scroll) != null && u.wasRoot) {
        return l;
      }
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        const {
          scroll: f,
          options: h
        } = d;
        if (d !== this.root && f && h.layoutScroll) {
          if (f.wasRoot) {
            ot(l, o);
          }
          xt(l.x, f.offset.x);
          xt(l.y, f.offset.y);
        }
      }
      return l;
    }
    applyTransform(o, l = false, u) {
      var d;
      var f;
      const c = u || oe();
      ot(c, o);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!l && m.options.layoutScroll && m.scroll && m !== m.root) {
          xt(c.x, -m.scroll.offset.x);
          xt(c.y, -m.scroll.offset.y);
        }
        if (xn(m.latestValues)) {
          xs(c, m.latestValues, (d = m.layout) == null ? undefined : d.layoutBox);
        }
      }
      if (xn(this.latestValues)) {
        xs(c, this.latestValues, (f = this.layout) == null ? undefined : f.layoutBox);
      }
      return c;
    }
    removeTransform(o) {
      var u;
      const l = oe();
      ot(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!xn(d.latestValues)) {
          continue;
        }
        let f;
        if (d.instance) {
          if (Il(d.latestValues)) {
            d.updateSnapshot();
          }
          f = oe();
          ot(f, d.measurePageBox());
        }
        gf(l, d.latestValues, (u = d.snapshot) == null ? undefined : u.layoutBox, f);
      }
      if (xn(this.latestValues)) {
        gf(l, this.latestValues);
      }
      return l;
    }
    setTargetDelta(o) {
      this.targetDelta = o;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== undefined ? o.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = undefined;
      this.layout = undefined;
      this.snapshot = undefined;
      this.prevTransformTemplateValue = undefined;
      this.targetDelta = undefined;
      this.target = undefined;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(o = false) {
      var m;
      const l = this.getLead();
      this.isProjectionDirty ||= l.isProjectionDirty;
      this.isTransformDirty ||= l.isTransformDirty;
      this.isSharedProjectionDirty ||= l.isSharedProjectionDirty;
      const u = !!this.resumingFrom || this !== l;
      if (!o && (!u || !this.isSharedProjectionDirty) && !this.isProjectionDirty && ((m = this.parent) == null || !m.isProjectionDirty) && !this.attemptToResolveRelativeTarget && !this.root.updateBlockedByResize) {
        return;
      }
      const {
        layout: d,
        layoutId: f
      } = this.options;
      if (!this.layout || !d && !f) {
        return;
      }
      this.resolvedRelativeTargetAt = pe.timestamp;
      const h = this.getClosestProjectingParent();
      if (h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot) {
        this.removeRelativeTarget();
      }
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && h && h.layout) {
          this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!!this.relativeTarget || !!this.targetDelta) {
        if (!this.target) {
          this.target = oe();
          this.targetWithTransforms = oe();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          h4(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || undefined);
        } else if (this.targetDelta) {
          if (this.resumingFrom) {
            this.applyTransform(this.layout.layoutBox, false, this.target);
          } else {
            ot(this.target, this.layout.layoutBox);
          }
          Lg(this.target, this.targetDelta);
        } else {
          ot(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          if (this.options.layoutAnchor !== false && h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1) {
            this.createRelativeTarget(h, this.target, h.target);
          } else {
            this.relativeParent = this.relativeTarget = undefined;
          }
        }
      }
    }
    getClosestProjectingParent() {
      if (!!this.parent && !Il(this.parent.latestValues) && !Ag(this.parent.latestValues)) {
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
    }
    isProjecting() {
      return (!!this.relativeTarget || !!this.targetDelta || !!this.options.layoutRoot) && !!this.layout;
    }
    createRelativeTarget(o, l, u) {
      this.relativeParent = o;
      this.linkedParentVersion = o.layoutVersion;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = oe();
      this.relativeTargetOrigin = oe();
      ro(this.relativeTargetOrigin, l, u, this.options.layoutAnchor || undefined);
      ot(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = undefined;
    }
    calcProjection() {
      var v;
      const o = this.getLead();
      const l = !!this.resumingFrom || this !== o;
      let u = true;
      if (this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) {
        u = false;
      }
      if (l && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        u = false;
      }
      if (this.resolvedRelativeTargetAt === pe.timestamp) {
        u = false;
      }
      if (u) {
        return;
      }
      const {
        layout: c,
        layoutId: d
      } = this.options;
      this.isTreeAnimating = !!this.parent && !!this.parent.isTreeAnimating || !!this.currentAnimation || !!this.pendingAnimation;
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = undefined;
      }
      if (!this.layout || !c && !d) {
        return;
      }
      ot(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x;
      const h = this.treeScale.y;
      Ww(this.layoutCorrected, this.treeScale, this.path, l);
      if (o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        o.target = o.layout.layoutBox;
        o.targetWithTransforms = oe();
      }
      const {
        target: m
      } = o;
      if (!m) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        cf(this.prevProjectionDelta.x, this.projectionDelta.x);
        cf(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      Zr(this.projectionDelta, this.layoutCorrected, m, this.latestValues);
      if (this.treeScale.x !== f || this.treeScale.y !== h || !kf(this.projectionDelta.x, this.prevProjectionDelta.x) || !kf(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", m);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(o = true) {
      var l;
      if ((l = this.options.visualElement) != null) {
        l.scheduleRender();
      }
      if (o) {
        const u = this.getStack();
        if (u) {
          u.scheduleRender();
        }
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = undefined;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = er();
      this.projectionDelta = er();
      this.projectionDeltaWithTransform = er();
    }
    setAnimationOrigin(o, l = false) {
      const u = this.snapshot;
      const c = u ? u.latestValues : {};
      const d = {
        ...this.latestValues
      };
      const f = er();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = undefined;
      }
      this.attemptToResolveRelativeTarget = !l;
      const h = oe();
      const m = u ? u.source : undefined;
      const v = this.layout ? this.layout.source : undefined;
      const x = m !== v;
      const k = this.getStack();
      const g = !k || k.members.length <= 1;
      const p = !!x && !g && this.options.crossfade === true && !this.path.some(U4);
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = w => {
        const S = w / 1000;
        Nf(f.x, o.x, S);
        Nf(f.y, o.y, S);
        this.setTargetDelta(f);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          ro(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined);
          W4(this.relativeTarget, this.relativeTargetOrigin, h, S);
          if (y && y4(this.relativeTarget, y)) {
            this.isProjectionDirty = false;
          }
          y ||= oe();
          ot(y, this.relativeTarget);
        }
        if (x) {
          this.animationValues = d;
          w4(d, c, this.latestValues, S, p, g);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = S;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
    }
    startAnimation(o) {
      var l;
      var u;
      var c;
      this.notifyListeners("animationStart");
      if ((l = this.currentAnimation) != null) {
        l.stop();
      }
      if ((c = (u = this.resumingFrom) == null ? undefined : u.currentAnimation) != null) {
        c.stop();
      }
      if (this.pendingAnimation) {
        ln(this.pendingAnimation);
        this.pendingAnimation = undefined;
      }
      this.pendingAnimation = U.update(() => {
        ks.hasAnimatedSinceResize = true;
        this.motionValue ||= gr(0);
        this.motionValue.jump(0, false);
        this.currentAnimation = S4(this.motionValue, [0, 1000], {
          ...o,
          velocity: 0,
          isSync: true,
          onUpdate: d => {
            this.mixTargetDelta(d);
            if (o.onUpdate) {
              o.onUpdate(d);
            }
          },
          onStop: () => {},
          onComplete: () => {
            if (o.onComplete) {
              o.onComplete();
            }
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = undefined;
        this.resumingFrom.preserveOpacity = undefined;
      }
      const o = this.getStack();
      if (o) {
        o.exitAnimationComplete();
      }
      this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        if (this.mixTargetDelta) {
          this.mixTargetDelta(N4);
        }
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: u,
        layout: c,
        latestValues: d
      } = o;
      if (!!l && !!u && !!c) {
        if (this !== o && this.layout && c && Qg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          u = this.target || oe();
          const f = Te(this.layout.layoutBox.x);
          u.x.min = o.target.x.min;
          u.x.max = u.x.min + f;
          const h = Te(this.layout.layoutBox.y);
          u.y.min = o.target.y.min;
          u.y.max = u.y.min + h;
        }
        ot(l, u);
        xs(l, d);
        Zr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(o, l) {
      if (!this.sharedNodes.has(o)) {
        this.sharedNodes.set(o, new P4());
      }
      this.sharedNodes.get(o).add(l);
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : undefined,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : undefined
      });
    }
    isLead() {
      const o = this.getStack();
      if (o) {
        return o.lead === this;
      } else {
        return true;
      }
    }
    getLead() {
      var l;
      const {
        layoutId: o
      } = this.options;
      if (o) {
        return ((l = this.getStack()) == null ? undefined : l.lead) || this;
      } else {
        return this;
      }
    }
    getPrevLead() {
      var l;
      const {
        layoutId: o
      } = this.options;
      if (o) {
        if ((l = this.getStack()) == null) {
          return undefined;
        } else {
          return l.prevLead;
        }
      } else {
        return undefined;
      }
    }
    getStack() {
      const {
        layoutId: o
      } = this.options;
      if (o) {
        return this.root.sharedNodes.get(o);
      }
    }
    promote({
      needsReset: o,
      transition: l,
      preserveFollowOpacity: u
    } = {}) {
      const c = this.getStack();
      if (c) {
        c.promote(this, u);
      }
      if (o) {
        this.projectionDelta = undefined;
        this.needsReset = true;
      }
      if (l) {
        this.setOptions({
          transition: l
        });
      }
    }
    relegate() {
      const o = this.getStack();
      if (o) {
        return o.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const {
        visualElement: o
      } = this.options;
      if (!o) {
        return;
      }
      let l = false;
      const {
        latestValues: u
      } = o;
      if (u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) {
        l = true;
      }
      if (!l) {
        return;
      }
      const c = {};
      if (u.z) {
        ha("z", o, c, this.animationValues);
      }
      for (let d = 0; d < fa.length; d++) {
        ha(`rotate${fa[d]}`, o, c, this.animationValues);
        ha(`skew${fa[d]}`, o, c, this.animationValues);
      }
      o.render();
      for (const d in c) {
        o.setStaticValue(d, c[d]);
        if (this.animationValues) {
          this.animationValues[d] = c[d];
        }
      }
      o.scheduleRender();
    }
    applyProjectionStyles(o, l) {
      if (!this.instance || this.isSVG) {
        return;
      }
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const u = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        o.visibility = "";
        o.opacity = "";
        o.pointerEvents = ws(l == null ? undefined : l.pointerEvents) || "";
        o.transform = u ? u(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        if (this.options.layoutId) {
          o.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
          o.pointerEvents = ws(l == null ? undefined : l.pointerEvents) || "";
        }
        if (this.hasProjected && !xn(this.latestValues)) {
          o.transform = u ? u({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      o.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = v4(this.projectionDeltaWithTransform, this.treeScale, d);
      if (u) {
        f = u(d, f);
      }
      o.transform = f;
      const {
        x: h,
        y: m
      } = this.projectionDelta;
      o.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`;
      if (c.animationValues) {
        o.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit;
      } else {
        o.opacity = c === this ? d.opacity !== undefined ? d.opacity : "" : d.opacityExit !== undefined ? d.opacityExit : 0;
      }
      for (const v in Bl) {
        if (d[v] === undefined) {
          continue;
        }
        const {
          correct: x,
          applyTo: k,
          isCSSVariable: g
        } = Bl[v];
        const p = f === "none" ? d[v] : x(d[v], c);
        if (k) {
          const y = k.length;
          for (let w = 0; w < y; w++) {
            o[k[w]] = p;
          }
        } else if (g) {
          this.options.visualElement.renderState.vars[v] = p;
        } else {
          o[v] = p;
        }
      }
      if (this.options.layoutId) {
        o.pointerEvents = c === this ? ws(l == null ? undefined : l.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = undefined;
    }
    resetTree() {
      this.root.nodes.forEach(o => {
        var l;
        if ((l = o.currentAnimation) == null) {
          return undefined;
        } else {
          return l.stop();
        }
      });
      this.root.nodes.forEach(Cf);
      this.root.sharedNodes.clear();
    }
  };
}
function M4(e) {
  e.updateLayout();
}
function A4(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? undefined : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const {
      layoutBox: r,
      measuredBox: i
    } = e.layout;
    const {
      animationType: s
    } = e.options;
    const o = t.source !== e.layout.source;
    if (s === "size") {
      vt(f => {
        const h = o ? t.measuredBox[f] : t.layoutBox[f];
        const m = Te(h);
        h.min = r[f].min;
        h.max = h.min + m;
      });
    } else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      Ol(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
    } else if (Qg(s, t.layoutBox, r)) {
      vt(f => {
        const h = o ? t.measuredBox[f] : t.layoutBox[f];
        const m = Te(r[f]);
        h.max = h.min + m;
        if (e.relativeTarget && !e.currentAnimation) {
          e.isProjectionDirty = true;
          e.relativeTarget[f].max = e.relativeTarget[f].min + m;
        }
      });
    }
    const l = er();
    Zr(l, r, t.layoutBox);
    const u = er();
    if (o) {
      Zr(u, e.applyTransform(i, true), t.measuredBox);
    } else {
      Zr(u, r, t.layoutBox);
    }
    const c = !Hg(l);
    let d = false;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const {
          snapshot: h,
          layout: m
        } = f;
        if (h && m) {
          const v = e.options.layoutAnchor || undefined;
          const x = oe();
          ro(x, t.layoutBox, h.layoutBox, v);
          const k = oe();
          ro(k, r, m.layoutBox, v);
          if (!$g(x, k)) {
            d = true;
          }
          if (f.options.layoutRoot) {
            e.relativeTarget = k;
            e.relativeTargetOrigin = x;
            e.relativeParent = f;
          }
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: u,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const {
      onExitComplete: r
    } = e.options;
    if (r) {
      r();
    }
  }
  e.options.transition = undefined;
}
function L4(e) {
  if (e.parent) {
    if (!e.isProjecting()) {
      e.isProjectionDirty = e.parent.isProjectionDirty;
    }
    e.isSharedProjectionDirty ||= !!e.isProjectionDirty || !!e.parent.isProjectionDirty || !!e.parent.isSharedProjectionDirty;
    e.isTransformDirty ||= e.parent.isTransformDirty;
  }
}
function R4(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = false;
}
function D4(e) {
  e.clearSnapshot();
}
function Cf(e) {
  e.clearMeasurements();
}
function I4(e) {
  e.isLayoutDirty = true;
  e.updateLayout();
}
function Tf(e) {
  e.isLayoutDirty = false;
}
function V4(e) {
  if (e.isAnimationBlocked && e.layout && !e.isLayoutDirty) {
    e.snapshot = e.layout;
    e.isLayoutDirty = true;
  }
}
function B4(e) {
  const {
    visualElement: t
  } = e.options;
  if (t && t.getProps().onBeforeLayoutMeasure) {
    t.notify("BeforeLayoutMeasure");
  }
  e.resetTransform();
}
function Pf(e) {
  e.finishAnimation();
  e.targetDelta = e.relativeTarget = e.target = undefined;
  e.isProjectionDirty = true;
}
function O4(e) {
  e.resolveTargetDelta();
}
function F4(e) {
  e.calcProjection();
}
function z4(e) {
  e.resetSkewAndRotation();
}
function _4(e) {
  e.removeLeadSnapshot();
}
function Nf(e, t, n) {
  e.translate = K(t.translate, 0, n);
  e.scale = K(t.scale, 1, n);
  e.origin = t.origin;
  e.originPoint = t.originPoint;
}
function Ef(e, t, n, r) {
  e.min = K(t.min, n.min, r);
  e.max = K(t.max, n.max, r);
}
function W4(e, t, n, r) {
  Ef(e.x, t.x, n.x, r);
  Ef(e.y, t.y, n.y, r);
}
function U4(e) {
  return e.animationValues && e.animationValues.opacityExit !== undefined;
}
const H4 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
const Mf = e => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e);
const Af = Mf("applewebkit/") && !Mf("chrome/") ? Math.round : et;
function Lf(e) {
  e.min = Af(e.min);
  e.max = Af(e.max);
}
function $4(e) {
  Lf(e.x);
  Lf(e.y);
}
function Qg(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !f4(wf(t), wf(n), 0.2);
}
function K4(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? undefined : t.wasRoot);
}
const G4 = Xg({
  attachResizeListener: (e, t) => ki(e, "resize", t),
  measureScroll: () => {
    var e;
    var t;
    return {
      x: document.documentElement.scrollLeft || ((e = document.body) == null ? undefined : e.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((t = document.body) == null ? undefined : t.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => true
});
const pa = {
  current: undefined
};
const Zg = Xg({
  measureScroll: e => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!pa.current) {
      const e = new G4({});
      e.mount(window);
      e.setOptions({
        layoutScroll: true
      });
      pa.current = e;
    }
    return pa.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== undefined ? t : "none";
  },
  checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
});
const qg = j.createContext({
  transformPagePoint: e => e,
  isStatic: false,
  reducedMotion: "never"
});
function Y4(e = true) {
  const t = j.useContext(Bu);
  if (t === null) {
    return [true, null];
  }
  const {
    isPresent: n,
    onExitComplete: r,
    register: i
  } = t;
  const s = j.useId();
  j.useEffect(() => {
    if (e) {
      return i(s);
    }
  }, [e]);
  const o = j.useCallback(() => e && r && r(s), [s, r, e]);
  if (!n && r) {
    return [false, o];
  } else {
    return [true];
  }
}
const Jg = j.createContext({
  strict: false
});
const Rf = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Df = false;
function X4() {
  if (Df) {
    return;
  }
  const e = {};
  for (const t in Rf) {
    e[t] = {
      isEnabled: n => Rf[t].some(r => !!n[r])
    };
  }
  Ng(e);
  Df = true;
}
function ey() {
  X4();
  return Ow();
}
function Q4(e) {
  const t = ey();
  for (const n in e) {
    t[n] = {
      ...t[n],
      ...e[n]
    };
  }
  Ng(t);
}
const Z4 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function io(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Z4.has(e);
}
let ty = e => !io(e);
function q4(e) {
  if (typeof e == "function") {
    ty = t => t.startsWith("on") ? !io(t) : e(t);
  }
}
try {
  q4(require("@emotion/is-prop-valid").default);
} catch {}
function J4(e, t, n) {
  const r = {};
  for (const i in e) {
    if ((i !== "values" || typeof e.values != "object") && !me(e[i])) {
      if (ty(i) || n === true && io(i) || !t && !io(i) || e.draggable && i.startsWith("onDrag")) {
        r[i] = e[i];
      }
    }
  }
  return r;
}
const Eo = j.createContext({});
function e3(e, t) {
  if (No(e)) {
    const {
      initial: n,
      animate: r
    } = e;
    return {
      initial: n === false || wi(n) ? n : undefined,
      animate: wi(r) ? r : undefined
    };
  }
  if (e.inherit !== false) {
    return t;
  } else {
    return {};
  }
}
function t3(e) {
  const {
    initial: t,
    animate: n
  } = e3(e, j.useContext(Eo));
  return j.useMemo(() => ({
    initial: t,
    animate: n
  }), [If(t), If(n)]);
}
function If(e) {
  if (Array.isArray(e)) {
    return e.join(" ");
  } else {
    return e;
  }
}
const lc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ny(e, t, n) {
  for (const r in t) {
    if (!me(t[r]) && !Ig(r, n)) {
      e[r] = t[r];
    }
  }
}
function n3({
  transformTemplate: e
}, t) {
  return j.useMemo(() => {
    const n = lc();
    oc(n, t, e);
    return Object.assign({}, n.vars, n.style);
  }, [t]);
}
function r3(e, t) {
  const n = e.style || {};
  const r = {};
  ny(r, n, e);
  Object.assign(r, n3(e, t));
  return r;
}
function i3(e, t) {
  const n = {};
  const r = r3(e, t);
  if (e.drag && e.dragListener !== false) {
    n.draggable = false;
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none";
    r.touchAction = e.drag === true ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`;
  }
  if (e.tabIndex === undefined && (e.onTap || e.onTapStart || e.whileTap)) {
    n.tabIndex = 0;
  }
  n.style = r;
  return n;
}
const ry = () => ({
  ...lc(),
  attrs: {}
});
function s3(e, t, n, r) {
  const i = j.useMemo(() => {
    const s = ry();
    Vg(s, t, Og(r), e.transformTemplate, e.style);
    return {
      ...s.attrs,
      style: {
        ...s.style
      }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ny(s, e.style, e);
    i.style = {
      ...s,
      ...i.style
    };
  }
  return i;
}
const o3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function uc(e) {
  if (typeof e != "string" || e.includes("-")) {
    return false;
  } else {
    return !!(o3.indexOf(e) > -1) || !!/[A-Z]/u.test(e);
  }
}
function a3(e, t, n, {
  latestValues: r
}, i, s = false, o) {
  const u = (o ?? uc(e) ? s3 : i3)(t, r, i, e);
  const c = J4(t, typeof e == "string", s);
  const d = e !== j.Fragment ? {
    ...c,
    ...u,
    ref: n
  } : {};
  const {
    children: f
  } = t;
  const h = j.useMemo(() => me(f) ? f.get() : f, [f]);
  return j.createElement(e, {
    ...d,
    children: h
  });
}
function l3({
  scrapeMotionValuesFromProps: e,
  createRenderState: t
}, n, r, i) {
  return {
    latestValues: u3(n, r, i, e),
    renderState: t()
  };
}
function u3(e, t, n, r) {
  const i = {};
  const s = r(e, {});
  for (const h in s) {
    i[h] = ws(s[h]);
  }
  let {
    initial: o,
    animate: l
  } = e;
  const u = No(e);
  const c = Tg(e);
  if (t && c && !u && e.inherit !== false) {
    if (o === undefined) {
      o = t.initial;
    }
    if (l === undefined) {
      l = t.animate;
    }
  }
  let d = n ? n.initial === false : false;
  d = d || o === false;
  const f = d ? l : o;
  if (f && typeof f != "boolean" && !Po(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let m = 0; m < h.length; m++) {
      const v = qu(e, h[m]);
      if (v) {
        const {
          transitionEnd: x,
          transition: k,
          ...g
        } = v;
        for (const p in g) {
          let y = g[p];
          if (Array.isArray(y)) {
            const w = d ? y.length - 1 : 0;
            y = y[w];
          }
          if (y !== null) {
            i[p] = y;
          }
        }
        for (const p in x) {
          i[p] = x[p];
        }
      }
    }
  }
  return i;
}
const iy = e => (t, n) => {
  const r = j.useContext(Eo);
  const i = j.useContext(Bu);
  const s = () => l3(e, t, r, i);
  if (n) {
    return s();
  } else {
    return ox(s);
  }
};
const c3 = iy({
  scrapeMotionValuesFromProps: ac,
  createRenderState: lc
});
const d3 = iy({
  scrapeMotionValuesFromProps: Fg,
  createRenderState: ry
});
const f3 = Symbol.for("motionComponentSymbol");
function h3(e, t, n) {
  const r = j.useRef(n);
  j.useInsertionEffect(() => {
    r.current = n;
  });
  const i = j.useRef(null);
  return j.useCallback(s => {
    var l;
    if (s) {
      if ((l = e.onMount) != null) {
        l.call(e, s);
      }
    }
    const o = r.current;
    if (typeof o == "function") {
      if (s) {
        const u = o(s);
        if (typeof u == "function") {
          i.current = u;
        }
      } else if (i.current) {
        i.current();
        i.current = null;
      } else {
        o(s);
      }
    } else if (o) {
      o.current = s;
    }
    if (t) {
      if (s) {
        t.mount(s);
      } else {
        t.unmount();
      }
    }
  }, [t]);
}
const sy = j.createContext({});
function Fn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function p3(e, t, n, r, i, s) {
  var y;
  var w;
  const {
    visualElement: o
  } = j.useContext(Eo);
  const l = j.useContext(Jg);
  const u = j.useContext(Bu);
  const c = j.useContext(qg);
  const d = c.reducedMotion;
  const f = c.skipAnimations;
  const h = j.useRef(null);
  const m = j.useRef(false);
  r = r || l.renderer;
  if (!h.current && r) {
    h.current = r(e, {
      visualState: t,
      parent: o,
      props: n,
      presenceContext: u,
      blockInitialAnimation: u ? u.initial === false : false,
      reducedMotionConfig: d,
      skipAnimations: f,
      isSVG: s
    });
    if (m.current && h.current) {
      h.current.manuallyAnimateOnMount = true;
    }
  }
  const v = h.current;
  const x = j.useContext(sy);
  if (v && !v.projection && i && (v.type === "html" || v.type === "svg")) {
    m3(h.current, n, i, x);
  }
  const k = j.useRef(false);
  j.useInsertionEffect(() => {
    if (v && k.current) {
      v.update(n, u);
    }
  });
  const g = n[hg];
  const p = j.useRef(!!g && typeof window !== "undefined" && ((y = window.MotionHandoffIsComplete) == null || !y.call(window, g)) && ((w = window.MotionHasOptimisedAnimation) == null ? undefined : w.call(window, g)));
  lx(() => {
    m.current = true;
    if (v) {
      k.current = true;
      window.MotionIsMounted = true;
      v.updateFeatures();
      v.scheduleRenderMicrotask();
      if (p.current && v.animationState) {
        v.animationState.animateChanges();
      }
    }
  });
  j.useEffect(() => {
    if (v) {
      if (!p.current && v.animationState) {
        v.animationState.animateChanges();
      }
      if (p.current) {
        queueMicrotask(() => {
          var S;
          if ((S = window.MotionHandoffMarkAsComplete) != null) {
            S.call(window, g);
          }
        });
        p.current = false;
      }
      v.enteringChildren = undefined;
    }
  });
  return v;
}
function m3(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: u,
    layoutRoot: c,
    layoutAnchor: d,
    layoutCrossfade: f
  } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? undefined : oy(e.parent));
  e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || l && Fn(l),
    visualElement: e,
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    crossfade: f,
    layoutScroll: u,
    layoutRoot: c,
    layoutAnchor: d
  });
}
function oy(e) {
  if (e) {
    if (e.options.allowProjection !== false) {
      return e.projection;
    } else {
      return oy(e.parent);
    }
  }
}
function ma(e, {
  forwardMotionProps: t = false,
  type: n
} = {}, r, i) {
  if (r) {
    Q4(r);
  }
  const s = n ? n === "svg" : uc(e);
  const o = s ? d3 : c3;
  function l(c, d) {
    let f;
    const h = {
      ...j.useContext(qg),
      ...c,
      layoutId: g3(c)
    };
    const {
      isStatic: m
    } = h;
    const v = t3(c);
    const x = o(c, m);
    if (!m && typeof window !== "undefined") {
      y3();
      const k = v3(h);
      f = k.MeasureLayout;
      v.visualElement = p3(e, x, h, i, k.ProjectionNode, s);
    }
    return a.jsxs(Eo.Provider, {
      value: v,
      children: [f && v.visualElement ? a.jsx(f, {
        visualElement: v.visualElement,
        ...h
      }) : null, a3(e, c, h3(x, v.visualElement, d), x, m, t, s)]
    });
  }
  l.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const u = j.forwardRef(l);
  u[f3] = e;
  return u;
}
function g3({
  layoutId: e
}) {
  const t = j.useContext(Cm).id;
  if (t && e !== undefined) {
    return t + "-" + e;
  } else {
    return e;
  }
}
function y3(e, t) {
  j.useContext(Jg).strict;
}
function v3(e) {
  const t = ey();
  const {
    drag: n,
    layout: r
  } = t;
  if (!n && !r) {
    return {};
  }
  const i = {
    ...n,
    ...r
  };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : undefined,
    ProjectionNode: i.ProjectionNode
  };
}
function x3(e, t) {
  if (typeof Proxy === "undefined") {
    return ma;
  }
  const n = new Map();
  const r = (s, o) => ma(s, o, e, t);
  const i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, ma(o, undefined, e, t)), n.get(o))
  });
}
const w3 = (e, t) => t.isSVG ?? uc(e) ? new t4(t) : new Xw(t, {
  allowProjection: e !== j.Fragment
});
class k3 extends hn {
  constructor(t) {
    super(t);
    t.animationState ||= o4(t);
  }
  updateAnimationControlsSubscription() {
    const {
      animate: t
    } = this.node.getProps();
    if (Po(t)) {
      this.unmountControls = t.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: t
    } = this.node.getProps();
    const {
      animate: n
    } = this.node.prevProps || {};
    if (t !== n) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var t;
    this.node.animationState.reset();
    if ((t = this.unmountControls) != null) {
      t.call(this);
    }
  }
}
let j3 = 0;
class S3 extends hn {
  constructor() {
    super(...arguments);
    this.id = j3++;
    this.isExitComplete = false;
  }
  update() {
    var s;
    if (!this.node.presenceContext) {
      return;
    }
    const {
      isPresent: t,
      onExitComplete: n
    } = this.node.presenceContext;
    const {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) {
      return;
    }
    if (t && r === false) {
      if (this.isExitComplete) {
        const {
          initial: o,
          custom: l
        } = this.node.getProps();
        if (typeof o == "string") {
          const u = Nn(this.node, o, l);
          if (u) {
            const {
              transition: c,
              transitionEnd: d,
              ...f
            } = u;
            for (const h in f) {
              if ((s = this.node.getValue(h)) != null) {
                s.jump(f[h]);
              }
            }
          }
        }
        this.node.animationState.reset();
        this.node.animationState.animateChanges();
      } else {
        this.node.animationState.setActive("exit", false);
      }
      this.isExitComplete = false;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    if (n && !t) {
      i.then(() => {
        this.isExitComplete = true;
        n(this.id);
      });
    }
  }
  mount() {
    const {
      register: t,
      onExitComplete: n
    } = this.node.presenceContext || {};
    if (n) {
      n(this.id);
    }
    if (t) {
      this.unmount = t(this.id);
    }
  }
  unmount() {}
}
const b3 = {
  animation: {
    Feature: k3
  },
  exit: {
    Feature: S3
  }
};
function Ai(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const C3 = e => t => nc(t) && e(t, Ai(t));
function qr(e, t, n, r) {
  return ki(e, t, C3(n), r);
}
const ay = ({
  current: e
}) => e ? e.ownerDocument.defaultView : null;
const Vf = (e, t) => Math.abs(e - t);
function T3(e, t) {
  const n = Vf(e.x, t.x);
  const r = Vf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Bf = new Set(["auto", "scroll"]);
class ly {
  constructor(t, n, {
    transformPagePoint: r,
    contextWindow: i = window,
    dragSnapToOrigin: s = false,
    distanceThreshold: o = 3,
    element: l
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = m => {
      this.handleScroll(m.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = es(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const m = ga(this.lastMoveEventInfo, this.history);
      const v = this.startEvent !== null;
      const x = T3(m.offset, {
        x: 0,
        y: 0
      }) >= this.distanceThreshold;
      if (!v && !x) {
        return;
      }
      const {
        point: k
      } = m;
      const {
        timestamp: g
      } = pe;
      this.history.push({
        ...k,
        timestamp: g
      });
      const {
        onStart: p,
        onMove: y
      } = this.handlers;
      if (!v) {
        if (p) {
          p(this.lastMoveEvent, m);
        }
        this.startEvent = this.lastMoveEvent;
      }
      if (y) {
        y(this.lastMoveEvent, m);
      }
    };
    this.handlePointerMove = (m, v) => {
      this.lastMoveEvent = m;
      this.lastRawMoveEventInfo = v;
      this.lastMoveEventInfo = es(v, this.transformPagePoint);
      U.update(this.updatePoint, true);
    };
    this.handlePointerUp = (m, v) => {
      this.end();
      const {
        onEnd: x,
        onSessionEnd: k,
        resumeAnimation: g
      } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && g) {
        g();
      }
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      const p = ga(m.type === "pointercancel" ? this.lastMoveEventInfo : es(v, this.transformPagePoint), this.history);
      if (this.startEvent && x) {
        x(m, p);
      }
      if (k) {
        k(m, p);
      }
    };
    if (!nc(t)) {
      return;
    }
    this.dragSnapToOrigin = s;
    this.handlers = n;
    this.transformPagePoint = r;
    this.distanceThreshold = o;
    this.contextWindow = i || window;
    const u = Ai(t);
    const c = es(u, this.transformPagePoint);
    const {
      point: d
    } = c;
    const {
      timestamp: f
    } = pe;
    this.history = [{
      ...d,
      timestamp: f
    }];
    const {
      onSessionStart: h
    } = n;
    if (h) {
      h(t, ga(c, this.history));
    }
    this.removeListeners = Ni(qr(this.contextWindow, "pointermove", this.handlePointerMove), qr(this.contextWindow, "pointerup", this.handlePointerUp), qr(this.contextWindow, "pointercancel", this.handlePointerUp));
    if (l) {
      this.startScrollTracking(l);
    }
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    while (n) {
      const r = getComputedStyle(n);
      if (Bf.has(r.overflowX) || Bf.has(r.overflowY)) {
        this.scrollPositions.set(n, {
          x: n.scrollLeft,
          y: n.scrollTop
        });
      }
      n = n.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true
    });
    window.addEventListener("scroll", this.onWindowScroll);
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) {
      return;
    }
    const r = t === window;
    const i = r ? {
      x: window.scrollX,
      y: window.scrollY
    } : {
      x: t.scrollLeft,
      y: t.scrollTop
    };
    const s = {
      x: i.x - n.x,
      y: i.y - n.y
    };
    if (s.x !== 0 || s.y !== 0) {
      if (r) {
        if (this.lastMoveEventInfo) {
          this.lastMoveEventInfo.point.x += s.x;
          this.lastMoveEventInfo.point.y += s.y;
        }
      } else if (this.history.length > 0) {
        this.history[0].x -= s.x;
        this.history[0].y -= s.y;
      }
      this.scrollPositions.set(t, i);
      U.update(this.updatePoint, true);
    }
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    if (this.removeListeners) {
      this.removeListeners();
    }
    if (this.removeScrollListeners) {
      this.removeScrollListeners();
    }
    this.scrollPositions.clear();
    ln(this.updatePoint);
  }
}
function es(e, t) {
  if (t) {
    return {
      point: t(e.point)
    };
  } else {
    return e;
  }
}
function Of(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ga({
  point: e
}, t) {
  return {
    point: e,
    delta: Of(e, uy(t)),
    offset: Of(e, P3(t)),
    velocity: N3(t, 0.1)
  };
}
function P3(e) {
  return e[0];
}
function uy(e) {
  return e[e.length - 1];
}
function N3(e, t) {
  if (e.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let n = e.length - 1;
  let r = null;
  const i = uy(e);
  while (n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Ue(t)))) {
    n--;
  }
  if (!r) {
    return {
      x: 0,
      y: 0
    };
  }
  if (r === e[0] && e.length > 2 && i.timestamp - r.timestamp > Ue(t) * 2) {
    r = e[1];
  }
  const s = qe(i.timestamp - r.timestamp);
  if (s === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  if (o.x === Infinity) {
    o.x = 0;
  }
  if (o.y === Infinity) {
    o.y = 0;
  }
  return o;
}
function E3(e, {
  min: t,
  max: n
}, r) {
  if (t !== undefined && e < t) {
    e = r ? K(t, e, r.min) : Math.max(e, t);
  } else if (n !== undefined && e > n) {
    e = r ? K(n, e, r.max) : Math.min(e, n);
  }
  return e;
}
function Ff(e, t, n) {
  return {
    min: t !== undefined ? e.min + t : undefined,
    max: n !== undefined ? e.max + n - (e.max - e.min) : undefined
  };
}
function M3(e, {
  top: t,
  left: n,
  bottom: r,
  right: i
}) {
  return {
    x: Ff(e.x, n, i),
    y: Ff(e.y, t, r)
  };
}
function zf(e, t) {
  let n = t.min - e.min;
  let r = t.max - e.max;
  if (t.max - t.min < e.max - e.min) {
    [n, r] = [r, n];
  }
  return {
    min: n,
    max: r
  };
}
function A3(e, t) {
  return {
    x: zf(e.x, t.x),
    y: zf(e.y, t.y)
  };
}
function L3(e, t) {
  let n = 0.5;
  const r = Te(e);
  const i = Te(t);
  if (i > r) {
    n = vi(t.min, t.max - r, e.min);
  } else if (r > i) {
    n = vi(e.min, e.max - i, t.min);
  }
  return bt(0, 1, n);
}
function R3(e, t) {
  const n = {};
  if (t.min !== undefined) {
    n.min = t.min - e.min;
  }
  if (t.max !== undefined) {
    n.max = t.max - e.min;
  }
  return n;
}
const Fl = 0.35;
function D3(e = Fl) {
  if (e === false) {
    e = 0;
  } else if (e === true) {
    e = Fl;
  }
  return {
    x: _f(e, "left", "right"),
    y: _f(e, "top", "bottom")
  };
}
function _f(e, t, n) {
  return {
    min: Wf(e, t),
    max: Wf(e, n)
  };
}
function Wf(e, t) {
  if (typeof e == "number") {
    return e;
  } else {
    return e[t] || 0;
  }
}
const I3 = new WeakMap();
class V3 {
  constructor(t) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = oe();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = t;
  }
  start(t, {
    snapToCursor: n = false,
    distanceThreshold: r
  } = {}) {
    const {
      presenceContext: i
    } = this.visualElement;
    if (i && i.isPresent === false) {
      return;
    }
    const s = f => {
      if (n) {
        this.snapToCursor(Ai(f).point);
      }
      this.stopAnimation();
    };
    const o = (f, h) => {
      const {
        drag: m,
        dragPropagation: v,
        onDragStart: x
      } = this.getProps();
      if (m && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = pw(m), !this.openDragLock)) {
        return;
      }
      this.latestPointerEvent = f;
      this.latestPanInfo = h;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = undefined;
      }
      vt(g => {
        let p = this.getAxisMotionValue(g).get() || 0;
        if (St.test(p)) {
          const {
            projection: y
          } = this.visualElement;
          if (y && y.layout) {
            const w = y.layout.layoutBox[g];
            if (w) {
              p = Te(w) * (parseFloat(p) / 100);
            }
          }
        }
        this.originPoint[g] = p;
      });
      if (x) {
        U.update(() => x(f, h), false, true);
      }
      Ml(this.visualElement, "transform");
      const {
        animationState: k
      } = this.visualElement;
      if (k) {
        k.setActive("whileDrag", true);
      }
    };
    const l = (f, h) => {
      this.latestPointerEvent = f;
      this.latestPanInfo = h;
      const {
        dragPropagation: m,
        dragDirectionLock: v,
        onDirectionLock: x,
        onDrag: k
      } = this.getProps();
      if (!m && !this.openDragLock) {
        return;
      }
      const {
        offset: g
      } = h;
      if (v && this.currentDirection === null) {
        this.currentDirection = O3(g);
        if (this.currentDirection !== null && x) {
          x(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", h.point, g);
      this.updateAxis("y", h.point, g);
      this.visualElement.render();
      if (k) {
        U.update(() => k(f, h), false, true);
      }
    };
    const u = (f, h) => {
      this.latestPointerEvent = f;
      this.latestPanInfo = h;
      this.stop(f, h);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const c = () => {
      const {
        dragSnapToOrigin: f
      } = this.getProps();
      if (f || this.constraints) {
        this.startAnimation({
          x: 0,
          y: 0
        });
      }
    };
    const {
      dragSnapToOrigin: d
    } = this.getProps();
    this.panSession = new ly(t, {
      onSessionStart: s,
      onStart: o,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: r,
      contextWindow: ay(this.visualElement),
      element: this.visualElement.current
    });
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent;
    const i = n || this.latestPanInfo;
    const s = this.isDragging;
    this.cancel();
    if (!s || !i || !r) {
      return;
    }
    const {
      velocity: o
    } = i;
    this.startAnimation(o);
    const {
      onDragEnd: l
    } = this.getProps();
    if (l) {
      U.postRender(() => l(r, i));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection: t,
      animationState: n
    } = this.visualElement;
    if (t) {
      t.isAnimationBlocked = false;
    }
    this.endPanSession();
    const {
      dragPropagation: r
    } = this.getProps();
    if (!r && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    if (n) {
      n.setActive("whileDrag", false);
    }
  }
  endPanSession() {
    if (this.panSession) {
      this.panSession.end();
    }
    this.panSession = undefined;
  }
  updateAxis(t, n, r) {
    const {
      drag: i
    } = this.getProps();
    if (!r || !ts(t, i, this.currentDirection)) {
      return;
    }
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    if (this.constraints && this.constraints[t]) {
      o = E3(o, this.constraints[t], this.elastic[t]);
    }
    s.set(o);
  }
  resolveConstraints() {
    var s;
    const {
      dragConstraints: t,
      dragElastic: n
    } = this.getProps();
    const r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (s = this.visualElement.projection) == null ? undefined : s.layout;
    const i = this.constraints;
    if (t && Fn(t)) {
      this.constraints ||= this.resolveRefConstraints();
    } else if (t && r) {
      this.constraints = M3(r.layoutBox, t);
    } else {
      this.constraints = false;
    }
    this.elastic = D3(n);
    if (i !== this.constraints && !Fn(t) && r && this.constraints && !this.hasMutatedConstraints) {
      vt(o => {
        if (this.constraints !== false && this.getAxisMotionValue(o)) {
          this.constraints[o] = R3(r.layoutBox[o], this.constraints[o]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: t,
      onMeasureDragConstraints: n
    } = this.getProps();
    if (!t || !Fn(t)) {
      return false;
    }
    const r = t.current;
    const {
      projection: i
    } = this.visualElement;
    if (!i || !i.layout) {
      return false;
    }
    const s = Uw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = A3(i.layout.layoutBox, s);
    if (n) {
      const l = n(zw(o));
      this.hasMutatedConstraints = !!l;
      if (l) {
        o = Mg(l);
      }
    }
    return o;
  }
  startAnimation(t) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: s,
      dragSnapToOrigin: o,
      onDragTransitionEnd: l
    } = this.getProps();
    const u = this.constraints || {};
    const c = vt(d => {
      if (!ts(d, n, this.currentDirection)) {
        return;
      }
      let f = u && u[d] || {};
      if (o === true || o === d) {
        f = {
          min: 0,
          max: 0
        };
      }
      const h = i ? 200 : 1000000;
      const m = i ? 40 : 10000000;
      const v = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: h,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(d, v);
    });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    Ml(this.visualElement, t);
    return r.start(Zu(t, r, 0, n, this.visualElement, false));
  }
  stopAnimation() {
    vt(t => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`;
    const r = this.visualElement.getProps();
    const i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : undefined) || 0);
  }
  snapToCursor(t) {
    vt(n => {
      const {
        drag: r
      } = this.getProps();
      if (!ts(n, r, this.currentDirection)) {
        return;
      }
      const {
        projection: i
      } = this.visualElement;
      const s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const {
          min: o,
          max: l
        } = i.layout.layoutBox[n];
        const u = s.get() || 0;
        s.set(t[n] - K(o, l, 0.5) + u);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) {
      return;
    }
    const {
      drag: t,
      dragConstraints: n
    } = this.getProps();
    const {
      projection: r
    } = this.visualElement;
    if (!Fn(n) || !r || !this.constraints) {
      return;
    }
    this.stopAnimation();
    const i = {
      x: 0,
      y: 0
    };
    vt(o => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== false) {
        const u = l.get();
        i[o] = L3({
          min: u,
          max: u
        }, this.constraints[o]);
      }
    });
    const {
      transformTemplate: s
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none";
    if (r.root) {
      r.root.updateScroll();
    }
    r.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    vt(o => {
      if (!ts(o, t, null)) {
        return;
      }
      const l = this.getAxisMotionValue(o);
      const {
        min: u,
        max: c
      } = this.constraints[o];
      l.set(K(u, c, i[o]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) {
      return;
    }
    I3.set(this.visualElement, this);
    const t = this.visualElement.current;
    const n = qr(t, "pointerdown", c => {
      const {
        drag: d,
        dragListener: f = true
      } = this.getProps();
      const h = c.target;
      const m = h !== t && ww(h);
      if (d && f && !m) {
        this.start(c);
      }
    });
    let r;
    const i = () => {
      const {
        dragConstraints: c
      } = this.getProps();
      if (Fn(c) && c.current) {
        this.constraints = this.resolveRefConstraints();
        r ||= B3(t, c.current, () => this.scalePositionWithinConstraints());
      }
    };
    const {
      projection: s
    } = this.visualElement;
    const o = s.addEventListener("measure", i);
    if (s && !s.layout) {
      if (s.root) {
        s.root.updateScroll();
      }
      s.updateLayout();
    }
    U.read(i);
    const l = ki(window, "resize", () => this.scalePositionWithinConstraints());
    const u = s.addEventListener("didUpdate", ({
      delta: c,
      hasLayoutChanged: d
    }) => {
      if (this.isDragging && d) {
        vt(f => {
          const h = this.getAxisMotionValue(f);
          if (h) {
            this.originPoint[f] += c[f].translate;
            h.set(h.get() + c[f].translate);
          }
        });
        this.visualElement.render();
      }
    });
    return () => {
      l();
      n();
      o();
      if (u) {
        u();
      }
      if (r) {
        r();
      }
    };
  }
  getProps() {
    const t = this.visualElement.getProps();
    const {
      drag: n = false,
      dragDirectionLock: r = false,
      dragPropagation: i = false,
      dragConstraints: s = false,
      dragElastic: o = Fl,
      dragMomentum: l = true
    } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l
    };
  }
}
function Uf(e) {
  let t = true;
  return () => {
    if (t) {
      t = false;
      return;
    }
    e();
  };
}
function B3(e, t, n) {
  const r = Zd(e, Uf(n));
  const i = Zd(t, Uf(n));
  return () => {
    r();
    i();
  };
}
function ts(e, t, n) {
  return (t === true || t === e) && (n === null || n === e);
}
function O3(e, t = 10) {
  let n = null;
  if (Math.abs(e.y) > t) {
    n = "y";
  } else if (Math.abs(e.x) > t) {
    n = "x";
  }
  return n;
}
class F3 extends hn {
  constructor(t) {
    super(t);
    this.removeGroupControls = et;
    this.removeListeners = et;
    this.controls = new V3(t);
  }
  mount() {
    const {
      dragControls: t
    } = this.node.getProps();
    if (t) {
      this.removeGroupControls = t.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || et;
  }
  update() {
    const {
      dragControls: t
    } = this.node.getProps();
    const {
      dragControls: n
    } = this.node.prevProps || {};
    if (t !== n) {
      this.removeGroupControls();
      if (t) {
        this.removeGroupControls = t.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const ya = e => (t, n) => {
  if (e) {
    U.update(() => e(t, n), false, true);
  }
};
class z3 extends hn {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = et;
  }
  onPointerDown(t) {
    this.session = new ly(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ay(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i
    } = this.node.getProps();
    return {
      onSessionStart: ya(t),
      onStart: ya(n),
      onMove: ya(r),
      onEnd: (s, o) => {
        delete this.session;
        if (i) {
          U.postRender(() => i(s, o));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = qr(this.node.current, "pointerdown", t => this.onPointerDown(t));
  }
  update() {
    if (this.session) {
      this.session.updateHandlers(this.createPanHandlers());
    }
  }
  unmount() {
    this.removePointerDownListener();
    if (this.session) {
      this.session.end();
    }
  }
}
let va = false;
class _3 extends j.Component {
  componentDidMount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: i
    } = this.props;
    const {
      projection: s
    } = t;
    if (s) {
      if (n.group) {
        n.group.add(s);
      }
      if (r && r.register && i) {
        r.register(s);
      }
      if (va) {
        s.root.didUpdate();
      }
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    ks.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(t) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: i,
      isPresent: s
    } = this.props;
    const {
      projection: o
    } = r;
    if (o) {
      o.isPresent = s;
      if (t.layoutDependency !== n) {
        o.setOptions({
          ...o.options,
          layoutDependency: n
        });
      }
      va = true;
      if (i || t.layoutDependency !== n || n === undefined || t.isPresent !== s) {
        o.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (t.isPresent !== s) {
        if (s) {
          o.promote();
        } else if (!o.relegate()) {
          U.postRender(() => {
            const l = o.getStack();
            if (!l || !l.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      visualElement: t,
      layoutAnchor: n
    } = this.props;
    const {
      projection: r
    } = t;
    if (r) {
      r.options.layoutAnchor = n;
      r.root.didUpdate();
      tc.postRender(() => {
        if (!r.currentAnimation && r.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r
    } = this.props;
    const {
      projection: i
    } = t;
    va = true;
    if (i) {
      i.scheduleCheckAfterUnmount();
      if (n && n.group) {
        n.group.remove(i);
      }
      if (r && r.deregister) {
        r.deregister(i);
      }
    }
  }
  safeToRemove() {
    const {
      safeToRemove: t
    } = this.props;
    if (t) {
      t();
    }
  }
  render() {
    return null;
  }
}
function cy(e) {
  const [t, n] = Y4();
  const r = j.useContext(Cm);
  return a.jsx(_3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: j.useContext(sy),
    isPresent: t,
    safeToRemove: n
  });
}
const W3 = {
  pan: {
    Feature: z3
  },
  drag: {
    Feature: F3,
    ProjectionNode: Zg,
    MeasureLayout: cy
  }
};
function Hf(e, t, n) {
  const {
    props: r
  } = e;
  if (e.animationState && r.whileHover) {
    e.animationState.setActive("whileHover", n === "Start");
  }
  const i = "onHover" + n;
  const s = r[i];
  if (s) {
    U.postRender(() => s(t, Ai(t)));
  }
}
class U3 extends hn {
  mount() {
    const {
      current: t
    } = this.node;
    if (t) {
      this.unmount = gw(t, (n, r) => {
        Hf(this.node, r, "Start");
        return i => Hf(this.node, i, "End");
      });
    }
  }
  unmount() {}
}
class H3 extends hn {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let t = false;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = true;
    }
    if (!!t && !!this.node.animationState) {
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
  }
  onBlur() {
    if (!!this.isActive && !!this.node.animationState) {
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
  }
  mount() {
    this.unmount = Ni(ki(this.node.current, "focus", () => this.onFocus()), ki(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
}
function $f(e, t, n) {
  const {
    props: r
  } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) {
    return;
  }
  if (e.animationState && r.whileTap) {
    e.animationState.setActive("whileTap", n === "Start");
  }
  const i = "onTap" + (n === "End" ? "" : n);
  const s = r[i];
  if (s) {
    U.postRender(() => s(t, Ai(t)));
  }
}
class $3 extends hn {
  mount() {
    const {
      current: t
    } = this.node;
    if (!t) {
      return;
    }
    const {
      globalTapTarget: n,
      propagate: r
    } = this.node.props;
    this.unmount = jw(t, (i, s) => {
      $f(this.node, s, "Start");
      return (o, {
        success: l
      }) => $f(this.node, o, l ? "End" : "Cancel");
    }, {
      useGlobalTarget: n,
      stopPropagation: (r == null ? undefined : r.tap) === false
    });
  }
  unmount() {}
}
const zl = new WeakMap();
const xa = new WeakMap();
const K3 = e => {
  const t = zl.get(e.target);
  if (t) {
    t(e);
  }
};
const G3 = e => {
  e.forEach(K3);
};
function Y3({
  root: e,
  ...t
}) {
  const n = e || document;
  if (!xa.has(n)) {
    xa.set(n, {});
  }
  const r = xa.get(n);
  const i = JSON.stringify(t);
  r[i] ||= new IntersectionObserver(G3, {
    root: e,
    ...t
  });
  return r[i];
}
function X3(e, t, n) {
  const r = Y3(t);
  zl.set(e, n);
  r.observe(e);
  return () => {
    zl.delete(e);
    r.unobserve(e);
  };
}
const Q3 = {
  some: 0,
  all: 1
};
class Z3 extends hn {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    var u;
    if ((u = this.stopObserver) != null) {
      u.call(this);
    }
    const {
      viewport: t = {}
    } = this.node.getProps();
    const {
      root: n,
      margin: r,
      amount: i = "some",
      once: s
    } = t;
    const o = {
      root: n ? n.current : undefined,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Q3[i]
    };
    const l = c => {
      const {
        isIntersecting: d
      } = c;
      if (this.isInView === d || (this.isInView = d, s && !d && this.hasEnteredView)) {
        return;
      }
      if (d) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", d);
      }
      const {
        onViewportEnter: f,
        onViewportLeave: h
      } = this.node.getProps();
      const m = d ? f : h;
      if (m) {
        m(c);
      }
    };
    this.stopObserver = X3(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const {
      props: t,
      prevProps: n
    } = this.node;
    if (["amount", "margin", "root"].some(q3(t, n))) {
      this.startObserver();
    }
  }
  unmount() {
    var t;
    if ((t = this.stopObserver) != null) {
      t.call(this);
    }
    this.hasEnteredView = false;
    this.isInView = false;
  }
}
function q3({
  viewport: e = {}
}, {
  viewport: t = {}
} = {}) {
  return n => e[n] !== t[n];
}
const J3 = {
  inView: {
    Feature: Z3
  },
  tap: {
    Feature: $3
  },
  focus: {
    Feature: H3
  },
  hover: {
    Feature: U3
  }
};
const ek = {
  layout: {
    ProjectionNode: Zg,
    MeasureLayout: cy
  }
};
const tk = {
  ...b3,
  ...J3,
  ...W3,
  ...ek
};
const R = x3(tk, w3);
function I({
  children: e,
  className: t,
  style: n,
  delayMs: r = 0,
  variant: i = "fadeUp"
}) {
  const s = j.useRef(null);
  const [o, l] = j.useState(false);
  j.useEffect(() => {
    const d = s.current;
    if (!d) {
      return;
    }
    const f = new IntersectionObserver(h => {
      h.forEach(m => {
        if (m.isIntersecting) {
          l(true);
        }
      });
    }, {
      threshold: 0.12
    });
    f.observe(d);
    return () => f.disconnect();
  }, []);
  const u = i === "fadeUp" ? "opacity-0 translate-y-4" : "opacity-0";
  const c = i === "fadeUp" ? "opacity-100 translate-y-0" : "opacity-100";
  return a.jsx("div", {
    ref: s,
    className: Yr("transition duration-700 ease-out will-change-transform", o ? c : u, t),
    style: {
      transitionDelay: `${r}ms`,
      ...n
    },
    children: e
  });
}
const ue = "#000000";
const tt = "#e26991";
const nk = ["/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.36.28.jpeg", "/assets/images/Home/our partners images/Image4.jpeg", "/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.34.44.jpeg", "/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.36.10.jpeg", "/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.35.54.jpeg", "/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.35.56.jpeg", "/assets/images/Home/our partners images/WhatsApp Image 2026-01-24 at 14.36.04.jpeg"];
function rk({
  size: e = 64,
  color: t = tt
}) {
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.rect, {
      x: "22",
      y: "10",
      width: "20",
      height: "10",
      rx: "4",
      stroke: t,
      strokeWidth: "3",
      fill: "none",
      variants: {
        rest: {
          scaleY: 1
        },
        hover: {
          scaleY: 1.15
        }
      },
      style: {
        originY: "100%"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 18
      }
    }), a.jsx(R.rect, {
      x: "8",
      y: "20",
      width: "48",
      height: "34",
      rx: "4",
      stroke: t,
      strokeWidth: "3",
      fill: "none",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -3
        }
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }), a.jsx(R.line, {
      x1: "32",
      y1: "20",
      x2: "32",
      y2: "54",
      stroke: t,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      variants: {
        rest: {
          scaleY: 1,
          opacity: 0.4
        },
        hover: {
          scaleY: 1,
          opacity: 1
        }
      },
      transition: {
        duration: 0.25
      }
    }), a.jsx(R.line, {
      x1: "8",
      y1: "37",
      x2: "56",
      y2: "37",
      stroke: t,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      variants: {
        rest: {
          opacity: 0.3
        },
        hover: {
          opacity: 1
        }
      },
      transition: {
        duration: 0.25
      }
    })]
  });
}
function ik({
  size: e = 64,
  color: t = tt
}) {
  const n = [{
    x: 10,
    h: 28,
    delay: 0
  }, {
    x: 24,
    h: 40,
    delay: 0.06
  }, {
    x: 38,
    h: 20,
    delay: 0.12
  }, {
    x: 52,
    h: 34,
    delay: 0.18
  }];
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [n.map(r => a.jsx(R.rect, {
      x: r.x,
      y: 54 - r.h,
      width: "10",
      height: r.h,
      rx: "2",
      fill: t,
      variants: {
        rest: {
          scaleY: 1,
          opacity: 0.7
        },
        hover: {
          scaleY: 1.08,
          opacity: 1
        }
      },
      style: {
        originY: "100%"
      },
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 16,
        delay: r.delay
      }
    }, r.x)), a.jsx(R.line, {
      x1: "6",
      y1: "54",
      x2: "62",
      y2: "54",
      stroke: t,
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), a.jsx(R.polyline, {
      points: "15,46 29,34 43,42 57,28",
      stroke: t,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      strokeDasharray: "60",
      variants: {
        rest: {
          strokeDashoffset: 60
        },
        hover: {
          strokeDashoffset: 0
        }
      },
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    })]
  });
}
function sk({
  size: e = 64,
  color: t = tt
}) {
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 64 64",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.path, {
      d: "M32 6 L54 16 L54 34 C54 46 43 55 32 58 C21 55 10 46 10 34 L10 16 Z",
      stroke: t,
      strokeWidth: "3",
      fill: "none",
      strokeLinejoin: "round",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.06
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18
      }
    }), a.jsx(R.path, {
      d: "M22 32 L29 39 L42 26",
      stroke: t,
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "30",
      variants: {
        rest: {
          strokeDashoffset: 30
        },
        hover: {
          strokeDashoffset: 0
        }
      },
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    })]
  });
}
function ok({
  color: e = tt
}) {
  return a.jsx(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: a.jsx(R.path, {
      d: "M16 28 C16 28 4 20 4 12 C4 8 7.6 5 12 6.4 C13.6 7 15 8.2 16 9.6 C17 8.2 18.4 7 20 6.4 C24.4 5 28 8 28 12 C28 20 16 28 16 28Z",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      strokeLinejoin: "round",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.15
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 14
      }
    })
  });
}
function ak({
  color: e = tt
}) {
  return a.jsxs(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.rect, {
      x: "4",
      y: "10",
      width: "24",
      height: "18",
      rx: "2",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -2
        }
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18
      }
    }), a.jsx(R.path, {
      d: "M11 10 V7 C11 5.9 11.9 5 13 5 H19 C20.1 5 21 5.9 21 7 V10",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      strokeLinecap: "round"
    }), a.jsx(R.line, {
      x1: "4",
      y1: "19",
      x2: "28",
      y2: "19",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round",
      variants: {
        rest: {
          opacity: 0.3
        },
        hover: {
          opacity: 1
        }
      },
      transition: {
        duration: 0.2
      }
    }), a.jsx(R.line, {
      x1: "16",
      y1: "16",
      x2: "16",
      y2: "22",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round"
    })]
  });
}
function lk({
  color: e = tt
}) {
  return a.jsxs(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.path, {
      d: "M16 28 C16 28 5 21 5 13 C5 9.7 7.7 7 11 7 C12.9 7 14.6 7.9 16 9.4 C17.4 7.9 19.1 7 21 7 C24.3 7 27 9.7 27 13 C27 21 16 28 16 28Z",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.12
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 14
      }
    }), a.jsx(R.path, {
      d: "M13 13 H19 M16 10 V16",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round",
      variants: {
        rest: {
          opacity: 0
        },
        hover: {
          opacity: 1
        }
      },
      transition: {
        duration: 0.25,
        delay: 0.1
      }
    })]
  });
}
function uk({
  color: e = tt
}) {
  return a.jsxs(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.path, {
      d: "M5 20 L8 12 C8.5 10.8 9.7 10 11 10 H21 C22.3 10 23.5 10.8 24 12 L27 20",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      strokeLinecap: "round",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -2
        }
      },
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 16
      }
    }), a.jsx(R.rect, {
      x: "3",
      y: "18",
      width: "26",
      height: "8",
      rx: "2",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -2
        }
      },
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 16
      }
    }), a.jsx(R.circle, {
      cx: "9",
      cy: "27",
      r: "2.5",
      stroke: e,
      strokeWidth: "2",
      fill: "none",
      variants: {
        rest: {
          rotate: 0
        },
        hover: {
          rotate: 180
        }
      },
      transition: {
        duration: 0.5
      }
    }), a.jsx(R.circle, {
      cx: "23",
      cy: "27",
      r: "2.5",
      stroke: e,
      strokeWidth: "2",
      fill: "none",
      variants: {
        rest: {
          rotate: 0
        },
        hover: {
          rotate: 180
        }
      },
      transition: {
        duration: 0.5
      }
    })]
  });
}
function ck({
  color: e = tt
}) {
  return a.jsxs(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.path, {
      d: "M8 20 C8 14.5 11.6 10 16 10 C20.4 10 24 14.5 24 20 C24 23.3 22.3 26.2 19.7 27.6 L19.7 29 L12.3 29 L12.3 27.6 C9.7 26.2 8 23.3 8 20Z",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.08
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 16
      }
    }), a.jsx(R.path, {
      d: "M24 17 L28 15 L27 20",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    }), a.jsx(R.circle, {
      cx: "19",
      cy: "18",
      r: "1.2",
      fill: e,
      variants: {
        rest: {
          opacity: 0.5
        },
        hover: {
          opacity: 1
        }
      }
    }), a.jsx(R.line, {
      x1: "14",
      y1: "10",
      x2: "18",
      y2: "10",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), a.jsx(R.path, {
      d: "M16 3 L16 8",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round",
      variants: {
        rest: {
          y: 0,
          opacity: 0
        },
        hover: {
          y: 3,
          opacity: 1
        }
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    })]
  });
}
function dk({
  color: e = tt
}) {
  return a.jsxs(R.svg, {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [[0, 1, 2].map(t => a.jsx(R.ellipse, {
      cx: "14",
      cy: 24 - t * 5,
      rx: "9",
      ry: "3.5",
      stroke: e,
      strokeWidth: "2.2",
      fill: "none",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -t * 1.5
        }
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 16,
        delay: t * 0.05
      }
    }, t)), [0, 1, 2].map(t => a.jsx(R.line, {
      x1: "5",
      y1: 24 - t * 5,
      x2: "5",
      y2: 27.5 - t * 5,
      stroke: e,
      strokeWidth: "2.2",
      strokeLinecap: "round",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -t * 1.5
        }
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 16,
        delay: t * 0.05
      }
    }, `l${t}`)), [0, 1, 2].map(t => a.jsx(R.line, {
      x1: "23",
      y1: 24 - t * 5,
      x2: "23",
      y2: 27.5 - t * 5,
      stroke: e,
      strokeWidth: "2.2",
      strokeLinecap: "round",
      variants: {
        rest: {
          y: 0
        },
        hover: {
          y: -t * 1.5
        }
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 16,
        delay: t * 0.05
      }
    }, `r${t}`))]
  });
}
function fk({
  size: e = 40,
  color: t = "#ffffff"
}) {
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 40 40",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.path, {
      d: "M20 4 L35 11 L35 23 C35 31 28 37 20 39 C12 37 5 31 5 23 L5 11 Z",
      stroke: t,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinejoin: "round",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.08
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18
      }
    }), a.jsx(R.path, {
      d: "M13 21 L18 26 L27 17",
      stroke: t,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "24",
      variants: {
        rest: {
          strokeDashoffset: 24
        },
        hover: {
          strokeDashoffset: 0
        }
      },
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    })]
  });
}
function hk({
  size: e = 40,
  color: t = "#ffffff"
}) {
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 40 40",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [a.jsx(R.ellipse, {
      cx: "20",
      cy: "20",
      rx: "14",
      ry: "8",
      stroke: t,
      strokeWidth: "2.5",
      fill: "none",
      variants: {
        rest: {
          scaleX: 1
        },
        hover: {
          scaleX: 1.1
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 16
      }
    }), a.jsx(R.circle, {
      cx: "20",
      cy: "20",
      r: "4",
      stroke: t,
      strokeWidth: "2.5",
      fill: "none",
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.3
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 14
      }
    }), a.jsx(R.circle, {
      cx: "20",
      cy: "20",
      r: "1.5",
      fill: t,
      variants: {
        rest: {
          opacity: 0.4
        },
        hover: {
          opacity: 1
        }
      },
      transition: {
        duration: 0.2
      }
    })]
  });
}
function pk({
  size: e = 40,
  color: t = "#ffffff"
}) {
  return a.jsxs(R.svg, {
    width: e,
    height: e,
    viewBox: "0 0 40 40",
    fill: "none",
    initial: "rest",
    whileHover: "hover",
    children: [[14, 9, 4].map((n, r) => a.jsx(R.circle, {
      cx: "20",
      cy: "20",
      r: n,
      stroke: t,
      strokeWidth: "2",
      fill: "none",
      strokeOpacity: 1 - r * 0.25,
      variants: {
        rest: {
          scale: 1,
          opacity: 1 - r * 0.25
        },
        hover: {
          scale: 1 + r * 0.06,
          opacity: 1
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 16,
        delay: r * 0.06
      }
    }, n)), a.jsx(R.circle, {
      cx: "20",
      cy: "20",
      r: "2.5",
      fill: t,
      variants: {
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.4
        }
      },
      style: {
        originX: "50%",
        originY: "50%"
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12
      }
    }), a.jsx(R.line, {
      x1: "20",
      y1: "4",
      x2: "20",
      y2: "8",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), a.jsx(R.line, {
      x1: "20",
      y1: "32",
      x2: "20",
      y2: "36",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), a.jsx(R.line, {
      x1: "4",
      y1: "20",
      x2: "8",
      y2: "20",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), a.jsx(R.line, {
      x1: "32",
      y1: "20",
      x2: "36",
      y2: "20",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round"
    })]
  });
}
const mk = [{
  icon: a.jsx(rk, {
    size: 80
  }),
  title: `Business Investment
 Solutions`,
  description: "Strategic investment solutions designed to help businesses grow sustainably and responsibly.",
  href: "/services/business-investment"
}, {
  icon: a.jsx(ik, {
    size: 80
  }),
  title: `Financial Planning 
Solutions`,
  description: "Personalised financial planning that aligns your income, goals and long-term vision.",
  href: "/services/financial-planning"
}, {
  icon: a.jsx(sk, {
    size: 80
  }),
  title: a.jsxs(a.Fragment, {
    children: ["Insurance & Risk ", a.jsx("br", {}), " Management"]
  }),
  description: a.jsxs(a.Fragment, {
    children: ["Protecting your assets and income through tailored insurance and ", a.jsx("br", {}), "risk solutions."]
  }),
  href: "/services/insurance"
}];
const gk = [{
  icon: a.jsx(ok, {}),
  title: a.jsxs(a.Fragment, {
    children: ["Comprehensive Life ", a.jsx("br", {}), " Cover"]
  }),
  desc: "Delivering financial protection for your loved ones through flexible and client-focused life insurance solutions."
}, {
  icon: a.jsx(ak, {}),
  title: "Structured Business Assurance Solutions",
  desc: "Delivering peace of mind through strategic risk management and continuity planning for businesses and their critical team members."
}, {
  icon: a.jsx(lk, {}),
  title: "Comprehensive Health Assurance",
  desc: "Delivering personalised advice on medical aid and healthcare cover to ensure your health and financial peace of mind."
}, {
  icon: a.jsx(uk, {}),
  title: a.jsxs(a.Fragment, {
    children: ["Trusted Asset ", a.jsx("br", {}), " Protection"]
  }),
  desc: "Offering personalised short-term insurance solutions to keep your assets secure against unforeseen events."
}, {
  icon: a.jsx(ck, {}),
  title: a.jsxs(a.Fragment, {
    children: ["Wealth Solutions for ", a.jsx("br", {}), " Growth"]
  }),
  desc: "Helping you achieve long-term financial growth through tailored investment planning and expert advice."
}, {
  icon: a.jsx(dk, {}),
  title: "Investment Products for the Future",
  desc: "Delivering personalised solutions to build, safeguard and transfer wealth for you and your family."
}];
const Ge = [{
  publication: "IOL News",
  logoBg: "#cc0000",
  logoText: `IOL
News`,
  logoColor: "#ffffff",
  title: "Golf is not a sport, it is business",
  age: "Published January 6, 2023",
  excerpt: "Golf days have largely been the forte of the mainstream (white) business, but it is pleasing that black business is getting on the bandwagon and reaping rewards.",
  href: "https://iol.co.za/sundayindependent/news/2023-01-06-golf-is-not-a-sport-it-is-business/"
}, {
  publication: "PressReader",
  logoBg: "#00b388",
  logoText: "PR",
  logoColor: "#ffffff",
  title: "Financial advisers are crucial to the economy",
  age: "Published May 1, 2022",
  excerpt: "In the era of Bitcoin and conspicuous consumption, many vulnerable investors lose their money at the hands of charlatans posing as financial advisers.",
  href: "https://www.pressreader.com/south-africa/the-sunday-independent/20220501/281792812599319"
}];
const yk = 7;
const Kf = 6;
function vk({
  partners: e
}) {
  const [t, n] = j.useState(0);
  const r = j.useRef(null);
  j.useEffect(() => {
    const s = setInterval(() => {
      n(o => (o + 1) % Kf);
    }, 3000);
    return () => clearInterval(s);
  }, []);
  const i = [...e, ...e].slice(t, t + yk);
  return a.jsxs("section", {
    className: "w-full bg-white py-14 sm:py-16",
    children: [a.jsxs("div", {
      className: "container-shell",
      children: [a.jsxs(I, {
        children: [a.jsx("h3", {
          className: "mbi-heading text-center text-3xl font-bold sm:text-4xl",
          style: {
            color: ue
          },
          children: "Our Partners"
        }), a.jsx("div", {
          className: "mx-auto mt-3 h-1 w-16 rounded-full",
          style: {
            backgroundColor: ue
          }
        })]
      }), a.jsx("div", {
        className: "mt-14 overflow-hidden",
        ref: r,
        children: a.jsx("div", {
          className: "flex items-center justify-center gap-10",
          children: i.map((s, o) => a.jsx("img", {
            src: s,
            alt: `Partner logo ${o + 1}`,
            className: "h-28 w-auto max-w-[180px] object-contain grayscale transition-all duration-500 ease-in-out hover:grayscale-0 hover:scale-110 shrink-0",
            style: {
              animation: "fadeSlideIn 0.6s ease both",
              animationDelay: `${o * 80}ms`
            },
            loading: "lazy",
            onError: l => {
              l.target.style.display = "none";
            }
          }, `${t}-${o}`))
        })
      }), a.jsx("div", {
        className: "mt-10 flex items-center justify-center gap-2",
        children: Array.from({
          length: Kf
        }).map((s, o) => a.jsx("button", {
          onClick: () => n(o),
          "aria-label": `Go to rotation ${o + 1}`,
          className: "h-3 w-3 rounded-full border-2 transition-all duration-300",
          style: {
            backgroundColor: o === t ? ue : "transparent",
            borderColor: o === t ? ue : "#9ca3af",
            transform: o === t ? "scale(1.25)" : "scale(1)"
          }
        }, o))
      })]
    }), a.jsx("style", {
      children: "@keyframes fadeSlideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }"
    })]
  });
}
function xk() {
  const [e, t] = j.useState(false);
  const n = j.useRef(null);
  const [r, i] = j.useState(0);
  j.useEffect(() => {
    if (n.current) {
      i(n.current.scrollHeight);
    }
  }, []);
  return a.jsxs("div", {
    children: [a.jsx("style", {
      children: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap');
        .mbi-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
        .mbi-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; }
        .mbi-serif   { font-family: 'Playfair Display', serif; font-weight: 700; }
        .mbi-justify { text-align: justify; }
      `
    }), a.jsxs("section", {
      className: "relative min-h-[85vh] bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: "url('/assets/images/Home/hero.jpeg')"
      },
      children: [a.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: "rgba(0,0,0,0.52)"
        }
      }), a.jsx("div", {
        className: "container-shell relative flex min-h-[85vh] items-center justify-center pt-24 sm:pt-28 lg:pt-32 text-center",
        children: a.jsxs(I, {
          children: [a.jsx("h1", {
            className: "mbi-heading text-3xl sm:text-4xl lg:text-5xl leading-tight text-white font-bold mx-auto max-w-[1000px]",
            children: "Trusted financial guidance for confident decisions and long-term success"
          }), a.jsx("p", {
            className: "mbi-body mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/90 text-center",
            children: "Helping you navigate financial decisions with clarity, expertise, and a focus on what matters most to you."
          }), a.jsx("div", {
            className: "mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center",
            children: a.jsx(ye, {
              to: "/contact#contact-form",
              children: a.jsx("button", {
                className: "mbi-heading rounded-none px-8 py-4 text-base font-bold text-white hover:opacity-80 transition-opacity w-full sm:w-auto",
                style: {
                  backgroundColor: tt,
                  minWidth: "220px"
                },
                children: "Book a Consultation"
              })
            })
          })]
        })
      })]
    }), a.jsx("div", {
      className: "bg-white border-b border-gray-100",
      children: a.jsxs("div", {
        className: "container-shell py-16",
        children: [a.jsx("div", {
          className: "grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
          children: mk.map(s => a.jsxs("div", {
            className: "flex flex-col items-center px-8 py-10 text-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-none",
            children: [a.jsx("div", {
              className: "flex items-center justify-center",
              style: {
                height: "140px"
              },
              children: a.jsx("div", {
                className: "flex items-center justify-center rounded-lg",
                style: {
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#e2699120"
                },
                children: a.jsx("div", {
                  style: {
                    color: "#e26991"
                  },
                  children: s.icon
                })
              })
            }), a.jsx("h3", {
              className: "mbi-heading mt-6 text-lg font-bold leading-snug whitespace-pre-line min-h-[3.5rem] text-center",
              style: {
                color: ue
              },
              children: s.title
            }), a.jsx("p", {
              className: "mbi-body mt-3 text-base leading-relaxed text-black/60 w-full",
              style: {
                textAlign: "justify"
              },
              children: s.description
            })]
          }, s.href))
        }), a.jsx("div", {
          className: "mt-12 flex justify-center",
          children: a.jsx(ye, {
            to: "/contact#contact-form",
            children: a.jsx("button", {
              className: "mbi-heading rounded-none px-8 py-4 text-base font-bold uppercase tracking-wide text-white hover:opacity-80 transition-opacity",
              style: {
                backgroundColor: ue
              },
              children: "GET IN TOUCH"
            })
          })
        })]
      })
    }), a.jsxs("section", {
      className: "relative py-20 sm:py-24 bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: "url('/assets/images/Home/2ndHero.jpeg')"
      },
      children: [a.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: "rgba(0,0,0,0.55)"
        }
      }), a.jsx("div", {
        className: "container-shell relative text-center",
        children: a.jsxs(I, {
          children: [a.jsx("h2", {
            className: "mbi-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white text-left w-full max-w-[1100px]",
            children: "Trusted Investment Guidance & Financial Services"
          }), a.jsx("p", {
            className: "mbi-body mt-6 text-sm text-white/80 sm:text-base",
            style: {
              textAlign: "justify"
            },
            children: "Matseke Business Investment is an FSCA-authorised Financial Services Provider offering expert financial planning, business assurance, retirement planning, and medical aid solutions. We help individuals and businesses protect their wealth and achieve sustainable financial growth through trusted, personalised advice."
          })]
        })
      })]
    }), a.jsx("section", {
      id: "about",
      className: "bg-white py-16 sm:py-20",
      children: a.jsx("div", {
        className: "container-shell",
        children: a.jsxs("div", {
          className: "grid items-center gap-12 lg:grid-cols-2",
          children: [a.jsxs(I, {
            children: [a.jsx("h2", {
              className: "mbi-heading text-4xl font-bold sm:text-5xl text-left",
              style: {
                color: ue
              },
              children: "About Us"
            }), a.jsxs("p", {
              className: "mbi-body mt-6 text-sm leading-relaxed sm:text-base text-left",
              style: {
                color: ue
              },
              children: ["At Matseke Business Investment (MBI), we believe that the client is the main ingredient of our process. Every financial solution we provide is tailored around your unique goals, circumstances and aspirations.", a.jsx("br", {}), a.jsx("br", {}), "As an FSCA-authorised Financial Services Provider (FSP No. 48618) in South Africa, we deliver expert financial planning, business assurance, retirement planning and medical aid solutions."]
            }), a.jsx("div", {
              ref: n,
              style: {
                overflow: "hidden",
                maxHeight: e ? `${r}px` : "0px",
                opacity: e ? 1 : 0,
                transition: "max-height 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000), opacity 0.5s ease"
              },
              children: a.jsxs("p", {
                className: "mbi-body mt-4 text-sm leading-relaxed sm:text-base text-left",
                style: {
                  color: ue
                },
                children: ["Our approach combines regulatory compliance, industry expertise and a client-first mindset, ensuring advice is transparent, ethical and aligned with your long-term financial wellbeing.", a.jsx("br", {}), a.jsx("br", {}), "We are committed to building lasting relationships with individuals and businesses by protecting wealth, enabling sustainable growth and securing a strong financial future. At MBI, your financial goals are at the heart of everything we do."]
              })
            }), a.jsx("div", {
              className: "mt-8",
              children: a.jsx("button", {
                onClick: () => t(!e),
                className: "mbi-heading rounded-none px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:opacity-80 transition-opacity",
                style: {
                  backgroundColor: ue
                },
                children: e ? "SHOW LESS" : "READ MORE"
              })
            })]
          }), a.jsx(I, {
            delayMs: 120,
            children: a.jsx("div", {
              className: "overflow-hidden shadow-soft",
              children: a.jsx("img", {
                src: "/assets/images/Home/3rdHero.jpeg",
                alt: "Matseke Business Investment team",
                className: "h-[320px] w-full object-cover object-top sm:h-[420px]",
                loading: "lazy"
              })
            })
          })]
        })
      })
    }), a.jsx("section", {
      className: "py-16 sm:py-20",
      style: {
        backgroundColor: ue
      },
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsx(I, {
          children: a.jsxs("div", {
            className: "flex items-start gap-5 mb-12",
            children: [a.jsx("div", {
              className: "mt-1 shrink-0",
              children: a.jsx(fk, {
                size: 40,
                color: "#ffffff"
              })
            }), a.jsxs("div", {
              className: "w-full",
              children: [a.jsx("h3", {
                className: "mbi-heading text-2xl font-bold text-white sm:text-3xl",
                style: {
                  textAlign: "justify"
                },
                children: "Our Credentials"
              }), a.jsx("p", {
                className: "mbi-body mt-3 text-sm leading-relaxed text-white/90 sm:text-base w-full",
                style: {
                  textAlign: "justify"
                },
                children: "Matseke Business Investment (MBI) is an authorised Financial Services Provider in terms of Section 8 of the Financial Advisory and Intermediary Services Act, 2002 (FAIS Act 37 of 2002), regulated by the Financial Sector Conduct Authority (FSCA) under FSP No. 48618. We provide compliant financial and investment advisory services to individuals, professionals, and businesses across South Africa."
              })]
            })]
          })
        }), a.jsxs("div", {
          className: "grid gap-10 sm:grid-cols-2",
          children: [a.jsx(I, {
            children: a.jsxs("div", {
              className: "flex items-start gap-5",
              children: [a.jsx("div", {
                className: "mt-1 shrink-0",
                children: a.jsx(hk, {
                  size: 40,
                  color: "#ffffff"
                })
              }), a.jsxs("div", {
                children: [a.jsx("h3", {
                  className: "mbi-heading text-2xl font-bold text-white sm:text-3xl",
                  style: {
                    textAlign: "justify"
                  },
                  children: "Our Vision"
                }), a.jsx("p", {
                  className: "mbi-body mt-3 text-sm leading-relaxed text-white/90 sm:text-base",
                  style: {
                    textAlign: "justify"
                  },
                  children: "To become a leading financial services provider recognised for integrity, excellence and personalised financial solutions that create lasting value for our clients."
                })]
              })]
            })
          }), a.jsx(I, {
            delayMs: 80,
            children: a.jsxs("div", {
              className: "flex items-start gap-5",
              children: [a.jsx("div", {
                className: "mt-1 shrink-0",
                children: a.jsx(pk, {
                  size: 40,
                  color: "#ffffff"
                })
              }), a.jsxs("div", {
                children: [a.jsx("h3", {
                  className: "mbi-heading text-2xl font-bold text-white sm:text-3xl",
                  style: {
                    textAlign: "justify"
                  },
                  children: "Our Mission"
                }), a.jsx("p", {
                  className: "mbi-body mt-3 text-sm leading-relaxed text-white/90 sm:text-base",
                  style: {
                    textAlign: "justify"
                  },
                  children: "Our mission is to support our clients with trusted financial guidance, meaningful relationships and tailored solutions that help them protect, grow and sustain their wealth."
                })]
              })]
            })
          })]
        })]
      })
    }), a.jsx("section", {
      id: "services",
      className: "bg-white py-16 sm:py-20",
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsxs(I, {
          children: [a.jsx("h2", {
            className: "mbi-heading text-center text-4xl font-bold sm:text-5xl",
            style: {
              color: ue
            },
            children: "Services"
          }), a.jsx("p", {
            className: "mbi-body mt-6 text-xs text-black/60",
            style: {
              textAlign: "justify"
            },
            children: "We deliver professional financial guidance rooted in integrity, expertise and regulatory excellence. We partner with individuals and businesses to protect wealth, enable sustainable growth and build long-term financial security through personalised financial planning, business assurance and retirement solutions. Our client-first approach ensures every recommendation is transparent, compliant and aligned with your financial goals."
          })]
        }), a.jsx("div", {
          className: "mt-12 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 items-start",
          children: gk.map((s, o) => a.jsx(I, {
            delayMs: o * 60,
            children: a.jsxs("div", {
              className: "flex flex-col",
              children: [a.jsxs("div", {
                className: "flex items-center gap-4",
                children: [a.jsx("div", {
                  className: "flex shrink-0 items-center justify-center rounded-lg",
                  style: {
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#e2699120"
                  },
                  children: a.jsx("div", {
                    style: {
                      color: "#e26991"
                    },
                    children: s.icon
                  })
                }), a.jsx("h3", {
                  className: "mbi-heading text-base font-bold leading-snug text-left",
                  style: {
                    color: ue
                  },
                  children: s.title
                })]
              }), a.jsx("p", {
                className: "mbi-body mt-3 text-xs leading-relaxed text-black/60 pl-[72px]",
                style: {
                  textAlign: "justify"
                },
                children: s.desc
              })]
            })
          }, o))
        })]
      })
    }), a.jsx("section", {
      id: "news",
      className: "bg-white py-16 sm:py-20",
      style: {
        borderTop: "1px solid #f3f4f6"
      },
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsx(I, {
          children: a.jsxs("div", {
            className: "flex items-end justify-between pb-6 mb-10",
            children: [a.jsx("p", {
              className: "mbi-body text-xs uppercase tracking-widest",
              style: {
                color: "#4b5563"
              },
              children: "Press & Media"
            }), a.jsxs("span", {
              className: "mbi-body text-xs pb-1",
              style: {
                color: "#4b5563"
              },
              children: [Ge.length, " ", Ge.length === 1 ? "article" : "articles"]
            })]
          })
        }), Ge.length > 0 && a.jsx(I, {
          children: a.jsx("a", {
            href: Ge[0].href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group block pb-10 mb-10",
            children: a.jsxs("div", {
              className: "grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start",
              children: [a.jsx("div", {
                className: "flex shrink-0 items-center justify-center",
                style: {
                  width: "56px",
                  height: "56px",
                  backgroundColor: Ge[0].logoBg,
                  padding: "6px"
                },
                children: a.jsx("span", {
                  className: "mbi-heading",
                  style: {
                    fontSize: "10px",
                    fontWeight: 700,
                    color: Ge[0].logoColor,
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    lineHeight: 1.2
                  },
                  children: Ge[0].logoText
                })
              }), a.jsxs("div", {
                children: [a.jsxs("div", {
                  className: "flex items-center gap-3 mb-3",
                  children: [a.jsx("p", {
                    className: "mbi-heading text-xs font-bold",
                    style: {
                      color: ue
                    },
                    children: Ge[0].publication
                  }), a.jsx("span", {
                    style: {
                      color: "#9ca3af"
                    },
                    children: "·"
                  }), a.jsx("p", {
                    className: "mbi-body text-xs",
                    style: {
                      color: "#4b5563"
                    },
                    children: Ge[0].age
                  })]
                }), a.jsx("h3", {
                  className: "mbi-serif text-xl font-bold leading-snug sm:text-2xl group-hover:opacity-70 transition-opacity",
                  style: {
                    color: ue,
                    textAlign: "justify"
                  },
                  children: Ge[0].title
                }), a.jsx("p", {
                  className: "mbi-body mt-3 text-sm leading-relaxed italic",
                  style: {
                    color: "#374151",
                    textAlign: "justify"
                  },
                  children: Ge[0].excerpt
                }), a.jsxs("span", {
                  className: "mbi-heading mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity group-hover:opacity-70",
                  style: {
                    color: tt
                  },
                  children: ["Read Article", a.jsx("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: a.jsx("path", {
                      d: "M2 10L10 2M10 2H4M10 2V8",
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  })]
                })]
              })]
            })
          })
        }), Ge.slice(1).map((s, o) => a.jsx(I, {
          delayMs: o * 80,
          children: a.jsx("a", {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group block pb-10 mb-10",
            children: a.jsxs("div", {
              className: "grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start",
              children: [a.jsx("div", {
                className: "flex shrink-0 items-center justify-center",
                style: {
                  width: "56px",
                  height: "56px",
                  backgroundColor: s.logoBg,
                  padding: "6px"
                },
                children: a.jsx("span", {
                  className: "mbi-heading",
                  style: {
                    fontSize: "10px",
                    fontWeight: 700,
                    color: s.logoColor,
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    lineHeight: 1.2
                  },
                  children: s.logoText
                })
              }), a.jsxs("div", {
                children: [a.jsxs("div", {
                  className: "flex items-center gap-3 mb-3",
                  children: [a.jsx("p", {
                    className: "mbi-heading text-xs font-bold",
                    style: {
                      color: ue
                    },
                    children: s.publication
                  }), a.jsx("span", {
                    style: {
                      color: "#9ca3af"
                    },
                    children: "·"
                  }), a.jsx("p", {
                    className: "mbi-body text-xs",
                    style: {
                      color: "#4b5563"
                    },
                    children: s.age
                  })]
                }), a.jsx("h3", {
                  className: "mbi-serif text-xl font-bold leading-snug sm:text-2xl group-hover:opacity-70 transition-opacity",
                  style: {
                    color: ue,
                    textAlign: "justify"
                  },
                  children: s.title
                }), a.jsx("p", {
                  className: "mbi-body mt-3 text-sm leading-relaxed italic",
                  style: {
                    color: "#374151",
                    textAlign: "justify"
                  },
                  children: s.excerpt
                }), a.jsxs("span", {
                  className: "mbi-heading mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity group-hover:opacity-70",
                  style: {
                    color: tt
                  },
                  children: ["Read Article", a.jsx("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: a.jsx("path", {
                      d: "M2 10L10 2M10 2H4M10 2V8",
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  })]
                })]
              })]
            })
          })
        }, `${s.title}-${o}`))]
      })
    }), a.jsx(vk, {
      partners: nk
    }), a.jsxs("section", {
      className: "relative overflow-hidden py-36 sm:py-44 bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: "url('/assets/images/Home/lp.jpeg')"
      },
      children: [a.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: "rgba(0,0,0,0.35)"
        }
      }), a.jsxs("div", {
        className: "container-shell relative flex flex-col items-center gap-8 text-center",
        children: [a.jsx(I, {
          children: a.jsx("h2", {
            className: "mbi-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl",
            children: "Empower Your Financial Decisions"
          })
        }), a.jsx(I, {
          delayMs: 100,
          children: a.jsx(ye, {
            to: "/contact#contact-form",
            children: a.jsx("button", {
              className: "mbi-heading rounded-none px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:opacity-80 transition-opacity",
              style: {
                backgroundColor: ue
              },
              children: "Book a meeting with our trusted advisory team"
            })
          })
        })]
      })]
    })]
  });
}
const wk = "inline-flex items-center justify-center gap-2 rounded-none font-semibold transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 [font-family:'Montserrat',sans-serif]";
const kk = {
  primary: "bg-black text-white hover:bg-black/80",
  light: "bg-white text-black hover:bg-black/5",
  outline: "border border-black text-black hover:bg-black/10"
};
const jk = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};
function dy({
  className: e,
  variant: t = "primary",
  size: n = "md",
  ...r
}) {
  return a.jsx("button", {
    className: Yr(wk, kk[t], jk[n], e),
    ...r
  });
}
function Sk(e) {
  return Se({
    attr: {
      viewBox: "0 0 640 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"
      },
      child: []
    }]
  })(e);
}
function _l(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
      },
      child: []
    }]
  })(e);
}
function bk(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
      },
      child: []
    }]
  })(e);
}
function Ck(e) {
  return Se({
    attr: {
      viewBox: "0 0 640 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
      },
      child: []
    }]
  })(e);
}
function Tk(e) {
  return Se({
    attr: {
      viewBox: "0 0 576 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
      },
      child: []
    }]
  })(e);
}
function Pk(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"
      },
      child: []
    }]
  })(e);
}
function Nk(e) {
  return Se({
    attr: {
      viewBox: "0 0 640 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
      },
      child: []
    }]
  })(e);
}
function fy(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
      },
      child: []
    }]
  })(e);
}
function Ek(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
      },
      child: []
    }]
  })(e);
}
function Mk(e) {
  return Se({
    attr: {
      viewBox: "0 0 496 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
      },
      child: []
    }]
  })(e);
}
function Ak(e) {
  return Se({
    attr: {
      viewBox: "0 0 448 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
      },
      child: []
    }]
  })(e);
}
function Lk(e) {
  return Se({
    attr: {
      viewBox: "0 0 512 512"
    },
    child: [{
      tag: "path",
      attr: {
        d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
      },
      child: []
    }]
  })(e);
}
function Rk() {
  return a.jsxs("div", {
    children: [a.jsx("style", {
      children: `
        .mbi-body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          text-align: justify;
        }
        p {
          text-align: justify;
        }
      `
    }), a.jsxs("section", {
      className: "relative",
      children: [a.jsx("div", {
        className: "absolute inset-0 -z-10 bg-cover bg-center",
        style: {
          backgroundImage: "url('/assets/images/about us/2nd background pic.png')"
        }
      }), a.jsx("div", {
        className: "absolute inset-0 -z-10 bg-black/40"
      }), a.jsx("div", {
        className: "container-shell py-16 sm:py-24",
        children: a.jsxs(I, {
          children: [a.jsxs("h1", {
            className: "font-display text-5xl text-white sm:text-6xl lg:text-7xl",
            children: ["About", a.jsx("br", {}), "Us"]
          }), a.jsx("div", {
            className: "mt-3 h-1 w-12 rounded-full bg-white"
          })]
        })
      })]
    }), a.jsx("section", {
      className: "container-shell py-14 sm:py-16",
      children: a.jsxs("div", {
        className: "grid items-center gap-10 lg:grid-cols-2",
        children: [a.jsxs(I, {
          children: [a.jsx("h2", {
            className: "font-display text-3xl font-bold text-brand-pink sm:text-4xl",
            children: "About Us"
          }), a.jsx("p", {
            className: "mbi-body mt-6 text-sm leading-relaxed text-brand-pink/80 sm:text-base",
            children: "Welcome to Matseke Business Investment, an FSCA-authorised Financial Services Provider in South Africa, offering financial planning, business assurance, retirement, medical aid, investment, and endowment fund solutions. We partner with individuals and businesses to provide trusted, personalised advice that helps secure, grow, and protect their financial future."
          }), a.jsx("div", {
            className: "mt-8",
            children: a.jsx(ye, {
              to: "/contact",
              children: a.jsx(dy, {
                size: "lg",
                children: "GET IN TOUCH"
              })
            })
          })]
        }), a.jsx(I, {
          delayMs: 120,
          children: a.jsx("div", {
            className: "overflow-hidden rounded-2xl shadow-soft",
            children: a.jsx("img", {
              src: "/assets/images/about us/1st image.jpeg",
              alt: "Team and advisory services",
              className: "h-[320px] w-full object-cover sm:h-[420px]",
              loading: "lazy"
            })
          })
        })]
      })
    }), a.jsx("section", {
      className: "bg-brand-pink py-12 sm:py-14",
      children: a.jsx("div", {
        className: "container-shell",
        children: a.jsxs(I, {
          children: [a.jsx("h3", {
            className: "text-center font-display text-3xl font-bold text-white sm:text-4xl",
            children: "Trusted Investment Guidance and Services"
          }), a.jsx("p", {
            className: "mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/90 sm:text-base",
            style: {
              textAlign: "center"
            },
            children: "We are a trusted investment and financial advisory firm providing tailored solutions to individuals, entrepreneurs, and corporates."
          })]
        })
      })
    }), a.jsxs("section", {
      className: "container-shell py-14 sm:py-16",
      children: [a.jsx(I, {
        children: a.jsx("h3", {
          className: "text-center font-display text-3xl font-bold text-brand-pink sm:text-4xl",
          children: "Our Team"
        })
      }), a.jsx(I, {
        delayMs: 80,
        children: a.jsx("div", {
          className: "mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl shadow-soft",
          children: a.jsx("img", {
            src: "/assets/images/about us/3rd background pic.png",
            alt: "Our team",
            className: "h-[340px] w-full object-cover sm:h-[420px]",
            loading: "lazy"
          })
        })
      }), a.jsx(I, {
        delayMs: 120,
        children: a.jsx("p", {
          className: "mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-brand-pink/80 sm:text-base mbi-body",
          children: "Our team is made up of experienced professionals who are experts in their respective fields, dedicated to delivering trusted financial advice and building long-term relationships that support sustainable wealth and financial security."
        })
      })]
    }), a.jsx("section", {
      className: "bg-brand-pink py-14 sm:py-16",
      children: a.jsx("div", {
        className: "container-shell",
        children: a.jsx("div", {
          className: "grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
          children: [{
            icon: a.jsx(Ak, {
              className: "h-14 w-14 text-white"
            }),
            title: "Integrity & Trust",
            desc: "We operate with transparency, ethics and accountability."
          }, {
            icon: a.jsx(fy, {
              className: "h-14 w-14 text-white"
            }),
            title: "Client-Centric Approach",
            desc: "Every solution is tailored to our clients' unique needs and goals."
          }, {
            icon: a.jsx(_l, {
              className: "h-14 w-14 text-white"
            }),
            title: `Compliance &
Transparency`,
            desc: "Fully compliant advisory services aligned with regulatory standards."
          }].map((e, t) => a.jsx(I, {
            delayMs: t * 80,
            children: a.jsxs("div", {
              className: "flex flex-col items-center px-8 py-10 text-center text-white",
              children: [a.jsx("div", {
                className: "flex h-20 items-center justify-center",
                children: e.icon
              }), a.jsx("h4", {
                className: "mt-6 text-lg font-bold whitespace-pre-line",
                children: e.title
              }), a.jsx("p", {
                className: "mt-3 text-sm leading-relaxed text-white/80 max-w-[200px]",
                style: {
                  textAlign: "center"
                },
                children: e.desc
              })]
            })
          }, e.title))
        })
      })
    }), a.jsxs("section", {
      className: "container-shell py-14 sm:py-16",
      children: [a.jsx(I, {
        children: a.jsxs("div", {
          className: "flex items-start gap-5",
          children: [a.jsx(_l, {
            className: "mt-1 h-10 w-10 shrink-0 text-brand-pink"
          }), a.jsxs("div", {
            children: [a.jsx("h3", {
              className: "font-display text-3xl font-bold text-brand-pink sm:text-4xl",
              children: "Our Credentials"
            }), a.jsx("p", {
              className: "mbi-body mt-4 max-w-4xl text-sm leading-relaxed text-brand-pink/80 sm:text-base",
              children: "Matseke Business Investment is an FSCA-authorised Financial Services Provider, offering regulated and compliant financial and investment advisory services to individuals, professionals, and businesses across South Africa. Our team is qualified, experienced, and committed to delivering ethical, transparent, and client-focused financial solutions."
            })]
          })]
        })
      }), a.jsxs("div", {
        className: "mt-12 grid gap-6 md:grid-cols-2",
        children: [a.jsx(I, {
          children: a.jsxs("div", {
            className: "card h-full p-8",
            children: [a.jsxs("div", {
              className: "flex items-center gap-4 mb-4",
              children: [a.jsx(Tk, {
                className: "h-8 w-8 text-brand-pink"
              }), a.jsx("h4", {
                className: "font-display text-2xl font-bold text-brand-pink",
                children: "Our Vision"
              })]
            }), a.jsx("p", {
              className: "mbi-body text-sm leading-relaxed text-brand-pink/80 sm:text-base",
              children: "Matseke Business Investment is an FSCA-authorised Financial Services Provider in South Africa, offering expert guidance in financial planning, business assurance, retirement planning."
            })]
          })
        }), a.jsx(I, {
          delayMs: 120,
          children: a.jsxs("div", {
            className: "card h-full p-8",
            children: [a.jsxs("div", {
              className: "flex items-center gap-4 mb-4",
              children: [a.jsx(Mk, {
                className: "h-8 w-8 text-brand-pink"
              }), a.jsx("h4", {
                className: "font-display text-2xl font-bold text-brand-pink",
                children: "Our Mission"
              })]
            }), a.jsx("p", {
              className: "mbi-body text-sm leading-relaxed text-brand-pink/80 sm:text-base",
              children: "Matseke Business Investment is an FSCA-authorised Financial Services Provider in South Africa, offering expert guidance in financial planning, business assurance, retirement planning."
            })]
          })
        })]
      })]
    })]
  });
}
const Dk = [{
  icon: a.jsx(Sk, {
    className: "h-6 w-6 text-white"
  }),
  title: "Life Cover",
  desc: "Providing financial security for your loved ones through tailored life insurance solutions."
}, {
  icon: a.jsx(Lk, {
    className: "h-6 w-6 text-white"
  }),
  title: "Business Assurance",
  desc: "Protecting businesses and key individuals with structured risk and continuity planning."
}, {
  icon: a.jsx(bk, {
    className: "h-6 w-6 text-white"
  }),
  title: "Health Insurance",
  desc: "Advising on medical aid and healthcare cover to safeguard your well-being."
}, {
  icon: a.jsx(Ek, {
    className: "h-6 w-6 text-white"
  }),
  title: "Short Term Insurance",
  desc: "Cover for assets such as vehicles, property, and business risks against unforeseen events."
}, {
  icon: a.jsx(fy, {
    className: "h-6 w-6 text-white"
  }),
  title: "Wealth Management",
  desc: "Strategic investment solutions aligned to your goals, risk profile, and long-term growth."
}, {
  icon: a.jsx(Pk, {
    className: "h-6 w-6 text-white"
  }),
  title: "Investment Products",
  desc: "Holistic wealth planning and management to build, preserve, and transfer wealth across generations."
}];
const Ik = [{
  icon: a.jsx(Ck, {
    className: "h-14 w-14 text-white"
  }),
  title: "Value for Money",
  desc: "We operate in full alignment with regulatory standards and ethical practices, ensuring transparency, trust, and accountability in every engagement."
}, {
  icon: a.jsx(Nk, {
    className: "h-14 w-14 text-white"
  }),
  title: "Expertise & Professionalism",
  desc: "We are committed to delivering cost-effective, high-quality financial solutions that provide meaningful value and long-term benefits for our clients."
}, {
  icon: a.jsx(_l, {
    className: "h-14 w-14 text-white"
  }),
  title: "Compliance & Integrity",
  desc: "We offer knowledgeable, qualified, and experienced advisory services, delivering sound financial guidance with excellence and confidence."
}];
const Vk = [{
  logo: "/assets/images/services/iol-logo.png",
  source: "IOL News",
  title: "Golf is not a sport, it is business",
  date: "Published 3 years ago",
  excerpt: "Golf days have largely been the forte of the mainstream (white) business, but it is pleasing that black business is getting on the bandwagon and reaping rewards.",
  href: "#"
}, {
  logo: "/assets/images/services/sentinel-logo.png",
  source: "The Sentinel",
  title: "Black firms leverage the business ....",
  date: "Published 3 years ago",
  excerpt: "It becomes challenging to fill up the field with such a high calibre of people. But we are excited because this year we are looking at more than 60 golfers ....",
  href: "#"
}, {
  logo: "/assets/images/services/pressreader-logo.png",
  source: "PressReader",
  title: "Financial advisers are crucial to the economy",
  date: "Published 3 years ago",
  excerpt: "In the era of Bitcoin and conspicuous consumption, many vulnerable investors lose their money at the hands of charlatans posing as financial advisers.",
  href: "#"
}];
function Bk() {
  return a.jsxs("div", {
    children: [a.jsx("style", {
      children: `
        .mbi-body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          text-align: justify;
        }
        p {
          text-align: justify;
        }
      `
    }), a.jsxs("section", {
      className: "relative",
      children: [a.jsx("div", {
        className: "absolute inset-0 -z-10 bg-cover bg-center",
        style: {
          backgroundImage: "url('/assets/images/services/last picture.jpg')"
        }
      }), a.jsx("div", {
        className: "absolute inset-0 -z-10 bg-black/30"
      }), a.jsx("div", {
        className: "container-shell py-16 sm:py-24",
        children: a.jsxs(I, {
          children: [a.jsxs("h1", {
            className: "font-display text-5xl text-white sm:text-6xl lg:text-7xl",
            children: ["Our", a.jsx("br", {}), "Services"]
          }), a.jsx("div", {
            className: "mt-3 h-1 w-12 rounded-full bg-white"
          })]
        })
      })]
    }), a.jsx("section", {
      className: "container-shell py-14 sm:py-16",
      children: a.jsx("div", {
        className: "grid gap-6 sm:grid-cols-3",
        style: {
          alignItems: "stretch"
        },
        children: Ik.map((e, t) => a.jsx(I, {
          delayMs: t * 80,
          style: {
            height: "100%"
          },
          children: a.jsxs("div", {
            className: "flex h-full flex-col items-center rounded-2xl bg-brand-pink p-8 text-center text-white shadow-soft",
            children: [a.jsx("div", {
              className: "flex h-20 items-center justify-center mb-5",
              children: e.icon
            }), a.jsx("h3", {
              className: "text-lg font-bold",
              children: e.title
            }), a.jsx("p", {
              className: "mt-4 text-sm leading-relaxed text-white/85",
              style: {
                textAlign: "center"
              },
              children: e.desc
            })]
          })
        }, e.title))
      })
    }), a.jsxs("section", {
      className: "container-shell pb-14 sm:pb-16",
      children: [a.jsxs(I, {
        children: [a.jsx("h2", {
          className: "text-center font-display text-3xl font-bold text-brand-pink sm:text-4xl",
          children: "Services"
        }), a.jsx("p", {
          className: "mt-3 text-center text-sm text-brand-pink/70 sm:text-base",
          style: {
            textAlign: "center"
          },
          children: "Trusted financial solutions for growth, protection, and long-term security."
        })]
      }), a.jsx("div", {
        className: "mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
        children: Dk.map((e, t) => a.jsx(I, {
          delayMs: t * 70,
          children: a.jsxs("div", {
            className: "flex items-start gap-4",
            children: [a.jsx("div", {
              className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-pink",
              children: e.icon
            }), a.jsxs("div", {
              children: [a.jsx("h4", {
                className: "text-lg font-bold text-brand-pink",
                children: e.title
              }), a.jsx("p", {
                className: "mbi-body mt-2 text-sm leading-relaxed text-black/60",
                children: e.desc
              })]
            })]
          })
        }, e.title))
      })]
    }), a.jsx("section", {
      className: "bg-brand-pink py-14 sm:py-16",
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsxs(I, {
          children: [a.jsx("h2", {
            className: "text-center font-display text-3xl font-bold text-white sm:text-4xl",
            children: "News"
          }), a.jsx("div", {
            className: "mx-auto mt-3 h-1 w-16 rounded-full bg-white"
          })]
        }), a.jsx("div", {
          className: "mt-10 grid gap-6 sm:grid-cols-3",
          style: {
            alignItems: "stretch"
          },
          children: Vk.map((e, t) => a.jsx(I, {
            delayMs: t * 80,
            style: {
              height: "100%"
            },
            children: a.jsxs("div", {
              className: "flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft",
              children: [a.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [a.jsx("img", {
                  src: e.logo,
                  alt: e.source,
                  className: "h-10 w-10 rounded object-contain",
                  onError: n => {
                    n.target.style.display = "none";
                  }
                }), a.jsxs("div", {
                  children: [a.jsx("p", {
                    className: "text-sm font-bold text-black",
                    children: e.title
                  }), a.jsx("p", {
                    className: "text-xs text-black/50",
                    style: {
                      textAlign: "left"
                    },
                    children: e.date
                  })]
                })]
              }), a.jsx("p", {
                className: "mbi-body flex-1 text-sm italic leading-relaxed text-black/50",
                children: e.excerpt
              }), a.jsx("div", {
                className: "mt-6",
                children: a.jsx("a", {
                  href: e.href,
                  children: a.jsx(dy, {
                    size: "md",
                    children: "READ MORE"
                  })
                })
              })]
            })
          }, e.title))
        })]
      })
    }), a.jsxs("section", {
      className: "relative overflow-hidden py-24 sm:py-28",
      style: {
        backgroundImage: "url('/assets/images/services/last picture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: [a.jsx("div", {
        className: "absolute inset-0 bg-black/50"
      }), a.jsxs("div", {
        className: "container-shell relative flex flex-col items-center gap-8 text-center",
        children: [a.jsx(I, {
          children: a.jsx("h2", {
            className: "font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl",
            children: "Partner with us, Now!"
          })
        }), a.jsx(I, {
          delayMs: 100,
          children: a.jsx(ye, {
            to: "/contact",
            children: a.jsx("button", {
              className: "rounded-lg bg-brand-pink px-8 py-4 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90",
              children: "Schedule a Strategy Session"
            })
          })
        })]
      })]
    })]
  });
}
const ce = "#000000";
const Rr = "#e26991";
const ns = 3;
const Gf = 4000;
const Yf = [{
  image: "/assets/images/events/businessCards/c1.jpeg",
  title: "2021 – Johannesburg Country Club",
  desc: "The inaugural MBI Golf Day was hosted in 2021 at the prestigious Country Club Johannesburg, marking the beginning of what has become a valued annual event for the firm and its professional network. The event brought together clients, partners and industry leaders in a relaxed environment where meaningful business connections could develop beyond the boardroom. This first edition laid the foundation for the MBI Golf Day as a platform for collaboration, partnership and the strengthening of long term professional relationships within the MBI community."
}, {
  image: "/assets/images/events/businessCards/C2.jpg",
  title: "2022 – The Club at Steyn City",
  desc: "The second annual MBI Golf Day was hosted in 2022 at The Club at Steyn City, one of Johannesburg's most prestigious golf destinations. The event brought together executives, entrepreneurs and industry professionals for meaningful engagement and business networking on and off the course. The day concluded with a prize giving dinner and wine tasting experience. Supported by partners including Clinix Health Group and EasyDebit, the event continued to strengthen relationships within the MBI community."
}, {
  image: "/assets/images/events/businessCards/C3.png",
  title: "2023 – Pretoria Country Club",
  desc: "The 2023 MBI Golf Day took place at the prestigious Pretoria Country Club, a venue renowned for its immaculate fairways and championship standard facilities. Hosted in partnership with Bonitas Medical Fund, the event brought together executives, entrepreneurs, decision makers and industry leaders. The day provided a premium environment where business conversations could flourish naturally, relationships were strengthened and new partnerships were explored."
}, {
  image: "/assets/images/events/businessCards/C2.jpeg",
  title: "2024 – Kyalami Country Club",
  desc: "The 2024 MBI Golf Day took place at the prestigious Kyalami Country Club, providing the perfect setting for a day of meaningful connection and high level engagement. In partnership with leading industry players, the event welcomed executives, entrepreneurs and decision makers, with a stronger emphasis on interactive networking both on and off the course. The day celebrated milestones within the MBI community, reinforcing MBI's reputation for hosting events that bring together business growth, connection and collaboration."
}, {
  image: "/assets/images/events/businessCards/C5.jpeg",
  title: "2025 – Country Club Johannesburg Woodmead",
  desc: "The 2025 MBI Golf Day was hosted at the esteemed Country Club Johannesburg Woodmead, a course known for its challenging layout and pristine fairways. The venue provided an ideal setting for a day focused on business engagement and relationship building. The event brought together executives, entrepreneurs and decision makers across industries, creating opportunities to connect in a relaxed yet professional environment and explore new partnerships."
}];
const Ok = `
  .mbi-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
  .mbi-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; text-align: justify; }
  p            { text-align: justify; }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
const Fk = j.memo(function ({
  card: t,
  onFlip: n
}) {
  const [r, i] = j.useState(false);
  const s = j.useCallback(() => {
    const o = !r;
    i(o);
    n(o);
  }, [r, n]);
  return a.jsx("div", {
    className: "cursor-pointer",
    style: {
      perspective: "1200px",
      height: "420px"
    },
    onClick: s,
    children: a.jsxs("div", {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 1.1s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        transform: r ? "rotateY(180deg)" : "rotateY(0deg)"
      },
      children: [a.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          overflow: "hidden"
        },
        className: "bg-white shadow-soft",
        children: [a.jsx("img", {
          src: t.image,
          alt: t.title,
          className: "h-[220px] w-full object-cover object-top",
          loading: "lazy",
          decoding: "async",
          width: 400,
          height: 220
        }), a.jsxs("div", {
          className: "p-5",
          children: [a.jsx("h4", {
            className: "mbi-heading font-bold text-sm",
            style: {
              color: ce
            },
            children: t.title
          }), a.jsx("p", {
            className: "mbi-body mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3",
            children: t.desc
          }), a.jsx("p", {
            className: "mbi-heading mt-4 text-xs font-semibold uppercase tracking-widest",
            style: {
              color: ce,
              opacity: 0.5,
              textAlign: "left"
            },
            children: "Click to read more ↗"
          })]
        })]
      }), a.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          backgroundColor: ce,
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        },
        className: "shadow-soft",
        children: [a.jsxs("div", {
          children: [a.jsx("h4", {
            className: "mbi-heading font-bold text-sm text-white mb-3",
            children: t.title
          }), a.jsx("p", {
            className: "mbi-body text-xs leading-relaxed text-white/90",
            children: t.desc
          })]
        }), a.jsx("p", {
          className: "mbi-heading mt-4 text-xs font-semibold uppercase tracking-widest text-white",
          style: {
            opacity: 0.5,
            textAlign: "left"
          },
          children: "Click to go back ↩"
        })]
      })]
    })
  });
});
j.memo(function ({
  event: t,
  index: n
}) {
  const [r, i] = j.useState(false);
  return a.jsx(I, {
    delayMs: n * 100,
    children: a.jsx("div", {
      className: "cursor-pointer",
      style: {
        perspective: "1200px",
        height: "520px"
      },
      onClick: () => i(s => !s),
      children: a.jsxs("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 1.1s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
          transform: r ? "rotateY(180deg)" : "rotateY(0deg)"
        },
        children: [a.jsxs("div", {
          style: {
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "1rem",
            overflow: "hidden"
          },
          className: "shadow-soft bg-white",
          children: [a.jsx("img", {
            src: t.image,
            alt: t.title,
            style: {
              width: "100%",
              height: "280px",
              objectFit: "cover"
            },
            loading: "lazy",
            decoding: "async",
            width: 600,
            height: 280
          }), a.jsxs("div", {
            style: {
              padding: "1.5rem"
            },
            children: [a.jsx("h4", {
              className: "mbi-heading font-bold text-lg",
              style: {
                color: ce
              },
              children: t.title
            }), a.jsx("p", {
              className: "mbi-body mt-3 text-sm leading-relaxed",
              style: {
                color: `${ce}b3`
              },
              children: t.desc
            }), a.jsx("p", {
              className: "mbi-heading mt-5 text-xs font-semibold uppercase tracking-widest",
              style: {
                color: ce,
                opacity: 0.5,
                textAlign: "left"
              },
              children: "Click to read more ↗"
            })]
          })]
        }), a.jsxs("div", {
          style: {
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "1rem",
            overflow: "hidden",
            backgroundColor: ce,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          },
          className: "shadow-soft",
          children: [a.jsx("h4", {
            className: "mbi-heading font-bold text-lg text-white mb-4",
            children: t.title
          }), a.jsx("div", {
            style: {
              overflowY: "auto",
              flex: 1
            },
            children: t.back.map((s, o) => a.jsx("p", {
              className: "mbi-body text-sm leading-relaxed text-white",
              style: {
                marginBottom: o < t.back.length - 1 ? "0.85rem" : 0,
                opacity: 0.92
              },
              children: s
            }, o))
          }), a.jsx("p", {
            className: "mbi-heading mt-4 text-xs font-semibold uppercase tracking-widest text-white",
            style: {
              opacity: 0.5,
              textAlign: "left"
            },
            children: "Click to go back ↩"
          })]
        })]
      })
    })
  });
});
function zk() {
  const e = [{
    label: "Venue",
    sub: "TBC"
  }, {
    label: "Date",
    sub: "11 December 2026"
  }];
  return a.jsx("section", {
    style: {
      backgroundColor: "#ffffff"
    },
    className: "py-20 sm:py-28",
    children: a.jsxs("div", {
      className: "container-shell",
      children: [a.jsx(I, {
        children: a.jsxs("div", {
          className: "flex items-center gap-4 mb-16",
          children: [a.jsx("div", {
            className: "h-px w-8",
            style: {
              backgroundColor: Rr
            }
          }), a.jsx("span", {
            className: "mbi-heading text-xs font-bold uppercase tracking-[0.22em]",
            style: {
              color: Rr
            },
            children: "Upcoming Golf Day"
          }), a.jsx("div", {
            className: "flex-1 h-px",
            style: {
              backgroundColor: "rgba(0,0,0,0.10)"
            }
          })]
        })
      }), a.jsxs("div", {
        className: "grid gap-16 lg:grid-cols-[1fr_380px] lg:items-center",
        children: [a.jsx(I, {
          children: a.jsxs("div", {
            children: [a.jsxs("h2", {
              className: "mbi-heading font-bold",
              style: {
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: ce
              },
              children: ["MBI Annual Golf Day", a.jsx("span", {
                className: "block mt-1",
                style: {
                  color: Rr,
                  fontSize: "0.55em",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  fontFamily: "'Montserrat', sans-serif"
                },
                children: "2026 Edition"
              })]
            }), a.jsxs("div", {
              className: "mt-8 space-y-4 max-w-lg",
              children: [a.jsx("p", {
                className: "mbi-body text-sm leading-relaxed",
                style: {
                  color: "rgba(0,0,0,0.75)"
                },
                children: "Join us at our upcoming Annual Golf Day — an exclusive experience that brings together business leaders, partners and industry professionals in a premium setting designed for meaningful connection."
              }), a.jsx("p", {
                className: "mbi-body text-sm leading-relaxed",
                style: {
                  color: "rgba(0,0,0,0.75)"
                },
                children: "From the first tee to the prize giving dinner, every detail is curated to foster collaboration, strengthen relationships and open new doors. Further details on the venue, programme and registration will be announced soon."
              })]
            }), a.jsx("div", {
              className: "mt-10",
              children: a.jsx(ye, {
                to: "/contact#contact-form",
                children: a.jsx("button", {
                  className: "mbi-heading px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80 rounded-none",
                  style: {
                    backgroundColor: Rr
                  },
                  children: "RSVP"
                })
              })
            })]
          })
        }), a.jsx(I, {
          delayMs: 100,
          children: a.jsxs("div", {
            style: {
              border: "1px solid rgba(0,0,0,0.10)"
            },
            children: [a.jsx("div", {
              className: "px-7 py-5",
              style: {
                borderBottom: "1px solid rgba(0,0,0,0.08)"
              },
              children: a.jsx("p", {
                className: "mbi-heading text-xs font-bold uppercase tracking-[0.2em]",
                style: {
                  color: "rgba(0,0,0,0.35)"
                },
                children: "What to Expect"
              })
            }), e.map((t, n) => a.jsxs("div", {
              className: "flex items-center justify-between px-7 py-5",
              style: {
                borderBottom: n < e.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none"
              },
              children: [a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "mbi-heading text-sm font-bold",
                  style: {
                    letterSpacing: "0.01em",
                    color: ce
                  },
                  children: t.label
                }), a.jsx("p", {
                  className: "mbi-body text-xs mt-0.5",
                  style: {
                    color: Rr,
                    textAlign: "left"
                  },
                  children: t.sub
                })]
              }), a.jsx("div", {
                className: "h-px w-6 shrink-0",
                style: {
                  backgroundColor: "rgba(0,0,0,0.12)"
                }
              })]
            }, t.label)), a.jsx("div", {
              className: "px-7 py-4",
              style: {
                borderTop: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "rgba(226,105,145,0.05)"
              },
              children: a.jsx("p", {
                className: "mbi-body text-xs",
                style: {
                  color: "rgba(0,0,0,0.35)",
                  textAlign: "center"
                },
                children: "Full programme details to be announced"
              })
            })]
          })
        })]
      })]
    })
  });
}
function _k() {
  const [e, t] = j.useState(0);
  const [n, r] = j.useState("next");
  const [i, s] = j.useState(false);
  const [o, l] = j.useState(0);
  const [u, c] = j.useState(false);
  const d = j.useRef(null);
  const f = j.useRef(0);
  const h = j.useRef(false);
  const m = Math.ceil(Yf.length / ns);
  const v = j.useCallback((b, P = "next") => {
    if (!h.current) {
      r(P);
      s(true);
      h.current = true;
      c(false);
      setTimeout(() => {
        l(b);
        t(b);
        f.current = b;
        s(false);
        h.current = false;
      }, 350);
    }
  }, []);
  const x = j.useCallback(() => {
    v((f.current + 1) % m, "next");
  }, [v, m]);
  const k = j.useCallback(() => {
    const b = f.current === 0 ? m - 1 : f.current - 1;
    v(b, "prev");
  }, [v, m]);
  j.useEffect(() => {
    if (u) {
      if (d.current) {
        clearInterval(d.current);
      }
      return;
    }
    d.current = setInterval(x, Gf);
    return () => {
      if (d.current) {
        clearInterval(d.current);
      }
    };
  }, [x, u]);
  const g = j.useCallback(() => {
    if (d.current) {
      clearInterval(d.current);
    }
  }, []);
  const p = j.useCallback(() => {
    if (!u) {
      d.current = setInterval(x, Gf);
    }
  }, [u, x]);
  const y = j.useCallback(b => c(b), []);
  const w = Yf.slice(o * ns, o * ns + ns);
  const S = {
    transition: "opacity 0.35s ease, transform 0.35s ease",
    opacity: i ? 0 : 1,
    transform: i ? `translateX(${n === "next" ? "-40px" : "40px"})` : "translateX(0)"
  };
  return a.jsxs("div", {
    style: {
      backgroundColor: "#ffffff"
    },
    children: [a.jsx("style", {
      children: Ok
    }), a.jsxs("section", {
      className: "relative min-h-[520px] flex items-center overflow-hidden",
      children: [a.jsx("img", {
        src: "/assets/images/events/hero.webp",
        alt: "",
        "aria-hidden": "true",
        fetchPriority: "high",
        loading: "eager",
        decoding: "sync",
        width: 1920,
        height: 520,
        className: "absolute inset-0 w-full h-full object-cover object-center"
      }), a.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: "rgba(0,0,0,0.50)"
        }
      }), a.jsx("div", {
        className: "relative z-10 w-full container-shell py-20 sm:py-32",
        children: a.jsxs(I, {
          children: [a.jsx("h1", {
            className: "mbi-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl text-center",
            children: "Annual Golf Day"
          }), a.jsx("div", {
            className: "mx-auto mt-4 h-0.5 w-16 bg-white"
          }), a.jsx("p", {
            className: "mbi-body mt-6 text-center text-white text-sm sm:text-base max-w-2xl mx-auto",
            style: {
              textAlign: "center",
              textShadow: "0 1px 6px rgba(0,0,0,0.6)"
            },
            children: "A premium business and networking event for leaders, entrepreneurs, and partners."
          })]
        })
      })]
    }), a.jsx(zk, {}), a.jsx("section", {
      className: "py-14 sm:py-20",
      style: {
        backgroundColor: "#ffffff"
      },
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsx(I, {
          children: a.jsx("h2", {
            className: "mbi-heading text-center text-3xl font-bold sm:text-4xl mb-10",
            style: {
              color: ce
            },
            children: "Recent Events"
          })
        }), a.jsxs("div", {
          className: "relative",
          onMouseEnter: g,
          onMouseLeave: p,
          children: [a.jsx("button", {
            onClick: k,
            className: "absolute -left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-colors",
            style: {
              color: ce
            },
            onMouseEnter: b => {
              b.currentTarget.style.backgroundColor = ce;
              b.currentTarget.style.color = "white";
            },
            onMouseLeave: b => {
              b.currentTarget.style.backgroundColor = "white";
              b.currentTarget.style.color = ce;
            },
            "aria-label": "Previous",
            children: a.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 19l-7-7 7-7"
              })
            })
          }), a.jsx("div", {
            className: "grid gap-6 sm:grid-cols-3",
            style: S,
            children: w.map((b, P) => a.jsx(Fk, {
              card: b,
              onFlip: y
            }, `${o}-${P}`))
          }), a.jsx("button", {
            onClick: x,
            className: "absolute -right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transition-colors",
            style: {
              color: ce
            },
            onMouseEnter: b => {
              b.currentTarget.style.backgroundColor = ce;
              b.currentTarget.style.color = "white";
            },
            onMouseLeave: b => {
              b.currentTarget.style.backgroundColor = "white";
              b.currentTarget.style.color = ce;
            },
            "aria-label": "Next",
            children: a.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7"
              })
            })
          })]
        }), a.jsx("div", {
          className: "mt-8 flex justify-center gap-3",
          children: Array.from({
            length: m
          }).map((b, P) => a.jsx("button", {
            onClick: () => v(P, P > f.current ? "next" : "prev"),
            className: "h-3 w-3 rounded-full transition-all duration-300",
            style: {
              backgroundColor: P === e ? ce : "#d1d5db",
              transform: P === e ? "scale(1.25)" : "scale(1)"
            },
            "aria-label": `Page ${P + 1}`
          }, P))
        })]
      })
    }), a.jsxs("section", {
      className: "relative overflow-hidden py-24 sm:py-32",
      children: [a.jsx("img", {
        src: "/assets/images/events/lp.jpeg",
        alt: "",
        "aria-hidden": "true",
        loading: "lazy",
        decoding: "async",
        width: 1920,
        height: 600,
        className: "absolute inset-0 w-full h-full object-cover object-center"
      }), a.jsx("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: "rgba(0,0,0,0.40)"
        }
      }), a.jsxs("div", {
        className: "container-shell relative z-10 flex flex-col items-center gap-6 text-center",
        children: [a.jsxs(I, {
          children: [a.jsx("h2", {
            className: "mbi-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl",
            children: "Join The Next Golf Day"
          }), a.jsx("p", {
            className: "mbi-body mx-auto mt-6 text-white text-sm leading-relaxed sm:text-base max-w-[800px]",
            style: {
              textShadow: "0 1px 4px rgba(0,0,0,0.5)"
            },
            children: "Be part of our next exclusive golf day and experience a unique blend of business, networking, and leisure in an environment designed to build lasting relationships."
          })]
        }), a.jsx(I, {
          delayMs: 100,
          children: a.jsx(ye, {
            to: "/contact#contact-form",
            children: a.jsx("button", {
              className: "mbi-heading mt-2 px-16 py-4 text-sm font-bold uppercase tracking-widest text-white hover:opacity-80 transition-opacity",
              style: {
                backgroundColor: ce
              },
              children: "VIEW DETAILS"
            })
          })
        })]
      })]
    })]
  });
}
const Ae = "#000000";
const Wk = `
  .mbi-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
  .mbi-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; text-align: justify; }
  p            { text-align: justify; }
  .field {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    width: 100%;
    height: 44px;
    padding: 0 1rem;
    outline: none;
    border: 2px solid #0000004d;
    border-radius: 0;
    transition: border-color 0.2s;
    background: white;
  }
  .field:focus { border-color: #000000; }
  textarea.field { height: auto; padding: 0.75rem 1rem; min-height: 130px; }
`;
function Uk() {
  const e = j.useRef(null);
  const [t, n] = j.useState(false);
  j.useEffect(() => {
    const r = e.current;
    if (!r) {
      return;
    }
    const i = new IntersectionObserver(([s]) => {
      if (s.isIntersecting) {
        n(true);
        i.disconnect();
      }
    }, {
      rootMargin: "200px"
    });
    i.observe(r);
    return () => i.disconnect();
  }, []);
  return a.jsxs("div", {
    ref: e,
    className: "flex flex-col h-full",
    children: [a.jsxs("div", {
      className: "flex items-center gap-3 px-4 py-3",
      style: {
        backgroundColor: "#ffffff10",
        borderBottom: "1px solid #ffffff20"
      },
      children: [a.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: a.jsx("path", {
          d: "M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
          fill: "#ffffff99"
        })
      }), a.jsx("span", {
        className: "mbi-heading text-xs uppercase tracking-widest",
        style: {
          color: "#ffffff80"
        },
        children: "Waterfall House, Sandton"
      })]
    }), a.jsx("div", {
      className: "relative overflow-hidden flex-1",
      style: {
        minHeight: "340px"
      },
      children: t ? a.jsx("iframe", {
        title: "Matseke Business Investment — Waterfall House",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7092338011726!2d28.09695197540979!3d-26.043068127176205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573459bb8e449%3A0x310905630e5aaf44!2sWaterfall%20House!5e0!3m2!1sen!2sza!4v1776834661124!5m2!1sen!2sza",
        width: "100%",
        height: "100%",
        style: {
          border: 0,
          display: "block",
          position: "absolute",
          inset: 0
        },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }) : a.jsxs("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
        style: {
          backgroundColor: "#ffffff08"
        },
        children: [a.jsx("svg", {
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          fill: "none",
          children: a.jsx("path", {
            d: "M16 3C11.03 3 7 7.03 7 12c0 7.5 9 17 9 17s9-9.5 9-17c0-4.97-4.03-9-9-9Zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
            fill: "#ffffff30"
          })
        }), a.jsx("span", {
          className: "mbi-body text-xs",
          style: {
            color: "#ffffff40"
          },
          children: "Loading map…"
        })]
      })
    }), a.jsxs("a", {
      href: "https://maps.google.com/?q=Waterfall+House,+Sandton",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "mbi-heading flex items-center justify-between px-4 py-3 text-xs uppercase tracking-widest transition-opacity hover:opacity-70",
      style: {
        backgroundColor: "#ffffff10",
        borderTop: "1px solid #ffffff20",
        color: "#ffffff80"
      },
      children: [a.jsx("span", {
        children: "Open in Google Maps"
      }), a.jsx("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        children: a.jsx("path", {
          d: "M2 10L10 2M10 2H4M10 2V8",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })]
    })]
  });
}
function Hk() {
  const [e, t] = j.useState("idle");
  async function n(r) {
    r.preventDefault();
    t("submitting");
    const i = new FormData(r.currentTarget);
    const s = Object.fromEntries(i);
    try {
      const l = await (await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(s)
      })).json();
      t(l.success ? "success" : "error");
    } catch {
      t("error");
    }
  }
  return a.jsxs("div", {
    children: [a.jsx("style", {
      children: Wk
    }), a.jsxs("section", {
      className: "relative flex items-center justify-center text-center text-white overflow-hidden",
      style: {
        minHeight: "560px"
      },
      children: [a.jsx("img", {
        src: "/assets/images/contact us/Contact.jpeg",
        alt: "",
        "aria-hidden": "true",
        fetchPriority: "high",
        loading: "eager",
        decoding: "sync",
        width: 1920,
        height: 560,
        className: "absolute inset-0 w-full h-full object-cover object-center"
      }), a.jsx("div", {
        className: "absolute inset-0 bg-black/50"
      }), a.jsxs("div", {
        className: "relative z-10 px-6 py-24",
        children: [a.jsx("h1", {
          className: "mbi-heading text-5xl sm:text-6xl font-semibold tracking-tight",
          children: "Contact Us"
        }), a.jsx("div", {
          className: "mx-auto mt-4 h-px w-16 bg-white/60"
        }), a.jsx("p", {
          className: "mbi-body mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-white",
          style: {
            textAlign: "center",
            textShadow: "0 1px 6px rgba(0,0,0,0.6)"
          },
          children: "We are a trusted investment and financial advisory firm providing tailored solutions to individuals, entrepreneurs, and corporates."
        })]
      })]
    }), a.jsx("section", {
      id: "contact-form",
      className: "bg-white",
      children: a.jsx("div", {
        className: "container-shell py-14 sm:py-16",
        children: a.jsxs("div", {
          className: "grid gap-10 lg:grid-cols-2",
          children: [a.jsx(I, {
            children: a.jsxs("div", {
              className: "card p-8",
              children: [a.jsx("h2", {
                className: "mbi-heading text-3xl font-bold",
                style: {
                  color: Ae
                },
                children: "Send us a message"
              }), a.jsxs("form", {
                className: "mt-6 grid gap-4",
                onSubmit: n,
                children: [a.jsx("input", {
                  type: "hidden",
                  name: "access_key",
                  value: "d98e7852-5f27-4379-b698-2ce9d4b90834"
                }), a.jsxs("div", {
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [a.jsxs("label", {
                    className: "grid gap-2",
                    children: [a.jsx("span", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Name"
                    }), a.jsx("input", {
                      name: "name",
                      required: true,
                      className: "field",
                      placeholder: "Name"
                    })]
                  }), a.jsxs("label", {
                    className: "grid gap-2",
                    children: [a.jsx("span", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Company"
                    }), a.jsx("input", {
                      name: "company",
                      className: "field",
                      placeholder: "Company"
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [a.jsxs("label", {
                    className: "grid gap-2",
                    children: [a.jsx("span", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Phone"
                    }), a.jsx("input", {
                      name: "phone",
                      className: "field",
                      placeholder: "Phone"
                    })]
                  }), a.jsxs("label", {
                    className: "grid gap-2",
                    children: [a.jsx("span", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Email"
                    }), a.jsx("input", {
                      name: "email",
                      type: "email",
                      required: true,
                      className: "field",
                      placeholder: "Email"
                    })]
                  })]
                }), a.jsxs("label", {
                  className: "grid gap-2",
                  children: [a.jsx("span", {
                    className: "mbi-heading text-sm font-semibold",
                    style: {
                      color: Ae
                    },
                    children: "Subject"
                  }), a.jsx("input", {
                    name: "subject",
                    className: "field",
                    placeholder: "Subject"
                  })]
                }), a.jsxs("label", {
                  className: "grid gap-2",
                  children: [a.jsx("span", {
                    className: "mbi-heading text-sm font-semibold",
                    style: {
                      color: Ae
                    },
                    children: "Message"
                  }), a.jsx("textarea", {
                    name: "message",
                    required: true,
                    className: "field",
                    placeholder: "Message"
                  })]
                }), e === "success" && a.jsx("p", {
                  className: "mbi-body text-sm text-green-600",
                  style: {
                    textAlign: "left"
                  },
                  children: "✓ Message sent! We'll be in touch shortly."
                }), e === "error" && a.jsx("p", {
                  className: "mbi-body text-sm text-red-600",
                  style: {
                    textAlign: "left"
                  },
                  children: "Something went wrong. Please try again or email us directly."
                }), a.jsx("button", {
                  type: "submit",
                  disabled: e === "submitting" || e === "success",
                  className: "mbi-heading mt-2 w-full sm:w-fit rounded-none px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:opacity-80 transition-opacity disabled:opacity-50",
                  style: {
                    backgroundColor: Ae
                  },
                  children: e === "submitting" ? "Sending…" : "Send"
                })]
              })]
            })
          }), a.jsx(I, {
            delayMs: 120,
            children: a.jsxs("div", {
              className: "card p-8",
              children: [a.jsx("h2", {
                className: "mbi-heading text-3xl font-bold",
                style: {
                  color: Ae
                },
                children: "Get in touch"
              }), a.jsx("p", {
                className: "mbi-body mt-4 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base",
                children: "Helping you navigate financial opportunities with insight and expertise."
              }), a.jsxs("div", {
                className: "mt-8 grid gap-6",
                children: [a.jsxs("div", {
                  children: [a.jsx("div", {
                    className: "mbi-heading text-sm font-semibold",
                    style: {
                      color: Ae
                    },
                    children: "Head Office"
                  }), a.jsx("div", {
                    className: "mbi-body mt-2 text-sm text-black/70",
                    style: {
                      textAlign: "left"
                    },
                    children: "54 Maxwell drive, Woodmead Office Park, Building B, Waterfall"
                  })]
                }), a.jsxs("div", {
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [a.jsxs("div", {
                    children: [a.jsx("div", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Email Us"
                    }), a.jsx("div", {
                      className: "mbi-body mt-2 text-sm text-black/70",
                      style: {
                        textAlign: "left"
                      },
                      children: "info@matsekeinvestment.co.za"
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsx("div", {
                      className: "mbi-heading text-sm font-semibold",
                      style: {
                        color: Ae
                      },
                      children: "Call Us"
                    }), a.jsx("div", {
                      className: "mbi-body mt-2 text-sm text-black/70",
                      style: {
                        textAlign: "left"
                      },
                      children: "(010) 005 5942"
                    })]
                  })]
                })]
              })]
            })
          })]
        })
      })
    }), a.jsx("section", {
      className: "py-14 sm:py-16",
      style: {
        backgroundColor: Ae
      },
      children: a.jsx("div", {
        className: "container-shell",
        children: a.jsxs("div", {
          className: "grid gap-8 lg:grid-cols-2 lg:items-stretch",
          children: [a.jsx(I, {
            children: a.jsx("div", {
              className: "overflow-hidden flex flex-col h-full",
              style: {
                minHeight: "400px",
                border: "1px solid #ffffff15"
              },
              children: a.jsx(Uk, {})
            })
          }), a.jsx(I, {
            delayMs: 120,
            children: a.jsxs("div", {
              className: "flex flex-col justify-center h-full py-4",
              children: [a.jsx("p", {
                className: "mbi-heading text-xs uppercase tracking-widest mb-4",
                style: {
                  color: "#ffffff50"
                },
                children: "Our Location"
              }), a.jsx("p", {
                className: "mbi-body text-sm leading-loose text-white/90 sm:text-base",
                children: "At Matseke Business Investment, we provide professional, regulated, and client-focused financial advisory services. We partner with individuals, entrepreneurs, and businesses to build, protect, and grow wealth through trusted guidance and long-term relationships."
              }), a.jsx("div", {
                className: "mt-8 flex flex-col sm:flex-row gap-3",
                children: a.jsx("a", {
                  href: "mailto:info@matsekeinvestment.co.za",
                  className: "mbi-heading inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity",
                  style: {
                    color: Ae,
                    backgroundColor: "white"
                  },
                  children: "Email Us"
                })
              })]
            })
          })]
        })
      })
    })]
  });
}
const Xf = "#000000";
const Fe = "#e26991";
const $k = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');
  .mbi-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
  .mbi-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; }
  .mbi-serif   { font-family: 'Playfair Display', serif; font-weight: 700; }
`;
function gt({
  title: e,
  children: t
}) {
  return a.jsxs("div", {
    className: "mb-10",
    style: {
      borderBottom: "1px solid #f3f4f6",
      paddingBottom: "2.5rem"
    },
    children: [a.jsx("h2", {
      className: "mbi-heading mb-3 text-lg font-bold uppercase tracking-wide",
      style: {
        color: Fe
      },
      children: e
    }), a.jsx("div", {
      className: "mbi-body text-sm leading-relaxed",
      style: {
        color: "#374151"
      },
      children: t
    })]
  });
}
function Bt({
  items: e
}) {
  return a.jsx("ul", {
    className: "mt-2 space-y-1.5 pl-1",
    children: e.map((t, n) => a.jsxs("li", {
      className: "flex items-start gap-3",
      children: [a.jsx("span", {
        style: {
          color: Fe,
          fontSize: "10px",
          marginTop: "5px",
          flexShrink: 0
        },
        children: "■"
      }), a.jsx("span", {
        className: "mbi-body",
        children: t
      })]
    }, n))
  });
}
function Kk() {
  j.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return a.jsxs("div", {
    className: "mbi-body",
    style: {
      backgroundColor: "#ffffff",
      minHeight: "100vh"
    },
    children: [a.jsx("style", {
      children: $k
    }), a.jsx("div", {
      style: {
        backgroundColor: Xf,
        paddingTop: "2rem",
        paddingBottom: "2rem"
      },
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsxs(ye, {
          to: "/",
          className: "mbi-heading inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest transition-opacity hover:opacity-60",
          style: {
            color: "#ffffff99"
          },
          children: [a.jsx("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: a.jsx("path", {
              d: "M9 1L3 7L9 13",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), "Back to Home"]
        }), a.jsx("h1", {
          className: "mbi-heading text-4xl font-bold text-white sm:text-5xl",
          children: "Privacy Policy"
        }), a.jsx("div", {
          className: "mt-4 h-0.5 w-12",
          style: {
            backgroundColor: Fe
          }
        }), a.jsx("p", {
          className: "mbi-body mt-3 text-sm",
          style: {
            color: "#ffffff80"
          },
          children: "In compliance with POPIA — Protection of Personal Information Act, 2013"
        })]
      })
    }), a.jsx("div", {
      className: "container-shell py-16 sm:py-20",
      children: a.jsxs("div", {
        className: "max-w-3xl",
        children: [a.jsx("p", {
          className: "mbi-body mb-10 text-sm leading-relaxed",
          style: {
            color: "#374151"
          },
          children: "Matseke Business Investment (\"MBI\", \"we\", \"us\", \"our\") is committed to protecting your privacy and ensuring that your personal information is collected and used properly, lawfully, and transparently. This Privacy Policy complies with the Protection of Personal Information Act, 2013 (\"POPIA\")."
        }), a.jsxs(gt, {
          title: "Information We Collect",
          children: [a.jsx("p", {
            children: "We may collect and process the following personal information:"
          }), a.jsx(Bt, {
            items: ["Full name and surname", "Identity number", "Contact details (email, phone number)", "Financial information (income, assets, liabilities)", "Employment details", "Any other information required to provide financial services"]
          })]
        }), a.jsxs(gt, {
          title: "How We Collect Information",
          children: [a.jsx("p", {
            children: "We collect personal information:"
          }), a.jsx(Bt, {
            items: ["Directly from you when you complete forms or engage our services", "Through our website (e.g., contact forms, cookies)", "From third parties where legally permitted"]
          })]
        }), a.jsxs(gt, {
          title: "Purpose of Processing",
          children: [a.jsx("p", {
            children: "Your personal information is used to:"
          }), a.jsx(Bt, {
            items: ["Provide financial advice and intermediary services", "Assess your financial needs and risk profile", "Comply with legal and regulatory requirements", "Communicate with you regarding services", "Improve our service offering"]
          })]
        }), a.jsxs(gt, {
          title: "Legal Basis for Processing",
          children: [a.jsx("p", {
            children: "We process your information:"
          }), a.jsx(Bt, {
            items: ["With your consent", "To fulfil contractual obligations", "To comply with legal obligations", "Where it is in your legitimate interest"]
          })]
        }), a.jsxs(gt, {
          title: "Sharing of Information",
          children: [a.jsx("p", {
            children: "We may share your information with:"
          }), a.jsx(Bt, {
            items: ["Product providers (e.g., insurers, investment platforms)", "Regulatory bodies such as the Financial Sector Conduct Authority", "Third-party service providers assisting in operations"]
          }), a.jsx("p", {
            className: "mt-3",
            children: "All third parties are required to safeguard your information."
          })]
        }), a.jsxs(gt, {
          title: "Data Security",
          children: [a.jsx("p", {
            children: "We implement appropriate technical and organisational measures to protect your personal information against:"
          }), a.jsx(Bt, {
            items: ["Loss", "Unauthorised access", "Misuse"]
          })]
        }), a.jsxs(gt, {
          title: "Data Retention",
          children: [a.jsx("p", {
            children: "Your personal information will be retained only for as long as necessary to:"
          }), a.jsx(Bt, {
            items: ["Fulfil the purpose for which it was collected", "Comply with legal and regulatory obligations"]
          })]
        }), a.jsxs(gt, {
          title: "Your Rights",
          children: [a.jsx("p", {
            children: "You have the right to:"
          }), a.jsx(Bt, {
            items: ["Access your personal information", "Request correction or deletion", "Object to processing", "Withdraw consent"]
          }), a.jsx("p", {
            className: "mt-3",
            children: "Requests can be submitted using the contact details below."
          })]
        }), a.jsx(gt, {
          title: "Cookies",
          children: a.jsx("p", {
            children: "Our website uses cookies to enhance user experience and analyse traffic. You may disable cookies in your browser settings."
          })
        }), a.jsxs("div", {
          className: "mb-10",
          style: {
            borderBottom: "1px solid #f3f4f6",
            paddingBottom: "2.5rem"
          },
          children: [a.jsx("h2", {
            className: "mbi-heading mb-3 text-lg font-bold uppercase tracking-wide",
            style: {
              color: Fe
            },
            children: "FAIS Disclosure Notice"
          }), a.jsx("p", {
            className: "mbi-body mb-6 text-xs",
            style: {
              color: "#374151"
            },
            children: "In terms of the Financial Advisory and Intermediary Services Act (FAIS)"
          }), a.jsxs("div", {
            className: "space-y-6 text-sm",
            style: {
              color: "#374151"
            },
            children: [a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Authorisation"
              }), a.jsxs("p", {
                className: "mbi-body",
                children: ["Financial Services Provider in terms of Section 8 of the Financial Advisory and Intermediary Services Act, 2002 (FAIS Act 37 of 2002), regulated by the Financial Sector Conduct Authority (FSCA) under ", a.jsx("span", {
                  className: "mbi-heading",
                  children: "FSP No. 48618"
                }), "."]
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Nature of Services"
              }), a.jsx("p", {
                className: "mbi-body",
                children: "MBI provides:"
              }), a.jsx("ul", {
                className: "mt-2 space-y-1.5 pl-1",
                children: ["Financial advice", "Intermediary services", "Risk and investment planning", "Wealth management solutions"].map((e, t) => a.jsxs("li", {
                  className: "flex items-start gap-3",
                  children: [a.jsx("span", {
                    style: {
                      color: Fe,
                      fontSize: "10px",
                      marginTop: "5px",
                      flexShrink: 0
                    },
                    children: "■"
                  }), a.jsx("span", {
                    className: "mbi-body",
                    children: e
                  })]
                }, t))
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Representatives"
              }), a.jsx("p", {
                className: "mbi-body",
                children: "All representatives of MBI are duly authorised, act within the scope of their mandate, and are supervised where applicable."
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Remuneration"
              }), a.jsx("p", {
                className: "mbi-body",
                children: "MBI may receive commission from product suppliers and fees agreed upon with clients. Full disclosure of all fees and commissions will be provided before any transaction is concluded."
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Conflict of Interest"
              }), a.jsx("p", {
                className: "mbi-body",
                children: "MBI maintains a Conflict of Interest Management Policy to ensure that clients' interests are prioritised and any potential conflicts are disclosed."
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Complaints Procedure"
              }), a.jsxs("p", {
                className: "mbi-body",
                children: ["If dissatisfied with our services, lodge a complaint with our Internal Complaints Contact: ", a.jsx("span", {
                  className: "mbi-heading",
                  children: "compliance@matsekeinvestment.co.za"
                })]
              }), a.jsx("p", {
                className: "mbi-body mt-2",
                children: "If unresolved, complaints may be escalated to the FAIS Ombud — Office of the Ombud for Financial Services Providers."
              })]
            }), a.jsxs("div", {
              children: [a.jsx("p", {
                className: "mbi-heading mb-1 font-bold",
                style: {
                  color: Fe
                },
                children: "Record Keeping"
              }), a.jsx("p", {
                className: "mbi-body",
                children: "All advice and transactions are recorded in accordance with FAIS requirements and may be made available upon request."
              })]
            })]
          })]
        }), a.jsx("div", {
          className: "mb-10 p-6",
          style: {
            backgroundColor: "#f9f9f9",
            borderLeft: `3px solid ${Fe}`
          },
          children: a.jsx("p", {
            className: "mbi-body text-xs leading-relaxed",
            style: {
              color: "#374151"
            },
            children: "All information provided by Matseke Business Investment is for informational purposes only and does not constitute financial, investment, legal, or tax advice. Financial decisions should be made in consultation with a qualified financial advisor, taking into account your individual financial circumstances. Past performance is not indicative of future results."
          })
        }), a.jsxs(gt, {
          title: "Contact Information",
          children: [a.jsx("p", {
            className: "mbi-heading font-bold",
            children: "Matseke Business Investment"
          }), a.jsxs("p", {
            className: "mbi-body mt-1",
            children: ["Email: ", a.jsx("a", {
              href: "mailto:info@matsekeinvestment.co.za",
              children: "info@matsekeinvestment.co.za"
            })]
          }), a.jsxs("p", {
            className: "mbi-body",
            children: ["Phone: ", a.jsx("a", {
              href: "tel:0100055942",
              children: "010 005 5942"
            })]
          })]
        }), a.jsx("div", {
          className: "mt-8",
          children: a.jsxs(ye, {
            to: "/",
            className: "mbi-heading inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-80",
            style: {
              backgroundColor: Xf,
              padding: "12px 28px"
            },
            children: [a.jsx("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: a.jsx("path", {
                d: "M9 1L3 7L9 13",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            }), "Back to Home"]
          })
        })]
      })
    })]
  });
}
const Qf = "#000000";
const so = "#e26991";
const Gk = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');
  .mbi-heading { font-family: 'Montserrat', sans-serif; font-weight: 600; }
  .mbi-body    { font-family: 'Montserrat', sans-serif; font-weight: 400; }
  .mbi-serif   { font-family: 'Playfair Display', serif; font-weight: 700; }
`;
function Ye({
  title: e,
  children: t
}) {
  return a.jsxs("div", {
    className: "mb-10",
    style: {
      borderBottom: "1px solid #f3f4f6",
      paddingBottom: "2.5rem"
    },
    children: [a.jsx("h2", {
      className: "mbi-heading mb-3 text-lg font-bold uppercase tracking-wide",
      style: {
        color: so
      },
      children: e
    }), a.jsx("div", {
      className: "mbi-body text-sm leading-relaxed",
      style: {
        color: "#374151"
      },
      children: t
    })]
  });
}
function Zf({
  items: e
}) {
  return a.jsx("ul", {
    className: "mt-2 space-y-1.5 pl-1",
    children: e.map((t, n) => a.jsxs("li", {
      className: "flex items-start gap-3",
      children: [a.jsx("span", {
        style: {
          color: so,
          fontSize: "10px",
          marginTop: "5px",
          flexShrink: 0
        },
        children: "■"
      }), a.jsx("span", {
        className: "mbi-body",
        children: t
      })]
    }, n))
  });
}
function Yk() {
  j.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return a.jsxs("div", {
    className: "mbi-body",
    style: {
      backgroundColor: "#ffffff",
      minHeight: "100vh"
    },
    children: [a.jsx("style", {
      children: Gk
    }), a.jsx("div", {
      style: {
        backgroundColor: Qf,
        paddingTop: "2rem",
        paddingBottom: "2rem"
      },
      children: a.jsxs("div", {
        className: "container-shell",
        children: [a.jsxs(ye, {
          to: "/",
          className: "mbi-heading inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-widest transition-opacity hover:opacity-60",
          style: {
            color: "#ffffff99"
          },
          children: [a.jsx("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: a.jsx("path", {
              d: "M9 1L3 7L9 13",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }), "Back to Home"]
        }), a.jsx("h1", {
          className: "mbi-heading text-4xl font-bold text-white sm:text-5xl",
          children: "Terms & Conditions"
        }), a.jsx("div", {
          className: "mt-4 h-0.5 w-12",
          style: {
            backgroundColor: so
          }
        }), a.jsx("p", {
          className: "mbi-body mt-3 text-sm",
          style: {
            color: "#ffffff80"
          },
          children: "Governed by the laws of the Republic of South Africa"
        })]
      })
    }), a.jsx("div", {
      className: "container-shell py-16 sm:py-20",
      children: a.jsxs("div", {
        className: "max-w-3xl",
        children: [a.jsx("p", {
          className: "mbi-body mb-10 text-sm leading-relaxed",
          style: {
            color: "#374151"
          },
          children: "Welcome to the website of Matseke Business Investment (\"MBI\", \"we\", \"us\", \"our\"). By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using this website."
        }), a.jsx(Ye, {
          title: "Regulatory Status",
          children: a.jsx("p", {
            children: "MBI is an authorised financial services provider regulated in accordance with the laws of the Republic of South Africa and operates under the oversight of the Financial Sector Conduct Authority (FSCA). All financial advice and intermediary services are rendered in compliance with applicable legislation."
          })
        }), a.jsx(Ye, {
          title: "Purpose of the Website",
          children: a.jsx("p", {
            children: "The information provided on this website is for general informational purposes only and does not constitute financial advice, recommendation, or endorsement of any financial product or service. Users are encouraged to seek personalised financial advice before making any financial decisions."
          })
        }), a.jsxs(Ye, {
          title: "Use of the Website",
          children: [a.jsx("p", {
            children: "By using this website, you agree that you will:"
          }), a.jsx(Zf, {
            items: ["Use the website for lawful purposes only", "Not engage in any activity that may compromise the security or functionality of the website", "Not attempt to gain unauthorised access to any part of the website"]
          }), a.jsx("p", {
            className: "mt-3",
            children: "MBI reserves the right to restrict or terminate access for users who violate these terms."
          })]
        }), a.jsxs(Ye, {
          title: "Intellectual Property",
          children: [a.jsx("p", {
            children: "All content on this website, including but not limited to text, graphics, logos, images and design elements, is the property of MBI or its licensors and is protected by applicable intellectual property laws."
          }), a.jsx("p", {
            className: "mt-2",
            children: "No content may be reproduced, distributed, or used without prior written consent from MBI."
          })]
        }), a.jsxs(Ye, {
          title: "Limitation of Liability",
          children: [a.jsx("p", {
            children: "While MBI takes reasonable steps to ensure the accuracy of information on this website:"
          }), a.jsx(Zf, {
            items: ["We do not guarantee that the content is complete, accurate, or up to date", "We are not liable for any loss or damage arising from reliance on the information provided"]
          }), a.jsx("p", {
            className: "mt-3",
            children: "Use of this website is at your own risk."
          })]
        }), a.jsx(Ye, {
          title: "Third-Party Links",
          children: a.jsx("p", {
            children: "This website may contain links to third-party websites for convenience. MBI does not control these websites, is not responsible for their content or privacy practices, and does not endorse any third-party services or products."
          })
        }), a.jsx(Ye, {
          title: "Privacy and Data Protection",
          children: a.jsxs("p", {
            children: ["MBI is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA). By using this website, you consent to the collection and processing of your personal information as outlined in our", " ", a.jsx(ye, {
              to: "/privacy-policy",
              className: "mbi-heading",
              style: {
                textDecoration: "underline"
              },
              children: "Privacy Policy"
            }), "."]
          })
        }), a.jsx(Ye, {
          title: "Cookies",
          children: a.jsx("p", {
            children: "This website may use cookies to enhance user experience and analyse website traffic. By continuing to use the website, you consent to the use of cookies."
          })
        }), a.jsxs("div", {
          className: "mb-10",
          style: {
            borderBottom: "1px solid #f3f4f6",
            paddingBottom: "2.5rem"
          },
          children: [a.jsx("h2", {
            className: "mbi-heading mb-3 text-lg font-bold uppercase tracking-wide",
            style: {
              color: so
            },
            children: "Financial Advice Disclaimer"
          }), a.jsx("div", {
            className: "mbi-body text-sm leading-relaxed",
            style: {
              color: "#374151"
            },
            children: a.jsx("p", {
              children: "Nothing on this website constitutes financial advice, investment advice, or tax or legal advice. All financial decisions should be made in consultation with a qualified financial advisor."
            })
          })]
        }), a.jsx(Ye, {
          title: "Indemnity",
          children: a.jsx("p", {
            children: "You agree to indemnify and hold MBI harmless against any claims, damages, losses, or liabilities arising from your use of the website or your breach of these Terms and Conditions."
          })
        }), a.jsx(Ye, {
          title: "Changes to Terms",
          children: a.jsx("p", {
            children: "MBI reserves the right to amend these Terms and Conditions at any time without prior notice. Users are encouraged to review this page regularly."
          })
        }), a.jsx(Ye, {
          title: "Governing Law",
          children: a.jsx("p", {
            children: "These Terms and Conditions are governed by the laws of the Republic of South Africa. Any disputes arising shall be subject to the jurisdiction of South African courts."
          })
        }), a.jsxs(Ye, {
          title: "Contact Information",
          children: [a.jsx("p", {
            className: "mbi-heading font-bold",
            children: "Matseke Business Investment"
          }), a.jsxs("p", {
            className: "mbi-body mt-1",
            children: ["Email: ", a.jsx("a", {
              href: "mailto:info@matsekeinvestment.co.za",
              children: "info@matsekeinvestment.co.za"
            })]
          }), a.jsxs("p", {
            className: "mbi-body",
            children: ["Phone: ", a.jsx("a", {
              href: "tel:0100055942",
              children: "010 005 5942"
            })]
          }), a.jsxs("p", {
            className: "mbi-body",
            children: ["Website: ", a.jsx("a", {
              href: "https://www.matsekeinvestment.co.za",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "www.matsekeinvestment.co.za"
            })]
          })]
        }), a.jsx("div", {
          className: "mt-8",
          children: a.jsxs(ye, {
            to: "/",
            className: "mbi-heading inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-80",
            style: {
              backgroundColor: Qf,
              padding: "12px 28px"
            },
            children: [a.jsx("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: a.jsx("path", {
                d: "M9 1L3 7L9 13",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })
            }), "Back to Home"]
          })
        })]
      })
    })]
  });
}
function Xk() {
  const {
    pathname: e
  } = Bn();
  j.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [e]);
  return null;
}
function Qk() {
  return a.jsxs("div", {
    className: "min-h-dvh bg-cream text-ink",
    children: [a.jsx(Xk, {}), a.jsx(G1, {}), a.jsx("main", {
      className: "pt-20",
      children: a.jsxs(A1, {
        children: [a.jsx(Ot, {
          path: "/",
          element: a.jsx(xk, {})
        }), a.jsx(Ot, {
          path: "/about",
          element: a.jsx(Rk, {})
        }), a.jsx(Ot, {
          path: "/services",
          element: a.jsx(Bk, {})
        }), a.jsx(Ot, {
          path: "/events",
          element: a.jsx(_k, {})
        }), a.jsx(Ot, {
          path: "/contact",
          element: a.jsx(Hk, {})
        }), a.jsx(Ot, {
          path: "/privacy-policy",
          element: a.jsx(Kk, {})
        }), a.jsx(Ot, {
          path: "/terms-and-conditions",
          element: a.jsx(Yk, {})
        })]
      })
    }), a.jsx(sx, {})]
  });
}
wa.createRoot(document.getElementById("root")).render(a.jsx(Et.StrictMode, {
  children: a.jsx(F1, {
    children: a.jsx(Qk, {})
  })
}));