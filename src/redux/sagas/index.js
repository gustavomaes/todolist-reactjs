import { takeLatest, all, takeEvery } from 'redux-saga/effects'

import { getTasks, addTask, deleteTask, editTask } from './task'

export default function* rootSaga() {
    yield all([
        takeLatest('LOAD_TASKS_REQUEST', getTasks),
        takeLatest('CREATE_TASK_REQUEST', addTask),
        takeLatest('DELETE_TASK_REQUEST', deleteTask),
        takeEvery('EDIT_TASK_REQUEST', editTask),
    ])
}

