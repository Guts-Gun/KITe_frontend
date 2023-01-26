import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import sms, { smsSaga } from './sms';
import auth from './auth';
import modal from './modal';


const rootReducer = combineReducers({
  sms,
  auth,
  modal,
});

export function* rootSaga() {
  yield all([smsSaga() ]);
}

export default rootReducer;       