/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from './scripts/example'\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello\")\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n// import Capy from './scripts/create_chars'\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  setHoles();\n  createCapy();\n});\nfunction setHoles() {\n  for (let i = 1; i < 10; i++) {\n    let hole = document.createElement(\"div\");\n    hole.id = i.toString();\n    hole.classList.add('hole');\n    document.getElementById(\"board\").appendChild(hole);\n  }\n}\nfunction createCapy() {\n  let capy = document.createElement(\"img\");\n  capy.id = \"capy\";\n  capy.src = './assets/capybara.PNG';\n  let hole = document.getElementById(\"1\");\n  hole.appendChild(capy);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2V0SG9sZXMiLCJjcmVhdGVDYXB5IiwiaSIsImhvbGUiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0b1N0cmluZyIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjYXB5Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUnXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxyXG4gICAgLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcclxuICAgIC8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcclxuICAgIC8vIH0pXHJcbiAgICBcclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IENhcHkgZnJvbSAnLi9zY3JpcHRzL2NyZWF0ZV9jaGFycydcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbiAgICBzZXRIb2xlcygpO1xyXG4gICAgY3JlYXRlQ2FweSgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gc2V0SG9sZXMoKSB7XHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGxldCBob2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBob2xlLmlkID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgIGhvbGUuY2xhc3NMaXN0LmFkZCgnaG9sZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIikuYXBwZW5kQ2hpbGQoaG9sZSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHkoKSB7XHJcbiAgICBsZXQgY2FweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjYXB5LmlkID0gXCJjYXB5XCJcclxuICAgIGNhcHkuc3JjID0gJy4vYXNzZXRzL2NhcHliYXJhLlBORyc7XHJcbiAgICBsZXQgaG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiMVwiKTtcclxuICAgIGhvbGUuYXBwZW5kQ2hpbGQoY2FweSk7XHJcbn1cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFLSjs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDakJDLFFBQVEsRUFBRTtFQUNWQyxVQUFVLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsU0FBU0QsUUFBUUEsQ0FBQSxFQUFHO0VBQ2hCLEtBQUksSUFBSUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDeEIsSUFBSUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeENELElBQUksQ0FBQ0UsRUFBRSxHQUFHSCxDQUFDLENBQUNJLFFBQVEsRUFBRTtJQUN0QkgsSUFBSSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUJaLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxXQUFXLENBQUNQLElBQUksQ0FBQztFQUN0RDtBQUVKO0FBRUEsU0FBU0YsVUFBVUEsQ0FBQSxFQUFHO0VBQ2xCLElBQUlVLElBQUksR0FBR2YsUUFBUSxDQUFDUSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3hDTyxJQUFJLENBQUNOLEVBQUUsR0FBRyxNQUFNO0VBQ2hCTSxJQUFJLENBQUNDLEdBQUcsR0FBRyx1QkFBdUI7RUFDbEMsSUFBSVQsSUFBSSxHQUFHUCxRQUFRLENBQUNhLGNBQWMsQ0FBQyxHQUFHLENBQUM7RUFDdkNOLElBQUksQ0FBQ08sV0FBVyxDQUFDQyxJQUFJLENBQUM7QUFDMUIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;