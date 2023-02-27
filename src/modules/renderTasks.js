export default function renderTasks(taskArray) {
    const taskListContainer = document.createElement('ul');
    
    for (let i = 0; i < taskArray.length; i++) {
        let currentTask = document.createElement('li');
        taskListContainer.appendChild(currentTask);

        const currentTitle = document.createElement('div');
        currentTitle.innerText = taskArray[i].title;
        currentTask.appendChild(currentTitle);

        const currentDetails = document.createElement('div');
        currentDetails.innerText = taskArray[i].details;
        currentTask.appendChild(currentDetails);

        const currentDueDate = document.createElement('div');
        currentDueDate.innerText = taskArray[i].dueDate;
        currentTask.appendChild(currentDueDate);

        const currentPriority = document.createElement('div');
        currentPriority.innerText = taskArray[i].priority;
        currentTask.appendChild(currentPriority);

        const currentProject = document.createElement('div');
        currentProject.innerText = taskArray[i].project;
        currentTask.appendChild(currentProject);
    }

    return taskListContainer;

};