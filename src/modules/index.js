import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import sms, { smsSaga } from './sms';


const rootReducer = combineReducers({
  sms,
  
});

export function* rootSaga() {
  yield all([smsSaga() ]);
}

export default rootReducer;       