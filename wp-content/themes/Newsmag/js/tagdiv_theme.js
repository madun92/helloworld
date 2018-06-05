/*
 Magnific Popup - v0.9.9 - 2013-12-27
 http://dimsemenov.com/plugins/magnific-popup/
 Copyright (c) 2013 Dmitry Semenov; */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b + c :
            d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b /
            e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) *
            b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0,
            l = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        f || (f = .3 * e);
        l < Math.abs(d) ? (l = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / l);
        return -(l * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0,
            l = d;
        if (0 == b) return c;
        if (1 == (b /=
                e)) return c + d;
        f || (f = .3 * e);
        l < Math.abs(d) ? (l = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / l);
        return l * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - a) * Math.PI / f) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0,
            l = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        f || (f = .3 * e * 1.5);
        l < Math.abs(d) ? (l = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / l);
        return 1 > b ? -.5 * l * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) + c : .5 * l * Math.pow(2, -10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        void 0 == f && (f = 1.70158);
        return d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        void 0 == f && (f = 1.70158);
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (b /= e / 2) ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -=
            2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
});
(function(a) {
    a.fn.supersubs = function(b) {
        var c = a.extend({}, a.fn.supersubs.defaults, b);
        return this.each(function() {
            var b = a(this),
                e = a.meta ? a.extend({}, c, b.data()) : c,
                f = b.find("ul").show(),
                l = a('<li id="menu-fontsize">&#8212;</li>').css({
                    padding: 0,
                    position: "absolute",
                    top: "-999em",
                    width: "auto"
                }).appendTo(b)[0].clientWidth;
            a("#menu-fontsize").remove();
            f.each(function(b) {
                b = a(this);
                var c = b.children(),
                    d = c.children("a"),
                    f = c.css("white-space", "nowrap").css("float");
                b.add(c).add(d).css({
                    "float": "none",
                    width: "auto"
                });
                d = b[0].clientWidth / l;
                d += e.extraWidth;
                d > e.maxWidth ? d = e.maxWidth : d < e.minWidth && (d = e.minWidth);
                b.css("width", d + "em");
                c.css({
                    "float": f,
                    width: "100%",
                    "white-space": "normal"
                }).each(function() {
                    var b = a(this).children("ul"),
                        c = void 0 !== b.css("left") ? "left" : "right";
                    b.css(c, "100%")
                })
            }).hide()
        })
    };
    a.fn.supersubs.defaults = {
        minWidth: 9,
        maxWidth: 25,
        extraWidth: 0
    }
})(jQuery);
(function(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
        l = "onorientationchange" in window,
        g = !1,
        p = !1,
        w = !1,
        P = !1,
        y = !1,
        B = "pointer",
        R = "pointer",
        Y = [],
        V = [],
        na = [],
        X = [],
        C = [],
        ba = [],
        D = [],
        r = [],
        z = [],
        ca = [],
        ia = [],
        m = {
            showScrollbar: function(b, c) {
                b.scrollbarHide && a("." + c).css({
                    opacity: b.scrollbarOpacity,
                    filter: "alpha(opacity:" + 100 * b.scrollbarOpacity + ")"
                })
            },
            hideScrollbar: function(a, b, c, d, e, f, g, l, p, w) {
                if (a.scrollbar && a.scrollbarHide)
                    for (var k = c; k < c + 25; k++) b[b.length] = m.hideScrollbarIntervalTimer(10 *
                        k, d[c], (c + 24 - k) / 24, e, f, g, l, p, w, a)
            },
            hideScrollbarInterval: function(b, c, k, d, f, h, g, l, p) {
                e = -1 * b / z[l] * (f - h - g - d);
                m.setSliderOffset("." + k, e);
                a("." + k).css({
                    opacity: p.scrollbarOpacity * c,
                    filter: "alpha(opacity:" + p.scrollbarOpacity * c * 100 + ")"
                })
            },
            slowScrollHorizontalInterval: function(b, c, k, d, f, h, g, l, p, w, H, M, O, u, A, t, y, q, F) {
                if (F.infiniteSlider) {
                    if (k <= -1 * z[t] || k <= -1 * ca[t]) {
                        var v = a(b).width();
                        if (k <= -1 * ca[t]) {
                            var E = -1 * H[0];
                            a(c).each(function(b) {
                                m.setSliderOffset(a(c)[b], E + y);
                                b < M.length && (M[b] = -1 * E);
                                E += A[b]
                            });
                            k += -1 *
                                M[0];
                            r[t] = -1 * M[0] + y;
                            z[t] = r[t] + v - h;
                            D[t] = 0
                        }
                        for (; k <= -1 * z[t];) {
                            var n = 0,
                                G = m.getSliderOffset(a(c[0]), "x");
                            a(c).each(function(a) {
                                m.getSliderOffset(this, "x") < G && (G = m.getSliderOffset(this, "x"), n = a)
                            });
                            O = r[t] + v;
                            m.setSliderOffset(a(c)[n], O);
                            r[t] = -1 * M[1] + y;
                            z[t] = r[t] + v - h;
                            M.splice(0, 1);
                            M.splice(M.length, 0, -1 * O + y);
                            D[t]++
                        }
                    }
                    if (k >= -1 * r[t] || 0 <= k) {
                        v = a(b).width();
                        if (0 < k)
                            for (E = -1 * H[0], a(c).each(function(b) {
                                    m.setSliderOffset(a(c)[b], E + y);
                                    b < M.length && (M[b] = -1 * E);
                                    E += A[b]
                                }), k -= -1 * M[0], r[t] = -1 * M[0] + y, z[t] = r[t] + v - h, D[t] = u; 0 <
                                -1 * M[0] - v + y;) {
                                var L = 0;
                                var Q = m.getSliderOffset(a(c[0]), "x");
                                a(c).each(function(a) {
                                    m.getSliderOffset(this, "x") > Q && (Q = m.getSliderOffset(this, "x"), L = a)
                                });
                                O = r[t] - A[L];
                                m.setSliderOffset(a(c)[L], O);
                                M.splice(0, 0, -1 * O + y);
                                M.splice(M.length - 1, 1);
                                r[t] = -1 * M[0] + y;
                                z[t] = r[t] + v - h;
                                D[t]--;
                                C[t]++
                            }
                        for (; k > -1 * r[t];) L = 0, Q = m.getSliderOffset(a(c[0]), "x"), a(c).each(function(a) {
                            m.getSliderOffset(this, "x") > Q && (Q = m.getSliderOffset(this, "x"), L = a)
                        }), O = r[t] - A[L], m.setSliderOffset(a(c)[L], O), M.splice(0, 0, -1 * O + y), M.splice(M.length -
                            1, 1), r[t] = -1 * M[0] + y, z[t] = r[t] + v - h, D[t]--
                    }
                }
                H = !1;
                h = m.calcActiveOffset(F, k, M, h, D[t], u, w, t);
                O = (h + D[t] + u) % u;
                F.infiniteSlider ? O != ba[t] && (H = !0) : h != C[t] && (H = !0);
                if (H && (u = new m.args("change", F, b, a(b).children(":eq(" + O + ")"), O, q), a(b).parent().data("args", u), "" != F.onSlideChange)) F.onSlideChange(u);
                C[t] = h;
                ba[t] = O;
                k = Math.floor(k);
                if (t != a(b).parent().data("args").data.sliderNumber) return !0;
                m.setSliderOffset(b, k);
                F.scrollbar && (e = Math.floor((-1 * k - r[t] + y) / (z[t] - r[t] + y) * (g - l - f)), b = f - p, k >= -1 * r[t] + y ? (b = f - p - -1 * e, m.setSliderOffset(a("." +
                    d), 0)) : (k <= -1 * z[t] + 1 && (b = g - l - p - e), m.setSliderOffset(a("." + d), e)), a("." + d).css({
                    width: b + "px"
                }))
            },
            slowScrollHorizontal: function(b, c, k, d, e, f, g, l, p, w, y, M, O, u, A, t, B, q, F, J, S) {
                var v, h = m.getSliderOffset(b, "x");
                f = [];
                var E = 0,
                    n = 25 / 1024 * l;
                frictionCoefficient = S.frictionCoefficient;
                elasticFrictionCoefficient = S.elasticFrictionCoefficient;
                snapFrictionCoefficient = S.snapFrictionCoefficient;
                e > S.snapVelocityThreshold && S.snapToChildren && !F ? E = 1 : e < -1 * S.snapVelocityThreshold && S.snapToChildren && !F && (E = -1);
                e < -1 * n ? e = -1 * n : e >
                    n && (e = n);
                a(b)[0] !== a(q)[0] && (E *= -1, e *= -2);
                q = D[A];
                if (S.infiniteSlider) {
                    var G = r[A];
                    var L = z[A]
                }
                F = [];
                n = [];
                for (v = 0; v < O.length; v++) F[v] = O[v], v < c.length && (n[v] = m.getSliderOffset(a(c[v]), "x"));
                for (; 1 < e || -1 > e;) {
                    e *= frictionCoefficient;
                    h += e;
                    (h > -1 * r[A] || h < -1 * z[A]) && !S.infiniteSlider && (e *= elasticFrictionCoefficient, h += e);
                    if (S.infiniteSlider) {
                        if (h <= -1 * L) {
                            L = a(b).width();
                            var H = 0,
                                Q = n[0];
                            for (v = 0; v < n.length; v++) n[v] < Q && (Q = n[v], H = v);
                            v = G + L;
                            n[H] = v;
                            G = -1 * F[1] + J;
                            L = G + L - l;
                            F.splice(0, 1);
                            F.splice(F.length, 0, -1 * v + J);
                            q++
                        }
                        if (h >=
                            -1 * G) {
                            L = a(b).width();
                            H = 0;
                            Q = n[0];
                            for (v = 0; v < n.length; v++) n[v] > Q && (Q = n[v], H = v);
                            v = G - u[H];
                            n[H] = v;
                            F.splice(0, 0, -1 * v + J);
                            F.splice(F.length - 1, 1);
                            G = -1 * F[0] + J;
                            L = G + L - l;
                            q--
                        }
                    }
                    f[f.length] = h
                }
                n = !1;
                e = m.calcActiveOffset(S, h, F, l, q, B, C[A], A);
                G = (e + q + B) % B;
                S.snapToChildren && (S.infiniteSlider ? G != ba[A] && (n = !0) : e != C[A] && (n = !0), 0 > E && !n ? (e++, e >= O.length && !S.infiniteSlider && (e = O.length - 1)) : 0 < E && !n && (e--, 0 > e && !S.infiniteSlider && (e = 0)));
                if (S.snapToChildren || (h > -1 * r[A] || h < -1 * z[A]) && !S.infiniteSlider) {
                    (h > -1 * r[A] || h < -1 * z[A]) && !S.infiniteSlider ?
                        f.splice(0, f.length) : (f.splice(.1 * f.length, f.length), h = 0 < f.length ? f[f.length - 1] : h);
                    for (; h < F[e] - .5 || h > F[e] + .5;) h = (h - F[e]) * snapFrictionCoefficient + F[e], f[f.length] = h;
                    f[f.length] = F[e]
                }
                E = 1;
                0 != f.length % 2 && (E = 0);
                for (h = 0; h < k.length; h++) clearTimeout(k[h]);
                q = (e + q + B) % B;
                G = 0;
                for (h = E; h < f.length; h += 2)
                    if (h == E || 1 < Math.abs(f[h] - G) || h >= f.length - 2) G = f[h], k[k.length] = m.slowScrollHorizontalIntervalTimer(10 * h, b, c, f[h], d, g, l, p, w, y, e, M, O, t, B, u, A, J, q, S);
                G = (e + D[A] + B) % B;
                "" != S.onSlideComplete && 1 < f.length && (k[k.length] = m.onSlideCompleteTimer(10 *
                    (h + 1), S, b, a(b).children(":eq(" + G + ")"), q, A));
                k[k.length] = m.updateBackfaceVisibilityTimer(10 * (h + 1), c, A, B, S);
                X[A] = k;
                m.hideScrollbar(S, k, h, f, d, g, l, w, y, A)
            },
            onSlideComplete: function(b, c, k, d, e) {
                k = new m.args("complete", b, a(c), k, d, d);
                a(c).parent().data("args", k);
                if ("" != b.onSlideComplete) b.onSlideComplete(k)
            },
            getSliderOffset: function(b, c) {
                c = "x" == c ? 4 : 5;
                if (!g || p || w) var k = parseInt(a(b).css("left"), 10);
                else {
                    k = ["-webkit-transform", "-moz-transform", "transform"];
                    for (var d, e = 0; e < k.length; e++)
                        if (void 0 != a(b).css(k[e]) &&
                            0 < a(b).css(k[e]).length) {
                            d = a(b).css(k[e]).split(",");
                            break
                        }
                    k = void 0 == d[c] ? 0 : parseInt(d[c], 10)
                }
                return k
            },
            setSliderOffset: function(b, c) {
                c = parseInt(c, 10);
                !g || p || w ? a(b).css({
                    left: c + "px"
                }) : a(b).css({
                    msTransform: "matrix(1,0,0,1," + c + ",0)",
                    webkitTransform: "matrix(1,0,0,1," + c + ",0)",
                    MozTransform: "matrix(1,0,0,1," + c + ",0)",
                    transform: "matrix(1,0,0,1," + c + ",0)"
                })
            },
            setBrowserInfo: function() {
                null != navigator.userAgent.match("WebKit") ? (B = "-webkit-grab", R = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ?
                    (y = !0, B = "move", R = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? P = p = !0 : null != navigator.userAgent.match("MSIE 8") ? P = w = !0 : null != navigator.userAgent.match("MSIE 9") && (P = !0)
            },
            has3DTransform: function() {
                var b = !1,
                    c = a("<div />").css({
                        msTransform: "matrix(1,1,1,1,1,1)",
                        webkitTransform: "matrix(1,1,1,1,1,1)",
                        MozTransform: "matrix(1,1,1,1,1,1)",
                        transform: "matrix(1,1,1,1,1,1)"
                    });
                "" == c.attr("style") ? b = !1 : y && 21 <= parseInt(navigator.userAgent.split("/")[3], 10) ? b = !1 : void 0 != c.attr("style") && (b = !0);
                return b
            },
            getSlideNumber: function(a, b, c) {
                return (a - D[b] + c) % c
            },
            calcActiveOffset: function(a, b, c, d, e, f, g, l) {
                e = !1;
                a = [];
                var k;
                b > c[0] && (k = 0);
                b < c[c.length - 1] && (k = f - 1);
                for (f = 0; f < c.length; f++) c[f] <= b && c[f] > b - d && (e || c[f] == b || (a[a.length] = c[f - 1]), a[a.length] = c[f], e = !0);
                0 == a.length && (a[0] = c[c.length - 1]);
                for (f = e = 0; f < a.length; f++) g = Math.abs(b - a[f]), g < d && (e = a[f], d = g);
                for (f = 0; f < c.length; f++) e == c[f] && (k = f);
                return k
            },
            changeSlide: function(b, c, k, d, e, f, g, l, p, w, y, r, B, u, A, t, z, q) {
                m.autoSlidePause(u);
                for (var h = 0; h < d.length; h++) clearTimeout(d[h]);
                var v = Math.ceil(q.autoSlideTransTimer / 10) + 1,
                    E = m.getSliderOffset(c, "x"),
                    n = r[b],
                    n = n - E,
                    G = b - (C[u] + D[u] + t) % t;
                if (q.infiniteSlider) {
                    b = (b - D[u] + 2 * t) % t;
                    h = !1;
                    0 == b && 2 == t && (b = t, r[b] = r[b - 1] - a(k).eq(0).outerWidth(!0), h = !0);
                    var n = r[b],
                        n = n - E,
                        L = [r[b] - a(c).width(), r[b] + a(c).width()];
                    h && r.splice(r.length - 1, 1);
                    for (h = 0; h < L.length; h++) Math.abs(L[h] - E) < Math.abs(n) && (n = L[h] - E)
                }
                0 > n && -1 == G ? n += a(c).width() : 0 < n && 1 == G && (n -= a(c).width());
                G = [];
                m.showScrollbar(q, e);
                for (h = 0; h <= v; h++) L = h, L /= v, L--, L = E + n * (Math.pow(L, 5) + 1), G[G.length] =
                    L;
                v = (b + D[u] + t) % t;
                for (h = E = 0; h < G.length; h++) {
                    if (0 == h || 1 < Math.abs(G[h] - E) || h >= G.length - 2) E = G[h], d[h] = m.slowScrollHorizontalIntervalTimer(10 * (h + 1), c, k, G[h], e, f, g, l, p, w, b, y, r, A, t, B, u, z, v, q);
                    0 == h && "" != q.onSlideStart && (n = (C[u] + D[u] + t) % t, q.onSlideStart(new m.args("start", q, c, a(c).children(":eq(" + n + ")"), n, b)))
                }
                E = !1;
                q.infiniteSlider ? v != ba[u] && (E = !0) : b != C[u] && (E = !0);
                E && "" != q.onSlideComplete && (d[d.length] = m.onSlideCompleteTimer(10 * (h + 1), q, c, a(c).children(":eq(" + v + ")"), v, u));
                X[u] = d;
                m.hideScrollbar(q, d, h, G, e, f,
                    g, p, w, u);
                m.autoSlide(c, k, d, e, f, g, l, p, w, y, r, B, u, A, t, z, q)
            },
            changeOffset: function(b, c, k, d, e, f, g, l, p, w, y, B, O, u, A, t, P, q) {
                m.autoSlidePause(u);
                for (var h = 0; h < d.length; h++) clearTimeout(d[h]);
                q.infiniteSlider || (b = b > -1 * r[u] + P ? -1 * r[u] + P : b, b = b < -1 * z[u] ? -1 * z[u] : b);
                var v = Math.ceil(q.autoSlideTransTimer / 10) + 1;
                var E = m.getSliderOffset(c, "x"),
                    h = (m.calcActiveOffset(q, b, B, g, D, t, C[u], u) + D[u] + t) % t,
                    n = B.slice();
                if (q.snapToChildren && !q.infiniteSlider) b = B[h];
                else if (q.infiniteSlider && q.snapToChildren) {
                    for (; b >= n[0];) n.splice(0,
                        0, n[t - 1] + a(c).width()), n.splice(t, 1);
                    for (; b <= n[t - 1];) n.splice(t, 0, n[0] - a(c).width()), n.splice(0, 1);
                    h = m.calcActiveOffset(q, b, n, g, D, t, C[u], u);
                    b = n[h]
                }
                var G = b - E;
                b = [];
                m.showScrollbar(q, e);
                for (n = 0; n <= v; n++) {
                    var L = n;
                    L /= v;
                    L--;
                    L = E + G * (Math.pow(L, 5) + 1);
                    b[b.length] = L
                }
                v = (h + D[u] + t) % t;
                for (n = E = 0; n < b.length; n++) {
                    if (0 == n || 1 < Math.abs(b[n] - E) || n >= b.length - 2) E = b[n], d[n] = m.slowScrollHorizontalIntervalTimer(10 * (n + 1), c, k, b[n], e, f, g, l, p, w, h, y, B, A, t, O, u, P, v, q);
                    0 == n && "" != q.onSlideStart && (v = (C[u] + D[u] + t) % t, q.onSlideStart(new m.args("start",
                        q, c, a(c).children(":eq(" + v + ")"), v, h)))
                }
                E = !1;
                q.infiniteSlider ? v != ba[u] && (E = !0) : h != C[u] && (E = !0);
                E && "" != q.onSlideComplete && (d[d.length] = m.onSlideCompleteTimer(10 * (n + 1), q, c, a(c).children(":eq(" + v + ")"), v, u));
                X[u] = d;
                m.hideScrollbar(q, d, n, b, e, f, g, p, w, u);
                m.autoSlide(c, k, d, e, f, g, l, p, w, y, B, O, u, A, t, P, q)
            },
            autoSlide: function(a, b, c, d, e, f, g, l, p, w, r, y, B, u, A, t, z) {
                if (!V[B].autoSlide) return !1;
                m.autoSlidePause(B);
                Y[B] = setTimeout(function() {
                    !z.infiniteSlider && C[B] > r.length - 1 && (C[B] -= A);
                    m.changeSlide(C[B] + D[B] + 1, a, b, c,
                        d, e, f, g, l, p, w, r, y, B, u, A, t, z);
                    m.autoSlide(a, b, c, d, e, f, g, l, p, w, r, y, B, u, A, t, z)
                }, z.autoSlideTimer + z.autoSlideTransTimer)
            },
            autoSlidePause: function(a) {
                clearTimeout(Y[a])
            },
            isUnselectable: function(b, c) {
                return "" != c.unselectableSelector && 1 == a(b).closest(c.unselectableSelector).length ? !0 : !1
            },
            slowScrollHorizontalIntervalTimer: function(a, b, c, d, e, f, g, l, p, w, r, B, y, u, A, t, z, q, P, R) {
                return setTimeout(function() {
                    m.slowScrollHorizontalInterval(b, c, d, e, f, g, l, p, w, r, B, y, u, A, t, z, q, P, R)
                }, a)
            },
            onSlideCompleteTimer: function(a,
                b, c, d, e, f) {
                return setTimeout(function() {
                    m.onSlideComplete(b, c, d, e, f)
                }, a)
            },
            hideScrollbarIntervalTimer: function(a, b, c, d, e, f, g, l, p, w) {
                return setTimeout(function() {
                    m.hideScrollbarInterval(b, c, d, e, f, g, l, p, w)
                }, a)
            },
            updateBackfaceVisibilityTimer: function(a, b, c, d, e) {
                return setTimeout(function() {
                    m.updateBackfaceVisibility(b, c, d, e)
                }, a)
            },
            updateBackfaceVisibility: function(b, c, k, d) {
                c = (C[c] + D[c] + k) % k;
                for (var e = [], f = 0; f < 2 * d.hardwareAccelBuffer; f++) {
                    var g = m.mod(c + f - d.hardwareAccelBuffer, k);
                    if ("visible" == a(b).eq(g).css("-webkit-backface-visibility")) {
                        e[e.length] =
                            g;
                        var v = m.mod(g + 2 * d.hardwareAccelBuffer, k),
                            l = m.mod(g - 2 * d.hardwareAccelBuffer, k);
                        a(b).eq(g).css("-webkit-backface-visibility", "hidden"); - 1 == e.indexOf(l) && a(b).eq(l).css("-webkit-backface-visibility", ""); - 1 == e.indexOf(v) && a(b).eq(v).css("-webkit-backface-visibility", "")
                    }
                }
            },
            mod: function(a, b) {
                var c = a % b;
                return 0 > c ? c + b : c
            },
            args: function(b, c, k, d, e, f) {
                this.prevSlideNumber = void 0 == a(k).parent().data("args") ? void 0 : a(k).parent().data("args").prevSlideNumber;
                this.prevSlideObject = void 0 == a(k).parent().data("args") ?
                    void 0 : a(k).parent().data("args").prevSlideObject;
                this.targetSlideNumber = f + 1;
                this.targetSlideObject = a(k).children(":eq(" + f + ")");
                this.slideChanged = !1;
                "load" == b ? this.targetSlideObject = this.targetSlideNumber = void 0 : "start" == b ? this.targetSlideObject = this.targetSlideNumber = void 0 : "change" == b ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == a(k).parent().data("args") ? c.startAtSlide : a(k).parent().data("args").currentSlideNumber, this.prevSlideObject = a(k).children(":eq(" + this.prevSlideNumber + ")")) : "complete" ==
                    b && (this.slideChanged = a(k).parent().data("args").slideChanged);
                this.settings = c;
                this.data = a(k).parent().data("iosslider");
                this.sliderObject = k;
                this.sliderContainerObject = a(k).parent();
                this.currentSlideObject = d;
                this.currentSlideNumber = e + 1;
                this.currentSliderOffset = -1 * m.getSliderOffset(k, "x")
            },
            preventDrag: function(a) {
                a.preventDefault()
            },
            preventClick: function(a) {
                a.stopImmediatePropagation();
                return !1
            },
            enableClick: function() {
                return !0
            }
        };
    m.setBrowserInfo();
    var da = {
        init: function(n, G) {
            g = m.has3DTransform();
            var k =
                a.extend(!0, {
                    elasticPullResistance: .6,
                    frictionCoefficient: .92,
                    elasticFrictionCoefficient: .6,
                    snapFrictionCoefficient: .92,
                    snapToChildren: !1,
                    snapSlideCenter: !1,
                    startAtSlide: 1,
                    scrollbar: !1,
                    scrollbarDrag: !1,
                    scrollbarHide: !0,
                    scrollbarPaging: !1,
                    scrollbarLocation: "top",
                    scrollbarContainer: "",
                    scrollbarOpacity: .4,
                    scrollbarHeight: "4px",
                    scrollbarBorder: "0",
                    scrollbarMargin: "5px",
                    scrollbarBackground: "#000",
                    scrollbarBorderRadius: "100px",
                    scrollbarShadow: "0 0 0 #000",
                    scrollbarElasticPullResistance: .9,
                    desktopClickDrag: !1,
                    keyboardControls: !1,
                    tabToAdvance: !1,
                    responsiveSlideContainer: !0,
                    responsiveSlides: !0,
                    navSlideSelector: "",
                    navPrevSelector: "",
                    navNextSelector: "",
                    autoSlideToggleSelector: "",
                    autoSlide: !1,
                    autoSlideTimer: 5E3,
                    autoSlideTransTimer: 750,
                    autoSlideHoverPause: !0,
                    infiniteSlider: !1,
                    snapVelocityThreshold: 5,
                    slideStartVelocityThreshold: 0,
                    horizontalSlideLockThreshold: 5,
                    verticalSlideLockThreshold: 3,
                    hardwareAccelBuffer: 5,
                    stageCSS: {
                        position: "relative",
                        top: "0",
                        left: "0",
                        overflow: "hidden",
                        zIndex: 1
                    },
                    unselectableSelector: "",
                    onSliderLoaded: "",
                    onSliderUpdate: "",
                    onSliderResize: "",
                    onSlideStart: "",
                    onSlideChange: "",
                    onSlideComplete: ""
                }, n);
            void 0 == G && (G = this);
            return a(G).each(function(g) {
                function v() {
                    var b;
                    m.autoSlidePause(h);
                    xa = a(K).find("a");
                    Ca = a(K).find("[onclick]");
                    qa = a(K).find("*");
                    a(F).css("width", "");
                    a(F).css("height", "");
                    a(K).css("width", "");
                    I = a(K).children().not("script").get();
                    ma = [];
                    T = [];
                    k.responsiveSlides && a(I).css("width", "100%");
                    z[h] = 0;
                    x = [];
                    t = a(F).parent().width();
                    J = a(F).outerWidth(!0);
                    k.responsiveSlideContainer &&
                        (J = a(F).outerWidth(!0) > t ? t : a(F).width());
                    a(F).css({
                        position: k.stageCSS.position,
                        top: k.stageCSS.top,
                        left: k.stageCSS.left,
                        overflow: k.stageCSS.overflow,
                        zIndex: k.stageCSS.zIndex,
                        webkitPerspective: 1E3,
                        webkitBackfaceVisibility: "hidden",
                        msTouchAction: "pan-y",
                        width: J
                    });
                    a(k.unselectableSelector).css({
                        cursor: "default"
                    });
                    for (b = 0; b < I.length; b++) {
                        ma[b] = a(I[b]).width();
                        T[b] = a(I[b]).outerWidth(!0);
                        var c = T[b];
                        k.responsiveSlides && (T[b] > J ? (c = J + -1 * (T[b] - ma[b]), ma[b] = c, T[b] = J) : c = ma[b], a(I[b]).css({
                            width: c
                        }));
                        a(I[b]).css({
                            overflow: "hidden",
                            position: "absolute"
                        });
                        x[b] = -1 * z[h];
                        z[h] = z[h] + c + (T[b] - ma[b])
                    }
                    k.snapSlideCenter && (q = .5 * (J - T[0]), k.responsiveSlides && T[0] > J && (q = 0));
                    ca[h] = 2 * z[h];
                    for (b = 0; b < I.length; b++) m.setSliderOffset(a(I[b]), -1 * x[b] + z[h] + q), x[b] -= z[h];
                    if (!k.infiniteSlider && !k.snapSlideCenter) {
                        for (b = 0; b < x.length && !(x[b] <= -1 * (2 * z[h] - J)); b++) Da = b;
                        x.splice(Da + 1, x.length);
                        x[x.length] = -1 * (2 * z[h] - J)
                    }
                    for (b = 0; b < x.length; b++) Z[b] = x[b];
                    va && (V[h].startAtSlide = V[h].startAtSlide > x.length ? x.length : V[h].startAtSlide, k.infiniteSlider ? (V[h].startAtSlide =
                        (V[h].startAtSlide - 1 + N) % N, C[h] = V[h].startAtSlide) : (V[h].startAtSlide = 0 > V[h].startAtSlide - 1 ? x.length - 1 : V[h].startAtSlide, C[h] = V[h].startAtSlide - 1), ba[h] = C[h]);
                    r[h] = z[h] + q;
                    a(K).css({
                        position: "relative",
                        cursor: B,
                        webkitPerspective: "0",
                        webkitBackfaceVisibility: "hidden",
                        width: z[h] + "px"
                    });
                    fa = z[h];
                    z[h] = 2 * z[h] - J + 2 * q;
                    (ga = fa + q < J || 0 == J ? !0 : !1) && a(K).css({
                        cursor: "default"
                    });
                    Y = a(F).parent().outerHeight(!0);
                    S = a(F).height();
                    k.responsiveSlideContainer && (S = S > Y ? Y : S);
                    a(F).css({
                        height: S
                    });
                    m.setSliderOffset(K, x[C[h]]);
                    if (k.infiniteSlider && !ga) {
                        for (var c = m.getSliderOffset(a(K), "x"), d = (D[h] + N) % N * -1; 0 > d;) {
                            var e = 0;
                            var f = m.getSliderOffset(a(I[0]), "x");
                            a(I).each(function(a) {
                                m.getSliderOffset(this, "x") < f && (f = m.getSliderOffset(this, "x"), e = a)
                            });
                            b = r[h] + fa;
                            m.setSliderOffset(a(I)[e], b);
                            r[h] = -1 * x[1] + q;
                            z[h] = r[h] + fa - J;
                            x.splice(0, 1);
                            x.splice(x.length, 0, -1 * b + q);
                            d++
                        }
                        for (; 0 < -1 * x[0] - fa + q && k.snapSlideCenter && va;) {
                            var g = 0,
                                v = m.getSliderOffset(a(I[0]), "x");
                            a(I).each(function(a) {
                                m.getSliderOffset(this, "x") > v && (v = m.getSliderOffset(this,
                                    "x"), g = a)
                            });
                            b = r[h] - T[g];
                            m.setSliderOffset(a(I)[g], b);
                            x.splice(0, 0, -1 * b + q);
                            x.splice(x.length - 1, 1);
                            r[h] = -1 * x[0] + q;
                            z[h] = r[h] + fa - J;
                            D[h]--;
                            C[h]++
                        }
                        for (; c <= -1 * z[h];) e = 0, f = m.getSliderOffset(a(I[0]), "x"), a(I).each(function(a) {
                            m.getSliderOffset(this, "x") < f && (f = m.getSliderOffset(this, "x"), e = a)
                        }), b = r[h] + fa, m.setSliderOffset(a(I)[e], b), r[h] = -1 * x[1] + q, z[h] = r[h] + fa - J, x.splice(0, 1), x.splice(x.length, 0, -1 * b + q), D[h]++, C[h]--
                    }
                    m.setSliderOffset(K, x[C[h]]);
                    m.updateBackfaceVisibility(I, h, N, k);
                    k.desktopClickDrag || a(K).css({
                        cursor: "default"
                    });
                    k.scrollbar && (a("." + Q).css({
                            margin: k.scrollbarMargin,
                            overflow: "hidden",
                            display: "none"
                        }), a("." + Q + " ." + H).css({
                            border: k.scrollbarBorder
                        }), U = parseInt(a("." + Q).css("marginLeft")) + parseInt(a("." + Q).css("marginRight")), W = parseInt(a("." + Q + " ." + H).css("borderLeftWidth"), 10) + parseInt(a("." + Q + " ." + H).css("borderRightWidth"), 10), u = "" != k.scrollbarContainer ? a(k.scrollbarContainer).width() : J, A = J / fa * (u - U), k.scrollbarHide || (wa = k.scrollbarOpacity), a("." + Q).css({
                            position: "absolute",
                            left: 0,
                            width: u - U + "px",
                            margin: k.scrollbarMargin
                        }),
                        "top" == k.scrollbarLocation ? a("." + Q).css("top", "0") : a("." + Q).css("bottom", "0"), a("." + Q + " ." + H).css({
                            borderRadius: k.scrollbarBorderRadius,
                            background: k.scrollbarBackground,
                            height: k.scrollbarHeight,
                            width: A - W + "px",
                            minWidth: k.scrollbarHeight,
                            border: k.scrollbarBorder,
                            webkitPerspective: 1E3,
                            webkitBackfaceVisibility: "hidden",
                            position: "relative",
                            opacity: wa,
                            filter: "alpha(opacity:" + 100 * wa + ")",
                            boxShadow: k.scrollbarShadow
                        }), m.setSliderOffset(a("." + Q + " ." + H), Math.floor((-1 * x[C[h]] - r[h] + q) / (z[h] - r[h] + q) * (u - U - A))),
                        a("." + Q).css({
                            display: "block"
                        }), M = a("." + Q + " ." + H), O = a("." + Q));
                    k.scrollbarDrag && !ga && a("." + Q + " ." + H).css({
                        cursor: B
                    });
                    k.infiniteSlider && (aa = (z[h] + J) / 3);
                    "" != k.navSlideSelector && a(k.navSlideSelector).each(function(b) {
                        a(this).css({
                            cursor: "pointer"
                        });
                        a(this).unbind(ea).bind(ea, function(c) {
                            "touchstart" == c.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                            ea = c.type + ".iosSliderEvent";
                            m.changeSlide(b, K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                        })
                    });
                    "" != k.navPrevSelector && (a(k.navPrevSelector).css({
                            cursor: "pointer"
                        }),
                        a(k.navPrevSelector).unbind(ea).bind(ea, function(b) {
                            "touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                            ea = b.type + ".iosSliderEvent";
                            b = (C[h] + D[h] + N) % N;
                            (0 < b || k.infiniteSlider) && m.changeSlide(b - 1, K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                        }));
                    "" != k.navNextSelector && (a(k.navNextSelector).css({
                        cursor: "pointer"
                    }), a(k.navNextSelector).unbind(ea).bind(ea, function(b) {
                        "touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                        ea = b.type + ".iosSliderEvent";
                        b = (C[h] + D[h] + N) % N;
                        (b < x.length - 1 || k.infiniteSlider) && m.changeSlide(b + 1, K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                    }));
                    k.autoSlide && !ga && "" != k.autoSlideToggleSelector && (a(k.autoSlideToggleSelector).css({
                        cursor: "pointer"
                    }), a(k.autoSlideToggleSelector).unbind(ea).bind(ea, function(b) {
                        "touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                        ea = b.type + ".iosSliderEvent";
                        oa ? (m.autoSlide(K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k), oa = !1, a(k.autoSlideToggleSelector).removeClass("on")) :
                            (m.autoSlidePause(h), oa = !0, a(k.autoSlideToggleSelector).addClass("on"))
                    }));
                    m.autoSlide(K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k);
                    a(F).bind("mouseleave.iosSliderEvent", function() {
                        if (oa) return !0;
                        m.autoSlide(K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                    });
                    a(F).bind("touchend.iosSliderEvent", function() {
                        if (oa) return !0;
                        m.autoSlide(K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                    });
                    k.autoSlideHoverPause && a(F).bind("mouseenter.iosSliderEvent", function() {
                        m.autoSlidePause(h)
                    });
                    a(F).data("iosslider", {
                        obj: Ea,
                        settings: k,
                        scrollerNode: K,
                        slideNodes: I,
                        numberOfSlides: N,
                        centeredSlideOffset: q,
                        sliderNumber: h,
                        originalOffsets: Z,
                        childrenOffsets: x,
                        sliderMax: z[h],
                        scrollbarClass: H,
                        scrollbarWidth: A,
                        scrollbarStageWidth: u,
                        stageWidth: J,
                        scrollMargin: U,
                        scrollBorder: W,
                        infiniteSliderOffset: D[h],
                        infiniteSliderWidth: aa,
                        slideNodeOuterWidths: T,
                        shortContent: ga
                    });
                    va = !1;
                    return !0
                }
                b++;
                var h = b,
                    n = [];
                V[h] = a.extend({}, k);
                r[h] = 0;
                z[h] = 0;
                var G = [0, 0],
                    y = [0, 0],
                    Q = "scrollbarBlock" + b,
                    H = "scrollbar" + b,
                    M, O, u, A, t, Y, q = 0,
                    F = a(this),
                    J, S, U, W, Ba, va = !0;
                g = -1;
                var x, Z = [],
                    wa = 0,
                    ja = 0,
                    Fa = 0,
                    K = a(this).children(":first-child"),
                    I, ma, T, N = a(K).children().not("script").length,
                    ha = !1,
                    Da = 0,
                    ya = !1,
                    ra = void 0,
                    aa;
                D[h] = 0;
                var ga = !1,
                    oa = !1;
                na[h] = !1;
                var ka, sa = !1,
                    pa = !1,
                    ea = "touchstart.iosSliderEvent click.iosSliderEvent",
                    fa, xa, Ca, qa;
                ia[h] = !1;
                X[h] = [];
                k.scrollbarDrag && (k.scrollbar = !0, k.scrollbarHide = !1);
                var Ea = a(this);
                if (void 0 != Ea.data("iosslider")) return !0;
                14.2 <= parseInt(a().jquery.split(".").join(""), 10) ? a(this).delegate("img", "dragstart.iosSliderEvent", function(a) {
                    a.preventDefault()
                }) : a(this).find("img").bind("dragstart.iosSliderEvent",
                    function(a) {
                        a.preventDefault()
                    });
                k.infiniteSlider && (k.scrollbar = !1);
                k.infiniteSlider && 1 == N && (k.infiniteSlider = !1);
                k.scrollbar && ("" != k.scrollbarContainer ? a(k.scrollbarContainer).append("<div class = '" + Q + "'><div class = '" + H + "'></div></div>") : a(K).parent().append("<div class = '" + Q + "'><div class = '" + H + "'></div></div>"));
                if (!v()) return !0;
                a(this).find("a").bind("mousedown", m.preventDrag);
                a(this).find("[onclick]").bind("click", m.preventDrag).each(function() {
                    a(this).data("onclick", this.onclick)
                });
                g = m.calcActiveOffset(k,
                    m.getSliderOffset(a(K), "x"), x, J, D[h], N, void 0, h);
                g = (g + D[h] + N) % N;
                g = new m.args("load", k, K, a(K).children(":eq(" + g + ")"), g, g);
                a(F).data("args", g);
                if ("" != k.onSliderLoaded) k.onSliderLoaded(g);
                k.scrollbarPaging && k.scrollbar && !ga && (a(O).css("cursor", "pointer"), a(O).bind("click.iosSliderEvent", function(b) {
                    this == b.target && (b.pageX > a(M).offset().left ? da.nextPage(F) : da.prevPage(F))
                }));
                if (V[h].responsiveSlides || V[h].responsiveSlideContainer) g = l ? "orientationchange" : "resize", a(window).bind(g + ".iosSliderEvent-" + h,
                    function() {
                        if (!v()) return !0;
                        var b = a(F).data("args");
                        if ("" != k.onSliderResize) k.onSliderResize(b)
                    });
                !k.keyboardControls && !k.tabToAdvance || ga || a(document).bind("keydown.iosSliderEvent", function(a) {
                    p || w || (a = a.originalEvent);
                    if ("INPUT" == a.target.nodeName || ia[h]) return !0;
                    if (37 == a.keyCode && k.keyboardControls) a.preventDefault(), a = (C[h] + D[h] + N) % N, (0 < a || k.infiniteSlider) && m.changeSlide(a - 1, K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k);
                    else if (39 == a.keyCode && k.keyboardControls || 9 == a.keyCode && k.tabToAdvance) a.preventDefault(),
                        a = (C[h] + D[h] + N) % N, (a < x.length - 1 || k.infiniteSlider) && m.changeSlide(a + 1, K, I, n, H, A, J, u, U, W, Z, x, T, h, aa, N, q, k)
                });
                if (f || k.desktopClickDrag) {
                    var la = !1,
                        za = !1,
                        ta = a(K),
                        ua = a(K),
                        Aa = !1;
                    k.scrollbarDrag && (ta = ta.add(M), ua = ua.add(O));
                    a(ta).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(b) {
                        a(window).one("scroll.iosSliderEvent", function(a) {
                            la = !1
                        });
                        if (la) return !0;
                        la = !0;
                        za = !1;
                        "touchstart" == b.type ? a(ua).unbind("mousedown.iosSliderEvent") : a(ua).unbind("touchstart.iosSliderEvent");
                        if (ia[h] || ga || (Aa = m.isUnselectable(b.target,
                                k))) return ha = la = !1, !0;
                        ka = a(this)[0] === a(M)[0] ? M : K;
                        p || w || (b = b.originalEvent);
                        m.autoSlidePause(h);
                        qa.unbind(".disableClick");
                        if ("touchstart" == b.type) eventX = b.touches[0].pageX, eventY = b.touches[0].pageY;
                        else {
                            if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                            else if (document.selection)
                                if (w) try {
                                    document.selection.empty()
                                } catch (Ga) {} else document.selection.empty();
                            eventX = b.pageX;
                            eventY = b.pageY;
                            ya = !0;
                            ra = K;
                            a(this).css({
                                cursor: R
                            })
                        }
                        G = [0, 0];
                        y = [0, 0];
                        c = 0;
                        ha = !1;
                        for (b = 0; b < n.length; b++) clearTimeout(n[b]);
                        b = m.getSliderOffset(K, "x");
                        b > -1 * r[h] + q + fa ? (b = -1 * r[h] + q + fa, m.setSliderOffset(a("." + H), b), a("." + H).css({
                            width: A - W + "px"
                        })) : b < -1 * z[h] && (b = -1 * z[h], m.setSliderOffset(a("." + H), u - U - A), a("." + H).css({
                            width: A - W + "px"
                        }));
                        b = a(this)[0] === a(M)[0] ? r[h] : 0;
                        ja = -1 * (m.getSliderOffset(this, "x") - eventX - b);
                        m.getSliderOffset(this, "y");
                        G[1] = eventX;
                        y[1] = eventY;
                        pa = !1
                    });
                    a(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",
                        function(b) {
                            p || w || (b = b.originalEvent);
                            if (ia[h] || ga || Aa || !la) return !0;
                            var f = 0;
                            if ("touchmove" == b.type) eventX = b.touches[0].pageX, eventY = b.touches[0].pageY;
                            else {
                                if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                                else if (document.selection)
                                    if (w) try {
                                        document.selection.empty()
                                    } catch (Ha) {} else document.selection.empty();
                                eventX = b.pageX;
                                eventY = b.pageY;
                                if (!ya || !P && ("undefined" != typeof b.webkitMovementX || "undefined" != typeof b.webkitMovementY) &&
                                    0 === b.webkitMovementY && 0 === b.webkitMovementX) return !0
                            }
                            G[0] = G[1];
                            G[1] = eventX;
                            c = (G[1] - G[0]) / 2;
                            y[0] = y[1];
                            y[1] = eventY;
                            d = (y[1] - y[0]) / 2;
                            if (!ha) {
                                var g = (C[h] + D[h] + N) % N;
                                g = new m.args("start", k, K, a(K).children(":eq(" + g + ")"), g, void 0);
                                a(F).data("args", g);
                                if ("" != k.onSlideStart) k.onSlideStart(g)
                            }(d > k.verticalSlideLockThreshold || d < -1 * k.verticalSlideLockThreshold) && "touchmove" == b.type && !ha && (sa = !0);
                            (c > k.horizontalSlideLockThreshold || c < -1 * k.horizontalSlideLockThreshold) && "touchmove" == b.type && b.preventDefault();
                            if (c >
                                k.slideStartVelocityThreshold || c < -1 * k.slideStartVelocityThreshold) ha = !0;
                            if (ha && !sa) {
                                var v = m.getSliderOffset(K, "x"),
                                    l = a(ka)[0] === a(M)[0] ? r[h] : q,
                                    E = a(ka)[0] === a(M)[0] ? (r[h] - z[h] - q) / (u - U - A) : 1;
                                var n = a(ka)[0] === a(M)[0] ? k.scrollbarElasticPullResistance : k.elasticPullResistance;
                                var t = k.snapSlideCenter && a(ka)[0] === a(M)[0] ? 0 : q,
                                    B = k.snapSlideCenter && a(ka)[0] === a(M)[0] ? q : 0;
                                "touchmove" == b.type && (Fa != b.touches.length && (ja = -1 * v + eventX), Fa = b.touches.length);
                                if (k.infiniteSlider) {
                                    if (v <= -1 * z[h])
                                        if (g = a(K).width(), v <= -1 *
                                            ca[h]) {
                                            var L = -1 * Z[0];
                                            a(I).each(function(b) {
                                                m.setSliderOffset(a(I)[b], L + q);
                                                b < x.length && (x[b] = -1 * L);
                                                L += T[b]
                                            });
                                            ja -= -1 * x[0];
                                            r[h] = -1 * x[0] + q;
                                            z[h] = r[h] + g - J;
                                            D[h] = 0
                                        } else {
                                            var R = 0,
                                                Q = m.getSliderOffset(a(I[0]), "x");
                                            a(I).each(function(a) {
                                                m.getSliderOffset(this, "x") < Q && (Q = m.getSliderOffset(this, "x"), R = a)
                                            });
                                            n = r[h] + g;
                                            m.setSliderOffset(a(I)[R], n);
                                            r[h] = -1 * x[1] + q;
                                            z[h] = r[h] + g - J;
                                            x.splice(0, 1);
                                            x.splice(x.length, 0, -1 * n + q);
                                            D[h]++
                                        }
                                    if (v >= -1 * r[h] || 0 <= v)
                                        if (g = a(K).width(), 0 <= v)
                                            for (L = -1 * Z[0], a(I).each(function(b) {
                                                    m.setSliderOffset(a(I)[b],
                                                        L + q);
                                                    b < x.length && (x[b] = -1 * L);
                                                    L += T[b]
                                                }), ja += -1 * x[0], r[h] = -1 * x[0] + q, z[h] = r[h] + g - J, D[h] = N; 0 < -1 * x[0] - g + q;) {
                                                var O = 0;
                                                var Y = m.getSliderOffset(a(I[0]), "x");
                                                a(I).each(function(a) {
                                                    m.getSliderOffset(this, "x") > Y && (Y = m.getSliderOffset(this, "x"), O = a)
                                                });
                                                n = r[h] - T[O];
                                                m.setSliderOffset(a(I)[O], n);
                                                x.splice(0, 0, -1 * n + q);
                                                x.splice(x.length - 1, 1);
                                                r[h] = -1 * x[0] + q;
                                                z[h] = r[h] + g - J;
                                                D[h]--;
                                                C[h]++
                                            } else O = 0, Y = m.getSliderOffset(a(I[0]), "x"), a(I).each(function(a) {
                                                    m.getSliderOffset(this, "x") > Y && (Y = m.getSliderOffset(this, "x"), O = a)
                                                }), n =
                                                r[h] - T[O], m.setSliderOffset(a(I)[O], n), x.splice(0, 0, -1 * n + q), x.splice(x.length - 1, 1), r[h] = -1 * x[0] + q, z[h] = r[h] + g - J, D[h]--
                                } else g = a(K).width(), v > -1 * r[h] + q && (f = (r[h] + -1 * (ja - l - eventX + t) * E - l) * n * -1 / E), v < -1 * z[h] && (f = (z[h] + B + -1 * (ja - l - eventX) * E - l) * n * -1 / E);
                                m.setSliderOffset(K, -1 * (ja - l - eventX - f) * E - l + B);
                                k.scrollbar && (m.showScrollbar(k, H), e = Math.floor((ja - eventX - f - r[h] + t) / (z[h] - r[h] + q) * (u - U - A) * E), g = A, 0 >= e ? (g = A - W - -1 * e, m.setSliderOffset(a("." + H), 0), a("." + H).css({
                                    width: g + "px"
                                })) : e >= u - U - W - A ? (g = u - U - W - e, m.setSliderOffset(a("." +
                                    H), e), a("." + H).css({
                                    width: g + "px"
                                })) : m.setSliderOffset(a("." + H), e));
                                "touchmove" == b.type && (Ba = b.touches[0].pageX);
                                b = !1;
                                f = m.calcActiveOffset(k, -1 * (ja - eventX - f), x, J, D[h], N, void 0, h);
                                g = (f + D[h] + N) % N;
                                k.infiniteSlider ? g != ba[h] && (b = !0) : f != C[h] && (b = !0);
                                if (b) {
                                    C[h] = f;
                                    ba[h] = g;
                                    pa = !0;
                                    g = new m.args("change", k, K, a(K).children(":eq(" + g + ")"), g, g);
                                    a(F).data("args", g);
                                    if ("" != k.onSlideChange) k.onSlideChange(g);
                                    m.updateBackfaceVisibility(I, h, N, k)
                                }
                            }
                        });
                    g = a(window);
                    if (w || p) g = a(document);
                    a(ta).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",
                        function(a) {
                            a = a.originalEvent;
                            if (za) return !1;
                            za = !0;
                            if (ia[h] || ga || Aa) return !0;
                            if (0 != a.touches.length)
                                for (var b = 0; b < a.touches.length; b++) a.touches[b].pageX == Ba && m.slowScrollHorizontal(K, I, n, H, c, d, A, J, u, U, W, Z, x, T, h, aa, N, ka, pa, q, k);
                            else m.slowScrollHorizontal(K, I, n, H, c, d, A, J, u, U, W, Z, x, T, h, aa, N, ka, pa, q, k);
                            la = sa = !1;
                            return !0
                        });
                    a(g).bind("mouseup.iosSliderEvent-" + h, function(b) {
                        ha ? xa.unbind("click.disableClick").bind("click.disableClick", m.preventClick) : xa.unbind("click.disableClick").bind("click.disableClick",
                            m.enableClick);
                        Ca.each(function() {
                            this.onclick = function(b) {
                                if (ha) return !1;
                                a(this).data("onclick") && a(this).data("onclick").call(this, b || window.event)
                            };
                            this.onclick = a(this).data("onclick")
                        });
                        1.8 <= parseFloat(a().jquery) ? qa.each(function() {
                            var b = a._data(this, "events");
                            if (void 0 != b && void 0 != b.click && "iosSliderEvent" != b.click[0].namespace) {
                                if (!ha) return !1;
                                a(this).one("click.disableClick", m.preventClick);
                                var b = a._data(this, "events").click,
                                    c = b.pop();
                                b.splice(0, 0, c)
                            }
                        }) : 1.6 <= parseFloat(a().jquery) && qa.each(function() {
                            var b =
                                a(this).data("events");
                            if (void 0 != b && void 0 != b.click && "iosSliderEvent" != b.click[0].namespace) {
                                if (!ha) return !1;
                                a(this).one("click.disableClick", m.preventClick);
                                var b = a(this).data("events").click,
                                    c = b.pop();
                                b.splice(0, 0, c)
                            }
                        });
                        if (!na[h]) {
                            if (ga) return !0;
                            k.desktopClickDrag && a(K).css({
                                cursor: B
                            });
                            k.scrollbarDrag && a(M).css({
                                cursor: B
                            });
                            ya = !1;
                            if (void 0 == ra) return !0;
                            m.slowScrollHorizontal(ra, I, n, H, c, d, A, J, u, U, W, Z, x, T, h, aa, N, ka, pa, q, k);
                            ra = void 0
                        }
                        la = sa = !1
                    })
                }
            })
        },
        destroy: function(b, c) {
            void 0 == c && (c = this);
            return a(c).each(function() {
                var c =
                    a(this),
                    d = c.data("iosslider");
                if (void 0 == d) return !1;
                void 0 == b && (b = !0);
                m.autoSlidePause(d.sliderNumber);
                na[d.sliderNumber] = !0;
                a(window).unbind(".iosSliderEvent-" + d.sliderNumber);
                a(document).unbind(".iosSliderEvent-" + d.sliderNumber);
                a(document).unbind("keydown.iosSliderEvent");
                a(this).unbind(".iosSliderEvent");
                a(this).children(":first-child").unbind(".iosSliderEvent");
                a(this).children(":first-child").children().unbind(".iosSliderEvent");
                a(d.settings.scrollbarBlockNode).unbind(".iosSliderEvent");
                b &&
                    (a(this).attr("style", ""), a(this).children(":first-child").attr("style", ""), a(this).children(":first-child").children().attr("style", ""), a(d.settings.navSlideSelector).attr("style", ""), a(d.settings.navPrevSelector).attr("style", ""), a(d.settings.navNextSelector).attr("style", ""), a(d.settings.autoSlideToggleSelector).attr("style", ""), a(d.settings.unselectableSelector).attr("style", ""));
                d.settings.scrollbar && a(".scrollbarBlock" + d.sliderNumber).remove();
                for (var d = X[d.sliderNumber], e = 0; e < d.length; e++) clearTimeout(d[e]);
                c.removeData("iosslider");
                c.removeData("args")
            })
        },
        update: function(b) {
            void 0 == b && (b = this);
            return a(b).each(function() {
                var b = a(this),
                    c = b.data("iosslider");
                if (void 0 == c) return !1;
                c.settings.startAtSlide = b.data("args").currentSlideNumber;
                da.destroy(!1, this);
                1 != c.numberOfSlides && c.settings.infiniteSlider && (c.settings.startAtSlide = (C[c.sliderNumber] + 1 + D[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides);
                da.init(c.settings, this);
                b = new m.args("update", c.settings, c.scrollerNode, a(c.scrollerNode).children(":eq(" +
                    (c.settings.startAtSlide - 1) + ")"), c.settings.startAtSlide - 1, c.settings.startAtSlide - 1);
                a(c.stageNode).data("args", b);
                if ("" != c.settings.onSliderUpdate) c.settings.onSliderUpdate(b)
            })
        },
        addSlide: function(b, c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("iosslider");
                if (void 0 == e) return !1;
                0 == a(e.scrollerNode).children().length ? (a(e.scrollerNode).append(b), d.data("args").currentSlideNumber = 1) : e.settings.infiniteSlider ? (1 == c ? a(e.scrollerNode).children(":eq(0)").before(b) : a(e.scrollerNode).children(":eq(" +
                    (c - 2) + ")").after(b), -1 > D[e.sliderNumber] && C[e.sliderNumber]--, d.data("args").currentSlideNumber >= c && C[e.sliderNumber]++) : (c <= e.numberOfSlides ? a(e.scrollerNode).children(":eq(" + (c - 1) + ")").before(b) : a(e.scrollerNode).children(":eq(" + (c - 2) + ")").after(b), d.data("args").currentSlideNumber >= c && d.data("args").currentSlideNumber++);
                d.data("iosslider").numberOfSlides++;
                da.update(this)
            })
        },
        removeSlide: function(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("iosslider");
                if (void 0 == d) return !1;
                a(d.scrollerNode).children(":eq(" +
                    (b - 1) + ")").remove();
                C[d.sliderNumber] > b - 1 && C[d.sliderNumber]--;
                c.data("iosslider").numberOfSlides--;
                da.update(this)
            })
        },
        goToSlide: function(b, c, d) {
            void 0 == d && (d = this);
            return a(d).each(function() {
                var d = a(this).data("iosslider");
                if (void 0 == d || d.shortContent) return !1;
                b = b > d.childrenOffsets.length ? d.childrenOffsets.length - 1 : b - 1;
                void 0 != c && (d.settings.autoSlideTransTimer = c);
                m.changeSlide(b, a(d.scrollerNode), a(d.slideNodes), X[d.sliderNumber], d.scrollbarClass, d.scrollbarWidth, d.stageWidth, d.scrollbarStageWidth,
                    d.scrollMargin, d.scrollBorder, d.originalOffsets, d.childrenOffsets, d.slideNodeOuterWidths, d.sliderNumber, d.infiniteSliderWidth, d.numberOfSlides, d.centeredSlideOffset, d.settings)
            })
        },
        prevSlide: function(b) {
            return this.each(function() {
                var c = a(this).data("iosslider");
                if (void 0 == c || c.shortContent) return !1;
                var d = (C[c.sliderNumber] + D[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
                void 0 != b && (c.settings.autoSlideTransTimer = b);
                (0 < d || c.settings.infiniteSlider) && m.changeSlide(d - 1, a(c.scrollerNode), a(c.slideNodes),
                    X[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
                C[c.sliderNumber] = d
            })
        },
        nextSlide: function(b) {
            return this.each(function() {
                var c = a(this).data("iosslider");
                if (void 0 == c || c.shortContent) return !1;
                var d = (C[c.sliderNumber] + D[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
                void 0 != b && (c.settings.autoSlideTransTimer =
                    b);
                (d < c.childrenOffsets.length - 1 || c.settings.infiniteSlider) && m.changeSlide(d + 1, a(c.scrollerNode), a(c.slideNodes), X[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
                C[c.sliderNumber] = d
            })
        },
        prevPage: function(b, c) {
            void 0 == c && (c = this);
            return a(c).each(function() {
                var c = a(this).data("iosslider");
                if (void 0 == c) return !1;
                var d = m.getSliderOffset(c.scrollerNode, "x") + c.stageWidth;
                void 0 != b && (c.settings.autoSlideTransTimer = b);
                m.changeOffset(d, a(c.scrollerNode), a(c.slideNodes), X[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings)
            })
        },
        nextPage: function(b, c) {
            void 0 == c && (c = this);
            return a(c).each(function() {
                var c =
                    a(this).data("iosslider");
                if (void 0 == c) return !1;
                var d = m.getSliderOffset(c.scrollerNode, "x") - c.stageWidth;
                void 0 != b && (c.settings.autoSlideTransTimer = b);
                m.changeOffset(d, a(c.scrollerNode), a(c.slideNodes), X[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings)
            })
        },
        lock: function() {
            return this.each(function() {
                var b =
                    a(this).data("iosslider");
                if (void 0 == b || b.shortContent) return !1;
                a(b.scrollerNode).css({
                    cursor: "default"
                });
                ia[b.sliderNumber] = !0
            })
        },
        unlock: function() {
            return this.each(function() {
                var b = a(this).data("iosslider");
                if (void 0 == b || b.shortContent) return !1;
                a(b.scrollerNode).css({
                    cursor: B
                });
                ia[b.sliderNumber] = !1
            })
        },
        getData: function() {
            return this.each(function() {
                var b = a(this).data("iosslider");
                return void 0 == b || b.shortContent ? !1 : b
            })
        },
        autoSlidePause: function() {
            return this.each(function() {
                var b = a(this).data("iosslider");
                if (void 0 == b || b.shortContent) return !1;
                V[b.sliderNumber].autoSlide = !1;
                m.autoSlidePause(b.sliderNumber);
                return b
            })
        },
        autoSlidePlay: function() {
            return this.each(function() {
                var b = a(this).data("iosslider");
                if (void 0 == b || b.shortContent) return !1;
                V[b.sliderNumber].autoSlide = !0;
                m.autoSlide(a(b.scrollerNode), a(b.slideNodes), X[b.sliderNumber], b.scrollbarClass, b.scrollbarWidth, b.stageWidth, b.scrollbarStageWidth, b.scrollMargin, b.scrollBorder, b.originalOffsets, b.childrenOffsets, b.slideNodeOuterWidths, b.sliderNumber,
                    b.infiniteSliderWidth, b.numberOfSlides, b.centeredSlideOffset, b.settings);
                return b
            })
        }
    };
    a.fn.iosSlider = function(b) {
        if (da[b]) return da[b].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof b && b) a.error("invalid method call!");
        else return da.init.apply(this, arguments)
    }
})(jQuery);
(function(a) {
    var b, c, d, e, f, l, g, p = function() {},
        w = !!window.jQuery,
        P = a(window),
        y = function(a, c) {
            b.ev.on("mfp" + a + ".mfp", c)
        },
        B = function(b, c, d, e) {
            var k = document.createElement("div");
            return k.className = "mfp-" + b, d && (k.innerHTML = d), e ? c && c.appendChild(k) : (k = a(k), c && k.appendTo(c)), k
        },
        R = function(c, d) {
            b.ev.triggerHandler("mfp" + c, d);
            b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        Y = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn =
                a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        V = function() {
            a.magnificPopup.instance || (b = new p, b.init(), a.magnificPopup.instance = b)
        },
        na = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    p.prototype = {
        constructor: p,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7.");
            b.isIE8 = -1 !== c.indexOf("MSIE 8.");
            b.isLowIE = b.isIE7 ||
                b.isIE8;
            b.isAndroid = /android/gi.test(c);
            b.isIOS = /iphone|ipad|ipod/gi.test(c);
            b.supportsTransition = na();
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            e = a(document);
            b.popupsCache = {}
        },
        open: function(c) {
            d || (d = a(document.body));
            var k;
            if (!1 === c.isObj) {
                b.items = c.items.toArray();
                b.index = 0;
                var f, g = c.items;
                for (k = 0; g.length > k; k++)
                    if (f = g[k], f.parsed && (f = f.el[0]), f === c.el[0]) {
                        b.index = k;
                        break
                    }
            } else b.items = a.isArray(c.items) ?
                c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return b.updateItemHTML(), void 0;
            b.types = [];
            l = "";
            b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e;
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {};
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c);
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos;
            b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1);
            b.bgOverlay || (b.bgOverlay = B("bg").on("click.mfp", function() {
                b.close()
            }), b.wrap = B("wrap").attr("tabindex", -1).on("click.mfp", function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = B("container", b.wrap));
            b.contentContainer = B("content");
            b.st.preloader && (b.preloader = B("preloader", b.container, b.st.tLoading));
            f = a.magnificPopup.modules;
            for (k = 0; f.length > k; k++) g = f[k], g = g.charAt(0).toUpperCase() + g.slice(1), b["init" + g].call(b);
            R("BeforeOpen");
            b.st.showCloseBtn && (b.st.closeBtnInside ? (y("MarkupParse",
                function(a, b, c, d) {
                    c.close_replaceWith = Y(d.type)
                }), l += " mfp-close-btn-in") : b.wrap.append(Y()));
            b.st.alignTop && (l += " mfp-align-top");
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: P.scrollTop(),
                position: "absolute"
            });
            (!1 === b.st.fixedBgPos || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: e.height(),
                position: "absolute"
            });
            b.st.enableEscapeKey && e.on("keyup.mfp", function(a) {
                27 === a.keyCode && b.close()
            });
            P.on("resize.mfp",
                function() {
                    b.updateSize()
                });
            b.st.closeOnContentClick || (l += " mfp-auto-cursor");
            l && b.wrap.addClass(l);
            k = b.wH = P.height();
            f = {};
            b.fixedContentPos && b._hasScrollBar(k) && (g = b._getScrollbarSize()) && (f.marginRight = g);
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            g = b.st.mainClass;
            return b.isIE7 && (g += " mfp-ie7"), g && b._addClassToMFP(g), b.updateItemHTML(), R("BuildControls"), a("html").css(f), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement,
                setTimeout(function() {
                    b.content ? (b._addClassToMFP("mfp-ready"), b._setFocus()) : b.bgOverlay.addClass("mfp-ready");
                    e.on("focusin.mfp", b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), R("Open"), c
        },
        close: function() {
            b.isOpen && (R("BeforeClose"), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP("mfp-removing"), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            R("Close");
            var c = "mfp-removing mfp-ready ";
            if (b.bgOverlay.detach(), b.wrap.detach(),
                b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) c = {
                marginRight: ""
            }, b.isIE7 ? a("body, html").css("overflow", "") : c.overflow = "", a("html").css(c);
            e.off("keyup.mfp focusin.mfp");
            b.ev.off(".mfp");
            b.wrap.attr("class", "mfp-wrap").removeAttr("style");
            b.bgOverlay.attr("class", "mfp-bg");
            b.container.attr("class", "mfp-container");
            !b.st.showCloseBtn || b.st.closeBtnInside && !0 !== b.currTemplate[b.currItem.type] || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach();
            b._lastFocusedEl && a(b._lastFocusedEl).focus();
            b.currItem = null;
            b.content = null;
            b.currTemplate = null;
            b.prevHeight = 0;
            R("AfterClose")
        },
        updateSize: function(a) {
            b.isIOS ? (a = document.documentElement.clientWidth / window.innerWidth * window.innerHeight, b.wrap.css("height", a), b.wH = a) : b.wH = a || P.height();
            b.fixedContentPos || b.wrap.css("height", b.wH);
            R("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach();
            b.content && b.content.detach();
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (R("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var e = b.st[d] ? b.st[d].markup : !1;
                R("FirstMarkupParse", e);
                b.currTemplate[d] = e ? a(e) : !0
            }
            f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
            e = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(e, d);
            c.preloaded = !0;
            R("Change", c);
            f = c.type;
            b.container.prepend(b.contentContainer);
            R("AfterChange")
        },
        appendContent: function(a, c) {
            (b.content = a) ? b.st.showCloseBtn && b.st.closeBtnInside && !0 === b.currTemplate[c] ?
                b.content.find(".mfp-close").length || b.content.append(Y()) : b.content = a: b.content = "";
            R("BeforeAppend");
            b.container.addClass("mfp-" + c + "-holder");
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, k = 0; f.length > k; k++)
                    if (e.el.hasClass("mfp-" + f[k])) {
                        d = f[k];
                        break
                    }
                e.src = e.el.attr("data-mfp-src");
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e,
                R("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this;
                b._openClick(d, a, c)
            };
            c || (c = {});
            c.mainEl = a;
            c.items ? (c.isObj = !0, a.off("click.magnificPopup").on("click.magnificPopup", d)) : (c.isObj = !1, c.delegate ? a.off("click.magnificPopup").on("click.magnificPopup", c.delegate, d) : (c.items = a, a.off("click.magnificPopup").on("click.magnificPopup", d)))
        },
        _openClick: function(c, d, e) {
            if ((void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick) || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var f =
                    void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (f)
                    if (a.isFunction(f)) {
                        if (!f.call(b)) return !0
                    } else if (f > P.width()) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation());
                e.el = a(c.mfpEl);
                e.delegate && (e.items = d.find(e.delegate));
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c);
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                R("UpdateStatus", e);
                a = e.status;
                d = e.text;
                b.preloader.html(d);
                b.preloader.find("a").on("click",
                    function(a) {
                        a.stopImmediatePropagation()
                    });
                b.container.addClass("mfp-s-" + a);
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass("mfp-prevent-close")) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e || !b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a);
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a);
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || P.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c));
            R("MarkupParse", [b, c, d]);
            a.each(c, function(a, c) {
                if (void 0 === c || !1 === c) return !0;
                if (e = a.split("_"), 1 < e.length) {
                    var d = b.find(".mfp-" +
                        e[0]);
                    if (0 < d.length) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(".mfp-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.id = "mfp-sbm";
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(a);
                b.scrollbarSize = a.offsetWidth - a.clientWidth;
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    };
    a.magnificPopup = {
        instance: null,
        proto: p.prototype,
        modules: [],
        open: function(b, c) {
            return V(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options);
            a.extend(this.proto, c.proto);
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    a.fn.magnificPopup = function(c) {
        V();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = w ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) ||
                    0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g));
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), w ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var X, C, ba, D = function() {
        ba && (C.after(ba.addClass(X)).detach(), ba = null)
    };
    a.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push("inline");
                y("Close.inline", function() {
                    D()
                })
            },
            getInline: function(c, d) {
                if (D(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (C || (X = e.hiddenClass, C = B(X), X = "mfp-" + X), ba = f.after(C).detach().removeClass(X));
                        b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var r, z = function() {
        r && d.removeClass(r);
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push("ajax");
                r = b.st.ajax.cursor;
                y("Close.ajax", z);
                y("BeforeChange.ajax", z)
            },
            getAjax: function(c) {
                r && d.addClass(r);
                b.updateStatus("loading");
                var e = a.extend({
                    url: c.src,
                    success: function(e, f, g) {
                        e = {
                            data: e,
                            xhr: g
                        };
                        R("ParseAjax", e);
                        b.appendContent(a(e.data), "ajax");
                        c.finished = !0;
                        r && d.removeClass(r);
                        b._setFocus();
                        setTimeout(function() {
                            b.wrap.addClass("mfp-ready")
                        }, 16);
                        b.updateStatus("ready");
                        R("AjaxContentAdded")
                    },
                    error: function() {
                        r && d.removeClass(r);
                        c.finished = c.loadError = !0;
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(e), ""
            }
        }
    });
    var ca, ia = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var a = b.st.image;
                b.types.push("image");
                y("Open.image", function() {
                    "image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
                });
                y("Close.image", function() {
                    a.cursor && d.removeClass(a.cursor);
                    P.off("resize.mfp")
                });
                y("Resize.image", b.resizeImage);
                b.isLowIE && y("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c =
                        0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10));
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, ca && clearInterval(ca), a.isCheckingImgSize = !1, R("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        ca && clearInterval(ca);
                        ca = setInterval(function() {
                            return 0 < d.naturalWidth ? (b._onImageHasSize(a), void 0) : (200 < c && clearInterval(ca),
                                c++, 3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500), void 0)
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, R("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", k.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    k = b.st.image,
                    l = d.find(".mfp-img");
                if (l.length) {
                    var p = document.createElement("img");
                    p.className = "mfp-img";
                    c.img = a(p).on("load.mfploader", f).on("error.mfploader", g);
                    p.src = c.src;
                    l.is("img") && (c.img = c.img.clone());
                    p = c.img[0];
                    0 < p.naturalWidth ? c.hasSize = !0 : p.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: ia(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (ca && clearInterval(ca), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", k.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                    d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var m;
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom;
                if (c.enabled && b.supportsTransition) {
                    var d, e, f = c.duration,
                        g = function(a) {
                            a = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
                            var b = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            };
                            return b["-webkit-transition"] = b["-moz-transition"] = b["-o-transition"] = b.transition = "all " + c.duration / 1E3 + "s " + c.easing, a.css(b), a
                        },
                        l = function() {
                            b.content.css("visibility", "visible")
                        };
                    y("BuildControls.zoom", function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(d), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return l(), void 0;
                            e = g(a);
                            e.css(b._getOffset());
                            b.wrap.append(e);
                            d = setTimeout(function() {
                                e.css(b._getOffset(!0));
                                d = setTimeout(function() {
                                    l();
                                    setTimeout(function() {
                                        e.remove();
                                        a = e = null;
                                        R("ZoomAnimationEnded")
                                    }, 16)
                                }, f)
                            }, 16)
                        }
                    });
                    y("BeforeClose.zoom", function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(d), b.st.removalDelay = f, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                e = g(a)
                            }
                            e.css(b._getOffset(!0));
                            b.wrap.append(e);
                            b.content.css("visibility", "hidden");
                            setTimeout(function() {
                                e.css(b._getOffset())
                            }, 16)
                        }
                    });
                    y("Close.zoom", function() {
                        b._allowZoom() && (l(), e && e.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ?
                    b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                c = d.offset();
                var e = parseInt(d.css("padding-top"), 10),
                    f = parseInt(d.css("padding-bottom"), 10);
                c.top -= a(window).scrollTop() - e;
                d = {
                    width: d.width(),
                    height: (w ? d.innerHeight() : d[0].offsetHeight) - f - e
                };
                return (void 0 === m && (m = void 0 !== document.createElement("p").style.MozTransform), m) ? d["-moz-transform"] = d.transform = "translate(" + c.left + "px," + c.top + "px)" : (d.left = c.left, d.top = c.top), d
            }
        }
    });
    var da = function(a) {
        if (b.currTemplate.iframe) {
            var c =
                b.currTemplate.iframe.find("iframe");
            c.length && (a || (c[0].src = "//about:blank"), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push("iframe");
                y("BeforeChange", function(a, b, c) {
                    b !== c && ("iframe" === b ? da() : "iframe" === c && da(!0))
                });
                y("Close.iframe", function() {
                    da()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return -1 < e.indexOf(this.index) ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var n = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        G = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    d = !!a.fn.mfpFastClick;
                return b.direction = !0, c && c.enabled ? (l += " mfp-gallery", y("Open.mfp-gallery", function() {
                        c.navigateByImgClick && b.wrap.on("click.mfp-gallery", ".mfp-img", function() {
                            return 1 < b.items.length ? (b.next(), !1) : void 0
                        });
                        e.on("keydown.mfp-gallery", function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), y("UpdateStatus.mfp-gallery", function(a, c) {
                        c.text && (c.text = G(c.text, b.currItem.index, b.items.length))
                    }),
                    y("MarkupParse.mfp-gallery", function(a, d, e, f) {
                        a = b.items.length;
                        e.counter = 1 < a ? G(c.tCounter, f.index, a) : ""
                    }), y("BuildControls.mfp-gallery", function() {
                        if (1 < b.items.length && c.arrows && !b.arrowLeft) {
                            var e = c.arrowMarkup,
                                f = b.arrowLeft = a(e.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                                e = b.arrowRight = a(e.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close"),
                                g = d ? "mfpFastClick" : "click";
                            f[g](function() {
                                b.prev()
                            });
                            e[g](function() {
                                b.next()
                            });
                            b.isIE7 && (B("b", f[0], !1, !0), B("a", f[0], !1, !0), B("b", e[0], !1, !0), B("a", e[0], !1, !0));
                            b.container.append(f.add(e))
                        }
                    }), y("Change.mfp-gallery", function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout);
                        b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages();
                            b._preloadTimeout = null
                        }, 16)
                    }), y("Close.mfp-gallery", function() {
                        e.off(".mfp-gallery");
                        b.wrap.off("click.mfp-gallery");
                        b.arrowLeft && d && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick();
                        b.arrowRight = b.arrowLeft = null
                    }), void 0) : !1
            },
            next: function() {
                b.direction = !0;
                b.index = n(b.index + 1);
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1;
                b.index = n(b.index - 1);
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index;
                b.index = a;
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a = b.st.gallery.preload;
                var c = Math.min(a[0], b.items.length),
                    d = Math.min(a[1], b.items.length);
                for (a = 1;
                    (b.direction ? d : c) >= a; a++) b._preloadItem(b.index + a);
                for (a = 1;
                    (b.direction ? c : d) >= a; a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = n(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c));
                    R("LazyLoad", d);
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0;
                        d.loadError = !0;
                        R("LazyLoadError", d)
                    }).attr("src", d.src));
                    d.preloaded = !0
                }
            }
        }
    });
    a.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var a = b.st.retina,
                        c = a.ratio,
                        c = isNaN(c) ?
                        c() : c;
                    1 < c && (y("ImageHasSize.retina", function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), y("ElementParse.retina", function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    });
    (function() {
        var b = "ontouchstart" in window,
            c = function() {
                P.off("touchmove" + d + " touchend" + d)
            },
            d = ".mfpFastClick";
        a.fn.mfpFastClick = function(e) {
            return a(this).each(function() {
                var f, g = a(this);
                if (b) {
                    var l, h, k, p, m, w;
                    g.on("touchstart" + d, function(a) {
                        p = !1;
                        w = 1;
                        m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0];
                        h = m.clientX;
                        k = m.clientY;
                        P.on("touchmove" + d, function(a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches;
                            w = m.length;
                            m = m[0];
                            (10 < Math.abs(m.clientX - h) || 10 < Math.abs(m.clientY - k)) && (p = !0, c())
                        }).on("touchend" + d, function(a) {
                            c();
                            p || 1 < w || (f = !0, a.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                f = !1
                            }, 1E3), e())
                        })
                    })
                }
                g.on("click" + d, function() {
                    f || e()
                })
            })
        };
        a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + d + " click" + d);
            b && P.off("touchmove" + d + " touchend" + d)
        }
    })();
    V()
})(window.jQuery || window.Zepto);
(function(a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        });
        return b
    }

    function e(a, b) {
        var d = c(this);
        if (this.value == d.attr("placeholder") && d.hasClass("placeholder"))
            if (d.data("placeholder-password")) {
                d = d.hide().next().show().attr("id", d.removeAttr("id").data("placeholder-id"));
                if (!0 === a) return d[0].value = b;
                d.focus()
            } else this.value = "", d.removeClass("placeholder"), this == l() && this.select()
    }

    function f() {
        var a = c(this),
            b = this.id;
        if ("" == this.value) {
            if ("password" == this.type) {
                if (!a.data("placeholder-textinput")) {
                    try {
                        var f = a.clone().attr({
                            type: "text"
                        })
                    } catch (V) {
                        f = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    f.removeAttr("name").data({
                        "placeholder-password": a,
                        "placeholder-id": b
                    }).bind("focus.placeholder", e);
                    a.data({
                        "placeholder-textinput": f,
                        "placeholder-id": b
                    }).before(f)
                }
                a = a.removeAttr("id").hide().prev().attr("id", b).show()
            }
            a.addClass("placeholder");
            a[0].value = a.attr("placeholder")
        } else a.removeClass("placeholder")
    }

    function l() {
        try {
            return b.activeElement
        } catch (B) {}
    }
    var g = "placeholder" in b.createElement("input"),
        p = "placeholder" in b.createElement("textarea"),
        w = c.fn,
        P = c.valHooks,
        y = c.propHooks;
    g && p ? (w = w.placeholder = function() {
        return this
    }, w.input = w.textarea = !0) : (w = w.placeholder = function() {
        this.filter((g ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder");
        return this
    }, w.input = g, w.textarea = p, w = {
        get: function(a) {
            var b = c(a),
                d = b.data("placeholder-password");
            return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, b) {
            var d = c(a),
                g = d.data("placeholder-password");
            if (g) return g[0].value = b;
            if (!d.data("placeholder-enabled")) return a.value = b;
            "" == b ? (a.value = b, a != l() && f.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b;
            return d
        }
    }, g || (P.input = w, y.value = w), p || (P.textarea = w, y.value = w), c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(e);
            setTimeout(function() {
                    a.each(f)
                },
                10)
        })
    }), c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
})(this, document, jQuery);
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
        var d = (new Date).getTime(),
            e = Math.max(0, 16 - (d - a)),
            g = window.setTimeout(function() {
                b(d + e)
            }, e);
        a = d + e;
        return g
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function(a) {
            clearTimeout(a)
        })
})();
var tdDetect = {};
(function() {
    tdDetect = {
        isIe8: !1,
        isIe9: !1,
        isIe10: !1,
        isIe11: !1,
        isIe: !1,
        isSafari: !1,
        isChrome: !1,
        isIpad: !1,
        isTouchDevice: !1,
        hasHistory: !1,
        isPhoneScreen: !1,
        isIos: !1,
        isAndroid: !1,
        isOsx: !1,
        isFirefox: !1,
        isWinOs: !1,
        isMobileDevice: !1,
        htmlJqueryObj: null,
        runIsPhoneScreen: function() {
            (768 > jQuery(window).width() || 768 > jQuery(window).height()) && !1 === tdDetect.isIpad ? tdDetect.isPhoneScreen = !0 : tdDetect.isPhoneScreen = !1
        },
        set: function(a, b) {
            tdDetect[a] = b
        }
    };
    tdDetect.htmlJqueryObj = jQuery("html"); - 1 !== navigator.appVersion.indexOf("Win") &&
        tdDetect.set("isWinOs", !0);
    "ontouchstart" in window && !tdDetect.isWinOs && tdDetect.set("isTouchDevice", !0);
    tdDetect.htmlJqueryObj.is(".ie8") && (tdDetect.set("isIe8", !0), tdDetect.set("isIe", !0));
    tdDetect.htmlJqueryObj.is(".ie9") && (tdDetect.set("isIe9", !0), tdDetect.set("isIe", !0)); - 1 < navigator.userAgent.indexOf("MSIE 10.0") && (tdDetect.set("isIe10", !0), tdDetect.set("isIe", !0));
    navigator.userAgent.match(/Trident.*rv\:11\./) && tdDetect.set("isIe11", !0);
    window.history && window.history.pushState && tdDetect.set("hasHistory", !0); - 1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && tdDetect.set("isSafari", !0);
    /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) && tdDetect.set("isChrome", !0);
    null !== navigator.userAgent.match(/iPad/i) && tdDetect.set("isIpad", !0);
    /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && tdDetect.set("isIos", !0);
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && tdDetect.set("isMobileDevice", !0);
    tdDetect.runIsPhoneScreen(); - 1 < navigator.userAgent.toLowerCase().indexOf("android") && tdDetect.set("isAndroid", !0); - 1 !== navigator.userAgent.indexOf("Mac OS X") && tdDetect.set("isOsx", !0); - 1 !== navigator.userAgent.indexOf("Firefox") && tdDetect.set("isFirefox", !0)
})();
var tdViewport = {};
(function() {
    tdViewport = {
        INTERVAL_INITIAL_INDEX: -1,
        _currentIntervalIndex: tdViewport.INTERVAL_INITIAL_INDEX,
        _intervalList: [],
        init: function() {
            if ("undefined" !== typeof window.td_viewport_interval_list && Array === window.td_viewport_interval_list.constructor) {
                for (var a = 0; a < window.td_viewport_interval_list.length; a++) {
                    var b = new tdViewport.item,
                        c = window.td_viewport_interval_list[a];
                    if (!c.hasOwnProperty("limitBottom") || !c.hasOwnProperty("sidebarWidth")) break;
                    b.limitBottom = c.limitBottom;
                    b.sidebarWidth = c.sidebarWidth;
                    tdViewport._items.push(b)
                }
                tdViewport.detectChanges()
            }
        },
        getCurrentIntervalIndex: function() {
            return tdViewport._currentIntervalIndex
        },
        setIntervalList: function(a) {
            tdViewport._intervalList = a
        },
        getIntervalList: function() {
            return tdViewport._intervalList
        },
        getCurrentIntervalItem: function() {
            return tdViewport.INTERVAL_INITIAL_INDEX === tdViewport._currentIntervalIndex || 0 === tdViewport._currentIntervalIndex ? null : tdViewport._items[tdViewport._currentIntervalIndex - 1]
        },
        _items: [],
        item: function() {
            this.sidebarWidth = this.limitBottom =
                void 0
        },
        detectChanges: function() {
            var a = !1,
                b = 0;
            var c = !0 === tdDetect.isSafari ? this._safariWiewPortWidth.getRealWidth() : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            for (var d = 0; d < tdViewport._items.length; d++) {
                if (c <= tdViewport._items[d].limitBottom) {
                    b !== tdViewport._currentIntervalIndex && (tdViewport._currentIntervalIndex = b, a = !0, tdViewport.log("changing viewport " + tdViewport._currentIntervalIndex + " ~ " + c));
                    break
                }
                b++
            }!1 === a && b !== tdViewport._currentIntervalIndex && (tdViewport._currentIntervalIndex =
                b, a = !0, tdViewport.log("changing viewport " + tdViewport._currentIntervalIndex + " ~ " + c));
            return a
        },
        _safariWiewPortWidth: {
            divAdded: !1,
            divJqueryObject: "",
            getRealWidth: function() {
                !1 === this.divAdded && (this.divJqueryObject = jQuery("<div>").css({
                    height: "1px",
                    position: "absolute",
                    top: "-1px",
                    left: "0",
                    right: "0",
                    visibility: "hidden",
                    "z-index": "-1"
                }), this.divJqueryObject.appendTo("body"), this.divAdded = !0);
                return this.divJqueryObject.width()
            }
        },
        log: function(a) {}
    };
    tdViewport.init()
})();
var tdMenu = {};
(function() {
    tdMenu = {
        _itemsWithSubmenu: null,
        _mainMenu: null,
        _outsideClickArea: null,
        _outsideClickExcludedAreas: "#td-header-menu .sf-menu, #td-header-menu .sf-menu *, .menu-top-container, .menu-top-container *",
        _openMenuClass: "sfHover",
        _openMenuBodyClass: "td-open-menu",
        init: function() {
            var a = jQuery("#td-header-menu .sf-menu"),
                b = jQuery("#td-header-menu .sf-menu, .top-header-menu"),
                c = b.find(".menu-item-has-children > a, .td-mega-menu > a");
            c.append('<i class="td-icon-menu-down"></i>');
            a.supersubs({
                minWidth: 10,
                maxWidth: 20,
                extraWidth: 1
            });
            c.addClass("sf-with-ul");
            b.addClass("sf-js-enabled");
            c.parent().find("ul").first().css("display", "none");
            tdMenu._mainMenu = a;
            tdMenu._itemsWithSubmenu = c;
            tdMenu._outsideClickArea = jQuery(window).not(tdMenu._outsideClickExcludedAreas);
            tdMenu._setHover(c, a)
        },
        _getSubmenuPosition: function(a) {
            var b = jQuery(window).width();
            a = a.children("ul").first();
            if (0 < a.length) {
                var c = a.offset().left + a.width();
                c > b && (a.parent().parent().hasClass("sf-menu") ? a.css("left", "-" + (c - b) + "px") : a.addClass("reversed").css("left",
                    "-" + (a.width() + 0) + "px"))
            }
        },
        _getMouseAngleDirection: function(a, b, c, d) {
            return Math.atan2(c - a, d - b) / Math.PI * 180
        },
        _setHover: function(a, b) {
            if (tdDetect.isTouchDevice) jQuery(document).on("touchstart", "body", function(b) {
                var c = a.parent(),
                    d = jQuery("body");
                d.hasClass(tdMenu._openMenuBodyClass) && !c.is(b.target) && 0 === c.has(b.target).length && (c.removeClass(tdMenu._openMenuClass), c.children("ul").hide(), d.removeClass(tdMenu._openMenuBodyClass))
            }), a.on("touchstart", function(b) {
                b.preventDefault();
                b.stopPropagation();
                var c = jQuery(this);
                b = c.parent();
                var d = jQuery("body");
                b.hasClass(tdMenu._openMenuClass) ? null !== c.attr("href") && "#" !== c.attr("href") ? window.location.href = c.attr("href") : ((b.parent().hasClass("sf-menu") || b.parent().hasClass("top-header-menu")) && d.removeClass(tdMenu._openMenuBodyClass), b.removeClass(tdMenu._openMenuClass), b.find("ul").hide(), b.find("li").removeClass(tdMenu._openMenuClass)) : (b.parent().hasClass("sf-menu") || b.parent().hasClass("top-header-menu") ? (a.parent().removeClass(tdMenu._openMenuClass),
                    a.parent().children("ul").hide()) : (c = b.siblings(), c.removeClass(tdMenu._openMenuClass), c.find("ul").hide(), c.find("li").removeClass(tdMenu._openMenuClass)), b.addClass(tdMenu._openMenuClass), b.children("ul").show(), tdMenu._getSubmenuPosition(b), d.addClass(tdMenu._openMenuBodyClass))
            });
            else {
                var c = {},
                    d, e = !0;
                b.on("mouseleave", function() {
                    a.parent().removeClass(tdMenu._openMenuClass);
                    a.parent().children("ul").hide();
                    c = {}
                });
                b.find(".menu-item").hover(function() {
                    var b = jQuery(this),
                        l = "",
                        g, p;
                    if (b.hasClass("menu-item-has-children") ||
                        b.hasClass("td-mega-menu"))
                        if (b.parent().hasClass("sf-menu"))
                            if (jQuery.isEmptyObject(c)) b.addClass(tdMenu._openMenuClass), b.children("ul").show(), c = b;
                            else {
                                if (b[0] !== c[0]) {
                                    var w = p = g = 0;
                                    var P = null;
                                    !0 === e && (e = !1, d = setTimeout(function() {
                                        a.parent().removeClass(tdMenu._openMenuClass);
                                        a.parent().children("ul").hide();
                                        b.addClass(tdMenu._openMenuClass);
                                        b.children("ul").show();
                                        c = b
                                    }, 400));
                                    b.on("mousemove", function(f) {
                                        5 <= g ? (g = 0, P = tdMenu._getMouseAngleDirection(p, w, f.pageX, f.pageY), p = f.pageX, w = f.pageY) : (g++, 0 ===
                                            p && 0 === w && (p = f.pageX, w = f.pageY));
                                        null !== P && (85 < P || -85 > P) && (a.parent().removeClass(tdMenu._openMenuClass), a.parent().children("ul").hide(), b.addClass(tdMenu._openMenuClass), b.children("ul").show(), b.off("mousemove"), clearTimeout(d), e = !0, c = b)
                                    })
                                }
                            } else l = b.siblings(), l.removeClass(tdMenu._openMenuClass), l.find("ul").hide(), l.find("li").removeClass(tdMenu._openMenuClass), b.addClass(tdMenu._openMenuClass), b.children("ul").show(), tdMenu._getSubmenuPosition(b);
                    else b.parent().hasClass("sf-menu") || b.parent().hasClass("top-header-menu") ?
                        jQuery.isEmptyObject(c) || (w = p = g = 0, P = null, !0 === e && (e = !1, d = setTimeout(function() {
                            a.parent().removeClass(tdMenu._openMenuClass);
                            a.parent().children("ul").hide();
                            c = {}
                        }, 400)), b.on("mousemove", function(f) {
                            5 <= g ? (g = 0, P = tdMenu._getMouseAngleDirection(p, w, f.pageX, f.pageY), p = f.pageX, w = f.pageY) : (g++, 0 === p && 0 === w && (p = f.pageX, w = f.pageY));
                            null !== P && (85 < P || -85 > P) && (a.parent().removeClass(tdMenu._openMenuClass), a.parent().children("ul").hide(), b.off("mousemove"), clearTimeout(d), e = !0, c = {})
                        })) : (c = b.parent(), l = b.siblings(),
                            l.removeClass(tdMenu._openMenuClass), l.find("ul").hide(), l.find("li").removeClass(tdMenu._openMenuClass))
                }, function() {
                    var a = jQuery(this);
                    !1 === e && (clearTimeout(d), e = !0);
                    a.off("mousemove")
                })
            }
        },
        unsetHover: function() {
            null !== tdMenu._itemsWithSubmenu && tdMenu._itemsWithSubmenu.off();
            null !== tdMenu._outsideClickArea && tdMenu._outsideClickArea.off()
        }
    }
})();
jQuery().ready(function() {
    tdMenu.init()
});
var tdUtil = {};
(function() {
    tdUtil = {
        email_pattern: /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,
        stopBubble: function(a) {
            a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
        },
        isEmail: function(a) {
            return tdUtil.email_pattern.test(a)
        },
        imageMoveClassToFigure: function(a) {
            jQuery("figure ." + a).each(function() {
                jQuery(this).parents("figure:first").addClass(a);
                jQuery(this).removeClass(a)
            })
        },
        getBackendVar: function(a) {
            return "undefined" === typeof window[a] ?
                "" : window[a]
        },
        isUndefined: function(a) {
            return void 0 === a
        },
        scrollToElement: function(a, b) {
            tdIsScrollingAnimation = !0;
            jQuery("html, body").stop();
            var c = a.offset().top > jQuery(document).height() - jQuery(window).height() ? jQuery(document).height() - jQuery(window).height() : a.offset().top;
            jQuery("html, body").animate({
                scrollTop: c
            }, {
                duration: b,
                easing: "easeInOutQuart",
                complete: function() {
                    tdIsScrollingAnimation = !1
                }
            })
        },
        scrollIntoView: function(a) {
            tdIsScrollingAnimation = !0;
            if (!0 !== tdDetect.isMobileDevice) {
                jQuery("html, body").stop();
                a = a.offset().top;
                a -= 150;
                var b = Math.abs(jQuery(window).scrollTop() - a) / 5;
                jQuery("html, body").animate({
                    scrollTop: a
                }, {
                    duration: 1100 + b,
                    easing: "easeInOutQuart",
                    complete: function() {
                        tdIsScrollingAnimation = !1
                    }
                })
            }
        },
        scrollToPosition: function(a, b) {
            tdIsScrollingAnimation = !0;
            jQuery("html, body").stop();
            jQuery("html, body").animate({
                scrollTop: a
            }, {
                duration: b,
                easing: "easeInOutQuart",
                complete: function() {
                    tdIsScrollingAnimation = !1
                }
            })
        },
        tdMoveY: function(a, b) {
            var c = "translate3d(0px," + b + "px, 0px)";
            a.style["-webkit-transform"] =
                c;
            a.style["-moz-transform"] = c;
            a.style["-ms-transform"] = c;
            a.style["-o-transform"] = c;
            a.style.transform = c
        },
        isValidUrl: function(a) {
            return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a) ? !0 : !1
        },
        round: function(a, b, c) {
            b = Math.pow(10, b | 0);
            a *= b;
            var d = 0 < a | -(0 > a);
            var e = a % 1 === .5 * d;
            var f = Math.floor(a);
            if (e) switch (c) {
                case "PHP_ROUND_HALF_DOWN":
                    a = f + (0 > d);
                    break;
                case "PHP_ROUND_HALF_EVEN":
                    a = f + f % 2 * d;
                    break;
                case "PHP_ROUND_HALF_ODD":
                    a = f + !(f % 2);
                    break;
                default:
                    a = f + (0 < d)
            }
            return (e ? a : Math.round(a)) / b
        }
    }
})();
var tdAffix = {};
(function() {
    tdAffix = {
        allow_scroll: !0,
        menu_selector: "",
        menu_wrap_selector: "",
        tds_snap_menu: "",
        tds_snap_menu_logo: "",
        is_menu_affix_height_computed: !1,
        is_menu_affix_height_on_mobile_computed: !1,
        menu_affix_height: 0,
        menu_affix_height_on_mobile: 0,
        main_menu_height: 0,
        top_offset: 0,
        menu_offset: 0,
        is_requestAnimationFrame_running: !1,
        is_menu_affix: !1,
        is_top_menu: !1,
        menu_offset_max_hit: !1,
        menu_offset_min_hit: !0,
        scroll_window_scrollTop_last: 0,
        init: function(a) {
            tdAffix.menu_selector = a.menu_selector;
            tdAffix.menu_wrap_selector =
                a.menu_wrap_selector;
            tdAffix.tds_snap_menu = a.tds_snap_menu;
            tdAffix.tds_snap_menu_logo = a.tds_snap_menu_logo;
            tdAffix.menu_affix_height = a.menu_affix_height;
            tdAffix.menu_affix_height_on_mobile = a.menu_affix_height_on_mobile;
            tdAffix.tds_snap_menu && (tdDetect.isFirefox && (tdAffix.compute_wrapper(), tdAffix.compute_top()), jQuery().ready(function() {
                tdAffix.compute_wrapper();
                tdAffix.compute_top()
            }), jQuery(window).load(function() {
                tdAffix.compute_wrapper();
                tdAffix.compute_top();
                setTimeout(function() {
                        tdAffix.compute_top()
                    },
                    1E3)
            }))
        },
        _get_menu_affix_height: function() {
            if (!0 === tdDetect.isPhoneScreen) return !tdAffix.is_menu_affix_height_on_mobile_computed && tdAffix.is_menu_affix && (tdAffix.is_menu_affix_height_on_mobile_computed = !0, tdAffix.menu_affix_height_on_mobile = jQuery(tdAffix.menu_selector).height()), tdAffix.menu_affix_height_on_mobile;
            !tdAffix.is_menu_affix_height_computed && tdAffix.is_menu_affix && (tdAffix.is_menu_affix_height_computed = !0, tdAffix.menu_affix_height = jQuery(tdAffix.menu_selector).height());
            return tdAffix.menu_affix_height
        },
        td_events_scroll: function(a) {
            if (tdAffix.allow_scroll && tdAffix.tds_snap_menu) {
                var b = "";
                if ("snap" !== tdAffix.tds_snap_menu && ("smart_snap_mobile" !== tdAffix.tds_snap_menu || !0 === tdDetect.isPhoneScreen)) {
                    var c = 0;
                    a !== tdAffix.scroll_window_scrollTop_last && (b = a > tdAffix.scroll_window_scrollTop_last ? "down" : "up", c = Math.abs(a - tdAffix.scroll_window_scrollTop_last));
                    tdAffix.scroll_window_scrollTop_last = a
                }
                "" !== tdAffix.tds_snap_menu && "" !== tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").addClass("td-logo-sticky");
                if (a > tdAffix.top_offset + (tdAffix.main_menu_height / 2 - tdAffix._get_menu_affix_height() / 2) || !0 === tdAffix.is_menu_affix && "smart_snap_always" === tdAffix.tds_snap_menu && a > tdAffix.top_offset - tdAffix._get_menu_affix_height() || !0 === tdAffix.is_top_menu) {
                    var d = jQuery(tdAffix.menu_selector);
                    tdAffix._affix_on(d);
                    "snap" === tdAffix.tds_snap_menu || "smart_snap_mobile" === tdAffix.tds_snap_menu && !1 === tdDetect.isPhoneScreen || (!1 === tdAffix.menu_offset_max_hit && "down" === b || !1 === tdAffix.menu_offset_min_hit && "up" === b) && window.requestAnimationFrame(function() {
                        var e =
                            0;
                        0 < a && ("down" === b ? (e = tdAffix.menu_offset - c, e < -tdAffix._get_menu_affix_height() && (e = -tdAffix._get_menu_affix_height())) : "up" === b && (e = tdAffix.menu_offset + c, 0 < e && (e = 0)));
                        tdUtil.tdMoveY(d[0], e);
                        tdAffix.menu_offset_min_hit = 0 === e ? !0 : !1;
                        e === -tdAffix._get_menu_affix_height() ? (tdAffix.menu_offset_max_hit = !0, (!0 === tdDetect.isIos || tdDetect.isSafari) && d.hide(), "" !== tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").addClass("td-logo-sticky")) : (tdAffix.menu_offset_max_hit = !1, (!0 === tdDetect.isIos || tdDetect.isSafari) &&
                            d.show());
                        tdAffix.menu_offset = e
                    }, d[0])
                } else tdAffix._affix_off(jQuery(tdAffix.menu_selector))
            }
        },
        compute_top: function() {
            tdAffix.top_offset = jQuery(tdAffix.menu_wrap_selector).offset().top;
            "smart_snap_always" === tdAffix.tds_snap_menu && (tdAffix.top_offset += tdAffix.menu_affix_height);
            tdAffix.is_top_menu = 1 === tdAffix.top_offset ? !0 : !1;
            tdAffix.td_events_scroll(jQuery(window).scrollTop())
        },
        compute_wrapper: function() {
            jQuery(tdAffix.menu_selector).hasClass("td-affix") ? (jQuery(tdAffix.menu_selector).removeClass("td-affix"),
                tdAffix.main_menu_height = jQuery(tdAffix.menu_selector).height(), jQuery(tdAffix.menu_selector).addClass("td-affix")) : tdAffix.main_menu_height = jQuery(tdAffix.menu_selector).height();
            jQuery(tdAffix.menu_wrap_selector).css("height", tdAffix.main_menu_height)
        },
        _affix_on: function(a) {
            !1 === tdAffix.is_menu_affix ? ("smart_snap_always" === tdAffix.tds_snap_menu && !0 !== tdDetect.isPhoneScreen && a.css("visibility", "hidden"), tdAffix.menu_offset = -tdAffix.top_offset, a.addClass("td-affix"), jQuery("body").addClass("body-td-affix"),
                tdAffix.is_menu_affix = !0) : !0 !== tdDetect.isPhoneScreen && a.css("visibility", "")
        },
        _affix_off: function(a) {
            !0 === tdAffix.is_menu_affix && (jQuery(tdAffix.menu_selector).removeClass("td-affix"), "" === tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").removeClass("td-logo-sticky"), jQuery("body").removeClass("body-td-affix"), tdAffix.is_menu_affix = !1, tdUtil.tdMoveY(a[0], 0), (!0 === tdDetect.isIos || tdDetect.isSafari) && a.show())
        }
    }
})();
"use strict";
jQuery().ready(function() {
    td_retina();
    td_mobile_menu_toogle();
    td_resize_videos();
    jQuery("input, textarea").placeholder();
    td_more_articles_box.init();
    td_smart_lists_magnific_popup();
    td_smart_list_dropdown();
    if ("undefined" !== typeof tdsDateFormat) {
        var a = Math.floor((new Date).getTime() / 1E3),
            a = td_date_i18n(tdsDateFormat, a);
        jQuery(".td_data_time").text(a)
    }
    setMenuMinHeight();
    td_comments_form_validation()
});

function td_smart_list_dropdown() {
    jQuery(".td-smart-list-dropdown").on("change", function() {
        window.location = this.value
    })
}
var td_more_articles_box = {
        is_box_visible: !1,
        cookie: "",
        distance_from_top: 400,
        init: function() {
            td_more_articles_box.cookie = td_read_site_cookie("td-cookie-more-articles");
            !isNaN(parseInt(tds_more_articles_on_post_pages_distance_from_top)) && isFinite(tds_more_articles_on_post_pages_distance_from_top) && 0 < parseInt(tds_more_articles_on_post_pages_distance_from_top) ? td_more_articles_box.distance_from_top = parseInt(tds_more_articles_on_post_pages_distance_from_top) : td_more_articles_box.distance_from_top = 400;
            jQuery(".td-close-more-articles-box").click(function() {
                jQuery(".td-more-articles-box").removeClass("td-front-end-display-block");
                jQuery(".td-more-articles-box").hide();
                !isNaN(parseInt(tds_more_articles_on_post_time_to_wait)) && isFinite(tds_more_articles_on_post_time_to_wait) && td_set_cookies_life(["td-cookie-more-articles", "hide-more-articles-box", 864E5 * parseInt(tds_more_articles_on_post_time_to_wait)])
            })
        },
        td_events_scroll: function(a) {
            tdIsScrollingAnimation || "show" != tdUtil.getBackendVar("tds_more_articles_on_post_enable") ||
                "hide-more-articles-box" == td_more_articles_box.cookie || (a > td_more_articles_box.distance_from_top ? !1 === td_more_articles_box.is_box_visible && (jQuery(".td-more-articles-box").addClass("td-front-end-display-block"), td_more_articles_box.is_box_visible = !0) : !0 === td_more_articles_box.is_box_visible && (jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"), td_more_articles_box.is_box_visible = !1))
        }
    },
    td_resize_timer_id;
jQuery(window).resize(function() {
    clearTimeout(td_resize_timer_id);
    td_resize_timer_id = setTimeout(function() {
        td_done_resizing()
    }, 200)
});

function td_done_resizing() {
    td_resize_videos()
}

function td_resize_videos() {
    jQuery(document).find('iframe[src*="youtube.com"]').each(function() {
        var a = jQuery(this).parent().parent().parent(),
            b = jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),
            c = a.hasClass("vc_video-aspect-ratio-43"),
            a = a.hasClass("vc_video-aspect-ratio-235");
        b || c || a || (b = jQuery(this), b.attr("width", "100%"), c = b.width(), b.css("height", .5625 * c, "important"))
    });
    jQuery(document).find('iframe[src*="vimeo.com"]').each(function() {
        var a = jQuery(this).parent().parent().parent(),
            b = jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),
            c = a.hasClass("vc_video-aspect-ratio-43"),
            a = a.hasClass("vc_video-aspect-ratio-235");
        b || c || a || (b = jQuery(this), b.attr("width", "100%"), c = b.width(), b.css("height", .5625 * c, "important"))
    });
    jQuery(document).find('iframe[src*="dailymotion.com"]').each(function() {
        var a = jQuery(this).parent().parent().parent(),
            b = a.hasClass("vc_video-aspect-ratio-43"),
            a = a.hasClass("vc_video-aspect-ratio-235");
        b || a || (b = jQuery(this), b.attr("width", "100%"), a = b.width(),
            b.css("height", .6 * a, "important"))
    })
}

function td_mobile_menu() {}

function td_mobile_menu_toogle() {
    jQuery("#td-top-mobile-toggle a, .td-mobile-close a").click(function() {
        jQuery("body").hasClass("td-menu-mob-open-menu") ? jQuery("body").removeClass("td-menu-mob-open-menu") : jQuery("body").addClass("td-menu-mob-open-menu")
    });
    jQuery(document).find("#td-mobile-nav .menu-item-has-children").each(function(a) {
        a = "td_mobile_elem_with_submenu_" + a;
        jQuery(this).addClass(a);
        jQuery(this).children("a").addClass("td-link-element-after");
        jQuery(this).click(function(a) {
            var b = jQuery(a.target);
            !b.length || !b.hasClass("td-element-after") && !b.hasClass("td-link-element-after") || "#" !== b.attr("href") && void 0 !== b.attr("href") || (a.preventDefault(), a.stopPropagation(), jQuery(this).toggleClass("td-sub-menu-open"))
        })
    })
}

function td_retina() {
    1 < window.devicePixelRatio && (jQuery(".td-retina").each(function(a) {
        a = jQuery(this).attr("src").replace(".png", "@2x.png");
        a = a.replace(".jpg", "@2x.jpg");
        jQuery(this).attr("src", a)
    }), jQuery(".td-retina-data").each(function(a) {
        jQuery(this).attr("src", jQuery(this).data("retina"));
        jQuery(this).addClass("td-retina-version")
    }))
}
tdDetect.isTouchDevice || "" == tdUtil.getBackendVar("td_ad_background_click_link") || jQuery("body").click(function(a) {
    a = jQuery(a.target ? a.target : a.srcElement);
    if (a.hasClass("td-outer-container") || a.hasClass("td-theme-wrap") || a.hasClass("td-header-wrap")) "_blank" == td_ad_background_click_target ? window.open(td_ad_background_click_link) : location.href = td_ad_background_click_link
});

function td_read_site_cookie(a) {
    a = escape(a) + "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
            " " == d.charAt(0);) d = d.substring(1, d.length);
        if (0 == d.indexOf(a)) return unescape(d.substring(a.length, d.length))
    }
    return null
}

function td_set_cookies_life(a) {
    var b = new Date;
    b.setTime(b.getTime() + a[2]);
    document.cookie = a[0] + "=" + a[1] + "; expires=" + b.toGMTString() + "; path=/"
}
var tdIsScrollingAnimation = !1,
    td_mouse_wheel_or_touch_moved = !1;
jQuery(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(a) {
    !1 !== tdIsScrollingAnimation && (tdIsScrollingAnimation = !1, td_mouse_wheel_or_touch_moved = !0, jQuery("html, body").stop())
});
document.addEventListener && document.addEventListener("touchmove", function(a) {
    !1 !== tdIsScrollingAnimation && (tdIsScrollingAnimation = !1, td_mouse_wheel_or_touch_moved = !0, jQuery("html, body").stop())
}, !1);
var td_scroll_to_top_is_visible = !1;

function td_events_scroll_scroll_to_top(a) {
    tdIsScrollingAnimation || (400 < a ? !1 === td_scroll_to_top_is_visible && (td_scroll_to_top_is_visible = !0, jQuery(".td-scroll-up").addClass("td-scroll-up-visible")) : !0 === td_scroll_to_top_is_visible && (td_scroll_to_top_is_visible = !1, jQuery(".td-scroll-up").removeClass("td-scroll-up-visible")))
}
jQuery(".td-scroll-up").click(function() {
    if (!tdIsScrollingAnimation) return td_scroll_to_top_is_visible = !1, jQuery(".td-scroll-up").removeClass("td-scroll-up-visible"), td_more_articles_box.is_box_visible = !1, jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"), tdUtil.scrollToPosition(0, 1200), !1
});
jQuery(".td-read-down a").click(function(a) {
    a.preventDefault();
    tdUtil.scrollToPosition(jQuery(".td-full-screen-header-image-wrap").height(), 1200)
});

function td_post_template_6_title() {
    function a() {
        d = jQuery(document).scrollTop();
        if (950 >= d) {
            var a = 1 - d / 800;
            !0 === tdDetect.isIe8 && (a = 1);
            a = Math.round(100 * a) / 100;
            b.style.opacity = a;
            tdUtil.tdMoveY(c, - -Math.round(d / 4));
            e = -Math.round(d / 8);
            tdUtil.tdMoveY(b, -e)
        }
        f = !1
    }
    var b = document.getElementById("td_parallax_header_6"),
        c = document.getElementById("td-full-screen-header-image"),
        d = "",
        e;
    jQuery(window).scroll(function() {
        !1 === f && window.requestAnimationFrame(a);
        f = !0
    });
    var f = !1
}

function td_smart_lists_magnific_popup() {
    jQuery(".td-lightbox-enabled").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1],
            tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
        },
        image: {
            tError: "<a href='%url%'>The image #%curr%</a> could not be loaded.",
            titleSrc: function(a) {
                return a.el.attr("data-caption")
            }
        },
        zoom: {
            enabled: !0,
            duration: 300,
            opener: function(a) {
                return a.find("img")
            }
        },
        callbacks: {
            change: function(a) {
                if ("" != a.el[0].id) {
                    var b = a.el[0].id.split("_");
                    jQuery(".td-iosSlider").iosSlider("goToSlide", parseInt(b[1]) + 1)
                } else tdModalImageLastEl = a.el, setTimeout(function() {
                    tdUtil.scrollIntoView(a.el)
                }, 100)
            },
            beforeClose: function() {
                "" != tdModalImageLastEl && tdUtil.scrollIntoView(tdModalImageLastEl)
            }
        }
    })
}

function td_get_document_width() {
    var a = 0;
    self.innerHeight ? a = self.innerWidth : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientWidth : document.body && (a = document.body.clientWidth);
    return a
}

function td_get_document_height() {
    var a = 0;
    self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
    return a
}

function setMenuMinHeight() {
    if ("undefined" === typeof tdEvents.previousWindowInnerWidth) tdEvents.previousWindowInnerWidth = tdEvents.window_innerWidth;
    else if (tdEvents.previousWindowInnerWidth === tdEvents.window_innerWidth) return;
    tdEvents.previousWindowInnerWidth = tdEvents.window_innerWidth;
    var a = jQuery("#td-mobile-nav"),
        b = tdEvents.window_innerHeight + 1;
    a.length && a.css("min-height", b + "px");
    if (tdDetect.isMobileDevice) {
        var a = jQuery(".td-menu-background"),
            c = jQuery(".td-search-background");
        a.length && a.css("height",
            b + 70 + "px");
        c.length && c.css("height", b + 70 + "px")
    }
}

function td_comments_form_validation() {
    jQuery(".comment-form").submit(function(a) {
        jQuery("form#commentform :input").each(function() {
            var b = jQuery(this),
                c = jQuery(this).parent().parent();
            b.attr("aria-required") && ("" == b.val() ? (a.preventDefault(), c.addClass("td-comment-form-warnings"), "comment" == b.attr("id") ? (c.find(".td-warning-comment").show(200), b.css("border", "1px solid #ff7a7a")) : "author" == b.attr("id") ? (c.find(".td-warning-author").show(200), b.css("border", "1px solid #ff7a7a")) : "email" == b.attr("id") &&
                (c.find(".td-warning-email").show(200), b.css("border", "1px solid #ff7a7a"))) : "email" == b.attr("id") && !1 === tdUtil.isEmail(b.val()) && (a.preventDefault(), c.addClass("td-comment-form-warnings"), c.find(".td-warning-email-error").show(200)))
        })
    });
    jQuery("form#commentform :input").each(function() {
        var a = jQuery(this).parent().parent(),
            b = jQuery(this);
        b.focus(function() {
            "comment" == b.attr("id") ? (a.find(".td-warning-comment").hide(200), b.css("border", "1px solid #e1e1e1")) : "author" == b.attr("id") ? (a.find(".td-warning-author").hide(200),
                b.css("border", "1px solid #e1e1e1")) : "email" == b.attr("id") && (a.find(".td-warning-email").hide(200), a.find(".td-warning-email-error").hide(200), b.css("border", "1px solid #e1e1e1"))
        })
    })
}
var tdLoadingBox = {};
(function() {
    tdLoadingBox = {
        speed: 40,
        arrayColorsTemp: "rgba(99, 99, 99, 0);rgba(99, 99, 99, 0.05);rgba(99, 99, 99, 0.08);rgba(99, 99, 99, 0.2);rgba(99, 99, 99, 0.3);rgba(99, 99, 99, 0.5);rgba(99, 99, 99, 0.6);rgba(99, 99, 99, 1)".split(";"),
        arrayColors: [],
        statusAnimation: "stop",
        stop: function() {
            tdLoadingBox.statusAnimation = "stop"
        },
        init: function(a, b) {
            !1 === tdUtil.isUndefined(b) && (tdLoadingBox.speed = b);
            var c = /^#[a-zA-Z0-9]{3,6}$/;
            a && c.test(a) ? (c = tdLoadingBox.hexToRgb(a), c = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", ",
                tdLoadingBox.arrayColors[7] = c + " 0.9)", tdLoadingBox.arrayColors[6] = c + " 0.7)", tdLoadingBox.arrayColors[5] = c + " 0.5)", tdLoadingBox.arrayColors[4] = c + " 0.3)", tdLoadingBox.arrayColors[3] = c + " 0.15)", tdLoadingBox.arrayColors[2] = c + " 0.15)", tdLoadingBox.arrayColors[1] = c + " 0.15)", tdLoadingBox.arrayColors[0] = c + " 0.15)") : tdLoadingBox.arrayColors = tdLoadingBox.arrayColorsTemp.slice(0);
            "stop" === tdLoadingBox.statusAnimation && (tdLoadingBox.statusAnimation = "display", this.render())
        },
        render: function(a) {
            tdLoadingBox.animationDisplay('<div class="td-lb-box td-lb-box-1" style="background-color:' +
                tdLoadingBox.arrayColors[0] + '"></div><div class="td-lb-box td-lb-box-2" style="background-color:' + tdLoadingBox.arrayColors[1] + '"></div><div class="td-lb-box td-lb-box-3" style="background-color:' + tdLoadingBox.arrayColors[2] + '"></div><div class="td-lb-box td-lb-box-4" style="background-color:' + tdLoadingBox.arrayColors[3] + '"></div><div class="td-lb-box td-lb-box-5" style="background-color:' + tdLoadingBox.arrayColors[4] + '"></div><div class="td-lb-box td-lb-box-6" style="background-color:' + tdLoadingBox.arrayColors[5] +
                '"></div><div class="td-lb-box td-lb-box-7" style="background-color:' + tdLoadingBox.arrayColors[6] + '"></div><div class="td-lb-box td-lb-box-8" style="background-color:' + tdLoadingBox.arrayColors[7] + '"></div>');
            a = [tdLoadingBox.arrayColors[0], tdLoadingBox.arrayColors[1], tdLoadingBox.arrayColors[2], tdLoadingBox.arrayColors[3], tdLoadingBox.arrayColors[4], tdLoadingBox.arrayColors[5], tdLoadingBox.arrayColors[6], tdLoadingBox.arrayColors[7]];
            tdLoadingBox.arrayColors[0] = a[7];
            tdLoadingBox.arrayColors[1] = a[0];
            tdLoadingBox.arrayColors[2] = a[1];
            tdLoadingBox.arrayColors[3] = a[2];
            tdLoadingBox.arrayColors[4] = a[3];
            tdLoadingBox.arrayColors[5] = a[4];
            tdLoadingBox.arrayColors[6] = a[5];
            tdLoadingBox.arrayColors[7] = a[6];
            "display" === tdLoadingBox.statusAnimation ? setTimeout(tdLoadingBox.render, tdLoadingBox.speed) : tdLoadingBox.animationDisplay("")
        },
        animationDisplay: function(a) {
            jQuery(".td-loader-gif").html(a)
        },
        hexToRgb: function(a) {
            return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2],
                    16),
                b: parseInt(a[3], 16)
            } : null
        }
    }
})();
var tdAjaxSearch = {};
jQuery().ready(function() {
    tdAjaxSearch.init()
});
(function() {
    tdAjaxSearch = {
        _current_selection_index: 0,
        _last_request_results_count: 0,
        _first_down_up: !0,
        _is_search_open: !1,
        init: function() {
            jQuery(document).click(function(a) {
                "td-icon-search" !== a.target.className && "td-header-search" !== a.target.id && "td-header-search-top" !== a.target.id && !0 === tdAjaxSearch._is_search_open && tdAjaxSearch.hide_search_box()
            });
            jQuery("#td-header-search-button").click(function(a) {
                a.preventDefault();
                !0 === tdAjaxSearch._is_search_open ? tdAjaxSearch.hide_search_box() : tdAjaxSearch.show_search_box()
            });
            jQuery("#td-header-search-button-mob").click(function(a) {
                jQuery("body").addClass("td-search-opened");
                var b = jQuery("#td-header-search-mob");
                setTimeout(function() {
                    b.focus()
                }, 1300);
                0 < b.val().trim().length && tdAjaxSearch.do_ajax_call_mob()
            });
            jQuery(".td-search-close a").click(function() {
                jQuery("body").removeClass("td-search-opened")
            });
            jQuery("#td-header-search").keydown(function(a) {
                if (a.which && 39 === a.which || a.keyCode && 39 === a.keyCode || a.which && 37 === a.which || a.keyCode && 37 === a.keyCode) tdAjaxSearch.td_aj_search_input_focus();
                else {
                    if (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) return a = jQuery(".td-aj-cur-element"), 0 < a.length ? (a = a.find(".entry-title a").attr("href"), window.location = a) : jQuery(this).parent().parent().submit(), !1;
                    if (a.which && 40 === a.which || a.keyCode && 40 === a.keyCode) return tdAjaxSearch.move_prompt_down(), !1;
                    if (a.which && 38 === a.which || a.keyCode && 38 === a.keyCode) return tdAjaxSearch.move_prompt_up(), !1;
                    (a.which && 8 === a.which || a.keyCode && 8 === a.keyCode) && 1 === jQuery(this).val().length && jQuery("#td-aj-search").empty();
                    tdAjaxSearch.td_aj_search_input_focus();
                    setTimeout(function() {
                        tdAjaxSearch.do_ajax_call()
                    }, 100);
                    return !0
                }
            });
            jQuery("#td-header-search-mob").keydown(function(a) {
                if (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) return a = jQuery(".td-aj-cur-element"), 0 < a.length ? (a = a.find(".entry-title a").attr("href"), window.location = a) : jQuery(this).parent().parent().submit(), !1;
                (a.which && 8 === a.which || a.keyCode && 8 === a.keyCode) && 1 === jQuery(this).val().length && jQuery("#td-aj-search-mob").empty();
                setTimeout(function() {
                        tdAjaxSearch.do_ajax_call_mob()
                    },
                    100);
                return !0
            })
        },
        show_search_box: function() {
            jQuery(".td-drop-down-search").addClass("td-drop-down-search-open");
            !0 !== tdDetect.isIos && setTimeout(function() {
                document.getElementById("td-header-search").focus()
            }, 200);
            tdAjaxSearch._is_search_open = !0
        },
        hide_search_box: function() {
            jQuery(".td-drop-down-search").removeClass("td-drop-down-search-open");
            tdAjaxSearch._is_search_open = !1
        },
        move_prompt_up: function() {
            !0 === tdAjaxSearch._first_down_up ? (tdAjaxSearch._first_down_up = !1, 0 === tdAjaxSearch._current_selection_index ?
                tdAjaxSearch._current_selection_index = tdAjaxSearch._last_request_results_count - 1 : tdAjaxSearch._current_selection_index--) : 0 === tdAjaxSearch._current_selection_index ? tdAjaxSearch._current_selection_index = tdAjaxSearch._last_request_results_count : tdAjaxSearch._current_selection_index--;
            tdAjaxSearch._repaintCurrentElement()
        },
        move_prompt_down: function() {
            !0 === tdAjaxSearch._first_down_up ? tdAjaxSearch._first_down_up = !1 : tdAjaxSearch._current_selection_index === tdAjaxSearch._last_request_results_count ? tdAjaxSearch._current_selection_index =
                0 : tdAjaxSearch._current_selection_index++;
            tdAjaxSearch._repaintCurrentElement()
        },
        _repaintCurrentElement: function() {
            jQuery(".td_module_wrap").removeClass("td-aj-cur-element");
            tdAjaxSearch._current_selection_index > tdAjaxSearch._last_request_results_count - 1 ? jQuery(".td-search-form").fadeTo(100, 1) : (tdAjaxSearch.td_aj_search_input_remove_focus(), jQuery(".td_module_wrap").eq(tdAjaxSearch._current_selection_index).addClass("td-aj-cur-element"))
        },
        td_aj_search_input_focus: function() {
            tdAjaxSearch._current_selection_index =
                0;
            tdAjaxSearch._first_down_up = !0;
            jQuery(".td-search-form").fadeTo(100, 1);
            jQuery(".td_module_wrap").removeClass("td-aj-cur-element")
        },
        td_aj_search_input_remove_focus: function() {
            0 !== tdAjaxSearch._last_request_results_count && jQuery(".td-search-form").css("opacity", .5)
        },
        process_ajax_response: function(a) {
            var b = jQuery("#td-header-search").val();
            "" === b ? jQuery("#td-aj-search").empty() : (a = jQuery.parseJSON(a), a.td_search_query === b && (tdAjaxSearch._current_selection_index = 0, tdAjaxSearch._last_request_results_count =
                a.td_total_in_list, tdAjaxSearch._first_down_up = !0, jQuery("#td-aj-search").html(a.td_data), "undefined" !== typeof window.tdAnimationStack && !0 === window.tdAnimationStack.activated && (window.tdAnimationStack.check_for_new_items("#td-aj-search .td-animation-stack", window.tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0), window.tdAnimationStack.compute_items())))
        },
        process_ajax_response_mob: function(a) {
            var b = jQuery("#td-header-search-mob").val();
            "" === b ? jQuery("#td-aj-search-mob").empty() : (a = jQuery.parseJSON(a),
                a.td_search_query === b && (jQuery("#td-aj-search-mob").html(a.td_data), "undefined" !== typeof window.tdAnimationStack && !0 === window.tdAnimationStack.activated && (window.tdAnimationStack.check_for_new_items("#td-aj-search-mob .td-animation-stack", window.tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0), window.tdAnimationStack.compute_items())))
        },
        do_ajax_call: function() {
            var a = jQuery("#td-header-search").val();
            "" === a ? tdAjaxSearch.td_aj_search_input_focus() : tdLocalCache.exist(a) ? tdAjaxSearch.process_ajax_response(tdLocalCache.get(a)) :
                jQuery.ajax({
                    type: "POST",
                    url: td_ajax_url,
                    data: {
                        action: "td_ajax_search",
                        td_string: a
                    },
                    success: function(b, c, d) {
                        tdLocalCache.set(a, b);
                        tdAjaxSearch.process_ajax_response(b)
                    },
                    error: function(a, c, d) {}
                })
        },
        do_ajax_call_mob: function() {
            var a = jQuery("#td-header-search-mob").val();
            "" !== a && (tdLocalCache.exist(a) ? tdAjaxSearch.process_ajax_response_mob(tdLocalCache.get(a)) : jQuery.ajax({
                type: "POST",
                url: td_ajax_url,
                data: {
                    action: "td_ajax_search",
                    td_string: a
                },
                success: function(b, c, d) {
                    tdLocalCache.set(a, b);
                    tdAjaxSearch.process_ajax_response_mob(b)
                },
                error: function(a, c, d) {}
            }))
        }
    }
})();
"use strict";
jQuery().ready(function() {
    tdModalImage();
    tdUtil.imageMoveClassToFigure("td-post-image-full");
    tdUtil.imageMoveClassToFigure("td-post-image-right");
    tdUtil.imageMoveClassToFigure("td-post-image-left");
    "undefined" !== typeof window.tds_general_modal_image && "" !== window.tds_general_modal_image && jQuery(".single .td-post-content a > img").filter(function(a, b) {
        if (-1 !== b.className.indexOf("wp-image")) {
            var c = jQuery(b).parent(),
                d = c.attr("href"); - 1 !== d.indexOf(document.domain) && -1 !== d.indexOf("uploads") && c.addClass("td-modal-image")
        }
    })
});
var tdModalImageLastEl = "";

function tdModalImage() {
    jQuery("figure.wp-caption").each(function() {
        var a = jQuery(this).children("figcaption").html();
        jQuery(this).children("a").data("caption", a)
    });
    jQuery(".td-modal-image").each(function() {
        jQuery(this).parent().addClass("td-modal-image");
        jQuery(this).removeClass("td-modal-image")
    });
    jQuery("article").magnificPopup({
        type: "image",
        delegate: ".td-modal-image",
        gallery: {
            enabled: !0,
            tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
            tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
            tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
        },
        ajax: {
            tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
        },
        image: {
            tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
            titleSrc: function(a) {
                a = jQuery(a.el).data("caption");
                return "undefined" !== typeof a ? a : ""
            }
        },
        zoom: {
            enabled: !0,
            duration: 300,
            opener: function(a) {
                return a.find("img")
            }
        },
        callbacks: {
            change: function(a) {
                tdModalImageLastEl = a.el;
                tdUtil.scrollIntoView(a.el)
            },
            beforeClose: function() {
                tdAffix.allow_scroll = !1;
                tdUtil.scrollIntoView(tdModalImageLastEl);
                var a = setInterval(function() {
                    tdIsScrollingAnimation ||
                        (clearInterval(a), setTimeout(function() {
                            tdAffix.allow_scroll = !0
                        }, 100))
                }, 100)
            }
        }
    });
    "undefined" === typeof jetpackCarouselStrings && (jQuery("figure.gallery-item").each(function() {
            var a = jQuery(this).children("figcaption").html();
            jQuery(this).find("a").data("caption", a)
        }), jQuery(".tiled-gallery").magnificPopup({
            type: "image",
            delegate: "a",
            gallery: {
                enabled: !0,
                tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
                tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
                tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
            },
            ajax: {
                tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
            },
            image: {
                tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
                titleSrc: function(a) {
                    a = jQuery(a.el).parent().find(".tiled-gallery-caption").text();
                    return "undefined" !== typeof a ? a : ""
                }
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(a) {
                    return a.find("img")
                }
            },
            callbacks: {
                change: function(a) {
                    tdModalImageLastEl = a.el;
                    tdUtil.scrollIntoView(a.el)
                },
                beforeClose: function() {
                    tdUtil.scrollIntoView(tdModalImageLastEl)
                }
            }
        }),
        jQuery(".gallery").magnificPopup({
            type: "image",
            delegate: ".gallery-icon > a",
            gallery: {
                enabled: !0,
                tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
                tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
                tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
            },
            ajax: {
                tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
            },
            image: {
                tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
                titleSrc: function(a) {
                    a = jQuery(a.el).data("caption");
                    return "undefined" !== typeof a ? a : ""
                }
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(a) {
                    return a.find("img")
                }
            },
            callbacks: {
                change: function(a) {
                    tdModalImageLastEl = a.el;
                    tdUtil.scrollIntoView(a.el)
                },
                beforeClose: function() {
                    tdUtil.scrollIntoView(tdModalImageLastEl)
                }
            }
        }))
}
var tdBlocks = {};
(function() {
    function a() {
        function a(a, b) {
            !0 === d && a.target === e ? window.location = a.target : (d = !0, e = a.target, a.preventDefault(), setTimeout(function() {
                d = !1
            }, 300), c(a, b))
        }

        function c(a, b) {
            var c = b.data("td_block_id"),
                d = tdBlocks.tdGetBlockObjById(c);
            d.is_ajax_running = !0;
            jQuery(".mega-menu-sub-cat-" + c).removeClass("cur-sub-cat");
            b.addClass("cur-sub-cat");
            d.td_filter_value = b.data("td_filter_value");
            d.td_current_page = 1;
            tdBlocks.tdAjaxDoBlockRequest(d, "mega_menu")
        }
        jQuery(".td-ajax-next-page").click(function(a) {
            a.preventDefault();
            a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
            jQuery(this).hasClass("ajax-page-disabled") || !0 === a.is_ajax_running || (a.is_ajax_running = !0, a.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(a, "next"))
        });
        jQuery(".td-ajax-prev-page").click(function(a) {
            a.preventDefault();
            a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
            jQuery(this).hasClass("ajax-page-disabled") || !0 === a.is_ajax_running || (a.is_ajax_running = !0, a.td_current_page--, tdBlocks.tdAjaxDoBlockRequest(a, "back"))
        });
        jQuery(".td_ajax_load_more_js").click(function(a) {
            a.preventDefault();
            jQuery(this).hasClass("ajax-page-disabled") || (jQuery(this).css("visibility", "hidden"), a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id")), a.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(a, "load_more"), a.max_num_pages <= a.td_current_page && jQuery(this).addClass("ajax-page-disabled"))
        });
        tdDetect.isMobileDevice ? jQuery(".td-pulldown-filter-display-option").click(function() {
            var a = jQuery(this).data("td_block_id");
            jQuery("#td_pulldown_" + a).addClass("td-pulldown-filter-list-open");
            a = jQuery("#td_pulldown_" +
                a + "_list");
            a.removeClass("fadeOut");
            a.addClass("td_animated td_fadeIn")
        }) : jQuery(".td-pulldown-filter-display-option").hover(function() {
            var a = jQuery(this).data("td_block_id");
            jQuery("#td_pulldown_" + a).addClass("td-pulldown-filter-list-open");
            a = jQuery("#td_pulldown_" + a + "_list");
            a.removeClass("fadeOut");
            a.addClass("td_animated td_fadeIn");
            a.css("visibility", "visible")
        }, function() {
            var a = jQuery(this).data("td_block_id");
            jQuery("#td_pulldown_" + a).removeClass("td-pulldown-filter-list-open")
        });
        jQuery(".td-related-title a").click(function(a) {
            a.preventDefault();
            jQuery(".td-related-title").children("a").removeClass("td-cur-simple-item");
            jQuery(this).addClass("td-cur-simple-item");
            a = jQuery(this).data("td_block_id");
            a = tdBlocks.tdGetBlockObjById(a);
            a.td_filter_value = jQuery(this).data("td_filter_value");
            a.td_current_page = 1;
            tdBlocks.tdAjaxDoBlockRequest(a, "pull_down")
        });
        var d = !1,
            e = "";
        tdDetect.isTouchDevice ? jQuery(".block-mega-child-cats a").click(function(b) {
            a(b, jQuery(this))
        }, !1).each(function(b, c) {
            c.addEventListener("touchend", function(b) {
                a(b, jQuery(this))
            }, !1)
        }) : jQuery(".block-mega-child-cats a").hover(function(a) {
            c(a, jQuery(this))
        }, function(a) {});
        jQuery(".td-subcat-item a").click(function(a) {
            a.preventDefault();
            a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
            !0 !== a.is_ajax_running && (a.is_ajax_running = !0, jQuery("." + jQuery(this).data("td_block_id") + "_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"), jQuery(this).addClass("td-cur-simple-item"), a.td_filter_value = jQuery(this).data("td_filter_value"), a.td_current_page = 1,
                tdBlocks.tdAjaxDoBlockRequest(a, "pull_down"))
        });
        jQuery(".td-pulldown-filter-link").click(function(a) {
            a.preventDefault();
            var b = jQuery(this).data("td_block_id");
            jQuery("#" + b).find(".iosSlider").iosSlider("destroy");
            var c = tdBlocks.tdGetBlockObjById(b);
            !0 !== c.is_ajax_running && (c.is_ajax_running = !0, c.td_filter_value = jQuery(this).data("td_filter_value"), jQuery("." + jQuery(this).data("td_block_id") + "_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"), jQuery(this).addClass("td-cur-simple-item"),
                c.td_current_page = 1, jQuery("#td_pulldown_" + b).removeClass("td-pulldown-filter-list-open"), tdBlocks.tdAjaxDoBlockRequest(c, "pull_down"), tdDetect.isMobileDevice && tdUtil.stopBubble(a))
        })
    }
    jQuery().ready(function() {
        a()
    });
    tdBlocks = {
        tdPullDownFilterChangeValue: function(a, c) {
            jQuery("#td-pulldown-" + a + "-val").html(c)
        },
        tdAjaxDoBlockRequest: function(a, c) {
            var b = JSON.stringify(a);
            if (tdLocalCache.exist(b)) return tdBlocks.tdBlockAjaxLoadingStart(a, !0, c), tdBlocks.tdAjaxBlockProcessResponse(tdLocalCache.get(b), c),
                "cache_hit";
            tdBlocks.tdBlockAjaxLoadingStart(a, !1, c);
            jQuery.ajax({
                type: "POST",
                url: td_ajax_url,
                cache: !0,
                data: {
                    action: "td_ajax_block",
                    td_atts: a.atts,
                    td_block_id: a.id,
                    td_column_number: a.td_column_number,
                    td_current_page: a.td_current_page,
                    block_type: a.block_type,
                    td_filter_value: a.td_filter_value,
                    td_user_action: a.td_user_action
                },
                success: function(a, d, l) {
                    tdLocalCache.set(b, a);
                    tdBlocks.tdAjaxBlockProcessResponse(a, c)
                },
                error: function(a, b, c) {}
            })
        },
        tdAjaxBlockProcessResponse: function(a, c) {
            var b = jQuery.parseJSON(a);
            if ("load_more" === c || "infinite_load" === c) {
                for (var e = 0; e < tdSmartSidebar.items.length; e++) "case_3_bottom_of_content" === tdSmartSidebar.items[e].sidebar_state && (tdSmartSidebar.items[e].sidebar_state = "case_1_fixed_down");
                jQuery(b.td_data).appendTo("#" + b.td_block_id)
            } else jQuery("#" + b.td_block_id).html(b.td_data);
            !0 === b.td_hide_prev ? jQuery("#prev-page-" + b.td_block_id).addClass("ajax-page-disabled") : jQuery("#prev-page-" + b.td_block_id).removeClass("ajax-page-disabled");
            !0 === b.td_hide_next ? jQuery("#next-page-" +
                b.td_block_id).addClass("ajax-page-disabled") : jQuery("#next-page-" + b.td_block_id).removeClass("ajax-page-disabled");
            e = tdBlocks.tdGetBlockObjById(b.td_block_id);
            "slide" === e.block_type && jQuery("#" + b.td_block_id + " .slide-wrap-active-first").addClass("slide-wrap-active");
            e.is_ajax_running = !1;
            tdBlocks.tdBlockAjaxLoadingEnd(b, e, c)
        },
        tdBlockAjaxLoadingStart: function(a, c, d) {
            var b = jQuery("#" + a.id);
            jQuery(".td-loader-gif").remove();
            b.removeClass("td_fadeInRight td_fadeInLeft td_fadeInDown td_fadeInUp td_animated_xlong");
            b.addClass("td_block_inner_overflow");
            var f = b.height();
            b.css("height", f);
            !1 === c && ("load_more" === d ? (b.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-blocks-load-more  td-loader-animation-start"></div>'), tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
                jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
            }, 50)) : "infinite_load" === d ? (b.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'),
                tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
                    jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
                }, 50)) : (b.parent().append('<div class="td-loader-gif td-loader-animation-start"></div>'), tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
                jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
            }, 50), b.addClass("td_animated_long td_fadeOut_to_1")))
        },
        tdBlockAjaxLoadingEnd: function(a, c, d) {
            jQuery(".td-loader-gif").removeClass("td-loader-animation-mid").addClass("td-loader-animation-end");
            setTimeout(function() {
                jQuery(".td-loader-gif").remove();
                tdLoadingBox.stop()
            }, 400);
            var b = jQuery("#" + c.id);
            b.removeClass("td_animated_long td_fadeOut_to_1");
            if (!0 === tdAnimationStack.activated) var f = tdAnimationStack.SORTED_METHOD.sort_left_to_right;
            switch (d) {
                case "next":
                    b.addClass("td_animated_xlong td_fadeInRight");
                    void 0 !== f && (f = tdAnimationStack.SORTED_METHOD.sort_right_to_left);
                    break;
                case "back":
                    b.addClass("td_animated_xlong td_fadeInLeft");
                    break;
                case "pull_down":
                    b.addClass("td_animated_xlong td_fadeInDown");
                    break;
                case "mega_menu":
                    b.addClass("td_animated_xlong td_fadeInDown");
                    break;
                case "load_more":
                    setTimeout(function() {
                        jQuery("." + c.id + "_rand .td_ajax_load_more_js").css("visibility", "visible")
                    }, 500);
                    break;
                case "infinite_load":
                    setTimeout(function() {
                        tdInfiniteLoader.computeTopDistances();
                        "" !== a.td_data && tdInfiniteLoader.enable_is_visible_callback(c.id)
                    }, 500), setTimeout(function() {
                            tdInfiniteLoader.computeTopDistances()
                        },
                        1E3), setTimeout(function() {
                        tdInfiniteLoader.computeTopDistances()
                    }, 1500)
            }
            setTimeout(function() {
                jQuery(".td_block_inner_overflow").removeClass("td_block_inner_overflow");
                b.css("height", "auto");
                tdSmartSidebar.compute()
            }, 200);
            setTimeout(function() {
                tdSmartSidebar.compute()
            }, 500);
            void 0 !== f && setTimeout(function() {
                tdAnimationStack.check_for_new_items("#" + c.id + " .td-animation-stack", f, !0)
            }, 200)
        },
        tdGetBlockIndex: function(a) {
            var b = 0,
                d = 0;
            jQuery.each(tdBlocksArray, function(c, f) {
                if (f.id === a) return d = b, !1;
                b++
            });
            return d
        },
        tdGetBlockObjById: function(a) {
            return tdBlocksArray[tdBlocks.tdGetBlockIndex(a)]
        }
    }
})();
jQuery().ready(function() {
    var a = {
        type: "inline",
        preloader: !1,
        focus: "#name",
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr("data-effect");
                tdLogin.clearFields();
                tdLogin.showHideMsg();
                700 > jQuery(window).width() ? this.st.focus = !1 : !1 === tdDetect.isIe && (this.st.focus = "#login_email")
            },
            beforeClose: function() {}
        },
        disableOn: function() {
            return 750 > jQuery(window).width() ? !1 : !0
        }
    };
    void 0 !== window.tds_login_sing_in_widget && (jQuery(".comment-reply-login").attr({
        href: "#login-form",
        "data-effect": "mpf-td-login-effect"
    }), jQuery(".comment-reply-login, .td-login-modal-js").magnificPopup(a));
    jQuery(".td-login-modal-js, .comment-reply-login").on("click", function(a) {
        750 > jQuery(window).width() && void 0 !== window.tds_login_sing_in_widget && (a.preventDefault(), jQuery("body").addClass("td-menu-mob-open-menu"), jQuery(".td-mobile-container").hide(), jQuery("#td-mobile-nav").addClass("td-hide-menu-content"), setTimeout(function() {
            jQuery(".td-mobile-container").show()
        }, 500), tdLogin.showHideElementsMobile([
            ["#td-login-mob",
                1
            ],
            ["#td-register-mob", 0],
            ["#td-forgot-pass-mob", 0]
        ]))
    });
    jQuery("#login-link").on("click", function() {
        tdLogin.showHideElements([
            ["#td-login-div", 1],
            ["#td-register-div", 0],
            ["#td-forgot-pass-div", 0]
        ]);
        jQuery("#login-form").addClass("td-login-animation");
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#login_email").focus();
        tdLogin.showHideMsg()
    });
    jQuery("#register-link").on("click", function() {
        tdLogin.showHideElements([
            ["#td-login-div", 0],
            ["#td-register-div", 1],
            ["#td-forgot-pass-div", 0]
        ]);
        jQuery("#login-form").addClass("td-login-animation");
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#register_email").focus();
        tdLogin.showHideMsg()
    });
    jQuery("#forgot-pass-link").on("click", function(a) {
        a.preventDefault();
        tdLogin.showHideElements([
            ["#td-login-div", 0],
            ["#td-register-div", 0],
            ["#td-forgot-pass-div", 1]
        ]);
        jQuery("#login-form").addClass("td-login-animation");
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#forgot_email").focus();
        tdLogin.showHideMsg()
    });
    jQuery("#login_button").on("click", function() {
        tdLogin.handlerLogin()
    });
    jQuery("#login_pass").keydown(function(a) {
        (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerLogin()
    });
    jQuery("#register_button").on("click", function() {
        tdLogin.handlerRegister()
    });
    jQuery("#register_user").keydown(function(a) {
        (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerRegister()
    });
    jQuery("#forgot_button").on("click", function() {
        tdLogin.handlerForgotPass()
    });
    jQuery("#forgot_email").keydown(function(a) {
        (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerForgotPass()
    });
    jQuery(".td-back-button").on("click", function() {
        tdLogin.showHideElements([
            ["#td-login-div", 1],
            ["#td-register-div", 0],
            ["#td-forgot-pass-div", 0]
        ]);
        jQuery("#login-form").removeClass("td-login-animation");
        jQuery(".td_display_err").hide()
    })
});
var tdLogin = {};
(function() {
    tdLogin = {
        email_pattern: /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,
        handlerLogin: function() {
            var a = jQuery("#login_email"),
                b = jQuery("#login_pass");
            a.length && b.length && (a = a.val().trim(), b = b.val().trim(), a && b ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_login", a, "", b)) : tdLogin.showHideMsg(td_email_user_pass_incorrect))
        },
        handlerRegister: function() {
            var a =
                jQuery("#register_email"),
                b = jQuery("#register_user");
            a.length && b.length && (a = a.val().trim(), b = b.val().trim(), tdLogin.email_pattern.test(a) && b ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_register", a, b, "")) : tdLogin.showHideMsg(td_email_user_incorrect))
        },
        handlerForgotPass: function() {
            var a = jQuery("#forgot_email");
            a.length && (a = a.val().trim(), tdLogin.email_pattern.test(a) ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]),
                tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_remember_pass", a, "", "")) : tdLogin.showHideMsg(td_email_incorrect))
        },
        showHideElements: function(a) {
            if (a.constructor === Array)
                for (var b = a.length, c = 0; c < b; c++)
                    if (a[c].constructor === Array && 2 === a[c].length) {
                        var d = jQuery(a[c][0]);
                        d.length && (1 === a[c][1] ? d.removeClass("td-display-none").addClass("td-display-block") : d.removeClass("td-display-block").addClass("td-display-none"))
                    }
        },
        showHideElementsMobile: function(a) {
            if (a.constructor === Array)
                for (var b =
                        a.length, c = 0; c < b; c++)
                    if (a[c].constructor === Array && 2 === a[c].length) {
                        var d = jQuery(a[c][0]);
                        d.length && (1 === a[c][1] ? d.removeClass("td-login-hide").addClass("td-login-show") : d.removeClass("td-login-show").addClass("td-login-hide"))
                    }
        },
        showTabs: function(a) {
            if (a.constructor === Array)
                for (var b = a.length, c = 0; c < b; c++)
                    if (a[c].constructor === Array && 2 === a[c].length) {
                        var d = jQuery(a[c][0]);
                        d.length && (1 === a[c][1] ? d.addClass("td_login_tab_focus") : d.removeClass("td_login_tab_focus"))
                    }
        },
        addRemoveClass: function(a) {
            if (a.constructor ===
                Array && 3 === a.length) {
                var b = jQuery(a[0]);
                b.length && (1 === a[1] ? b.addClass(a[2]) : b.removeClass(a[2]))
            }
        },
        showHideMsg: function(a) {
            var b = jQuery(".td_display_err");
            b.length && (void 0 !== a && a.constructor === String && 0 < a.length ? (b.show(), b.html(a)) : (b.hide(), b.html("")))
        },
        clearFields: function() {
            jQuery("#login_email").val("");
            jQuery("#login_pass").val("");
            jQuery("#register_email").val("");
            jQuery("#register_user").val("");
            jQuery("#forgot_email").val("")
        },
        doAction: function(a, b, c, d) {
            jQuery.ajax({
                type: "POST",
                url: td_ajax_url,
                data: {
                    action: a,
                    email: b,
                    user: c,
                    pass: d
                },
                success: function(a, b, c) {
                    a = jQuery.parseJSON(a);
                    switch (a[0]) {
                        case "login":
                            1 === a[1] ? location.reload(!0) : (tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLogin.showHideMsg(a[2]));
                            break;
                        case "register":
                            1 === a[1] ? tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]) : tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]);
                            tdLogin.showHideMsg(a[2]);
                            break;
                        case "remember_pass":
                            1 === a[1] ? tdLogin.addRemoveClass([".td_display_err", 1,
                                "td_display_msg_ok"
                            ]) : tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLogin.showHideMsg(a[2])
                    }
                },
                error: function(a, b, c) {}
            })
        }
    }
})();
jQuery().ready(function() {
    jQuery("#login-link-mob").on("click", function() {
        tdLoginMob.showHideElements([
            ["#td-login-mob", 1],
            ["#td-register-mob", 0],
            ["#td-forgot-pass-mob", 0]
        ]);
        jQuery("#td-mobile-nav").addClass("td-hide-menu-content");
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#login_email-mob").focus();
        tdLoginMob.showHideMsg()
    });
    jQuery("#register-link-mob").on("click", function() {
        tdLoginMob.showHideElements([
            ["#td-login-mob", 0],
            ["#td-register-mob", 1],
            ["#td-forgot-pass-mob", 0]
        ]);
        jQuery("#td-mobile-nav").addClass("td-hide-menu-content");
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#register_email-mob").focus();
        tdLoginMob.showHideMsg()
    });
    jQuery("#forgot-pass-link-mob").on("click", function() {
        tdLoginMob.showHideElements([
            ["#td-login-mob", 0],
            ["#td-register-mob", 0],
            ["#td-forgot-pass-mob", 1]
        ]);
        700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#forgot_email-mob").focus();
        tdLoginMob.showHideMsg()
    });
    jQuery("#login_button-mob").on("click", function() {
        tdLoginMob.handlerLogin()
    });
    jQuery("#login_pass-mob").keydown(function(a) {
        (a.which &&
            13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerLogin()
    });
    jQuery("#register_button-mob").on("click", function() {
        tdLoginMob.handlerRegister()
    });
    jQuery("#register_user-mob").keydown(function(a) {
        (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerRegister()
    });
    jQuery("#forgot_button-mob").on("click", function() {
        tdLoginMob.handlerForgotPass()
    });
    jQuery("#forgot_email-mob").keydown(function(a) {
        (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerForgotPass()
    });
    jQuery("#td-mobile-nav .td-login-close a, #td-mobile-nav .td-register-close a").on("click", function() {
        tdLoginMob.showHideElements([
            ["#td-login-mob", 0],
            ["#td-register-mob", 0],
            ["#td-forgot-pass-mob", 0]
        ]);
        jQuery("#td-mobile-nav").removeClass("td-hide-menu-content")
    });
    jQuery("#td-mobile-nav .td-forgot-pass-close a").on("click", function() {
        tdLoginMob.showHideElements([
            ["#td-login-mob", 1],
            ["#td-register-mob", 0],
            ["#td-forgot-pass-mob", 0]
        ])
    })
});
var tdLoginMob = {};
(function() {
    tdLoginMob = {
        email_pattern: /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,
        handlerLogin: function() {
            var a = jQuery("#login_email-mob"),
                b = jQuery("#login_pass-mob");
            a.length && b.length && (a = a.val().trim(), b = b.val().trim(), a && b ? (tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_login", a, "", b)) : tdLoginMob.showHideMsg(td_email_user_pass_incorrect))
        },
        handlerRegister: function() {
            var a =
                jQuery("#register_email-mob"),
                b = jQuery("#register_user-mob");
            a.length && b.length && (a = a.val().trim(), b = b.val().trim(), tdLoginMob.email_pattern.test(a) && b ? (tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_register", a, b, "")) : tdLoginMob.showHideMsg(td_email_user_incorrect))
        },
        handlerForgotPass: function() {
            var a = jQuery("#forgot_email-mob");
            a.length && (a = a.val().trim(), tdLoginMob.email_pattern.test(a) ? (tdLoginMob.addRemoveClass([".td_display_err",
                1, "td_display_msg_ok"
            ]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_remember_pass", a, "", "")) : tdLoginMob.showHideMsg(td_email_incorrect))
        },
        showHideElements: function(a) {
            if (a.constructor === Array)
                for (var b = a.length, c = 0; c < b; c++)
                    if (a[c].constructor === Array && 2 === a[c].length) {
                        var d = jQuery(a[c][0]);
                        d.length && (1 === a[c][1] ? d.removeClass("td-login-hide").addClass("td-login-show") : d.removeClass("td-login-show").addClass("td-login-hide"))
                    }
        },
        addRemoveClass: function(a) {
            if (a.constructor === Array &&
                3 === a.length) {
                var b = jQuery(a[0]);
                b.length && (1 === a[1] ? b.addClass(a[2]) : b.removeClass(a[2]))
            }
        },
        showHideMsg: function(a) {
            var b = jQuery(".td_display_err");
            b.length && (void 0 !== a && a.constructor === String && 0 < a.length ? (b.show(), b.html(a)) : (b.hide(), b.html("")))
        },
        clearFields: function() {
            jQuery("#login_email-mob").val("");
            jQuery("#login_pass-mob").val("");
            jQuery("#register_email-mob").val("");
            jQuery("#register_user-mob").val("");
            jQuery("#forgot_email-mob").val("")
        },
        doAction: function(a, b, c, d) {
            jQuery.ajax({
                type: "POST",
                url: td_ajax_url,
                data: {
                    action: a,
                    email: b,
                    user: c,
                    pass: d
                },
                success: function(a, b, c) {
                    a = jQuery.parseJSON(a);
                    switch (a[0]) {
                        case "login":
                            1 === a[1] ? location.reload(!0) : (tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLoginMob.showHideMsg(a[2]));
                            break;
                        case "register":
                            1 === a[1] ? tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]) : tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]);
                            tdLoginMob.showHideMsg(a[2]);
                            break;
                        case "remember_pass":
                            1 === a[1] ? tdLoginMob.addRemoveClass([".td_display_err",
                                1, "td_display_msg_ok"
                            ]) : tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLoginMob.showHideMsg(a[2])
                    }
                },
                error: function(a, b, c) {}
            })
        }
    }
})();
var tdDemoMenu;
(function(a, b) {
    tdDemoMenu = {
        mousePosX: 0,
        mousePosY: 0,
        startTimeout: b,
        startInterval: b,
        _extendedDemo: !1,
        _currentElement: b,
        _startExtendedTimeout: b,
        _startExtendedInterval: b,
        init: function() {
            a(document).mousemove(function(a) {
                if (a.pageX || a.pageY) tdDemoMenu.mousePosX = a.pageX, tdDemoMenu.mousePosY = a.pageY;
                else if (a.clientX || a.clientY) tdDemoMenu.mousePosX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, tdDemoMenu.mousePosY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop
            });
            a(document).mouseleave(function(c) {
                b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
                b !== tdDemoMenu.startInterval && window.clearInterval(tdDemoMenu.startInterval);
                a(".td-screen-demo:first").css("visibility", "hidden");
                a(".td-screen-demo-extend:first").hide()
            });
            a("#td-theme-settings").find(".td-skin-wrap:first").scroll(function(b) {
                b = b.currentTarget;
                var c = a(this).find(".td-skin-scroll:first");
                b.clientHeight + b.scrollTop < b.scrollHeight ? c.css({
                    bottom: 0
                }) : c.css({
                    bottom: -40
                })
            });
            a("#td-theme-settings").find(".td-skin-scroll:first").click(function(b) {
                b =
                    a(this).closest(".td-skin-wrap");
                b.animate({
                    scrollTop: b.scrollTop() + 200
                }, {
                    duration: 800,
                    easing: "easeInOutQuart"
                })
            }).mouseenter(function(c) {
                b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
                b !== tdDemoMenu.startInterval && window.clearInterval(tdDemoMenu.startInterval);
                a("#td-theme-settings").find(".td-screen-demo:first").css("visibility", "hidden")
            });
            a(".td-set-theme-style-link").hover(function(c) {
                b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
                b !== tdDemoMenu.startInterval &&
                    window.clearInterval(tdDemoMenu.startInterval);
                var d = a(this),
                    e = d.closest(".td-set-theme-style"),
                    f = a(".td-screen-demo:first"),
                    l = 0,
                    g = 0;
                var p = a("#wpadminbar");
                var w = f.find("img:first"),
                    d = d.data("img-url");
                w.length ? w.attr("src", d) : f.html('<img src="' + d + '"/>');
                0 === a(".td-set-theme-style-link").index(this) % 2 ? l = 2 * e.outerWidth(!0) : (e = e.prev(".td-set-theme-style"), e.length && (l = e.outerWidth(!0) - 0, g = e.outerWidth(!0) + 0), c.preventDefault(), c.stopPropagation());
                c = c.pageY - document.body.scrollTop - f.outerHeight(!0) /
                    2;
                c + f.outerHeight(!0) > window.innerHeight && (c -= c + f.outerHeight(!0) - window.innerHeight);
                p = p.length ? p.outerHeight(!0) : 0;
                p > c && (c = p);
                p = {
                    top: c,
                    right: l,
                    width: ""
                };
                c = f.data("width-preview");
                0 < g && (p.width = c + g);
                f.css(p);
                f.data("right-value", l + g);
                f.css("visibility", "visible")
            }, function(c) {
                a(".td-screen-demo-extend:first").hide();
                var d = a(".td-screen-demo:first");
                c = d.css("right");
                var e = d.css("padding-right"),
                    f = d.css("width"),
                    l = parseInt(c.replace("px", "")),
                    g = parseInt(e.replace("px", "")),
                    p = parseInt(f.replace("px",
                        ""));
                c = a(this);
                tdDemoMenu._currentElement = c;
                var w = parseInt(a("#td-theme-settings").css("width").replace("px", ""));
                0 < g ? (b !== tdDemoMenu.startTimeout && (window.clearTimeout(tdDemoMenu.startTimeout), tdDemoMenu.startTimeout = b), b !== tdDemoMenu.startInterval && (window.clearInterval(tdDemoMenu.startInterval), tdDemoMenu.startInterval = b), tdDemoMenu.startTimeout = setTimeout(function() {
                    tdDemoMenu._extendedDemo = !0;
                    tdDemoMenu.startInterval = setInterval(function() {
                        var c = d.data("width-preview");
                        l += 10;
                        g -= 10;
                        p -= 10;
                        var e = !1;
                        if (0 >= g || p < c || tdDemoMenu.mousePosX <= a(window).width() - w || tdDemoMenu.mousePosX >= a(window).width() - l) b !== tdDemoMenu.startTimeout && (window.clearTimeout(tdDemoMenu.startTimeout), tdDemoMenu.startTimeout = b), b !== tdDemoMenu.startInterval && (window.clearInterval(tdDemoMenu.startInterval), tdDemoMenu.startInterval = b), g = 0, l = d.data("right-value"), p = c, tdDemoMenu.mousePosX >= a(window).width() - l && (e = !0);
                        d.css({
                            right: l,
                            "padding-right": g,
                            width: p
                        });
                        e ? (tdDemoMenu._extendedDemo = !1, tdDemoMenu._checkMousePosition()) : b ===
                            tdDemoMenu.startTimeout && b === tdDemoMenu.startInterval && (tdDemoMenu._extendedDemo = !0, tdDemoMenu._showExtendedScreenDemo())
                    }, 15)
                }, 50)) : d.css("visibility", "hidden")
            }).mousemove(function(a) {
                tdDemoMenu._moveScreenDemo(a)
            });
            a(".td-screen-demo-extend").hover(function(c) {
                if (tdDemoMenu._extendedDemo) {
                    tdDemoMenu._extendedDemo = !1;
                    var d = a(this),
                        e = a(".td-screen-demo:first"),
                        f = parseInt(a("#td-theme-settings").css("width").replace("px", "")) / 2,
                        l = f;
                    d.css({
                        width: f + "px",
                        top: e.css("top")
                    });
                    d.show();
                    e.css("visibility",
                        "visible");
                    tdDemoMenu._startExtendedTimeout = setTimeout(function() {
                        tdDemoMenu._startExtendedInterval = setInterval(function() {
                            l -= 10;
                            var c = !1;
                            if (0 > l || tdDemoMenu.mousePosX <= a(window).width() - f - l) b !== tdDemoMenu._startExtendedTimeout && (window.clearTimeout(tdDemoMenu._startExtendedTimeout), tdDemoMenu._startExtendedTimeout = b), b !== tdDemoMenu._startExtendedInterval && (window.clearInterval(tdDemoMenu._startExtendedInterval), tdDemoMenu._startExtendedInterval = b), tdDemoMenu.mousePosX <= a(window).width() - f - l && (c = !0),
                                l = f, d.hide();
                            d.css({
                                width: l,
                                top: e.css("top")
                            });
                            c && tdDemoMenu._checkMousePosition()
                        }, 15)
                    }, 50)
                }
            }, function(c) {
                b !== tdDemoMenu._startExtendedTimeout && (window.clearTimeout(tdDemoMenu._startExtendedTimeout), tdDemoMenu._startExtendedTimeout = b);
                b !== tdDemoMenu._startExtendedInterval && (window.clearInterval(tdDemoMenu._startExtendedInterval), tdDemoMenu._startExtendedInterval = b);
                tdDemoMenu._resetTdScreeDemoExtendWidth();
                a(this).hide();
                a(".td-screen-demo:first").css("visibility", "hidden")
            }).mousemove(function(a) {})
        },
        _moveScreenDemo: function(b) {
            var c = a(".td-screen-demo:first"),
                e = a("#wpadminbar"),
                f = b.pageY - document.body.scrollTop - c.outerHeight(!0) / 2,
                e = e.length ? e.outerHeight(!0) : 0;
            e > f && (f = e);
            0 > f ? f = 0 : a(window).height() - c.outerHeight(!0) / 2 < b.pageY - document.body.scrollTop && (f = a(window).height() - c.outerHeight(!0));
            c.css("top", f)
        },
        _resetTdScreeDemoExtendWidth: function() {
            var b = parseInt(a("#td-theme-settings").css("width").replace("px", "")) / 2;
            a(".td-screen-demo-extend:first").css({
                width: b + "px"
            })
        },
        _showExtendedScreenDemo: function() {
            tdDemoMenu._extendedDemo &&
                a(".td-screen-demo-extend:first").css({
                    top: a(".td-screen-demo:first").css("top")
                }).show()
        },
        _checkMousePosition: function() {
            var c;
            a(".td-set-theme-style-link").each(function(b, e) {
                tdDemoMenu._log(b);
                var d = a(e).closest(".td-set-theme-style"),
                    l = !1,
                    g = !1;
                if (0 === a(".td-set-theme-style-link").index(e) % 2) parseInt(d.position().top) + parseInt(a(window).scrollTop()) < tdDemoMenu.mousePosY && tdDemoMenu.mousePosY < parseInt(d.position().top) + parseInt(a(window).scrollTop()) + parseInt(d.outerHeight()) && (l = !0, parseInt(a(window).width()) -
                    2 * parseInt(d.outerWidth()) < tdDemoMenu.mousePosX && tdDemoMenu.mousePosX < parseInt(a(window).width()) - parseInt(d.outerWidth()) && (g = !0));
                else {
                    var p = d.prev(".td-set-theme-style");
                    p.length && parseInt(p.position().top) + parseInt(a(window).scrollTop()) < tdDemoMenu.mousePosY && tdDemoMenu.mousePosY < parseInt(p.position().top) + parseInt(a(window).scrollTop()) + parseInt(p.outerHeight()) && (l = !0, parseInt(a(window).width()) - parseInt(d.outerWidth()) < tdDemoMenu.mousePosX && tdDemoMenu.mousePosX < parseInt(a(window).width()) &&
                        (g = !0))
                }
                if (l && g) return c = e, !1
            });
            b === c ? a("#td-theme-settings").find(".td-screen-demo:first").css("visibility", "hidden") : a(c).mouseenter()
        },
        _log: function(a) {}
    }
})(jQuery);
(function() {
    if ("hide" === td_read_site_cookie("td_show_panel")) {
        var a = jQuery("#td-theme-settings");
        a.length && (a.removeClass("td-theme-settings-small"), jQuery("#td-theme-set-hide").html("DEMOS"))
    } else jQuery("#td-theme-set-hide").html("CLOSE")
})();
jQuery().ready(function() {
    !1 === tdDetect.isIos && !1 === tdDetect.isAndroid && tdDemoMenu.init();
    jQuery("#td-theme-set-hide").click(function(a) {
        a.preventDefault();
        a.stopPropagation();
        a = jQuery(this);
        var b = jQuery("#td-theme-settings");
        b.hasClass("td-theme-settings-small") ? (b.removeClass("td-theme-settings-small"), b.addClass("td-theme-settings-closed"), a.html("DEMOS"), setTimeout(function() {
            b.addClass("td-ts-closed-no-transition")
        }, 450), td_set_cookies_life(["td_show_panel", "hide", 864E5])) : (b.removeClass("td-ts-closed-no-transition"),
            b.addClass("td-theme-settings-small"), b.removeClass("td-theme-settings-closed"), a.html("CLOSE"), td_set_cookies_life(["td_show_panel", "show", 864E5]))
    })
});
var tdTrendingNow = {};
(function() {
    tdTrendingNow = {
        items: [],
        item: function() {
            this.blockUid = "";
            this.trendingNowAutostart = "manual";
            this.trendingNowPosition = this.trendingNowTimer = 0;
            this.trendingNowPosts = [];
            this._is_initialized = !1
        },
        init: function() {
            tdTrendingNow.items = []
        },
        _initialize_item: function(a) {
            !0 !== a._is_initialized && (a._is_initialized = !0)
        },
        addItem: function(a) {
            if ("undefined" === typeof a.blockUid) throw "item.blockUid is not valid";
            if ("undefined" === typeof a.trendingNowPosts || 1 > a.trendingNowPosts.length) throw "item.trendingNowPosts is not valid";
            tdTrendingNow.items.push(a);
            tdTrendingNow._initialize_item(a);
            tdTrendingNow.tdTrendingNowAutoStart(a.blockUid)
        },
        deleteItem: function(a) {
            for (var b = 0; b < tdTrendingNow.items.length; b++)
                if (tdTrendingNow.items[b].blockUid === a) return tdTrendingNow.items.splice(b, 1), !0;
            return !1
        },
        itemPrev: function(a) {
            for (var b, c = 0; c < tdTrendingNow.items.length; c++) tdTrendingNow.items[c].blockUid === a && (b = tdTrendingNow.items[c]);
            void 0 !== a && 1 >= b.trendingNowPosts.length || ("manual" !== b.trendingNowAutostart && (clearInterval(b.trendingNowTimer),
                b.trendingNowTimer = setInterval(function() {
                    tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
                }, 3E3)), tdTrendingNow.tdTrendingNowChangeText([a, "right"], !1))
        },
        itemNext: function(a) {
            for (var b, c = 0; c < tdTrendingNow.items.length; c++) tdTrendingNow.items[c].blockUid === a && (b = tdTrendingNow.items[c]);
            void 0 !== a && 1 >= b.trendingNowPosts.length || ("manual" !== b.trendingNowAutostart && (clearInterval(b.trendingNowTimer), b.trendingNowTimer = setInterval(function() {
                    tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
                }, 3E3)),
                tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0))
        },
        tdTrendingNowChangeText: function(a, b) {
            for (var c = a[0], d = a[1], e = [], f = 0, l, g = 0; g < tdTrendingNow.items.length; g++) tdTrendingNow.items[g].blockUid === c && (l = g, e = tdTrendingNow.items[g].trendingNowPosts, f = tdTrendingNow.items[g].trendingNowPosition);
            if ("undefined" !== typeof l && null !== l && (c = f, g = e.length - 1, !(1 > g))) {
                "left" === d ? (f += 1, f > g && (f = 0)) : (--f, 0 > f && (f = g));
                tdTrendingNow.items[l].trendingNowPosition = f;
                e[c].css("opacity", 0);
                e[c].css("z-index", 0);
                for (var p in e) !0 ===
                    e.hasOwnProperty(p) && e[p].removeClass("td_animated_xlong td_fadeInLeft td_fadeInRight td_fadeOutLeft td_fadeOutRight");
                e[f].css("opacity", 1);
                e[f].css("z-index", 1);
                !0 === b ? (e[c].addClass("td_animated_xlong td_fadeOutLeft"), e[f].addClass("td_animated_xlong td_fadeInRight")) : (e[c].addClass("td_animated_xlong td_fadeOutRight"), e[f].addClass("td_animated_xlong td_fadeInLeft"))
            }
        },
        tdTrendingNowAutoStart: function(a) {
            for (var b = 0; b < tdTrendingNow.items.length; b++) tdTrendingNow.items[b].blockUid === a && "manual" !==
                tdTrendingNow.items[b].trendingNowAutostart && (tdTrendingNow.items[b].trendingNowTimer = tdTrendingNow.setTimerChangingText(a))
        },
        setTimerChangingText: function(a) {
            return setInterval(function() {
                tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
            }, 3E3)
        }
    };
    tdTrendingNow.init()
})();
"use strict";
var td_history = {
    td_history_change_event: !1,
    init: function() {
        window.addEventListener("popstate", function(a) {
            td_history.td_history_change_event = !0;
            "undefined" != typeof a.state && null != a.state && jQuery("#" + a.state.slide_id).iosSlider("goToSlide", a.state.current_slide)
        })
    },
    replace_history_entry: function(a) {
        !1 !== tdDetect.hasHistory && history.replaceState(a, null)
    },
    add_history_entry: function(a, b, c) {
        if (!1 !== tdDetect.hasHistory)
            if ("" == c) history.pushState(a, null, null);
            else {
                var d = td_history.get_query_parameter("p");
                "" != d ? 1 == c ? history.pushState(a, null, "?p=" + d) : history.pushState(a, null, "?p=" + d + "&" + b + "=" + c) : 1 == c ? history.pushState(a, null, td_history.get_mod_rewrite_base_url()) : history.pushState(a, null, td_history.get_mod_rewrite_base_url() + c + "/")
            }
    },
    get_mod_rewrite_base_url: function() {
        var a = document.URL;
        "/" == a.charAt(a.length - 1) && (a = a.slice(0, -1));
        return !1 === td_history.get_mod_rewrite_pagination(document.URL) ? document.URL : a.substring(0, a.lastIndexOf("/")) + "/"
    },
    get_mod_rewrite_pagination: function() {
        var a = document.URL;
        "/" == a.charAt(a.length - 1) && (a = a.slice(0, -1));
        a = a.substring(a.lastIndexOf("/") + 1, a.length);
        return td_history.isInt(a) ? a : !1
    },
    get_current_page: function(a) {
        if ("" != td_history.get_query_parameter("p")) return a = td_history.get_query_parameter(a), "" != a ? a : 1;
        a = td_history.get_mod_rewrite_pagination();
        return !1 !== a ? a : 1
    },
    isInt: function(a) {
        return 0 === a % 1
    },
    get_query_parameter: function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = (new RegExp("[\\?&]" + a + "=([^&#]*)")).exec(location.search);
        return null == a ? "" :
            decodeURIComponent(a[1].replace(/\+/g, " "))
    },
    slide_changed_callback: function(a) {
        if (!0 === td_history.td_history_change_event) td_history.td_history_change_event = !1;
        else {
            var b = a.currentSlideNumber;
            a = a.sliderContainerObject.attr("id");
            td_history.add_history_entry({
                current_slide: b,
                slide_id: a
            }, "slide", b)
        }
    }
};
window.history && window.history.pushState && td_history.init();
var tdSmartSidebar = {};
(function() {
    tdSmartSidebar = {
        hasItems: !1,
        items: [],
        scroll_window_scrollTop_last: 0,
        tds_snap_menu: tdUtil.getBackendVar("tds_snap_menu"),
        is_enabled: !0,
        is_enabled_state_run_once: !1,
        is_disabled_state_run_once: !1,
        is_tablet_grid: !1,
        _view_port_current_interval_index: tdViewport.getCurrentIntervalIndex(),
        item: function() {
            this.sidebar_jquery_obj = this.content_jquery_obj = "";
            this.content_bottom = this.content_top = this.sidebar_height = this.sidebar_bottom = this.sidebar_top = 0;
            this.sidebar_state = "";
            this.case_3_run_once = this.case_2_run_once =
                this.case_1_run_once = !1;
            this.case_3_last_content_height = this.case_3_last_sidebar_height = 0;
            this.case_4_run_once = !1;
            this.case_4_last_menu_offset = 0;
            this.case_6_run_once = this.case_5_run_once = !1
        },
        add_item: function(a) {
            tdSmartSidebar.hasItems = !0;
            a.sidebar_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');
            a.content_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');
            tdSmartSidebar.items.push(a)
        },
        td_events_scroll: function(a) {
            if (!1 !==
                tdSmartSidebar.hasItems)
                if (!1 === tdSmartSidebar.is_enabled) {
                    if (!1 === tdSmartSidebar.is_disabled_state_run_once) {
                        tdSmartSidebar.is_disabled_state_run_once = !0;
                        for (var b = 0; b < tdSmartSidebar.items.length; b++) tdSmartSidebar.items[b].sidebar_jquery_obj.css({
                            width: "auto",
                            position: "static",
                            top: "auto",
                            bottom: "auto"
                        });
                        tdSmartSidebar.log("smart_sidebar_disabled")
                    }
                } else window.requestAnimationFrame(function() {
                    var b = 0;
                    "" !== tdSmartSidebar.tds_snap_menu && (b = tdAffix._get_menu_affix_height(), "smart_snap_always" === tdAffix.tds_snap_menu &&
                        (b += tdAffix.menu_offset));
                    "undefined" !== typeof window.tdThemeName && "Newspaper" === window.tdThemeName && (b += 20);
                    var d = "";
                    a !== tdSmartSidebar.scroll_window_scrollTop_last && (d = a > tdSmartSidebar.scroll_window_scrollTop_last ? "down" : "up");
                    tdSmartSidebar.scroll_window_scrollTop_last = a;
                    var e = jQuery(window).height(),
                        f = a + e;
                    a += b;
                    for (var l = 0; l < tdSmartSidebar.items.length; l++) {
                        var g = tdSmartSidebar.items[l];
                        g.content_top = g.content_jquery_obj.offset().top;
                        g.content_height = g.content_jquery_obj.height();
                        g.content_bottom =
                            g.content_top + g.content_height;
                        g.sidebar_top = g.sidebar_jquery_obj.offset().top;
                        g.sidebar_height = g.sidebar_jquery_obj.height();
                        g.sidebar_bottom = g.sidebar_top + g.sidebar_height;
                        if (g.content_height <= g.sidebar_height) g.sidebar_state = "case_6_content_too_small";
                        else if (g.sidebar_height < e) {
                            var p = g.content_top;
                            tdAffix.is_menu_affix || "undefined" === typeof window.tdThemeName || "Newsmag" !== window.tdThemeName || "smart_snap_always" !== tdAffix.tds_snap_menu || (p += b);
                            tdSmartSidebar._is_smaller_or_equal(a, p) ? g.sidebar_state =
                                "case_2_top_of_content" : !0 === tdSmartSidebar._is_smaller(g.sidebar_bottom, a) ? tdSmartSidebar._is_smaller(a, g.content_bottom - g.sidebar_height) ? g.sidebar_state = "case_4_fixed_up" : g.sidebar_state = "case_3_bottom_of_content" : tdSmartSidebar._is_smaller_or_equal(g.content_bottom, g.sidebar_bottom) ? "up" === d && tdSmartSidebar._is_smaller_or_equal(a, g.sidebar_top) ? g.sidebar_state = "case_4_fixed_up" : g.sidebar_state = "case_3_bottom_of_content" : g.sidebar_state = g.content_bottom - a >= g.sidebar_height ? "case_4_fixed_up" : "case_3_bottom_of_content"
                        } else if (!0 ===
                            tdSmartSidebar._is_smaller(g.sidebar_bottom, a) ? !0 === tdSmartSidebar._is_smaller_or_equal(a, g.sidebar_top) && !0 === tdSmartSidebar._is_smaller_or_equal(g.content_top, a) ? g.sidebar_state = "case_4_fixed_up" : !0 === tdSmartSidebar._is_smaller(g.sidebar_bottom, f) && !0 === tdSmartSidebar._is_smaller(g.sidebar_bottom, g.content_bottom) && g.content_bottom >= f ? g.sidebar_state = "case_1_fixed_down" : g.sidebar_state = "case_3_bottom_of_content" : !0 === tdSmartSidebar._is_smaller(g.sidebar_bottom, f) && !0 === tdSmartSidebar._is_smaller(g.sidebar_bottom,
                                g.content_bottom) && "down" === d && g.content_bottom >= f ? g.sidebar_state = "case_1_fixed_down" : !0 === tdSmartSidebar._is_smaller_or_equal(g.sidebar_top, g.content_top) && "up" === d && g.content_bottom >= f ? g.sidebar_state = "case_2_top_of_content" : !0 === tdSmartSidebar._is_smaller_or_equal(g.content_bottom, g.sidebar_bottom) && "down" === d || g.content_bottom < f ? g.sidebar_state = "case_3_bottom_of_content" : !0 === tdSmartSidebar._is_smaller_or_equal(a, g.sidebar_top) && "up" === d && !0 === tdSmartSidebar._is_smaller_or_equal(g.content_top,
                                a) ? g.sidebar_state = "case_4_fixed_up" : "up" === d && !0 === tdSmartSidebar._is_smaller_or_equal(f, g.sidebar_top) && (g.sidebar_state = "case_2_top_of_content"), "case_1_fixed_down" === g.sidebar_state && "up" === d || "case_4_fixed_up" === g.sidebar_state && "down" === d) g.sidebar_state = "case_5_absolute";
                        var p = 0,
                            w = tdViewport.getCurrentIntervalItem();
                        null !== w && (p = w.sidebarWidth);
                        switch (g.sidebar_state) {
                            case "case_1_fixed_down":
                                if (!0 === g.case_1_run_once) break;
                                tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state);
                                g.case_1_run_once = !0;
                                g.case_2_run_once = !1;
                                g.case_3_run_once = !1;
                                g.case_4_run_once = !1;
                                g.case_5_run_once = !1;
                                g.case_6_run_once = !1;
                                g.sidebar_jquery_obj.css({
                                    width: p,
                                    position: "fixed",
                                    top: "auto",
                                    bottom: "0",
                                    "z-index": "1"
                                });
                                break;
                            case "case_2_top_of_content":
                                if (!0 === g.case_2_run_once) break;
                                tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state);
                                g.case_1_run_once = !1;
                                g.case_2_run_once = !0;
                                g.case_3_run_once = !1;
                                g.case_4_run_once = !1;
                                g.case_5_run_once = !1;
                                g.case_6_run_once = !1;
                                g.sidebar_jquery_obj.css({
                                    width: "auto",
                                    position: "static",
                                    top: "auto",
                                    bottom: "auto"
                                });
                                break;
                            case "case_3_bottom_of_content":
                                if (!0 === g.case_3_run_once && g.case_3_last_sidebar_height === g.sidebar_height && g.case_3_last_content_height === g.content_height) break;
                                tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state);
                                g.case_1_run_once = !1;
                                g.case_2_run_once = !1;
                                g.case_3_run_once = !0;
                                g.case_3_last_sidebar_height = g.sidebar_height;
                                g.case_3_last_content_height = g.content_height;
                                g.case_4_run_once = !1;
                                g.case_5_run_once = !1;
                                g.case_6_run_once = !1;
                                g.sidebar_jquery_obj.css({
                                    width: p,
                                    position: "absolute",
                                    top: g.content_bottom - g.sidebar_height - g.content_top,
                                    bottom: "auto"
                                });
                                break;
                            case "case_4_fixed_up":
                                if (!0 === g.case_4_run_once && g.case_4_last_menu_offset === b) break;
                                tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state);
                                g.case_1_run_once = !1;
                                g.case_2_run_once = !1;
                                g.case_3_run_once = !1;
                                g.case_4_run_once = !0;
                                g.case_4_last_menu_offset = b;
                                g.case_5_run_once = !1;
                                g.case_6_run_once = !1;
                                g.sidebar_jquery_obj.css({
                                    width: p,
                                    position: "fixed",
                                    top: b,
                                    bottom: "auto"
                                });
                                break;
                            case "case_5_absolute":
                                if (!0 ===
                                    g.case_5_run_once) break;
                                tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state);
                                g.case_1_run_once = !1;
                                g.case_2_run_once = !1;
                                g.case_3_run_once = !1;
                                g.case_4_run_once = !1;
                                g.case_5_run_once = !0;
                                g.case_6_run_once = !1;
                                g.sidebar_jquery_obj.css({
                                    width: p,
                                    position: "absolute",
                                    top: g.sidebar_top - g.content_top,
                                    bottom: "auto"
                                });
                                break;
                            case "case_6_content_too_small":
                                !0 !== g.case_6_run_once && (tdSmartSidebar.log("sidebar_id: " + l + " " + g.sidebar_state), g.case_1_run_once = !1, g.case_2_run_once = !1, g.case_3_run_once = !1, g.case_4_run_once = !1, g.case_5_run_once = !1, g.case_6_run_once = !0, g.sidebar_jquery_obj.css({
                                    width: "auto",
                                    position: "static",
                                    top: "auto",
                                    bottom: "auto"
                                }))
                        }
                    }
                })
        },
        compute: function() {
            tdSmartSidebar.td_events_scroll(jQuery(window).scrollTop())
        },
        reset_run_once_flags: function() {
            for (var a = 0; a < tdSmartSidebar.items.length; a++) tdSmartSidebar.items[a].case_1_run_once = !1, tdSmartSidebar.items[a].case_2_run_once = !1, tdSmartSidebar.items[a].case_3_run_once = !1, tdSmartSidebar.items[a].case_3_last_sidebar_height = 0, tdSmartSidebar.items[a].case_3_last_content_height =
                0, tdSmartSidebar.items[a].case_4_run_once = !1, tdSmartSidebar.items[a].case_4_last_menu_offset = 0, tdSmartSidebar.items[a].case_5_run_once = !1, tdSmartSidebar.items[a].case_6_run_once = !1
        },
        td_events_resize: function() {
            tdSmartSidebar._view_port_current_interval_index = tdViewport.getCurrentIntervalIndex();
            switch (tdSmartSidebar._view_port_current_interval_index) {
                case 0:
                    tdSmartSidebar.is_enabled = !1;
                    tdSmartSidebar.is_enabled_state_run_once = !1;
                    break;
                case 1:
                    !1 === tdSmartSidebar.is_tablet_grid && (tdSmartSidebar.reset_run_once_flags(),
                        tdSmartSidebar.is_tablet_grid = !0, tdSmartSidebar.is_desktop_grid = !1, tdSmartSidebar.log("view port tablet"));
                    tdSmartSidebar.is_enabled = !0;
                    tdSmartSidebar.is_disabled_state_run_once = !1;
                    !1 === tdSmartSidebar.is_enabled_state_run_once && (tdSmartSidebar.is_enabled_state_run_once = !0, tdSmartSidebar.log("smart_sidebar_enabled"));
                    break;
                case 2:
                case 3:
                    !0 === tdSmartSidebar.is_tablet_grid && (tdSmartSidebar.reset_run_once_flags(), tdSmartSidebar.is_tablet_grid = !1, tdSmartSidebar.is_desktop_grid = !0, tdSmartSidebar.log("view port desktop")),
                        tdSmartSidebar.is_enabled = !0, tdSmartSidebar.is_disabled_state_run_once = !1, !1 === tdSmartSidebar.is_enabled_state_run_once && (tdSmartSidebar.is_enabled_state_run_once = !0, tdSmartSidebar.log("smart_sidebar_enabled"))
            }
            tdSmartSidebar.compute()
        },
        log: function(a) {},
        _is_smaller_or_equal: function(a, b) {
            return 1 <= Math.abs(a - b) ? a < b ? !0 : !1 : !0
        },
        _is_smaller: function(a, b) {
            return 1 <= Math.abs(a - b) ? a < b ? !0 : !1 : !1
        }
    }
})();
var tdInfiniteLoader = {};
(function() {
    tdInfiniteLoader = {
        hasItems: !1,
        items: [],
        item: function() {
            this.jqueryObj = this.uid = "";
            this.bottomTop = 0;
            this.isVisibleCallbackEnabled = !0;
            this.isVisibleCallback = function() {}
        },
        addItem: function(a) {
            tdInfiniteLoader.hasItems = !0;
            tdInfiniteLoader.items.push(a)
        },
        computeTopDistances: function() {
            !1 !== tdInfiniteLoader.hasItems && (jQuery.each(tdInfiniteLoader.items, function(a, b) {
                    var c = tdInfiniteLoader.items[a].jqueryObj.offset().top;
                    tdInfiniteLoader.items[a].bottomTop = c + tdInfiniteLoader.items[a].jqueryObj.height()
                }),
                tdInfiniteLoader.computeEvents())
        },
        computeEvents: function() {
            if (!1 !== tdInfiniteLoader.hasItems) {
                var a = jQuery(window).height() + jQuery(window).scrollTop();
                jQuery.each(tdInfiniteLoader.items, function(b, c) {
                    tdInfiniteLoader.items[b].bottomTop < a + 700 && !0 === tdInfiniteLoader.items[b].isVisibleCallbackEnabled && (tdInfiniteLoader.items[b].isVisibleCallbackEnabled = !1, tdInfiniteLoader.items[b].isVisibleCallback())
                })
            }
        },
        enable_is_visible_callback: function(a) {
            jQuery.each(tdInfiniteLoader.items, function(b, c) {
                if (c.uid ===
                    a) return tdInfiniteLoader.items[b].isVisibleCallbackEnabled = !0, !1
            })
        }
    };
    jQuery(".td_ajax_infinite").each(function() {
        var a = new tdInfiniteLoader.item;
        a.jqueryObj = jQuery(this);
        a.uid = jQuery(this).data("td_block_id");
        a.isVisibleCallback = function() {
            var b = tdBlocks.tdGetBlockObjById(a.jqueryObj.data("td_block_id"));
            "" === b.ajax_pagination_infinite_stop || b.td_current_page < parseInt(b.ajax_pagination_infinite_stop) + 1 ? (b.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(b, "infinite_load")) : b.td_current_page < b.max_num_pages &&
                setTimeout(function() {
                    jQuery("#infinite-lm-" + b.id).css("display", "block").css("visibility", "visible")
                }, 400)
        };
        tdInfiniteLoader.addItem(a)
    });
    jQuery(window).load(function() {
        tdInfiniteLoader.computeTopDistances()
    });
    jQuery().ready(function() {
        tdInfiniteLoader.computeTopDistances()
    })
})();
"use strict";
var Froogaloop = function() {
        function a(b) {
            return new a.fn.init(b)
        }

        function b(a, b, c) {
            if (!c.contentWindow.postMessage) return !1;
            var d = c.getAttribute("src").split("?")[0];
            a = JSON.stringify({
                method: a,
                value: b
            });
            "//" === d.substr(0, 2) && (d = window.location.protocol + d);
            c.contentWindow.postMessage(a, d)
        }

        function c(a) {
            try {
                var b = JSON.parse(a.data);
                var c = b.event || b.method
            } catch (B) {}
            "ready" == c && !f && (f = !0);
            if (a.origin != l) return !1;
            a = b.value;
            var d = b.data,
                g = "" === g ? null : b.player_id;
            b = g ? e[g][c] : e[c];
            c = [];
            if (!b) return !1;
            void 0 !==
                a && c.push(a);
            d && c.push(d);
            g && c.push(g);
            return 0 < c.length ? b.apply(null, c) : b.call()
        }

        function d(a, b, c) {
            c ? (e[c] || (e[c] = {}), e[c][a] = b) : e[a] = b
        }
        var e = {},
            f = !1,
            l = "";
        a.fn = a.prototype = {
            element: null,
            init: function(a) {
                "string" === typeof a && (a = document.getElementById(a));
                this.element = a;
                a = this.element.getAttribute("src");
                "//" === a.substr(0, 2) && (a = window.location.protocol + a);
                a = a.split("/");
                for (var b = "", c = 0, d = a.length; c < d; c++) {
                    if (3 > c) b += a[c];
                    else break;
                    2 > c && (b += "/")
                }
                l = b;
                return this
            },
            api: function(a, c) {
                if (!this.element ||
                    !a) return !1;
                var e = this.element,
                    f = "" !== e.id ? e.id : null,
                    g = c && c.constructor && c.call && c.apply ? null : c,
                    l = c && c.constructor && c.call && c.apply ? c : null;
                l && d(a, l, f);
                b(a, g, e);
                return this
            },
            addEvent: function(a, c) {
                if (!this.element) return !1;
                var e = this.element,
                    g = "" !== e.id ? e.id : null;
                d(a, c, g);
                "ready" != a ? b("addEventListener", a, e) : "ready" == a && f && c.call(null, g);
                return this
            },
            removeEvent: function(a) {
                if (!this.element) return !1;
                var c = this.element,
                    d;
                a: {
                    if ((d = "" !== c.id ? c.id : null) && e[d]) {
                        if (!e[d][a]) {
                            d = !1;
                            break a
                        }
                        e[d][a] = null
                    } else {
                        if (!e[a]) {
                            d = !1;
                            break a
                        }
                        e[a] = null
                    }
                    d = !0
                }
                "ready" != a && d && b("removeEventListener", a, c)
            }
        };
        a.fn.init.prototype = a.fn;
        window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c);
        return window.Froogaloop = window.$f = a
    }(),
    tdCustomEvents = {};
(function() {
    tdCustomEvents = {
        _callback_scroll: function() {
            tdAnimationScroll.compute_all_items()
        },
        _callback_resize: function() {},
        _lazy_callback_scroll_100: function() {
            !0 === tdAnimationStack.activated && tdAnimationStack.td_events_scroll()
        },
        _lazy_callback_scroll_500: function() {},
        _lazy_callback_resize_100: function() {
            tdPullDown.td_events_resize();
            tdBackstr.td_events_resize();
            tdAnimationScroll.td_events_resize()
        },
        _lazy_callback_resize_500: function() {
            !0 === tdAnimationStack.activated && tdAnimationStack.td_events_resize();
            for (var a = 0; a < td_backstretch_items.length; a++) tdAnimationScroll.reinitialize_item(td_backstretch_items[a], !0), td_compute_backstretch_item(td_backstretch_items[a]);
            tdAnimationScroll.compute_all_items();
            setMenuMinHeight()
        }
    }
})();
var tdEvents = {};
(function() {
    tdEvents = {
        scroll_event_slow_run: !1,
        scroll_event_medium_run: !1,
        resize_event_slow_run: !1,
        resize_event_medium_run: !1,
        scroll_window_scrollTop: 0,
        window_pageYOffset: window.pageYOffset,
        window_innerHeight: window.innerHeight,
        window_innerWidth: window.innerWidth,
        init: function() {
            jQuery(window).scroll(function() {
                tdEvents.scroll_event_slow_run = !0;
                tdEvents.scroll_event_medium_run = !0;
                tdEvents.scroll_window_scrollTop = jQuery(window).scrollTop();
                tdEvents.window_pageYOffset = window.pageYOffset;
                tdAffix.td_events_scroll(tdEvents.scroll_window_scrollTop);
                tdSmartSidebar.td_events_scroll(tdEvents.scroll_window_scrollTop);
                tdCustomEvents._callback_scroll()
            });
            jQuery(window).resize(function() {
                tdEvents.resize_event_slow_run = !0;
                tdEvents.resize_event_medium_run = !0;
                tdEvents.window_innerHeight = window.innerHeight;
                tdEvents.window_innerWidth = window.innerWidth;
                tdCustomEvents._callback_resize()
            });
            setInterval(function() {
                tdViewport.detectChanges();
                tdEvents.scroll_event_medium_run && (tdEvents.scroll_event_medium_run = !1, tdInfiniteLoader.computeEvents(), tdCustomEvents._lazy_callback_scroll_100());
                tdEvents.resize_event_medium_run && (tdEvents.resize_event_medium_run = !1, tdSmartSidebar.td_events_resize(), tdCustomEvents._lazy_callback_resize_100())
            }, 100);
            setInterval(function() {
                tdEvents.scroll_event_slow_run && (tdEvents.scroll_event_slow_run = !1, td_events_scroll_scroll_to_top(tdEvents.scroll_window_scrollTop), td_more_articles_box.td_events_scroll(tdEvents.scroll_window_scrollTop), tdCustomEvents._lazy_callback_scroll_500());
                tdEvents.resize_event_slow_run && (tdEvents.resize_event_slow_run = !1, tdAffix.compute_wrapper(),
                    tdAffix.compute_top(), tdDetect.runIsPhoneScreen(), tdCustomEvents._lazy_callback_resize_500())
            }, 500)
        }
    };
    tdEvents.init()
})();
var tdAjaxCount = {};
(function() {
    tdAjaxCount = {
        tdGetViewsCountsAjax: function(a, b) {
            var c = "td_ajax_get_views";
            "post" === a && (c = "td_ajax_update_views");
            jQuery.ajax({
                type: "POST",
                url: td_ajax_url,
                cache: !0,
                data: {
                    action: c,
                    td_post_ids: b
                },
                success: function(a, b, c) {
                    a = jQuery.parseJSON(a);
                    a instanceof Object && jQuery.each(a, function(a, b) {
                        jQuery(".td-nr-views-" + a).html(b)
                    })
                },
                error: function(a, b, c) {}
            })
        }
    }
})();
var tdYoutubePlayers = {},
    tdVimeoPlayers = {};
jQuery().ready(function() {
    tdYoutubePlayers.init();
    tdVimeoPlayers.init()
});
(function() {
    tdYoutubePlayers = {
        tdPlayerContainer: "player_youtube",
        players: [],
        init: function() {
            for (var a = jQuery(".td_wrapper_playlist_player_youtube"), b = 0; b < a.length; b++) {
                var c = jQuery(a[b]),
                    d = tdYoutubePlayers.addPlayer(c),
                    e = d.tdPlayerContainer;
                c.parent().find(".td_youtube_control").data("player-id", e);
                for (var f = c.parent().find(".td_click_video_youtube"), l = 0; l < f.length; l++) jQuery(f[l]).data("player-id", e), l + 1 < f.length ? jQuery(f[l]).data("next-video-id", jQuery(f[l + 1]).data("video-id")) : jQuery(f[l]).data("next-video-id",
                    jQuery(f[0]).data("video-id"));
                "1" == c.data("autoplay") && (d.autoplay = 1);
                c = c.data("first-video");
                "" !== c && (d.tdPlaylistIdYoutubeVideoRunning = c, d.playVideo(c))
            }
            jQuery(".td_click_video_youtube").click(function() {
                var a = jQuery(this).data("video-id"),
                    b = jQuery(this).data("player-id");
                void 0 !== b && "" !== b && void 0 !== a && "" !== a && tdYoutubePlayers.operatePlayer(b, "play", a)
            });
            jQuery(".td_youtube_control").click(function() {
                var a = jQuery(this).data("player-id");
                void 0 !== a && "" !== a && (jQuery(this).hasClass("td-sp-video-play") ?
                    tdYoutubePlayers.operatePlayer(a, "play") : tdYoutubePlayers.operatePlayer(a, "pause"))
            })
        },
        addPlayer: function(a) {
            a = tdYoutubePlayers.createPlayer(tdYoutubePlayers.tdPlayerContainer + "_" + tdYoutubePlayers.players.length, a);
            tdYoutubePlayers.players.push(a);
            return a
        },
        operatePlayer: function(a, b, c) {
            for (var d = 0; d < tdYoutubePlayers.players.length; d++)
                if (tdYoutubePlayers.players[d].tdPlayerContainer == a) {
                    a = tdYoutubePlayers.players[d];
                    a.playStatus();
                    "play" === b ? (a.autoplay = 1, void 0 === c ? a.playerPlay() : a.playVideo(c)) :
                        "pause" == b && tdYoutubePlayers.players[d].playerPause();
                    break
                }
        },
        createPlayer: function(a, b) {
            var c = {
                tdYtPlayer: "",
                tdPlayerContainer: a,
                autoplay: 0,
                tdPlaylistIdYoutubeVideoRunning: "",
                jqTDWrapperVideoPlaylist: b.closest(".td_wrapper_video_playlist"),
                jqPlayerWrapper: b,
                jqControlPlayer: "",
                _videoId: "",
                playVideo: function(a) {
                    c._videoId = a;
                    "undefined" === typeof YT || "undefined" === typeof YT.Player ? (window.onYouTubePlayerAPIReady = function() {
                            for (var a = 0; a < tdYoutubePlayers.players.length; a++) tdYoutubePlayers.players[a].loadPlayer()
                        },
                        jQuery.getScript("https://www.youtube.com/player_api").done(function(a, b) {})) : c.loadPlayer(a)
                },
                loadPlayer: function(a) {
                    var b = c._videoId;
                    void 0 !== a && (b = a);
                    if (void 0 !== b) {
                        c.tdPlaylistIdYoutubeVideoRunning = b;
                        a = window.td_youtube_list_ids["td_" + c.tdPlaylistIdYoutubeVideoRunning].title;
                        var d = window.td_youtube_list_ids["td_" + c.tdPlaylistIdYoutubeVideoRunning].time;
                        c.jqTDWrapperVideoPlaylist.find(".td_click_video_youtube").removeClass("td_video_currently_playing");
                        c.jqTDWrapperVideoPlaylist.find(".td_" + b).addClass("td_video_currently_playing");
                        c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_youtube").html(a);
                        c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_youtube").html(d);
                        c.jqPlayerWrapper.html("<div id=" + c.tdPlayerContainer + "></div>");
                        c.jqControlPlayer = c.jqTDWrapperVideoPlaylist.find(".td_youtube_control");
                        c.tdYtPlayer = new YT.Player(c.tdPlayerContainer, {
                            playerVars: {
                                autoplay: c.autoplay
                            },
                            height: "100%",
                            width: "100%",
                            videoId: b,
                            events: {
                                onStateChange: c.onPlayerStateChange
                            }
                        })
                    }
                },
                onPlayerStateChange: function(a) {
                    if (a.data ===
                        YT.PlayerState.PLAYING) c.pauseStatus();
                    else if (a.data === YT.PlayerState.ENDED) {
                        c.playStatus();
                        c.autoplay = 1;
                        a = "";
                        var b = c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");
                        b.length && (b = jQuery(b).next(".td_click_video_youtube"), b.length && (a = jQuery(b).data("video-id")));
                        "" !== a && c.playVideo(a)
                    } else YT.PlayerState.PAUSED && c.playStatus()
                },
                playerPlay: function() {
                    c.tdYtPlayer.playVideo()
                },
                playerPause: function() {
                    c.tdYtPlayer.pauseVideo()
                },
                playStatus: function() {
                    c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")
                },
                pauseStatus: function() {
                    c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")
                }
            };
            return c
        }
    };
    tdVimeoPlayers = {
        tdPlayerContainer: "player_vimeo",
        players: [],
        existingAutoplay: !1,
        init: function() {
            for (var a = jQuery(".td_wrapper_playlist_player_vimeo"), b = 0; b < a.length; b++) 0 !== tdVimeoPlayers.addPlayer(jQuery(a[b])).autoplay && (tdVimeoPlayers.existingAutoplay = !0);
            jQuery(".td_click_video_vimeo").click(function() {
                var a = jQuery(this).data("video-id"),
                    b = jQuery(this).data("player-id");
                void 0 !==
                    b && "" !== b && void 0 !== a && "" !== a && tdVimeoPlayers.operatePlayer(b, "play", a)
            });
            jQuery(".td_vimeo_control").click(function() {
                var a = jQuery(this).data("player-id");
                void 0 !== a && "" !== a && (jQuery(this).hasClass("td-sp-video-play") ? tdVimeoPlayers.operatePlayer(a, "play") : tdVimeoPlayers.operatePlayer(a, "pause"))
            })
        },
        addPlayer: function(a) {
            var b = tdVimeoPlayers.tdPlayerContainer + "_" + tdVimeoPlayers.players.length,
                c = tdVimeoPlayers.createPlayer(b, a);
            a.parent().find(".td_vimeo_control").data("player-id", b);
            for (var d = a.parent().find(".td_click_video_vimeo"),
                    e = 0; e < d.length; e++) jQuery(d[e]).data("player-id", b), e + 1 < d.length ? jQuery(d[e]).data("next-video-id", jQuery(d[e + 1]).data("video-id")) : jQuery(d[e]).data("next-video-id", jQuery(d[0]).data("video-id"));
            "1" == a.data("autoplay") && (c.autoplay = 1);
            a = a.data("first-video");
            void 0 !== a && "" !== a && c.createPlayer(a);
            tdVimeoPlayers.players.push(c);
            return c
        },
        operatePlayer: function(a, b, c) {
            for (var d = 0; d < tdVimeoPlayers.players.length; d++)
                if (tdVimeoPlayers.players[d].playerId == a) {
                    a = tdVimeoPlayers.players[d];
                    "play" === b ? (a.autoplay =
                        1, void 0 !== c ? (tdVimeoPlayers.existingAutoplay = !1, a.createPlayer(c)) : a.playerPlay()) : "pause" === b && a.playerPause();
                    break
                }
        },
        createPlayer: function(a, b) {
            var c = {
                playerId: a,
                jqTDWrapperVideoPlaylist: b.closest(".td_wrapper_video_playlist"),
                jqPlayerWrapper: b,
                currentVideoPlaying: "",
                player: "",
                jqControlPlayer: "",
                autoplay: 0,
                createPlayer: function(a) {
                    if ("" !== a) {
                        this.currentVideoPlaying = a;
                        var b = "",
                            d = window.td_vimeo_list_ids["td_" + a].title,
                            l = window.td_vimeo_list_ids["td_" + a].time;
                        c.jqTDWrapperVideoPlaylist.find(".td_click_video_vimeo").removeClass("td_video_currently_playing");
                        c.jqTDWrapperVideoPlaylist.find(".td_" + a).addClass("td_video_currently_playing");
                        c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_vimeo").html(d);
                        c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_vimeo").html(l);
                        c.jqControlPlayer = c.jqTDWrapperVideoPlaylist.find(".td_vimeo_control");
                        tdVimeoPlayers.existingAutoplay || 0 === c.autoplay ? c.playStatus() : (b = "&autoplay=1", tdDetect.isMobileDevice ? c.playStatus() : c.pauseStatus());
                        c.jqPlayerWrapper.html('<iframe id="' + c.playerId + '" src="https://player.vimeo.com/video/' +
                            a + "?api=1&player_id=" + c.playerId + "" + b + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                        c.createVimeoObjectPlayer(jQuery)
                    }
                },
                createVimeoObjectPlayer: function(a) {
                    var b = "";
                    a = a("#" + c.playerId);
                    a.length && (b = $f(a[0]), c.player = b, b.addEvent("ready", function() {
                        b.addEvent("play", function(a) {
                            c.pauseStatus();
                            c.autoplay = 1
                        });
                        b.addEvent("pause", function(a) {
                            c.playStatus()
                        });
                        b.addEvent("finish", function(a) {
                            a = "";
                            var b = c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");
                            b.length && (b = jQuery(b).next(".td_click_video_vimeo"), b.length && (a = jQuery(b).data("video-id")));
                            "" !== a ? (c.createPlayer(a), tdDetect.isMobileDevice ? c.playStatus() : c.pauseStatus()) : c.playStatus()
                        })
                    }))
                },
                playerPlay: function() {
                    c.autoplay = 1;
                    c.player.api("play")
                },
                playerPause: function() {
                    c.player.api("pause")
                },
                playStatus: function() {
                    c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")
                },
                pauseStatus: function() {
                    c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")
                }
            };
            return c
        }
    }
})();
"use strict";
jQuery(window).load(function() {
    td_resize_smartlist_sliders_and_update()
});
jQuery().ready(function() {
    td_resize_smartlist_sliders_and_update()
});

function td_resize_smartlist_slides(a) {
    var b = a.currentSlideNumber;
    a = jQuery(a.data.obj[0]).attr("id");
    tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
    b = jQuery("#" + a + "_item_" + b).outerHeight(!0);
    jQuery("#" + a + ", #" + a + " .td-slider").css({
        height: b
    })
}

function td_resize_smartlist_sliders_and_update() {
    jQuery(document).find(".td-smart-list-slider").each(function() {
        var a = jQuery(this).attr("id");
        tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
        var b = 0,
            b = jQuery("#" + a + "_item_" + td_history.get_current_page("slide")).outerHeight(!0);
        jQuery("#" + a + ", #" + a + " .td-slider").css({
            height: b
        });
        tdDetect.isAndroid && setTimeout(function() {
            jQuery("#" + a).iosSlider("update")
        }, 2E3)
    })
}

function td_resize_normal_slide(a) {
    a = jQuery(a.data.obj[0]).attr("id");
    var b = td_get_document_width();
    tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
    var c = jQuery("#" + a + "_item_0").outerWidth(!0),
        d = 780;
    tdDetect.isAndroid && (d = 1E3);
    b < d && !tdDetect.isIpad && (b = 300 < c ? .5 * c : c, jQuery("#" + a + ", #" + a + " .td-slider, #" + a + " .td-slider .td-module-thumb").css({
        height: b
    }))
}

function td_resize_normal_slide_and_update(a) {
    var b = jQuery(a.data.obj[0]).attr("id");
    a = td_get_document_width();
    tdDetect.isIe8 || (jQuery("#" + b).css("overflow", "none"), jQuery("#" + b + " .td-item").css("overflow", "visible"));
    var c = 0,
        c = jQuery("#" + b + "_item_0").outerWidth(!0),
        d = 780;
    tdDetect.isAndroid && (d = 1E3);
    a < d && !tdDetect.isIpad && (c = 300 < c ? .5 * c : c, jQuery("#" + b + ", #" + b + " .td-slider, #" + b + " .td-slider .td-module-thumb").css({
        height: c
    }), setTimeout(function() {
        jQuery("#" + b).iosSlider("update")
    }, 2E3))
}
var tdPullDown = {};
(function() {
    tdPullDown = {
        _view_port_interval_index: tdViewport.INTERVAL_INITIAL_INDEX,
        reinitialize_items_at_change_view_port: !1,
        items: [],
        item: function() {
            this.horizontal_element_css_class = this.container_jquery_obj = this.vertical_jquery_obj = this.horizontal_jquery_obj = this.blockUid = "";
            this.minimum_elements = 1;
            this.excluded_jquery_elements = [];
            this._horizontal_extra_space = 1;
            this._horizontal_elements = [];
            this._vertical_elements = [];
            this._vertical_ul_jquery_obj = "";
            this._vertical_jquery_obj_outer_width = 0;
            this._is_initialized = !1
        },
        init: function() {
            tdPullDown._view_port_interval_index = tdViewport.getCurrentIntervalIndex();
            tdPullDown.items = []
        },
        add_item: function(a) {
            if (1 !== a.vertical_jquery_obj.length) throw "item.vertical_jquery_obj is more or less than one: " + a.vertical_jquery_obj.length;
            if (1 !== a.horizontal_jquery_obj.length) throw "item.horizontal_jquery_obj is more or less than one: " + a.horizontal_jquery_obj.length;
            if (1 !== a.container_jquery_obj.length) throw "item.container_jquery_obj is more or less than one: " + a.container_jquery_obj.length;
            if ("" === a.horizontal_element_css_class) throw "item.horizontal_element_css_class is empty";
            tdPullDown.items.push(a);
            tdPullDown._initialize_item(a);
            tdPullDown._compute_item(a)
        },
        deleteItem: function(a) {
            for (var b = 0; b < tdPullDown.items.length; b++)
                if (tdPullDown.items[b].blockUid === a) return tdPullDown.items.splice(b, 1), !0;
            return !1
        },
        _initialize_item: function(a) {
            if (!0 !== a._is_initialized)
                if (a._vertical_ul_jquery_obj = a.vertical_jquery_obj.find("ul:first"), 0 === a._vertical_ul_jquery_obj.length) tdPullDown.log("Item can' be initialized. The vertical list doesn't have an 'ul' container");
                else {
                    var b = null,
                        c = null;
                    a.horizontal_jquery_obj.find("." + a.horizontal_element_css_class).each(function(d, f) {
                        b = jQuery(f);
                        b.css("-webkit-transition", "opacity 0.2s");
                        b.css("-moz-transition", "opacity 0.2s");
                        b.css("-o-transition", "opacity 0.2s");
                        b.css("transition", "opacity 0.2s");
                        b.css("opacity", "1");
                        c = {
                            jquery_object: b,
                            calculated_width: b.outerWidth(!0)
                        };
                        a._horizontal_elements.push(c)
                    });
                    a._vertical_jquery_obj_outer_width = a.vertical_jquery_obj.outerWidth(!0);
                    a.vertical_jquery_obj.css("display", "none");
                    var d =
                        a.horizontal_jquery_obj.css("padding-left");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    d = a.horizontal_jquery_obj.css("padding-right");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    d = a.horizontal_jquery_obj.css("margin-left");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    d = a.horizontal_jquery_obj.css("margin-right");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    d = a.horizontal_jquery_obj.css("border-left");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    d = a.horizontal_jquery_obj.css("border-right");
                    void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
                    a._is_initialized = !0
                }
        },
        _get_horizontal_elements_width: function(a) {
            for (var b = 0, c = a._horizontal_elements.length - 1; 0 <= c; c--) b += a._horizontal_elements[c].calculated_width;
            return b
        },
        _reinitialize_all_items: function() {
            for (var a = tdPullDown.items.length - 1; 0 <= a; a--) tdPullDown._reinitialize_item(tdPullDown.items[a])
        },
        _reinitialize_item: function(a) {
            !1 !== a._is_initialized && (a._is_initialized = !1, a.horizontal_jquery_obj.html(a.horizontal_jquery_obj.html() + a._vertical_ul_jquery_obj.html()), a._vertical_ul_jquery_obj.html(""), a._horizontal_elements = [], a._vertical_elements = [], a._horizontal_extra_space = 1, tdPullDown._initialize_item(a))
        },
        _compute_item: function(a) {
            if (!1 !== a._is_initialized) {
                tdPullDown._prepare_horizontal_header(a, !0);
                var b = 0,
                    c = a.container_jquery_obj.css("width");
                if (void 0 !== c && "" !== c)
                    for (b = c.replace("px",
                            ""), c = a.excluded_jquery_elements.length - 1; 0 <= c; c--) b -= a.excluded_jquery_elements[c].outerWidth(!0);
                0 < a._vertical_elements.length && (b -= a._vertical_jquery_obj_outer_width);
                for (var b = b - tdPullDown._get_horizontal_elements_width(a), b = b - a._horizontal_extra_space, d; 0 > b;) {
                    if (0 !== a.minimum_elements && a._horizontal_elements.length <= a.minimum_elements) {
                        tdPullDown._make_all_elements_vertical(a);
                        tdPullDown._prepare_horizontal_header(a);
                        return
                    }
                    0 === a._vertical_elements.length && (b -= a._vertical_jquery_obj_outer_width);
                    d = tdPullDown._make_element_vertical(a);
                    b += d.calculated_width
                }
                if (0 !== a.minimum_elements && 0 === a._horizontal_elements.length && 0 < a._vertical_elements.length && b >= a._vertical_elements[0].calculated_width) {
                    for (d = c = 0; d < a.minimum_elements && d < a._vertical_elements.length; d++) c += a._vertical_elements[d].calculated_width;
                    for (var e = 0, f = a.minimum_elements; 0 < f && 0 < a._vertical_elements.length && b >= c;)
                        if (d = tdPullDown._make_element_horizontal(a), null !== d) e += d.calculated_width, f--;
                        else {
                            tdPullDown._prepare_horizontal_header(a);
                            return
                        }
                    b -= e
                }
                for (;
                    (0 < a._horizontal_elements.length || 0 === a._horizontal_elements.length && 0 === a.minimum_elements) && 0 < a._vertical_elements.length && b >= a._vertical_elements[0].calculated_width;)
                    if (d = tdPullDown._make_element_horizontal(a), null !== d) b -= d.calculated_width;
                    else {
                        tdPullDown._prepare_horizontal_header(a);
                        return
                    }
                1 === a._vertical_elements.length && b + a._vertical_jquery_obj_outer_width >= a._vertical_elements[0].calculated_width && tdPullDown._make_element_horizontal(a);
                tdPullDown._prepare_horizontal_header(a)
            }
        },
        _prepare_horizontal_header: function(a, b) {
            var c = a.horizontal_jquery_obj.parent().siblings(".block-title:first");
            1 === c.length && (c = c.find("span:first"), 1 === c.length && ("undefined" !== typeof b && !0 === b ? c.css("margin-right", 0) : 0 === a._horizontal_elements.length ? c.css("margin-right", a._vertical_jquery_obj_outer_width + "px") : c.css("margin-right", 0)))
        },
        _compute_all_items: function() {
            for (var a = tdPullDown.items.length - 1; 0 <= a; a--) tdPullDown.items[a].constructor === tdPullDown.item && tdPullDown._compute_item(tdPullDown.items[a])
        },
        _make_element_horizontal: function(a) {
            if (!1 === a._is_initialized || 0 === a._vertical_elements.length) return null;
            var b = a._vertical_elements.shift();
            0 === a._vertical_elements.length && a.vertical_jquery_obj.css("display", "none");
            a._horizontal_elements.push(b);
            b.jquery_object.css("opacity", "0");
            b.jquery_object.detach().appendTo(a.horizontal_jquery_obj);
            setTimeout(function() {
                b.jquery_object.css("opacity", "1")
            }, 50);
            return b
        },
        _make_element_vertical: function(a) {
            if (!1 === a._is_initialized || 0 === a._horizontal_elements.length) return null;
            var b = a._horizontal_elements.pop();
            0 === a._vertical_elements.length && a.vertical_jquery_obj.css("display", "");
            a._vertical_elements.unshift(b);
            b.jquery_object.detach().prependTo(a._vertical_ul_jquery_obj);
            return b
        },
        _make_all_elements_vertical: function(a) {
            for (; 0 < a._horizontal_elements.length;) tdPullDown._make_element_vertical(a)
        },
        td_events_resize: function() {
            0 !== tdPullDown.items.length && (!0 === tdPullDown.reinitialize_items_at_change_view_port && tdPullDown._view_port_interval_index !== tdViewport.getCurrentIntervalIndex() &&
                tdPullDown._reinitialize_all_items(), tdPullDown._compute_all_items())
        },
        log: function(a) {}
    };
    tdPullDown.init()
})();
var tdAnimationScroll = {};
(function() {
    tdAnimationScroll = {
        items: [],
        rAFIndex: 0,
        animation_running: !1,
        item: function() {
            this.percent_value = 0;
            this.animation_callback = null;
            this.jqueryObj = "";
            this.wrapper_jquery_obj = void 0;
            this.top_marker_jquery_obj = "";
            this.full_height = 0;
            this.offset_bottom_top = this.offset_top = "";
            this.properties = {};
            this.computed_item_properties = {};
            this.computation_stopped = this._is_initialized = this.top_is_out = this.redraw = !1;
            this.add_item_property = function(a, b, c, d, e, f) {
                if (!(b >= c))
                    if (void 0 === this.properties[a]) this.properties[a] = {
                        computed_value: "",
                        settings: []
                    }, 0 !== b && (this.properties[a].settings[this.properties[a].settings.length] = {
                        start_percent: 0,
                        end_percent: b,
                        start_value: d,
                        end_value: d,
                        easing: ""
                    }), this.properties[a].settings[this.properties[a].settings.length] = {
                        start_percent: b,
                        end_percent: c,
                        start_value: d,
                        end_value: e,
                        easing: f
                    }, this.properties[a].settings[this.properties[a].settings.length] = {
                        start_percent: c,
                        end_percent: 100,
                        start_value: e,
                        end_value: e,
                        easing: ""
                    };
                    else {
                        var l = this.properties[a].settings[this.properties[a].settings.length -
                            1];
                        l.start_percent !== b ? (this.properties[a].settings[this.properties[a].settings.length - 1] = {
                            start_percent: l.start_percent,
                            end_percent: b,
                            start_value: l.end_value,
                            end_value: l.end_value,
                            easing: ""
                        }, this.properties[a].settings[this.properties[a].settings.length] = {
                            start_percent: b,
                            end_percent: c,
                            start_value: d,
                            end_value: e,
                            easing: f
                        }) : this.properties[a].settings[this.properties[a].settings.length - 1] = {
                            start_percent: b,
                            end_percent: c,
                            start_value: d,
                            end_value: e,
                            easing: f
                        };
                        100 !== c && (this.properties[a].settings[this.properties[a].settings.length] = {
                            start_percent: c,
                            end_percent: 100,
                            start_value: e,
                            end_value: e,
                            easing: ""
                        })
                    }
            };
            this.remove_item_property = function(a) {
                if (void 0 === this.properties[a]) return !1;
                delete this.properties[a];
                return !0
            }
        },
        init: function() {
            tdAnimationScroll.items = []
        },
        add_item: function(a) {
            a.constructor === tdAnimationScroll.item && (tdAnimationScroll.items.push(a), tdAnimationScroll._initialize_item(a))
        },
        _initialize_item: function(a) {
            if (!0 !== a._is_initialized && (a.full_height = void 0 === a.wrapper_jquery_obj ? a.jqueryObj.outerHeight(!0) : a.wrapper_jquery_obj.height(),
                    0 !== a.full_height)) {
                var b = jQuery('<div class="td_marker_animation" style="height: 0; width: 0">');
                b.insertBefore(a.jqueryObj);
                a.top_marker_jquery_obj = b;
                a.offset_top = a.top_marker_jquery_obj.offset().top;
                a.offset_bottom_top = a.offset_top + a.full_height;
                a.top_is_out = tdEvents.window_pageYOffset > a.offset_top;
                a._is_initialized = !0
            }
        },
        reinitialize_all_items: function(a) {
            for (var b = tdAnimationScroll.items.length - 1; 0 <= b; b--) tdAnimationScroll.reinitialize_item(tdAnimationScroll.items[b], a)
        },
        reinitialize_item: function(a,
            b) {
            if (!1 !== a._is_initialized) {
                a._is_initialized = !1;
                a.offset_top = a.top_marker_jquery_obj.offset().top;
                if (!0 === b && (a.full_height = void 0 === a.wrapper_jquery_obj ? a.jqueryObj.outerHeight(!0) : a.wrapper_jquery_obj.height(), 0 === a.full_height)) return;
                a.offset_bottom_top = a.offset_top + a.full_height;
                a._is_initialized = !0
            }
        },
        _compute_item_properties: function(a) {
            var b = {},
                c;
            for (c in a.properties)
                if (!0 === a.properties.hasOwnProperty(c)) {
                    var d = a.properties[c];
                    var e;
                    for (e = 0; e < d.settings.length; e++) {
                        var f = d.settings[e];
                        if (f.start_percent <= a.percent_value && a.percent_value < f.end_percent || a.percent_value === f.end_percent && 100 === a.percent_value) {
                            if (f.start_value === f.end_value) f = f.start_value;
                            else if (e = (a.percent_value - f.start_percent) / (f.end_percent - f.start_percent) * (f.end_value - f.start_value), void 0 === f.easing || "" === f.easing) f = f.start_value + e;
                            else {
                                var l = Math.abs(f.start_value - f.end_value) / 1E3;
                                f = f.start_value < f.end_value ? f.start_value + 1E3 * jQuery.easing[f.easing](null, e, 0, l, f.end_value - f.start_value) : f.start_value - 1E3 *
                                    jQuery.easing[f.easing](null, -e, 0, l, f.start_value - f.end_value)
                            }
                            d.computed_value !== f && (d.computed_value = f, b[c] = f, a.redraw = !0);
                            break
                        }
                    }
                }
            a.computed_item_properties = b
        },
        compute_item: function(a) {
            if (!1 !== a._is_initialized) {
                var b = 0;
                tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= a.offset_top && (b = tdEvents.window_pageYOffset > a.offset_bottom_top ? 100 : 100 * (tdEvents.window_pageYOffset + tdEvents.window_innerHeight - a.offset_top) / (tdEvents.window_innerHeight + a.full_height));
                a.percent_value !== b && (a.percent_value =
                    b, tdAnimationScroll._compute_item_properties(a));
                a.top_is_out = tdEvents.window_pageYOffset > a.offset_top
            }
        },
        compute_all_items: function() {
            !1 === tdAnimationScroll.animation_running && (tdAnimationScroll.rAFIndex = window.requestAnimationFrame(tdAnimationScroll._animate_all_items));
            tdAnimationScroll.animation_running = !0
        },
        _animate_all_items: function() {
            for (var a = 0; a < tdAnimationScroll.items.length; a++) !1 === tdAnimationScroll.items[a].computation_stopped && tdAnimationScroll.compute_item(tdAnimationScroll.items[a]);
            for (a = 0; a < tdAnimationScroll.items.length; a++) !0 === tdAnimationScroll.items[a].redraw && tdAnimationScroll.items[a].animation_callback();
            tdAnimationScroll.animation_running = !1
        },
        td_events_resize: function() {
            0 !== tdAnimationScroll.items.length && (tdAnimationScroll.reinitialize_all_items(!1), tdAnimationScroll.compute_all_items())
        },
        log: function(a) {}
    };
    tdAnimationScroll.init()
})();
var tdHomepageFull = {};
(function(a, b) {
    tdHomepageFull = {
        items: [],
        item: function() {
            this.blockUid = "";
            this.$tmplBlock = b
        },
        addItem: function(a) {
            if (!tdHomepageFull.items.length) switch (a.theme_name) {
                case "Newsmag":
                    tdHomepageFull._addNewsmagItem(a);
                    break;
                default:
                    tdHomepageFull._addItem(a)
            }
        },
        deleteItem: function(a) {
            for (var b = 0; b < tdHomepageFull.items.length; b++) {
                var c = tdHomepageFull.items[b];
                if (c.blockUid === a) switch (c.theme_name) {
                    case "Newsmag":
                        tdHomepageFull._deleteNewsmagItem(c, b);
                        break;
                    default:
                        tdHomepageFull._deleteItem(c, b)
                }
            }
            return !1
        },
        _addItem: function(b) {
            b.$tmplBlock = a("#" + b.blockUid + "_tmpl");
            a(".td-header-wrap").after(b.$tmplBlock.html());
            var c = a('<div class="backstretch"></div>'),
                e = a('<img class="td-backstretch not-parallax" src="' + b.postFeaturedImage + '"/>');
            c.append(e);
            a("body").prepend(c);
            var f = new tdBackstr.item;
            f.wrapper_image_jquery_obj = c;
            f.image_jquery_obj = e;
            tdBackstr.add_item(f);
            b.$article = a("#post-" + b.postId);
            b.$bgImageWrapper = c;
            b.backstrItem = f;
            tdHomepageFull.items.push(b)
        },
        _addNewsmagItem: function(b) {
            b.$tmplBlock = a("#" +
                b.blockUid + "_tmpl");
            a("body").addClass("single_template_6");
            a("#td-outer-wrap").prepend(b.$tmplBlock.html());
            var c = a('<div class="td-full-screen-header-image-wrap"></div>'),
                e = a('<div id="td-full-screen-header-image" class="td-image-gradient"></div>'),
                f = a('<img class="td-backstretch" src="' + b.postFeaturedImage + '"/>');
            c.append(e);
            e.append(f);
            a("#td-outer-wrap").prepend(c);
            b.$bgImageWrapper = c;
            e = new tdBackstr.item;
            e.wrapper_image_jquery_obj = c;
            e.image_jquery_obj = f;
            tdBackstr.add_item(e);
            b.$article = a("#post-" +
                b.postId);
            b.backstrItem = e;
            a(".td-read-down a").click(function(b) {
                b.preventDefault();
                tdUtil.scrollToPosition(a(".td-full-screen-header-image-wrap").height(), 1200)
            });
            tdHomepageFull.items.push(b)
        },
        _deleteItem: function(a, d) {
            a.$tmplBlock.remove();
            a.$article.remove();
            a.$bgImageWrapper.remove();
            tdHomepageFull.items.splice(d, 1);
            tdBackstr.deleteItem(a.blockUid) && (a.backstrItem = b);
            var c = document.body.className,
                c = c.replace(/td-boxed-layout/g, ""),
                c = c.replace(/single_template_8/g, ""),
                c = c.replace(/homepage-post/g,
                    "");
            document.body.className = c
        },
        _deleteNewsmagItem: function(a, d) {
            a.$tmplBlock.remove();
            a.$article.remove();
            a.$bgImageWrapper.remove();
            tdHomepageFull.items.splice(d, 1);
            tdBackstr.deleteItem(a.blockUid) && (a.backstrItem = b);
            var c = document.body.className,
                c = c.replace(/single_template_6/g, "");
            document.body.className = c
        }
    }
})(jQuery);
var tdBackstr = {};
(function() {
    tdBackstr = {
        items: [],
        item: function() {
            this.blockUid = "";
            this.image_aspect_rate = this.previous_value = 0;
            this.image_jquery_obj = this.wrapper_image_jquery_obj = ""
        },
        add_item: function(a) {
            if (a.constructor === tdBackstr.item)
                if (a.image_jquery_obj.get(0).complete) tdBackstr._load_item_image(a);
                else a.image_jquery_obj.on("load", function() {
                    tdBackstr._load_item_image(a)
                })
        },
        deleteItem: function(a) {
            for (var b = 0; b < tdBackstr.items.length; b++)
                if (tdBackstr.items[b].blockUid === a) return tdBackstr.items.splice(b, 1), !0;
            return !1
        },
        _load_item_image: function(a) {
            a.image_aspect_rate = a.image_jquery_obj.width() / a.image_jquery_obj.height();
            tdBackstr.items.push(a);
            tdBackstr._compute_item(a);
            a.image_jquery_obj.css("opacity", "1")
        },
        _compute_item: function(a) {
            if (a.wrapper_image_jquery_obj.width() / a.wrapper_image_jquery_obj.height() < a.image_aspect_rate) {
                var b = 1;
                a.previous_value !== b && (a.image_jquery_obj.removeClass("td-stretch-width"), a.image_jquery_obj.addClass("td-stretch-height"), a.previous_value = b)
            } else b = 2, a.previous_value !==
                b && (a.image_jquery_obj.removeClass("td-stretch-height"), a.image_jquery_obj.addClass("td-stretch-width"), a.previous_value = b)
        },
        _compute_all_items: function() {
            for (var a = 0; a < tdBackstr.items.length; a++) tdBackstr._compute_item(tdBackstr.items[a])
        },
        td_events_resize: function() {
            0 !== tdBackstr.items.length && tdBackstr._compute_all_items()
        },
        log: function(a) {
            window.console.log(a)
        }
    }
})();
var tdAnimationStack = {};
(function() {
    tdAnimationStack = {
        _animation_css_class1: "",
        _animation_css_class2: "",
        _animation_default_effect: "type0",
        activated: !1,
        _ready_for_initialization: !0,
        _ready_init_timeout: void 0,
        max_waiting_for_init: 3E3,
        _specific_selectors: "",
        _general_selectors: "",
        ready_init: function() {
            tdDetect.isIe8 || tdDetect.isIe9 || 0 < jQuery(".vc_images_carousel").length ? (tdAnimationStack._ready_for_initialization = !1, void 0 !== window.td_animation_stack_effect && ("" === window.td_animation_stack_effect && (window.td_animation_stack_effect =
                tdAnimationStack._animation_default_effect), jQuery("body").removeClass("td-animation-stack-" + window.td_animation_stack_effect))) : void 0 === window.tds_animation_stack || void 0 === window.td_animation_stack_effect ? tdAnimationStack._ready_for_initialization = !1 : (void 0 !== window.td_animation_stack_specific_selectors && (tdAnimationStack._specific_selectors = window.td_animation_stack_specific_selectors), "" === window.td_animation_stack_effect && (window.td_animation_stack_effect = tdAnimationStack._animation_default_effect),
                tdAnimationStack._animation_css_class1 = "td-animation-stack-" + window.td_animation_stack_effect + "-1", tdAnimationStack._animation_css_class2 = "td-animation-stack-" + window.td_animation_stack_effect + "-2", void 0 !== window.td_animation_stack_general_selectors && (tdAnimationStack._general_selectors = window.td_animation_stack_general_selectors), jQuery(tdAnimationStack._general_selectors).addClass(tdAnimationStack._animation_css_class1), tdAnimationStack._ready_init_timeout = setTimeout(function() {
                    !0 !== tdAnimationStack.activated &&
                        (tdAnimationStack._ready_for_initialization = !1, void 0 !== window.td_animation_stack_effect && jQuery("body").removeClass("td-animation-stack-" + window.td_animation_stack_effect))
                }, tdAnimationStack.max_waiting_for_init))
        },
        _ITEM_TO_VIEW_PORT: {
            ITEM_ABOVE_VIEW_PORT: 0,
            ITEM_IN_VIEW_PORT: 1,
            ITEM_UNDER_VIEW_PORT: 2
        },
        SORTED_METHOD: {
            sort_left_to_right: function(a, b) {
                return a.offset_top > b.offset_top ? 1 : a.offset_top < b.offset_top ? -1 : a._order > b._order ? 1 : a._order < b._order ? -1 : 0
            },
            sort_right_to_left: function(a, b) {
                return a.offset_top >
                    b.offset_top || !(a.offset_top < b.offset_top || a._order > b._order) && a._order < b._order ? 1 : -1
            }
        },
        _order: 0,
        interval: 70,
        min_interval: 17,
        max_interval: 40,
        _current_interval: void 0,
        _items_in_view_port: [],
        _items_above_view_port: [],
        items: [],
        item: function() {
            this._order = this.jqueryObj = this.offset_bottom_to_top = this.offset_top = void 0
        },
        _initialize_item: function(a) {
            a._order = tdAnimationStack._order++;
            a.offset_top = a.jqueryObj.offset().top;
            a.offset_bottom_to_top = a.offset_top + a.jqueryObj.height()
        },
        check_for_new_items: function(a,
            b, c) {
            if (!1 !== tdAnimationStack.activated && !1 !== tdAnimationStack._ready_for_initialization) {
                void 0 === a && (a = "");
                var d = [];
                jQuery(tdAnimationStack._general_selectors).not("." + tdAnimationStack._animation_css_class2).addClass(tdAnimationStack._animation_css_class1);
                var e = jQuery(a + ", .post").find(tdAnimationStack._specific_selectors).filter(function() {
                    return jQuery(this).hasClass(tdAnimationStack._animation_css_class1)
                });
                e.each(function(a, b) {
                    var c = new tdAnimationStack.item;
                    c.jqueryObj = jQuery(b);
                    tdAnimationStack.log(a);
                    tdAnimationStack._initialize_item(c);
                    d.push(c)
                });
                (function() {
                    for (var a = !0, l = 0; l < d.length; l++)
                        if (!1 === e[l].complete) {
                            a = !1;
                            break
                        }
                    if (!1 === a) {
                        var g = (new Date).getTime();
                        tdAnimationStack.log("TIMER - started");
                        var p = setInterval(function() {
                            var f;
                            if ((new Date).getTime() - g > tdAnimationStack.max_waiting_for_init)
                                for (clearInterval(p), f = 0; f < d.length; f++) d[f].jqueryObj.removeClass(tdAnimationStack._animation_css_class1), d[f].jqueryObj.addClass(tdAnimationStack._animation_css_class2);
                            else {
                                a = !0;
                                for (f = 0; f < d.length; f++)
                                    if (!1 ===
                                        e[f].complete) {
                                        a = !1;
                                        break
                                    }!0 === a && (clearInterval(p), tdAnimationStack.log("TIMER - stopped"), tdAnimationStack._precompute_items(d, b, c), tdAnimationStack.compute_items())
                            }
                        }, 100)
                    } else tdAnimationStack._precompute_items(d, b, c), tdAnimationStack.compute_items()
                })();
                tdAnimationStack.log("checked for new items finished")
            }
        },
        _precompute_items: function(a, b, c) {
            a.sort(b);
            if (!0 === c)
                for (; 0 < a.length;) tdAnimationStack.log("add item 1 : " + a.length), tdAnimationStack._items_in_view_port.push(a.shift());
            else
                for (; 0 < a.length;) tdAnimationStack.log("add item 2 : " +
                    a.length), tdAnimationStack.items.push(a.shift())
        },
        init: function() {
            void 0 !== window.tds_animation_stack && !1 !== tdAnimationStack._ready_for_initialization && (clearTimeout(tdAnimationStack._ready_init_timeout), tdAnimationStack.activated = !0, tdAnimationStack.check_for_new_items(".td-animation-stack", tdAnimationStack.SORTED_METHOD.sort_left_to_right, !1))
        },
        reinit: function() {
            !1 !== tdAnimationStack._ready_for_initialization && (tdAnimationStack.items = [], tdAnimationStack._items_in_view_port = [], tdAnimationStack._items_above_view_port = [], tdAnimationStack.init())
        },
        compute_items: function() {
            if (!1 !== tdAnimationStack.activated && !1 !== tdAnimationStack._ready_for_initialization) {
                for (tdAnimationStack._separate_items(); 0 < tdAnimationStack._items_above_view_port.length;) {
                    tdAnimationStack.log("animation - above the view port");
                    var a = tdAnimationStack._items_above_view_port.shift();
                    a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);
                    a.jqueryObj.addClass(tdAnimationStack._animation_css_class2)
                }
                0 < tdAnimationStack._items_in_view_port.length &&
                    (clearInterval(tdAnimationStack._current_interval), a = tdAnimationStack._get_item_from_view_port(), a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1), a.jqueryObj.addClass(tdAnimationStack._animation_css_class2), 0 < tdAnimationStack._items_in_view_port.length && (tdAnimationStack.log("start animation timer"), tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1 / tdAnimationStack._items_in_view_port.length * tdAnimationStack.interval))))
            }
        },
        _to_timer: function(a) {
            tdAnimationStack._current_interval =
                setInterval(function() {
                    if (0 < tdAnimationStack._items_in_view_port.length) {
                        var b = tdAnimationStack._get_item_from_view_port();
                        tdAnimationStack.log("animation at interval: " + a);
                        b.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);
                        b.jqueryObj.addClass(tdAnimationStack._animation_css_class2);
                        clearInterval(tdAnimationStack._current_interval);
                        0 < tdAnimationStack._items_in_view_port.length && tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1 / tdAnimationStack._items_in_view_port.length *
                            tdAnimationStack.interval))
                    }
                }, a)
        },
        _get_item_from_view_port: function() {
            return tdAnimationStack._items_in_view_port.shift()
        },
        _get_right_interval: function(a) {
            return a < tdAnimationStack.min_interval ? tdAnimationStack.min_interval : a > tdAnimationStack.max_interval ? tdAnimationStack.max_interval : a
        },
        _item_to_view_port: function(a) {
            tdAnimationStack.log("position item relative to the view port >> " + tdEvents.window_pageYOffset + tdEvents.window_innerHeight + " : " + a.offset_top);
            return tdEvents.window_pageYOffset + tdEvents.window_innerHeight <
                a.offset_top ? tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT : tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= a.offset_top && tdEvents.window_pageYOffset <= a.offset_bottom_to_top ? tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT : tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT
        },
        _separate_items: function() {
            if (0 !== tdAnimationStack.items.length)
                for (; 0 < tdAnimationStack.items.length;) switch (tdAnimationStack._item_to_view_port(tdAnimationStack.items[0])) {
                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT:
                        tdAnimationStack._items_above_view_port.push(tdAnimationStack.items.shift());
                        break;
                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT:
                        tdAnimationStack._items_in_view_port.push(tdAnimationStack.items.shift());
                        break;
                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT:
                        tdAnimationStack.log("after separation items >> above: " + tdAnimationStack._items_above_view_port.length + " in: " + tdAnimationStack._items_in_view_port.length + " under: " + tdAnimationStack.items.length);
                        return
                }
        },
        td_events_scroll: function() {
            tdAnimationStack.compute_items()
        },
        td_events_resize: function() {
            clearInterval(tdAnimationStack._current_interval);
            tdAnimationStack.reinit()
        },
        log: function(a) {}
    }
})();
"use strict";
tdAffix.init({
    menu_selector: ".td-header-main-menu",
    menu_wrap_selector: ".td-header-menu-wrap",
    tds_snap_menu: tdUtil.getBackendVar("tds_snap_menu"),
    tds_snap_menu_logo: tdUtil.getBackendVar("tds_logo_on_sticky"),
    menu_affix_height: 48,
    menu_affix_height_on_mobile: 53
});
"enabled" == tdUtil.getBackendVar("tds_smart_sidebar") && !1 === tdDetect.isIos && jQuery(window).load(function() {
    jQuery(".td-ss-row").each(function() {
        var a = new tdSmartSidebar.item;
        a.sidebar_jquery_obj = jQuery(this).children(".td-pb-span4").find(".wpb_wrapper:first");
        a.content_jquery_obj = jQuery(this).children(".td-pb-span8").find(".wpb_wrapper:first");
        tdSmartSidebar.add_item(a)
    });
    if (0 < jQuery(".td-ss-main-content").length && 0 < jQuery(".td-ss-main-sidebar").length) {
        var a = new tdSmartSidebar.item;
        a.sidebar_jquery_obj =
            jQuery(".td-ss-main-sidebar");
        a.content_jquery_obj = jQuery(".td-ss-main-content");
        tdSmartSidebar.add_item(a)
    }
    tdSmartSidebar.td_events_resize()
});
var td_backstretch_items = [];
jQuery(window).ready(function() {
    jQuery(".td-category-siblings").each(function(a, b) {
        var c = jQuery(b),
            d = c.find(".td-category:first"),
            c = c.find(".td-subcat-dropdown:first");
        if (1 == d.length && 1 == c.length) {
            var e = new tdPullDown.item;
            e.horizontal_jquery_obj = d;
            e.vertical_jquery_obj = c;
            e.horizontal_element_css_class = "entry-category";
            e.container_jquery_obj = d.parents(".td-category-siblings:first");
            tdPullDown.add_item(e)
        }
    });
    jQuery(".td-backstretch").each(function(a, b) {
        if (!jQuery(b).hasClass("not-parallax")) {
            var c =
                new tdAnimationScroll.item;
            c.jqueryObj = jQuery(b);
            c.wrapper_jquery_obj = c.jqueryObj.parent();
            tdAnimationScroll.add_item(c);
            td_backstretch_items.push(c);
            td_compute_backstretch_item(c)
        }
    });
    jQuery(".td-parallax-header").each(function(a, b) {
        var c = new tdAnimationScroll.item;
        c.jqueryObj = jQuery(b);
        c.add_item_property("move_y", 40, 100, 0, 100, "");
        c.add_item_property("opacity", 40, 80, 1, 0, "");
        c.animation_callback = function() {
            var a = parseFloat(c.computed_item_properties.move_y).toFixed(),
                b = parseFloat(c.computed_item_properties.opacity);
            c.jqueryObj.css({
                "-webkit-transform": "translate3d(0px," + a + "px, 0px)",
                transform: "translate3d(0px," + a + "px, 0px)"
            });
            c.jqueryObj.css("transform", "translate3d(0px," + a + "px, 0px)");
            c.jqueryObj.css("opacity", b);
            c.redraw = !1
        };
        tdAnimationScroll.add_item(c)
    });
    tdAnimationScroll.compute_all_items();
    tdAnimationStack.ready_init()
});

function td_compute_backstretch_item(a) {
    var b = 100 * (tdEvents.window_innerHeight - a.offset_top) / (tdEvents.window_innerHeight + a.full_height),
        c = a.offset_top / 2,
        d = -c / 2;
    var e = 0 == d ? a.full_height / 6 : c / 1.2 * (100 - b) / (100 * tdEvents.window_innerHeight / (tdEvents.window_innerHeight + a.full_height) - b);
    d += .5;
    a.remove_item_property("move_y");
    a.add_item_property("move_y", b, 100, d, e, "");
    var f = parseFloat(1 + Math.abs(c) / a.full_height).toFixed(2);
    delete a.animation_callback;
    a.animation_callback = function() {
        var b = parseFloat(a.computed_item_properties.move_y).toFixed();
        a.jqueryObj.css({
            left: "50%",
            "-webkit-transform": "translate3d(-50%," + b + "px, 0px) scale(" + f + "," + f + ")",
            transform: "translate3d(-50%," + b + "px, 0px) scale(" + f + "," + f + ")"
        });
        a.redraw = !1
    }
}
var tdAjaxLoop = {};
(function() {
    tdAjaxLoop = {
        loopState: {
            sidebarPosition: "",
            moduleId: 1,
            currentPage: 1,
            max_num_pages: 0,
            atts: {},
            ajax_pagination_infinite_stop: 0,
            server_reply_html_data: ""
        },
        init: function() {
            jQuery(".td-ajax-loop-infinite").each(function() {
                var a = new tdInfiniteLoader.item;
                a.jqueryObj = jQuery(this);
                a.uid = "tdAjaxLoop";
                a.isVisibleCallback = function() {
                    0 !== tdAjaxLoop.loopState.ajax_pagination_infinite_stop && tdAjaxLoop.loopState.currentPage >= tdAjaxLoop.loopState.ajax_pagination_infinite_stop && tdAjaxLoop.loopState.currentPage +
                        1 < tdAjaxLoop.loopState.max_num_pages ? jQuery(".td-load-more-infinite-wrap").css("display", "block").css("visibility", "visible") : tdAjaxLoop.infiniteNextPage(!1)
                };
                tdInfiniteLoader.addItem(a)
            });
            jQuery(".td-load-more-infinite-wrap").click(function(a) {
                a.preventDefault();
                jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden");
                tdAjaxLoop.infiniteNextPage(!0)
            })
        },
        infiniteNextPage: function(a) {
            tdAjaxLoop.loopState.currentPage++;
            tdAjaxLoop.loopState.server_reply_html_data = "";
            tdAjaxLoop.loopState.currentPage >
                tdAjaxLoop.loopState.max_num_pages || (jQuery(".td-ss-main-content").append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'), tdLoadingBox.init(tds_theme_color_site_wide, 45), setTimeout(function() {
                    jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
                }, 50), jQuery.ajax({
                    type: "POST",
                    url: td_ajax_url,
                    cache: !0,
                    data: {
                        action: "td_ajax_loop",
                        loopState: tdAjaxLoop.loopState
                    },
                    success: function(b, c, d) {
                        tdAjaxLoop._processAjaxRequest(b, a)
                    },
                    error: function(a, c, d) {}
                }))
        },
        _processAjaxRequest: function(a, b) {
            jQuery(".td-loader-gif").remove();
            tdLoadingBox.stop();
            var c = jQuery.parseJSON(a);
            "" === c.server_reply_html_data ? jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden") : (jQuery(".td-ajax-loop-infinite").before(c.server_reply_html_data), parseInt(c.currentPage) >= parseInt(c.max_num_pages) ? jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden") : !0 === b && jQuery(".td-load-more-infinite-wrap").css("visibility", "visible"), setTimeout(function() {
                tdAnimationStack.check_for_new_items(".td-main-content .td-animation-stack",
                    tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0)
            }, 200), !0 !== b && (setTimeout(function() {
                tdInfiniteLoader.computeTopDistances();
                tdInfiniteLoader.enable_is_visible_callback("tdAjaxLoop")
            }, 500), setTimeout(function() {
                tdInfiniteLoader.computeTopDistances()
            }, 1E3), setTimeout(function() {
                tdInfiniteLoader.computeTopDistances()
            }, 1500)))
        }
    }
})();
/**
 * Created by ra on 9/30/2015.
 */

/*
 tdWeather.js
 v1.0
 */
/* global jQuery:false */
/* global tdDetect:false */
/* global tdUtil:false */
/* global alert:false */
/* global tdLocalCache:false */




var tdWeather = {};

( function(){
    "use strict";

    tdWeather = {

        // used to translate the OWM code to icon
        _icons: {
            // day
            '01d' : 'clear-sky-d',
            '02d' : 'few-clouds-d',
            '03d' : 'scattered-clouds-d',
            '04d' : 'broken-clouds-d',
            '09d' : 'shower-rain-d',   // ploaie hardcore
            '10d' : 'rain-d',          // ploaie light
            '11d' : 'thunderstorm-d',
            '13d' : 'snow-d',
            '50d' : 'mist-d',

            //night:
            '01n' : 'clear-sky-n',
            '02n' : 'few-clouds-n',
            '03n' : 'scattered-clouds-n',
            '04n' : 'broken-clouds-n',
            '09n' : 'shower-rain-n',   // ploaie hardcore
            '10n' : 'rain-n',          // ploaie light
            '11n' : 'thunderstorm-n',
            '13n' : 'snow-n',
            '50n' : 'mist-n'
        },

        _currentRequestInProgress: false, // prevent multiple parallel requests
        _currentItem: '',  // current weather object, it is set on click and after we modify it, it will be displayed

        // latitude and longitude position, used in callback hell
        _currentLatitude: 0,
        _currentLongitude: 0,
        _currentPositionCacheKey: '',
        _currentLocationCacheKey: '',

        //location
        _currentLocation: '',

        // all the weather items
        items: [],  /** an item is json encoded from this in PHP: @see td_weather::$weather_data */

        // location set filed open
        _is_location_open: false,



        /**
         * Init the class, we hook the click event
         */
        init: function () {

            // weather location button click
            jQuery('.td-icons-location').click(function() {
                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }
                tdWeather._currentRequestInProgress = true;

                // get the block id
                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));

                // get the position + callback
                var timeoutVal = 10 * 1000 * 1000;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        tdWeather._updateLocationCallback,
                        tdWeather._displayLocationApiError,
                        {enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 600000});
                }

                tdWeather._currentRequestInProgress = false;

            });

            jQuery('.td-weather-now').click(function(){
                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }
                tdWeather._currentRequestInProgress = true;

                // get the block id
                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));

                if (tdWeather._currentItem.current_unit === 1) {
                    tdWeather._currentItem.current_unit = 0;
                } else {
                    tdWeather._currentItem.current_unit = 1;
                }
                tdWeather._renderCurrentItem();
            });

            /**
             *  set manual location
             *  */

            jQuery('.td-manual-location-form').submit( function(event){
                event.preventDefault();

                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }

                tdWeather._currentRequestInProgress = true;

                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));
                //console.debug(this);

                tdWeather._currentLocation = jQuery('input#' + jQuery(this).data('block-uid')).val();

                tdWeather._updateLocationCallback2(tdWeather._currentLocation);

                tdWeather._currentRequestInProgress = false;
                tdWeather._hide_manual_location_form();
            });


            jQuery(document).click(function(ev) {

                if ( tdWeather._is_location_open === true
                    && jQuery(ev.target).hasClass('td-location-set-input') !== true
                    && jQuery(ev.target).hasClass('td-location-set-button') !== true ) {
                    tdWeather._hide_manual_location_form();
                }

            });
        },


        /**
         * adds a new weather item
         * item.block_uid is REQUIERED, based on that id, we delete the item from the array *as of 27.4.2016 the id is not used
         * @param item object - an item is json encoded from this in PHP: @see td_weather::$weather_data
         */
        addItem: function (item) {
            tdWeather.items.push(item);
        },

        ///
        // For now it's not needed because td_weater.php does not add js if it detects td-composer
        // **
        // * Deletes an item base on blockUid.
        // * Make sure that you add block_uid to items that you expect to be deleted
        // * @param blockUid
        // */
        //deleteItem: function(blockUid) {
        //    for (var cnt = 0; cnt < tdWeather.items.length; cnt++) {
        //        if (tdWeather.items[cnt].block_uid === blockUid) {
        //            tdWeather.items.splice(cnt, 1); // remove the item from the "array"
        //            return true;
        //        }
        //    }
        //    return false;
        //},


        /**
         * 1. LOCATION api - position callback
         * @param position
         * @private
         */
        _updateLocationCallback: function(position) {
            tdWeather._currentLatitude = position.coords.latitude;
            tdWeather._currentLongitude = position.coords.longitude;
            tdWeather._currentPositionCacheKey = position.coords.latitude + '_' + position.coords.longitude; //  update the cache key for current position

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentPositionCacheKey + '_today')) {
                tdWeather._owmGetTodayDataCallback(tdLocalCache.get(tdWeather._currentPositionCacheKey + '_today'));
            } else {
                var weather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + tdWeather._currentLatitude + '&lon=' + tdWeather._currentLongitude + '&units=metric&lang=' + tdWeather._currentItem.api_language + '&appid=' + tdWeather._currentItem.api_key;
                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetTodayDataCallback,
                    cache: true
                });
            }

            //alert(position.coords.latitude + ' ' + position.coords.longitude);

        },


        /**
         * 2. AJAX callback for today forecast, this also makes a call to ajax 5 days forecast
         * @param data - OWM api response - NOTICE: We don't check anything if it's correct :)
         * @private
         */
        _owmGetTodayDataCallback: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentPositionCacheKey + '_today', data);


            // prepare the tdWeather._currentItem object, notice that tdWeather._currentItem is a reference to an object stored in tdWeather.items
            tdWeather._currentItem.api_location = data.name;
            tdWeather._currentItem.today_clouds = tdUtil.round(data.clouds.all);
            tdWeather._currentItem.today_humidity = tdUtil.round(data.main.humidity);
            tdWeather._currentItem.today_icon = tdWeather._icons[data.weather[0].icon];
            tdWeather._currentItem.today_icon_text = data.weather[0].description;
            tdWeather._currentItem.today_max[0] = tdUtil.round(data.main.temp_max, 1);                                  //celsius
            tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(data.main.temp_max);                   //imperial
            tdWeather._currentItem.today_min[0] = tdUtil.round(data.main.temp_min, 1);                                  //celsius
            tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(data.main.temp_min);                   //imperial
            tdWeather._currentItem.today_temp[0] = tdUtil.round(data.main.temp, 1);                                     //celsius
            tdWeather._currentItem.today_temp[1] = tdWeather._celsiusToFahrenheit(data.main.temp);                      //imperial
            tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(data.wind.speed, 1);                              //metric
            tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(data.wind.speed);                         //imperial

            //console.log(tdWeather._currentItem);
            //console.log(data);

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentPositionCacheKey)) {
                tdWeather._owmGetFiveDaysData(tdLocalCache.get(tdWeather._currentPositionCacheKey));
            } else {
                var weather = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + tdWeather._currentLatitude + '&lon=' + tdWeather._currentLongitude + '&units=metric&lang=' + tdWeather._currentItem.api_language + '&appid=' + tdWeather._currentItem.api_key;
                //console.log('forecast: ' + weather);
                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetFiveDaysData,
                    cache:true
                });
            }

        },


        /**
         * 3. AJAX callback for the 5 days forecast
         * @param data - OWM api response NOTICE: We don't check anything if it's correct :)
         * @private
         */
        _owmGetFiveDaysData: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentPositionCacheKey, data);

            // process the data
            for (var item_index = 0; item_index < tdWeather._currentItem.forecast.length ; item_index++) {
                //limit forecast to 5 days - api brings 35 x 3 hour intervals and at the end of the day you get 6 days forecast
                if (item_index === 5) {
                    break;
                }
                var current_forecast = tdWeather._currentItem.forecast[item_index];
                current_forecast.day_temp[0] = tdUtil.round(data.list[current_forecast.owm_day_index].main.temp_max);   //celsius
                current_forecast.day_temp[1] = tdWeather._celsiusToFahrenheit(current_forecast.day_temp[0]);            //imperial
            }
            tdWeather._renderCurrentItem();
        },


        /**
         * 4. Here we render the global tdWeather._currentItem object to the screen. The object already contains all the needed information
         * about where and what we have to render.
         * @private
         */
        _renderCurrentItem: function () {

            //console.log('.' + tdWeather._currentItem.block_uid + ' .td-weather-city');

            var blockInner = jQuery('#' + tdWeather._currentItem.block_uid);

            var currentLatitude = tdWeather._currentLatitude;
            var currentLongitude = tdWeather._currentLongitude;
            var currentLocation = tdWeather._currentLocation;

            // city
            blockInner.find('.td-weather-city').html(tdWeather._currentItem.api_location);

            if (currentLocation === '' && ( currentLatitude === 0 && currentLongitude === 0)){
                blockInner.find('.td-weather-city').html(tdWeather._currentItem.location);
            }

            // conditions
            blockInner.find('.td-weather-condition').html(tdWeather._currentItem.today_icon_text);

            // animation
            // we remove all the classes! including the animation ones
            var icon_el = blockInner.find('.td-w-today-icon');
            icon_el.removeClass();
            icon_el.addClass('td-w-today-icon');
            icon_el.addClass(tdWeather._currentItem.today_icon);

            var currentTempUnit = tdWeather._currentItem.current_unit;
            var currentSpeedLabel = 'kmh';
            var currentTempLabel = 'C';

            // preapare the labels
            if (currentTempUnit === 1) {
                currentSpeedLabel = 'mph';
                currentTempLabel = 'F';
            }


            // main temp
            blockInner.find('.td-big-degrees').html(tdWeather._currentItem.today_temp[currentTempUnit]);

            // main temp units
            blockInner.find('.td-weather-unit').html(currentTempLabel);


            // high
            blockInner.find('.td-w-high-temp').html(tdWeather._currentItem.today_max[currentTempUnit]);

            // low
            blockInner.find('.td-w-low-temp').html(tdWeather._currentItem.today_min[currentTempUnit]);

            // humidity
            blockInner.find('.td-w-today-humidity').html(tdWeather._currentItem.today_humidity + '%');

            // wind speed
            blockInner.find('.td-w-today-wind-speed').html(tdWeather._currentItem.today_wind_speed[currentTempUnit] + currentSpeedLabel);

            // clouds
            blockInner.find('.td-w-today-clouds').html(tdWeather._currentItem.today_clouds + '%');

            // full list of items! - just the temperature
            for (var item_index = 0; item_index < tdWeather._currentItem.forecast.length ; item_index++) {
                blockInner.find('.td-day-' + item_index).html(tdWeather._currentItem.forecast[item_index].day_name);
                blockInner.find('.td-degrees-' + item_index).html(tdWeather._currentItem.forecast[item_index].day_temp[currentTempUnit]);
            }


            tdWeather._currentRequestInProgress = false; // allow other requests to take place
        },


        /**
         * gets a weather item based on block_uid
         * @param block_uid
         * @returns {*}
         * @private
         */
        _getItemByBlockID: function (block_uid) {
            for (var item_index = 0; item_index < tdWeather.items.length; item_index++) {
                if (tdWeather.items[item_index].block_uid === block_uid) {
                    return tdWeather.items[item_index];
                }
            }
            return false;
        },


        /**
         * Displays a friendly error when the location api fails
         * @param error - a location api error object?
         * @private
         */
        _displayLocationApiError: function (error) {

            if (error.code === 1) {
                if (tdDetect.isAndroid) {

                    //show manual location form
                    tdWeather._show_manual_location_form();

                    //alert('Please enable your gps and reload the page.');
                }

                else if (tdDetect.isIos) {
                    alert("Please enable Location services for Safari Websites and reload the page. \n ---------------------- \nSettings > Privacy > Location Services");
                    return;
                }

                //alert("Permission denied. Enable GPS or Location services and reload the page");
                //show manual location form
                tdWeather._show_manual_location_form();
            }

            //show manual location form
            tdWeather._show_manual_location_form();
        },


        /**
         * C to F converter. It rounds on big F numbers because we don't have space on the UI.
         * @param celsiusDegrees
         * @returns {*}
         * @private
         */
        _celsiusToFahrenheit: function (celsiusDegrees) {
            var f_degrees = celsiusDegrees * 9 / 5 + 32;

            var rounded_val = tdUtil.round(f_degrees, 1);
            if (rounded_val > 99.9) {  // if the value is bigger than 100, round it
                return tdUtil.round(f_degrees);
            }

            return rounded_val;
        },

        /**
         * converter for KMH -> MPH  ex: 2.3
         * @param $kmph
         * @returns {*}
         * @private
         */
        _kmphToMph: function ($kmph) {
            return tdUtil.round($kmph * 0.621371192, 1);
        },

        /**
         * *************************************************************************************************************
         *      set manual location for weather widget
         * *************************************************************************************************************
         */

        /**
         * shows the manual location form
         */

        _show_manual_location_form: function (){

            tdWeather._currentItem = tdWeather._getItemByBlockID(tdWeather._currentItem.block_uid);

            jQuery('#' + tdWeather._currentItem.block_uid).find('.td-weather-set-location').addClass( 'td-show-location' );
            jQuery('.td-manual-location-form input').focus();

            tdWeather._is_location_open = true;

        },

        /**
         * hides the manual location form
         */

        _hide_manual_location_form: function (){

            jQuery('#' + tdWeather._currentItem.block_uid).find('.td-weather-set-location').removeClass('td-show-location');

            tdWeather._is_location_open = false;
        },

        /**
         *  Location API - position callback 2 - used on chrome or other browsers that do not allow current position retrieving
         * @param location
         */

        _updateLocationCallback2: function(location){

            tdWeather._currentLocationCacheKey = location;

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentLocationCacheKey + '_today')) {
                tdWeather._owmGetTodayDataCallback2(tdLocalCache.get(tdWeather._currentLocationCacheKey + '_today'));

            } else {

                //console.log('city weather api request!');
                var weather = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(location) + '&lang=' + tdWeather._currentItem.api_language + '&units=metric&appid=' + tdWeather._currentItem.api_key;

                //console.log('city api request url: ' + weather);

                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetTodayDataCallback2,
                    cache: true
                });
            }
        },


        /**
         * AJAX callback for today forecast on manual city location api request
         * @param data - OWM api response
         *
         */

        _owmGetTodayDataCallback2: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentLocationCacheKey + '_today', data);


            // prepare the tdWeather._currentItem object, notice that tdWeather._currentItem is a reference to an object stored in tdWeather.items
            tdWeather._currentItem.api_location = data.name;
            tdWeather._currentItem.today_clouds = tdUtil.round(data.clouds.all);
            tdWeather._currentItem.today_humidity = tdUtil.round(data.main.humidity);
            tdWeather._currentItem.today_icon = tdWeather._icons[data.weather[0].icon];
            tdWeather._currentItem.today_icon_text = data.weather[0].description;
            tdWeather._currentItem.today_max[0] = tdUtil.round(data.main.temp_max, 1);                                  //celsius
            tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(data.main.temp_max);                   //imperial
            tdWeather._currentItem.today_min[0] = tdUtil.round(data.main.temp_min, 1);                                  //celsius
            tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(data.main.temp_min);                   //imperial
            tdWeather._currentItem.today_temp[0] = tdUtil.round(data.main.temp, 1);                                     //celsius
            tdWeather._currentItem.today_temp[1] = tdWeather._celsiusToFahrenheit(data.main.temp);                      //imperial
            tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(data.wind.speed, 1);                              //metric
            tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(data.wind.speed);                         //imperial


            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentLocationCacheKey)) {
                tdWeather._owmGetFiveDaysData2(tdLocalCache.get(tdWeather._currentLocationCacheKey));

            } else {

                //console.log('api forecast request!');

                var weather = 'https://api.openweathermap.org/data/2.5/forecast?q=' + tdWeather._currentItem.api_location + '&lang=' + tdWeather._currentItem.api_language + '&units=metric&cnt=35&appid=' + tdWeather._currentItem.api_key;

                //console.log('city forecast api request url: ' + weather);

                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetFiveDaysData2,
                    cache:true
                });
            }

        },


        /**
         * AJAX callback for 5 days forecast on manual city location api request
         * @param data - OWM api response
         *
         */

        _owmGetFiveDaysData2: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentLocationCacheKey, data);

            var newForecast = {},
                newForecastIsEmpty = true,
                ObjProto = Object.prototype,
                hasOwnProperty = ObjProto.hasOwnProperty; //safe reference to the hasOwnProperty function, in case it's been overridden accidentally

            for (var list_item_index = 0; list_item_index <  data.list.length ; list_item_index++) {
                if (hasOwnProperty.call(data.list[list_item_index], 'dt')) {

                    var timestamp = data.list[list_item_index].dt,
                        currentDay = td_date_i18n('Ymd', timestamp);

                    if (hasOwnProperty.call(newForecast, currentDay) === false) {
                        newForecast[currentDay] = {
                            timestamp: timestamp,
                            day_name: td_date_i18n('D', timestamp),
                            day_temp: [
                                tdUtil.round(data.list[list_item_index].main.temp_max),
                                tdUtil.round(tdWeather._celsiusToFahrenheit(data.list[list_item_index].main.temp_max))
                            ],
                            owm_day_index: list_item_index
                        }
                    } else {
                        if (newForecast[currentDay].day_temp[0] < tdUtil.round(data.list[list_item_index].main.temp_max)) {

                            newForecast[currentDay].day_temp[0] = tdUtil.round(data.list[list_item_index].main.temp_max);
                            newForecast[currentDay].day_temp[1] = tdUtil.round(tdWeather._celsiusToFahrenheit(data.list[list_item_index].main.temp_max));
                        }
                    }

                    newForecastIsEmpty = false;
                }
            }


            if (newForecastIsEmpty === false) {
                tdWeather._currentItem.forecast = [];
                for (var key in newForecast) {
                    //limit forecast to 5 days - api brings 35 x 3 hour intervals and at the end of the day you get 6 days forecast
                    if (tdWeather._currentItem.forecast.length === 5) {
                        break;
                    }
                    tdWeather._currentItem.forecast[tdWeather._currentItem.forecast.length] = newForecast[key];
                }
            }

            tdWeather._renderCurrentItem();
        }

    };  // end tdWeather
})();

tdWeather.init(); //init the class
jQuery(window).load(function() {
    jQuery("body").addClass("td-js-loaded");
    window.tdAnimationStack.init()
});
jQuery(window).ready(function() {
    jQuery(".td_smart_list_1 a, .td_smart_list_3 a").click(function(a) {
        if (a.target === a.currentTarget) {
            var b = jQuery(this).attr("target"),
                c = jQuery(this)[0].hasAttribute("download"),
                d = jQuery(this).attr("href");
            c || ("_blank" == b ? (a.preventDefault(), window.open(d)) : window.location.href !== d && tdUtil.isValidUrl(d) && (window.location.href = d))
        }
    });
    jQuery(".td_block_trending_now").each(function() {
        var a = new tdTrendingNow.item,
            b = jQuery(this).find(".td-trending-now-wrapper").data("start"),
            c = 0;
        a.blockUid = jQuery(this).data("td-block-uid");
        "manual" !== b && (a.trendingNowAutostart = b);
        jQuery("#" + a.blockUid + " .td-trending-now-post").each(function() {
            a.trendingNowPosts[c] = jQuery(this);
            c++
        });
        "undefined" === typeof a.trendingNowPosts || 1 > a.trendingNowPosts.length || tdTrendingNow.addItem(a)
    });
    jQuery(".td-trending-now-nav-left").on("click", function(a) {
        a.preventDefault();
        a = jQuery(this).data("block-id");
        tdTrendingNow.itemPrev(a)
    });
    jQuery(".td-trending-now-nav-right").on("click", function(a) {
        a.preventDefault();
        a = jQuery(this).data("block-id");
        tdTrendingNow.itemNext(a)
    })
});
var tdAnimationSprite = {};
(function() {
    tdAnimationSprite = {
        items: [],
        isInRequestAnimation: !1,
        item: function() {
            this.blockUid = "";
            this.paused = this._isInitialized = !1;
            this.automatStart = !0;
            this.properties = [];
            this.readyToAnimate = !1;
            this.nextFrame = 1;
            this.animationSpriteClass = this.jqueryObj = this.interval = void 0;
            this._currentDirection = "right";
            this._executedLoops = 0;
            this.loops = this.reverse = this.velocity = this.frameWidth = this.frames = this._prop_background_position = void 0;
            this.animate = function() {
                this._prop_background_position = -1 * this.nextFrame *
                    this.frameWidth + "px 0";
                this.readyToAnimate = !0;
                !0 === this.reverse ? "right" === this._currentDirection ? this.nextFrame === this.frames - 1 ? (this._currentDirection = "left", this.nextFrame--) : this.nextFrame++ : "left" === this._currentDirection && (0 === this.nextFrame ? (this._currentDirection = "right", this.nextFrame++, this._executedLoops++, 0 !== this.loops && this._executedLoops === this.loops && clearInterval(this.interval)) : this.nextFrame--) : this.nextFrame === this.frames - 1 ? (this._executedLoops++, 0 !== this.loops && this._executedLoops ===
                    this.loops && clearInterval(this.interval), this.nextFrame = 0) : this.nextFrame++;
                !1 === tdAnimationSprite.isInRequestAnimation && (tdAnimationSprite.isInRequestAnimation = !0, window.requestAnimationFrame(tdAnimationSprite.animateAllItems))
            }
        },
        _initializeItem: function(a) {
            if (!0 !== a._isInitialized) {
                var b = /(td_animation_sprite\S*)/gi;
                "undefined" !== typeof a.jqueryObj.attr("class") && (b = a.jqueryObj.attr("class").match(b), null !== b && (a.offsetTop = a.jqueryObj.offset().top, a.offsetBottomToTop = a.offsetTop + a.jqueryObj.height(),
                    a.animationSpriteClass = b[b.length - 1], b = a.animationSpriteClass.split("-"), 7 === b.length && (a.frames = parseInt(b[1]), a.frameWidth = parseInt(b[2]), a.velocity = parseInt(b[3]), a.loops = parseInt(b[4]), 1 === parseInt(b[5]) ? a.reverse = !0 : a.reverse = !1, 1 === parseInt(b[6]) ? a.automatStart = !0 : a.automatStart = !1, a._isInitialized = !0)))
            }
        },
        addItem: function(a) {
            a.constructor === tdAnimationSprite.item && (tdAnimationSprite.items.push(a), tdAnimationSprite._initializeItem(a), !0 === a.automatStart && tdAnimationSprite.computeItem(a))
        },
        deleteItem: function(a) {
            for (var b =
                    0; b < tdAnimationSprite.items.length; b++)
                if (tdAnimationSprite.items[b].blockUid === a) return tdAnimationSprite.items.splice(b, 1), !0;
            return !1
        },
        computeItem: function(a) {
            1 < a.frames && void 0 === a.interval && (a.interval = setInterval(function() {
                !1 === a.paused && a.animate()
            }, a.velocity))
        },
        recomputeItem: function(a) {
            clearInterval(a.interval);
            a.interval = void 0;
            a._isInitialized = !1;
            tdAnimationSprite._initializeItem(a);
            tdAnimationSprite.computeItem(a)
        },
        stopItem: function(a) {
            a.constructor === tdAnimationSprite.item && !0 === a._isInitialized &&
                (clearInterval(a.interval), a.interval = void 0)
        },
        startItem: function(a) {
            a.constructor === tdAnimationSprite.item && !0 === a._isInitialized && (a.paused = !1)
        },
        pauseItem: function(a) {
            a.constructor === tdAnimationSprite.item && !0 === a._isInitialized && (a.paused = !0)
        },
        computeAllItems: function() {
            for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.computeItem(tdAnimationSprite.items[a])
        },
        recomputeAllItems: function() {
            for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.recomputeItem(tdAnimationSprite.items[a])
        },
        stopAllItems: function() {
            for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.stopItem(tdAnimationSprite.items[a])
        },
        pauseAllItems: function() {
            for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.pauseItem(tdAnimationSprite.items[a])
        },
        startAllItems: function() {
            for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.startItem(tdAnimationSprite.items[a])
        },
        animateAllItems: function() {
            for (var a, b = 0; b < tdAnimationSprite.items.length; b++) a = tdAnimationSprite.items[b], !0 ===
                a.readyToAnimate && (a.jqueryObj.css("background-position", a._prop_background_position), a.readyToAnimate = !1);
            tdAnimationSprite.isInRequestAnimation = !1
        }
    };
    for (var a = jQuery('span[class^="td_animation_sprite"]'), b = 0; b < a.length; b++) {
        var c = new tdAnimationSprite.item;
        c.jqueryObj = jQuery(a[b]);
        c.blockUid = c.jqueryObj.data("td-block-uid");
        tdAnimationSprite.addItem(c)
    }
})();

function td_date_i18n(a, b) {
    var c, d = /\\?(.?)/gi,
        e = function(a, b) {
            return l[a] ? l[a]() : b
        },
        f = function(a, b) {
            for (a = String(a); a.length < b;) a = "0" + a;
            return a
        };
    var l = {
        d: function() {
            return f(l.j(), 2)
        },
        D: function() {
            return tdDateNamesI18n.day_names_short[l.w()]
        },
        j: function() {
            return c.getDate()
        },
        l: function() {
            return tdDateNamesI18n.day_names[l.w()]
        },
        N: function() {
            return l.w() || 7
        },
        S: function() {
            var a = l.j(),
                b = a % 10;
            3 >= b && 1 == parseInt(a % 100 / 10, 10) && (b = 0);
            return ["st", "nd", "rd"][b - 1] || "th"
        },
        w: function() {
            return c.getDay()
        },
        z: function() {
            var a =
                new Date(l.Y(), l.n() - 1, l.j()),
                b = new Date(l.Y(), 0, 1);
            return Math.round((a - b) / 864E5)
        },
        W: function() {
            var a = new Date(l.Y(), l.n() - 1, l.j() - l.N() + 3),
                b = new Date(a.getFullYear(), 0, 4);
            return f(1 + Math.round((a - b) / 864E5 / 7), 2)
        },
        F: function() {
            return tdDateNamesI18n.month_names[l.n() - 1]
        },
        m: function() {
            return f(l.n(), 2)
        },
        M: function() {
            return tdDateNamesI18n.month_names_short[l.n() - 1]
        },
        n: function() {
            return c.getMonth() + 1
        },
        t: function() {
            return (new Date(l.Y(), l.n(), 0)).getDate()
        },
        L: function() {
            var a = l.Y();
            return 0 === a % 4 & 0 !==
                a % 100 | 0 === a % 400
        },
        o: function() {
            var a = l.n(),
                b = l.W();
            return l.Y() + (12 === a && 9 > b ? 1 : 1 === a && 9 < b ? -1 : 0)
        },
        Y: function() {
            return c.getFullYear()
        },
        y: function() {
            return l.Y().toString().slice(-2)
        },
        a: function() {
            return 11 < c.getHours() ? "pm" : "am"
        },
        A: function() {
            return l.a().toUpperCase()
        },
        B: function() {
            var a = 3600 * c.getUTCHours(),
                b = 60 * c.getUTCMinutes(),
                d = c.getUTCSeconds();
            return f(Math.floor((a + b + d + 3600) / 86.4) % 1E3, 3)
        },
        g: function() {
            return l.G() % 12 || 12
        },
        G: function() {
            return c.getHours()
        },
        h: function() {
            return f(l.g(), 2)
        },
        H: function() {
            return f(l.G(),
                2)
        },
        i: function() {
            return f(c.getMinutes(), 2)
        },
        s: function() {
            return f(c.getSeconds(), 2)
        },
        u: function() {
            return f(1E3 * c.getMilliseconds(), 6)
        },
        e: function() {
            console.log("Not supported (see source code of date() for timezone on how to add support)")
        },
        I: function() {
            var a = new Date(l.Y(), 0),
                b = Date.UTC(l.Y(), 0),
                c = new Date(l.Y(), 6),
                d = Date.UTC(l.Y(), 6);
            return a - b !== c - d ? 1 : 0
        },
        O: function() {
            var a = c.getTimezoneOffset(),
                b = Math.abs(a);
            return (0 < a ? "-" : "+") + f(100 * Math.floor(b / 60) + b % 60, 4)
        },
        P: function() {
            var a = l.O();
            return a.substr(0,
                3) + ":" + a.substr(3, 2)
        },
        T: function() {
            return "UTC"
        },
        Z: function() {
            return 60 * -c.getTimezoneOffset()
        },
        c: function() {
            return "Y-m-d\\TH:i:sP".replace(d, e)
        },
        r: function() {
            return "D, d M Y H:i:s O".replace(d, e)
        },
        U: function() {
            return c / 1E3 | 0
        }
    };
    this.date = function(a, b) {
        c = void 0 === b ? new Date : b instanceof Date ? new Date(b) : new Date(1E3 * b);
        return a.replace(d, e)
    };
    return this.date(a, b)
};