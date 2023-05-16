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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.getElementById(\"start-button\").onclick = startGame;\n  function startGame() {\n    let startScreen = document.getElementById(\"start-screen\");\n    let introFarmer = document.getElementById(\"intro-farmer\");\n    let canvas = document.getElementById(\"canvas\");\n    startScreen.style.display = \"none\";\n    introFarmer.style.display = \"none\";\n    canvas.style.display = \"block\";\n    // delete Game();\n    new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  document.getElementById(\"instructions-button\").onclick = showInstructions;\n  function showInstructions() {\n    let instructionsScreen = document.getElementById(\"instructions-screen\");\n    instructionsScreen.style.display = 'block';\n\n    // let board = document.getElementById('board')\n    // board.style.display = 'none';\n  }\n\n  document.getElementById('close-instructions-button').onclick = closeInstructions;\n  function closeInstructions() {\n    let instructionsScreen = document.getElementById('instructions-screen');\n    instructionsScreen.style.display = 'none';\n  }\n  document.getElementById('mute-button').onclick = toggleMute;\n  function toggleMute() {\n    const audioElement = document.getElementById('background-music');\n    audioElement.muted = !audioElement.muted;\n    const muteButton = document.getElementById('mute-button');\n    muteButton.textContent = audioElement.muted ? \"Unmute\" : \"Mute\";\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFFakNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUloREQsUUFBUSxDQUFDRSxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNDLE9BQU8sR0FBR0MsU0FBUztFQUMzRCxTQUFTQSxTQUFTQSxDQUFBLEVBQUc7SUFDakIsSUFBSUMsV0FBVyxHQUFHTCxRQUFRLENBQUNFLGNBQWMsQ0FBQyxjQUFjLENBQUM7SUFDekQsSUFBSUksV0FBVyxHQUFHTixRQUFRLENBQUNFLGNBQWMsQ0FBQyxjQUFjLENBQUM7SUFDekQsSUFBSUssTUFBTSxHQUFHUCxRQUFRLENBQUNFLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDOUNHLFdBQVcsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUNsQ0gsV0FBVyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ2xDRixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87SUFDOUI7SUFDQSxJQUFJVixxREFBSSxFQUFFO0VBQ2Q7RUFFQUMsUUFBUSxDQUFDRSxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ0MsT0FBTyxHQUFHTyxnQkFBZ0I7RUFDekUsU0FBU0EsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDeEIsSUFBSUMsa0JBQWtCLEdBQUdYLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0lBQ3ZFUyxrQkFBa0IsQ0FBQ0gsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTzs7SUFFMUM7SUFDQTtFQUNKOztFQUVBVCxRQUFRLENBQUNFLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxPQUFPLEdBQUdTLGlCQUFpQjtFQUNoRixTQUFTQSxpQkFBaUJBLENBQUEsRUFBRztJQUN6QixJQUFJRCxrQkFBa0IsR0FBR1gsUUFBUSxDQUFDRSxjQUFjLENBQUMscUJBQXFCLENBQUM7SUFDdkVTLGtCQUFrQixDQUFDSCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQzdDO0VBRUFULFFBQVEsQ0FBQ0UsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxPQUFPLEdBQUdVLFVBQVU7RUFDM0QsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0lBQ2xCLE1BQU1DLFlBQVksR0FBR2QsUUFBUSxDQUFDRSxjQUFjLENBQUMsa0JBQWtCLENBQUM7SUFDaEVZLFlBQVksQ0FBQ0MsS0FBSyxHQUFHLENBQUNELFlBQVksQ0FBQ0MsS0FBSztJQUV4QyxNQUFNQyxVQUFVLEdBQUdoQixRQUFRLENBQUNFLGNBQWMsQ0FBQyxhQUFhLENBQUM7SUFDekRjLFVBQVUsQ0FBQ0MsV0FBVyxHQUFHSCxZQUFZLENBQUNDLEtBQUssR0FBRyxRQUFRLEdBQUcsTUFBTTtFQUNuRTtBQUdKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKS5vbmNsaWNrID0gc3RhcnRHYW1lXHJcbiAgICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1zY3JlZW5cIik7XHJcbiAgICAgICAgbGV0IGludHJvRmFybWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyby1mYXJtZXJcIik7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpbnRyb0Zhcm1lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgLy8gZGVsZXRlIEdhbWUoKTtcclxuICAgICAgICBuZXcgR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zLWJ1dHRvblwiKS5vbmNsaWNrID0gc2hvd0luc3RydWN0aW9uc1xyXG4gICAgZnVuY3Rpb24gc2hvd0luc3RydWN0aW9ucygpIHtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnMtc2NyZWVuXCIpO1xyXG4gICAgICAgIGluc3RydWN0aW9uc1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgLy8gbGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJylcclxuICAgICAgICAvLyBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1pbnN0cnVjdGlvbnMtYnV0dG9uJykub25jbGljayA9IGNsb3NlSW5zdHJ1Y3Rpb25zXHJcbiAgICBmdW5jdGlvbiBjbG9zZUluc3RydWN0aW9ucygpIHtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucy1zY3JlZW4nKTtcclxuICAgICAgICBpbnN0cnVjdGlvbnNTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXRlLWJ1dHRvbicpLm9uY2xpY2sgPSB0b2dnbGVNdXRlO1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcclxuICAgICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1tdXNpYycpXHJcbiAgICAgICAgYXVkaW9FbGVtZW50Lm11dGVkID0gIWF1ZGlvRWxlbWVudC5tdXRlZDtcclxuXHJcbiAgICAgICAgY29uc3QgbXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXRlLWJ1dHRvbicpXHJcbiAgICAgICAgbXV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IGF1ZGlvRWxlbWVudC5tdXRlZCA/IFwiVW5tdXRlXCIgOiBcIk11dGVcIjtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwic3RhcnRHYW1lIiwic3RhcnRTY3JlZW4iLCJpbnRyb0Zhcm1lciIsImNhbnZhcyIsInN0eWxlIiwiZGlzcGxheSIsInNob3dJbnN0cnVjdGlvbnMiLCJpbnN0cnVjdGlvbnNTY3JlZW4iLCJjbG9zZUluc3RydWN0aW9ucyIsInRvZ2dsZU11dGUiLCJhdWRpb0VsZW1lbnQiLCJtdXRlZCIsIm11dGVCdXR0b24iLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Capy {\n  constructor(game) {\n    this.game = game;\n    this.capy = document.createElement(\"img\");\n    this.capy.src = './assets/clear-capybara.png';\n    this.capy.classList.add('character');\n    this.sound = new Audio('./assets/assets_smash.mp3');\n    this.capy.addEventListener('click', () => {\n      this.game.hit();\n      this.sound.play();\n      this.capyHole.removeChild(this.capy);\n    });\n  }\n  draw() {\n    if (this.game.gameOver) {\n      return;\n    }\n    this.position = randomNum();\n    this.capyHole = document.getElementById(this.position);\n    let empty = false;\n    while (!empty) {\n      empty = true;\n      if (this.capyHole.innerHTML != \"\") {\n        empty = false;\n        this.position = randomNum();\n        this.capyHole = document.getElementById(this.position);\n      }\n    }\n    this.capyHole.appendChild(this.capy);\n  }\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 9);\n  return num.toString();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Capy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXB5LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFFaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFJLENBQUNGLElBQUksQ0FBQ0csR0FBRyxHQUFHLDZCQUE2QjtJQUM3QyxJQUFJLENBQUNILElBQUksQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3BDLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUVuRCxJQUFJLENBQUNQLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDdEMsSUFBSSxDQUFDVCxJQUFJLENBQUNVLEdBQUcsRUFBRTtNQUNmLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxJQUFJLEVBQUU7TUFDakIsSUFBSSxDQUFDQyxRQUFRLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNaLElBQUksQ0FBQztJQUN4QyxDQUFDLENBQUM7RUFFTjtFQUVBYSxJQUFJQSxDQUFBLEVBQUc7SUFFSCxJQUFHLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxRQUFRLEVBQUU7TUFDbkI7SUFDSjtJQUVBLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxTQUFTLEVBQUU7SUFDM0IsSUFBSSxDQUFDTCxRQUFRLEdBQUdWLFFBQVEsQ0FBQ2dCLGNBQWMsQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztJQUV0RCxJQUFJRyxLQUFLLEdBQUcsS0FBSztJQUNqQixPQUFNLENBQUNBLEtBQUssRUFBRTtNQUNWQSxLQUFLLEdBQUcsSUFBSTtNQUNaLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLFNBQVMsSUFBSSxFQUFFLEVBQUU7UUFDL0JELEtBQUssR0FBRyxLQUFLO1FBQ2IsSUFBSSxDQUFDSCxRQUFRLEdBQUdDLFNBQVMsRUFBRTtRQUMzQixJQUFJLENBQUNMLFFBQVEsR0FBR1YsUUFBUSxDQUFDZ0IsY0FBYyxDQUFDLElBQUksQ0FBQ0YsUUFBUSxDQUFDO01BQzFEO0lBQ0o7SUFFQSxJQUFJLENBQUNKLFFBQVEsQ0FBQ1MsV0FBVyxDQUFDLElBQUksQ0FBQ3BCLElBQUksQ0FBQztFQUN4QztBQUNKO0FBRUEsU0FBU2dCLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJSyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2QyxPQUFPSCxHQUFHLENBQUNJLFFBQVEsRUFBRTtBQUN6QjtBQUVBLCtEQUFlNUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9jYXB5LmpzPzA4MTIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FweSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FweSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5jYXB5LnNyYyA9ICcuL2Fzc2V0cy9jbGVhci1jYXB5YmFyYS5wbmcnO1xyXG4gICAgICAgIHRoaXMuY2FweS5jbGFzc0xpc3QuYWRkKCdjaGFyYWN0ZXInKTtcclxuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9hc3NldHNfc21hc2gubXAzJylcclxuXHJcbiAgICAgICAgdGhpcy5jYXB5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaGl0KClcclxuICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KClcclxuICAgICAgICAgICAgdGhpcy5jYXB5SG9sZS5yZW1vdmVDaGlsZCh0aGlzLmNhcHkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5nYW1lLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHJhbmRvbU51bSgpXHJcbiAgICAgICAgdGhpcy5jYXB5SG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBsZXQgZW1wdHkgPSBmYWxzZVxyXG4gICAgICAgIHdoaWxlKCFlbXB0eSkge1xyXG4gICAgICAgICAgICBlbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcHlIb2xlLmlubmVySFRNTCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHJhbmRvbU51bSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB5SG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FweUhvbGUuYXBwZW5kQ2hpbGQodGhpcy5jYXB5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKCkge1xyXG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xyXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXB5OyJdLCJuYW1lcyI6WyJDYXB5IiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY2FweSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsInNvdW5kIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiaGl0IiwicGxheSIsImNhcHlIb2xlIiwicmVtb3ZlQ2hpbGQiLCJkcmF3IiwiZ2FtZU92ZXIiLCJwb3NpdGlvbiIsInJhbmRvbU51bSIsImdldEVsZW1lbnRCeUlkIiwiZW1wdHkiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/capy.js\n");

/***/ }),

/***/ "./src/scripts/farmer.js":
/*!*******************************!*\
  !*** ./src/scripts/farmer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Farmer {\n  constructor(game) {\n    this.game = game;\n    this.farmer = document.createElement(\"img\");\n    this.farmer.id = \"farmer\";\n    this.farmer.src = './assets/transparent_farmer.png';\n    this.farmer.classList.add('character');\n    this.farmer.addEventListener('click', () => {\n      this.game.gameOver = true;\n      if (this.game.gameOver) {\n        let gameOverScreen = document.getElementById(\"game-over-screen\");\n        gameOverScreen.style.display = 'block';\n        let board = document.getElementById(\"board\");\n        board.style.display = \"none\";\n        this.game.bindRestart();\n      }\n    });\n  }\n  draw() {\n    if (this.game.gameOver) {\n      return;\n    }\n    this.position = randomNum();\n    this.farmerHole = document.getElementById(this.position);\n    let empty = false;\n    while (!empty) {\n      empty = true;\n      if (this.farmerHole.innerHTML != \"\") {\n        empty = false;\n        this.position = randomNum();\n        this.farmerHole = document.getElementById(this.position);\n      }\n    }\n    this.farmerHole.appendChild(this.farmer);\n  }\n}\nfunction randomNum() {\n  let num = Math.floor(Math.random() * 9);\n  return num.toString();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Farmer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mYXJtZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUU7SUFDZCxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUVoQixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxFQUFFLEdBQUcsUUFBUTtJQUN6QixJQUFJLENBQUNILE1BQU0sQ0FBQ0ksR0FBRyxHQUFHLGlDQUFpQztJQUNuRCxJQUFJLENBQUNKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRXRDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN4QyxJQUFJLENBQUNSLElBQUksQ0FBQ1MsUUFBUSxHQUFHLElBQUk7TUFFekIsSUFBRyxJQUFJLENBQUNULElBQUksQ0FBQ1MsUUFBUSxFQUFFO1FBQ25CLElBQUlDLGNBQWMsR0FBR1IsUUFBUSxDQUFDUyxjQUFjLENBQUMsa0JBQWtCLENBQUM7UUFDaEVELGNBQWMsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztRQUN0QyxJQUFJQyxLQUFLLEdBQUdaLFFBQVEsQ0FBQ1MsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUM1Q0csS0FBSyxDQUFDRixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQzVCLElBQUksQ0FBQ2IsSUFBSSxDQUFDZSxXQUFXLEVBQUU7TUFDM0I7SUFDSixDQUFDLENBQUM7RUFDTjtFQUlBQyxJQUFJQSxDQUFBLEVBQUc7SUFFSCxJQUFHLElBQUksQ0FBQ2hCLElBQUksQ0FBQ1MsUUFBUSxFQUFFO01BQ25CO0lBQ0o7SUFFQSxJQUFJLENBQUNRLFFBQVEsR0FBR0MsU0FBUyxFQUFFO0lBQzNCLElBQUksQ0FBQ0MsVUFBVSxHQUFHakIsUUFBUSxDQUFDUyxjQUFjLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUM7SUFFeEQsSUFBSUcsS0FBSyxHQUFHLEtBQUs7SUFDakIsT0FBTSxDQUFDQSxLQUFLLEVBQUU7TUFDVkEsS0FBSyxHQUFHLElBQUk7TUFDWixJQUFJLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxTQUFTLElBQUksRUFBRSxFQUFFO1FBQ2pDRCxLQUFLLEdBQUcsS0FBSztRQUNiLElBQUksQ0FBQ0gsUUFBUSxHQUFHQyxTQUFTLEVBQUU7UUFDM0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdqQixRQUFRLENBQUNTLGNBQWMsQ0FBQyxJQUFJLENBQUNNLFFBQVEsQ0FBQztNQUM1RDtJQUNKO0lBRUEsSUFBSSxDQUFDRSxVQUFVLENBQUNHLFdBQVcsQ0FBQyxJQUFJLENBQUNyQixNQUFNLENBQUM7RUFFNUM7QUFHSjtBQUdBLFNBQVNpQixTQUFTQSxDQUFBLEVBQUc7RUFDakIsSUFBSUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBT0gsR0FBRyxDQUFDSSxRQUFRLEVBQUU7QUFDekI7QUFLQSwrREFBZTdCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZmFybWVyLmpzP2M4MTMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmFybWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXHJcblxyXG4gICAgICAgIHRoaXMuZmFybWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICB0aGlzLmZhcm1lci5pZCA9IFwiZmFybWVyXCI7XHJcbiAgICAgICAgdGhpcy5mYXJtZXIuc3JjID0gJy4vYXNzZXRzL3RyYW5zcGFyZW50X2Zhcm1lci5wbmcnO1xyXG4gICAgICAgIHRoaXMuZmFybWVyLmNsYXNzTGlzdC5hZGQoJ2NoYXJhY3RlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmZhcm1lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW92ZXItc2NyZWVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmJpbmRSZXN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgZHJhdygpIHtcclxuICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSByYW5kb21OdW0oKVxyXG4gICAgICAgIHRoaXMuZmFybWVySG9sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBsZXQgZW1wdHkgPSBmYWxzZVxyXG4gICAgICAgIHdoaWxlKCFlbXB0eSkge1xyXG4gICAgICAgICAgICBlbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZhcm1lckhvbGUuaW5uZXJIVE1MICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gcmFuZG9tTnVtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhcm1lckhvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mYXJtZXJIb2xlLmFwcGVuZENoaWxkKHRoaXMuZmFybWVyKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByYW5kb21OdW0oKSB7XHJcbiAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XHJcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcm1lcjsiXSwibmFtZXMiOlsiRmFybWVyIiwiY29uc3RydWN0b3IiLCJnYW1lIiwiZmFybWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZU92ZXIiLCJnYW1lT3ZlclNjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9hcmQiLCJiaW5kUmVzdGFydCIsImRyYXciLCJwb3NpdGlvbiIsInJhbmRvbU51bSIsImZhcm1lckhvbGUiLCJlbXB0eSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/farmer.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _capy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capy */ \"./src/scripts/capy.js\");\n/* harmony import */ var _farmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer */ \"./src/scripts/farmer.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.capy1 = new _capy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.capy2 = new _capy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.capy3 = new _capy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.farmer1 = new _farmer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.farmer2 = new _farmer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    setInterval(() => {\n      this.farmer1.draw();\n    }, randomNum(800, 2000));\n    setInterval(() => {\n      this.farmer2.draw();\n    }, randomNum(800, 2000));\n    setInterval(() => {\n      this.capy1.draw();\n    }, randomNum(800, 2000));\n    setInterval(() => {\n      this.capy2.draw();\n    }, randomNum(800, 2000));\n    setInterval(() => {\n      this.capy3.draw();\n    }, randomNum(800, 2000));\n    setInterval(() => {\n      this.incrementTimer();\n    }, 1000);\n    this.score = 0;\n    this.gameOver = false;\n    this.timer = 60;\n  }\n  hit() {\n    this.score += 10;\n    document.getElementById(\"score\").innerText = this.score.toString();\n  }\n  incrementTimer() {\n    document.getElementById(\"timer\").innerText = this.timer.toString();\n    this.timer -= 1;\n    if (this.timer == -1) {\n      this.gameOver = true;\n    }\n    if (this.gameOver) {\n      let gameOverScreen = document.getElementById(\"game-over-screen\");\n      gameOverScreen.style.display = 'block';\n      let board = document.getElementById(\"board\");\n      board.style.display = \"none\";\n      this.timer = 0;\n      clearInterval(() => {\n        this.incrementTimer();\n      }, 1000);\n      this.bindRestart();\n    }\n  }\n\n  // showInstructions() {\n  //     let startScreen = document.getElementById(\"start-screen\");\n  //     startScreen.style.display = 'block';\n  // }\n\n  restart() {\n    this.score = 0;\n    document.getElementById(\"score\").innerText = this.score.toString();\n    this.gameOver = false;\n    let board = document.getElementById(\"board\");\n    board.style.display = \"flex\";\n    let gameOverScreen = document.getElementById(\"game-over-screen\");\n    gameOverScreen.style.display = 'none';\n    this.timer = 60;\n  }\n  bindRestart() {\n    this.gameOverButton = document.getElementById('game-over-button');\n    this.gameOverButton.addEventListener('click', this.restart.bind(this));\n    this.instructionsScreen = document.getElementById('instructions-screen');\n    this.instructionsScreen.style.display = 'none';\n    // this.startButton = document.getElementById('start-button')\n    // this.startButton.addEventListener('click', this.restart.bind(this))\n  }\n}\n\nfunction randomNum(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFO0VBQ3pCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxJQUFJSCxHQUFHLEdBQUNELEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBR0EsR0FBRyxDQUFDO0FBRTFEO0FBRUEsK0RBQWU5QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCdcclxuaW1wb3J0IENhcHkgZnJvbSAnLi9jYXB5J1xyXG5pbXBvcnQgRmFybWVyIGZyb20gJy4vZmFybWVyJ1xyXG5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYXB5MSA9IG5ldyBDYXB5KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FweTIgPSBuZXcgQ2FweSh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhcHkzID0gbmV3IENhcHkodGhpcylcclxuICAgICAgICB0aGlzLmZhcm1lcjEgPSBuZXcgRmFybWVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmFybWVyMiA9IG5ldyBGYXJtZXIodGhpcyk7XHJcblxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFybWVyMS5kcmF3KCk7XHJcbiAgICAgICAgfSwgcmFuZG9tTnVtKDgwMCwyMDAwKSk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYXJtZXIyLmRyYXcoKTtcclxuICAgICAgICB9LCByYW5kb21OdW0oODAwLDIwMDApKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHkxLmRyYXcoKTtcclxuICAgICAgICB9LCByYW5kb21OdW0oODAwLDIwMDApKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHkyLmRyYXcoKTtcclxuICAgICAgICB9LCByYW5kb21OdW0oODAwLDIwMDApKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHkzLmRyYXcoKTtcclxuICAgICAgICB9LCByYW5kb21OdW0oODAwLDIwMDApKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudFRpbWVyKCk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSA2MFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDEwO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIikuaW5uZXJUZXh0ID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudFRpbWVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIikuaW5uZXJUZXh0ID0gdGhpcy50aW1lci50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50aW1lciAtPSAxXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgbGV0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW92ZXItc2NyZWVuXCIpO1xyXG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcclxuICAgICAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMFxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50VGltZXIoKTtcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgdGhpcy5iaW5kUmVzdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gc2hvd0luc3RydWN0aW9ucygpIHtcclxuICAgIC8vICAgICBsZXQgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LXNjcmVlblwiKTtcclxuICAgIC8vICAgICBzdGFydFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lclRleHQgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XHJcbiAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1vdmVyLXNjcmVlblwiKTtcclxuICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSA2MFxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZXN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyLWJ1dHRvbicpXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RydWN0aW9ucy1zY3JlZW4nKVxyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKVxyXG4gICAgICAgIC8vIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RhcnQuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bShtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluICsgMSkgKyBtaW4pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiQm9hcmQiLCJDYXB5IiwiRmFybWVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiYm9hcmQiLCJjYXB5MSIsImNhcHkyIiwiY2FweTMiLCJmYXJtZXIxIiwiZmFybWVyMiIsInNldEludGVydmFsIiwiZHJhdyIsInJhbmRvbU51bSIsImluY3JlbWVudFRpbWVyIiwic2NvcmUiLCJnYW1lT3ZlciIsInRpbWVyIiwiaGl0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsInRvU3RyaW5nIiwiZ2FtZU92ZXJTY3JlZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjbGVhckludGVydmFsIiwiYmluZFJlc3RhcnQiLCJyZXN0YXJ0IiwiZ2FtZU92ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImluc3RydWN0aW9uc1NjcmVlbiIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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