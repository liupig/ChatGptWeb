!function () {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        r = function (t) {
            return t && t.Math == Math && t
        },
        e = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")(), n = {}, o = function (t) {
            try {
                return !!t()
            } catch (r) {
                return !0
            }
        }, i = !o((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })), c = !o((function () {
            var t = function () {
            }.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })), u = c, a = Function.prototype.call, f = u ? a.bind(a) : function () {
            return a.apply(a, arguments)
        }, s = {}, l = {}.propertyIsEnumerable, p = Object.getOwnPropertyDescriptor, y = p && !l.call({1: 2}, 1);
    s.f = y ? function (t) {
        var r = p(this, t);
        return !!r && r.enumerable
    } : l;
    var d, h, v = function (t, r) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r}
        }, g = c, m = Function.prototype, E = m.call, b = g && m.bind.bind(E, E), O = g ? b : function (t) {
            return function () {
                return E.apply(t, arguments)
            }
        }, w = O, A = w({}.toString), T = w("".slice), S = function (t) {
            return T(A(t), 8, -1)
        }, R = o, I = S, _ = Object, j = O("".split), P = R((function () {
            return !_("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == I(t) ? j(t, "") : _(t)
        } : _, x = function (t) {
            return null == t
        }, C = x, M = TypeError, D = function (t) {
            if (C(t)) throw M("Can't call method on " + t);
            return t
        }, L = P, N = D, k = function (t) {
            return L(N(t))
        }, F = "object" == typeof document && document.all, U = {all: F, IS_HTMLDDA: void 0 === F && void 0 !== F},
        W = U.all, B = U.IS_HTMLDDA ? function (t) {
            return "function" == typeof t || t === W
        } : function (t) {
            return "function" == typeof t
        }, V = B, z = U.all, Y = U.IS_HTMLDDA ? function (t) {
            return "object" == typeof t ? null !== t : V(t) || t === z
        } : function (t) {
            return "object" == typeof t ? null !== t : V(t)
        }, H = e, G = B, q = function (t) {
            return G(t) ? t : void 0
        }, X = function (t, r) {
            return arguments.length < 2 ? q(H[t]) : H[t] && H[t][r]
        }, Q = O({}.isPrototypeOf), J = "undefined" != typeof navigator && String(navigator.userAgent) || "", K = e, Z = J,
        $ = K.process, tt = K.Deno, rt = $ && $.versions || tt && tt.version, et = rt && rt.v8;
    et && (h = (d = et.split("."))[0] > 0 && d[0] < 4 ? 1 : +(d[0] + d[1])), !h && Z && (!(d = Z.match(/Edge\/(\d+)/)) || d[1] >= 74) && (d = Z.match(/Chrome\/(\d+)/)) && (h = +d[1]);
    var nt = h, ot = o, it = !!Object.getOwnPropertySymbols && !ot((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && nt && nt < 41
        })), ct = it && !Symbol.sham && "symbol" == typeof Symbol.iterator, ut = X, at = B, ft = Q, st = Object,
        lt = ct ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            var r = ut("Symbol");
            return at(r) && ft(r.prototype, st(t))
        }, pt = String, yt = function (t) {
            try {
                return pt(t)
            } catch (r) {
                return "Object"
            }
        }, dt = B, ht = yt, vt = TypeError, gt = function (t) {
            if (dt(t)) return t;
            throw vt(ht(t) + " is not a function")
        }, mt = gt, Et = x, bt = f, Ot = B, wt = Y, At = TypeError, Tt = {exports: {}}, St = e, Rt = Object.defineProperty,
        It = function (t, r) {
            try {
                Rt(St, t, {value: r, configurable: !0, writable: !0})
            } catch (e) {
                St[t] = r
            }
            return r
        }, _t = It, jt = "__core-js_shared__", Pt = e[jt] || _t(jt, {}), xt = Pt;
    (Tt.exports = function (t, r) {
        return xt[t] || (xt[t] = void 0 !== r ? r : {})
    })("versions", []).push({
        version: "3.27.2",
        mode: "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Ct = D, Mt = Object, Dt = function (t) {
            return Mt(Ct(t))
        }, Lt = Dt, Nt = O({}.hasOwnProperty), kt = Object.hasOwn || function (t, r) {
            return Nt(Lt(t), r)
        }, Ft = O, Ut = 0, Wt = Math.random(), Bt = Ft(1..toString), Vt = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Bt(++Ut + Wt, 36)
        }, zt = e, Yt = Tt.exports, Ht = kt, Gt = Vt, qt = it, Xt = ct, Qt = zt.Symbol, Jt = Yt("wks"),
        Kt = Xt ? Qt.for || Qt : Qt && Qt.withoutSetter || Gt, Zt = function (t) {
            return Ht(Jt, t) || (Jt[t] = qt && Ht(Qt, t) ? Qt[t] : Kt("Symbol." + t)), Jt[t]
        }, $t = f, tr = Y, rr = lt, er = function (t, r) {
            var e = t[r];
            return Et(e) ? void 0 : mt(e)
        }, nr = function (t, r) {
            var e, n;
            if ("string" === r && Ot(e = t.toString) && !wt(n = bt(e, t))) return n;
            if (Ot(e = t.valueOf) && !wt(n = bt(e, t))) return n;
            if ("string" !== r && Ot(e = t.toString) && !wt(n = bt(e, t))) return n;
            throw At("Can't convert object to primitive value")
        }, or = TypeError, ir = Zt("toPrimitive"), cr = function (t, r) {
            if (!tr(t) || rr(t)) return t;
            var e, n = er(t, ir);
            if (n) {
                if (void 0 === r && (r = "default"), e = $t(n, t, r), !tr(e) || rr(e)) return e;
                throw or("Can't convert object to primitive value")
            }
            return void 0 === r && (r = "number"), nr(t, r)
        }, ur = cr, ar = lt, fr = function (t) {
            var r = ur(t, "string");
            return ar(r) ? r : r + ""
        }, sr = Y, lr = e.document, pr = sr(lr) && sr(lr.createElement), yr = function (t) {
            return pr ? lr.createElement(t) : {}
        }, dr = yr, hr = !i && !o((function () {
            return 7 != Object.defineProperty(dr("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })), vr = i, gr = f, mr = s, Er = v, br = k, Or = fr, wr = kt, Ar = hr, Tr = Object.getOwnPropertyDescriptor;
    n.f = vr ? Tr : function (t, r) {
        if (t = br(t), r = Or(r), Ar) try {
            return Tr(t, r)
        } catch (e) {
        }
        if (wr(t, r)) return Er(!gr(mr.f, t, r), t[r])
    };
    var Sr = {}, Rr = i && o((function () {
            return 42 != Object.defineProperty((function () {
            }), "prototype", {value: 42, writable: !1}).prototype
        })), Ir = Y, _r = String, jr = TypeError, Pr = function (t) {
            if (Ir(t)) return t;
            throw jr(_r(t) + " is not an object")
        }, xr = i, Cr = hr, Mr = Rr, Dr = Pr, Lr = fr, Nr = TypeError, kr = Object.defineProperty,
        Fr = Object.getOwnPropertyDescriptor, Ur = "enumerable", Wr = "configurable", Br = "writable";
    Sr.f = xr ? Mr ? function (t, r, e) {
        if (Dr(t), r = Lr(r), Dr(e), "function" == typeof t && "prototype" === r && "value" in e && Br in e && !e[Br]) {
            var n = Fr(t, r);
            n && n[Br] && (t[r] = e.value, e = {
                configurable: Wr in e ? e[Wr] : n[Wr],
                enumerable: Ur in e ? e[Ur] : n[Ur],
                writable: !1
            })
        }
        return kr(t, r, e)
    } : kr : function (t, r, e) {
        if (Dr(t), r = Lr(r), Dr(e), Cr) try {
            return kr(t, r, e)
        } catch (n) {
        }
        if ("get" in e || "set" in e) throw Nr("Accessors not supported");
        return "value" in e && (t[r] = e.value), t
    };
    var Vr = Sr, zr = v, Yr = i ? function (t, r, e) {
            return Vr.f(t, r, zr(1, e))
        } : function (t, r, e) {
            return t[r] = e, t
        }, Hr = {exports: {}}, Gr = i, qr = kt, Xr = Function.prototype, Qr = Gr && Object.getOwnPropertyDescriptor,
        Jr = qr(Xr, "name"), Kr = {
            EXISTS: Jr, PROPER: Jr && "something" === function () {
            }.name, CONFIGURABLE: Jr && (!Gr || Gr && Qr(Xr, "name").configurable)
        }, Zr = B, $r = Pt, te = O(Function.toString);
    Zr($r.inspectSource) || ($r.inspectSource = function (t) {
        return te(t)
    });
    var re, ee, ne, oe = $r.inspectSource, ie = B, ce = e.WeakMap, ue = ie(ce) && /native code/.test(String(ce)),
        ae = Tt.exports, fe = Vt, se = ae("keys"), le = function (t) {
            return se[t] || (se[t] = fe(t))
        }, pe = {}, ye = ue, de = e, he = Y, ve = Yr, ge = kt, me = Pt, Ee = le, be = pe, Oe = "Object already initialized",
        we = de.TypeError, Ae = de.WeakMap;
    if (ye || me.state) {
        var Te = me.state || (me.state = new Ae);
        Te.get = Te.get, Te.has = Te.has, Te.set = Te.set, re = function (t, r) {
            if (Te.has(t)) throw we(Oe);
            return r.facade = t, Te.set(t, r), r
        }, ee = function (t) {
            return Te.get(t) || {}
        }, ne = function (t) {
            return Te.has(t)
        }
    } else {
        var Se = Ee("state");
        be[Se] = !0, re = function (t, r) {
            if (ge(t, Se)) throw we(Oe);
            return r.facade = t, ve(t, Se, r), r
        }, ee = function (t) {
            return ge(t, Se) ? t[Se] : {}
        }, ne = function (t) {
            return ge(t, Se)
        }
    }
    var Re = {
            set: re, get: ee, has: ne, enforce: function (t) {
                return ne(t) ? ee(t) : re(t, {})
            }, getterFor: function (t) {
                return function (r) {
                    var e;
                    if (!he(r) || (e = ee(r)).type !== t) throw we("Incompatible receiver, " + t + " required");
                    return e
                }
            }
        }, Ie = O, _e = o, je = B, Pe = kt, xe = i, Ce = Kr.CONFIGURABLE, Me = oe, De = Re.enforce, Le = Re.get,
        Ne = String, ke = Object.defineProperty, Fe = Ie("".slice), Ue = Ie("".replace), We = Ie([].join),
        Be = xe && !_e((function () {
            return 8 !== ke((function () {
            }), "length", {value: 8}).length
        })), Ve = String(String).split("String"), ze = Hr.exports = function (t, r, e) {
            "Symbol(" === Fe(Ne(r), 0, 7) && (r = "[" + Ue(Ne(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!Pe(t, "name") || Ce && t.name !== r) && (xe ? ke(t, "name", {
                value: r,
                configurable: !0
            }) : t.name = r), Be && e && Pe(e, "arity") && t.length !== e.arity && ke(t, "length", {value: e.arity});
            try {
                e && Pe(e, "constructor") && e.constructor ? xe && ke(t, "prototype", {writable: !1}) : t.prototype && (t.prototype = void 0)
            } catch (o) {
            }
            var n = De(t);
            return Pe(n, "source") || (n.source = We(Ve, "string" == typeof r ? r : "")), t
        };
    Function.prototype.toString = ze((function () {
        return je(this) && Le(this).source || Me(this)
    }), "toString");
    var Ye = B, He = Sr, Ge = Hr.exports, qe = It, Xe = function (t, r, e, n) {
            n || (n = {});
            var o = n.enumerable, i = void 0 !== n.name ? n.name : r;
            if (Ye(e) && Ge(e, i, n), n.global) o ? t[r] = e : qe(r, e); else {
                try {
                    n.unsafe ? t[r] && (o = !0) : delete t[r]
                } catch (c) {
                }
                o ? t[r] = e : He.f(t, r, {
                    value: e,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return t
        }, Qe = {}, Je = Math.ceil, Ke = Math.floor, Ze = Math.trunc || function (t) {
            var r = +t;
            return (r > 0 ? Ke : Je)(r)
        }, $e = function (t) {
            var r = +t;
            return r != r || 0 === r ? 0 : Ze(r)
        }, tn = $e, rn = Math.max, en = Math.min, nn = $e, on = Math.min, cn = function (t) {
            return t > 0 ? on(nn(t), 9007199254740991) : 0
        }, un = function (t) {
            return cn(t.length)
        }, an = k, fn = function (t, r) {
            var e = tn(t);
            return e < 0 ? rn(e + r, 0) : en(e, r)
        }, sn = un, ln = function (t) {
            return function (r, e, n) {
                var o, i = an(r), c = sn(i), u = fn(n, c);
                if (t && e != e) {
                    for (; c > u;) if ((o = i[u++]) != o) return !0
                } else for (; c > u; u++) if ((t || u in i) && i[u] === e) return t || u || 0;
                return !t && -1
            }
        }, pn = {includes: ln(!0), indexOf: ln(!1)}, yn = kt, dn = k, hn = pn.indexOf, vn = pe, gn = O([].push),
        mn = function (t, r) {
            var e, n = dn(t), o = 0, i = [];
            for (e in n) !yn(vn, e) && yn(n, e) && gn(i, e);
            for (; r.length > o;) yn(n, e = r[o++]) && (~hn(i, e) || gn(i, e));
            return i
        },
        En = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        bn = mn, On = En.concat("length", "prototype");
    Qe.f = Object.getOwnPropertyNames || function (t) {
        return bn(t, On)
    };
    var wn = {};
    wn.f = Object.getOwnPropertySymbols;
    var An = X, Tn = Qe, Sn = wn, Rn = Pr, In = O([].concat), _n = An("Reflect", "ownKeys") || function (t) {
            var r = Tn.f(Rn(t)), e = Sn.f;
            return e ? In(r, e(t)) : r
        }, jn = kt, Pn = _n, xn = n, Cn = Sr, Mn = function (t, r, e) {
            for (var n = Pn(r), o = Cn.f, i = xn.f, c = 0; c < n.length; c++) {
                var u = n[c];
                jn(t, u) || e && jn(e, u) || o(t, u, i(r, u))
            }
        }, Dn = o, Ln = B, Nn = /#|\.prototype\./, kn = function (t, r) {
            var e = Un[Fn(t)];
            return e == Bn || e != Wn && (Ln(r) ? Dn(r) : !!r)
        }, Fn = kn.normalize = function (t) {
            return String(t).replace(Nn, ".").toLowerCase()
        }, Un = kn.data = {}, Wn = kn.NATIVE = "N", Bn = kn.POLYFILL = "P", Vn = kn, zn = e, Yn = n.f, Hn = Yr, Gn = Xe,
        qn = It, Xn = Mn, Qn = Vn, Jn = function (t, r) {
            var e, n, o, i, c, u = t.target, a = t.global, f = t.stat;
            if (e = a ? zn : f ? zn[u] || qn(u, {}) : (zn[u] || {}).prototype) for (n in r) {
                if (i = r[n], o = t.dontCallGetSet ? (c = Yn(e, n)) && c.value : e[n], !Qn(a ? n : u + (f ? "." : "#") + n, t.forced) && void 0 !== o) {
                    if (typeof i == typeof o) continue;
                    Xn(i, o)
                }
                (t.sham || o && o.sham) && Hn(i, "sham", !0), Gn(e, n, i, t)
            }
        }, Kn = c, Zn = Function.prototype, $n = Zn.apply, to = Zn.call,
        ro = "object" == typeof Reflect && Reflect.apply || (Kn ? to.bind($n) : function () {
            return to.apply($n, arguments)
        }), eo = B, no = String, oo = TypeError, io = O, co = Pr, uo = function (t) {
            if ("object" == typeof t || eo(t)) return t;
            throw oo("Can't set " + no(t) + " as a prototype")
        }, ao = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, r = !1, e = {};
            try {
                (t = io(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(e, []), r = e instanceof Array
            } catch (n) {
            }
            return function (e, n) {
                return co(e), uo(n), r ? t(e, n) : e.__proto__ = n, e
            }
        }() : void 0), fo = Sr.f, so = B, lo = Y, po = ao, yo = function (t, r, e) {
            var n, o;
            return po && so(n = r.constructor) && n !== e && lo(o = n.prototype) && o !== e.prototype && po(t, o), t
        }, ho = {};
    ho[Zt("toStringTag")] = "z";
    var vo = "[object z]" === String(ho), go = B, mo = S, Eo = Zt("toStringTag"), bo = Object,
        Oo = "Arguments" == mo(function () {
            return arguments
        }()), wo = vo ? mo : function (t) {
            var r, e, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, r) {
                try {
                    return t[r]
                } catch (e) {
                }
            }(r = bo(t), Eo)) ? e : Oo ? mo(r) : "Object" == (n = mo(r)) && go(r.callee) ? "Arguments" : n
        }, Ao = wo, To = String, So = function (t) {
            if ("Symbol" === Ao(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return To(t)
        }, Ro = function (t, r) {
            return void 0 === t ? arguments.length < 2 ? "" : r : So(t)
        }, Io = Y, _o = Yr, jo = Error, Po = O("".replace), xo = String(jo("zxcasd").stack), Co = /\n\s*at [^:]*:[^\n]*/,
        Mo = Co.test(xo), Do = function (t, r) {
            if (Mo && "string" == typeof t && !jo.prepareStackTrace) for (; r--;) t = Po(t, Co, "");
            return t
        }, Lo = v, No = !o((function () {
            var t = Error("a");
            return !("stack" in t) || (Object.defineProperty(t, "stack", Lo(1, 7)), 7 !== t.stack)
        })), ko = Yr, Fo = Do, Uo = No, Wo = Error.captureStackTrace, Bo = X, Vo = kt, zo = Yr, Yo = Q, Ho = ao, Go = Mn,
        qo = function (t, r, e) {
            e in t || fo(t, e, {
                configurable: !0, get: function () {
                    return r[e]
                }, set: function (t) {
                    r[e] = t
                }
            })
        }, Xo = yo, Qo = Ro, Jo = function (t, r) {
            Io(r) && "cause" in r && _o(t, "cause", r.cause)
        }, Ko = function (t, r, e, n) {
            Uo && (Wo ? Wo(t, r) : ko(t, "stack", Fo(e, n)))
        }, Zo = i, $o = Jn, ti = ro, ri = function (t, r, e, n) {
            var o = "stackTraceLimit", i = n ? 2 : 1, c = t.split("."), u = c[c.length - 1], a = Bo.apply(null, c);
            if (a) {
                var f = a.prototype;
                if (Vo(f, "cause") && delete f.cause, !e) return a;
                var s = Bo("Error"), l = r((function (t, r) {
                    var e = Qo(n ? r : t, void 0), o = n ? new a(t) : new a;
                    return void 0 !== e && zo(o, "message", e), Ko(o, l, o.stack, 2), this && Yo(f, this) && Xo(o, this, l), arguments.length > i && Jo(o, arguments[i]), o
                }));
                l.prototype = f, "Error" !== u ? Ho ? Ho(l, s) : Go(l, s, {name: !0}) : Zo && o in a && (qo(l, a, o), qo(l, a, "prepareStackTrace")), Go(l, a);
                try {
                    f.name !== u && zo(f, "name", u), f.constructor = l
                } catch (p) {
                }
                return l
            }
        }, ei = "WebAssembly", ni = e[ei], oi = 7 !== Error("e", {cause: 7}).cause, ii = function (t, r) {
            var e = {};
            e[t] = ri(t, r, oi), $o({global: !0, constructor: !0, arity: 1, forced: oi}, e)
        }, ci = function (t, r) {
            if (ni && ni[t]) {
                var e = {};
                e[t] = ri(ei + "." + t, r, oi), $o({target: ei, stat: !0, constructor: !0, arity: 1, forced: oi}, e)
            }
        };
    ii("Error", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("EvalError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("RangeError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("ReferenceError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("SyntaxError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("TypeError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ii("URIError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ci("CompileError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ci("LinkError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    })), ci("RuntimeError", (function (t) {
        return function (r) {
            return ti(t, this, arguments)
        }
    }));
    var ui = S, ai = i, fi = Array.isArray || function (t) {
        return "Array" == ui(t)
    }, si = TypeError, li = Object.getOwnPropertyDescriptor, pi = ai && !function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", {writable: !1}).length = 1
        } catch (t) {
            return t instanceof TypeError
        }
    }() ? function (t, r) {
        if (fi(t) && !li(t, "length").writable) throw si("Cannot set read only .length");
        return t.length = r
    } : function (t, r) {
        return t.length = r
    }, yi = TypeError, di = function (t) {
        if (t > 9007199254740991) throw yi("Maximum allowed index exceeded");
        return t
    }, hi = Dt, vi = un, gi = pi, mi = di;
    Jn({
        target: "Array", proto: !0, arity: 1, forced: o((function () {
            return 4294967297 !== [].push.call({length: 4294967296}, 1)
        })) || !function () {
            try {
                Object.defineProperty([], "length", {writable: !1}).push()
            } catch (t) {
                return t instanceof TypeError
            }
        }()
    }, {
        push: function (t) {
            var r = hi(this), e = vi(r), n = arguments.length;
            mi(e + n);
            for (var o = 0; o < n; o++) r[e] = arguments[o], e++;
            return gi(r, e), e
        }
    });
    var Ei, bi, Oi, wi = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, Ai = !o((function () {
            function t() {
            }

            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })), Ti = kt, Si = B, Ri = Dt, Ii = Ai, _i = le("IE_PROTO"), ji = Object, Pi = ji.prototype,
        xi = Ii ? ji.getPrototypeOf : function (t) {
            var r = Ri(t);
            if (Ti(r, _i)) return r[_i];
            var e = r.constructor;
            return Si(e) && r instanceof e ? e.prototype : r instanceof ji ? Pi : null
        }, Ci = wi, Mi = i, Di = e, Li = B, Ni = Y, ki = kt, Fi = wo, Ui = yt, Wi = Yr, Bi = Xe, Vi = Sr.f, zi = Q,
        Yi = xi, Hi = ao, Gi = Zt, qi = Vt, Xi = Re.enforce, Qi = Re.get, Ji = Di.Int8Array, Ki = Ji && Ji.prototype,
        Zi = Di.Uint8ClampedArray, $i = Zi && Zi.prototype, tc = Ji && Yi(Ji), rc = Ki && Yi(Ki), ec = Object.prototype,
        nc = Di.TypeError, oc = Gi("toStringTag"), ic = qi("TYPED_ARRAY_TAG"), cc = "TypedArrayConstructor",
        uc = Ci && !!Hi && "Opera" !== Fi(Di.opera), ac = !1, fc = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, sc = {BigInt64Array: 8, BigUint64Array: 8}, lc = function (t) {
            var r = Yi(t);
            if (Ni(r)) {
                var e = Qi(r);
                return e && ki(e, cc) ? e[cc] : lc(r)
            }
        }, pc = function (t) {
            if (!Ni(t)) return !1;
            var r = Fi(t);
            return ki(fc, r) || ki(sc, r)
        };
    for (Ei in fc) (Oi = (bi = Di[Ei]) && bi.prototype) ? Xi(Oi)[cc] = bi : uc = !1;
    for (Ei in sc) (Oi = (bi = Di[Ei]) && bi.prototype) && (Xi(Oi)[cc] = bi);
    if ((!uc || !Li(tc) || tc === Function.prototype) && (tc = function () {
        throw nc("Incorrect invocation")
    }, uc)) for (Ei in fc) Di[Ei] && Hi(Di[Ei], tc);
    if ((!uc || !rc || rc === ec) && (rc = tc.prototype, uc)) for (Ei in fc) Di[Ei] && Hi(Di[Ei].prototype, rc);
    if (uc && Yi($i) !== rc && Hi($i, rc), Mi && !ki(rc, oc)) for (Ei in ac = !0, Vi(rc, oc, {
        get: function () {
            return Ni(this) ? this[ic] : void 0
        }
    }), fc) Di[Ei] && Wi(Di[Ei], ic, Ei);
    var yc = {
        NATIVE_ARRAY_BUFFER_VIEWS: uc, TYPED_ARRAY_TAG: ac && ic, aTypedArray: function (t) {
            if (pc(t)) return t;
            throw nc("Target is not a typed array")
        }, aTypedArrayConstructor: function (t) {
            if (Li(t) && (!Hi || zi(tc, t))) return t;
            throw nc(Ui(t) + " is not a typed array constructor")
        }, exportTypedArrayMethod: function (t, r, e, n) {
            if (Mi) {
                if (e) for (var o in fc) {
                    var i = Di[o];
                    if (i && ki(i.prototype, t)) try {
                        delete i.prototype[t]
                    } catch (c) {
                        try {
                            i.prototype[t] = r
                        } catch (u) {
                        }
                    }
                }
                rc[t] && !e || Bi(rc, t, e ? r : uc && Ki[t] || r, n)
            }
        }, exportTypedArrayStaticMethod: function (t, r, e) {
            var n, o;
            if (Mi) {
                if (Hi) {
                    if (e) for (n in fc) if ((o = Di[n]) && ki(o, t)) try {
                        delete o[t]
                    } catch (i) {
                    }
                    if (tc[t] && !e) return;
                    try {
                        return Bi(tc, t, e ? r : uc && tc[t] || r)
                    } catch (i) {
                    }
                }
                for (n in fc) !(o = Di[n]) || o[t] && !e || Bi(o, t, r)
            }
        }, getTypedArrayConstructor: lc, isView: function (t) {
            if (!Ni(t)) return !1;
            var r = Fi(t);
            return "DataView" === r || ki(fc, r) || ki(sc, r)
        }, isTypedArray: pc, TypedArray: tc, TypedArrayPrototype: rc
    }, dc = un, hc = $e, vc = yc.aTypedArray;
    (0, yc.exportTypedArrayMethod)("at", (function (t) {
        var r = vc(this), e = dc(r), n = hc(t), o = n >= 0 ? n : e + n;
        return o < 0 || o >= e ? void 0 : r[o]
    }));
    var gc = S, mc = O, Ec = function (t) {
        if ("Function" === gc(t)) return mc(t)
    }, bc = gt, Oc = c, wc = Ec(Ec.bind), Ac = function (t, r) {
        return bc(t), void 0 === r ? t : Oc ? wc(t, r) : function () {
            return t.apply(r, arguments)
        }
    }, Tc = Ac, Sc = P, Rc = Dt, Ic = un, _c = function (t) {
        var r = 1 == t;
        return function (e, n, o) {
            for (var i, c = Rc(e), u = Sc(c), a = Tc(n, o), f = Ic(u); f-- > 0;) if (a(i = u[f], f, c)) switch (t) {
                case 0:
                    return i;
                case 1:
                    return f
            }
            return r ? -1 : void 0
        }
    }, jc = {findLast: _c(0), findLastIndex: _c(1)}, Pc = jc.findLast, xc = yc.aTypedArray;
    (0, yc.exportTypedArrayMethod)("findLast", (function (t) {
        return Pc(xc(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Cc = jc.findLastIndex, Mc = yc.aTypedArray;
    (0, yc.exportTypedArrayMethod)("findLastIndex", (function (t) {
        return Cc(Mc(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Dc = un, Lc = function (t, r) {
        for (var e = Dc(t), n = new r(e), o = 0; o < e; o++) n[o] = t[e - o - 1];
        return n
    }, Nc = yc.aTypedArray, kc = yc.getTypedArrayConstructor;
    (0, yc.exportTypedArrayMethod)("toReversed", (function () {
        return Lc(Nc(this), kc(this))
    }));
    var Fc = un, Uc = function (t, r) {
            for (var e = 0, n = Fc(r), o = new t(n); n > e;) o[e] = r[e++];
            return o
        }, Wc = gt, Bc = Uc, Vc = yc.aTypedArray, zc = yc.getTypedArrayConstructor, Yc = yc.exportTypedArrayMethod,
        Hc = O(yc.TypedArrayPrototype.sort);
    Yc("toSorted", (function (t) {
        void 0 !== t && Wc(t);
        var r = Vc(this), e = Bc(zc(r), r);
        return Hc(e, t)
    }));
    var Gc = un, qc = $e, Xc = RangeError, Qc = wo, Jc = cr, Kc = TypeError, Zc = function (t, r, e, n) {
        var o = Gc(t), i = qc(e), c = i < 0 ? o + i : i;
        if (c >= o || c < 0) throw Xc("Incorrect index");
        for (var u = new r(o), a = 0; a < o; a++) u[a] = a === c ? n : t[a];
        return u
    }, $c = function (t) {
        var r = Qc(t);
        return "BigInt64Array" == r || "BigUint64Array" == r
    }, tu = $e, ru = function (t) {
        var r = Jc(t, "number");
        if ("number" == typeof r) throw Kc("Can't convert number to bigint");
        return BigInt(r)
    }, eu = yc.aTypedArray, nu = yc.getTypedArrayConstructor, ou = yc.exportTypedArrayMethod, iu = !!function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8
                }
            })
        } catch (t) {
            return 8 === t
        }
    }();
    ou("with", {
        with: function (t, r) {
            var e = eu(this), n = tu(t), o = $c(e) ? ru(r) : +r;
            return Zc(e, nu(e), n, o)
        }
    }.with, !iu);
    var cu = {}, uu = mn, au = En, fu = Object.keys || function (t) {
        return uu(t, au)
    }, su = i, lu = Rr, pu = Sr, yu = Pr, du = k, hu = fu;
    cu.f = su && !lu ? Object.defineProperties : function (t, r) {
        yu(t);
        for (var e, n = du(r), o = hu(r), i = o.length, c = 0; i > c;) pu.f(t, e = o[c++], n[e]);
        return t
    };
    var vu, gu = X("document", "documentElement"), mu = Pr, Eu = cu, bu = En, Ou = pe, wu = gu, Au = yr,
        Tu = "prototype", Su = "script", Ru = le("IE_PROTO"), Iu = function () {
        }, _u = function (t) {
            return "<" + Su + ">" + t + "</" + Su + ">"
        }, ju = function (t) {
            t.write(_u("")), t.close();
            var r = t.parentWindow.Object;
            return t = null, r
        }, Pu = function () {
            try {
                vu = new ActiveXObject("htmlfile")
            } catch (o) {
            }
            var t, r, e;
            Pu = "undefined" != typeof document ? document.domain && vu ? ju(vu) : (r = Au("iframe"), e = "java" + Su + ":", r.style.display = "none", wu.appendChild(r), r.src = String(e), (t = r.contentWindow.document).open(), t.write(_u("document.F=Object")), t.close(), t.F) : ju(vu);
            for (var n = bu.length; n--;) delete Pu[Tu][bu[n]];
            return Pu()
        };
    Ou[Ru] = !0;
    var xu = Object.create || function (t, r) {
            var e;
            return null !== t ? (Iu[Tu] = mu(t), e = new Iu, Iu[Tu] = null, e[Ru] = t) : e = Pu(), void 0 === r ? e : Eu.f(e, r)
        }, Cu = Ac, Mu = P, Du = Dt, Lu = fr, Nu = un, ku = xu, Fu = Uc, Uu = Array, Wu = O([].push), Bu = Zt, Vu = xu,
        zu = Sr.f, Yu = Bu("unscopables"), Hu = Array.prototype;
    null == Hu[Yu] && zu(Hu, Yu, {configurable: !0, value: Vu(null)});
    var Gu = function (t, r, e, n) {
        for (var o, i, c, u = Du(t), a = Mu(u), f = Cu(r, e), s = ku(null), l = Nu(a), p = 0; l > p; p++) c = a[p], (i = Lu(f(c, p, u))) in s ? Wu(s[i], c) : s[i] = [c];
        if (n && (o = n(u)) !== Uu) for (i in s) s[i] = Fu(o, s[i]);
        return s
    }, qu = function (t) {
        Hu[Yu][t] = !0
    };
    Jn({target: "Array", proto: !0}, {
        group: function (t) {
            return Gu(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), qu("group");
    var Xu = Q, Qu = TypeError, Ju = Jn, Ku = e, Zu = X, $u = v, ta = Sr.f, ra = kt, ea = function (t, r) {
            if (Xu(r, t)) return t;
            throw Qu("Incorrect invocation")
        }, na = yo, oa = Ro, ia = {
            IndexSizeError: {s: "INDEX_SIZE_ERR", c: 1, m: 1},
            DOMStringSizeError: {s: "DOMSTRING_SIZE_ERR", c: 2, m: 0},
            HierarchyRequestError: {s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1},
            WrongDocumentError: {s: "WRONG_DOCUMENT_ERR", c: 4, m: 1},
            InvalidCharacterError: {s: "INVALID_CHARACTER_ERR", c: 5, m: 1},
            NoDataAllowedError: {s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0},
            NoModificationAllowedError: {s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1},
            NotFoundError: {s: "NOT_FOUND_ERR", c: 8, m: 1},
            NotSupportedError: {s: "NOT_SUPPORTED_ERR", c: 9, m: 1},
            InUseAttributeError: {s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1},
            InvalidStateError: {s: "INVALID_STATE_ERR", c: 11, m: 1},
            SyntaxError: {s: "SYNTAX_ERR", c: 12, m: 1},
            InvalidModificationError: {s: "INVALID_MODIFICATION_ERR", c: 13, m: 1},
            NamespaceError: {s: "NAMESPACE_ERR", c: 14, m: 1},
            InvalidAccessError: {s: "INVALID_ACCESS_ERR", c: 15, m: 1},
            ValidationError: {s: "VALIDATION_ERR", c: 16, m: 0},
            TypeMismatchError: {s: "TYPE_MISMATCH_ERR", c: 17, m: 1},
            SecurityError: {s: "SECURITY_ERR", c: 18, m: 1},
            NetworkError: {s: "NETWORK_ERR", c: 19, m: 1},
            AbortError: {s: "ABORT_ERR", c: 20, m: 1},
            URLMismatchError: {s: "URL_MISMATCH_ERR", c: 21, m: 1},
            QuotaExceededError: {s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1},
            TimeoutError: {s: "TIMEOUT_ERR", c: 23, m: 1},
            InvalidNodeTypeError: {s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1},
            DataCloneError: {s: "DATA_CLONE_ERR", c: 25, m: 1}
        }, ca = Do, ua = i, aa = "DOMException", fa = Zu("Error"), sa = Zu(aa), la = function () {
            ea(this, pa);
            var t = arguments.length, r = oa(t < 1 ? void 0 : arguments[0]), e = oa(t < 2 ? void 0 : arguments[1], "Error"),
                n = new sa(r, e), o = fa(r);
            return o.name = aa, ta(n, "stack", $u(1, ca(o.stack, 1))), na(n, this, la), n
        }, pa = la.prototype = sa.prototype, ya = "stack" in fa(aa), da = "stack" in new sa(1, 2),
        ha = sa && ua && Object.getOwnPropertyDescriptor(Ku, aa), va = !(!ha || ha.writable && ha.configurable),
        ga = ya && !va && !da;
    Ju({global: !0, constructor: !0, forced: ga}, {DOMException: ga ? la : sa});
    var ma = Zu(aa), Ea = ma.prototype;
    if (Ea.constructor !== ma) for (var ba in ta(Ea, "constructor", $u(1, ma)), ia) if (ra(ia, ba)) {
        var Oa = ia[ba], wa = Oa.s;
        ra(ma, wa) || ta(ma, wa, $u(6, Oa.c))
    }
    var Aa, Ta, Sa, Ra, Ia = O([].slice), _a = TypeError, ja = function (t, r) {
            if (t < r) throw _a("Not enough arguments");
            return t
        }, Pa = /(?:ipad|iphone|ipod).*applewebkit/i.test(J), xa = "undefined" != typeof process && "process" == S(process),
        Ca = e, Ma = ro, Da = Ac, La = B, Na = kt, ka = o, Fa = gu, Ua = Ia, Wa = yr, Ba = ja, Va = Pa, za = xa,
        Ya = Ca.setImmediate, Ha = Ca.clearImmediate, Ga = Ca.process, qa = Ca.Dispatch, Xa = Ca.Function,
        Qa = Ca.MessageChannel, Ja = Ca.String, Ka = 0, Za = {}, $a = "onreadystatechange";
    ka((function () {
        Aa = Ca.location
    }));
    var tf = function (t) {
        if (Na(Za, t)) {
            var r = Za[t];
            delete Za[t], r()
        }
    }, rf = function (t) {
        return function () {
            tf(t)
        }
    }, ef = function (t) {
        tf(t.data)
    }, nf = function (t) {
        Ca.postMessage(Ja(t), Aa.protocol + "//" + Aa.host)
    };
    Ya && Ha || (Ya = function (t) {
        Ba(arguments.length, 1);
        var r = La(t) ? t : Xa(t), e = Ua(arguments, 1);
        return Za[++Ka] = function () {
            Ma(r, void 0, e)
        }, Ta(Ka), Ka
    }, Ha = function (t) {
        delete Za[t]
    }, za ? Ta = function (t) {
        Ga.nextTick(rf(t))
    } : qa && qa.now ? Ta = function (t) {
        qa.now(rf(t))
    } : Qa && !Va ? (Ra = (Sa = new Qa).port2, Sa.port1.onmessage = ef, Ta = Da(Ra.postMessage, Ra)) : Ca.addEventListener && La(Ca.postMessage) && !Ca.importScripts && Aa && "file:" !== Aa.protocol && !ka(nf) ? (Ta = nf, Ca.addEventListener("message", ef, !1)) : Ta = $a in Wa("script") ? function (t) {
        Fa.appendChild(Wa("script"))[$a] = function () {
            Fa.removeChild(this), tf(t)
        }
    } : function (t) {
        setTimeout(rf(t), 0)
    });
    var of = {set: Ya, clear: Ha}, cf = of.clear;
    Jn({global: !0, bind: !0, enumerable: !0, forced: e.clearImmediate !== cf}, {clearImmediate: cf});
    var uf = "function" == typeof Bun && Bun && "string" == typeof Bun.version, af = e, ff = ro, sf = B, lf = uf,
        pf = J, yf = Ia, df = ja, hf = af.Function, vf = /MSIE .\./.test(pf) || lf && function () {
            var t = af.Bun.version.split(".");
            return t.length < 3 || 0 == t[0] && (t[1] < 3 || 3 == t[1] && 0 == t[2])
        }(), gf = Jn, mf = e, Ef = of.set, bf = function (t, r) {
            var e = r ? 2 : 1;
            return vf ? function (n, o) {
                var i = df(arguments.length, 1) > e, c = sf(n) ? n : hf(n), u = i ? yf(arguments, e) : [],
                    a = i ? function () {
                        ff(c, this, u)
                    } : c;
                return r ? t(a, o) : t(a)
            } : t
        }, Of = mf.setImmediate ? bf(Ef, !1) : Ef;
    gf({global: !0, bind: !0, enumerable: !0, forced: mf.setImmediate !== Of}, {setImmediate: Of});
    var wf = Hr.exports, Af = Sr, Tf = Pr, Sf = i, Rf = function (t, r, e) {
        return e.get && wf(e.get, r, {getter: !0}), e.set && wf(e.set, r, {setter: !0}), Af.f(t, r, e)
    }, If = function () {
        var t = Tf(this), r = "";
        return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
    }, _f = o, jf = e.RegExp, Pf = jf.prototype, xf = Sf && _f((function () {
        var t = !0;
        try {
            jf(".", "d")
        } catch (u) {
            t = !1
        }
        var r = {}, e = "", n = t ? "dgimsy" : "gimsy", o = function (t, n) {
            Object.defineProperty(r, t, {
                get: function () {
                    return e += n, !0
                }
            })
        }, i = {dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y"};
        for (var c in t && (i.hasIndices = "d"), i) o(c, i[c]);
        return Object.getOwnPropertyDescriptor(Pf, "flags").get.call(r) !== n || e !== n
    }));
    xf && Rf(Pf, "flags", {configurable: !0, get: If});
    var Cf = yt, Mf = TypeError, Df = Dt, Lf = un, Nf = pi, kf = function (t, r) {
        if (!delete t[r]) throw Mf("Cannot delete property " + Cf(r) + " of " + Cf(t))
    }, Ff = di;
    Jn({
        target: "Array", proto: !0, arity: 1, forced: 1 !== [].unshift(0) || !function () {
            try {
                Object.defineProperty([], "length", {writable: !1}).unshift()
            } catch (t) {
                return t instanceof TypeError
            }
        }()
    }, {
        unshift: function (t) {
            var r = Df(this), e = Lf(r), n = arguments.length;
            if (n) {
                Ff(e + n);
                for (var o = e; o--;) {
                    var i = o + n;
                    o in r ? r[i] = r[o] : kf(r, i)
                }
                for (var c = 0; c < n; c++) r[c] = arguments[c]
            }
            return Nf(r, e + n)
        }
    }), Jn({target: "Object", stat: !0}, {hasOwn: kt}), function () {
        function r(t, r) {
            return (r || "") + " (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#" + t + ")"
        }

        function e(t, r) {
            if (-1 !== t.indexOf("\\") && (t = t.replace(T, "/")), "/" === t[0] && "/" === t[1]) return r.slice(0, r.indexOf(":") + 1) + t;
            if ("." === t[0] && ("/" === t[1] || "." === t[1] && ("/" === t[2] || 2 === t.length && (t += "/")) || 1 === t.length && (t += "/")) || "/" === t[0]) {
                var e, n = r.slice(0, r.indexOf(":") + 1);
                if (e = "/" === r[n.length + 1] ? "file:" !== n ? (e = r.slice(n.length + 2)).slice(e.indexOf("/") + 1) : r.slice(8) : r.slice(n.length + ("/" === r[n.length])), "/" === t[0]) return r.slice(0, r.length - e.length - 1) + t;
                for (var o = e.slice(0, e.lastIndexOf("/") + 1) + t, i = [], c = -1, u = 0; u < o.length; u++) -1 !== c ? "/" === o[u] && (i.push(o.slice(c, u + 1)), c = -1) : "." === o[u] ? "." !== o[u + 1] || "/" !== o[u + 2] && u + 2 !== o.length ? "/" === o[u + 1] || u + 1 === o.length ? u += 1 : c = u : (i.pop(), u += 2) : c = u;
                return -1 !== c && i.push(o.slice(c)), r.slice(0, r.length - e.length) + i.join("")
            }
        }

        function n(t, r) {
            return e(t, r) || (-1 !== t.indexOf(":") ? t : e("./" + t, r))
        }

        function o(t, r, n, o, i) {
            for (var c in t) {
                var u = e(c, n) || c, s = t[c];
                if ("string" == typeof s) {
                    var l = f(o, e(s, n) || s, i);
                    l ? r[u] = l : a("W1", c, s)
                }
            }
        }

        function i(t, r, e) {
            var i;
            for (i in t.imports && o(t.imports, e.imports, r, e, null), t.scopes || {}) {
                var c = n(i, r);
                o(t.scopes[i], e.scopes[c] || (e.scopes[c] = {}), r, e, c)
            }
            for (i in t.depcache || {}) e.depcache[n(i, r)] = t.depcache[i];
            for (i in t.integrity || {}) e.integrity[n(i, r)] = t.integrity[i]
        }

        function c(t, r) {
            if (r[t]) return t;
            var e = t.length;
            do {
                var n = t.slice(0, e + 1);
                if (n in r) return n
            } while (-1 !== (e = t.lastIndexOf("/", e - 1)))
        }

        function u(t, r) {
            var e = c(t, r);
            if (e) {
                var n = r[e];
                if (null === n) return;
                if (!(t.length > e.length && "/" !== n[n.length - 1])) return n + t.slice(e.length);
                a("W2", e, n)
            }
        }

        function a(t, e, n) {
            console.warn(r(t, [n, e].join(", ")))
        }

        function f(t, r, e) {
            for (var n = t.scopes, o = e && c(e, n); o;) {
                var i = u(r, n[o]);
                if (i) return i;
                o = c(o.slice(0, o.lastIndexOf("/")), n)
            }
            return u(r, t.imports) || -1 !== r.indexOf(":") && r
        }

        function s() {
            this[R] = {}
        }

        function l(t, e, n) {
            var o = t[R][e];
            if (o) return o;
            var i = [], c = Object.create(null);
            S && Object.defineProperty(c, S, {value: "Module"});
            var u = Promise.resolve().then((function () {
                return t.instantiate(e, n)
            })).then((function (n) {
                if (!n) throw Error(r(2, e));
                var u = n[1]((function (t, r) {
                    o.h = !0;
                    var e = !1;
                    if ("string" == typeof t) t in c && c[t] === r || (c[t] = r, e = !0); else {
                        for (var n in t) r = t[n], n in c && c[n] === r || (c[n] = r, e = !0);
                        t && t.__esModule && (c.__esModule = t.__esModule)
                    }
                    if (e) for (var u = 0; u < i.length; u++) {
                        var a = i[u];
                        a && a(c)
                    }
                    return r
                }), 2 === n[1].length ? {
                    import: function (r) {
                        return t.import(r, e)
                    }, meta: t.createContext(e)
                } : void 0);
                return o.e = u.execute || function () {
                }, [n[0], u.setters || []]
            }), (function (t) {
                throw o.e = null, o.er = t, t
            })), a = u.then((function (r) {
                return Promise.all(r[0].map((function (n, o) {
                    var i = r[1][o];
                    return Promise.resolve(t.resolve(n, e)).then((function (r) {
                        var n = l(t, r, e);
                        return Promise.resolve(n.I).then((function () {
                            return i && (n.i.push(i), !n.h && n.I || i(n.n)), n
                        }))
                    }))
                }))).then((function (t) {
                    o.d = t
                }))
            }));
            return o = t[R][e] = {
                id: e,
                i: i,
                n: c,
                I: u,
                L: a,
                h: !1,
                d: void 0,
                e: void 0,
                er: void 0,
                E: void 0,
                C: void 0,
                p: void 0
            }
        }

        function p(t, r, e, n) {
            if (!n[r.id]) return n[r.id] = !0, Promise.resolve(r.L).then((function () {
                return r.p && null !== r.p.e || (r.p = e), Promise.all(r.d.map((function (r) {
                    return p(t, r, e, n)
                })))
            })).catch((function (t) {
                if (r.er) throw t;
                throw r.e = null, t
            }))
        }

        function y(t, r) {
            return r.C = p(t, r, r, {}).then((function () {
                return d(t, r, {})
            })).then((function () {
                return r.n
            }))
        }

        function d(t, r, e) {
            function n() {
                try {
                    var t = i.call(_);
                    if (t) return t = t.then((function () {
                        r.C = r.n, r.E = null
                    }), (function (t) {
                        throw r.er = t, r.E = null, t
                    })), r.E = t;
                    r.C = r.n, r.L = r.I = void 0
                } catch (e) {
                    throw r.er = e, e
                }
            }

            if (!e[r.id]) {
                if (e[r.id] = !0, !r.e) {
                    if (r.er) throw r.er;
                    return r.E ? r.E : void 0
                }
                var o, i = r.e;
                return r.e = null, r.d.forEach((function (n) {
                    try {
                        var i = d(t, n, e);
                        i && (o = o || []).push(i)
                    } catch (u) {
                        throw r.er = u, u
                    }
                })), o ? Promise.all(o).then(n) : n()
            }
        }

        function h() {
            [].forEach.call(document.querySelectorAll("script"), (function (t) {
                if (!t.sp) if ("systemjs-module" === t.type) {
                    if (t.sp = !0, !t.src) return;
                    System.import("import:" === t.src.slice(0, 7) ? t.src.slice(7) : n(t.src, v)).catch((function (r) {
                        if (r.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3") > -1) {
                            var e = document.createEvent("Event");
                            e.initEvent("error", !1, !1), t.dispatchEvent(e)
                        }
                        return Promise.reject(r)
                    }))
                } else if ("systemjs-importmap" === t.type) {
                    t.sp = !0;
                    var e = t.src ? (System.fetch || fetch)(t.src, {
                        integrity: t.integrity,
                        passThrough: !0
                    }).then((function (t) {
                        if (!t.ok) throw Error(t.status);
                        return t.text()
                    })).catch((function (e) {
                        return e.message = r("W4", t.src) + "\n" + e.message, console.warn(e), "function" == typeof t.onerror && t.onerror(), "{}"
                    })) : t.innerHTML;
                    x = x.then((function () {
                        return e
                    })).then((function (e) {
                        !function (t, e, n) {
                            var o = {};
                            try {
                                o = JSON.parse(e)
                            } catch (u) {
                                console.warn(Error(r("W5")))
                            }
                            i(o, n, t)
                        }(C, e, t.src || v)
                    }))
                }
            }))
        }

        var v, g = "undefined" != typeof Symbol, m = "undefined" != typeof self, E = "undefined" != typeof document,
            b = m ? self : t;
        if (E) {
            var O = document.querySelector("base[href]");
            O && (v = O.href)
        }
        if (!v && "undefined" != typeof location) {
            var w = (v = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
            -1 !== w && (v = v.slice(0, w + 1))
        }
        var A, T = /\\/g, S = g && Symbol.toStringTag, R = g ? Symbol() : "@", I = s.prototype;
        I.import = function (t, r) {
            var e = this;
            return Promise.resolve(e.prepareImport()).then((function () {
                return e.resolve(t, r)
            })).then((function (t) {
                var r = l(e, t);
                return r.C || y(e, r)
            }))
        }, I.createContext = function (t) {
            var r = this;
            return {
                url: t, resolve: function (e, n) {
                    return Promise.resolve(r.resolve(e, n || t))
                }
            }
        }, I.register = function (t, r) {
            A = [t, r]
        }, I.getRegister = function () {
            var t = A;
            return A = void 0, t
        };
        var _ = Object.freeze(Object.create(null));
        b.System = new s;
        var j, P, x = Promise.resolve(), C = {imports: {}, scopes: {}, depcache: {}, integrity: {}}, M = E;
        if (I.prepareImport = function (t) {
            return (M || t) && (h(), M = !1), x
        }, E && (h(), window.addEventListener("DOMContentLoaded", h)), I.addImportMap = function (t, r) {
            i(t, r || v, C)
        }, E) {
            window.addEventListener("error", (function (t) {
                L = t.filename, N = t.error
            }));
            var D = location.origin
        }
        I.createScript = function (t) {
            var r = document.createElement("script");
            r.async = !0, t.indexOf(D + "/") && (r.crossOrigin = "anonymous");
            var e = C.integrity[t];
            return e && (r.integrity = e), r.src = t, r
        };
        var L, N, k = {}, F = I.register;
        I.register = function (t, r) {
            if (E && "loading" === document.readyState && "string" != typeof t) {
                var e = document.querySelectorAll("script[src]"), n = e[e.length - 1];
                if (n) {
                    j = t;
                    var o = this;
                    P = setTimeout((function () {
                        k[n.src] = [t, r], o.import(n.src)
                    }))
                }
            } else j = void 0;
            return F.call(this, t, r)
        }, I.instantiate = function (t, e) {
            var n = k[t];
            if (n) return delete k[t], n;
            var o = this;
            return Promise.resolve(I.createScript(t)).then((function (n) {
                return new Promise((function (i, c) {
                    n.addEventListener("error", (function () {
                        c(Error(r(3, [t, e].join(", "))))
                    })), n.addEventListener("load", (function () {
                        if (document.head.removeChild(n), L === t) c(N); else {
                            var r = o.getRegister(t);
                            r && r[0] === j && clearTimeout(P), i(r)
                        }
                    })), document.head.appendChild(n)
                }))
            }))
        }, I.shouldFetch = function () {
            return !1
        }, "undefined" != typeof fetch && (I.fetch = fetch);
        var U = I.instantiate, W = /^(text|application)\/(x-)?javascript(;|$)/;
        I.instantiate = function (t, e) {
            var n = this;
            return this.shouldFetch(t) ? this.fetch(t, {
                credentials: "same-origin",
                integrity: C.integrity[t]
            }).then((function (o) {
                if (!o.ok) throw Error(r(7, [o.status, o.statusText, t, e].join(", ")));
                var i = o.headers.get("content-type");
                if (!i || !W.test(i)) throw Error(r(4, i));
                return o.text().then((function (r) {
                    return r.indexOf("//# sourceURL=") < 0 && (r += "\n//# sourceURL=" + t), (0, eval)(r), n.getRegister(t)
                }))
            })) : U.apply(this, arguments)
        }, I.resolve = function (t, n) {
            return f(C, e(t, n = n || v) || t, n) || function (t, e) {
                throw Error(r(8, [t, e].join(", ")))
            }(t, n)
        };
        var B = I.instantiate;
        I.instantiate = function (t, r) {
            var e = C.depcache[t];
            if (e) for (var n = 0; n < e.length; n++) l(this, this.resolve(e[n], t), t);
            return B.call(this, t, r)
        }, m && "function" == typeof importScripts && (I.instantiate = function (t) {
            var r = this;
            return Promise.resolve().then((function () {
                return importScripts(t), r.getRegister(t)
            }))
        })
    }()
}();
