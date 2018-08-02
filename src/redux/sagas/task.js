import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadTasksSuccess, createTaskSuccess, deleteTaskSuccess, editTaskSuccess, editTaskFailure } from '../actions'

const url = 'https://app-acruxx.wedeploy.io'

const client = axios.create({
  baseURL: url
})

export function* getTasks() {
  const tasks = yield client.get()
  yield put(loadTasksSuccess(tasks.data))
}

export function* addTask(action) {
  const task = yield client.post('/', action.task)
  yield put(createTaskSuccess(task.data))
}

export function* editTask(action) {
  try {
    yield put(editTaskSuccess(action.task))
    yield client.put(`/${action.task.id}`, action.task.data)  
  } catch (error) {
    yield put(editTaskFailure(action.task))    
  }  
}

export function* deleteTask(action) {
  yield put(deleteTaskSuccess(action.task.index))
  yield client.delete(`/${action.task.id}`)
}