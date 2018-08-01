export const loadTasksRequest = () => {
    return {
        type: 'LOAD_TASKS_REQUEST'
    }
}

export const loadTasksSuccess = (data) => {
    return {
        type: 'LOAD_TASKS_SUCCESS',
        data: data
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