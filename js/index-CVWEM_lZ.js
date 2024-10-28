import { fairyDustCursor as km } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jc = { exports: {} },
  pi = {},
  Zc = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  Em = Symbol.for("react.portal"),
  Cm = Symbol.for("react.fragment"),
  Nm = Symbol.for("react.strict_mode"),
  Pm = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  Om = Symbol.for("react.context"),
  Tm = Symbol.for("react.forward_ref"),
  Am = Symbol.for("react.suspense"),
  Rm = Symbol.for("react.memo"),
  Lm = Symbol.for("react.lazy"),
  Ga = Symbol.iterator;
function zm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ga && e[Ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ef = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tf = Object.assign,
  nf = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nf),
    (this.updater = n || ef);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rf() {}
rf.prototype = Qn.prototype;
function bl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nf),
    (this.updater = n || ef);
}
var Ul = (bl.prototype = new rf());
Ul.constructor = bl;
tf(Ul, Qn.prototype);
Ul.isPureReactComponent = !0;
var Ja = Array.isArray,
  of = Object.prototype.hasOwnProperty,
  Bl = { current: null },
  sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function lf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      of.call(t, r) && !sf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Bl.current,
  };
}
function Im(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function Dm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Za = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dm("" + e.key)
    : t.toString(36);
}
function ko(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case Em:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Bi(s, 0) : r),
      Ja(o)
        ? ((n = ""),
          e != null && (n = e.replace(Za, "$&/") + "/"),
          ko(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          ($l(o) &&
            (o = Im(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Za, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ja(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Bi(i, l);
      s += ko(i, t, n, a, o);
    }
  else if (((a = zm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Bi(i, l++)), (s += ko(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function ro(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ko(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Fm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Eo = { transition: null },
  Mm = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Eo,
    ReactCurrentOwner: Bl,
  };
function af() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: ro,
  forEach: function (e, t, n) {
    ro(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ro(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ro(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Qn;
F.Fragment = Cm;
F.Profiler = Pm;
F.PureComponent = bl;
F.StrictMode = Nm;
F.Suspense = Am;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
F.act = af;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = tf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Bl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      of.call(t, a) &&
        !sf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Qr, type: e.type, key: o, ref: i, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Om,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _m, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = lf;
F.createFactory = function (e) {
  var t = lf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Tm, render: e };
};
F.isValidElement = $l;
F.lazy = function (e) {
  return { $$typeof: Lm, _payload: { _status: -1, _result: e }, _init: Fm };
};
F.memo = function (e, t) {
  return { $$typeof: Rm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Eo.transition;
  Eo.transition = {};
  try {
    e();
  } finally {
    Eo.transition = t;
  }
};
F.unstable_act = af;
F.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ye.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
F.useId = function () {
  return ye.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ye.current.useRef(e);
};
F.useState = function (e) {
  return ye.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ye.current.useTransition();
};
F.version = "18.3.1";
Zc.exports = F;
var Q = Zc.exports;
const uf = Gc(Q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm = Q,
  bm = Symbol.for("react.element"),
  Um = Symbol.for("react.fragment"),
  Bm = Object.prototype.hasOwnProperty,
  $m = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Bm.call(t, r) && !Hm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: bm,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: $m.current,
  };
}
pi.Fragment = Um;
pi.jsx = cf;
pi.jsxs = cf;
Jc.exports = pi;
var O = Jc.exports,
  ff = { exports: {} },
  ze = {},
  df = { exports: {} },
  pf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, L) {
    var I = _.length;
    _.push(L);
    e: for (; 0 < I; ) {
      var Z = (I - 1) >>> 1,
        oe = _[Z];
      if (0 < o(oe, L)) (_[Z] = L), (_[I] = oe), (I = Z);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0],
      I = _.pop();
    if (I !== L) {
      _[0] = I;
      e: for (var Z = 0, oe = _.length, to = oe >>> 1; Z < to; ) {
        var Vt = 2 * (Z + 1) - 1,
          Ui = _[Vt],
          Wt = Vt + 1,
          no = _[Wt];
        if (0 > o(Ui, I))
          Wt < oe && 0 > o(no, Ui)
            ? ((_[Z] = no), (_[Wt] = I), (Z = Wt))
            : ((_[Z] = Ui), (_[Vt] = I), (Z = Vt));
        else if (Wt < oe && 0 > o(no, I)) (_[Z] = no), (_[Wt] = I), (Z = Wt);
        else break e;
      }
    }
    return L;
  }
  function o(_, L) {
    var I = _.sortIndex - L.sortIndex;
    return I !== 0 ? I : _.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    w = !1,
    g = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(_) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= _)
        r(u), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(u);
    }
  }
  function S(_) {
    if (((v = !1), m(_), !g))
      if (n(a) !== null) (g = !0), ji(k);
      else {
        var L = n(u);
        L !== null && bi(S, L.startTime - _);
      }
  }
  function k(_, L) {
    (g = !1), v && ((v = !1), p(T), (T = -1)), (w = !0);
    var I = h;
    try {
      for (
        m(L), d = n(a);
        d !== null && (!(d.expirationTime > L) || (_ && !me()));

      ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var oe = Z(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof oe == "function" ? (d.callback = oe) : d === n(a) && r(a),
            m(L);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var to = !0;
      else {
        var Vt = n(u);
        Vt !== null && bi(S, Vt.startTime - L), (to = !1);
      }
      return to;
    } finally {
      (d = null), (h = I), (w = !1);
    }
  }
  var N = !1,
    C = null,
    T = -1,
    b = 5,
    z = -1;
  function me() {
    return !(e.unstable_now() - z < b);
  }
  function V() {
    if (C !== null) {
      var _ = e.unstable_now();
      z = _;
      var L = !0;
      try {
        L = C(!0, _);
      } finally {
        L ? Zn() : ((N = !1), (C = null));
      }
    } else N = !1;
  }
  var Zn;
  if (typeof f == "function")
    Zn = function () {
      f(V);
    };
  else if (typeof MessageChannel < "u") {
    var qa = new MessageChannel(),
      xm = qa.port2;
    (qa.port1.onmessage = V),
      (Zn = function () {
        xm.postMessage(null);
      });
  } else
    Zn = function () {
      x(V, 0);
    };
  function ji(_) {
    (C = _), N || ((N = !0), Zn());
  }
  function bi(_, L) {
    T = x(function () {
      _(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), ji(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (b = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var I = h;
      h = L;
      try {
        return _();
      } finally {
        h = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = h;
      h = _;
      try {
        return L();
      } finally {
        h = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, L, I) {
      var Z = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? Z + I : Z))
          : (I = Z),
        _)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = I + oe),
        (_ = {
          id: c++,
          callback: L,
          priorityLevel: _,
          startTime: I,
          expirationTime: oe,
          sortIndex: -1,
        }),
        I > Z
          ? ((_.sortIndex = I),
            t(u, _),
            n(a) === null &&
              _ === n(u) &&
              (v ? (p(T), (T = -1)) : (v = !0), bi(S, I - Z)))
          : ((_.sortIndex = oe), t(a, _), g || w || ((g = !0), ji(k))),
        _
      );
    }),
    (e.unstable_shouldYield = me),
    (e.unstable_wrapCallback = function (_) {
      var L = h;
      return function () {
        var I = h;
        h = L;
        try {
          return _.apply(this, arguments);
        } finally {
          h = I;
        }
      };
    });
})(pf);
df.exports = pf;
var Vm = df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm = Q,
  Le = Vm;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mf = new Set(),
  Pr = {};
function pn(e, t) {
  Mn(e, t), Mn(e + "Capture", t);
}
function Mn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) mf.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Es = Object.prototype.hasOwnProperty,
  Qm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function Ym(e) {
  return Es.call(tu, e)
    ? !0
    : Es.call(eu, e)
      ? !1
      : Qm.test(e)
        ? (tu[e] = !0)
        : ((eu[e] = !0), !1);
}
function Km(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hl = /[\-:]([a-z])/g;
function Vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hl, Vl);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hl, Vl);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hl, Vl);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wl(e, t, n, r) {
  var o = ue.hasOwnProperty(t) ? ue[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xm(t, n, o, r) && (n = null),
    r || o === null
      ? Ym(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oo = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  yn = Symbol.for("react.fragment"),
  Ql = Symbol.for("react.strict_mode"),
  Cs = Symbol.for("react.profiler"),
  hf = Symbol.for("react.provider"),
  gf = Symbol.for("react.context"),
  Yl = Symbol.for("react.forward_ref"),
  Ns = Symbol.for("react.suspense"),
  Ps = Symbol.for("react.suspense_list"),
  Kl = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  yf = Symbol.for("react.offscreen"),
  nu = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  $i;
function ur(e) {
  if ($i === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $i = (t && t[1]) || "";
    }
  return (
    `
` +
    $i +
    e
  );
}
var Hi = !1;
function Vi(e, t) {
  if (!e || Hi) return "";
  Hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function qm(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vi(e.type, !1)), e;
    case 11:
      return (e = Vi(e.type.render, !1)), e;
    case 1:
      return (e = Vi(e.type, !0)), e;
    default:
      return "";
  }
}
function _s(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yn:
      return "Fragment";
    case gn:
      return "Portal";
    case Cs:
      return "Profiler";
    case Ql:
      return "StrictMode";
    case Ns:
      return "Suspense";
    case Ps:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gf:
        return (e.displayName || "Context") + ".Consumer";
      case hf:
        return (e._context.displayName || "Context") + ".Provider";
      case Yl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kl:
        return (
          (t = e.displayName || null), t !== null ? t : _s(e.type) || "Memo"
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return _s(e(t));
        } catch {}
    }
  return null;
}
function Gm(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return _s(t);
    case 8:
      return t === Ql ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ft(e) {
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
function vf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jm(e) {
  var t = vf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function io(e) {
  e._valueTracker || (e._valueTracker = Jm(e));
}
function wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Os(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sf(e, t) {
  (t = t.checked), t != null && Wl(e, "checked", t, !1);
}
function Ts(e, t) {
  Sf(e, t);
  var n = Ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? As(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && As(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function As(e, t, n) {
  (t !== "number" || jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function An(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ft(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function xf(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ls(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var so,
  Ef = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        so = so || document.createElement("div"),
          so.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = so.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function (e) {
  Zm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hr[t] = hr[e]);
  });
});
function Cf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hr.hasOwnProperty(e) && hr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Nf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Cf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var eh = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function zs(e, t) {
  if (t) {
    if (eh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Is(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ds = null;
function Xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fs = null,
  Rn = null,
  Ln = null;
function lu(e) {
  if ((e = Xr(e))) {
    if (typeof Fs != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = vi(t)), Fs(e.stateNode, e.type, t));
  }
}
function Pf(e) {
  Rn ? (Ln ? Ln.push(e) : (Ln = [e])) : (Rn = e);
}
function _f() {
  if (Rn) {
    var e = Rn,
      t = Ln;
    if (((Ln = Rn = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function Of(e, t) {
  return e(t);
}
function Tf() {}
var Wi = !1;
function Af(e, t, n) {
  if (Wi) return e(t, n);
  Wi = !0;
  try {
    return Of(e, t, n);
  } finally {
    (Wi = !1), (Rn !== null || Ln !== null) && (Tf(), _f());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vi(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ms = !1;
if (ct)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        Ms = !0;
      },
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr);
  } catch {
    Ms = !1;
  }
function th(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gr = !1,
  bo = null,
  Uo = !1,
  js = null,
  nh = {
    onError: function (e) {
      (gr = !0), (bo = e);
    },
  };
function rh(e, t, n, r, o, i, s, l, a) {
  (gr = !1), (bo = null), th.apply(nh, arguments);
}
function oh(e, t, n, r, o, i, s, l, a) {
  if ((rh.apply(this, arguments), gr)) {
    if (gr) {
      var u = bo;
      (gr = !1), (bo = null);
    } else throw Error(E(198));
    Uo || ((Uo = !0), (js = u));
  }
}
function mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function au(e) {
  if (mn(e) !== e) throw Error(E(188));
}
function ih(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return au(o), e;
        if (i === r) return au(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Lf(e) {
  return (e = ih(e)), e !== null ? zf(e) : null;
}
function zf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var If = Le.unstable_scheduleCallback,
  uu = Le.unstable_cancelCallback,
  sh = Le.unstable_shouldYield,
  lh = Le.unstable_requestPaint,
  ee = Le.unstable_now,
  ah = Le.unstable_getCurrentPriorityLevel,
  ql = Le.unstable_ImmediatePriority,
  Df = Le.unstable_UserBlockingPriority,
  Bo = Le.unstable_NormalPriority,
  uh = Le.unstable_LowPriority,
  Ff = Le.unstable_IdlePriority,
  mi = null,
  nt = null;
function ch(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : ph,
  fh = Math.log,
  dh = Math.LN2;
function ph(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fh(e) / dh) | 0)) | 0;
}
var lo = 64,
  ao = 4194304;
function fr(e) {
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
function $o(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = fr(l)) : ((i &= s), i !== 0 && (r = fr(i)));
  } else (s = n & ~o), s !== 0 ? (r = fr(s)) : i !== 0 && (r = fr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function mh(e, t) {
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
      return t + 5e3;
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
function hh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Qe(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = mh(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function bs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Mf() {
  var e = lo;
  return (lo <<= 1), !(lo & 4194240) && (lo = 64), e;
}
function Qi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function gh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Qe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var j = 0;
function jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bf,
  Jl,
  Uf,
  Bf,
  $f,
  Us = !1,
  uo = [],
  Ot = null,
  Tt = null,
  At = null,
  Tr = new Map(),
  Ar = new Map(),
  Et = [],
  yh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function nr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Xr(t)), t !== null && Jl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function vh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ot = nr(Ot, e, t, n, r, o)), !0;
    case "dragenter":
      return (Tt = nr(Tt, e, t, n, r, o)), !0;
    case "mouseover":
      return (At = nr(At, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Tr.set(i, nr(Tr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ar.set(i, nr(Ar.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Hf(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rf(n)), t !== null)) {
          (e.blockedOn = t),
            $f(e.priority, function () {
              Uf(n);
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
function Co(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ds = r), n.target.dispatchEvent(r), (Ds = null);
    } else return (t = Xr(n)), t !== null && Jl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Co(e) && n.delete(t);
}
function wh() {
  (Us = !1),
    Ot !== null && Co(Ot) && (Ot = null),
    Tt !== null && Co(Tt) && (Tt = null),
    At !== null && Co(At) && (At = null),
    Tr.forEach(fu),
    Ar.forEach(fu);
}
function rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Us ||
      ((Us = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, wh)));
}
function Rr(e) {
  function t(o) {
    return rr(o, e);
  }
  if (0 < uo.length) {
    rr(uo[0], e);
    for (var n = 1; n < uo.length; n++) {
      var r = uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && rr(Ot, e),
      Tt !== null && rr(Tt, e),
      At !== null && rr(At, e),
      Tr.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    Hf(n), n.blockedOn === null && Et.shift();
}
var zn = gt.ReactCurrentBatchConfig,
  Ho = !0;
function Sh(e, t, n, r) {
  var o = j,
    i = zn.transition;
  zn.transition = null;
  try {
    (j = 1), Zl(e, t, n, r);
  } finally {
    (j = o), (zn.transition = i);
  }
}
function xh(e, t, n, r) {
  var o = j,
    i = zn.transition;
  zn.transition = null;
  try {
    (j = 4), Zl(e, t, n, r);
  } finally {
    (j = o), (zn.transition = i);
  }
}
function Zl(e, t, n, r) {
  if (Ho) {
    var o = Bs(e, t, n, r);
    if (o === null) ns(e, t, r, Vo, n), cu(e, r);
    else if (vh(o, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < yh.indexOf(e))) {
      for (; o !== null; ) {
        var i = Xr(o);
        if (
          (i !== null && bf(i),
          (i = Bs(e, t, n, r)),
          i === null && ns(e, t, r, Vo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ns(e, t, r, null, n);
  }
}
var Vo = null;
function Bs(e, t, n, r) {
  if (((Vo = null), (e = Xl(r)), (e = Xt(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vo = e), null;
}
function Vf(e) {
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
      switch (ah()) {
        case ql:
          return 1;
        case Df:
          return 4;
        case Bo:
        case uh:
          return 16;
        case Ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null,
  ea = null,
  No = null;
function Wf() {
  if (No) return No;
  var e,
    t = ea,
    n = t.length,
    r,
    o = "value" in Nt ? Nt.value : Nt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (No = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Po(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function co() {
  return !0;
}
function du() {
  return !1;
}
function Ie(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? co
        : du),
      (this.isPropagationStopped = du),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = co));
      },
      persist: function () {},
      isPersistent: co,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ta = Ie(Yn),
  Kr = q({}, Yn, { view: 0, detail: 0 }),
  kh = Ie(Kr),
  Yi,
  Ki,
  or,
  hi = q({}, Kr, {
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
    getModifierState: na,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((Yi = e.screenX - or.screenX), (Ki = e.screenY - or.screenY))
              : (Ki = Yi = 0),
            (or = e)),
          Yi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ki;
    },
  }),
  pu = Ie(hi),
  Eh = q({}, hi, { dataTransfer: 0 }),
  Ch = Ie(Eh),
  Nh = q({}, Kr, { relatedTarget: 0 }),
  Xi = Ie(Nh),
  Ph = q({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _h = Ie(Ph),
  Oh = q({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Th = Ie(Oh),
  Ah = q({}, Yn, { data: 0 }),
  mu = Ie(Ah),
  Rh = {
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
    MozPrintableKey: "Unidentified",
  },
  Lh = {
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
    224: "Meta",
  },
  zh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zh[e]) ? !!t[e] : !1;
}
function na() {
  return Ih;
}
var Dh = q({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = Rh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Po(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Lh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: na,
    charCode: function (e) {
      return e.type === "keypress" ? Po(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Po(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Fh = Ie(Dh),
  Mh = q({}, hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hu = Ie(Mh),
  jh = q({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: na,
  }),
  bh = Ie(jh),
  Uh = q({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bh = Ie(Uh),
  $h = q({}, hi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hh = Ie($h),
  Vh = [9, 13, 27, 32],
  ra = ct && "CompositionEvent" in window,
  yr = null;
ct && "documentMode" in document && (yr = document.documentMode);
var Wh = ct && "TextEvent" in window && !yr,
  Qf = ct && (!ra || (yr && 8 < yr && 11 >= yr)),
  gu = " ",
  yu = !1;
function Yf(e, t) {
  switch (e) {
    case "keyup":
      return Vh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function Qh(e, t) {
  switch (e) {
    case "compositionend":
      return Kf(t);
    case "keypress":
      return t.which !== 32 ? null : ((yu = !0), gu);
    case "textInput":
      return (e = t.data), e === gu && yu ? null : e;
    default:
      return null;
  }
}
function Yh(e, t) {
  if (vn)
    return e === "compositionend" || (!ra && Yf(e, t))
      ? ((e = Wf()), (No = ea = Nt = null), (vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kh[e.type] : t === "textarea";
}
function Xf(e, t, n, r) {
  Pf(r),
    (t = Wo(t, "onChange")),
    0 < t.length &&
      ((n = new ta("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vr = null,
  Lr = null;
function Xh(e) {
  sd(e, 0);
}
function gi(e) {
  var t = xn(e);
  if (wf(t)) return e;
}
function qh(e, t) {
  if (e === "change") return t;
}
var qf = !1;
if (ct) {
  var qi;
  if (ct) {
    var Gi = "oninput" in document;
    if (!Gi) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"),
        (Gi = typeof wu.oninput == "function");
    }
    qi = Gi;
  } else qi = !1;
  qf = qi && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  vr && (vr.detachEvent("onpropertychange", Gf), (Lr = vr = null));
}
function Gf(e) {
  if (e.propertyName === "value" && gi(Lr)) {
    var t = [];
    Xf(t, Lr, e, Xl(e)), Af(Xh, t);
  }
}
function Gh(e, t, n) {
  e === "focusin"
    ? (Su(), (vr = t), (Lr = n), vr.attachEvent("onpropertychange", Gf))
    : e === "focusout" && Su();
}
function Jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gi(Lr);
}
function Zh(e, t) {
  if (e === "click") return gi(t);
}
function e1(e, t) {
  if (e === "input" || e === "change") return gi(t);
}
function t1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : t1;
function zr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Es.call(t, o) || !Ke(e[o], t[o])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = xu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xu(n);
  }
}
function Jf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Jf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zf() {
  for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jo(e.document);
  }
  return t;
}
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function n1(e) {
  var t = Zf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ku(n, i));
        var s = ku(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var r1 = ct && "documentMode" in document && 11 >= document.documentMode,
  wn = null,
  $s = null,
  wr = null,
  Hs = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hs ||
    wn == null ||
    wn !== jo(r) ||
    ((r = wn),
    "selectionStart" in r && oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && zr(wr, r)) ||
      ((wr = r),
      (r = Wo($s, "onSelect")),
      0 < r.length &&
        ((t = new ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sn = {
    animationend: fo("Animation", "AnimationEnd"),
    animationiteration: fo("Animation", "AnimationIteration"),
    animationstart: fo("Animation", "AnimationStart"),
    transitionend: fo("Transition", "TransitionEnd"),
  },
  Ji = {},
  ed = {};
ct &&
  ((ed = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sn.animationend.animation,
    delete Sn.animationiteration.animation,
    delete Sn.animationstart.animation),
  "TransitionEvent" in window || delete Sn.transitionend.transition);
function yi(e) {
  if (Ji[e]) return Ji[e];
  if (!Sn[e]) return e;
  var t = Sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return (Ji[e] = t[n]);
  return e;
}
var td = yi("animationend"),
  nd = yi("animationiteration"),
  rd = yi("animationstart"),
  od = yi("transitionend"),
  id = new Map(),
  Cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Bt(e, t) {
  id.set(e, t), pn(t, [e]);
}
for (var Zi = 0; Zi < Cu.length; Zi++) {
  var es = Cu[Zi],
    o1 = es.toLowerCase(),
    i1 = es[0].toUpperCase() + es.slice(1);
  Bt(o1, "on" + i1);
}
Bt(td, "onAnimationEnd");
Bt(nd, "onAnimationIteration");
Bt(rd, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(od, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  s1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Nu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), oh(r, t, void 0, e), (e.currentTarget = null);
}
function sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Nu(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Nu(o, l, u), (i = a);
        }
    }
  }
  if (Uo) throw ((e = js), (Uo = !1), (js = null), e);
}
function B(e, t) {
  var n = t[Ks];
  n === void 0 && (n = t[Ks] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ld(t, e, 2, !1), n.add(r));
}
function ts(e, t, n) {
  var r = 0;
  t && (r |= 4), ld(n, e, r, t);
}
var po = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[po]) {
    (e[po] = !0),
      mf.forEach(function (n) {
        n !== "selectionchange" && (s1.has(n) || ts(n, !1, e), ts(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[po] || ((t[po] = !0), ts("selectionchange", !1, t));
  }
}
function ld(e, t, n, r) {
  switch (Vf(t)) {
    case 1:
      var o = Sh;
      break;
    case 4:
      o = xh;
      break;
    default:
      o = Zl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ms ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function ns(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Xt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Af(function () {
    var u = i,
      c = Xl(n),
      d = [];
    e: {
      var h = id.get(e);
      if (h !== void 0) {
        var w = ta,
          g = e;
        switch (e) {
          case "keypress":
            if (Po(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Fh;
            break;
          case "focusin":
            (g = "focus"), (w = Xi);
            break;
          case "focusout":
            (g = "blur"), (w = Xi);
            break;
          case "beforeblur":
          case "afterblur":
            w = Xi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = bh;
            break;
          case td:
          case nd:
          case rd:
            w = _h;
            break;
          case od:
            w = Bh;
            break;
          case "scroll":
            w = kh;
            break;
          case "wheel":
            w = Hh;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Th;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = hu;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          p = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = Or(f, p)), S != null && v.push(Dr(f, S, m)))),
            x)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((h = new w(h, g, null, n, c)), d.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ds &&
            (g = n.relatedTarget || n.fromElement) &&
            (Xt(g) || g[ft]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = u),
              (g = g ? Xt(g) : null),
              g !== null &&
                ((x = mn(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = u)),
          w !== g)
        ) {
          if (
            ((v = pu),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = hu),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (x = w == null ? h : xn(w)),
            (m = g == null ? h : xn(g)),
            (h = new v(S, f + "leave", w, n, c)),
            (h.target = x),
            (h.relatedTarget = m),
            (S = null),
            Xt(c) === u &&
              ((v = new v(p, f + "enter", g, n, c)),
              (v.target = m),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            w && g)
          )
            t: {
              for (v = w, p = g, f = 0, m = v; m; m = hn(m)) f++;
              for (m = 0, S = p; S; S = hn(S)) m++;
              for (; 0 < f - m; ) (v = hn(v)), f--;
              for (; 0 < m - f; ) (p = hn(p)), m--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = hn(v)), (p = hn(p));
              }
              v = null;
            }
          else v = null;
          w !== null && Pu(d, h, w, v, !1),
            g !== null && x !== null && Pu(d, x, g, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? xn(u) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var k = qh;
        else if (vu(h))
          if (qf) k = e1;
          else {
            k = Jh;
            var N = Gh;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Zh);
        if (k && (k = k(e, u))) {
          Xf(d, k, n, c);
          break e;
        }
        N && N(e, h, u),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            As(h, "number", h.value);
      }
      switch (((N = u ? xn(u) : window), e)) {
        case "focusin":
          (vu(N) || N.contentEditable === "true") &&
            ((wn = N), ($s = u), (wr = null));
          break;
        case "focusout":
          wr = $s = wn = null;
          break;
        case "mousedown":
          Hs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hs = !1), Eu(d, n, c);
          break;
        case "selectionchange":
          if (r1) break;
        case "keydown":
        case "keyup":
          Eu(d, n, c);
      }
      var C;
      if (ra)
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
          T = void 0;
        }
      else
        vn
          ? Yf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Qf &&
          n.locale !== "ko" &&
          (vn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && vn && (C = Wf())
            : ((Nt = c),
              (ea = "value" in Nt ? Nt.value : Nt.textContent),
              (vn = !0))),
        (N = Wo(u, T)),
        0 < N.length &&
          ((T = new mu(T, e, null, n, c)),
          d.push({ event: T, listeners: N }),
          C ? (T.data = C) : ((C = Kf(n)), C !== null && (T.data = C)))),
        (C = Wh ? Qh(e, n) : Yh(e, n)) &&
          ((u = Wo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new mu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    sd(d, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Or(e, n)),
      i != null && r.unshift(Dr(e, i, o)),
      (i = Or(e, t)),
      i != null && r.push(Dr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Or(n, i)), a != null && s.unshift(Dr(n, a, l)))
        : o || ((a = Or(n, i)), a != null && s.push(Dr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var l1 = /\r\n?/g,
  a1 = /\u0000|\uFFFD/g;
function _u(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      l1,
      `
`,
    )
    .replace(a1, "");
}
function mo(e, t, n) {
  if (((t = _u(t)), _u(e) !== t && n)) throw Error(E(425));
}
function Qo() {}
var Vs = null,
  Ws = null;
function Qs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ys = typeof setTimeout == "function" ? setTimeout : void 0,
  u1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  c1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
        ? function (e) {
            return Ou.resolve(null).then(e).catch(f1);
          }
        : Ys;
function f1(e) {
  setTimeout(function () {
    throw e;
  });
}
function rs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Rr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + Kn,
  Fr = "__reactProps$" + Kn,
  ft = "__reactContainer$" + Kn,
  Ks = "__reactEvents$" + Kn,
  d1 = "__reactListeners$" + Kn,
  p1 = "__reactHandles$" + Kn;
function Xt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Tu(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = Tu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xr(e) {
  return (
    (e = e[Ze] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function vi(e) {
  return e[Fr] || null;
}
var Xs = [],
  kn = -1;
function $t(e) {
  return { current: e };
}
function $(e) {
  0 > kn || ((e.current = Xs[kn]), (Xs[kn] = null), kn--);
}
function U(e, t) {
  kn++, (Xs[kn] = e.current), (e.current = t);
}
var Mt = {},
  pe = $t(Mt),
  xe = $t(!1),
  on = Mt;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Yo() {
  $(xe), $(pe);
}
function Au(e, t, n) {
  if (pe.current !== Mt) throw Error(E(168));
  U(pe, t), U(xe, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Gm(e) || "Unknown", o));
  return q({}, n, r);
}
function Ko(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (on = pe.current),
    U(pe, e),
    U(xe, xe.current),
    !0
  );
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = ad(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(xe),
      $(pe),
      U(pe, e))
    : $(xe),
    U(xe, n);
}
var st = null,
  wi = !1,
  os = !1;
function ud(e) {
  st === null ? (st = [e]) : st.push(e);
}
function m1(e) {
  (wi = !0), ud(e);
}
function Ht() {
  if (!os && st !== null) {
    os = !0;
    var e = 0,
      t = j;
    try {
      var n = st;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (wi = !1);
    } catch (o) {
      throw (st !== null && (st = st.slice(e + 1)), If(ql, Ht), o);
    } finally {
      (j = t), (os = !1);
    }
  }
  return null;
}
var En = [],
  Cn = 0,
  Xo = null,
  qo = 0,
  Fe = [],
  Me = 0,
  sn = null,
  lt = 1,
  at = "";
function Qt(e, t) {
  (En[Cn++] = qo), (En[Cn++] = Xo), (Xo = e), (qo = t);
}
function cd(e, t, n) {
  (Fe[Me++] = lt), (Fe[Me++] = at), (Fe[Me++] = sn), (sn = e);
  var r = lt;
  e = at;
  var o = 32 - Qe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Qe(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (lt = (1 << (32 - Qe(t) + o)) | (n << o) | r),
      (at = i + e);
  } else (lt = (1 << i) | (n << o) | r), (at = e);
}
function ia(e) {
  e.return !== null && (Qt(e, 1), cd(e, 1, 0));
}
function sa(e) {
  for (; e === Xo; )
    (Xo = En[--Cn]), (En[Cn] = null), (qo = En[--Cn]), (En[Cn] = null);
  for (; e === sn; )
    (sn = Fe[--Me]),
      (Fe[Me] = null),
      (at = Fe[--Me]),
      (Fe[Me] = null),
      (lt = Fe[--Me]),
      (Fe[Me] = null);
}
var Oe = null,
  _e = null,
  W = !1,
  We = null;
function fd(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (_e = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: lt, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gs(e) {
  if (W) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Lu(e, t)) {
        if (qs(e)) throw Error(E(418));
        t = Rt(n.nextSibling);
        var r = Oe;
        t && Lu(e, t)
          ? fd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e));
      }
    } else {
      if (qs(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e);
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function ho(e) {
  if (e !== Oe) return !1;
  if (!W) return zu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (qs(e)) throw (dd(), Error(E(418)));
    for (; t; ) fd(e, t), (t = Rt(t.nextSibling));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Oe ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = _e; e; ) e = Rt(e.nextSibling);
}
function bn() {
  (_e = Oe = null), (W = !1);
}
function la(e) {
  We === null ? (We = [e]) : We.push(e);
}
var h1 = gt.ReactCurrentBatchConfig;
function ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function go(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function pd(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = Dt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, m, S) {
    return f === null || f.tag !== 6
      ? ((f = fs(m, p.mode, S)), (f.return = p), f)
      : ((f = o(f, m)), (f.return = p), f);
  }
  function a(p, f, m, S) {
    var k = m.type;
    return k === yn
      ? c(p, f, m.props.children, S, m.key)
      : f !== null &&
          (f.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === xt &&
              Iu(k) === f.type))
        ? ((S = o(f, m.props)), (S.ref = ir(p, f, m)), (S.return = p), S)
        : ((S = zo(m.type, m.key, m.props, null, p.mode, S)),
          (S.ref = ir(p, f, m)),
          (S.return = p),
          S);
  }
  function u(p, f, m, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = ds(m, p.mode, S)), (f.return = p), f)
      : ((f = o(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, S, k) {
    return f === null || f.tag !== 7
      ? ((f = en(m, p.mode, S, k)), (f.return = p), f)
      : ((f = o(f, m)), (f.return = p), f);
  }
  function d(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = fs("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case oo:
          return (
            (m = zo(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = ir(p, null, f)),
            (m.return = p),
            m
          );
        case gn:
          return (f = ds(f, p.mode, m)), (f.return = p), f;
        case xt:
          var S = f._init;
          return d(p, S(f._payload), m);
      }
      if (cr(f) || er(f))
        return (f = en(f, p.mode, m, null)), (f.return = p), f;
      go(p, f);
    }
    return null;
  }
  function h(p, f, m, S) {
    var k = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : l(p, f, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case oo:
          return m.key === k ? a(p, f, m, S) : null;
        case gn:
          return m.key === k ? u(p, f, m, S) : null;
        case xt:
          return (k = m._init), h(p, f, k(m._payload), S);
      }
      if (cr(m) || er(m)) return k !== null ? null : c(p, f, m, S, null);
      go(p, m);
    }
    return null;
  }
  function w(p, f, m, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), l(f, p, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case oo:
          return (p = p.get(S.key === null ? m : S.key) || null), a(f, p, S, k);
        case gn:
          return (p = p.get(S.key === null ? m : S.key) || null), u(f, p, S, k);
        case xt:
          var N = S._init;
          return w(p, f, m, N(S._payload), k);
      }
      if (cr(S) || er(S)) return (p = p.get(m) || null), c(f, p, S, k, null);
      go(f, S);
    }
    return null;
  }
  function g(p, f, m, S) {
    for (
      var k = null, N = null, C = f, T = (f = 0), b = null;
      C !== null && T < m.length;
      T++
    ) {
      C.index > T ? ((b = C), (C = null)) : (b = C.sibling);
      var z = h(p, C, m[T], S);
      if (z === null) {
        C === null && (C = b);
        break;
      }
      e && C && z.alternate === null && t(p, C),
        (f = i(z, f, T)),
        N === null ? (k = z) : (N.sibling = z),
        (N = z),
        (C = b);
    }
    if (T === m.length) return n(p, C), W && Qt(p, T), k;
    if (C === null) {
      for (; T < m.length; T++)
        (C = d(p, m[T], S)),
          C !== null &&
            ((f = i(C, f, T)), N === null ? (k = C) : (N.sibling = C), (N = C));
      return W && Qt(p, T), k;
    }
    for (C = r(p, C); T < m.length; T++)
      (b = w(C, p, T, m[T], S)),
        b !== null &&
          (e && b.alternate !== null && C.delete(b.key === null ? T : b.key),
          (f = i(b, f, T)),
          N === null ? (k = b) : (N.sibling = b),
          (N = b));
    return (
      e &&
        C.forEach(function (me) {
          return t(p, me);
        }),
      W && Qt(p, T),
      k
    );
  }
  function v(p, f, m, S) {
    var k = er(m);
    if (typeof k != "function") throw Error(E(150));
    if (((m = k.call(m)), m == null)) throw Error(E(151));
    for (
      var N = (k = null), C = f, T = (f = 0), b = null, z = m.next();
      C !== null && !z.done;
      T++, z = m.next()
    ) {
      C.index > T ? ((b = C), (C = null)) : (b = C.sibling);
      var me = h(p, C, z.value, S);
      if (me === null) {
        C === null && (C = b);
        break;
      }
      e && C && me.alternate === null && t(p, C),
        (f = i(me, f, T)),
        N === null ? (k = me) : (N.sibling = me),
        (N = me),
        (C = b);
    }
    if (z.done) return n(p, C), W && Qt(p, T), k;
    if (C === null) {
      for (; !z.done; T++, z = m.next())
        (z = d(p, z.value, S)),
          z !== null &&
            ((f = i(z, f, T)), N === null ? (k = z) : (N.sibling = z), (N = z));
      return W && Qt(p, T), k;
    }
    for (C = r(p, C); !z.done; T++, z = m.next())
      (z = w(C, p, T, z.value, S)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? T : z.key),
          (f = i(z, f, T)),
          N === null ? (k = z) : (N.sibling = z),
          (N = z));
    return (
      e &&
        C.forEach(function (V) {
          return t(p, V);
        }),
      W && Qt(p, T),
      k
    );
  }
  function x(p, f, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === yn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case oo:
          e: {
            for (var k = m.key, N = f; N !== null; ) {
              if (N.key === k) {
                if (((k = m.type), k === yn)) {
                  if (N.tag === 7) {
                    n(p, N.sibling),
                      (f = o(N, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === xt &&
                    Iu(k) === N.type)
                ) {
                  n(p, N.sibling),
                    (f = o(N, m.props)),
                    (f.ref = ir(p, N, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            m.type === yn
              ? ((f = en(m.props.children, p.mode, S, m.key)),
                (f.return = p),
                (p = f))
              : ((S = zo(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = ir(p, f, m)),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case gn:
          e: {
            for (N = m.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = o(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = ds(m, p.mode, S)), (f.return = p), (p = f);
          }
          return s(p);
        case xt:
          return (N = m._init), x(p, f, N(m._payload), S);
      }
      if (cr(m)) return g(p, f, m, S);
      if (er(m)) return v(p, f, m, S);
      go(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = fs(m, p.mode, S)), (f.return = p), (p = f)),
        s(p))
      : n(p, f);
  }
  return x;
}
var Un = pd(!0),
  md = pd(!1),
  Go = $t(null),
  Jo = null,
  Nn = null,
  aa = null;
function ua() {
  aa = Nn = Jo = null;
}
function ca(e) {
  var t = Go.current;
  $(Go), (e._currentValue = t);
}
function Js(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function In(e, t) {
  (Jo = e),
    (aa = Nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (Jo === null) throw Error(E(308));
      (Nn = e), (Jo.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var qt = null;
function fa(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function hd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), fa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), fa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function _o(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zo(e, t, n, r) {
  var o = e.updateQueue;
  kt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        w = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            v = l;
          switch (((h = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                d = g.call(w, d, h);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (h = typeof g == "function" ? g.call(w, d, h) : g),
                h == null)
              )
                break e;
              d = q({}, d, h);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = d)) : (c = c.next = w),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (an |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var qr = {},
  rt = $t(qr),
  Mr = $t(qr),
  jr = $t(qr);
function Gt(e) {
  if (e === qr) throw Error(E(174));
  return e;
}
function pa(e, t) {
  switch ((U(jr, t), U(Mr, e), U(rt, qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ls(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ls(t, e));
  }
  $(rt), U(rt, t);
}
function Bn() {
  $(rt), $(Mr), $(jr);
}
function yd(e) {
  Gt(jr.current);
  var t = Gt(rt.current),
    n = Ls(t, e.type);
  t !== n && (U(Mr, e), U(rt, n));
}
function ma(e) {
  Mr.current === e && ($(rt), $(Mr));
}
var K = $t(0);
function ei(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var is = [];
function ha() {
  for (var e = 0; e < is.length; e++)
    is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var Oo = gt.ReactCurrentDispatcher,
  ss = gt.ReactCurrentBatchConfig,
  ln = 0,
  X = null,
  ne = null,
  ie = null,
  ti = !1,
  Sr = !1,
  br = 0,
  g1 = 0;
function ce() {
  throw Error(E(321));
}
function ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function ya(e, t, n, r, o, i) {
  if (
    ((ln = i),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oo.current = e === null || e.memoizedState === null ? S1 : x1),
    (e = n(r, o)),
    Sr)
  ) {
    i = 0;
    do {
      if (((Sr = !1), (br = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (ie = ne = null),
        (t.updateQueue = null),
        (Oo.current = k1),
        (e = n(r, o));
    } while (Sr);
  }
  if (
    ((Oo.current = ni),
    (t = ne !== null && ne.next !== null),
    (ln = 0),
    (ie = ne = X = null),
    (ti = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function va() {
  var e = br !== 0;
  return (br = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Be() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ie === null ? X.memoizedState : ie.next;
  if (t !== null) (ie = t), (ne = e);
  else {
    if (e === null) throw Error(E(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ls(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ne,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((ln & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (X.lanes |= c),
          (an |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Ke(r, t.memoizedState) || (Se = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (X.lanes |= i), (an |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function as(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Ke(i, t.memoizedState) || (Se = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function vd() {}
function wd(e, t) {
  var n = X,
    r = Be(),
    o = t(),
    i = !Ke(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Se = !0)),
    (r = r.queue),
    wa(kd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, xd.bind(null, n, r, o, t), void 0, null),
      se === null)
    )
      throw Error(E(349));
    ln & 30 || Sd(n, t, o);
  }
  return o;
}
function Sd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ed(t) && Cd(e);
}
function kd(e, t, n) {
  return n(function () {
    Ed(t) && Cd(e);
  });
}
function Ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = dt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function Mu(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = w1.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nd() {
  return Be().memoizedState;
}
function To(e, t, n, r) {
  var o = Ge();
  (X.flags |= e),
    (o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Si(e, t, n, r) {
  var o = Be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((i = s.destroy), r !== null && ga(r, s.deps))) {
      o.memoizedState = Br(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (o.memoizedState = Br(1 | t, n, i, r));
}
function ju(e, t) {
  return To(8390656, 8, e, t);
}
function wa(e, t) {
  return Si(2048, 8, e, t);
}
function Pd(e, t) {
  return Si(4, 2, e, t);
}
function _d(e, t) {
  return Si(4, 4, e, t);
}
function Od(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Td(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Si(4, 4, Od.bind(null, t, e), n)
  );
}
function Sa() {}
function Ad(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ld(e, t, n) {
  return ln & 21
    ? (Ke(n, t) || ((n = Mf()), (X.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function y1(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ss.transition;
  ss.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (ss.transition = r);
  }
}
function zd() {
  return Be().memoizedState;
}
function v1(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Id(e))
  )
    Dd(t, n);
  else if (((n = hd(e, t, n, r)), n !== null)) {
    var o = ge();
    Ye(n, e, r, o), Fd(n, t, r);
  }
}
function w1(e, t, n) {
  var r = It(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Id(e)) Dd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ke(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), fa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = hd(e, t, o, r)),
      n !== null && ((o = ge()), Ye(n, e, r, o), Fd(n, t, r));
  }
}
function Id(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Dd(e, t) {
  Sr = ti = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
var ni = {
    readContext: Ue,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  S1 = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        To(4194308, 4, Od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return To(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return To(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = v1.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mu,
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0];
      return (e = y1.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        o = Ge();
      if (W) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(E(349));
        ln & 30 || Sd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ju(kd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Br(9, xd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = se.identifierPrefix;
      if (W) {
        var n = at,
          r = lt;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = g1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  x1 = {
    readContext: Ue,
    useCallback: Ad,
    useContext: Ue,
    useEffect: wa,
    useImperativeHandle: Td,
    useInsertionEffect: Pd,
    useLayoutEffect: _d,
    useMemo: Rd,
    useReducer: ls,
    useRef: Nd,
    useState: function () {
      return ls(Ur);
    },
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      var t = Be();
      return Ld(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(Ur)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: wd,
    useId: zd,
    unstable_isNewReconciler: !1,
  },
  k1 = {
    readContext: Ue,
    useCallback: Ad,
    useContext: Ue,
    useEffect: wa,
    useImperativeHandle: Td,
    useInsertionEffect: Pd,
    useLayoutEffect: _d,
    useMemo: Rd,
    useReducer: as,
    useRef: Nd,
    useState: function () {
      return as(Ur);
    },
    useDebugValue: Sa,
    useDeferredValue: function (e) {
      var t = Be();
      return ne === null ? (t.memoizedState = e) : Ld(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = as(Ur)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: wd,
    useId: zd,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      o = It(e),
      i = ut(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, o)),
      t !== null && (Ye(t, e, o, r), _o(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      o = It(e),
      i = ut(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, o)),
      t !== null && (Ye(t, e, o, r), _o(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ge(),
      r = It(e),
      o = ut(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Lt(e, o, r)),
      t !== null && (Ye(t, e, r, n), _o(t, e, r));
  },
};
function bu(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !zr(n, r) || !zr(o, i)
        : !0
  );
}
function Md(e, t, n) {
  var r = !1,
    o = Mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ue(i))
      : ((o = ke(t) ? on : pe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? jn(e, o) : Mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xi.enqueueReplaceState(t, t.state, null);
}
function el(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), da(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ue(i))
    : ((i = ke(t) ? on : pe.current), (o.context = jn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zs(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && xi.enqueueReplaceState(o, o.state, null),
      Zo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function us(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var E1 = typeof WeakMap == "function" ? WeakMap : Map;
function jd(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      oi || ((oi = !0), (fl = r)), tl(e, t);
    }),
    n
  );
}
function bd(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        tl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        tl(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new E1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = M1.bind(null, e, t, n)), t.then(e, e));
}
function $u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Lt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var C1 = gt.ReactCurrentOwner,
  Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? md(t, null, n, r) : Un(t, e.child, n, r);
}
function Vu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    In(t, o),
    (r = ya(e, t, n, r, i, o)),
    (n = va()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (W && n && ia(t), (t.flags |= 1), he(e, t, r, o), t.child)
  );
}
function Wu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Oa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ud(e, t, i, r, o))
      : ((e = zo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return pt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ud(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (zr(i, r) && e.ref === t.ref)
      if (((Se = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Se = !0);
      else return (t.lanes = e.lanes), pt(e, t, o);
  }
  return nl(e, t, n, r, o);
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(_n, Pe),
        (Pe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(_n, Pe),
          (Pe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(_n, Pe),
        (Pe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(_n, Pe),
      (Pe |= r);
  return he(e, t, o, n), t.child;
}
function $d(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nl(e, t, n, r, o) {
  var i = ke(n) ? on : pe.current;
  return (
    (i = jn(t, i)),
    In(t, o),
    (n = ya(e, t, n, r, i, o)),
    (r = va()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (W && r && ia(t), (t.flags |= 1), he(e, t, n, o), t.child)
  );
}
function Qu(e, t, n, r, o) {
  if (ke(n)) {
    var i = !0;
    Ko(t);
  } else i = !1;
  if ((In(t, o), t.stateNode === null))
    Ao(e, t), Md(t, n, r), el(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ue(u))
      : ((u = ke(n) ? on : pe.current), (u = jn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Uu(t, s, r, u)),
      (kt = !1);
    var h = t.memoizedState;
    (s.state = h),
      Zo(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || xe.current || kt
        ? (typeof c == "function" && (Zs(t, n, c, r), (a = t.memoizedState)),
          (l = kt || bu(t, n, l, r, h, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      gd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : He(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ue(a))
        : ((a = ke(n) ? on : pe.current), (a = jn(t, a)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || h !== a) && Uu(t, s, r, a)),
      (kt = !1),
      (h = t.memoizedState),
      (s.state = h),
      Zo(t, r, s, o);
    var g = t.memoizedState;
    l !== d || h !== g || xe.current || kt
      ? (typeof w == "function" && (Zs(t, n, w, r), (g = t.memoizedState)),
        (u = kt || bu(t, n, u, r, h, g, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return rl(e, t, n, r, i, o);
}
function rl(e, t, n, r, o, i) {
  $d(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Ru(t, n, !1), pt(e, t, i);
  (r = t.stateNode), (C1.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Un(t, e.child, null, i)), (t.child = Un(t, null, l, i)))
      : he(e, t, l, i),
    (t.memoizedState = r.state),
    o && Ru(t, n, !0),
    t.child
  );
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    pa(e, t.containerInfo);
}
function Yu(e, t, n, r, o) {
  return bn(), la(o), (t.flags |= 256), he(e, t, n, r), t.child;
}
var ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vd(e, t, n) {
  var r = t.pendingProps,
    o = K.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    U(K, o & 1),
    e === null)
  )
    return (
      Gs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ci(s, r, 0, null)),
              (e = en(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = il(n)),
              (t.memoizedState = ol),
              e)
            : xa(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return N1(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Dt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Dt(l, i)) : ((i = en(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? il(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ol),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xa(e, t) {
  return (
    (t = Ci({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yo(e, t, n, r) {
  return (
    r !== null && la(r),
    Un(t, e.child, null, n),
    (e = xa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function N1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = us(Error(E(422)))), yo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ci({ mode: "visible", children: r.children }, o, 0, null)),
          (i = en(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Un(t, e.child, null, s),
          (t.child.memoizedState = il(s)),
          (t.memoizedState = ol),
          i);
  if (!(t.mode & 1)) return yo(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(E(419))), (r = us(i, r, void 0)), yo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Se || l)) {
    if (((r = se), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), dt(e, o), Ye(r, e, o, -1));
    }
    return _a(), (r = us(Error(E(421)))), yo(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = j1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (_e = Rt(o.nextSibling)),
      (Oe = t),
      (W = !0),
      (We = null),
      e !== null &&
        ((Fe[Me++] = lt),
        (Fe[Me++] = at),
        (Fe[Me++] = sn),
        (lt = e.id),
        (at = e.overflow),
        (sn = t)),
      (t = xa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Js(e.return, t, n);
}
function cs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((he(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ku(e, n, t);
        else if (e.tag === 19) Ku(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ei(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          cs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ei(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cs(t, !0, n, null, i);
        break;
      case "together":
        cs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function P1(e, t, n) {
  switch (t.tag) {
    case 3:
      Hd(t), bn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      ke(t.type) && Ko(t);
      break;
    case 4:
      pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      U(Go, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Vd(e, t, n)
            : (U(K, K.current & 1),
              (e = pt(e, t, n)),
              e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bd(e, t, n);
  }
  return pt(e, t, n);
}
var Qd, sl, Yd, Kd;
Qd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
sl = function () {};
Yd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Gt(rt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Os(e, o)), (r = Os(e, r)), (i = []);
        break;
      case "select":
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Rs(e, o)), (r = Rs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qo);
    }
    zs(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Pr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Pr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && B("scroll", e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _1(e, t, n) {
  var r = t.pendingProps;
  switch ((sa(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return ke(t.type) && Yo(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bn(),
        $(xe),
        $(pe),
        ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (ml(We), (We = null)))),
        sl(e, t),
        fe(t),
        null
      );
    case 5:
      ma(t);
      var o = Gt(jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return fe(t), null;
        }
        if (((e = Gt(rt.current)), ho(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ze] = t), (r[Fr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < dr.length; o++) B(dr[o], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ru(r, i), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              iu(r, i), B("invalid", r);
          }
          zs(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Pr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              io(r), ou(r, i, !0);
              break;
            case "textarea":
              io(r), su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ze] = t),
            (e[Fr] = r),
            Qd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Is(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < dr.length; o++) B(dr[o], e);
                o = r;
                break;
              case "source":
                B("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (o = r);
                break;
              case "details":
                B("toggle", e), (o = r);
                break;
              case "input":
                ru(e, r), (o = Os(e, r)), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                iu(e, r), (o = Rs(e, r)), B("invalid", e);
                break;
              default:
                o = r;
            }
            zs(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Nf(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Ef(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && _r(e, a)
                        : typeof a == "number" && _r(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Pr.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && B("scroll", e)
                          : a != null && Wl(e, i, a, s));
              }
            switch (n) {
              case "input":
                io(e), ou(e, r, !1);
                break;
              case "textarea":
                io(e), su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? An(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      An(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Qo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Kd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Gt(jr.current)), Gt(rt.current), ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (i = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                mo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        ($(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && _e !== null && t.mode & 1 && !(t.flags & 128))
          dd(), bn(), (t.flags |= 98560), (i = !1);
        else if (((i = ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Ze] = t;
          } else
            bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (i = !1);
        } else We !== null && (ml(We), (We = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? re === 0 && (re = 3) : _a())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Bn(), sl(e, t), e === null && Ir(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return ca(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && Yo(), fe(t), null;
    case 19:
      if (($(K), (i = t.memoizedState), i === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) sr(i, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ei(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    sr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ee() > Hn &&
            ((t.flags |= 128), (r = !0), sr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ei(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              sr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !W)
            )
              return fe(t), null;
          } else
            2 * ee() - i.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), sr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pe & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function O1(e, t) {
  switch ((sa(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Yo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bn(),
        $(xe),
        $(pe),
        ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ma(t), null;
    case 13:
      if (($(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        bn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(K), null;
    case 4:
      return Bn(), null;
    case 10:
      return ca(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vo = !1,
  de = !1,
  T1 = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function ll(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Xu = !1;
function A1(e, t) {
  if (((Vs = Ho), (e = Zf()), oa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (h = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ws = { focusedElem: e, selectionRange: n }, Ho = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : He(t.type, v),
                      x,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (g = Xu), (Xu = !1), g;
}
function xr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ll(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ki(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function al(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[Fr], delete t[Ks], delete t[d1], delete t[p1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; ) ul(e, t, n), (e = e.sibling);
}
function cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cl(e, t, n), e = e.sibling; e !== null; ) cl(e, t, n), (e = e.sibling);
}
var le = null,
  Ve = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), (n = n.sibling);
}
function Gd(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || Pn(n, t);
    case 6:
      var r = le,
        o = Ve;
      (le = null),
        vt(e, t, n),
        (le = r),
        (Ve = o),
        le !== null &&
          (Ve
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ve
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? rs(e.parentNode, n)
              : e.nodeType === 1 && rs(e, n),
            Rr(e))
          : rs(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (o = Ve),
        (le = n.stateNode.containerInfo),
        (Ve = !0),
        vt(e, t, n),
        (le = r),
        (Ve = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && ll(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (Pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), vt(e, t, n), (de = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new T1()),
      t.forEach(function (r) {
        var o = b1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (Ve = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (Ve = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (Ve = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(E(160));
        Gd(i, s, o), (le = null), (Ve = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        J(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jd(t, e), (t = t.sibling);
}
function Jd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), qe(e), r & 4)) {
        try {
          xr(3, e, e.return), ki(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          xr(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), qe(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        qe(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _r(o, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Sf(o, i),
              Is(l, s);
            var u = Is(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Nf(o, d)
                : c === "dangerouslySetInnerHTML"
                  ? Ef(o, d)
                  : c === "children"
                    ? _r(o, d)
                    : Wl(o, c, d, u);
            }
            switch (l) {
              case "input":
                Ts(o, i);
                break;
              case "textarea":
                xf(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? An(o, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? An(o, !!i.multiple, i.defaultValue, !0)
                      : An(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Fr] = i;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if (($e(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      $e(t, e), qe(e);
      break;
    case 13:
      $e(t, e),
        qe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ca = ee())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (u = de) || c), $e(t, e), (de = u)) : $e(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (d = P = c; P !== null; ) {
              switch (((h = P), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, h, h.return);
                  break;
                case 1:
                  Pn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Pn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Zu(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (P = w)) : Zu(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Cf("display", s)));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), qe(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_r(o, ""), (r.flags &= -33));
          var i = qu(e);
          cl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = qu(e);
          ul(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function R1(e, t, n) {
  (P = e), Zd(e);
}
function Zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || vo;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || de;
        l = vo;
        var u = de;
        if (((vo = s), (de = a) && !u))
          for (P = o; P !== null; )
            (s = P),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ec(o)
                : a !== null
                  ? ((a.return = s), (P = a))
                  : ec(o);
        for (; i !== null; ) (P = i), Zd(i), (i = i.sibling);
        (P = o), (vo = l), (de = u);
      }
      Ju(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (P = i)) : Ju(e);
  }
}
function Ju(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Fu(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Rr(d);
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
              throw Error(E(163));
          }
        de || (t.flags & 512 && al(t));
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Zu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ec(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ki(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, o, a);
            }
          }
          var i = t.return;
          try {
            al(t);
          } catch (a) {
            J(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            al(t);
          } catch (a) {
            J(t, s, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (P = l);
      break;
    }
    P = t.return;
  }
}
var L1 = Math.ceil,
  ri = gt.ReactCurrentDispatcher,
  ka = gt.ReactCurrentOwner,
  be = gt.ReactCurrentBatchConfig,
  M = 0,
  se = null,
  te = null,
  ae = 0,
  Pe = 0,
  _n = $t(0),
  re = 0,
  $r = null,
  an = 0,
  Ei = 0,
  Ea = 0,
  kr = null,
  we = null,
  Ca = 0,
  Hn = 1 / 0,
  it = null,
  oi = !1,
  fl = null,
  zt = null,
  wo = !1,
  Pt = null,
  ii = 0,
  Er = 0,
  dl = null,
  Ro = -1,
  Lo = 0;
function ge() {
  return M & 6 ? ee() : Ro !== -1 ? Ro : (Ro = ee());
}
function It(e) {
  return e.mode & 1
    ? M & 2 && ae !== 0
      ? ae & -ae
      : h1.transition !== null
        ? (Lo === 0 && (Lo = Mf()), Lo)
        : ((e = j),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vf(e.type))),
          e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (dl = null), Error(E(185)));
  Yr(e, n, r),
    (!(M & 2) || e !== se) &&
      (e === se && (!(M & 2) && (Ei |= n), re === 4 && Ct(e, ae)),
      Ee(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Hn = ee() + 500), wi && Ht()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  hh(e, t);
  var r = $o(e, e === se ? ae : 0);
  if (r === 0)
    n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uu(n), t === 1))
      e.tag === 0 ? m1(tc.bind(null, e)) : ud(tc.bind(null, e)),
        c1(function () {
          !(M & 6) && Ht();
        }),
        (n = null);
    else {
      switch (jf(r)) {
        case 1:
          n = ql;
          break;
        case 4:
          n = Df;
          break;
        case 16:
          n = Bo;
          break;
        case 536870912:
          n = Ff;
          break;
        default:
          n = Bo;
      }
      n = lp(n, ep.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ep(e, t) {
  if (((Ro = -1), (Lo = 0), M & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = $o(e, e === se ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = si(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var i = np();
    (se !== e || ae !== t) && ((it = null), (Hn = ee() + 500), Zt(e, t));
    do
      try {
        D1();
        break;
      } catch (l) {
        tp(e, l);
      }
    while (!0);
    ua(),
      (ri.current = i),
      (M = o),
      te !== null ? (t = 0) : ((se = null), (ae = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = bs(e)), o !== 0 && ((r = o), (t = pl(e, o)))), t === 1)
    )
      throw ((n = $r), Zt(e, 0), Ct(e, r), Ee(e, ee()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !z1(o) &&
          ((t = si(e, r)),
          t === 2 && ((i = bs(e)), i !== 0 && ((r = i), (t = pl(e, i)))),
          t === 1))
      )
        throw ((n = $r), Zt(e, 0), Ct(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Yt(e, we, it);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Ca + 500 - ee()), 10 < t))
          ) {
            if ($o(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ys(Yt.bind(null, e, we, it), t);
            break;
          }
          Yt(e, we, it);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * L1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ys(Yt.bind(null, e, we, it), r);
            break;
          }
          Yt(e, we, it);
          break;
        case 5:
          Yt(e, we, it);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? ep.bind(null, e) : null;
}
function pl(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
    (e = si(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && ml(t)),
    e
  );
}
function ml(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function z1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ke(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ct(e, t) {
  for (
    t &= ~Ea,
      t &= ~Ei,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function tc(e) {
  if (M & 6) throw Error(E(327));
  Dn();
  var t = $o(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = si(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bs(e);
    r !== 0 && ((t = r), (n = pl(e, r)));
  }
  if (n === 1) throw ((n = $r), Zt(e, 0), Ct(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yt(e, we, it),
    Ee(e, ee()),
    null
  );
}
function Na(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Hn = ee() + 500), wi && Ht());
  }
}
function un(e) {
  Pt !== null && Pt.tag === 0 && !(M & 6) && Dn();
  var t = M;
  M |= 1;
  var n = be.transition,
    r = j;
  try {
    if (((be.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (be.transition = n), (M = t), !(M & 6) && Ht();
  }
}
function Pa() {
  (Pe = _n.current), $(_n);
}
function Zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), u1(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((sa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yo();
          break;
        case 3:
          Bn(), $(xe), $(pe), ha();
          break;
        case 5:
          ma(r);
          break;
        case 4:
          Bn();
          break;
        case 13:
          $(K);
          break;
        case 19:
          $(K);
          break;
        case 10:
          ca(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (te = e = Dt(e.current, null)),
    (ae = Pe = t),
    (re = 0),
    ($r = null),
    (Ea = Ei = an = 0),
    (we = kr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function tp(e, t) {
  do {
    var n = te;
    try {
      if ((ua(), (Oo.current = ni), ti)) {
        for (var r = X.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ti = !1;
      }
      if (
        ((ln = 0),
        (ie = ne = X = null),
        (Sr = !1),
        (br = 0),
        (ka.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), ($r = t), (te = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ae),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = $u(s);
          if (w !== null) {
            (w.flags &= -257),
              Hu(w, s, l, i, t),
              w.mode & 1 && Bu(i, u, t),
              (t = w),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(i, u, t), _a();
              break e;
            }
            a = Error(E(426));
          }
        } else if (W && l.mode & 1) {
          var x = $u(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Hu(x, s, l, i, t),
              la($n(a, l));
            break e;
          }
        }
        (i = a = $n(a, l)),
          re !== 4 && (re = 2),
          kr === null ? (kr = [i]) : kr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = jd(i, a, t);
              Du(i, p);
              break e;
            case 1:
              l = a;
              var f = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (zt === null || !zt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = bd(i, l, t);
                Du(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      op(n);
    } catch (k) {
      (t = k), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function np() {
  var e = ri.current;
  return (ri.current = ni), e === null ? ni : e;
}
function _a() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    se === null || (!(an & 268435455) && !(Ei & 268435455)) || Ct(se, ae);
}
function si(e, t) {
  var n = M;
  M |= 2;
  var r = np();
  (se !== e || ae !== t) && ((it = null), Zt(e, t));
  do
    try {
      I1();
      break;
    } catch (o) {
      tp(e, o);
    }
  while (!0);
  if ((ua(), (M = n), (ri.current = r), te !== null)) throw Error(E(261));
  return (se = null), (ae = 0), re;
}
function I1() {
  for (; te !== null; ) rp(te);
}
function D1() {
  for (; te !== null && !sh(); ) rp(te);
}
function rp(e) {
  var t = sp(e.alternate, e, Pe);
  (e.memoizedProps = e.pendingProps),
    t === null ? op(e) : (te = t),
    (ka.current = null);
}
function op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O1(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (te = null);
        return;
      }
    } else if (((n = _1(n, t, Pe)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Yt(e, t, n) {
  var r = j,
    o = be.transition;
  try {
    (be.transition = null), (j = 1), F1(e, t, n, r);
  } finally {
    (be.transition = o), (j = r);
  }
  return null;
}
function F1(e, t, n, r) {
  do Dn();
  while (Pt !== null);
  if (M & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (gh(e, i),
    e === se && ((te = se = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wo ||
      ((wo = !0),
      lp(Bo, function () {
        return Dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = be.transition), (be.transition = null);
    var s = j;
    j = 1;
    var l = M;
    (M |= 4),
      (ka.current = null),
      A1(e, n),
      Jd(n, e),
      n1(Ws),
      (Ho = !!Vs),
      (Ws = Vs = null),
      (e.current = n),
      R1(n),
      lh(),
      (M = l),
      (j = s),
      (be.transition = i);
  } else e.current = n;
  if (
    (wo && ((wo = !1), (Pt = e), (ii = o)),
    (i = e.pendingLanes),
    i === 0 && (zt = null),
    ch(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (oi) throw ((oi = !1), (e = fl), (fl = null), e);
  return (
    ii & 1 && e.tag !== 0 && Dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === dl ? Er++ : ((Er = 0), (dl = e))) : (Er = 0),
    Ht(),
    null
  );
}
function Dn() {
  if (Pt !== null) {
    var e = jf(ii),
      t = be.transition,
      n = j;
    try {
      if (((be.transition = null), (j = 16 > e ? 16 : e), Pt === null))
        var r = !1;
      else {
        if (((e = Pt), (Pt = null), (ii = 0), M & 6)) throw Error(E(331));
        var o = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var i = P,
            s = i.child;
          if (P.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (P = d);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var h = c.sibling,
                        w = c.return;
                      if ((Xd(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (P = h);
                        break;
                      }
                      P = w;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (P = s);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (P = p);
                break e;
              }
              P = i.return;
            }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          s = P;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (P = m);
          else
            e: for (s = f; P !== null; ) {
              if (((l = P), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(9, l);
                  }
                } catch (k) {
                  J(l, l.return, k);
                }
              if (l === s) {
                P = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (P = S);
                break e;
              }
              P = l.return;
            }
        }
        if (
          ((M = o), Ht(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(mi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (be.transition = t);
    }
  }
  return !1;
}
function nc(e, t, n) {
  (t = $n(n, t)),
    (t = jd(e, t, 1)),
    (e = Lt(e, t, 1)),
    (t = ge()),
    e !== null && (Yr(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) nc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = $n(n, e)),
            (e = bd(t, e, 1)),
            (t = Lt(t, e, 1)),
            (e = ge()),
            t !== null && (Yr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function M1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ae & n) === n &&
      (re === 4 || (re === 3 && (ae & 130023424) === ae && 500 > ee() - Ca)
        ? Zt(e, 0)
        : (Ea |= n)),
    Ee(e, t);
}
function ip(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ao), (ao <<= 1), !(ao & 130023424) && (ao = 4194304))
      : (t = 1));
  var n = ge();
  (e = dt(e, t)), e !== null && (Yr(e, t, n), Ee(e, n));
}
function j1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ip(e, n);
}
function b1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), ip(e, n);
}
var sp;
sp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) Se = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), P1(e, t, n);
      Se = !!(e.flags & 131072);
    }
  else (Se = !1), W && t.flags & 1048576 && cd(t, qo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ao(e, t), (e = t.pendingProps);
      var o = jn(t, pe.current);
      In(t, n), (o = ya(null, t, r, e, o, n));
      var i = va();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((i = !0), Ko(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            da(t),
            (o.updater = xi),
            (t.stateNode = o),
            (o._reactInternals = t),
            el(t, r, e, n),
            (t = rl(null, t, r, !0, i, n)))
          : ((t.tag = 0), W && i && ia(t), he(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ao(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = B1(r)),
          (e = He(r, e)),
          o)
        ) {
          case 0:
            t = nl(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        nl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Qu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Hd(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          gd(e, t),
          Zo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = $n(Error(E(423)), t)), (t = Yu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = $n(Error(E(424)), t)), (t = Yu(e, t, r, n, o));
            break e;
          } else
            for (
              _e = Rt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                W = !0,
                We = null,
                n = md(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bn(), r === o)) {
            t = pt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yd(t),
        e === null && Gs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Qs(r, o) ? (s = null) : i !== null && Qs(r, i) && (t.flags |= 32),
        $d(e, t),
        he(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Gs(t), null;
    case 13:
      return Vd(e, t, n);
    case 4:
      return (
        pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Vu(e, t, r, o, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          U(Go, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Ke(i.value, s)) {
            if (i.children === o.children && !xe.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Js(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Js(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        he(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        In(t, n),
        (o = Ue(o)),
        (r = r(o)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = He(r, t.pendingProps)),
        (o = He(r.type, o)),
        Wu(e, t, r, o, n)
      );
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Ao(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Ko(t)) : (e = !1),
        In(t, n),
        Md(t, r, o),
        el(t, r, o, n),
        rl(null, t, r, !0, e, n)
      );
    case 19:
      return Wd(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function lp(e, t) {
  return If(e, t);
}
function U1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new U1(e, t, n, r);
}
function Oa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function B1(e) {
  if (typeof e == "function") return Oa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yl)) return 11;
    if (e === Kl) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zo(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Oa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case yn:
        return en(n.children, o, i, t);
      case Ql:
        (s = 8), (o |= 8);
        break;
      case Cs:
        return (
          (e = je(12, n, t, o | 2)), (e.elementType = Cs), (e.lanes = i), e
        );
      case Ns:
        return (e = je(13, n, t, o)), (e.elementType = Ns), (e.lanes = i), e;
      case Ps:
        return (e = je(19, n, t, o)), (e.elementType = Ps), (e.lanes = i), e;
      case yf:
        return Ci(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hf:
              s = 10;
              break e;
            case gf:
              s = 9;
              break e;
            case Yl:
              s = 11;
              break e;
            case Kl:
              s = 14;
              break e;
            case xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function en(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Ci(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fs(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function ds(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qi(0)),
    (this.expirationTimes = Qi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ta(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new $1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    da(i),
    e
  );
}
function H1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ap(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return ad(e, n, t);
  }
  return t;
}
function up(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ta(n, r, !0, e, o, i, s, l, a)),
    (e.context = ap(null)),
    (n = e.current),
    (r = ge()),
    (o = It(n)),
    (i = ut(r, o)),
    (i.callback = t ?? null),
    Lt(n, i, o),
    (e.current.lanes = o),
    Yr(e, o, r),
    Ee(e, r),
    e
  );
}
function Ni(e, t, n, r) {
  var o = t.current,
    i = ge(),
    s = It(o);
  return (
    (n = ap(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Lt(o, t, s)),
    e !== null && (Ye(e, o, s, i), _o(e, o, s)),
    s
  );
}
function li(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Aa(e, t) {
  rc(e, t), (e = e.alternate) && rc(e, t);
}
function V1() {
  return null;
}
var cp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ra(e) {
  this._internalRoot = e;
}
Pi.prototype.render = Ra.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ni(e, t, null, null);
};
Pi.prototype.unmount = Ra.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function () {
      Ni(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function Pi(e) {
  this._internalRoot = e;
}
Pi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && Hf(e);
  }
};
function La(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _i(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oc() {}
function W1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = li(s);
        i.call(u);
      };
    }
    var s = up(t, r, e, 0, null, !1, !1, "", oc);
    return (
      (e._reactRootContainer = s),
      (e[ft] = s.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      un(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = li(a);
      l.call(u);
    };
  }
  var a = Ta(e, 0, !1, null, null, !1, !1, "", oc);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    un(function () {
      Ni(t, a, n, r);
    }),
    a
  );
}
function Oi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = li(s);
        l.call(a);
      };
    }
    Ni(t, s, e, o);
  } else s = W1(n, t, e, o, r);
  return li(s);
}
bf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 &&
          (Gl(t, n | 1), Ee(t, ee()), !(M & 6) && ((Hn = ee() + 500), Ht()));
      }
      break;
    case 13:
      un(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var o = ge();
          Ye(r, e, 1, o);
        }
      }),
        Aa(e, 1);
  }
};
Jl = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ge();
      Ye(t, e, 134217728, n);
    }
    Aa(e, 134217728);
  }
};
Uf = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = dt(e, t);
    if (n !== null) {
      var r = ge();
      Ye(n, e, t, r);
    }
    Aa(e, t);
  }
};
Bf = function () {
  return j;
};
$f = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
Fs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ts(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = vi(r);
            if (!o) throw Error(E(90));
            wf(r), Ts(r, o);
          }
        }
      }
      break;
    case "textarea":
      xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && An(e, !!n.multiple, t, !1);
  }
};
Of = Na;
Tf = un;
var Q1 = { usingClientEntryPoint: !1, Events: [Xr, xn, vi, Pf, _f, Na] },
  lr = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Y1 = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || V1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!So.isDisabled && So.supportsFiber)
    try {
      (mi = So.inject(Y1)), (nt = So);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!La(t)) throw Error(E(200));
  return H1(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!La(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = cp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ta(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new Ra(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Lf(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return un(e);
};
ze.hydrate = function (e, t, n) {
  if (!_i(t)) throw Error(E(200));
  return Oi(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!La(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = cp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = up(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[ft] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Pi(t);
};
ze.render = function (e, t, n) {
  if (!_i(t)) throw Error(E(200));
  return Oi(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!_i(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (un(function () {
        Oi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Na;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_i(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Oi(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function fp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp);
    } catch (e) {
      console.error(e);
    }
}
fp(), (ff.exports = ze);
var K1 = ff.exports,
  dp,
  ic = K1;
(dp = ic.createRoot), ic.hydrateRoot;
const sc = (e) => {
    const t = new Date(e),
      n = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
    return t.toLocaleDateString("pt-BR", n);
  },
  lc = (e, t) => {
    const n = e.getUTCFullYear(),
      r = e.getUTCMonth(),
      o = t.getUTCFullYear(),
      i = t.getUTCMonth();
    let s = (o - n) * 12 + (i - r);
    return t.getUTCDate() < e.getUTCDate() && s--, s;
  },
  X1 = ({
    badges: e,
    nitroData: t,
    boostData: n,
    onBadgeHover: r,
    onBadgeLeave: o,
  }) => {
    const i = (l) => {
        if (l.includes("nitro") && t) {
          const a = sc(t);
          r(`Assinante desde ${a}`);
        } else if (l.includes("boost") && n) {
          const a = sc(n);
          r(`Impulsionando o servidor desde ${a}`);
        } else
          l.includes("earlySupporter")
            ? r("Apoiador Inicial")
            : l.includes("staff")
              ? r("Owner")
              : l.includes("quest")
                ? r("Completou uma Missão")
                : r("");
      },
      s = [...e].sort((l, a) =>
        l.includes("staff")
          ? 1
          : a.includes("staff")
            ? -1
            : l.includes("quest")
              ? 1
              : a.includes("quest")
                ? -1
                : 0,
      );
    return O.jsx("div", {
      className: "flex space-x-2 mt-2",
      children: s.map((l, a) =>
        O.jsx(
          "div",
          {
            onMouseEnter: () => i(l),
            onMouseLeave: o,
            children: O.jsx("img", {
              src: l,
              alt: "badge",
              className: "w-8 h-8",
            }),
          },
          a,
        ),
      ),
    });
  },
  q1 = ({ message: e, show: t }) =>
    t
      ? O.jsx("div", {
          className:
            "absolute top-12 bg-black bg-opacity-40 text-white text-xs p-2 rounded flex justify-center items-center",
          children: e,
        })
      : null,
  G1 = {
    prefix: "fab",
    iconName: "steam",
    icon: [
      496,
      512,
      [],
      "f1b6",
      "M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z",
    ],
  },
  pp = {
    prefix: "fab",
    iconName: "spotify",
    icon: [
      496,
      512,
      [],
      "f1bc",
      "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z",
    ],
  },
  J1 = {
    prefix: "fab",
    iconName: "x-twitter",
    icon: [
      512,
      512,
      [],
      "e61b",
      "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
    ],
  },
  Z1 = {
    prefix: "fab",
    iconName: "tiktok",
    icon: [
      448,
      512,
      [],
      "e07b",
      "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
    ],
  },
  e0 = {
    prefix: "fab",
    iconName: "square-lastfm",
    icon: [
      448,
      512,
      ["lastfm-square"],
      "f203",
      "M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM210.7 280.8c-1.8-5.5-3.4-10.8-5-15.9c-12.9-41.9-21-68.4-58-68.4c-22.4 0-45.1 16.1-45.1 61.2c0 35.2 18 57.2 43.3 57.2c28.6 0 47.6-21.3 47.6-21.3l11.7 31.9s-19.8 19.4-61.2 19.4c-51.3 0-79.9-30.1-79.9-85.8c0-57.9 28.6-92 82.5-92c67.9 0 79.3 35.3 96.4 88.4c1.4 4.4 2.9 8.9 4.4 13.5c8.8 26.8 24.2 46.2 61.2 46.2c24.9 0 38.1-5.5 38.1-19.1c0-17.5-16.9-21.2-40-26.4c-3.2-.7-6.5-1.4-9.9-2.2c-30.4-7.3-42.5-23.1-42.5-48c0-40 32.3-52.4 65.2-52.4c37.4 0 60.1 13.6 63 46.6l-36.7 4.4c-1.5-15.8-11-22.4-28.6-22.4c-16.1 0-26 7.3-26 19.8c0 11 4.8 17.6 20.9 21.3c2.2 .5 4.5 1 6.7 1.4c31.1 6.5 65.1 13.7 65.1 56.1c.1 36.7-30.7 50.6-76.1 50.6c-63.4 0-85.4-28.6-97.1-64.1z",
    ],
  },
  t0 = e0,
  n0 = {
    prefix: "fab",
    iconName: "instagram",
    icon: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
  },
  ac = () => {};
let za = {},
  mp = {},
  hp = null,
  gp = { mark: ac, measure: ac };
try {
  typeof window < "u" && (za = window),
    typeof document < "u" && (mp = document),
    typeof MutationObserver < "u" && (hp = MutationObserver),
    typeof performance < "u" && (gp = performance);
} catch {}
const { userAgent: uc = "" } = za.navigator || {},
  jt = za,
  H = mp,
  cc = hp,
  xo = gp;
jt.document;
const yt =
    !!H.documentElement &&
    !!H.head &&
    typeof H.addEventListener == "function" &&
    typeof H.createElement == "function",
  yp = ~uc.indexOf("MSIE") || ~uc.indexOf("Trident/");
var Y = "classic",
  vp = "duotone",
  Te = "sharp",
  Ae = "sharp-duotone",
  r0 = [Y, vp, Te, Ae],
  o0 = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  },
  fc = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  i0 = ["kit"],
  s0 = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  l0 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  a0 = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  u0 = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": { 900: "fad" },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
  },
  c0 = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": { "fa-solid": "fasds" },
  },
  f0 = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"],
  },
  d0 = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": { fasds: "fa-solid" },
  },
  p0 = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
    },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": { solid: "fasds" },
  },
  wp = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
  },
  m0 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  Sp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  h0 = Sp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  pr = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  g0 = [
    ...Object.keys(f0),
    ...m0,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    pr.GROUP,
    pr.SWAP_OPACITY,
    pr.PRIMARY,
    pr.SECONDARY,
  ]
    .concat(Sp.map((e) => "".concat(e, "x")))
    .concat(h0.map((e) => "w-".concat(e))),
  y0 = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  v0 = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  w0 = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  dc = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
const mt = "___FONT_AWESOME___",
  hl = 16,
  xp = "fa",
  kp = "svg-inline--fa",
  cn = "data-fa-i2svg",
  gl = "data-fa-pseudo-element",
  S0 = "data-fa-pseudo-element-pending",
  Ia = "data-prefix",
  Da = "data-icon",
  pc = "fontawesome-i2svg",
  x0 = "async",
  k0 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Ep = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  Cp = [Y, Te, Ae];
function Gr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Y];
    },
  });
}
const Np = { ...wp };
Np[Y] = { ...wp[Y], ...fc.kit, ...fc["kit-duotone"] };
const tn = Gr(Np),
  yl = { ...p0 };
yl[Y] = { ...yl[Y], ...dc.kit, ...dc["kit-duotone"] };
const Hr = Gr(yl),
  vl = { ...d0 };
vl[Y] = { ...vl[Y], ...w0.kit };
const nn = Gr(vl),
  wl = { ...c0 };
wl[Y] = { ...wl[Y], ...v0.kit };
const E0 = Gr(wl),
  C0 = s0,
  Pp = "fa-layers-text",
  N0 = l0,
  P0 = { ...o0 };
Gr(P0);
const _0 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  ps = pr,
  Vn = new Set();
Object.keys(Hr[Y]).map(Vn.add.bind(Vn));
Object.keys(Hr[Te]).map(Vn.add.bind(Vn));
Object.keys(Hr[Ae]).map(Vn.add.bind(Vn));
const O0 = [...i0, ...g0],
  Cr = jt.FontAwesomeConfig || {};
function T0(e) {
  var t = H.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function A0(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
H &&
  typeof H.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [n, r] = t;
    const o = A0(T0(n));
    o != null && (Cr[r] = o);
  });
const _p = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: xp,
  replacementClass: kp,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Cr.familyPrefix && (Cr.cssPrefix = Cr.familyPrefix);
const Wn = { ..._p, ...Cr };
Wn.autoReplaceSvg || (Wn.observeMutations = !1);
const A = {};
Object.keys(_p).forEach((e) => {
  Object.defineProperty(A, e, {
    enumerable: !0,
    set: function (t) {
      (Wn[e] = t), Nr.forEach((n) => n(A));
    },
    get: function () {
      return Wn[e];
    },
  });
});
Object.defineProperty(A, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    (Wn.cssPrefix = e), Nr.forEach((t) => t(A));
  },
  get: function () {
    return Wn.cssPrefix;
  },
});
jt.FontAwesomeConfig = A;
const Nr = [];
function R0(e) {
  return (
    Nr.push(e),
    () => {
      Nr.splice(Nr.indexOf(e), 1);
    }
  );
}
const wt = hl,
  et = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function L0(e) {
  if (!e || !yt) return;
  const t = H.createElement("style");
  t.setAttribute("type", "text/css"), (t.innerHTML = e);
  const n = H.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const i = n[o],
      s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
  }
  return H.head.insertBefore(t, r), e;
}
const z0 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Vr() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += z0[(Math.random() * 62) | 0];
  return t;
}
function Xn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Fa(e) {
  return e.classList
    ? Xn(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Op(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function I0(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + "".concat(n, '="').concat(Op(e[n]), '" '), "")
    .trim();
}
function Ti(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
    "",
  );
}
function Ma(e) {
  return (
    e.size !== et.size ||
    e.x !== et.x ||
    e.y !== et.y ||
    e.rotate !== et.rotate ||
    e.flipX ||
    e.flipY
  );
}
function D0(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e;
  const o = { transform: "translate(".concat(n / 2, " 256)") },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    s = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    a = { transform: "".concat(i, " ").concat(s, " ").concat(l) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: a, path: u };
}
function F0(e) {
  let {
      transform: t,
      width: n = hl,
      height: r = hl,
      startCentered: o = !1,
    } = e,
    i = "";
  return (
    o && yp
      ? (i += "translate("
          .concat(t.x / wt - n / 2, "em, ")
          .concat(t.y / wt - r / 2, "em) "))
      : o
        ? (i += "translate(calc(-50% + "
            .concat(t.x / wt, "em), calc(-50% + ")
            .concat(t.y / wt, "em)) "))
        : (i += "translate(".concat(t.x / wt, "em, ").concat(t.y / wt, "em) ")),
    (i += "scale("
      .concat((t.size / wt) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / wt) * (t.flipY ? -1 : 1), ") ")),
    (i += "rotate(".concat(t.rotate, "deg) ")),
    i
  );
}
var M0 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Tp() {
  const e = xp,
    t = kp,
    n = A.cssPrefix,
    r = A.replacementClass;
  let o = M0;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"),
      s = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    o = o
      .replace(i, ".".concat(n, "-"))
      .replace(s, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return o;
}
let mc = !1;
function ms() {
  A.autoAddCss && !mc && (L0(Tp()), (mc = !0));
}
var j0 = {
  mixout() {
    return { dom: { css: Tp, insertCss: ms } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ms();
      },
      beforeI2svg() {
        ms();
      },
    };
  },
};
const ht = jt || {};
ht[mt] || (ht[mt] = {});
ht[mt].styles || (ht[mt].styles = {});
ht[mt].hooks || (ht[mt].hooks = {});
ht[mt].shims || (ht[mt].shims = []);
var tt = ht[mt];
const Ap = [],
  Rp = function () {
    H.removeEventListener("DOMContentLoaded", Rp), (ai = 1), Ap.map((e) => e());
  };
let ai = !1;
yt &&
  ((ai = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    H.readyState,
  )),
  ai || H.addEventListener("DOMContentLoaded", Rp));
function b0(e) {
  yt && (ai ? setTimeout(e, 0) : Ap.push(e));
}
function Jr(e) {
  const { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == "string"
    ? Op(e)
    : "<"
        .concat(t, " ")
        .concat(I0(n), ">")
        .concat(r.map(Jr).join(""), "</")
        .concat(t, ">");
}
function hc(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var hs = function (t, n, r, o) {
  var i = Object.keys(t),
    s = i.length,
    l = n,
    a,
    u,
    c;
  for (r === void 0 ? ((a = 1), (c = t[i[0]])) : ((a = 0), (c = r)); a < s; a++)
    (u = i[a]), (c = l(c, t[u], u, t));
  return c;
};
function U0(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320
        ? t.push(((o & 1023) << 10) + (i & 1023) + 65536)
        : (t.push(o), n--);
    } else t.push(o);
  }
  return t;
}
function Sl(e) {
  const t = U0(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function B0(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t),
    o;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((o = e.charCodeAt(t + 1)), o >= 56320 && o <= 57343)
    ? (r - 55296) * 1024 + o - 56320 + 65536
    : r;
}
function gc(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function xl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = n,
    o = gc(t);
  typeof tt.hooks.addPack == "function" && !r
    ? tt.hooks.addPack(e, gc(t))
    : (tt.styles[e] = { ...(tt.styles[e] || {}), ...o }),
    e === "fas" && xl("fa", t);
}
const { styles: Kt, shims: $0 } = tt,
  H0 = {
    [Y]: Object.values(nn[Y]),
    [Te]: Object.values(nn[Te]),
    [Ae]: Object.values(nn[Ae]),
  };
let ja = null,
  Lp = {},
  zp = {},
  Ip = {},
  Dp = {},
  Fp = {};
const V0 = {
  [Y]: Object.keys(tn[Y]),
  [Te]: Object.keys(tn[Te]),
  [Ae]: Object.keys(tn[Ae]),
};
function W0(e) {
  return ~O0.indexOf(e);
}
function Q0(e, t) {
  const n = t.split("-"),
    r = n[0],
    o = n.slice(1).join("-");
  return r === e && o !== "" && !W0(o) ? o : null;
}
const Mp = () => {
  const e = (r) => hs(Kt, (o, i, s) => ((o[s] = hs(i, r, {})), o), {});
  (Lp = e(
    (r, o, i) => (
      o[3] && (r[o[3]] = i),
      o[2] &&
        o[2]
          .filter((l) => typeof l == "number")
          .forEach((l) => {
            r[l.toString(16)] = i;
          }),
      r
    ),
  )),
    (zp = e(
      (r, o, i) => (
        (r[i] = i),
        o[2] &&
          o[2]
            .filter((l) => typeof l == "string")
            .forEach((l) => {
              r[l] = i;
            }),
        r
      ),
    )),
    (Fp = e((r, o, i) => {
      const s = o[2];
      return (
        (r[i] = i),
        s.forEach((l) => {
          r[l] = i;
        }),
        r
      );
    }));
  const t = "far" in Kt || A.autoFetchSvg,
    n = hs(
      $0,
      (r, o) => {
        const i = o[0];
        let s = o[1];
        const l = o[2];
        return (
          s === "far" && !t && (s = "fas"),
          typeof i == "string" && (r.names[i] = { prefix: s, iconName: l }),
          typeof i == "number" &&
            (r.unicodes[i.toString(16)] = { prefix: s, iconName: l }),
          r
        );
      },
      { names: {}, unicodes: {} },
    );
  (Ip = n.names),
    (Dp = n.unicodes),
    (ja = Ai(A.styleDefault, { family: A.familyDefault }));
};
R0((e) => {
  ja = Ai(e.styleDefault, { family: A.familyDefault });
});
Mp();
function ba(e, t) {
  return (Lp[e] || {})[t];
}
function Y0(e, t) {
  return (zp[e] || {})[t];
}
function _t(e, t) {
  return (Fp[e] || {})[t];
}
function jp(e) {
  return Ip[e] || { prefix: null, iconName: null };
}
function K0(e) {
  const t = Dp[e],
    n = ba("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function bt() {
  return ja;
}
const Ua = () => ({ prefix: null, iconName: null, rest: [] });
function Ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: n = Y } = t,
    r = tn[n][e],
    o = Hr[n][e] || Hr[n][r],
    i = e in tt.styles ? e : null;
  return o || i || null;
}
const X0 = {
  [Y]: Object.keys(nn[Y]),
  [Te]: Object.keys(nn[Te]),
  [Ae]: Object.keys(nn[Ae]),
};
function Ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: n = !1 } = t,
    r = {
      [Y]: "".concat(A.cssPrefix, "-").concat(Y),
      [Te]: "".concat(A.cssPrefix, "-").concat(Te),
      [Ae]: "".concat(A.cssPrefix, "-").concat(Ae),
    };
  let o = null,
    i = Y;
  const s = r0.filter((a) => a !== vp);
  s.forEach((a) => {
    (e.includes(r[a]) || e.some((u) => X0[a].includes(u))) && (i = a);
  });
  const l = e.reduce((a, u) => {
    const c = Q0(A.cssPrefix, u);
    if (
      (Kt[u]
        ? ((u = H0[i].includes(u) ? E0[i][u] : u), (o = u), (a.prefix = u))
        : V0[i].indexOf(u) > -1
          ? ((o = u), (a.prefix = Ai(u, { family: i })))
          : c
            ? (a.iconName = c)
            : u !== A.replacementClass &&
              !s.some((d) => u === r[d]) &&
              a.rest.push(u),
      !n && a.prefix && a.iconName)
    ) {
      const d = o === "fa" ? jp(a.iconName) : {},
        h = _t(a.prefix, a.iconName);
      d.prefix && (o = null),
        (a.iconName = d.iconName || h || a.iconName),
        (a.prefix = d.prefix || a.prefix),
        a.prefix === "far" &&
          !Kt.far &&
          Kt.fas &&
          !A.autoFetchSvg &&
          (a.prefix = "fas");
    }
    return a;
  }, Ua());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      i === Te &&
      (Kt.fass || A.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = _t(l.prefix, l.iconName) || l.iconName)),
    !l.prefix &&
      i === Ae &&
      (Kt.fasds || A.autoFetchSvg) &&
      ((l.prefix = "fasds"),
      (l.iconName = _t(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || o === "fa") && (l.prefix = bt() || "fas"),
    l
  );
}
class q0 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((i) => {
      (this.definitions[i] = { ...(this.definitions[i] || {}), ...o[i] }),
        xl(i, o[i]);
      const s = nn[Y][i];
      s && xl(s, o[i]), Mp();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
    return (
      Object.keys(r).map((o) => {
        const { prefix: i, iconName: s, icon: l } = r[o],
          a = l[2];
        t[i] || (t[i] = {}),
          a.length > 0 &&
            a.forEach((u) => {
              typeof u == "string" && (t[i][u] = l);
            }),
          (t[i][s] = l);
      }),
      t
    );
  }
}
let yc = [],
  On = {};
const Fn = {},
  G0 = Object.keys(Fn);
function J0(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (yc = e),
    (On = {}),
    Object.keys(Fn).forEach((r) => {
      G0.indexOf(r) === -1 && delete Fn[r];
    }),
    yc.forEach((r) => {
      const o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach((i) => {
          typeof o[i] == "function" && (n[i] = o[i]),
            typeof o[i] == "object" &&
              Object.keys(o[i]).forEach((s) => {
                n[i] || (n[i] = {}), (n[i][s] = o[i][s]);
              });
        }),
        r.hooks)
      ) {
        const i = r.hooks();
        Object.keys(i).forEach((s) => {
          On[s] || (On[s] = []), On[s].push(i[s]);
        });
      }
      r.provides && r.provides(Fn);
    }),
    n
  );
}
function kl(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  return (
    (On[e] || []).forEach((s) => {
      t = s.apply(null, [t, ...r]);
    }),
    t
  );
}
function fn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (On[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Ut() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Fn[e] ? Fn[e].apply(null, t) : void 0;
}
function El(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e;
  const n = e.prefix || bt();
  if (t)
    return (t = _t(n, t) || t), hc(bp.definitions, n, t) || hc(tt.styles, n, t);
}
const bp = new q0(),
  Z0 = () => {
    (A.autoReplaceSvg = !1), (A.observeMutations = !1), fn("noAuto");
  },
  eg = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return yt
        ? (fn("beforeI2svg", e), Ut("pseudoElements2svg", e), Ut("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      A.autoReplaceSvg === !1 && (A.autoReplaceSvg = !0),
        (A.observeMutations = !0),
        b0(() => {
          ng({ autoReplaceSvgRoot: t }), fn("watch", e);
        });
    },
  },
  tg = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: _t(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          n = Ai(e[0]);
        return { prefix: n, iconName: _t(n, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(A.cssPrefix, "-")) > -1 || e.match(C0))
      ) {
        const t = Ri(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || bt(),
          iconName: _t(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        const t = bt();
        return { prefix: t, iconName: _t(t, e) || e };
      }
    },
  },
  De = {
    noAuto: Z0,
    config: A,
    dom: eg,
    parse: tg,
    library: bp,
    findIconDefinition: El,
    toHtml: Jr,
  },
  ng = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = H } = e;
    (Object.keys(tt.styles).length > 0 || A.autoFetchSvg) &&
      yt &&
      A.autoReplaceSvg &&
      De.dom.i2svg({ node: t });
  };
function Li(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((n) => Jr(n));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!yt) return;
        const n = H.createElement("div");
        return (n.innerHTML = e.html), n.children;
      },
    }),
    e
  );
}
function rg(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: i,
    transform: s,
  } = e;
  if (Ma(s) && n.found && !r.found) {
    const { width: l, height: a } = n,
      u = { x: l / a / 2, y: 0.5 };
    o.style = Ti({
      ...i,
      "transform-origin": ""
        .concat(u.x + s.x / 16, "em ")
        .concat(u.y + s.y / 16, "em"),
    });
  }
  return [{ tag: "svg", attributes: o, children: t }];
}
function og(e) {
  let { prefix: t, iconName: n, children: r, attributes: o, symbol: i } = e;
  const s = i === !0 ? "".concat(t, "-").concat(A.cssPrefix, "-").concat(n) : i;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [{ tag: "symbol", attributes: { ...o, id: s }, children: r }],
    },
  ];
}
function Ba(e) {
  const {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: o,
      transform: i,
      symbol: s,
      title: l,
      maskId: a,
      titleId: u,
      extra: c,
      watchable: d = !1,
    } = e,
    { width: h, height: w } = n.found ? n : t,
    g = r === "fak",
    v = [A.replacementClass, o ? "".concat(A.cssPrefix, "-").concat(o) : ""]
      .filter((k) => c.classes.indexOf(k) === -1)
      .filter((k) => k !== "" || !!k)
      .concat(c.classes)
      .join(" ");
  let x = {
    children: [],
    attributes: {
      ...c.attributes,
      "data-prefix": r,
      "data-icon": o,
      class: v,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(w),
    },
  };
  const p =
    g && !~c.classes.indexOf("fa-fw")
      ? { width: "".concat((h / w) * 16 * 0.0625, "em") }
      : {};
  d && (x.attributes[cn] = ""),
    l &&
      (x.children.push({
        tag: "title",
        attributes: {
          id: x.attributes["aria-labelledby"] || "title-".concat(u || Vr()),
        },
        children: [l],
      }),
      delete x.attributes.title);
  const f = {
      ...x,
      prefix: r,
      iconName: o,
      main: t,
      mask: n,
      maskId: a,
      transform: i,
      symbol: s,
      styles: { ...p, ...c.styles },
    },
    { children: m, attributes: S } =
      n.found && t.found
        ? Ut("generateAbstractMask", f) || { children: [], attributes: {} }
        : Ut("generateAbstractIcon", f) || { children: [], attributes: {} };
  return (f.children = m), (f.attributes = S), s ? og(f) : rg(f);
}
function vc(e) {
  const {
      content: t,
      width: n,
      height: r,
      transform: o,
      title: i,
      extra: s,
      watchable: l = !1,
    } = e,
    a = {
      ...s.attributes,
      ...(i ? { title: i } : {}),
      class: s.classes.join(" "),
    };
  l && (a[cn] = "");
  const u = { ...s.styles };
  Ma(o) &&
    ((u.transform = F0({
      transform: o,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (u["-webkit-transform"] = u.transform));
  const c = Ti(u);
  c.length > 0 && (a.style = c);
  const d = [];
  return (
    d.push({ tag: "span", attributes: a, children: [t] }),
    i &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
    d
  );
}
function ig(e) {
  const { content: t, title: n, extra: r } = e,
    o = {
      ...r.attributes,
      ...(n ? { title: n } : {}),
      class: r.classes.join(" "),
    },
    i = Ti(r.styles);
  i.length > 0 && (o.style = i);
  const s = [];
  return (
    s.push({ tag: "span", attributes: o, children: [t] }),
    n &&
      s.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    s
  );
}
const { styles: gs } = tt;
function Cl(e) {
  const t = e[0],
    n = e[1],
    [r] = e.slice(4);
  let o = null;
  return (
    Array.isArray(r)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(A.cssPrefix, "-").concat(ps.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(A.cssPrefix, "-").concat(ps.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(A.cssPrefix, "-").concat(ps.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
const sg = { found: !1, width: 512, height: 512 };
function lg(e, t) {
  !Ep &&
    !A.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
    );
}
function Nl(e, t) {
  let n = t;
  return (
    t === "fa" && A.styleDefault !== null && (t = bt()),
    new Promise((r, o) => {
      if (n === "fa") {
        const i = jp(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && gs[t] && gs[t][e]) {
        const i = gs[t][e];
        return r(Cl(i));
      }
      lg(e, t),
        r({
          ...sg,
          icon: A.showMissingIcons && e ? Ut("missingIconAbstract") || {} : {},
        });
    })
  );
}
const wc = () => {},
  Pl =
    A.measurePerformance && xo && xo.mark && xo.measure
      ? xo
      : { mark: wc, measure: wc },
  mr = 'FA "6.6.0"',
  ag = (e) => (Pl.mark("".concat(mr, " ").concat(e, " begins")), () => Up(e)),
  Up = (e) => {
    Pl.mark("".concat(mr, " ").concat(e, " ends")),
      Pl.measure(
        "".concat(mr, " ").concat(e),
        "".concat(mr, " ").concat(e, " begins"),
        "".concat(mr, " ").concat(e, " ends"),
      );
  };
var $a = { begin: ag, end: Up };
const Io = () => {};
function Sc(e) {
  return typeof (e.getAttribute ? e.getAttribute(cn) : null) == "string";
}
function ug(e) {
  const t = e.getAttribute ? e.getAttribute(Ia) : null,
    n = e.getAttribute ? e.getAttribute(Da) : null;
  return t && n;
}
function cg(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(A.replacementClass)
  );
}
function fg() {
  return A.autoReplaceSvg === !0
    ? Do.replace
    : Do[A.autoReplaceSvg] || Do.replace;
}
function dg(e) {
  return H.createElementNS("http://www.w3.org/2000/svg", e);
}
function pg(e) {
  return H.createElement(e);
}
function Bp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: n = e.tag === "svg" ? dg : pg } = t;
  if (typeof e == "string") return H.createTextNode(e);
  const r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (i) {
      r.setAttribute(i, e.attributes[i]);
    }),
    (e.children || []).forEach(function (i) {
      r.appendChild(Bp(i, { ceFn: n }));
    }),
    r
  );
}
function mg(e) {
  let t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
const Do = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(Bp(n), t);
        }),
        t.getAttribute(cn) === null && A.keepOriginalSource)
      ) {
        let n = H.createComment(mg(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      n = e[1];
    if (~Fa(t).indexOf(A.replacementClass)) return Do.replace(e);
    const r = new RegExp("".concat(A.cssPrefix, "-.*"));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const i = n[0].attributes.class
        .split(" ")
        .reduce(
          (s, l) => (
            l === A.replacementClass || l.match(r)
              ? s.toSvg.push(l)
              : s.toNode.push(l),
            s
          ),
          { toNode: [], toSvg: [] },
        );
      (n[0].attributes.class = i.toSvg.join(" ")),
        i.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", i.toNode.join(" "));
    }
    const o = n.map((i) => Jr(i)).join(`
`);
    t.setAttribute(cn, ""), (t.innerHTML = o);
  },
};
function xc(e) {
  e();
}
function $p(e, t) {
  const n = typeof t == "function" ? t : Io;
  if (e.length === 0) n();
  else {
    let r = xc;
    A.mutateApproach === x0 && (r = jt.requestAnimationFrame || xc),
      r(() => {
        const o = fg(),
          i = $a.begin("mutate");
        e.map(o), i(), n();
      });
  }
}
let Ha = !1;
function Hp() {
  Ha = !0;
}
function _l() {
  Ha = !1;
}
let ui = null;
function kc(e) {
  if (!cc || !A.observeMutations) return;
  const {
    treeCallback: t = Io,
    nodeCallback: n = Io,
    pseudoElementsCallback: r = Io,
    observeMutationsRoot: o = H,
  } = e;
  (ui = new cc((i) => {
    if (Ha) return;
    const s = bt();
    Xn(i).forEach((l) => {
      if (
        (l.type === "childList" &&
          l.addedNodes.length > 0 &&
          !Sc(l.addedNodes[0]) &&
          (A.searchPseudoElements && r(l.target), t(l.target)),
        l.type === "attributes" &&
          l.target.parentNode &&
          A.searchPseudoElements &&
          r(l.target.parentNode),
        l.type === "attributes" && Sc(l.target) && ~_0.indexOf(l.attributeName))
      )
        if (l.attributeName === "class" && ug(l.target)) {
          const { prefix: a, iconName: u } = Ri(Fa(l.target));
          l.target.setAttribute(Ia, a || s), u && l.target.setAttribute(Da, u);
        } else cg(l.target) && n(l.target);
    });
  })),
    yt &&
      ui.observe(o, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function hg() {
  ui && ui.disconnect();
}
function gg(e) {
  const t = e.getAttribute("style");
  let n = [];
  return (
    t &&
      (n = t.split(";").reduce((r, o) => {
        const i = o.split(":"),
          s = i[0],
          l = i.slice(1);
        return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function yg(e) {
  const t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Ri(Fa(e));
  return (
    o.prefix || (o.prefix = bt()),
    t && n && ((o.prefix = t), (o.iconName = n)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          Y0(o.prefix, e.innerText) || ba(o.prefix, Sl(e.innerText))),
      !o.iconName &&
        A.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function vg(e) {
  const t = Xn(e.attributes).reduce(
      (o, i) => (
        o.name !== "class" && o.name !== "style" && (o[i.name] = i.value), o
      ),
      {},
    ),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    A.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(A.replacementClass, "-title-")
            .concat(r || Vr()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function wg() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: et,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Ec(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: n, prefix: r, rest: o } = yg(e),
    i = vg(e),
    s = kl("parseNodeAttributes", {}, e);
  let l = t.styleParser ? gg(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: et,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: o, styles: l, attributes: i },
    ...s,
  };
}
const { styles: Sg } = tt;
function Vp(e) {
  const t = A.autoReplaceSvg === "nest" ? Ec(e, { styleParser: !1 }) : Ec(e);
  return ~t.extra.classes.indexOf(Pp)
    ? Ut("generateLayersText", e, t)
    : Ut("generateSvgReplacementMutation", e, t);
}
let ot = new Set();
Cp.map((e) => {
  ot.add("fa-".concat(e));
});
Object.keys(tn[Y]).map(ot.add.bind(ot));
Object.keys(tn[Te]).map(ot.add.bind(ot));
Object.keys(tn[Ae]).map(ot.add.bind(ot));
ot = [...ot];
function Cc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!yt) return Promise.resolve();
  const n = H.documentElement.classList,
    r = (c) => n.add("".concat(pc, "-").concat(c)),
    o = (c) => n.remove("".concat(pc, "-").concat(c)),
    i = A.autoFetchSvg
      ? ot
      : Cp.map((c) => "fa-".concat(c)).concat(Object.keys(Sg));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(Pp, ":not([").concat(cn, "])")]
    .concat(i.map((c) => ".".concat(c, ":not([").concat(cn, "])")))
    .join(", ");
  if (s.length === 0) return Promise.resolve();
  let l = [];
  try {
    l = Xn(e.querySelectorAll(s));
  } catch {}
  if (l.length > 0) r("pending"), o("complete");
  else return Promise.resolve();
  const a = $a.begin("onTree"),
    u = l.reduce((c, d) => {
      try {
        const h = Vp(d);
        h && c.push(h);
      } catch (h) {
        Ep || (h.name === "MissingIcon" && console.error(h));
      }
      return c;
    }, []);
  return new Promise((c, d) => {
    Promise.all(u)
      .then((h) => {
        $p(h, () => {
          r("active"),
            r("complete"),
            o("pending"),
            typeof t == "function" && t(),
            a(),
            c();
        });
      })
      .catch((h) => {
        a(), d(h);
      });
  });
}
function xg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Vp(e).then((n) => {
    n && $p([n], t);
  });
}
function kg(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : El(t || {});
    let { mask: o } = n;
    return o && (o = (o || {}).icon ? o : El(o || {})), e(r, { ...n, mask: o });
  };
}
const Eg = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = et,
    symbol: r = !1,
    mask: o = null,
    maskId: i = null,
    title: s = null,
    titleId: l = null,
    classes: a = [],
    attributes: u = {},
    styles: c = {},
  } = t;
  if (!e) return;
  const { prefix: d, iconName: h, icon: w } = e;
  return Li(
    { type: "icon", ...e },
    () => (
      fn("beforeDOMElementCreation", { iconDefinition: e, params: t }),
      A.autoA11y &&
        (s
          ? (u["aria-labelledby"] = ""
              .concat(A.replacementClass, "-title-")
              .concat(l || Vr()))
          : ((u["aria-hidden"] = "true"), (u.focusable = "false"))),
      Ba({
        icons: {
          main: Cl(w),
          mask: o
            ? Cl(o.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: d,
        iconName: h,
        transform: { ...et, ...n },
        symbol: r,
        title: s,
        maskId: i,
        titleId: l,
        extra: { attributes: u, styles: c, classes: a },
      })
    ),
  );
};
var Cg = {
    mixout() {
      return { icon: kg(Eg) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = Cc), (e.nodeCallback = xg), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: n = H, callback: r = () => {} } = t;
        return Cc(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: r,
            title: o,
            titleId: i,
            prefix: s,
            transform: l,
            symbol: a,
            mask: u,
            maskId: c,
            extra: d,
          } = n;
          return new Promise((h, w) => {
            Promise.all([
              Nl(r, s),
              u.iconName
                ? Nl(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((g) => {
                let [v, x] = g;
                h([
                  t,
                  Ba({
                    icons: { main: v, mask: x },
                    prefix: s,
                    iconName: r,
                    transform: l,
                    symbol: a,
                    maskId: c,
                    title: o,
                    titleId: i,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(w);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: n,
            attributes: r,
            main: o,
            transform: i,
            styles: s,
          } = t;
          const l = Ti(s);
          l.length > 0 && (r.style = l);
          let a;
          return (
            Ma(i) &&
              (a = Ut("generateAbstractTransformGrouping", {
                main: o,
                transform: i,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            n.push(a || o.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  Ng = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: n = [] } = t;
          return Li({ type: "layer" }, () => {
            fn("beforeDOMElementCreation", { assembler: e, params: t });
            let r = [];
            return (
              e((o) => {
                Array.isArray(o)
                  ? o.map((i) => {
                      r = r.concat(i.abstract);
                    })
                  : (r = r.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(A.cssPrefix, "-layers"), ...n].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  Pg = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: n = null,
            classes: r = [],
            attributes: o = {},
            styles: i = {},
          } = t;
          return Li(
            { type: "counter", content: e },
            () => (
              fn("beforeDOMElementCreation", { content: e, params: t }),
              ig({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: o,
                  styles: i,
                  classes: ["".concat(A.cssPrefix, "-layers-counter"), ...r],
                },
              })
            ),
          );
        },
      };
    },
  },
  _g = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: n = et,
            title: r = null,
            classes: o = [],
            attributes: i = {},
            styles: s = {},
          } = t;
          return Li(
            { type: "text", content: e },
            () => (
              fn("beforeDOMElementCreation", { content: e, params: t }),
              vc({
                content: e,
                transform: { ...et, ...n },
                title: r,
                extra: {
                  attributes: i,
                  styles: s,
                  classes: ["".concat(A.cssPrefix, "-layers-text"), ...o],
                },
              })
            ),
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: r, transform: o, extra: i } = n;
        let s = null,
          l = null;
        if (yp) {
          const a = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          (s = u.width / a), (l = u.height / a);
        }
        return (
          A.autoA11y && !r && (i.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            vc({
              content: t.innerHTML,
              width: s,
              height: l,
              transform: o,
              title: r,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const Og = new RegExp('"', "ug"),
  Nc = [1105920, 1112319],
  Pc = { FontAwesome: { normal: "fas", 400: "fas" }, ...u0, ...a0, ...y0 },
  Ol = Object.keys(Pc).reduce((e, t) => ((e[t.toLowerCase()] = Pc[t]), e), {}),
  Tg = Object.keys(Ol).reduce((e, t) => {
    const n = Ol[t];
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
  }, {});
function Ag(e) {
  const t = e.replace(Og, ""),
    n = B0(t, 0),
    r = n >= Nc[0] && n <= Nc[1],
    o = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Sl(o ? t[0] : t), isSecondary: r || o };
}
function Rg(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(t),
    o = isNaN(r) ? "normal" : r;
  return (Ol[n] || {})[o] || Tg[n];
}
function _c(e, t) {
  const n = "".concat(S0).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null) return r();
    const s = Xn(e.children).filter((h) => h.getAttribute(gl) === t)[0],
      l = jt.getComputedStyle(e, t),
      a = l.getPropertyValue("font-family"),
      u = a.match(N0),
      c = l.getPropertyValue("font-weight"),
      d = l.getPropertyValue("content");
    if (s && !u) return e.removeChild(s), r();
    if (u && d !== "none" && d !== "") {
      const h = l.getPropertyValue("content");
      let w = Rg(a, c);
      const { value: g, isSecondary: v } = Ag(h),
        x = u[0].startsWith("FontAwesome");
      let p = ba(w, g),
        f = p;
      if (x) {
        const m = K0(g);
        m.iconName && m.prefix && ((p = m.iconName), (w = m.prefix));
      }
      if (
        p &&
        !v &&
        (!s || s.getAttribute(Ia) !== w || s.getAttribute(Da) !== f)
      ) {
        e.setAttribute(n, f), s && e.removeChild(s);
        const m = wg(),
          { extra: S } = m;
        (S.attributes[gl] = t),
          Nl(p, w)
            .then((k) => {
              const N = Ba({
                  ...m,
                  icons: { main: k, mask: Ua() },
                  prefix: w,
                  iconName: f,
                  extra: S,
                  watchable: !0,
                }),
                C = H.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(C, e.firstChild)
                : e.appendChild(C),
                (C.outerHTML = N.map((T) => Jr(T)).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(o);
      } else r();
    } else r();
  });
}
function Lg(e) {
  return Promise.all([_c(e, "::before"), _c(e, "::after")]);
}
function zg(e) {
  return (
    e.parentNode !== document.head &&
    !~k0.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(gl) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Oc(e) {
  if (yt)
    return new Promise((t, n) => {
      const r = Xn(e.querySelectorAll("*")).filter(zg).map(Lg),
        o = $a.begin("searchPseudoElements");
      Hp(),
        Promise.all(r)
          .then(() => {
            o(), _l(), t();
          })
          .catch(() => {
            o(), _l(), n();
          });
    });
}
var Ig = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = Oc), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = H } = t;
      A.searchPseudoElements && Oc(n);
    };
  },
};
let Tc = !1;
var Dg = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Hp(), (Tc = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        kc(kl("mutationObserverCallbacks", {}));
      },
      noAuto() {
        hg();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        Tc
          ? _l()
          : kc(kl("mutationObserverCallbacks", { observeMutationsRoot: t }));
      },
    };
  },
};
const Ac = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(" ")
    .reduce((n, r) => {
      const o = r.toLowerCase().split("-"),
        i = o[0];
      let s = o.slice(1).join("-");
      if (i && s === "h") return (n.flipX = !0), n;
      if (i && s === "v") return (n.flipY = !0), n;
      if (((s = parseFloat(s)), isNaN(s))) return n;
      switch (i) {
        case "grow":
          n.size = n.size + s;
          break;
        case "shrink":
          n.size = n.size - s;
          break;
        case "left":
          n.x = n.x - s;
          break;
        case "right":
          n.x = n.x + s;
          break;
        case "up":
          n.y = n.y - s;
          break;
        case "down":
          n.y = n.y + s;
          break;
        case "rotate":
          n.rotate = n.rotate + s;
          break;
      }
      return n;
    }, t);
};
var Fg = {
  mixout() {
    return { parse: { transform: (e) => Ac(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Ac(n)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: r, containerWidth: o, iconWidth: i } = t;
      const s = { transform: "translate(".concat(o / 2, " 256)") },
        l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
        a = "scale("
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
        u = "rotate(".concat(r.rotate, " 0 0)"),
        c = { transform: "".concat(l, " ").concat(a, " ").concat(u) },
        d = { transform: "translate(".concat((i / 2) * -1, " -256)") },
        h = { outer: s, inner: c, path: d };
      return {
        tag: "g",
        attributes: { ...h.outer },
        children: [
          {
            tag: "g",
            attributes: { ...h.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...h.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const ys = { x: 0, y: 0, width: "100%", height: "100%" };
function Rc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function Mg(e) {
  return e.tag === "g" ? e.children : [e];
}
var jg = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-mask"),
            r = n ? Ri(n.split(" ").map((o) => o.trim())) : Ua();
          return (
            r.prefix || (r.prefix = bt()),
            (e.mask = r),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: n,
          attributes: r,
          main: o,
          mask: i,
          maskId: s,
          transform: l,
        } = t;
        const { width: a, icon: u } = o,
          { width: c, icon: d } = i,
          h = D0({ transform: l, containerWidth: c, iconWidth: a }),
          w = { tag: "rect", attributes: { ...ys, fill: "white" } },
          g = u.children ? { children: u.children.map(Rc) } : {},
          v = {
            tag: "g",
            attributes: { ...h.inner },
            children: [
              Rc({
                tag: u.tag,
                attributes: { ...u.attributes, ...h.path },
                ...g,
              }),
            ],
          },
          x = { tag: "g", attributes: { ...h.outer }, children: [v] },
          p = "mask-".concat(s || Vr()),
          f = "clip-".concat(s || Vr()),
          m = {
            tag: "mask",
            attributes: {
              ...ys,
              id: p,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
            },
            children: [w, x],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: f }, children: Mg(d) },
              m,
            ],
          };
        return (
          n.push(S, {
            tag: "rect",
            attributes: {
              fill: "currentColor",
              "clip-path": "url(#".concat(f, ")"),
              mask: "url(#".concat(p, ")"),
              ...ys,
            },
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  bg = {
    provides(e) {
      let t = !1;
      jt.matchMedia &&
        (t = jt.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          const n = [],
            r = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          n.push({
            tag: "path",
            attributes: {
              ...r,
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            },
          });
          const i = { ...o, attributeName: "opacity" },
            s = {
              tag: "circle",
              attributes: { ...r, cx: "256", cy: "364", r: "28" },
              children: [],
            };
          return (
            t ||
              s.children.push(
                {
                  tag: "animate",
                  attributes: {
                    ...o,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  },
                },
                {
                  tag: "animate",
                  attributes: { ...i, values: "1;0;1;1;0;1;" },
                },
              ),
            n.push(s),
            n.push({
              tag: "path",
              attributes: {
                ...r,
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              },
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: { ...i, values: "1;0;0;0;0;1;" },
                    },
                  ],
            }),
            t ||
              n.push({
                tag: "path",
                attributes: {
                  ...r,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                },
                children: [
                  {
                    tag: "animate",
                    attributes: { ...i, values: "0;0;1;1;0;0;" },
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: n }
          );
        });
    },
  },
  Ug = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-symbol"),
            r = n === null ? !1 : n === "" ? !0 : n;
          return (e.symbol = r), e;
        },
      };
    },
  },
  Bg = [j0, Cg, Ng, Pg, _g, Ig, Dg, Fg, jg, bg, Ug];
J0(Bg, { mixoutsTo: De });
De.noAuto;
De.config;
De.library;
De.dom;
const Tl = De.parse;
De.findIconDefinition;
De.toHtml;
const $g = De.icon;
De.layer;
De.text;
De.counter;
var Wp = { exports: {} },
  Hg = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Vg = Hg,
  Wg = Vg;
function Qp() {}
function Yp() {}
Yp.resetWarningCache = Qp;
var Qg = function () {
  function e(r, o, i, s, l, a) {
    if (a !== Wg) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Yp,
    resetWarningCache: Qp,
  };
  return (n.PropTypes = n), n;
};
Wp.exports = Qg();
var Yg = Wp.exports;
const D = Gc(Yg);
function Lc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lc(Object(n), !0).forEach(function (r) {
          Tn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Lc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function ci(e) {
  "@babel/helpers - typeof";
  return (
    (ci =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ci(e)
  );
}
function Tn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Kg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xg(e, t) {
  if (e == null) return {};
  var n = Kg(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Al(e) {
  return qg(e) || Gg(e) || Jg(e) || Zg();
}
function qg(e) {
  if (Array.isArray(e)) return Rl(e);
}
function Gg(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Jg(e, t) {
  if (e) {
    if (typeof e == "string") return Rl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rl(e, t);
  }
}
function Rl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ey(e) {
  var t,
    n = e.beat,
    r = e.fade,
    o = e.beatFade,
    i = e.bounce,
    s = e.shake,
    l = e.flash,
    a = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    d = e.pulse,
    h = e.fixedWidth,
    w = e.inverse,
    g = e.border,
    v = e.listItem,
    x = e.flip,
    p = e.size,
    f = e.rotation,
    m = e.pull,
    S =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": o,
        "fa-bounce": i,
        "fa-shake": s,
        "fa-flash": l,
        "fa-spin": a,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": h,
        "fa-inverse": w,
        "fa-border": g,
        "fa-li": v,
        "fa-flip": x === !0,
        "fa-flip-horizontal": x === "horizontal" || x === "both",
        "fa-flip-vertical": x === "vertical" || x === "both",
      }),
      Tn(t, "fa-".concat(p), typeof p < "u" && p !== null),
      Tn(t, "fa-rotate-".concat(f), typeof f < "u" && f !== null && f !== 0),
      Tn(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
      Tn(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (k) {
      return S[k] ? k : null;
    })
    .filter(function (k) {
      return k;
    });
}
function ty(e) {
  return (e = e - 0), e === e;
}
function Kp(e) {
  return ty(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var ny = ["style"];
function ry(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function oy(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        o = Kp(n.slice(0, r)),
        i = n.slice(r + 1).trim();
      return o.startsWith("webkit") ? (t[ry(o)] = i) : (t[o] = i), t;
    }, {});
}
function Xp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (a) {
      return Xp(e, a);
    }),
    o = Object.keys(t.attributes || {}).reduce(
      function (a, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (a.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            a.attrs.style = oy(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (a.attrs[u.toLowerCase()] = c)
              : (a.attrs[Kp(u)] = c);
        }
        return a;
      },
      { attrs: {} },
    ),
    i = n.style,
    s = i === void 0 ? {} : i,
    l = Xg(n, ny);
  return (
    (o.attrs.style = Je(Je({}, o.attrs.style), s)),
    e.apply(void 0, [t.tag, Je(Je({}, o.attrs), l)].concat(Al(r)))
  );
}
var qp = !1;
try {
  qp = !0;
} catch {}
function iy() {
  if (!qp && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function zc(e) {
  if (e && ci(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Tl.icon) return Tl.icon(e);
  if (e === null) return null;
  if (e && ci(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function vs(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Tn({}, e, t)
    : {};
}
var Ic = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  qn = uf.forwardRef(function (e, t) {
    var n = Je(Je({}, Ic), e),
      r = n.icon,
      o = n.mask,
      i = n.symbol,
      s = n.className,
      l = n.title,
      a = n.titleId,
      u = n.maskId,
      c = zc(r),
      d = vs("classes", [].concat(Al(ey(n)), Al((s || "").split(" ")))),
      h = vs(
        "transform",
        typeof n.transform == "string"
          ? Tl.transform(n.transform)
          : n.transform,
      ),
      w = vs("mask", zc(o)),
      g = $g(
        c,
        Je(
          Je(Je(Je({}, d), h), w),
          {},
          { symbol: i, title: l, titleId: a, maskId: u },
        ),
      );
    if (!g) return iy("Could not find icon", c), null;
    var v = g.abstract,
      x = { ref: t };
    return (
      Object.keys(n).forEach(function (p) {
        Ic.hasOwnProperty(p) || (x[p] = n[p]);
      }),
      sy(v[0], x)
    );
  });
qn.displayName = "FontAwesomeIcon";
qn.propTypes = {
  beat: D.bool,
  border: D.bool,
  beatFade: D.bool,
  bounce: D.bool,
  className: D.string,
  fade: D.bool,
  flash: D.bool,
  mask: D.oneOfType([D.object, D.array, D.string]),
  maskId: D.string,
  fixedWidth: D.bool,
  inverse: D.bool,
  flip: D.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: D.oneOfType([D.object, D.array, D.string]),
  listItem: D.bool,
  pull: D.oneOf(["right", "left"]),
  pulse: D.bool,
  rotation: D.oneOf([0, 90, 180, 270]),
  shake: D.bool,
  size: D.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: D.bool,
  spinPulse: D.bool,
  spinReverse: D.bool,
  symbol: D.oneOfType([D.bool, D.string]),
  title: D.string,
  titleId: D.string,
  transform: D.oneOfType([D.string, D.object]),
  swapOpacity: D.bool,
};
var sy = Xp.bind(null, uf.createElement);
const ly = ({ activity: e }) =>
    O.jsxs("div", {
      className: "mt-4 text-white",
      children: [
        O.jsxs("div", {
          className: "flex items-center mb-2",
          children: [
            O.jsx("h3", {
              className: "text-lg font-bold",
              children: "Ouvindo Spotify",
            }),
            O.jsx(qn, { icon: pp, className: "ml-2" }),
          ],
        }),
        O.jsx("ul", {
          children: O.jsxs("li", {
            className: "mt-2 flex items-center",
            children: [
              e.album_art_url &&
                O.jsx("img", {
                  src: e.album_art_url,
                  alt: `Capa de ${e.album}`,
                  className: "w-20 h-20 rounded mr-4",
                }),
              O.jsxs("div", {
                children: [
                  O.jsx("h4", { className: "font-bold", children: e.song }),
                  O.jsx("p", { children: e.artist }),
                  O.jsx("p", { children: e.album }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  ay = ({ links: e }) => {
    const t = {
      Instagram: n0,
      Steam: G1,
      Twitter: J1,
      Spotify: pp,
      Tiktok: Z1,
      Lastfm: t0,
    };
    return O.jsx("div", {
      className: "flex space-x-4 mt-2",
      children: e.map((n, r) =>
        O.jsx(
          "a",
          {
            href: n.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: O.jsx(qn, {
              icon: t[n.name],
              className: "w-8 h-8 text-white mb-6",
            }),
          },
          r,
        ),
      ),
    });
  },
  uy = ({
    profilePicture: e,
    avatarDecoration: t,
    username: n,
    globalName: r,
    badges: o,
    redesSociais: i,
    bio: s,
    spotifyActivity: l,
    nitroData: a,
    boostData: u,
  }) => {
    const [c, d] = Q.useState({ message: "", show: !1 });
    return O.jsxs("div", {
      className:
        "w-80 h-auto bg-black bg-opacity-20 rounded-lg overflow-hidden shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-500 hover:bg-opacity-10",
      children: [
        O.jsxs("div", {
          className: "flex flex-col items-center relative",
          children: [
            O.jsx("img", {
              className: "mt-6 mb-2 w-32 h-32 rounded-full",
              src: e,
              alt: `${n} avatar`,
            }),
            t &&
              O.jsx("img", {
                className: "absolute w-32 h-32 top-3 transform -translate-y-0",
                src: `https://cdn.discordapp.com/avatar-decoration-presets/${t}.png`,
                alt: "Decoração avatar",
              }),
            O.jsx("h2", {
              className: "text-white text-xl font-bold mt-2",
              children: r,
            }),
            O.jsxs("p", { className: "text-gray-300", children: ["@", n] }),
          ],
        }),
        O.jsxs("div", {
          className: "mt-4 flex items-center justify-center relative",
          children: [
            O.jsx(X1, {
              badges: o,
              nitroData: a,
              boostData: u,
              onBadgeHover: (h) => d({ message: h, show: !0 }),
              onBadgeLeave: () => d({ message: "", show: !1 }),
            }),
            O.jsx(q1, { message: c.message, show: c.show }),
          ],
        }),
        s &&
          O.jsx("p", { className: "text-white mt-6 text-center", children: s }),
        O.jsx("div", {
          className: "mt-8 flex items-center justify-center",
          children: O.jsx(ay, { links: i }),
        }),
        l && O.jsx(ly, { activity: l }),
      ],
    });
  },
  cy = (e, t = 2) => {
    const n = Q.useRef(null),
      r = Q.useRef(!1),
      o = Q.useRef(0),
      i = Q.useRef(1);
    return (
      Q.useEffect(() => {
        const a = e.current;
        if (!a) return;
        const u = async () => {
            r.current ||
              ((o.current = a.scrollLeft),
              a.scrollLeft + a.clientWidth >= a.scrollWidth
                ? (i.current = -1)
                : a.scrollLeft <= 0 && (i.current = 1),
              (a.scrollLeft += i.current * t)),
              (n.current = requestAnimationFrame(u));
          },
          d = setTimeout(() => {
            u();
          }, 5e3);
        return () => {
          clearTimeout(d), n.current && cancelAnimationFrame(n.current);
        };
      }, [e, t]),
      {
        pausarScroll: () => {
          r.current = !0;
        },
        retomarScroll: () => {
          r.current = !1;
        },
        ultimaPosicaoScroll: o,
      }
    );
  },
  fy = ({ profiles: e }) => {
    const t = Q.useRef(null),
      { pausarScroll: n, retomarScroll: r, ultimaPosicaoScroll: o } = cy(t),
      i = () => {
        n();
      },
      s = () => {
        r(),
          setTimeout(() => {
            const l = t.current;
            l && (l.scrollLeft = o.current);
          }, 3e3);
      };
    return O.jsx("div", {
      className: "w-full overflow-x-auto flex gap-6 py-8 px-4 custom-scrollbar",
      ref: t,
      onMouseEnter: i,
      onMouseLeave: s,
      children: O.jsx("div", {
        className: "flex flex-nowrap gap-6",
        children: e.map((l, a) =>
          O.jsx(
            "div",
            {
              className: "flex",
              children: O.jsx(uy, {
                profilePicture: l.profilePicture,
                avatarDecoration: l.avatarDecoration,
                username: l.username,
                globalName: l.globalName,
                bio: l.bio,
                badges: l.badges,
                redesSociais: l.redesSociais,
                spotifyActivity: l.spotifyActivity,
                nitroData: l.nitroData,
                boostData: l.boostData,
              }),
            },
            a,
          ),
        ),
      }),
    });
  };
function Gp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: dy } = Object.prototype,
  { getPrototypeOf: Va } = Object,
  zi = ((e) => (t) => {
    const n = dy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xe = (e) => ((e = e.toLowerCase()), (t) => zi(t) === e),
  Ii = (e) => (t) => typeof t === e,
  { isArray: Gn } = Array,
  Wr = Ii("undefined");
function py(e) {
  return (
    e !== null &&
    !Wr(e) &&
    e.constructor !== null &&
    !Wr(e.constructor) &&
    Re(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Jp = Xe("ArrayBuffer");
function my(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Jp(e.buffer)),
    t
  );
}
const hy = Ii("string"),
  Re = Ii("function"),
  Zp = Ii("number"),
  Di = (e) => e !== null && typeof e == "object",
  gy = (e) => e === !0 || e === !1,
  Fo = (e) => {
    if (zi(e) !== "object") return !1;
    const t = Va(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  yy = Xe("Date"),
  vy = Xe("File"),
  wy = Xe("Blob"),
  Sy = Xe("FileList"),
  xy = (e) => Di(e) && Re(e.pipe),
  ky = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Re(e.append) &&
          ((t = zi(e)) === "formdata" ||
            (t === "object" &&
              Re(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Ey = Xe("URLSearchParams"),
  [Cy, Ny, Py, _y] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Xe,
  ),
  Oy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Gn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function em(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Jt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  tm = (e) => !Wr(e) && e !== Jt;
function Ll() {
  const { caseless: e } = (tm(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && em(t, o)) || o;
      Fo(t[i]) && Fo(r)
        ? (t[i] = Ll(t[i], r))
        : Fo(r)
          ? (t[i] = Ll({}, r))
          : Gn(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Zr(arguments[r], n);
  return t;
}
const Ty = (e, t, n, { allOwnKeys: r } = {}) => (
    Zr(
      t,
      (o, i) => {
        n && Re(o) ? (e[i] = Gp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Ay = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ry = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ly = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && Va(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  zy = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Iy = (e) => {
    if (!e) return null;
    if (Gn(e)) return e;
    let t = e.length;
    if (!Zp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Dy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Va(Uint8Array)),
  Fy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  My = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  jy = Xe("HTMLFormElement"),
  by = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Dc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Uy = Xe("RegExp"),
  nm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Zr(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  By = (e) => {
    nm(e, (t, n) => {
      if (Re(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Re(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  $y = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Gn(e) ? r(e) : r(String(e).split(t)), n;
  },
  Hy = () => {},
  Vy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ws = "abcdefghijklmnopqrstuvwxyz",
  Fc = "0123456789",
  rm = { DIGIT: Fc, ALPHA: ws, ALPHA_DIGIT: ws + ws.toUpperCase() + Fc },
  Wy = (e = 16, t = rm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Qy(e) {
  return !!(
    e &&
    Re(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Yy = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Di(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Gn(r) ? [] : {};
            return (
              Zr(r, (s, l) => {
                const a = n(s, o + 1);
                !Wr(a) && (i[l] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ky = Xe("AsyncFunction"),
  Xy = (e) => e && (Di(e) || Re(e)) && Re(e.then) && Re(e.catch),
  om = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            Jt.addEventListener(
              "message",
              ({ source: o, data: i }) => {
                o === Jt && i === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              r.push(o), Jt.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Re(Jt.postMessage),
  ),
  qy =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Jt)
      : (typeof process < "u" && process.nextTick) || om,
  y = {
    isArray: Gn,
    isArrayBuffer: Jp,
    isBuffer: py,
    isFormData: ky,
    isArrayBufferView: my,
    isString: hy,
    isNumber: Zp,
    isBoolean: gy,
    isObject: Di,
    isPlainObject: Fo,
    isReadableStream: Cy,
    isRequest: Ny,
    isResponse: Py,
    isHeaders: _y,
    isUndefined: Wr,
    isDate: yy,
    isFile: vy,
    isBlob: wy,
    isRegExp: Uy,
    isFunction: Re,
    isStream: xy,
    isURLSearchParams: Ey,
    isTypedArray: Dy,
    isFileList: Sy,
    forEach: Zr,
    merge: Ll,
    extend: Ty,
    trim: Oy,
    stripBOM: Ay,
    inherits: Ry,
    toFlatObject: Ly,
    kindOf: zi,
    kindOfTest: Xe,
    endsWith: zy,
    toArray: Iy,
    forEachEntry: Fy,
    matchAll: My,
    isHTMLForm: jy,
    hasOwnProperty: Dc,
    hasOwnProp: Dc,
    reduceDescriptors: nm,
    freezeMethods: By,
    toObjectSet: $y,
    toCamelCase: by,
    noop: Hy,
    toFiniteNumber: Vy,
    findKey: em,
    global: Jt,
    isContextDefined: tm,
    ALPHABET: rm,
    generateString: Wy,
    isSpecCompliantForm: Qy,
    toJSONObject: Yy,
    isAsyncFn: Ky,
    isThenable: Xy,
    setImmediate: om,
    asap: qy,
  };
function R(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
y.inherits(R, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const im = R.prototype,
  sm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  sm[e] = { value: e };
});
Object.defineProperties(R, sm);
Object.defineProperty(im, "isAxiosError", { value: !0 });
R.from = (e, t, n, r, o, i) => {
  const s = Object.create(im);
  return (
    y.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError",
    ),
    R.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const Gy = null;
function zl(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function lm(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = lm(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Jy(e) {
  return y.isArray(e) && !e.some(zl);
}
const Zy = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Fi(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !y.isUndefined(x[v]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (y.isDate(g)) return g.toISOString();
    if (!a && y.isBlob(g))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(g) || y.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, v, x) {
    let p = g;
    if (g && !x && typeof g == "object") {
      if (y.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (y.isArray(g) && Jy(g)) ||
        ((y.isFileList(g) || y.endsWith(v, "[]")) && (p = y.toArray(g)))
      )
        return (
          (v = lm(v)),
          p.forEach(function (m, S) {
            !(y.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Mc([v], S, i) : s === null ? v : v + "[]",
                u(m),
              );
          }),
          !1
        );
    }
    return zl(g) ? !0 : (t.append(Mc(x, v, i), u(g)), !1);
  }
  const d = [],
    h = Object.assign(Zy, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: zl,
    });
  function w(g, v) {
    if (!y.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g),
        y.forEach(g, function (p, f) {
          (!(y.isUndefined(p) || p === null) &&
            o.call(t, p, y.isString(f) ? f.trim() : f, v, h)) === !0 &&
            w(p, v ? v.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function jc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Wa(e, t) {
  (this._pairs = []), e && Fi(e, this, t);
}
const am = Wa.prototype;
am.append = function (t, n) {
  this._pairs.push([t, n]);
};
am.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, jc);
      }
    : jc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function ev(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function um(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || ev,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = y.isURLSearchParams(t) ? t.toString() : new Wa(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class bc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const cm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  tv = typeof URLSearchParams < "u" ? URLSearchParams : Wa,
  nv = typeof FormData < "u" ? FormData : null,
  rv = typeof Blob < "u" ? Blob : null,
  ov = {
    isBrowser: !0,
    classes: { URLSearchParams: tv, FormData: nv, Blob: rv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Qa = typeof window < "u" && typeof document < "u",
  Il = (typeof navigator == "object" && navigator) || void 0,
  iv =
    Qa &&
    (!Il || ["ReactNative", "NativeScript", "NS"].indexOf(Il.product) < 0),
  sv =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  lv = (Qa && window.location.href) || "http://localhost",
  av = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Qa,
        hasStandardBrowserEnv: iv,
        hasStandardBrowserWebWorkerEnv: sv,
        navigator: Il,
        origin: lv,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ce = { ...av, ...ov };
function uv(e, t) {
  return Fi(
    e,
    new Ce.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Ce.isNode && y.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function cv(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function fv(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function fm(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      a = i >= n.length;
    return (
      (s = !s && y.isArray(o) ? o.length : s),
      a
        ? (y.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !y.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && y.isArray(o[s]) && (o[s] = fv(o[s])),
          !l)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, o) => {
        t(cv(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function dv(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const eo = {
  transitional: cm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = y.isObject(t);
      if ((i && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return o ? JSON.stringify(fm(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return uv(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Fi(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), dv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || eo.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? R.from(l, R.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ce.classes.FormData, Blob: Ce.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  eo.headers[e] = {};
});
const pv = y.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  mv = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && pv[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Uc = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function Mo(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Mo) : String(e);
}
function hv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const gv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ss(e, t, n, r, o) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function yv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function vv(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Ne {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, a, u) {
      const c = ar(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = y.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || a] = Mo(l));
    }
    const s = (l, a) => y.forEach(l, (u, c) => i(u, c, a));
    if (y.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (y.isString(t) && (t = t.trim()) && !gv(t)) s(mv(t), n);
    else if (y.isHeaders(t)) for (const [l, a] of t.entries()) i(a, l, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ar(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return hv(o);
        if (y.isFunction(n)) return n.call(this, o, r);
        if (y.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ar(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ss(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ar(s)), s)) {
        const l = y.findKey(r, s);
        l && (!n || Ss(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return y.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ss(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (o, i) => {
        const s = y.findKey(r, i);
        if (s) {
          (n[s] = Mo(o)), delete n[i];
          return;
        }
        const l = t ? yv(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Mo(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && y.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Uc] = this[Uc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const l = ar(s);
      r[l] || (vv(o, s), (r[l] = !0));
    }
    return y.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ne.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(Ne);
function xs(e, t) {
  const n = this || eo,
    r = t || n,
    o = Ne.from(r.headers);
  let i = r.data;
  return (
    y.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function dm(e) {
  return !!(e && e.__CANCEL__);
}
function Jn(e, t, n) {
  R.call(this, e ?? "canceled", R.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
y.inherits(Jn, R, { __CANCEL__: !0 });
function pm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new R(
          "Request failed with status code " + n.status,
          [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function wv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Sv(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = a), (r[o] = u);
      let d = i,
        h = 0;
      for (; d !== o; ) (h += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const w = c && u - c;
      return w ? Math.round((h * 1e3) / w) : void 0;
    }
  );
}
function xv(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, c = Date.now()) => {
    (n = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        d = c - n;
      d >= r
        ? s(u, c)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), s(o);
            }, r - d)));
    },
    () => o && s(o),
  ];
}
const fi = (e, t, n = 3) => {
    let r = 0;
    const o = Sv(50, 250);
    return xv((i) => {
      const s = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        a = s - r,
        u = o(a),
        c = s <= l;
      r = s;
      const d = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && c ? (l - s) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Bc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  $c =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  kv = Ce.hasStandardBrowserEnv
    ? (function () {
        const t =
            Ce.navigator && /(msie|trident)/i.test(Ce.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (s) {
            const l = y.isString(s) ? o(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Ev = Ce.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          y.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            y.isString(r) && s.push("path=" + r),
            y.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Cv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mm(e, t) {
  return e && !Cv(t) ? Nv(e, t) : t;
}
const Hc = (e) => (e instanceof Ne ? { ...e } : e);
function dn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return y.isPlainObject(u) && y.isPlainObject(c)
      ? y.merge.call({ caseless: d }, u, c)
      : y.isPlainObject(c)
        ? y.merge({}, c)
        : y.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, d) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!y.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, c) => o(Hc(u), Hc(c), !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = a[c] || o,
        h = d(e[c], t[c], c);
      (y.isUndefined(h) && d !== l) || (n[c] = h);
    }),
    n
  );
}
const hm = (e) => {
    const t = dn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = Ne.from(s)),
      (t.url = um(mm(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
        );
    let a;
    if (y.isFormData(n)) {
      if (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((a = s.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Ce.hasStandardBrowserEnv &&
      (r && y.isFunction(r) && (r = r(t)), r || (r !== !1 && kv(t.url)))
    ) {
      const u = o && i && Ev.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  Pv = typeof XMLHttpRequest < "u",
  _v =
    Pv &&
    function (e) {
      return new Promise(function (n, r) {
        const o = hm(e);
        let i = o.data;
        const s = Ne.from(o.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = o,
          c,
          d,
          h,
          w,
          g;
        function v() {
          w && w(),
            g && g(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let x = new XMLHttpRequest();
        x.open(o.method.toUpperCase(), o.url, !0), (x.timeout = o.timeout);
        function p() {
          if (!x) return;
          const m = Ne.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            k = {
              data:
                !l || l === "text" || l === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: m,
              config: e,
              request: x,
            };
          pm(
            function (C) {
              n(C), v();
            },
            function (C) {
              r(C), v();
            },
            k,
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = p)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (x.onabort = function () {
            x &&
              (r(new R("Request aborted", R.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function () {
            r(new R("Network Error", R.ERR_NETWORK, e, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let S = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = o.transitional || cm;
            o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
              r(
                new R(
                  S,
                  k.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in x &&
            y.forEach(s.toJSON(), function (S, k) {
              x.setRequestHeader(k, S);
            }),
          y.isUndefined(o.withCredentials) ||
            (x.withCredentials = !!o.withCredentials),
          l && l !== "json" && (x.responseType = o.responseType),
          u && (([h, g] = fi(u, !0)), x.addEventListener("progress", h)),
          a &&
            x.upload &&
            (([d, w] = fi(a)),
            x.upload.addEventListener("progress", d),
            x.upload.addEventListener("loadend", w)),
          (o.cancelToken || o.signal) &&
            ((c = (m) => {
              x &&
                (r(!m || m.type ? new Jn(null, e, x) : m),
                x.abort(),
                (x = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const f = wv(o.url);
        if (f && Ce.protocols.indexOf(f) === -1) {
          r(new R("Unsupported protocol " + f + ":", R.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(i || null);
      });
    },
  Ov = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (u) {
        if (!o) {
          (o = !0), l();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof R ? c : new Jn(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new R(`timeout ${t} of ms exceeded`, R.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: a } = r;
      return (a.unsubscribe = () => y.asap(l)), a;
    }
  },
  Tv = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  Av = async function* (e, t) {
    for await (const n of Rv(e)) yield* Tv(n, t);
  },
  Rv = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Vc = (e, t, n, r) => {
    const o = Av(e, t);
    let i = 0,
      s,
      l = (a) => {
        s || ((s = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              l(), a.close();
              return;
            }
            let d = c.byteLength;
            if (n) {
              let h = (i += d);
              n(h);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(a) {
          return l(a), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Mi =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  gm = Mi && typeof ReadableStream == "function",
  Lv =
    Mi &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ym = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  zv =
    gm &&
    ym(() => {
      let e = !1;
      const t = new Request(Ce.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Wc = 64 * 1024,
  Dl = gm && ym(() => y.isReadableStream(new Response("").body)),
  di = { stream: Dl && ((e) => e.body) };
Mi &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !di[t] &&
        (di[t] = y.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new R(
                `Response type '${t}' is not supported`,
                R.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const Iv = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (
        await new Request(Ce.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ""), y.isString(e)))
      return (await Lv(e)).byteLength;
  },
  Dv = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? Iv(t);
  },
  Fv =
    Mi &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = hm(e);
      u = u ? (u + "").toLowerCase() : "text";
      let w = Ov([o, i && i.toAbortSignal()], s),
        g;
      const v =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let x;
      try {
        if (
          a &&
          zv &&
          n !== "get" &&
          n !== "head" &&
          (x = await Dv(c, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (y.isFormData(r) &&
              (N = k.headers.get("content-type")) &&
              c.setContentType(N),
            k.body)
          ) {
            const [C, T] = Bc(x, fi($c(a)));
            r = Vc(k.body, Wc, C, T);
          }
        }
        y.isString(d) || (d = d ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        g = new Request(t, {
          ...h,
          signal: w,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? d : void 0,
        });
        let f = await fetch(g);
        const m = Dl && (u === "stream" || u === "response");
        if (Dl && (l || (m && v))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((b) => {
            k[b] = f[b];
          });
          const N = y.toFiniteNumber(f.headers.get("content-length")),
            [C, T] = (l && Bc(N, fi($c(l), !0))) || [];
          f = new Response(
            Vc(f.body, Wc, C, () => {
              T && T(), v && v();
            }),
            k,
          );
        }
        u = u || "text";
        let S = await di[y.findKey(di, u) || "text"](f, e);
        return (
          !m && v && v(),
          await new Promise((k, N) => {
            pm(k, N, {
              data: S,
              headers: Ne.from(f.headers),
              status: f.status,
              statusText: f.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (p) {
        throw (
          (v && v(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new R("Network Error", R.ERR_NETWORK, e, g), {
                cause: p.cause || p,
              })
            : R.from(p, p && p.code, e, g))
        );
      }
    }),
  Fl = { http: Gy, xhr: _v, fetch: Fv };
y.forEach(Fl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qc = (e) => `- ${e}`,
  Mv = (e) => y.isFunction(e) || e === null || e === !1,
  vm = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !Mv(n) && ((r = Fl[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new R(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Qc).join(`
`)
            : " " + Qc(i[0])
          : "as no adapter specified";
        throw new R(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Fl,
  };
function ks(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Jn(null, e);
}
function Yc(e) {
  return (
    ks(e),
    (e.headers = Ne.from(e.headers)),
    (e.data = xs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    vm
      .getAdapter(e.adapter || eo.adapter)(e)
      .then(
        function (r) {
          return (
            ks(e),
            (r.data = xs.call(e, e.transformResponse, r)),
            (r.headers = Ne.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            dm(r) ||
              (ks(e),
              r &&
                r.response &&
                ((r.response.data = xs.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = Ne.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const wm = "1.7.7",
  Ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ya[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Kc = {};
Ya.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      wm +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, l) => {
    if (t === !1)
      throw new R(
        o(s, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED,
      );
    return (
      n &&
        !Kc[s] &&
        ((Kc[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, l) : !0
    );
  };
};
function jv(e, t, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0)
        throw new R("option " + i + " must be " + a, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new R("Unknown option " + i, R.ERR_BAD_OPTION);
  }
}
const Ml = { assertOptions: jv, validators: Ya },
  St = Ml.validators;
class rn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new bc(), response: new bc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = dn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ml.assertOptions(
        r,
        {
          silentJSONParsing: St.transitional(St.boolean),
          forcedJSONParsing: St.transitional(St.boolean),
          clarifyTimeoutError: St.transitional(St.boolean),
        },
        !1,
      ),
      o != null &&
        (y.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ml.assertOptions(
              o,
              { encode: St.function, serialize: St.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && y.merge(i.common, i[n.method]);
    i &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        },
      ),
      (n.headers = Ne.concat(s, i));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((a = a && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      h;
    if (!a) {
      const g = [Yc.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, u),
          h = g.length,
          c = Promise.resolve(n);
        d < h;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    h = l.length;
    let w = n;
    for (d = 0; d < h; ) {
      const g = l[d++],
        v = l[d++];
      try {
        w = g(w);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      c = Yc.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = dn(this.defaults, t);
    const n = mm(t.baseURL, t.url);
    return um(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function (t) {
  rn.prototype[t] = function (n, r) {
    return this.request(
      dn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
y.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        dn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (rn.prototype[t] = n()), (rn.prototype[t + "Form"] = n(!0));
});
class Ka {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new Jn(i, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ka(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function bv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Uv(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const jl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(jl).forEach(([e, t]) => {
  jl[t] = e;
});
function Sm(e) {
  const t = new rn(e),
    n = Gp(rn.prototype.request, t);
  return (
    y.extend(n, rn.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Sm(dn(e, o));
    }),
    n
  );
}
const G = Sm(eo);
G.Axios = rn;
G.CanceledError = Jn;
G.CancelToken = Ka;
G.isCancel = dm;
G.VERSION = wm;
G.toFormData = Fi;
G.AxiosError = R;
G.Cancel = G.CanceledError;
G.all = function (t) {
  return Promise.all(t);
};
G.spread = bv;
G.isAxiosError = Uv;
G.mergeConfig = dn;
G.AxiosHeaders = Ne;
G.formToJSON = (e) => fm(y.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = vm.getAdapter;
G.HttpStatusCode = jl;
G.default = G;
const Xc = "https://obscure.fun",
  Xa = {
    getUser: (e) => `https://api.lanyard.rest/v1/users/${e}`,
    postDiscordUsers: `${Xc}/discord-users`,
    incrementViewCount: `${Xc}/increment-view-count`,
  },
  Bv = async (e) => {
    const t = Array.from(new Set(e));
    if (t.length === 0)
      return console.warn("Nenhum ID único para enviar."), null;
    try {
      return (await G.post(Xa.postDiscordUsers, { userIds: t })).data;
    } catch (n) {
      return n;
    }
  },
  qc = {
    "385279990134210561": {
      badges: [],
      bio: "lealdade acima de tudo",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/died1jke0921d9as.d_i2" },
        {
          name: "Spotify",
          url: "https://open.spotify.com/user/31iuw3qkvrqkjwfpvgdru2kxwwmi?si=a3fd75864b7847c0",
        },
      ],
      boost: { hasBoost: !0, date: new Date("2023-08-05") },
    },
    "971146765464137788": {
      badges: [],
      bio: "a traição sempre tem um custo",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/consty2k25" },
      ],
      boost: { hasBoost: !0, date: new Date("2023-10-25") },
    },
    "1080098617924255765": {
      badges: [],
      bio: "a traição sempre tem um custo",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/caiquetaliba" },
      ],
      boost: { hasBoost: !0, date: new Date("2023-12-12") },
    },
    "1296482623497043971": {
      badges: [],
      bio: "eu amo o dznn",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/a1bc3de5fg7hj0kl0mn2baby333666" },
      ],
      nitro: { hasNitro: !0, date: new Date("2024-10-20") },
      boost: { hasBoost: !0, date: new Date("2024-10-22") },
    },
    "1198084527206170678": {
      badges: [],
      bio: "eu amo o henry",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/k1dscene" },
      ],
    },
    "1198084527206170678": {
      badges: [],
      bio: "",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/neymarjr" },
      ],
    },
    "940259093946466345": {
      badges: [],
      bio: "",
      redesSociais: [
        { name: "Instagram", url: "https://instagram.com/dunaaaaaaaaaaaaaaaaaaaaaaaaa" },
        {
          name: "Spotify",
          url: "https://open.spotify.com/user/31igaae3csbgv4uwib3vcii4uf6e?si=nCutygJ1SIyryp5-2RnCmw",
        },
      ],
      nitro: { hasNitro: !0, date: new Date("2024-10-01") },
      boost: { hasBoost: !0, date: new Date("2024-10-02") },
    },
  },
  $v = async (e) => {
    var t;
    try {
      const n = await G.get(Xa.getUser(e)),
        { listening_to_spotify: r, spotify: o } = n.data.data;
      return r && o
        ? {
            listening_to_spotify: !0,
            spotify: {
              timestamps: o.timestamps || { start: 0, end: 0 },
              album: o.album || "",
              album_art_url: o.album_art_url || "",
              artist: o.artist ? o.artist.replace(/;/g, ", ") : "",
              song: o.song || "",
              track_id: o.track_id || "",
            },
          }
        : null;
    } catch (n) {
      return (
        (G.isAxiosError(n) &&
          ((t = n.response) == null ? void 0 : t.status) === 404) ||
          console.error("Erro ao buscar atividade:", n),
        null
      );
    }
  },
  Hv = () => {
    const [e, t] = Q.useState([]),
      [n, r] = Q.useState(!0),
      [o, i] = Q.useState(null);
    return (
      Q.useEffect(() => {
        (async () => {
          r(!0);
          try {
            const l = Object.keys(qc),
              a = await Bv(l);
            if (typeof a == "string") {
              i(a);
              return;
            }
            if (a) {
              const u = await Promise.all(
                a.map(async (c) => {
                  var N, C, T, b, z;
                  const d = qc[c.id],
                    h =
                      (N = c.avatar_decoration_data) == null ? void 0 : N.asset,
                    w = await $v(c.id);
                  let g = null;
                  w && w.listening_to_spotify && (g = w.spotify);
                  const v =
                      (C = d == null ? void 0 : d.nitro) == null
                        ? void 0
                        : C.date,
                    x =
                      (T = d == null ? void 0 : d.boost) == null
                        ? void 0
                        : T.date,
                    p = (me) => {
                      const V = lc(new Date(me), new Date());
                      return V >= 72
                        ? "/badges/nitroFire.svg"
                        : V >= 60
                          ? "/badges/nitroRuby.svg"
                          : V >= 36
                            ? "/badges/nitroEmerald.svg"
                            : V >= 24
                              ? "/badges/nitroDiamond.svg"
                              : V >= 12
                                ? "/badges/nitroPlatinum.svg"
                                : V >= 6
                                  ? "/badges/nitroGold.svg"
                                  : V >= 3
                                    ? "/badges/nitroSilver.svg"
                                    : V <= 1
                                      ? "/badges/nitroBronze.svg"
                                      : null;
                    },
                    f = (me) => {
                      const V = lc(new Date(me), new Date());
                      return V >= 24
                        ? "/badges/boost9.svg"
                        : V >= 18
                          ? "/badges/boost8.svg"
                          : V >= 15
                            ? "/badges/boost7.svg"
                            : V >= 12
                              ? "/badges/boost6.svg"
                              : V >= 9
                                ? "/badges/boost5.svg"
                                : V >= 6
                                  ? "/badges/boost4.svg"
                                  : V >= 3
                                    ? "/badges/boost3.svg"
                                    : V >= 2
                                      ? "/badges/boost2.svg"
                                      : V <= 1
                                        ? "/badges/boost1.svg"
                                        : null;
                    },
                    m =
                      (b = d == null ? void 0 : d.nitro) != null && b.hasNitro
                        ? p(d.nitro.date)
                        : null,
                    S =
                      (z = d == null ? void 0 : d.boost) != null && z.hasBoost
                        ? f(d.boost.date)
                        : null,
                    k = [
                      ...((d == null ? void 0 : d.badges) || []),
                      ...(m ? [m] : []),
                      ...(S ? [S] : []),
                    ];
                  return {
                    profilePicture: c.avatar
                      ? `https://cdn.discordapp.com/avatars/${c.id}/${c.avatar}.png`
                      : "/icons/discordDefault.png",
                    avatarDecoration: h,
                    username: c.username,
                    globalName: c.global_name || c.username,
                    badges: k,
                    redesSociais: (d == null ? void 0 : d.redesSociais) || [],
                    bio: (d == null ? void 0 : d.bio) || "",
                    spotifyActivity: g,
                    nitroData: v,
                    boostData: x,
                  };
                }),
              );
              t(u);
            }
          } catch {
            i(
              "Ocorreu um erro ao buscar os perfis, tente novamente mais tarde :(",
            );
          } finally {
            r(!1);
          }
        })();
      }, []),
      { perfis: e, carregando: n, erro: o }
    );
  },
  Vv = "/assets/puranata.mp4",
  Wv = ({ onClick: e }) =>
    O.jsx("div", {
      className:
        "absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-20 cursor-pointer",
      onClick: e,
      children: O.jsx("h1", {
        className: "text-white font-semibold text-4xl",
        children: "click",
      }),
    }),
  Qv = {
    prefix: "fas",
    iconName: "volume-high",
    icon: [
      640,
      512,
      [128266, "volume-up"],
      "f028",
      "M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z",
    ],
  },
  Yv = Qv,
  Kv = {
    prefix: "fas",
    iconName: "eye",
    icon: [
      576,
      512,
      [128065],
      "f06e",
      "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
    ],
  },
  Xv = {
    prefix: "fas",
    iconName: "volume-xmark",
    icon: [
      576,
      512,
      ["volume-mute", "volume-times"],
      "f6a9",
      "M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
    ],
  },
  qv = Xv,
  Gv = ({ volume: e, muted: t, onVolumeChange: n, onToggleMute: r }) => {
    const [o, i] = Q.useState(!1);
    return O.jsxs("div", {
      className: "absolute top-4 left-4 items-center z-30 lg:flex hidden",
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        O.jsx(qn, {
          icon: t ? qv : Yv,
          onClick: r,
          className:
            "text-gray-300 cursor-pointer bg-black bg-opacity-20 rounded-s-md p-2",
          size: "2x",
        }),
        O.jsx("div", {
          className: `rounded-e-md p-3 transition-opacity duration-300 ${o ? "bg-black bg-opacity-20" : "opacity-0 pointer-events-none"}`,
          children: O.jsx("input", {
            type: "range",
            min: "0",
            max: "1",
            step: "0.01",
            value: t ? 0 : e,
            onChange: n,
            className:
              "w-32 h-2 bg-gray-300 rounded-lg appearance-none transition-opacity duration-300 ease-in-out transform",
          }),
        }),
      ],
    });
  },
  Jv = () => {
    const [e, t] = Q.useState(0),
      n = Q.useRef(!1);
    return (
      Q.useEffect(() => {
        const r = async () => {
          try {
            const o = await G.post(Xa.incrementViewCount);
            t(o.data.novaContagem);
          } catch (o) {
            return o;
          }
        };
        n.current || (r(), (n.current = !0));
      }, []),
      O.jsxs("div", {
        className:
          "flex items-center space-x-2 p-2 bg-black bg-opacity-20 rounded-md shadow",
        children: [
          O.jsx(qn, { icon: Kv, className: "text-gray-300" }),
          O.jsx("span", {
            className: "text-lg font-semibold text-gray-300",
            children: e,
          }),
        ],
      })
    );
  },
  Zv = ({ mensagem: e }) =>
    O.jsx("div", {
      className: "flex items-center justify-center",
      children: O.jsx("p", {
        className: "text-white text-2xl font-bold",
        children: e || "Ocorreu um erro, tente novamente mais tarde :(",
      }),
    }),
  e2 = () =>
    O.jsx("div", {
      className: "flex items-center justify-center h-screen bg-black",
      children: O.jsx("div", { className: "loader" }),
    }),
  t2 = () => {
    const { perfis: e, carregando: t, erro: n } = Hv(),
      [r, o] = Q.useState(!0),
      [i, s] = Q.useState(1),
      [l, a] = Q.useState(!1),
      u = Q.useRef(null);
    Q.useEffect(() => {
      u.current && (u.current.volume = l ? 0 : i);
    }, [i, l]);
    const c = () => {
        u.current && u.current.play(),
          setTimeout(() => {
            o(!1);
          }, 500);
      },
      d = (g) => {
        const v = parseFloat(g.target.value);
        s(v), u.current && (u.current.volume = v);
      },
      h = () => {
        a(!l);
      };
    if (t) return O.jsx(e2, {});
    const w = (g) => {
      g.preventDefault();
    };
    return O.jsxs("div", {
      className: "relative h-screen",
      children: [
        r && O.jsx(Wv, { onClick: c }),
        O.jsxs("div", {
          className: `relative bg-cover bg-center min-h-screen transition-opacity duration-300 ease-in-out ${r ? "opacity-50" : "opacity-100"}`,
          children: [
            O.jsxs("video", {
              ref: u,
              className: "absolute top-0 left-0 w-full h-full object-cover",
              loop: !0,
              muted: l,
              onContextMenu: w,
              controls: !1,
              disablePictureInPicture: !0,
              playsInline: !0,
              children: [
                O.jsx("source", { src: Vv, type: "video/mp4" }),
                "Seu navegador não suporta o vídeo.",
              ],
            }),
            O.jsx("div", {
              className:
                "absolute inset-0 custom-bg before:absolute before:inset-0 before:bg-black before:opacity-50",
            }),
            O.jsx("div", {
              className:
                "relative z-10 flex items-center justify-center min-h-screen",
              children: O.jsx(fy, { profiles: e }),
            }),
            n &&
              O.jsx("div", {
                className:
                  "absolute inset-0 flex items-center justify-center z-30",
                children: O.jsx(Zv, { mensagem: n }),
              }),
            O.jsx("div", {
              className: "absolute top-4 right-4 z-20",
              children: O.jsx(Jv, {}),
            }),
            O.jsx(Gv, {
              volume: i,
              muted: l,
              onVolumeChange: d,
              onToggleMute: h,
            }),
          ],
        }),
      ],
    });
  };
dp(document.getElementById("root")).render(
  O.jsx(Q.StrictMode, { children: O.jsx(t2, {}) }),
);
new km({ colors: ["#ffffff", "#ffffff", "#ffffff"] });
