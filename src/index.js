import {compareAsc, format, isToday, isThisWeek } from 'date-fns';
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import renderTaskModule from './modules/newTaskModule.js';
import newTaskInfo from './modules/newTaskInfo.js';
import renderTasks from './modules/renderTasks.js';

const allTasks = [];
const allProjects = [];

const header = document.createElement('h1');
header.className = 'main-header';
header.innerText = 'To-Do List';
document.body.appendChild(header);

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
document.body.appendChild(mainContainer);

const sideBar = document.createElement('div');
sideBar.className = 'side-bar';
mainContainer.appendChild(sideBar);

const navLinks = document.createElement('ul');
navLinks.className = 'nav-links';
sideBar.appendChild(navLinks);

const homeLink = document.createElement('li');
const homeIcon = document.createElement('i');
homeIcon.classList = 'fa-solid fa-house';
const homeText = document.createElement('p');
homeText.innerText = 'Home';
homeLink.appendChild(homeIcon);
homeLink.appendChild(homeText);
navLinks.appendChild(homeLink);

const todayLink = document.createElement('li');
const todayIcon = document.createElement('i');
todayIcon.classList = 'fa-solid fa-calendar-day';
const todayText = document.createElement('p');
todayText.innerText = 'Today';
todayLink.appendChild(todayIcon);
todayLink.appendChild(todayText);
navLinks.appendChild(todayLink);

const weekLink = document.createElement('li');
const weekIcon = document.createElement('i');
weekIcon.classList = 'fa-solid fa-calendar-week';
const weekText = document.createElement('p');
weekText.innerText = 'This Week';
weekLink.appendChild(weekIcon);
weekLink.appendChild(weekText);
navLinks.appendChild(weekLink);

const addTaskButton = document.createElement('input');
addTaskButton.className = 'add-task-button';
addTaskButton.setAttribute('type', 'button');
addTaskButton.value = 'Add New Task';
sideBar.appendChild(addTaskButton);

const taskListContainer = document.createElement('div');
taskListContainer.className = 'task-list-container';
mainContainer.appendChild(taskListContainer);



// const testDiv = document.createElement('div');
// const testIcon = document.createElement('i');
// testIcon.classList = 'fa-solid fa-check';
// testDiv.appendChild(testIcon);

// document.body.appendChild(testDiv);
// testDiv.addEventListener('click', function () {
//     console.log('hello');
//     renderTasks(allTasks)});



const taskModule = document.createElement('div');
document.body.appendChild(taskModule);

addTaskButton.addEventListener('click', function () {
    taskModule.appendChild(renderTaskModule());
    const newTaskAccept = document.getElementById('new-task-accept');
    newTaskAccept.addEventListener('click', function(){
        const taskTitle = document.getElementById('new-title');
        const taskDetails = document.getElementById('new-details');
        const taskDueDate = document.getElementById('new-due-date');
        const taskPriority = document.getElementById('new-priority');       const taskProject = document.getElementById('new-project');
        allTasks.push(newTaskInfo(taskTitle.value, taskDetails.value, taskDueDate.value, taskPriority.value, taskProject.value));
        taskListContainer.innerText = '';
        taskListContainer.appendChild(renderTasks(allTasks));
        taskModule.textContent = '';
    });
});


