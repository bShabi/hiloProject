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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"NEXT_URL\": function() { return /* binding */ NEXT_URL; }\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbmZpZy9pbmRleC5qcz9hY2U3Il0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLE9BQU8sR0FDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFEaEM7QUFHQSxNQUFNQyxRQUFRLEdBQ2pCSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsd0JBQVosSUFBd0MsdUJBRHJDIiwiZmlsZSI6Ii4vY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPVxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/index.js */ \"./config/index.js\");\n\nvar _jsxFileName = \"/Users/benshabi/Desktop/hilo/frontend/context/AuthContext.js\";\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkUserLoggedIn(), []);\n\n  const register = async user => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/register`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n      router.push('/');\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; //  Login User \n\n\n  const login = async ({\n    userName: identifier,\n    password\n  }) => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/login`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        identifier,\n        password\n      })\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      console.log(\"ok\");\n      setUser(data.user);\n      router.push('/');\n    } else {\n      setError(data.message);\n      setError(null);\n    }\n  }; // Logout user\n\n\n  const logout = async () => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/logout`, {\n      method: 'POST'\n    });\n\n    if (res.ok) {\n      setUser(null);\n      router.push('/');\n    }\n  }; // Check if user is logged in\n\n\n  const checkUserLoggedIn = async user => {\n    const res = await fetch(`${_config_index_js__WEBPACK_IMPORTED_MODULE_3__.NEXT_URL}/api/user`);\n    const data = await res.json();\n\n    if (res.ok) {\n      setUser(data.user);\n    } else {\n      setUser(null);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user,\n      error,\n      register,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/NGY0ZCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJyZWdpc3RlciIsInJlcyIsImZldGNoIiwiTkVYVF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwicHVzaCIsIm1lc3NhZ2UiLCJsb2dpbiIsInVzZXJOYW1lIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBR08sTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBRTFDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFHQSxRQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLGtEQUFTLENBQUMsTUFBTUMsaUJBQWlCLEVBQXhCLEVBQTRCLEVBQTVCLENBQVQ7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU9ULElBQVAsSUFBZ0I7QUFDN0IsVUFBTVUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxzREFBUyxlQUFiLEVBQTZCO0FBQ2hEQyxZQUFNLEVBQUUsTUFEd0M7QUFFaERDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRnVDO0FBS2hEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlakIsSUFBZjtBQUwwQyxLQUE3QixDQUF2QjtBQVFBLFVBQU1rQixJQUFJLEdBQUcsTUFBTVIsR0FBRyxDQUFDUyxJQUFKLEVBQW5COztBQUVBLFFBQUlULEdBQUcsQ0FBQ1UsRUFBUixFQUFZO0FBQ1JuQixhQUFPLENBQUNpQixJQUFJLENBQUNsQixJQUFOLENBQVA7QUFDQUssWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7QUFDSCxLQUhELE1BR087QUFDSGpCLGNBQVEsQ0FBQ2MsSUFBSSxDQUFDSSxPQUFOLENBQVI7QUFDQWxCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDSDtBQUNKLEdBbEJELENBVDBDLENBZ0MxQzs7O0FBQ0EsUUFBTW1CLEtBQUssR0FBRyxPQUFPO0FBQUVDLFlBQVEsRUFBRUMsVUFBWjtBQUF3QkM7QUFBeEIsR0FBUCxLQUE4QztBQUN4RCxVQUFNaEIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxzREFBUyxZQUFiLEVBQTBCO0FBQzdDQyxZQUFNLEVBQUUsTUFEcUM7QUFFN0NDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRm9DO0FBSzdDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCUSxrQkFEaUI7QUFFakJDO0FBRmlCLE9BQWY7QUFMdUMsS0FBMUIsQ0FBdkI7QUFXQSxVQUFNUixJQUFJLEdBQUcsTUFBTVIsR0FBRyxDQUFDUyxJQUFKLEVBQW5COztBQUVBLFFBQUlULEdBQUcsQ0FBQ1UsRUFBUixFQUFZO0FBQ1JPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQTNCLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNBSyxZQUFNLENBQUNnQixJQUFQLENBQVksR0FBWjtBQUNILEtBSkQsTUFJTztBQUNIakIsY0FBUSxDQUFDYyxJQUFJLENBQUNJLE9BQU4sQ0FBUjtBQUNBbEIsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0osR0F0QkQsQ0FqQzBDLENBMkQxQzs7O0FBQ0EsUUFBTXlCLE1BQU0sR0FBRyxZQUFZO0FBQ3ZCLFVBQU1uQixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHNEQUFTLGFBQWIsRUFBMkI7QUFDOUNDLFlBQU0sRUFBRTtBQURzQyxLQUEzQixDQUF2Qjs7QUFJQSxRQUFJSCxHQUFHLENBQUNVLEVBQVIsRUFBWTtBQUNSbkIsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBSSxZQUFNLENBQUNnQixJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FURCxDQTVEMEMsQ0F1RTFDOzs7QUFDQSxRQUFNYixpQkFBaUIsR0FBRyxNQUFPUixJQUFQLElBQWdCO0FBQ3RDLFVBQU1VLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsc0RBQVMsV0FBYixDQUF2QjtBQUNBLFVBQU1NLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBbkI7O0FBQ0EsUUFBSVQsR0FBRyxDQUFDVSxFQUFSLEVBQVk7QUFDUm5CLGFBQU8sQ0FBQ2lCLElBQUksQ0FBQ2xCLElBQU4sQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIQyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7QUFDSixHQVJEOztBQVNBLHNCQUNJLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxVQUFGO0FBQVFHLFdBQVI7QUFBZU0sY0FBZjtBQUF5QmMsV0FBekI7QUFBZ0NNO0FBQWhDLEtBQTdCO0FBQUEsY0FDSzlCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F0Rk07QUF3RlAsK0RBQWVILFdBQWYiLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBORVhUX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4LmpzJ1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4gY2hlY2tVc2VyTG9nZ2VkSW4oKSwgW10pXG5cbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke05FWFRfVVJMfS9hcGkvcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgLy8gIExvZ2luIFVzZXIgXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoeyB1c2VyTmFtZTogaWRlbnRpZmllciwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtORVhUX1VSTH0vYXBpL2xvZ2luYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyBMb2dvdXQgdXNlclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS9sb2dvdXRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7TkVYVF9VUkx9L2FwaS91c2VyYClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGVycm9yLCByZWdpc3RlciwgbG9naW4sIGxvZ291dCB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

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