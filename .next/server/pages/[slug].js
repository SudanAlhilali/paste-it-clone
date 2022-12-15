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
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./models/snippet.js":
/*!***************************!*\
  !*** ./models/snippet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snippet\": () => (/* binding */ Snippet)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst ObjectId = Schema.ObjectId;\nconst snippetSchema = new Schema({\n  snippet: String,\n  slug: String\n});\nconst Snippet = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Snippet) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Snippet\", snippetSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvc25pcHBldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0Qsd0RBQWY7QUFDQSxNQUFNRSxRQUFRLEdBQUdELE1BQU0sQ0FBQ0MsUUFBeEI7QUFFQSxNQUFNQyxhQUFhLEdBQUcsSUFBSUYsTUFBSixDQUFXO0VBQy9CRyxPQUFPLEVBQUVDLE1BRHNCO0VBRS9CQyxJQUFJLEVBQUVEO0FBRnlCLENBQVgsQ0FBdEI7QUFLTyxNQUFNRSxPQUFPLEdBQ2xCUCxnRUFBQSxJQUEyQkEscURBQUEsQ0FBZSxTQUFmLEVBQTBCRyxhQUExQixDQUR0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bhc3QtaXQtYm9vdHN0cmFwLy4vbW9kZWxzL3NuaXBwZXQuanM/MTE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IE9iamVjdElkID0gU2NoZW1hLk9iamVjdElkO1xyXG5cclxuY29uc3Qgc25pcHBldFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHNuaXBwZXQ6IFN0cmluZyxcclxuICBzbHVnOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNuaXBwZXQgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5TbmlwcGV0IHx8IG1vbmdvb3NlLm1vZGVsKFwiU25pcHBldFwiLCBzbmlwcGV0U2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiT2JqZWN0SWQiLCJzbmlwcGV0U2NoZW1hIiwic25pcHBldCIsIlN0cmluZyIsInNsdWciLCJTbmlwcGV0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/snippet.js\n");

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/snippet */ \"./models/snippet.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/db */ \"./utils/db.js\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard-copy */ \"clipboard-copy\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__]);\n([react_i18next__WEBPACK_IMPORTED_MODULE_5__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"G:\\\\Code_Storage\\\\Portfolio_001\\\\Paste-it-bootstrap\\\\past-it-bootstrap\\\\pages\\\\[slug].js\";\n\n\n\n\n\n\n\n\n\n\n\n\nconst createSnippet = ({\n  snippetText\n}) => {\n  const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"text-center mt-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: () => clipboard_copy__WEBPACK_IMPORTED_MODULE_4__(window.location),\n        className: \"mb-4 mt-2\",\n        variant: \"outline-info\",\n        children: t(\"shareButton\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {\n          controlId: \"textAreaControl\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {\n            style: {\n              width: \"400px\",\n              height: \"300px\",\n              margin: \"0 auto\"\n            },\n            as: \"textarea\",\n            rows: 3,\n            maxLength: \"10000\",\n            disabled: true,\n            value: snippetText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"mt-4\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n          className: \"text-danger\",\n          children: t(\"warning\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSnippet);\nasync function getServerSideProps(context) {\n  await (0,_utils_db__WEBPACK_IMPORTED_MODULE_3__.connect)();\n  const slug = context.params.slug;\n  const snippetObject = await _models_snippet__WEBPACK_IMPORTED_MODULE_2__.Snippet.findOne({\n    slug\n  });\n  return {\n    props: {\n      snippetText: snippetObject.snippet\n    } // will be passed to the page component as props\n\n  };\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNVSxhQUFhLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBcUI7RUFDekMsTUFBTSxDQUFDQyxDQUFELEVBQUlDLElBQUosSUFBWVAsNkRBQWMsRUFBaEM7RUFDQSxvQkFDRTtJQUFBLHVCQUNFO01BQUssU0FBUyxFQUFDLGtCQUFmO01BQUEsd0JBQ0UsOERBQUMsbURBQUQ7UUFDRSxPQUFPLEVBQUUsTUFBTUQsMkNBQUksQ0FBQ1MsTUFBTSxDQUFDQyxRQUFSLENBRHJCO1FBRUUsU0FBUyxFQUFDLFdBRlo7UUFHRSxPQUFPLEVBQUMsY0FIVjtRQUFBLFVBS0dILENBQUMsQ0FBQyxhQUFEO01BTEo7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLGVBUUUsOERBQUMsaURBQUQ7UUFBQSx1QkFDRSw4REFBQyx1REFBRDtVQUFZLFNBQVMsRUFBQyxpQkFBdEI7VUFBQSx1QkFDRSw4REFBQyx5REFBRDtZQUNFLEtBQUssRUFBRTtjQUFFSSxLQUFLLEVBQUUsT0FBVDtjQUFrQkMsTUFBTSxFQUFFLE9BQTFCO2NBQW1DQyxNQUFNLEVBQUU7WUFBM0MsQ0FEVDtZQUVFLEVBQUUsRUFBQyxVQUZMO1lBR0UsSUFBSSxFQUFFLENBSFI7WUFJRSxTQUFTLEVBQUMsT0FKWjtZQUtFLFFBQVEsTUFMVjtZQU1FLEtBQUssRUFBRVA7VUFOVDtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFSRixlQW9CRTtRQUFLLFNBQVMsRUFBQyxNQUFmO1FBQUEsdUJBQ0U7VUFBSSxTQUFTLEVBQUMsYUFBZDtVQUFBLFVBQTZCQyxDQUFDLENBQUMsU0FBRDtRQUE5QjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQXBCRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQTRCRCxDQTlCRDs7QUFnQ0EsaUVBQWVGLGFBQWY7QUFFTyxlQUFlUyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7RUFDaEQsTUFBTWhCLGtEQUFPLEVBQWI7RUFDQSxNQUFNaUIsSUFBSSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsQ0FBZUQsSUFBNUI7RUFDQSxNQUFNRSxhQUFhLEdBQUcsTUFBTXBCLDREQUFBLENBQWdCO0lBQzFDa0I7RUFEMEMsQ0FBaEIsQ0FBNUI7RUFJQSxPQUFPO0lBQ0xJLEtBQUssRUFBRTtNQUNMZCxXQUFXLEVBQUVZLGFBQWEsQ0FBQ0c7SUFEdEIsQ0FERixDQUdGOztFQUhFLENBQVA7QUFLRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFzdC1pdC1ib290c3RyYXAvLi9wYWdlcy9bc2x1Z10uanM/NmMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gXCIuLi9tb2RlbHMvc25pcHBldFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4uL3V0aWxzL2RiXCI7XHJcbmltcG9ydCAqIGFzIGNvcHkgZnJvbSBcImNsaXBib2FyZC1jb3B5XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNxdWFyZUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGZhTGlua2VkaW4gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlU25pcHBldCA9ICh7IHNuaXBwZXRUZXh0IH0pID0+IHtcclxuICBjb25zdCBbdCwgaTE4bl0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5KHdpbmRvdy5sb2NhdGlvbil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IG10LTJcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3QoXCJzaGFyZUJ1dHRvblwiKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cInRleHRBcmVhQ29udHJvbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiwgaGVpZ2h0OiBcIjMwMHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxyXG4gICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTAwMDBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NuaXBwZXRUZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPnt0KFwid2FybmluZ1wiKX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbmlwcGV0O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgYXdhaXQgY29ubmVjdCgpO1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5zbHVnO1xyXG4gIGNvbnN0IHNuaXBwZXRPYmplY3QgPSBhd2FpdCBTbmlwcGV0LmZpbmRPbmUoe1xyXG4gICAgc2x1ZyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNuaXBwZXRUZXh0OiBzbmlwcGV0T2JqZWN0LnNuaXBwZXQsXHJcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm0iLCJTbmlwcGV0IiwiY29ubmVjdCIsImNvcHkiLCJ1c2VUcmFuc2xhdGlvbiIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU3F1YXJlR2l0aHViIiwiZmFMaW5rZWRpbiIsImNyZWF0ZVNuaXBwZXQiLCJzbmlwcGV0VGV4dCIsInQiLCJpMThuIiwid2luZG93IiwibG9jYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicGFyYW1zIiwic25pcHBldE9iamVjdCIsImZpbmRPbmUiLCJwcm9wcyIsInNuaXBwZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connect = async () => {\n  if (!isConnected) {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://Kuro:a1234@cluster0.pn3c5vs.mongodb.net/snippets?retryWrites=true&w=majority\");\n    isConnected = true;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLElBQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUVPLE1BQU1DLE9BQU8sR0FBRyxZQUFZO0VBQ2pDLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtJQUNoQixNQUFNRCx1REFBQSxDQUNKLDRGQURJLENBQU47SUFHQUMsV0FBVyxHQUFHLElBQWQ7RUFDRDtBQUNGLENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXN0LWl0LWJvb3RzdHJhcC8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoIWlzQ29ubmVjdGVkKSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vS3VybzphMTIzNEBjbHVzdGVyMC5wbjNjNXZzLm1vbmdvZGIubmV0L3NuaXBwZXRzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApO1xyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/db.js\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "clipboard-copy":
/*!*********************************!*\
  !*** external "clipboard-copy" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("clipboard-copy");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].js"));
module.exports = __webpack_exports__;

})();