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

eval("// import Example from './scripts/example'\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello\")\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n//------------------------------------------------------------\n\n// how can i divide these into different classes and call on them, tried it and failed\n\n//I have to define hole on the outside for capybara photos to create and delete themselves, why?\nlet hole;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  setHoles();\n  createCapy();\n  runGame();\n});\nfunction setHoles() {\n  for (let i = 1; i < 10; i++) {\n    let hole = document.createElement(\"div\");\n    hole.id = i.toString();\n    hole.classList.add('hole');\n    document.getElementById(\"board\").appendChild(hole);\n  }\n}\nlet capy;\nfunction createCapy() {\n  if (hole) {\n    hole.innerHTML = \"\";\n  }\n  capy = document.createElement(\"img\");\n  capy.id = \"capy\";\n  capy.src = './assets/capybara.PNG';\n  let num = randomNum();\n  hole = document.getElementById(num);\n  hole.appendChild(capy);\n}\nfunction runGame() {\n  setInterval(createCapy, 1000);\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 10);\n  return num.toString();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJob2xlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldEhvbGVzIiwiY3JlYXRlQ2FweSIsInJ1bkdhbWUiLCJpIiwiY3JlYXRlRWxlbWVudCIsImlkIiwidG9TdHJpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY2FweSIsImlubmVySFRNTCIsInNyYyIsIm51bSIsInJhbmRvbU51bSIsInNldEludGVydmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUnXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxyXG4gICAgLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcclxuICAgIC8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcclxuICAgIC8vIH0pXHJcbiAgICBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8gaG93IGNhbiBpIGRpdmlkZSB0aGVzZSBpbnRvIGRpZmZlcmVudCBjbGFzc2VzIGFuZCBjYWxsIG9uIHRoZW0sIHRyaWVkIGl0IGFuZCBmYWlsZWRcclxuXHJcblxyXG5cclxuLy9JIGhhdmUgdG8gZGVmaW5lIGhvbGUgb24gdGhlIG91dHNpZGUgZm9yIGNhcHliYXJhIHBob3RvcyB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0aGVtc2VsdmVzLCB3aHk/XHJcbmxldCBob2xlXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgc2V0SG9sZXMoKTtcclxuICAgIGNyZWF0ZUNhcHkoKTtcclxuICAgIHJ1bkdhbWUoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gc2V0SG9sZXMoKSB7XHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGxldCBob2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBob2xlLmlkID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgIGhvbGUuY2xhc3NMaXN0LmFkZCgnaG9sZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIikuYXBwZW5kQ2hpbGQoaG9sZSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBjYXB5XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXB5KCkge1xyXG5cclxuICAgIGlmKGhvbGUpIHtcclxuICAgICAgICBob2xlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2FweS5pZCA9IFwiY2FweVwiO1xyXG4gICAgY2FweS5zcmMgPSAnLi9hc3NldHMvY2FweWJhcmEuUE5HJztcclxuXHJcbiAgICBsZXQgbnVtID0gcmFuZG9tTnVtKCk7XHJcbiAgICBob2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtKTtcclxuICAgIGhvbGUuYXBwZW5kQ2hpbGQoY2FweSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBydW5HYW1lKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoY3JlYXRlQ2FweSwxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKCkge1xyXG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFFSjs7QUFJQTs7QUFJQTtBQUNBLElBQUlBLElBQUk7QUFFUkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDakJDLFFBQVEsRUFBRTtFQUNWQyxVQUFVLEVBQUU7RUFDWkMsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsU0FBU0YsUUFBUUEsQ0FBQSxFQUFHO0VBQ2hCLEtBQUksSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDeEIsSUFBSVIsSUFBSSxHQUFHQyxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeENULElBQUksQ0FBQ1UsRUFBRSxHQUFHRixDQUFDLENBQUNHLFFBQVEsRUFBRTtJQUN0QlgsSUFBSSxDQUFDWSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUJaLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxXQUFXLENBQUNmLElBQUksQ0FBQztFQUN0RDtBQUVKO0FBRUEsSUFBSWdCLElBQUk7QUFFUixTQUFTVixVQUFVQSxDQUFBLEVBQUc7RUFFbEIsSUFBR04sSUFBSSxFQUFFO0lBQ0xBLElBQUksQ0FBQ2lCLFNBQVMsR0FBRyxFQUFFO0VBQ3ZCO0VBR0FELElBQUksR0FBR2YsUUFBUSxDQUFDUSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BDTyxJQUFJLENBQUNOLEVBQUUsR0FBRyxNQUFNO0VBQ2hCTSxJQUFJLENBQUNFLEdBQUcsR0FBRyx1QkFBdUI7RUFFbEMsSUFBSUMsR0FBRyxHQUFHQyxTQUFTLEVBQUU7RUFDckJwQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDSyxHQUFHLENBQUM7RUFDbkNuQixJQUFJLENBQUNlLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO0FBRTFCO0FBRUEsU0FBU1QsT0FBT0EsQ0FBQSxFQUFHO0VBQ2ZjLFdBQVcsQ0FBQ2YsVUFBVSxFQUFDLElBQUksQ0FBQztBQUNoQztBQUVBLFNBQVNjLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJRCxHQUFHLEdBQUdHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUN4QyxPQUFPTCxHQUFHLENBQUNSLFFBQVEsRUFBRTtBQUN6QiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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