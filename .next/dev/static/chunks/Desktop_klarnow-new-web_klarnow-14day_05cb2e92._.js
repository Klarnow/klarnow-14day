(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingCards",
    ()=>PricingCards,
    "pricingPackages",
    ()=>pricingPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
"use client";
;
;
;
const PHONE_NUMBER = "+441616960976";
const pricingPackages = [
    {
        name: "Instant Receptionist",
        price: "£995",
        bestFor: "You miss calls or lose after-hours enquiries.",
        promise: "Stop the bleeding today.",
        features: [
            "AI call agent installed and live",
            "Answers, books, reschedules, cancels, handles FAQs",
            "Routing rules and handover to you when needed"
        ]
    },
    {
        name: "14-Day System + Traffic",
        price: "£2,795",
        bestFor: "You want the full fix + launch support.",
        promise: "Turn it on and scale it.",
        features: [
            "Everything in Instant Receptionist",
            "Landing page or funnel page installed",
            "Tracking and conversion events",
            "Go-live (traffic switch-on) on Day 12",
            "4 launch ad creatives"
        ],
        featured: true
    },
    {
        name: "System + Traffic + Pro Content",
        price: "£3,995",
        bestFor: "You're launching or relaunching properly.",
        promise: "Launch like you mean it.",
        features: [
            "Everything in the £2,795 package",
            "Professional shoot",
            "12 edited vertical clips (9:16) for ads and social"
        ]
    }
];
const PricingCards = ({ showCTA = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
                children: pricingPackages.map((pkg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `card-premium p-8 flex flex-col ${pkg.featured ? 'ring-1 ring-foreground relative' : ''}`,
                        children: [
                            pkg.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-sm font-medium rounded-full",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 60,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-3",
                                        children: pkg.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold mb-6",
                                        children: pkg.price
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mb-3",
                                        children: pkg.bestFor
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 68,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-[hsl(262,83%,58%)]",
                                        children: pkg.promise
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex-grow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: pkg.features.map((feature, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-4 w-4 text-foreground flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-foreground/80",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, j, true, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            showCTA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: pkg.featured ? "default" : "outline",
                                size: "lg",
                                className: "w-full",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${PHONE_NUMBER}`,
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                    lineNumber: 94,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 88,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 max-w-4xl mx-auto p-6 bg-muted/30 rounded-xl space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Note:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Software subscriptions and ad spend are paid by you directly."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Installation guarantee:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " If we can't deliver your system in 14 days, you don't pay."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = PricingCards;
var _c;
__turbopack_context__.k.register(_c, "PricingCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollAnimation(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold,
                rootMargin: "0px 0px -50px 0px"
            });
            const currentRef = ref.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "useScrollAnimation.useEffect": ()=>{
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], [
        threshold
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useScrollAnimation, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const FinalCTA = ({ title, subhead })=>{
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hero-gradient h-48 md:h-64 flex items-center justify-center scroll-fade-in", isVisible && "visible"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-5",
                        children: title || "Stop leaking bookings?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "hero",
                        size: "lg",
                        asChild: true,
                        className: "bg-foreground text-background hover:bg-foreground/90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${PHONE_NUMBER}`,
                            className: "flex items-center gap-2",
                            children: [
                                "Call now",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-foreground/60 mt-3",
                        children: subhead || "60-second Fit Check. See it live."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FinalCTA, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = FinalCTA;
const __TURBOPACK__default__export__ = FinalCTA;
var _c;
__turbopack_context__.k.register(_c, "FinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$pricing$2f$PricingCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const PricingPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4 md:mb-6 animate-fade-in",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "heading-display mb-6 animate-fade-in-up",
                                style: {
                                    animationDelay: "0.1s"
                                },
                                children: "Three installs. One outcome."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: "Choose the level of launch support you want. Every option stops the leak."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "hero",
                                size: "lg",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${PHONE_NUMBER}`,
                                    className: "flex items-center gap-2",
                                    children: [
                                        "Call now",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-4",
                                children: "60-second Fit Check. No pitch."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$pricing$2f$PricingCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingCards"], {}, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Ready to stop the leak?",
                subhead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Call now. We'll tell you what's breaking and when we can fix it.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                            lineNumber: 48,
                            columnNumber: 89
                        }, void 0),
                        "60 seconds. No pitch."
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/pricing/page.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PricingPage;
const __TURBOPACK__default__export__ = PricingPage;
var _c;
__turbopack_context__.k.register(_c, "PricingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_klarnow-new-web_klarnow-14day_05cb2e92._.js.map