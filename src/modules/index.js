import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import sms, { smsSaga } from './sms';
import email, { emailSaga } from './email';
import auth from './auth';
import modal from './modal';
import intorceptors from "../lib/interceptors";


const rootReducer = combineReducers({
  sms,
  auth,
  modal,
  email,
});

export function* rootSaga() {
  yield all([smsSaga(),emailSaga() ]);
}

export default rootReducer;       