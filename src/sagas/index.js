import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { watchCreateToken } from './token'

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchCreateToken()
  ]
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
