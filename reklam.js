if (window.pbjs && window.pbjs.libLoaded) try {
    window.pbjs.getConfig("debug") && console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")
} catch (e) {} else(function() {
    ! function() {
        var e, n = {
                35706: function(e, n, t) {
                    t.d(n, {
                        Pd: function() {
                            return s
                        },
                        Th: function() {
                            return c
                        },
                        _U: function() {
                            return d
                        }
                    });
                    var r = t(55730),
                        i = t(64358),
                        o = t(20265),
                        a = t(34614),
                        u = "outstream";

                    function c(e) {
                        var n = this,
                            t = e.url,
                            o = e.config,
                            a = e.id,
                            c = e.callback,
                            s = e.loaded,
                            d = e.adUnitCode,
                            l = e.renderNow;
                        this.url = t, this.config = o, this.handlers = {}, this.id = a, this.loaded = s, this.cmd = [], this.push = function(e) {
                            "function" == typeof e ? n.loaded ? e.call() : n.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function")
                        }, this.callback = c || function() {
                            n.loaded = !0, n.process()
                        }, this.render = function() {
                            var e = this,
                                n = arguments,
                                o = function() {
                                    e._render ? e._render.apply(e, n) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer")
                                };
                            f(d) ? ((0, i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)), o()) : l ? o() : (this.cmd.unshift(o), (0, r.B)(t, u, this.callback, this.documentContext))
                        }.bind(this)
                    }

                    function s(e) {
                        return !(!e || !e.url)
                    }

                    function d(e, n, t) {
                        var r = null;
                        e.config && e.config.documentResolver && (r = e.config.documentResolver(n, document, t)), r || (r = document), e.documentContext = r, e.render(n, e.documentContext)
                    }

                    function f(e) {
                        var n = pbjs.adUnits,
                            t = (0, a.sE)(n, (function(n) {
                                return n.code === e
                            }));
                        if (!t) return !1;
                        var r = (0, o.Z)(t, "renderer"),
                            i = !!(r && r.url && r.render),
                            u = (0, o.Z)(t, "mediaTypes.video.renderer"),
                            c = !!(u && u.url && u.render);
                        return !!(i && !0 !== r.backupOnly || c && !0 !== u.backupOnly)
                    }
                    c.install = function(e) {
                        return new c({
                            url: e.url,
                            config: e.config,
                            id: e.id,
                            callback: e.callback,
                            loaded: e.loaded,
                            adUnitCode: e.adUnitCode,
                            renderNow: e.renderNow
                        })
                    }, c.prototype.getConfig = function() {
                        return this.config
                    }, c.prototype.setRender = function(e) {
                        this._render = e
                    }, c.prototype.setEventHandlers = function(e) {
                        this.handlers = e
                    }, c.prototype.handleVideoEvent = function(e) {
                        var n = e.id,
                            t = e.eventName;
                        "function" == typeof this.handlers[t] && this.handlers[t](), (0, i.logMessage)("Prebid Renderer event for id ".concat(n, " type ").concat(t))
                    }, c.prototype.process = function() {
                        for (; this.cmd.length > 0;) try {
                            this.cmd.shift().call()
                        } catch (e) {
                            (0, i.logError)("Error processing Renderer command: ", e)
                        }
                    }
                },
                875: function(e, n, t) {
                    t.d(n, {
                        f: function() {
                            return a
                        }
                    });
                    var r = t(20265),
                        i = {};

                    function o(e, n, t) {
                        var r = function(e, n) {
                            var t = i[e] = i[e] || {
                                bidders: {}
                            };
                            return n ? t.bidders[n] = t.bidders[n] || {} : t
                        }(e, t);
                        return r[n] = (r[n] || 0) + 1, r[n]
                    }
                    var a = {
                        incrementRequestsCounter: function(e) {
                            return o(e, "requestsCounter")
                        },
                        incrementBidderRequestsCounter: function(e, n) {
                            return o(e, "requestsCounter", n)
                        },
                        incrementBidderWinsCounter: function(e, n) {
                            return o(e, "winsCounter", n)
                        },
                        getRequestsCounter: function(e) {
                            return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0
                        },
                        getBidderRequestsCounter: function(e, n) {
                            return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".requestsCounter")) || 0
                        },
                        getBidderWinsCounter: function(e, n) {
                            return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".winsCounter")) || 0
                        }
                    }
                },
                48525: function(e, n, t) {
                    function r(e) {
                        var n = e;
                        return {
                            callBids: function() {},
                            setBidderCode: function(e) {
                                n = e
                            },
                            getBidderCode: function() {
                                return n
                            }
                        }
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                9528: function(e, n, t) {
                    t.d(n, {
                        qJ: function() {
                            return W
                        },
                        VP: function() {
                            return ee
                        },
                        ZP: function() {
                            return oe
                        },
                        JO: function() {
                            return Q
                        },
                        rp: function() {
                            return X
                        },
                        uV: function() {
                            return te
                        },
                        Ct: function() {
                            return re
                        },
                        nX: function() {
                            return $
                        }
                    });
                    var r = t(93324),
                        i = t(4942),
                        o = t(64358),
                        a = t(20265),
                        u = t(74247),
                        c = t(70059),
                        s = t(14699),
                        d = t(48928),
                        f = t(3193),
                        l = t(92797),
                        g = t(34614),
                        p = t(875),
                        v = t(25102),
                        h = t(60136),
                        m = t(82963),
                        b = t(61120),
                        y = t(15671),
                        E = t(43144),
                        w = t(18916),
                        C = t(42793),
                        A = t(68792);

                    function T(e) {
                        var n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var t, r = (0, b.Z)(e);
                            if (n) {
                                var i = (0, b.Z)(this).constructor;
                                t = Reflect.construct(r, arguments, i)
                            } else t = r.apply(this, arguments);
                            return (0, m.Z)(this, t)
                        }
                    }

                    function I(e, n, t) {
                        O(e, n), n.set(e, t)
                    }

                    function O(e, n) {
                        if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }

                    function S(e, n, t) {
                        if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return t
                    }
                    var B = new WeakMap,
                        k = new WeakMap,
                        j = new WeakMap,
                        U = new WeakMap,
                        _ = new WeakSet,
                        R = function() {
                            function e() {
                                var n, t;
                                (0, y.Z)(this, e), O(n = this, t = _), t.add(n), I(this, B, {
                                    writable: !0,
                                    value: void 0
                                }), I(this, k, {
                                    writable: !0,
                                    value: void 0
                                }), I(this, j, {
                                    writable: !0,
                                    value: void 0
                                }), I(this, U, {
                                    writable: !0,
                                    value: void 0
                                }), (0, i.Z)(this, "generatedTime", void 0), this.reset()
                            }
                            return (0, E.Z)(e, [{
                                key: "reset",
                                value: function() {
                                    (0, C.Z)(this, j, (0, A.P)()), (0, C.Z)(this, B, !1), (0, C.Z)(this, k, null), (0, C.Z)(this, U, !1), this.generatedTime = null
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    (0, C.Z)(this, B, !0)
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return (0, w.Z)(this, B)
                                }
                            }, {
                                key: "ready",
                                get: function() {
                                    return (0, w.Z)(this, U)
                                }
                            }, {
                                key: "promise",
                                get: function() {
                                    return (0, w.Z)(this, U) ? A.Z.resolve((0, w.Z)(this, k)) : ((0, w.Z)(this, B) || S(this, _, P).call(this, null), (0, w.Z)(this, j).promise)
                                }
                            }, {
                                key: "setConsentData",
                                value: function(e) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.timestamp)();
                                    this.generatedTime = n, S(this, _, P).call(this, e)
                                }
                            }, {
                                key: "getConsentData",
                                value: function() {
                                    return (0, w.Z)(this, k)
                                }
                            }]), e
                        }();

                    function P(e) {
                        (0, C.Z)(this, U, !0), (0, C.Z)(this, k, e), (0, w.Z)(this, j).resolve(e)
                    }
                    var q = function(e) {
                            (0, h.Z)(t, e);
                            var n = T(t);

                            function t() {
                                return (0, y.Z)(this, t), n.apply(this, arguments)
                            }
                            return (0, E.Z)(t, [{
                                key: "getConsentMeta",
                                value: function() {
                                    var e = this.getConsentData();
                                    if (e && this.generatedTime) return {
                                        usp: e,
                                        generatedAt: this.generatedTime
                                    }
                                }
                            }]), t
                        }(R),
                        D = function(e) {
                            (0, h.Z)(t, e);
                            var n = T(t);

                            function t() {
                                return (0, y.Z)(this, t), n.apply(this, arguments)
                            }
                            return (0, E.Z)(t, [{
                                key: "getConsentMeta",
                                value: function() {
                                    var e = this.getConsentData();
                                    if (e && e.vendorData && this.generatedTime) return {
                                        gdprApplies: e.gdprApplies,
                                        consentStringSize: (0, o.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                                        generatedAt: this.generatedTime,
                                        apiVersion: e.apiVersion
                                    }
                                }
                            }]), t
                        }(R),
                        x = t(52021),
                        Z = t(5644),
                        N = t(99128);

                    function M(e, n) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n && (r = r.filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            }))), t.push.apply(t, r)
                        }
                        return t
                    }

                    function F(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? M(Object(t), !0).forEach((function(n) {
                                (0, i.Z)(e, n, t[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }))
                        }
                        return e
                    }
                    var W = {
                            CLIENT: "client",
                            SERVER: "server"
                        },
                        z = {},
                        K = z.bidderRegistry = {},
                        L = z.aliasRegistry = {},
                        H = [];
                    f.vc.getConfig("s2sConfig", (function(e) {
                        e && e.s2sConfig && (H = (0, o.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
                    }));
                    var G = {};
                    var V = (0, l.z3)("sync", (function(e) {
                        var n = e.bidderCode,
                            t = e.auctionId,
                            r = e.bidderRequestId,
                            i = e.adUnits,
                            u = e.src,
                            c = e.metrics;
                        return i.reduce((function(e, i) {
                            return e.push(i.bids.filter((function(e) {
                                return e.bidder === n
                            })).reduce((function(e, n) {
                                var s = null == (n = Object.assign({}, n, (0, o.getDefinedParams)(i, ["nativeParams", "nativeOrtbRequest", "ortb2Imp", "mediaType", "renderer"]))).mediaTypes ? i.mediaTypes : n.mediaTypes;
                                return (0, o.isValidMediaTypes)(s) ? n = Object.assign({}, n, {
                                    mediaTypes: s
                                }) : (0, o.logError)("mediaTypes is not correctly configured for adunit ".concat(i.code)), e.push(Object.assign({}, n, {
                                    adUnitCode: i.code,
                                    transactionId: i.transactionId,
                                    sizes: (0, a.Z)(s, "banner.sizes") || (0, a.Z)(s, "video.playerSize") || [],
                                    bidId: n.bid_id || (0, o.getUniqueIdentifierStr)(),
                                    bidderRequestId: r,
                                    auctionId: t,
                                    src: u,
                                    metrics: c,
                                    bidRequestsCount: p.f.getRequestsCounter(i.code),
                                    bidderRequestsCount: p.f.getBidderRequestsCounter(i.code, n.bidder),
                                    bidderWinsCount: p.f.getBidderWinsCounter(i.code, n.bidder)
                                })), e
                            }), [])), e
                        }), []).reduce(o.flatten, []).filter((function(e) {
                            return "" !== e
                        }))
                    }), "getBids");
                    var Q = (0, l.z3)("sync", (function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.getS2SBidders,
                            i = void 0 === r ? te : r;
                        if (null == n) return e;
                        var o = i(n);
                        return e.filter((function(e) {
                            return o.has(e.bidder)
                        }))
                    }), "filterBidsForAdUnit");

                    function J(e, n) {
                        var t = (0, o.deepClone)(e);
                        return t.forEach((function(e) {
                            e.bids = Q(e.bids, n).map((function(e) {
                                return e.bid_id = (0, o.getUniqueIdentifierStr)(), e
                            }))
                        })), t = t.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    }

                    function Y(e) {
                        var n = (0, o.deepClone)(e);
                        return n.forEach((function(e) {
                            e.bids = Q(e.bids, null)
                        })), n = n.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    }
                    var X = new D,
                        $ = new q,
                        ee = {
                            getCoppa: function() {
                                return !!f.vc.getConfig("coppa")
                            }
                        },
                        ne = (0, l.z3)("sync", (function(e, n) {
                            return (0, u.UB)(e, n)
                        }), "setupAdUnitMediaTypes");

                    function te(e) {
                        (0, o.isArray)(e) || (e = [e]);
                        var n = new Set([null]);
                        return e.filter((function(e) {
                            return e && e.enabled
                        })).flatMap((function(e) {
                            return e.bidders
                        })).forEach((function(e) {
                            return n.add(e)
                        })), n
                    }
                    var re = (0, l.z3)("sync", (function(e, n) {
                        var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = r.getS2SBidders,
                            u = void 0 === a ? te : a,
                            c = u(n);
                        return (0, o.getBidderCodes)(e).reduce((function(e, n) {
                            return e[c.has(n) ? W.SERVER : W.CLIENT].push(n), e
                        }), (t = {}, (0, i.Z)(t, W.CLIENT, []), (0, i.Z)(t, W.SERVER, []), t))
                    }), "partitionBidders");

                    function ie(e, n, t) {
                        try {
                            var r = K[e].getSpec();
                            r && r[n] && "function" == typeof r[n] && ((0, o.logInfo)("Invoking ".concat(e, ".").concat(n)), f.vc.runWithBidder(e, o.bind.call(r[n], r, t)))
                        } catch (t) {
                            (0, o.logWarn)("Error calling ".concat(n, " of ").concat(e))
                        }
                    }
                    z.makeBidRequests = (0, l.z3)("sync", (function(e, n, t, r, i) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            u = arguments.length > 6 ? arguments[6] : void 0;
                        u = (0, N.Bf)(u), x.j8(Z.FP.BEFORE_REQUEST_BIDS, e), (0, c.Fb)(e), e = ne(e, i);
                        var s = re(e, H),
                            d = s[W.CLIENT],
                            l = s[W.SERVER];
                        f.vc.getConfig("bidderSequence") === f.FD && (d = (0, o.shuffle)(d));
                        var p = (0, v.nH)(),
                            h = [],
                            m = a.global || {},
                            b = a.bidder || {};

                        function y(e) {
                            var n = Object.freeze((0, o.mergeDeep)({}, m, b[e.bidderCode]));
                            return e.ortb2 = n, e.bids.forEach((function(e) {
                                return e.ortb2 = n
                            })), e
                        }
                        H.forEach((function(r) {
                            if (r && r.enabled) {
                                var i = J(e, r),
                                    a = (0, o.generateUUID)();
                                l.forEach((function(e) {
                                    var c = (0, o.getUniqueIdentifierStr)(),
                                        s = u.fork(),
                                        d = y({
                                            bidderCode: e,
                                            auctionId: t,
                                            bidderRequestId: c,
                                            uniquePbsTid: a,
                                            bids: V({
                                                bidderCode: e,
                                                auctionId: t,
                                                bidderRequestId: c,
                                                adUnits: (0, o.deepClone)(i),
                                                src: Z.os.YZ,
                                                metrics: s
                                            }),
                                            auctionStart: n,
                                            timeout: r.timeout,
                                            src: Z.os.YZ,
                                            refererInfo: p,
                                            metrics: s
                                        });
                                    0 !== d.bids.length && h.push(d)
                                })), i.forEach((function(e) {
                                    var n = e.bids.filter((function(e) {
                                        return (0, g.sE)(h, (function(n) {
                                            return (0, g.sE)(n.bids, (function(n) {
                                                return n.bidId === e.bid_id
                                            }))
                                        }))
                                    }));
                                    e.bids = n
                                })), h.forEach((function(e) {
                                    void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter((function(e) {
                                        return e.bids.length > 0
                                    })))
                                }))
                            }
                        }));
                        var E = Y(e);
                        return d.forEach((function(e) {
                            var a = (0, o.getUniqueIdentifierStr)(),
                                c = u.fork(),
                                s = y({
                                    bidderCode: e,
                                    auctionId: t,
                                    bidderRequestId: a,
                                    bids: V({
                                        bidderCode: e,
                                        auctionId: t,
                                        bidderRequestId: a,
                                        adUnits: (0, o.deepClone)(E),
                                        labels: i,
                                        src: "client",
                                        metrics: c
                                    }),
                                    auctionStart: n,
                                    timeout: r,
                                    refererInfo: p,
                                    metrics: c
                                }),
                                d = K[e];
                            d || (0, o.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), d && s.bids && 0 !== s.bids.length && h.push(s)
                        })), X.getConsentData() && h.forEach((function(e) {
                            e.gdprConsent = X.getConsentData()
                        })), $.getConsentData() && h.forEach((function(e) {
                            e.uspConsent = $.getConsentData()
                        })), h.forEach((function(e) {
                            f.vc.runWithBidder(e.bidderCode, (function() {
                                var n = f.vc.getConfig("fledgeEnabled");
                                e.fledgeEnabled = navigator.runAdAuction && n
                            }))
                        })), h
                    }), "makeBidRequests"), z.callBids = function(e, n, t, i, a, u, c) {
                        var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
                        if (n.length) {
                            var l = n.reduce((function(e, n) {
                                    return e[Number(void 0 !== n.src && n.src === Z.os.YZ)].push(n), e
                                }), [
                                    [],
                                    []
                                ]),
                                g = (0, r.Z)(l, 2),
                                p = g[0],
                                v = g[1],
                                h = [];
                            v.forEach((function(e) {
                                for (var n = -1, t = 0; t < h.length; ++t)
                                    if (e.uniquePbsTid === h[t].uniquePbsTid) {
                                        n = t;
                                        break
                                    } n <= -1 && h.push(e)
                            }));
                            var m = 0;
                            H.forEach((function(e) {
                                if (e && h[m] && te(e).has(h[m].bidderCode)) {
                                    var n = (0, d.O)(u, a ? {
                                            request: a.request.bind(null, "s2s"),
                                            done: a.done
                                        } : void 0),
                                        r = e.bidders,
                                        c = K[e.adapter],
                                        f = h[m].uniquePbsTid,
                                        l = h[m].adUnitsS2SCopy,
                                        g = v.filter((function(e) {
                                            return e.uniquePbsTid === f
                                        }));
                                    if (c) {
                                        var p = {
                                            ad_units: l,
                                            s2sConfig: e,
                                            ortb2Fragments: s
                                        };
                                        if (p.ad_units.length) {
                                            var b = g.map((function(e) {
                                                    return e.start = (0, o.timestamp)(), i.bind(e)
                                                })),
                                                y = (0, o.getBidderCodes)(p.ad_units).filter((function(e) {
                                                    return r.includes(e)
                                                }));
                                            (0, o.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(y.length > 0 ? y.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')), g.forEach((function(e) {
                                                x.j8(Z.FP.BID_REQUESTED, F(F({}, e), {}, {
                                                    tid: e.auctionId
                                                }))
                                            })), c.callBids(p, v, t, (function() {
                                                return b.forEach((function(e) {
                                                    return e()
                                                }))
                                            }), n)
                                        }
                                    } else(0, o.logError)("missing " + e.adapter);
                                    m++
                                }
                            })), p.forEach((function(e) {
                                e.start = (0, o.timestamp)();
                                var n = K[e.bidderCode];
                                f.vc.runWithBidder(e.bidderCode, (function() {
                                    (0, o.logMessage)("CALLING BIDDER"), x.j8(Z.FP.BID_REQUESTED, e)
                                }));
                                var r = (0, d.O)(u, a ? {
                                        request: a.request.bind(null, e.bidderCode),
                                        done: a.done
                                    } : void 0),
                                    s = i.bind(e);
                                try {
                                    f.vc.runWithBidder(e.bidderCode, o.bind.call(n.callBids, n, e, t, s, r, c, f.vc.callbackWithBidder(e.bidderCode)))
                                } catch (n) {
                                    (0, o.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                                        e: n,
                                        bidRequest: e
                                    }), s()
                                }
                            }))
                        } else(0, o.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                    }, z.videoAdapters = [], z.registerBidAdapter = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.supportedMediaTypes,
                            i = void 0 === r ? [] : r;
                        e && n ? "function" == typeof e.callBids ? (K[n] = e, (0, g.q9)(i, "video") && z.videoAdapters.push(n), (0, g.q9)(i, "native") && c.Sg.push(n)) : (0, o.logError)("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : (0, o.logError)("bidAdapter or bidderCode not specified")
                    }, z.aliasBidAdapter = function(e, n, t) {
                        if (void 0 === K[n]) {
                            var r = K[e];
                            if (void 0 === r) {
                                var i = [];
                                H.forEach((function(t) {
                                    if (t.bidders && t.bidders.length) {
                                        var r = t && t.bidders;
                                        t && (0, g.q9)(r, n) ? L[n] = e : i.push(e)
                                    }
                                })), i.forEach((function(e) {
                                    (0, o.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                                }))
                            } else try {
                                var a, u = function(e) {
                                    var n = [];
                                    return (0, g.q9)(z.videoAdapters, e) && n.push("video"), (0, g.q9)(c.Sg, e) && n.push("native"), n
                                }(e);
                                if (r.constructor.prototype != Object.prototype)(a = new r.constructor).setBidderCode(n);
                                else {
                                    var d = r.getSpec(),
                                        f = t && t.gvlid,
                                        l = t && t.skipPbsAliasing;
                                    a = (0, s.PZ)(Object.assign({}, d, {
                                        code: n,
                                        gvlid: f,
                                        skipPbsAliasing: l
                                    })), L[n] = e
                                }
                                z.registerBidAdapter(a, n, {
                                    supportedMediaTypes: u
                                })
                            } catch (n) {
                                (0, o.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                            }
                        } else(0, o.logMessage)('alias name "' + n + '" has been already specified.')
                    }, z.registerAnalyticsAdapter = function(e) {
                        var n = e.adapter,
                            t = e.code,
                            r = e.gvlid;
                        n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, G[t] = {
                            adapter: n,
                            gvlid: r
                        }) : (0, o.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : (0, o.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
                    }, z.enableAnalytics = function(e) {
                        (0, o.isArray)(e) || (e = [e]), (0, o._each)(e, (function(e) {
                            var n = G[e.provider];
                            n && n.adapter ? n.adapter.enableAnalytics(e) : (0, o.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider, "'."))
                        }))
                    }, z.getBidAdapter = function(e) {
                        return K[e]
                    }, z.getAnalyticsAdapter = function(e) {
                        return G[e]
                    }, z.callTimedOutBidders = function(e, n, t) {
                        n = n.map((function(n) {
                            return n.params = (0, o.getUserConfiguredParams)(e, n.adUnitCode, n.bidder), n.timeout = t, n
                        })), n = (0, o.groupBy)(n, "bidder"), Object.keys(n).forEach((function(e) {
                            ie(e, "onTimeout", n[e])
                        }))
                    }, z.callBidWonBidder = function(e, n, t) {
                        n.params = (0, o.getUserConfiguredParams)(t, n.adUnitCode, n.bidder), p.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder), ie(e, "onBidWon", n)
                    }, z.callSetTargetingBidder = function(e, n) {
                        ie(e, "onSetTargeting", n)
                    }, z.callBidViewableBidder = function(e, n) {
                        ie(e, "onBidViewable", n)
                    }, z.callBidderError = function(e, n, t) {
                        ie(e, "onBidderError", {
                            error: n,
                            bidderRequest: t
                        })
                    };
                    var oe = z
                },
                14699: function(e, n, t) {
                    t.d(n, {
                        JY: function() {
                            return R
                        },
                        Ks: function() {
                            return k
                        },
                        PZ: function() {
                            return S
                        },
                        Q1: function() {
                            return U
                        },
                        dX: function() {
                            return O
                        }
                    });
                    var r = t(93324),
                        i = t(71002),
                        o = t(48525),
                        a = t(9528),
                        u = t(3193),
                        c = t(69626),
                        s = t(11974),
                        d = t(70059),
                        f = t(90154),
                        l = t(5644),
                        g = t(52021),
                        p = t(34614),
                        v = t(48928),
                        h = t(64358),
                        m = t(20265),
                        b = t(24679),
                        y = t(92797),
                        E = t(15164),
                        w = t(78653),
                        C = t(55975),
                        A = t(99128),
                        T = (0, E.eA)("bidderFactory"),
                        I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];

                    function O(e) {
                        var n = Array.isArray(e.supportedMediaTypes) ? {
                            supportedMediaTypes: e.supportedMediaTypes
                        } : void 0;

                        function t(e) {
                            var t = S(e);
                            a.ZP.registerBidAdapter(t, e.code, n)
                        }
                        t(e), Array.isArray(e.aliases) && e.aliases.forEach((function(n) {
                            var r, i, o = n;
                            (0, h.isPlainObject)(n) && (o = n.code, r = n.gvlid, i = n.skipPbsAliasing), a.ZP.aliasRegistry[o] = e.code, t(Object.assign({}, e, {
                                code: o,
                                gvlid: r,
                                skipPbsAliasing: i
                            }))
                        }))
                    }

                    function S(e) {
                        return Object.assign(new o.Z(e.code), {
                            getSpec: function() {
                                return Object.freeze(e)
                            },
                            registerSyncs: n,
                            callBids: function(r, i, o, s, d, f) {
                                if (Array.isArray(r.bids)) {
                                    var p = {},
                                        v = [],
                                        m = P(r).measureTime("validate", (function() {
                                            return r.bids.filter(t)
                                        }));
                                    if (0 !== m.length) {
                                        var b = {};
                                        m.forEach((function(e) {
                                            b[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                                        })), B(e, m, r, s, f, {
                                            onRequest: function(e) {
                                                return g.j8(l.FP.BEFORE_BIDDER_HTTP, r, e)
                                            },
                                            onResponse: function(n) {
                                                d(e.code), v.push(n)
                                            },
                                            onFledgeAuctionConfigs: function(e) {
                                                e.forEach((function(e) {
                                                    var n = b[e.bidId];
                                                    n && j(n, e)
                                                }))
                                            },
                                            onError: function(n, t) {
                                                d(e.code), a.ZP.callBidderError(e.code, t, r), g.j8(l.FP.BIDDER_ERROR, {
                                                    error: t,
                                                    bidderRequest: r
                                                }), (0, h.logError)("Server call for ".concat(e.code, " failed: ").concat(n, " ").concat(t.status, ". Continuing without bids."))
                                            },
                                            onBid: function(n) {
                                                var t = b[n.requestId];
                                                if (t) {
                                                    if (n.adapterCode = t.bidder, function(e, n) {
                                                            var t = C.S.get(n, "allowAlternateBidderCodes") || !1,
                                                                r = C.S.get(n, "allowedAlternateBidderCodes");
                                                            if (e && n && n !== e && (r = (0, h.isArray)(r) ? r.map((function(e) {
                                                                    return e.trim().toLowerCase()
                                                                })).filter((function(e) {
                                                                    return !!e
                                                                })).filter(h.uniques) : r, !t || (0, h.isArray)(r) && "*" !== r[0] && !r.includes(e))) return !0;
                                                            return !1
                                                        }(n.bidderCode, t.bidder)) return void(0, h.logWarn)("".concat(n.bidderCode, " is not a registered partner or known bidder of ").concat(t.bidder, ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."));
                                                    n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.meta = n.meta || Object.assign({}, n[t.bidder]);
                                                    var r = Object.assign((0, c.m)(l.Q_.GOOD, t), n);
                                                    ! function(e, n) {
                                                        var t = (0, A.Bf)(n.metrics);
                                                        t.checkpoint("addBidResponse"), p[e] = !0, t.measureTime("addBidResponse.validate", (function() {
                                                            return R(e, n)
                                                        })) && i(e, n)
                                                    }(t.adUnitCode, r)
                                                } else(0, h.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."))
                                            },
                                            onCompletion: y
                                        })
                                    } else y()
                                }

                                function y() {
                                    o(), u.vc.runWithBidder(e.code, (function() {
                                        g.j8(l.FP.BIDDER_DONE, r), n(v, r.gdprConsent, r.uspConsent)
                                    }))
                                }
                            }
                        });

                        function n(n, t, r) {
                            k(e, n, t, r)
                        }

                        function t(n) {
                            return !!e.isBidRequestValid(n) || ((0, h.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(n))), !1)
                        }
                    }
                    var B = (0, y.z3)("sync", (function(e, n, t, r, o, a) {
                            var u = a.onRequest,
                                c = a.onResponse,
                                s = a.onFledgeAuctionConfigs,
                                d = a.onError,
                                f = a.onBid,
                                l = a.onCompletion,
                                g = P(t);
                            l = g.startTiming("total").stopBefore(l);
                            var p = g.measureTime("buildRequests", (function() {
                                return e.buildRequests(n, t)
                            }));
                            if (p && 0 !== p.length) {
                                Array.isArray(p) || (p = [p]);
                                var v = (0, h.delayExecution)(l, p.length);
                                p.forEach((function(n) {
                                    var t = g.fork();

                                    function a(e) {
                                        null != e && (e.metrics = t.fork().renameWith()), f(e)
                                    }
                                    var l = o((function(r, i) {
                                            m();
                                            try {
                                                r = JSON.parse(r)
                                            } catch (e) {}
                                            r = {
                                                body: r,
                                                headers: {
                                                    get: i.getResponseHeader.bind(i)
                                                }
                                            }, c(r);
                                            try {
                                                r = t.measureTime("interpretResponse", (function() {
                                                    return e.interpretResponse(r, n)
                                                }))
                                            } catch (n) {
                                                return (0, h.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, n), void v()
                                            }
                                            var o;
                                            r && (0, h.isArray)(r.fledgeAuctionConfigs) ? (s(r.fledgeAuctionConfigs), o = r.bids) : o = r, o && ((0, h.isArray)(o) ? o.forEach(a) : a(o)), v()
                                        })),
                                        p = o((function(e, n) {
                                            m(), d(e, n), v()
                                        }));
                                    u(n);
                                    var m = t.startTiming("net");
                                    switch (n.method) {
                                        case "GET":
                                            r("".concat(n.url).concat(function(e) {
                                                if (e) return "?".concat("object" === (0, i.Z)(e) ? (0, h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(n.data)), {
                                                success: l,
                                                error: p
                                            }, void 0, Object.assign({
                                                method: "GET",
                                                withCredentials: !0
                                            }, n.options));
                                            break;
                                        case "POST":
                                            r(n.url, {
                                                success: l,
                                                error: p
                                            }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), Object.assign({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, n.options));
                                            break;
                                        default:
                                            (0, h.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(n.type, " must be GET or POST")), v()
                                    }
                                }))
                            } else l()
                        }), "processBidderRequests"),
                        k = (0, y.z3)("async", (function(e, n, t, r) {
                            var i = u.vc.getConfig("userSync.aliasSyncEnabled");
                            if (e.getUserSyncs && (i || !a.ZP.aliasRegistry[e.code])) {
                                var o = u.vc.getConfig("userSync.filterSettings"),
                                    c = e.getUserSyncs({
                                        iframeEnabled: !(!o || !o.iframe && !o.all),
                                        pixelEnabled: !(!o || !o.image && !o.all)
                                    }, n, t, r);
                                c && (Array.isArray(c) || (c = [c]), c.forEach((function(n) {
                                    s.k_.registerSync(n.type, e.code, n.url)
                                })))
                            }
                        }), "registerSyncs"),
                        j = (0, y.z3)("sync", (function(e, n) {
                            (0, h.logInfo)("bidderFactory.addComponentAuction", n)
                        }), "addComponentAuction");

                    function U(e, n) {
                        var t = a.ZP.getBidAdapter(e);
                        if (t.getSpec().getMappingFileInfo) {
                            var r = t.getSpec().getMappingFileInfo(),
                                i = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
                                o = T.getDataFromLocalStorage(i);
                            if (o) {
                                try {
                                    o = JSON.parse(o)
                                } catch (n) {
                                    (0, h.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"))
                                }
                                return o.mapping[n] ? o.mapping[n] : null
                            }
                        }
                    }

                    function _(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = t.index,
                            o = void 0 === i ? w.K.index : i;
                        if ((n.width || 0 === parseInt(n.width, 10)) && (n.height || 0 === parseInt(n.height, 10))) return n.width = parseInt(n.width, 10), n.height = parseInt(n.height, 10), !0;
                        var a = o.getBidRequest(n),
                            u = o.getMediaTypes(n),
                            c = a && a.sizes || u && u.banner && u.banner.sizes,
                            s = (0, h.parseSizesInput)(c);
                        if (1 === s.length) {
                            var d = s[0].split("x"),
                                f = (0, r.Z)(d, 2),
                                l = f[0],
                                g = f[1];
                            return n.width = parseInt(l, 10), n.height = parseInt(g, 10), !0
                        }
                        return !1
                    }

                    function R(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.index,
                            i = void 0 === r ? w.K.index : r;

                        function o() {
                            var e = Object.keys(n);
                            return I.every((function(t) {
                                return (0, p.q9)(e, t) && !(0, p.q9)([void 0, null], n[t])
                            }))
                        }

                        function a(e) {
                            return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e)
                        }
                        return e ? n ? o() ? "native" !== n.mediaType || (0, d.r4)(n, {
                            index: i
                        }) ? "video" !== n.mediaType || (0, f.Dn)(n, {
                            index: i
                        }) ? !("banner" === n.mediaType && !_(e, n, {
                            index: i
                        })) || ((0, h.logError)(a("Banner bids require a width and height")), !1) : ((0, h.logError)(a("Video bid does not have required vastUrl or renderer property")), !1) : ((0, h.logError)(a("Native bid missing some required properties.")), !1) : ((0, h.logError)(a("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1) : ((0, h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : ((0, h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1)
                    }

                    function P(e) {
                        return (0, A.Bf)(e.metrics).renameWith((function(n) {
                            return ["adapter.client.".concat(n), "adapters.client.".concat(e.bidderCode, ".").concat(n)]
                        }))
                    }(0, y.v5)("checkAdUnitSetup").before((function(e, n) {
                        if (!u.vc.getConfig("adpod.brandCategoryExclusion")) return e.call(this, n);
                        n.filter((function(e) {
                            return (0, m.Z)(e, "mediaTypes.video.context") === b.Oh
                        })).map((function(e) {
                            return e.bids.map((function(e) {
                                return e.bidder
                            }))
                        })).reduce(h.flatten, []).filter(h.uniques).forEach((function(e) {
                            var n = a.ZP.getBidAdapter(e);
                            if (n.getSpec().getMappingFileInfo) {
                                var t = n.getSpec().getMappingFileInfo(),
                                    r = t.refreshInDays ? t.refreshInDays : 1,
                                    i = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                                    o = T.getDataFromLocalStorage(i);
                                try {
                                    (!(o = o ? JSON.parse(o) : void 0) || (0, h.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && (0, v.h)(t.url, {
                                        success: function(n) {
                                            try {
                                                n = JSON.parse(n);
                                                var t = {
                                                    lastUpdated: (0, h.timestamp)(),
                                                    mapping: n.mapping
                                                };
                                                T.setDataInLocalStorage(i, JSON.stringify(t))
                                            } catch (n) {
                                                (0, h.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                                            }
                                        },
                                        error: function() {
                                            (0, h.logError)("Failed to load ".concat(e, " bidder translation file"))
                                        }
                                    })
                                } catch (n) {
                                    (0, h.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                                }
                            }
                        })), e.call(this, n)
                    }))
                },
                55730: function(e, n, t) {
                    t.d(n, {
                        B: function() {
                            return u
                        }
                    });
                    var r = t(34614),
                        i = t(64358),
                        o = new WeakMap,
                        a = ["debugging", "adloox", "criteo", "outstream", "adagio", "spotx", "browsi", "brandmetrics", "justtag", "tncId", "akamaidap", "ftrackId", "inskin", "hadron", "medianet", "improvedigital"];

                    function u(e, n, t, u, c) {
                        if (n && e) {
                            if ((0, r.q9)(a, n)) {
                                u || (u = document);
                                var s = l(u, e);
                                if (s) return t && "function" == typeof t && (s.loaded ? t() : s.callbacks.push(t)), s.tag;
                                var d = o.get(u) || {},
                                    f = {
                                        loaded: !1,
                                        tag: null,
                                        callbacks: []
                                    };
                                return d[e] = f, o.set(u, d), t && "function" == typeof t && f.callbacks.push(t), (0, i.logWarn)("module ".concat(n, " is loading external JavaScript")),
                                    function(n, t, r, o) {
                                        r || (r = document);
                                        var a = r.createElement("script");
                                        a.type = "text/javascript", a.async = !0;
                                        var u = l(r, e);
                                        u && (u.tag = a);
                                        a.readyState ? a.onreadystatechange = function() {
                                            "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, t())
                                        } : a.onload = function() {
                                            t()
                                        };
                                        a.src = n, o && (0, i.setScriptAttributes)(a, o);
                                        return (0, i.insertElement)(a, r), a
                                    }(e, (function() {
                                        f.loaded = !0;
                                        try {
                                            for (var e = 0; e < f.callbacks.length; e++) f.callbacks[e]()
                                        } catch (e) {
                                            (0, i.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                                        }
                                    }), u, c)
                            }(0, i.logError)("".concat(n, " not whitelisted for loading external JavaScript"))
                        } else(0, i.logError)("cannot load external script without url and moduleCode");

                        function l(e, n) {
                            var t = o.get(e);
                            return t && t[n] ? t[n] : null
                        }
                    }
                },
                48928: function(e, n, t) {
                    t.d(n, {
                        O: function() {
                            return u
                        },
                        h: function() {
                            return a
                        }
                    });
                    var r = t(71002),
                        i = t(3193),
                        o = t(64358),
                        a = u();

                    function u() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.request,
                            a = n.done;
                        return function(n, u, c) {
                            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            try {
                                var d, f = s.method || (c ? "POST" : "GET"),
                                    l = document.createElement("a");
                                l.href = n;
                                var g = "object" === (0, r.Z)(u) && null !== u ? u : {
                                    success: function() {
                                        (0, o.logMessage)("xhr success")
                                    },
                                    error: function(e) {
                                        (0, o.logError)("xhr error", null, e)
                                    }
                                };
                                if ("function" == typeof u && (g.success = u), (d = new window.XMLHttpRequest).onreadystatechange = function() {
                                        if (4 === d.readyState) {
                                            "function" == typeof a && a(l.origin);
                                            var e = d.status;
                                            e >= 200 && e < 300 || 304 === e ? g.success(d.responseText, d) : g.error(d.statusText, d)
                                        }
                                    }, i.vc.getConfig("disableAjaxTimeout") || (d.ontimeout = function() {
                                        (0, o.logError)("  xhr timeout after ", d.timeout, "ms")
                                    }), "GET" === f && c) {
                                    var p = (0, o.parseUrl)(n, s);
                                    Object.assign(p.search, c), n = (0, o.buildUrl)(p)
                                }
                                d.open(f, n, !0), i.vc.getConfig("disableAjaxTimeout") || (d.timeout = e), s.withCredentials && (d.withCredentials = !0), (0, o._each)(s.customHeaders, (function(e, n) {
                                    d.setRequestHeader(n, e)
                                })), s.preflight && d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.setRequestHeader("Content-Type", s.contentType || "text/plain"), "function" == typeof t && t(l.origin), "POST" === f && c ? d.send(c) : d.send()
                            } catch (e) {
                                (0, o.logError)("xhr construction", e), "object" === (0, r.Z)(u) && null !== u && u.error(e)
                            }
                        }
                    }
                },
                25686: function(e, n, t) {
                    t.d(n, {
                        D$: function() {
                            return M
                        },
                        LX: function() {
                            return H
                        },
                        RH: function() {
                            return z
                        },
                        Yt: function() {
                            return j
                        },
                        Yw: function() {
                            return T
                        },
                        dg: function() {
                            return K
                        },
                        e0: function() {
                            return U
                        },
                        lU: function() {
                            return P
                        },
                        mv: function() {
                            return I
                        },
                        sq: function() {
                            return R
                        },
                        vO: function() {
                            return k
                        }
                    });
                    var r = t(71002),
                        i = t(64358),
                        o = t(20265),
                        a = t(56463),
                        u = t(70059),
                        c = t(79885),
                        s = t(35706),
                        d = t(3193),
                        f = t(11974),
                        l = t(92797),
                        g = t(34614),
                        p = t(90154),
                        v = t(24679),
                        h = t(78653),
                        m = t(55975),
                        b = t(52021),
                        y = t(9528),
                        E = t(5644),
                        w = t(68792),
                        C = t(99128),
                        A = f.k_.syncUsers,
                        T = "inProgress",
                        I = "completed";
                    b.on(E.FP.BID_ADJUSTMENT, (function(e) {
                        ! function(e) {
                            var n = e.bidderCode,
                                t = e.cpm,
                                r = m.S.get(n || null, "bidCpmAdjustment");
                            if (r && "function" == typeof r) try {
                                t = r(e.cpm, Object.assign({}, e))
                            } catch (e) {
                                (0, i.logError)("Error during bid adjustment", "bidmanager.js", e)
                            }
                            t >= 0 && (e.cpm = t)
                        }(e)
                    }));
                    var O = {},
                        S = {},
                        B = [];

                    function k(e) {
                        var n = e.adUnits,
                            t = e.adUnitCodes,
                            r = e.callback,
                            o = e.cbTimeout,
                            a = e.labels,
                            u = e.auctionId,
                            c = e.ortb2Fragments,
                            s = e.metrics;
                        s = (0, C.Bf)(s);
                        var f, l, p, v, m = n,
                            k = a,
                            R = t,
                            D = [],
                            x = [],
                            Z = [],
                            N = u || (0, i.generateUUID)(),
                            M = r,
                            W = o,
                            z = [],
                            K = new Set;

                        function L() {
                            return {
                                auctionId: N,
                                timestamp: f,
                                auctionEnd: l,
                                auctionStatus: p,
                                adUnits: m,
                                adUnitCodes: R,
                                labels: k,
                                bidderRequests: D,
                                noBids: Z,
                                bidsReceived: x,
                                winningBids: z,
                                timeout: W,
                                metrics: s
                            }
                        }

                        function H(e, t) {
                            if (t && clearTimeout(v), void 0 === l) {
                                var r = [];
                                e && ((0, i.logMessage)("Auction ".concat(N, " timedOut")), o = K, (r = D.map((function(e) {
                                    return (e.bids || []).filter((function(e) {
                                        return !o.has(e.bidder)
                                    }))
                                })).reduce(i.flatten, [])).length && b.j8(E.FP.BID_TIMEOUT, r)), p = I, l = Date.now(), s.checkpoint("auctionEnd"), s.timeBetween("requestBids", "auctionEnd", "requestBids.total"), s.timeBetween("callBids", "auctionEnd", "requestBids.callBids"), b.j8(E.FP.AUCTION_END, L()), _(m, (function() {
                                    try {
                                        if (null != M) {
                                            var t = R,
                                                o = x.filter(i.bind.call(i.adUnitsFilter, this, t)).reduce(V, {});
                                            M.apply(pbjs, [o, e, N]), M = null
                                        }
                                    } catch (e) {
                                        (0, i.logError)("Error executing bidsBackHandler", null, e)
                                    } finally {
                                        r.length && y.ZP.callTimedOutBidders(n, r, W);
                                        var a = d.vc.getConfig("userSync") || {};
                                        a.enableOverride || A(a.syncDelay)
                                    }
                                }))
                            }
                            var o
                        }

                        function G() {
                            d.vc.resetBidder(), (0, i.logInfo)("Bids Received for Auction with id: ".concat(N), x), p = I, H(!1, !0)
                        }

                        function Q(e) {
                            K.add(e)
                        }

                        function J(e) {
                            var n = this;
                            e.forEach((function(e) {
                                var n;
                                n = e, D = D.concat(n)
                            }));
                            var t = {},
                                r = {
                                    bidRequests: e,
                                    run: function() {
                                        var r, u;
                                        r = H.bind(null, !0), u = setTimeout(r, W), v = u, p = T, b.j8(E.FP.AUCTION_INIT, L());
                                        var s = function(e, n) {
                                            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                                                r = void 0 === t ? h.K.index : t,
                                                o = 0,
                                                a = !1,
                                                u = new Set,
                                                c = {},
                                                s = {};

                                            function f(e, n) {
                                                null == s[e] && (s[e] = w.Z.resolve()), s[e] = s[e].then((function() {
                                                    return w.Z.resolve(n).catch((function() {}))
                                                }))
                                            }

                                            function l(e, t) {
                                                var r = e.timeout;
                                                (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                                                var i = n.getAuctionStart() + r - Date.now(),
                                                    o = s[e.bidderRequestId],
                                                    a = s[""];
                                                (null != o || null != a) && i > 0 ? w.Z.race([w.Z.timeout(i), w.Z.resolve(a).then((function() {
                                                    return o
                                                }))]).then(t) : t()
                                            }

                                            function p() {
                                                o--, a && 0 === o && e()
                                            }

                                            function v(e, t) {
                                                c[t.requestId] = !0, o++;
                                                var r = F({
                                                    adUnitCode: e,
                                                    bid: t,
                                                    auctionId: n.getAuctionId()
                                                });
                                                "video" === r.mediaType ? q(n, r, p) : (P(n, r), p())
                                            }

                                            function m() {
                                                var t = this,
                                                    r = n.getBidRequests(),
                                                    s = d.vc.getConfig("auctionOptions");
                                                if (u.add(t), s && !(0, i.isEmpty)(s)) {
                                                    var f = s.secondaryBidders;
                                                    f && !r.every((function(e) {
                                                        return (0, g.q9)(f, e.bidderCode)
                                                    })) && (r = r.filter((function(e) {
                                                        return !(0, g.q9)(f, e.bidderCode)
                                                    })))
                                                }
                                                a = r.every((function(e) {
                                                    return u.has(e)
                                                })), t.bids.forEach((function(e) {
                                                    c[e.bidId] || (n.addNoBid(e), b.j8(E.FP.NO_BID, e))
                                                })), a && 0 === o && e()
                                            }
                                            return {
                                                addBidResponse: function(e, n) {
                                                    var t = r.getBidderRequest(n);
                                                    f(t && t.bidderRequestId || "", j.call({
                                                        dispatch: v
                                                    }, e, n))
                                                },
                                                adapterDone: function() {
                                                    l(this, m.bind(this))
                                                }
                                            }
                                        }(G, n);
                                        y.ZP.callBids(m, e, s.addBidResponse, s.adapterDone, {
                                            request: function(e, n) {
                                                a(O, n), a(t, e), S[e] || (S[e] = {
                                                    SRA: !0,
                                                    origin: n
                                                }), t[e] > 1 && (S[e].SRA = !1)
                                            },
                                            done: function(e) {
                                                O[e]--, B[0] && o(B[0]) && B.shift()
                                            }
                                        }, W, Q, c)
                                    }
                                };

                            function o(e) {
                                var n = !0,
                                    t = d.vc.getConfig("maxRequestsPerOrigin") || 4;
                                return e.bidRequests.some((function(e) {
                                    var r = 1,
                                        i = void 0 !== e.src && e.src === E.os.YZ ? "s2s" : e.bidderCode;
                                    return S[i] && (!1 === S[i].SRA && (r = Math.min(e.bids.length, t)), O[S[i].origin] + r > t && (n = !1)), !n
                                })), n && e.run(), n
                            }

                            function a(e, n) {
                                void 0 === e[n] ? e[n] = 1 : e[n]++
                            }
                            o(r) || ((0, i.logWarn)("queueing auction due to limited endpoint capacity"), B.push(r))
                        }
                        return {
                            addBidReceived: function(e) {
                                x = x.concat(e)
                            },
                            addNoBid: function(e) {
                                Z = Z.concat(e)
                            },
                            executeCallback: H,
                            callBids: function() {
                                p = "started", f = Date.now();
                                var e = s.measureTime("requestBids.makeRequests", (function() {
                                    return y.ZP.makeBidRequests(m, f, N, W, k, c, s)
                                }));
                                (0, i.logInfo)("Bids Requested for Auction with id: ".concat(N), e), s.checkpoint("callBids"), e.length < 1 ? ((0, i.logWarn)("No valid bid requests returned for auction"), G()) : U.call({
                                    dispatch: J,
                                    context: this
                                }, e)
                            },
                            addWinningBid: function(e) {
                                z = z.concat(e), y.ZP.callBidWonBidder(e.adapterCode || e.bidder, e, n)
                            },
                            setBidTargeting: function(e) {
                                y.ZP.callSetTargetingBidder(e.adapterCode || e.bidder, e)
                            },
                            getWinningBids: function() {
                                return z
                            },
                            getAuctionStart: function() {
                                return f
                            },
                            getTimeout: function() {
                                return W
                            },
                            getAuctionId: function() {
                                return N
                            },
                            getAuctionStatus: function() {
                                return p
                            },
                            getAdUnits: function() {
                                return m
                            },
                            getAdUnitCodes: function() {
                                return R
                            },
                            getBidRequests: function() {
                                return D
                            },
                            getBidsReceived: function() {
                                return x
                            },
                            getNoBids: function() {
                                return Z
                            },
                            getFPD: function() {
                                return c
                            },
                            getMetrics: function() {
                                return s
                            }
                        }
                    }
                    var j = (0, l.z3)("sync", (function(e, n) {
                            this.dispatch.call(null, e, n)
                        }), "addBidResponse"),
                        U = (0, l.z3)("sync", (function(e) {
                            this.dispatch.call(this.context, e)
                        }), "addBidderRequests"),
                        _ = (0, l.z3)("async", (function(e, n) {
                            n && n()
                        }), "bidsBackCallback");

                    function R(e, n) {
                        n.timeToRespond > e.getTimeout() + d.vc.getConfig("timeoutBuffer") && e.executeCallback(!0)
                    }

                    function P(e, n) {
                        ! function(e) {
                            var n, t = !0 === m.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
                            e.bidderCode && (t || e.dealId) && (n = function(e, n) {
                                var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                                    r = void 0 === t ? h.K.index : t;
                                if (!n) return {};
                                var i = r.getBidRequest(n),
                                    o = {},
                                    a = H(n.mediaType, e);
                                G(o, a, n, i), e && m.S.getOwn(e, E.k2.xn) && (G(o, m.S.ownSettingsFor(e), n, i), n.sendStandardTargeting = m.S.get(e, "sendStandardTargeting"));
                                n.native && (o = Object.assign({}, o, (0, u.Ur)(n)));
                                return o
                            }(e.bidderCode, e));
                            e.adserverTargeting = Object.assign(e.adserverTargeting || {}, n)
                        }(n), (0, C.Bf)(n.metrics).timeSince("addBidResponse", "addBidResponse.total"), b.j8(E.FP.BID_RESPONSE, n), e.addBidReceived(n), R(e, n)
                    }

                    function q(e, n, t) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            a = r.index,
                            u = void 0 === a ? h.K.index : a,
                            c = !0,
                            s = (0, o.Z)(u.getMediaTypes({
                                requestId: n.originalRequestId || n.requestId,
                                transactionId: n.transactionId
                            }), "video"),
                            f = s && (0, o.Z)(s, "context"),
                            l = s && (0, o.Z)(s, "useCacheKey");
                        d.vc.getConfig("cache.url") && (l || f !== p.gZ) && (!n.videoCacheKey || d.vc.getConfig("cache.ignoreBidderCacheKey") ? (c = !1, M(e, n, t, s)) : n.vastUrl || ((0, i.logError)("videoCacheKey specified but not required vastUrl for video bid"), c = !1)), c && (P(e, n), t())
                    }
                    var D, x, Z = function(e) {
                        (0, c.h)(e.map((function(e) {
                            return e.bidResponse
                        })), (function(n, t) {
                            t.forEach((function(t, r) {
                                var o = e[r],
                                    a = o.auctionInstance,
                                    u = o.bidResponse,
                                    s = o.afterBidAdded;
                                n ? ((0, i.logWarn)("Failed to save to the video cache: ".concat(n, ". Video bid must be discarded.")), R(a, u)) : "" === t.uuid ? ((0, i.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), R(a, u)) : (u.videoCacheKey = t.uuid, u.vastUrl || (u.vastUrl = (0, c.z)(u.videoCacheKey)), P(a, u), s())
                            }))
                        }))
                    };
                    d.vc.getConfig("cache", (function(e) {
                        D = "number" == typeof e.cache.batchSize && e.cache.batchSize > 0 ? e.cache.batchSize : 1, x = "number" == typeof e.cache.batchTimeout && e.cache.batchTimeout > 0 ? e.cache.batchTimeout : 0
                    }));
                    var N = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : setTimeout,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z,
                                t = [
                                    []
                                ],
                                r = !1,
                                i = function(e) {
                                    return e()
                                };
                            return function(o, a, u) {
                                var c = x > 0 ? e : i;
                                t[t.length - 1].length >= D && t.push([]), t[t.length - 1].push({
                                    auctionInstance: o,
                                    bidResponse: a,
                                    afterBidAdded: u
                                }), r || (r = !0, c((function() {
                                    t.forEach(n), t = [
                                        []
                                    ], r = !1
                                }), x))
                            }
                        }(),
                        M = (0, l.z3)("async", (function(e, n, t, r) {
                            N(e, n, t)
                        }), "callPrebidCache");

                    function F(e) {
                        var n = e.adUnitCode,
                            t = e.bid,
                            o = e.auctionId,
                            u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = u.index,
                            f = void 0 === c ? h.K.index : c,
                            l = f.getBidderRequest(t),
                            g = l && l.start || t.requestTimestamp,
                            p = Object.assign({}, t, {
                                auctionId: o,
                                responseTimestamp: (0, i.timestamp)(),
                                requestTimestamp: g,
                                cpm: parseFloat(t.cpm) || 0,
                                bidder: t.bidderCode,
                                adUnitCode: n
                            });
                        p.timeToRespond = p.responseTimestamp - p.requestTimestamp, b.j8(E.FP.BID_ADJUSTMENT, p);
                        var v = f.getAdUnit(p).renderer,
                            m = p.mediaType,
                            y = f.getMediaTypes(p),
                            w = y && y[m],
                            C = w && w.renderer,
                            A = null;
                        C && C.url && C.render && (!0 !== C.backupOnly || !t.renderer) ? A = C : v && v.url && v.render && (!0 !== v.backupOnly || !t.renderer) && (A = v), A && (p.renderer = s.Th.install({
                            url: A.url,
                            config: A.options
                        }), p.renderer.setRender(A.render));
                        var T = W(t.mediaType, y, d.vc.getConfig("mediaTypePriceGranularity")),
                            I = (0, a.D)(p.cpm, "object" === (0, r.Z)(T) ? T : d.vc.getConfig("customPriceBucket"), d.vc.getConfig("currency.granularityMultiplier"));
                        return p.pbLg = I.low, p.pbMg = I.med, p.pbHg = I.high, p.pbAg = I.auto, p.pbDg = I.dense, p.pbCg = I.custom, p
                    }

                    function W(e, n, t) {
                        if (e && t) {
                            if (e === v.pX) {
                                var r = (0, o.Z)(n, "".concat(v.pX, ".context"), "instream");
                                if (t["".concat(v.pX, "-").concat(r)]) return t["".concat(v.pX, "-").concat(r)]
                            }
                            return t[e]
                        }
                    }
                    var z = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = n.index,
                                r = void 0 === t ? h.K.index : t,
                                i = W(e.mediaType, r.getMediaTypes(e), d.vc.getConfig("mediaTypePriceGranularity")),
                                o = "string" == typeof e.mediaType && i ? "string" == typeof i ? i : "custom" : d.vc.getConfig("priceGranularity");
                            return o
                        },
                        K = function(e) {
                            return function(n) {
                                var t = e || z(n);
                                return t === E.Ql.B7 ? n.pbAg : t === E.Ql.uN ? n.pbDg : t === E.Ql.yE ? n.pbLg : t === E.Ql.M2 ? n.pbMg : t === E.Ql.lj ? n.pbHg : t === E.Ql.qN ? n.pbCg : void 0
                            }
                        };

                    function L(e, n) {
                        return {
                            key: e,
                            val: "function" == typeof n ? function(e, t) {
                                return n(e, t)
                            } : function(e) {
                                return (0, i.getValue)(e, n)
                            }
                        }
                    }

                    function H(e, n) {
                        var t = E.TD,
                            r = Object.assign({}, m.S.settingsFor(null));
                        if (r[E.k2.xn] || (r[E.k2.xn] = function() {
                                var e = E.TD;
                                return [L(e.BIDDER, "bidderCode"), L(e.AD_ID, "adId"), L(e.PRICE_BUCKET, K()), L(e.SIZE, "size"), L(e.DEAL, "dealId"), L(e.SOURCE, "source"), L(e.FORMAT, "mediaType"), L(e.ADOMAIN, (function(e) {
                                    return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : ""
                                }))]
                            }()), "video" === e) {
                            var a = r[E.k2.xn].slice();
                            if (r[E.k2.xn] = a, [t.UUID, t.CACHE_ID].forEach((function(e) {
                                    void 0 === (0, g.sE)(a, (function(n) {
                                        return n.key === e
                                    })) && a.push(L(e, "videoCacheKey"))
                                })), d.vc.getConfig("cache.url") && (!n || !1 !== m.S.get(n, "sendStandardTargeting"))) {
                                var u = (0, i.parseUrl)(d.vc.getConfig("cache.url"));
                                void 0 === (0, g.sE)(a, (function(e) {
                                    return e.key === t.CACHE_HOST
                                })) && a.push(L(t.CACHE_HOST, (function(e) {
                                    return (0, o.Z)(e, "adserverTargeting.".concat(t.CACHE_HOST)) ? e.adserverTargeting[t.CACHE_HOST] : u.hostname
                                })))
                            }
                        }
                        return r
                    }

                    function G(e, n, t, r) {
                        var o = n[E.k2.xn];
                        return t.size = t.getSize(), (0, i._each)(o, (function(o) {
                            var a = o.key,
                                u = o.val;
                            if (e[a] && (0, i.logWarn)("The key: " + a + " is being overwritten"), (0, i.isFn)(u)) try {
                                u = u(t, r)
                            } catch (e) {
                                (0, i.logError)("bidmanager", "ERROR", e)
                            }(void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && a !== E.TD.DEAL || !(0, i.isEmptyStr)(u) && null != u ? e[a] = u : (0, i.logInfo)("suppressing empty key '" + a + "' from adserver targeting")
                        })), e
                    }

                    function V(e, n) {
                        return e[n.adUnitCode] || (e[n.adUnitCode] = {
                            bids: []
                        }), e[n.adUnitCode].bids.push(n), e
                    }
                },
                78653: function(e, n, t) {
                    t.d(n, {
                        K: function() {
                            return s
                        }
                    });
                    var r = t(64358),
                        i = t(25686),
                        o = t(34614);

                    function a(e) {
                        Object.assign(this, {
                            getAuction: function(n) {
                                var t = n.auctionId;
                                if (null != t) return e().find((function(e) {
                                    return e.getAuctionId() === t
                                }))
                            },
                            getAdUnit: function(n) {
                                var t = n.transactionId;
                                if (null != t) return e().flatMap((function(e) {
                                    return e.getAdUnits()
                                })).find((function(e) {
                                    return e.transactionId === t
                                }))
                            },
                            getMediaTypes: function(e) {
                                var n = e.transactionId,
                                    t = e.requestId;
                                if (null != t) {
                                    var r = this.getBidRequest({
                                        requestId: t
                                    });
                                    if (null != r && (null == n || r.transactionId === n)) return r.mediaTypes
                                } else if (null != n) {
                                    var i = this.getAdUnit({
                                        transactionId: n
                                    });
                                    if (null != i) return i.mediaTypes
                                }
                            },
                            getBidderRequest: function(n) {
                                var t = n.requestId,
                                    r = n.bidderRequestId;
                                if (null != t || null != r) {
                                    var i = e().flatMap((function(e) {
                                        return e.getBidRequests()
                                    }));
                                    return null != r && (i = i.filter((function(e) {
                                        return e.bidderRequestId === r
                                    }))), null == t ? i[0] : i.find((function(e) {
                                        return e.bids && null != e.bids.find((function(e) {
                                            return e.bidId === t
                                        }))
                                    }))
                                }
                            },
                            getBidRequest: function(n) {
                                var t = n.requestId;
                                if (null != t) return e().flatMap((function(e) {
                                    return e.getBidRequests()
                                })).flatMap((function(e) {
                                    return e.bids
                                })).find((function(e) {
                                    return e && e.bidId === t
                                }))
                            }
                        })
                    }
                    var u = t(5644),
                        c = t(99128);
                    var s = function() {
                        var e = [],
                            n = {};
                        return n.addWinningBid = function(n) {
                            var t = (0, c.Bf)(n.metrics);
                            t.checkpoint("bidWon"), t.timeBetween("auctionEnd", "bidWon", "render.pending"), t.timeBetween("requestBids", "bidWon", "render.e2e");
                            var i = (0, o.sE)(e, (function(e) {
                                return e.getAuctionId() === n.auctionId
                            }));
                            i ? (n.status = u.UE.fe, i.addWinningBid(n)) : (0, r.logWarn)("Auction not found when adding winning bid")
                        }, n.getAllWinningBids = function() {
                            return e.map((function(e) {
                                return e.getWinningBids()
                            })).reduce(r.flatten, [])
                        }, n.getBidsRequested = function() {
                            return e.map((function(e) {
                                return e.getBidRequests()
                            })).reduce(r.flatten, [])
                        }, n.getNoBids = function() {
                            return e.map((function(e) {
                                return e.getNoBids()
                            })).reduce(r.flatten, [])
                        }, n.getBidsReceived = function() {
                            return e.map((function(e) {
                                if (e.getAuctionStatus() === i.mv) return e.getBidsReceived()
                            })).reduce(r.flatten, []).filter((function(e) {
                                return e
                            }))
                        }, n.getAllBidsForAdUnitCode = function(n) {
                            return e.map((function(e) {
                                return e.getBidsReceived()
                            })).reduce(r.flatten, []).filter((function(e) {
                                return e && e.adUnitCode === n
                            }))
                        }, n.getAdUnits = function() {
                            return e.map((function(e) {
                                return e.getAdUnits()
                            })).reduce(r.flatten, [])
                        }, n.getAdUnitCodes = function() {
                            return e.map((function(e) {
                                return e.getAdUnitCodes()
                            })).reduce(r.flatten, []).filter(r.uniques)
                        }, n.createAuction = function(n) {
                            var t = (0, i.vO)(n);
                            return function(n) {
                                e.push(n)
                            }(t), t
                        }, n.findBidByAdId = function(n) {
                            return (0, o.sE)(e.map((function(e) {
                                return e.getBidsReceived()
                            })).reduce(r.flatten, []), (function(e) {
                                return e.adId === n
                            }))
                        }, n.getStandardBidderAdServerTargeting = function() {
                            return (0, i.LX)()[u.k2.xn]
                        }, n.setStatusForBids = function(t, r) {
                            var i = n.findBidByAdId(t);
                            if (i && (i.status = r), i && r === u.UE.CK) {
                                var a = (0, o.sE)(e, (function(e) {
                                    return e.getAuctionId() === i.auctionId
                                }));
                                a && a.setBidTargeting(i)
                            }
                        }, n.getLastAuctionId = function() {
                            return e.length && e[e.length - 1].getAuctionId()
                        }, n.clearAllAuctions = function() {
                            e.length = 0
                        }, n.index = new a((function() {
                            return e
                        })), n
                    }()
                },
                55975: function(e, n, t) {
                    t.d(n, {
                        S: function() {
                            return g
                        }
                    });
                    var r = t(15671),
                        i = t(43144),
                        o = t(20265),
                        a = t(64358),
                        u = t(78640),
                        c = t(5644);

                    function s(e, n) {
                        ! function(e, n) {
                            if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                        }(e, n), n.add(e)
                    }

                    function d(e, n, t) {
                        if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return t
                    }
                    var f = new WeakSet;

                    function l(e) {
                        return null == e ? this.defaultScope : e
                    }
                    var g = new(function() {
                        function e(n, t) {
                            (0, r.Z)(this, e), s(this, f), this.getSettings = n, this.defaultScope = t
                        }
                        return (0, i.Z)(e, [{
                            key: "get",
                            value: function(e, n) {
                                var t = this.getOwn(e, n);
                                return void 0 === t && (t = this.getOwn(null, n)), t
                            }
                        }, {
                            key: "getOwn",
                            value: function(e, n) {
                                return e = d(this, f, l).call(this, e), (0, o.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                            }
                        }, {
                            key: "getScopes",
                            value: function() {
                                var e = this;
                                return Object.keys(this.getSettings()).filter((function(n) {
                                    return n !== e.defaultScope
                                }))
                            }
                        }, {
                            key: "settingsFor",
                            value: function(e) {
                                return (0, a.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
                            }
                        }, {
                            key: "ownSettingsFor",
                            value: function(e) {
                                return e = d(this, f, l).call(this, e), this.getSettings()[e] || {}
                            }
                        }]), e
                    }())((function() {
                        return (0, u.R)().bidderSettings || {}
                    }), c.k2.zF)
                },
                69626: function(e, n, t) {
                    t.d(n, {
                        m: function() {
                            return o
                        }
                    });
                    var r = t(64358);

                    function i(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.src,
                            i = void 0 === t ? "client" : t,
                            o = n.bidder,
                            a = void 0 === o ? "" : o,
                            u = n.bidId,
                            c = n.transactionId,
                            s = n.auctionId,
                            d = i,
                            f = e || 0;

                        function l() {
                            switch (f) {
                                case 0:
                                    return "Pending";
                                case 1:
                                    return "Bid available";
                                case 2:
                                    return "Bid returned empty or error response";
                                case 3:
                                    return "Bid timed out"
                            }
                        }
                        this.bidderCode = a, this.width = 0, this.height = 0, this.statusMessage = l(), this.adId = (0, r.getUniqueIdentifierStr)(), this.requestId = u, this.transactionId = c, this.auctionId = s, this.mediaType = "banner", this.source = d, this.getStatusCode = function() {
                            return f
                        }, this.getSize = function() {
                            return this.width + "x" + this.height
                        }, this.getIdentifiers = function() {
                            return {
                                src: this.source,
                                bidder: this.bidderCode,
                                bidId: this.requestId,
                                transactionId: this.transactionId,
                                auctionId: this.auctionId
                            }
                        }
                    }

                    function o(e, n) {
                        return new i(e, n)
                    }
                },
                3193: function(e, n, t) {
                    t.d(n, {
                        FD: function() {
                            return g
                        },
                        vc: function() {
                            return b
                        }
                    });
                    var r = t(4942),
                        i = t(71002),
                        o = t(93324),
                        a = t(56463),
                        u = t(34614),
                        c = t(64358),
                        s = t(20265),
                        d = t(5644);

                    function f(e, n) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n && (r = r.filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            }))), t.push.apply(t, r)
                        }
                        return t
                    }
                    var l = "TRUE" === (0, c.getParameterByName)(d.f).toUpperCase(),
                        g = "random",
                        p = {};
                    p[g] = !0, p.fixed = !0;
                    var v = g,
                        h = {
                            LOW: "low",
                            MEDIUM: "medium",
                            HIGH: "high",
                            AUTO: "auto",
                            DENSE: "dense",
                            CUSTOM: "custom"
                        },
                        m = "*";
                    var b = function() {
                        var e, n, t, d = [],
                            g = null;

                        function b() {
                            e = {};
                            var r = {
                                _debug: l,
                                get debug() {
                                    return this._debug
                                },
                                set debug(e) {
                                    this._debug = e
                                },
                                _bidderTimeout: 3e3,
                                get bidderTimeout() {
                                    return this._bidderTimeout
                                },
                                set bidderTimeout(e) {
                                    this._bidderTimeout = e
                                },
                                _publisherDomain: null,
                                get publisherDomain() {
                                    return this._publisherDomain
                                },
                                set publisherDomain(e) {
                                    (0, c.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"), this._publisherDomain = e
                                },
                                _priceGranularity: h.MEDIUM,
                                set priceGranularity(e) {
                                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : h.MEDIUM : (0, c.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, (0, c.logMessage)("Using custom price granularity")))
                                },
                                get priceGranularity() {
                                    return this._priceGranularity
                                },
                                _customPriceBucket: {},
                                get customPriceBucket() {
                                    return this._customPriceBucket
                                },
                                _mediaTypePriceGranularity: {},
                                get mediaTypePriceGranularity() {
                                    return this._mediaTypePriceGranularity
                                },
                                set mediaTypePriceGranularity(e) {
                                    var n = this;
                                    this._mediaTypePriceGranularity = Object.keys(e).reduce((function(t, r) {
                                        return o(e[r]) ? "string" == typeof e ? t[r] = i(e[r]) ? e[r] : n._priceGranularity : (0, c.isPlainObject)(e) && (t[r] = e[r], (0, c.logMessage)("Using custom price granularity for ".concat(r))) : (0, c.logWarn)("Invalid price granularity for media type: ".concat(r)), t
                                    }), {})
                                },
                                _sendAllBids: true,
                                get enableSendAllBids() {
                                    return this._sendAllBids
                                },
                                set enableSendAllBids(e) {
                                    this._sendAllBids = e
                                },
                                _useBidCache: false,
                                get useBidCache() {
                                    return this._useBidCache
                                },
                                set useBidCache(e) {
                                    this._useBidCache = e
                                },
                                _deviceAccess: true,
                                get deviceAccess() {
                                    return this._deviceAccess
                                },
                                set deviceAccess(e) {
                                    this._deviceAccess = e
                                },
                                _bidderSequence: v,
                                get bidderSequence() {
                                    return this._bidderSequence
                                },
                                set bidderSequence(e) {
                                    p[e] ? this._bidderSequence = e : (0, c.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                                },
                                _timeoutBuffer: 400,
                                get timeoutBuffer() {
                                    return this._timeoutBuffer
                                },
                                set timeoutBuffer(e) {
                                    this._timeoutBuffer = e
                                },
                                _disableAjaxTimeout: false,
                                get disableAjaxTimeout() {
                                    return this._disableAjaxTimeout
                                },
                                set disableAjaxTimeout(e) {
                                    this._disableAjaxTimeout = e
                                },
                                _maxNestedIframes: 10,
                                get maxNestedIframes() {
                                    return this._maxNestedIframes
                                },
                                set maxNestedIframes(e) {
                                    this._maxNestedIframes = e
                                },
                                _auctionOptions: {},
                                get auctionOptions() {
                                    return this._auctionOptions
                                },
                                set auctionOptions(e) {
                                    (function(e) {
                                        if (!(0, c.isPlainObject)(e)) return (0, c.logWarn)("Auction Options must be an object"), !1;
                                        for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                                            var r = t[n];
                                            if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return (0, c.logWarn)("Auction Options given an incorrect param: ".concat(r)), !1;
                                            if ("secondaryBidders" === r) {
                                                if (!(0, c.isArray)(e[r])) return (0, c.logWarn)("Auction Options ".concat(r, " must be of type Array")), !1;
                                                if (!e[r].every(c.isStr)) return (0, c.logWarn)("Auction Options ".concat(r, " must be only string")), !1
                                            } else if ("suppressStaleRender" === r && !(0, c.isBoolean)(e[r])) return (0, c.logWarn)("Auction Options ".concat(r, " must be of type boolean")), !1
                                        }
                                        return !0
                                    })(e) && (this._auctionOptions = e)
                                }
                            };

                            function i(e) {
                                return (0, u.sE)(Object.keys(h), (function(n) {
                                    return e === h[n]
                                }))
                            }

                            function o(e) {
                                if (!e) return (0, c.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                                if ("string" == typeof e) i(e) || (0, c.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                                else if ((0, c.isPlainObject)(e) && !(0, a.t)(e)) return (0, c.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                                return !0
                            }
                            n && j(Object.keys(n).reduce((function(e, t) {
                                return n[t] !== r[t] && (e[t] = r[t] || {}), e
                            }), {})), n = r, t = {}
                        }

                        function y() {
                            if (g && t && (0, c.isPlainObject)(t[g])) {
                                var e = t[g],
                                    r = new Set(Object.keys(n).concat(Object.keys(e)));
                                return (0, u.Oc)(r).reduce((function(t, r) {
                                    return void 0 === e[r] ? t[r] = n[r] : void 0 === n[r] ? t[r] = e[r] : (0, c.isPlainObject)(e[r]) ? t[r] = (0, c.mergeDeep)({}, n[r], e[r]) : t[r] = e[r], t
                                }), {})
                            }
                            return Object.assign({}, n)
                        }
                        var E = [y, function() {
                                var e = y();
                                return Object.defineProperty(e, "ortb2", {
                                    get: function() {
                                        throw new Error("invalid access to 'orbt2' config - use request parameters instead")
                                    }
                                }), e
                            }].map((function(e) {
                                return function() {
                                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                        var n = arguments.length <= 0 ? void 0 : arguments[0];
                                        return n ? (0, s.Z)(e(), n) : y()
                                    }
                                    return k.apply(void 0, arguments)
                                }
                            })),
                            w = (0, o.Z)(E, 2),
                            C = w[0],
                            A = w[1],
                            T = [A, C].map((function(e) {
                                return function() {
                                    var n = e.apply(void 0, arguments);
                                    return n && "object" === (0, i.Z)(n) && (n = (0, c.deepClone)(n)), n
                                }
                            })),
                            I = (0, o.Z)(T, 2),
                            O = I[0],
                            S = I[1];

                        function B(t) {
                            if ((0, c.isPlainObject)(t)) {
                                var r = Object.keys(t),
                                    i = {};
                                r.forEach((function(r) {
                                    var o = t[r];
                                    (0, c.isPlainObject)(e[r]) && (0, c.isPlainObject)(o) && (o = Object.assign({}, e[r], o));
                                    try {
                                        i[r] = n[r] = o
                                    } catch (e) {
                                        (0, c.logWarn)("Cannot set config for property ".concat(r, " : "), e)
                                    }
                                })), j(i)
                            } else(0, c.logError)("setConfig options must be an object")
                        }

                        function k(e, n) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = n;
                            if ("string" != typeof e && (i = e, e = m, t = n || {}), "function" == typeof i) {
                                var o = {
                                    topic: e,
                                    callback: i
                                };
                                return d.push(o), t.init && i(e === m ? A() : (0, r.Z)({}, e, A(e))),
                                    function() {
                                        d.splice(d.indexOf(o), 1)
                                    }
                            }(0, c.logError)("listener must be a function")
                        }

                        function j(e) {
                            var n = Object.keys(e);
                            d.filter((function(e) {
                                return (0, u.q9)(n, e.topic)
                            })).forEach((function(n) {
                                n.callback((0, r.Z)({}, n.topic, e[n.topic]))
                            })), d.filter((function(e) {
                                return e.topic === m
                            })).forEach((function(n) {
                                return n.callback(e)
                            }))
                        }

                        function U(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            try {
                                r(e), e.bidders.forEach((function(r) {
                                    t[r] || (t[r] = {}), Object.keys(e.config).forEach((function(i) {
                                        var o = e.config[i];
                                        if ((0, c.isPlainObject)(o)) {
                                            var a = n ? c.mergeDeep : Object.assign;
                                            t[r][i] = a({}, t[r][i] || {}, o)
                                        } else t[r][i] = o
                                    }))
                                }))
                            } catch (e) {
                                (0, c.logError)(e)
                            }

                            function r(e) {
                                if (!(0, c.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!(0, c.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object"
                            }
                        }

                        function _(e, n) {
                            g = e;
                            try {
                                return n()
                            } finally {
                                R()
                            }
                        }

                        function R() {
                            g = null
                        }
                        return b(), {
                            getCurrentBidder: function() {
                                return g
                            },
                            resetBidder: R,
                            getConfig: A,
                            getAnyConfig: C,
                            readConfig: O,
                            readAnyConfig: S,
                            setConfig: B,
                            mergeConfig: function(e) {
                                if ((0, c.isPlainObject)(e)) {
                                    var n = (0, c.mergeDeep)(y(), e);
                                    return B(function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {};
                                            n % 2 ? f(Object(t), !0).forEach((function(n) {
                                                (0, r.Z)(e, n, t[n])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(n) {
                                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                            }))
                                        }
                                        return e
                                    }({}, n)), n
                                }(0, c.logError)("mergeConfig input must be an object")
                            },
                            setDefaults: function(t) {
                                (0, c.isPlainObject)(e) ? (Object.assign(e, t), Object.assign(n, t)) : (0, c.logError)("defaults must be an object")
                            },
                            resetConfig: b,
                            runWithBidder: _,
                            callbackWithBidder: function(e) {
                                return function(n) {
                                    return function() {
                                        if ("function" == typeof n) {
                                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                            return _(e, c.bind.call.apply(c.bind, [n, this].concat(r)))
                                        }(0, c.logWarn)("config.callbackWithBidder callback is not a function")
                                    }
                                }
                            },
                            setBidderConfig: U,
                            getBidderConfig: function() {
                                return t
                            },
                            mergeBidderConfig: function(e) {
                                return U(e, !0)
                            }
                        }
                    }()
                },
                56463: function(e, n, t) {
                    t.d(n, {
                        D: function() {
                            return f
                        },
                        t: function() {
                            return g
                        }
                    });
                    var r = t(34614),
                        i = t(64358),
                        o = t(3193),
                        a = {
                            buckets: [{
                                max: 5,
                                increment: .5
                            }]
                        },
                        u = {
                            buckets: [{
                                max: 20,
                                increment: .1
                            }]
                        },
                        c = {
                            buckets: [{
                                max: 20,
                                increment: .01
                            }]
                        },
                        s = {
                            buckets: [{
                                max: 3,
                                increment: .01
                            }, {
                                max: 8,
                                increment: .05
                            }, {
                                max: 20,
                                increment: .5
                            }]
                        },
                        d = {
                            buckets: [{
                                max: 5,
                                increment: .05
                            }, {
                                max: 10,
                                increment: .1
                            }, {
                                max: 20,
                                increment: .5
                            }]
                        };

                    function f(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            r = parseFloat(e);
                        return isNaN(r) && (r = ""), {
                            low: "" === r ? "" : l(e, a, t),
                            med: "" === r ? "" : l(e, u, t),
                            high: "" === r ? "" : l(e, c, t),
                            auto: "" === r ? "" : l(e, d, t),
                            dense: "" === r ? "" : l(e, s, t),
                            custom: "" === r ? "" : l(e, n, t)
                        }
                    }

                    function l(e, n, t) {
                        var a = "";
                        if (!g(n)) return a;
                        var u = n.buckets.reduce((function(e, n) {
                                return e.max > n.max ? e : n
                            }), {
                                max: 0
                            }),
                            c = 0,
                            s = (0, r.sE)(n.buckets, (function(n) {
                                if (e > u.max * t) {
                                    var r = n.precision;
                                    void 0 === r && (r = 2), a = (n.max * t).toFixed(r)
                                } else {
                                    if (e <= n.max * t && e >= c * t) return n.min = c, n;
                                    c = n.max
                                }
                            }));
                        return s && (a = function(e, n, t) {
                            var r = void 0 !== n.precision ? n.precision : 2,
                                a = n.increment * t,
                                u = n.min * t,
                                c = Math.floor,
                                s = o.vc.getConfig("cpmRoundingFunction");
                            "function" == typeof s && (c = s);
                            var d, f, l = Math.pow(10, r + 2),
                                g = (e * l - u * l) / (a * l);
                            try {
                                d = c(g) * a + u
                            } catch (e) {
                                f = !0
                            }(f || "number" != typeof d) && ((0, i.logWarn)("Invalid rounding function passed in config"), d = Math.floor(g) * a + u);
                            return (d = Number(d.toFixed(10))).toFixed(r)
                        }(e, s, t)), a
                    }

                    function g(e) {
                        if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                        var n = !0;
                        return e.buckets.forEach((function(e) {
                            e.max && e.increment || (n = !1)
                        })), n
                    }
                },
                53777: function(e, n, t) {
                    t.d(n, {
                        Jc: function() {
                            return d
                        },
                        dF: function() {
                            return v
                        }
                    });
                    var r = t(3193),
                        i = t(92797),
                        o = t(78640),
                        a = t(64358),
                        u = t(69626),
                        c = t(55730),
                        s = t(68792),
                        d = "__pbjs_debugging__";

                    function f() {
                        return (0, o.R)().installedModules.includes("debugging")
                    }

                    function l(e) {
                        return new s.Z((function(n) {
                            (0, c.B)(e, "debugging", n)
                        }))
                    }

                    function g() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.alreadyInstalled,
                            t = void 0 === n ? f : n,
                            c = e.script,
                            g = void 0 === c ? l : c,
                            p = null;
                        return function() {
                            return null == p && (p = new s.Z((function(e, n) {
                                setTimeout((function() {
                                    if (t()) e();
                                    else {
                                        var c = "https://cdn.jsdelivr.net/npm/prebid.js@7.19.0/dist/debugging-standalone.js";
                                        (0, a.logMessage)('Debugging module not installed, loading it from "'.concat(c, '"...')), (0, o.R)()._installDebugging = !0, g(c).then((function() {
                                            (0, o.R)()._installDebugging({
                                                DEBUG_KEY: d,
                                                hook: i.z3,
                                                config: r.vc,
                                                createBid: u.m,
                                                logger: (0, a.prefixLog)("DEBUG:")
                                            })
                                        })).then(e, n)
                                    }
                                }))
                            }))), p
                        }
                    }
                    var p = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.load,
                            t = void 0 === n ? g() : n,
                            r = e.hook,
                            o = void 0 === r ? (0, i.v5)("requestBids") : r,
                            a = null,
                            u = !1;

                        function c(e) {
                            for (var n = this, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                            return (a || s.Z.resolve()).then((function() {
                                return e.apply(n, r)
                            }))
                        }

                        function d() {
                            u || (a = t(), o.before(c, 99), u = !0)
                        }

                        function f() {
                            o.getHooks({
                                hook: c
                            }).remove(), u = !1
                        }

                        function l() {
                            a = null, f()
                        }
                        return {
                            enable: d,
                            disable: f,
                            reset: l
                        }
                    }();
                    p.reset;

                    function v() {
                        var e = null;
                        try {
                            e = window.sessionStorage
                        } catch (e) {}
                        if (null !== e) {
                            var n = p,
                                t = null;
                            try {
                                t = e.getItem(d)
                            } catch (e) {}
                            null !== t && n.enable()
                        }
                    }
                    r.vc.getConfig("debugging", (function(e) {
                        var n = e.debugging;
                        null != n && n.enabled ? p.enable() : p.disable()
                    }))
                },
                52021: function(e, n, t) {
                    t.d(n, {
                        S1: function() {
                            return l
                        },
                        j8: function() {
                            return p
                        },
                        on: function() {
                            return f
                        },
                        vw: function() {
                            return g
                        }
                    });
                    var r = t(64358),
                        i = t(5644),
                        o = Array.prototype.slice,
                        a = Array.prototype.push,
                        u = r._map(i.FP, (function(e) {
                            return e
                        })),
                        c = i.aI,
                        s = [],
                        d = function() {
                            var e = {},
                                n = {};

                            function t(n, t) {
                                r.logMessage("Emitting event for: " + n);
                                var i = t[0] || {},
                                    o = i[c[n]],
                                    u = e[n] || {
                                        que: []
                                    },
                                    d = r._map(u, (function(e, n) {
                                        return n
                                    })),
                                    f = [];
                                s.push({
                                    eventType: n,
                                    args: i,
                                    id: o,
                                    elapsedTime: r.getPerformanceNow()
                                }), o && r.contains(d, o) && a.apply(f, u[o].que), a.apply(f, u.que), r._each(f, (function(e) {
                                    if (e) try {
                                        e.apply(null, t)
                                    } catch (e) {
                                        r.logError("Error executing handler:", "events.js", e)
                                    }
                                }))
                            }
                            return n.on = function(n, t, i) {
                                if (function(e) {
                                        return r.contains(u, e)
                                    }(n)) {
                                    var o = e[n] || {
                                        que: []
                                    };
                                    i ? (o[i] = o[i] || {
                                        que: []
                                    }, o[i].que.push(t)) : o.que.push(t), e[n] = o
                                } else r.logError("Wrong event name : " + n + " Valid event names :" + u)
                            }, n.emit = function(e) {
                                var n = o.call(arguments, 1);
                                t(e, n)
                            }, n.off = function(n, t, i) {
                                var o = e[n];
                                r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? r._each(o[i].que, (function(e) {
                                    var n = o[i].que;
                                    e === t && n.splice(n.indexOf(e), 1)
                                })) : r._each(o.que, (function(e) {
                                    var n = o.que;
                                    e === t && n.splice(n.indexOf(e), 1)
                                })), e[n] = o)
                            }, n.get = function() {
                                return e
                            }, n.getEvents = function() {
                                var e = [];
                                return r._each(s, (function(n) {
                                    var t = Object.assign({}, n);
                                    e.push(t)
                                })), e
                            }, n
                        }();
                    r._setEventEmitter(d.emit.bind(d));
                    var f = d.on,
                        l = d.off,
                        g = (d.get, d.getEvents),
                        p = d.emit
                },
                92797: function(e, n, t) {
                    t.d(n, {
                        Bx: function() {
                            return p
                        },
                        Cd: function() {
                            return s
                        },
                        IF: function() {
                            return v
                        },
                        bA: function() {
                            return g
                        },
                        o0: function() {
                            return f
                        },
                        v5: function() {
                            return d
                        },
                        z3: function() {
                            return u
                        }
                    });
                    var r = t(89062),
                        i = t(81432),
                        o = t.n(i),
                        a = t(68792),
                        u = o()({
                            ready: o().SYNC | o().ASYNC | o().QUEUE
                        }),
                        c = (0, a.P)();
                    u.ready = function() {
                        var e = u.ready;
                        return function() {
                            try {
                                return e.apply(u, arguments)
                            } finally {
                                c.resolve()
                            }
                        }
                    }();
                    var s = c.promise,
                        d = u.get;

                    function f(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                            r = e.getHooks({
                                hook: n
                            });
                        0 === r.length && e.before(n, t)
                    }
                    var l = {};

                    function g(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = t.postInstallAllowed,
                            o = void 0 !== i && i;
                        u("async", (function(t) {
                            t.forEach((function(e) {
                                return n.apply(void 0, (0, r.Z)(e))
                            })), o && (l[e] = n)
                        }), e)([])
                    }

                    function p(e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                        var i = l[e];
                        if (i) return i.apply(void 0, t);
                        d(e).before((function(e, n) {
                            n.push(t), e(n)
                        }))
                    }

                    function v(e, n) {
                        return Object.defineProperties(n, Object.fromEntries(["before", "after", "getHooks", "removeAll"].map((function(n) {
                            return [n, {
                                get: function() {
                                    return e[n]
                                }
                            }]
                        })))), n
                    }
                },
                24679: function(e, n, t) {
                    t.d(n, {
                        B5: function() {
                            return r
                        },
                        Mk: function() {
                            return o
                        },
                        Oh: function() {
                            return a
                        },
                        pX: function() {
                            return i
                        }
                    });
                    var r = "native",
                        i = "video",
                        o = "banner",
                        a = "adpod"
                },
                70059: function(e, n, t) {
                    t.d(n, {
                        Fb: function() {
                            return B
                        },
                        JL: function() {
                            return x
                        },
                        Sg: function() {
                            return v
                        },
                        Ur: function() {
                            return R
                        },
                        e6: function() {
                            return _
                        },
                        eK: function() {
                            return D
                        },
                        lY: function() {
                            return F
                        },
                        r4: function() {
                            return j
                        },
                        xc: function() {
                            return h
                        }
                    });
                    var r = t(93324),
                        i = t(4942),
                        o = t(20265),
                        a = t(64358),
                        u = t(34614),
                        c = t(78653),
                        s = t(5644),
                        d = t(24679);

                    function f(e, n) {
                        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!t) {
                            if (Array.isArray(e) || (t = function(e, n) {
                                    if (!e) return;
                                    if ("string" == typeof e) return l(e, n);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === t && e.constructor && (t = e.constructor.name);
                                    if ("Map" === t || "Set" === t) return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, n)
                                }(e)) || n && e && "number" == typeof e.length) {
                                t && (e = t);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                t = t.call(e)
                            },
                            n: function() {
                                var e = t.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == t.return || t.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function l(e, n) {
                        (null == n || n > e.length) && (n = e.length);
                        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                        return r
                    }

                    function g(e, n) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n && (r = r.filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            }))), t.push.apply(t, r)
                        }
                        return t
                    }

                    function p(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? g(Object(t), !0).forEach((function(n) {
                                (0, i.Z)(e, n, t[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                            }))
                        }
                        return e
                    }
                    var v = [],
                        h = Object.keys(s.FY).map((function(e) {
                            return s.FY[e]
                        })),
                        m = {
                            image: {
                                ortb: {
                                    ver: "1.2",
                                    assets: [{
                                        required: 1,
                                        id: 1,
                                        img: {
                                            type: 3,
                                            wmin: 100,
                                            hmin: 100
                                        }
                                    }, {
                                        required: 1,
                                        id: 2,
                                        title: {
                                            len: 140
                                        }
                                    }, {
                                        required: 1,
                                        id: 3,
                                        data: {
                                            type: 1
                                        }
                                    }, {
                                        required: 0,
                                        id: 4,
                                        data: {
                                            type: 2
                                        }
                                    }, {
                                        required: 0,
                                        id: 5,
                                        img: {
                                            type: 1,
                                            wmin: 20,
                                            hmin: 20
                                        }
                                    }]
                                },
                                image: {
                                    required: !0
                                },
                                title: {
                                    required: !0
                                },
                                sponsoredBy: {
                                    required: !0
                                },
                                clickUrl: {
                                    required: !0
                                },
                                body: {
                                    required: !1
                                },
                                icon: {
                                    required: !1
                                }
                            }
                        },
                        b = s.s$,
                        y = s.oF,
                        E = s.V1,
                        w = s.zA,
                        C = s.FY,
                        A = L(E),
                        T = L(b),
                        I = {
                            img: 1,
                            js: 2,
                            1: "img",
                            2: "js"
                        },
                        O = 1;

                    function S(e) {
                        if (e && e.type && function(e) {
                                if (!e || !(0, u.q9)(Object.keys(m), e)) return (0, a.logError)("".concat(e, " nativeParam is not supported")), !1;
                                return !0
                            }(e.type) && (e = m[e.type]), !e || !e.ortb || k(e.ortb)) return e
                    }

                    function B(e) {
                        e.forEach((function(e) {
                            var n = e.nativeParams || (0, o.Z)(e, "mediaTypes.native");
                            n && (e.nativeParams = S(n)), e.nativeParams && (e.nativeOrtbRequest = e.nativeParams.ortb || function(e) {
                                if (!e && !(0, a.isPlainObject)(e)) return void(0, a.logError)("Native assets object is empty or not an object: ", e);
                                var n = {
                                    ver: "1.2",
                                    assets: []
                                };
                                for (var t in e)
                                    if (!w.includes(t))
                                        if (C.hasOwnProperty(t)) {
                                            var r = e[t],
                                                i = 0;
                                            r.required && (0, a.isBoolean)(r.required) && (i = Number(r.required));
                                            var o = {
                                                id: n.assets.length,
                                                required: i
                                            };
                                            if (t in E) o.data = {
                                                type: b[E[t]]
                                            }, r.len && (o.data.len = r.len);
                                            else if ("icon" === t || "image" === t) {
                                                if (o.img = {
                                                        type: "icon" === t ? y.ICON : y.MAIN
                                                    }, r.aspect_ratios)
                                                    if ((0, a.isArray)(r.aspect_ratios))
                                                        if (r.aspect_ratios.length) {
                                                            var u = r.aspect_ratios[0],
                                                                c = u.min_width,
                                                                s = u.min_height;
                                                            (0, a.isInteger)(c) && (0, a.isInteger)(s) ? (o.img.wmin = c, o.img.hmin = s) : (0, a.logError)("image.aspect_ratios min_width or min_height are invalid: ", c, s);
                                                            var d = r.aspect_ratios.filter((function(e) {
                                                                return e.ratio_width && e.ratio_height
                                                            })).map((function(e) {
                                                                return "".concat(e.ratio_width, ":").concat(e.ratio_height)
                                                            }));
                                                            d.length > 0 && (o.img.ext = {
                                                                aspectratios: d
                                                            })
                                                        } else(0, a.logError)("image.aspect_ratios was passed, but it's empty:", r.aspect_ratios);
                                                else(0, a.logError)("image.aspect_ratios was passed, but it's not a an array:", r.aspect_ratios);
                                                r.sizes && (2 === r.sizes.length && (0, a.isInteger)(r.sizes[0]) && (0, a.isInteger)(r.sizes[1]) ? (o.img.w = r.sizes[0], o.img.h = r.sizes[1], delete o.img.hmin, delete o.img.wmin) : (0, a.logError)("image.sizes was passed, but its value is not an array of integers:", r.sizes))
                                            } else "title" === t ? o.title = {
                                                len: r.len || 140
                                            } : "ext" === t && (o.ext = r, delete o.required);
                                            n.assets.push(o)
                                        } else(0, a.logError)("Unrecognized native asset code: ".concat(t, ". Asset will be ignored."));
                                return n
                            }(e.nativeParams))
                        }))
                    }

                    function k(e) {
                        var n = e.assets;
                        if (!Array.isArray(n) || 0 === n.length) return (0, a.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ", n), !1;
                        var t = n.map((function(e) {
                            return e.id
                        }));
                        return n.length !== new Set(t).size || t.some((function(e) {
                            return e !== parseInt(e, 10)
                        })) ? ((0, a.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"), !1) : e.hasOwnProperty("eventtrackers") && !Array.isArray(e.eventtrackers) ? ((0, a.logError)("ortb.eventtrackers is not an array. Eventtrackers: ", e.eventtrackers), !1) : n.every((function(e) {
                            return function(e) {
                                if (!(0, a.isPlainObject)(e)) return (0, a.logError)("asset must be an object. Provided asset: ", e), !1;
                                if (e.img) {
                                    if (!(0, a.isNumber)(e.img.w) && !(0, a.isNumber)(e.img.wmin)) return (0, a.logError)("for img asset there must be 'w' or 'wmin' property"), !1;
                                    if (!(0, a.isNumber)(e.img.h) && !(0, a.isNumber)(e.img.hmin)) return (0, a.logError)("for img asset there must be 'h' or 'hmin' property"), !1
                                } else if (e.title) {
                                    if (!(0, a.isNumber)(e.title.len)) return (0, a.logError)("for title asset there must be 'len' property defined"), !1
                                } else if (e.data) {
                                    if (!(0, a.isNumber)(e.data.type)) return (0, a.logError)("for data asset 'type' property must be a number"), !1
                                } else if (e.video && !(Array.isArray(e.video.mimes) && Array.isArray(e.video.protocols) && (0, a.isNumber)(e.video.minduration) && (0, a.isNumber)(e.video.maxduration))) return (0, a.logError)("video asset is not properly configured"), !1;
                                return !0
                            }(e)
                        }))
                    }

                    function j(e) {
                        var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.index,
                            i = void 0 === r ? c.K.index : r,
                            o = i.getAdUnit(e);
                        if (!o) return !1;
                        var a = o.nativeOrtbRequest,
                            u = (null === (n = e.native) || void 0 === n ? void 0 : n.ortb) || z(e.native, a);
                        return U(u, a)
                    }

                    function U(e, n) {
                        if (!(0, o.Z)(e, "link.url")) return (0, a.logError)("native response doesn't have 'link' property. Ortb response: ", e), !1;
                        var t = n.assets.filter((function(e) {
                                return 1 === e.required
                            })).map((function(e) {
                                return e.id
                            })),
                            r = e.assets.map((function(e) {
                                return e.id
                            })),
                            i = t.every((function(e) {
                                return (0, u.q9)(r, e)
                            }));
                        return i || (0, a.logError)("didn't receive a bid with all required assets. Required ids: ".concat(t, ", but received ids in response: ").concat(r)), i
                    }

                    function _(e, n) {
                        var t = n.native.ortb || W(n.native);
                        return "click" === e.action ? function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).fetchURL,
                                r = void 0 === t ? a.triggerPixel : t;
                            if (n) {
                                var i, o = (e.assets || []).filter((function(e) {
                                        return e.link
                                    })).reduce((function(e, n) {
                                        return e[n.id] = n.link, e
                                    }), {}),
                                    u = (null === (i = e.link) || void 0 === i ? void 0 : i.clicktrackers) || [],
                                    c = o[n],
                                    s = u;
                                c && (s = c.clicktrackers || []), s.forEach((function(e) {
                                    return r(e)
                                }))
                            } else {
                                var d;
                                ((null === (d = e.link) || void 0 === d ? void 0 : d.clicktrackers) || []).forEach((function(e) {
                                    return r(e)
                                }))
                            }
                        }(t, null == e ? void 0 : e.assetId) : function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = n.runMarkup,
                                r = void 0 === t ? function(e) {
                                    return (0, a.insertHtmlIntoIframe)(e)
                                } : t,
                                i = n.fetchURL,
                                o = void 0 === i ? a.triggerPixel : i,
                                u = (e.eventtrackers || []).filter((function(e) {
                                    return e.event === O
                                })).reduce((function(e, n) {
                                    return I.hasOwnProperty(n.method) && e[I[n.method]].push(n.url), e
                                }), {
                                    img: [],
                                    js: []
                                }),
                                c = u.img,
                                s = u.js;
                            e.imptrackers && (c = c.concat(e.imptrackers));
                            c.forEach((function(e) {
                                return o(e)
                            })), s = s.map((function(e) {
                                return '<script async src="'.concat(e, '"><\/script>')
                            })), e.jstracker && (s = s.concat([e.jstracker]));
                            s.length && r(s.join("\n"))
                        }(t), e.action
                    }

                    function R(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.index,
                            r = void 0 === t ? c.K.index : t,
                            i = {},
                            a = r.getAdUnit(e);
                        (0, o.Z)(a, "nativeParams.rendererUrl") ? e.native.rendererUrl = Z(a.nativeParams.rendererUrl): (0, o.Z)(a, "nativeParams.adTemplate") && (e.native.adTemplate = Z(a.nativeParams.adTemplate));
                        var u = !1 !== (0, o.Z)(a, "nativeParams.sendTargetingKeys"),
                            s = N(a),
                            d = p(p({}, e.native), e.native.ext);
                        return delete d.ext, Object.keys(d).forEach((function(n) {
                            var t = s[n],
                                r = Z(e.native[n]) || Z((0, o.Z)(e, "native.ext.".concat(n)));
                            if ("adTemplate" !== n && t && r) {
                                var c = (0, o.Z)(a, "nativeParams.".concat(n, ".sendId"));
                                if ("boolean" != typeof c && (c = (0, o.Z)(a, "nativeParams.ext.".concat(n, ".sendId"))), c) r = "".concat(t, ":").concat(e.adId);
                                var d = (0, o.Z)(a, "nativeParams.".concat(n, ".sendTargetingKeys"));
                                "boolean" != typeof d && (d = (0, o.Z)(a, "nativeParams.ext.".concat(n, ".sendTargetingKeys"))), ("boolean" == typeof d ? d : u) && (i[t] = r)
                            }
                        })), i
                    }
                    var P = function(e) {
                        var n;
                        return null === (n = c.K.index.getAdUnit(e)) || void 0 === n ? void 0 : n.nativeOrtbRequest
                    };

                    function q(e, n, t) {
                        var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = i.getNativeReq,
                            a = void 0 === o ? P : o,
                            u = {
                                message: "assetResponse",
                                adId: e.adId
                            },
                            c = a(n),
                            d = n.native,
                            f = null === (r = n.native) || void 0 === r ? void 0 : r.ortb,
                            l = {};
                        return c && f && (l = K(f, c), d = p(p({}, n.native), l)), n.native.ortb && (u.ortb = n.native.ortb), u.assets = [], (null == t ? Object.keys(d) : t).forEach((function(e) {
                            if ("adTemplate" === e && d[e]) u.adTemplate = Z(d[e]);
                            else if ("rendererUrl" === e && d[e]) u.rendererUrl = Z(d[e]);
                            else if ("ext" === e) Object.keys(d[e]).forEach((function(n) {
                                if (d[e][n]) {
                                    var t = Z(d[e][n]);
                                    u.assets.push({
                                        key: n,
                                        value: t
                                    })
                                }
                            }));
                            else if (d[e] && s.FY.hasOwnProperty(e)) {
                                var n = Z(d[e]);
                                u.assets.push({
                                    key: e,
                                    value: n
                                })
                            }
                        })), u
                    }

                    function D(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.getNativeReq,
                            i = void 0 === r ? P : r,
                            o = e.assets.map((function(e) {
                                return (0, a.getKeyByValue)(s.FY, e)
                            }));
                        return q(e, n, o, {
                            getNativeReq: i
                        })
                    }

                    function x(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.getNativeReq,
                            i = void 0 === r ? P : r;
                        return q(e, n, null, {
                            getNativeReq: i
                        })
                    }

                    function Z(e) {
                        return (null == e ? void 0 : e.url) || e
                    }

                    function N(e) {
                        var n = {};
                        return (0, o.Z)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach((function(e) {
                            n[e] = "hb_native_".concat(e)
                        })), p(p({}, s.FY), n)
                    }

                    function M(e) {
                        if (k(e)) {
                            var n, t = {},
                                r = f(e.assets);
                            try {
                                var i = function() {
                                    var e = n.value;
                                    if (e.title) {
                                        var r = {
                                            required: !!e.required && Boolean(e.required),
                                            len: e.title.len
                                        };
                                        t.title = r
                                    } else if (e.img) {
                                        var i = {
                                            required: !!e.required && Boolean(e.required)
                                        };
                                        e.img.w && e.img.h ? i.sizes = [e.img.w, e.img.h] : e.img.wmin && e.img.hmin && (i.aspect_ratios = {
                                            min_width: e.img.wmin,
                                            min_height: e.img.hmin,
                                            ratio_width: e.img.wmin,
                                            ratio_height: e.img.hmin
                                        }), e.img.type === y.MAIN ? t.image = i : t.icon = i
                                    } else if (e.data) {
                                        var o = Object.keys(b).find((function(n) {
                                                return b[n] === e.data.type
                                            })),
                                            a = Object.keys(E).find((function(e) {
                                                return E[e] === o
                                            }));
                                        t[a] = {
                                            required: !!e.required && Boolean(e.required)
                                        }, e.data.len && (t[a].len = e.data.len)
                                    }
                                };
                                for (r.s(); !(n = r.n()).done;) i()
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            return t
                        }
                    }

                    function F(e) {
                        if (!e || !(0, a.isArray)(e)) return e;
                        if (!e.some((function(e) {
                                var n;
                                return null === (n = ((null == e ? void 0 : e.mediaTypes) || {})[d.B5]) || void 0 === n ? void 0 : n.ortb
                            }))) return e;
                        var n, t = (0, a.deepClone)(e),
                            r = f(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                i.mediaTypes && i.mediaTypes[d.B5] && i.mediaTypes[d.B5].ortb && (i.mediaTypes[d.B5] = Object.assign((0, a.pick)(i.mediaTypes[d.B5], w), M(i.mediaTypes[d.B5].ortb)), i.nativeParams = S(i.mediaTypes[d.B5]))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return t
                    }

                    function W(e) {
                        var n = {
                            link: {},
                            eventtrackers: []
                        };
                        return Object.entries(e).forEach((function(e) {
                            var t = (0, r.Z)(e, 2),
                                i = t[0],
                                o = t[1];
                            switch (i) {
                                case "clickUrl":
                                    n.link.url = o;
                                    break;
                                case "clickTrackers":
                                    n.link.clicktrackers = Array.isArray(o) ? o : [o];
                                    break;
                                case "impressionTrackers":
                                    (Array.isArray(o) ? o : [o]).forEach((function(e) {
                                        n.eventtrackers.push({
                                            event: O,
                                            method: I.img,
                                            url: e
                                        })
                                    }));
                                    break;
                                case "javascriptTrackers":
                                    n.jstracker = Array.isArray(o) ? o.join("") : o
                            }
                        })), n
                    }

                    function z(e, n) {
                        var t = p(p({}, W(e)), {}, {
                            assets: []
                        });

                        function r(e, r) {
                            var i = n.assets.find(e);
                            null != i && (r(i = (0, a.deepClone)(i)), t.assets.push(i))
                        }
                        return Object.keys(e).filter((function(n) {
                            return !!e[n]
                        })).forEach((function(n) {
                            var t = e[n];
                            switch (n) {
                                case "title":
                                    r((function(e) {
                                        return null != e.title
                                    }), (function(e) {
                                        e.title = {
                                            text: t
                                        }
                                    }));
                                    break;
                                case "image":
                                case "icon":
                                    var i = "image" === n ? y.MAIN : y.ICON;
                                    r((function(e) {
                                        return null != e.img && e.img.type === i
                                    }), (function(e) {
                                        e.img = {
                                            url: t
                                        }
                                    }));
                                    break;
                                default:
                                    n in E && r((function(e) {
                                        return null != e.data && e.data.type === b[E[n]]
                                    }), (function(e) {
                                        e.data = {
                                            value: t
                                        }
                                    }))
                            }
                        })), t
                    }

                    function K(e, n) {
                        var t = {},
                            r = (null == n ? void 0 : n.assets) || [];
                        t.clickUrl = e.link.url, t.privacyLink = e.privacy;
                        var i, o = f((null == e ? void 0 : e.assets) || []);
                        try {
                            var a = function() {
                                var e = i.value,
                                    n = r.find((function(n) {
                                        return e.id === n.id
                                    }));
                                e.title ? t.title = e.title.text : e.img ? t[n.img.type === y.MAIN ? "image" : "icon"] = e.img.url : e.data && (t[A[T[n.data.type]]] = e.data.value)
                            };
                            for (o.s(); !(i = o.n()).done;) a()
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return t
                    }

                    function L(e) {
                        var n = {};
                        for (var t in e) n[e[t]] = t;
                        return n
                    }
                },
                34614: function(e, n, t) {
                    function r(e, n, t) {
                        return e && e.includes(n, t) || !1
                    }

                    function i() {
                        return Array.from.apply(Array, arguments)
                    }

                    function o(e, n, t) {
                        return e && e.find(n, t)
                    }

                    function a(e, n, t) {
                        return e && e.findIndex(n, t)
                    }
                    t.d(n, {
                        Oc: function() {
                            return i
                        },
                        cx: function() {
                            return a
                        },
                        q9: function() {
                            return r
                        },
                        sE: function() {
                            return o
                        }
                    })
                },
                23866: function(e, n, t) {
                    t.d(n, {
                        zh: function() {
                            return ie
                        },
                        O5: function() {
                            return ae
                        },
                        ew: function() {
                            return se
                        }
                    });
                    var r = t(93324),
                        i = t(4942),
                        o = t(78640),
                        a = t(64358),
                        u = t(20265),
                        c = t(96475),
                        s = t(52021),
                        d = t(70059),
                        f = t(5644),
                        l = t(78653),
                        g = t(34614),
                        p = t(35706),
                        v = t(3193),
                        h = f.FP,
                        m = h.AD_RENDER_FAILED,
                        b = h.AD_RENDER_SUCCEEDED;

                    function y(e) {
                        var n = e.reason,
                            t = e.message,
                            r = e.bid,
                            i = e.id,
                            o = {
                                reason: n,
                                message: t
                            };
                        r && (o.bid = r), i && (o.adId = i), (0, a.logError)(t), s.j8(m, o)
                    }

                    function E(e) {
                        var n = e.doc,
                            t = e.bid,
                            r = e.id,
                            i = {
                                doc: n
                            };
                        t && (i.bid = t), r && (i.adId = r), s.j8(b, i)
                    }
                    var w = f.FP.BID_WON,
                        C = f.FP.STALE_RENDER,
                        A = new WeakSet,
                        T = {
                            "Prebid Request": function(e, n, t) {
                                if (null == t) return void y({
                                    reason: f.q_.CANNOT_FIND_AD,
                                    message: "Cannot find ad '".concat(n.adId, "' for cross-origin render request"),
                                    id: n.adId
                                });
                                if (t.status === f.UE.fe && ((0, a.logWarn)("Ad id ".concat(t.adId, " has been rendered before")), s.j8(C, t), (0, u.Z)(v.vc.getConfig("auctionOptions"), "suppressStaleRender"))) return;
                                try {
                                    ! function(e, n) {
                                        var t = e.adId,
                                            r = e.ad,
                                            i = e.adUrl,
                                            o = e.width,
                                            u = e.height,
                                            c = e.renderer,
                                            s = e.cpm,
                                            d = e.originalCpm;
                                        (0, p.Pd)(c) ? (0, p._U)(c, e) : t && (O(e), n({
                                            message: "Prebid Response",
                                            ad: (0, a.replaceAuctionPrice)(r, d || s),
                                            adUrl: (0, a.replaceAuctionPrice)(i, d || s),
                                            adId: t,
                                            width: o,
                                            height: u
                                        }))
                                    }(t, e)
                                } catch (e) {
                                    return void y({
                                        reason: f.q_.EXCEPTION,
                                        message: e.message,
                                        id: n.adId,
                                        bid: t
                                    })
                                }
                                l.K.addWinningBid(t), s.j8(w, t)
                            },
                            "Prebid Event": function(e, n, t) {
                                if (null == t) return void(0, a.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
                                if (t.status !== f.UE.fe) return void(0, a.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId, "'"));
                                switch (n.event) {
                                    case f.FP.AD_RENDER_FAILED:
                                        y({
                                            bid: t,
                                            id: n.adId,
                                            reason: n.info.reason,
                                            message: n.info.message
                                        });
                                        break;
                                    case f.FP.AD_RENDER_SUCCEEDED:
                                        E({
                                            doc: null,
                                            bid: t,
                                            id: n.adId
                                        });
                                        break;
                                    default:
                                        (0, a.logError)("Received x-origin event request for unsupported event: '".concat(n.event, "' (adId: '").concat(n.adId, "')"))
                                }
                            }
                        };

                    function I(e) {
                        var n = e.message ? "message" : "data",
                            t = {};
                        try {
                            t = JSON.parse(e[n])
                        } catch (e) {
                            return
                        }
                        if (t && t.adId && t.message) {
                            var r = (0, g.sE)(l.K.getBidsReceived(), (function(e) {
                                return e.adId === t.adId
                            }));
                            T.hasOwnProperty(t.message) && T[t.message](function(e) {
                                return null == e.origin && 0 === e.ports.length ? function() {
                                    var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                    throw (0, a.logError)(e), new Error(e)
                                } : e.ports.length > 0 ? function(n) {
                                    e.ports[0].postMessage(JSON.stringify(n))
                                } : function(n) {
                                    e.source.postMessage(JSON.stringify(n), e.origin)
                                }
                            }(e), t, r)
                        }
                    }

                    function O(e) {
                        var n = e.adId,
                            t = e.adUnitCode,
                            r = e.width,
                            i = e.height;
                        ["div", "iframe"].forEach((function(e) {
                            var o = function(e) {
                                var r = function(e, n) {
                                        return (0, a.isGptPubadsDefined)() ? function(e) {
                                            var n = (0, g.sE)(window.googletag.pubads().getSlots(), (function(n) {
                                                return (0, g.sE)(n.getTargetingKeys(), (function(t) {
                                                    return (0, g.q9)(n.getTargeting(t), e)
                                                }))
                                            }));
                                            return n ? n.getSlotElementId() : null
                                        }(e) : (0, a.isApnGetTagDefined)() ? function(e) {
                                            var n = window.apntag.getTag(e);
                                            return n && n.targetId
                                        }(n) : n
                                    }(n, t),
                                    i = document.getElementById(r);
                                return i && i.querySelector(e)
                            }(e + ':not([style*="display: none"])');
                            if (o) {
                                var u = o.style;
                                u.width = r ? r + "px" : "100%", u.height = i + "px"
                            } else(0, a.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."))
                        }))
                    }
                    Object.assign(T, {
                        "Prebid Native": function(e, n, t) {
                            if (null == t) return void(0, a.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
                            A.has(t) || (A.add(t), l.K.addWinningBid(t), s.j8(w, t));
                            switch (n.action) {
                                case "assetRequest":
                                    e((0, d.eK)(n, t));
                                    break;
                                case "allAssetRequest":
                                    e((0, d.JL)(n, t));
                                    break;
                                case "resizeNativeHeight":
                                    t.height = n.height, t.width = n.width, O(t);
                                    break;
                                default:
                                    (0, d.e6)(n, t)
                            }
                        }
                    });
                    var S = t(11974),
                        B = t(18621),
                        k = t(92797),
                        j = t(53777),
                        U = t(875),
                        _ = t(69626),
                        R = t(15164),
                        P = t(9528),
                        q = t(99128),
                        D = (0, o.R)(),
                        x = S.k_.triggerUserSyncs,
                        Z = f.FP,
                        N = Z.ADD_AD_UNITS,
                        M = Z.BID_WON,
                        F = Z.REQUEST_BIDS,
                        W = Z.SET_TARGETING,
                        z = Z.STALE_RENDER,
                        K = f.q_,
                        L = K.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                        H = K.NO_AD,
                        G = K.EXCEPTION,
                        V = K.CANNOT_FIND_AD,
                        Q = K.MISSING_DOC_OR_ADID,
                        J = {
                            bidWon: function(e) {
                                var n = l.K.getBidsRequested().map((function(e) {
                                    return e.bids.map((function(e) {
                                        return e.adUnitCode
                                    }))
                                })).reduce(a.flatten).filter(a.uniques);
                                if (!(0, a.contains)(n, e)) return void(0, a.logError)('The "' + e + '" placement is not defined.');
                                return !0
                            }
                        };

                    function Y(e, n, t) {
                        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = n, e.defaultView.frameElement.height = t)
                    }

                    function X(e, n) {
                        var t = [];
                        return (0, a.isArray)(e) && (n ? e.length === n : e.length > 0) && (e.every((function(e) {
                            return (0, a.isArrayOfNums)(e, 2)
                        })) ? t = e : (0, a.isArrayOfNums)(e, 2) && t.push(e)), t
                    }

                    function $(e) {
                        var n = (0, a.deepClone)(e),
                            t = n.mediaTypes.banner,
                            r = X(t.sizes);
                        return r.length > 0 ? (t.sizes = r, n.sizes = r) : ((0, a.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete n.mediaTypes.banner), n
                    }

                    function ee(e) {
                        var n = (0, a.deepClone)(e),
                            t = n.mediaTypes.video;
                        if (t.playerSize) {
                            var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                                i = X(t.playerSize, r);
                            i.length > 0 ? (2 === r && (0, a.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = i, n.sizes = i) : ((0, a.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete n.mediaTypes.video.playerSize)
                        }
                        return n
                    }

                    function ne(e) {
                        var n = (0, a.deepClone)(e),
                            t = n.mediaTypes.native;
                        if (t.ortb) {
                            var r = Object.keys(f.FY).filter((function(e) {
                                    return f.FY[e].includes("hb_native_")
                                })),
                                i = Object.keys(t).filter((function(e) {
                                    return r.includes(e)
                                }));
                            i.length > 0 && ((0, a.logError)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(i, " keys from request.")), i.forEach((function(e) {
                                return delete n.mediaTypes.native[e]
                            })))
                        }
                        return t.image && t.image.sizes && !Array.isArray(t.image.sizes) && ((0, a.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete n.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && ((0, a.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete n.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && ((0, a.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete n.mediaTypes.native.icon.sizes), n
                    }

                    function te(e, n) {
                        var t = (0, u.Z)(e, "mediaTypes.".concat(n, ".pos"));
                        if (!(0, a.isNumber)(t) || isNaN(t) || !isFinite(t)) {
                            var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
                            (0, a.logWarn)(r), s.j8(f.FP.AUCTION_DEBUG, {
                                type: "WARNING",
                                arguments: r
                            }), delete e.mediaTypes[n].pos
                        }
                        return e
                    }

                    function re(e) {
                        var n = function(n) {
                                return "adUnit.code '".concat(e.code, "' ").concat(n)
                            },
                            t = e.mediaTypes,
                            r = e.bids;
                        return null == r || (0, a.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0, a.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")), null) : t && 0 !== Object.keys(t).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
                            bidder: null
                        }], (0, a.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))), e) : ((0, a.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")), null) : ((0, a.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")), null)
                    }(0, j.dF)(), D.bidderSettings = D.bidderSettings || {}, D.libLoaded = !0, D.version = "v7.19.0", (0, a.logInfo)("Prebid.js v7.19.0 loaded"), D.installedModules = D.installedModules || [], D.adUnits = D.adUnits || [], D.triggerUserSyncs = x;
                    var ie = {
                        validateAdUnit: re,
                        validateBannerMediaType: $,
                        validateVideoMediaType: ee,
                        validateSizes: X
                    };
                    Object.assign(ie, {
                        validateNativeMediaType: ne
                    });
                    var oe, ae = (0, k.z3)("sync", (function(e) {
                        var n = [];
                        return e.forEach((function(e) {
                            if (null != (e = re(e))) {
                                var t, r, i, o = e.mediaTypes;
                                o.banner && (t = $(e), o.banner.hasOwnProperty("pos") && (t = te(t, "banner"))), o.video && (r = ee(t || e), o.video.hasOwnProperty("pos") && (r = te(r, "video"))), o.native && (i = ne(r || (t || e)));
                                var a = Object.assign({}, t, r, i);
                                n.push(a)
                            }
                        })), n
                    }), "checkAdUnitSetup");

                    function ue(e) {
                        var n = l.K[e]().filter(a.bind.call(a.adUnitsFilter, this, l.K.getAdUnitCodes())),
                            t = l.K.getLastAuctionId();
                        return n.map((function(e) {
                            return e.adUnitCode
                        })).filter(a.uniques).map((function(e) {
                            return n.filter((function(n) {
                                return n.auctionId === t && n.adUnitCode === e
                            }))
                        })).filter((function(e) {
                            return e && e[0] && e[0].adUnitCode
                        })).map((function(e) {
                            return (0, i.Z)({}, e[0].adUnitCode, {
                                bids: e
                            })
                        })).reduce((function(e, n) {
                            return Object.assign(e, n)
                        }), {})
                    }

                    function ce(e, n, t) {
                        var r = n.querySelector(t);
                        e.parentNode && e.parentNode === r || (0, a.insertElement)(e, n, t)
                    }
                    D.getAdserverTargetingForAdUnitCodeStr = function(e) {
                        if ((0, a.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                            var n = D.getAdserverTargetingForAdUnitCode(e);
                            return (0, a.transformAdServerTargetingObj)(n)
                        }(0, a.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                    }, D.getHighestUnusedBidResponseForAdUnitCode = function(e) {
                        if (e) {
                            var n = l.K.getAllBidsForAdUnitCode(e).filter(B.u8.isUnusedBid).filter(B.u8.isBidNotExpired);
                            return n.length ? n.reduce(a.getHighestCpm) : {}
                        }(0, a.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
                    }, D.getAdserverTargetingForAdUnitCode = function(e) {
                        return D.getAdserverTargeting(e)[e]
                    }, D.getAdserverTargeting = function(e) {
                        return (0, a.logInfo)("Invoking pbjs.getAdserverTargeting", arguments), B.q0.getAllTargeting(e)
                    }, D.getConsentMetadata = function() {
                        return (0, a.logInfo)("Invoking pbjs.getConsentMetadata"), {
                            gdpr: P.rp.getConsentMeta(),
                            usp: P.nX.getConsentMeta(),
                            coppa: !!v.vc.getConfig("coppa")
                        }
                    }, D.getNoBids = function() {
                        return (0, a.logInfo)("Invoking pbjs.getNoBids", arguments), ue("getNoBids")
                    }, D.getNoBidsForAdUnitCode = function(e) {
                        return {
                            bids: l.K.getNoBids().filter((function(n) {
                                return n.adUnitCode === e
                            }))
                        }
                    }, D.getBidResponses = function() {
                        return (0, a.logInfo)("Invoking pbjs.getBidResponses", arguments), ue("getBidsReceived")
                    }, D.getBidResponsesForAdUnitCode = function(e) {
                        return {
                            bids: l.K.getBidsReceived().filter((function(n) {
                                return n.adUnitCode === e
                            }))
                        }
                    }, D.setTargetingForGPTAsync = function(e, n) {
                        if ((0, a.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
                            var t = B.q0.getAllTargeting(e);
                            B.q0.resetPresetTargeting(e, n), B.q0.setTargetingForGPT(t, n), Object.keys(t).forEach((function(e) {
                                Object.keys(t[e]).forEach((function(n) {
                                    "hb_adid" === n && l.K.setStatusForBids(t[e][n], f.UE.CK)
                                }))
                            })), s.j8(W, t)
                        } else(0, a.logError)("window.googletag is not defined on the page")
                    }, D.setTargetingForAst = function(e) {
                        (0, a.logInfo)("Invoking pbjs.setTargetingForAn", arguments), B.q0.isApntagDefined() ? (B.q0.setTargetingForAst(e), s.j8(W, B.q0.getAllTargeting())) : (0, a.logError)("window.apntag is not defined on the page")
                    }, D.renderAd = (0, k.z3)("async", (function(e, n, t) {
                        if ((0, a.logInfo)("Invoking pbjs.renderAd", arguments), (0, a.logMessage)("Calling renderAd with adId :" + n), e && n) try {
                            var r = l.K.findBidByAdId(n);
                            if (r) {
                                var i = !0;
                                if (r && r.status === f.UE.fe && ((0, a.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), s.j8(z, r), (0, u.Z)(v.vc.getConfig("auctionOptions"), "suppressStaleRender") && (i = !1)), i) {
                                    if (r.ad = (0, a.replaceAuctionPrice)(r.ad, r.originalCpm || r.cpm), r.adUrl = (0, a.replaceAuctionPrice)(r.adUrl, r.originalCpm || r.cpm), t && t.clickThrough) {
                                        var o = t.clickThrough;
                                        r.ad = (0, a.replaceClickThrough)(r.ad, o), r.adUrl = (0, a.replaceClickThrough)(r.adUrl, o)
                                    }
                                    l.K.addWinningBid(r), s.j8(M, r);
                                    var c = r.height,
                                        d = r.width,
                                        g = r.ad,
                                        h = r.mediaType,
                                        m = r.adUrl,
                                        b = r.renderer,
                                        w = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                                    if ((0, a.insertElement)(w, e, "html"), (0, p.Pd)(b))(0, p._U)(b, r, e), ce(w, e, "html"), E({
                                        doc: e,
                                        bid: r,
                                        id: n
                                    });
                                    else if (e === document && !(0, a.inIframe)() || "video" === h) {
                                        var C = "Error trying to write ad. Ad render call ad id ".concat(n, " was prevented from writing to the main document.");
                                        y({
                                            reason: L,
                                            message: C,
                                            bid: r,
                                            id: n
                                        })
                                    } else if (g) e.write(g), e.close(), Y(e, d, c), ce(w, e, "html"), (0, a.callBurl)(r), E({
                                        doc: e,
                                        bid: r,
                                        id: n
                                    });
                                    else if (m) {
                                        var A = (0, a.createInvisibleIframe)();
                                        A.height = c, A.width = d, A.style.display = "inline", A.style.overflow = "hidden", A.src = m, (0, a.insertElement)(A, e, "body"), Y(e, d, c), ce(w, e, "html"), (0, a.callBurl)(r), E({
                                            doc: e,
                                            bid: r,
                                            id: n
                                        })
                                    } else {
                                        var T = "Error trying to write ad. No ad for bid response id: ".concat(n);
                                        y({
                                            reason: H,
                                            message: T,
                                            bid: r,
                                            id: n
                                        })
                                    }
                                }
                            } else {
                                var I = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
                                y({
                                    reason: V,
                                    message: I,
                                    id: n
                                })
                            }
                        } catch (e) {
                            var O = "Error trying to write ad Id :".concat(n, " to the page:").concat(e.message);
                            y({
                                reason: G,
                                message: O,
                                id: n
                            })
                        } else {
                            var S = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
                            y({
                                reason: Q,
                                message: S,
                                id: n
                            })
                        }
                    })), D.removeAdUnit = function(e) {
                        ((0, a.logInfo)("Invoking pbjs.removeAdUnit", arguments), e) ? ((0, a.isArray)(e) ? e : [e]).forEach((function(e) {
                            for (var n = D.adUnits.length - 1; n >= 0; n--) D.adUnits[n].code === e && D.adUnits.splice(n, 1)
                        })): D.adUnits = []
                    }, D.requestBids = (oe = (0, k.z3)("async", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.bidsBackHandler,
                            t = e.timeout,
                            i = e.adUnits,
                            o = e.adUnitCodes,
                            u = e.labels,
                            c = e.auctionId,
                            d = e.ortb2,
                            f = e.metrics;
                        s.j8(F);
                        var l = t || v.vc.getConfig("bidderTimeout");
                        (0, a.logInfo)("Invoking pbjs.requestBids", arguments);
                        var g = {
                            global: (0, a.mergeDeep)({}, v.vc.getAnyConfig("ortb2") || {}, d || {}),
                            bidder: Object.fromEntries(Object.entries(v.vc.getBidderConfig()).map((function(e) {
                                var n = (0, r.Z)(e, 2);
                                return [n[0], n[1].ortb2]
                            })).filter((function(e) {
                                var n = (0, r.Z)(e, 2);
                                return n[0], null != n[1]
                            })))
                        };
                        return se({
                            bidsBackHandler: n,
                            timeout: l,
                            adUnits: i,
                            adUnitCodes: o,
                            labels: u,
                            auctionId: c,
                            ortb2Fragments: g,
                            metrics: f
                        })
                    }), "requestBids"), (0, k.IF)(oe, (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.metrics = (0, q.V6)(), e.metrics.checkpoint("requestBids");
                        var n = e.adUnits || D.adUnits;
                        return e.adUnits = (0, a.isArray)(n) ? n.slice() : [n], oe.call(this, e)
                    })));
                    var se = (0, k.z3)("async", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.bidsBackHandler,
                            t = e.timeout,
                            r = e.adUnits,
                            i = e.adUnitCodes,
                            o = e.labels,
                            u = e.auctionId,
                            s = e.ortb2Fragments,
                            d = e.metrics,
                            f = (0, P.uV)(v.vc.getConfig("s2sConfig") || []);
                        if (r = (0, q.Bf)(d).measureTime("requestBids.validate", (function() {
                                return ae(r)
                            })), i && i.length ? r = r.filter((function(e) {
                                return (0, g.q9)(i, e.code)
                            })) : i = r && r.map((function(e) {
                                return e.code
                            })), r.forEach((function(e) {
                                var n, t, r = Object.keys(e.mediaTypes || {
                                        banner: "banner"
                                    }),
                                    i = e.bids.map((function(e) {
                                        return e.bidder
                                    })),
                                    o = P.ZP.bidderRegistry,
                                    u = i.filter((function(e) {
                                        return !f.has(e)
                                    })),
                                    s = (null === (n = e.ortb2Imp) || void 0 === n || null === (t = n.ext) || void 0 === t ? void 0 : t.tid) || (0, a.generateUUID)();
                                e.transactionId = s, (0, c.N)(e, "ortb2Imp.ext.tid", s), u.forEach((function(n) {
                                    var t = o[n],
                                        i = t && t.getSpec && t.getSpec(),
                                        u = i && i.supportedMediaTypes || ["banner"];
                                    r.some((function(e) {
                                        return (0, g.q9)(u, e)
                                    })) ? U.f.incrementBidderRequestsCounter(e.code, n) : ((0, a.logWarn)((0, a.unsupportedBidderMessage)(e, n)), e.bids = e.bids.filter((function(e) {
                                        return e.bidder !== n
                                    })))
                                })), U.f.incrementRequestsCounter(e.code)
                            })), r && 0 !== r.length) {
                            var p = l.K.createAuction({
                                    adUnits: r,
                                    adUnitCodes: i,
                                    callback: n,
                                    cbTimeout: t,
                                    labels: o,
                                    auctionId: u,
                                    ortb2Fragments: s,
                                    metrics: d
                                }),
                                h = r.length;
                            h > 15 && (0, a.logInfo)("Current auction ".concat(p.getAuctionId(), " contains ").concat(h, " adUnits."), r), i.forEach((function(e) {
                                return B.q0.setLatestAuctionForAdUnit(e, p.getAuctionId())
                            })), p.callBids()
                        } else if ((0, a.logMessage)("No adUnits configured. No bids requested."), "function" == typeof n) try {
                            n()
                        } catch (e) {
                            (0, a.logError)("Error executing bidsBackHandler", null, e)
                        }
                    }), "startAuction");
                    D.requestBids.before((function(e, n) {
                        function t(e) {
                            for (var n; n = e.shift();) n()
                        }
                        t(R.Ld), t(de), e.call(this, n)
                    }), 49), D.addAdUnits = function(e) {
                        (0, a.logInfo)("Invoking pbjs.addAdUnits", arguments), D.adUnits.push.apply(D.adUnits, (0, a.isArray)(e) ? e : [e]), s.j8(N)
                    }, D.onEvent = function(e, n, t) {
                        (0, a.logInfo)("Invoking pbjs.onEvent", arguments), (0, a.isFn)(n) ? !t || J[e].call(null, t) ? s.on(e, n, t) : (0, a.logError)('The id provided is not valid for event "' + e + '" and no handler was set.'): (0, a.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
                    }, D.offEvent = function(e, n, t) {
                        (0, a.logInfo)("Invoking pbjs.offEvent", arguments), t && !J[e].call(null, t) || s.S1(e, n, t)
                    }, D.getEvents = function() {
                        return (0, a.logInfo)("Invoking pbjs.getEvents"), s.vw()
                    }, D.registerBidAdapter = function(e, n) {
                        (0, a.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
                        try {
                            P.ZP.registerBidAdapter(e(), n)
                        } catch (e) {
                            (0, a.logError)("Error registering bidder adapter : " + e.message)
                        }
                    }, D.registerAnalyticsAdapter = function(e) {
                        (0, a.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
                        try {
                            P.ZP.registerAnalyticsAdapter(e)
                        } catch (e) {
                            (0, a.logError)("Error registering analytics adapter : " + e.message)
                        }
                    }, D.createBid = function(e) {
                        return (0, a.logInfo)("Invoking pbjs.createBid", arguments), (0, _.m)(e)
                    };
                    var de = [],
                        fe = (0, k.z3)("async", (function(e) {
                            e && !(0, a.isEmpty)(e) ? ((0, a.logInfo)("Invoking pbjs.enableAnalytics for: ", e), P.ZP.enableAnalytics(e)) : (0, a.logError)("pbjs.enableAnalytics should be called with option {}")
                        }), "enableAnalyticsCb");

                    function le(e) {
                        e.forEach((function(e) {
                            if (void 0 === e.called) try {
                                e.call(), e.called = !0
                            } catch (e) {
                                (0, a.logError)("Error processing command :", "prebid.js", e)
                            }
                        }))
                    }
                    D.enableAnalytics = function(e) {
                        de.push(fe.bind(this, e))
                    }, D.aliasBidder = function(e, n, t) {
                        (0, a.logInfo)("Invoking pbjs.aliasBidder", arguments), e && n ? P.ZP.aliasBidAdapter(e, n, t) : (0, a.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                    }, D.getAllWinningBids = function() {
                        return l.K.getAllWinningBids()
                    }, D.getAllPrebidWinningBids = function() {
                        return l.K.getBidsReceived().filter((function(e) {
                            return e.status === f.UE.CK
                        }))
                    }, D.getHighestCpmBids = function(e) {
                        return B.q0.getWinningBids(e)
                    }, D.markWinningBidAsUsed = function(e) {
                        var n = [];
                        e.adUnitCode && e.adId ? n = l.K.getBidsReceived().filter((function(n) {
                            return n.adId === e.adId && n.adUnitCode === e.adUnitCode
                        })) : e.adUnitCode ? n = B.q0.getWinningBids(e.adUnitCode) : e.adId ? n = l.K.getBidsReceived().filter((function(n) {
                            return n.adId === e.adId
                        })) : (0, a.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), n.length > 0 && (n[0].status = f.UE.fe)
                    }, D.getConfig = v.vc.getAnyConfig, D.readConfig = v.vc.readAnyConfig, D.mergeConfig = v.vc.mergeConfig, D.mergeBidderConfig = v.vc.mergeBidderConfig, D.setConfig = v.vc.setConfig, D.setBidderConfig = v.vc.setBidderConfig, D.que.push((function() {
                        window.addEventListener("message", I, !1)
                    })), D.cmd.push = function(e) {
                        if ("function" == typeof e) try {
                            e.call()
                        } catch (e) {
                            (0, a.logError)("Error processing command :", e.message, e.stack)
                        } else(0, a.logError)("Commands written into pbjs.cmd.push must be wrapped in a function")
                    }, D.que.push = D.cmd.push, D.processQueue = function() {
                        k.z3.ready(), le(D.que), le(D.cmd)
                    }
                },
                78640: function(e, n, t) {
                    function r() {
                        return window.pbjs
                    }
                    t.d(n, {
                        R: function() {
                            return r
                        }
                    }), window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
                },
                25102: function(e, n, t) {
                    t.d(n, {
                        hh: function() {
                            return a
                        },
                        nH: function() {
                            return u
                        }
                    });
                    var r = t(3193),
                        i = t(64358);

                    function o(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                        if (!e) return e;
                        if (/\w+:\/\//.exec(e)) return e;
                        var t = n.location.protocol;
                        try {
                            t = n.top.location.protocol
                        } catch (e) {}
                        return /^\/\//.exec(e) ? t + e : "".concat(t, "//").concat(e)
                    }

                    function a(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.noLeadingWww,
                            r = void 0 !== t && t,
                            i = n.noPort,
                            a = void 0 !== i && i;
                        try {
                            e = new URL(o(e))
                        } catch (e) {
                            return
                        }
                        return e = a ? e.hostname : e.host, r && e.startsWith("www.") && (e = e.substring(4)), e
                    }
                    var u = function(e) {
                        function n(e) {
                            try {
                                var n = e.querySelector("link[rel='canonical']");
                                if (null !== n) return n.href
                            } catch (e) {}
                            return null
                        }
                        return function() {
                            var t, u, c, s, d = [],
                                f = function(e) {
                                    try {
                                        if (!e.location.ancestorOrigins) return;
                                        return e.location.ancestorOrigins
                                    } catch (e) {}
                                }(e),
                                l = r.vc.getConfig("maxNestedIframes"),
                                g = !1,
                                p = 0,
                                v = !1,
                                h = !1,
                                m = !1;
                            do {
                                var b = t,
                                    y = h,
                                    E = void 0,
                                    w = !1,
                                    C = null;
                                h = !1, t = t ? t.parent : e;
                                try {
                                    E = t.location.href || null
                                } catch (e) {
                                    w = !0
                                }
                                if (w)
                                    if (y) {
                                        var A = b.context;
                                        try {
                                            u = C = A.sourceUrl, m = !0, v = !0, t === e.top && (g = !0), A.canonicalUrl && (c = A.canonicalUrl)
                                        } catch (e) {}
                                    } else {
                                        (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                        try {
                                            var T = b.document.referrer;
                                            T && (C = T, t === e.top && (g = !0))
                                        } catch (e) {}!C && f && f[p - 1] && (C = f[p - 1], t === e.top && (m = !0)), C && !v && (u = C)
                                    }
                                else {
                                    if (E && (u = C = E, v = !1, t === e.top)) {
                                        g = !0;
                                        var I = n(t.document);
                                        I && (c = I)
                                    }
                                    t.context && t.context.sourceUrl && (h = !0)
                                }
                                d.push(C), p++
                            } while (t !== e.top && p < l);
                            d.reverse();
                            try {
                                s = e.top.document.referrer
                            } catch (e) {}
                            var O = g || m ? u : null,
                                S = r.vc.getConfig("pageUrl") || c || null,
                                B = o(S, e) || O;
                            return {
                                reachedTop: g,
                                isAmp: v,
                                numIframes: p - 1,
                                stack: d,
                                topmostLocation: u || null,
                                location: O,
                                canonicalUrl: S,
                                page: B,
                                domain: a(B) || null,
                                ref: s || null,
                                legacy: {
                                    reachedTop: g,
                                    isAmp: v,
                                    numIframes: p - 1,
                                    stack: d,
                                    referer: u || null,
                                    canonicalUrl: S
                                }
                            }
                        }
                    }(window)
                },
                74247: function(e, n, t) {
                    t.d(n, {
                        UB: function() {
                            return p
                        },
                        lO: function() {
                            return f
                        }
                    });
                    var r = t(71002),
                        i = t(3193),
                        o = t(64358),
                        a = t(20265),
                        u = t(34614),
                        c = t(24679),
                        s = [];

                    function d(e, n) {
                        return e.labelAll ? {
                            labelAll: !0,
                            labels: e.labelAll,
                            activeLabels: n
                        } : {
                            labelAll: !1,
                            labels: e.labelAny,
                            activeLabels: n
                        }
                    }

                    function f(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                            t = g(n);
                        return !t.shouldFilter || !!t.sizesSupported[e]
                    }

                    function l() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.labels,
                            t = void 0 === n ? [] : n,
                            r = e.labelAll,
                            i = void 0 !== r && r,
                            d = e.activeLabels,
                            f = void 0 === d ? [] : d,
                            l = arguments.length > 1 ? arguments[1] : void 0,
                            p = arguments.length > 2 ? arguments[2] : void 0,
                            v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s,
                            h = g(v);
                        (0, o.isPlainObject)(l) || (l = p ? {
                            banner: {
                                sizes: p
                            }
                        } : {});
                        var m = (0, a.Z)(l, "banner.sizes");
                        h.shouldFilter && m && ((l = (0, o.deepClone)(l)).banner.sizes = m.filter((function(e) {
                            return h.sizesSupported[e]
                        })));
                        var b = {
                            active: !l.hasOwnProperty(c.Mk) || (0, a.Z)(l, "banner.sizes.length") > 0 && (0 === t.length || !i && (t.some((function(e) {
                                return h.labels[e]
                            })) || t.some((function(e) {
                                return (0, u.q9)(f, e)
                            }))) || i && t.reduce((function(e, n) {
                                return e ? h.labels[n] || (0, u.q9)(f, n) : e
                            }), !0)),
                            mediaTypes: l
                        };
                        return m && m.length !== l.banner.sizes.length && (b.filterResults = {
                            before: m,
                            after: l.banner.sizes
                        }), b
                    }

                    function g(e) {
                        return e.reduce((function(e, n) {
                            if ("object" === (0, r.Z)(n) && "string" == typeof n.mediaQuery && n.mediaQuery.length > 0) {
                                var t = !1;
                                try {
                                    t = (0, o.getWindowTop)().matchMedia(n.mediaQuery).matches
                                } catch (e) {
                                    (0, o.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(n.mediaQuery).matches
                                }
                                t && (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                                    return (n[t] || []).forEach((function(n) {
                                        return e[t][n] = !0
                                    }))
                                })))
                            } else(0, o.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                            return e
                        }), {
                            labels: {},
                            sizesSupported: {},
                            shouldFilter: !1
                        })
                    }

                    function p(e, n) {
                        return e.reduce((function(e, t) {
                            var r = l(d(t, n), t.mediaTypes, t.sizes),
                                i = r.active,
                                a = r.mediaTypes,
                                u = r.filterResults;
                            return i ? (u && (0, o.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" banner sizes from '), u.before, "to ", u.after), t.mediaTypes = a, t.bids = t.bids.reduce((function(e, r) {
                                var i = l(d(r, n), t.mediaTypes),
                                    a = i.active,
                                    u = i.mediaTypes,
                                    c = i.filterResults;
                                return a ? (c && ((0, o.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '" banner sizes from '), c.before, "to ", c.after), r.mediaTypes = u), e.push(r)) : (0, o.logInfo)('Size mapping deactivated adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '"')), e
                            }), []), e.push(t)) : (0, o.logInfo)('Size mapping disabled adUnit "'.concat(t.code, '"')), e
                        }), [])
                    }
                    i.vc.getConfig("sizeConfig", (function(e) {
                        return function(e) {
                            s = e
                        }(e.sizeConfig)
                    }))
                },
                15164: function(e, n, t) {
                    t.d(n, {
                        Ld: function() {
                            return u
                        },
                        S6: function() {
                            return s
                        },
                        df: function() {
                            return f
                        },
                        eA: function() {
                            return d
                        }
                    });
                    var r = t(92797),
                        i = t(64358),
                        o = t(55975),
                        a = ["core", "prebid-module"],
                        u = [];

                    function c() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.gvlid,
                            t = e.moduleName,
                            r = e.bidderCode,
                            c = e.moduleType,
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            f = d.bidderSettings,
                            l = void 0 === f ? o.S : f;

                        function g() {
                            if (null == r) return !0;
                            var e = l.get(r, "storageAllowed");
                            return null != e && e
                        }
                        var p = a.includes(c);

                        function v(e) {
                            if (g()) {
                                var o;
                                return s(p, n, r || t, {
                                    hasEnforcementHook: !1
                                }, (function(n) {
                                    if (n && n.hasEnforcementHook) o = e(n);
                                    else {
                                        var t = {
                                            hasEnforcementHook: !1,
                                            valid: (0, i.hasDeviceAccess)()
                                        };
                                        o = e(t)
                                    }
                                })), o
                            }(0, i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(r, "'"));
                            return e({
                                valid: !1
                            })
                        }
                        var h = function(e, n, t, r, i, o) {
                                var a = function(o) {
                                    if (o && o.valid) {
                                        var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                                            u = t && "" !== t ? " ;expires=".concat(t) : "",
                                            c = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                                        document.cookie = "".concat(e, "=").concat(encodeURIComponent(n)).concat(u, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(c)
                                    }
                                };
                                if (!o || "function" != typeof o) return v(a);
                                u.push((function() {
                                    var e = v(a);
                                    o(e)
                                }))
                            },
                            m = function(e, n) {
                                var t = function(n) {
                                    if (n && n.valid) {
                                        var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                        return t ? decodeURIComponent(t[2]) : null
                                    }
                                    return null
                                };
                                if (!n || "function" != typeof n) return v(t);
                                u.push((function() {
                                    var e = v(t);
                                    n(e)
                                }))
                            },
                            b = function(e) {
                                var n = function(e) {
                                    if (e && e.valid) try {
                                        return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                                    } catch (e) {} finally {
                                        try {
                                            localStorage.removeItem("prebid.cookieTest")
                                        } catch (e) {}
                                    }
                                    return !1
                                };
                                if (!e || "function" != typeof e) return v(n);
                                u.push((function() {
                                    var t = v(n);
                                    e(t)
                                }))
                            },
                            y = function(e) {
                                var n = function(e) {
                                    return !(!e || !e.valid) && (0, i.checkCookieSupport)()
                                };
                                if (!e || "function" != typeof e) return v(n);
                                u.push((function() {
                                    var t = v(n);
                                    e(t)
                                }))
                            },
                            E = function(e, n, t) {
                                var r = function(t) {
                                    t && t.valid && A() && window.localStorage.setItem(e, n)
                                };
                                if (!t || "function" != typeof t) return v(r);
                                u.push((function() {
                                    var e = v(r);
                                    t(e)
                                }))
                            },
                            w = function(e, n) {
                                var t = function(n) {
                                    return n && n.valid && A() ? window.localStorage.getItem(e) : null
                                };
                                if (!n || "function" != typeof n) return v(t);
                                u.push((function() {
                                    var e = v(t);
                                    n(e)
                                }))
                            },
                            C = function(e, n) {
                                var t = function(n) {
                                    n && n.valid && A() && window.localStorage.removeItem(e)
                                };
                                if (!n || "function" != typeof n) return v(t);
                                u.push((function() {
                                    var e = v(t);
                                    n(e)
                                }))
                            },
                            A = function(e) {
                                var n = function(e) {
                                    if (e && e.valid) try {
                                        return !!window.localStorage
                                    } catch (e) {
                                        (0, i.logError)("Local storage api disabled")
                                    }
                                    return !1
                                };
                                if (!e || "function" != typeof e) return v(n);
                                u.push((function() {
                                    var t = v(n);
                                    e(t)
                                }))
                            },
                            T = function(e, n) {
                                var t = function(n) {
                                    if (n && n.valid) {
                                        var t = [];
                                        if ((0, i.hasDeviceAccess)())
                                            for (var r = document.cookie.split(";"); r.length;) {
                                                var o = r.pop(),
                                                    a = o.indexOf("=");
                                                a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(o.slice(a + 1)))
                                            }
                                        return t
                                    }
                                };
                                if (!n || "function" != typeof n) return v(t);
                                u.push((function() {
                                    var e = v(t);
                                    n(e)
                                }))
                            };
                        return {
                            setCookie: h,
                            getCookie: m,
                            localStorageIsEnabled: b,
                            cookiesAreEnabled: y,
                            setDataInLocalStorage: E,
                            getDataFromLocalStorage: w,
                            removeDataFromLocalStorage: C,
                            hasLocalStorage: A,
                            findSimilarCookies: T
                        }
                    }
                    var s = (0, r.z3)("async", (function(e, n, t, r, i) {
                        i(r)
                    }), "validateStorageEnforcement");

                    function d(e) {
                        return c({
                            moduleName: e,
                            moduleType: "core"
                        })
                    }

                    function f() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.gvlid,
                            t = e.moduleName,
                            r = e.bidderCode;
                        if (arguments.length > 1 || arguments.length > 0 && !(0, i.isPlainObject)(arguments[0])) throw new Error("Invalid invocation for getStorageManager");
                        return c({
                            gvlid: n,
                            moduleName: t,
                            bidderCode: r
                        })
                    }
                },
                18621: function(e, n, t) {
                    t.d(n, {
                        bP: function() {
                            return A
                        },
                        ol: function() {
                            return C
                        },
                        q0: function() {
                            return T
                        },
                        u8: function() {
                            return w
                        }
                    });
                    var r = t(4942),
                        i = t(89062),
                        o = t(64358),
                        a = t(20265),
                        u = t(3193),
                        c = t(70059),
                        s = t(78653),
                        d = t(74247),
                        f = t(24679),
                        l = t(92797),
                        g = t(55975),
                        p = t(34614),
                        v = t(5644),
                        h = [],
                        m = "targetingControls.allowTargetingKeys",
                        b = "targetingControls.addTargetingKeys",
                        y = 'Only one of "'.concat(m, '" or "').concat(b, '" can be set'),
                        E = Object.keys(v.TD).map((function(e) {
                            return v.TD[e]
                        })),
                        w = {
                            isBidNotExpired: function(e) {
                                return e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, o.timestamp)()
                            },
                            isUnusedBid: function(e) {
                                return e && (e.status && !(0, p.q9)([v.UE.fe], e.status) || !e.status)
                            }
                        },
                        C = (0, l.z3)("sync", (function(e, n) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            if (!r) {
                                var a = [],
                                    c = u.vc.getConfig("sendBidsControl.dealPrioritization"),
                                    s = (0, o.groupBy)(e, "adUnitCode");
                                return Object.keys(s).forEach((function(e) {
                                    var r = [],
                                        u = (0, o.groupBy)(s[e], "bidderCode");
                                    Object.keys(u).forEach((function(e) {
                                        return r.push(u[e].reduce(n))
                                    })), t > 0 ? (r = c ? r.sort(A(!0)) : r.sort((function(e, n) {
                                        return n.cpm - e.cpm
                                    })), a.push.apply(a, (0, i.Z)(r.slice(0, t)))) : a.push.apply(a, (0, i.Z)(r))
                                })), a
                            }
                            return e
                        }));

                    function A() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return function(n, t) {
                            return void 0 !== n.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === n.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : e ? t.cpm - n.cpm : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb
                        }
                    }
                    var T = function(e) {
                        var n = {},
                            t = {};

                        function s(e, n) {
                            return e.adserverTargeting && n && ((0, o.isArray)(n) && (0, p.q9)(n, e.adUnitCode) || "string" == typeof n && e.adUnitCode === n)
                        }

                        function l(e, n) {
                            if (!0 === u.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
                                var t = E.concat(c.xc);
                                return C(n, o.getHighestCpm).map((function(n) {
                                    if (n.dealId && s(n, e)) return (0, r.Z)({}, n.adUnitCode, D(n, t.filter((function(e) {
                                        return void 0 !== n.adserverTargeting[e]
                                    }))))
                                })).filter((function(e) {
                                    return e
                                }))
                            }
                            return []
                        }

                        function T(e, n) {
                            var t = Object.assign({}, v.TD, v.FY),
                                r = Object.keys(t),
                                i = {};
                            (0, o.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map((function(e) {
                                return t[e]
                            })).join(", "), " ]")), e.map((function(e) {
                                var o = Object.keys(e)[0],
                                    a = e[o].filter((function(e) {
                                        var o = Object.keys(e)[0],
                                            a = 0 === r.filter((function(e) {
                                                return 0 === o.indexOf(t[e])
                                            })).length || (0, p.sE)(n, (function(e) {
                                                var n = t[e];
                                                return 0 === o.indexOf(n)
                                            }));
                                        return i[o] = !a, a
                                    }));
                                e[o] = a
                            }));
                            var a = Object.keys(i).filter((function(e) {
                                return i[e]
                            }));
                            return (0, o.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), e.filter((function(e) {
                                return e[Object.keys(e)[0]].length > 0
                            }))
                        }

                        function I(e, n) {
                            var t = (0, o.deepClone)(e);
                            return Object.keys(t).map((function(e) {
                                return {
                                    adUnitCode: e,
                                    adserverTargeting: t[e]
                                }
                            })).sort(A()).reduce((function(e, r, i, a) {
                                var u, c = (u = r.adserverTargeting, Object.keys(u).reduce((function(e, n) {
                                    return e + "".concat(n, "%3d").concat(encodeURIComponent(u[n]), "%26")
                                }), ""));
                                i + 1 === a.length && (c = c.slice(0, -3));
                                var s = r.adUnitCode,
                                    d = c.length;
                                return d <= n ? (n -= d, (0, o.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(n), t[s]), e[s] = t[s]) : (0, o.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(n, ".\n"), t[s]), i + 1 === a.length && 0 === Object.keys(e).length && (0, o.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                            }), {})
                        }

                        function O(e) {
                            var n = e.map((function(e) {
                                return (0, r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                                    return (0, r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","))
                                })).reduce((function(e, n) {
                                    return Object.assign(n, e)
                                }), {}))
                            })).reduce((function(e, n) {
                                var t = Object.keys(n)[0];
                                return e[t] = Object.assign({}, e[t], n[t]), e
                            }), {});
                            return n
                        }

                        function S(n) {
                            return "string" == typeof n ? [n] : (0, o.isArray)(n) ? n : e.getAdUnitCodes() || []
                        }

                        function B() {
                            var n = e.getBidsReceived();
                            if (u.vc.getConfig("useBidCache")) {
                                var r = u.vc.getConfig("bidCacheFilterFunction");
                                "function" == typeof r && (n = n.filter((function(e) {
                                    return t[e.adUnitCode] === e.auctionId || !!r(e)
                                })))
                            } else n = n.filter((function(e) {
                                return t[e.adUnitCode] === e.auctionId
                            }));
                            return n = n.filter((function(e) {
                                return (0, a.Z)(e, "video.context") !== f.Oh
                            })).filter((function(e) {
                                return "banner" !== e.mediaType || (0, d.lO)([e.width, e.height])
                            })).filter(w.isUnusedBid).filter(w.isBidNotExpired), C(n, o.getOldestHighestCpmBid)
                        }

                        function k(e, t) {
                            var o = n.getWinningBids(e, t),
                                a = j();
                            return o = o.map((function(e) {
                                return (0, r.Z)({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function(n) {
                                    return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === a.indexOf(n)
                                })).reduce((function(n, t) {
                                    var o = [e.adserverTargeting[t]],
                                        a = (0, r.Z)({}, t.substring(0, 20), o);
                                    if (t === v.TD.DEAL) {
                                        var u = "".concat(t, "_").concat(e.bidderCode).substring(0, 20),
                                            c = (0, r.Z)({}, u, o);
                                        return [].concat((0, i.Z)(n), [a, c])
                                    }
                                    return [].concat((0, i.Z)(n), [a])
                                }), []))
                            })), o
                        }

                        function j() {
                            return e.getStandardBidderAdServerTargeting().map((function(e) {
                                return e.key
                            })).concat(E).filter(o.uniques)
                        }

                        function U(e, n, t, r) {
                            return Object.keys(n.adserverTargeting).filter(_()).forEach((function(t) {
                                e.length && e.filter(function(e) {
                                    return function(t) {
                                        return t.adUnitCode === n.adUnitCode && t.adserverTargeting[e]
                                    }
                                }(t)).forEach(function(e) {
                                    return function(t) {
                                        (0, o.isArray)(t.adserverTargeting[e]) || (t.adserverTargeting[e] = [t.adserverTargeting[e]]), t.adserverTargeting[e] = t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(o.uniques), delete n.adserverTargeting[e]
                                    }
                                }(t))
                            })), e.push(n), e
                        }

                        function _() {
                            var e = j();
                            return e = e.concat(c.xc),
                                function(n) {
                                    return -1 === e.indexOf(n)
                                }
                        }

                        function R(e) {
                            return (0, r.Z)({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(_()).map((function(n) {
                                return (0, r.Z)({}, n.substring(0, 20), [e.adserverTargeting[n]])
                            })))
                        }

                        function P(e, n) {
                            return n.filter((function(n) {
                                return (0, p.q9)(e, n.adUnitCode)
                            })).map((function(e) {
                                return Object.assign({}, e)
                            })).reduce(U, []).map(R).filter((function(e) {
                                return e
                            }))
                        }

                        function q(e, n) {
                            var t = E.concat(c.xc),
                                i = u.vc.getConfig("sendBidsControl.bidLimit"),
                                a = C(n, o.getHighestCpm, i),
                                d = u.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                                f = d ? d.map((function(e) {
                                    return v.TD[e]
                                })) : t;
                            return a.map((function(n) {
                                if (s(n, e)) return (0, r.Z)({}, n.adUnitCode, D(n, t.filter((function(e) {
                                    return void 0 !== n.adserverTargeting[e] && -1 !== f.indexOf(e)
                                }))))
                            })).filter((function(e) {
                                return e
                            }))
                        }

                        function D(e, n) {
                            return n.map((function(n) {
                                return (0, r.Z)({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]])
                            }))
                        }

                        function x(n) {
                            function t(e) {
                                return (0, a.Z)(e, v.k2.xn)
                            }
                            return e.getAdUnits().filter((function(e) {
                                return (0, p.q9)(n, e.code) && t(e)
                            })).map((function(e) {
                                return (0, r.Z)({}, e.code, function(e) {
                                    var n = t(e);
                                    return Object.keys(n).map((function(e) {
                                        return (0, o.isStr)(n[e]) && (n[e] = n[e].split(",").map((function(e) {
                                            return e.trim()
                                        }))), (0, o.isArray)(n[e]) || (n[e] = [n[e]]), (0, r.Z)({}, e, n[e])
                                    }))
                                }(e))
                            }))
                        }
                        return n.setLatestAuctionForAdUnit = function(e, n) {
                            t[e] = n
                        }, n.resetPresetTargeting = function(n, t) {
                            if ((0, o.isGptPubadsDefined)()) {
                                var r = S(n),
                                    i = e.getAdUnits().filter((function(e) {
                                        return (0, p.q9)(r, e.code)
                                    })),
                                    a = h.reduce((function(e, n) {
                                        return e[n] = null, e
                                    }), {});
                                window.googletag.pubads().getSlots().forEach((function(e) {
                                    var n = (0, o.isFn)(t) && t(e);
                                    i.forEach((function(t) {
                                        (t.code === e.getAdUnitPath() || t.code === e.getSlotElementId() || (0, o.isFn)(n) && n(t.code)) && e.updateTargetingFromMap(a)
                                    }))
                                }))
                            }
                        }, n.resetPresetTargetingAST = function(e) {
                            S(e).forEach((function(e) {
                                var n = window.apntag.getTag(e);
                                if (n && n.keywords) {
                                    var t = Object.keys(n.keywords),
                                        r = {};
                                    t.forEach((function(e) {
                                        (0, p.q9)(h, e.toLowerCase()) || (r[e] = n.keywords[e])
                                    })), window.apntag.modifyTag(e, {
                                        keywords: r
                                    })
                                }
                            }))
                        }, n.getAllTargeting = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                                t = S(e),
                                r = k(t, n).concat(P(t, n)).concat(u.vc.getConfig("enableSendAllBids") ? q(t, n) : l(t, n)).concat(x(t));
                            r.map((function(e) {
                                Object.keys(e).map((function(n) {
                                    e[n].map((function(e) {
                                        -1 === h.indexOf(Object.keys(e)[0]) && (h = Object.keys(e).concat(h))
                                    }))
                                }))
                            }));
                            var i = Object.keys(Object.assign({}, v.kF, v.FY)),
                                a = u.vc.getConfig(m),
                                c = u.vc.getConfig(b);
                            if (null != c && null != a) throw new Error(y);
                            a = null != c ? i.concat(c) : a || i, Array.isArray(a) && a.length > 0 && (r = T(r, a)), r = O(r);
                            var s = u.vc.getConfig("targetingControls.auctionKeyMaxChars");
                            return s && ((0, o.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s, " characters.  Running checks on auction keys...")), r = I(r, s)), t.forEach((function(e) {
                                r[e] || (r[e] = {})
                            })), r
                        }, u.vc.getConfig("targetingControls", (function(e) {
                            null != (0, a.Z)(e, m) && null != (0, a.Z)(e, b) && (0, o.logError)(y)
                        })), n.setTargetingForGPT = function(e, n) {
                            window.googletag.pubads().getSlots().forEach((function(t) {
                                Object.keys(e).filter(n ? n(t) : (0, o.isAdUnitCodeMatchingSlot)(t)).forEach((function(n) {
                                    Object.keys(e[n]).forEach((function(t) {
                                        var r = e[n][t];
                                        "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), e[n][t] = r
                                    })), (0, o.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId(), " with targeting-map:"), e[n]), t.updateTargetingFromMap(e[n])
                                }))
                            }))
                        }, n.getWinningBids = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                                t = S(e);
                            return n.filter((function(e) {
                                return (0, p.q9)(t, e.adUnitCode)
                            })).filter((function(e) {
                                return !0 === g.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0
                            })).map((function(e) {
                                return e.adUnitCode
                            })).filter(o.uniques).map((function(e) {
                                return n.filter((function(n) {
                                    return n.adUnitCode === e ? n : null
                                })).reduce(o.getHighestCpm)
                            }))
                        }, n.setTargetingForAst = function(e) {
                            var t = n.getAllTargeting(e);
                            try {
                                n.resetPresetTargetingAST(e)
                            } catch (e) {
                                (0, o.logError)("unable to reset targeting for AST" + e)
                            }
                            Object.keys(t).forEach((function(e) {
                                return Object.keys(t[e]).forEach((function(n) {
                                    if ((0, o.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(n, " value: ").concat(t[e][n])), (0, o.isStr)(t[e][n]) || (0, o.isArray)(t[e][n])) {
                                        var r = {};
                                        n.search(/pt[0-9]/) < 0 ? r[n.toUpperCase()] = t[e][n] : r[n] = t[e][n], window.apntag.setKeywords(e, r, {
                                            overrideKeyValue: !0
                                        })
                                    }
                                }))
                            }))
                        }, n.isApntagDefined = function() {
                            if (window.apntag && (0, o.isFn)(window.apntag.setKeywords)) return !0
                        }, n
                    }(s.K)
                },
                11974: function(e, n, t) {
                    t.d(n, {
                        k_: function() {
                            return s
                        }
                    });
                    var r = t(93324),
                        i = t(64358),
                        o = t(3193),
                        a = t(34614),
                        u = t(15164);
                    o.vc.setDefaults({
                        userSync: (0, i.deepClone)({
                            syncEnabled: !0,
                            filterSettings: {
                                image: {
                                    bidders: "*",
                                    filter: "include"
                                }
                            },
                            syncsPerBidder: 5,
                            syncDelay: 3e3,
                            auctionDelay: 0
                        })
                    });
                    var c = (0, u.eA)("usersync");
                    var s = function(e) {
                        var n = {},
                            t = {
                                image: [],
                                iframe: []
                            },
                            u = new Set,
                            c = {},
                            s = {
                                image: !0,
                                iframe: !1
                            },
                            d = e.config;

                        function f() {
                            if (d.syncEnabled && e.browserSupportsCookies) {
                                try {
                                    ! function() {
                                        if (!s.iframe) return;
                                        l(t.iframe, (function(e) {
                                            var n = (0, r.Z)(e, 2),
                                                o = n[0],
                                                a = n[1];
                                            (0, i.logMessage)("Invoking iframe user sync for bidder: ".concat(o)), (0, i.insertUserSyncIframe)(a),
                                            function(e, n) {
                                                e.image = e.image.filter((function(e) {
                                                    return e[0] !== n
                                                }))
                                            }(t, o)
                                        }))
                                    }(),
                                    function() {
                                        if (!s.image) return;
                                        l(t.image, (function(e) {
                                            var n = (0, r.Z)(e, 2),
                                                t = n[0],
                                                o = n[1];
                                            (0, i.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)), (0, i.triggerPixel)(o)
                                        }))
                                    }()
                                } catch (e) {
                                    return (0, i.logError)("Error firing user syncs", e)
                                }
                                t = {
                                    image: [],
                                    iframe: []
                                }
                            }
                        }

                        function l(e, n) {
                            (0, i.shuffle)(e).forEach((function(e) {
                                n(e), u.add(e[0])
                            }))
                        }

                        function g(e, n) {
                            var t = d.filterSettings;
                            if (function(e, n) {
                                    if (e.all && e[n]) return (0, i.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                    var t = e.all ? e.all : e[n],
                                        r = e.all ? "all" : n;
                                    if (!t) return !1;
                                    var o = t.filter,
                                        a = t.bidders;
                                    if (o && "include" !== o && "exclude" !== o) return (0, i.logWarn)('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                                    if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every((function(e) {
                                            return (0, i.isStr)(e) && "*" !== e
                                        })))) return (0, i.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1;
                                    return !0
                                }(t, e)) {
                                s[e] = !0;
                                var r = t.all ? t.all : t[e],
                                    o = "*" === r.bidders ? [n] : r.bidders,
                                    u = {
                                        include: function(e, n) {
                                            return !(0, a.q9)(e, n)
                                        },
                                        exclude: function(e, n) {
                                            return (0, a.q9)(e, n)
                                        }
                                    };
                                return u[r.filter || "include"](o, n)
                            }
                            return !s[e]
                        }
                        return o.vc.getConfig("userSync", (function(e) {
                            if (e.userSync) {
                                var n = e.userSync.filterSettings;
                                (0, i.isPlainObject)(n) && (n.image || n.all || (e.userSync.filterSettings.image = {
                                    bidders: "*",
                                    filter: "include"
                                }))
                            }
                            d = Object.assign(d, e.userSync)
                        })), n.registerSync = function(e, r, o) {
                            return u.has(r) ? (0, i.logMessage)('already fired syncs for "'.concat(r, '", ignoring registerSync call')) : d.syncEnabled && (0, i.isArray)(t[e]) ? r ? 0 !== d.syncsPerBidder && Number(c[r]) >= d.syncsPerBidder ? (0, i.logWarn)('Number of user syncs exceeded for "'.concat(r, '"')) : n.canBidderRegisterSync(e, r) ? (t[e].push([r, o]), void(c = function(e, n) {
                                return e[n] ? e[n] += 1 : e[n] = 1, e
                            }(c, r))) : (0, i.logWarn)('Bidder "'.concat(r, '" not permitted to register their "').concat(e, '" userSync pixels.')) : (0, i.logWarn)("Bidder is required for registering sync") : (0, i.logWarn)('User sync type "'.concat(e, '" not supported'))
                        }, n.syncUsers = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (e) return setTimeout(f, Number(e));
                            f()
                        }, n.triggerUserSyncs = function() {
                            d.enableOverride && n.syncUsers()
                        }, n.canBidderRegisterSync = function(e, n) {
                            return !d.filterSettings || !g(e, n)
                        }, n
                    }(Object.defineProperties({
                        config: o.vc.getConfig("userSync")
                    }, {
                        browserSupportsCookies: {
                            get: function() {
                                return !(0, i.isSafariBrowser)() && c.cookiesAreEnabled()
                            }
                        }
                    }))
                },
                64358: function(e, n, t) {
                    t.r(n), t.d(n, {
                        _each: function() {
                            return de
                        },
                        _map: function() {
                            return le
                        },
                        _setEventEmitter: function() {
                            return C
                        },
                        adUnitsFilter: function() {
                            return xe
                        },
                        bind: function() {
                            return k
                        },
                        buildUrl: function() {
                            return wn
                        },
                        callBurl: function() {
                            return me
                        },
                        checkCookieSupport: function() {
                            return He
                        },
                        chunk: function() {
                            return pn
                        },
                        cleanObj: function() {
                            return cn
                        },
                        compareOn: function() {
                            return mn
                        },
                        contains: function() {
                            return fe
                        },
                        convertCamelToUnderscore: function() {
                            return un
                        },
                        convertTypes: function() {
                            return fn
                        },
                        createInvisibleIframe: function() {
                            return $
                        },
                        createTrackPixelHtml: function() {
                            return Ee
                        },
                        createTrackPixelIframeHtml: function() {
                            return we
                        },
                        cyrb53Hash: function() {
                            return Tn
                        },
                        debugTurnedOn: function() {
                            return X
                        },
                        deepAccess: function() {
                            return p.Z
                        },
                        deepClone: function() {
                            return Ze
                        },
                        deepEqual: function() {
                            return Cn
                        },
                        deepSetValue: function() {
                            return v.N
                        },
                        delayExecution: function() {
                            return Ge
                        },
                        escapeUnsafeChars: function() {
                            return kn
                        },
                        fill: function() {
                            return gn
                        },
                        flatten: function() {
                            return Te
                        },
                        formatQS: function() {
                            return yn
                        },
                        generateUUID: function() {
                            return _
                        },
                        getAdUnitSizes: function() {
                            return x
                        },
                        getBidIdParameter: function() {
                            return R
                        },
                        getBidRequest: function() {
                            return Ie
                        },
                        getBidderCodes: function() {
                            return ke
                        },
                        getDNT: function() {
                            return Xe
                        },
                        getDefinedParams: function() {
                            return Qe
                        },
                        getGptSlotForAdUnitCode: function() {
                            return tn
                        },
                        getGptSlotInfoForAdUnitCode: function() {
                            return rn
                        },
                        getHighestCpm: function() {
                            return _e
                        },
                        getKeyByValue: function() {
                            return Be
                        },
                        getKeys: function() {
                            return Oe
                        },
                        getLatestHighestCpmBid: function() {
                            return Pe
                        },
                        getMaxValueFromArray: function() {
                            return hn
                        },
                        getMinValueFromArray: function() {
                            return vn
                        },
                        getOldestHighestCpmBid: function() {
                            return Re
                        },
                        getParameterByName: function() {
                            return ee
                        },
                        getPerformanceNow: function() {
                            return Ke
                        },
                        getPrebidInternal: function() {
                            return O
                        },
                        getUniqueIdentifierStr: function() {
                            return U
                        },
                        getUserConfiguredParams: function() {
                            return Ye
                        },
                        getValue: function() {
                            return Se
                        },
                        getValueString: function() {
                            return Ce
                        },
                        getWindowFromDocument: function() {
                            return In
                        },
                        getWindowLocation: function() {
                            return K
                        },
                        getWindowSelf: function() {
                            return z
                        },
                        getWindowTop: function() {
                            return W
                        },
                        groupBy: function() {
                            return Ve
                        },
                        hasConsoleLogger: function() {
                            return Y
                        },
                        hasDeviceAccess: function() {
                            return Le
                        },
                        hasOwn: function() {
                            return ge
                        },
                        inIframe: function() {
                            return Ne
                        },
                        insertElement: function() {
                            return pe
                        },
                        insertHtmlIntoIframe: function() {
                            return be
                        },
                        insertUserSyncIframe: function() {
                            return ye
                        },
                        internal: function() {
                            return T
                        },
                        isA: function() {
                            return ne
                        },
                        isAdUnitCodeMatchingSlot: function() {
                            return en
                        },
                        isApnGetTagDefined: function() {
                            return Ue
                        },
                        isArray: function() {
                            return ie
                        },
                        isArrayOfNums: function() {
                            return ln
                        },
                        isBoolean: function() {
                            return ue
                        },
                        isEmpty: function() {
                            return ce
                        },
                        isEmptyStr: function() {
                            return se
                        },
                        isFn: function() {
                            return te
                        },
                        isGptPubadsDefined: function() {
                            return je
                        },
                        isInteger: function() {
                            return an
                        },
                        isNumber: function() {
                            return oe
                        },
                        isPlainObject: function() {
                            return ae
                        },
                        isSafariBrowser: function() {
                            return Me
                        },
                        isSlotMatchingAdUnitCode: function() {
                            return nn
                        },
                        isStr: function() {
                            return re
                        },
                        isValidMediaTypes: function() {
                            return Je
                        },
                        logError: function() {
                            return V
                        },
                        logInfo: function() {
                            return H
                        },
                        logMessage: function() {
                            return L
                        },
                        logWarn: function() {
                            return G
                        },
                        mergeDeep: function() {
                            return An
                        },
                        parseGPTSingleSizeArray: function() {
                            return N
                        },
                        parseGPTSingleSizeArrayToRtbSize: function() {
                            return M
                        },
                        parseQS: function() {
                            return bn
                        },
                        parseQueryStringParameters: function() {
                            return q
                        },
                        parseSizesInput: function() {
                            return Z
                        },
                        parseUrl: function() {
                            return En
                        },
                        pick: function() {
                            return sn
                        },
                        prefixLog: function() {
                            return Q
                        },
                        replaceAuctionPrice: function() {
                            return Fe
                        },
                        replaceClickThrough: function() {
                            return We
                        },
                        safeJSONParse: function() {
                            return On
                        },
                        setScriptAttributes: function() {
                            return Sn
                        },
                        shuffle: function() {
                            return De
                        },
                        timestamp: function() {
                            return ze
                        },
                        transformAdServerTargetingObj: function() {
                            return D
                        },
                        transformBidderParamKeywords: function() {
                            return dn
                        },
                        triggerPixel: function() {
                            return he
                        },
                        tryAppendQueryString: function() {
                            return P
                        },
                        uniques: function() {
                            return Ae
                        },
                        unsupportedBidderMessage: function() {
                            return on
                        },
                        waitForElementToLoad: function() {
                            return ve
                        }
                    });
                    var r, i = t(93324),
                        o = t(89062),
                        a = t(4942),
                        u = t(71002),
                        c = t(3193),
                        s = t(77079),
                        d = t.n(s),
                        f = t(34614),
                        l = t(5644),
                        g = t(68792),
                        p = t(20265),
                        v = t(96475),
                        h = Object.prototype.toString,
                        m = Boolean(window.console),
                        b = Boolean(m && window.console.log),
                        y = Boolean(m && window.console.info),
                        E = Boolean(m && window.console.warn),
                        w = Boolean(m && window.console.error);

                    function C(e) {
                        r = e
                    }

                    function A() {
                        null != r && r.apply(void 0, arguments)
                    }
                    var T = {
                            checkCookieSupport: He,
                            createTrackPixelIframeHtml: we,
                            getWindowSelf: z,
                            getWindowTop: W,
                            getWindowLocation: K,
                            insertUserSyncIframe: ye,
                            insertElement: pe,
                            isFn: te,
                            triggerPixel: he,
                            logError: V,
                            logWarn: G,
                            logMessage: L,
                            logInfo: H,
                            parseQS: bn,
                            formatQS: yn,
                            deepEqual: Cn
                        },
                        I = {};

                    function O() {
                        return I
                    }
                    var S, B = {},
                        k = function(e, n) {
                            return n
                        }.bind(null, 1, B)() === B ? Function.prototype.bind : function(e) {
                            var n = this,
                                t = Array.prototype.slice.call(arguments, 1);
                            return function() {
                                return n.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                            }
                        },
                        j = (S = 0, function() {
                            return ++S
                        });

                    function U() {
                        return j() + Math.random().toString(16).substr(2)
                    }

                    function _(e) {
                        return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, _)
                    }

                    function R(e, n) {
                        return n && n[e] ? n[e] : ""
                    }

                    function P(e, n, t) {
                        return t ? e + n + "=" + encodeURIComponent(t) + "&" : e
                    }

                    function q(e) {
                        var n = "";
                        for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
                        return n = n.replace(/&$/, "")
                    }

                    function D(e) {
                        return e && Object.getOwnPropertyNames(e).length > 0 ? Oe(e).map((function(n) {
                            return "".concat(n, "=").concat(encodeURIComponent(Se(e, n)))
                        })).join("&") : ""
                    }

                    function x(e) {
                        if (e) {
                            var n = [];
                            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                                var t = e.mediaTypes.banner.sizes;
                                Array.isArray(t[0]) ? n = t : n.push(t)
                            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
                            return n
                        }
                    }

                    function Z(e) {
                        var n = [];
                        if ("string" == typeof e) {
                            var t = e.split(","),
                                r = /^(\d)+x(\d)+$/i;
                            if (t)
                                for (var i in t) ge(t, i) && t[i].match(r) && n.push(t[i])
                        } else if ("object" === (0, u.Z)(e)) {
                            var o = e.length;
                            if (o > 0)
                                if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) n.push(N(e));
                                else
                                    for (var a = 0; a < o; a++) n.push(N(e[a]))
                        }
                        return n
                    }

                    function N(e) {
                        if (F(e)) return e[0] + "x" + e[1]
                    }

                    function M(e) {
                        if (F(e)) return {
                            w: e[0],
                            h: e[1]
                        }
                    }

                    function F(e) {
                        return ie(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                    }

                    function W() {
                        return window.top
                    }

                    function z() {
                        return window.self
                    }

                    function K() {
                        return window.location
                    }

                    function L() {
                        X() && b && console.log.apply(console, J(arguments, "MESSAGE:"))
                    }

                    function H() {
                        X() && y && console.info.apply(console, J(arguments, "INFO:"))
                    }

                    function G() {
                        X() && E && console.warn.apply(console, J(arguments, "WARNING:")), A(l.FP.AUCTION_DEBUG, {
                            type: "WARNING",
                            arguments: arguments
                        })
                    }

                    function V() {
                        X() && w && console.error.apply(console, J(arguments, "ERROR:")), A(l.FP.AUCTION_DEBUG, {
                            type: "ERROR",
                            arguments: arguments
                        })
                    }

                    function Q(e) {
                        function n(n) {
                            return function() {
                                for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                n.apply(void 0, [e].concat(r))
                            }
                        }
                        return {
                            logError: n(V),
                            logWarn: n(G),
                            logMessage: n(L),
                            logInfo: n(H)
                        }
                    }

                    function J(e, n) {
                        e = [].slice.call(e);
                        var t = c.vc.getCurrentBidder();
                        return n && e.unshift(n), t && e.unshift(r("#aaa")), e.unshift(r("#3b88c3")), e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")), e;

                        function r(e) {
                            return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;")
                        }
                    }

                    function Y() {
                        return b
                    }

                    function X() {
                        return !!c.vc.getConfig("debug")
                    }

                    function $() {
                        var e = document.createElement("iframe");
                        return e.id = U(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
                    }

                    function ee(e) {
                        return bn(K().search)[e] || ""
                    }

                    function ne(e, n) {
                        return h.call(e) === "[object " + n + "]"
                    }

                    function te(e) {
                        return ne(e, "Function")
                    }

                    function re(e) {
                        return ne(e, "String")
                    }

                    function ie(e) {
                        return ne(e, "Array")
                    }

                    function oe(e) {
                        return ne(e, "Number")
                    }

                    function ae(e) {
                        return ne(e, "Object")
                    }

                    function ue(e) {
                        return ne(e, "Boolean")
                    }

                    function ce(e) {
                        if (!e) return !0;
                        if (ie(e) || re(e)) return !(e.length > 0);
                        for (var n in e)
                            if (hasOwnProperty.call(e, n)) return !1;
                        return !0
                    }

                    function se(e) {
                        return re(e) && (!e || 0 === e.length)
                    }

                    function de(e, n) {
                        if (!ce(e)) {
                            if (te(e.forEach)) return e.forEach(n, this);
                            var t = 0,
                                r = e.length;
                            if (r > 0)
                                for (; t < r; t++) n(e[t], t, e);
                            else
                                for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t)
                        }
                    }

                    function fe(e, n) {
                        if (ce(e)) return !1;
                        if (te(e.indexOf)) return -1 !== e.indexOf(n);
                        for (var t = e.length; t--;)
                            if (e[t] === n) return !0;
                        return !1
                    }

                    function le(e, n) {
                        if (ce(e)) return [];
                        if (te(e.map)) return e.map(n);
                        var t = [];
                        return de(e, (function(r, i) {
                            t.push(n(r, i, e))
                        })), t
                    }

                    function ge(e, n) {
                        return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n]
                    }

                    function pe(e, n, t, r) {
                        var i;
                        n = n || document, i = t ? n.getElementsByTagName(t) : n.getElementsByTagName("head");
                        try {
                            if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                                i = i[0];
                                var o = r ? null : i.firstChild;
                                return i.insertBefore(e, o)
                            }
                        } catch (e) {}
                    }

                    function ve(e, n) {
                        var t = null;
                        return new g.Z((function(r) {
                            var i = function n() {
                                e.removeEventListener("load", n), e.removeEventListener("error", n), null != t && window.clearTimeout(t), r()
                            };
                            e.addEventListener("load", i), e.addEventListener("error", i), null != n && (t = window.setTimeout(i, n))
                        }))
                    }

                    function he(e, n, t) {
                        var r = new Image;
                        n && T.isFn(n) && ve(r, t).then(n), r.src = e
                    }

                    function me(e) {
                        var n = e.source,
                            t = e.burl;
                        n === l.os.YZ && t && T.triggerPixel(t)
                    }

                    function be(e) {
                        if (e) {
                            var n = document.createElement("iframe");
                            n.id = U(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", T.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close()
                        }
                    }

                    function ye(e, n, t) {
                        var r = T.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                            i = document.createElement("div");
                        i.innerHTML = r;
                        var o = i.firstChild;
                        n && T.isFn(n) && ve(o, t).then(n), T.insertElement(o, document, "html", !0)
                    }

                    function Ee(e) {
                        if (!e) return "";
                        var n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                        return n += '<img src="' + encodeURI(e) + '"></div>'
                    }

                    function we(e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        return e ? (n && (e = encodeURI(e)), t && (t = 'sandbox="'.concat(t, '"')), "<iframe ".concat(t, ' id="').concat(U(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
                    }

                    function Ce(e, n, t) {
                        return null == n ? t : re(n) ? n : oe(n) ? n.toString() : void T.logWarn("Unsuported type for param: " + e + " required type: String")
                    }

                    function Ae(e, n, t) {
                        return t.indexOf(e) === n
                    }

                    function Te(e, n) {
                        return e.concat(n)
                    }

                    function Ie(e, n) {
                        var t;
                        if (e) return n.some((function(n) {
                            var r = (0, f.sE)(n.bids, (function(n) {
                                return ["bidId", "adId", "bid_id"].some((function(t) {
                                    return n[t] === e
                                }))
                            }));
                            return r && (t = r), r
                        })), t
                    }

                    function Oe(e) {
                        return Object.keys(e)
                    }

                    function Se(e, n) {
                        return e[n]
                    }

                    function Be(e, n) {
                        for (var t in e)
                            if (e.hasOwnProperty(t) && e[t] === n) return t
                    }

                    function ke() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits;
                        return e.map((function(e) {
                            return e.bids.map((function(e) {
                                return e.bidder
                            })).reduce(Te, [])
                        })).reduce(Te, []).filter(Ae)
                    }

                    function je() {
                        if (window.googletag && te(window.googletag.pubads) && te(window.googletag.pubads().getSlots)) return !0
                    }

                    function Ue() {
                        if (window.apntag && te(window.apntag.getTag)) return !0
                    }
                    var _e = qe("timeToRespond", (function(e, n) {
                            return e > n
                        })),
                        Re = qe("responseTimestamp", (function(e, n) {
                            return e > n
                        })),
                        Pe = qe("responseTimestamp", (function(e, n) {
                            return e < n
                        }));

                    function qe(e, n) {
                        return function(t, r) {
                            return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t
                        }
                    }

                    function De(e) {
                        for (var n = e.length; n > 0;) {
                            var t = Math.floor(Math.random() * n),
                                r = e[--n];
                            e[n] = e[t], e[t] = r
                        }
                        return e
                    }

                    function xe(e, n) {
                        return (0, f.q9)(e, n && n.adUnitCode)
                    }

                    function Ze(e) {
                        return d()(e)
                    }

                    function Ne() {
                        try {
                            return T.getWindowSelf() !== T.getWindowTop()
                        } catch (e) {
                            return !0
                        }
                    }

                    function Me() {
                        return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
                    }

                    function Fe(e, n) {
                        if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n)
                    }

                    function We(e, n) {
                        if (e && n && "string" == typeof n) return e.replace(/\${CLICKTHROUGH}/g, n)
                    }

                    function ze() {
                        return (new Date).getTime()
                    }

                    function Ke() {
                        return window.performance && window.performance.now && window.performance.now() || 0
                    }

                    function Le() {
                        return !1 !== c.vc.getConfig("deviceAccess")
                    }

                    function He() {
                        if (window.navigator.cookieEnabled || document.cookie.length) return !0
                    }

                    function Ge(e, n) {
                        if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
                        var t = 0;
                        return function() {
                            ++t === n && e.apply(this, arguments)
                        }
                    }

                    function Ve(e, n) {
                        return e.reduce((function(e, t) {
                            return (e[t[n]] = e[t[n]] || []).push(t), e
                        }), {})
                    }

                    function Qe(e, n) {
                        return n.filter((function(n) {
                            return e[n]
                        })).reduce((function(n, t) {
                            return Object.assign(n, (0, a.Z)({}, t, e[t]))
                        }), {})
                    }

                    function Je(e) {
                        var n = ["banner", "native", "video"];
                        return !!Object.keys(e).every((function(e) {
                            return (0, f.q9)(n, e)
                        })) && (!e.video || !e.video.context || (0, f.q9)(["instream", "outstream", "adpod"], e.video.context))
                    }

                    function Ye(e, n, t) {
                        return e.filter((function(e) {
                            return e.code === n
                        })).map((function(e) {
                            return e.bids
                        })).reduce(Te, []).filter((function(e) {
                            return e.bidder === t
                        })).map((function(e) {
                            return e.params || {}
                        }))
                    }

                    function Xe() {
                        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                    }
                    var $e = function(e, n) {
                        return e.getAdUnitPath() === n || e.getSlotElementId() === n
                    };

                    function en(e) {
                        return function(n) {
                            return $e(e, n)
                        }
                    }

                    function nn(e) {
                        return function(n) {
                            return $e(n, e)
                        }
                    }

                    function tn(e) {
                        var n;
                        return je() && (n = (0, f.sE)(window.googletag.pubads().getSlots(), nn(e))), n
                    }

                    function rn(e) {
                        var n = tn(e);
                        return n ? {
                            gptSlot: n.getAdUnitPath(),
                            divId: n.getSlotElementId()
                        } : {}
                    }

                    function on(e, n) {
                        var t = Object.keys(e.mediaTypes || {
                            banner: "banner"
                        }).join(", ");
                        return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ")
                    }

                    function an(e) {
                        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                    }

                    function un(e) {
                        return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, n) {
                            return "_" + n.toLowerCase()
                        })).replace(/^_/, "")
                    }

                    function cn(e) {
                        return Object.keys(e).reduce((function(n, t) {
                            return void 0 !== e[t] && (n[t] = e[t]), n
                        }), {})
                    }

                    function sn(e, n) {
                        return "object" !== (0, u.Z)(e) ? {} : n.reduce((function(t, r, i) {
                            if ("function" == typeof r) return t;
                            var o = r,
                                a = r.match(/^(.+?)\sas\s(.+?)$/i);
                            a && (r = a[1], o = a[2]);
                            var u = e[r];
                            return "function" == typeof n[i + 1] && (u = n[i + 1](u, t)), void 0 !== u && (t[o] = u), t
                        }), {})
                    }

                    function dn(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
                            t = [];
                        return de(e, (function(e, r) {
                            if (ie(e)) {
                                var i = [];
                                de(e, (function(e) {
                                    ((e = Ce(n + "." + r, e)) || "" === e) && i.push(e)
                                })), e = i
                            } else {
                                if (!re(e = Ce(n + "." + r, e))) return;
                                e = [e]
                            }
                            t.push({
                                key: r,
                                value: e
                            })
                        })), t
                    }

                    function fn(e, n) {
                        return Object.keys(e).forEach((function(t) {
                            var r, i;
                            n[t] && (te(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key)
                        })), n
                    }

                    function ln(e, n) {
                        return ie(e) && (!n || e.length === n) && e.every((function(e) {
                            return an(e)
                        }))
                    }

                    function gn(e, n) {
                        for (var t = [], r = 0; r < n; r++) {
                            var i = ae(e) ? Ze(e) : e;
                            t.push(i)
                        }
                        return t
                    }

                    function pn(e, n) {
                        for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
                            var i = r * n,
                                o = i + n;
                            t.push(e.slice(i, o))
                        }
                        return t
                    }

                    function vn(e) {
                        return Math.min.apply(Math, (0, o.Z)(e))
                    }

                    function hn(e) {
                        return Math.max.apply(Math, (0, o.Z)(e))
                    }

                    function mn(e) {
                        return function(n, t) {
                            return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0
                        }
                    }

                    function bn(e) {
                        return e ? e.replace(/^\?/, "").split("&").reduce((function(e, n) {
                            var t = n.split("="),
                                r = (0, i.Z)(t, 2),
                                o = r[0],
                                a = r[1];
                            return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e
                        }), {}) : {}
                    }

                    function yn(e) {
                        return Object.keys(e).map((function(n) {
                            return Array.isArray(e[n]) ? e[n].map((function(e) {
                                return "".concat(n, "[]=").concat(e)
                            })).join("&") : "".concat(n, "=").concat(e[n])
                        })).join("&")
                    }

                    function En(e, n) {
                        var t = document.createElement("a");
                        n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
                        var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
                        return {
                            href: t.href,
                            protocol: (t.protocol || "").replace(/:$/, ""),
                            hostname: t.hostname,
                            port: +t.port,
                            pathname: t.pathname.replace(/^(?!\/)/, "/"),
                            search: r ? t.search : T.parseQS(t.search || ""),
                            hash: (t.hash || "").replace(/^#/, ""),
                            host: t.host || window.location.host
                        }
                    }

                    function wn(e) {
                        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(T.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
                    }

                    function Cn(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.checkTypes,
                            i = void 0 !== r && r;
                        if (e === n) return !0;
                        if ("object" !== (0, u.Z)(e) || null === e || "object" !== (0, u.Z)(n) || null === n || i && e.constructor !== n.constructor) return !1;
                        if (Object.keys(e).length !== Object.keys(n).length) return !1;
                        for (var o in e) {
                            if (!n.hasOwnProperty(o)) return !1;
                            if (!Cn(e[o], n[o], {
                                    checkTypes: i
                                })) return !1
                        }
                        return !0
                    }

                    function An(e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                        if (!t.length) return e;
                        var i = t.shift();
                        if (ae(e) && ae(i)) {
                            var u = function(n) {
                                ae(i[n]) ? (e[n] || Object.assign(e, (0, a.Z)({}, n, {})), An(e[n], i[n])) : ie(i[n]) ? e[n] ? ie(e[n]) && i[n].forEach((function(t) {
                                    for (var r = 1, i = 0; i < e[n].length; i++)
                                        if (Cn(e[n][i], t)) {
                                            r = 0;
                                            break
                                        } r && e[n].push(t)
                                })) : Object.assign(e, (0, a.Z)({}, n, (0, o.Z)(i[n]))) : Object.assign(e, (0, a.Z)({}, n, i[n]))
                            };
                            for (var c in i) u(c)
                        }
                        return An.apply(void 0, [e].concat(t))
                    }

                    function Tn(e) {
                        for (var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, n) {
                                if (te(Math.imul)) return Math.imul(e, n);
                                var t = (4194303 & e) * (n |= 0);
                                return 4290772992 & e && (t += (4290772992 & e) * n | 0), 0 | t
                            }, i = 3735928559 ^ t, o = 1103547991 ^ t, a = 0; a < e.length; a++) i = r(i ^ (n = e.charCodeAt(a)), 2654435761), o = r(o ^ n, 1597334677);
                        return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
                    }

                    function In(e) {
                        return e ? e.defaultView : null
                    }

                    function On(e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {}
                    }

                    function Sn(e, n) {
                        for (var t in n) n.hasOwnProperty(t) && e.setAttribute(t, n[t])
                    }
                    var Bn, kn = (Bn = {
                        "<": "\\u003C",
                        ">": "\\u003E",
                        "/": "\\u002F",
                        "\\": "\\\\",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\0": "\\0",
                        "\u2028": "\\u2028",
                        "\u2029": "\\u2029"
                    }, function(e) {
                        return e.replace(/[<>\b\f\n\r\t\0\u2028\u2029\\]/g, (function(e) {
                            return Bn[e]
                        }))
                    })
                },
                99128: function(e, n, t) {
                    t.d(n, {
                        A: function() {
                            return w
                        },
                        Bf: function() {
                            return h
                        },
                        V6: function() {
                            return b
                        },
                        g3: function() {
                            return E
                        }
                    });
                    var r = t(93324),
                        i = t(3193);

                    function o(e, n) {
                        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!t) {
                            if (Array.isArray(e) || (t = function(e, n) {
                                    if (!e) return;
                                    if ("string" == typeof e) return a(e, n);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === t && e.constructor && (t = e.constructor.name);
                                    if ("Map" === t || "Set" === t) return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
                                }(e)) || n && e && "number" == typeof e.length) {
                                t && (e = t);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, u = !0,
                            c = !1;
                        return {
                            s: function() {
                                t = t.call(e)
                            },
                            n: function() {
                                var e = t.next();
                                return u = e.done, e
                            },
                            e: function(e) {
                                c = !0, o = e
                            },
                            f: function() {
                                try {
                                    u || null == t.return || t.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }

                    function a(e, n) {
                        (null == n || n > e.length) && (n = e.length);
                        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                        return r
                    }
                    var u = "performanceMetrics",
                        c = window.performance && window.performance.now ? function() {
                            return window.performance.now()
                        } : function() {
                            return Date.now()
                        },
                        s = new WeakMap;

                    function d() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.now,
                            t = void 0 === n ? c : n,
                            r = e.mkNode,
                            i = void 0 === r ? g : r,
                            o = e.mkTimer,
                            a = void 0 === o ? l : o,
                            u = e.mkRenamer,
                            d = void 0 === u ? function(e) {
                                return e
                            } : u,
                            f = e.nodes,
                            p = void 0 === f ? s : f;
                        return function() {
                            return function e(n) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                                    return {
                                        forEach: function(n) {
                                            n(e)
                                        }
                                    }
                                };

                                function o(e) {
                                    return function(t) {
                                        return n.dfWalk({
                                            visit: function(n, r) {
                                                var i = r[e];
                                                if (i.hasOwnProperty(t)) return i[t]
                                            }
                                        })
                                    }
                                }
                                r = d(r);
                                var u = o("timestamps");

                                function c(e, t) {
                                    var i = r(e);
                                    n.dfWalk({
                                        follow: function(e, n) {
                                            return n.propagate && (!e || !e.stopPropagation)
                                        },
                                        visit: function(e, n) {
                                            i.forEach((function(r) {
                                                null == e ? n.metrics[r] = t : (n.groups.hasOwnProperty(r) || (n.groups[r] = []), n.groups[r].push(t))
                                            }))
                                        }
                                    })
                                }

                                function s(e) {
                                    n.timestamps[e] = t()
                                }

                                function f(e, n) {
                                    var r = u(e),
                                        i = null != r ? t() - r : null;
                                    return null != n && c(n, i), i
                                }

                                function l(e, n, t) {
                                    var r = u(e),
                                        i = u(n),
                                        o = null != r && null != i ? i - r : null;
                                    return null != t && c(t, o), o
                                }

                                function g(e) {
                                    return a(t, (function(n) {
                                        return c(e, n)
                                    }))
                                }

                                function v(e, n) {
                                    return g(e).stopAfter(n)()
                                }

                                function h(e, n, t) {
                                    var r = g(e);
                                    return t(function(e) {
                                        var n = r.stopBefore(e);
                                        return n.bail = e.bail && r.stopBefore(e.bail), n.stopTiming = r, n.untimed = e, n
                                    }(n))
                                }

                                function m() {
                                    var e = {};
                                    return n.dfWalk({
                                        visit: function(n, t) {
                                            e = Object.assign({}, !n || n.includeGroups ? t.groups : null, t.metrics, e)
                                        }
                                    }), e
                                }

                                function b() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        o = t.propagate,
                                        a = void 0 === o || o,
                                        u = t.stopPropagation,
                                        c = void 0 !== u && u,
                                        s = t.includeGroups,
                                        d = void 0 !== s && s;
                                    return e(i([
                                        [n, {
                                            propagate: a,
                                            stopPropagation: c,
                                            includeGroups: d
                                        }]
                                    ]), r)
                                }

                                function y(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = t.propagate,
                                        i = void 0 === r || r,
                                        o = t.stopPropagation,
                                        a = void 0 !== o && o,
                                        u = t.includeGroups,
                                        c = void 0 !== u && u,
                                        s = p.get(e);
                                    null != s && s.addParent(n, {
                                        propagate: i,
                                        stopPropagation: a,
                                        includeGroups: c
                                    })
                                }

                                function E(t) {
                                    return e(n, t)
                                }

                                function w() {
                                    return e(n.newSibling(), r)
                                }
                                var C = {
                                    startTiming: g,
                                    measureTime: v,
                                    measureHookTime: h,
                                    checkpoint: s,
                                    timeSince: f,
                                    timeBetween: l,
                                    setMetric: c,
                                    getMetrics: m,
                                    fork: b,
                                    join: y,
                                    newMetrics: w,
                                    renameWith: E,
                                    toJSON: function() {
                                        return m()
                                    }
                                };
                                return p.set(C, n), C
                            }(i([]))
                        }
                    }

                    function f(e, n, t) {
                        return function() {
                            n && n();
                            try {
                                return e.apply(this, arguments)
                            } finally {
                                t && t()
                            }
                        }
                    }

                    function l(e, n) {
                        var t = e(),
                            r = !1;

                        function i() {
                            r || (n(e() - t), r = !0)
                        }
                        return i.stopBefore = function(e) {
                            return f(e, i)
                        }, i.stopAfter = function(e) {
                            return f(e, null, i)
                        }, i
                    }

                    function g(e) {
                        return {
                            metrics: {},
                            timestamps: {},
                            groups: {},
                            addParent: function(n, t) {
                                e.push([n, t])
                            },
                            newSibling: function() {
                                return g(e.slice())
                            },
                            dfWalk: function() {
                                var n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    i = t.visit,
                                    a = t.follow,
                                    u = void 0 === a ? function() {
                                        return !0
                                    } : a,
                                    c = t.visited,
                                    s = void 0 === c ? new Set : c,
                                    d = t.inEdge;
                                if (!s.has(this)) {
                                    if (s.add(this), null != (n = i(d, this))) return n;
                                    var f, l = o(e);
                                    try {
                                        for (l.s(); !(f = l.n()).done;) {
                                            var g = (0, r.Z)(f.value, 2),
                                                p = g[0],
                                                v = g[1];
                                            if (u(d, v) && null != (n = p.dfWalk({
                                                    visit: i,
                                                    follow: u,
                                                    visited: s,
                                                    inEdge: v
                                                }))) return n
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                }
                            }
                        }
                    }
                    var p = function() {
                            var e = function() {},
                                n = function() {
                                    return {}
                                },
                                t = {
                                    forEach: e
                                },
                                r = function() {
                                    return null
                                };
                            r.stopBefore = function(e) {
                                return e
                            }, r.stopAfter = function(e) {
                                return e
                            };
                            var i = Object.defineProperties({
                                dfWalk: e,
                                newSibling: function() {
                                    return i
                                },
                                addParent: e
                            }, Object.fromEntries(["metrics", "timestamps", "groups"].map((function(e) {
                                return [e, {
                                    get: n
                                }]
                            }))));
                            return d({
                                now: function() {
                                    return 0
                                },
                                mkNode: function() {
                                    return i
                                },
                                mkRenamer: function() {
                                    return function() {
                                        return t
                                    }
                                },
                                mkTimer: function() {
                                    return r
                                },
                                nodes: {
                                    get: e,
                                    set: e
                                }
                            })()
                        }(),
                        v = !0;

                    function h(e) {
                        return v && e || p
                    }
                    i.vc.getConfig(u, (function(e) {
                        v = !!e[u]
                    }));
                    var m, b = (m = d(), function() {
                        return v ? m() : p
                    });

                    function y(e, n) {
                        return function(t, r) {
                            return function(i) {
                                for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = arguments[u];
                                var c = this;
                                return h(n.apply(c, a)).measureHookTime(e + t, i, (function(e) {
                                    return r.call.apply(r, [c, e].concat(a))
                                }))
                            }
                        }
                    }
                    var E = y("requestBids.", (function(e) {
                            return e.metrics
                        })),
                        w = y("addBidResponse.", (function(e, n) {
                            return n.metrics
                        }))
                },
                68792: function(e, n, t) {
                    t.d(n, {
                        P: function() {
                            return E
                        },
                        Z: function() {
                            return y
                        }
                    });
                    var r = t(93324),
                        i = t(15671),
                        o = t(43144),
                        a = t(97326),
                        u = t(88301),
                        c = t(60136),
                        s = t(82963),
                        d = t(61120),
                        f = t(18916),
                        l = t(42793),
                        g = t(78640);

                    function p(e) {
                        var n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var t, r = (0, d.Z)(e);
                            if (n) {
                                var i = (0, d.Z)(this).constructor;
                                t = Reflect.construct(r, arguments, i)
                            } else t = r.apply(this, arguments);
                            return (0, s.Z)(this, t)
                        }
                    }

                    function v(e, n, t) {
                        ! function(e, n) {
                            if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                        }(e, n), n.set(e, t)
                    }
                    var h = new WeakMap,
                        m = new WeakMap,
                        b = new WeakMap,
                        y = function(e) {
                            (0, c.Z)(t, e);
                            var n = p(t);

                            function t(e) {
                                var r;
                                (0, i.Z)(this, t);
                                var o = [],
                                    u = [];

                                function c(e, n) {
                                    return function(t) {
                                        if (!o.length) {
                                            for (o.push(e, t); u.length;) u.shift()();
                                            n(t)
                                        }
                                    }
                                }
                                return r = n.call(this, "function" != typeof e ? e : function(n, t) {
                                    var r, i = c(1, t),
                                        o = (r = c(0, n), function(e) {
                                            return "function" == typeof(null == e ? void 0 : e.then) ? e.then(r, i) : r(e)
                                        });
                                    try {
                                        e(o, i)
                                    } catch (e) {
                                        i(e)
                                    }
                                }), v((0, a.Z)(r), h, {
                                    writable: !0,
                                    value: void 0
                                }), v((0, a.Z)(r), m, {
                                    writable: !0,
                                    value: void 0
                                }), v((0, a.Z)(r), b, {
                                    writable: !0,
                                    value: null
                                }), (0, l.Z)((0, a.Z)(r), h, o), (0, l.Z)((0, a.Z)(r), m, u), r
                            }
                            return (0, o.Z)(t, [{
                                key: "then",
                                value: function(e, n) {
                                    var i = this;
                                    if ("function" == typeof n)
                                        for (var o = this; o;) {
                                            (0, u.Z)((0, d.Z)(t.prototype), "then", this).call(o, null, (function() {
                                                return null
                                            }));
                                            var a = (0, f.Z)(o, b);
                                            (0, l.Z)(o, b, null), o = a
                                        }
                                    var c = (0, f.Z)(this, h),
                                        s = new t((function(t, o) {
                                            var a = function() {
                                                var i = c[1],
                                                    a = 0 === c[0] ? [e, t] : [n, o],
                                                    u = (0, r.Z)(a, 2),
                                                    s = u[0],
                                                    d = u[1];
                                                if ("function" == typeof s) {
                                                    try {
                                                        i = s(i)
                                                    } catch (e) {
                                                        return void o(e)
                                                    }
                                                    d = t
                                                }
                                                d(i)
                                            };
                                            c.length ? a() : (0, f.Z)(i, m).push(a)
                                        }));
                                    return (0, l.Z)(s, b, this), s
                                }
                            }], [{
                                key: "timeout",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    return new t((function(n) {
                                        0 === e ? n() : setTimeout(n, e)
                                    }))
                                }
                            }]), t
                        }((0, g.R)().Promise || Promise);

                    function E() {
                        var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = t.promiseFactory,
                            i = void 0 === r ? function(e) {
                                return new y(e)
                            } : r;

                        function o(e) {
                            return function(n) {
                                return e(n)
                            }
                        }
                        return {
                            promise: i((function(t, r) {
                                e = t, n = r
                            })),
                            resolve: o(e),
                            reject: o(n)
                        }
                    }
                },
                90154: function(e, n, t) {
                    t.d(n, {
                        Dn: function() {
                            return d
                        },
                        LD: function() {
                            return s
                        },
                        gZ: function() {
                            return c
                        },
                        hD: function() {
                            return f
                        }
                    });
                    var r = t(20265),
                        i = t(64358),
                        o = t(3193),
                        a = t(92797),
                        u = t(78653),
                        c = "outstream",
                        s = "instream";

                    function d(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.index,
                            i = void 0 === t ? u.K.index : t,
                            o = (0, r.Z)(i.getMediaTypes(e), "video"),
                            a = o && (0, r.Z)(o, "context"),
                            c = o && (0, r.Z)(o, "useCacheKey"),
                            s = i.getAdUnit(e);
                        return f(e, s, o, a, c)
                    }
                    var f = (0, a.z3)("sync", (function(e, n, t, r, a) {
                        return t && (a || r !== c) ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : !(r === c && !a) || !!(e.renderer || n && n.renderer || t.renderer)
                    }), "checkVideoBidSetup")
                },
                79885: function(e, n, t) {
                    t.d(n, {
                        h: function() {
                            return c
                        },
                        z: function() {
                            return s
                        }
                    });
                    var r = t(48928),
                        i = t(3193),
                        o = t(78653);

                    function a(e, n) {
                        var t = n ? "<![CDATA[".concat(n, "]]>") : "";
                        return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(t, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                    }

                    function u(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.index,
                            r = void 0 === t ? o.K.index : t,
                            u = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
                            c = r.getAuction(e),
                            s = Number(e.ttl) + 15,
                            d = {
                                type: "xml",
                                value: u,
                                ttlseconds: s
                            };
                        return i.vc.getConfig("cache.vasttrack") && (d.bidder = e.bidder, d.bidid = e.requestId, d.aid = e.auctionId), null != c && (d.timestamp = c.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (d.key = e.customCacheKey), d
                    }

                    function c(e, n) {
                        var t = {
                            puts: e.map(u)
                        };
                        (0, r.h)(i.vc.getConfig("cache.url"), function(e) {
                            return {
                                success: function(n) {
                                    var t;
                                    try {
                                        t = JSON.parse(n).responses
                                    } catch (n) {
                                        return void e(n, [])
                                    }
                                    t ? e(null, t) : e(new Error("The cache server didn't respond with a responses property."), [])
                                },
                                error: function(n, t) {
                                    e(new Error("Error storing video ad in the cache: ".concat(n, ": ").concat(JSON.stringify(t))), [])
                                }
                            }
                        }(n), JSON.stringify(t), {
                            contentType: "text/plain",
                            withCredentials: !0
                        })
                    }

                    function s(e) {
                        return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e)
                    }
                },
                20265: function(e, n, t) {
                    function r(e, n, t, r, i) {
                        for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++) e = e ? e[n[r]] : i;
                        return e === i ? t : e
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                81432: function(e) {
                    a.SYNC = 1, a.ASYNC = 2, a.QUEUE = 4;
                    var n = Object.freeze({
                            useProxy: !0,
                            ready: 0
                        }),
                        t = new WeakMap,
                        r = "2,1,0" === [1].reduce((function(e, n, t) {
                            return [e, n, t]
                        }), 2).toString() ? Array.prototype.reduce : function(e, n) {
                            var t, r = Object(this),
                                i = r.length >>> 0,
                                o = 0;
                            if (n) t = n;
                            else {
                                for (; o < i && !(o in r);) o++;
                                t = r[o++]
                            }
                            for (; o < i;) o in r && (t = e(t, r[o], o, r)), o++;
                            return t
                        };

                    function i(e, n) {
                        return Array.prototype.slice.call(e, n)
                    }
                    var o = Object.assign || function(e) {
                        return r.call(i(arguments, 1), (function(e, n) {
                            return n && Object.keys(n).forEach((function(t) {
                                e[t] = n[t]
                            })), e
                        }), e)
                    };

                    function a(e) {
                        var u, c = {},
                            s = [];

                        function d(e, n) {
                            return "function" == typeof e ? p.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? p.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0
                        }

                        function f(e, n, t) {
                            var r = !0;
                            void 0 === n && (n = Object.getOwnPropertyNames(e), r = !1);
                            var i = {},
                                o = ["constructor"];
                            do {
                                (n = n.filter((function(n) {
                                    return !("function" != typeof e[n] || -1 !== o.indexOf(n) || n.match(/^_/))
                                }))).forEach((function(n) {
                                    var r = n.split(":"),
                                        o = r[0],
                                        a = r[1] || "sync";
                                    if (!i[o]) {
                                        var u = e[o];
                                        i[o] = e[o] = p(a, u, t ? [t, o] : void 0)
                                    }
                                })), e = Object.getPrototypeOf(e)
                            } while (r && e);
                            return i
                        }

                        function l(e) {
                            var n = Array.isArray(e) ? e : e.split(".");
                            return r.call(n, (function(t, r, i) {
                                var o = t[r],
                                    a = !1;
                                return o || (i === n.length - 1 ? (u || s.push((function() {
                                    a || console.warn("fun-hooks: referenced '" + e + "' but it was never created")
                                })), t[r] = g((function(e) {
                                    t[r] = e, a = !0
                                }))) : t[r] = {})
                            }), c)
                        }

                        function g(e) {
                            var n = [],
                                r = [],
                                i = function() {},
                                a = {
                                    before: function(e, t) {
                                        return c.call(this, n, "before", e, t)
                                    },
                                    after: function(e, n) {
                                        return c.call(this, r, "after", e, n)
                                    },
                                    getHooks: function(e) {
                                        var t = n.concat(r);
                                        "object" == typeof e && (t = t.filter((function(n) {
                                            return Object.keys(e).every((function(t) {
                                                return n[t] === e[t]
                                            }))
                                        })));
                                        try {
                                            o(t, {
                                                remove: function() {
                                                    return t.forEach((function(e) {
                                                        e.remove()
                                                    })), this
                                                }
                                            })
                                        } catch (e) {
                                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                                        }
                                        return t
                                    },
                                    removeAll: function() {
                                        return this.getHooks().remove()
                                    }
                                },
                                u = {
                                    install: function(t, o, a) {
                                        this.type = t, i = a, a(n, r), e && e(o)
                                    }
                                };
                            return t.set(a.after, u), a;

                            function c(e, t, o, a) {
                                var u = {
                                    hook: o,
                                    type: t,
                                    priority: a || 10,
                                    remove: function() {
                                        var t = e.indexOf(u); - 1 !== t && (e.splice(t, 1), i(n, r))
                                    }
                                };
                                return e.push(u), e.sort((function(e, n) {
                                    return n.priority - e.priority
                                })), i(n, r), this
                            }
                        }

                        function p(n, r, c) {
                            var d = r.after && t.get(r.after);
                            if (d) {
                                if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
                                return r
                            }
                            var f, p, v = c ? l(c) : g(),
                                h = {
                                    get: function(e, n) {
                                        return v[n] || Reflect.get.apply(Reflect, arguments)
                                    }
                                };
                            return u || s.push(m), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? p = new Proxy(r, h) : (p = function() {
                                return h.apply ? h.apply(r, this, i(arguments)) : r.apply(this, arguments)
                            }, o(p, v)), t.get(p.after).install(n, p, (function(e, t) {
                                var r, o = [];
                                e.length || t.length ? (e.forEach(a), r = o.push(void 0) - 1, t.forEach(a), f = function(e, t, a) {
                                    var u, c = 0,
                                        s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();

                                    function d(e) {
                                        "sync" === n ? u = e : s && s.apply(null, arguments)
                                    }

                                    function f(e) {
                                        if (o[c]) {
                                            var r = i(arguments);
                                            return f.bail = d, r.unshift(f), o[c++].apply(t, r)
                                        }
                                        "sync" === n ? u = e : s && s.apply(null, arguments)
                                    }
                                    return o[r] = function() {
                                        var r = i(arguments, 1);
                                        "async" === n && s && (delete f.bail, r.push(f));
                                        var o = e.apply(t, r);
                                        "sync" === n && f(o)
                                    }, f.apply(null, a), u
                                }) : f = void 0;

                                function a(e) {
                                    o.push(e.hook)
                                }
                                m()
                            })), p;

                            function m() {
                                !u && ("sync" !== n || e.ready & a.SYNC) && ("async" !== n || e.ready & a.ASYNC) ? "sync" !== n && e.ready & a.QUEUE ? h.apply = function() {
                                    var e = arguments;
                                    s.push((function() {
                                        p.apply(e[1], e[2])
                                    }))
                                } : h.apply = function() {
                                    throw "fun-hooks: hooked function not ready"
                                } : h.apply = f
                            }
                        }
                        return (e = o({}, n, e)).ready ? d.ready = function() {
                            u = !0,
                                function(e) {
                                    for (var n; n = e.shift();) n()
                                }(s)
                        } : u = !0, d.get = l, d
                    }
                    e.exports = a
                },
                77079: function(e) {
                    e.exports = function e(n) {
                        var t = Array.isArray(n) ? [] : {};
                        for (var r in n) {
                            var i = n[r];
                            t[r] = i && "object" == typeof i ? e(i) : i
                        }
                        return t
                    }
                },
                30907: function(e, n, t) {
                    function r(e, n) {
                        (null == n || n > e.length) && (n = e.length);
                        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                        return r
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                83878: function(e, n, t) {
                    function r(e) {
                        if (Array.isArray(e)) return e
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                45057: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    });
                    var r = t(30907);

                    function i(e) {
                        if (Array.isArray(e)) return (0, r.Z)(e)
                    }
                },
                97326: function(e, n, t) {
                    function r(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                26983: function(e, n, t) {
                    function r(e, n) {
                        return n.get ? n.get.call(e) : n.value
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                86011: function(e, n, t) {
                    function r(e, n, t) {
                        if (n.set) n.set.call(e, t);
                        else {
                            if (!n.writable) throw new TypeError("attempted to set read only private field");
                            n.value = t
                        }
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                15671: function(e, n, t) {
                    function r(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                1519: function(e, n, t) {
                    function r(e, n, t) {
                        if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
                        return n.get(e)
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                18916: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return o
                        }
                    });
                    var r = t(26983),
                        i = t(1519);

                    function o(e, n) {
                        var t = (0, i.Z)(e, n, "get");
                        return (0, r.Z)(e, t)
                    }
                },
                42793: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return o
                        }
                    });
                    var r = t(86011),
                        i = t(1519);

                    function o(e, n, t) {
                        var o = (0, i.Z)(e, n, "set");
                        return (0, r.Z)(e, o, t), t
                    }
                },
                43144: function(e, n, t) {
                    function r(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var r = n[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    function i(e, n, t) {
                        return n && r(e.prototype, n), t && r(e, t), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                    }
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    })
                },
                4942: function(e, n, t) {
                    function r(e, n, t) {
                        return n in e ? Object.defineProperty(e, n, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = t, e
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                88301: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    });
                    var r = t(18415);

                    function i() {
                        return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, n, t) {
                            var i = (0, r.Z)(e, n);
                            if (i) {
                                var o = Object.getOwnPropertyDescriptor(i, n);
                                return o.get ? o.get.call(arguments.length < 3 ? e : t) : o.value
                            }
                        }, i.apply(this, arguments)
                    }
                },
                61120: function(e, n, t) {
                    function r(e) {
                        return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        }, r(e)
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                60136: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    });
                    var r = t(89611);

                    function i(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), n && (0, r.Z)(e, n)
                    }
                },
                59199: function(e, n, t) {
                    function r(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                31902: function(e, n, t) {
                    function r(e, n) {
                        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, i, o = [],
                                a = !0,
                                u = !1;
                            try {
                                for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                            } catch (e) {
                                u = !0, i = e
                            } finally {
                                try {
                                    a || null == t.return || t.return()
                                } finally {
                                    if (u) throw i
                                }
                            }
                            return o
                        }
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                25267: function(e, n, t) {
                    function r() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                42786: function(e, n, t) {
                    function r() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                82963: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return o
                        }
                    });
                    var r = t(71002),
                        i = t(97326);

                    function o(e, n) {
                        if (n && ("object" === (0, r.Z)(n) || "function" == typeof n)) return n;
                        if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                        return (0, i.Z)(e)
                    }
                },
                89611: function(e, n, t) {
                    function r(e, n) {
                        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
                            return e.__proto__ = n, e
                        }, r(e, n)
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                93324: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return u
                        }
                    });
                    var r = t(83878),
                        i = t(31902),
                        o = t(40181),
                        a = t(25267);

                    function u(e, n) {
                        return (0, r.Z)(e) || (0, i.Z)(e, n) || (0, o.Z)(e, n) || (0, a.Z)()
                    }
                },
                18415: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    });
                    var r = t(61120);

                    function i(e, n) {
                        for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = (0, r.Z)(e)););
                        return e
                    }
                },
                89062: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return u
                        }
                    });
                    var r = t(45057),
                        i = t(59199),
                        o = t(40181),
                        a = t(42786);

                    function u(e) {
                        return (0, r.Z)(e) || (0, i.Z)(e) || (0, o.Z)(e) || (0, a.Z)()
                    }
                },
                71002: function(e, n, t) {
                    function r(e) {
                        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, r(e)
                    }
                    t.d(n, {
                        Z: function() {
                            return r
                        }
                    })
                },
                40181: function(e, n, t) {
                    t.d(n, {
                        Z: function() {
                            return i
                        }
                    });
                    var r = t(30907);

                    function i(e, n) {
                        if (e) {
                            if ("string" == typeof e) return (0, r.Z)(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, r.Z)(e, n) : void 0
                        }
                    }
                },
                96475: function(e, n, t) {
                    function r(e, n, t) {
                        n.split && (n = n.split("."));
                        for (var r, i, o = 0, a = n.length, u = e; o < a && "__proto__" !== (i = n[o++]) && "constructor" !== i && "prototype" !== i;) u = u[i] = o === a ? t : typeof(r = u[i]) == typeof n ? r : 0 * n[o] != 0 || ~("" + n[o]).indexOf(".") ? {} : []
                    }
                    t.d(n, {
                        N: function() {
                            return r
                        }
                    })
                },
                5644: function(e) {
                    e.exports = JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"GOOD":1,"NO_BID":2},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyLink","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}')
                }
            },
            t = {};

        function r(e) {
            var i = t[e];
            if (void 0 !== i) return i.exports;
            var o = t[e] = {
                exports: {}
            };
            return n[e].call(o.exports, o, o.exports, r), o.exports
        }
        r.m = n, e = [], r.O = function(n, t, i, o) {
                if (!t) {
                    var a = 1 / 0;
                    for (d = 0; d < e.length; d++) {
                        t = e[d][0], i = e[d][1], o = e[d][2];
                        for (var u = !0, c = 0; c < t.length; c++)(!1 & o || a >= o) && Object.keys(r.O).every((function(e) {
                            return r.O[e](t[c])
                        })) ? t.splice(c--, 1) : (u = !1, o < a && (a = o));
                        if (u) {
                            e.splice(d--, 1);
                            var s = i();
                            void 0 !== s && (n = s)
                        }
                    }
                    return n
                }
                o = o || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                e[d] = [t, i, o]
            }, r.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(n, {
                    a: n
                }), n
            }, r.d = function(e, n) {
                for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n[t]
                })
            }, r.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window) return window
                }
            }(), r.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }, r.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            },
            function() {
                var e = {
                    5602: 0
                };
                r.O.j = function(n) {
                    return 0 === e[n]
                };
                var n = function(n, t) {
                        var i, o, a = t[0],
                            u = t[1],
                            c = t[2],
                            s = 0;
                        if (a.some((function(n) {
                                return 0 !== e[n]
                            }))) {
                            for (i in u) r.o(u, i) && (r.m[i] = u[i]);
                            if (c) var d = c(r)
                        }
                        for (n && n(t); s < a.length; s++) o = a[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                        return r.O(d)
                    },
                    t = self.pbjsChunk = self.pbjsChunk || [];
                t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
            }();
        var i = r(23866);
        i = r.O(i)
    }();
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [2355], {
            95590: function(o, n, i) {
                function t() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                }
                i.d(n, {
                    P: function() {
                        return t
                    }
                })
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [4645], {
            3801: function(e, r, i) {
                var t = i(89062),
                    n = i(93324),
                    a = i(71002),
                    d = i(14699),
                    s = i(24679),
                    o = i(64358),
                    p = i(20265),
                    u = i(96475),
                    c = i(3193),
                    m = i(35706),
                    v = i(70059),
                    l = c.vc.getConfig,
                    f = {
                        0: "title",
                        2: "icon",
                        3: "image",
                        5: "sponsoredBy",
                        4: "body",
                        1: "cta"
                    },
                    g = {
                        title: {
                            id: 0,
                            name: "title"
                        },
                        icon: {
                            id: 2,
                            type: 1,
                            name: "img"
                        },
                        image: {
                            id: 3,
                            type: 3,
                            name: "img"
                        },
                        sponsoredBy: {
                            id: 5,
                            name: "data",
                            type: 1
                        },
                        body: {
                            id: 4,
                            name: "data",
                            type: 2
                        },
                        cta: {
                            id: 1,
                            type: 12,
                            name: "data"
                        }
                    },
                    h = {
                        code: "adf",
                        aliases: [{
                            code: "adformOpenRTB",
                            gvlid: 50
                        }, {
                            code: "adform",
                            gvlid: 50
                        }],
                        gvlid: 50,
                        supportedMediaTypes: [s.B5, s.Mk, s.pX],
                        isBidRequestValid: function(e) {
                            var r = e.params || {},
                                i = r.mid,
                                t = r.inv,
                                n = r.mname;
                            return !!(i || t && n)
                        },
                        buildRequests: function(e, r) {
                            var i, t;
                            e = (0, v.lY)(e);
                            var d = r.ortb2 || {},
                                s = d.user;
                            "object" === (0, a.Z)(l("app")) ? (i = l("app") || {}, d.app && (0, o.mergeDeep)(i, d.app)) : (t = l("site") || {}, d.site && (0, o.mergeDeep)(t, d.site), t.page || (t.page = r.refererInfo.page));
                            var m = l("device") || {};
                            m.w = m.w || window.innerWidth, m.h = m.h || window.innerHeight, m.ua = m.ua || navigator.userAgent;
                            var f = y(e, "params.adxDomain") || "adx.adform.net",
                                h = y(e, "params.pt") || y(e, "params.priceType") || "net",
                                w = r.auctionId,
                                x = y(e, "params.test"),
                                k = l("currency.adServerCurrency"),
                                T = k && [k],
                                C = y(e, "userIdAsEids"),
                                I = y(e, "schain"),
                                Z = e.map((function(e, r) {
                                    e.netRevenue = h;
                                    var i = e.getFloor ? e.getFloor({
                                            currency: k || "USD"
                                        }) : {},
                                        t = i.floor,
                                        a = i.currency,
                                        d = e.params,
                                        s = {
                                            id: r + 1,
                                            tagid: d.mid,
                                            bidfloor: t,
                                            bidfloorcur: a,
                                            ext: {
                                                bidder: {
                                                    inv: d.inv,
                                                    mname: d.mname
                                                }
                                            }
                                        },
                                        u = (0, o._map)(e.nativeParams, (function(e, r) {
                                            var i = g[r],
                                                t = {
                                                    required: 1 & e.required
                                                };
                                            if (i) {
                                                var n, a, d, s;
                                                t.id = i.id;
                                                var o = e.aspect_ratios;
                                                if (o && o[0] && (n = (o = o[0]).min_width || 0, a = o.ratio_height * n / o.ratio_width | 0), e.sizes) {
                                                    var p = b(e.sizes);
                                                    d = p[0], s = p[1]
                                                }
                                                return t[i.name] = {
                                                    len: e.len,
                                                    type: i.type,
                                                    wmin: n,
                                                    hmin: a,
                                                    w: d,
                                                    h: s
                                                }, t
                                            }
                                        })).filter(Boolean);
                                    u.length && (s.native = {
                                        request: {
                                            assets: u
                                        }
                                    });
                                    var c = (0, p.Z)(e, "mediaTypes.banner");
                                    if (c && c.sizes) {
                                        var m = (0, o.parseSizesInput)(c.sizes).map((function(e) {
                                            var r = e.split("x"),
                                                i = (0, n.Z)(r, 2),
                                                t = i[0],
                                                a = i[1];
                                            return {
                                                w: parseInt(t, 10),
                                                h: parseInt(a, 10)
                                            }
                                        }));
                                        s.banner = {
                                            format: m
                                        }
                                    }
                                    var v = (0, p.Z)(e, "mediaTypes.video");
                                    return v && (s.video = v), s
                                })),
                                B = {
                                    id: r.auctionId,
                                    site: t,
                                    app: i,
                                    user: s,
                                    device: m,
                                    source: {
                                        tid: w,
                                        fd: 1
                                    },
                                    ext: {
                                        pt: h
                                    },
                                    cur: T,
                                    imp: Z
                                };
                            return x && (B.is_debug = !!x, B.test = 1), c.vc.getConfig("coppa") && (0, u.N)(B, "regs.coppa", 1), void 0 !== (0, p.Z)(r, "gdprConsent.gdprApplies") && ((0, u.N)(B, "user.ext.consent", r.gdprConsent.consentString), (0, u.N)(B, "regs.ext.gdpr", 1 & r.gdprConsent.gdprApplies)), r.uspConsent && (0, u.N)(B, "regs.ext.us_privacy", r.uspConsent), C && (0, u.N)(B, "user.ext.eids", C), I && (0, u.N)(B, "source.ext.schain", I), {
                                method: "POST",
                                url: "https://" + f + "/adx/openrtb",
                                data: JSON.stringify(B),
                                bids: e
                            }
                        },
                        interpretResponse: function(e, r) {
                            var i = r.bids;
                            if (e.body) {
                                var t = e.body,
                                    n = t.seatbid,
                                    a = t.cur,
                                    d = b(n.map((function(e) {
                                        return e.bid
                                    }))).reduce((function(e, r) {
                                        return e[r.impid - 1] = r, e
                                    }), []);
                                return i.map((function(e, r) {
                                    var i = d[r];
                                    if (i) {
                                        var t = (0, p.Z)(i, "ext.prebid.type"),
                                            n = {
                                                requestId: e.bidId,
                                                cpm: i.price,
                                                creativeId: i.crid,
                                                ttl: 360,
                                                netRevenue: "net" === e.netRevenue,
                                                currency: a,
                                                mediaType: t,
                                                width: i.w,
                                                height: i.h,
                                                dealId: i.dealid,
                                                meta: {
                                                    mediaType: t,
                                                    advertiserDomains: i.adomain
                                                }
                                            };
                                        return i.native ? n.native = function(e) {
                                            var r = e.native,
                                                i = r.assets,
                                                t = r.link,
                                                n = r.imptrackers,
                                                a = r.jstracker,
                                                d = {
                                                    clickUrl: t.url,
                                                    clickTrackers: t.clicktrackers || void 0,
                                                    impressionTrackers: n || void 0,
                                                    javascriptTrackers: a ? [a] : void 0
                                                };
                                            return i.forEach((function(e) {
                                                var r = f[e.id],
                                                    i = r && e[g[r].name];
                                                i && (d[r] = i.text || i.value || {
                                                    url: i.url,
                                                    width: i.w,
                                                    height: i.h
                                                })
                                            })), d
                                        }(i) : n[t === s.pX ? "vastXml" : "ad"] = i.adm, e.renderer || t !== s.pX || "outstream" !== (0, p.Z)(e, "mediaTypes.video.context") || (n.renderer = m.Th.install({
                                            id: e.bidId,
                                            url: "https://s2.adform.net/banners/scripts/video/outstream/render.js",
                                            adUnitCode: e.adUnitCode
                                        }), n.renderer.setRender(w)), n
                                    }
                                })).filter(Boolean)
                            }
                        }
                    };

                function y(e, r) {
                    for (var i, t = 0; t < e.length; t++)
                        if (i = (0, p.Z)(e[t], r)) return i
                }

                function b(e) {
                    var r;
                    return (r = []).concat.apply(r, (0, t.Z)(e))
                }

                function w(e) {
                    e.renderer.push((function() {
                        window.Adform.renderOutstream(e)
                    }))
                }(0, d.dX)(h), window.pbjs.installedModules.push("adfBidAdapter")
            }
        },
        function(e) {
            var r;
            r = 3801, e(e.s = r)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [592], {
            9903: function(e, r, a) {
                var n = a(20265),
                    t = a(64358),
                    i = a(14699),
                    s = a(24679),
                    d = a(3193),
                    o = a(34614),
                    u = {},
                    c = {
                        code: "adtarget",
                        supportedMediaTypes: [s.pX, s.Mk],
                        isBidRequestValid: function(e) {
                            return !!(0, n.Z)(e, "params.aid")
                        },
                        getUserSyncs: function(e, r) {
                            var a = [];

                            function n(r) {
                                var n = r.cookieURLs,
                                    t = r.cookieURLSTypes || [];
                                Array.isArray(n) && n.forEach((function(r, n) {
                                    var i = t[n] || "image";
                                    !e.pixelEnabled && "image" === i || !e.iframeEnabled && "iframe" === i || u[r] || (u[r] = !0, a.push({
                                        type: i,
                                        url: r
                                    }))
                                }))
                            }
                            return (e.pixelEnabled || e.iframeEnabled) && (0, t.isArray)(r) && r.forEach((function(e) {
                                e.body && ((0, t.isArray)(e.body) ? e.body.forEach((function(e) {
                                    n(e)
                                })) : n(e.body))
                            })), a
                        },
                        buildRequests: function(e, r) {
                            var a = d.vc.getConfig(r.bidderCode),
                                i = (0, n.Z)(a, "chunkSize", 10),
                                s = function(e, r) {
                                    var a = {
                                        Domain: (0, n.Z)(r, "refererInfo.page")
                                    };
                                    !0 === d.vc.getConfig("coppa") && (a.Coppa = 1);
                                    (0, n.Z)(r, "gdprConsent.gdprApplies") && (a.GDPR = 1, a.GDPRConsent = (0, n.Z)(r, "gdprConsent.consentString"));
                                    (0, n.Z)(r, "uspConsent") && (a.USP = (0, n.Z)(r, "uspConsent"));
                                    (0, n.Z)(e[0], "schain") && (a.Schain = (0, n.Z)(e[0], "schain"));
                                    (0, n.Z)(e[0], "userId") && (a.UserIds = (0, n.Z)(e[0], "userId"));
                                    for (var t = [], i = 0, s = e.length; i < s; i++) {
                                        var o = f(e[i]);
                                        t.push(o)
                                    }
                                    return {
                                        tag: a,
                                        bids: t
                                    }
                                }(e, r),
                                o = s.tag,
                                u = s.bids,
                                c = (0, t.chunk)(u, i);
                            return (0, t._map)(c, (function(e) {
                                return {
                                    data: Object.assign({}, o, {
                                        BidRequests: e
                                    }),
                                    adapterRequest: r,
                                    method: "POST",
                                    url: "https://ghb.console.adtarget.com.tr/v2/auction/"
                                }
                            }))
                        },
                        interpretResponse: function(e, r) {
                            var a = r.adapterRequest;
                            e = e.body;
                            var n = [];
                            return (0, t.isArray)(e) ? (e.forEach((function(e) {
                                n = (0, t.flatten)(n, p(e, a))
                            })), n) : p(e, a)
                        }
                    };

                function p(e, r) {
                    var a = !e || !(0, t.isArray)(e.bids),
                        i = [];
                    if (a) {
                        var d = e && e.ext && e.ext.message ? ": ".concat(e.ext.message) : "",
                            u = "in response for ".concat(r.bidderCode, " adapter ").concat(d);
                        return (0, t.logError)(u), i
                    }
                    return e.bids.forEach((function(e) {
                        var a = (0, o.sE)(r.bids, (function(r) {
                            return r.bidId === e.requestId
                        }));
                        if (0 !== e.cpm && void 0 !== a) {
                            var t = function(e, r) {
                                var a = (i = r, (0, n.Z)(i, "mediaTypes.video") ? s.pX : s.Mk),
                                    t = {
                                        requestId: e.requestId,
                                        creativeId: e.cmpId,
                                        height: e.height,
                                        currency: e.cur,
                                        width: e.width,
                                        cpm: e.cpm,
                                        netRevenue: !0,
                                        mediaType: a,
                                        ttl: 300,
                                        meta: {
                                            advertiserDomains: e.adomain || []
                                        }
                                    };
                                var i;
                                if (a === s.Mk) return Object.assign(t, {
                                    ad: e.ad
                                });
                                return Object.assign(t, {
                                    vastUrl: e.vastUrl
                                }), t
                            }(e, a);
                            i.push(t)
                        }
                    })), i
                }

                function f(e) {
                    var r = (0, n.Z)(e, "mediaTypes.video") ? s.pX : "display",
                        a = r === s.pX ? (0, n.Z)(e, "mediaTypes.video.playerSize") : (0, n.Z)(e, "mediaTypes.banner.sizes");
                    return {
                        CallbackId: e.bidId,
                        Aid: e.params.aid,
                        AdType: r,
                        Sizes: (0, t.parseSizesInput)(a).join(",")
                    }
                }(0, i.dX)(c), window.pbjs.installedModules.push("adtargetBidAdapter")
            }
        },
        function(e) {
            var r;
            r = 9903, e(e.s = r)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [1266], {
            55630: function(n, e, t) {
                var o, a, r, i, c, s, l = t(71002),
                    d = t(4942),
                    u = t(64358),
                    f = t(3193),
                    p = t(9528),
                    g = t(34614),
                    m = t(99128),
                    v = !1,
                    b = {
                        iab: function(n) {
                            var e = n.onSuccess,
                                t = n.onError;

                            function o(n, o) {
                                (0, u.logInfo)("Received a response from CMP", n), o ? !1 === n.gdprApplies || "tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus ? M(n, {
                                    onSuccess: e,
                                    onError: t
                                }) : s = n : t("CMP unable to register callback function.  Please check CMP setup.")
                            }
                            var a = {},
                                r = function() {
                                    for (var n, e, t = window;;) {
                                        try {
                                            if ("function" == typeof t.__tcfapi) {
                                                e = t.__tcfapi, n = t;
                                                break
                                            }
                                        } catch (n) {}
                                        try {
                                            if (t.frames.__tcfapiLocator) {
                                                n = t;
                                                break
                                            }
                                        } catch (n) {}
                                        if (t === window.top) break;
                                        t = t.parent
                                    }
                                    return {
                                        cmpFrame: n,
                                        cmpFunction: e
                                    }
                                }(),
                                i = r.cmpFrame,
                                c = r.cmpFunction;
                            if (!i) return t("CMP not found.");
                            "function" == typeof c ? ((0, u.logInfo)("Detected CMP API is directly accessible, calling it now..."), c("addEventListener", 2, o)) : ((0, u.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), function(n, e, t) {
                                var o = "__tcfapi",
                                    r = "".concat(o, "Call");

                                function i(n) {
                                    var e = "".concat(o, "Return"),
                                        t = "string" == typeof n.data && (0, g.q9)(n.data, e) ? JSON.parse(n.data) : n.data;
                                    if (t[e] && t[e].callId) {
                                        var r = t[e];
                                        a.hasOwnProperty(r.callId) && a[r.callId](r.returnValue, r.success)
                                    }
                                }
                                window[o] = function(n, t, o, i) {
                                    var c = Math.random() + "",
                                        s = (0, d.Z)({}, r, {
                                            command: n,
                                            version: t,
                                            parameter: i,
                                            callId: c
                                        });
                                    a[c] = o, e.postMessage(s, "*")
                                }, window.addEventListener("message", i, !1), window[o](n, 2, t)
                            }("addEventListener", i, o))
                        },
                        static: function(n) {
                            var e = n.onSuccess,
                                t = n.onError;
                            M(i, {
                                onSuccess: e,
                                onError: t
                            })
                        }
                    };

                function y(n) {
                    var e = !1,
                        t = null;

                    function r(o, a, r) {
                        if (null != t && clearTimeout(t), e = !0, p.rp.setConsentData(o), "function" == typeof n) {
                            for (var i = arguments.length, c = new Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) c[s - 3] = arguments[s];
                            n.apply(void 0, [a, r].concat(c))
                        }
                    }
                    if ((0, g.q9)(Object.keys(b), o)) {
                        var i = {
                            onSuccess: function(n) {
                                return r(n, !1)
                            },
                            onError: function(n) {
                                for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) t[o - 1] = arguments[o];
                                r.apply(void 0, [null, !0, n].concat(t))
                            }
                        };
                        if (b[o](i), !e) {
                            var c = function() {
                                var n = function(n) {
                                    r(n, !1, "CMP did not load, continuing auction...")
                                };
                                M(s, {
                                    onSuccess: n,
                                    onError: function() {
                                        return n(C(void 0))
                                    }
                                })
                            };
                            0 === a ? c() : t = setTimeout(c, a)
                        }
                    } else r(null, !1, "CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction."))
                }
                var w = (0, m.g3)("gdpr", (function(n, e) {
                    var t;
                    t = function(t, o) {
                        if (o) {
                            var a = u.logWarn;
                            t && (a = u.logError, o = "".concat(o, " Canceling auction as per consentManagement config."));
                            for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), c = 2; c < r; c++) i[c - 2] = arguments[c];
                            a.apply(void 0, [o].concat(i))
                        }
                        t ? (n.stopTiming(), "function" == typeof e.bidsBackHandler ? e.bidsBackHandler() : (0, u.logError)("Error executing bidsBackHandler")) : n.call(this, e)
                    }, c ? ((0, u.logInfo)("User consent information already known.  Pulling internally stored information..."), t(!1)) : y(t)
                }));

                function M(n, e) {
                    var t, a, i = e.onSuccess,
                        c = e.onError;
                    "static" === o && (n = n.getTCData), t = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : r, a = n && n.tcString, "boolean" == typeof t && (!0 !== t || a && (0, u.isStr)(a)) ? i(C(n)) : c("CMP returned unexpected value during lookup process.", n)
                }

                function C(n) {
                    return c = {
                        consentString: n ? n.tcString : void 0,
                        vendorData: n || void 0,
                        gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : r
                    }, n && n.addtlConsent && (0, u.isStr)(n.addtlConsent) && (c.addtlConsent = n.addtlConsent), c.apiVersion = 2, c
                }
                f.vc.getConfig("consentManagement", (function(n) {
                    return function(n) {
                        (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === (0, l.Z)(n) ? ((0, u.isStr)(n.cmpApi) ? o = n.cmpApi : (o = "iab", (0, u.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), (0, u.isNumber)(n.timeout) ? a = n.timeout : (a = 1e4, (0, u.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), r = !0 === n.defaultGdprScope, (0, u.logInfo)("consentManagement module has been activated..."), "static" === o && ((0, u.isPlainObject)(n.consentData) ? (i = n.consentData, a = 0) : (0, u.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), v || pbjs.requestBids.before(w, 50), v = !0, p.rp.enable(), y()) : (0, u.logWarn)("consentManagement config not defined, exiting consent manager")
                    }(n.consentManagement)
                })), window.pbjs.installedModules.push("consentManagement")
            }
        },
        function(n) {
            var e;
            e = 55630, n(n.s = e)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [6406], {
            60241: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                var _src_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64358),
                    _src_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20265),
                    _src_adloader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55730),
                    _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14699),
                    _src_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3193),
                    _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24679),
                    _src_polyfill_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34614),
                    criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1582),
                    _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15164),
                    _src_native_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70059),
                    _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25102),
                    _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17673),
                    GVLID = 91,
                    ADAPTER_VERSION = 34,
                    BIDDER_CODE = "criteo",
                    CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
                    PROFILE_ID_INLINE = 207,
                    PROFILE_ID_PUBLISHERTAG = 185,
                    storage = (0, _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({
                        gvlid: GVLID,
                        bidderCode: BIDDER_CODE
                    }),
                    LOG_PREFIX = "Criteo: ",
                    FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
                    FAST_BID_VERSION_CURRENT = 130,
                    FAST_BID_VERSION_LATEST = "latest",
                    FAST_BID_VERSION_NONE = "none",
                    PUBLISHER_TAG_URL_TEMPLATE = "https://static.criteo.net/js/ld/publishertag.prebid" + FAST_BID_VERSION_PLACEHOLDER + ".js",
                    FAST_BID_PUBKEY_E = 65537,
                    FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
                    SID_COOKIE_NAME = "cto_sid",
                    IDCPY_COOKIE_NAME = "cto_idcpy",
                    LWID_COOKIE_NAME = "cto_lwid",
                    OPTOUT_COOKIE_NAME = "cto_optout",
                    BUNDLE_COOKIE_NAME = "cto_bundle",
                    GUID_RETENTION_TIME_HOUR = 9360,
                    OPTOUT_RETENTION_TIME_HOUR = 43200,
                    spec = {
                        code: BIDDER_CODE,
                        gvlid: GVLID,
                        supportedMediaTypes: [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5],
                        getUserSyncs: function(t, e, r, i) {
                            if (canFastBid(_src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"))) return [];
                            var o = (0, _src_refererDetection_js__WEBPACK_IMPORTED_MODULE_4__.nH)(),
                                a = "criteoPrebidAdapter";
                            if (t.iframeEnabled && (0, _src_utils_gpdr_js__WEBPACK_IMPORTED_MODULE_5__.h)(r)) {
                                var s = [];
                                s.push("origin=".concat(a)), s.push("topUrl=".concat(o.domain)), r && (r.gdprApplies && s.push("gdpr=".concat(1 == r.gdprApplies ? 1 : 0)), r.consentString && s.push("gdpr_consent=".concat(r.consentString))), i && s.push("us_privacy=".concat(i));
                                var n = Math.random().toString(),
                                    _ = {
                                        bundle: readFromAllStorages(BUNDLE_COOKIE_NAME),
                                        cw: storage.cookiesAreEnabled(),
                                        localWebId: readFromAllStorages(LWID_COOKIE_NAME),
                                        lsw: storage.localStorageIsEnabled(),
                                        optoutCookie: readFromAllStorages(OPTOUT_COOKIE_NAME),
                                        origin: a,
                                        requestId: n,
                                        secureIdCookie: readFromAllStorages(SID_COOKIE_NAME),
                                        tld: o.domain,
                                        topUrl: o.domain,
                                        uid: readFromAllStorages(IDCPY_COOKIE_NAME),
                                        version: "7.19.0".replace(/\./g, "_")
                                    };
                                window.addEventListener("message", (function t(e) {
                                    if (e.data && "https://gum.criteo.com" == e.origin && e.data.requestId === n) {
                                        this.removeEventListener("message", t), e.stopImmediatePropagation();
                                        var r = e.data;
                                        r.optout ? (deleteFromAllStorages(IDCPY_COOKIE_NAME), deleteFromAllStorages(SID_COOKIE_NAME), deleteFromAllStorages(BUNDLE_COOKIE_NAME), deleteFromAllStorages(LWID_COOKIE_NAME), saveOnAllStorages(OPTOUT_COOKIE_NAME, !0, OPTOUT_RETENTION_TIME_HOUR)) : (r.uid && saveOnAllStorages(IDCPY_COOKIE_NAME, r.uid, GUID_RETENTION_TIME_HOUR), r.bundle && saveOnAllStorages(BUNDLE_COOKIE_NAME, r.bundle, GUID_RETENTION_TIME_HOUR), r.removeSid ? deleteFromAllStorages(SID_COOKIE_NAME) : r.sid && saveOnAllStorages(SID_COOKIE_NAME, r.sid, GUID_RETENTION_TIME_HOUR))
                                    }
                                }), !0);
                                var d = JSON.stringify(_).replace(/"/g, "%22");
                                return [{
                                    type: "iframe",
                                    url: "https://gum.criteo.com/syncframe?".concat(s.join("&"), "#").concat(d)
                                }]
                            }
                            return []
                        },
                        isBidRequestValid: function(t) {
                            return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t))
                        },
                        buildRequests: function(t, e) {
                            var r, i, o, a;
                            t = (0, _src_native_js__WEBPACK_IMPORTED_MODULE_6__.lY)(t);
                            var s = e.ortb2 || {};
                            Object.assign(e, {
                                publisherExt: null === (r = s.site) || void 0 === r ? void 0 : r.ext,
                                userExt: null === (i = s.user) || void 0 === i ? void 0 : i.ext,
                                ceh: _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.ceh"),
                                coppa: _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("coppa")
                            });
                            var n = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"),
                                _ = canFastBid(n);
                            if (!publisherTagAvailable() && _) {
                                window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid();
                                var d = getFastBidUrl(n);
                                setTimeout((function() {
                                    (0, _src_adloader_js__WEBPACK_IMPORTED_MODULE_7__.B)(d, BIDDER_CODE)
                                }), e.timeout)
                            }
                            if (publisherTagAvailable()) {
                                var c = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "7.19.0");
                                o = c.buildCdbUrl(), a = c.buildCdbRequest()
                            } else {
                                var p = buildContext(t, e);
                                o = buildCdbUrl(p), a = buildCdbRequest(p, t, e)
                            }
                            if (a) return {
                                method: "POST",
                                url: o,
                                data: a,
                                bidRequests: t
                            }
                        },
                        interpretResponse: function(t, e) {
                            var r = t.body || t;
                            if (publisherTagAvailable()) {
                                var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
                                if (i) return i.interpretResponse(r, e)
                            }
                            var o = [];
                            return r && r.slots && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.isArray)(r.slots) && r.slots.forEach((function(i) {
                                var a, s, n, _, d = (0, _src_polyfill_js__WEBPACK_IMPORTED_MODULE_9__.sE)(e.bidRequests, (function(t) {
                                        return t.adUnitCode === i.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === i.zoneid)
                                    })),
                                    c = d.bidId,
                                    p = {
                                        requestId: c,
                                        cpm: i.cpm,
                                        currency: i.currency,
                                        netRevenue: !0,
                                        ttl: i.ttl || 60,
                                        creativeId: i.creativecode,
                                        width: i.width,
                                        height: i.height,
                                        dealId: i.dealCode
                                    };
                                if (null !== (a = r.ext) && void 0 !== a && null !== (s = a.paf) && void 0 !== s && s.transmission && null !== (n = i.ext) && void 0 !== n && null !== (_ = n.paf) && void 0 !== _ && _.content_id) {
                                    var u = {
                                        content_id: i.ext.paf.content_id,
                                        transmission: t.ext.paf.transmission
                                    };
                                    p.meta = Object.assign({}, p.meta, {
                                        paf: u
                                    })
                                }
                                i.adomain && (p.meta = Object.assign({}, p.meta, {
                                    advertiserDomains: i.adomain
                                })), i.native ? d.params.nativeCallback ? p.ad = createNativeAd(c, i.native, d.params.nativeCallback) : (p.native = createPrebidNativeAd(i.native), p.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5) : i.video ? (p.vastUrl = i.displayurl, p.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX) : p.ad = i.creative, o.push(p)
                            })), o
                        },
                        onTimeout: function(t) {
                            if (publisherTagAvailable() && Array.isArray(t)) {
                                var e = [];
                                t.forEach((function(t) {
                                    -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())
                                }))
                            }
                        },
                        onBidWon: function(t) {
                            publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                        },
                        onSetTargeting: function(t) {
                            publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                        }
                    };

                function readFromAllStorages(t) {
                    var e = storage.getCookie(t),
                        r = storage.getDataFromLocalStorage(t);
                    return e || r || void 0
                }

                function saveOnAllStorages(t, e, r) {
                    var i = new Date;
                    i.setTime(i.getTime() + 60 * r * 60 * 1e3);
                    var o = "expires=".concat(i.toUTCString());
                    storage.setCookie(t, e, o), storage.setDataInLocalStorage(t, e)
                }

                function deleteFromAllStorages(t) {
                    storage.setCookie(t, "", 0), storage.removeDataFromLocalStorage(t)
                }

                function publisherTagAvailable() {
                    return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
                }

                function buildContext(t, e) {
                    var r, i = "";
                    e && e.refererInfo && (i = e.refererInfo.page);
                    var o = (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.parseUrl)(null == e || null === (r = e.refererInfo) || void 0 === r ? void 0 : r.topmostLocation).search,
                        a = {
                            url: i,
                            debug: "1" === o.pbt_debug,
                            noLog: "1" === o.pbt_nolog,
                            amp: !1
                        };
                    return t.forEach((function(t) {
                        "amp" === t.params.integrationMode && (a.amp = !0)
                    })), a
                }

                function buildCdbUrl(t) {
                    var e = CDB_ENDPOINT;
                    e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("7.19.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), storage.localStorageIsEnabled() ? e += "&lsavail=1" : e += "&lsavail=0", t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1");
                    var r = readFromAllStorages(BUNDLE_COOKIE_NAME);
                    r && (e += "&bundle=".concat(r)), readFromAllStorages(OPTOUT_COOKIE_NAME) && (e += "&optout=1");
                    var i = readFromAllStorages(SID_COOKIE_NAME);
                    i && (e += "&sid=".concat(i));
                    var o = readFromAllStorages(IDCPY_COOKIE_NAME);
                    return o && (e += "&idcpy=".concat(o)), e
                }

                function checkNativeSendId(t) {
                    return !(t.nativeParams && (t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys)))
                }

                function buildCdbRequest(t, e, r) {
                    var i, o, a = {
                        publisher: {
                            url: t.url,
                            ext: r.publisherExt
                        },
                        regs: {
                            coppa: !0 === r.coppa ? 1 : !1 === r.coppa ? 0 : void 0
                        },
                        slots: e.map((function(t) {
                            i = t.params.networkId || i, o = t.schain || o;
                            var e = {
                                impid: t.adUnitCode,
                                transactionid: t.transactionId,
                                auctionId: t.auctionId
                            };
                            if (t.params.zoneId && (e.zoneid = t.params.zoneId), (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "ortb2Imp.ext") && (e.ext = t.ortb2Imp.ext), t.params.ext && (e.ext = Object.assign({}, e.ext, t.params.ext)), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), (t.params.nativeCallback || hasNativeMediaType(t)) && (e.native = !0, checkNativeSendId(t) || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)")), hasBannerMediaType(t) ? e.sizes = parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.banner.sizes"), parseSize) : e.sizes = [], hasVideoMediaType(t)) {
                                var r = {
                                        playersizes: parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.video.playerSize"), parseSize),
                                        mimes: t.mediaTypes.video.mimes,
                                        protocols: t.mediaTypes.video.protocols,
                                        maxduration: t.mediaTypes.video.maxduration,
                                        api: t.mediaTypes.video.api,
                                        skip: t.mediaTypes.video.skip,
                                        placement: t.mediaTypes.video.placement,
                                        minduration: t.mediaTypes.video.minduration,
                                        playbackmethod: t.mediaTypes.video.playbackmethod,
                                        startdelay: t.mediaTypes.video.startdelay
                                    },
                                    a = t.params.video;
                                void 0 !== a && (r.skip = r.skip || a.skip || 0, r.placement = r.placement || a.placement, r.minduration = r.minduration || a.minduration, r.playbackmethod = r.playbackmethod || a.playbackmethod, r.startdelay = r.startdelay || a.startdelay || 0), e.video = r
                            }
                            return enrichSlotWithFloors(e, t), e
                        }))
                    };
                    return i && (a.publisher.networkid = i), o && (a.source = {
                        ext: {
                            schain: o
                        }
                    }), a.user = {
                        ext: r.userExt
                    }, r && r.ceh && (a.user.ceh = r.ceh), r && r.gdprConsent && (a.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (a.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), a.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (a.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (a.user.uspIab = r.uspConsent), a
                }

                function parseSizes(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
                        return t
                    };
                    return null == t ? [] : Array.isArray(t[0]) ? t.map((function(t) {
                        return e(t)
                    })) : [e(t)]
                }

                function parseSize(t) {
                    return t[0] + "x" + t[1]
                }

                function hasVideoMediaType(t) {
                    return void 0 !== (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.video")
                }

                function hasBannerMediaType(t) {
                    return void 0 !== (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.banner")
                }

                function hasNativeMediaType(t) {
                    return void 0 !== (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.native")
                }

                function hasValidVideoMediaType(t) {
                    var e = !0;
                    if (["mimes", "playerSize", "maxduration", "protocols", "api", "skip", "placement", "playbackmethod"].forEach((function(r) {
                            void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "mediaTypes.video." + r) && void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(t, "params.video." + r) && (e = !1, (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logError)("Criteo Bid Adapter: mediaTypes.video." + r + " is required"))
                        })), e) {
                        var r = t.mediaTypes.video.placement || t.params.video.placement;
                        if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
                        if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0
                    }
                    return !1
                }

                function createPrebidNativeAd(t) {
                    return {
                        sendTargetingKeys: !1,
                        title: t.products[0].title,
                        body: t.products[0].description,
                        sponsoredBy: t.advertiser.description,
                        icon: t.advertiser.logo,
                        image: t.products[0].image,
                        clickUrl: t.products[0].click_url,
                        privacyLink: t.privacy.optout_click_url,
                        privacyIcon: t.privacy.optout_image_url,
                        cta: t.products[0].call_to_action,
                        price: t.products[0].price,
                        impressionTrackers: t.impression_pixels.map((function(t) {
                            return t.url
                        }))
                    }
                }

                function createNativeAd(t, e, r) {
                    var i = "criteo_prebid_native_slots";
                    return window[i] = window[i] || {}, window[i][t] = {
                        callback: r,
                        payload: e
                    }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')
                }

                function enrichSlotWithFloors(t, e) {
                    try {
                        var r = {};
                        if (e.getFloor) {
                            var i, o, a;
                            if (null !== (i = e.mediaTypes) && void 0 !== i && i.banner) r.banner = {}, parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(e, "mediaTypes.banner.sizes")).forEach((function(t) {
                                return r.banner[parseSize(t).toString()] = e.getFloor({
                                    size: t,
                                    mediaType: _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk
                                })
                            }));
                            if (null !== (o = e.mediaTypes) && void 0 !== o && o.video) r.video = {}, parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_10__.Z)(e, "mediaTypes.video.playerSize")).forEach((function(t) {
                                return r.video[parseSize(t).toString()] = e.getFloor({
                                    size: t,
                                    mediaType: _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX
                                })
                            }));
                            null !== (a = e.mediaTypes) && void 0 !== a && a.native && (r.native = {}, r.native["*"] = e.getFloor({
                                size: "*",
                                mediaType: _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5
                            })), Object.keys(r).length > 0 && (t.ext || (t.ext = {}), Object.assign(t.ext, {
                                floors: r
                            }))
                        }
                    } catch (t) {
                        (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logError)("Could not parse floors from Prebid: " + t)
                    }
                }

                function canFastBid(t) {
                    return t !== FAST_BID_VERSION_NONE
                }

                function getFastBidUrl(t) {
                    var e;
                    if (t === FAST_BID_VERSION_LATEST) e = "";
                    else if (t) {
                        String(t).split(".")[0] < 102 && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("Specifying a Fastbid version which is not supporting version selection."), e = "." + t
                    } else e = "." + FAST_BID_VERSION_CURRENT;
                    return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e)
                }

                function tryGetCriteoFastBid() {
                    try {
                        var fastBidStorageKey = "criteo_fast_bid",
                            hashPrefix = "// Hash: ",
                            fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);
                        if (null !== fastBidFromStorage) {
                            var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
                                firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
                            if (firstLine.substr(0, hashPrefix.length) !== hashPrefix)(0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey);
                            else {
                                var publisherTagHash = firstLine.substr(hashPrefix.length),
                                    publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);
                                (0, criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)("Using Criteo FastBid"), eval(publisherTag)) : ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_8__.logWarn)("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey))
                            }
                        }
                    } catch (t) {}
                }(0, _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_11__.dX)(spec), window.pbjs.installedModules.push("criteoBidAdapter")
            },
            17673: function(t, e, r) {
                r.d(e, {
                    h: function() {
                        return o
                    }
                });
                var i = r(20265);

                function o(t) {
                    return null == t || !t.gdprApplies || !0 === (0, i.Z)(t, "vendorData.purpose.consents.1")
                }
            },
            44611: function(t, e) {
                var r;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(t) {
                        null !== t && this.fromHexString(t)
                    }
                    return t.prototype.toHexString = function() {
                        if (this.s < 0) return "-" + this.negate().toHexString();
                        var t, e = !1,
                            r = "",
                            i = this.t,
                            o = this.DB - i * this.DB % 4;
                        if (i-- > 0)
                            for (o < this.DB && (t = this[i] >> o) > 0 && (e = !0, r = c(t)); i >= 0;) o < 4 ? (t = (this[i] & (1 << o) - 1) << 4 - o, t |= this[--i] >> (o += this.DB - 4)) : (t = this[i] >> (o -= 4) & 15, o <= 0 && (o += this.DB, --i)), t > 0 && (e = !0), e && (r += c(t));
                        return e ? r : "0"
                    }, t.prototype.fromHexString = function(e) {
                        if (null !== e) {
                            this.t = 0, this.s = 0;
                            for (var r = e.length, i = !1, o = 0; --r >= 0;) {
                                var a = d(e, r);
                                a < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = a : o + 4 > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, (o += 4) >= this.DB && (o -= this.DB))
                            }
                            0, this.clamp(), i && t.ZERO.subTo(this, this)
                        }
                    }, t.prototype.negate = function() {
                        var e = o();
                        return t.ZERO.subTo(this, e), e
                    }, t.prototype.abs = function() {
                        return this.s < 0 ? this.negate() : this
                    }, t.prototype.mod = function(e) {
                        var r = o();
                        return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r
                    }, t.prototype.copyTo = function(t) {
                        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                        t.t = this.t, t.s = this.s
                    }, t.prototype.lShiftTo = function(t, e) {
                        for (var r = t % this.DB, i = this.DB - r, o = (1 << i) - 1, a = Math.floor(t / this.DB), s = this.s << r & this.DM, n = this.t - 1; n >= 0; --n) e[n + a + 1] = this[n] >> i | s, s = (this[n] & o) << r;
                        for (n = a - 1; n >= 0; --n) e[n] = 0;
                        e[a] = s, e.t = this.t + a + 1, e.s = this.s, e.clamp()
                    }, t.prototype.invDigit = function() {
                        if (this.t < 1) return 0;
                        var t = this[0];
                        if (0 == (1 & t)) return 0;
                        var e = 3 & t;
                        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                    }, t.prototype.dlShiftTo = function(t, e) {
                        var r;
                        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                        for (r = t - 1; r >= 0; --r) e[r] = 0;
                        e.t = this.t + t, e.s = this.s
                    }, t.prototype.squareTo = function(t) {
                        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                        for (r = 0; r < e.t - 1; ++r) {
                            var i = e.am(r, e[r], t, 2 * r, 0, 1);
                            (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
                    }, t.prototype.multiplyTo = function(e, r) {
                        var i = this.abs(),
                            o = e.abs(),
                            a = i.t;
                        for (r.t = a + o.t; --a >= 0;) r[a] = 0;
                        for (a = 0; a < o.t; ++a) r[a + i.t] = i.am(0, o[a], r, a, 0, i.t);
                        r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r)
                    }, t.prototype.divRemTo = function(e, r, i) {
                        var s = e.abs();
                        if (!(s.t <= 0)) {
                            var n = this.abs();
                            if (n.t < s.t) return null != r && r.fromHexString("0"), void(null != i && this.copyTo(i));
                            null == i && (i = o());
                            var _ = o(),
                                d = this.s,
                                c = e.s,
                                p = this.DB - a(s[s.t - 1]);
                            p > 0 ? (s.lShiftTo(p, _), n.lShiftTo(p, i)) : (s.copyTo(_), n.copyTo(i));
                            var u = _.t,
                                l = _[u - 1];
                            if (0 != l) {
                                var h = l * (1 << this.F1) + (u > 1 ? _[u - 2] >> this.F2 : 0),
                                    E = this.FV / h,
                                    f = (1 << this.F1) / h,
                                    m = 1 << this.F2,
                                    v = i.t,
                                    T = v - u,
                                    O = null == r ? o() : r;
                                for (_.dlShiftTo(T, O), i.compareTo(O) >= 0 && (i[i.t++] = 1, i.subTo(O, i)), t.ONE.dlShiftTo(u, O), O.subTo(_, _); _.t < u;) _[_.t++] = 0;
                                for (; --T >= 0;) {
                                    var g = i[--v] == l ? this.DM : Math.floor(i[v] * E + (i[v - 1] + m) * f);
                                    if ((i[v] += _.am(0, g, i, T, 0, u)) < g)
                                        for (_.dlShiftTo(T, O), i.subTo(O, i); i[v] < --g;) i.subTo(O, i)
                                }
                                null != r && (i.drShiftTo(u, r), d != c && t.ZERO.subTo(r, r)), i.t = u, i.clamp(), p > 0 && i.rShiftTo(p, i), d < 0 && t.ZERO.subTo(i, i)
                            }
                        }
                    }, t.prototype.rShiftTo = function(t, e) {
                        e.s = this.s;
                        var r = Math.floor(t / this.DB);
                        if (r >= this.t) e.t = 0;
                        else {
                            var i = t % this.DB,
                                o = this.DB - i,
                                a = (1 << i) - 1;
                            e[0] = this[r] >> i;
                            for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & a) << o, e[s - r] = this[s] >> i;
                            i > 0 && (e[this.t - r - 1] |= (this.s & a) << o), e.t = this.t - r, e.clamp()
                        }
                    }, t.prototype.drShiftTo = function(t, e) {
                        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                        e.t = Math.max(this.t - t, 0), e.s = this.s
                    }, t.prototype.subTo = function(t, e) {
                        for (var r = 0, i = 0, o = Math.min(t.t, this.t); r < o;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
                        if (t.t < this.t) {
                            for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                            i += this.s
                        } else {
                            for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                            i -= t.s
                        }
                        e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), e.t = r, e.clamp()
                    }, t.prototype.clamp = function() {
                        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
                    }, t.prototype.modPowInt = function(t, e) {
                        var r;
                        return r = t < 256 || e.isEven() ? new p(e) : new u(e), this.exp(t, r)
                    }, t.prototype.exp = function(e, r) {
                        if (e > 4294967295 || e < 1) return t.ONE;
                        var i = o(),
                            s = o(),
                            n = r.convert(this),
                            _ = a(e) - 1;
                        for (n.copyTo(i); --_ >= 0;)
                            if (r.sqrTo(i, s), (e & 1 << _) > 0) r.mulTo(s, n, i);
                            else {
                                var d = i;
                                i = s, s = d
                            } return r.revert(i)
                    }, t.prototype.isEven = function() {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    }, t.prototype.compareTo = function(t) {
                        var e = this.s - t.s;
                        if (0 != e) return e;
                        var r = this.t;
                        if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                        for (; --r >= 0;)
                            if (0 != (e = this[r] - t[r])) return e;
                        return 0
                    }, t.prototype.am1 = function(t, e, r, i, o, a) {
                        for (; --a >= 0;) {
                            var s = e * this[t++] + r[i] + o;
                            o = Math.floor(s / 67108864), r[i++] = 67108863 & s
                        }
                        return o
                    }, t.prototype.am2 = function(t, e, r, i, o, a) {
                        for (var s = 32767 & e, n = e >> 15; --a >= 0;) {
                            var _ = 32767 & this[t],
                                d = this[t++] >> 15,
                                c = n * _ + d * s;
                            o = ((_ = s * _ + ((32767 & c) << 15) + r[i] + (1073741823 & o)) >>> 30) + (c >>> 15) + n * d + (o >>> 30), r[i++] = 1073741823 & _
                        }
                        return o
                    }, t.prototype.am3 = function(t, e, r, i, o, a) {
                        for (var s = 16383 & e, n = e >> 14; --a >= 0;) {
                            var _ = 16383 & this[t],
                                d = this[t++] >> 14,
                                c = n * _ + d * s;
                            o = ((_ = s * _ + ((16383 & c) << 14) + r[i] + o) >> 28) + (c >> 14) + n * d, r[i++] = 268435455 & _
                        }
                        return o
                    }, t
                }();

                function o() {
                    return new i(null)
                }

                function a(t) {
                    var e, r = 1;
                    return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
                }
                e.BigInteger = i, e.nbi = o, e.nbits = a;
                var s, n, _ = [];
                for (s = "0".charCodeAt(0), n = 0; n <= 9; ++n) _[s++] = n;
                for (s = "a".charCodeAt(0), n = 10; n < 36; ++n) _[s++] = n;
                for (s = "A".charCodeAt(0), n = 10; n < 36; ++n) _[s++] = n;

                function d(t, e) {
                    var r = _[t.charCodeAt(e)];
                    return null == r ? -1 : r
                }
                e.intAt = d;

                function c(t) {
                    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                }
                e.int2char = c;
                e.b64toHex = function(t) {
                    var e, r = "",
                        i = 0,
                        o = 0;
                    for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
                        a < 0 || (0 == i ? (r += c(a >> 2), o = 3 & a, i = 1) : 1 == i ? (r += c(o << 2 | a >> 4), o = 15 & a, i = 2) : 2 == i ? (r += c(o), r += c(a >> 2), o = 3 & a, i = 3) : (r += c(o << 2 | a >> 4), r += c(15 & a), i = 0))
                    }
                    return 1 == i && (r += c(o << 2)), r
                }, e.removeExtraSymbols = function(t) {
                    return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
                };
                var p = function() {
                        function t(t) {
                            this.m = t
                        }
                        return t.prototype.convert = function(t) {
                            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                        }, t.prototype.revert = function(t) {
                            return t
                        }, t.prototype.reduce = function(t) {
                            t.divRemTo(this.m, null, t)
                        }, t.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r), this.reduce(r)
                        }, t.prototype.sqrTo = function(t, e) {
                            t.squareTo(e), this.reduce(e)
                        }, t
                    }(),
                    u = function() {
                        function t(t) {
                            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                        }
                        return t.prototype.convert = function(t) {
                            var e = o();
                            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e), e
                        }, t.prototype.revert = function(t) {
                            var e = o();
                            return t.copyTo(e), this.reduce(e), e
                        }, t.prototype.reduce = function(t) {
                            for (; t.t <= this.mt2;) t[t.t++] = 0;
                            for (var e = 0; e < this.m.t; ++e) {
                                var r = 32767 & t[e],
                                    i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                            }
                            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                        }, t.prototype.mulTo = function(t, e, r) {
                            t.multiplyTo(e, r), this.reduce(r)
                        }, t.prototype.sqrTo = function(t, e) {
                            t.squareTo(e), this.reduce(e)
                        }, t
                    }();

                function l(t) {
                    var e = o();
                    return e.fromHexString(t.toString()), e
                }
                e.nbv = l, i.ZERO = l(0), i.ONE = l(1), "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = i.prototype.am2, r = 30) : "Netscape" != navigator.appName ? (i.prototype.am = i.prototype.am1, r = 26) : (i.prototype.am = i.prototype.am3, r = 28), i.prototype.DB = r, i.prototype.DM = (1 << r) - 1, i.prototype.DV = 1 << r;
                i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - r, i.prototype.F2 = 2 * r - 52
            },
            94950: function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function t() {}
                    return t.hash = function(e) {
                        e = t.utf8Encode(e || "");
                        for (var r = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], o = (e += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(o / 16), s = new Array(a), n = 0; n < a; n++) {
                            s[n] = new Array(16);
                            for (var _ = 0; _ < 16; _++) s[n][_] = e.charCodeAt(64 * n + 4 * _) << 24 | e.charCodeAt(64 * n + 4 * _ + 1) << 16 | e.charCodeAt(64 * n + 4 * _ + 2) << 8 | e.charCodeAt(64 * n + 4 * _ + 3) << 0
                        }
                        var d = 8 * (e.length - 1) / Math.pow(2, 32),
                            c = 8 * (e.length - 1) >>> 0;
                        s[a - 1][14] = Math.floor(d), s[a - 1][15] = c;
                        for (n = 0; n < a; n++) {
                            for (var p = new Array(64), u = 0; u < 16; u++) p[u] = s[n][u];
                            for (u = 16; u < 64; u++) p[u] = t.q1(p[u - 2]) + p[u - 7] + t.q0(p[u - 15]) + p[u - 16] >>> 0;
                            var l = i[0],
                                h = i[1],
                                E = i[2],
                                f = i[3],
                                m = i[4],
                                v = i[5],
                                T = i[6],
                                O = i[7];
                            for (u = 0; u < 64; u++) {
                                var g = O + t.z1(m) + t.Ch(m, v, T) + r[u] + p[u],
                                    D = t.z0(l) + t.Maj(l, h, E);
                                O = T, T = v, v = m, m = f + g >>> 0, f = E, E = h, h = l, l = g + D >>> 0
                            }
                            i[0] = i[0] + l >>> 0, i[1] = i[1] + h >>> 0, i[2] = i[2] + E >>> 0, i[3] = i[3] + f >>> 0, i[4] = i[4] + m >>> 0, i[5] = i[5] + v >>> 0, i[6] = i[6] + T >>> 0, i[7] = i[7] + O >>> 0
                        }
                        var I = new Array(i.length);
                        for (O = 0; O < i.length; O++) I[O] = ("00000000" + i[O].toString(16)).slice(-8);
                        return I.join("")
                    }, t.utf8Encode = function(t) {
                        try {
                            return (new TextEncoder).encode(t).reduce((function(t, e) {
                                return t + String.fromCharCode(e)
                            }), "")
                        } catch (e) {
                            return unescape(encodeURIComponent(t))
                        }
                    }, t.ROTR = function(t, e) {
                        return e >>> t | e << 32 - t
                    }, t.z0 = function(e) {
                        return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e)
                    }, t.z1 = function(e) {
                        return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e)
                    }, t.q0 = function(e) {
                        return t.ROTR(7, e) ^ t.ROTR(18, e) ^ e >>> 3
                    }, t.q1 = function(e) {
                        return t.ROTR(17, e) ^ t.ROTR(19, e) ^ e >>> 10
                    }, t.Ch = function(t, e, r) {
                        return t & e ^ ~t & r
                    }, t.Maj = function(t, e, r) {
                        return t & e ^ t & r ^ e & r
                    }, t
                }();
                e.Sha256 = r
            },
            1582: function(t, e, r) {
                var i = r(44611),
                    o = r(94950);
                e.T = function(t, e, r, a) {
                    var s = new i.BigInteger(i.b64toHex(e)),
                        n = new i.BigInteger(i.b64toHex(r)),
                        _ = s.modPowInt(a, n);
                    return i.removeExtraSymbols(_.toHexString()) === o.Sha256.hash(t)
                }
            }
        },
        function(t) {
            var e;
            e = 60241, t(t.s = e)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [9226], {
            72663: function(e, n, r) {
                var o, c = r(71002),
                    t = r(64358),
                    i = r(78640),
                    s = r(69626),
                    a = r(5644),
                    u = r(48928),
                    f = r(3193),
                    l = r(92797),
                    d = r(68792),
                    v = r(99128),
                    g = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
                    y = [],
                    p = {},
                    h = !1,
                    C = !0,
                    b = "USD",
                    R = !1,
                    m = {},
                    S = {},
                    w = function() {
                        var e;

                        function n() {
                            e = (0, d.P)()
                        }
                        return n(), {
                            done: function() {
                                return e.resolve()
                            },
                            reset: n,
                            promise: function() {
                                return e.promise
                            }
                        }
                    }();

                function D(e) {
                    o ? ((0, t.logWarn)(e), (0, t.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")) : (0, t.logError)(e)
                }

                function I(e) {
                    p = {}, R = !0, (0, t.logInfo)("Installing addBidResponse decorator for currency module", arguments), (0, i.R)().convertCurrency = function(e, n, r) {
                        return parseFloat(e) * U(n, r)
                    }, (0, l.v5)("addBidResponse").before(j, 100), C ? (C = !1, (0, u.h)(e, {
                        success: function(e) {
                            try {
                                m = JSON.parse(e), (0, t.logInfo)("currencyRates set to " + JSON.stringify(m)), p = {}, h = !0, O(), w.done()
                            } catch (n) {
                                D("Failed to parse currencyRates response: " + e)
                            }
                        },
                        error: function() {
                            D.apply(void 0, arguments), w.done()
                        }
                    })) : w.done()
                }

                function F() {
                    (0, t.logInfo)("Uninstalling addBidResponse decorator for currency module", arguments), (0, l.v5)("addBidResponse").getHooks({
                        hook: j
                    }).remove(), delete(0, i.R)().convertCurrency, b = "USD", p = {}, R = !1, h = !1, C = !0, m = {}, S = {}
                }
                f.vc.getConfig("currency", (function(e) {
                    return function(e) {
                        var n = g;
                        if ("object" === (0, c.Z)(e.rates) && (m.conversions = e.rates, h = !0, C = !1), "object" === (0, c.Z)(e.defaultRates) && (o = e.defaultRates, m.conversions = o, h = !0), "string" == typeof e.adServerCurrency) {
                            (0, t.logInfo)("enabling currency support", arguments), b = e.adServerCurrency, e.conversionRateFile && ((0, t.logInfo)("currency using override conversionRateFile:", e.conversionRateFile), n = e.conversionRateFile);
                            var r = n.indexOf("$$TODAY$$");
                            if (-1 !== r) {
                                var i = new Date,
                                    s = "".concat(i.getMonth() + 1),
                                    a = "".concat(i.getDate());
                                s.length < 2 && (s = "0".concat(s)), a.length < 2 && (a = "0".concat(a));
                                var u = "".concat(i.getFullYear()).concat(s).concat(a);
                                n = "".concat(n.substring(0, r)).concat(u).concat(n.substring(r + 9, n.length))
                            }
                            I(n)
                        } else(0, t.logInfo)("disabling currency support"), F();
                        "object" === (0, c.Z)(e.bidderCurrencyDefault) && (S = e.bidderCurrencyDefault)
                    }(e.currency)
                }));
                var j = (0, v.A)("currency", (function(e, n, r) {
                    if (!r) return e.call(this, n);
                    var o = r.bidderCode || r.bidder;
                    if (S[o]) {
                        var c = S[o];
                        r.currency && c !== r.currency ? (0, t.logWarn)("Currency default '".concat(o, ": ").concat(c, "' ignored. adapter specified '").concat(r.currency, "'")) : r.currency = c
                    }
                    if (r.currency || ((0, t.logWarn)('Currency not specified on bid.  Defaulted to "USD"'), r.currency = "USD"), r.getCpmInNewCurrency = function(e) {
                            return (parseFloat(this.cpm) * U(this.currency, e)).toFixed(3)
                        }, r.currency === b) return e.call(this, n, r);
                    y.push(function(e, n, r) {
                        return function() {
                            var o = r[1];
                            if (void 0 !== o && "currency" in o && "cpm" in o) {
                                var c = o.currency;
                                try {
                                    var i = U(c);
                                    1 !== i && (o.cpm = (parseFloat(o.cpm) * i).toFixed(4), o.currency = b)
                                } catch (e) {
                                    (0, t.logWarn)("Returning NO_BID, getCurrencyConversion threw error: ", e), r[1] = (0, s.m)(a.Q_.NO_BID, o.getIdentifiers())
                                }
                            }
                            return e.apply(n, r)
                        }
                    }(e, this, [n, r])), !R || h ? O() : e.untimed.bail(w.promise())
                }));

                function O() {
                    for (; y.length > 0;) y.shift()()
                }

                function U(e) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                        o = null,
                        c = "".concat(e, "->").concat(r);
                    if (c in p) o = p[c], (0, t.logMessage)("Using conversionCache value " + o + " for " + c);
                    else if (!1 === R) {
                        if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                        o = 1
                    } else if (e === r) o = 1;
                    else if (e in m.conversions) {
                        if (!(r in (n = m.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                        o = n[r], (0, t.logInfo)("getCurrencyConversion using direct " + e + " to " + r + " conversionRate " + o)
                    } else if (r in m.conversions) {
                        if (!(e in (n = m.conversions[r]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                        o = $(1 / n[e], 4), (0, t.logInfo)("getCurrencyConversion using reciprocal " + e + " to " + r + " conversionRate " + o)
                    } else {
                        var i = Object.keys(m.conversions)[0];
                        if (!(e in m.conversions[i])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                        var s = 1 / m.conversions[i][e];
                        if (!(r in m.conversions[i])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                        var a = m.conversions[i][r];
                        o = $(s * a, 4), (0, t.logInfo)("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + r + " conversionRate " + o)
                    }
                    return c in p || ((0, t.logMessage)("Adding conversionCache value " + o + " for " + c), p[c] = o), o
                }

                function $(e, n) {
                    for (var r = 1, o = 0; o < n; o++) r += "0";
                    return Math.round(e * r) / r
                }
                window.pbjs.installedModules.push("currency")
            }
        },
        function(e) {
            var n;
            n = 72663, e(e.s = n)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [1130], {
            48838: function(e, t, r) {
                var i = r(4942),
                    n = r(71002),
                    a = r(64358),
                    d = r(96475),
                    s = r(20265),
                    o = r(14699),
                    c = r(3193),
                    u = r(24679),
                    p = r(35706),
                    l = r(4192),
                    m = r(17673),
                    y = r(70059),
                    f = r(55730);

                function v(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, i)
                    }
                    return r
                }

                function g(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                            (0, i.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var b = "improvedigital",
                    h = {
                        DEFAULT_MIMES: ["video/mp4"],
                        SUPPORTED_PROPERTIES: ["mimes", "minduration", "maxduration", "protocols", "w", "h", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext"],
                        PLACEMENT_TYPE: {
                            INSTREAM: 1,
                            OUTSTREAM: 3
                        }
                    },
                    I = {
                        VERSION: "1.2",
                        ASSET_TYPES: {
                            TITLE: "title",
                            IMG: "img",
                            DATA: "data"
                        },
                        ASSETS: {
                            title: {
                                id: 0,
                                name: "title",
                                assetType: "title",
                                default: {
                                    len: 140
                                }
                            },
                            sponsoredBy: {
                                id: 1,
                                name: "sponsoredBy",
                                assetType: "data",
                                type: 1
                            },
                            icon: {
                                id: 2,
                                name: "icon",
                                assetType: "img",
                                type: 2
                            },
                            body: {
                                id: 3,
                                name: "body",
                                assetType: "data",
                                type: 2
                            },
                            image: {
                                id: 4,
                                name: "image",
                                assetType: "img",
                                type: 3
                            },
                            rating: {
                                id: 5,
                                name: "rating",
                                assetType: "data",
                                type: 3
                            },
                            likes: {
                                id: 6,
                                name: "likes",
                                assetType: "data",
                                type: 4
                            },
                            downloads: {
                                id: 7,
                                name: "downloads",
                                assetType: "data",
                                type: 5
                            },
                            price: {
                                id: 8,
                                name: "price",
                                assetType: "data",
                                type: 6
                            },
                            salePrice: {
                                id: 9,
                                name: "salePrice",
                                assetType: "data",
                                type: 7
                            },
                            phone: {
                                id: 10,
                                name: "phone",
                                assetType: "data",
                                type: 8
                            },
                            address: {
                                id: 11,
                                name: "address",
                                assetType: "data",
                                type: 9
                            },
                            body2: {
                                id: 12,
                                name: "body2",
                                assetType: "data",
                                type: 10
                            },
                            displayUrl: {
                                id: 13,
                                name: "displayUrl",
                                assetType: "data",
                                type: 11
                            },
                            cta: {
                                id: 14,
                                name: "cta",
                                assetType: "data",
                                type: 12
                            }
                        },
                        getAssetById: function(e) {
                            return Object.values(this.ASSETS).find((function(t) {
                                return e === t.id
                            }))
                        }
                    },
                    E = {
                        code: b,
                        gvlid: 253,
                        aliases: ["id"],
                        supportedMediaTypes: [u.Mk, u.B5, u.pX],
                        syncStore: {
                            extendMode: !1,
                            placementId: null
                        },
                        isBidRequestValid: function(e) {
                            return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId))
                        },
                        buildRequests: function(e, t) {
                            e = (0, y.lY)(e);
                            var r = {
                                cur: [c.vc.getConfig("currency.adServerCurrency") || "USD"],
                                ext: {
                                    improvedigital: {
                                        sdk: {
                                            name: "pbjs",
                                            version: "7.19.0"
                                        }
                                    }
                                }
                            };
                            r.device = "object" === (0, n.Z)(c.vc.getConfig("device")) ? c.vc.getConfig("device") : {}, r.device.w = r.device.w || window.innerWidth, r.device.h = r.device.h || window.innerHeight, (0, a.getDNT)() && (r.device.dnt = 1);
                            var i = c.vc.getConfig("coppa");
                            if ("boolean" == typeof i && (0, d.N)(r, "regs.coppa", Number(i)), t) {
                                var o = (0, s.Z)(t, "gdprConsent");
                                if (o) {
                                    "boolean" == typeof o.gdprApplies && (0, d.N)(r, "regs.ext.gdpr", Number(o.gdprApplies)), (0, d.N)(r, "user.ext.consent", o.consentString);
                                    var u = (0, s.Z)(o, "addtlConsent");
                                    if (u && -1 !== u.indexOf("~")) {
                                        var p = u.substring(u.indexOf("~") + 1);
                                        p && (0, d.N)(r, "user.ext.consented_providers_settings.consented_providers", p.split(".").map((function(e) {
                                            return parseInt(e, 10)
                                        })))
                                    }
                                }
                                t.timeout && (r.tmax = parseInt(t.timeout)), "undefined" !== (0, n.Z)(t.uspConsent) && (0, d.N)(r, "regs.ext.us_privacy", t.uspConsent)
                            }
                            T.buildSiteOrApp(r, t);
                            var m = e[0];
                            if ((0, d.N)(r, "source.ext.schain", m.schain), (0, d.N)(r, "source.tid", m.transactionId), this.syncStore.placementId = this.syncStore.placementId || m.params.placementId, m.userId) {
                                var f = (0, l.HQ)(m.userId);
                                (0, d.N)(r, "user.ext.eids", f.length ? f : void 0)
                            }
                            return T.buildServerRequests(r, e, t)
                        },
                        interpretResponse: function(e, t) {
                            var r = t.bidderRequest;
                            if (!Array.isArray((0, s.Z)(e, "body.seatbid"))) return [];
                            var i = [];
                            return e.body.seatbid.forEach((function(t) {
                                Array.isArray(t.bid) && t.bid.forEach((function(t) {
                                    if (t.adm && t.price && !t.hasOwnProperty("errorCode")) {
                                        var n = (0, a.getBidRequest)(t.impid, [r]),
                                            d = (0, s.Z)(t, "ext.".concat(b), {}),
                                            o = {
                                                requestId: t.impid,
                                                cpm: t.price,
                                                creativeId: t.crid,
                                                currency: e.body.cur.toUpperCase() || "USD",
                                                dealId: "string" == typeof d.buying_type && "rtb" !== d.buying_type ? d.line_item_id : void 0,
                                                meta: {
                                                    advertiserDomains: t.adomain ? t.adomain : []
                                                },
                                                netRevenue: d.is_net || !1,
                                                ttl: 300
                                            };
                                        S.buildAd(o, n, t), x.forwardBid({
                                            bidRequest: n,
                                            bid: o
                                        }), i.push(o)
                                    }
                                }))
                            })), i
                        },
                        getUserSyncs: function(e, t, r, i) {
                            if (!0 === c.vc.getConfig("coppa") || !(0, m.h)(r)) return [];
                            var n = [];
                            if (!this.syncStore.extendMode && e.pixelEnabled || !e.iframeEnabled) e.pixelEnabled && t.forEach((function(e) {
                                (0, s.Z)(e, "body.ext.".concat(b, ".sync"), []).forEach((function(e) {
                                    n.some((function(t) {
                                        return t.url === e
                                    })) || n.push({
                                        type: "image",
                                        url: e
                                    })
                                }))
                            }));
                            else {
                                var a = r || {},
                                    d = a.gdprApplies,
                                    o = a.consentString;
                                n.push({
                                    type: "iframe",
                                    url: "https://hb.360yield.com/prebid-universal-creative/load-cookie.html" + "?placement_id=".concat(this.syncStore.placementId) + (this.syncStore.extendMode ? "&pbs=1" : "") + ("boolean" == typeof d ? "&gdpr=".concat(Number(d)) : "") + (o ? "&gdpr_consent=".concat(o) : "") + (i ? "&us_privacy=".concat(encodeURIComponent(i)) : "")
                                })
                            }
                            return n
                        }
                    };
                (0, o.dX)(E);
                var T = {
                        buildServerRequests: function(e, t, r) {
                            var i = this,
                                n = !0 === c.vc.getConfig("improvedigital.extend"),
                                s = [],
                                o = !0 === c.vc.getConfig("improvedigital.singleRequest"),
                                u = [],
                                p = [];

                            function l(t, i, n) {
                                var s = (0, a.deepClone)(e);
                                s.imp = t, s.id = (0, a.getUniqueIdentifierStr)(), i && (0, d.N)(s, "source.tid", i);
                                var o = (0, m.h)(null == r ? void 0 : r.gdprConsent) ? "https://ad.360yield.com/pb" : "https://ad.360yield-basic.com/pb";
                                return {
                                    method: "POST",
                                    url: n ? "https://pbs.360yield.com/openrtb2/auction" : o,
                                    data: JSON.stringify(s),
                                    bidderRequest: r
                                }
                            }
                            return t.map((function(e) {
                                var t = i.isExtendModeEnabled(n, e.params),
                                    r = i.buildImp(e, t);
                                o ? t ? u.push(r) : p.push(r) : s.push(l([r], e.transactionId, t))
                            })), o ? (u.length && s.push(l(u, r.auctionId, !0)), p.length && s.push(l(p, r.auctionId, !1)), s) : s
                        },
                        isExtendModeEnabled: function(e, t) {
                            var r = "boolean" == typeof t.extend ? t.extend : e;
                            return r && !E.syncStore.extendMode && (E.syncStore.extendMode = !0), r
                        },
                        buildImp: function(e, t) {
                            var r = {
                                    id: (0, a.getBidIdParameter)("bidId", e) || (0, a.getUniqueIdentifierStr)(),
                                    secure: Number("https:" === window.location.protocol)
                                },
                                i = this.getBidFloor(e) || (0, a.getBidIdParameter)("bidFloor", e.params);
                            if (i) {
                                var n = (0, a.getBidIdParameter)("bidFloorCur", e.params) || "USD";
                                (0, d.N)(r, "bidfloor", i), (0, d.N)(r, "bidfloorcur", n ? n.toUpperCase() : void 0)
                            }
                            var o = t ? "ext.prebid.bidder.improvedigital" : "ext.bidder",
                                c = (0, a.getBidIdParameter)("placementId", e.params);
                            c ? ((0, d.N)(r, "".concat(o, ".placementId"), c), t && (0, d.N)(r, "ext.prebid.storedrequest.id", "" + c)) : ((0, d.N)(r, "".concat(o, ".publisherId"), (0, a.getBidIdParameter)("publisherId", e.params)), (0, d.N)(r, "".concat(o, ".placementKey"), (0, a.getBidIdParameter)("placementKey", e.params))), (0, d.N)(r, "".concat(o, ".keyValues"), (0, a.getBidIdParameter)("keyValues", e.params) || void 0);
                            var u = (0, s.Z)(e, "ortb2Imp.ext.gpid") || (0, s.Z)(e, "ortb2Imp.ext.data.pbadslot") || (0, s.Z)(e, "ortb2Imp.ext.data.adserver.adslot");
                            (0, d.N)(r, "ext.gpid", u), (0, s.Z)(e, "ortb2Imp.instl") && (r.instl = 1);
                            var p = (0, s.Z)(e, "mediaTypes.video");
                            if (p && (r.video = this.buildVideoRequest(e), (0, d.N)(r, "ext.is_rewarded_inventory", 1 === p.rewarded || 1 === (0, s.Z)(p, "ext.rewarded") || void 0)), (0, s.Z)(e, "mediaTypes.banner") && (r.banner = this.buildBannerRequest(e)), (0, s.Z)(e, "mediaTypes.native")) {
                                var l = this.buildNativeRequest(e);
                                l && (r.native = l)
                            }
                            return r
                        },
                        buildVideoRequest: function(e) {
                            var t = (0, a.deepClone)(e.mediaTypes.video),
                                r = (0, a.deepClone)((0, s.Z)(e, "params.video", {})),
                                i = g(g({}, t), r);
                            if (Array.isArray(i.playerSize)) {
                                var n = Array.isArray(i.playerSize[0]) ? i.playerSize[0] : i.playerSize;
                                i.w = n[0], i.h = n[1]
                            }
                            return i.placement = this.isOutstreamVideo(e) ? h.PLACEMENT_TYPE.OUTSTREAM : h.PLACEMENT_TYPE.INSTREAM, i.mimes || (i.mimes = h.DEFAULT_MIMES), 1 !== i.skip && (delete i.skipmin, delete i.skipafter, 0 !== i.skip && ((0, a.logWarn)("video.skip: invalid value '".concat(i.skip, "'. Expected 0 or 1")), delete i.skip)), Object.keys(i).forEach((function(e) {
                                -1 === h.SUPPORTED_PROPERTIES.indexOf(e) && delete i[e]
                            })), i
                        },
                        buildBannerRequest: function(e) {
                            var t = {};
                            return !0 === c.vc.getConfig("improvedigital.usePrebidSizes") && e.sizes && (t.format = e.sizes.map((function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }))), t
                        },
                        buildNativeRequest: function(e) {
                            var t = e.nativeParams;
                            if (!t) return null;
                            for (var r = {
                                    eventtrackers: [{
                                        event: 1,
                                        methods: [1, 2]
                                    }],
                                    assets: []
                                }, i = 0, n = Object.keys(t); i < n.length; i++) {
                                var d = n[i],
                                    o = I.ASSETS[d];
                                if (o) {
                                    var c = t[d],
                                        u = {
                                            id: o.id,
                                            required: Number(c.required)
                                        };
                                    switch (o.assetType) {
                                        case I.ASSET_TYPES.TITLE:
                                            u.title = {
                                                len: c.len || o.default.len
                                            };
                                            break;
                                        case I.ASSET_TYPES.DATA:
                                            u.data = (0, a.cleanObj)({
                                                type: o.type,
                                                len: c.len
                                            });
                                            break;
                                        case I.ASSET_TYPES.IMG:
                                            u.img = (0, a.cleanObj)({
                                                type: o.type,
                                                w: (0, s.Z)(c, "sizes.0"),
                                                h: (0, s.Z)(c, "sizes.1"),
                                                wmin: (0, s.Z)(c, "aspect_ratios.0.min_width"),
                                                hmin: (0, s.Z)(c, "aspect_ratios.0.min_height")
                                            });
                                            break;
                                        default:
                                            return
                                    }
                                    r.assets.push(u)
                                }
                            }
                            return r.assets.length ? {
                                ver: I.VERSION,
                                request: JSON.stringify(r)
                            } : ((0, a.logWarn)("No native assets recognized. Ignoring native ad request"), null)
                        },
                        isOutstreamVideo: function(e) {
                            return "outstream" === (0, s.Z)(e, "mediaTypes.video.context")
                        },
                        getBidFloor: function(e) {
                            if (!(0, a.isFn)(e.getFloor)) return null;
                            var t = e.getFloor({
                                currency: "USD",
                                mediaType: "*",
                                size: "*"
                            });
                            return (0, a.isPlainObject)(t) && !isNaN(t.floor) && "USD" === t.currency ? t.floor : null
                        },
                        buildSiteOrApp: function(e, t) {
                            var r, i = {},
                                n = c.vc.getConfig("app") || {},
                                d = (null === (r = t.ortb2) || void 0 === r ? void 0 : r.app) || {};
                            if ((0, a.mergeDeep)(i, n, d), 0 !== Object.keys(i).length) e.app = i;
                            else {
                                var o = {},
                                    u = (0, s.Z)(t, "refererInfo.page");
                                u && (o.page = u, o.domain = t.refererInfo.domain);
                                var p = c.vc.getConfig("site") || {},
                                    l = (0, s.Z)(t, "ortb2.site") || {};
                                (0, a.mergeDeep)(o, p, l), e.site = o
                            }
                        }
                    },
                    S = {
                        buildAd: function(e, t, r) {
                            t.mediaTypes && 1 === Object.keys(t.mediaTypes).length ? (0, s.Z)(t, "mediaTypes.video") ? this.buildVideoAd(e, t, r) : (0, s.Z)(t, "mediaTypes.banner") ? this.buildBannerAd(e, t, r) : (0, s.Z)(t, "mediaTypes.native") && this.buildNativeAd(e, t, r) : -1 !== r.adm.search(/^(<\?xml|<vast)/i) ? this.buildVideoAd(e, t, r) : "{" === r.adm[0] ? this.buildNativeAd(e, t, r) : this.buildBannerAd(e, t, r)
                        },
                        buildVideoAd: function(e, t, r) {
                            e.mediaType = u.pX, e.vastXml = r.adm, T.isOutstreamVideo(t) && (e.adResponse = {
                                content: e.vastXml
                            }, e.renderer = k.createRenderer(t))
                        },
                        buildBannerAd: function(e, t, r) {
                            e.mediaType = u.Mk, e.ad = r.adm, e.width = r.w, e.height = r.h
                        },
                        buildNativeAd: function(e, t, r) {
                            e.mediaType = u.B5;
                            var i = JSON.parse(r.adm),
                                n = {
                                    clickUrl: (0, s.Z)(i, "link.url"),
                                    clickTrackers: (0, s.Z)(i, "link.clicktrackers"),
                                    privacyLink: i.privacy
                                };
                            i.eventtrackers ? (n.impressionTrackers = [], i.eventtrackers.forEach((function(e) {
                                if (1 === e.event) switch (e.method) {
                                    case 1:
                                        n.impressionTrackers.push(e.url);
                                        break;
                                    case 2:
                                        n.javascriptTrackers = '<script src="'.concat(e.url, '"><\/script>')
                                }
                            }))) : (n.impressionTrackers = i.imptrackers || [], n.javascriptTrackers = i.jstracker), i.assets.map((function(e) {
                                var t = I.getAssetById(e.id);
                                switch (t.assetType) {
                                    case I.ASSET_TYPES.TITLE:
                                        n.title = e.title.text;
                                        break;
                                    case I.ASSET_TYPES.DATA:
                                        n[t.name] = e.data.value;
                                        break;
                                    case I.ASSET_TYPES.IMG:
                                        n[t.name] = {
                                            url: e.img.url,
                                            width: e.img.w,
                                            height: e.img.h
                                        }
                                }
                            })), e.native = n
                        }
                    },
                    k = {
                        RENDERER_URL: "https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",
                        createRenderer: function(e) {
                            var t = p.Th.install({
                                id: e.adUnitCode,
                                url: this.RENDERER_URL,
                                config: (0, s.Z)(e, "renderer.options"),
                                adUnitCode: e.adUnitCode
                            });
                            try {
                                t.setRender(this.render)
                            } catch (e) {
                                (0, a.logWarn)("Prebid Error calling setRender on renderer", e)
                            }
                            return t
                        },
                        render: function(e) {
                            e.renderer.push((function() {
                                window.ANOutstreamVideo.renderAd({
                                    sizes: [e.width, e.height],
                                    targetId: e.adUnitCode,
                                    adResponse: e.adResponse,
                                    rendererOptions: e.renderer.getConfig()
                                }, k.handleRendererEvents.bind(null, e))
                            }))
                        },
                        handleRendererEvents: function(e, t, r) {
                            e.renderer.handleVideoEvent({
                                id: t,
                                eventName: r
                            })
                        }
                    },
                    x = {
                        RENDERER_URL: "https://cdn.360yield.com/razr/tag.js",
                        forwardBid: function(e) {
                            var t = e.bidRequest,
                                r = e.bid;
                            if (r.mediaType === u.Mk) {
                                var i = {
                                        prebid: {
                                            bidRequest: t,
                                            bid: r
                                        }
                                    },
                                    n = JSON.stringify(i).replace(/<\/script>/g, "\\x3C/script>"),
                                    a = "<script>window.__razr_config = ".concat(n, ";<\/script>");
                                r.ad = r.ad.replace(/<body[^>]*>/, (function(e) {
                                    return e + a
                                })), this.installListener()
                            }
                        },
                        installListener: function() {
                            this._listenerInstalled || (window.addEventListener("message", (function(e) {
                                var t, r, i = null === (t = e.data) || void 0 === t || null === (r = t.razr) || void 0 === r ? void 0 : r.load;
                                if (i) {
                                    e.source && (i.source = e.source, i.id && e.source.postMessage({
                                        razr: {
                                            id: i.id
                                        }
                                    }, "*"));
                                    var n = window.razr = window.razr || {};
                                    n.q = n.q || [], n.q.push(i), n.loaded || (0, f.B)(x.RENDERER_URL, b)
                                }
                            })), this._listenerInstalled = !0)
                        }
                    };
                window.pbjs.installedModules.push("improvedigitalBidAdapter")
            },
            4192: function(e, t, r) {
                r.d(t, {
                    HQ: function() {
                        return s
                    },
                    Pv: function() {
                        return o
                    },
                    UR: function() {
                        return a
                    }
                });
                var i = r(64358),
                    n = r(20265),
                    a = {
                        growthCodeId: {
                            getValue: function(e) {
                                return e.gc_id
                            },
                            source: "growthcode.io",
                            atype: 1,
                            getUidExt: function(e) {
                                var t = (0, i.pick)(e, ["h1", "h2", "h3"]);
                                if (Object.keys(t).length) return t
                            }
                        },
                        trustpid: {
                            source: "trustpid.com",
                            atype: 1,
                            getValue: function(e) {
                                return e
                            }
                        },
                        intentIqId: {
                            source: "intentiq.com",
                            atype: 1
                        },
                        naveggId: {
                            source: "navegg.com",
                            atype: 1
                        },
                        justId: {
                            source: "justtag.com",
                            atype: 1
                        },
                        pubcid: {
                            source: "pubcid.org",
                            atype: 1
                        },
                        tdid: {
                            source: "adserver.org",
                            atype: 1,
                            getUidExt: function() {
                                return {
                                    rtiPartner: "TDID"
                                }
                            }
                        },
                        id5id: {
                            getValue: function(e) {
                                return e.uid
                            },
                            source: "id5-sync.com",
                            atype: 1,
                            getUidExt: function(e) {
                                if (e.ext) return e.ext
                            }
                        },
                        ftrackId: {
                            source: "flashtalking.com",
                            atype: 1,
                            getValue: function(e) {
                                var t = "";
                                return e.DeviceID && (t = e.DeviceID.join(",")), t
                            },
                            getUidExt: function(e) {
                                return "DeviceID"
                            }
                        },
                        parrableId: {
                            source: "parrable.com",
                            atype: 1,
                            getValue: function(e) {
                                return e.eid ? e.eid : e.ccpaOptout ? "" : null
                            },
                            getUidExt: function(e) {
                                var t = (0, i.pick)(e, ["ibaOptout", "ccpaOptout"]);
                                if (Object.keys(t).length) return t
                            }
                        },
                        idl_env: {
                            source: "liveramp.com",
                            atype: 3
                        },
                        lipb: {
                            getValue: function(e) {
                                return e.lipbid
                            },
                            source: "liveintent.com",
                            atype: 3,
                            getEidExt: function(e) {
                                if (Array.isArray(e.segments) && e.segments.length) return {
                                    segments: e.segments
                                }
                            }
                        },
                        britepoolid: {
                            source: "britepool.com",
                            atype: 3
                        },
                        dmdId: {
                            source: "hcn.health",
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: "crwdcntrl.net",
                            atype: 1
                        },
                        criteoId: {
                            source: "criteo.com",
                            atype: 1
                        },
                        merkleId: {
                            atype: 3,
                            getSource: function(e) {
                                var t;
                                return null != e && null !== (t = e.ext) && void 0 !== t && t.ssp ? "".concat(e.ext.ssp, ".merkleinc.com") : "merkleinc.com"
                            },
                            getValue: function(e) {
                                return e.id
                            },
                            getUidExt: function(e) {
                                return e.keyID ? {
                                    keyID: e.keyID
                                } : e.ext ? e.ext : void 0
                            }
                        },
                        netId: {
                            source: "netid.de",
                            atype: 1
                        },
                        IDP: {
                            source: "zeotap.com",
                            atype: 1
                        },
                        hadronId: {
                            source: "audigent.com",
                            atype: 1
                        },
                        quantcastId: {
                            source: "quantcast.com",
                            atype: 1
                        },
                        idx: {
                            source: "idx.lat",
                            atype: 1
                        },
                        connectid: {
                            source: "verizonmedia.com",
                            atype: 3
                        },
                        fabrickId: {
                            source: "neustar.biz",
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: "mediawallahscript.com",
                            atype: 1
                        },
                        tapadId: {
                            source: "tapad.com",
                            atype: 1
                        },
                        novatiq: {
                            getValue: function(e) {
                                return e.snowflake
                            },
                            source: "novatiq.com",
                            atype: 1
                        },
                        uid2: {
                            source: "uidapi.com",
                            atype: 3,
                            getValue: function(e) {
                                return e.id
                            }
                        },
                        deepintentId: {
                            source: "deepintent.com",
                            atype: 3
                        },
                        admixerId: {
                            source: "admixer.net",
                            atype: 3
                        },
                        adtelligentId: {
                            source: "adtelligent.com",
                            atype: 3
                        },
                        amxId: {
                            source: "amxrtb.com",
                            atype: 1
                        },
                        publinkId: {
                            source: "epsilon.com",
                            atype: 3
                        },
                        kpuid: {
                            source: "kpuid.com",
                            atype: 3
                        },
                        imppid: {
                            source: "ppid.intimatemerger.com",
                            atype: 1
                        },
                        imuid: {
                            source: "intimatemerger.com",
                            atype: 1
                        },
                        connectId: {
                            source: "yahoo.com",
                            atype: 3
                        },
                        qid: {
                            source: "adquery.io",
                            atype: 1
                        },
                        dacId: {
                            source: "impact-ad.jp",
                            atype: 1
                        },
                        "33acrossId": {
                            source: "33across.com",
                            atype: 1,
                            getValue: function(e) {
                                return e.envelope
                            }
                        },
                        tncid: {
                            source: "thenewco.it",
                            atype: 3
                        },
                        gravitompId: {
                            source: "gravito.net",
                            atype: 1
                        },
                        cpexId: {
                            source: "czechadid.cz",
                            atype: 1
                        },
                        oneKeyData: {
                            getValue: function(e) {
                                if (e && Array.isArray(e.identifiers) && e.identifiers[0]) return e.identifiers[0].value
                            },
                            source: "paf",
                            atype: 1,
                            getEidExt: function(e) {
                                if (e && e.preferences) return {
                                    preferences: e.preferences
                                }
                            },
                            getUidExt: function(e) {
                                if (e && Array.isArray(e.identifiers) && e.identifiers[0]) {
                                    var t = e.identifiers[0];
                                    return {
                                        version: t.version,
                                        type: t.type,
                                        source: t.source
                                    }
                                }
                            }
                        }
                    };

                function d(e, t) {
                    var r = a[t];
                    if (r && e) {
                        var n = {};
                        n.source = (0, i.isFn)(r.getSource) ? r.getSource(e) : r.source;
                        var d = (0, i.isFn)(r.getValue) ? r.getValue(e) : e;
                        if ((0, i.isStr)(d)) {
                            var s = {
                                id: d,
                                atype: r.atype
                            };
                            if ((0, i.isFn)(r.getUidExt)) {
                                var o = r.getUidExt(e);
                                o && (s.ext = o)
                            }
                            if (n.uids = [s], (0, i.isFn)(r.getEidExt)) {
                                var c = r.getEidExt(e);
                                c && (n.ext = c)
                            }
                            return n
                        }
                    }
                    return null
                }

                function s(e) {
                    var t = [],
                        r = function(r) {
                            if (e.hasOwnProperty(r))
                                if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
                                else if ("ftrackId" === r) {
                                var i = {
                                    atype: 1,
                                    id: (e.ftrackId.DeviceID || []).join("|"),
                                    ext: {}
                                };
                                for (var n in e.ftrackId) i.ext[n] = (e.ftrackId[n] || []).join("|");
                                t.push(i)
                            } else if (Array.isArray(e[r])) e[r].forEach((function(e, i, n) {
                                var a = d(e, r);
                                a && t.push(a)
                            }));
                            else {
                                var a = d(e[r], r);
                                a && t.push(a)
                            }
                        };
                    for (var i in e) r(i);
                    return t
                }

                function o(e) {
                    var t = [];
                    return e.filter((function(e) {
                        return (0, i.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                    })).forEach((function(e) {
                        Object.keys(e.idObj).forEach((function(r) {
                            (0, n.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, n.Z)(a, r + ".source") && t.push({
                                source: a[r].source,
                                bidders: e.config.bidders
                            })
                        }))
                    })), t
                }
            },
            17673: function(e, t, r) {
                r.d(t, {
                    h: function() {
                        return n
                    }
                });
                var i = r(20265);

                function n(e) {
                    return null == e || !e.gdprApplies || !0 === (0, i.Z)(e, "vendorData.purpose.consents.1")
                }
            }
        },
        function(e) {
            var t;
            t = 48838, e(e.s = t)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [3769], {
            896: function(t, e, n) {
                var i = n(64358),
                    r = n(20265),
                    a = n(14699),
                    o = n(3193),
                    d = n(24679),
                    s = n(25102),
                    c = n(35706),
                    u = n(70059),
                    p = "medianet",
                    l = "https://prebid.media.net/video/bundle.js",
                    m = 0,
                    f = 1,
                    g = 2,
                    b = "client_timeout",
                    h = "client_bid_won",
                    y = (0, s.nH)(),
                    v = {};

                function w() {
                    try {
                        return window.top.document.referrer
                    } catch (t) {
                        return document.referrer
                    }
                }

                function x(t, e) {
                    var n = e.refererInfo,
                        i = {
                            domain: (t = t || {}).domain || n.domain,
                            page: t.page || n.page,
                            ref: t.ref || w(),
                            topMostLocation: n.topmostLocation,
                            isTop: t.isTop || n.reachedTop
                        };
                    return Object.assign(i, function() {
                        if (v.pageMeta) return v.pageMeta;
                        var t = _('link[rel="canonical"]', "href"),
                            e = _('meta[property="og:url"]', "content"),
                            n = _('meta[name="twitter:url"]', "content");
                        return v.pageMeta = Object.assign({}, t && {
                            canonical_url: t
                        }, e && {
                            og_url: e
                        }, n && {
                            twitter_url: n
                        }), v.pageMeta
                    }())
                }

                function _(t, e) {
                    var n, r, a = function(t, e) {
                        try {
                            var n = (0, i.getWindowTop)().document.querySelector(t);
                            if (null !== n && n[e]) return n[e]
                        } catch (t) {}
                    }(t, e);
                    return a && (n = a, (r = (0, i.getWindowTop)().document.createElement("a")).href = n, r.href)
                }

                function I(t, e) {
                    return t.filter((function(t) {
                        return t.type === e
                    }))
                }

                function T(t) {
                    return {
                        w: parseInt(t[0], 10),
                        h: parseInt(t[1], 10)
                    }
                }

                function j(t, e) {
                    var n = (0, r.Z)(t, "params"),
                        a = (0, r.Z)(e, "gdprConsent"),
                        d = (0, r.Z)(e, "uspConsent"),
                        s = (0, r.Z)(t, "userId"),
                        c = (0, r.Z)(t, "schain") || {},
                        u = q.getWindowSize(),
                        p = !(!a || !a.gdprApplies),
                        l = !!d,
                        m = !!o.vc.getConfig("coppa");
                    return Object.assign({}, {
                        customer_id: n.cid
                    }, {
                        prebid_version: pbjs.version
                    }, {
                        gdpr_applies: p
                    }, p && {
                        gdpr_consent_string: a.consentString || ""
                    }, {
                        usp_applies: l
                    }, l && {
                        usp_consent_string: d || ""
                    }, {
                        coppa_applies: m
                    }, -1 !== u.w && -1 !== u.h && {
                        screen: u
                    }, s && {
                        user_id: s
                    }, pbjs.medianetGlobals.analyticsEnabled && {
                        analytics: !0
                    }, !(0, i.isEmpty)(c) && {
                        schain: c
                    })
                }

                function S(t) {
                    var e = {
                        id: t.bidId,
                        transactionId: t.transactionId,
                        ext: {
                            dfp_id: t.adUnitCode,
                            display_count: t.bidRequestsCount
                        },
                        all: t.params
                    };
                    t.ortb2Imp && (e.ortb2Imp = t.ortb2Imp);
                    var n, a = (0, r.Z)(t, "mediaTypes.banner.sizes") || [],
                        o = (0, r.Z)(t, "mediaTypes.video") || {},
                        s = (0, r.Z)(t, "params.video") || {},
                        c = Object.assign({}, s, o);
                    if ((0, i.isEmpty)(c) || (e.video = c), a.length > 0 && (e.banner = (n = a, (0, i.isArray)(n) && 2 === n.length && !(0, i.isArray)(n[0]) ? [T(n)] : n.map((function(t) {
                            return T(t)
                        })))), t.nativeParams) try {
                        e.native = JSON.stringify(t.nativeParams)
                    } catch (t) {
                        (0, i.logError)("".concat(p, " : Incorrect JSON : bidRequest.nativeParams"))
                    }
                    t.params.crid && (e.tagid = t.params.crid.toString());
                    var u = parseFloat(t.params.bidfloor || t.params.bidFloor);
                    u && (e.bidfloor = u);
                    var l = function(t) {
                        var e = document.getElementById(t);
                        if (!e && -1 !== t.indexOf("/")) {
                            var n = (0, i.getGptSlotInfoForAdUnitCode)(t).divId;
                            (0, i.isStr)(n) && (e = document.getElementById(n))
                        }
                        if (e && e.getBoundingClientRect) {
                            var r = e.getBoundingClientRect(),
                                a = {};
                            return a.top_left = {
                                y: r.top,
                                x: r.left
                            }, a.bottom_right = {
                                y: r.bottom,
                                x: r.right
                            }, a
                        }
                        return null
                    }(t.adUnitCode);
                    if (l && e.banner && 0 !== e.banner.length) {
                        var b = function(t) {
                            return {
                                top_left: {
                                    x: t.top_left.x + window.pageXOffset,
                                    y: t.top_left.y + window.pageYOffset
                                },
                                bottom_right: {
                                    x: t.bottom_right.x + window.pageXOffset,
                                    y: t.bottom_right.y + window.pageYOffset
                                }
                            }
                        }(l);
                        e.ext.coordinates = b, e.ext.viewability = M(l.top_left, E(e.banner)), M(b.top_left, E(e.banner)) > .5 ? e.ext.visibility = f : e.ext.visibility = g
                    } else e.ext.visibility = m;
                    var h = function(t) {
                        var e = [];
                        "function" == typeof t.getFloor && [d.Mk, d.pX, d.B5].forEach((function(n) {
                            t.mediaTypes.hasOwnProperty(n) && (n == d.Mk ? t.mediaTypes.banner.sizes.forEach((function(i) {
                                C(t, n, i, e)
                            })) : C(t, n, "*", e))
                        }));
                        return e
                    }(t);
                    return h && h.length > 0 && (e.bidfloors = h), e
                }

                function C(t, e, n, i) {
                    var r = t.getFloor({
                        currency: "USD",
                        mediaType: e,
                        size: n
                    });
                    n.length > 1 && (r.size = n), r.mediaType = e, i.push(r)
                }

                function E(t) {
                    return t.reduce((function(t, e) {
                        return e.h * e.w < t.h * t.w ? e : t
                    }))
                }

                function M(t, e) {
                    var n = e.w * e.h,
                        i = q.getWindowSize(),
                        r = {
                            x: t.x + e.w,
                            y: t.y + e.h
                        };
                    return 0 === n || -1 === i.w || -1 === i.h ? 0 : function(t, e, n, i) {
                        if (t.x > i.x || e.x < n.x || t.y > i.y || e.y < n.y) return 0;
                        return (Math.min(e.x, i.x) - Math.max(t.x, n.x)) * (Math.min(e.y, i.y) - Math.max(t.y, n.y))
                    }(t, r, {
                        x: 0,
                        y: 0
                    }, {
                        x: i.w,
                        y: i.h
                    }) / n
                }

                function O(t, e) {
                    e = (0, i.isArray)(e) && e || [];
                    var n = {
                        logid: "kfk",
                        evtid: "projectevents",
                        project: "prebid"
                    };
                    return n.acid = (0, r.Z)(e, "0.auctionId") || "", n.cid = pbjs.medianetGlobals.cid || "", n.crid = e.map((function(t) {
                        return (0, r.Z)(t, "params.0.crid") || t.adUnitCode
                    })).join("|"), n.adunit_count = e.length || 0, n.dn = v.urlData.domain || "", n.requrl = v.urlData.page || "", n.istop = v.urlData.isTop || "", n.event = t.name || "", n.value = t.value || "", n.rd = t.related_data || "", n
                }

                function Z(t, e) {
                    var n = {
                        protocol: "https",
                        hostname: "qsearch-a.akamaihd.net/log",
                        search: O(t, e)
                    };
                    (0, i.triggerPixel)((0, i.buildUrl)(n))
                }

                function U(t) {
                    var e, n = (0, r.Z)(t, "context") || "",
                        a = (0, r.Z)(t, "vto");
                    "outstream" == n && a && (t.renderer = ((e = c.Th.install({
                        url: l
                    })).setRender((function(t) {
                        window.mnet.queue.push((function() {
                            var e = {
                                    width: t.width,
                                    height: t.height,
                                    vastTimeout: t.vto,
                                    maxAllowedVastTagRedirects: t.mavtr,
                                    allowVpaid: t.avp,
                                    autoPlay: t.ap,
                                    preload: t.pl,
                                    mute: t.mt
                                },
                                n = t.dfp_id,
                                r = (0, i.getGptSlotInfoForAdUnitCode)(n).divId || n;
                            window.mnet.mediaNetoutstreamPlayer(t, r, e)
                        }))
                    })), e))
                }
                window.mnet = window.mnet || {}, window.mnet.queue = window.mnet.queue || [], v.urlData = {
                    domain: y.domain,
                    page: y.page,
                    isTop: y.reachedTop
                }, pbjs.medianetGlobals = pbjs.medianetGlobals || {};
                var q = {
                    code: p,
                    gvlid: 142,
                    supportedMediaTypes: [d.Mk, d.B5, d.pX],
                    isBidRequestValid: function(t) {
                        return t.params ? t.params.cid && (0, i.isStr)(t.params.cid) && !(0, i.isEmptyStr)(t.params.cid) ? (Object.assign(pbjs.medianetGlobals, !pbjs.medianetGlobals.cid && {
                            cid: t.params.cid
                        }), !0) : ((0, i.logError)("".concat(p, " : cid should be a string")), !1) : ((0, i.logError)("".concat(p, " : Missing bid parameters")), !1)
                    },
                    buildRequests: function(t, e) {
                        var n, i = function(t, e) {
                            return {
                                site: x(t[0].params.site, e),
                                ext: j(t[0], e),
                                id: t[0].auctionId,
                                imp: t.map((function(t) {
                                    return S(t)
                                })),
                                ortb2: e.ortb2,
                                tmax: e.timeout || o.vc.getConfig("bidderTimeout")
                            }
                        }(t = (0, u.lY)(t), e);
                        return {
                            method: "POST",
                            url: (n = i.ext.customer_id, "https://prebid.media.net/rtb/prebid?cid=" + encodeURIComponent(n)),
                            data: JSON.stringify(i)
                        }
                    },
                    interpretResponse: function(t, e) {
                        var n = [];
                        if (!t || !t.body) return (0, i.logInfo)("".concat(p, " : response is empty")), n;
                        var r = t.body.bidList;
                        return (0, i.isArray)(r) && 0 !== r.length ? ((n = r.filter((function(t) {
                            return function(t) {
                                return !1 === t.no_bid && parseFloat(t.cpm) > 0
                            }(t)
                        }))).forEach(U), n) : ((0, i.logInfo)("".concat(p, " : no bids")), n)
                    },
                    getUserSyncs: function(t, e) {
                        var n, r = (n = e, !(0, i.isEmpty)(n) && n[0].body && n[0].body.ext && (0, i.isArray)(n[0].body.ext.csUrl) ? n[0].body.ext.csUrl : []);
                        return t.iframeEnabled ? I(r, "iframe") : t.pixelEnabled ? I(r, "image") : void 0
                    },
                    onTimeout: function(t) {
                        try {
                            Z({
                                name: b,
                                value: t.length,
                                related_data: t[0].timeout || o.vc.getConfig("bidderTimeout")
                            }, t)
                        } catch (t) {}
                    },
                    onBidWon: function(t) {
                        try {
                            Z({
                                name: h,
                                value: t.cpm
                            }, [t])
                        } catch (t) {}
                    },
                    clearMnData: function() {
                        v = {}
                    },
                    getWindowSize: function() {
                        return {
                            w: window.screen.width || -1,
                            h: window.screen.height || -1
                        }
                    }
                };
                (0, a.dX)(q), window.pbjs.installedModules.push("medianetBidAdapter")
            }
        },
        function(t) {
            var e;
            e = 896, t(t.s = e)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [5126], {
            15817: function(e, r, a) {
                var t = a(89062),
                    i = a(4942),
                    n = a(71002),
                    s = a(64358),
                    o = a(20265),
                    d = a(96475),
                    p = a(14699),
                    c = a(24679),
                    l = a(3193),
                    u = a(35706),
                    m = a(55975),
                    g = a(70059);

                function f(e, r) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        }))), a.push.apply(a, t)
                    }
                    return a
                }
                var h = "pubmatic",
                    b = "PubMatic: ",
                    v = "USD",
                    y = void 0,
                    E = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
                    I = {
                        kadpageurl: "",
                        gender: "",
                        yob: "",
                        lat: "",
                        lon: "",
                        wiid: "",
                        profId: "",
                        verId: ""
                    },
                    w = "number",
                    P = "string",
                    T = "boolean",
                    O = "array",
                    D = {
                        mimes: O,
                        minduration: w,
                        maxduration: w,
                        startdelay: w,
                        playbackmethod: O,
                        api: O,
                        protocols: O,
                        w: w,
                        h: w,
                        battr: O,
                        linearity: w,
                        placement: w,
                        minbitrate: w,
                        maxbitrate: w,
                        skip: w
                    },
                    x = {
                        TITLE: {
                            ID: 1,
                            KEY: "title",
                            TYPE: 0
                        },
                        IMAGE: {
                            ID: 2,
                            KEY: "image",
                            TYPE: 0
                        },
                        ICON: {
                            ID: 3,
                            KEY: "icon",
                            TYPE: 0
                        },
                        SPONSOREDBY: {
                            ID: 4,
                            KEY: "sponsoredBy",
                            TYPE: 1
                        },
                        BODY: {
                            ID: 5,
                            KEY: "body",
                            TYPE: 2
                        },
                        CLICKURL: {
                            ID: 6,
                            KEY: "clickUrl",
                            TYPE: 0
                        },
                        VIDEO: {
                            ID: 7,
                            KEY: "video",
                            TYPE: 0
                        },
                        EXT: {
                            ID: 8,
                            KEY: "ext",
                            TYPE: 0
                        },
                        DATA: {
                            ID: 9,
                            KEY: "data",
                            TYPE: 0
                        },
                        LOGO: {
                            ID: 10,
                            KEY: "logo",
                            TYPE: 0
                        },
                        SPONSORED: {
                            ID: 11,
                            KEY: "sponsored",
                            TYPE: 1
                        },
                        DESC: {
                            ID: 12,
                            KEY: "data",
                            TYPE: 2
                        },
                        RATING: {
                            ID: 13,
                            KEY: "rating",
                            TYPE: 3
                        },
                        LIKES: {
                            ID: 14,
                            KEY: "likes",
                            TYPE: 4
                        },
                        DOWNLOADS: {
                            ID: 15,
                            KEY: "downloads",
                            TYPE: 5
                        },
                        PRICE: {
                            ID: 16,
                            KEY: "price",
                            TYPE: 6
                        },
                        SALEPRICE: {
                            ID: 17,
                            KEY: "saleprice",
                            TYPE: 7
                        },
                        PHONE: {
                            ID: 18,
                            KEY: "phone",
                            TYPE: 8
                        },
                        ADDRESS: {
                            ID: 19,
                            KEY: "address",
                            TYPE: 9
                        },
                        DESC2: {
                            ID: 20,
                            KEY: "desc2",
                            TYPE: 10
                        },
                        DISPLAYURL: {
                            ID: 21,
                            KEY: "displayurl",
                            TYPE: 11
                        },
                        CTA: {
                            ID: 22,
                            KEY: "cta",
                            TYPE: 12
                        }
                    },
                    S = 1,
                    Y = 2,
                    k = 3,
                    C = [{
                        id: x.SPONSOREDBY.ID,
                        required: !0,
                        data: {
                            type: 1
                        }
                    }, {
                        id: x.TITLE.ID,
                        required: !0
                    }, {
                        id: x.IMAGE.ID,
                        required: !0
                    }],
                    R = {
                        1: "PMP",
                        5: "PREF",
                        6: "PMPG"
                    },
                    A = {
                        bootstrapPlayer: function(e) {
                            var r = {
                                code: e.adUnitCode
                            };
                            if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                                for (var a, t = A.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), n = 0; n < window.bluebillywig.renderers.length; n++)
                                    if (window.bluebillywig.renderers[n]._id === t) {
                                        a = window.bluebillywig.renderers[n];
                                        break
                                    } a ? a.bootstrap(r, i) : (0, s.logWarn)("".concat(b, ": Couldn't find a renderer with ").concat(t))
                            } else(0, s.logWarn)("".concat(b, ": No vastXml or vastUrl on bid, bailing..."))
                        },
                        newRenderer: function(e, r) {
                            var a = E.replace("$RENDERER", e),
                                t = u.Th.install({
                                    url: a,
                                    loaded: !1,
                                    adUnitCode: r
                                });
                            try {
                                t.setRender(A.outstreamRender)
                            } catch (e) {
                                (0, s.logWarn)("".concat(b, ": Error tying to setRender on renderer"), e)
                            }
                            return t
                        },
                        outstreamRender: function(e) {
                            e.renderer.push((function() {
                                A.bootstrapPlayer(e)
                            }))
                        },
                        getRendererId: function(e, r) {
                            return "".concat(e, "-").concat(r)
                        }
                    },
                    N = [c.Mk, c.pX, c.B5],
                    M = 0,
                    z = !1,
                    K = {},
                    U = {},
                    q = ["pubmatic"],
                    j = ["all"];

                function W(e, r) {
                    if (!(0, s.isStr)(r)) return r && (0, s.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (0, n.Z)(r)), y;
                    switch (e) {
                        case "pmzoneid":
                            return r.split(",").slice(0, 50).map((function(e) {
                                return e.trim()
                            })).join();
                        case "kadfloor":
                        case "lat":
                        case "lon":
                            return parseFloat(r) || y;
                        case "yob":
                            return parseInt(r) || y;
                        default:
                            return r
                    }
                }

                function L(e) {
                    var r;
                    e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, (0, s.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && (0, s.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), ""));
                    var a = e.params.adSlot,
                        t = a.split(":");
                    if (a = t[0], 2 == t.length && (e.params.adUnitIndex = t[1]), t = a.split("@"), e.params.adUnit = t[0], t.length > 1) {
                        if (2 != (t = t[1].split("x")).length) return void(0, s.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
                        e.params.width = parseInt(t[0], 10), e.params.height = parseInt(t[1], 10)
                    } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(c.Mk) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                        for (var i = 0, n = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && n.push(e.mediaTypes.banner.sizes[i]);
                        e.mediaTypes.banner.sizes = n, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
                    }
                }

                function B(e, r, a) {
                    var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + (0, n.Z)(r);
                    switch (a) {
                        case T:
                            t = s.isBoolean;
                            break;
                        case w:
                            t = s.isNumber;
                            break;
                        case P:
                            t = s.isStr;
                            break;
                        case O:
                            t = s.isArray
                    }
                    return t(r) ? r : ((0, s.logWarn)(b + i), y)
                }

                function X(e, r) {
                    var a = e.KEY;
                    return {
                        id: e.ID,
                        required: r[a].required ? 1 : 0,
                        data: {
                            type: e.TYPE,
                            len: r[a].len,
                            ext: r[a].ext
                        }
                    }
                }

                function _(e) {
                    var r = {
                        assets: []
                    };
                    for (var a in e) {
                        if (e.hasOwnProperty(a)) {
                            var t = {};
                            if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))) switch (a) {
                                case x.TITLE.KEY:
                                    e[a].len || e[a].length ? t = {
                                        id: x.TITLE.ID,
                                        required: e[a].required ? 1 : 0,
                                        title: {
                                            len: e[a].len || e[a].length,
                                            ext: e[a].ext
                                        }
                                    } : (0, s.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
                                    break;
                                case x.IMAGE.KEY:
                                    e[a].sizes && e[a].sizes.length > 0 ? t = {
                                        id: x.IMAGE.ID,
                                        required: e[a].required ? 1 : 0,
                                        img: {
                                            type: k,
                                            w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                            h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y),
                                            wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : y),
                                            hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : y),
                                            mimes: e[a].mimes,
                                            ext: e[a].ext
                                        }
                                    } : (0, s.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                    break;
                                case x.ICON.KEY:
                                    e[a].sizes && e[a].sizes.length > 0 ? t = {
                                        id: x.ICON.ID,
                                        required: e[a].required ? 1 : 0,
                                        img: {
                                            type: S,
                                            w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                            h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y)
                                        }
                                    } : (0, s.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                    break;
                                case x.VIDEO.KEY:
                                    t = {
                                        id: x.VIDEO.ID,
                                        required: e[a].required ? 1 : 0,
                                        video: {
                                            minduration: e[a].minduration,
                                            maxduration: e[a].maxduration,
                                            protocols: e[a].protocols,
                                            mimes: e[a].mimes,
                                            ext: e[a].ext
                                        }
                                    };
                                    break;
                                case x.EXT.KEY:
                                    t = {
                                        id: x.EXT.ID,
                                        required: e[a].required ? 1 : 0
                                    };
                                    break;
                                case x.LOGO.KEY:
                                    t = {
                                        id: x.LOGO.ID,
                                        required: e[a].required ? 1 : 0,
                                        img: {
                                            type: Y,
                                            w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                            h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y)
                                        }
                                    };
                                    break;
                                case x.SPONSOREDBY.KEY:
                                case x.BODY.KEY:
                                case x.RATING.KEY:
                                case x.LIKES.KEY:
                                case x.DOWNLOADS.KEY:
                                case x.PRICE.KEY:
                                case x.SALEPRICE.KEY:
                                case x.PHONE.KEY:
                                case x.ADDRESS.KEY:
                                case x.DESC2.KEY:
                                case x.DISPLAYURL.KEY:
                                case x.CTA.KEY:
                                    t = X(U[a], e)
                            }
                        }
                        t && t.id && (r.assets[r.assets.length] = t)
                    }
                    var i = C.length,
                        n = 0;
                    return C.forEach((function(e) {
                        for (var a = r.assets.length, t = 0; t < a; t++)
                            if (e.id == r.assets[t].id) {
                                n++;
                                break
                            }
                    })), z = i != n, r
                }

                function Z(e) {
                    var r, a = e.mediaTypes.banner.sizes,
                        t = [];
                    if (a !== y && (0, s.isArray)(a)) {
                        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                        else {
                            if (0 === a.length) return r = y, (0, s.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1)
                        }
                        a.length > 0 && (t = [], a.forEach((function(e) {
                            e.length > 1 && t.push({
                                w: e[0],
                                h: e[1]
                            })
                        })), t.length > 0 && (r.format = t)), r.pos = 0, r.topframe = (0, s.inIframe)() ? 0 : 1
                    } else(0, s.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
                    return r
                }

                function G(e) {
                    var r, a = (0, s.mergeDeep)((0, o.Z)(e.mediaTypes, "video"), e.params.video);
                    if (a !== y) {
                        for (var t in r = {},
                                function(e, r) {
                                    (0, o.Z)(e, "placement") || (0, s.logWarn)("Video.Placement param missing for " + r)
                                }(a, e.adUnitCode), D) a.hasOwnProperty(t) && (r[t] = B(t, a[t], D[t]));
                        (0, s.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : (0, s.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10))
                    } else r = y, (0, s.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                    return r
                }

                function J(e, r, a) {
                    var t = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0,
                        i = "";
                    if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
                        var n, s = t.segments.length;
                        i += "jw-id=" + t.content.id;
                        for (var o = 0; o < s; o++) i += "|jw-" + t.segments[o] + "=1";
                        a ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i
                    }
                }

                function F(e, r) {
                    var a, t, p = {},
                        u = {},
                        m = e.hasOwnProperty("sizes") ? e.sizes : [],
                        g = "",
                        h = [];
                    if (function(e, r) {
                            r.params.deals && ((0, s.isArray)(r.params.deals) ? r.params.deals.forEach((function(r) {
                                (0, s.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                                    private_auction: 0,
                                    deals: []
                                }), e.pmp.deals.push({
                                    id: r
                                })) : (0, s.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r)
                            })) : (0, s.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."))
                        }(p = {
                            id: e.bidId,
                            tagid: e.params.adUnit || void 0,
                            bidfloor: W("kadfloor", e.params.kadfloor),
                            secure: 1,
                            ext: {
                                pmZoneId: W("pmzoneid", e.params.pmzoneid)
                            },
                            bidfloorcur: e.params.currency ? W("currency", e.params.currency) : v
                        }, e), function(e, r) {
                            var a, t = "";
                            if (r.params.dctr)
                                if (t = r.params.dctr, (0, s.isStr)(t) && t.length > 0) {
                                    var i = t.split("|");
                                    t = "", i.forEach((function(e) {
                                        t += e.length > 0 ? e.trim() + "|" : ""
                                    })), a = t.length, "|" === t.substring(a, a - 1) && (t = t.substring(0, a - 1)), e.ext.key_val = t.trim()
                                } else(0, s.logWarn)("PubMatic: Ignoring param : dctr with value : " + t + ", expects string-value, found empty or non-string value")
                        }(p, e), J(p, e), e.hasOwnProperty("mediaTypes"))
                        for (g in e.mediaTypes) switch (g) {
                            case c.Mk:
                                (a = Z(e)) !== y && (p.banner = a);
                                break;
                            case c.B5:
                                u.request = JSON.stringify(_(e.nativeParams)), z ? (0, s.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : p.native = u;
                                break;
                            case c.pX:
                                (t = G(e)) !== y && (p.video = t)
                        } else a = {
                            pos: 0,
                            w: e.params.width,
                            h: e.params.height,
                            topframe: (0, s.inIframe)() ? 0 : 1
                        }, (0, s.isArray)(m) && m.length > 1 && ((m = m.splice(1, m.length - 1)).forEach((function(e) {
                            h.push({
                                w: e[0],
                                h: e[1]
                            })
                        })), a.format = h), p.banner = a;
                    return function(e, r) {
                            var a = function(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var a = null != arguments[r] ? arguments[r] : {};
                                    r % 2 ? f(Object(a), !0).forEach((function(r) {
                                        (0, i.Z)(e, r, a[r])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r))
                                    }))
                                }
                                return e
                            }({}, (0, o.Z)(r, "ortb2Imp.ext.data"));
                            Object.keys(a).forEach((function(r) {
                                "pbadslot" === r ? "string" == typeof a[r] && a[r] && (0, d.N)(e, "ext.data.pbadslot", a[r]) : "adserver" === r ? ["name", "adslot"].forEach((function(r) {
                                    var t = (0, o.Z)(a, "adserver.".concat(r));
                                    "string" == typeof t && t && ((0, d.N)(e, "ext.data.adserver.".concat(r.toLowerCase()), t), "adslot" === r && (0, d.N)(e, "ext.dfp_ad_unit_code", t))
                                })) : (0, d.N)(e, "ext.data.".concat(r), a[r])
                            }))
                        }(p, e),
                        function(e, r) {
                            var a = -1;
                            "function" != typeof r.getFloor || l.vc.getConfig("pubmatic.disableFloors") || [c.Mk, c.pX, c.B5].forEach((function(t) {
                                if (e.hasOwnProperty(t)) {
                                    var i = [];
                                    "banner" === t && (e[t].w && e[t].h && i.push([e[t].w, e[t].h]), (0, s.isArray)(e[t].format) && e[t].format.forEach((function(e) {
                                        return i.push([e.w, e.h])
                                    }))), 0 === i.length && i.push("*"), i.forEach((function(i) {
                                        var o = r.getFloor({
                                            currency: e.bidfloorcur,
                                            mediaType: t,
                                            size: i
                                        });
                                        if ((0, s.logInfo)(b, "floor from floor module returned for mediatype:", t, " and size:", i, " is: currency", o.currency, "floor", o.floor), "object" === (0, n.Z)(o) && o.currency === e.bidfloorcur && !isNaN(parseInt(o.floor))) {
                                            var d = parseFloat(o.floor);
                                            (0, s.logInfo)(b, "floor from floor module:", d, "previous floor value", a, "Min:", Math.min(d, a)), a = -1 === a ? d : Math.min(d, a), (0, s.logInfo)(b, "new floor value:", a)
                                        }
                                    }))
                                }
                            }));
                            e.bidfloor && ((0, s.logInfo)(b, "floor from floor module:", a, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(a, e.bidfloor)), a = Math.max(a, e.bidfloor));
                            e.bidfloor = !isNaN(a) && a > 0 ? a : y, (0, s.logInfo)(b, "new impObj.bidfloor value:", e.bidfloor)
                        }(p, e), p.hasOwnProperty(c.Mk) || p.hasOwnProperty(c.B5) || p.hasOwnProperty(c.pX) ? p : y
                }

                function V(e, r) {
                    (r = r.filter((function(e) {
                        return "string" == typeof e || ((0, s.logWarn)("PubMatic: acat: Each category should be a string, ignoring category: " + e), !1)
                    })).map((function(e) {
                        return e.trim()
                    })).filter((function(e, r, a) {
                        return a.indexOf(e) === r
                    }))).length > 0 && ((0, s.logWarn)("PubMatic: acat: Selected: ", r), e.ext.acat = r)
                }

                function H(e) {
                    return !0 === (0, s.isArray)(e) && e.length > 0
                }(0, s._each)(x, (function(e) {
                    K[e.ID] = e.KEY
                })), (0, s._each)(x, (function(e) {
                    U[e.KEY] = e
                }));
                var $ = {
                    code: h,
                    gvlid: 76,
                    supportedMediaTypes: [c.Mk, c.pX, c.B5],
                    isBidRequestValid: function(e) {
                        if (e && e.params) {
                            if (!(0, s.isStr)(e.params.publisherId)) return (0, s.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
                            if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(c.pX)) {
                                var r = (0, o.Z)(e.mediaTypes, "video.mimes"),
                                    a = (0, o.Z)(e, "params.video.mimes");
                                if (!1 === H(r) && !1 === H(a)) return (0, s.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
                                if (!e.mediaTypes[c.pX].hasOwnProperty("context")) return (0, s.logError)("".concat(b, ": no context specified in bid. Rejecting bid: "), e), !1;
                                if ("outstream" === e.mediaTypes[c.pX].context && !(0, s.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[c.pX].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(c.Mk) || e.mediaTypes.hasOwnProperty(c.B5) ? (delete e.mediaTypes[c.pX], (0, s.logWarn)("".concat(b, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : ((0, s.logError)("".concat(b, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1)
                            }
                            return !0
                        }
                        return !1
                    },
                    buildRequests: function(e, r) {
                        var a, i, p, u, f;
                        e = (0, g.lY)(e), r && r.refererInfo && (f = r.refererInfo);
                        var h, b = function(e) {
                                return {
                                    pageURL: (null == e ? void 0 : e.page) || window.location.href,
                                    refURL: (null == e ? void 0 : e.ref) || window.document.referrer
                                }
                            }(f),
                            E = function(e) {
                                return {
                                    id: "" + (new Date).getTime(),
                                    at: 1,
                                    cur: [v],
                                    imp: [],
                                    site: {
                                        page: e.pageURL,
                                        ref: e.refURL,
                                        publisher: {}
                                    },
                                    device: {
                                        ua: navigator.userAgent,
                                        js: 1,
                                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                        h: screen.height,
                                        w: screen.width,
                                        language: navigator.language
                                    },
                                    user: {},
                                    ext: {}
                                }
                            }(b),
                            w = "",
                            P = [],
                            T = [],
                            O = [];
                        if (e.forEach((function(e) {
                                if ((h = (0, s.deepClone)(e)).params.adSlot = h.params.adSlot || "", L(h), h.mediaTypes && h.mediaTypes.hasOwnProperty("video") || h.params.hasOwnProperty("video"));
                                else if (!(h.hasOwnProperty("mediaTypes") && h.mediaTypes.hasOwnProperty(c.B5) || 0 !== h.params.width || 0 !== h.params.height)) return void(0, s.logWarn)("PubMatic: Skipping the non-standard adslot: ", h.params.adSlot, JSON.stringify(h));
                                b.pubId = b.pubId || h.params.publisherId, (b = function(e, r) {
                                    var a, t, i;
                                    for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), I) I.hasOwnProperty(a) && (t = e[a]) && (i = I[a], "object" === (0, n.Z)(i) && (t = i.f(t, r)), (0, s.isStr)(t) ? r[a] = t : (0, s.logWarn)("PubMatic: Ignoring param : " + a + " with value : " + I[a] + ", expects string-value, found " + (0, n.Z)(t)));
                                    return r
                                }(h.params, b)).transactionId = h.transactionId, "" === w ? w = h.params.currency || y : h.params.hasOwnProperty("currency") && w !== h.params.currency && (0, s.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), h.params.currency = w, h.params.hasOwnProperty("dctr") && (0, s.isStr)(h.params.dctr) && P.push(h.params.dctr), h.params.hasOwnProperty("bcat") && (0, s.isArray)(h.params.bcat) && (T = T.concat(h.params.bcat)), h.params.hasOwnProperty("acat") && (0, s.isArray)(h.params.acat) && (O = O.concat(h.params.acat));
                                var r = F(h);
                                r && E.imp.push(r)
                            })), 0 != E.imp.length) {
                            E.site.publisher.id = b.pubId.trim(), M = b.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(b.profId) || y, E.ext.wrapper.version = parseInt(b.verId) || y, E.ext.wrapper.wiid = b.wiid || r.auctionId, E.ext.wrapper.wv = "prebid_prebid_7.19.0", E.ext.wrapper.transactionId = b.transactionId, E.ext.wrapper.wp = "pbjs";
                            var D, x, S = r ? m.S.get(r.bidderCode, "allowAlternateBidderCodes") : void 0;
                            if (void 0 !== S) {
                                if (E.ext.marketplace = {}, r && 1 == S) {
                                    var Y = m.S.get(r.bidderCode, "allowedAlternateBidderCodes");
                                    (0, s.isArray)(Y) ? (Y = Y.map((function(e) {
                                        return e.trim().toLowerCase()
                                    })).filter((function(e) {
                                        return !!e
                                    })).filter(s.uniques), q = Y.includes("*") ? j : [].concat((0, t.Z)(q), (0, t.Z)(Y))) : q = j
                                }
                                E.ext.marketplace.allowedbidders = q.filter(s.uniques)
                            }
                            E.user.gender = b.gender ? b.gender.trim() : y, E.user.geo = {}, E.user.geo.lat = W("lat", b.lat), E.user.geo.lon = W("lon", b.lon), E.user.yob = W("yob", b.yob), E.device.geo = E.user.geo, E.site.page = b.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (D = E.site.page, (x = document.createElement("a")).href = D, x.hostname), "object" === (0, n.Z)(l.vc.getConfig("content")) && (E.site.content = l.vc.getConfig("content")), "object" === (0, n.Z)(l.vc.getConfig("device")) && (E.device = Object.assign(E.device, l.vc.getConfig("device"))), E.device.language = E.device.language && E.device.language.split("-")[0], (0, d.N)(E, "source.tid", b.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), e[0].schain && (0, d.N)(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && ((0, d.N)(E, "user.ext.consent", r.gdprConsent.consentString), (0, d.N)(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && (0, d.N)(E, "regs.ext.us_privacy", r.uspConsent), !0 === l.vc.getConfig("coppa") && (0, d.N)(E, "regs.coppa", 1),
                                function(e, r) {
                                    var a = (0, o.Z)(r, "0.userIdAsEids");
                                    (0, s.isArray)(a) && a.length > 0 && (0, d.N)(e, "user.eids", a)
                                }(E, e);
                            var k, C, R, A = r && r.ortb2 || {};
                            if (A.site) {
                                var N = E.site,
                                    z = N.page,
                                    K = N.domain,
                                    U = N.ref;
                                (0, s.mergeDeep)(E, {
                                    site: A.site
                                }), E.site.page = z, E.site.domain = K, E.site.ref = U
                            }
                            if (A.user && (0, s.mergeDeep)(E, {
                                    user: A.user
                                }), A.bcat && (T = T.concat(A.bcat)), null !== (a = A.ext) && void 0 !== a && null !== (i = a.prebid) && void 0 !== i && null !== (p = i.bidderparams) && void 0 !== p && null !== (u = p[r.bidderCode]) && void 0 !== u && u.acat) {
                                var B = A.ext.prebid.bidderparams[r.bidderCode].acat;
                                V(E, B)
                            } else O.length && V(E, O);
                            if (function(e, r) {
                                    (r = r.filter((function(e) {
                                        return "string" == typeof e || ((0, s.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), !1)
                                    })).map((function(e) {
                                        return e.trim()
                                    })).filter((function(e, r, a) {
                                        if (e.length > 3) return a.indexOf(e) === r;
                                        (0, s.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                                    }))).length > 0 && ((0, s.logWarn)("PubMatic: bcat: Selected: ", r), e.bcat = r)
                                }(E, T), null != r && r.timeout) E.tmax = r.timeout || l.vc.getConfig("bidderTimeout");
                            else E.tmax = null === (k = window) || void 0 === k || null === (C = k.PWT) || void 0 === C || null === (R = C.versionDetails) || void 0 === R ? void 0 : R.timeout;
                            return E.ext.epoch = (new Date).getTime(), "object" === (0, n.Z)(l.vc.getConfig("app")) && (E.app = l.vc.getConfig("app"), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || y, "object" !== (0, n.Z)(E.app.content) && (E.app.content = E.site.content || y), delete E.site), {
                                method: "POST",
                                url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                                data: JSON.stringify(E),
                                bidderRequest: r
                            }
                        }
                    },
                    interpretResponse: function(e, r) {
                        var a = [],
                            t = v,
                            i = JSON.parse(r.data),
                            n = i.site && i.site.ref ? i.site.ref : "";
                        try {
                            e.body && e.body.seatbid && (0, s.isArray)(e.body.seatbid) && (t = e.body.cur || t, e.body.seatbid.forEach((function(e) {
                                e.bid && (0, s.isArray)(e.bid) && e.bid.forEach((function(o) {
                                    var d = {
                                        requestId: o.impid,
                                        cpm: (parseFloat(o.price) || 0).toFixed(2),
                                        width: o.w,
                                        height: o.h,
                                        creativeId: o.crid || o.id,
                                        dealId: o.dealid,
                                        currency: t,
                                        netRevenue: true,
                                        ttl: 300,
                                        referrer: n,
                                        ad: o.adm,
                                        pm_seat: e.seat || null,
                                        pm_dspid: o.ext && o.ext.dspid ? o.ext.dspid : null,
                                        partnerImpId: o.id || ""
                                    };
                                    i.imp && i.imp.length > 0 && i.imp.forEach((function(e) {
                                        if (o.impid === e.id) switch (function(e, r) {
                                                if (e.ext && null != e.ext.bidtype) r.mediaType = N[e.ext.bidtype];
                                                else {
                                                    (0, s.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                                                    var a = e.adm,
                                                        t = "",
                                                        i = new RegExp(/VAST\s+version/);
                                                    if (a.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = c.Mk;
                                                    else if (i.test(a)) r.mediaType = c.pX;
                                                    else try {
                                                        (t = JSON.parse(a.replace(/\\/g, ""))) && t.native && (r.mediaType = c.B5)
                                                    } catch (e) {
                                                        (0, s.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + a)
                                                    }
                                                }
                                            }(o, d), d.mediaType) {
                                            case c.Mk:
                                                break;
                                            case c.pX:
                                                d.width = o.hasOwnProperty("w") ? o.w : e.video.w, d.height = o.hasOwnProperty("h") ? o.h : e.video.h, d.vastXml = o.adm,
                                                    function(e, r) {
                                                        var a, t, i;
                                                        if (r.bidderRequest && r.bidderRequest.bids) {
                                                            for (var n = 0; n < r.bidderRequest.bids.length; n++) r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[c.pX].context, i = r.bidderRequest.bids[n].adUnitCode);
                                                            t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = A.newRenderer(e.rendererCode, i))
                                                        }
                                                    }(d, r);
                                                break;
                                            case c.B5:
                                                ! function(e, r) {
                                                    if (r.native = {}, e.hasOwnProperty("adm")) {
                                                        var a = "";
                                                        try {
                                                            a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                        } catch (e) {
                                                            return void(0, s.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm)
                                                        }
                                                        if (a && a.native && a.native.assets && a.native.assets.length > 0) {
                                                            r.mediaType = c.B5;
                                                            for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                                                                case x.TITLE.ID:
                                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                    break;
                                                                case x.IMAGE.ID:
                                                                    r.native.image = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case x.ICON.ID:
                                                                    r.native.icon = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case x.SPONSOREDBY.ID:
                                                                case x.BODY.ID:
                                                                case x.LIKES.ID:
                                                                case x.DOWNLOADS.ID:
                                                                case x.PRICE:
                                                                case x.SALEPRICE.ID:
                                                                case x.PHONE.ID:
                                                                case x.ADDRESS.ID:
                                                                case x.DESC2.ID:
                                                                case x.CTA.ID:
                                                                case x.RATING.ID:
                                                                case x.DISPLAYURL.ID:
                                                                    r.native[K[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value
                                                            }
                                                            r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                        }
                                                    }
                                                }(o, d)
                                        }
                                    })), o.ext && o.ext.deal_channel && (d.dealChannel = R[o.ext.deal_channel] || null), d.meta = {}, o.ext && o.ext.dspid && (d.meta.networkId = o.ext.dspid), o.ext && o.ext.advid && (d.meta.buyerId = o.ext.advid), o.adomain && o.adomain.length > 0 && (d.meta.advertiserDomains = o.adomain, d.meta.clickUrl = o.adomain[0]), e.ext && e.ext.buyid && (d.adserverTargeting = {
                                        hb_buyid_pubmatic: e.ext.buyid
                                    }), o.ext && o.ext.marketplace && (d.bidderCode = o.ext.marketplace), a.push(d)
                                }))
                            })))
                        } catch (e) {
                            (0, s.logError)(e)
                        }
                        return a
                    },
                    getUserSyncs: function(e, r, a, t) {
                        var i = "" + M;
                        return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === l.vc.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
                            type: "iframe",
                            url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
                        }] : [{
                            type: "image",
                            url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                        }]
                    },
                    transformBidParams: function(e, r, a, t) {
                        return J(e, a.bids[0], !0), (0, s.convertTypes)({
                            publisherId: "string",
                            adSlot: "string"
                        }, e)
                    }
                };
                (0, p.dX)($), window.pbjs.installedModules.push("pubmaticBidAdapter")
            }
        },
        function(e) {
            var r;
            r = 15817, e(e.s = r)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [8773], {
            10067: function(e, r, t) {
                var i = t(4942),
                    n = t(64358),
                    a = t(20265),
                    s = t(95590),
                    u = t(24679),
                    o = t(14699),
                    d = t(34614),
                    c = t(70059);

                function p(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        r && (i = i.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        }))), t.push.apply(t, i)
                    }
                    return t
                }

                function l(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? p(Object(t), !0).forEach((function(r) {
                            (0, i.Z)(e, r, t[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }))
                    }
                    return e
                }
                var m = ["prebid-eu", "prebid-us", "prebid-asia"],
                    f = ["USD"],
                    h = [u.Mk, u.B5],
                    S = {
                        IMAGE_TYPE: {
                            ICON: 1,
                            MAIN: 3
                        },
                        ASSET_ID: {
                            TITLE: 1,
                            IMAGE: 2,
                            ICON: 3,
                            BODY: 4,
                            SPONSORED: 5,
                            CTA: 6
                        },
                        DATA_ASSET_TYPE: {
                            SPONSORED: 1,
                            DESC: 2,
                            CTA_TEXT: 12
                        }
                    },
                    T = {
                        code: "rtbhouse",
                        supportedMediaTypes: h,
                        gvlid: 16,
                        isBidRequestValid: function(e) {
                            return !(!(0, d.q9)(m, e.params.region) || !e.params.publisherId)
                        },
                        buildRequests: function(e, r) {
                            var t, i, a = {
                                id: (e = (0, c.lY)(e))[0].auctionId,
                                imp: e.map((function(e) {
                                    return function(e) {
                                        var r = {
                                                id: e.bidId,
                                                banner: v(e),
                                                native: E(e),
                                                tagid: e.adUnitCode.toString()
                                            },
                                            t = function(e) {
                                                var r = [];
                                                "function" == typeof e.getFloor && Object.keys(e.mediaTypes).forEach((function(t) {
                                                    (0, d.q9)(h, t) && r.push(e.getFloor({
                                                        currency: f[0],
                                                        mediaType: t,
                                                        size: e.sizes || "*"
                                                    }).floor)
                                                }));
                                                return r.length > 0 ? Math.max.apply(Math, r) : parseFloat(e.params.bidfloor)
                                            }(e);
                                        t && (r.bidfloor = t);
                                        return r
                                    }(e)
                                })),
                                site: g(e, r),
                                cur: f,
                                test: e[0].params.test || 0,
                                source: (t = e[0], i = {
                                    tid: t.transactionId
                                }, i)
                            };
                            if (r && r.gdprConsent && r.gdprConsent.gdprApplies) {
                                var s = r.gdprConsent.consentString ? r.gdprConsent.consentString.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : "",
                                    u = r.gdprConsent.gdprApplies ? 1 : 0;
                                a.regs = {
                                    ext: {
                                        gdpr: u
                                    }
                                }, a.user = {
                                    ext: {
                                        consent: s
                                    }
                                }
                            }
                            if (e[0].schain) {
                                var o = function(e) {
                                    if (!e) return null;
                                    if (! function(e) {
                                            if (!e.nodes) return !1;
                                            var r = ["asi", "sid", "hp"];
                                            return e.nodes.every((function(e) {
                                                return r.every((function(r) {
                                                    return e[r]
                                                }))
                                            }))
                                        }(e)) return (0, n.logError)("RTB House: required schain params missing"), null;
                                    return e
                                }(e[0].schain);
                                o && (a.ext = {
                                    schain: o
                                })
                            }
                            if (e[0].userIdAsEids) {
                                var p = {
                                    eids: e[0].userIdAsEids
                                };
                                a.user && a.user.ext ? a.user.ext = l(l({}, a.user.ext), p) : a.user = {
                                    ext: p
                                }
                            }
                            var m, S, T, y, b = r && r.ortb2;
                            null != b && b.user && (a.user = l(l(l({}, a.user), b.user.data && {
                                data: l(l({}, null === (m = a.user) || void 0 === m ? void 0 : m.data), b.user.data)
                            }), b.user.ext && {
                                ext: l(l({}, null === (S = a.user) || void 0 === S ? void 0 : S.ext), b.user.ext)
                            }));
                            null != b && b.site && (a.site = l(l(l({}, a.site), b.site.content && {
                                content: l(l({}, null === (T = a.site) || void 0 === T ? void 0 : T.content), b.site.content)
                            }), b.site.ext && {
                                ext: l(l({}, null === (y = a.site) || void 0 === y ? void 0 : y.ext), b.site.ext)
                            }));
                            return {
                                method: "POST",
                                url: "https://" + e[0].params.region + ".creativecdn.com/bidder/prebid/bids",
                                data: JSON.stringify(a)
                            }
                        },
                        interpretResponse: function(e, r) {
                            var t = e.body;
                            if (!(0, n.isArray)(t)) return [];
                            var i = [];
                            return t.forEach((function(e) {
                                0 !== e.price && (0 === e.adm.indexOf("{") ? i.push(function(e) {
                                    return {
                                        requestId: e.impid,
                                        mediaType: u.B5,
                                        cpm: e.price,
                                        creativeId: e.adid,
                                        width: 1,
                                        height: 1,
                                        ttl: 55,
                                        meta: {
                                            advertiserDomains: e.adomain
                                        },
                                        netRevenue: !0,
                                        currency: "USD",
                                        native: A(e.adm)
                                    }
                                }(e)) : i.push(function(e) {
                                    return {
                                        requestId: e.impid,
                                        mediaType: u.Mk,
                                        cpm: e.price,
                                        creativeId: e.adid,
                                        ad: e.adm,
                                        width: e.w,
                                        height: e.h,
                                        ttl: 55,
                                        meta: {
                                            advertiserDomains: e.adomain
                                        },
                                        netRevenue: !0,
                                        currency: "USD"
                                    }
                                }(e)))
                            })), i
                        }
                    };

                function v(e) {
                    if ("banner" === e.mediaType || (0, a.Z)(e, "mediaTypes.banner") || !e.mediaType && !e.mediaTypes) {
                        var r = e.sizes || e.mediaTypes.banner.sizes;
                        return {
                            w: r[0][0],
                            h: r[0][1],
                            format: r.map((function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }))
                        }
                    }
                }

                function g(e, r) {
                    var t = "unknown",
                        i = null;
                    e && e.length > 0 && (t = e[0].params.publisherId, i = e[0].params.channel && e[0].params.channel.toString().slice(0, 50));
                    var n = {
                        publisher: {
                            id: t.toString()
                        },
                        page: r.refererInfo.page,
                        name: (0, s.P)()
                    };
                    return i && (n.channel = i), n
                }

                function E(e) {
                    if ("native" === e.mediaType || (0, a.Z)(e, "mediaTypes.native")) return {
                        request: {
                            assets: y(e)
                        },
                        ver: "1.1"
                    }
                }

                function y(e) {
                    var r = e.nativeParams || (0, a.Z)(e, "mediaTypes.native"),
                        t = [];
                    return r.title && t.push({
                        id: S.ASSET_ID.TITLE,
                        required: r.title.required ? 1 : 0,
                        title: {
                            len: r.title.len || 25
                        }
                    }), r.image && t.push({
                        id: S.ASSET_ID.IMAGE,
                        required: r.image.required ? 1 : 0,
                        img: b(r.image, S.IMAGE_TYPE.MAIN)
                    }), r.icon && t.push({
                        id: S.ASSET_ID.ICON,
                        required: r.icon.required ? 1 : 0,
                        img: b(r.icon, S.IMAGE_TYPE.ICON)
                    }), r.sponsoredBy && t.push({
                        id: S.ASSET_ID.SPONSORED,
                        required: r.sponsoredBy.required ? 1 : 0,
                        data: {
                            type: S.DATA_ASSET_TYPE.SPONSORED,
                            len: r.sponsoredBy.len
                        }
                    }), r.body && t.push({
                        id: S.ASSET_ID.BODY,
                        required: r.body.request ? 1 : 0,
                        data: {
                            type: S.DATA_ASSET_TYPE.DESC,
                            len: r.body.len
                        }
                    }), r.cta && t.push({
                        id: S.ASSET_ID.CTA,
                        required: r.cta.required ? 1 : 0,
                        data: {
                            type: S.DATA_ASSET_TYPE.CTA_TEXT,
                            len: r.cta.len
                        }
                    }), t
                }

                function b(e, r) {
                    var t = {
                        type: r
                    };
                    if (e.aspect_ratios) {
                        var i = e.aspect_ratios[0],
                            n = i.min_width || 100;
                        t.wmin = n, t.hmin = n / i.ratio_width * i.ratio_height
                    }
                    if (e.sizes) {
                        var a = Array.isArray(e.sizes[0]) ? e.sizes[0] : e.sizes;
                        t.w = a[0], t.h = a[1]
                    }
                    return t
                }

                function A(e) {
                    var r = JSON.parse(e).native,
                        t = {
                            clickUrl: encodeURIComponent(r.link.url),
                            impressionTrackers: r.imptrackers
                        };
                    return r.assets.forEach((function(e) {
                        switch (e.id) {
                            case S.ASSET_ID.TITLE:
                                t.title = e.title.text;
                                break;
                            case S.ASSET_ID.IMAGE:
                                t.image = {
                                    url: encodeURIComponent(e.img.url),
                                    width: e.img.w,
                                    height: e.img.h
                                };
                                break;
                            case S.ASSET_ID.ICON:
                                t.icon = {
                                    url: encodeURIComponent(e.img.url),
                                    width: e.img.w,
                                    height: e.img.h
                                };
                                break;
                            case S.ASSET_ID.BODY:
                                t.body = e.data.value;
                                break;
                            case S.ASSET_ID.SPONSORED:
                                t.sponsoredBy = e.data.value;
                                break;
                            case S.ASSET_ID.CTA:
                                t.cta = e.data.value
                        }
                    })), t
                }(0, o.dX)(T), window.pbjs.installedModules.push("rtbhouseBidAdapter")
            }
        },
        function(e) {
            e.O(0, [2355], (function() {
                return r = 10067, e(e.s = r);
                var r
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [2972], {
            54834: function(o, e, n) {
                var t = n(71002),
                    i = n(64358),
                    r = n(92797),
                    a = n(9528),
                    d = (0, n(15164).df)({
                        moduleName: "pubCommonId"
                    }),
                    u = "cookie",
                    c = "html5",
                    l = "_pubcid_optout",
                    s = "PublisherCommonId";

                function f(o, e) {
                    if (e === u) return d.getCookie(o);
                    if (e === c && d.hasLocalStorage()) {
                        var n = d.getDataFromLocalStorage("".concat(o, "_exp"));
                        if (!n) return d.getDataFromLocalStorage(o);
                        if (new Date(n).getTime() - Date.now() > 0) return d.getDataFromLocalStorage(o)
                    }
                }

                function m(o, e) {
                    return function(n) {
                        "function" == typeof e && e(), n(o)
                    }
                }

                function v(o) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (o) {
                        var n = (0, i.parseUrl)(o);
                        n.search.id = encodeURIComponent("pubcid:" + e);
                        var t = (0, i.buildUrl)(n);
                        return function() {
                            (0, i.triggerPixel)(t)
                        }
                    }
                }

                function g() {
                    return !!(d.cookiesAreEnabled() && f(l, u) || d.hasLocalStorage() && f(l, c))
                }
                var p = {
                    name: "sharedId",
                    aliasName: "pubCommonId",
                    decode: function(o, e) {
                        if (!g()) return (0, i.logInfo)(" Decoded value PubCommonId " + o), {
                            pubcid: o
                        };
                        (0, i.logInfo)("PubCommonId decode: Has opted-out")
                    },
                    getId: function() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 2 ? arguments[2] : void 0;
                        if (g())(0, i.logInfo)("PubCommonId: Has opted-out");
                        else {
                            var n = a.VP.getCoppa();
                            if (!n) {
                                var r = o.params,
                                    d = (r = void 0 === r ? {} : r).create,
                                    u = void 0 === d || d,
                                    c = r.pixelUrl,
                                    l = e;
                                if (!l) {
                                    try {
                                        "object" === (0, t.Z)(window[s]) && (l = window[s].getId())
                                    } catch (o) {}
                                    l || (l = u && (0, i.hasDeviceAccess)() ? (0, i.generateUUID)() : void 0)
                                }
                                var f = v(c, l);
                                return {
                                    id: l,
                                    callback: m(l, f)
                                }
                            }(0, i.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId")
                        }
                    },
                    extendId: function() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 2 ? arguments[2] : void 0;
                        if (g()) return (0, i.logInfo)("PubCommonId: Has opted-out"), {
                            id: void 0
                        };
                        var n = a.VP.getCoppa();
                        if (n)(0, i.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
                        else {
                            var t = o.params,
                                r = (t = void 0 === t ? {} : t).extend,
                                d = void 0 !== r && r,
                                u = t.pixelUrl;
                            if (d) {
                                if (u) {
                                    var c = v(u, e);
                                    return {
                                        callback: c
                                    }
                                }
                                return {
                                    id: e
                                }
                            }
                        }
                    },
                    domainOverride: function() {
                        for (var o, e, n = document.domain.split("."), t = "_gd".concat(Date.now()), i = 0; i < n.length; i++) {
                            var r = n.slice(i).join(".");
                            if (d.setCookie(t, "1", void 0, void 0, r), e = d.getCookie(t), d.setCookie(t, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, r), "1" !== e) return o;
                            o = r
                        }
                    }
                };
                (0, r.Bx)("userId", p), window.pbjs.installedModules.push("sharedIdSystem")
            }
        },
        function(o) {
            var e;
            e = 54834, o(o.s = e)
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [9215], {
            4192: function(e, n, t) {
                t.d(n, {
                    HQ: function() {
                        return c
                    },
                    Pv: function() {
                        return u
                    },
                    UR: function() {
                        return i
                    }
                });
                var r = t(64358),
                    o = t(20265),
                    i = {
                        growthCodeId: {
                            getValue: function(e) {
                                return e.gc_id
                            },
                            source: "growthcode.io",
                            atype: 1,
                            getUidExt: function(e) {
                                var n = (0, r.pick)(e, ["h1", "h2", "h3"]);
                                if (Object.keys(n).length) return n
                            }
                        },
                        trustpid: {
                            source: "trustpid.com",
                            atype: 1,
                            getValue: function(e) {
                                return e
                            }
                        },
                        intentIqId: {
                            source: "intentiq.com",
                            atype: 1
                        },
                        naveggId: {
                            source: "navegg.com",
                            atype: 1
                        },
                        justId: {
                            source: "justtag.com",
                            atype: 1
                        },
                        pubcid: {
                            source: "pubcid.org",
                            atype: 1
                        },
                        tdid: {
                            source: "adserver.org",
                            atype: 1,
                            getUidExt: function() {
                                return {
                                    rtiPartner: "TDID"
                                }
                            }
                        },
                        id5id: {
                            getValue: function(e) {
                                return e.uid
                            },
                            source: "id5-sync.com",
                            atype: 1,
                            getUidExt: function(e) {
                                if (e.ext) return e.ext
                            }
                        },
                        ftrackId: {
                            source: "flashtalking.com",
                            atype: 1,
                            getValue: function(e) {
                                var n = "";
                                return e.DeviceID && (n = e.DeviceID.join(",")), n
                            },
                            getUidExt: function(e) {
                                return "DeviceID"
                            }
                        },
                        parrableId: {
                            source: "parrable.com",
                            atype: 1,
                            getValue: function(e) {
                                return e.eid ? e.eid : e.ccpaOptout ? "" : null
                            },
                            getUidExt: function(e) {
                                var n = (0, r.pick)(e, ["ibaOptout", "ccpaOptout"]);
                                if (Object.keys(n).length) return n
                            }
                        },
                        idl_env: {
                            source: "liveramp.com",
                            atype: 3
                        },
                        lipb: {
                            getValue: function(e) {
                                return e.lipbid
                            },
                            source: "liveintent.com",
                            atype: 3,
                            getEidExt: function(e) {
                                if (Array.isArray(e.segments) && e.segments.length) return {
                                    segments: e.segments
                                }
                            }
                        },
                        britepoolid: {
                            source: "britepool.com",
                            atype: 3
                        },
                        dmdId: {
                            source: "hcn.health",
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: "crwdcntrl.net",
                            atype: 1
                        },
                        criteoId: {
                            source: "criteo.com",
                            atype: 1
                        },
                        merkleId: {
                            atype: 3,
                            getSource: function(e) {
                                var n;
                                return null != e && null !== (n = e.ext) && void 0 !== n && n.ssp ? "".concat(e.ext.ssp, ".merkleinc.com") : "merkleinc.com"
                            },
                            getValue: function(e) {
                                return e.id
                            },
                            getUidExt: function(e) {
                                return e.keyID ? {
                                    keyID: e.keyID
                                } : e.ext ? e.ext : void 0
                            }
                        },
                        netId: {
                            source: "netid.de",
                            atype: 1
                        },
                        IDP: {
                            source: "zeotap.com",
                            atype: 1
                        },
                        hadronId: {
                            source: "audigent.com",
                            atype: 1
                        },
                        quantcastId: {
                            source: "quantcast.com",
                            atype: 1
                        },
                        idx: {
                            source: "idx.lat",
                            atype: 1
                        },
                        connectid: {
                            source: "verizonmedia.com",
                            atype: 3
                        },
                        fabrickId: {
                            source: "neustar.biz",
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: "mediawallahscript.com",
                            atype: 1
                        },
                        tapadId: {
                            source: "tapad.com",
                            atype: 1
                        },
                        novatiq: {
                            getValue: function(e) {
                                return e.snowflake
                            },
                            source: "novatiq.com",
                            atype: 1
                        },
                        uid2: {
                            source: "uidapi.com",
                            atype: 3,
                            getValue: function(e) {
                                return e.id
                            }
                        },
                        deepintentId: {
                            source: "deepintent.com",
                            atype: 3
                        },
                        admixerId: {
                            source: "admixer.net",
                            atype: 3
                        },
                        adtelligentId: {
                            source: "adtelligent.com",
                            atype: 3
                        },
                        amxId: {
                            source: "amxrtb.com",
                            atype: 1
                        },
                        publinkId: {
                            source: "epsilon.com",
                            atype: 3
                        },
                        kpuid: {
                            source: "kpuid.com",
                            atype: 3
                        },
                        imppid: {
                            source: "ppid.intimatemerger.com",
                            atype: 1
                        },
                        imuid: {
                            source: "intimatemerger.com",
                            atype: 1
                        },
                        connectId: {
                            source: "yahoo.com",
                            atype: 3
                        },
                        qid: {
                            source: "adquery.io",
                            atype: 1
                        },
                        dacId: {
                            source: "impact-ad.jp",
                            atype: 1
                        },
                        "33acrossId": {
                            source: "33across.com",
                            atype: 1,
                            getValue: function(e) {
                                return e.envelope
                            }
                        },
                        tncid: {
                            source: "thenewco.it",
                            atype: 3
                        },
                        gravitompId: {
                            source: "gravito.net",
                            atype: 1
                        },
                        cpexId: {
                            source: "czechadid.cz",
                            atype: 1
                        },
                        oneKeyData: {
                            getValue: function(e) {
                                if (e && Array.isArray(e.identifiers) && e.identifiers[0]) return e.identifiers[0].value
                            },
                            source: "paf",
                            atype: 1,
                            getEidExt: function(e) {
                                if (e && e.preferences) return {
                                    preferences: e.preferences
                                }
                            },
                            getUidExt: function(e) {
                                if (e && Array.isArray(e.identifiers) && e.identifiers[0]) {
                                    var n = e.identifiers[0];
                                    return {
                                        version: n.version,
                                        type: n.type,
                                        source: n.source
                                    }
                                }
                            }
                        }
                    };

                function a(e, n) {
                    var t = i[n];
                    if (t && e) {
                        var o = {};
                        o.source = (0, r.isFn)(t.getSource) ? t.getSource(e) : t.source;
                        var a = (0, r.isFn)(t.getValue) ? t.getValue(e) : e;
                        if ((0, r.isStr)(a)) {
                            var c = {
                                id: a,
                                atype: t.atype
                            };
                            if ((0, r.isFn)(t.getUidExt)) {
                                var u = t.getUidExt(e);
                                u && (c.ext = u)
                            }
                            if (o.uids = [c], (0, r.isFn)(t.getEidExt)) {
                                var s = t.getEidExt(e);
                                s && (o.ext = s)
                            }
                            return o
                        }
                    }
                    return null
                }

                function c(e) {
                    var n = [],
                        t = function(t) {
                            if (e.hasOwnProperty(t))
                                if ("pubProvidedId" === t) n = n.concat(e.pubProvidedId);
                                else if ("ftrackId" === t) {
                                var r = {
                                    atype: 1,
                                    id: (e.ftrackId.DeviceID || []).join("|"),
                                    ext: {}
                                };
                                for (var o in e.ftrackId) r.ext[o] = (e.ftrackId[o] || []).join("|");
                                n.push(r)
                            } else if (Array.isArray(e[t])) e[t].forEach((function(e, r, o) {
                                var i = a(e, t);
                                i && n.push(i)
                            }));
                            else {
                                var i = a(e[t], t);
                                i && n.push(i)
                            }
                        };
                    for (var r in e) t(r);
                    return n
                }

                function u(e) {
                    var n = [];
                    return e.filter((function(e) {
                        return (0, r.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                    })).forEach((function(e) {
                        Object.keys(e.idObj).forEach((function(t) {
                            (0, o.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, o.Z)(i, t + ".source") && n.push({
                                source: i[t].source,
                                bidders: e.config.bidders
                            })
                        }))
                    })), n
                }
            },
            34727: function(e, n, t) {
                var r, o, i, a, c, u, s = t(71002),
                    d = t(34614),
                    l = t(3193),
                    f = t(52021),
                    g = t(78640),
                    p = t(9528),
                    m = t(5644),
                    y = t(92797),
                    v = t(4192),
                    b = t(15164),
                    h = t(64358),
                    I = t(20265),
                    k = t(7563),
                    w = t(68792),
                    E = t(17673),
                    j = t(99128),
                    O = "User ID",
                    S = "cookie",
                    D = "html5",
                    x = "_pbjs_userid_consent_data",
                    A = 30,
                    P = "_pbjs_id_optout",
                    C = (0, b.eA)("userid"),
                    U = !1,
                    T = [],
                    V = [],
                    L = [],
                    _ = function() {
                        return null == u && (u = (0, j.V6)()), u
                    };

                function F(e) {
                    return _().fork().renameWith((function(n) {
                        return ["userId.mod.".concat(n), "userId.mods.".concat(e, ".").concat(n)]
                    }))
                }

                function N(e, n) {
                    var t = e.config.storage,
                        r = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                    try {
                        var o = (0, h.isPlainObject)(n) ? JSON.stringify(n) : n,
                            i = new Date(Date.now() + 864e5 * t.expires).toUTCString();
                        t.type === S ? (C.setCookie(t.name, o, i, "Lax", r), "number" == typeof t.refreshInSeconds && C.setCookie("".concat(t.name, "_last"), (new Date).toUTCString(), i, "Lax", r)) : t.type === D && (C.setDataInLocalStorage("".concat(t.name, "_exp"), i), C.setDataInLocalStorage(t.name, encodeURIComponent(o)), "number" == typeof t.refreshInSeconds && C.setDataInLocalStorage("".concat(t.name, "_last"), (new Date).toUTCString()))
                    } catch (e) {
                        (0, h.logError)(e)
                    }
                }

                function R(e) {
                    var n = (0, h.getPrebidInternal)().setEidPermissions;
                    "function" == typeof n && (0, h.isArray)(e) && n((0, v.Pv)(e))
                }

                function Z(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = t ? "".concat(e.name, "_").concat(t) : e.name;
                    try {
                        if (e.type === S) n = C.getCookie(r);
                        else if (e.type === D) {
                            var o = C.getDataFromLocalStorage("".concat(e.name, "_exp"));
                            "" === o ? n = C.getDataFromLocalStorage(r) : o && new Date(o).getTime() - Date.now() > 0 && (n = decodeURIComponent(C.getDataFromLocalStorage(r)))
                        }
                        "string" == typeof n && "{" === n.trim().charAt(0) && (n = JSON.parse(n))
                    } catch (e) {
                        (0, h.logError)(e)
                    }
                    return n
                }

                function q(e) {
                    var n = {
                        consentString: "",
                        gdprApplies: !1,
                        apiVersion: 0
                    };
                    return e && (n.consentString = e.consentString, n.gdprApplies = e.gdprApplies, n.apiVersion = e.apiVersion), (0, h.cyrb53Hash)(JSON.stringify(n))
                }

                function G(e) {
                    try {
                        var n = new Date(Date.now() + 864e5 * A).toUTCString();
                        C.setCookie(x, q(e), n, "Lax")
                    } catch (e) {
                        (0, h.logError)(e)
                    }
                }

                function z() {
                    try {
                        return C.getCookie(x)
                    } catch (e) {
                        (0, h.logError)(e)
                    }
                }

                function J() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                    if (!C.cookiesAreEnabled()) return e;
                    var n, t, r = e.split(".");
                    if (2 == r.length) return e;
                    var o = -2,
                        i = "_rdc".concat(Date.now()),
                        a = "writeable";
                    do {
                        n = r.slice(o).join(".");
                        var c = new Date((0, h.timestamp)() + 1e4).toUTCString();
                        C.setCookie(i, a, c, "Lax", n, void 0);
                        var u = C.getCookie(i, void 0);
                        u === a ? (t = !1, C.setCookie(i, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n, void 0)) : (o += -1, t = Math.abs(o) <= r.length)
                    } while (t);
                    return n
                }

                function W(e, n) {
                    n = _().fork().startTiming("userId.callbacks.total").stopBefore(n);
                    var t = (0, h.delayExecution)((function() {
                        clearTimeout(undefined), n()
                    }), e.length);
                    e.forEach((function(e) {
                        var n = F(e.submodule.name).startTiming("callback").stopBefore(t);
                        try {
                            e.callback((function(t) {
                                t ? (e.config.storage && N(e, t), e.idObj = e.submodule.decode(t, e.config)) : (0, h.logInfo)("".concat(O, ": ").concat(e.submodule.name, " - request id responded with an empty value")), n()
                            }))
                        } catch (t) {
                            (0, h.logError)("Error in userID module '".concat(e.submodule.name, "':"), t), n()
                        }
                        e.callback = void 0
                    }))
                }

                function B(e, n) {
                    [e].some((function(e) {
                        return !Array.isArray(e) || !e.length
                    })) || e.forEach((function(e) {
                        e.bids && (0, h.isArray)(e.bids) && e.bids.forEach((function(e) {
                            var t = function(e, n) {
                                return Array.isArray(e) && e.length && n ? e.filter((function(e) {
                                    return !e.config.bidders || !(0, h.isArray)(e.config.bidders) || (0, d.q9)(e.config.bidders, n)
                                })).filter((function(e) {
                                    return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                                })).reduce((function(e, n) {
                                    return Object.keys(n.idObj).forEach((function(t) {
                                        e[t] = n.idObj[t]
                                    })), e
                                }), {}) : {}
                            }(n, e.bidder);
                            Object.keys(t).length && (e.userId = t, e.userIdAsEids = (0, v.HQ)(t))
                        }))
                    }))
                }
                var H, M = {};

                function Q() {
                    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = t.delay,
                        c = void 0 === a ? w.Z.timeout : a,
                        u = (0, w.P)(),
                        s = (0, w.P)(),
                        d = !1;

                    function l(t) {
                        return n = _().fork(), null != e && e.reject(M), e = (0, w.P)(), w.Z.race([t, e.promise]).finally(n.startTiming("userId.total"))
                    }
                    var g = r,
                        v = T;

                    function b(e) {
                        return function() {
                            if (g === r && v === T) return e.apply(void 0, arguments)
                        }
                    }

                    function I() {
                        return p.rp.promise.finally(n.startTiming("userId.init.gdpr"))
                    }
                    var k = l(w.Z.all([y.Cd, u.promise]).then(I).then(b((function(e) {
                        ue(g, v, e)
                    }))).then((function() {
                        return s.promise.finally(n.startTiming("userId.callbacks.pending"))
                    })).then(b((function() {
                        var e = g.filter((function(e) {
                            return (0, h.isFn)(e.callback)
                        }));
                        if (e.length) return new w.Z((function(n) {
                            return W(e, n)
                        }))
                    }))));
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.refresh,
                            t = void 0 !== n && n,
                            r = e.submoduleNames,
                            a = void 0 === r ? null : r,
                            p = e.ready,
                            y = void 0 !== p && p;
                        return y && !d && (d = !0, u.resolve(), i > 0 ? s.resolve() : f.on(m.FP.AUCTION_END, (function e() {
                            f.S1(m.FP.AUCTION_END, e), c(o).then(s.resolve)
                        }))), t && d && (k = l(k.catch((function() {
                            return null
                        })).then(I).then(b((function(e) {
                            var n = ue(g, v.filter((function(e) {
                                return null == a || a.includes(e.submodule.name)
                            })), e, !0).filter((function(e) {
                                return null != e.callback
                            }));
                            if (n.length) return new w.Z((function(e) {
                                return W(n, e)
                            }))
                        }))))), k
                    }
                }

                function K() {
                    var e = a && ($() || []).find((function(e) {
                        return e.source === a
                    }));
                    if (e && "string" == typeof(0, I.Z)(e, "uids.0.id")) {
                        var n = e.uids[0].id.replace(/[\W_]/g, "");
                        if (n.length >= 32 && n.length <= 150) return n;
                        (0, h.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(a, " is not between 32 and 150 characters - ").concat(n))
                    }
                }
                var X = (0, j.g3)("userId", (function(e, n) {
                    var t = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = o.delay,
                        c = void 0 === a ? w.Z.timeout : a,
                        u = o.getIds,
                        s = void 0 === u ? ie : u;
                    w.Z.race([s().catch((function() {
                        return null
                    })), c(i)]).then((function() {
                        B(n.adUnits || (0, g.R)().adUnits, r);
                        var o = K();
                        o && ((0, h.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(o) : (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                            window.googletag.pubads().setPublisherProvidedId(o)
                        })))), _().join((0, j.Bf)(n.metrics), {
                            propagate: !1,
                            includeGroups: !0
                        }), e.call(t, n)
                    }))
                }));

                function Y() {
                    return function(e) {
                        return Array.isArray(e) && e.length ? e.filter((function(e) {
                            return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                        })).reduce((function(e, n) {
                            return Object.keys(n.idObj).forEach((function(t) {
                                e[t] = n.idObj[t]
                            })), e
                        }), {}) : {}
                    }(r)
                }

                function $() {
                    return (0, v.HQ)(Y())
                }

                function ee(e) {
                    return (0, v.HQ)(function(e, n) {
                        if (!Array.isArray(e) || !e.length) return {};
                        var t = e.filter((function(e) {
                            var t;
                            return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length && (null === (t = v.UR[Object.keys(e.idObj)[0]]) || void 0 === t ? void 0 : t.source) === n
                        }));
                        return (0, h.isEmpty)(t) ? [] : t[0].idObj
                    }(r, e))[0]
                }

                function ne(e, n, t) {
                    return H().then((function() {
                        var r = {};
                        if ((0, h.isFn)(t)) {
                            (0, h.logInfo)("".concat(O, " - Getting encrypted signal from custom function : ").concat(t.name, " & source : ").concat(e, " "));
                            var o = t(e);
                            r[e] = o ? te(o) : null
                        } else {
                            var i = ee(e);
                            (0, h.logInfo)("".concat(O, " - Getting encrypted signal for eids :").concat(JSON.stringify(i))), (0, h.isEmpty)(i) || (r[i.source] = !0 === n ? te(i) : i.uids[0].id)
                        }
                        return (0, h.logInfo)("".concat(O, " - Fetching encrypted eids: ").concat(r[e])), r[e]
                    }))
                }

                function te(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        t = "";
                    if (1 === n) t = "object" === (0, s.Z)(e) ? window.btoa(JSON.stringify(e)) : window.btoa(e);
                    return "".concat(n, "||").concat(t)
                }

                function re() {
                    if ((0, h.isGptPubadsDefined)()) {
                        window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [];
                        var e = l.vc.getConfig("userSync.encryptedSignalSources");
                        if (e) {
                            var n = e.registerDelay || 0;
                            setTimeout((function() {
                                e.sources && e.sources.forEach((function(e) {
                                    var n = e.source,
                                        t = e.encrypt,
                                        r = e.customFunc;
                                    n.forEach((function(e) {
                                        window.googletag.encryptedSignalProviders.push({
                                            id: e,
                                            collectorFunction: function() {
                                                return ne(e, t, r)
                                            }
                                        })
                                    }))
                                }))
                            }), n)
                        } else(0, h.logWarn)("".concat(O, " - ESP : encryptedSignalSources config not defined under userSync Object"))
                    }
                }

                function oe() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.submoduleNames,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return H({
                        refresh: !0,
                        submoduleNames: n
                    }).then((function() {
                        return t && (0, h.isFn)(t) && t(), Y()
                    }))
                }

                function ie() {
                    return H().then((function() {
                        return Y()
                    }), (function(e) {
                        return e === M ? Promise.resolve().then(ie) : ((0, h.logError)("Error initializing userId", e), w.Z.reject(e))
                    }))
                }
                var ae = (0, y.z3)("sync", (function(e, n) {
                    return {
                        userIdModules: e,
                        hasValidated: n && n.hasValidated
                    }
                }), "validateGdprEnforcement");

                function ce(e, n, t, r) {
                    if (e.config.storage) {
                        var o, i = Z(e.config.storage),
                            a = !1;
                        if ("number" == typeof e.config.storage.refreshInSeconds) {
                            var c = new Date(Z(e.config.storage, "last"));
                            a = c && Date.now() - c.getTime() > 1e3 * e.config.storage.refreshInSeconds
                        }!i || a || r || ! function(e, n) {
                            return null != e && e === q(n)
                        }(t, n) ? o = e.submodule.getId(e.config, n, i) : "function" == typeof e.submodule.extendId && (o = e.submodule.extendId(e.config, n, i)), (0, h.isPlainObject)(o) && (o.id && (N(e, o.id), i = o.id), "function" == typeof o.callback && (e.callback = o.callback)), i && (e.idObj = e.submodule.decode(i, e.config))
                    } else if (e.config.value) e.idObj = e.config.value;
                    else {
                        var u = e.submodule.getId(e.config, n, void 0);
                        (0, h.isPlainObject)(u) && ("function" == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config)))
                    }
                }

                function ue(e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return _().fork().measureTime("userId.init.modules", (function() {
                        if (!n.length) return [];
                        var o = le();
                        if (!(n = n.filter((function(e) {
                                return !e.config.storage || o.has(e.config.storage.type)
                            }))).length) return (0, h.logWarn)("".concat(O, " - no ID module is configured for one of the available storage types:"), Array.from(o)), [];
                        var i = ae(n, t),
                            a = i.userIdModules;
                        if (!i.hasValidated && !(0, E.h)(t)) return (0, h.logWarn)("".concat(O, " - gdpr permission not valid for local storage or cookies, exit module")), [];
                        var c = z();
                        G(t);
                        var u = a.reduce((function(e, n) {
                            return F(n.submodule.name).measureTime("init", (function() {
                                try {
                                    ce(n, t, c, r), e.push(n)
                                } catch (e) {
                                    (0, h.logError)("Error in userID module '".concat(n.submodule.name, "':"), e)
                                }
                                return e
                            }))
                        }), []);
                        return u.length && R(u), u.forEach(se.bind(null, e)), u
                    }))
                }

                function se(e, n) {
                    for (var t = !1, r = 0; r < e.length; r++)
                        if (n.config.name.toLowerCase() === e[r].config.name.toLowerCase()) {
                            t = !0, e[r] = n;
                            break
                        } t || e.push(n)
                }
                var de = new Set([D, S]);

                function le() {
                    var e = [],
                        n = !1;
                    return C.localStorageIsEnabled() && (e.push(D), C.getDataFromLocalStorage(P) && ((0, h.logInfo)("".concat(O, " - opt-out localStorage found, storage disabled")), n = !0)), C.cookiesAreEnabled() && (e.push(S), C.getCookie(P) && ((0, h.logInfo)("".concat(O, " - opt-out cookie found, storage disabled")), n = !0)), new Set(n ? [] : e)
                }

                function fe() {
                    var e = function(e, n) {
                        return Array.isArray(e) ? e.reduce((function(e, n) {
                            return !n || (0, h.isEmptyStr)(n.name) || (n.storage && !(0, h.isEmptyStr)(n.storage.type) && !(0, h.isEmptyStr)(n.storage.name) && de.has(n.storage.type) || (0, h.isPlainObject)(n.value) ? e.push(n) : n.storage || n.value || e.push(n)), e
                        }), []) : []
                    }(V);
                    if (e.length) {
                        var n = L.filter((function(e) {
                            return !(0, d.sE)(T, (function(n) {
                                return n.name === e.name
                            }))
                        }));
                        T.splice(0, T.length), n.map((function(n) {
                            var t = (0, d.sE)(e, (function(e) {
                                return e.name && (e.name.toLowerCase() === n.name.toLowerCase() || n.aliasName && e.name.toLowerCase() === n.aliasName.toLowerCase())
                            }));
                            return t && n.name !== t.name && (t.name = n.name), n.findRootDomain = J, t ? {
                                submodule: n,
                                config: t,
                                callback: void 0,
                                idObj: void 0
                            } : null
                        })).filter((function(e) {
                            return null !== e
                        })).forEach((function(e) {
                            return T.push(e)
                        })), !U && T.length && ((0, g.R)().requestBids.before(X, 40), k.G.after((function(e) {
                            return e(K())
                        })), (0, h.logInfo)("".concat(O, " - usersync config updated for ").concat(T.length, " submodules: "), T.map((function(e) {
                            return e.submodule.name
                        }))), U = !0)
                    }
                }

                function ge(e) {
                    return function() {
                        return Promise.resolve(e.apply(this, arguments))
                    }
                }! function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.delay,
                        u = void 0 === t ? w.Z.timeout : t;
                    a = void 0, T = [], V = [], U = !1, r = [], H = Q({
                        delay: u
                    }), null != c && c(), L = [], c = e.getConfig("userSync", (function(e) {
                        var n = e.userSync;
                        a = n.ppid, n && n.userIds && (V = n.userIds, o = (0, h.isNumber)(n.syncDelay) ? n.syncDelay : 500, i = (0, h.isNumber)(n.auctionDelay) ? n.auctionDelay : 0, fe(), H({
                            ready: !0
                        }))
                    })), (0, g.R)().getUserIds = Y, (0, g.R)().getUserIdsAsEids = $, (0, g.R)().getEncryptedEidsForSource = ge(ne), (0, g.R)().registerSignalSources = re, (0, g.R)().refreshUserIds = ge(oe), (0, g.R)().getUserIdsAsync = ge(ie), (0, g.R)().getUserIdsAsEidBySource = ee
                }(l.vc), (0, y.bA)("userId", (function(e) {
                    (0, d.sE)(L, (function(n) {
                        return n.name === e.name
                    })) || (L.push(e), fe(), H({
                        refresh: !0,
                        submoduleNames: [e.name]
                    }))
                })), window.pbjs.installedModules.push("userId")
            },
            7563: function(e, n, t) {
                t.d(n, {
                    G: function() {
                        return r
                    }
                });
                var r = (0, t(92797).z3)("sync", (function() {}))
            },
            17673: function(e, n, t) {
                t.d(n, {
                    h: function() {
                        return o
                    }
                });
                var r = t(20265);

                function o(e) {
                    return null == e || !e.gdprApplies || !0 === (0, r.Z)(e, "vendorData.purpose.consents.1")
                }
            }
        },
        function(e) {
            var n;
            n = 34727, e(e.s = n)
        }
    ]);
})(), pbjs.processQueue();
