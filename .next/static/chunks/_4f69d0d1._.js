(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_4f69d0d1._.js", {

"[project]/lib/projects.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProject": (()=>getProject),
    "getProjects": (()=>getProjects),
    "saveProject": (()=>saveProject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-sqlite3/lib/index.js [app-client] (ecmascript)");
;
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('portfolio.db');
function saveProject(project) {
    db.prepare(`
        INSERT INTO projects
            (name, technologies, description, app_link, repo_link)
        VALUES (
            @name,
            @technologies,
            @description,
            @app_link,
            @repo_link
        )
    `).run(project);
}
function getProjects() {
    return db.prepare('select * from projects').all();
}
function getProject(id) {
    return db.prepare('select * from projects where id=?').get(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/[projectId]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProjectDetails(props) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const projectId = searchParams.get('id');
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(projectId);
    console.log(project);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Projekt"
    }, void 0, false, {
        fileName: "[project]/app/projects/[projectId]/page.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(ProjectDetails, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ProjectDetails;
const __TURBOPACK__default__export__ = ProjectDetails;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4f69d0d1._.js.map