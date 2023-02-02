import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import moment from 'moment';
import * as smsAPI from '../lib/api/sms';
import { detach } from 'redux-saga';

const INITIALIZE_FORM = 'sms/initialize_form';          // 초기화
const ADD_RECEIVER = 'sms/add_receiver';                // 수신자 추가
const ADD_RECEIVERS = 'sms/add_receivers';              // 수신자 일괄 추가
const DELETE_RECEIVER = 'sms/delete_receiver';          // 수신자 삭제
const DELETE_ALLRECEIVER = 'sms/delete_allreceiver';    // 수신자 삭제
const EDIT_SENDER = 'sms/edit_sender';                  // 발신번호 수정
const EDIT_RESERVATION = 'sms/edit_reservation';        // 예약 여부 수정
const EDIT_RESERVDATE = 'sms/edit_reservdate';          // 예약 날짜 수정
const EDIT_RESERVTIME = 'sms/edit_reservtime';          // 예약 시간 수정 
const EDIT_CONTENT = 'sms/edit_content';                // 발송 내용 수정
const EDIT_SENDREPLACEMEMT = 'sms/eidt_sendreplace';    // 대채발송 여부 수정
const EDIT_SENDINGRULETYPE = 'sms/edit_sendingruletype';// 중계사 비율 타입 수정
const EDIT_BROKERRATIO = 'sms/edit_brokerratio';        // 중계사 비율 설정

const [EDIT_BROKER, BROKERLIST] = createRequestActionTypes('sms/edit_brokerlist');  // 중계사 리스트

  

export const initializeForm = createAction(INITIALIZE_FORM);

export const addReceiver = createAction(ADD_RECEIVER,({name, phone, email}) => ({
    name, phone, email
}));
export const addReceivers = createAction(ADD_RECEIVERS,({arr}) => ({
   arr
}));
export const deleteReceiver = createAction(DELETE_RECEIVER,({phone}) => ({
    phone
}));
export const deleteAllReceiver = createAction(DELETE_ALLRECEIVER);

export const editSender = createAction(EDIT_SENDER,({value}) => ({
    value
}));
export const editReservation = createAction(EDIT_RESERVATION,({checked}) => ({
    checked
}));
export const editReservDate = createAction(EDIT_RESERVDATE,({value, name}) => ({
    value, name
}));

export const editReservTime = createAction(EDIT_RESERVTIME,({value, name}) => ({
    value, name
}));
export const editContent = createAction(EDIT_CONTENT,( { value }) => ({
    value
}));
export const editSenderReplace = createAction(EDIT_SENDREPLACEMEMT,({checked}) => ({
    checked
}));
export const editSendingRuleType = createAction(EDIT_SENDINGRULETYPE,({value}) => ({
    value
}));
export const editBrokerRatio = createAction(EDIT_BROKERRATIO,({value, name}) => ({
    value, name
}));
export const editBrokerList = createAction(EDIT_BROKER);



const brokerSaga = createRequestSaga(EDIT_BROKER, smsAPI.brokerList);
export function* smsSaga() {
    yield takeLatest(EDIT_BROKER, brokerSaga);
}


const initialState = {
    receiverList : [],                      // name 수신자 이름
                                            // receiver 수신자 정보
                                            // replace_receiver 대체발송 수신자 정보
    sendingDto : {
        content : "",                       // 내용 접속
        contentLength : 0,                  // 내용 길이
        reservDate : "",                    // 예약 날짜
        reservTime : "",                    // 예약 시간
        reservationTime : null,             // 예약 날짜 시간
        sendingRuleType : "CUSTOM",         // 중계사 비율 타입
        sendingType : "SMS",                // 발송 타입
        replaceYn :"N",                     // 대체 발송 여부
        totalSending : 0,                   // 총 메세지 개수
        title : "",                         // 제목
    },
    reservYn : "N",                         // 예약 여부
    sender : null,                          // 발신자 정보
    replaceSender : null,                   // 대체발송 발신자 정보
    brokerList : []                         // brokerId 브로커 아이디
                                            // weight 가중치
    };

const sms = handleActions({
    [INITIALIZE_FORM]: (state) => {
        return initialState;
    },

    [ADD_RECEIVER] : (state, {payload: pl }) => {
        let flag = true;
        state.receiverList.map(function(data) {
            if(data.receiver==pl.phone){
                flag = false;
            }
        });
        if(flag){
            state.receiverList.push({
                name : pl.name,
                phone : pl.phone,
                email: pl.email,
                receiver : pl.phone.replaceAll("-",""),
                replace_receiver : pl.email,
            })
        }
        console.log(state);
        state.sendingDto.totalSending= state.receiverList.length;
        return { ...state}
    },


    [ADD_RECEIVERS] : (state, {payload: pl }) => {
        pl.arr.map(function(data) {
            let phoneTxt = '';
            if (data.phone.length === 10) {
                phoneTxt = data.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
            else if (data.phone.length === 11) {
                phoneTxt = data.phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            }
            const receiver = {
                name : data.name,
                receiver : data.phone,
                replace_receiver : data.email,
                phone : phoneTxt,
                email : data.email
            }
            let flag = true;
            state.receiverList.map(function(rdate) {
                if(rdate.receiver == data.phone){
                    flag = false;
                }
            });
            if(flag){
                state.receiverList.push(receiver);
            }
        });
        state.sendingDto.totalSending= state.receiverList.length;
        return { ...state}    
    },

    [DELETE_RECEIVER] : (state,{payload: pl }) => {
        state.receiverList = state.receiverList.filter(function(value, index) {
            return value.receiver != pl.phone;
        });
        state.sendingDto.totalSending= state.receiverList.length;
        return { ...state}    
    },

    [DELETE_ALLRECEIVER] : (state) => {
        state.receiverList = [];
        state.sendingDto.totalSending= 0;
        return { ...state}    
    },



    [EDIT_CONTENT] : (state, {payload: pl }) => {

        const text = pl.value;
        state.sendingDto.content = text;

        var returnVal = '';
        var currentLength = 0;
        var codeByte = 0;
        
        for (var i = 0; i < text.length; i++) {
          var oneChar = escape(text.charAt(i));
          
          if(oneChar.length > 4) {
              codeByte += 2;
          }else{
              codeByte++;
          }
    
          if(codeByte <= 140){
              currentLength = i + 1;
          }

        }
        state.sendingDto.contentLength = codeByte;
        return { ...state}    
    },


    [BROKERLIST]: (state, { payload: pl }) => {
        let brokerList = [];
        pl.map(function(data) {
            brokerList.push({
                brokerId : data.id,
                weight : 0,
                name : data.name,
                price : data.price,
                speed : data.speed
            });
        });
        state.brokerList = brokerList;
        return { ...state} 
    },

    [EDIT_RESERVATION]: (state, { payload: pl }) => {
        state.reservYn =  pl.checked? "Y" : "N";
        if(state.reservYn == "Y"){
            state.sendingDto.reservDate = moment().add(7, 'days').format('YYYY-MM-DD');
            state.sendingDto.reservTime = moment().format('HH:mm');
            state.sendingDto.reservationTime = moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss');
        }else{
            state.sendingDto.reservationTime = null;

        }
        return { ...state} 
    },

    
    [EDIT_RESERVDATE]: (state, { payload: pl }) => {
        state.sendingDto.reservDate = pl.value;
        state.sendingDto.reservationTime = state.sendingDto.reservDate +" "+ state.sendingDto.reservTime +":00";
        return { ...state} 
    },

    [EDIT_RESERVTIME]: (state, { payload: pl }) => {
        state.sendingDto.reservTime = pl.value;
        state.sendingDto.reservationTime = state.sendingDto.reservDate +" "+ state.sendingDto.reservTime +":00";
        return { ...state} 
    },

    [EDIT_SENDREPLACEMEMT]: (state, { payload: pl }) => {
        state.sendingDto.replaceYn = pl.checked? "Y" : "N";
        return { ...state} 
    },

    [EDIT_SENDER]: (state, { payload: pl }) => {
        state.sender = pl.value;
        return { ...state} 
    },

    [EDIT_SENDINGRULETYPE] : (state, { payload: pl }) => {
        state.sendingDto.sendingRuleType = pl.value;
        return { ...state} 
    },

    [EDIT_BROKERRATIO]  : (state, { payload: pl }) => {
        state.brokerList.map(function(broker) {
            if(broker.brokerId == pl.name){
                broker.weight = pl.value;
            }
        });
        return { ...state} 
    },


},
  initialState
);

export default sms;