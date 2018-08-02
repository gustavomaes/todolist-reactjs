const initialState = {
    tasks: [],
    isLoading: false,
    error: false,
    erroMessage: '',
    deleted: false
}

const tasks = (state = initialState, action) => {
    let newTasks

    switch (action.type) {
        case 'LOAD_TASKS_REQUEST':
            return {
                ...state,
                isLoading: true,
                tasks: []
            }

        case 'LOAD_TASKS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                tasks: action.tasks
            }

        case 'CREATE_TASK_SUCCESS':
            newTasks = [...state.tasks]
            newTasks.push(action.task)
            return {
                ...state,
                tasks: newTasks,
            }

        case 'DELETE_TASK_SUCCESS':
            newTasks = [...state.tasks]
            newTasks.splice(action.index, 1)
            console.log(newTasks)
            return {
                ...state,
                deleted: true,
                tasks: newTasks
            }

        case 'EDIT_TASK_SUCCESS':
            newTasks = [...state.tasks]
            newTasks[action.task.index].done = action.task.data.done

            return {
                ...state,
                error: false,
                tasks: newTasks
            }

        case 'EDIT_TASK_FAILURE':
            newTasks = [...state.tasks]
            newTasks[action.task.index].done = !action.task.data.done

            return {
                ...state,
                error: true,
                erroMessage: 'Erro ao editar tarefa',
                tasks: newTasks
            }

        case 'RESET':
            return {
                ...state,
                isLoading: false,
                deleted: false,
                error: false,
                erroMessage: ''
            }

        default:
            return state
    }
}

export default tasks