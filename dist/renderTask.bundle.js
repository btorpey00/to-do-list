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
/*!************************************!*\
  !*** ./src/modules/renderTasks.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTasks)
/* harmony export */ });
const taskListContainer = document.createElement('ul');

function renderTasks(taskArray) {
    
    taskListContainer.innerText = '';
    
        for (let i = 0; i < taskArray.length; i++) {
        let currentTask = document.createElement('li');
        currentTask.className = 'task-list-item';
        taskListContainer.appendChild(currentTask);

        const markComplete = document.createElement('input');
        markComplete.setAttribute('type', 'checkbox');
        markComplete.className = 'complete-checkbox';
        currentTask.appendChild(markComplete);

        markComplete.addEventListener ('change', function () {
            currentTask.classList.toggle('completed-task');
            taskArray[i].isComplete = !taskArray[i].isComplete;
            console.log(taskArray[i].isComplete);
        });
        if (taskArray[i].isComplete === true) {
            currentTask.classList.toggle('completed-task');
            markComplete.checked = true;
        }
        
        const currentTitle = document.createElement('div');
        currentTitle.innerText = taskArray[i].title;
        currentTask.appendChild(currentTitle);

        // const currentDetails = document.createElement('div');
        // currentDetails.innerText = taskArray[i].details;
        // currentTask.appendChild(currentDetails);

        const currentDueDate = document.createElement('div');
        currentDueDate.innerText = taskArray[i].dueDate;
        currentTask.appendChild(currentDueDate);

        const currentPriority = document.createElement('div');
        currentPriority.innerText = taskArray[i].priority;
        currentTask.appendChild(currentPriority);

        const editTask = document.createElement('div');
        editTask.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editTask.setAttribute('title', 'Edit');
        currentTask.appendChild(editTask);
        editTask.addEventListener('click', function() {
            console.log('edit ' + taskArray[i].title);
        });

        const deleteTask = document.createElement('div');
        deleteTask.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        deleteTask.setAttribute('title', 'Delete');
        deleteTask.classList = 'delete-buttons';
        currentTask.appendChild(deleteTask);
        deleteTask.addEventListener('click', function() {
            taskArray.splice(i, 1);
            // deleteTask.closest('li').remove();
            console.table(taskArray);
            // taskListContainer.parentElement.textContent = '';
            renderTasks(taskArray);
        });

        // const currentProject = document.createElement('div');
        // currentProject.innerText = taskArray[i].project;
        // currentTask.appendChild(currentProject);
    }

    return taskListContainer;

};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyVGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKHRhc2tBcnJheSkge1xuICAgIFxuICAgIHRhc2tMaXN0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjdXJyZW50VGFzay5jbGFzc05hbWUgPSAndGFzay1saXN0LWl0ZW0nO1xuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGFzayk7XG5cbiAgICAgICAgY29uc3QgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbWFya0NvbXBsZXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWNoZWNrYm94JztcbiAgICAgICAgY3VycmVudFRhc2suYXBwZW5kQ2hpbGQobWFya0NvbXBsZXRlKTtcblxuICAgICAgICBtYXJrQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lciAoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10YXNrJyk7XG4gICAgICAgICAgICB0YXNrQXJyYXlbaV0uaXNDb21wbGV0ZSA9ICF0YXNrQXJyYXlbaV0uaXNDb21wbGV0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheVtpXS5pc0NvbXBsZXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0YXNrQXJyYXlbaV0uaXNDb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY3VycmVudFRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkLXRhc2snKTtcbiAgICAgICAgICAgIG1hcmtDb21wbGV0ZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGN1cnJlbnRUaXRsZS5pbm5lclRleHQgPSB0YXNrQXJyYXlbaV0udGl0bGU7XG4gICAgICAgIGN1cnJlbnRUYXNrLmFwcGVuZENoaWxkKGN1cnJlbnRUaXRsZSk7XG5cbiAgICAgICAgLy8gY29uc3QgY3VycmVudERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gY3VycmVudERldGFpbHMuaW5uZXJUZXh0ID0gdGFza0FycmF5W2ldLmRldGFpbHM7XG4gICAgICAgIC8vIGN1cnJlbnRUYXNrLmFwcGVuZENoaWxkKGN1cnJlbnREZXRhaWxzKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50RHVlRGF0ZS5pbm5lclRleHQgPSB0YXNrQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICAgICAgY3VycmVudFRhc2suYXBwZW5kQ2hpbGQoY3VycmVudER1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFza0FycmF5W2ldLnByaW9yaXR5O1xuICAgICAgICBjdXJyZW50VGFzay5hcHBlbmRDaGlsZChjdXJyZW50UHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRUYXNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT4nO1xuICAgICAgICBlZGl0VGFzay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0VkaXQnKTtcbiAgICAgICAgY3VycmVudFRhc2suYXBwZW5kQ2hpbGQoZWRpdFRhc2spO1xuICAgICAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXQgJyArIHRhc2tBcnJheVtpXS50aXRsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlVGFzay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiPjwvaT4nO1xuICAgICAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRGVsZXRlJyk7XG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0ID0gJ2RlbGV0ZS1idXR0b25zJztcbiAgICAgICAgY3VycmVudFRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgICAgIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBkZWxldGVUYXNrLmNsb3Nlc3QoJ2xpJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKHRhc2tBcnJheSk7XG4gICAgICAgICAgICAvLyB0YXNrTGlzdENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyh0YXNrQXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBjdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSB0YXNrQXJyYXlbaV0ucHJvamVjdDtcbiAgICAgICAgLy8gY3VycmVudFRhc2suYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==