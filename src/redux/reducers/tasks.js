const initialState = {
    tasks: [],
    isLoading: false
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TASKS_REQUEST':
            return {
                isLoading: true,
                tasks: []
            }

        case 'LOAD_TASKS_SUCCESS':
            return {
                isLoading: false,
                tasks: action.data
            }

        case 'CREATE_TASK_REQUEST':
            return state

        case 'CREATE_TASK_SUCCESS':
            let newTasks = state.tasks
            newTasks.push(action.task)
            return {
                tasks: newTasks
            }

        default:
            return state
    }
}

export default tasks