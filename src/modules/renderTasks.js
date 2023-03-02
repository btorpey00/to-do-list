const taskListContainer = document.createElement('ul');

export default function renderTasks(taskArray) {
    
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
