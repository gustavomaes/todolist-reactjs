export const loadTasksRequest = () => {
    return {
        type: 'LOAD_TASKS_REQUEST'
    }
}

export const loadTasksSuccess = (tasks) => {
    return {
        type: 'LOAD_TASKS_SUCCESS',
        tasks: tasks
    }
}

export const createTaskRequest = (task) => {
    return {
        type: 'CREATE_TASK_REQUEST',
        task: task
    }
}

export const createTaskSuccess = (task) => {
    return {
        type: 'CREATE_TASK_SUCCESS',
        task: task
    }
}

export const deleteTaskRequest = (task) => {
    return {
        type: 'DELETE_TASK_REQUEST',
        task: task
    }
}

export const deleteTaskSuccess = (index) => {
    return {
        type: 'DELETE_TASK_SUCCESS',
        index: index        
    }
}

export const editTaskRequest = (task) => {
    return {
        type: 'EDIT_TASK_REQUEST',
        task: task
    }
}

export const editTaskSuccess = (task) => {
    return {
        type: 'EDIT_TASK_SUCCESS',
        task: task
    }
}