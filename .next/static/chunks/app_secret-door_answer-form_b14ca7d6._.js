(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_secret-door_answer-form_b14ca7d6._.js", {

"[project]/app/secret-door/answer-form/answer-form.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
});
}}),
"[project]/app/secret-door/answer-form/answer-form.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$answer$2d$form$2f$answer$2d$form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/secret-door/answer-form/answer-form.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/Input/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/Button/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
function AnswerForm({ question }) {
    function handleCheckAnswer(event) {
        event.preventDefault();
        const answer = event.target.answer.value;
        if (answer === question.answer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleCheckAnswer,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$answer$2d$form$2f$answer$2d$form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                name: 'answer'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/answer-form/answer-form.js",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                text: 'Odpowiedz'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/answer-form/answer-form.js",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/secret-door/answer-form/answer-form.js",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = AnswerForm;
const __TURBOPACK__default__export__ = AnswerForm;
var _c;
__turbopack_context__.k.register(_c, "AnswerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_secret-door_answer-form_b14ca7d6._.js.map