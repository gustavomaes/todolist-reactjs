import { takeLatest, all } from 'redux-saga/effects'

import { getTasks, addTask } from './task'

export default function* rootSaga() {
    yield all([
        takeLatest('LOAD_TASKS_REQUEST', getTasks),
        takeLatest('CREATE_TASK_REQUEST', addTask)
    ])
}

