import { compareAsc, format } from "date-fns";

const taskListContainer = document.createElement('ul');
taskListContainer.className = 'task-list-container'

export default function renderTasks(taskArray) {

    taskListContainer.innerText = '';
    taskArray.sort((a,b) => compareAsc(a.dueDate, b.dueDate));
    
    for (let i = 0; i < taskArray.length; i++) {

        let currentTask = document.createElement('li');
        currentTask.className = 'task-list-item';
        currentTask.classList.add(taskArray[i].priority);
        taskListContainer.appendChild(currentTask);

        const markComplete = document.createElement('input');
        markComplete.setAttribute('type', 'checkbox');
        markComplete.className = 'complete-checkbox';
        currentTask.appendChild(markComplete);

        markComplete.addEventListener ('change', function () {
            currentTask.classList.toggle('completed-task');
            taskArray[i].isComplete = !taskArray[i].isComplete;
            localStorage.setItem("allTasks", JSON.stringify(taskArray));
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
        currentDueDate.innerText = format(taskArray[i].dueDate, 'MM/dd/yyy');
        currentTask.appendChild(currentDueDate);

        const currentPriority = document.createElement('div');
        currentPriority.innerText = taskArray[i].priority;
        currentTask.appendChild(currentPriority);

        const editTask = document.createElement('div');
        editTask.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editTask.setAttribute('title', 'Edit');
        currentTask.appendChild(editTask);
        editTask.addEventListener('click', function() {
            // console.log('edit ' + taskArray[i].title);
        });

        const deleteTask = document.createElement('div');
        deleteTask.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        deleteTask.setAttribute('title', 'Delete');
        deleteTask.classList = 'delete-buttons';
        currentTask.appendChild(deleteTask);
        deleteTask.addEventListener('click', function() {
            taskArray.splice(i, 1);
            renderTasks(taskArray);
            localStorage.setItem("allTasks", JSON.stringify(taskArray));
        });
    };

    return taskListContainer;

};
