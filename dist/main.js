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

eval("// import Example from './scripts/example'\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello\")\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n//------------------------------------------------------------\n\n// how can i divide these into different classes and call on them, tried it and failed\n\n//I have to define hole on the outside for capybara photos to create and delete themselves, why?\nlet hole;\nlet capy;\nlet score = 0;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  setHoles();\n  createCapy();\n  runGame();\n});\nfunction setHoles() {\n  for (let i = 1; i < 10; i++) {\n    let hole = document.createElement(\"div\");\n    hole.id = i.toString();\n    hole.classList.add('hole');\n    document.getElementById(\"board\").appendChild(hole);\n  }\n}\nfunction createCapy() {\n  if (hole) {\n    hole.innerHTML = \"\";\n  }\n  capy = document.createElement(\"img\");\n  capy.id = \"capy\";\n  capy.src = './assets/clear-capybara.png';\n  let num = randomNum();\n  hole = document.getElementById(num);\n  hole.appendChild(capy);\n}\nfunction runGame() {\n  setInterval(createCapy, 1000);\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 10);\n  return num.toString();\n}\nfunction clickCapy() {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJob2xlIiwiY2FweSIsInNjb3JlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldEhvbGVzIiwiY3JlYXRlQ2FweSIsInJ1bkdhbWUiLCJpIiwiY3JlYXRlRWxlbWVudCIsImlkIiwidG9TdHJpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwic3JjIiwibnVtIiwicmFuZG9tTnVtIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjbGlja0NhcHkiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSdcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXHJcbiAgICAvLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxyXG4gICAgLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xyXG4gICAgLy8gfSlcclxuICAgIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vLyBob3cgY2FuIGkgZGl2aWRlIHRoZXNlIGludG8gZGlmZmVyZW50IGNsYXNzZXMgYW5kIGNhbGwgb24gdGhlbSwgdHJpZWQgaXQgYW5kIGZhaWxlZFxyXG5cclxuXHJcblxyXG4vL0kgaGF2ZSB0byBkZWZpbmUgaG9sZSBvbiB0aGUgb3V0c2lkZSBmb3IgY2FweWJhcmEgcGhvdG9zIHRvIGNyZWF0ZSBhbmQgZGVsZXRlIHRoZW1zZWx2ZXMsIHdoeT9cclxubGV0IGhvbGVcclxubGV0IGNhcHlcclxubGV0IHNjb3JlID0gMFxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgIHNldEhvbGVzKCk7XHJcbiAgICBjcmVhdGVDYXB5KCk7XHJcbiAgICBydW5HYW1lKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzZXRIb2xlcygpIHtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGhvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhvbGUuaWQgPSBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaG9sZS5jbGFzc0xpc3QuYWRkKCdob2xlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKS5hcHBlbmRDaGlsZChob2xlKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHkoKSB7XHJcblxyXG4gICAgaWYoaG9sZSkge1xyXG4gICAgICAgIGhvbGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjYXB5LmlkID0gXCJjYXB5XCI7XHJcbiAgICBjYXB5LnNyYyA9ICcuL2Fzc2V0cy9jbGVhci1jYXB5YmFyYS5wbmcnO1xyXG5cclxuICAgIGxldCBudW0gPSByYW5kb21OdW0oKTtcclxuICAgIGhvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0pO1xyXG4gICAgaG9sZS5hcHBlbmRDaGlsZChjYXB5KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkdhbWUoKSB7XHJcbiAgICBzZXRJbnRlcnZhbChjcmVhdGVDYXB5LDEwMDApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKCkge1xyXG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsaWNrQ2FweSAoKSB7XHJcbiAgICBcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFFSjs7QUFJQTs7QUFJQTtBQUNBLElBQUlBLElBQUk7QUFDUixJQUFJQyxJQUFJO0FBQ1IsSUFBSUMsS0FBSyxHQUFHLENBQUM7QUFFYkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDakJDLFFBQVEsRUFBRTtFQUNWQyxVQUFVLEVBQUU7RUFDWkMsT0FBTyxFQUFFO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsU0FBU0YsUUFBUUEsQ0FBQSxFQUFHO0VBQ2hCLEtBQUksSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDeEIsSUFBSVYsSUFBSSxHQUFHRyxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeENYLElBQUksQ0FBQ1ksRUFBRSxHQUFHRixDQUFDLENBQUNHLFFBQVEsRUFBRTtJQUN0QmIsSUFBSSxDQUFDYyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUJaLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxXQUFXLENBQUNqQixJQUFJLENBQUM7RUFDdEQ7QUFFSjtBQUdBLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUVsQixJQUFHUixJQUFJLEVBQUU7SUFDTEEsSUFBSSxDQUFDa0IsU0FBUyxHQUFHLEVBQUU7RUFDdkI7RUFHQWpCLElBQUksR0FBR0UsUUFBUSxDQUFDUSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BDVixJQUFJLENBQUNXLEVBQUUsR0FBRyxNQUFNO0VBQ2hCWCxJQUFJLENBQUNrQixHQUFHLEdBQUcsNkJBQTZCO0VBRXhDLElBQUlDLEdBQUcsR0FBR0MsU0FBUyxFQUFFO0VBQ3JCckIsSUFBSSxHQUFHRyxRQUFRLENBQUNhLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDO0VBQ25DcEIsSUFBSSxDQUFDaUIsV0FBVyxDQUFDaEIsSUFBSSxDQUFDO0FBRTFCO0FBRUEsU0FBU1EsT0FBT0EsQ0FBQSxFQUFHO0VBQ2ZhLFdBQVcsQ0FBQ2QsVUFBVSxFQUFDLElBQUksQ0FBQztBQUVoQztBQUVBLFNBQVNhLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJRCxHQUFHLEdBQUdHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUN4QyxPQUFPTCxHQUFHLENBQUNQLFFBQVEsRUFBRTtBQUN6QjtBQUdBLFNBQVNhLFNBQVNBLENBQUEsRUFBSSxDQUV0QiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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