const initialState = {
    tasks: [],
    isLoading: false
}

const tasks = (state = initialState, action) => {
    let newTasks

    switch (action.type) {
        case 'LOAD_TASKS_REQUEST':
            return {
                isLoading: true,
                tasks: []
            }

        case 'LOAD_TASKS_SUCCESS':
            return {
                isLoading: false,
                tasks: action.tasks
            }

        // case 'CREATE_TASK_REQUEST':
        //     return state

        case 'CREATE_TASK_SUCCESS':
            newTasks = [...state.tasks]
            newTasks.push(action.task)
            return {
                ...state,
                tasks: newTasks,
            }

        // case 'DELETE_TASK_REQUEST':
        //     return state

        case 'DELETE_TASK_SUCCESS':
            newTasks = [...state.tasks]
            newTasks.splice(action.index, 1)

            return {
                ...state,
                tasks: newTasks
            }

        // case 'EDIT_TASK_REQUEST':
        //     return state

        case 'EDIT_TASK_SUCCESS':
            console.log(action.task)
            newTasks = [...state.tasks]
            newTasks[action.task.index].description = action.task.data.description
            newTasks[action.task.index].done = action.task.data.done

            return {
                ...state            
            }

        default:
            return state
    }
}

export default tasks