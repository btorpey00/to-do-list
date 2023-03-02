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
    newTitleInput.required = true;
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
    newDueDateInput.required = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3VGFza01vZHVsZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9uZXdUYXNrTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza01vZHVsZSgpIHtcbiAgICBsZXQgdGVzdFRhc2s7XG4gICAgY29uc3QgbmV3VGFza01vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tNb2R1bGUuY2xhc3NOYW1lID0gJ25ldy10YXNrLW1vZHVsZSc7XG4gICAgLy8gbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrTW9kdWxlKTtcblxuICAgIGNvbnN0IG5ld1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdUaXRsZUlucHV0LmlkID0gJ25ldy10aXRsZSc7XG4gICAgbmV3VGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgbmV3VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctdGl0bGUnKTtcbiAgICBuZXdUaXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUYXNrJztcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld1RpdGxlTGFiZWwpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3VGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG5ld0RldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xuICAgIG5ld0RldGFpbHNJbnB1dC5pZCA9ICduZXctZGV0YWlscyc7XG4gICAgY29uc3QgbmV3RGV0YWlsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdEZXRhaWxzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWRldGFpbHMnKTtcbiAgICBuZXdEZXRhaWxzTGFiZWwuaW5uZXJUZXh0ID0gJ0RldGFpbHMnO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RGV0YWlsc0xhYmVsKTtcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld0RldGFpbHNJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIG5ld0R1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgbmV3RHVlRGF0ZUlucHV0LmlkID0gJ25ldy1kdWUtZGF0ZSc7XG4gICAgY29uc3QgbmV3RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWR1ZS1kYXRlJyk7XG4gICAgbmV3RHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlTGFiZWwpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IG5ld1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmlkID0gJ25ldy1wcmlvcml0eSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctcHJpb3JpdHknKTtcbiAgICBuZXdQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdQcmlvcml0eUxvdy52YWx1ZSA9ICdsb3cnO1xuICAgIG5ld1ByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBuZXdQcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIG5ld1ByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgY29uc3QgbmV3UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3UHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICAgIG5ld1ByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5TG93KTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5TWVkaXVtKTtcbiAgICBuZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5SGlnaCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUxhYmVsKTtcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5SW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuaWQgPSAnbmV3LXByb2plY3QnO1xuICAgIGNvbnN0IG5ld1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1wcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgbmV3VGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tDYW5jZWwuaWQgPSAoJ25ldy10YXNrLWNhbmNlbCcpO1xuICAgIG5ld1Rhc2tDYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUYXNrQ2FuY2VsKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tBY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlkID0gKCduZXctdGFzay1hY2NlcHQnKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUYXNrQWNjZXB0KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdUYXNrTW9kdWxlKTtcblxucmV0dXJuIG5ld1Rhc2tNb2R1bGU7XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==