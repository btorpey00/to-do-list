import {compareAsc, format, isToday, isThisWeek } from 'date-fns';
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import testTask from './modules/newTask.js';
import renderTasks from './modules/renderTasks.js';


const testDiv = document.createElement('div');
document.body.appendChild(testDiv);

const testIcon = document.createElement('i');
testIcon.classList = 'fa-solid fa-check';
testDiv.appendChild(testIcon);

const taskListDiv = document.createElement('div');
document.body.appendChild(taskListDiv);


testDiv.addEventListener('click', function () {
    allTasks.push(testTask);
    taskListDiv.innerText = '';
    // renderTasks(allTasks);
    taskListDiv.appendChild(renderTasks(allTasks));
});



const allTasks = [];
const allProjects = [];

