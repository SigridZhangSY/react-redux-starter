import { take, put, call } from 'redux-saga/effects';
import * as SagaActions from '../actions/demoSagaActions';

export function* demoSaga() {
  while(true) {
    yield take(SagaActions.sagaAction().type)

    try {
      //do effect
      //call api、 handle logic ...
      //yield call(function, parameter)
      console.log("do something effect")

      yield put(SagaActions.saveSagaPayloadAction('new value'))

    } catch (error) {
      console.log(error)
    }
  }
}
