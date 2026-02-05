module.exports = [
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-foreground text-background hover:bg-foreground/90 rounded-full",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
            outline: "border border-border bg-background hover:border-foreground/30 rounded-full",
            secondary: "bg-muted text-muted-foreground hover:bg-muted/80 rounded-full",
            ghost: "hover:bg-muted hover:text-foreground rounded-lg",
            link: "text-foreground underline-offset-4 hover:underline",
            hero: "bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium",
            "hero-secondary": "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/40 rounded-full font-medium",
            nav: "text-foreground/60 hover:text-foreground hover:bg-transparent font-medium"
        },
        size: {
            default: "h-11 px-6 py-2.5",
            sm: "h-9 px-5 text-sm",
            lg: "h-12 px-8 text-base",
            xl: "h-14 px-10 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
;
;
;
const PHONE_NUMBER = "+441616960976";
const features = [
    "Installed in 14 days",
    "4 slots per month",
    "See it live on the call"
];
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-background z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 mix-blend-multiply filter blur-3xl animate-float",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 left-10 w-96 h-96 bg-[hsl(var(--gradient-pink))] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-20 right-10 w-[30rem] h-[30rem] bg-[hsl(var(--gradient-orange))] rounded-full animation-delay-2000"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-20 left-1/2 w-96 h-96 bg-[hsl(var(--gradient-purple))] rounded-full animation-delay-4000"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center space-y-8 md:space-y-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "heading-display animate-fade-in-up",
                                    children: [
                                        "You're not missing leads.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                            lineNumber: 30,
                                            columnNumber: 40
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "serif-italic gradient-text",
                                            children: "You're leaking bookings."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up",
                                    style: {
                                        animationDelay: "0.1s"
                                    },
                                    children: "We install a 14-Day Call-First System with an Instant Receptionist that answers calls, books appointments, and follows up—even when you're busy or closed."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4 animate-fade-in-up",
                            style: {
                                animationDelay: "0.2s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "hero",
                                        size: "lg",
                                        className: "h-14 px-8 text-lg w-full sm:w-auto",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${PHONE_NUMBER}`,
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                "Call now",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "60-second Fit Check. We'll tell you what's breaking and when we can fix it."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-3 md:gap-6 animate-fade-in-up",
                            style: {
                                animationDelay: "0.3s"
                            },
                            children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4 text-success"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: feature
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
;
;
const Problem = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-background relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section mb-6",
                                children: "You already do the hard part—getting people interested."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-muted-foreground",
                                children: "Then the leak happens."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-premium p-8 md:p-12 mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-6",
                                children: [
                                    "Calls during a job go straight to voicemail",
                                    "Evening enquiries sit until morning (they've already moved on)",
                                    "\"Just checking prices\" becomes \"I'll think about it\"",
                                    "Follow-ups live in your head, not your system",
                                    "No-shows cost you twice—the slot and the replacement booking",
                                    "You can't see what happened without chasing people down"
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "h-6 w-6 text-destructive flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                                lineNumber: 26,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg text-foreground/90",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                                lineNumber: 27,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                        lineNumber: 25,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-destructive to-orange-500",
                            children: "This isn't a lead problem. It's a conversion problem."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Problem;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const features = [
    "Call-first landing page with one clear action",
    "Instant Receptionist for missed calls and after-hours",
    "Booking flow (Cal.com or your current tool)",
    "Follow-up automation for unbooked enquiries",
    "Confirmations and reminders",
    "No-show recovery",
    "Owner visibility—every lead timestamped, logged, with next action"
];
const WhatWeInstall = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background",
        id: "what-we-install",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-w-xl scroll-fade-in", isVisible && "visible"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4",
                                children: "What We Install"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section heading-mixed mb-4",
                                children: [
                                    "The Call-First ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "serif-italic",
                                        children: "System"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                        lineNumber: 30,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-medium text-foreground mb-4",
                                children: "Booking infrastructure designed to convert enquiries into outcomes."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-primary mb-8",
                                children: "Answered. Booked. Followed up. Logged."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                                lineNumber: 42,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-body",
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                                lineNumber: 43,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                        lineNumber: 41,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted rounded-2xl aspect-square w-full lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center relative overflow-hidden scroll-fade-in", isVisible && "visible"),
                        style: {
                            transitionDelay: "200ms"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-8 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground font-medium",
                                        children: "System Visual Placeholder"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-2",
                                        children: "(Dashboard or Flow Diagram)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhatWeInstall;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingCards",
    ()=>PricingCards,
    "pricingPackages",
    ()=>pricingPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
                children: pricingPackages.map((pkg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `card-premium p-8 flex flex-col ${pkg.featured ? 'ring-1 ring-foreground relative' : ''}`,
                        children: [
                            pkg.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-sm font-medium rounded-full",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 59,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-3",
                                        children: pkg.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold mb-6",
                                        children: pkg.price
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mb-3",
                                        children: pkg.bestFor
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-[hsl(262,83%,58%)]",
                                        children: pkg.promise
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex-grow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: pkg.features.map((feature, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-4 w-4 text-foreground flex-shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-foreground/80",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, j, true, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                            lineNumber: 78,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            showCTA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: pkg.featured ? "default" : "outline",
                                size: "lg",
                                className: "w-full",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${PHONE_NUMBER}`,
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                    lineNumber: 93,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 max-w-4xl mx-auto p-6 bg-muted/30 rounded-xl space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Note:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Software subscriptions and ad spend are paid by you directly."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Installation guarantee:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " If we can't deliver your system in 14 days, you don't pay."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$pricing$2f$PricingCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/pricing/PricingCards.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const Pricing = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background-subtle",
        id: "pricing",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-4",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section heading-mixed mb-3",
                            children: [
                                "Three installs. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "serif-italic",
                                    children: "One outcome."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-body max-w-2xl mx-auto",
                            children: "Pick your entry point. Every option stops the leak."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("scroll-fade-in", isVisible && "visible"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$pricing$2f$PricingCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PricingCards"], {
                        showCTA: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center mt-10 scroll-fade-in", isVisible && "visible"),
                    style: {
                        transitionDelay: "500ms"
                    },
                    children: [
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
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground mt-3",
                            children: "See it live on the call."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Pricing;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
;
const timelineItems = [
    {
        number: "1",
        title: "A mobile conversion page with one clear next step",
        subtitle: "Fit Check → audit booking flow"
    },
    {
        number: "2",
        title: "Follow-up messages",
        subtitle: "That nudge non-responders and reduce no-shows"
    },
    {
        number: "3",
        title: "Owner Dashboard",
        subtitle: "Pipeline + follow-up due list"
    },
    {
        number: "4",
        title: "Tracking",
        subtitle: "So you can see what is working"
    },
    {
        number: "5",
        title: "Missed Call Capture (included)",
        subtitle: "Inbound call handling that captures details and routes to booking or callback"
    }
];
const Roadmap = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background-subtle",
        id: "roadmap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-4",
                            children: "Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section heading-mixed mb-3",
                            children: [
                                "What's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "serif-italic",
                                    children: "next"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                    lineNumber: 46,
                                    columnNumber: 20
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-body max-w-md mx-auto",
                            children: "A mobile conversion page with one clear next step"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 top-8 bottom-8 w-px bg-border/50"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: timelineItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true,
                                            amount: 0.3
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        },
                                        className: "relative flex gap-4 md:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0
                                                },
                                                whileInView: {
                                                    scale: 1
                                                },
                                                viewport: {
                                                    once: true,
                                                    amount: 0.3
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    delay: index * 0.1 + 0.2,
                                                    ease: "backOut"
                                                },
                                                className: "flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm relative z-10",
                                                children: item.number
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 pt-1.5 pb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground text-sm mb-1",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: item.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.number, true, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Roadmap;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const faqs = [
    {
        question: "Do I need ads for this to work?",
        answer: "No. If you already have traffic from referrals, partnerships, organic content, or an existing audience, we plug the system into what you have and stop the leak. If you want more volume, we recommend ads—because once the leak is closed, ad spend becomes an investment, not a gamble."
    },
    {
        question: "What does \"Traffic switch-on\" mean?",
        answer: "Traffic is actively hitting your system when we go live on Day 12. That can be your existing traffic sources, paid ads, or both. If we use paid ads, you pay ad spend directly to the platform."
    },
    {
        question: "Can I start with just the Instant Receptionist?",
        answer: "Yes. It's the fastest way to stop missed calls and book appointments automatically. You can add the full system later."
    },
    {
        question: "When do installs start?",
        answer: "We run 4 install slots per month. Call now to confirm fit and lock in the next start date."
    }
];
const FAQ = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background-subtle",
        id: "faq",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-narrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-center mb-10 md:mb-14 scroll-fade-in", isVisible && "visible"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-4",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section mb-6",
                            children: "Common questions"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-w-2xl mx-auto scroll-fade-up", isVisible && "visible"),
                    style: {
                        transitionDelay: "100ms"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                        type: "single",
                        collapsible: true,
                        className: "w-full",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                value: `item-${index}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                        className: "text-left font-medium text-lg",
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                                        lineNumber: 50,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                        className: "text-muted-foreground whitespace-pre-line leading-relaxed",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FAQ;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
;
;
;
;
;
const BrandOS = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background-subtle",
        id: "brand-os",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-narrow text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("scroll-fade-in", isVisible && "visible"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow mb-4",
                        children: "Not Ready to Call Yet?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "heading-section heading-mixed mb-4",
                        children: [
                            "Generate your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "serif-italic",
                                children: "Brand OS"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                                lineNumber: 20,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            " in 60 seconds."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-body max-w-lg mx-auto mb-2",
                        children: "Get positioning, offer clarity, and messaging you can use today. Free. Instant. No email required."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-body max-w-lg mx-auto mb-8 font-medium",
                        children: "Then call when you want the system installed."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "hero-secondary",
                        size: "lg",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://staging.klarnow.ai",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2",
                            children: [
                                "Generate my Brand OS",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BrandOS;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-ssr] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/hooks/useScrollAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const PHONE_NUMBER = "+441616960976";
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        title: "Multi-location routing",
        description: "Route calls to specific teams."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "Custom CRM setup",
        description: "Reporting dashboards & pipelines."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
        title: "Full funnel rebuilds",
        description: "Conversion testing & optimization."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
        title: "Ad creative systems",
        description: "Content pipelines & systems."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
        title: "Sales restructuring",
        description: "Follow-up & process overhaul."
    }
];
const CustomServices = ()=>{
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "section-padding bg-background",
        id: "custom-services",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-wide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("scroll-fade-left", isVisible && "visible"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4",
                                children: "Need Something More Complex?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section heading-mixed mb-4",
                                children: [
                                    "Custom ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "serif-italic",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                        lineNumber: 31,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body mb-4",
                                children: "For multi-location or deep automation needs. If your setup involves multiple teams, custom CRM builds, or full funnel rebuilds, start with Brand OS first."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body mb-8",
                                children: "When you're ready, call and ask about Custom Services."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "hero",
                                size: "default",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${PHONE_NUMBER}`,
                                    className: "flex items-center gap-2",
                                    children: [
                                        "Call now",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-1 md:grid-cols-2 gap-4 scroll-fade-right", isVisible && "visible"),
                        style: {
                            transitionDelay: "100ms"
                        },
                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-xl border border-border/30 p-5 hover:border-border/60 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                            className: "h-4 w-4 text-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                        lineNumber: 51,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-foreground text-sm mb-1",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                        lineNumber: 55,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, service.title, true, {
                                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                                lineNumber: 50,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CustomServices;
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
                        lineNumber: 23,
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
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-foreground/60 mt-3",
                        children: subhead || "60-second Fit Check. See it live."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FinalCTA;
}),
"[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Problem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Problem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$WhatWeInstall$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/WhatWeInstall.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Pricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Pricing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Roadmap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/Roadmap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FAQ.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$BrandOS$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/BrandOS.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$CustomServices$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/CustomServices.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/klarnow-new-web/klarnow-14day/src/components/sections/FinalCTA.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const Index = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Problem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$WhatWeInstall$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Roadmap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$Pricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$BrandOS$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$CustomServices$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$klarnow$2d$new$2d$web$2f$klarnow$2d$14day$2f$src$2f$components$2f$sections$2f$FinalCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/klarnow-new-web/klarnow-14day/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Index;
}),
];

//# sourceMappingURL=Desktop_klarnow-new-web_klarnow-14day_src_f4c5917f._.js.map