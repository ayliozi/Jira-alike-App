"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f3b7a95fa424\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YmY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImYzYjdhOTVmYTQyNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/dashboardWrapper.tsx":
/*!**************************************!*\
  !*** ./src/app/dashboardWrapper.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar/index.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sidebar */ \"(app-pages-browser)/./src/app/components/Sidebar/index.tsx\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ \"(app-pages-browser)/./src/app/loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DashboardLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const isSidebarCollapsed = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const isDarkMode = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isDarkMode);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isDarkMode) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen w-full bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col bg-gray-50 dark:bg-dark-bg \".concat(isSidebarCollapsed ? \"\" : \"md:pl-64\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 29\n                        }, void 0),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"BNlsxlXWQvoYRyZm9iTDsEWGq3A=\", false, function() {\n    return [\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = DashboardLayout;\nconst dashboardWrapper = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading... Please Wait.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardLayout, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dashboardWrapper);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkV3JhcHBlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNWO0FBQ0U7QUFDNkI7QUFFMUM7QUFFOUIsTUFBTVEsa0JBQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFpQzs7SUFDbEUsTUFBTUMscUJBQXFCSixzREFBY0EsQ0FDdkMsQ0FBQ0ssUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixrQkFBa0I7SUFHNUMsTUFBTUcsYUFBYVAsc0RBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsTUFBTSxDQUFDQyxVQUFVO0lBQ3BFWCxnREFBU0EsQ0FBQztRQUNSLElBQUlXLFlBQVk7WUFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN6QyxPQUFPO1lBQ0xILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDNUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXOzswQkFDZCw4REFBQ2hCLDJEQUFPQTs7Ozs7MEJBQ1IsOERBQUNpQjtnQkFDQ0QsV0FBVyxtREFBd0YsT0FBckNWLHFCQUFxQixLQUFLOztrQ0FFeEYsOERBQUNQLDBEQUFNQTs7Ozs7a0NBQ1AsOERBQUNGLDJDQUFRQTt3QkFBQ3FCLHdCQUFVLDhEQUFDZiwrQ0FBTUE7Ozs7O2tDQUFNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBekJNRDs7UUFDdUJGLGtEQUFjQTtRQUl0QkEsa0RBQWNBOzs7S0FMN0JFO0FBMkJOLE1BQU1lLG1CQUFtQjtRQUFDLEVBQUVkLFFBQVEsRUFBaUM7SUFDbkUscUJBQ0UsOERBQUNKLDhDQUFhQTtrQkFDWiw0RUFBQ0osMkNBQVFBO1lBQUNxQix3QkFBVSw4REFBQ0U7MEJBQUU7Ozs7OztzQkFDckIsNEVBQUNoQjswQkFBaUJDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCO0FBRUEsK0RBQWVjLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZFdyYXBwZXIudHN4PzAwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XHJcbmltcG9ydCBTdG9yZVByb3ZpZGVyLCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuL3JlZHV4XCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiQC9zdGF0ZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBpc1NpZGViYXJDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvbGxhcHNlZCxcclxuICApO1xyXG5cclxuICBjb25zdCBpc0RhcmtNb2RlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWwuaXNEYXJrTW9kZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0RhcmtNb2RlKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggbWluLWgtc2NyZWVuIHctZnVsbCBiZy1ncmF5LTUwXCJ9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGZsZXgtY29sIGJnLWdyYXktNTAgZGFyazpiZy1kYXJrLWJnICR7aXNTaWRlYmFyQ29sbGFwc2VkID8gXCJcIiA6IFwibWQ6cGwtNjRcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRlciAvPn0+e2NoaWxkcmVufTwvU3VzcGVuc2U+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBkYXNoYm9hcmRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlUHJvdmlkZXI+XHJcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZy4uLiBQbGVhc2UgV2FpdC48L3A+fT5cclxuICAgICAgICA8RGFzaGJvYXJkTGF5b3V0PntjaGlsZHJlbn08L0Rhc2hib2FyZExheW91dD5cclxuICAgICAgPC9TdXNwZW5zZT5cclxuICAgIDwvU3RvcmVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJTaWRlYmFyIiwiU3RvcmVQcm92aWRlciIsInVzZUFwcFNlbGVjdG9yIiwiTG9hZGVyIiwiRGFzaGJvYXJkTGF5b3V0IiwiY2hpbGRyZW4iLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsImlzRGFya01vZGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJmYWxsYmFjayIsImRhc2hib2FyZFdyYXBwZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboardWrapper.tsx\n"));

/***/ })

});