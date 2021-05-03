/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; }\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbmZpZy9pbmRleC5qcz9hY2U3Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE9BQU8sR0FDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFEaEMiLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index.js */ \"./config/index.js\");\n\nvar _jsxFileName = \"/Users/benshabi/Desktop/hilo/frontend/context/AuthContext.js\";\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkUserLoggedIn(), []);\n\n  const register = async user => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.API_URL}/api/register`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push('/account/dashboard');\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; //  Login User \n\n\n  const login = async ({\n    email: identifier,\n    password\n  }) => {\n    console.log(identifier, password); // const res = await fetch(`${API_URL}/api/login`, {\n    //     method: 'POST',\n    //     headers: {\n    //         'Content-Type': 'application/json',\n    //     },\n    //     body: JSON.stringify({\n    //         identifier,\n    //         password,\n    //     }),\n    // })\n    // const data = await res.json()\n    // if (res.ok) {\n    //     setUser(data.user)\n    //     router.push('/account/dashboard')\n    // } else {\n    //     setError(data.message)\n    //     setError(null)\n    // }\n  }; // Logout user\n\n\n  const logout = async () => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.API_URL}/api/logout`, {\n      method: 'POST'\n    });\n\n    if (res.ok) {\n      setUser(null);\n      router.push('/');\n    }\n  }; // Check if user is logged in\n\n\n  const checkUserLoggedIn = async user => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.API_URL}/api/user`);\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n    } else {\n      setUser(null);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user,\n      error,\n      register,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/NGY0ZCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsInJlcyIsImZldGNoIiwiQVBJX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJwdXNoIiwibWVzc2FnZSIsImxvZ2luIiwiZW1haWwiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0Msb0RBQWEsRUFBakM7QUFHTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFFMUMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUdBLFFBQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNQyxpQkFBaUIsRUFBeEIsRUFBNEIsRUFBNUIsQ0FBVDs7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBT1QsSUFBUCxJQUFnQjtBQUM3QixVQUFNVSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHFEQUFRLGVBQVosRUFBNEI7QUFDL0NDLFlBQU0sRUFBRSxNQUR1QztBQUUvQ0MsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGc0M7QUFLL0NDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixJQUFmO0FBTHlDLEtBQTVCLENBQXZCO0FBUUEsVUFBTWtCLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBbkI7O0FBRUEsUUFBSVQsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDUm5CLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNBSyxZQUFNLENBQUNnQixJQUFQLENBQVksb0JBQVo7QUFDSCxLQUhELE1BR087QUFDSGpCLGNBQVEsQ0FBQ2MsSUFBSSxDQUFDSSxPQUFOLENBQVI7QUFDQWxCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDSDtBQUNKLEdBbEJELENBVDBDLENBZ0MxQzs7O0FBQ0EsUUFBTW1CLEtBQUssR0FBRyxPQUFPO0FBQUVDLFNBQUssRUFBRUMsVUFBVDtBQUFxQkM7QUFBckIsR0FBUCxLQUEyQztBQUNyREMsV0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVosRUFBd0JDLFFBQXhCLEVBRHFELENBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBdEJELENBakMwQyxDQTJEMUM7OztBQUNBLFFBQU1HLE1BQU0sR0FBRyxZQUFZO0FBQ3ZCLFVBQU1uQixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHFEQUFRLGFBQVosRUFBMEI7QUFDN0NDLFlBQU0sRUFBRTtBQURxQyxLQUExQixDQUF2Qjs7QUFJQSxRQUFJSCxHQUFHLENBQUNVLEVBQVIsRUFBWTtBQUNSbkIsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBSSxZQUFNLENBQUNnQixJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FURCxDQTVEMEMsQ0F1RTFDOzs7QUFDQSxRQUFNYixpQkFBaUIsR0FBRyxNQUFPUixJQUFQLElBQWdCO0FBQ3RDLFVBQU1VLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMscURBQVEsV0FBWixDQUF2QjtBQUNBLFVBQU1NLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBbkI7O0FBRUEsUUFBSVQsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDUm5CLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIQyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7QUFDSixHQVREOztBQVVBLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxVQUFGO0FBQVFHLFdBQVI7QUFBZU0sY0FBZjtBQUF5QmMsV0FBekI7QUFBZ0NNO0FBQWhDLEtBQTdCO0FBQUEsY0FDSzlCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F2Rk07QUF5RlAsK0RBQWVILFdBQWYiLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXguanMnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiBjaGVja1VzZXJMb2dnZWRJbigpLCBbXSlcblxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgLy8gIExvZ2luIFVzZXIgXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbDogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpZGVudGlmaWVyLCBwYXNzd29yZCk7XG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9sb2dpbmAsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAvLyAgICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIC8vICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgIC8vIGlmIChyZXMub2spIHtcbiAgICAgICAgLy8gICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goJy9hY2NvdW50L2Rhc2hib2FyZCcpXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgIC8vICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG5cblxuICAgIC8vIExvZ291dCB1c2VyXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvbG9nb3V0YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBjb25zdCBjaGVja1VzZXJMb2dnZWRJbiA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS91c2VyYClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICBzZXRVc2VyKGRhdGEudXNlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgZXJyb3IsIHJlZ2lzdGVyLCBsb2dpbiwgbG9nb3V0IH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/benshabi/Desktop/hilo/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQU8sOERBQUMsOERBQUQ7QUFBQSwyQkFDTCw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJRDs7QUFFRCwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8QXV0aFByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICA8L0F1dGhQcm92aWRlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();