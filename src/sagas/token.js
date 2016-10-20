import { takeEvery } from 'redux-saga'

export function* createToken(action) {
  console.log("Create token")
  console.log(action)
}

export function* watchCreateToken() {
  yield takeEvery('CREATE_TOKEN', createToken)
}
