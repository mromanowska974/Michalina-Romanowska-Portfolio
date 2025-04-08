module.exports = {

"[project]/.next-internal/server/app/projects/[projectId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}}),
"[project]/lib/projects.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProject": (()=>getProject),
    "getProjects": (()=>getProjects),
    "saveProject": (()=>saveProject)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
;
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"])('portfolio.db');
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
}}),
"[project]/app/projects/[projectId]/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.js [app-rsc] (ecmascript)");
;
;
;
;
function ProjectPage(props) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const projectId = searchParams.get('id');
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"])(projectId);
    console.log(project);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Projekt"
    }, void 0, false, {
        fileName: "[project]/app/projects/[projectId]/page.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = ProjectPage;
}}),
"[project]/app/projects/[projectId]/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[projectId]/page.js [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__8758c11d._.js.map