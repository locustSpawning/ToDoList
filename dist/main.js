/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





class Project {

  static createNewProjectAction(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].style.display = 'flex';
    addProjectPopup.style.display = 'none';
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");



console.log('🦄')
var buttonAddProject;
var addProjectPopup;
var cancelProjectButton;
var createNewProjectButton;
var allProjects;
var mainScreen;
var projectList; 

// LOADING CONTENT . . Making buttons work

window.addEventListener('load', (event)=> {
    //projects panel variables
  buttonAddProject = document.getElementById('button-add-project');
  addProjectPopup = document.getElementById('add-project-popup');
  cancelProjectButton = document.getElementById('button-cancel-project-popup');
  createNewProjectButton = document.getElementById('button-add-project-popup');
  projectList = document.getElementById('projects-list')

    //all projects section variables
  allProjects = document.getElementById('button-all-projects');
  mainScreen = document.getElementById('project-preview');


    //event listeners
  buttonAddProject.addEventListener('click', function(){
    buttonAddProject.style.display = 'none';
    addProjectPopup.style.display = 'block';
  });

  cancelProjectButton.addEventListener('click', function(){
    buttonAddProject.style.display = 'flex';
    addProjectPopup.style.display = 'none';
  })

  createNewProjectButton.addEventListener('click', function(){
    _Project__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProjectAction(); //still have to write
  })

  allProjects.addEventListener('click', function(){
    loadAllScreen(); // still have to write this
  })
});


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDOUI7QUFDUzs7O0FBRzNCOztBQUVmO0FBQ0EsSUFBSSxpREFBZ0I7QUFDcEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYK0I7OztBQUcvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLGdEQUFPLDJCQUEyQjtBQUN0QyxHQUFHOztBQUVIO0FBQ0EscUJBQXFCO0FBQ3JCLEdBQUc7QUFDSCxDQUFDOzs7Ozs7O1VDN0NEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGJ1dHRvbkFkZFByb2plY3QgZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG5cbiAgc3RhdGljIGNyZWF0ZU5ld1Byb2plY3RBY3Rpb24oKXtcbiAgICBidXR0b25BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgYWRkUHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnXG5cblxuY29uc29sZS5sb2coJ/CfpoQnKVxudmFyIGJ1dHRvbkFkZFByb2plY3Q7XG52YXIgYWRkUHJvamVjdFBvcHVwO1xudmFyIGNhbmNlbFByb2plY3RCdXR0b247XG52YXIgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbjtcbnZhciBhbGxQcm9qZWN0cztcbnZhciBtYWluU2NyZWVuO1xudmFyIHByb2plY3RMaXN0OyBcblxuLy8gTE9BRElORyBDT05URU5UIC4gLiBNYWtpbmcgYnV0dG9ucyB3b3JrXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KT0+IHtcbiAgICAvL3Byb2plY3RzIHBhbmVsIHZhcmlhYmxlc1xuICBidXR0b25BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQtcHJvamVjdCcpO1xuICBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY2FuY2VsLXByb2plY3QtcG9wdXAnKTtcbiAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpXG5cbiAgICAvL2FsbCBwcm9qZWN0cyBzZWN0aW9uIHZhcmlhYmxlc1xuICBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tYWxsLXByb2plY3RzJyk7XG4gIG1haW5TY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1wcmV2aWV3Jyk7XG5cblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzXG4gIGJ1dHRvbkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGJ1dHRvbkFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xuXG4gIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGJ1dHRvbkFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSlcblxuICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBQcm9qZWN0LmNyZWF0ZU5ld1Byb2plY3RBY3Rpb24oKTsgLy9zdGlsbCBoYXZlIHRvIHdyaXRlXG4gIH0pXG5cbiAgYWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGxvYWRBbGxTY3JlZW4oKTsgLy8gc3RpbGwgaGF2ZSB0byB3cml0ZSB0aGlzXG4gIH0pXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=