module.exports = {

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
"[project]/lib/action.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"405b4a211d6b7d1c59ae147518bcb565669b058e0b":"addProject"} */ __turbopack_context__.s({
    "addProject": (()=>addProject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
function isInvalidText(text) {
    return !text || text.trim() === '';
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ addProject(formData) {
    const project = {
        name: formData.get('project-name'),
        technologies: formData.get('technologies'),
        description: formData.get('description'),
        app_link: formData.get('app-link'),
        repo_link: formData.get('repo-link')
    };
    if (isInvalidText(project.name) || isInvalidText(project.technologies) || isInvalidText(project.description) || isInvalidText(project.app_link) || isInvalidText(project.repo_link)) {
        throw new Error('Invalid Input');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProject"])(project);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addProject
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProject, "405b4a211d6b7d1c59ae147518bcb565669b058e0b", null);
}}),
"[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "405b4a211d6b7d1c59ae147518bcb565669b058e0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProject"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "405b4a211d6b7d1c59ae147518bcb565669b058e0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405b4a211d6b7d1c59ae147518bcb565669b058e0b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/add-project/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/app/secret-door/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/secret-door/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/app/secret-door/add-project/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "form": "page-module__ohjVxG__form",
});
}}),
"[project]/app/secret-door/add-project/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../components/UI/Button/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../../components/UI/Input/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/secret-door/add-project/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function AddProject() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$add$2d$project$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].form,
        action: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProject"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                label: 'Nazwa Projektu',
                name: 'project-name'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                label: 'Technologie (oddzielane przecinkiem)',
                name: 'technologies'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                label: 'Link do Aplikacji',
                name: 'app-link'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                label: 'Link do Repozytorium',
                name: 'repo-link'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                textarea: true,
                label: 'Opis Projektu (polski opis / angielski opis)',
                name: 'description'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                text: 'Dodaj Projekt'
            }, void 0, false, {
                fileName: "[project]/app/secret-door/add-project/page.js",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/secret-door/add-project/page.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = AddProject;
}}),
"[project]/app/secret-door/add-project/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/secret-door/add-project/page.js [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__43b3a2da._.js.map