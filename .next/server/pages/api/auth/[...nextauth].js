"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "@t3-oss/env-nextjs":
/*!*************************************!*\
  !*** external "@t3-oss/env-nextjs" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/auth/[...nextauth].ts */ \"(api)/./src/pages/api/auth/[...nextauth].ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVELnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBGO0FBQzNCO0FBQ0w7QUFDMUQsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ2tFO0FBQ2xFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsNERBQVE7QUFDcEM7QUFDTztBQUNQO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV0JTVHdpdHRlckNsb25lLz8wOTAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuY29uc3QgUGFnZXNBUElSb3V0ZU1vZHVsZSA9IG1vZHVsZS5QYWdlc0FQSVJvdXRlTW9kdWxlO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(api)/./src/server/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_1__]);\n_server_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRVc7QUFFNUMsaUVBQWVBLGdEQUFRQSxDQUFDQyxxREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1dCU1R3aXR0ZXJDbG9uZS8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcblxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwifi9zZXJ2ZXIvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(api)/./src/server/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.db),\n    providers: [\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = (ctx)=>{\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(ctx.req, ctx.res, authOptions);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQU12QztBQUN1QztBQUUxQjtBQUNDO0FBdUJqQzs7OztDQUlDLEdBQ00sTUFBTUssY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQU07Z0JBQy9CLEdBQUdELE9BQU87Z0JBQ1ZDLE1BQU07b0JBQ0osR0FBR0QsUUFBUUMsSUFBSTtvQkFDZkMsSUFBSUQsS0FBS0MsRUFBRTtnQkFDYjtZQUNGO0lBQ0Y7SUFDQUMsU0FBU1Ysd0VBQWFBLENBQUNJLDBDQUFFQTtJQUN6Qk8sV0FBVztRQUNUVCxrRUFBZUEsQ0FBQztZQUNkVSxVQUFVVCx5Q0FBR0EsQ0FBQ1UsaUJBQWlCO1lBQy9CQyxjQUFjWCx5Q0FBR0EsQ0FBQ1kscUJBQXFCO1FBQ3pDO0tBVUQ7QUFDSCxFQUFFO0FBRUY7Ozs7Q0FJQyxHQUNNLE1BQU1DLHVCQUF1QixDQUFDQztJQUluQyxPQUFPaEIsMkRBQWdCQSxDQUFDZ0IsSUFBSUMsR0FBRyxFQUFFRCxJQUFJRSxHQUFHLEVBQUVkO0FBQzVDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQlNUd2l0dGVyQ2xvbmUvLi9zcmMvc2VydmVyL2F1dGgudHM/MjJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IHR5cGUgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge1xuICBnZXRTZXJ2ZXJTZXNzaW9uLFxuICB0eXBlIERlZmF1bHRTZXNzaW9uLFxuICB0eXBlIE5leHRBdXRoT3B0aW9ucyxcbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2Vudi5tanNcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vc2VydmVyL2RiXCI7XG5cbi8qKlxuICogTW9kdWxlIGF1Z21lbnRhdGlvbiBmb3IgYG5leHQtYXV0aGAgdHlwZXMuIEFsbG93cyB1cyB0byBhZGQgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIGBzZXNzaW9uYFxuICogb2JqZWN0IGFuZCBrZWVwIHR5cGUgc2FmZXR5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2dldHRpbmctc3RhcnRlZC90eXBlc2NyaXB0I21vZHVsZS1hdWdtZW50YXRpb25cbiAqL1xuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIGV4dGVuZHMgRGVmYXVsdFNlc3Npb24ge1xuICAgIHVzZXI6IERlZmF1bHRTZXNzaW9uW1widXNlclwiXSAmIHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAvLyAuLi5vdGhlciBwcm9wZXJ0aWVzXG4gICAgICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gaW50ZXJmYWNlIFVzZXIge1xuICAvLyAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgLy8gICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgLy8gfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIE5leHRBdXRoLmpzIHVzZWQgdG8gY29uZmlndXJlIGFkYXB0ZXJzLCBwcm92aWRlcnMsIGNhbGxiYWNrcywgZXRjLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdXNlciB9KSA9PiAoe1xuICAgICAgLi4uc2Vzc2lvbixcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpLFxuICBwcm92aWRlcnM6IFtcbiAgICBEaXNjb3JkUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IGVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvKipcbiAgICAgKiAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZS5cbiAgICAgKlxuICAgICAqIE1vc3Qgb3RoZXIgcHJvdmlkZXJzIHJlcXVpcmUgYSBiaXQgbW9yZSB3b3JrIHRoYW4gdGhlIERpc2NvcmQgcHJvdmlkZXIuIEZvciBleGFtcGxlLCB0aGVcbiAgICAgKiBHaXRIdWIgcHJvdmlkZXIgcmVxdWlyZXMgeW91IHRvIGFkZCB0aGUgYHJlZnJlc2hfdG9rZW5fZXhwaXJlc19pbmAgZmllbGQgdG8gdGhlIEFjY291bnRcbiAgICAgKiBtb2RlbC4gUmVmZXIgdG8gdGhlIE5leHRBdXRoLmpzIGRvY3MgZm9yIHRoZSBwcm92aWRlciB5b3Ugd2FudCB0byB1c2UuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9wcm92aWRlcnMvZ2l0aHViXG4gICAgICovXG4gIF0sXG59O1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGBnZXRTZXJ2ZXJTZXNzaW9uYCBzbyB0aGF0IHlvdSBkb24ndCBuZWVkIHRvIGltcG9ydCB0aGUgYGF1dGhPcHRpb25zYCBpbiBldmVyeSBmaWxlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vbmV4dGpzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJBdXRoU2Vzc2lvbiA9IChjdHg6IHtcbiAgcmVxOiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0W1wicmVxXCJdO1xuICByZXM6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRbXCJyZXNcIl07XG59KSA9PiB7XG4gIHJldHVybiBnZXRTZXJ2ZXJTZXNzaW9uKGN0eC5yZXEsIGN0eC5yZXMsIGF1dGhPcHRpb25zKTtcbn07XG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImdldFNlcnZlclNlc3Npb24iLCJEaXNjb3JkUHJvdmlkZXIiLCJlbnYiLCJkYiIsImF1dGhPcHRpb25zIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwiZ2V0U2VydmVyQXV0aFNlc3Npb24iLCJjdHgiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/auth.ts\n");

/***/ }),

/***/ "(api)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = db;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFFZDtBQUVoQyxNQUFNRSxrQkFBa0JDO0FBSWpCLE1BQU1DLEtBQ1hGLGdCQUFnQkcsTUFBTSxJQUN0QixJQUFJTCx3REFBWUEsQ0FBQztJQUNmTSxLQUNFTCx5Q0FBR0EsQ0FBQ00sUUFBUSxLQUFLLGdCQUFnQjtRQUFDO1FBQVM7UUFBUztLQUFPLEdBQUc7UUFBQztLQUFRO0FBQzNFLEdBQUc7QUFFTCxJQUFJTix5Q0FBR0EsQ0FBQ00sUUFBUSxLQUFLLGNBQWNMLGdCQUFnQkcsTUFBTSxHQUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL1dCU1R3aXR0ZXJDbG9uZS8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZW52IH0gZnJvbSBcIn4vZW52Lm1qc1wiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBkYiA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOlxuICAgICAgZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKGVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiLCJsb2ciLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/db.ts\n");

/***/ }),

/***/ "(api)/./src/env.mjs":
/*!*********************!*\
  !*** ./src/env.mjs ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"@t3-oss/env-nextjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);\n([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().refine((str)=>!str.includes(\"YOUR_MYSQL_URL_HERE\"), \"You forgot to change the default URL\"),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        // Add `.min(1) on ID and SECRET if you want to make sure they're not empty\n        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,\n        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDdkI7QUFFakIsTUFBTUUsTUFBTUYsNkRBQVNBLENBQUM7SUFDM0I7OztHQUdDLEdBQ0RHLFFBQVE7UUFDTkMsY0FBY0gsa0NBQUNBLENBQ1pJLE1BQU0sR0FDTkMsR0FBRyxHQUNIQyxNQUFNLENBQ0wsQ0FBQ0MsTUFBUSxDQUFDQSxJQUFJQyxRQUFRLENBQUMsd0JBQ3ZCO1FBRUpDLFVBQVVULGtDQUFDQSxDQUNSVSxJQUFJLENBQUM7WUFBQztZQUFlO1lBQVE7U0FBYSxFQUMxQ0MsT0FBTyxDQUFDO1FBQ1hDLGlCQUNFQyxNQUFxQyxHQUNqQ2IsQ0FBaUIsR0FDakJBLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdVLEdBQUcsQ0FBQyxHQUFHQyxRQUFRO1FBQ2hDQyxjQUFjaEIsa0NBQUNBLENBQUNpQixVQUFVLENBQ3hCLHVFQUF1RTtRQUN2RSxrRUFBa0U7UUFDbEUsQ0FBQ1YsTUFBUU0sUUFBUVosR0FBRyxDQUFDaUIsVUFBVSxJQUFJWCxLQUNuQyxzRUFBc0U7UUFDdEVNLFFBQVFaLEdBQUcsQ0FBQ2tCLE1BQU0sR0FBR25CLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdVLEdBQUcsQ0FBQyxLQUFLZCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHO1FBRXpELDJFQUEyRTtRQUMzRWUsbUJBQW1CcEIsa0NBQUNBLENBQUNJLE1BQU07UUFDM0JpQix1QkFBdUJyQixrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNqQztJQUVBOzs7O0dBSUMsR0FDRGtCLFFBQVE7SUFFUjtJQUVBOzs7R0FHQyxHQUNEQyxZQUFZO1FBQ1ZwQixjQUFjVSxRQUFRWixHQUFHLENBQUNFLFlBQVk7UUFDdENNLFVBbERKO1FBbURJRyxpQkFBaUJDLFFBQVFaLEdBQUcsQ0FBQ1csZUFBZTtRQUM1Q0ksY0FBY0gsUUFBUVosR0FBRyxDQUFDZSxZQUFZO1FBQ3RDSSxtQkFBbUJQLFFBQVFaLEdBQUcsQ0FBQ21CLGlCQUFpQjtRQUNoREMsdUJBQXVCUixRQUFRWixHQUFHLENBQUNvQixxQkFBcUI7SUFDMUQ7SUFDQTs7O0dBR0MsR0FDREcsZ0JBQWdCLENBQUMsQ0FBQ1gsUUFBUVosR0FBRyxDQUFDd0IsbUJBQW1CO0FBQ25ELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQlNUd2l0dGVyQ2xvbmUvLi9zcmMvZW52Lm1qcz9jM2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVudiB9IGZyb20gXCJAdDMtb3NzL2Vudi1uZXh0anNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBlbnYgPSBjcmVhdGVFbnYoe1xuICAvKipcbiAgICogU3BlY2lmeSB5b3VyIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS4gVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcFxuICAgKiBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gICAqL1xuICBzZXJ2ZXI6IHtcbiAgICBEQVRBQkFTRV9VUkw6IHpcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLnVybCgpXG4gICAgICAucmVmaW5lKFxuICAgICAgICAoc3RyKSA9PiAhc3RyLmluY2x1ZGVzKFwiWU9VUl9NWVNRTF9VUkxfSEVSRVwiKSxcbiAgICAgICAgXCJZb3UgZm9yZ290IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBVUkxcIlxuICAgICAgKSxcbiAgICBOT0RFX0VOVjogelxuICAgICAgLmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSlcbiAgICAgIC5kZWZhdWx0KFwiZGV2ZWxvcG1lbnRcIiksXG4gICAgTkVYVEFVVEhfU0VDUkVUOlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gei5zdHJpbmcoKS5taW4oMSlcbiAgICAgICAgOiB6LnN0cmluZygpLm1pbigxKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpLm1pbigxKSA6IHouc3RyaW5nKCkudXJsKClcbiAgICApLFxuICAgIC8vIEFkZCBgLm1pbigxKSBvbiBJRCBhbmQgU0VDUkVUIGlmIHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGV5J3JlIG5vdCBlbXB0eVxuICAgIERJU0NPUkRfQ0xJRU5UX0lEOiB6LnN0cmluZygpLFxuICAgIERJU0NPUkRfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmeSB5b3VyIGNsaWVudC1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS4gVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcFxuICAgKiBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuIFRvIGV4cG9zZSB0aGVtIHRvIHRoZSBjbGllbnQsIHByZWZpeCB0aGVtIHdpdGhcbiAgICogYE5FWFRfUFVCTElDX2AuXG4gICAqL1xuICBjbGllbnQ6IHtcbiAgICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHouc3RyaW5nKCkubWluKDEpLFxuICB9LFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuJ3QgZGVzdHJ1Y3QgYHByb2Nlc3MuZW52YCBhcyBhIHJlZ3VsYXIgb2JqZWN0IGluIHRoZSBOZXh0LmpzIGVkZ2UgcnVudGltZXMgKGUuZy5cbiAgICogbWlkZGxld2FyZXMpIG9yIGNsaWVudC1zaWRlIHNvIHdlIG5lZWQgdG8gZGVzdHJ1Y3QgbWFudWFsbHkuXG4gICAqL1xuICBydW50aW1lRW52OiB7XG4gICAgREFUQUJBU0VfVVJMOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICAgIE5FWFRBVVRIX1NFQ1JFVDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIE5FWFRBVVRIX1VSTDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIERJU0NPUkRfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICBESVNDT1JEX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgfSxcbiAgLyoqXG4gICAqIFJ1biBgYnVpbGRgIG9yIGBkZXZgIHdpdGggYFNLSVBfRU5WX1ZBTElEQVRJT05gIHRvIHNraXAgZW52IHZhbGlkYXRpb24uIFRoaXMgaXMgZXNwZWNpYWxseVxuICAgKiB1c2VmdWwgZm9yIERvY2tlciBidWlsZHMuXG4gICAqL1xuICBza2lwVmFsaWRhdGlvbjogISFwcm9jZXNzLmVudi5TS0lQX0VOVl9WQUxJREFUSU9OLFxufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRW52IiwieiIsImVudiIsInNlcnZlciIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsInJlZmluZSIsInN0ciIsImluY2x1ZGVzIiwiTk9ERV9FTlYiLCJlbnVtIiwiZGVmYXVsdCIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJtaW4iLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiRElTQ09SRF9DTElFTlRfSUQiLCJESVNDT1JEX0NMSUVOVF9TRUNSRVQiLCJjbGllbnQiLCJydW50aW1lRW52Iiwic2tpcFZhbGlkYXRpb24iLCJTS0lQX0VOVl9WQUxJREFUSU9OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/env.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();