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

eval("// import Example from './scripts/example'\n// import { setHoles } from \"./scripts/create_holes\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello\")\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n//------------------------------------------------------------\n\n// how can i divide these into different classes and call on them, tried it and failed\n\n//I have to define hole on the outside for capybara photos to create and delete themselves, why?\nlet hole;\nlet capy;\nlet score = 0;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"hi\");\n  setHoles();\n  runGame();\n});\nfunction setHoles() {\n  for (let i = 1; i < 10; i++) {\n    let hole = document.createElement(\"div\");\n    hole.id = i.toString();\n    hole.classList.add('hole');\n    document.getElementById(\"board\").appendChild(hole);\n  }\n}\nfunction createCapy() {\n  if (hole) {\n    hole.innerHTML = \"\";\n  }\n  capy = document.createElement(\"img\");\n  capy.id = \"capy\";\n  capy.src = './assets/clear-capybara.png';\n  let num = randomNum();\n  hole = document.getElementById(num);\n  hole.appendChild(capy);\n}\nfunction runGame() {\n  setInterval(createCapy, 1000);\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 10);\n  return num.toString();\n}\nfunction clickCapy() {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJob2xlIiwiY2FweSIsInNjb3JlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNldEhvbGVzIiwicnVuR2FtZSIsImkiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0b1N0cmluZyIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDYXB5IiwiaW5uZXJIVE1MIiwic3JjIiwibnVtIiwicmFuZG9tTnVtIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjbGlja0NhcHkiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSdcclxuLy8gaW1wb3J0IHsgc2V0SG9sZXMgfSBmcm9tIFwiLi9zY3JpcHRzL2NyZWF0ZV9ob2xlc1wiO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcclxuICAgIC8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXHJcbiAgICAvLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XHJcbiAgICAvLyB9KVxyXG4gICAgXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vIGhvdyBjYW4gaSBkaXZpZGUgdGhlc2UgaW50byBkaWZmZXJlbnQgY2xhc3NlcyBhbmQgY2FsbCBvbiB0aGVtLCB0cmllZCBpdCBhbmQgZmFpbGVkXHJcblxyXG5cclxuXHJcbi8vSSBoYXZlIHRvIGRlZmluZSBob2xlIG9uIHRoZSBvdXRzaWRlIGZvciBjYXB5YmFyYSBwaG90b3MgdG8gY3JlYXRlIGFuZCBkZWxldGUgdGhlbXNlbHZlcywgd2h5P1xyXG5sZXQgaG9sZVxyXG5sZXQgY2FweVxyXG5sZXQgc2NvcmUgPSAwXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgc2V0SG9sZXMoKTtcclxuICAgIHJ1bkdhbWUoKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHNldEhvbGVzKCkge1xyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBsZXQgaG9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaG9sZS5pZCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICBob2xlLmNsYXNzTGlzdC5hZGQoJ2hvbGUnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpLmFwcGVuZENoaWxkKGhvbGUpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXB5KCkge1xyXG5cclxuICAgIGlmKGhvbGUpIHtcclxuICAgICAgICBob2xlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2FweS5pZCA9IFwiY2FweVwiO1xyXG4gICAgY2FweS5zcmMgPSAnLi9hc3NldHMvY2xlYXItY2FweWJhcmEucG5nJztcclxuXHJcbiAgICBsZXQgbnVtID0gcmFuZG9tTnVtKCk7XHJcbiAgICBob2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtKTtcclxuICAgIGhvbGUuYXBwZW5kQ2hpbGQoY2FweSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBydW5HYW1lKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoY3JlYXRlQ2FweSwxMDAwKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bSgpIHtcclxuICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGlja0NhcHkgKCkge1xyXG4gICAgXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFFSjs7QUFJQTs7QUFJQTtBQUNBLElBQUlBLElBQUk7QUFDUixJQUFJQyxJQUFJO0FBQ1IsSUFBSUMsS0FBSyxHQUFHLENBQUM7QUFFYkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDakJDLFFBQVEsRUFBRTtFQUNWQyxPQUFPLEVBQUU7QUFDYixDQUFDLENBQUM7QUFFRixTQUFTRCxRQUFRQSxDQUFBLEVBQUc7RUFDaEIsS0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUN4QixJQUFJVCxJQUFJLEdBQUdHLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4Q1YsSUFBSSxDQUFDVyxFQUFFLEdBQUdGLENBQUMsQ0FBQ0csUUFBUSxFQUFFO0lBQ3RCWixJQUFJLENBQUNhLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQlgsUUFBUSxDQUFDWSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLFdBQVcsQ0FBQ2hCLElBQUksQ0FBQztFQUN0RDtBQUVKO0FBS0EsU0FBU2lCLFVBQVVBLENBQUEsRUFBRztFQUVsQixJQUFHakIsSUFBSSxFQUFFO0lBQ0xBLElBQUksQ0FBQ2tCLFNBQVMsR0FBRyxFQUFFO0VBQ3ZCO0VBR0FqQixJQUFJLEdBQUdFLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwQ1QsSUFBSSxDQUFDVSxFQUFFLEdBQUcsTUFBTTtFQUNoQlYsSUFBSSxDQUFDa0IsR0FBRyxHQUFHLDZCQUE2QjtFQUV4QyxJQUFJQyxHQUFHLEdBQUdDLFNBQVMsRUFBRTtFQUNyQnJCLElBQUksR0FBR0csUUFBUSxDQUFDWSxjQUFjLENBQUNLLEdBQUcsQ0FBQztFQUNuQ3BCLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQ2YsSUFBSSxDQUFDO0FBRTFCO0FBRUEsU0FBU08sT0FBT0EsQ0FBQSxFQUFHO0VBQ2ZjLFdBQVcsQ0FBQ0wsVUFBVSxFQUFDLElBQUksQ0FBQztBQUVoQztBQUVBLFNBQVNJLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJRCxHQUFHLEdBQUdHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUN4QyxPQUFPTCxHQUFHLENBQUNSLFFBQVEsRUFBRTtBQUN6QjtBQUdBLFNBQVNjLFNBQVNBLENBQUEsRUFBSSxDQUV0QiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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