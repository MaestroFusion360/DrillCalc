(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
const ai = "production",
  L = !ai.toLowerCase().startsWith("prod");
var yn = Array.isArray,
  ii = Array.prototype.indexOf,
  Xr = Array.from,
  Ut = Object.defineProperty,
  qt = Object.getOwnPropertyDescriptor,
  si = Object.getOwnPropertyDescriptors,
  oi = Object.prototype,
  li = Array.prototype,
  aa = Object.getPrototypeOf,
  Ln = Object.isExtensible;
function ui(e) {
  return typeof e == "function";
}
const qe = () => {};
function ci(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function ia() {
  var e,
    t,
    r = new Promise((n, i) => {
      ((e = n), (t = i));
    });
  return { promise: r, resolve: e, reject: t };
}
const Oe = 2,
  xn = 4,
  wn = 8,
  sa = 1 << 24,
  vt = 16,
  At = 32,
  Jt = 64,
  Hr = 128,
  nt = 512,
  ze = 1024,
  He = 2048,
  ft = 4096,
  Ue = 8192,
  wt = 16384,
  Zr = 32768,
  Dt = 65536,
  jr = 1 << 17,
  oa = 1 << 18,
  vr = 1 << 19,
  di = 1 << 20,
  yt = 1 << 25,
  Lt = 32768,
  cn = 1 << 21,
  $r = 1 << 22,
  Nt = 1 << 23,
  Xt = Symbol("$state"),
  fi = Symbol("legacy props"),
  vi = Symbol(""),
  la = Symbol("proxy path"),
  ar = new (class extends Error {
    name = "StaleReactionError";
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })();
function pi(e) {
  if (L) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function gi() {
  if (L) {
    const e = new Error(
      "async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hi() {
  if (L) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/derived_references_self");
}
function mi(e) {
  if (L) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bi() {
  if (L) {
    const e = new Error(
      "effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _i(e) {
  if (L) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/effect_orphan");
}
function yi() {
  if (L) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xi() {
  if (L) {
    const e = new Error(
      "invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/invalid_snippet");
}
function wi(e) {
  if (L) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ki(e) {
  if (L) {
    const t = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${e}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function Ei(e) {
  if (L) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw ((t.name = "Svelte error"), t);
  } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Ci() {
  if (L) {
    const e = new Error(
      "state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ai() {
  if (L) {
    const e = new Error(
      "state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fi() {
  if (L) {
    const e = new Error(
      "state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Si() {
  if (L) {
    const e = new Error(
      "svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror",
    );
    throw ((e.name = "Svelte error"), e);
  } else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ti = 1,
  Pi = 2,
  ua = 4,
  Mi = 8,
  Ni = 16,
  Oi = 1,
  Di = 4,
  Li = 8,
  Ii = 16,
  Ri = 1,
  zi = 2,
  ji = 4,
  Bi = 1,
  Yi = 2,
  Pe = Symbol(),
  Gi = Symbol("filename"),
  qi = "http://www.w3.org/1999/xhtml",
  Xi = "@attach";
var kn = "font-weight: bold",
  En = "font-weight: normal";
function Hi() {
  L
    ? console.warn(
        "%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",
        kn,
        En,
      )
    : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function rn(e) {
  L
    ? console.warn(
        `%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,
        kn,
        En,
      )
    : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function Zi() {
  L
    ? console.warn(
        "%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",
        kn,
        En,
      )
    : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ca(e) {
  return e === this.v;
}
function $i(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == "object") || typeof e == "function";
}
function da(e) {
  return !$i(e, this.v);
}
let Ui = !1;
function st(e, t) {
  return ((e.label = t), fa(e.v, t), e);
}
function fa(e, t) {
  return (e?.[la]?.(t), e);
}
function Ki(e) {
  const t = new Error(),
    r = Vi();
  return r.length === 0
    ? null
    : (r.unshift(`
`),
      Ut(t, "stack", {
        value: r.join(`
`),
      }),
      Ut(t, "name", { value: e }),
      t);
}
function Vi() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (((Error.stackTraceLimit = e), !t)) return [];
  const r = t.split(`
`),
    n = [];
  for (let i = 0; i < r.length; i++) {
    const s = r[i],
      l = s.replaceAll("\\", "/");
    if (s.trim() !== "Error") {
      if (s.includes("validate_each_keys")) return [];
      l.includes("svelte/src/internal") ||
        l.includes("node_modules/.vite") ||
        n.push(s);
    }
  }
  return n;
}
let Me = null;
function sr(e) {
  Me = e;
}
let or = null;
function Br(e) {
  or = e;
}
let Fr = null;
function In(e) {
  Fr = e;
}
function va(e) {
  return ga("getContext").get(e);
}
function Wi(e, t) {
  return (ga("setContext").set(e, t), t);
}
function at(e, t = !1, r) {
  ((Me = { p: Me, i: !1, c: null, e: null, s: e, x: null, l: null }),
    L && ((Me.function = r), (Fr = r)));
}
function it(e) {
  var t = Me,
    r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r) Sa(n);
  }
  return ((t.i = !0), (Me = t.p), L && (Fr = Me?.function ?? null), {});
}
function pa() {
  return !0;
}
function ga(e) {
  return (Me === null && pi(e), (Me.c ??= new Map(Ji(Me) || void 0)));
}
function Ji(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null) return r;
    t = t.p;
  }
  return null;
}
let ir = [];
function Qi() {
  var e = ir;
  ((ir = []), ci(e));
}
function It(e) {
  if (ir.length === 0) {
    var t = ir;
    queueMicrotask(() => {
      t === ir && Qi();
    });
  }
  ir.push(e);
}
const dn = new WeakMap();
function ha(e) {
  var t = ue;
  if (t === null) return ((se.f |= Nt), e);
  if (
    (L && e instanceof Error && !dn.has(e) && dn.set(e, es(e, t)),
    (t.f & Zr) === 0)
  ) {
    if ((t.f & Hr) === 0)
      throw (L && !t.parent && e instanceof Error && ma(e), e);
    t.b.error(e);
  } else lr(e, t);
}
function lr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Hr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw (L && e instanceof Error && ma(e), e);
}
function es(e, t) {
  const r = qt(e, "message");
  if (!(r && !r.configurable)) {
    for (
      var n = Sn ? "  " : "	",
        i = `
${n}in ${t.fn?.name || "<unknown>"}`,
        s = t.ctx;
      s !== null;
    )
      ((i += `
${n}in ${s.function?.[Gi].split("/").pop()}`),
        (s = s.p));
    return {
      message:
        e.message +
        `
${i}
`,
      stack: e.stack
        ?.split(
          `
`,
        )
        .filter((l) => !l.includes("svelte/src/internal")).join(`
`),
    };
  }
}
function ma(e) {
  const t = dn.get(e);
  t &&
    (Ut(e, "message", { value: t.message }),
    Ut(e, "stack", { value: t.stack }));
}
const Ir = new Set();
let we = null,
  Qe = null,
  ot = [],
  Cn = null,
  fn = !1;
class lt {
  committed = !1;
  current = new Map();
  previous = new Map();
  #e = new Set();
  #t = new Set();
  #n = 0;
  #r = 0;
  #l = null;
  #i = new Set();
  #a = new Set();
  skipped_effects = new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  process(t) {
    ((ot = []), this.apply());
    var r = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const n of t) this.#s(n, r);
    (this.is_fork || this.#c(),
      this.is_deferred()
        ? (this.#o(r.effects), this.#o(r.render_effects))
        : ((we = null),
          Rn(r.render_effects),
          Rn(r.effects),
          this.#l?.resolve()),
      (Qe = null));
  }
  #s(t, r) {
    t.f ^= ze;
    for (var n = t.first; n !== null; ) {
      var i = n.f,
        s = (i & (At | Jt)) !== 0,
        l = s && (i & ze) !== 0,
        u = l || (i & Ue) !== 0 || this.skipped_effects.has(n);
      if (
        ((n.f & Hr) !== 0 &&
          n.b?.is_pending() &&
          (r = { parent: r, effect: n, effects: [], render_effects: [] }),
        !u && n.fn !== null)
      ) {
        s
          ? (n.f ^= ze)
          : (i & xn) !== 0
            ? r.effects.push(n)
            : Mr(n) && ((n.f & vt) !== 0 && this.#i.add(n), Er(n));
        var o = n.first;
        if (o !== null) {
          n = o;
          continue;
        }
      }
      var _ = n.parent;
      for (n = n.next; n === null && _ !== null; )
        (_ === r.effect &&
          (this.#o(r.effects), this.#o(r.render_effects), (r = r.parent)),
          (n = _.next),
          (_ = _.parent));
    }
  }
  #o(t) {
    for (const r of t)
      ((r.f & He) !== 0 ? this.#i.add(r) : (r.f & ft) !== 0 && this.#a.add(r),
        this.#u(r.deps),
        je(r, ze));
  }
  #u(t) {
    if (t !== null)
      for (const r of t)
        (r.f & Oe) === 0 || (r.f & Lt) === 0 || ((r.f ^= Lt), this.#u(r.deps));
  }
  capture(t, r) {
    (this.previous.has(t) || this.previous.set(t, r),
      (t.f & Nt) === 0 && (this.current.set(t, t.v), Qe?.set(t, t.v)));
  }
  activate() {
    ((we = this), this.apply());
  }
  deactivate() {
    we === this && ((we = null), (Qe = null));
  }
  flush() {
    if ((this.activate(), ot.length > 0)) {
      if ((ts(), we !== null && we !== this)) return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (Ir.size > 1) {
      this.previous.clear();
      var t = Qe,
        r = !0,
        n = { parent: null, effect: null, effects: [], render_effects: [] };
      for (const s of Ir) {
        if (s === this) {
          r = !1;
          continue;
        }
        const l = [];
        for (const [o, _] of this.current) {
          if (s.current.has(o))
            if (r && _ !== s.current.get(o)) s.current.set(o, _);
            else continue;
          l.push(o);
        }
        if (l.length === 0) continue;
        const u = [...s.current.keys()].filter((o) => !this.current.has(o));
        if (u.length > 0) {
          var i = ot;
          ot = [];
          const o = new Set(),
            _ = new Map();
          for (const b of l) ba(b, u, o, _);
          if (ot.length > 0) {
            ((we = s), s.apply());
            for (const b of ot) s.#s(b, n);
            s.deactivate();
          }
          ot = i;
        }
      }
      ((we = null), (Qe = t));
    }
    ((this.committed = !0), Ir.delete(this));
  }
  increment(t) {
    ((this.#n += 1), t && (this.#r += 1));
  }
  decrement(t) {
    ((this.#n -= 1), t && (this.#r -= 1), this.revive());
  }
  revive() {
    for (const t of this.#i) (this.#a.delete(t), je(t, He), Kt(t));
    for (const t of this.#a) (je(t, ft), Kt(t));
    this.flush();
  }
  oncommit(t) {
    this.#e.add(t);
  }
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#l ??= ia()).promise;
  }
  static ensure() {
    if (we === null) {
      const t = (we = new lt());
      (Ir.add(we),
        lt.enqueue(() => {
          we === t && t.flush();
        }));
    }
    return we;
  }
  static enqueue(t) {
    It(t);
  }
  apply() {}
}
function ts() {
  var e = Zt;
  fn = !0;
  var t = L ? new Set() : null;
  try {
    var r = 0;
    for (Gr(!0); ot.length > 0; ) {
      var n = lt.ensure();
      if (r++ > 1e3) {
        if (L) {
          var i = new Map();
          for (const l of n.current.keys())
            for (const [u, o] of l.updated ?? []) {
              var s = i.get(u);
              (s || ((s = { error: o.error, count: 0 }), i.set(u, s)),
                (s.count += o.count));
            }
          for (const l of i.values()) l.error && console.error(l.error);
        }
        rs();
      }
      if ((n.process(ot), Ot.clear(), L))
        for (const l of n.current.keys()) t.add(l);
    }
  } finally {
    if (((fn = !1), Gr(e), (Cn = null), L)) for (const l of t) l.updated = null;
  }
}
function rs() {
  try {
    yi();
  } catch (e) {
    (L && Ut(e, "stack", { value: "" }), lr(e, Cn));
  }
}
let bt = null;
function Rn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (
        (n.f & (wt | Ue)) === 0 &&
        Mr(n) &&
        ((bt = new Set()),
        Er(n),
        n.deps === null &&
          n.first === null &&
          n.nodes === null &&
          (n.teardown === null && n.ac === null ? Oa(n) : (n.fn = null)),
        bt?.size > 0)
      ) {
        Ot.clear();
        for (const i of bt) {
          if ((i.f & (wt | Ue)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            (bt.has(l) && (bt.delete(l), s.push(l)), (l = l.parent));
          for (let u = s.length - 1; u >= 0; u--) {
            const o = s[u];
            (o.f & (wt | Ue)) === 0 && Er(o);
          }
        }
        bt.clear();
      }
    }
    bt = null;
  }
}
function ba(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Oe) !== 0
        ? ba(i, t, r, n)
        : (s & ($r | vt)) !== 0 &&
          (s & He) === 0 &&
          _a(i, t, n) &&
          (je(i, He), Kt(i));
    }
}
function _a(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i)) return !0;
      if ((i.f & Oe) !== 0 && _a(i, t, r)) return (r.set(i, !0), !0);
    }
  return (r.set(e, !1), !1);
}
function Kt(e) {
  for (var t = (Cn = e); t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (fn && t === ue && (r & vt) !== 0 && (r & oa) === 0) return;
    if ((r & (Jt | At)) !== 0) {
      if ((r & ze) === 0) return;
      t.f ^= ze;
    }
  }
  ot.push(t);
}
function ns(e) {
  let t = 0,
    r = Vt(0),
    n;
  return (
    L && st(r, "createSubscriber version"),
    () => {
      wr() &&
        (a(r),
        Ta(
          () => (
            t === 0 && (n = Vr(() => e(() => _r(r)))),
            (t += 1),
            () => {
              It(() => {
                ((t -= 1), t === 0 && (n?.(), (n = void 0), _r(r)));
              });
            }
          ),
        ));
    }
  );
}
var as = Dt | vr | Hr;
function is(e, t, r) {
  new ss(e, t, r);
}
class ss {
  parent;
  #e = !1;
  #t;
  #n = null;
  #r;
  #l;
  #i;
  #a = null;
  #s = null;
  #o = null;
  #u = null;
  #c = null;
  #d = 0;
  #v = 0;
  #p = !1;
  #f = null;
  #_ = ns(
    () => (
      (this.#f = Vt(this.#d)),
      L && st(this.#f, "$effect.pending()"),
      () => {
        this.#f = null;
      }
    ),
  );
  constructor(t, r, n) {
    ((this.#t = t),
      (this.#r = r),
      (this.#l = n),
      (this.parent = ue.b),
      (this.#e = !!this.#r.pending),
      (this.#i = Pr(() => {
        ue.b = this;
        {
          var i = this.#m();
          try {
            this.#a = Ge(() => n(i));
          } catch (s) {
            this.error(s);
          }
          this.#v > 0 ? this.#h() : (this.#e = !1);
        }
        return () => {
          this.#c?.remove();
        };
      }, as)));
  }
  #y() {
    try {
      this.#a = Ge(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t &&
      ((this.#s = Ge(() => t(this.#t))),
      lt.enqueue(() => {
        var r = this.#m();
        ((this.#a = this.#g(() => (lt.ensure(), Ge(() => this.#l(r))))),
          this.#v > 0
            ? this.#h()
            : (Ht(this.#s, () => {
                this.#s = null;
              }),
              (this.#e = !1)));
      }));
  }
  #m() {
    var t = this.#t;
    return (
      this.#e && ((this.#c = kt()), this.#t.before(this.#c), (t = this.#c)),
      t
    );
  }
  is_pending() {
    return this.#e || (!!this.parent && this.parent.is_pending());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  #g(t) {
    var r = ue,
      n = se,
      i = Me;
    (rt(this.#i), Xe(this.#i), sr(this.#i.ctx));
    try {
      return t();
    } catch (s) {
      return (ha(s), null);
    } finally {
      (rt(r), Xe(n), sr(i));
    }
  }
  #h() {
    const t = this.#r.pending;
    (this.#a !== null &&
      ((this.#u = document.createDocumentFragment()),
      this.#u.append(this.#c),
      Ia(this.#a, this.#u)),
      this.#s === null && (this.#s = Ge(() => t(this.#t))));
  }
  #b(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#b(t);
      return;
    }
    ((this.#v += t),
      this.#v === 0 &&
        ((this.#e = !1),
        this.#s &&
          Ht(this.#s, () => {
            this.#s = null;
          }),
        this.#u && (this.#t.before(this.#u), (this.#u = null))));
  }
  update_pending_count(t) {
    (this.#b(t), (this.#d += t), this.#f && cr(this.#f, this.#d));
  }
  get_effect_pending() {
    return (this.#_(), a(this.#f));
  }
  error(t) {
    var r = this.#r.onerror;
    let n = this.#r.failed;
    if (this.#p || (!r && !n)) throw t;
    (this.#a && (Ne(this.#a), (this.#a = null)),
      this.#s && (Ne(this.#s), (this.#s = null)),
      this.#o && (Ne(this.#o), (this.#o = null)));
    var i = !1,
      s = !1;
    const l = () => {
      if (i) {
        Zi();
        return;
      }
      ((i = !0),
        s && Si(),
        lt.ensure(),
        (this.#d = 0),
        this.#o !== null &&
          Ht(this.#o, () => {
            this.#o = null;
          }),
        (this.#e = this.has_pending_snippet()),
        (this.#a = this.#g(() => ((this.#p = !1), Ge(() => this.#l(this.#t))))),
        this.#v > 0 ? this.#h() : (this.#e = !1));
    };
    var u = se;
    try {
      (Xe(null), (s = !0), r?.(t, l), (s = !1));
    } catch (o) {
      lr(o, this.#i && this.#i.parent);
    } finally {
      Xe(u);
    }
    n &&
      It(() => {
        this.#o = this.#g(() => {
          (lt.ensure(), (this.#p = !0));
          try {
            return Ge(() => {
              n(
                this.#t,
                () => t,
                () => l,
              );
            });
          } catch (o) {
            return (lr(o, this.#i.parent), null);
          } finally {
            this.#p = !1;
          }
        });
      });
  }
}
function ya(e, t, r, n) {
  const i = Ur;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var s = we,
    l = ue,
    u = os();
  function o() {
    Promise.all(r.map((_) => us(_)))
      .then((_) => {
        u();
        try {
          n([...t.map(i), ..._]);
        } catch (b) {
          (l.f & wt) === 0 && lr(b, l);
        }
        (s?.deactivate(), Yr());
      })
      .catch((_) => {
        lr(_, l);
      });
  }
  e.length > 0
    ? Promise.all(e).then(() => {
        u();
        try {
          return o();
        } finally {
          (s?.deactivate(), Yr());
        }
      })
    : o();
}
function os() {
  var e = ue,
    t = se,
    r = Me,
    n = we;
  if (L) var i = or;
  return function (l = !0) {
    (rt(e), Xe(t), sr(r), l && n?.activate(), L && Br(i));
  };
}
function Yr() {
  (rt(null), Xe(null), sr(null), L && Br(null));
}
const ls = new Set();
function Ur(e) {
  var t = Oe | He,
    r = se !== null && (se.f & Oe) !== 0 ? se : null;
  return (
    ue !== null && (ue.f |= vr),
    {
      ctx: Me,
      deps: null,
      effects: null,
      equals: ca,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: Pe,
      wv: 0,
      parent: r ?? ue,
      ac: null,
    }
  );
}
function us(e, t) {
  let r = ue;
  r === null && gi();
  var n = r.b,
    i = void 0,
    s = Vt(Pe),
    l = !se,
    u = new Map();
  return (
    Es(() => {
      var o = ia();
      i = o.promise;
      try {
        Promise.resolve(e())
          .then(o.resolve, o.reject)
          .then(() => {
            (_ === we && _.committed && _.deactivate(), Yr());
          });
      } catch (g) {
        (o.reject(g), Yr());
      }
      var _ = we;
      if (l) {
        var b = !n.is_pending();
        (n.update_pending_count(1),
          _.increment(b),
          u.get(_)?.reject(ar),
          u.delete(_),
          u.set(_, o));
      }
      const p = (g, m = void 0) => {
        if ((_.activate(), m)) m !== ar && ((s.f |= Nt), cr(s, m));
        else {
          ((s.f & Nt) !== 0 && (s.f ^= Nt), cr(s, g));
          for (const [E, x] of u) {
            if ((u.delete(E), E === _)) break;
            x.reject(ar);
          }
        }
        l && (n.update_pending_count(-1), _.decrement(b));
      };
      o.promise.then(p, (g) => p(null, g || "unknown"));
    }),
    Tn(() => {
      for (const o of u.values()) o.reject(ar);
    }),
    L && (s.f |= $r),
    new Promise((o) => {
      function _(b) {
        function p() {
          b === i ? o(s) : _(i);
        }
        b.then(p, p);
      }
      _(i);
    })
  );
}
function Y(e) {
  const t = Ur(e);
  return (Ra(t), t);
}
function xa(e) {
  const t = Ur(e);
  return ((t.equals = da), t);
}
function vn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1) Ne(t[r]);
  }
}
let nn = [];
function cs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Oe) === 0) return (t.f & wt) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function An(e) {
  var t,
    r = ue;
  if ((rt(cs(e)), L)) {
    let n = ur;
    zn(new Set());
    try {
      (nn.includes(e) && hi(), nn.push(e), (e.f &= ~Lt), vn(e), (t = pn(e)));
    } finally {
      (rt(r), zn(n), nn.pop());
    }
  } else
    try {
      ((e.f &= ~Lt), vn(e), (t = pn(e)));
    } finally {
      rt(r);
    }
  return t;
}
function wa(e) {
  var t = An(e);
  if ((e.equals(t) || (we?.is_fork || (e.v = t), (e.wv = ja())), !Qt))
    if (Qe !== null) (wr() || we?.is_fork) && Qe.set(e, t);
    else {
      var r = (e.f & nt) === 0 ? ft : ze;
      je(e, r);
    }
}
let ur = new Set();
const Ot = new Map();
function zn(e) {
  ur = e;
}
let Fn = !1;
function ds() {
  Fn = !0;
}
function Vt(e, t) {
  var r = { f: 0, v: e, reactions: null, equals: ca, rv: 0, wv: 0 };
  return r;
}
function Z(e, t) {
  const r = Vt(e);
  return (Ra(r), r);
}
function fs(e, t = !1, r = !0) {
  const n = Vt(e);
  return (t || (n.equals = da), n);
}
function O(e, t, r = !1) {
  se !== null &&
    (!ct || (se.f & jr) !== 0) &&
    pa() &&
    (se.f & (Oe | vt | $r | jr)) !== 0 &&
    !Et?.includes(e) &&
    Fi();
  let n = r ? ut(t) : t;
  return (L && fa(n, e.label), cr(e, n));
}
function cr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    (Qt ? Ot.set(e, t) : Ot.set(e, r), (e.v = t));
    var n = lt.ensure();
    if ((n.capture(e, r), L)) {
      if (ue !== null) {
        e.updated ??= new Map();
        const i = (e.updated.get("")?.count ?? 0) + 1;
        if ((e.updated.set("", { error: null, count: i }), i > 5)) {
          const s = Ki("updated at");
          if (s !== null) {
            let l = e.updated.get(s.stack);
            (l || ((l = { error: s, count: 0 }), e.updated.set(s.stack, l)),
              l.count++);
          }
        }
      }
      ue !== null && (e.set_during_effect = !0);
    }
    ((e.f & Oe) !== 0 &&
      ((e.f & He) !== 0 && An(e), je(e, (e.f & nt) !== 0 ? ze : ft)),
      (e.wv = ja()),
      Ea(e, He),
      ue !== null &&
        (ue.f & ze) !== 0 &&
        (ue.f & (At | Jt)) === 0 &&
        (Je === null ? Fs([e]) : Je.push(e)),
      !n.is_fork && ur.size > 0 && !Fn && ka());
  }
  return t;
}
function ka() {
  Fn = !1;
  var e = Zt;
  Gr(!0);
  const t = Array.from(ur);
  try {
    for (const r of t) ((r.f & ze) !== 0 && je(r, ft), Mr(r) && Er(r));
  } finally {
    Gr(e);
  }
  ur.clear();
}
function _r(e) {
  O(e, e.v + 1);
}
function Ea(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i],
        l = s.f;
      if (L && (l & jr) !== 0) {
        ur.add(s);
        continue;
      }
      var u = (l & He) === 0;
      if ((u && je(s, t), (l & Oe) !== 0)) {
        var o = s;
        (Qe?.delete(o), (l & Lt) === 0 && (l & nt && (s.f |= Lt), Ea(o, ft)));
      } else u && ((l & vt) !== 0 && bt !== null && bt.add(s), Kt(s));
    }
}
const vs = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function ut(e) {
  if (typeof e != "object" || e === null || Xt in e) return e;
  const t = aa(e);
  if (t !== oi && t !== li) return e;
  var r = new Map(),
    n = yn(e),
    i = Z(0),
    s = $t,
    l = (b) => {
      if ($t === s) return b();
      var p = se,
        g = $t;
      (Xe(null), Yn(s));
      var m = b();
      return (Xe(p), Yn(g), m);
    };
  n && (r.set("length", Z(e.length)), L && (e = hs(e)));
  var u = "";
  let o = !1;
  function _(b) {
    if (!o) {
      ((o = !0), (u = b), st(i, `${u} version`));
      for (const [p, g] of r) st(g, Yt(u, p));
      o = !1;
    }
  }
  return new Proxy(e, {
    defineProperty(b, p, g) {
      (!("value" in g) ||
        g.configurable === !1 ||
        g.enumerable === !1 ||
        g.writable === !1) &&
        Ci();
      var m = r.get(p);
      return (
        m === void 0
          ? (m = l(() => {
              var E = Z(g.value);
              return (
                r.set(p, E),
                L && typeof p == "string" && st(E, Yt(u, p)),
                E
              );
            }))
          : O(m, g.value, !0),
        !0
      );
    },
    deleteProperty(b, p) {
      var g = r.get(p);
      if (g === void 0) {
        if (p in b) {
          const m = l(() => Z(Pe));
          (r.set(p, m), _r(i), L && st(m, Yt(u, p)));
        }
      } else (O(g, Pe), _r(i));
      return !0;
    },
    get(b, p, g) {
      if (p === Xt) return e;
      if (L && p === la) return _;
      var m = r.get(p),
        E = p in b;
      if (
        (m === void 0 &&
          (!E || qt(b, p)?.writable) &&
          ((m = l(() => {
            var f = ut(E ? b[p] : Pe),
              k = Z(f);
            return (L && st(k, Yt(u, p)), k);
          })),
          r.set(p, m)),
        m !== void 0)
      ) {
        var x = a(m);
        return x === Pe ? void 0 : x;
      }
      return Reflect.get(b, p, g);
    },
    getOwnPropertyDescriptor(b, p) {
      var g = Reflect.getOwnPropertyDescriptor(b, p);
      if (g && "value" in g) {
        var m = r.get(p);
        m && (g.value = a(m));
      } else if (g === void 0) {
        var E = r.get(p),
          x = E?.v;
        if (E !== void 0 && x !== Pe)
          return { enumerable: !0, configurable: !0, value: x, writable: !0 };
      }
      return g;
    },
    has(b, p) {
      if (p === Xt) return !0;
      var g = r.get(p),
        m = (g !== void 0 && g.v !== Pe) || Reflect.has(b, p);
      if (g !== void 0 || (ue !== null && (!m || qt(b, p)?.writable))) {
        g === void 0 &&
          ((g = l(() => {
            var x = m ? ut(b[p]) : Pe,
              f = Z(x);
            return (L && st(f, Yt(u, p)), f);
          })),
          r.set(p, g));
        var E = a(g);
        if (E === Pe) return !1;
      }
      return m;
    },
    set(b, p, g, m) {
      var E = r.get(p),
        x = p in b;
      if (n && p === "length")
        for (var f = g; f < E.v; f += 1) {
          var k = r.get(f + "");
          k !== void 0
            ? O(k, Pe)
            : f in b &&
              ((k = l(() => Z(Pe))), r.set(f + "", k), L && st(k, Yt(u, f)));
        }
      if (E === void 0)
        (!x || qt(b, p)?.writable) &&
          ((E = l(() => Z(void 0))),
          L && st(E, Yt(u, p)),
          O(E, ut(g)),
          r.set(p, E));
      else {
        x = E.v !== Pe;
        var d = l(() => ut(g));
        O(E, d);
      }
      var v = Reflect.getOwnPropertyDescriptor(b, p);
      if ((v?.set && v.set.call(m, g), !x)) {
        if (n && typeof p == "string") {
          var c = r.get("length"),
            y = Number(p);
          Number.isInteger(y) && y >= c.v && O(c, y + 1);
        }
        _r(i);
      }
      return !0;
    },
    ownKeys(b) {
      a(i);
      var p = Reflect.ownKeys(b).filter((E) => {
        var x = r.get(E);
        return x === void 0 || x.v !== Pe;
      });
      for (var [g, m] of r) m.v !== Pe && !(g in b) && p.push(g);
      return p;
    },
    setPrototypeOf() {
      Ai();
    },
  });
}
function Yt(e, t) {
  return typeof t == "symbol"
    ? `${e}[Symbol(${t.description ?? ""})]`
    : vs.test(t)
      ? `${e}.${t}`
      : /^\d+$/.test(t)
        ? `${e}[${t}]`
        : `${e}['${t}']`;
}
function yr(e) {
  try {
    if (e !== null && typeof e == "object" && Xt in e) return e[Xt];
  } catch {}
  return e;
}
function ps(e, t) {
  return Object.is(yr(e), yr(t));
}
const gs = new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift",
]);
function hs(e) {
  return new Proxy(e, {
    get(t, r, n) {
      var i = Reflect.get(t, r, n);
      return gs.has(r)
        ? function (...s) {
            ds();
            var l = i.apply(this, s);
            return (ka(), l);
          }
        : i;
    },
  });
}
function ms() {
  const e = Array.prototype,
    t = Array.__svelte_cleanup;
  t && t();
  const { indexOf: r, lastIndexOf: n, includes: i } = e;
  ((e.indexOf = function (s, l) {
    const u = r.call(this, s, l);
    if (u === -1) {
      for (let o = l ?? 0; o < this.length; o += 1)
        if (yr(this[o]) === s) {
          rn("array.indexOf(...)");
          break;
        }
    }
    return u;
  }),
    (e.lastIndexOf = function (s, l) {
      const u = n.call(this, s, l ?? this.length - 1);
      if (u === -1) {
        for (let o = 0; o <= (l ?? this.length - 1); o += 1)
          if (yr(this[o]) === s) {
            rn("array.lastIndexOf(...)");
            break;
          }
      }
      return u;
    }),
    (e.includes = function (s, l) {
      const u = i.call(this, s, l);
      if (!u) {
        for (let o = 0; o < this.length; o += 1)
          if (yr(this[o]) === s) {
            rn("array.includes(...)");
            break;
          }
      }
      return u;
    }),
    (Array.__svelte_cleanup = () => {
      ((e.indexOf = r), (e.lastIndexOf = n), (e.includes = i));
    }));
}
var jn, Sn, Ca, Aa;
function bs() {
  if (jn === void 0) {
    ((jn = window), (Sn = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      r = Text.prototype;
    ((Ca = qt(t, "firstChild").get),
      (Aa = qt(t, "nextSibling").get),
      Ln(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      Ln(r) && (r.__t = void 0),
      L && ((e.__svelte_meta = null), ms()));
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
function dr(e) {
  return Ca.call(e);
}
function Sr(e) {
  return Aa.call(e);
}
function F(e, t) {
  return dr(e);
}
function Ke(e, t = !1) {
  {
    var r = dr(e);
    return r instanceof Comment && r.data === "" ? Sr(r) : r;
  }
}
function D(e, t = 1, r = !1) {
  let n = e;
  for (; t--; ) n = Sr(n);
  return n;
}
function _s(e) {
  e.textContent = "";
}
function Fa() {
  return !1;
}
function ys(e, t) {
  if (t) {
    const r = document.body;
    ((e.autofocus = !0),
      It(() => {
        document.activeElement === r && e.focus();
      }));
  }
}
function Tr(e) {
  var t = se,
    r = ue;
  (Xe(null), rt(null));
  try {
    return e();
  } finally {
    (Xe(t), rt(r));
  }
}
function xs(e) {
  (ue === null && (se === null && _i(e), bi()), Qt && mi(e));
}
function ws(e, t) {
  var r = t.last;
  r === null
    ? (t.last = t.first = e)
    : ((r.next = e), (e.prev = r), (t.last = e));
}
function pt(e, t, r) {
  var n = ue;
  if (L) for (; n !== null && (n.f & jr) !== 0; ) n = n.parent;
  n !== null && (n.f & Ue) !== 0 && (e |= Ue);
  var i = {
    ctx: Me,
    deps: null,
    nodes: null,
    f: e | He | nt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  if ((L && (i.component_function = Fr), r))
    try {
      (Er(i), (i.f |= Zr));
    } catch (u) {
      throw (Ne(i), u);
    }
  else t !== null && Kt(i);
  var s = i;
  if (
    (r &&
      s.deps === null &&
      s.teardown === null &&
      s.nodes === null &&
      s.first === s.last &&
      (s.f & vr) === 0 &&
      ((s = s.first),
      (e & vt) !== 0 && (e & Dt) !== 0 && s !== null && (s.f |= Dt)),
    s !== null &&
      ((s.parent = n),
      n !== null && ws(s, n),
      se !== null && (se.f & Oe) !== 0 && (e & Jt) === 0))
  ) {
    var l = se;
    (l.effects ??= []).push(s);
  }
  return i;
}
function wr() {
  return se !== null && !ct;
}
function Tn(e) {
  const t = pt(wn, null, !1);
  return (je(t, ze), (t.teardown = e), t);
}
function Wt(e) {
  (xs("$effect"), L && Ut(e, "name", { value: "$effect" }));
  var t = ue.f,
    r = !se && (t & At) !== 0 && (t & Zr) === 0;
  if (r) {
    var n = Me;
    (n.e ??= []).push(e);
  } else return Sa(e);
}
function Sa(e) {
  return pt(xn | di, e, !1);
}
function ks(e) {
  lt.ensure();
  const t = pt(Jt | vr, e, !0);
  return (r = {}) =>
    new Promise((n) => {
      r.outro
        ? Ht(t, () => {
            (Ne(t), n(void 0));
          })
        : (Ne(t), n(void 0));
    });
}
function Kr(e) {
  return pt(xn, e, !1);
}
function Es(e) {
  return pt($r | vr, e, !0);
}
function Ta(e, t = 0) {
  return pt(wn | t, e, !0);
}
function H(e, t = [], r = [], n = []) {
  ya(n, t, r, (i) => {
    pt(wn, () => e(...i.map(a)), !0);
  });
}
function Pr(e, t = 0) {
  var r = pt(vt | t, e, !0);
  return (L && (r.dev_stack = or), r);
}
function Pa(e, t = 0) {
  var r = pt(sa | t, e, !0);
  return (L && (r.dev_stack = or), r);
}
function Ge(e) {
  return pt(At | vr, e, !0);
}
function Ma(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt,
      n = se;
    (Bn(!0), Xe(null));
    try {
      t.call(null);
    } finally {
      (Bn(r), Xe(n));
    }
  }
}
function Na(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null &&
      Tr(() => {
        i.abort(ar);
      });
    var n = r.next;
    ((r.f & Jt) !== 0 ? (r.parent = null) : Ne(r, t), (r = n));
  }
}
function Cs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    ((t.f & At) === 0 && Ne(t), (t = r));
  }
}
function Ne(e, t = !0) {
  var r = !1;
  ((t || (e.f & oa) !== 0) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (As(e.nodes.start, e.nodes.end), (r = !0)),
    Na(e, t && !r),
    qr(e, 0),
    je(e, wt));
  var n = e.nodes && e.nodes.t;
  if (n !== null) for (const s of n) s.stop();
  Ma(e);
  var i = e.parent;
  (i !== null && i.first !== null && Oa(e),
    L && (e.component_function = null),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes =
      e.ac =
        null));
}
function As(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : Sr(e);
    (e.remove(), (e = r));
  }
}
function Oa(e) {
  var t = e.parent,
    r = e.prev,
    n = e.next;
  (r !== null && (r.next = n),
    n !== null && (n.prev = r),
    t !== null &&
      (t.first === e && (t.first = n), t.last === e && (t.last = r)));
}
function Ht(e, t, r = !0) {
  var n = [];
  Da(e, n, !0);
  var i = () => {
      (r && Ne(e), t && t());
    },
    s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var u of n) u.out(l);
  } else i();
}
function Da(e, t, r) {
  if ((e.f & Ue) === 0) {
    e.f ^= Ue;
    var n = e.nodes && e.nodes.t;
    if (n !== null) for (const u of n) (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var s = i.next,
        l = (i.f & Dt) !== 0 || ((i.f & At) !== 0 && (e.f & vt) !== 0);
      (Da(i, t, l ? r : !1), (i = s));
    }
  }
}
function Pn(e) {
  La(e, !0);
}
function La(e, t) {
  if ((e.f & Ue) !== 0) {
    ((e.f ^= Ue), (e.f & ze) === 0 && (je(e, He), Kt(e)));
    for (var r = e.first; r !== null; ) {
      var n = r.next,
        i = (r.f & Dt) !== 0 || (r.f & At) !== 0;
      (La(r, i ? t : !1), (r = n));
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null) for (const l of s) (l.is_global || t) && l.in();
  }
}
function Ia(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : Sr(r);
      (t.append(r), (r = i));
    }
}
let Zt = !1;
function Gr(e) {
  Zt = e;
}
let Qt = !1;
function Bn(e) {
  Qt = e;
}
let se = null,
  ct = !1;
function Xe(e) {
  se = e;
}
let ue = null;
function rt(e) {
  ue = e;
}
let Et = null;
function Ra(e) {
  se !== null && (Et === null ? (Et = [e]) : Et.push(e));
}
let Ye = null,
  $e = 0,
  Je = null;
function Fs(e) {
  Je = e;
}
let za = 1,
  kr = 0,
  $t = kr;
function Yn(e) {
  $t = e;
}
function ja() {
  return ++za;
}
function Mr(e) {
  var t = e.f;
  if ((t & He) !== 0) return !0;
  if ((t & Oe && (e.f &= ~Lt), (t & ft) !== 0)) {
    var r = e.deps;
    if (r !== null)
      for (var n = r.length, i = 0; i < n; i++) {
        var s = r[i];
        if ((Mr(s) && wa(s), s.wv > e.wv)) return !0;
      }
    (t & nt) !== 0 && Qe === null && je(e, ze);
  }
  return !1;
}
function Ba(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !Et?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & Oe) !== 0
        ? Ba(s, t, !1)
        : t === s && (r ? je(s, He) : (s.f & ze) !== 0 && je(s, ft), Kt(s));
    }
}
function pn(e) {
  var t = Ye,
    r = $e,
    n = Je,
    i = se,
    s = Et,
    l = Me,
    u = ct,
    o = $t,
    _ = e.f;
  ((Ye = null),
    ($e = 0),
    (Je = null),
    (se = (_ & (At | Jt)) === 0 ? e : null),
    (Et = null),
    sr(e.ctx),
    (ct = !1),
    ($t = ++kr),
    e.ac !== null &&
      (Tr(() => {
        e.ac.abort(ar);
      }),
      (e.ac = null)));
  try {
    e.f |= cn;
    var b = e.fn,
      p = b(),
      g = e.deps;
    if (Ye !== null) {
      var m;
      if ((qr(e, $e), g !== null && $e > 0))
        for (g.length = $e + Ye.length, m = 0; m < Ye.length; m++)
          g[$e + m] = Ye[m];
      else e.deps = g = Ye;
      if (wr() && (e.f & nt) !== 0)
        for (m = $e; m < g.length; m++) (g[m].reactions ??= []).push(e);
    } else g !== null && $e < g.length && (qr(e, $e), (g.length = $e));
    if (
      pa() &&
      Je !== null &&
      !ct &&
      g !== null &&
      (e.f & (Oe | ft | He)) === 0
    )
      for (m = 0; m < Je.length; m++) Ba(Je[m], e);
    return (
      i !== null &&
        i !== e &&
        (kr++, Je !== null && (n === null ? (n = Je) : n.push(...Je))),
      (e.f & Nt) !== 0 && (e.f ^= Nt),
      p
    );
  } catch (E) {
    return ha(E);
  } finally {
    ((e.f ^= cn),
      (Ye = t),
      ($e = r),
      (Je = n),
      (se = i),
      (Et = s),
      sr(l),
      (ct = u),
      ($t = o));
  }
}
function Ss(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ii.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? (r = t.reactions = null) : ((r[n] = r[i]), r.pop());
    }
  }
  r === null &&
    (t.f & Oe) !== 0 &&
    (Ye === null || !Ye.includes(t)) &&
    (je(t, ft),
    (t.f & nt) !== 0 && ((t.f ^= nt), (t.f &= ~Lt)),
    vn(t),
    qr(t, 0));
}
function qr(e, t) {
  var r = e.deps;
  if (r !== null) for (var n = t; n < r.length; n++) Ss(e, r[n]);
}
function Er(e) {
  var t = e.f;
  if ((t & wt) === 0) {
    je(e, ze);
    var r = ue,
      n = Zt;
    if (((ue = e), (Zt = !0), L)) {
      var i = Fr;
      In(e.component_function);
      var s = or;
      Br(e.dev_stack ?? or);
    }
    try {
      ((t & (vt | sa)) !== 0 ? Cs(e) : Na(e), Ma(e));
      var l = pn(e);
      ((e.teardown = typeof l == "function" ? l : null), (e.wv = za));
      var u;
      L && Ui && (e.f & He) !== 0 && e.deps;
    } finally {
      ((Zt = n), (ue = r), L && (In(i), Br(s)));
    }
  }
}
function a(e) {
  var t = e.f,
    r = (t & Oe) !== 0;
  if (se !== null && !ct) {
    var n = ue !== null && (ue.f & wt) !== 0;
    if (!n && !Et?.includes(e)) {
      var i = se.deps;
      if ((se.f & cn) !== 0)
        e.rv < kr &&
          ((e.rv = kr),
          Ye === null && i !== null && i[$e] === e
            ? $e++
            : Ye === null
              ? (Ye = [e])
              : Ye.includes(e) || Ye.push(e));
      else {
        (se.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? (e.reactions = [se]) : s.includes(se) || s.push(se);
      }
    }
  }
  if ((L && ls.delete(e), Qt)) {
    if (Ot.has(e)) return Ot.get(e);
    if (r) {
      var l = e,
        u = l.v;
      return (
        (((l.f & ze) === 0 && l.reactions !== null) || Ga(l)) && (u = An(l)),
        Ot.set(l, u),
        u
      );
    }
  } else
    r &&
      (!Qe?.has(e) || (we?.is_fork && !wr())) &&
      ((l = e), Mr(l) && wa(l), Zt && wr() && (l.f & nt) === 0 && Ya(l));
  if (Qe?.has(e)) return Qe.get(e);
  if ((e.f & Nt) !== 0) throw e.v;
  return e.v;
}
function Ya(e) {
  if (e.deps !== null) {
    e.f ^= nt;
    for (const t of e.deps)
      ((t.reactions ??= []).push(e),
        (t.f & Oe) !== 0 && (t.f & nt) === 0 && Ya(t));
  }
}
function Ga(e) {
  if (e.v === Pe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ot.has(t) || ((t.f & Oe) !== 0 && Ga(t))) return !0;
  return !1;
}
function Vr(e) {
  var t = ct;
  try {
    return ((ct = !0), e());
  } finally {
    ct = t;
  }
}
const Ts = -7169;
function je(e, t) {
  e.f = (e.f & Ts) | t;
}
function Ps(e) {
  return (
    e.endsWith("capture") &&
    e !== "gotpointercapture" &&
    e !== "lostpointercapture"
  );
}
const Ms = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart",
];
function Ns(e) {
  return Ms.includes(e);
}
const Os = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
};
function Ds(e) {
  return ((e = e.toLowerCase()), Os[e] ?? e);
}
const Ls = ["touchstart", "touchmove"];
function Is(e) {
  return Ls.includes(e);
}
const qa = new Set(),
  gn = new Set();
function Xa(e, t, r, n = {}) {
  function i(s) {
    if ((n.capture || mr.call(t, s), !s.cancelBubble))
      return Tr(() => r?.call(this, s));
  }
  return (
    e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
      ? It(() => {
          t.addEventListener(e, i, n);
        })
      : t.addEventListener(e, i, n),
    i
  );
}
function Gn(e, t, r, n, i) {
  var s = { capture: n, passive: i },
    l = Xa(e, t, r, s);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    Tn(() => {
      t.removeEventListener(e, l, s);
    });
}
function Ce(e) {
  for (var t = 0; t < e.length; t++) qa.add(e[t]);
  for (var r of gn) r(e);
}
let qn = null;
function mr(e) {
  var t = this,
    r = t.ownerDocument,
    n = e.type,
    i = e.composedPath?.() || [],
    s = i[0] || e.target;
  qn = e;
  var l = 0,
    u = qn === e && e.__root;
  if (u) {
    var o = i.indexOf(u);
    if (o !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var _ = i.indexOf(t);
    if (_ === -1) return;
    o <= _ && (l = o);
  }
  if (((s = i[l] || e.target), s !== t)) {
    Ut(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      },
    });
    var b = se,
      p = ue;
    (Xe(null), rt(null));
    try {
      for (var g, m = []; s !== null; ) {
        var E = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var x = s["__" + n];
          x != null && (!s.disabled || e.target === s) && x.call(s, e);
        } catch (f) {
          g ? m.push(f) : (g = f);
        }
        if (e.cancelBubble || E === t || E === null) break;
        s = E;
      }
      if (g) {
        for (let f of m)
          queueMicrotask(() => {
            throw f;
          });
        throw g;
      }
    } finally {
      ((e.__root = t), delete e.currentTarget, Xe(b), rt(p));
    }
  }
}
function Ha(e) {
  var t = document.createElement("template");
  return ((t.innerHTML = e.replaceAll("<!>", "<!---->")), t.content);
}
function Cr(e, t) {
  var r = ue;
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
function q(e, t) {
  var r = (t & Bi) !== 0,
    n = (t & Yi) !== 0,
    i,
    s = !e.startsWith("<!>");
  return () => {
    i === void 0 && ((i = Ha(s ? e : "<!>" + e)), r || (i = dr(i)));
    var l = n || Sn ? document.importNode(i, !0) : i.cloneNode(!0);
    if (r) {
      var u = dr(l),
        o = l.lastChild;
      Cr(u, o);
    } else Cr(l, l);
    return l;
  };
}
function Rs(e, t, r = "svg") {
  var n = !e.startsWith("<!>"),
    i = `<${r}>${n ? e : "<!>" + e}</${r}>`,
    s;
  return () => {
    if (!s) {
      var l = Ha(i),
        u = dr(l);
      s = dr(u);
    }
    var o = s.cloneNode(!0);
    return (Cr(o, o), o);
  };
}
function Ft(e, t) {
  return Rs(e, t, "svg");
}
function xt(e = "") {
  {
    var t = kt(e + "");
    return (Cr(t, t), t);
  }
}
function Ct() {
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    r = kt();
  return (e.append(t, r), Cr(t, r), e);
}
function M(e, t) {
  e !== null && e.before(t);
}
let hn = !0;
function le(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && ((e.__t = r), (e.nodeValue = r + ""));
}
function zs(e, t) {
  return js(e, t);
}
const nr = new Map();
function js(
  e,
  { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0 },
) {
  bs();
  var u = new Set(),
    o = (p) => {
      for (var g = 0; g < p.length; g++) {
        var m = p[g];
        if (!u.has(m)) {
          u.add(m);
          var E = Is(m);
          t.addEventListener(m, mr, { passive: E });
          var x = nr.get(m);
          x === void 0
            ? (document.addEventListener(m, mr, { passive: E }), nr.set(m, 1))
            : nr.set(m, x + 1);
        }
      }
    };
  (o(Xr(qa)), gn.add(o));
  var _ = void 0,
    b = ks(() => {
      var p = r ?? t.appendChild(kt());
      return (
        is(p, { pending: () => {} }, (g) => {
          if (s) {
            at({});
            var m = Me;
            m.c = s;
          }
          (i && (n.$$events = i),
            (hn = l),
            (_ = e(g, n) || {}),
            (hn = !0),
            s && it());
        }),
        () => {
          for (var g of u) {
            t.removeEventListener(g, mr);
            var m = nr.get(g);
            --m === 0
              ? (document.removeEventListener(g, mr), nr.delete(g))
              : nr.set(g, m);
          }
          (gn.delete(o), p !== r && p.parentNode?.removeChild(p));
        }
      );
    });
  return (Bs.set(_, b), _);
}
let Bs = new WeakMap();
class Mn {
  anchor;
  #e = new Map();
  #t = new Map();
  #n = new Map();
  #r = new Set();
  #l = !0;
  constructor(t, r = !0) {
    ((this.anchor = t), (this.#l = r));
  }
  #i = () => {
    var t = we;
    if (this.#e.has(t)) {
      var r = this.#e.get(t),
        n = this.#t.get(r);
      if (n) (Pn(n), this.#r.delete(r));
      else {
        var i = this.#n.get(r);
        i &&
          (this.#t.set(r, i.effect),
          this.#n.delete(r),
          i.fragment.lastChild.remove(),
          this.anchor.before(i.fragment),
          (n = i.effect));
      }
      for (const [s, l] of this.#e) {
        if ((this.#e.delete(s), s === t)) break;
        const u = this.#n.get(l);
        u && (Ne(u.effect), this.#n.delete(l));
      }
      for (const [s, l] of this.#t) {
        if (s === r || this.#r.has(s)) continue;
        const u = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var _ = document.createDocumentFragment();
            (Ia(l, _),
              _.append(kt()),
              this.#n.set(s, { effect: l, fragment: _ }));
          } else Ne(l);
          (this.#r.delete(s), this.#t.delete(s));
        };
        this.#l || !n ? (this.#r.add(s), Ht(l, u, !1)) : u();
      }
    }
  };
  #a = (t) => {
    this.#e.delete(t);
    const r = Array.from(this.#e.values());
    for (const [n, i] of this.#n)
      r.includes(n) || (Ne(i.effect), this.#n.delete(n));
  };
  ensure(t, r) {
    var n = we,
      i = Fa();
    if (r && !this.#t.has(t) && !this.#n.has(t))
      if (i) {
        var s = document.createDocumentFragment(),
          l = kt();
        (s.append(l), this.#n.set(t, { effect: Ge(() => r(l)), fragment: s }));
      } else
        this.#t.set(
          t,
          Ge(() => r(this.anchor)),
        );
    if ((this.#e.set(n, t), i)) {
      for (const [u, o] of this.#t)
        u === t ? n.skipped_effects.delete(o) : n.skipped_effects.add(o);
      for (const [u, o] of this.#n)
        u === t
          ? n.skipped_effects.delete(o.effect)
          : n.skipped_effects.add(o.effect);
      (n.oncommit(this.#i), n.ondiscard(this.#a));
    } else this.#i();
  }
}
function V(e, t, r = !1) {
  var n = new Mn(e),
    i = r ? Dt : 0;
  function s(l, u) {
    n.ensure(l, u);
  }
  Pr(() => {
    var l = !1;
    (t((u, o = !0) => {
      ((l = !0), s(o, u));
    }),
      l || s(!1, null));
  }, i);
}
function Ys(e, t, r) {
  var n = new Mn(e);
  Pr(() => {
    var i = t();
    n.ensure(i, r);
  });
}
function Gs(e, t) {
  return t;
}
function qs(e, t, r) {
  for (var n = [], i = t.length, s, l = t.length, u = 0; u < i; u++) {
    let p = t[u];
    Ht(
      p,
      () => {
        if (s) {
          if ((s.pending.delete(p), s.done.add(p), s.pending.size === 0)) {
            var g = e.outrogroups;
            (mn(Xr(s.done)),
              g.delete(s),
              g.size === 0 && (e.outrogroups = null));
          }
        } else l -= 1;
      },
      !1,
    );
  }
  if (l === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var _ = r,
        b = _.parentNode;
      (_s(b), b.append(_), e.items.clear());
    }
    mn(t, !o);
  } else
    ((s = { pending: new Set(t), done: new Set() }),
      (e.outrogroups ??= new Set()).add(s));
}
function mn(e, t = !0) {
  for (var r = 0; r < e.length; r++) Ne(e[r], t);
}
var Xn;
function Nn(e, t, r, n, i, s = null) {
  var l = e,
    u = new Map(),
    o = (t & ua) !== 0;
  if (o) {
    var _ = e;
    l = _.appendChild(kt());
  }
  var b = null,
    p = xa(() => {
      var k = r();
      return yn(k) ? k : k == null ? [] : Xr(k);
    }),
    g,
    m = !0;
  function E() {
    ((f.fallback = b),
      Xs(f, g, l, t, n),
      b !== null &&
        (g.length === 0
          ? (b.f & yt) === 0
            ? Pn(b)
            : ((b.f ^= yt), br(b, null, l))
          : Ht(b, () => {
              b = null;
            })));
  }
  var x = Pr(() => {
      g = a(p);
      for (
        var k = g.length, d = new Set(), v = we, c = Fa(), y = 0;
        y < k;
        y += 1
      ) {
        var w = g[y],
          A = n(w, y),
          C = m ? null : u.get(A);
        (C
          ? (C.v && cr(C.v, w),
            C.i && cr(C.i, y),
            c && v.skipped_effects.delete(C.e))
          : ((C = Hs(u, m ? l : (Xn ??= kt()), w, A, y, i, t, r)),
            m || (C.e.f |= yt),
            u.set(A, C)),
          d.add(A));
      }
      if (
        (k === 0 &&
          s &&
          !b &&
          (m
            ? (b = Ge(() => s(l)))
            : ((b = Ge(() => s((Xn ??= kt())))), (b.f |= yt))),
        !m)
      )
        if (c) {
          for (const [S, I] of u) d.has(S) || v.skipped_effects.add(I.e);
          (v.oncommit(E), v.ondiscard(() => {}));
        } else E();
      a(p);
    }),
    f = { effect: x, items: u, outrogroups: null, fallback: b };
  m = !1;
}
function Xs(e, t, r, n, i) {
  var s = (n & Mi) !== 0,
    l = t.length,
    u = e.items,
    o = e.effect.first,
    _,
    b = null,
    p,
    g = [],
    m = [],
    E,
    x,
    f,
    k;
  if (s)
    for (k = 0; k < l; k += 1)
      ((E = t[k]),
        (x = i(E, k)),
        (f = u.get(x).e),
        (f.f & yt) === 0 && (f.nodes?.a?.measure(), (p ??= new Set()).add(f)));
  for (k = 0; k < l; k += 1) {
    if (((E = t[k]), (x = i(E, k)), (f = u.get(x).e), e.outrogroups !== null))
      for (const I of e.outrogroups) (I.pending.delete(f), I.done.delete(f));
    if ((f.f & yt) !== 0)
      if (((f.f ^= yt), f === o)) br(f, null, r);
      else {
        var d = b ? b.next : o;
        (f === e.effect.last && (e.effect.last = f.prev),
          f.prev && (f.prev.next = f.next),
          f.next && (f.next.prev = f.prev),
          Mt(e, b, f),
          Mt(e, f, d),
          br(f, d, r),
          (b = f),
          (g = []),
          (m = []),
          (o = b.next));
        continue;
      }
    if (
      ((f.f & Ue) !== 0 &&
        (Pn(f), s && (f.nodes?.a?.unfix(), (p ??= new Set()).delete(f))),
      f !== o)
    ) {
      if (_ !== void 0 && _.has(f)) {
        if (g.length < m.length) {
          var v = m[0],
            c;
          b = v.prev;
          var y = g[0],
            w = g[g.length - 1];
          for (c = 0; c < g.length; c += 1) br(g[c], v, r);
          for (c = 0; c < m.length; c += 1) _.delete(m[c]);
          (Mt(e, y.prev, w.next),
            Mt(e, b, y),
            Mt(e, w, v),
            (o = v),
            (b = w),
            (k -= 1),
            (g = []),
            (m = []));
        } else
          (_.delete(f),
            br(f, o, r),
            Mt(e, f.prev, f.next),
            Mt(e, f, b === null ? e.effect.first : b.next),
            Mt(e, b, f),
            (b = f));
        continue;
      }
      for (g = [], m = []; o !== null && o !== f; )
        ((_ ??= new Set()).add(o), m.push(o), (o = o.next));
      if (o === null) continue;
    }
    ((f.f & yt) === 0 && g.push(f), (b = f), (o = f.next));
  }
  if (e.outrogroups !== null) {
    for (const I of e.outrogroups)
      I.pending.size === 0 && (mn(Xr(I.done)), e.outrogroups?.delete(I));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || _ !== void 0) {
    var A = [];
    if (_ !== void 0) for (f of _) (f.f & Ue) === 0 && A.push(f);
    for (; o !== null; )
      ((o.f & Ue) === 0 && o !== e.fallback && A.push(o), (o = o.next));
    var C = A.length;
    if (C > 0) {
      var S = (n & ua) !== 0 && l === 0 ? r : null;
      if (s) {
        for (k = 0; k < C; k += 1) A[k].nodes?.a?.measure();
        for (k = 0; k < C; k += 1) A[k].nodes?.a?.fix();
      }
      qs(e, A, S);
    }
  }
  s &&
    It(() => {
      if (p !== void 0) for (f of p) f.nodes?.a?.apply();
    });
}
function Hs(e, t, r, n, i, s, l, u) {
  var o = (l & Ti) !== 0 ? ((l & Ni) === 0 ? fs(r, !1, !1) : Vt(r)) : null,
    _ = (l & Pi) !== 0 ? Vt(i) : null;
  return (
    L &&
      o &&
      (o.trace = () => {
        u()[_?.v ?? i];
      }),
    {
      v: o,
      i: _,
      e: Ge(
        () => (
          s(t, o ?? r, _ ?? i, u),
          () => {
            e.delete(n);
          }
        ),
      ),
    }
  );
}
function br(e, t, r) {
  if (e.nodes)
    for (
      var n = e.nodes.start,
        i = e.nodes.end,
        s = t && (t.f & yt) === 0 ? t.nodes.start : r;
      n !== null;
    ) {
      var l = Sr(n);
      if ((s.before(n), n === i)) return;
      n = l;
    }
}
function Mt(e, t, r) {
  (t === null ? (e.effect.first = r) : (t.next = r),
    r === null ? (e.effect.last = t) : (r.prev = t));
}
function dt(e, t, ...r) {
  var n = new Mn(e);
  Pr(() => {
    const i = t() ?? null;
    (L && i == null && xi(), n.ensure(i, i && ((s) => i(s, ...r))));
  }, Dt);
}
const Zs = () => performance.now(),
  _t = {
    tick: (e) => requestAnimationFrame(e),
    now: () => Zs(),
    tasks: new Set(),
  };
function Za() {
  const e = _t.now();
  (_t.tasks.forEach((t) => {
    t.c(e) || (_t.tasks.delete(t), t.f());
  }),
    _t.tasks.size !== 0 && _t.tick(Za));
}
function $s(e) {
  let t;
  return (
    _t.tasks.size === 0 && _t.tick(Za),
    {
      promise: new Promise((r) => {
        _t.tasks.add((t = { c: e, f: r }));
      }),
      abort() {
        _t.tasks.delete(t);
      },
    }
  );
}
function Rr(e, t) {
  Tr(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Us(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1
    ? t[0]
    : t[0] +
        t
          .slice(1)
          .map((r) => r[0].toUpperCase() + r.slice(1))
          .join("");
}
function Hn(e) {
  const t = {},
    r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const l = Us(i.trim());
    t[l] = s.trim();
  }
  return t;
}
const Ks = (e) => e;
function Zn(e, t, r, n) {
  var i = (e & Ri) !== 0,
    s = (e & zi) !== 0,
    l = i && s,
    u = (e & ji) !== 0,
    o = l ? "both" : i ? "in" : "out",
    _,
    b = t.inert,
    p = t.style.overflow,
    g,
    m;
  function E() {
    return Tr(() => (_ ??= r()(t, n?.() ?? {}, { direction: o })));
  }
  var x = {
      is_global: u,
      in() {
        if (((t.inert = b), !i)) {
          (m?.abort(), m?.reset?.());
          return;
        }
        (s || g?.abort(),
          Rr(t, "introstart"),
          (g = bn(t, E(), m, 1, () => {
            (Rr(t, "introend"),
              g?.abort(),
              (g = _ = void 0),
              (t.style.overflow = p));
          })));
      },
      out(v) {
        if (!s) {
          (v?.(), (_ = void 0));
          return;
        }
        ((t.inert = !0),
          Rr(t, "outrostart"),
          (m = bn(t, E(), g, 0, () => {
            (Rr(t, "outroend"), v?.());
          })));
      },
      stop: () => {
        (g?.abort(), m?.abort());
      },
    },
    f = ue;
  if (((f.nodes.t ??= []).push(x), i && hn)) {
    var k = u;
    if (!k) {
      for (var d = f.parent; d && (d.f & Dt) !== 0; )
        for (; (d = d.parent) && (d.f & vt) === 0; );
      k = !d || (d.f & Zr) !== 0;
    }
    k &&
      Kr(() => {
        Vr(() => x.in());
      });
  }
}
function bn(e, t, r, n, i) {
  var s = n === 1;
  if (ui(t)) {
    var l,
      u = !1;
    return (
      It(() => {
        if (!u) {
          var f = t({ direction: s ? "in" : "out" });
          l = bn(e, f, r, n, i);
        }
      }),
      {
        abort: () => {
          ((u = !0), l?.abort());
        },
        deactivate: () => l.deactivate(),
        reset: () => l.reset(),
        t: () => l.t(),
      }
    );
  }
  if ((r?.deactivate(), !t?.duration))
    return (i(), { abort: qe, deactivate: qe, reset: qe, t: () => n });
  const { delay: o = 0, css: _, tick: b, easing: p = Ks } = t;
  var g = [];
  if (s && r === void 0 && (b && b(0, 1), _)) {
    var m = Hn(_(0, 1));
    g.push(m, m);
  }
  var E = () => 1 - n,
    x = e.animate(g, { duration: o, fill: "forwards" });
  return (
    (x.onfinish = () => {
      x.cancel();
      var f = r?.t() ?? 1 - n;
      r?.abort();
      var k = n - f,
        d = t.duration * Math.abs(k),
        v = [];
      if (d > 0) {
        var c = !1;
        if (_)
          for (
            var y = Math.ceil(d / 16.666666666666668), w = 0;
            w <= y;
            w += 1
          ) {
            var A = f + k * p(w / y),
              C = Hn(_(A, 1 - A));
            (v.push(C), (c ||= C.overflow === "hidden"));
          }
        (c && (e.style.overflow = "hidden"),
          (E = () => {
            var S = x.currentTime;
            return f + k * p(S / d);
          }),
          b &&
            $s(() => {
              if (x.playState !== "running") return !1;
              var S = E();
              return (b(S, 1 - S), !0);
            }));
      }
      ((x = e.animate(v, { duration: d, fill: "forwards" })),
        (x.onfinish = () => {
          ((E = () => n), b?.(n, 1 - n), i());
        }));
    }),
    {
      abort: () => {
        x && (x.cancel(), (x.effect = null), (x.onfinish = qe));
      },
      deactivate: () => {
        i = qe;
      },
      reset: () => {
        n === 0 && b?.(1, 0);
      },
      t: () => E(),
    }
  );
}
function Vs(e, t) {
  var r = void 0,
    n;
  Pa(() => {
    r !== (r = t()) &&
      (n && (Ne(n), (n = null)),
      r &&
        (n = Ge(() => {
          Kr(() => r(e));
        })));
  });
}
function $a(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = $a(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Ws() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = $a(e)) && (n && (n += " "), (n += t));
  return n;
}
function W(e) {
  return typeof e == "object" ? Ws(e) : (e ?? "");
}
const $n = [
  ...` 	
\r\f \v\uFEFF`,
];
function Js(e, t, r) {
  var n = e == null ? "" : "" + e;
  if ((t && (n = n ? n + " " + t : t), r)) {
    for (var i in r)
      if (r[i]) n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, l = 0; (l = n.indexOf(i, l)) >= 0; ) {
          var u = l + s;
          (l === 0 || $n.includes(n[l - 1])) &&
          (u === n.length || $n.includes(n[u]))
            ? (n = (l === 0 ? "" : n.substring(0, l)) + n.substring(u + 1))
            : (l = u);
        }
  }
  return n === "" ? null : n;
}
function Un(e, t = !1) {
  var r = t ? " !important;" : ";",
    n = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function an(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Qs(e, t) {
  if (t) {
    var r = "",
      n,
      i;
    if ((Array.isArray(t) ? ((n = t[0]), (i = t[1])) : (n = t), e)) {
      e = String(e)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var s = !1,
        l = 0,
        u = !1,
        o = [];
      (n && o.push(...Object.keys(n).map(an)),
        i && o.push(...Object.keys(i).map(an)));
      var _ = 0,
        b = -1;
      const x = e.length;
      for (var p = 0; p < x; p++) {
        var g = e[p];
        if (
          (u
            ? g === "/" && e[p - 1] === "*" && (u = !1)
            : s
              ? s === g && (s = !1)
              : g === "/" && e[p + 1] === "*"
                ? (u = !0)
                : g === '"' || g === "'"
                  ? (s = g)
                  : g === "("
                    ? l++
                    : g === ")" && l--,
          !u && s === !1 && l === 0)
        ) {
          if (g === ":" && b === -1) b = p;
          else if (g === ";" || p === x - 1) {
            if (b !== -1) {
              var m = an(e.substring(_, b).trim());
              if (!o.includes(m)) {
                g !== ";" && p++;
                var E = e.substring(_, p).trim();
                r += " " + E + ";";
              }
            }
            ((_ = p + 1), (b = -1));
          }
        }
      }
    }
    return (
      n && (r += Un(n)),
      i && (r += Un(i, !0)),
      (r = r.trim()),
      r === "" ? null : r
    );
  }
  return e == null ? null : String(e);
}
function $(e, t, r, n, i, s) {
  var l = e.__className;
  if (l !== r || l === void 0) {
    var u = Js(r, n, s);
    (u == null
      ? e.removeAttribute("class")
      : t
        ? (e.className = u)
        : e.setAttribute("class", u),
      (e.__className = r));
  } else if (s && i !== s)
    for (var o in s) {
      var _ = !!s[o];
      (i == null || _ !== !!i[o]) && e.classList.toggle(o, _);
    }
  return s;
}
function sn(e, t = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    t[i] !== s &&
      (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, n));
  }
}
function xr(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = Qs(t, n);
    (s == null ? e.removeAttribute("style") : (e.style.cssText = s),
      (e.__style = t));
  } else
    n &&
      (Array.isArray(n)
        ? (sn(e, r?.[0], n[0]), sn(e, r?.[1], n[1], "important"))
        : sn(e, r, n));
  return n;
}
function _n(e, t, r = !1) {
  if (e.multiple) {
    if (t == null) return;
    if (!yn(t)) return Hi();
    for (var n of e.options) n.selected = t.includes(Kn(n));
    return;
  }
  for (n of e.options) {
    var i = Kn(n);
    if (ps(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function eo(e) {
  var t = new MutationObserver(() => {
    _n(e, e.__value);
  });
  (t.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    Tn(() => {
      t.disconnect();
    }));
}
function Kn(e) {
  return "__value" in e ? e.__value : e.value;
}
const gr = Symbol("class"),
  hr = Symbol("style"),
  Ua = Symbol("is custom element"),
  Ka = Symbol("is html");
function to(e, t) {
  var r = On(e);
  r.value === (r.value = t ?? void 0) ||
    (e.value === t && (t !== 0 || e.nodeName !== "PROGRESS")) ||
    (e.value = t ?? "");
}
function ro(e, t) {
  t
    ? e.hasAttribute("selected") || e.setAttribute("selected", "")
    : e.removeAttribute("selected");
}
function Q(e, t, r, n) {
  var i = On(e);
  i[t] !== (i[t] = r) &&
    (t === "loading" && (e[vi] = r),
    r == null
      ? e.removeAttribute(t)
      : typeof r != "string" && Va(e).includes(t)
        ? (e[t] = r)
        : e.setAttribute(t, r));
}
function no(e, t, r, n, i = !1, s = !1) {
  var l = On(e),
    u = l[Ua],
    o = !l[Ka],
    _ = t || {},
    b = e.tagName === "OPTION";
  for (var p in t) p in r || (r[p] = null);
  (r.class ? (r.class = W(r.class)) : r[gr] && (r.class = null),
    r[hr] && (r.style ??= null));
  var g = Va(e);
  for (const c in r) {
    let y = r[c];
    if (b && c === "value" && y == null) {
      ((e.value = e.__value = ""), (_[c] = y));
      continue;
    }
    if (c === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      ($(e, m, y, n, t?.[gr], r[gr]), (_[c] = y), (_[gr] = r[gr]));
      continue;
    }
    if (c === "style") {
      (xr(e, y, t?.[hr], r[hr]), (_[c] = y), (_[hr] = r[hr]));
      continue;
    }
    var E = _[c];
    if (!(y === E && !(y === void 0 && e.hasAttribute(c)))) {
      _[c] = y;
      var x = c[0] + c[1];
      if (x !== "$$")
        if (x === "on") {
          const w = {},
            A = "$$" + c;
          let C = c.slice(2);
          var f = Ns(C);
          if ((Ps(C) && ((C = C.slice(0, -7)), (w.capture = !0)), !f && E)) {
            if (y != null) continue;
            (e.removeEventListener(C, _[A], w), (_[A] = null));
          }
          if (y != null)
            if (f) ((e[`__${C}`] = y), Ce([C]));
            else {
              let S = function (I) {
                _[c].call(this, I);
              };
              var v = S;
              _[A] = Xa(C, e, S, w);
            }
          else f && (e[`__${C}`] = void 0);
        } else if (c === "style") Q(e, c, y);
        else if (c === "autofocus") ys(e, !!y);
        else if (!u && (c === "__value" || (c === "value" && y != null)))
          e.value = e.__value = y;
        else if (c === "selected" && b) ro(e, y);
        else {
          var k = c;
          o || (k = Ds(k));
          var d = k === "defaultValue" || k === "defaultChecked";
          if (y == null && !u && !d)
            if (((l[c] = null), k === "value" || k === "checked")) {
              let w = e;
              const A = t === void 0;
              if (k === "value") {
                let C = w.defaultValue;
                (w.removeAttribute(k),
                  (w.defaultValue = C),
                  (w.value = w.__value = A ? C : null));
              } else {
                let C = w.defaultChecked;
                (w.removeAttribute(k),
                  (w.defaultChecked = C),
                  (w.checked = A ? C : !1));
              }
            } else e.removeAttribute(c);
          else
            d || (g.includes(k) && (u || typeof y != "string"))
              ? ((e[k] = y), k in l && (l[k] = Pe))
              : typeof y != "function" && Q(e, k, y);
        }
    }
  }
  return _;
}
function Ar(e, t, r = [], n = [], i = [], s, l = !1, u = !1) {
  ya(i, r, n, (o) => {
    var _ = void 0,
      b = {},
      p = e.nodeName === "SELECT",
      g = !1;
    if (
      (Pa(() => {
        var E = t(...o.map(a)),
          x = no(e, _, E, s, l, u);
        g && p && "value" in E && _n(e, E.value);
        for (let k of Object.getOwnPropertySymbols(b)) E[k] || Ne(b[k]);
        for (let k of Object.getOwnPropertySymbols(E)) {
          var f = E[k];
          (k.description === Xi &&
            (!_ || f !== _[k]) &&
            (b[k] && Ne(b[k]), (b[k] = Ge(() => Vs(e, () => f)))),
            (x[k] = f));
        }
        _ = x;
      }),
      p)
    ) {
      var m = e;
      Kr(() => {
        (_n(m, _.value, !0), eo(m));
      });
    }
    g = !0;
  });
}
function On(e) {
  return (e.__attributes ??= {
    [Ua]: e.nodeName.includes("-"),
    [Ka]: e.namespaceURI === qi,
  });
}
var Vn = new Map();
function Va(e) {
  var t = e.getAttribute("is") || e.nodeName,
    r = Vn.get(t);
  if (r) return r;
  Vn.set(t, (r = []));
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = si(i);
    for (var l in n) n[l].set && r.push(l);
    i = aa(i);
  }
  return r;
}
function Wn(e, t) {
  return e === t || e?.[Xt] === t;
}
function fr(e = {}, t, r, n) {
  return (
    Kr(() => {
      var i, s;
      return (
        Ta(() => {
          ((i = s),
            (s = []),
            Vr(() => {
              e !== r(...s) &&
                (t(e, ...s), i && Wn(r(...i), e) && t(null, ...i));
            }));
        }),
        () => {
          It(() => {
            s && Wn(r(...s), e) && t(null, ...s);
          });
        }
      );
    }),
    e
  );
}
let zr = !1;
function ao(e) {
  var t = zr;
  try {
    return ((zr = !1), [e(), zr]);
  } finally {
    zr = t;
  }
}
const io = {
  get(e, t) {
    if (!e.exclude.includes(t)) return e.props[t];
  },
  set(e, t) {
    return (L && ki(`${e.name}.${String(t)}`), !1);
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return { enumerable: !0, configurable: !0, value: e.props[t] };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  },
};
function Wr(e, t, r) {
  return new Proxy(
    L
      ? { props: e, exclude: t, name: r, other: {}, to_proxy: [] }
      : { props: e, exclude: t },
    io,
  );
}
function X(e, t, r, n) {
  var i = (r & Li) !== 0,
    s = (r & Ii) !== 0,
    l = n,
    u = !0,
    o = () => (u && ((u = !1), (l = s ? Vr(n) : n)), l),
    _;
  if (i) {
    var b = Xt in e || fi in e;
    _ = qt(e, t)?.set ?? (b && t in e ? (d) => (e[t] = d) : void 0);
  }
  var p,
    g = !1;
  (i ? ([p, g] = ao(() => e[t])) : (p = e[t]),
    p === void 0 && n !== void 0 && ((p = o()), _ && (wi(t), _(p))));
  var m;
  if (
    ((m = () => {
      var d = e[t];
      return d === void 0 ? o() : ((u = !0), d);
    }),
    (r & Di) === 0)
  )
    return m;
  if (_) {
    var E = e.$$legacy;
    return function (d, v) {
      return arguments.length > 0 ? ((!v || E || g) && _(v ? m() : d), d) : m();
    };
  }
  var x = !1,
    f = ((r & Oi) !== 0 ? Ur : xa)(() => ((x = !1), m()));
  (L && (f.label = t), i && a(f));
  var k = ue;
  return function (d, v) {
    if (arguments.length > 0) {
      const c = v ? a(f) : i ? ut(d) : d;
      return (O(f, c), (x = !0), l !== void 0 && (l = c), d);
    }
    return (Qt && x) || (k.f & wt) !== 0 ? f.v : a(f);
  };
}
if (L) {
  let e = function (t) {
    if (!(t in globalThis)) {
      let r;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        get: () => {
          if (r !== void 0) return r;
          Ei(t);
        },
        set: (n) => {
          r = n;
        },
      });
    }
  };
  var Ll = e;
  (e("$state"),
    e("$effect"),
    e("$derived"),
    e("$inspect"),
    e("$props"),
    e("$bindable"));
}
const so = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set()).add(so);
var Se = {
  xs: "[font-size:var(--text-xs)]",
  sm: "[font-size:var(--text-sm)]",
  md: "[font-size:var(--text-md)]",
  lg: "[font-size:var(--text-lg)]",
  xl: "[font-size:var(--text-xl)]",
};
var Dn = function (e) {
  e === void 0 && (e = "");
  var t = Date.now().toString(36),
    r = Math.random().toString(36).slice(2);
  return "".concat(e).concat(t, "_").concat(r);
};
function K() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (
    var r = [],
      n = function (u) {
        if (!(u == null || u === !1)) {
          if (typeof u == "string") {
            r.push.apply(r, u.split(/\s+/).filter(Boolean));
            return;
          }
          if (typeof u == "number" || typeof u == "bigint") {
            r.push(String(u));
            return;
          }
          if (Array.isArray(u)) {
            for (var o = 0, _ = u; o < _.length; o++) {
              var b = _[o];
              n(b);
            }
            return;
          }
          if (typeof u == "object")
            for (var p = 0, g = Object.entries(u); p < g.length; p++) {
              var m = g[p],
                E = m[0],
                x = m[1];
              x && r.push(E);
            }
        }
      },
      i = 0,
      s = e;
    i < s.length;
    i++
  ) {
    var l = s[i];
    n(l);
  }
  return r.join(" ");
}
function oo(e, t) {
  var r;
  return function () {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
    r ||
      (e.apply(void 0, n),
      (r = !0),
      setTimeout(function () {
        return (r = !1);
      }, t));
  };
}
var lo = typeof window < "u" && !!window.localStorage,
  on = function () {
    return lo ? window.localStorage : null;
  },
  Jn = {
    get: function (e, t) {
      var r = on();
      if (!r) return t;
      try {
        var n = r.getItem(e);
        return n ? JSON.parse(n) : t;
      } catch {
        return t;
      }
    },
    set: function (e, t) {
      var r = on();
      if (r)
        try {
          r.setItem(e, JSON.stringify(t));
        } catch (n) {
          console.warn("Storage set failed:", n);
        }
    },
    remove: function (e) {
      var t = on();
      if (t)
        try {
          t.removeItem(e);
        } catch (r) {
          console.warn("Storage remove failed:", r);
        }
    },
  },
  Wa = function (e) {
    var t = e.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    t?.focus();
  },
  Ja = function (e) {
    var t = e.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
      r = t[0],
      n = t[t.length - 1],
      i = function (s) {
        s.key === "Tab" &&
          (s.shiftKey
            ? document.activeElement === r && (s.preventDefault(), n.focus())
            : document.activeElement === n && (s.preventDefault(), r.focus()));
      };
    return (
      e.addEventListener("keydown", i),
      function () {
        e.removeEventListener("keydown", i);
      }
    );
  };
Ce(["click"]);
var uo = q('<span aria-hidden="true"></span>'),
  co = q("<button><span><!></span> <!></button>");
function Gt(e, t) {
  at(t, !0);
  let r = X(t, "sz", 3, "md"),
    n = X(t, "variant", 3, "primary"),
    i = X(t, "type", 3, "button"),
    s = X(t, "loaded", 3, !1),
    l = X(t, "class", 3, ""),
    u = Wr(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "children",
      "onClick",
      "sz",
      "variant",
      "type",
      "loaded",
      "link",
      "class",
    ]);
  const o = `
    relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-medium
    transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] whitespace-nowrap select-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)]
    disabled:opacity-[var(--opacity-disabled)]
    disabled:cursor-not-allowed
    disabled:brightness-100
    disabled:active:scale-100
    disabled:hover:brightness-100
  `,
    _ = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    b = {
      primary:
        "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] hover:brightness-110 active:scale-95",
      secondary:
        "bg-[var(--color-bg-secondary)] [color:var(--color-text-default)] border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
      pill: "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] rounded-full hover:brightness-110 active:scale-95",
      danger:
        "bg-[var(--color-bg-danger)] text-white border-[var(--color-bg-danger)] hover:brightness-110 active:scale-95",
      success:
        "bg-[var(--color-bg-success)] text-white border-[var(--color-bg-success)] hover:brightness-110 active:scale-95",
      warning:
        "bg-[var(--color-bg-warning)] text-white border-[var(--color-bg-warning)] hover:brightness-110 active:scale-95",
      ghost:
        "bg-transparent [color:var(--color-text-default)] border-transparent hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] active:scale-95",
      link: "bg-transparent underline border-transparent [color:var(--color-text-link)] hover:brightness-110 active:scale-95 transition-transform ",
      info: "bg-[var(--color-bg-secondary)] text-white border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
    },
    p = Y(() => K(o, _[r()], Se[r()], b[n()], l())),
    g = Y(() => (s() ? "loading" : t.disabled ? "disabled" : "idle"));
  function m(c) {
    if (t.disabled || s()) {
      c.preventDefault();
      return;
    }
    if (i() === "submit" || i() === "reset") {
      t.onClick?.(c);
      return;
    }
    (t.onClick?.(c),
      !(!t.link || c.defaultPrevented) &&
        (c.button !== 0 ||
          c.metaKey ||
          c.ctrlKey ||
          c.shiftKey ||
          c.altKey ||
          E()));
  }
  function E() {
    if (!t.link || typeof window > "u") return;
    const c = u;
    (typeof c.target == "string" ? c.target : void 0) === "_blank"
      ? window.open(t.link, "_blank", "noopener,noreferrer")
      : window.location.assign(t.link);
  }
  var x = co();
  Ar(x, () => ({
    type: i(),
    disabled: t.disabled,
    "data-state": a(g),
    "aria-disabled": t.disabled || s() || void 0,
    "aria-busy": s() || void 0,
    onclick: m,
    class: a(p),
    ...u,
  }));
  var f = F(x),
    k = F(f);
  dt(k, () => t.children ?? qe);
  var d = D(f, 2);
  {
    var v = (c) => {
      var y = uo();
      (H(
        (w) => $(y, 1, w),
        [
          () =>
            W(
              K(
                "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]",
              ),
            ),
        ],
      ),
        M(c, y));
    };
    V(d, (c) => {
      s() && c(v);
    });
  }
  (H((c) => $(f, 1, c), [() => W(K({ "opacity-0 pointer-events-none": s() }))]),
    M(e, x),
    it());
}
var fo = q("<div><!></div>"),
  vo = q("<div><!></div>"),
  po = q("<div><!> <div><!></div> <!></div>");
function go(e, t) {
  at(t, !0);
  let r = X(t, "class", 3, ""),
    n = X(t, "sz", 3, "md"),
    i = X(t, "flushHeader", 3, !1),
    s = X(t, "flushFooter", 3, !1);
  const l = {
      xs: "px-3 py-2",
      sm: "px-4 py-2",
      md: "px-5 py-3",
      lg: "px-6 py-4",
      xl: "px-7 py-5",
    },
    u = Y(() =>
      K(
        "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
        Se[n()],
        "flex flex-col",
        r(),
      ),
    ),
    o = Y(() =>
      i() ? "" : K("border-b border-[var(--border-color-default)]", l[n()]),
    ),
    _ = Y(() => K(l[n()], "flex-1 min-h-0")),
    b = Y(() =>
      s() ? "" : K("border-t border-[var(--border-color-default)]", l[n()]),
    );
  var p = po(),
    g = F(p);
  {
    var m = (d) => {
      var v = fo(),
        c = F(v);
      (dt(c, () => t.header ?? qe), H(() => $(v, 1, W(a(o)))), M(d, v));
    };
    V(g, (d) => {
      t.header && d(m);
    });
  }
  var E = D(g, 2),
    x = F(E);
  dt(x, () => t.children ?? qe);
  var f = D(E, 2);
  {
    var k = (d) => {
      var v = vo(),
        c = F(v);
      (dt(c, () => t.footer ?? qe), H(() => $(v, 1, W(a(b)))), M(d, v));
    };
    V(f, (d) => {
      t.footer && d(k);
    });
  }
  (H(() => {
    ($(p, 1, W(a(u))), $(E, 1, W(a(_))));
  }),
    M(e, p),
    it());
}
Ce(["click"]);
Ce(["click"]);
var Qn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  ln = { exports: {} },
  ea;
function ho() {
  return (
    ea ||
      ((ea = 1),
      (function (e) {
        var t =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" &&
                self instanceof WorkerGlobalScope
              ? self
              : {};
        var r = (function (n) {
          var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            s = 0,
            l = {},
            u = {
              manual: n.Prism && n.Prism.manual,
              disableWorkerMessageHandler:
                n.Prism && n.Prism.disableWorkerMessageHandler,
              util: {
                encode: function d(v) {
                  return v instanceof o
                    ? new o(v.type, d(v.content), v.alias)
                    : Array.isArray(v)
                      ? v.map(d)
                      : v
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ");
                },
                type: function (d) {
                  return Object.prototype.toString.call(d).slice(8, -1);
                },
                objId: function (d) {
                  return (
                    d.__id || Object.defineProperty(d, "__id", { value: ++s }),
                    d.__id
                  );
                },
                clone: function d(v, c) {
                  c = c || {};
                  var y, w;
                  switch (u.util.type(v)) {
                    case "Object":
                      if (((w = u.util.objId(v)), c[w])) return c[w];
                      ((y = {}), (c[w] = y));
                      for (var A in v)
                        v.hasOwnProperty(A) && (y[A] = d(v[A], c));
                      return y;
                    case "Array":
                      return (
                        (w = u.util.objId(v)),
                        c[w]
                          ? c[w]
                          : ((y = []),
                            (c[w] = y),
                            v.forEach(function (C, S) {
                              y[S] = d(C, c);
                            }),
                            y)
                      );
                    default:
                      return v;
                  }
                },
                getLanguage: function (d) {
                  for (; d; ) {
                    var v = i.exec(d.className);
                    if (v) return v[1].toLowerCase();
                    d = d.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (d, v) {
                  ((d.className = d.className.replace(RegExp(i, "gi"), "")),
                    d.classList.add("language-" + v));
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if (
                    document.currentScript &&
                    document.currentScript.tagName === "SCRIPT"
                  )
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (y) {
                    var d = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      y.stack,
                    ) || [])[1];
                    if (d) {
                      var v = document.getElementsByTagName("script");
                      for (var c in v) if (v[c].src == d) return v[c];
                    }
                    return null;
                  }
                },
                isActive: function (d, v, c) {
                  for (var y = "no-" + v; d; ) {
                    var w = d.classList;
                    if (w.contains(v)) return !0;
                    if (w.contains(y)) return !1;
                    d = d.parentElement;
                  }
                  return !!c;
                },
              },
              languages: {
                plain: l,
                plaintext: l,
                text: l,
                txt: l,
                extend: function (d, v) {
                  var c = u.util.clone(u.languages[d]);
                  for (var y in v) c[y] = v[y];
                  return c;
                },
                insertBefore: function (d, v, c, y) {
                  y = y || u.languages;
                  var w = y[d],
                    A = {};
                  for (var C in w)
                    if (w.hasOwnProperty(C)) {
                      if (C == v)
                        for (var S in c) c.hasOwnProperty(S) && (A[S] = c[S]);
                      c.hasOwnProperty(C) || (A[C] = w[C]);
                    }
                  var I = y[d];
                  return (
                    (y[d] = A),
                    u.languages.DFS(u.languages, function (z, U) {
                      U === I && z != d && (this[z] = A);
                    }),
                    A
                  );
                },
                DFS: function d(v, c, y, w) {
                  w = w || {};
                  var A = u.util.objId;
                  for (var C in v)
                    if (v.hasOwnProperty(C)) {
                      c.call(v, C, v[C], y || C);
                      var S = v[C],
                        I = u.util.type(S);
                      I === "Object" && !w[A(S)]
                        ? ((w[A(S)] = !0), d(S, c, null, w))
                        : I === "Array" &&
                          !w[A(S)] &&
                          ((w[A(S)] = !0), d(S, c, C, w));
                    }
                },
              },
              plugins: {},
              highlightAll: function (d, v) {
                u.highlightAllUnder(document, d, v);
              },
              highlightAllUnder: function (d, v, c) {
                var y = {
                  callback: c,
                  container: d,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                (u.hooks.run("before-highlightall", y),
                  (y.elements = Array.prototype.slice.apply(
                    y.container.querySelectorAll(y.selector),
                  )),
                  u.hooks.run("before-all-elements-highlight", y));
                for (var w = 0, A; (A = y.elements[w++]); )
                  u.highlightElement(A, v === !0, y.callback);
              },
              highlightElement: function (d, v, c) {
                var y = u.util.getLanguage(d),
                  w = u.languages[y];
                u.util.setLanguage(d, y);
                var A = d.parentElement;
                A &&
                  A.nodeName.toLowerCase() === "pre" &&
                  u.util.setLanguage(A, y);
                var C = d.textContent,
                  S = { element: d, language: y, grammar: w, code: C };
                function I(U) {
                  ((S.highlightedCode = U),
                    u.hooks.run("before-insert", S),
                    (S.element.innerHTML = S.highlightedCode),
                    u.hooks.run("after-highlight", S),
                    u.hooks.run("complete", S),
                    c && c.call(S.element));
                }
                if (
                  (u.hooks.run("before-sanity-check", S),
                  (A = S.element.parentElement),
                  A &&
                    A.nodeName.toLowerCase() === "pre" &&
                    !A.hasAttribute("tabindex") &&
                    A.setAttribute("tabindex", "0"),
                  !S.code)
                ) {
                  (u.hooks.run("complete", S), c && c.call(S.element));
                  return;
                }
                if ((u.hooks.run("before-highlight", S), !S.grammar)) {
                  I(u.util.encode(S.code));
                  return;
                }
                if (v && n.Worker) {
                  var z = new Worker(u.filename);
                  ((z.onmessage = function (U) {
                    I(U.data);
                  }),
                    z.postMessage(
                      JSON.stringify({
                        language: S.language,
                        code: S.code,
                        immediateClose: !0,
                      }),
                    ));
                } else I(u.highlight(S.code, S.grammar, S.language));
              },
              highlight: function (d, v, c) {
                var y = { code: d, grammar: v, language: c };
                if ((u.hooks.run("before-tokenize", y), !y.grammar))
                  throw new Error(
                    'The language "' + y.language + '" has no grammar.',
                  );
                return (
                  (y.tokens = u.tokenize(y.code, y.grammar)),
                  u.hooks.run("after-tokenize", y),
                  o.stringify(u.util.encode(y.tokens), y.language)
                );
              },
              tokenize: function (d, v) {
                var c = v.rest;
                if (c) {
                  for (var y in c) v[y] = c[y];
                  delete v.rest;
                }
                var w = new p();
                return (g(w, w.head, d), b(d, w, v, w.head, 0), E(w));
              },
              hooks: {
                all: {},
                add: function (d, v) {
                  var c = u.hooks.all;
                  ((c[d] = c[d] || []), c[d].push(v));
                },
                run: function (d, v) {
                  var c = u.hooks.all[d];
                  if (!(!c || !c.length))
                    for (var y = 0, w; (w = c[y++]); ) w(v);
                },
              },
              Token: o,
            };
          n.Prism = u;
          function o(d, v, c, y) {
            ((this.type = d),
              (this.content = v),
              (this.alias = c),
              (this.length = (y || "").length | 0));
          }
          o.stringify = function d(v, c) {
            if (typeof v == "string") return v;
            if (Array.isArray(v)) {
              var y = "";
              return (
                v.forEach(function (I) {
                  y += d(I, c);
                }),
                y
              );
            }
            var w = {
                type: v.type,
                content: d(v.content, c),
                tag: "span",
                classes: ["token", v.type],
                attributes: {},
                language: c,
              },
              A = v.alias;
            (A &&
              (Array.isArray(A)
                ? Array.prototype.push.apply(w.classes, A)
                : w.classes.push(A)),
              u.hooks.run("wrap", w));
            var C = "";
            for (var S in w.attributes)
              C +=
                " " +
                S +
                '="' +
                (w.attributes[S] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              w.tag +
              ' class="' +
              w.classes.join(" ") +
              '"' +
              C +
              ">" +
              w.content +
              "</" +
              w.tag +
              ">"
            );
          };
          function _(d, v, c, y) {
            d.lastIndex = v;
            var w = d.exec(c);
            if (w && y && w[1]) {
              var A = w[1].length;
              ((w.index += A), (w[0] = w[0].slice(A)));
            }
            return w;
          }
          function b(d, v, c, y, w, A) {
            for (var C in c)
              if (!(!c.hasOwnProperty(C) || !c[C])) {
                var S = c[C];
                S = Array.isArray(S) ? S : [S];
                for (var I = 0; I < S.length; ++I) {
                  if (A && A.cause == C + "," + I) return;
                  var z = S[I],
                    U = z.inside,
                    ee = !!z.lookbehind,
                    he = !!z.greedy,
                    fe = z.alias;
                  if (he && !z.pattern.global) {
                    var _e = z.pattern.toString().match(/[imsuy]*$/)[0];
                    z.pattern = RegExp(z.pattern.source, _e + "g");
                  }
                  for (
                    var be = z.pattern || z, ie = y.next, ce = w;
                    ie !== v.tail && !(A && ce >= A.reach);
                    ce += ie.value.length, ie = ie.next
                  ) {
                    var re = ie.value;
                    if (v.length > d.length) return;
                    if (!(re instanceof o)) {
                      var ve = 1,
                        J;
                      if (he) {
                        if (((J = _(be, ce, d, ee)), !J || J.index >= d.length))
                          break;
                        var ye = J.index,
                          ne = J.index + J[0].length,
                          te = ce;
                        for (te += ie.value.length; ye >= te; )
                          ((ie = ie.next), (te += ie.value.length));
                        if (
                          ((te -= ie.value.length),
                          (ce = te),
                          ie.value instanceof o)
                        )
                          continue;
                        for (
                          var de = ie;
                          de !== v.tail &&
                          (te < ne || typeof de.value == "string");
                          de = de.next
                        )
                          (ve++, (te += de.value.length));
                        (ve--, (re = d.slice(ce, te)), (J.index -= ce));
                      } else if (((J = _(be, 0, re, ee)), !J)) continue;
                      var ye = J.index,
                        Ae = J[0],
                        Fe = re.slice(0, ye),
                        De = re.slice(ye + Ae.length),
                        N = ce + re.length;
                      A && N > A.reach && (A.reach = N);
                      var j = ie.prev;
                      (Fe && ((j = g(v, j, Fe)), (ce += Fe.length)),
                        m(v, j, ve));
                      var G = new o(C, U ? u.tokenize(Ae, U) : Ae, fe, Ae);
                      if (((ie = g(v, j, G)), De && g(v, ie, De), ve > 1)) {
                        var oe = { cause: C + "," + I, reach: N };
                        (b(d, v, c, ie.prev, ce, oe),
                          A && oe.reach > A.reach && (A.reach = oe.reach));
                      }
                    }
                  }
                }
              }
          }
          function p() {
            var d = { value: null, prev: null, next: null },
              v = { value: null, prev: d, next: null };
            ((d.next = v), (this.head = d), (this.tail = v), (this.length = 0));
          }
          function g(d, v, c) {
            var y = v.next,
              w = { value: c, prev: v, next: y };
            return ((v.next = w), (y.prev = w), d.length++, w);
          }
          function m(d, v, c) {
            for (var y = v.next, w = 0; w < c && y !== d.tail; w++) y = y.next;
            ((v.next = y), (y.prev = v), (d.length -= w));
          }
          function E(d) {
            for (var v = [], c = d.head.next; c !== d.tail; )
              (v.push(c.value), (c = c.next));
            return v;
          }
          if (!n.document)
            return (
              n.addEventListener &&
                (u.disableWorkerMessageHandler ||
                  n.addEventListener(
                    "message",
                    function (d) {
                      var v = JSON.parse(d.data),
                        c = v.language,
                        y = v.code,
                        w = v.immediateClose;
                      (n.postMessage(u.highlight(y, u.languages[c], c)),
                        w && n.close());
                    },
                    !1,
                  )),
              u
            );
          var x = u.util.currentScript();
          x &&
            ((u.filename = x.src),
            x.hasAttribute("data-manual") && (u.manual = !0));
          function f() {
            u.manual || u.highlightAll();
          }
          if (!u.manual) {
            var k = document.readyState;
            k === "loading" || (k === "interactive" && x && x.defer)
              ? document.addEventListener("DOMContentLoaded", f)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(f)
                : window.setTimeout(f, 16);
          }
          return u;
        })(t);
        (e.exports && (e.exports = r),
          typeof Qn < "u" && (Qn.Prism = r),
          (r.languages.markup = {
            comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
            prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
            doctype: {
              pattern:
                /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
              greedy: !0,
              inside: {
                "internal-subset": {
                  pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: null,
                },
                string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/,
              },
            },
            cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
            tag: {
              pattern:
                /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
              greedy: !0,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                },
                "special-attr": [],
                "attr-value": {
                  pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                  inside: {
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                    ],
                  },
                },
                punctuation: /\/?>/,
                "attr-name": {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ },
                },
              },
            },
            entity: [
              { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
              /&#x?[\da-f]{1,8};/i,
            ],
          }),
          (r.languages.markup.tag.inside["attr-value"].inside.entity =
            r.languages.markup.entity),
          (r.languages.markup.doctype.inside["internal-subset"].inside =
            r.languages.markup),
          r.hooks.add("wrap", function (n) {
            n.type === "entity" &&
              (n.attributes.title = n.content.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(r.languages.markup.tag, "addInlined", {
            value: function (i, s) {
              var l = {};
              ((l["language-" + s] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: r.languages[s],
              }),
                (l.cdata = /^<!\[CDATA\[|\]\]>$/i));
              var u = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: l,
                },
              };
              u["language-" + s] = {
                pattern: /[\s\S]+/,
                inside: r.languages[s],
              };
              var o = {};
              ((o[i] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return i;
                    },
                  ),
                  "i",
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u,
              }),
                r.languages.insertBefore("markup", "cdata", o));
            },
          }),
          Object.defineProperty(r.languages.markup.tag, "addAttribute", {
            value: function (n, i) {
              r.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    n +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i",
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [i, "language-" + i],
                        inside: r.languages[i],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (r.languages.html = r.languages.markup),
          (r.languages.mathml = r.languages.markup),
          (r.languages.svg = r.languages.markup),
          (r.languages.xml = r.languages.extend("markup", {})),
          (r.languages.ssml = r.languages.xml),
          (r.languages.atom = r.languages.xml),
          (r.languages.rss = r.languages.xml),
          (function (n) {
            var i =
              /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            ((n.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                pattern: RegExp(
                  "@[\\w-](?:" +
                    /[^;{\s"']|\s+(?!\s)/.source +
                    "|" +
                    i.source +
                    ")*?" +
                    /(?:;|(?=\s*\{))/.source,
                ),
                inside: {
                  rule: /^@[\w-]+/,
                  "selector-function-argument": {
                    pattern:
                      /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector",
                  },
                  keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                  },
                },
              },
              url: {
                pattern: RegExp(
                  "\\burl\\((?:" +
                    i.source +
                    "|" +
                    /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                    ")\\)",
                  "i",
                ),
                greedy: !0,
                inside: {
                  function: /^url/i,
                  punctuation: /^\(|\)$/,
                  string: {
                    pattern: RegExp("^" + i.source + "$"),
                    alias: "url",
                  },
                },
              },
              selector: {
                pattern: RegExp(
                  `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                    i.source +
                    ")*(?=\\s*\\{)",
                ),
                lookbehind: !0,
              },
              string: { pattern: i, greedy: !0 },
              property: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0,
              },
              important: /!important\b/i,
              function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0,
              },
              punctuation: /[(){};:,]/,
            }),
              (n.languages.css.atrule.inside.rest = n.languages.css));
            var s = n.languages.markup;
            s &&
              (s.tag.addInlined("style", "css"),
              s.tag.addAttribute("style", "css"));
          })(r),
          (r.languages.clike = {
            comment: [
              {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0,
              },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
            ],
            string: {
              pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
            boolean: /\b(?:false|true)\b/,
            function: /\b\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/,
          }),
          (r.languages.javascript = r.languages.extend("clike", {
            "class-name": [
              r.languages.clike["class-name"],
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0,
              },
            ],
            keyword: [
              { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
              {
                pattern:
                  /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
              },
            ],
            function:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
              pattern: RegExp(
                /(^|[^\w$])/.source +
                  "(?:" +
                  (/NaN|Infinity/.source +
                    "|" +
                    /0[bB][01]+(?:_[01]+)*n?/.source +
                    "|" +
                    /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                    "|" +
                    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                    "|" +
                    /\d+(?:_\d+)*n/.source +
                    "|" +
                    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                      .source) +
                  ")" +
                  /(?![\w$])/.source,
              ),
              lookbehind: !0,
            },
            operator:
              /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
          })),
          (r.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          r.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern: RegExp(
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/
                  .source +
                  /\//.source +
                  "(?:" +
                  /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
                    .source +
                  "|" +
                  /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                    .source +
                  ")" +
                  /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
                    .source,
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: r.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: r.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: r.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: r.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: r.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          r.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: r.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          r.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          r.languages.markup &&
            (r.languages.markup.tag.addInlined("script", "javascript"),
            r.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript",
            )),
          (r.languages.js = r.languages.javascript),
          (function () {
            if (typeof r > "u" || typeof document > "u") return;
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector);
            var n = "Loading…",
              i = function (x, f) {
                return "✖ Error " + x + " while fetching file: " + f;
              },
              s = "✖ Error: File does not exist or is empty",
              l = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex",
              },
              u = "data-src-status",
              o = "loading",
              _ = "loaded",
              b = "failed",
              p =
                "pre[data-src]:not([" +
                u +
                '="' +
                _ +
                '"]):not([' +
                u +
                '="' +
                o +
                '"])';
            function g(x, f, k) {
              var d = new XMLHttpRequest();
              (d.open("GET", x, !0),
                (d.onreadystatechange = function () {
                  d.readyState == 4 &&
                    (d.status < 400 && d.responseText
                      ? f(d.responseText)
                      : d.status >= 400
                        ? k(i(d.status, d.statusText))
                        : k(s));
                }),
                d.send(null));
            }
            function m(x) {
              var f = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || "");
              if (f) {
                var k = Number(f[1]),
                  d = f[2],
                  v = f[3];
                return d ? (v ? [k, Number(v)] : [k, void 0]) : [k, k];
              }
            }
            (r.hooks.add("before-highlightall", function (x) {
              x.selector += ", " + p;
            }),
              r.hooks.add("before-sanity-check", function (x) {
                var f = x.element;
                if (f.matches(p)) {
                  ((x.code = ""), f.setAttribute(u, o));
                  var k = f.appendChild(document.createElement("CODE"));
                  k.textContent = n;
                  var d = f.getAttribute("data-src"),
                    v = x.language;
                  if (v === "none") {
                    var c = (/\.(\w+)$/.exec(d) || [, "none"])[1];
                    v = l[c] || c;
                  }
                  (r.util.setLanguage(k, v), r.util.setLanguage(f, v));
                  var y = r.plugins.autoloader;
                  (y && y.loadLanguages(v),
                    g(
                      d,
                      function (w) {
                        f.setAttribute(u, _);
                        var A = m(f.getAttribute("data-range"));
                        if (A) {
                          var C = w.split(/\r\n?|\n/g),
                            S = A[0],
                            I = A[1] == null ? C.length : A[1];
                          (S < 0 && (S += C.length),
                            (S = Math.max(0, Math.min(S - 1, C.length))),
                            I < 0 && (I += C.length),
                            (I = Math.max(0, Math.min(I, C.length))),
                            (w = C.slice(S, I).join(`
`)),
                            f.hasAttribute("data-start") ||
                              f.setAttribute("data-start", String(S + 1)));
                        }
                        ((k.textContent = w), r.highlightElement(k));
                      },
                      function (w) {
                        (f.setAttribute(u, b), (k.textContent = w));
                      },
                    ));
                }
              }),
              (r.plugins.fileHighlight = {
                highlight: function (f) {
                  for (
                    var k = (f || document).querySelectorAll(p), d = 0, v;
                    (v = k[d++]);
                  )
                    r.highlightElement(v);
                },
              }));
            var E = !1;
            r.fileHighlight = function () {
              (E ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.",
                ),
                (E = !0)),
                r.plugins.fileHighlight.highlight.apply(this, arguments));
            };
          })());
      })(ln)),
    ln.exports
  );
}
ho();
Prism.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: "attr-equals" },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity =
  Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside =
  Prism.languages.markup;
Prism.hooks.add("wrap", function (e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function (t, r) {
    var n = {};
    ((n["language-" + r] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[r],
    }),
      (n.cdata = /^<!\[CDATA\[|\]\]>$/i));
    var i = {
      "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
    };
    i["language-" + r] = { pattern: /[\s\S]+/, inside: Prism.languages[r] };
    var s = {};
    ((s[t] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return t;
          },
        ),
        "i",
      ),
      lookbehind: !0,
      greedy: !0,
      inside: i,
    }),
      Prism.languages.insertBefore("markup", "cdata", s));
  },
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function (e, t) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          e +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i",
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [t, "language-" + t],
              inside: Prism.languages[t],
            },
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
      },
    });
  },
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function (e) {
  var t =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  ((e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp(
        "@[\\w-](?:" +
          /[^;{\s"']|\s+(?!\s)/.source +
          "|" +
          t.source +
          ")*?" +
          /(?:;|(?=\s*\{))/.source,
      ),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" +
          t.source +
          "|" +
          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
          ")\\)",
        "i",
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
          t.source +
          ")*(?=\\s*\\{)",
      ),
      lookbehind: !0,
    },
    string: { pattern: t, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (e.languages.css.atrule.inside.rest = e.languages.css));
  var r = e.languages.markup;
  r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source +
        "(?:" +
        (/NaN|Infinity/.source +
          "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          "|" +
          /\d+(?:_\d+)*n/.source +
          "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source) +
        ")" +
        /(?![\w$])/.source,
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});
Prism.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
        /\//.source +
        "(?:" +
        /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
          .source +
        "|" +
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
          .source +
        ")" +
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
          .source,
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex,
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/,
    },
  },
  "function-variable": {
    pattern:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
  "template-string": {
    pattern:
      /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": { pattern: /^`|`$/, alias: "string" },
      interpolation: {
        pattern:
          /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation",
          },
          rest: Prism.languages.javascript,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "string-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
  },
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property",
  },
});
Prism.languages.markup &&
  (Prism.languages.markup.tag.addInlined("script", "javascript"),
  Prism.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
      .source,
    "javascript",
  ));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
};
Prism.languages.webmanifest = Prism.languages.json;
var ta = {},
  ra;
function mo() {
  return (
    ra ||
      ((ra = 1),
      (Prism.languages.python = {
        comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
        "string-interpolation": {
          pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: !0,
          inside: {
            interpolation: {
              pattern:
                /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: !0,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: !0,
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation",
                },
                rest: null,
              },
            },
            string: /[\s\S]+/,
          },
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
          greedy: !0,
          alias: "string",
        },
        string: {
          pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: !0,
        },
        function: {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: !0,
        },
        "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
        decorator: {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
          lookbehind: !0,
          alias: ["annotation", "punctuation"],
          inside: { punctuation: /\./ },
        },
        keyword:
          /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin:
          /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:False|None|True)\b/,
        number:
          /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/,
      }),
      (Prism.languages.python[
        "string-interpolation"
      ].inside.interpolation.inside.rest = Prism.languages.python),
      (Prism.languages.py = Prism.languages.python)),
    ta
  );
}
mo();
Ce(["click", "input", "keyup", "mouseup"]);
var bo = {
    components: {
      colorPicker: {
        text: "Choose color",
        color: "Color",
        clear: "Clear",
        placeholder: "No color selected",
        selectedColor: "Selected color",
      },
      datePicker: {
        text: "Choose date",
        placeholder: "No date selected",
        date: "Date",
        clear: "Clear",
        selectedDate: "Selected date",
      },
      dialog: { ok: "OK", cancel: "Cancel" },
      filePicker: {
        text: "Choose files",
        clear: "Clear",
        dragDrop: "Drag and drop files here or click to browse",
        accepted: "Accepted",
        selectedFiles: "Selected files",
        placeholder: "No files selected",
        fileCount: "{n} file(s) selected",
        totalSize: "Total size",
      },
      menu: { subtitle: "Menu with size options" },
      primaryColorSelect: { text: "Primary color" },
      timePicker: {
        text: "Choose time",
        placeholder: "No time selected",
        clear: "Clear",
        hour: "Hour",
        minute: "Minute",
        period: "Period",
        selectedTime: "Selected time",
        switchTo12h: "12h",
        switchTo24h: "24h",
      },
    },
  },
  _o = {
    components: {
      colorPicker: {
        text: "Выбрать цвет",
        color: "Цвет",
        clear: "Очистить",
        placeholder: "Цвет не выбран",
        selectedColor: "Выбранный цвет",
      },
      datePicker: {
        text: "Выбрать дату",
        placeholder: "Дата не выбрана",
        date: "Дата",
        clear: "Очистить",
        selectedDate: "Выбранная дата",
      },
      dialog: { ok: "ОК", cancel: "Отмена" },
      filePicker: {
        text: "Выбрать файлы",
        clear: "Очистить",
        dragDrop: "Перетащите файлы сюда или нажмите, чтобы выбрать",
        accepted: "Допустимые форматы",
        selectedFiles: "Выбранные файлы",
        placeholder: "Файлы не выбраны",
        fileCount: "{n} файл(ов) выбрано",
        totalSize: "Общий размер",
      },
      menu: { subtitle: "Меню с вариантами размеров" },
      primaryColorSelect: { text: "Основной цвет" },
      timePicker: {
        text: "Выбрать время",
        placeholder: "Время не выбрано",
        clear: "Очистить",
        hour: "Час",
        minute: "Минута",
        period: "Период",
        selectedTime: "Выбранное время",
        switchTo12h: "12ч",
        switchTo24h: "24ч",
      },
    },
  },
  yo = {
    components: {
      colorPicker: {
        text: "Elegir color",
        color: "Color",
        clear: "Limpiar",
        placeholder: "Ningún color seleccionado",
        selectedColor: "Color seleccionado",
      },
      datePicker: {
        text: "Elegir fecha",
        placeholder: "Sin fecha",
        date: "Fecha",
        clear: "Limpiar",
        selectedDate: "Fecha seleccionada",
      },
      dialog: { ok: "OK", cancel: "Cancelar" },
      filePicker: {
        text: "Elegir archivos",
        clear: "Limpiar",
        dragDrop: "Arrastra los archivos aquí o haz clic para seleccionar",
        accepted: "Formatos permitidos",
        selectedFiles: "Archivos seleccionados",
        placeholder: "No hay archivos",
        fileCount: "{n} archivo(s) seleccionado(s)",
        totalSize: "Tamaño total",
      },
      menu: { subtitle: "Menú con opciones de tamaño" },
      primaryColorSelect: { text: "Color primario" },
      timePicker: {
        text: "Elegir hora",
        placeholder: "Ninguna hora seleccionada",
        clear: "Limpiar",
        hour: "Hora",
        minute: "Minuto",
        period: "Período",
        selectedTime: "Hora seleccionada",
        switchTo12h: "12h",
        switchTo24h: "24h",
      },
    },
  },
  xo = { en: bo, ru: _o, es: yo };
Ce(["change"]);
Ce(["change"]);
var wo = q("<h3> </h3> <p> </p>", 1),
  ko = q('<div class="mt-3"><!></div>'),
  Eo = q(
    '<div class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true"><div><!> <!></div> <div><!> <!></div></div></div>',
  ),
  Co = q("<div><!></div>"),
  Ao = q(
    '<div class="fixed top-4 right-4 z-[var(--z-modal)]" role="dialog" aria-modal="false" tabindex="-1"><div><div><!> <!></div> <div><!> <!></div></div></div>',
  );
function Fo(e, t) {
  at(t, !0);
  const r = (fe) => {
    var _e = wo(),
      be = Ke(_e),
      ie = F(be),
      ce = D(be, 2),
      re = F(ce);
    (H(
      (ve, J) => {
        ($(be, 1, ve), le(ie, i()), $(ce, 1, J), le(re, s()));
      },
      [
        () =>
          W(
            K(
              "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
              a(I),
            ),
          ),
        () =>
          W(
            K(
              "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
              a(z),
            ),
          ),
      ],
    ),
      M(fe, _e));
  };
  let n = X(t, "open", 3, !1),
    i = X(t, "title", 3, ""),
    s = X(t, "message", 3, ""),
    l = X(t, "onConfirm", 3, () => {}),
    u = X(t, "onCancel", 3, () => {}),
    o = X(t, "onClose", 3, () => {}),
    _ = X(t, "modal", 3, !0),
    b = X(t, "class", 3, ""),
    p = X(t, "sz", 3, "md");
  const g = va("lang") ?? null,
    m = Y(() => g?.value ?? "en"),
    E = Y(() => xo[a(m)].components.dialog);
  let x = Z(null),
    f = null;
  function k() {
    (l()(), o()());
  }
  function d() {
    (u()(), o()());
  }
  function v(fe) {
    fe.key === "Escape" && (fe.preventDefault(), d());
  }
  const c =
      "bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]",
    y = {
      xs: "p-[var(--spacing-sm)]",
      sm: "p-[var(--spacing-md)]",
      md: "p-[var(--spacing-lg)]",
      lg: "p-[var(--spacing-xl)]",
      xl: "p-[var(--spacing-xl)]",
    },
    w = { xs: Se.md, sm: Se.md, md: Se.xl, lg: Se.xl, xl: "text-2xl" },
    A = Y(() => K(c, b())),
    C = Y(() => y[p()]),
    S = Y(() => K(a(C), "pt-0")),
    I = Y(() => w[p()]),
    z = Y(() => Se[p()]);
  Wt(
    () => (
      f?.(),
      n() && a(x)
        ? queueMicrotask(() => {
            (Wa(a(x)), _() && (f = Ja(a(x))));
          })
        : (f = null),
      () => {
        (f?.(), (f = null));
      }
    ),
  );
  var U = Ct(),
    ee = Ke(U);
  {
    var he = (fe) => {
      var _e = Ct(),
        be = Ke(_e);
      {
        var ie = (re) => {
            var ve = Eo();
            ve.__keydown = v;
            var J = F(ve),
              ne = F(J),
              te = F(ne);
            r(te);
            var de = D(te, 2);
            {
              var ye = (N) => {
                var j = ko(),
                  G = F(j);
                (dt(G, () => t.children ?? qe, p), M(N, j));
              };
              V(de, (N) => {
                t.children && N(ye);
              });
            }
            var Ae = D(ne, 2),
              Fe = F(Ae);
            Gt(Fe, {
              get sz() {
                return p();
              },
              variant: "primary",
              onClick: k,
              children: (N, j) => {
                var G = xt();
                (H(() => le(G, a(E).ok)), M(N, G));
              },
              $$slots: { default: !0 },
            });
            var De = D(Fe, 2);
            (Gt(De, {
              get sz() {
                return p();
              },
              variant: "secondary",
              onClick: d,
              children: (N, j) => {
                var G = xt();
                (H(() => le(G, a(E).cancel)), M(N, G));
              },
              $$slots: { default: !0 },
            }),
              fr(
                J,
                (N) => O(x, N),
                () => a(x),
              ),
              H(
                (N) => {
                  ($(J, 1, W(a(A))),
                    Q(J, "aria-label", i()),
                    $(ne, 1, W(a(C))),
                    $(Ae, 1, N));
                },
                [() => W(K("flex gap-2 justify-end", a(S)))],
              ),
              M(re, ve));
          },
          ce = (re) => {
            var ve = Ao();
            ve.__keydown = v;
            var J = F(ve),
              ne = F(J),
              te = F(ne);
            r(te);
            var de = D(te, 2);
            {
              var ye = (N) => {
                var j = Co(),
                  G = F(j);
                (dt(G, () => t.children ?? qe, p),
                  H((oe) => $(j, 1, oe), [() => W(K("mt-3", a(z)))]),
                  M(N, j));
              };
              V(de, (N) => {
                t.children && N(ye);
              });
            }
            var Ae = D(ne, 2),
              Fe = F(Ae);
            Gt(Fe, {
              get sz() {
                return p();
              },
              variant: "primary",
              onClick: k,
              children: (N, j) => {
                var G = xt();
                (H(() => le(G, a(E).ok)), M(N, G));
              },
              $$slots: { default: !0 },
            });
            var De = D(Fe, 2);
            (Gt(De, {
              get sz() {
                return p();
              },
              variant: "secondary",
              onClick: d,
              children: (N, j) => {
                var G = xt();
                (H(() => le(G, a(E).cancel)), M(N, G));
              },
              $$slots: { default: !0 },
            }),
              fr(
                J,
                (N) => O(x, N),
                () => a(x),
              ),
              H(
                (N) => {
                  (Q(ve, "aria-label", i()),
                    $(J, 1, W(a(A))),
                    $(ne, 1, W(a(C))),
                    $(Ae, 1, N));
                },
                [() => W(K("flex gap-2 justify-end", a(S)))],
              ),
              M(re, ve));
          };
        V(be, (re) => {
          _() ? re(ie) : re(ce, !1);
        });
      }
      M(fe, _e);
    };
    V(ee, (fe) => {
      n() && fe(he);
    });
  }
  (M(e, U), it());
}
Ce(["keydown"]);
var So = q("<span> </span>"),
  To = q('<div aria-hidden="true"><!></div>'),
  Po = q("<textarea></textarea>"),
  Mo = q("<input/>"),
  No = q('<span aria-hidden="true"><!></span>'),
  Oo = Ft(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="2"></path><path d="M10.5 10.677a2 2 0 002.823 2.823" stroke="currentColor" stroke-width="2"></path><path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2" stroke="currentColor" stroke-width="2"></path><path d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5" stroke="currentColor" stroke-width="2"></path></svg>',
  ),
  Do = Ft(
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"></path><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle></svg>',
  ),
  Lo = q('<button type="button"><!></button>'),
  Io = q(
    '<button type="button" tabindex="-1" aria-label="Clear" title="Clear"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
  ),
  Ro = q("<label><!> <div><!> <!> <div><!> <!> <!></div></div></label>");
function Ee(e, t) {
  at(t, !0);
  let r = X(t, "as", 3, "input"),
    n = X(t, "sz", 3, "md"),
    i = X(t, "variant", 3, "default"),
    s = X(t, "clearable", 3, !0),
    l = X(t, "rows", 3, 3),
    u = X(t, "parseNumber", 3, !1),
    o = X(t, "value", 15, ""),
    _ = X(t, "class", 3, ""),
    b = X(t, "invalid", 3, !1),
    p = Wr(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "as",
      "label",
      "sz",
      "variant",
      "clearable",
      "rows",
      "parseNumber",
      "leading",
      "trailing",
      "onChange",
      "value",
      "class",
      "id",
      "type",
      "invalid",
      "describedBy",
    ]);
  const g =
      "w-full outline-none transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    m = {
      xs: "px-2 h-6",
      sm: "px-3 h-7",
      md: "px-4 h-8",
      lg: "px-5 h-9",
      xl: "px-6 h-10",
    },
    E = {
      default:
        "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      filled:
        "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
      neutral:
        "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    x = Y(() => K("flex flex-col gap-1", _())),
    f = Y(() =>
      r() === "textarea"
        ? K(g, E[i()], Se.md, "px-4")
        : K(g, m[n()], Se[n()], E[i()]),
    ),
    k = Y(() =>
      K("relative flex items-stretch", r() === "textarea" && "items-start"),
    ),
    d = Y(() => t.id ?? Dn("fld-")),
    v = Y(() => (r() === "input" ? t.type || p.type || "text" : void 0)),
    c = Y(() => r() === "input" && a(v) === "number"),
    y = Y(() => r() === "input" && a(v) === "password");
  let w = Z(!1);
  function A(N) {
    if (u() && a(c)) {
      if (N === "" || N === "-" || N === "." || N === "-.") return N;
      const j = Number(N);
      return Number.isNaN(j) ? "" : j;
    }
    return N;
  }
  function C(N) {
    const G = N.target.value,
      oe = A(G);
    (o(oe), t.onChange?.(oe));
  }
  function S() {
    const N = u() && a(c) ? 0 : "";
    (o(N), t.onChange?.(N));
  }
  const I = Y(() => String(o() ?? "")),
    z = Y(() => s() && r() === "input" && a(I).length > 0 && !a(c)),
    U = Y(() => !!t.trailing || a(z) || a(y)),
    ee = "[color:var(--color-text-muted)]";
  var he = Ro(),
    fe = F(he);
  {
    var _e = (N) => {
      var j = So(),
        G = F(j);
      (H(
        (oe) => {
          ($(j, 1, oe), le(G, t.label));
        },
        [() => W(K(Se[n()], "font-medium", ee))],
      ),
        M(N, j));
    };
    V(fe, (N) => {
      t.label && N(_e);
    });
  }
  var be = D(fe, 2),
    ie = F(be);
  {
    var ce = (N) => {
      const j = Y(() => typeof t.leading == "function");
      var G = To(),
        oe = F(G);
      {
        var et = (xe) => {
            var Le = Ct(),
              gt = Ke(Le);
            (dt(gt, () => t.leading), M(xe, Le));
          },
          ke = (xe) => {
            var Le = xt();
            (H(() => le(Le, t.leading)), M(xe, Le));
          };
        V(oe, (xe) => {
          a(j) ? xe(et) : xe(ke, !1);
        });
      }
      (H(
        (xe) => $(G, 1, xe),
        [
          () =>
            W(
              K(
                "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]",
              ),
            ),
        ],
      ),
        M(N, G));
    };
    V(ie, (N) => {
      t.leading && N(ce);
    });
  }
  var re = D(ie, 2);
  {
    var ve = (N) => {
        var j = Po();
        (Ar(
          j,
          (G) => ({
            ...p,
            id: a(d),
            rows: l(),
            class: G,
            value: a(I),
            "aria-invalid": b() || void 0,
            "aria-describedby": t.describedBy,
            oninput: C,
          }),
          [() => K(a(f), a(U) && "pr-8", t.leading && "pl-8")],
        ),
          M(N, j));
      },
      J = (N) => {
        var j = Mo();
        (Ar(
          j,
          (G) => ({
            ...p,
            id: a(d),
            type: a(y) ? (a(w) ? "text" : "password") : a(v),
            inputmode: a(c) ? "decimal" : void 0,
            class: G,
            value: a(I),
            "aria-invalid": b() || void 0,
            "aria-describedby": t.describedBy,
            oninput: C,
          }),
          [() => K(a(f), a(U) && "pr-8", t.leading && "pl-8")],
          void 0,
          void 0,
          void 0,
          !0,
        ),
          M(N, j));
      };
    V(re, (N) => {
      r() === "textarea" ? N(ve) : N(J, !1);
    });
  }
  var ne = D(re, 2),
    te = F(ne);
  {
    var de = (N) => {
      const j = Y(() => typeof t.trailing == "function");
      var G = No(),
        oe = F(G);
      {
        var et = (xe) => {
            var Le = Ct(),
              gt = Ke(Le);
            (dt(gt, () => t.trailing), M(xe, Le));
          },
          ke = (xe) => {
            var Le = xt();
            (H(() => le(Le, t.trailing)), M(xe, Le));
          };
        V(oe, (xe) => {
          a(j) ? xe(et) : xe(ke, !1);
        });
      }
      M(N, G);
    };
    V(te, (N) => {
      t.trailing && N(de);
    });
  }
  var ye = D(te, 2);
  {
    var Ae = (N) => {
      var j = Lo();
      ((j.__mousedown = (ke) => ke.preventDefault()),
        (j.__click = () => O(w, !a(w))));
      var G = F(j);
      {
        var oe = (ke) => {
            var xe = Oo();
            M(ke, xe);
          },
          et = (ke) => {
            var xe = Do();
            M(ke, xe);
          };
        V(G, (ke) => {
          a(w) ? ke(oe) : ke(et, !1);
        });
      }
      (H(
        (ke) => {
          ($(j, 1, ke),
            Q(j, "aria-label", a(w) ? "Hide password" : "Show password"));
        },
        [
          () =>
            W(
              K(
                "password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
              ),
            ),
        ],
      ),
        M(N, j));
    };
    V(ye, (N) => {
      a(y) && N(Ae);
    });
  }
  var Fe = D(ye, 2);
  {
    var De = (N) => {
      var j = Io();
      ((j.__mousedown = (G) => G.preventDefault()),
        (j.__click = S),
        H(
          (G) => $(j, 1, G),
          [
            () =>
              W(
                K(
                  "[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]",
                ),
              ),
          ],
        ),
        M(N, j));
    };
    V(Fe, (N) => {
      a(z) && N(De);
    });
  }
  (H(
    (N) => {
      (Q(he, "for", a(d)), $(he, 1, W(a(x))), $(be, 1, W(a(k))), $(ne, 1, N));
    },
    [() => W(K("absolute inset-y-0 right-2 flex items-center gap-1"))],
  ),
    M(e, he),
    it());
}
Ce(["mousedown", "click"]);
Ce(["change", "click", "keydown"]);
var zo = q("<label> </label>"),
  jo = q(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  Bo = q(
    '<span class="inline-flex items-center gap-2 min-w-0"><!> <span class="truncate"> </span></span>',
  ),
  Yo = q('<span class="[color:var(--color-text-muted)]"> </span>'),
  Go = q(
    '<span aria-hidden="true" class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"></span>',
  ),
  qo = q(
    '<li role="option"><button type="button" tabindex="0"><!> <span class="truncate"> </span></button></li>',
  ),
  Xo = q(
    '<div role="presentation" tabindex="-1" class="fixed inset-0 z-40"></div> <ul role="listbox" tabindex="-1"></ul>',
    1,
  ),
  Ho = q("<div> </div>"),
  Zo = q(
    '<div><!> <div class="w-full"><button type="button" role="combobox" aria-haspopup="listbox"><span class="min-w-0 grow truncate"><!></span> <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button></div> <!> <input type="hidden"/> <!></div>',
  );
function un(e, t) {
  at(t, !0);
  let r = X(t, "options", 19, () => []),
    n = X(t, "sz", 3, "md"),
    i = X(t, "variant", 3, "default"),
    s = X(t, "value", 15, ""),
    l = X(t, "class", 3, ""),
    u = X(t, "invalid", 3, !1),
    o = X(t, "open", 15, !1);
  const _ = va("BaseField"),
    b = Y(() => t.id ?? _?.id ?? Dn("sel-")),
    p = Y(() => _?.name ?? a(b)),
    g = Y(() => `${a(b)}-listbox`);
  let m = Z(null),
    E = Z(null),
    x = Z(-1),
    f = Z(ut([])),
    k = Z("bottom");
  const d =
      "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
    v = {
      xs: "px-2 pr-6 h-6",
      sm: "px-3 pr-8 h-7",
      md: "px-4 pr-10 h-8",
      lg: "px-5 pr-12 h-9",
      xl: "px-6 pr-14 h-10",
    },
    c = { xs: 120, sm: 144, md: 168, lg: 192, xl: 216 },
    y = {
      default:
        "border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
      filled: "border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
      neutral:
        "border-transparent bg-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
    },
    w = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-[18px] h-[18px]",
      xl: "w-5 h-5",
    },
    A = Y(() => K("flex flex-col gap-1", l())),
    C = Y(() => K(d, v[n()], Se[n()], y[i()], "text-left")),
    S = Y(() => t.maxHeight ?? c[n()]),
    I = Y(() =>
      K(
        "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none",
      ),
    ),
    z = Y(() =>
      K(
        "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
        Se[n()],
      ),
    ),
    U = "opacity-[var(--opacity-disabled)] cursor-not-allowed";
  let ee = Z(0),
    he = Z(0),
    fe = Z(0);
  const _e = Y(
      () =>
        `position:fixed;top:${a(ee)}px;left:${a(he)}px;min-width:${a(fe)}px;max-height:${a(S)}px;`,
    ),
    be = Y(() => r().find((h) => h.value === s()));
  (Wt(() => {
    const h = a(E),
      P = a(m);
    if (o() && h && P) {
      const T = () => {
        const ae = h.getBoundingClientRect(),
          me = window.innerHeight - ae.bottom,
          Ie = ae.top,
          Ve = Math.min(P.scrollHeight, a(S)),
          We = me < Ve && Ie > me ? "top" : "bottom";
        (O(k, We, !0),
          (P.dataset.position = We),
          We === "top"
            ? O(ee, Math.max(0, ae.top - Ve), !0)
            : O(ee, ae.bottom, !0),
          O(he, ae.left, !0),
          O(fe, ae.width, !0));
      };
      queueMicrotask(T);
      const R = (ae) => {
          h && P && !h.contains(ae.target) && !P.contains(ae.target) && J();
        },
        B = () => T(),
        pe = () => T();
      return (
        document.addEventListener("mousedown", R),
        window.addEventListener("scroll", B, !0),
        window.addEventListener("resize", pe),
        () => {
          (document.removeEventListener("mousedown", R),
            window.removeEventListener("scroll", B, !0),
            window.removeEventListener("resize", pe));
        }
      );
    }
  }),
    Wt(() => {
      const h = a(m);
      !o() ||
        !h ||
        queueMicrotask(() => {
          h ? O(f, Array.from(h.querySelectorAll("button")), !0) : O(f, [], !0);
        });
    }));
  function ie(h) {
    if (!a(f).length || !r().length) return;
    const P = r().length;
    let T = h;
    for (let R = 0; R < P; R++) {
      const B = (T + R) % P;
      if (!r()[B]?.disabled && a(f)[B]) {
        (a(f)[B].focus(), O(x, B));
        return;
      }
    }
  }
  function ce() {
    ie(0);
  }
  function re() {
    if (!(!r().length || !a(f).length)) {
      for (let h = r().length - 1; h >= 0; h--)
        if (!r()[h]?.disabled && a(f)[h]) {
          (a(f)[h].focus(), O(x, h, !0));
          return;
        }
    }
  }
  function ve() {
    t.disabled || o(!0);
  }
  function J() {
    (o(!1), O(x, -1));
  }
  function ne() {
    o() ? J() : ve();
  }
  function te(h) {
    if (!o() || !r().length) return;
    const P = r().length;
    let T = a(x);
    for (let R = 0; R < P && ((T = (T + h + P) % P), !!r()[T].disabled); R++);
    (O(x, T, !0), a(f)[T] && a(f)[T].focus());
  }
  function de(h) {
    const P = r()[h];
    !P || P.disabled || (s(P.value), t.onChange?.(P.value), J());
  }
  function ye(h) {
    t.disabled ||
      (h.key === " " || h.key === "Enter"
        ? (h.preventDefault(), ne())
        : h.key === "ArrowDown"
          ? (h.preventDefault(), o() || ve(), te(1))
          : h.key === "ArrowUp"
            ? (h.preventDefault(), o() || ve(), te(-1))
            : h.key === "Escape" && o() && (h.preventDefault(), J()));
  }
  function Ae(h) {
    if (o()) {
      if (h.key === "Tab") {
        const P = document.activeElement,
          T = a(f).findIndex((B) => B === P);
        let R = -1;
        for (let B = r().length - 1; B >= 0; B--)
          if (!r()[B]?.disabled) {
            R = B;
            break;
          }
        h.shiftKey
          ? T <= 0 && (h.preventDefault(), re())
          : T === R && (h.preventDefault(), ce());
        return;
      }
      h.key === "ArrowDown"
        ? (h.preventDefault(), te(1))
        : h.key === "ArrowUp"
          ? (h.preventDefault(), te(-1))
          : h.key === "Home"
            ? (h.preventDefault(), ce())
            : h.key === "End"
              ? (h.preventDefault(), re())
              : h.key === "Enter" || h.key === " "
                ? (h.preventDefault(), a(x) >= 0 && de(a(x)))
                : h.key === "Escape" && (h.preventDefault(), J());
    }
  }
  function Fe(h) {
    h.key === "Escape" && (h.preventDefault(), J());
  }
  var De = Zo(),
    N = F(De);
  {
    var j = (h) => {
      var P = zo(),
        T = F(P);
      (H(
        (R) => {
          (Q(P, "id", `${a(b)}-hidden-label`),
            Q(P, "for", `${a(b)}-hidden`),
            $(P, 1, R),
            le(T, t.label));
        },
        [() => W(K(Se[n()], "font-medium [color:var(--color-text-muted)]"))],
      ),
        M(h, P));
    };
    V(N, (h) => {
      t.label && h(j);
    });
  }
  var G = D(N, 2),
    oe = F(G);
  ((oe.__click = () => {
    ne();
  }),
    (oe.__keydown = ye));
  var et = F(oe),
    ke = F(et);
  {
    var xe = (h) => {
        var P = Bo(),
          T = F(P);
        {
          var R = (ae) => {
            var me = jo();
            (H(() => xr(me, `background:${a(be).swatch}`)), M(ae, me));
          };
          V(T, (ae) => {
            a(be).swatch && ae(R);
          });
        }
        var B = D(T, 2),
          pe = F(B);
        (H(() => le(pe, a(be).label)), M(h, P));
      },
      Le = (h) => {
        var P = Yo(),
          T = F(P);
        (H(() => le(T, t.placeholder)), M(h, P));
      };
    V(ke, (h) => {
      a(be) ? h(xe) : h(Le, !1);
    });
  }
  var gt = D(et, 2),
    Jr = F(gt);
  fr(
    oe,
    (h) => O(E, h),
    () => a(E),
  );
  var pr = D(G, 2);
  {
    var Nr = (h) => {
      var P = Xo(),
        T = Ke(P);
      ((T.__click = J), (T.__keydown = Fe));
      var R = D(T, 2);
      ((R.__keydown = Ae),
        Nn(
          R,
          23,
          r,
          (B) => B.value,
          (B, pe, ae) => {
            var me = qo(),
              Ie = F(me);
            Ie.__click = () => de(a(ae));
            var Ve = F(Ie);
            {
              var We = (ht) => {
                var ge = Go();
                (H(() => xr(ge, `background:${a(pe).swatch}`)), M(ht, ge));
              };
              V(Ve, (ht) => {
                a(pe).swatch && ht(We);
              });
            }
            var St = D(Ve, 2),
              Tt = F(St);
            (H(
              (ht, ge) => {
                (Q(me, "id", `${a(b)}-opt-${a(ae)}`),
                  Q(
                    me,
                    "aria-selected",
                    !a(pe).disabled && a(pe).value === s(),
                  ),
                  Q(me, "aria-disabled", a(pe).disabled),
                  $(me, 1, ht),
                  $(Ie, 1, ge),
                  (Ie.disabled = a(pe).disabled),
                  le(Tt, a(pe).label));
              },
              [
                () => W(K(a(z), a(pe).disabled ? U : "")),
                () =>
                  W(
                    K(
                      "w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded flex items-center gap-2",
                    ),
                  ),
              ],
            ),
              Gn("focus", Ie, () => O(x, a(ae), !0)),
              Gn("mouseenter", Ie, () => O(x, a(ae), !0)),
              M(B, me));
          },
        ),
        fr(
          R,
          (B) => O(m, B),
          () => a(m),
        ),
        H(() => {
          (Q(R, "id", a(g)),
            $(R, 1, W(a(I))),
            xr(R, a(_e)),
            Q(R, "data-position", a(k)),
            Q(R, "aria-labelledby", t.label ? `${a(b)}-hidden-label` : void 0),
            Q(
              R,
              "aria-activedescendant",
              a(x) >= 0 ? `${a(b)}-opt-${a(x)}` : void 0,
            ));
        }),
        M(h, P));
    };
    V(pr, (h) => {
      o() && h(Nr);
    });
  }
  var Rt = D(pr, 2),
    Qr = D(Rt, 2);
  {
    var en = (h) => {
      var P = Ho(),
        T = F(P);
      (H(
        (R) => {
          (Q(P, "id", t.describedBy), $(P, 1, R), le(T, t.help));
        },
        [() => W(K("[color:var(--color-text-muted)]", Se.sm))],
      ),
        M(h, P));
    };
    V(Qr, (h) => {
      t.help && h(en);
    });
  }
  (H(
    (h) => {
      ($(De, 1, W(a(A))),
        Q(oe, "id", a(b)),
        $(oe, 1, W(a(C))),
        Q(oe, "aria-expanded", o()),
        Q(oe, "aria-controls", a(g)),
        Q(oe, "aria-describedby", t.describedBy),
        Q(oe, "aria-invalid", u()),
        Q(oe, "aria-required", t.required),
        (oe.disabled = t.disabled),
        $(gt, 1, h),
        $(Jr, 0, W(w[n()])),
        Q(Rt, "id", `${a(b)}-hidden`),
        Q(Rt, "name", a(p)),
        to(Rt, s() ?? ""));
    },
    [
      () =>
        W(
          K(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]",
          ),
        ),
    ],
  ),
    M(e, De),
    it());
}
Ce(["click", "keydown"]);
const $o = (e) => e;
function na(e, { delay: t = 0, duration: r = 400, easing: n = $o } = {}) {
  const i = +getComputedStyle(e).opacity;
  return { delay: t, duration: r, easing: n, css: (s) => `opacity: ${s * i}` };
}
var Uo = Ft(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  Ko = Ft(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path></svg>',
  ),
  Vo = Ft(
    '<svg fill="none" viewBox="0 0 27 27"><path d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z" fill="currentColor"></path><path d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z" fill="currentColor"></path></svg>',
  ),
  Wo = Ft(
    '<svg fill="none" viewBox="0 0 26 26"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z" fill="currentColor"></path><path d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z" fill="currentColor"></path></svg>',
  ),
  Jo = q('<span class="w-5 h-5 flex-shrink-0" aria-hidden="true"><!></span>'),
  Qo = q(
    '<div class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"> </div>',
  ),
  el = q(
    '<button class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3" aria-label="Close"><svg width="24" height="24" viewBox="0 0 20 20" fill="none"><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>',
  ),
  tl = q(
    '<div role="status" aria-live="polite"><!> <div class="flex-1 min-w-0"><!> <div class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"> </div></div> <!></div>',
  );
function rl(e, t) {
  at(t, !0);
  let r = X(t, "variant", 3, "info"),
    n = X(t, "showIcon", 3, !0),
    i = X(t, "closable", 3, !0),
    s = X(t, "timeout", 3, 3e3),
    l = X(t, "onClose", 3, () => {}),
    u = X(t, "class", 3, ""),
    o = Z(!0);
  function _(x) {
    switch (x) {
      case "success":
        return "bg-[var(--color-bg-success)] text-[var(--color-text-success)]";
      case "danger":
        return "bg-[var(--color-bg-danger)] text-[var(--color-text-danger)]";
      case "warning":
        return "bg-[var(--color-bg-warning)] text-[var(--color-text-warning)]";
      default:
        return "bg-[var(--color-bg-page)] text-[var(--color-text-default)]";
    }
  }
  function b() {
    (O(o, !1), l()());
  }
  Wt(() => {
    if (s() > 0) {
      const x = setTimeout(() => b(), s());
      return () => clearTimeout(x);
    }
  });
  const p = Y(() =>
    K(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      _(r()),
      u(),
    ),
  );
  var g = Ct(),
    m = Ke(g);
  {
    var E = (x) => {
      var f = tl(),
        k = F(f);
      {
        var d = (I) => {
          var z = Jo(),
            U = F(z);
          {
            var ee = (fe) => {
                var _e = Uo();
                M(fe, _e);
              },
              he = (fe) => {
                var _e = Ct(),
                  be = Ke(_e);
                {
                  var ie = (re) => {
                      var ve = Ko();
                      M(re, ve);
                    },
                    ce = (re) => {
                      var ve = Ct(),
                        J = Ke(ve);
                      {
                        var ne = (de) => {
                            var ye = Vo();
                            M(de, ye);
                          },
                          te = (de) => {
                            var ye = Wo();
                            M(de, ye);
                          };
                        V(
                          J,
                          (de) => {
                            r() === "warning" ? de(ne) : de(te, !1);
                          },
                          !0,
                        );
                      }
                      M(re, ve);
                    };
                  V(
                    be,
                    (re) => {
                      r() === "danger" ? re(ie) : re(ce, !1);
                    },
                    !0,
                  );
                }
                M(fe, _e);
              };
            V(U, (fe) => {
              r() === "success" ? fe(ee) : fe(he, !1);
            });
          }
          M(I, z);
        };
        V(k, (I) => {
          n() && I(d);
        });
      }
      var v = D(k, 2),
        c = F(v);
      {
        var y = (I) => {
          var z = Qo(),
            U = F(z);
          (H(() => le(U, t.title)), M(I, z));
        };
        V(c, (I) => {
          t.title && I(y);
        });
      }
      var w = D(c, 2),
        A = F(w),
        C = D(v, 2);
      {
        var S = (I) => {
          var z = el();
          ((z.__click = b), M(I, z));
        };
        V(C, (I) => {
          i() && I(S);
        });
      }
      (H(() => {
        ($(f, 1, W(a(p))), Q(w, "title", t.message), le(A, t.message));
      }),
        Zn(
          1,
          f,
          () => na,
          () => ({ duration: 200 }),
        ),
        Zn(
          2,
          f,
          () => na,
          () => ({ duration: 200 }),
        ),
        M(x, f));
    };
    V(m, (x) => {
      a(o) && x(E);
    });
  }
  (M(e, g), it());
}
Ce(["click"]);
var nl = q(
    '<div class="p-4 border-b border-[var(--border-color-default)]"><!></div>',
  ),
  al = q(
    '<div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>',
  ),
  il = q(
    '<li><button type="button" class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"> </button></li>',
  ),
  sl = q('<ul class="grid gap-2 p-4"></ul>'),
  ol = q(
    '<div class="p-4 border-t border-[var(--border-color-default)]"><!></div>',
  ),
  ll = q(
    '<div class="fixed inset-0 z-[var(--z-overlay)] flex"><div role="dialog" aria-modal="true" tabindex="-1" class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"><!> <div class="flex-1 overflow-y-auto" tabindex="-1"><!></div> <!></div> <button type="button" class="flex-1 bg-black/40" aria-hidden="true"></button></div>',
  ),
  ul = q(
    '<button type="button" aria-label="Toggle navigation"><span class="relative block w-5 h-3.5"><span></span> <span></span> <span></span></span></button> <!>',
    1,
  );
function cl(e, t) {
  at(t, !0);
  let r = X(t, "menuItems", 19, () => []),
    n = X(t, "activeItem", 3, ""),
    i = X(t, "closeOnSelect", 3, !0),
    s = X(t, "class", 3, ""),
    l = X(t, "width", 3, 300),
    u = Z(void 0),
    o = Z(void 0),
    _ = null,
    b = Z(!1);
  const p = Y(() => t.pressed ?? a(b));
  function g(z) {
    t.pressed === void 0 ? O(b, z, !0) : t.onOpenChange?.(z);
  }
  function m() {
    g(!a(p));
  }
  function E() {
    (g(!1), queueMicrotask(() => a(u)?.focus()));
  }
  const x = oo(() => E(), 150);
  function f(z) {
    z.key === "Escape" && x();
  }
  Wt(
    () => (
      a(p) && a(o)
        ? (queueMicrotask(() => {
            Wa(a(o));
          }),
          _?.(),
          (_ = Ja(a(o))),
          document.addEventListener("keydown", f))
        : (_?.(), (_ = null), document.removeEventListener("keydown", f)),
      () => {
        (document.removeEventListener("keydown", f), _?.(), (_ = null));
      }
    ),
  );
  const k =
      "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]",
    d = Y(() => K(k, s()));
  var v = ul(),
    c = Ke(v);
  c.__click = m;
  var y = F(c),
    w = F(y),
    A = D(w, 2),
    C = D(A, 2);
  fr(
    c,
    (z) => O(u, z),
    () => a(u),
  );
  var S = D(c, 2);
  {
    var I = (z) => {
      var U = ll(),
        ee = F(U),
        he = F(ee);
      {
        var fe = (ne) => {
          var te = nl(),
            de = F(te);
          (dt(de, () => t.header ?? qe), M(ne, te));
        };
        V(he, (ne) => {
          t.header && ne(fe);
        });
      }
      var _e = D(he, 2),
        be = F(_e);
      {
        var ie = (ne) => {
            var te = al();
            M(ne, te);
          },
          ce = (ne) => {
            var te = sl();
            (Nn(
              te,
              21,
              r,
              (de) => de.id,
              (de, ye) => {
                var Ae = il(),
                  Fe = F(Ae);
                Fe.__click = () => {
                  (t.onSelect?.(a(ye).id), i() && E());
                };
                var De = F(Fe);
                (H(() => {
                  (Q(Fe, "aria-current", n() === a(ye).id ? "page" : void 0),
                    le(De, a(ye).label));
                }),
                  M(de, Ae));
              },
            ),
              M(ne, te));
          };
        V(be, (ne) => {
          r().length === 0 ? ne(ie) : ne(ce, !1);
        });
      }
      var re = D(_e, 2);
      {
        var ve = (ne) => {
          var te = ol(),
            de = F(te);
          (dt(de, () => t.footer ?? qe), M(ne, te));
        };
        V(re, (ne) => {
          t.footer && ne(ve);
        });
      }
      fr(
        ee,
        (ne) => O(o, ne),
        () => a(o),
      );
      var J = D(ee, 2);
      ((J.__click = E),
        H(() => xr(ee, `width:${typeof l() == "number" ? `${l()}px` : l()}`)),
        M(z, U));
    };
    V(S, (z) => {
      a(p) && z(I);
    });
  }
  (H(
    (z, U, ee) => {
      (Q(c, "aria-expanded", a(p)),
        $(c, 1, W(a(d))),
        $(w, 1, z),
        $(A, 1, U),
        $(C, 1, ee));
    },
    [
      () =>
        W(
          K(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            a(p)
              ? "translate-y-[-50%] rotate-45"
              : "translate-y-[calc(-50%_-_6px)]",
          ),
        ),
      () =>
        W(
          K(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
            a(p) ? "opacity-0" : "opacity-100",
          ),
        ),
      () =>
        W(
          K(
            "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
            a(p)
              ? "translate-y-[-50%] -rotate-45"
              : "translate-y-[calc(-50%_+_6px)]",
          ),
        ),
    ],
  ),
    M(e, v),
    it());
}
Ce(["click"]);
Ce(["mousedown", "click", "keydown"]);
Ce(["input", "keydown"]);
Ce(["pointerdown"]);
var dl = q("<span> </span>"),
  fl = q("<span> </span>"),
  vl = q("<span> </span>"),
  pl = q(
    '<label><!> <div class="inline-flex items-center gap-2"><!> <input/> <button type="button"><span></span></button> <!></div></label>',
  );
function gl(e, t) {
  at(t, !0);
  let r = X(t, "sz", 3, "md"),
    n = X(t, "checked", 15, !1),
    i = X(t, "class", 3, ""),
    s = Wr(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "sz",
      "checked",
      "leftLabel",
      "rightLabel",
      "topLabel",
      "onChange",
      "class",
    ]);
  const l = Y(() => t.id ?? Dn("sw-")),
    u = {
      xs: "w-8 h-4",
      sm: "w-10 h-5",
      md: "w-12 h-6",
      lg: "w-14 h-7",
      xl: "w-16 h-8",
    },
    o = {
      xs: "h-[14px] w-[14px]",
      sm: "h-[17px] w-[17px]",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
    },
    _ = {
      xs: "p-[1px]",
      sm: "p-[1.5px]",
      md: "p-[2px]",
      lg: "p-[2px]",
      xl: "p-[2px]",
    },
    b = Y(() => ("disabled" in s ? !!t.disabled : !1));
  function p() {
    a(b) || (n(!n()), t.onChange?.(n()));
  }
  const g = Y(() => (n() ? "justify-end" : "justify-start")),
    m = Y(() =>
      K(
        "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
        u[r()],
        _[r()],
        n()
          ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
          : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
        a(b)
          ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          : "cursor-pointer",
        a(g),
      ),
    ),
    E = Y(() => K("inline-flex flex-col items-center gap-1 select-none", i())),
    x = Y(() =>
      K(
        o[r()],
        "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm",
      ),
    );
  var f = pl(),
    k = F(f);
  {
    var d = (U) => {
      var ee = dl(),
        he = F(ee);
      (H(() => {
        ($(ee, 1, `text-[var(--color-text-muted)] ${Se[r()] ?? ""}`),
          le(he, t.topLabel));
      }),
        M(U, ee));
    };
    V(k, (U) => {
      t.topLabel && U(d);
    });
  }
  var v = D(k, 2),
    c = F(v);
  {
    var y = (U) => {
      var ee = fl(),
        he = F(ee);
      (H(() => {
        ($(ee, 1, `text-[var(--color-text-muted)] ${Se[r()] ?? ""}`),
          le(he, t.leftLabel));
      }),
        M(U, ee));
    };
    V(c, (U) => {
      t.leftLabel && U(y);
    });
  }
  var w = D(c, 2),
    A = () => p();
  Ar(
    w,
    () => ({
      id: a(l),
      type: "checkbox",
      checked: n(),
      ...s,
      class: "sr-only",
      "aria-checked": n(),
      "aria-invalid": s["aria-invalid"] || void 0,
      "aria-describedby": s["aria-describedby"],
      onchange: A,
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
  var C = D(w, 2);
  C.__click = p;
  var S = F(C),
    I = D(C, 2);
  {
    var z = (U) => {
      var ee = vl(),
        he = F(ee);
      (H(() => {
        ($(ee, 1, `text-[var(--color-text-muted)] ${Se[r()] ?? ""}`),
          le(he, t.rightLabel));
      }),
        M(U, ee));
    };
    V(I, (U) => {
      t.rightLabel && U(z);
    });
  }
  (H(() => {
    ($(f, 1, W(a(E))),
      Q(f, "for", a(l)),
      $(C, 1, W(a(m))),
      Q(C, "aria-pressed", n()),
      Q(
        C,
        "aria-label",
        typeof s["aria-label"] == "string" ? s["aria-label"] : "Switch",
      ),
      (C.disabled = a(b)),
      $(S, 1, W(a(x))));
  }),
    M(e, f),
    it());
}
Ce(["click"]);
Ce(["click", "keydown"]);
Ce(["keydown", "click"]);
var hl = Ft(
    '<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg>',
  ),
  ml =
    Ft(`<svg class="w-[1em] h-[1em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z" fill="currentColor"></path></svg>`),
  bl = q("<button><!></button>");
function _l(e, t) {
  at(t, !0);
  let r = X(t, "class", 3, ""),
    n = X(t, "sz", 3, "md"),
    i = X(t, "type", 3, "button"),
    s = Wr(t, [
      "$$slots",
      "$$events",
      "$$legacy",
      "disabled",
      "class",
      "sz",
      "type",
    ]);
  const l = "theme-toggle:dark",
    u = Jn.get(l, !1);
  let o = Z(ut(u));
  const _ = `inline-flex items-center justify-center rounded-[var(--radius-md)]
    border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)]
    hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-[var(--border-color-focus)] transition-colors
    disabled:opacity-[var(--opacity-disabled)]
    disabled:cursor-not-allowed
    disabled:brightness-100
    disabled:active:scale-100
    disabled:hover:brightness-100
  `,
    b = {
      xs: "px-2 py-0.5 h-6",
      sm: "px-3 py-1 h-7",
      md: "px-4 py-2 h-8",
      lg: "px-5 py-2.5 h-9",
      xl: "px-6 py-3 h-10",
    },
    p = "fixed top-4 right-4",
    g = Y(() => K(r() ? null : p, _, b[n()], Se[n()], r()));
  Wt(() => {
    (document.documentElement.classList.toggle("dark", a(o)), Jn.set(l, a(o)));
  });
  var m = bl(),
    E = () => O(o, !a(o));
  Ar(m, () => ({
    type: i(),
    disabled: t.disabled,
    class: a(g),
    onclick: E,
    "aria-label": a(o) ? "Switch to light mode" : "Switch to dark mode",
    ...s,
  }));
  var x = F(m);
  {
    var f = (d) => {
        var v = hl();
        M(d, v);
      },
      k = (d) => {
        var v = ml();
        M(d, v);
      };
    V(x, (d) => {
      a(o) ? d(f) : d(k, !1);
    });
  }
  (M(e, m), it());
}
const yl = {
    app: {
      name: "Drilling Calculator",
      author: "MaestroFusion360",
      version: "v1.1.3",
      by: "by",
      language: {
        label: "Language",
        options: [
          { label: "English", value: "en" },
          { label: "Russian", value: "ru" },
        ],
      },
    },
    nav: { circular: "Circular Array", grid: "2D Grid Array" },
    ui: {
      decimals: "Decimals",
      ccw: "CCW",
      fields: {
        circular: {
          diameter: "Diameter",
          startAngle: "Start angle",
          centerX: "Center X",
          centerY: "Center Y",
          holes: "Number of holes",
        },
        grid: {
          startX: "Start X",
          startY: "Start Y",
          stepX: "Step X",
          stepY: "Step Y",
          countX: "Count X",
          countY: "Count Y",
        },
      },
      buttons: { calc: "Calc", clear: "Clear", export: "Export" },
      output: { title: "Output", copy: "Copy", copied: "Copied" },
      preview: { title: "Preview" },
    },
    exportDialog: {
      title: "G-code Export Settings",
      fields: {
        programNumber: "Program Number (O)",
        comment: "Comment",
        toolNumber: "Tool Number (T)",
        speed: "Spindle Speed (S)",
        cycleType: "Cycle Type",
        safeZ: "Safe Z (R)",
        depth: "Drilling Depth (Z)",
        feedrate: "Feedrate (F)",
        time: "Dwell Time (P, sec)",
        step: "Peck Depth (Q, mm)",
      },
      cycleTypes: {
        g81: "Drilling (G81)",
        g82: "Spot Drilling (G82)",
        g83: "Peck Drilling (G83)",
        xy: "Hole Coordinates",
      },
    },
    messages: {
      success: "Success!",
      validationErrorResult: "VALIDATION ERROR: Check pattern input values",
      unknownError: "Unknown error",
      errors: {
        diameterPositive: "Diameter must be positive",
        holesAtLeastOne: "Number of holes must be at least 1",
        gridCountAtLeastOne: "Count values must be at least 1",
        exportNoCoords: "Please calculate valid coordinates before exporting.",
        exportNoData: "No data to export!",
        exportErrorOccurred: "Export error occurred",
        calculationErrorOccurred: "Calculation error occurred",
        programNumberMin: "Program number must be at least 1",
        toolNumberMin: "Tool number must be at least 1",
        spindleSpeedMin: "Spindle speed must be at least 1",
        feedrateMin: "Feedrate must be at least 1",
        dwellTimeMin: "Dwell time must be 0 or more",
        peckStepMin: "Peck step must be 0 or more",
      },
      exportSuccessPrefix: "Program",
      exportSuccessSuffix: "exported!",
    },
  },
  xl = {
    app: {
      name: "Drilling Calculator",
      author: "MaestroFusion360",
      version: "v1.1.3",
      by: "автор",
      language: {
        label: "Язык",
        options: [
          { label: "Английский", value: "en" },
          { label: "Русский", value: "ru" },
        ],
      },
    },
    nav: { circular: "Круговой массив", grid: "Сетка 2D" },
    ui: {
      decimals: "Знаков",
      ccw: "CCW",
      fields: {
        circular: {
          diameter: "Диаметр",
          startAngle: "Начальный угол",
          centerX: "Центр X",
          centerY: "Центр Y",
          holes: "Кол-во отверстий",
        },
        grid: {
          startX: "Старт X",
          startY: "Старт Y",
          stepX: "Шаг X",
          stepY: "Шаг Y",
          countX: "Кол-во X",
          countY: "Кол-во Y",
        },
      },
      buttons: { calc: "Рассчитать", clear: "Сброс", export: "Экспорт" },
      output: { title: "Вывод", copy: "Копировать", copied: "Скопировано" },
      preview: { title: "Превью" },
    },
    exportDialog: {
      title: "Настройки экспорта G-code",
      fields: {
        programNumber: "Номер программы (O)",
        comment: "Комментарий",
        toolNumber: "Номер инструмента (T)",
        speed: "Обороты шпинделя (S)",
        cycleType: "Тип цикла",
        safeZ: "Безопасный Z (R)",
        depth: "Глубина сверления (Z)",
        feedrate: "Подача (F)",
        time: "Выдержка (P, сек)",
        step: "Шаг выборки (Q, мм)",
      },
      cycleTypes: {
        g81: "Сверление (G81)",
        g82: "Зенковка/выдержка (G82)",
        g83: "Сверление с выборкой (G83)",
        xy: "Координаты отверстий",
      },
    },
    messages: {
      success: "Успешно!",
      validationErrorResult: "ОШИБКА: Проверьте входные значения",
      unknownError: "Неизвестная ошибка",
      errors: {
        diameterPositive: "Диаметр должен быть больше 0",
        holesAtLeastOne: "Количество отверстий должно быть не меньше 1",
        gridCountAtLeastOne: "Количество должно быть не меньше 1",
        exportNoCoords: "Сначала рассчитайте координаты перед экспортом.",
        exportNoData: "Нет данных для экспорта!",
        exportErrorOccurred: "Ошибка экспорта",
        calculationErrorOccurred: "Ошибка расчёта",
        programNumberMin: "Номер программы должен быть не меньше 1",
        toolNumberMin: "Номер инструмента должен быть не меньше 1",
        spindleSpeedMin: "Обороты шпинделя должны быть не меньше 1",
        feedrateMin: "Подача должна быть не меньше 1",
        dwellTimeMin: "Выдержка должна быть 0 или больше",
        peckStepMin: "Шаг выборки должен быть 0 или больше",
      },
      exportSuccessPrefix: "Программа",
      exportSuccessSuffix: "экспортирована!",
    },
  },
  wl = { en: yl, ru: xl };
var kl = q(
    '<div class="pt-8 space-y-2"><div class="text-sm font-semibold"> </div> <div class="text-xs text-[var(--color-text-muted)]"> </div></div>',
  ),
  El = q('<div class="pt-4"><!></div>'),
  Cl = q(
    '<div class="flex items-start justify-between gap-4"><div><div class="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]"> </div> <div class="text-xl font-semibold"> </div> <div class="text-xs text-[var(--color-text-muted)]"> </div></div> <div class="flex items-center gap-3"><!></div></div>',
  ),
  Al = q(
    '<div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>',
  ),
  Fl = q(
    '<div class="grid gap-4 sm:grid-cols-2"><!> <!> <!> <!> <!> <div class="flex items-end"><!></div></div>',
  ),
  Sl = q(
    '<div class="grid gap-4 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div>',
  ),
  Tl = Ft('<circle r="1.5" fill="red"><title> </title></circle>'),
  Pl = q(
    '<div class="flex flex-col gap-1"><div class="text-sm font-medium text-[var(--color-text-muted)]"> </div> <div class="h-[300px] rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-3"><svg class="h-full w-full bg-[var(--color-bg-surface)]"><line y1="0" y2="0" stroke="#999" stroke-dasharray="4"></line><line x1="0" x2="0" stroke="#999" stroke-dasharray="4"></line><!></svg></div></div>',
  ),
  Ml = q(
    '<div class="space-y-6"><!> <div class="flex flex-wrap justify-center items-center gap-2"><!> <!> <!></div> <div class="grid items-start gap-4 lg:grid-cols-2"><div class="flex flex-col gap-1"><div class="flex items-center justify-between gap-2"><div class="text-sm font-medium text-[var(--color-text-muted)]"> </div></div> <div class="relative"><!> <button type="button"> </button></div></div> <!></div></div>',
  ),
  Nl = q(
    '<!> <!>  <!>  <!> <div class="mx-auto max-w-5xl space-y-6 px-6 py-10 pt-20"><!></div>',
    1,
  );
function Ol(e, t) {
  at(t, !0);
  const r = (h) => {
      var P = kl(),
        T = F(P),
        R = F(T),
        B = D(T, 2),
        pe = F(B);
      (H(() => {
        (le(R, a(o).app.name),
          le(
            pe,
            `${a(o).app.by ?? ""} ${a(o).app.author ?? ""} - ${a(o).app.version ?? ""}`,
          ));
      }),
        M(h, P));
    },
    n = (h) => {
      var P = El(),
        T = F(P);
      (un(T, {
        get label() {
          return a(o).app.language.label;
        },
        get options() {
          return a(o).app.language.options;
        },
        get value() {
          return a(l);
        },
        set value(R) {
          O(l, R, !0);
        },
      }),
        M(h, P));
    },
    i = (h) => {
      var P = Cl(),
        T = F(P),
        R = F(T),
        B = F(R),
        pe = D(R, 2),
        ae = F(pe),
        me = D(pe, 2),
        Ie = F(me),
        Ve = D(T, 2),
        We = F(Ve);
      {
        let St = Y(() => String(a(k)));
        un(We, {
          get label() {
            return a(o).ui.decimals;
          },
          get options() {
            return A;
          },
          get value() {
            return a(St);
          },
          onChange: (Tt) => O(k, Number(Tt), !0),
          sz: "sm",
        });
      }
      (H(() => {
        (le(B, a(o).app.name),
          le(ae, a(E) === "circular" ? a(o).nav.circular : a(o).nav.grid),
          le(
            Ie,
            `${a(o).app.by ?? ""} ${a(o).app.author ?? ""} - ${a(o).app.version ?? ""}`,
          ));
      }),
        M(h, P));
    },
    s = (h, P = qe) => {
      var T = Al(),
        R = F(T);
      Ee(R, {
        get label() {
          return a(o).exportDialog.fields.programNumber;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).programNumber;
        },
        set value(ge) {
          a(c).programNumber = ge;
        },
      });
      var B = D(R, 2);
      Ee(B, {
        get label() {
          return a(o).exportDialog.fields.comment;
        },
        type: "text",
        get value() {
          return a(c).comment;
        },
        set value(ge) {
          a(c).comment = ge;
        },
      });
      var pe = D(B, 2);
      Ee(pe, {
        get label() {
          return a(o).exportDialog.fields.toolNumber;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).toolNumber;
        },
        set value(ge) {
          a(c).toolNumber = ge;
        },
      });
      var ae = D(pe, 2);
      Ee(ae, {
        get label() {
          return a(o).exportDialog.fields.speed;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).speed;
        },
        set value(ge) {
          a(c).speed = ge;
        },
      });
      var me = D(ae, 2);
      un(me, {
        get label() {
          return a(o).exportDialog.fields.cycleType;
        },
        get options() {
          return a(C);
        },
        get value() {
          return a(c).cycleType;
        },
        set value(ge) {
          a(c).cycleType = ge;
        },
      });
      var Ie = D(me, 2);
      Ee(Ie, {
        get label() {
          return a(o).exportDialog.fields.safeZ;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).safeZ;
        },
        set value(ge) {
          a(c).safeZ = ge;
        },
      });
      var Ve = D(Ie, 2);
      Ee(Ve, {
        get label() {
          return a(o).exportDialog.fields.depth;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).depth;
        },
        set value(ge) {
          a(c).depth = ge;
        },
      });
      var We = D(Ve, 2);
      Ee(We, {
        get label() {
          return a(o).exportDialog.fields.feedrate;
        },
        type: "number",
        parseNumber: !0,
        get value() {
          return a(c).feedrate;
        },
        set value(ge) {
          a(c).feedrate = ge;
        },
      });
      var St = D(We, 2);
      {
        var Tt = (ge) => {
            Ee(ge, {
              get label() {
                return a(o).exportDialog.fields.time;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(c).time;
              },
              set value(er) {
                a(c).time = er;
              },
            });
          },
          ht = (ge) => {
            var er = Ct(),
              Or = Ke(er);
            {
              var tr = (rr) => {
                Ee(rr, {
                  get label() {
                    return a(o).exportDialog.fields.step;
                  },
                  type: "number",
                  parseNumber: !0,
                  get value() {
                    return a(c).step;
                  },
                  set value(tn) {
                    a(c).step = tn;
                  },
                });
              };
              V(
                Or,
                (rr) => {
                  a(c).cycleType === "G83" && rr(tr);
                },
                !0,
              );
            }
            M(ge, er);
          };
        V(St, (ge) => {
          a(c).cycleType === "G82" ? ge(Tt) : ge(ht, !1);
        });
      }
      M(h, T);
    };
  let l = Z("en"),
    u = ut({ value: "en" });
  (Wt(() => {
    u.value = a(l);
  }),
    Wi("lang", u));
  const o = Y(() => wl[a(l)]),
    _ = /X-?\d+(\.\d+)?\s+Y-?\d+(\.\d+)?/i,
    b = /X(-?\d+(?:\.\d+)?)\s*Y(-?\d+(?:\.\d+)?)/;
  let p = Z(null),
    g = 0;
  const m = {
    success(h) {
      O(p, { id: ++g, message: h, variant: "success" }, !0);
    },
    error(h) {
      O(p, { id: ++g, message: h, variant: "danger" }, !0);
    },
  };
  let E = Z("circular"),
    x = Z(!1),
    f = Z(""),
    k = Z(2),
    d = Z(!1);
  const v = {
    programNumber: 1e3,
    comment: "",
    toolNumber: 1,
    speed: 1e3,
    cycleType: "G81",
    feedrate: 100,
    safeZ: 2,
    depth: -5,
    time: 1,
    step: 2,
  };
  let c = Z(ut({ ...v }));
  const y = Y(() => [
      { value: "G81", label: a(o).exportDialog.cycleTypes.g81 },
      { value: "G82", label: a(o).exportDialog.cycleTypes.g82 },
      { value: "G83", label: a(o).exportDialog.cycleTypes.g83 },
      { value: "XY", label: a(o).exportDialog.cycleTypes.xy },
    ]),
    w = Y(() => [
      { id: "circular", label: a(o).nav.circular },
      { id: "grid", label: a(o).nav.grid },
    ]),
    A = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
    C = Y(() => a(y).map((h) => ({ value: h.value, label: h.label })));
  let S = Z(0),
    I = Z(0),
    z = Z(0),
    U = Z(0),
    ee = Z(1),
    he = Z(!0),
    fe = Z(0),
    _e = Z(0),
    be = Z(0),
    ie = Z(0),
    ce = Z(1),
    re = Z(1);
  const ve = () => {
      if (a(E) === "circular") {
        if (a(S) <= 0)
          return (m.error(a(o).messages.errors.diameterPositive), !1);
        if (a(ee) < 1)
          return (m.error(a(o).messages.errors.holesAtLeastOne), !1);
      } else if (a(E) === "grid" && (a(ce) < 1 || a(re) < 1))
        return (m.error(a(o).messages.errors.gridCountAtLeastOne), !1);
      return (m.success(a(o).messages.success), !0);
    },
    J = () =>
      a(c).programNumber < 1
        ? (m.error(a(o).messages.errors.programNumberMin), !1)
        : a(c).toolNumber < 1
          ? (m.error(a(o).messages.errors.toolNumberMin), !1)
          : a(c).speed < 1
            ? (m.error(a(o).messages.errors.spindleSpeedMin), !1)
            : a(c).feedrate < 1
              ? (m.error(a(o).messages.errors.feedrateMin), !1)
              : a(c).cycleType === "G82" && a(c).time < 0
                ? (m.error(a(o).messages.errors.dwellTimeMin), !1)
                : a(c).cycleType === "G83" && a(c).step < 0
                  ? (m.error(a(o).messages.errors.peckStepMin), !1)
                  : !0;
  function ne(h) {
    return String(h).padStart(4, "0").slice(-4);
  }
  function te(h, P) {
    let T = "";
    if (h.cycleType === "XY") {
      ((T += `(Program Number: ${h.programNumber})
`),
        (T += `(Comment: ${h.comment})
`),
        (T += `(Date: ${new Date().toLocaleDateString()})

`));
      for (const B of P)
        T += `${B}
`;
      return T;
    }
    ((T += `%
`),
      (T += `O${ne(h.programNumber)}
`),
      (T += `(COMMENT: ${h.comment})
`),
      (T += `(DATE: ${new Date().toLocaleDateString()})

`),
      (T += `T${h.toolNumber} M06
`),
      (T += `G90 G54 G00 X0 Y0
`),
      (T += `S${h.speed} M03
`),
      (T += `G43 H${h.toolNumber} Z${h.safeZ}
`),
      (T += `M08
`));
    let R = `${h.cycleType} ${P[0]} Z${h.depth} R${h.safeZ} F${h.feedrate}`;
    (h.cycleType === "G82"
      ? (R += ` P${(h.time * 1e3).toFixed(0)}`)
      : h.cycleType === "G83" && (R += ` Q${h.step.toFixed(2)}`),
      (T +=
        R +
        `
`));
    for (let B = 1; B < P.length; B++)
      T += `${P[B]}
`;
    return (
      (T += `G80
`),
      (T += `M09
`),
      (T += `M05
`),
      (T += `G91 G28 Z0
`),
      (T += `M01
`),
      (T += `M30
`),
      (T += `%
`),
      T
    );
  }
  function de(h, P) {
    const T = new Blob([P], { type: "text/plain" }),
      R = URL.createObjectURL(T),
      B = document.createElement("a");
    ((B.href = R), (B.download = h), B.click());
  }
  const ye = () => {
      try {
        if (!ve()) {
          O(f, a(o).messages.validationErrorResult, !0);
          return;
        }
        const h = a(k),
          P = [];
        if (a(E) === "grid")
          for (let T = 0; T < a(re); T++) {
            const R = T % 2,
              B = Array.from({ length: a(ce) }, (pe, ae) =>
                R ? a(ce) - 1 - ae : ae,
              );
            for (const pe of B) {
              const ae = a(fe) + pe * a(be),
                me = a(_e) + T * a(ie);
              P.push(`X${ae.toFixed(h)} Y${me.toFixed(h)}`);
            }
          }
        else if (a(E) === "circular") {
          const T = Math.PI,
            R = a(S) / 2;
          let B = (a(I) * T) / 180;
          const pe = (2 * T) / a(ee);
          if (a(he))
            for (; B < 2 * T; ) {
              const ae = a(z) + R * Math.cos(B),
                me = a(U) + R * Math.sin(B);
              (P.push(`X${ae.toFixed(h)} Y${me.toFixed(h)}`), (B += pe));
            }
          else
            for (B = -B; B > -2 * T; ) {
              const ae = a(z) + R * Math.cos(B),
                me = a(U) + R * Math.sin(B);
              (P.push(`X${ae.toFixed(h)} Y${me.toFixed(h)}`), (B -= pe));
            }
        }
        O(
          f,
          P.join(`
`),
          !0,
        );
      } catch (h) {
        (O(
          f,
          h instanceof Error
            ? `ERROR: ${h.message}`
            : a(o).messages.unknownError,
          !0,
        ),
          m.error(a(o).messages.errors.exportErrorOccurred));
      }
    },
    Ae = () => {
      (O(f, ""),
        O(S, O(I, O(z, O(U, 0), !0), !0), !0),
        O(ee, 1),
        O(fe, O(_e, O(be, O(ie, 0), !0), !0), !0),
        O(ce, O(re, 1), !0),
        O(c, { ...v }, !0),
        O(d, !1));
    };
  function Fe() {
    if (!_.test(a(f))) {
      m.error(a(o).messages.errors.exportNoCoords);
      return;
    }
    O(d, !0);
  }
  const De = () => {
      try {
        if (!a(f)) {
          m.error(a(o).messages.errors.exportNoData);
          return;
        }
        if (!J()) return;
        const h = a(f).trim().split(`
`),
          P = te(a(c), h);
        (de(`DRILL_${a(c).programNumber}.nc`, P),
          m.success(
            `${a(o).messages.exportSuccessPrefix} ${a(c).programNumber} ${a(o).messages.exportSuccessSuffix}`,
          ),
          O(d, !1));
      } catch (h) {
        (O(
          f,
          h instanceof Error
            ? `ERROR: ${h.message}`
            : a(o).messages.unknownError,
          !0,
        ),
          m.error(a(o).messages.errors.calculationErrorOccurred));
      }
    },
    N = (h) => h !== null;
  let j = Y(() =>
      a(f)
        .split(
          `
`,
        )
        .map((h) => {
          const P = h.match(b);
          return P ? { x: parseFloat(P[1]), y: -parseFloat(P[2]) } : null;
        })
        .filter(N),
    ),
    G = Y(() => ({
      minX: Math.min(...a(j).map((h) => h.x), 0),
      minY: Math.min(...a(j).map((h) => h.y), 0),
      maxX: Math.max(...a(j).map((h) => h.x), 0),
      maxY: Math.max(...a(j).map((h) => h.y), 0),
    })),
    oe = Y(() => a(G).maxX - a(G).minX + 20),
    et = Y(() => a(G).maxY - a(G).minY + 20),
    ke = Z(!1);
  async function xe() {
    const h = a(f);
    try {
      await navigator.clipboard.writeText(h);
    } catch {
      const P = document.createElement("textarea");
      ((P.value = h),
        P.setAttribute("readonly", ""),
        (P.style.position = "fixed"),
        (P.style.opacity = "0"),
        document.body.appendChild(P),
        P.select(),
        document.execCommand("copy"),
        document.body.removeChild(P));
    }
    (O(ke, !0), setTimeout(() => O(ke, !1), 1200));
  }
  var Le = Nl(),
    gt = Ke(Le);
  {
    var Jr = (h) => {
      var P = Ct(),
        T = Ke(P);
      (Ys(
        T,
        () => a(p).id,
        (R) => {
          rl(R, {
            get message() {
              return a(p).message;
            },
            get variant() {
              return a(p).variant;
            },
            timeout: 3e3,
            closable: !1,
          });
        },
      ),
        M(h, P));
    };
    V(gt, (h) => {
      a(p) && h(Jr);
    });
  }
  var pr = D(gt, 2);
  _l(pr, {
    class:
      "fixed top-4 right-4 bg-transparent border-transparent hover:bg-transparent",
  });
  var Nr = D(pr, 2);
  cl(Nr, {
    get menuItems() {
      return a(w);
    },
    get activeItem() {
      return a(E);
    },
    get pressed() {
      return a(x);
    },
    onOpenChange: (h) => O(x, h, !0),
    onSelect: (h) => {
      (O(E, h === "grid" ? "grid" : "circular", !0), O(f, ""));
    },
    get header() {
      return r;
    },
    get footer() {
      return n;
    },
    class: "bg-transparent border-transparent hover:bg-transparent",
  });
  var Rt = D(Nr, 2);
  Fo(Rt, {
    get open() {
      return a(d);
    },
    get title() {
      return a(o).exportDialog.title;
    },
    message: "",
    onConfirm: De,
    onCancel: () => O(d, !1),
    onClose: () => O(d, !1),
    get children() {
      return s;
    },
  });
  var Qr = D(Rt, 2),
    en = F(Qr);
  (go(en, {
    get header() {
      return i;
    },
    children: (h, P) => {
      var T = Ml(),
        R = F(T);
      {
        var B = (Re) => {
            var tt = Fl(),
              Te = F(tt);
            Ee(Te, {
              get label() {
                return a(o).ui.fields.circular.diameter;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(S);
              },
              set value(Ze) {
                O(S, Ze, !0);
              },
            });
            var zt = D(Te, 2);
            Ee(zt, {
              get label() {
                return a(o).ui.fields.circular.startAngle;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(I);
              },
              set value(Ze) {
                O(I, Ze, !0);
              },
            });
            var jt = D(zt, 2);
            Ee(jt, {
              get label() {
                return a(o).ui.fields.circular.centerX;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(z);
              },
              set value(Ze) {
                O(z, Ze, !0);
              },
            });
            var Pt = D(jt, 2);
            Ee(Pt, {
              get label() {
                return a(o).ui.fields.circular.centerY;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(U);
              },
              set value(Ze) {
                O(U, Ze, !0);
              },
            });
            var mt = D(Pt, 2);
            Ee(mt, {
              get label() {
                return a(o).ui.fields.circular.holes;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(ee);
              },
              set value(Ze) {
                O(ee, Ze, !0);
              },
            });
            var Bt = D(mt, 2),
              Be = F(Bt);
            (gl(Be, {
              get topLabel() {
                return a(o).ui.ccw;
              },
              sz: "md",
              get checked() {
                return a(he);
              },
              set checked(Ze) {
                O(he, Ze, !0);
              },
            }),
              M(Re, tt));
          },
          pe = (Re) => {
            var tt = Sl(),
              Te = F(tt);
            Ee(Te, {
              get label() {
                return a(o).ui.fields.grid.startX;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(fe);
              },
              set value(Be) {
                O(fe, Be, !0);
              },
            });
            var zt = D(Te, 2);
            Ee(zt, {
              get label() {
                return a(o).ui.fields.grid.startY;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(_e);
              },
              set value(Be) {
                O(_e, Be, !0);
              },
            });
            var jt = D(zt, 2);
            Ee(jt, {
              get label() {
                return a(o).ui.fields.grid.stepX;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(be);
              },
              set value(Be) {
                O(be, Be, !0);
              },
            });
            var Pt = D(jt, 2);
            Ee(Pt, {
              get label() {
                return a(o).ui.fields.grid.stepY;
              },
              type: "number",
              parseNumber: !0,
              get value() {
                return a(ie);
              },
              set value(Be) {
                O(ie, Be, !0);
              },
            });
            var mt = D(Pt, 2);
            Ee(mt, {
              get label() {
                return a(o).ui.fields.grid.countX;
              },
              type: "number",
              parseNumber: !0,
              min: "1",
              get value() {
                return a(ce);
              },
              set value(Be) {
                O(ce, Be, !0);
              },
            });
            var Bt = D(mt, 2);
            (Ee(Bt, {
              get label() {
                return a(o).ui.fields.grid.countY;
              },
              type: "number",
              parseNumber: !0,
              min: "1",
              get value() {
                return a(re);
              },
              set value(Be) {
                O(re, Be, !0);
              },
            }),
              M(Re, tt));
          };
        V(R, (Re) => {
          a(E) === "circular" ? Re(B) : Re(pe, !1);
        });
      }
      var ae = D(R, 2),
        me = F(ae);
      Gt(me, {
        onClick: ye,
        variant: "primary",
        children: (Re, tt) => {
          var Te = xt();
          (H(() => le(Te, a(o).ui.buttons.calc)), M(Re, Te));
        },
        $$slots: { default: !0 },
      });
      var Ie = D(me, 2);
      Gt(Ie, {
        onClick: Ae,
        variant: "secondary",
        children: (Re, tt) => {
          var Te = xt();
          (H(() => le(Te, a(o).ui.buttons.clear)), M(Re, Te));
        },
        $$slots: { default: !0 },
      });
      var Ve = D(Ie, 2);
      Gt(Ve, {
        onClick: Fe,
        variant: "success",
        children: (Re, tt) => {
          var Te = xt();
          (H(() => le(Te, a(o).ui.buttons.export)), M(Re, Te));
        },
        $$slots: { default: !0 },
      });
      var We = D(ae, 2),
        St = F(We),
        Tt = F(St),
        ht = F(Tt),
        ge = F(ht),
        er = D(Tt, 2),
        Or = F(er);
      Ee(Or, {
        as: "textarea",
        rows: 10,
        get value() {
          return a(f);
        },
        readonly: !0,
        style: "height: 300px; resize: none; padding-right: 5.25rem;",
      });
      var tr = D(Or, 2);
      tr.__click = xe;
      let rr;
      var tn = F(tr),
        Qa = D(St, 2);
      {
        var ei = (Re) => {
          var tt = Pl(),
            Te = F(tt),
            zt = F(Te),
            jt = D(Te, 2),
            Pt = F(jt),
            mt = F(Pt),
            Bt = D(mt),
            Be = D(Bt);
          (Nn(
            Be,
            17,
            () => a(j),
            Gs,
            (Ze, Dr, ti) => {
              var Lr = Tl(),
                ri = F(Lr),
                ni = F(ri);
              (H(() => {
                (Q(Lr, "cx", a(Dr).x),
                  Q(Lr, "cy", a(Dr).y),
                  le(ni, `#${ti + 1} (${a(Dr).x ?? ""}, ${a(Dr).y ?? ""})`));
              }),
                M(Ze, Lr));
            },
          ),
            H(() => {
              (le(zt, a(o).ui.preview.title),
                Q(
                  Pt,
                  "viewBox",
                  `${a(G).minX - 10} ${a(G).minY - 10} ${a(oe) ?? ""} ${a(et) ?? ""}`,
                ),
                Q(mt, "x1", a(G).minX - 10),
                Q(mt, "x2", a(G).minX + a(oe)),
                Q(Bt, "y1", a(G).minY - 10),
                Q(Bt, "y2", a(G).minY + a(et)));
            }),
            M(Re, tt));
        };
        V(Qa, (Re) => {
          a(j).length && Re(ei);
        });
      }
      (H(() => {
        (le(ge, a(o).ui.output.title),
          (rr = $(
            tr,
            1,
            "absolute top-2 right-2 z-10 px-3 py-0.5 text-xs bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)] transition focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none",
            null,
            rr,
            { "!bg-green-600": a(ke) },
          )),
          Q(
            tr,
            "aria-label",
            a(ke) ? a(o).ui.output.copied : a(o).ui.output.copy,
          ),
          le(tn, a(ke) ? a(o).ui.output.copied : a(o).ui.output.copy));
      }),
        M(h, T));
    },
    $$slots: { default: !0 },
  }),
    M(e, Le),
    it());
}
Ce(["click"]);
zs(Ol, { target: document.getElementById("app") });
