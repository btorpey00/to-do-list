const NewTask = (title, details, dueDate, priority, project, isComplete) => {

    return {
        title,
        details,
        dueDate,
        priority,
        project,
        isComplete
    };
}

export default function newTaskInfo(title, details, dueDate, priority, project) {
    let task = NewTask(title, details, dueDate, priority, project, false);
    return task;
}