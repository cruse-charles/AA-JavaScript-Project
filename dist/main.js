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

eval("// import Example from './scripts/example'\n// import { setHoles } from \"./scripts/create_holes\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello\")\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n//------------------------------------------------------------\n\n// how can i divide these into different classes and call on them, tried it and failed\n\n//I have to define hole on the outside for capybara photos to create and delete themselves, why?\nlet hole;\nlet capy;\nlet score = 0;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  setHoles();\n  runGame();\n});\n\n// function setHoles() {\n//     for(let i = 1; i < 10; i++) {\n//         let hole = document.createElement(\"div\");\n//         hole.id = i.toString();\n//         hole.classList.add('hole');\n//         document.getElementById(\"board\").appendChild(hole)\n//     }\n\n// }\n\nfunction createCapy() {\n  if (hole) {\n    hole.innerHTML = \"\";\n  }\n  capy = document.createElement(\"img\");\n  capy.id = \"capy\";\n  capy.src = './assets/clear-capybara.png';\n  let num = randomNum();\n  hole = document.getElementById(num);\n  hole.appendChild(capy);\n}\nfunction runGame() {\n  setInterval(createCapy, 1000);\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 10);\n  return num.toString();\n}\nfunction clickCapy() {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJob2xlIiwiY2FweSIsInNjb3JlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldEhvbGVzIiwicnVuR2FtZSIsImNyZWF0ZUNhcHkiLCJpbm5lckhUTUwiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzcmMiLCJudW0iLCJyYW5kb21OdW0iLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNsaWNrQ2FweSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlJ1xyXG4vLyBpbXBvcnQgeyBzZXRIb2xlcyB9IGZyb20gXCIuL3NjcmlwdHMvY3JlYXRlX2hvbGVzXCI7XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxyXG4gICAgLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcclxuICAgIC8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcclxuICAgIC8vIH0pXHJcbiAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gaG93IGNhbiBpIGRpdmlkZSB0aGVzZSBpbnRvIGRpZmZlcmVudCBjbGFzc2VzIGFuZCBjYWxsIG9uIHRoZW0sIHRyaWVkIGl0IGFuZCBmYWlsZWRcclxuXHJcblxyXG5cclxuLy9JIGhhdmUgdG8gZGVmaW5lIGhvbGUgb24gdGhlIG91dHNpZGUgZm9yIGNhcHliYXJhIHBob3RvcyB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0aGVtc2VsdmVzLCB3aHk/XHJcbmxldCBob2xlXHJcbmxldCBjYXB5XHJcbmxldCBzY29yZSA9IDBcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbiAgICBzZXRIb2xlcygpO1xyXG4gICAgcnVuR2FtZSgpO1xyXG59KVxyXG5cclxuLy8gZnVuY3Rpb24gc2V0SG9sZXMoKSB7XHJcbi8vICAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4vLyAgICAgICAgIGxldCBob2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgICBob2xlLmlkID0gaS50b1N0cmluZygpO1xyXG4vLyAgICAgICAgIGhvbGUuY2xhc3NMaXN0LmFkZCgnaG9sZScpO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIikuYXBwZW5kQ2hpbGQoaG9sZSlcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHkoKSB7XHJcblxyXG4gICAgaWYoaG9sZSkge1xyXG4gICAgICAgIGhvbGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjYXB5LmlkID0gXCJjYXB5XCI7XHJcbiAgICBjYXB5LnNyYyA9ICcuL2Fzc2V0cy9jbGVhci1jYXB5YmFyYS5wbmcnO1xyXG5cclxuICAgIGxldCBudW0gPSByYW5kb21OdW0oKTtcclxuICAgIGhvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0pO1xyXG4gICAgaG9sZS5hcHBlbmRDaGlsZChjYXB5KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkdhbWUoKSB7XHJcbiAgICBzZXRJbnRlcnZhbChjcmVhdGVDYXB5LDEwMDApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKCkge1xyXG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsaWNrQ2FweSAoKSB7XHJcbiAgICBcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBOztBQUVKOztBQUlBOztBQUlBO0FBQ0EsSUFBSUEsSUFBSTtBQUNSLElBQUlDLElBQUk7QUFDUixJQUFJQyxLQUFLLEdBQUcsQ0FBQztBQUViQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQkMsUUFBUSxFQUFFO0VBQ1ZDLE9BQU8sRUFBRTtBQUNiLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFLQSxTQUFTQyxVQUFVQSxDQUFBLEVBQUc7RUFFbEIsSUFBR1QsSUFBSSxFQUFFO0lBQ0xBLElBQUksQ0FBQ1UsU0FBUyxHQUFHLEVBQUU7RUFDdkI7RUFHQVQsSUFBSSxHQUFHRSxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcENWLElBQUksQ0FBQ1csRUFBRSxHQUFHLE1BQU07RUFDaEJYLElBQUksQ0FBQ1ksR0FBRyxHQUFHLDZCQUE2QjtFQUV4QyxJQUFJQyxHQUFHLEdBQUdDLFNBQVMsRUFBRTtFQUNyQmYsSUFBSSxHQUFHRyxRQUFRLENBQUNhLGNBQWMsQ0FBQ0YsR0FBRyxDQUFDO0VBQ25DZCxJQUFJLENBQUNpQixXQUFXLENBQUNoQixJQUFJLENBQUM7QUFFMUI7QUFFQSxTQUFTTyxPQUFPQSxDQUFBLEVBQUc7RUFDZlUsV0FBVyxDQUFDVCxVQUFVLEVBQUMsSUFBSSxDQUFDO0FBRWhDO0FBRUEsU0FBU00sU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCLElBQUlELEdBQUcsR0FBR0ssSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0VBQ3hDLE9BQU9QLEdBQUcsQ0FBQ1EsUUFBUSxFQUFFO0FBQ3pCO0FBR0EsU0FBU0MsU0FBU0EsQ0FBQSxFQUFJLENBRXRCIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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