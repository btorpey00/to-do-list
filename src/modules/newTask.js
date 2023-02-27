const newTask = (title, details, dueDate, priority, project) => {
    return {
        title,
        details,
        dueDate,
        priority,
        project
    };
}

let testTask = newTask('test', 'testing', 'someday', 'high', 'none');

export default testTask;