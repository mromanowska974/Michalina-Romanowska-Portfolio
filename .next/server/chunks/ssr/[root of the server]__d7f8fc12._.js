module.exports = {

"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[project]/lib/projects.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteProject": (()=>deleteProject),
    "getProject": (()=>getProject),
    "getProjectImages": (()=>getProjectImages),
    "getProjects": (()=>getProjects),
    "saveProject": (()=>saveProject)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
;
;
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"])('portfolio.db');
async function addImages(images, projectName) {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(`public/images/${projectName}`)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(`public/images/${projectName}`);
    }
    images.forEach((image)=>{
        const stream = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].createWriteStream(`public/images/${projectName}/${image.name}`);
        image.arrayBuffer().then((buffer)=>{
            stream.write(Buffer.from(buffer), (error)=>{
                if (error) {
                    throw new Error('Saving image failed.');
                }
            });
            stream.end();
        });
    });
}
function saveProject(project, images) {
    const query = db.prepare(`
        INSERT INTO projects
            (name, technologies, descriptionPL, descriptionEN, status, app_link, repo_link)
        VALUES (
            @name,
            @technologies,
            @descriptionPL,
            @descriptionEN,
            @status,
            @app_link,
            @repo_link
        )
    `);
    const result = query.run(project);
    const projectId = result.lastInsertRowid;
    images.forEach((image)=>{
        const imageData = {
            name: image.name,
            project_id: projectId
        };
        db.prepare(`
            INSERT INTO images
                (name, project_id)
            VALUES (
                @name,
                @project_id
            )
        `).run(imageData);
    });
    addImages(images, project.name);
}
function getProjects() {
    return db.prepare('select * from projects').all();
}
function getProjectImages(projectId) {
    return db.prepare('select * from images where project_id=?').all(projectId);
}
function getProject(id) {
    return db.prepare('select * from projects where id=?').get(id);
}
function deleteProject(id) {
    const project = getProject(id);
    db.prepare('delete from projects where id=?').run(id);
    db.prepare('delete from images where project_id=?').run(id);
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].rmdirSync(`public/images/${project.name}`, {
        recursive: true
    });
}
}}),
"[project]/lib/questions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteQuestion": (()=>deleteQuestion),
    "getQuestion": (()=>getQuestion),
    "getQuestions": (()=>getQuestions),
    "saveQuestion": (()=>saveQuestion),
    "updateQuestion": (()=>updateQuestion)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
;
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"])('portfolio.db');
function saveQuestion(question) {
    db.prepare(`
        INSERT INTO questions
            (question, answer)
        VALUES (
            @question,
            @answer
        )
    `).run(question);
}
function getQuestions() {
    return db.prepare(`SELECT * FROM questions`).all();
}
function getQuestion(id) {
    return db.prepare(`SELECT * FROM questions WHERE id = ?`).run(id);
}
function deleteQuestion(id) {
    db.prepare(`DELETE FROM questions WHERE id = ?`).run(id);
}
function updateQuestion(question) {
    db.prepare(`
        UPDATE questions
        SET question = @question,
            answer = @answer
        WHERE id = @id
    `).run(question);
}
}}),
"[externals]/bcrypt [external] (bcrypt, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("bcrypt", () => require("bcrypt"));

module.exports = mod;
}}),
"[project]/lib/action.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"405b4a211d6b7d1c59ae147518bcb565669b058e0b":"addProject","4065b387cad713ff2e849fac712b0a8a2e3cbfb663":"addQuestion","60f71897cea2ef91d8041e45cd3a21df077434871a":"deleteResource"} */ __turbopack_context__.s({
    "addProject": (()=>addProject),
    "addQuestion": (()=>addQuestion),
    "deleteResource": (()=>deleteResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/questions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
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
        descriptionPL: formData.get('descriptionPL'),
        descriptionEN: formData.get('descriptionEN'),
        app_link: formData.get('app-link'),
        repo_link: formData.get('repo-link'),
        status: formData.get('status')
    };
    const images = formData.getAll('images');
    if (isInvalidText(project.name) || isInvalidText(project.technologies) || isInvalidText(project.descriptionPL) || isInvalidText(project.descriptionEN) || isInvalidText(project.app_link) || isInvalidText(project.repo_link) || isInvalidText(project.status)) {
        throw new Error('Invalid Input');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProject"])(project, images);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ addQuestion(formData) {
    const unhashedAnswer = formData.get('answer');
    const question = {
        question: formData.get('question'),
        answer: await __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(unhashedAnswer, 1)
    };
    if (isInvalidText(question.question) || isInvalidText(question.answer)) {
        throw new Error('Invalid Input');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveQuestion"])(question);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/secret-door/questions');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteResource(resourceId, resourceType) {
    if (resourceType === 'project') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"])(resourceId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/secret-door/edit-projects`);
    } else if (resourceType === 'question') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuestion"])(resourceId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/secret-door/questions`);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addProject,
    addQuestion,
    deleteResource
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProject, "405b4a211d6b7d1c59ae147518bcb565669b058e0b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuestion, "4065b387cad713ff2e849fac712b0a8a2e3cbfb663", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteResource, "60f71897cea2ef91d8041e45cd3a21df077434871a", null);
}}),
"[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
}}),
"[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "405b4a211d6b7d1c59ae147518bcb565669b058e0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProject"]),
    "4065b387cad713ff2e849fac712b0a8a2e3cbfb663": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuestion"]),
    "60f71897cea2ef91d8041e45cd3a21df077434871a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteResource"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "405b4a211d6b7d1c59ae147518bcb565669b058e0b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405b4a211d6b7d1c59ae147518bcb565669b058e0b"]),
    "4065b387cad713ff2e849fac712b0a8a2e3cbfb663": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4065b387cad713ff2e849fac712b0a8a2e3cbfb663"]),
    "60f71897cea2ef91d8041e45cd3a21df077434871a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60f71897cea2ef91d8041e45cd3a21df077434871a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/secret-door/edit-projects/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/app/secret-door/edit-projects/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "page-module__pdDG0q__container",
  "project": "page-module__pdDG0q__project",
  "scrollable": "page-module__pdDG0q__scrollable",
});
}}),
"[project]/components/Scrollable/scrollable.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "scrollable-module__hiIgJq__container",
  "portraitX": "scrollable-module__hiIgJq__portraitX",
  "portraitY": "scrollable-module__hiIgJq__portraitY",
  "x": "scrollable-module__hiIgJq__x",
  "y": "scrollable-module__hiIgJq__y",
});
}}),
"[project]/components/Scrollable/scrollable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Scrollable/scrollable.module.css [app-rsc] (css module)");
;
;
;
function Scrollable({ children, className, axis, portraitAxis, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container} ${className} ${axis ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][axis] : undefined} ${portraitAxis ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][portraitAxis] : undefined}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Scrollable/scrollable.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Scrollable;
}}),
"[project]/components/Actions/actions.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Actions/actions.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Actions/actions.js <module evaluation>", "default");
}}),
"[project]/components/Actions/actions.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Actions/actions.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Actions/actions.js", "default");
}}),
"[project]/components/Actions/actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Actions$2f$actions$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/Actions/actions.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Actions$2f$actions$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/Actions/actions.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Actions$2f$actions$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/secret-door/edit-projects/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/secret-door/edit-projects/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Scrollable/scrollable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Actions$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Actions/actions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function EditProjects() {
    const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Edycja i usuwanie projektów"
            }, void 0, false, {
                fileName: "[project]/app/secret-door/edit-projects/page.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scrollable$2f$scrollable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                axis: 'y',
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scrollable,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: projects && projects.length > 0 ? projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$secret$2d$door$2f$edit$2d$projects$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].project,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: project.name
                                }, void 0, false, {
                                    fileName: "[project]/app/secret-door/edit-projects/page.js",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Actions$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    resourceId: project.id,
                                    resourceType: 'project'
                                }, void 0, false, {
                                    fileName: "[project]/app/secret-door/edit-projects/page.js",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/app/secret-door/edit-projects/page.js",
                            lineNumber: 16,
                            columnNumber: 25
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Brak projektów"
                    }, void 0, false, {
                        fileName: "[project]/app/secret-door/edit-projects/page.js",
                        lineNumber: 20,
                        columnNumber: 26
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/secret-door/edit-projects/page.js",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/secret-door/edit-projects/page.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/secret-door/edit-projects/page.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = EditProjects;
}}),
"[project]/app/secret-door/edit-projects/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/secret-door/edit-projects/page.js [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d7f8fc12._.js.map