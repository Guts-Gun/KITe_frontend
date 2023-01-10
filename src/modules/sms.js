import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import {Map, List} from 'immutable';
import moment from 'moment';


const EDIT_CONTENT = 'survey/edit_content';
const INITIALIZE_FORM = 'survey/initialize_form';


export const initializeForm = createAction(INITIALIZE_FORM);
export const editContent = createAction(EDIT_CONTENT,({value, name}) => ({
    value, name
}));

export function* smsSaga() {
}

const initialState = Map({
    receiverList : List([]),
    reservYn : "N",
});


const survey = handleActions({
    [INITIALIZE_FORM]: (state) => {
        return initialState;
      },
    [EDIT_CONTENT] : (state, {payload: sms }) => { 
        return state.set("content", sms.value );
    },
  },
  initialState
);

export default survey;