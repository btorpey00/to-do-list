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
    newTaskModule.className = 'new-test-module';
    // mainContainer.appendChild(newTaskModule);

    const newTitleInput = document.createElement('input');
    newTitleInput.setAttribute('type', 'text');
    newTitleInput.id = 'new-title';
    const newTitleLabel = document.createElement('label');
    newTitleLabel.setAttribute('for', 'new-title');
    newTitleLabel.innerText = 'Task';
    newTaskModule.appendChild(newTitleLabel);
    newTaskModule.appendChild(newTitleInput);

    const newDetailsInput = document.createElement('input');
    newDetailsInput.setAttribute('type', 'textarea');
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

    const newTaskAccept = document.createElement('button');
    newTaskAccept.id = ('new-task-accept');
    newTaskAccept.innerText = 'OK';
    newTaskModule.appendChild(newTaskAccept)
//     newTaskAccept.addEventListener('click', function(){
//         testTask = NewTask(newPriorityInput.value, newDetailsInput.value, newDueDateInput.value, newPriorityInput.value, newProjectInput.value, false);
//         console.log(testTask);
//         return testTask;
// });
document.body.appendChild(newTaskModule);

return newTaskModule;

    
}

// const NewTask = (title, details, dueDate, priority, project, isComplete) => {

//     return {
//         title,
//         details,
//         dueDate,
//         priority,
//         project
//     };
// }

// function createNewTask() {
//     renderTaskModule();
//     console.log(testTask);
//     return testTask;
    // let testTask = NewTask(newPriorityInput.value, newDetailsInput.value, newDueDateInput.value, newPriorityInput.value, newProjectInput.value, false);
    // console.log(testTask);
    // return testTask;


// return testTask;

// }
// let testTask = NewTask('test', 'testing', 'someday', 'high', 'none', false);

// export default testTask;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3VGFza01vZHVsZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUEsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL25ld1Rhc2tNb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrTW9kdWxlKCkge1xuICAgIGxldCB0ZXN0VGFzaztcbiAgICBjb25zdCBuZXdUYXNrTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza01vZHVsZS5jbGFzc05hbWUgPSAnbmV3LXRlc3QtbW9kdWxlJztcbiAgICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tNb2R1bGUpO1xuXG4gICAgY29uc3QgbmV3VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld1RpdGxlSW5wdXQuaWQgPSAnbmV3LXRpdGxlJztcbiAgICBjb25zdCBuZXdUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy10aXRsZScpO1xuICAgIG5ld1RpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3VGl0bGVMYWJlbCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUaXRsZUlucHV0KTtcblxuICAgIGNvbnN0IG5ld0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3RGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0YXJlYScpO1xuICAgIG5ld0RldGFpbHNJbnB1dC5pZCA9ICduZXctZGV0YWlscyc7XG4gICAgY29uc3QgbmV3RGV0YWlsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdEZXRhaWxzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWRldGFpbHMnKTtcbiAgICBuZXdEZXRhaWxzTGFiZWwuaW5uZXJUZXh0ID0gJ0RldGFpbHMnO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RGV0YWlsc0xhYmVsKTtcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld0RldGFpbHNJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIG5ld0R1ZURhdGVJbnB1dC5pZCA9ICduZXctZHVlLWRhdGUnO1xuICAgIGNvbnN0IG5ld0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmV3RHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1kdWUtZGF0ZScpO1xuICAgIG5ld0R1ZURhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGUnO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZUxhYmVsKTtcbiAgICBuZXdUYXNrTW9kdWxlLmFwcGVuZENoaWxkKG5ld0R1ZURhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbmV3UHJpb3JpdHlJbnB1dC5pZCA9ICduZXctcHJpb3JpdHknO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LXByaW9yaXR5Jyk7XG4gICAgbmV3UHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3UHJpb3JpdHlMb3cudmFsdWUgPSAnbG93JztcbiAgICBuZXdQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbmV3UHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcbiAgICBuZXdQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5ld1ByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJztcbiAgICBuZXdQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgbmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUxvdyk7XG4gICAgbmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eU1lZGl1bSk7XG4gICAgbmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUhpZ2gpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHlMYWJlbCk7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3UHJvamVjdElucHV0LmlkID0gJ25ldy1wcm9qZWN0JztcbiAgICBjb25zdCBuZXdQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1Byb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3RMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGFiZWwpO1xuICAgIG5ld1Rhc2tNb2R1bGUuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tBY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlkID0gKCduZXctdGFzay1hY2NlcHQnKTtcbiAgICBuZXdUYXNrQWNjZXB0LmlubmVyVGV4dCA9ICdPSyc7XG4gICAgbmV3VGFza01vZHVsZS5hcHBlbmRDaGlsZChuZXdUYXNrQWNjZXB0KVxuLy8gICAgIG5ld1Rhc2tBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICB0ZXN0VGFzayA9IE5ld1Rhc2sobmV3UHJpb3JpdHlJbnB1dC52YWx1ZSwgbmV3RGV0YWlsc0lucHV0LnZhbHVlLCBuZXdEdWVEYXRlSW5wdXQudmFsdWUsIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUsIG5ld1Byb2plY3RJbnB1dC52YWx1ZSwgZmFsc2UpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh0ZXN0VGFzayk7XG4vLyAgICAgICAgIHJldHVybiB0ZXN0VGFzaztcbi8vIH0pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdUYXNrTW9kdWxlKTtcblxucmV0dXJuIG5ld1Rhc2tNb2R1bGU7XG5cbiAgICBcbn1cblxuLy8gY29uc3QgTmV3VGFzayA9ICh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGlzQ29tcGxldGUpID0+IHtcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHRpdGxlLFxuLy8gICAgICAgICBkZXRhaWxzLFxuLy8gICAgICAgICBkdWVEYXRlLFxuLy8gICAgICAgICBwcmlvcml0eSxcbi8vICAgICAgICAgcHJvamVjdFxuLy8gICAgIH07XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4vLyAgICAgcmVuZGVyVGFza01vZHVsZSgpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRlc3RUYXNrKTtcbi8vICAgICByZXR1cm4gdGVzdFRhc2s7XG4gICAgLy8gbGV0IHRlc3RUYXNrID0gTmV3VGFzayhuZXdQcmlvcml0eUlucHV0LnZhbHVlLCBuZXdEZXRhaWxzSW5wdXQudmFsdWUsIG5ld0R1ZURhdGVJbnB1dC52YWx1ZSwgbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSwgbmV3UHJvamVjdElucHV0LnZhbHVlLCBmYWxzZSk7XG4gICAgLy8gY29uc29sZS5sb2codGVzdFRhc2spO1xuICAgIC8vIHJldHVybiB0ZXN0VGFzaztcblxuXG4vLyByZXR1cm4gdGVzdFRhc2s7XG5cbi8vIH1cbi8vIGxldCB0ZXN0VGFzayA9IE5ld1Rhc2soJ3Rlc3QnLCAndGVzdGluZycsICdzb21lZGF5JywgJ2hpZ2gnLCAnbm9uZScsIGZhbHNlKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgdGVzdFRhc2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9