/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/[slug]"],{

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */\n/* global DOMException */\n\nmodule.exports = clipboardCopy\n\nfunction makeError () {\n  return new DOMException('The request is not allowed', 'NotAllowedError')\n}\n\nasync function copyClipboardApi (text) {\n  // Use the Async Clipboard API when available. Requires a secure browsing\n  // context (i.e. HTTPS)\n  if (!navigator.clipboard) {\n    throw makeError()\n  }\n  return navigator.clipboard.writeText(text)\n}\n\nasync function copyExecCommand (text) {\n  // Put the text to copy into a <span>\n  const span = document.createElement('span')\n  span.textContent = text\n\n  // Preserve consecutive spaces and newlines\n  span.style.whiteSpace = 'pre'\n  span.style.webkitUserSelect = 'auto'\n  span.style.userSelect = 'all'\n\n  // Add the <span> to the page\n  document.body.appendChild(span)\n\n  // Make a selection object representing the range of text selected by the user\n  const selection = window.getSelection()\n  const range = window.document.createRange()\n  selection.removeAllRanges()\n  range.selectNode(span)\n  selection.addRange(range)\n\n  // Copy text to the clipboard\n  let success = false\n  try {\n    success = window.document.execCommand('copy')\n  } finally {\n    // Cleanup\n    selection.removeAllRanges()\n    window.document.body.removeChild(span)\n  }\n\n  if (!success) throw makeError()\n}\n\nasync function clipboardCopy (text) {\n  try {\n    await copyClipboardApi(text)\n  } catch (err) {\n    // ...Otherwise, use document.execCommand() fallback\n    try {\n      await copyExecCommand(text)\n    } catch (err2) {\n      throw (err2 || err || makeError())\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLWNvcHkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1jb3B5L2luZGV4LmpzPzkzMTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIGNsaXBib2FyZC1jb3B5LiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBnbG9iYWwgRE9NRXhjZXB0aW9uICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xpcGJvYXJkQ29weVxuXG5mdW5jdGlvbiBtYWtlRXJyb3IgKCkge1xuICByZXR1cm4gbmV3IERPTUV4Y2VwdGlvbignVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQnLCAnTm90QWxsb3dlZEVycm9yJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUNsaXBib2FyZEFwaSAodGV4dCkge1xuICAvLyBVc2UgdGhlIEFzeW5jIENsaXBib2FyZCBBUEkgd2hlbiBhdmFpbGFibGUuIFJlcXVpcmVzIGEgc2VjdXJlIGJyb3dzaW5nXG4gIC8vIGNvbnRleHQgKGkuZS4gSFRUUFMpXG4gIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgIHRocm93IG1ha2VFcnJvcigpXG4gIH1cbiAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlFeGVjQ29tbWFuZCAodGV4dCkge1xuICAvLyBQdXQgdGhlIHRleHQgdG8gY29weSBpbnRvIGEgPHNwYW4+XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRcblxuICAvLyBQcmVzZXJ2ZSBjb25zZWN1dGl2ZSBzcGFjZXMgYW5kIG5ld2xpbmVzXG4gIHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnXG4gIHNwYW4uc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdhdXRvJ1xuICBzcGFuLnN0eWxlLnVzZXJTZWxlY3QgPSAnYWxsJ1xuXG4gIC8vIEFkZCB0aGUgPHNwYW4+IHRvIHRoZSBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbilcblxuICAvLyBNYWtlIGEgc2VsZWN0aW9uIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJhbmdlIG9mIHRleHQgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gIGNvbnN0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gIHJhbmdlLnNlbGVjdE5vZGUoc3BhbilcbiAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuXG4gIC8vIENvcHkgdGV4dCB0byB0aGUgY2xpcGJvYXJkXG4gIGxldCBzdWNjZXNzID0gZmFsc2VcbiAgdHJ5IHtcbiAgICBzdWNjZXNzID0gd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBDbGVhbnVwXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbilcbiAgfVxuXG4gIGlmICghc3VjY2VzcykgdGhyb3cgbWFrZUVycm9yKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2xpcGJvYXJkQ29weSAodGV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvcHlDbGlwYm9hcmRBcGkodGV4dClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gLi4uT3RoZXJ3aXNlLCB1c2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoKSBmYWxsYmFja1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb3B5RXhlY0NvbW1hbmQodGV4dClcbiAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICB0aHJvdyAoZXJyMiB8fCBlcnIgfHwgbWFrZUVycm9yKCkpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/clipboard-copy/index.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=G%3A%5CCode_Storage%5CPortfolio_001%5CPaste-it-bootstrap%5Cpast-it-bootstrap%5Cpages%5C%5Bslug%5D.js&page=%2F%5Bslug%5D!":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=G%3A%5CCode_Storage%5CPortfolio_001%5CPaste-it-bootstrap%5Cpast-it-bootstrap%5Cpages%5C%5Bslug%5D.js&page=%2F%5Bslug%5D! ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[slug]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[slug].js */ \"./pages/[slug].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[slug]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1HJTNBJTVDQ29kZV9TdG9yYWdlJTVDUG9ydGZvbGlvXzAwMSU1Q1Bhc3RlLWl0LWJvb3RzdHJhcCU1Q3Bhc3QtaXQtYm9vdHN0cmFwJTVDcGFnZXMlNUMlNUJzbHVnJTVELmpzJnBhZ2U9JTJGJTVCc2x1ZyU1RCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzVkYzgiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9bc2x1Z11cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL1tzbHVnXS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvW3NsdWddXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=G%3A%5CCode_Storage%5CPortfolio_001%5CPaste-it-bootstrap%5Cpast-it-bootstrap%5Cpages%5C%5Bslug%5D.js&page=%2F%5Bslug%5D!\n"));

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_Code_Storage_Portfolio_001_Paste_it_bootstrap_past_it_bootstrap_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard-copy */ \"./node_modules/clipboard-copy/index.js\");\n/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"G:\\\\Code_Storage\\\\Portfolio_001\\\\Paste-it-bootstrap\\\\past-it-bootstrap\\\\pages\\\\[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar createSnippet = function createSnippet(_ref) {\n  _s();\n\n  var snippetText = _ref.snippetText;\n\n  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),\n      _useTranslation2 = (0,G_Code_Storage_Portfolio_001_Paste_it_bootstrap_past_it_bootstrap_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useTranslation, 2),\n      t = _useTranslation2[0],\n      i18n = _useTranslation2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"text-center mt-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: function onClick() {\n          return clipboard_copy__WEBPACK_IMPORTED_MODULE_2__(window.location);\n        },\n        className: \"mb-4 mt-2\",\n        variant: \"outline-info\",\n        children: t(\"shareButton\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n          controlId: \"textAreaControl\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n            style: {\n              width: \"400px\",\n              height: \"300px\",\n              margin: \"0 auto\"\n            },\n            as: \"textarea\",\n            rows: 3,\n            maxLength: \"10000\",\n            disabled: true,\n            value: snippetText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"mt-4\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          className: \"text-danger\",\n          children: t(\"warning\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(createSnippet, \"4gi9wXtdE+JncrMt78YHghJPC7E=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (createSnippet);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1RLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7RUFBQTs7RUFBQSxJQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztFQUN6QyxzQkFBa0JMLDZEQUFjLEVBQWhDO0VBQUE7RUFBQSxJQUFPTSxDQUFQO0VBQUEsSUFBVUMsSUFBVjs7RUFDQSxvQkFDRTtJQUFBLHVCQUNFO01BQUssU0FBUyxFQUFDLGtCQUFmO01BQUEsd0JBQ0UsOERBQUMsbURBQUQ7UUFDRSxPQUFPLEVBQUU7VUFBQSxPQUFNUiwyQ0FBSSxDQUFDUyxNQUFNLENBQUNDLFFBQVIsQ0FBVjtRQUFBLENBRFg7UUFFRSxTQUFTLEVBQUMsV0FGWjtRQUdFLE9BQU8sRUFBQyxjQUhWO1FBQUEsVUFLR0gsQ0FBQyxDQUFDLGFBQUQ7TUFMSjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUFRRSw4REFBQyxpREFBRDtRQUFBLHVCQUNFLDhEQUFDLHVEQUFEO1VBQVksU0FBUyxFQUFDLGlCQUF0QjtVQUFBLHVCQUNFLDhEQUFDLHlEQUFEO1lBQ0UsS0FBSyxFQUFFO2NBQUVJLEtBQUssRUFBRSxPQUFUO2NBQWtCQyxNQUFNLEVBQUUsT0FBMUI7Y0FBbUNDLE1BQU0sRUFBRTtZQUEzQyxDQURUO1lBRUUsRUFBRSxFQUFDLFVBRkw7WUFHRSxJQUFJLEVBQUUsQ0FIUjtZQUlFLFNBQVMsRUFBQyxPQUpaO1lBS0UsUUFBUSxNQUxWO1lBTUUsS0FBSyxFQUFFUDtVQU5UO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVJGLGVBb0JFO1FBQUssU0FBUyxFQUFDLE1BQWY7UUFBQSx1QkFDRTtVQUFJLFNBQVMsRUFBQyxhQUFkO1VBQUEsVUFBNkJDLENBQUMsQ0FBQyxTQUFEO1FBQTlCO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBcEJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBNEJELENBOUJEOztHQUFNRjtVQUNjSjs7OztBQStCcEIsK0RBQWVJLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzPzZjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NuaXBwZXRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCIuLi91dGlscy9kYlwiO1xyXG5pbXBvcnQgKiBhcyBjb3B5IGZyb20gXCJjbGlwYm9hcmQtY29weVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTcXVhcmVHaXRodWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBmYUxpbmtlZGluIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVNuaXBwZXQgPSAoeyBzbmlwcGV0VGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgW3QsIGkxOG5dID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY29weSh3aW5kb3cubG9jYXRpb24pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBtdC0yXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0KFwic2hhcmVCdXR0b25cIil9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJ0ZXh0QXJlYUNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIsIGhlaWdodDogXCIzMDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cclxuICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMDAwXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzbmlwcGV0VGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dChcIndhcm5pbmdcIil9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU25pcHBldDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGF3YWl0IGNvbm5lY3QoKTtcclxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuc2x1ZztcclxuICBjb25zdCBzbmlwcGV0T2JqZWN0ID0gYXdhaXQgU25pcHBldC5maW5kT25lKHtcclxuICAgIHNsdWcsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzbmlwcGV0VGV4dDogc25pcHBldE9iamVjdC5zbmlwcGV0LFxyXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtIiwiY29weSIsInVzZVRyYW5zbGF0aW9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTcXVhcmVHaXRodWIiLCJmYUxpbmtlZGluIiwiY3JlYXRlU25pcHBldCIsInNuaXBwZXRUZXh0IiwidCIsImkxOG4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=G%3A%5CCode_Storage%5CPortfolio_001%5CPaste-it-bootstrap%5Cpast-it-bootstrap%5Cpages%5C%5Bslug%5D.js&page=%2F%5Bslug%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);