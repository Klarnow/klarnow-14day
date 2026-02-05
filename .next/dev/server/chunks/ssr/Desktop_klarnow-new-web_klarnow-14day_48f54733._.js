module.exports = [
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useScrollAnimation(threshold = 0.1) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold,
            rootMargin: "0px 0px -50px 0px"
        });
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return ()=>{
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [
        threshold
    ]);
    return {
        ref,
        isVisible
    };
}
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const FinalCTA = ({ title, subhead })=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hero-gradient h-48 md:h-64 flex items-center justify-center scroll-fade-in", isVisible && "visible"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-5",
                        children: title || "Stop leaking bookings?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "hero",
                        size: "lg",
                        asChild: true,
                        className: "bg-foreground text-background hover:bg-foreground/90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${PHONE_NUMBER}`,
                            className: "flex items-center gap-2",
                            children: [
                                "Call now",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = FinalCTA;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const Results = ()=>{
    const outcomes = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            title: "More enquiries captured",
            description: "Calls answered or logged—even when you're unavailable."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            title: "More bookings from the same traffic",
            description: "No more \"I'll think about it\" disappearing into the void."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            title: "Fewer no-shows",
            description: "Confirmations 24 hours before. Reminders 2 hours before."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            title: "Every lead logged with an outcome",
            description: "Booked, followed up, or closed. You know where everything stands."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
            title: "Visibility on what needs attention today",
            description: "No more guessing. You see what's due and what's next."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative hero-gradient pt-32 pb-16 md:pt-40 md:pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4 md:mb-6 animate-fade-in",
                                children: "Results"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "heading-display mb-6 animate-fade-in-up",
                                style: {
                                    animationDelay: "0.1s"
                                },
                                children: "What changes when the system is installed."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: "Faster response. Cleaner follow-up. Clear outcomes. Less chaos."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "hero",
                                size: "lg",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${PHONE_NUMBER}`,
                                    className: "flex items-center gap-2",
                                    children: [
                                        "Call now",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section text-center mb-12",
                                children: "Outcomes You Can Expect"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: outcomes.map((outcome, i)=>{
                                    const Icon = outcome.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-premium p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-lg mb-2",
                                                            children: outcome.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: outcome.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-muted/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section text-center mb-12",
                                children: "What Changes After Installation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-6",
                                                children: "Before the system:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            [
                                                {
                                                    issue: "3am enquiry",
                                                    result: "sits in your inbox until morning"
                                                },
                                                {
                                                    issue: "Missed call during a job",
                                                    result: "they call someone else"
                                                },
                                                {
                                                    issue: "\"I'll think about it\"",
                                                    result: "disappears forever"
                                                },
                                                {
                                                    issue: "No-show",
                                                    result: "empty slot, lost revenue"
                                                },
                                                {
                                                    issue: "Where did that lead go?",
                                                    result: "no idea"
                                                }
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-background rounded-lg border border-border/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-foreground",
                                                                children: item.issue
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: [
                                                                    " → ",
                                                                    item.result
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, i, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-6 text-success",
                                                children: "After the system:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            [
                                                {
                                                    issue: "3am enquiry",
                                                    result: "captured and responded to by 9am"
                                                },
                                                {
                                                    issue: "Missed call during a job",
                                                    result: "AI books them before they move on"
                                                },
                                                {
                                                    issue: "\"I'll think about it\"",
                                                    result: "automatic follow-up in 48 hours"
                                                },
                                                {
                                                    issue: "No-show",
                                                    result: "confirmation 24hrs before, reminder 2hrs before"
                                                },
                                                {
                                                    issue: "Where did that lead go?",
                                                    result: "timestamped, logged, next action visible"
                                                }
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-success/5 rounded-lg border border-success/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-foreground",
                                                                children: item.issue
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: [
                                                                    " → ",
                                                                    item.result
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, i, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section mb-6",
                                children: "See It Live"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground mb-8",
                                children: [
                                    "Want to see the system in action before you commit?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 80
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "We'll show you a live install on the 60-second fit check call."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                        lineNumber: 142,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Want the same system installed?",
                subhead: "Call now. 60 seconds to confirm fit and the next start date."
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/results/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Results;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
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
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Clock", [
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
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Target
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Target", [
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
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
]);
;
 //# sourceMappingURL=target.js.map
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Target",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Eye", [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_klarnow-new-web_klarnow-14day_48f54733._.js.map