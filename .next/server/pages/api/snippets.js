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
exports.id = "pages/api/snippets";
exports.ids = ["pages/api/snippets"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "randomstring":
/*!*******************************!*\
  !*** external "randomstring" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("randomstring");

/***/ }),

/***/ "(api)/./models/snippet.js":
/*!***************************!*\
  !*** ./models/snippet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snippet\": () => (/* binding */ Snippet)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst ObjectId = Schema.ObjectId;\nconst snippetSchema = new Schema({\n  snippet: String,\n  slug: String\n});\nconst Snippet = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Snippet) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Snippet\", snippetSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvc25pcHBldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0Qsd0RBQWY7QUFDQSxNQUFNRSxRQUFRLEdBQUdELE1BQU0sQ0FBQ0MsUUFBeEI7QUFFQSxNQUFNQyxhQUFhLEdBQUcsSUFBSUYsTUFBSixDQUFXO0VBQy9CRyxPQUFPLEVBQUVDLE1BRHNCO0VBRS9CQyxJQUFJLEVBQUVEO0FBRnlCLENBQVgsQ0FBdEI7QUFLTyxNQUFNRSxPQUFPLEdBQ2xCUCxnRUFBQSxJQUEyQkEscURBQUEsQ0FBZSxTQUFmLEVBQTBCRyxhQUExQixDQUR0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bhc3QtaXQtYm9vdHN0cmFwLy4vbW9kZWxzL3NuaXBwZXQuanM/MTE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IE9iamVjdElkID0gU2NoZW1hLk9iamVjdElkO1xyXG5cclxuY29uc3Qgc25pcHBldFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHNuaXBwZXQ6IFN0cmluZyxcclxuICBzbHVnOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNuaXBwZXQgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5TbmlwcGV0IHx8IG1vbmdvb3NlLm1vZGVsKFwiU25pcHBldFwiLCBzbmlwcGV0U2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiT2JqZWN0SWQiLCJzbmlwcGV0U2NoZW1hIiwic25pcHBldCIsIlN0cmluZyIsInNsdWciLCJTbmlwcGV0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/snippet.js\n");

/***/ }),

/***/ "(api)/./pages/api/snippets.js":
/*!*******************************!*\
  !*** ./pages/api/snippets.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/snippet */ \"(api)/./models/snippet.js\");\n/* harmony import */ var randomstring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomstring */ \"randomstring\");\n/* harmony import */ var randomstring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomstring__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.connect)();\n\n  if (req.method === \"POST\") {\n    const slug = randomstring__WEBPACK_IMPORTED_MODULE_2___default().generate({\n      length: 12,\n      charset: \"alphabetic\"\n    });\n    const snippet = await _models_snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet.create({\n      snippet: req.body.snippet,\n      slug: slug\n    });\n    res.status(200).json(snippet);\n  } else {\n    throw new Error(\"http method not supported on this endpoint\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc25pcHBldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZSxPQUFPRyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDakMsTUFBTUosa0RBQU8sRUFBYjs7RUFDQSxJQUFJRyxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtJQUN6QixNQUFNQyxJQUFJLEdBQUdKLDREQUFBLENBQXNCO01BQ2pDTSxNQUFNLEVBQUUsRUFEeUI7TUFFakNDLE9BQU8sRUFBRTtJQUZ3QixDQUF0QixDQUFiO0lBSUEsTUFBTUMsT0FBTyxHQUFHLE1BQU1ULDJEQUFBLENBQWU7TUFDbkNTLE9BQU8sRUFBRVAsR0FBRyxDQUFDUyxJQUFKLENBQVNGLE9BRGlCO01BRW5DSixJQUFJLEVBQUVBO0lBRjZCLENBQWYsQ0FBdEI7SUFJQUYsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLE9BQXJCO0VBQ0QsQ0FWRCxNQVVPO0lBQ0wsTUFBTSxJQUFJSyxLQUFKLENBQVUsNENBQVYsQ0FBTjtFQUNEO0FBQ0YsQ0FmRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Bhc3QtaXQtYm9vdHN0cmFwLy4vcGFnZXMvYXBpL3NuaXBwZXRzLmpzP2UzOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCIuLi8uLi91dGlscy9kYlwiO1xuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc25pcHBldFwiO1xuaW1wb3J0IHJhbmRvbXN0cmluZyBmcm9tIFwicmFuZG9tc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBjb25uZWN0KCk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHNsdWcgPSByYW5kb21zdHJpbmcuZ2VuZXJhdGUoe1xuICAgICAgbGVuZ3RoOiAxMixcbiAgICAgIGNoYXJzZXQ6IFwiYWxwaGFiZXRpY1wiLFxuICAgIH0pO1xuICAgIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBTbmlwcGV0LmNyZWF0ZSh7XG4gICAgICBzbmlwcGV0OiByZXEuYm9keS5zbmlwcGV0LFxuICAgICAgc2x1Zzogc2x1ZyxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzbmlwcGV0KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJodHRwIG1ldGhvZCBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZW5kcG9pbnRcIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiY29ubmVjdCIsIlNuaXBwZXQiLCJyYW5kb21zdHJpbmciLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzbHVnIiwiZ2VuZXJhdGUiLCJsZW5ndGgiLCJjaGFyc2V0Iiwic25pcHBldCIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/snippets.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connect = async () => {\n  if (!isConnected) {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://Kuro:a1234@cluster0.pn3c5vs.mongodb.net/snippets?retryWrites=true&w=majority\");\n    isConnected = true;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLElBQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUVPLE1BQU1DLE9BQU8sR0FBRyxZQUFZO0VBQ2pDLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtJQUNoQixNQUFNRCx1REFBQSxDQUNKLDRGQURJLENBQU47SUFHQUMsV0FBVyxHQUFHLElBQWQ7RUFDRDtBQUNGLENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXN0LWl0LWJvb3RzdHJhcC8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoIWlzQ29ubmVjdGVkKSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vS3VybzphMTIzNEBjbHVzdGVyMC5wbjNjNXZzLm1vbmdvZGIubmV0L3NuaXBwZXRzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApO1xyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/snippets.js"));
module.exports = __webpack_exports__;

})();