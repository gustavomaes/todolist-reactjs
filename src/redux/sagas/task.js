import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadTasksSuccess, createTaskSuccess } from '../actions'

const url = 'https://app-acruxx.wedeploy.io'

const client = axios.create({
  baseURL: url
})

export function* getTasks() {
  const tasks = yield client.get()
  yield put(loadTasksSuccess(tasks.data))
}

export function* addTask(action) {
  const task = yield client.post('/', action.task.data)
  yield put(createTaskSuccess(task.data))
}

// export function* editTask(action) {
//   const tasks = yield client.put(`/${action.task.id}`, action.task.data)
//   // yield put(loadDataSuccess(tasks.data))
// }

export function* deleteTask(action) {
  yield client.delete(`/${action.task.id}`)
  // yield put(loadDataSuccess(tasks.data))
}