import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import {Map, List} from 'immutable';
import moment from 'moment';


const INITIALIZE_FORM = 'sms/initialize_form';          // 초기화
const ADD_RECEIVER = 'sms/add_receiver';                // 수신자 추가
const ADD_RECEIVERS = 'sms/add_receivers';              // 수신자 일괄 추가
const DELETE_RECEIVER = 'sms/add_receiver';             // 수신자 삭제
const EDIT_SENDER = 'sms/edit_sender';                  // 발신번호 수정
const EDIT_RESERVATION = 'sms/edit_reservation';        // 예약 여부 수정
const EDIT_RESERVDATE = 'sms/edit_reservdate';          // 예약 날짜 수정
const EDIT_RESERVTIME = 'sms/edit_reservtime';          // 예약 시간 수정 
const EDIT_CONTENT = 'sms/edit_content';                // 발송 내용 수정
const EDIT_SENDREPLACEMEMT = 'sms/eidt_sendreplace';    // 대채발송 여부 수정
const EDIT_BROKERTYPE = 'sms/edit_brokertype';          // 중계사 비율 타입 수정
const EDIT_BROKERRATIO = 'sms/edit_brokerratio';        // 중계사 비율 설정

// 글자수
// 단문/장문 메시지 여부 

export const initializeForm = createAction(INITIALIZE_FORM);
export const addReceiver = createAction(ADD_RECEIVER,({value, name}) => ({
    value, name
}));
export const addReceivers = createAction(ADD_RECEIVERS,({value, name}) => ({
    value, name
}));
export const deleteReceiver = createAction(DELETE_RECEIVER,({value, name}) => ({
    value, name
}));
export const editSender = createAction(EDIT_SENDER,({value, name}) => ({
    value, name
}));
export const editReservation = createAction(EDIT_RESERVATION,({value, name}) => ({
    value, name
}));
export const editReservDate = createAction(EDIT_RESERVDATE,({value, name}) => ({
    value, name
}));

export const editReservTime = createAction(EDIT_RESERVTIME,({value, name}) => ({
    value, name
}));
export const editContent = createAction(EDIT_CONTENT,({value, name}) => ({
    value, name
}));
export const editSenderReplace = createAction(EDIT_SENDREPLACEMEMT,({value, name}) => ({
    value, name
}));
export const editBrokerType = createAction(EDIT_BROKERTYPE,({value, name}) => ({
    value, name
}));
export const editBrokerRatio = createAction(EDIT_BROKERRATIO,({value, name}) => ({
    value, name
}));

export function* smsSaga() {
}

const initialState = Map({
    receiverList : List([]),    // 수신자 리스트
    sender : null,              // 발신자
    content : "",               // 내용 접속
    reservYn : "N",             // 예약 여부
    reservDate : null,          // 예약 날짜
    reservTime : null,          // 예약 시간
    brokerType : "CUSTOM",      // 중계사 비율 타입
    brokerRatio :  List([])     // 중계사 비율
});


const sms = handleActions({
    [INITIALIZE_FORM]: (state) => {
        return initialState;
      },
    [EDIT_CONTENT] : (state, {payload: sms }) => { 
        return state.set("content", sms.value );
    },


  },
  initialState
);

export default sms;