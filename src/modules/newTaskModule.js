export default function renderTaskModule() {
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
