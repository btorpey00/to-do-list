/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/modules/newTaskModule.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTaskModule)
/* harmony export */ });
function renderTaskModule() {
    let testTask;
    const newTaskModule = document.createElement('div');
    newTaskModule.className = 'new-task-module';
    // mainContainer.appendChild(newTaskModule);

    const newTitleInput = document.createElement('input');
    newTitleInput.setAttribute('type', 'text');
    newTitleInput.id = 'new-title';
    const newTitleLabel = document.createElement('label');
    newTitleLabel.setAttribute('for', 'new-title');
    newTitleLabel.innerText = 'Task';
    newTaskModule.appendChild(newTitleLabel);
    newTaskModule.appendChild(newTitleInput);

    const newDetailsInput = document.createElement('textarea');
    newDetailsInput.setAttribute('rows', '5');
    newDetailsInput.id = 'new-details';
    const newDetailsLabel = document.createElement('label');
    newDetailsLabel.setAttribute('for', 'new-details');
    newDetailsLabel.innerText = 'Details';
    newTaskModule.appendChild(newDetailsLabel);
    newTaskModule.appendChild(newDetailsInput);

    const newDueDateInput = document.createElement('input');
    newDueDateInput.setAttribute('type', 'date');
    newDueDateInput.id = 'new-due-date';
    const newDueDateLabel = document.createElement('label');
    newDueDateLabel.setAttribute('for', 'new-due-date');
    newDueDateLabel.innerText = 'Due Date';
    newTaskModule.appendChild(newDueDateLabel);
    newTaskModule.appendChild(newDueDateInput);

    const newPriorityInput = document.createElement('select');
    newPriorityInput.id = 'new-priority';
    const newPriorityLabel = document.createElement('label');
    newPriorityLabel.setAttribute('for', 'new-priority');
    newPriorityLabel.innerText = 'Priority';
    const newPriorityLow = document.createElement('option');
    newPriorityLow.value = 'low';
    newPriorityLow.textContent = 'Low';
    const newPriorityMedium = document.createElement('option');
    newPriorityMedium.value = 'medium';
    newPriorityMedium.textContent = 'Medium';
    const newPriorityHigh = document.createElement('option');
    newPriorityHigh.value = 'high';
    newPriorityHigh.textContent = 'High';
    newPriorityInput.appendChild(newPriorityLow);
    newPriorityInput.appendChild(newPriorityMedium);
    newPriorityInput.appendChild(newPriorityHigh);
    newTaskModule.appendChild(newPriorityLabel);
    newTaskModule.appendChild(newPriorityInput);

    const newProjectInput = document.createElement('input');
    newProjectInput.setAttribute('type', 'text');
    newProjectInput.id = 'new-project';
    const newProjectLabel = document.createElement('label');
    newProjectLabel.setAttribute('for', 'new-project');
    newProjectLabel.innerText = 'Project';
    newTaskModule.appendChild(newProjectLabel);
    newTaskModule.appendChild(newProjectInput);

    const newTaskCancel = document.createElement('button');
    newTaskCancel.id = ('new-task-cancel');
    newTaskCancel.innerText = 'Cancel';
    newTaskModule.appendChild(newTaskCancel);

    const newTaskAccept = document.createElement('button');
    newTaskAccept.id = ('new-task-accept');
    newTaskAccept.innerText = 'Add Task';
    newTaskModule.appendChild(newTaskAccept);

document.body.appendChild(newTaskModule);

return newTaskModule;

}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3VGFza01vZHVsZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL25ld1Rhc2tNb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrTW9kdWxlKCkge1xuICAgIGxldCB0ZXN0VGFzaztcbiAgICBjb25zdCBuZXdUYXNrTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza01vZHVsZS5jbGFzc05hbWUgPSAnbmV3LXRhc2stbW9kdWxlJztcbiAgICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tNb2R1bGUpO1xuXG4gICAgY29uc3QgbmV3VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1RpdGxlSW5wdXQuaWQgPSAnbmV3LXRpdGxlJztcbiAgICBjb25zdCBuZXdUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy10aXRsZScpO1xuICAgIG5ld1RpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3VGl0bGVMYWJlbCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUaXRsZUlucHV0KTtcblxuICAgIGNvbnN0IG5ld0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbmV3RGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc1Jyk7XG4gICAgbmV3RGV0YWlsc0lucHV0LmlkID0gJ25ldy1kZXRhaWxzJztcbiAgICBjb25zdCBuZXdEZXRhaWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld0RldGFpbHNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctZGV0YWlscycpO1xuICAgIG5ld0RldGFpbHNMYWJlbC5pbm5lclRleHQgPSAnRGV0YWlscyc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdEZXRhaWxzTGFiZWwpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RGV0YWlsc0lucHV0KTtcblxuICAgIGNvbnN0IG5ld0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3RHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgbmV3RHVlRGF0ZUlucHV0LmlkID0gJ25ldy1kdWUtZGF0ZSc7XG4gICAgY29uc3QgbmV3RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWR1ZS1kYXRlJyk7XG4gICAgbmV3RHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlTGFiZWwpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IG5ld1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmlkID0gJ25ldy1wcmlvcml0eSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctcHJpb3JpdHknKTtcbiAgICBuZXdQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdQcmlvcml0eUxvdy52YWx1ZSA9ICdsb3cnO1xuICAgIG5ld1ByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdQcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIG5ld1ByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3UHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgIG5ld1ByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5TG93KTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5TWVkaXVtKTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5SGlnaCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUxhYmVsKTtcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5SW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuaWQgPSAnbmV3LXByb2plY3QnO1xuICAgIGNvbnN0IG5ld1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1wcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgbmV3VGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWwuaWQgPSAoJ25ldy10YXNrLWNhbmNlbCcpO1xuICAgIG5ld1Rhc2tDYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FuY2VsKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tBY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlkID0gKCduZXctdGFzay1hY2NlcHQnKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUYXNrQWNjZXB0KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdUYXNrTW9kdWxlKTtcblxucmV0dXJuIG5ld1Rhc2tNb2R1bGU7XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==