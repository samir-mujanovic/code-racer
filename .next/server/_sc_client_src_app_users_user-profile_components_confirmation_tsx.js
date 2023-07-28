"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_sc_client_src_app_users_user-profile_components_confirmation_tsx";
exports.ids = ["_sc_client_src_app_users_user-profile_components_confirmation_tsx"];
exports.modules = {

/***/ "(sc_client)/./src/app/users/(user-profile)/(components)/confirmation.tsx":
/*!********************************************************************!*\
  !*** ./src/app/users/(user-profile)/(components)/confirmation.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DeleteConfirmation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(sc_client)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(sc_client)/./src/components/ui/input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react?7064\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(sc_client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ \"(sc_client)/./node_modules/lucide-react/dist/cjs/lucide-react.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(sc_client)/./src/lib/utils.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ \"(sc_client)/./src/app/users/(user-profile)/(components)/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction DeleteConfirmation({ setWillDelete, displayName }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const divRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const onClick = ()=>setWillDelete(false);\n        const el = divRef.current;\n        if (!el) return;\n        el.addEventListener(\"click\", onClick);\n        return ()=>el.removeEventListener(\"click\", onClick);\n    }, [\n        divRef,\n        setWillDelete\n    ]);\n    async function handleDelete(e) {\n        setIsLoading(true);\n        e.preventDefault();\n        try {\n            await (0,_actions__WEBPACK_IMPORTED_MODULE_6__.deleteUserAction)({});\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)({\n                callbackUrl: \"/\"\n            });\n        } catch (err) {\n            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.catchError)(err);\n        } finally{\n            setIsLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 z-10 grid w-full h-full place-items-center bg-monochrome-with-bg-opacity bg-opacity-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 w-full h-full -z-10\",\n                ref: divRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[95%] max-w-[22.5rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-end\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-background  min-h-[12.5rem] mt-2 rounded-lg p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center justify-center gap-2 text-red-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.AlertTriangle, {\n                                        className: \"stroke-red-500\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"DELETE ACCOUNT\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__.AlertTriangle, {\n                                        className: \"stroke-red-500\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex flex-col gap-2 mt-4 select-none\",\n                                onSubmit: handleDelete,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            'Please type \"',\n                                            displayName,\n                                            '\" to confirm:'\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                        type: \"text\",\n                                        name: \"name\",\n                                        onChange: (e)=>setInputValue(e.target.value),\n                                        placeholder: \"Type your username to confirm\",\n                                        value: inputValue,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        variant: \"destructive\",\n                                        className: \"mt-2\",\n                                        tabIndex: inputValue === displayName ? 0 : -1,\n                                        title: \"Delete your account\",\n                                        disabled: (inputValue === displayName ? undefined : true) || isLoading,\n                                        children: isLoading ? \"DELETING...\" : \"CONFIRM\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: ()=>setWillDelete(false),\n                                        children: \"CANCEL\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samir\\\\Projects\\\\code-racer\\\\src\\\\app\\\\users\\\\(user-profile)\\\\(components)\\\\confirmation.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNjX2NsaWVudCkvLi9zcmMvYXBwL3VzZXJzLyh1c2VyLXByb2ZpbGUpLyhjb21wb25lbnRzKS9jb25maXJtYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDRjtBQUNNO0FBQ1Y7QUFDRztBQUNKO0FBQ0k7QUFFOUIsU0FBU1MsbUJBQW1CLEVBQ3pDQyxhQUFhLEVBQ2JDLFdBQVcsRUFJWjtJQUNDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVksU0FBU2IsNkNBQU1BLENBQWlCO0lBRXRDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFVBQVUsSUFBTVAsY0FBYztRQUNwQyxNQUFNUSxLQUFLRixPQUFPRyxPQUFPO1FBQ3pCLElBQUksQ0FBQ0QsSUFBSTtRQUNUQSxHQUFHRSxnQkFBZ0IsQ0FBQyxTQUFTSDtRQUM3QixPQUFPLElBQU1DLEdBQUdHLG1CQUFtQixDQUFDLFNBQVNKO0lBQy9DLEdBQUc7UUFBQ0Q7UUFBUU47S0FBYztJQUUxQixlQUFlWSxhQUFhQyxDQUFtQztRQUM3RFYsYUFBYTtRQUNiVSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNaEIsMERBQWdCQSxDQUFDLENBQUM7WUFDeEIsTUFBTUgsd0RBQU9BLENBQUM7Z0JBQ1pvQixhQUFhO1lBQ2Y7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWm5CLHNEQUFVQSxDQUFDbUI7UUFDYixTQUFVO1lBQ1JiLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBdUNDLEtBQUtiOzs7Ozs7MEJBQzNELDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUtGLFdBQVU7O2tEQUNkLDhEQUFDdEIsdURBQWFBO3dDQUFDc0IsV0FBVTs7Ozs7O29DQUFtQjtrREFFNUMsOERBQUN0Qix1REFBYUE7d0NBQUNzQixXQUFVOzs7Ozs7Ozs7Ozs7MENBRzNCLDhEQUFDRztnQ0FDQ0gsV0FBVTtnQ0FDVkksVUFBVVY7O2tEQUVWLDhEQUFDVzs7NENBQUU7NENBQW1CdEI7NENBQVk7Ozs7Ozs7a0RBQ2xDLDhEQUFDVix1REFBS0E7d0NBQ0ppQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxVQUFVLENBQUNiLElBQU1SLGNBQWNRLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FDN0NDLGFBQVk7d0NBQ1pELE9BQU94Qjt3Q0FDUDBCLFFBQVE7Ozs7OztrREFFViw4REFBQ3hDLHlEQUFNQTt3Q0FDTHlDLFNBQVM7d0NBQ1RiLFdBQVU7d0NBQ1ZjLFVBQVU1QixlQUFlSCxjQUFjLElBQUksQ0FBQzt3Q0FDNUNnQyxPQUFNO3dDQUNOQyxVQUNFLENBQUM5QixlQUFlSCxjQUFja0MsWUFBWSxJQUFHLEtBQU1qQztrREFHcERBLFlBQVksZ0JBQWdCOzs7Ozs7a0RBRS9CLDhEQUFDWix5REFBTUE7d0NBQUNpQixTQUFTLElBQU1QLGNBQWM7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtcmFjZXIvLi9zcmMvYXBwL3VzZXJzLyh1c2VyLXByb2ZpbGUpLyhjb21wb25lbnRzKS9jb25maXJtYXRpb24udHN4P2Y2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IEFsZXJ0VHJpYW5nbGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVXNlckFjdGlvbiB9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZUNvbmZpcm1hdGlvbih7XHJcbiAgc2V0V2lsbERlbGV0ZSxcclxuICBkaXNwbGF5TmFtZSxcclxufToge1xyXG4gIHNldFdpbGxEZWxldGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkaXZSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHNldFdpbGxEZWxldGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZWwgPSBkaXZSZWYuY3VycmVudDtcclxuICAgIGlmICghZWwpIHJldHVybjtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbiAgfSwgW2RpdlJlZiwgc2V0V2lsbERlbGV0ZV0pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZVVzZXJBY3Rpb24oe30pO1xyXG4gICAgICBhd2FpdCBzaWduT3V0KHtcclxuICAgICAgICBjYWxsYmFja1VybDogXCIvXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgZ3JpZCB3LWZ1bGwgaC1mdWxsIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1tb25vY2hyb21lLXdpdGgtYmctb3BhY2l0eSBiZy1vcGFjaXR5LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgLXotMTBcIiByZWY9e2RpdlJlZn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5NSVdIG1heC13LVsyMi41cmVtXVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgIG1pbi1oLVsxMi41cmVtXSBtdC0yIHJvdW5kZWQtbGcgcC02XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwic3Ryb2tlLXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgICBERUxFVEUgQUNDT1VOVFxyXG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJzdHJva2UtcmVkLTUwMFwiIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBtdC00IHNlbGVjdC1ub25lXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+UGxlYXNlIHR5cGUgJnF1b3Q7e2Rpc3BsYXlOYW1lfSZxdW90OyB0byBjb25maXJtOjwvcD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHVzZXJuYW1lIHRvIGNvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PXtcImRlc3RydWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9e2lucHV0VmFsdWUgPT09IGRpc3BsYXlOYW1lID8gMCA6IC0xfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHlvdXIgYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgKGlucHV0VmFsdWUgPT09IGRpc3BsYXlOYW1lID8gdW5kZWZpbmVkIDogdHJ1ZSkgfHwgaXNMb2FkaW5nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzTG9hZGluZyA/IFwiREVMRVRJTkcuLi5cIiA6IFwiQ09ORklSTVwifVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRXaWxsRGVsZXRlKGZhbHNlKX0+Q0FOQ0VMPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNpZ25PdXQiLCJBbGVydFRyaWFuZ2xlIiwiY2F0Y2hFcnJvciIsImRlbGV0ZVVzZXJBY3Rpb24iLCJEZWxldGVDb25maXJtYXRpb24iLCJzZXRXaWxsRGVsZXRlIiwiZGlzcGxheU5hbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImRpdlJlZiIsIm9uQ2xpY2siLCJlbCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZURlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbGxiYWNrVXJsIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3BhbiIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFyaWFudCIsInRhYkluZGV4IiwidGl0bGUiLCJkaXNhYmxlZCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(sc_client)/./src/app/users/(user-profile)/(components)/confirmation.tsx\n");

/***/ })

};
;