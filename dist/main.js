/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFFakNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxJQUFJRixxREFBSSxFQUFFO0FBRWQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgbmV3IEdhbWUoKVxyXG5cclxufSlcclxuIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n  constructor(game) {\n    // this.board = Board.setHoles\n    // This was wrong above, look into it, i was making a class method\n    this.game = game;\n    this.setHoles();\n  }\n  setHoles() {\n    for (let i = 0; i < 9; i++) {\n      let hole = document.createElement(\"div\");\n      hole.id = i.toString();\n      hole.classList.add('hole');\n      document.getElementById(\"board\").appendChild(hole);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNkO0lBQ0E7SUFDQSxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLFFBQVEsRUFBRTtFQUNuQjtFQUVBQSxRQUFRQSxDQUFBLEVBQUc7SUFDUCxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQ3ZCLElBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3hDRixJQUFJLENBQUNHLEVBQUUsR0FBR0osQ0FBQyxDQUFDSyxRQUFRLEVBQUU7TUFDdEJKLElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFCTCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsV0FBVyxDQUFDUixJQUFJLENBQUM7SUFDdEQ7RUFFSjtBQUtKO0FBRUEsK0RBQWVMLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ib2FyZCA9IEJvYXJkLnNldEhvbGVzXHJcbiAgICAgICAgLy8gVGhpcyB3YXMgd3JvbmcgYWJvdmUsIGxvb2sgaW50byBpdCwgaSB3YXMgbWFraW5nIGEgY2xhc3MgbWV0aG9kXHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuc2V0SG9sZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIb2xlcygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBob2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaG9sZS5pZCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaG9sZS5jbGFzc0xpc3QuYWRkKCdob2xlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIikuYXBwZW5kQ2hpbGQoaG9sZSlcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZCJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsInNldEhvbGVzIiwiaSIsImhvbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRvU3RyaW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/capy.js":
/*!*****************************!*\
  !*** ./src/scripts/capy.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Capy {\n  constructor(game) {\n    this.game = game;\n    this.capy = document.createElement(\"img\");\n    this.capy.src = './assets/clear-capybara.png';\n    this.capy.classList.add('character');\n    this.capy.addEventListener('click', () => {\n      this.game.hit();\n    });\n  }\n  draw() {\n    if (this.game.gameOver) {\n      return;\n    }\n    this.position = randomNum();\n    this.capyHole = document.getElementById(this.position); //this was above append child before, moving below for testing\n    console.log(this.position);\n    this.capy.addEventListener('click', () => {\n      this.capyHole.removeChild(this.capy);\n    });\n    let empty = false;\n    while (!empty) {\n      empty = true;\n      if (this.capyHole.innerHTML != \"\") {\n        empty = false;\n        this.position = randomNum();\n        this.capyHole = document.getElementById(this.position);\n      }\n    }\n    this.capyHole.appendChild(this.capy);\n\n    //search for an element with the position, check if it's full, if so put the game while loop in here and let it loop\n    //through that, don't draw until the spot is empty here, do this before the append child.\n  }\n}\n\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 9);\n  return num.toString();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Capy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXB5LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFFaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFJLENBQUNGLElBQUksQ0FBQ0csR0FBRyxHQUFHLDZCQUE2QjtJQUM3QyxJQUFJLENBQUNILElBQUksQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRXBDLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN0QyxJQUFJLENBQUNQLElBQUksQ0FBQ1EsR0FBRyxFQUFFO0lBQ25CLENBQUMsQ0FBQztFQUdOO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUVILElBQUcsSUFBSSxDQUFDVCxJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNuQjtJQUNKO0lBR0EsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLFNBQVMsRUFBRTtJQUMzQixJQUFJLENBQUNDLFFBQVEsR0FBR1gsUUFBUSxDQUFDWSxjQUFjLENBQUMsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hESSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLFFBQVEsQ0FBQztJQUUxQixJQUFJLENBQUNWLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDdEMsSUFBSSxDQUFDTSxRQUFRLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUNoQixJQUFJLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0lBR0YsSUFBSWlCLEtBQUssR0FBRyxLQUFLO0lBQ2pCLE9BQU0sQ0FBQ0EsS0FBSyxFQUFFO01BQ1ZBLEtBQUssR0FBRyxJQUFJO01BQ1osSUFBSSxJQUFJLENBQUNMLFFBQVEsQ0FBQ00sU0FBUyxJQUFJLEVBQUUsRUFBRTtRQUMvQkQsS0FBSyxHQUFHLEtBQUs7UUFDYixJQUFJLENBQUNQLFFBQVEsR0FBR0MsU0FBUyxFQUFFO1FBQzNCLElBQUksQ0FBQ0MsUUFBUSxHQUFHWCxRQUFRLENBQUNZLGNBQWMsQ0FBQyxJQUFJLENBQUNILFFBQVEsQ0FBQztNQUMxRDtJQUNKO0lBR0EsSUFBSSxDQUFDRSxRQUFRLENBQUNPLFdBQVcsQ0FBQyxJQUFJLENBQUNuQixJQUFJLENBQUM7O0lBTXBDO0lBQ0E7RUFHSjtBQUdKOztBQUlBLFNBQVNXLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJUyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2QyxPQUFPSCxHQUFHLENBQUNJLFFBQVEsRUFBRTtBQUN6QjtBQUlBLCtEQUFlM0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9jYXB5LmpzPzA4MTIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FweSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5jYXB5LnNyYyA9ICcuL2Fzc2V0cy9jbGVhci1jYXB5YmFyYS5wbmcnO1xyXG4gICAgICAgIHRoaXMuY2FweS5jbGFzc0xpc3QuYWRkKCdjaGFyYWN0ZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaGl0KClcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5nYW1lLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHJhbmRvbU51bSgpXHJcbiAgICAgICAgdGhpcy5jYXB5SG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pOyAvL3RoaXMgd2FzIGFib3ZlIGFwcGVuZCBjaGlsZCBiZWZvcmUsIG1vdmluZyBiZWxvdyBmb3IgdGVzdGluZ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pXHJcblxyXG4gICAgICAgIHRoaXMuY2FweS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXB5SG9sZS5yZW1vdmVDaGlsZCh0aGlzLmNhcHkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVtcHR5ID0gZmFsc2VcclxuICAgICAgICB3aGlsZSghZW1wdHkpIHtcclxuICAgICAgICAgICAgZW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXB5SG9sZS5pbm5lckhUTUwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSByYW5kb21OdW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FweUhvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhcHlIb2xlLmFwcGVuZENoaWxkKHRoaXMuY2FweSk7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvL3NlYXJjaCBmb3IgYW4gZWxlbWVudCB3aXRoIHRoZSBwb3NpdGlvbiwgY2hlY2sgaWYgaXQncyBmdWxsLCBpZiBzbyBwdXQgdGhlIGdhbWUgd2hpbGUgbG9vcCBpbiBoZXJlIGFuZCBsZXQgaXQgbG9vcFxyXG4gICAgICAgIC8vdGhyb3VnaCB0aGF0LCBkb24ndCBkcmF3IHVudGlsIHRoZSBzcG90IGlzIGVtcHR5IGhlcmUsIGRvIHRoaXMgYmVmb3JlIHRoZSBhcHBlbmQgY2hpbGQuXHJcblxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKCkge1xyXG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xyXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcHk7XHJcbiJdLCJuYW1lcyI6WyJDYXB5IiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY2FweSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaXQiLCJkcmF3IiwiZ2FtZU92ZXIiLCJwb3NpdGlvbiIsInJhbmRvbU51bSIsImNhcHlIb2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ2hpbGQiLCJlbXB0eSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/capy.js\n");

/***/ }),

/***/ "./src/scripts/farmer.js":
/*!*******************************!*\
  !*** ./src/scripts/farmer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Farmer {\n  constructor(game) {\n    this.game = game;\n    this.farmer = document.createElement(\"img\");\n    this.farmer.id = \"farmer\";\n    this.farmer.src = './assets/transparent_farmer.png';\n    this.farmer.classList.add('character');\n    this.farmer.addEventListener('click', () => {\n      document.getElementById(\"h1\").innerText = \"Game Over: \" + this.game.score.toString();\n      this.game.gameOver = true;\n    });\n  }\n  draw() {\n    if (this.game.gameOver) {\n      return;\n    }\n    this.position = randomNum();\n    this.farmerHole = document.getElementById(this.position);\n    console.log(this.position);\n    let empty = false;\n    while (!empty) {\n      empty = true;\n      if (this.farmerHole.innerHTML != \"\") {\n        empty = false;\n        this.position = randomNum();\n        this.farmerHole = document.getElementById(this.position);\n      }\n    }\n    this.farmerHole.appendChild(this.farmer);\n  }\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 9);\n  return num.toString();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Farmer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mYXJtZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUU7SUFDZCxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUVoQixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxFQUFFLEdBQUcsUUFBUTtJQUN6QixJQUFJLENBQUNILE1BQU0sQ0FBQ0ksR0FBRyxHQUFHLGlDQUFpQztJQUNuRCxJQUFJLENBQUNKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRXRDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN4Q04sUUFBUSxDQUFDTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDVixJQUFJLENBQUNXLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO01BQ3BGLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxRQUFRLEdBQUcsSUFBSTtJQUM3QixDQUFDLENBQUM7RUFDTjtFQUlBQyxJQUFJQSxDQUFBLEVBQUc7SUFFSCxJQUFHLElBQUksQ0FBQ2QsSUFBSSxDQUFDYSxRQUFRLEVBQUU7TUFDbkI7SUFDSjtJQUVBLElBQUksQ0FBQ0UsUUFBUSxHQUFHQyxTQUFTLEVBQUU7SUFDM0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdmLFFBQVEsQ0FBQ08sY0FBYyxDQUFDLElBQUksQ0FBQ00sUUFBUSxDQUFDO0lBQ3hERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQztJQUUxQixJQUFJSyxLQUFLLEdBQUcsS0FBSztJQUNqQixPQUFNLENBQUNBLEtBQUssRUFBRTtNQUNWQSxLQUFLLEdBQUcsSUFBSTtNQUNaLElBQUksSUFBSSxDQUFDSCxVQUFVLENBQUNJLFNBQVMsSUFBSSxFQUFFLEVBQUU7UUFDakNELEtBQUssR0FBRyxLQUFLO1FBQ2IsSUFBSSxDQUFDTCxRQUFRLEdBQUdDLFNBQVMsRUFBRTtRQUMzQixJQUFJLENBQUNDLFVBQVUsR0FBR2YsUUFBUSxDQUFDTyxjQUFjLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUM7TUFDNUQ7SUFDSjtJQUVBLElBQUksQ0FBQ0UsVUFBVSxDQUFDSyxXQUFXLENBQUMsSUFBSSxDQUFDckIsTUFBTSxDQUFDO0VBRTVDO0FBRUo7QUFHQSxTQUFTZSxTQUFTQSxDQUFBLEVBQUc7RUFDakIsSUFBSU8sR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBT0gsR0FBRyxDQUFDWCxRQUFRLEVBQUU7QUFDekI7QUFLQSwrREFBZWQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9mYXJtZXIuanM/YzgxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGYXJtZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcclxuXHJcbiAgICAgICAgdGhpcy5mYXJtZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuZmFybWVyLmlkID0gXCJmYXJtZXJcIjtcclxuICAgICAgICB0aGlzLmZhcm1lci5zcmMgPSAnLi9hc3NldHMvdHJhbnNwYXJlbnRfZmFybWVyLnBuZyc7XHJcbiAgICAgICAgdGhpcy5mYXJtZXIuY2xhc3NMaXN0LmFkZCgnY2hhcmFjdGVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZmFybWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxXCIpLmlubmVyVGV4dCA9IFwiR2FtZSBPdmVyOiBcIiArIHRoaXMuZ2FtZS5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgZHJhdygpIHtcclxuICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSByYW5kb21OdW0oKVxyXG4gICAgICAgIHRoaXMuZmFybWVySG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pXHJcblxyXG4gICAgICAgIGxldCBlbXB0eSA9IGZhbHNlXHJcbiAgICAgICAgd2hpbGUoIWVtcHR5KSB7XHJcbiAgICAgICAgICAgIGVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFybWVySG9sZS5pbm5lckhUTUwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSByYW5kb21OdW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFybWVySG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZhcm1lckhvbGUuYXBwZW5kQ2hpbGQodGhpcy5mYXJtZXIpO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bSgpIHtcclxuICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFybWVyOyJdLCJuYW1lcyI6WyJGYXJtZXIiLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJmYXJtZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInNjb3JlIiwidG9TdHJpbmciLCJnYW1lT3ZlciIsImRyYXciLCJwb3NpdGlvbiIsInJhbmRvbU51bSIsImZhcm1lckhvbGUiLCJjb25zb2xlIiwibG9nIiwiZW1wdHkiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/farmer.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _capy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capy */ \"./src/scripts/capy.js\");\n/* harmony import */ var _farmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer */ \"./src/scripts/farmer.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.capy1 = new _capy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.capy2 = new _capy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.farmer = new _farmer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    setInterval(() => {\n      this.farmer.draw();\n    }, 1500);\n    setInterval(() => {\n      this.capy1.draw();\n    }, 1500);\n    setInterval(() => {\n      this.capy2.draw();\n    }, 1500);\n    // setInterval(this.capy2.draw.bind(this.capy2), 1000);\n\n    this.score = 0;\n    this.gameOver = false;\n  }\n  hit() {\n    this.score += 10;\n    document.getElementById(\"score\").innerText = this.score.toString();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMkI7QUFDRjtBQUNJO0FBRzdCLE1BQU1HLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFBLEVBQUc7SUFFVixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJTCw4Q0FBSyxDQUFDLElBQUksQ0FBQztJQUM1QixJQUFJLENBQUNNLEtBQUssR0FBRyxJQUFJTCw2Q0FBSSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUNNLEtBQUssR0FBRyxJQUFJTiw2Q0FBSSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUNPLE1BQU0sR0FBRyxJQUFJTiwrQ0FBTSxDQUFDLElBQUksQ0FBQztJQUU5Qk8sV0FBVyxDQUFDLE1BQU07TUFDZCxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO0lBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDUkQsV0FBVyxDQUFDLE1BQU07TUFDZCxJQUFJLENBQUNILEtBQUssQ0FBQ0ksSUFBSSxFQUFFO0lBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUkQsV0FBVyxDQUFDLE1BQU07TUFDZCxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxFQUFFO0lBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDUjs7SUFFQSxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztFQUN6QjtFQUVBQyxHQUFHQSxDQUFBLEVBQUc7SUFDRixJQUFJLENBQUNGLEtBQUssSUFBSSxFQUFFO0lBQ2hCRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxRQUFRLEVBQUU7RUFDdEU7QUFHSjtBQUtBLCtEQUFlZCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCdcclxuaW1wb3J0IENhcHkgZnJvbSAnLi9jYXB5J1xyXG5pbXBvcnQgRmFybWVyIGZyb20gJy4vZmFybWVyJ1xyXG5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYXB5MSA9IG5ldyBDYXB5KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FweTIgPSBuZXcgQ2FweSh0aGlzKTtcclxuICAgICAgICB0aGlzLmZhcm1lciA9IG5ldyBGYXJtZXIodGhpcyk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYXJtZXIuZHJhdygpO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXB5MS5kcmF3KCk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXB5Mi5kcmF3KCk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5jYXB5Mi5kcmF3LmJpbmQodGhpcy5jYXB5MiksIDEwMDApO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlID0gMFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDEwXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lclRleHQgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJCb2FyZCIsIkNhcHkiLCJGYXJtZXIiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJib2FyZCIsImNhcHkxIiwiY2FweTIiLCJmYXJtZXIiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJzY29yZSIsImdhbWVPdmVyIiwiaGl0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;