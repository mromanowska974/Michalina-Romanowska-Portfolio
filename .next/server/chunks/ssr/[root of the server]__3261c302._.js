module.exports = {

"[externals]/node:fs [external] (node:fs, cjs, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_node:fs_cbd691c7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:fs [external] (node:fs, cjs)");
    });
});
}}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[turbopack]_browser_dev_hmr-client_hmr-client_ts_59fa4ecd._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript)");
    });
});
}}),

};