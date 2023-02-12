import React, {useRef, useEffect, useState} from 'react'
import {
  CButton,
  CCard, CCardBody, CCardHeader, CCardFooter,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CInputGroup,
  CFormSelect, 
  CFormSwitch,
  CFormCheck,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CImage,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CToast,
  CToastHeader,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import SelectBroker from './component/SelectBroker';
import SelectReceiver from './component/SelectReceiver';

import { useSelector, useDispatch } from 'react-redux';
import * as emailAction from "../../modules/email";
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { useNavigate } from 'react-router-dom';
import Loading from 'src/lib/Loading/Loading';
import { auth } from 'src/modules/auth';
import moment from 'moment';
import "moment/locale/ko";


const SendEmail = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // 대기


  const dispatch = useDispatch();
  const { receiverList, sending, reservYn, sender, replaceSender, brokerList } = useSelector(({ email }) => ({
    receiverList : email.receiverList,
    sending : email.sendingDto,
    reservYn : email.reservYn,
    sender : email.sender,
    replaceSender : email.replaceSender,
    brokerList : email.brokerList,
  }));
  

  useEffect(() => {
    dispatch(emailAction.initializeForm()); // 초기화
    dispatch(emailAction.editBrokerList()); // 중계사 리스트
  }, []);


  const [toast, addToast] = useState(0);
  const toaster = useRef();

  const messageToast = (text) => (
    <CToast>
      <CToastHeader closeButton>
      <strong className="me-auto">🐰 KIT:e</strong>
        {/* <small>7 min ago</small> */}
      </CToastHeader>
      <CToastBody>{ text }</CToastBody>
    </CToast>
  );


  // 발송 요청
  function onclickSend(){

    // if(receiverList.length<1){
    //   console.log("test");
    //   addToast(messageToast("수신자를 선택해주세요."));
    //   return;
    // }

    // console.log(reservYn);
    // if(reservYn === "Y" && (sending.reservDate == "" || sending.reservTime == "" )){
    //   addToast(messageToast("전송 시간을 입력해주세요."));
    //   return;
    // }
    // if(sender == null){
    //   addToast(messageToast("발신번호를 선택해주세요."));
    //   return;
    // }
    // if(sending.contentLength <1){
    //   addToast(messageToast("메시지 내용을 입력해주세요."));
    //   return;
    // }


    // if(sending.sendingRuleType == "CUSTOM"){
    //   let totalWeight = 0;
    //   brokerList.map(function(broker) {
    //     totalWeight += Number(broker.weight);
    //   });
    //   console.log(totalWeight);
    //   if(totalWeight != 100){
    //     addToast(messageToast("중계사 비율을 정확하게 입력해주세요."));
    //     return;
    //   }
    // }

    // const body = {
    //   receiverList : receiverList,
    //   sendingDTO : sending,
    //   reservYn : reservYn,
    //   sender : sender,
    //   replaceSender :replaceSender,
    //   brokerList : brokerList,
    // };
    // console.log(body);
    
    setLoading(true);
  //   try {
  //     axios.post(apiConfig.sendRequest, body, {headers: headers})
  //       .then((response) => {
  //         addToast(messageToast("발송 요청 완료"));
  //         alert("발송 요청 완료");
  //         navigate('/#/userConsole');
  //       })
  //     .catch(function (error) {
  //     }).then(function() {
  //       setLoading(false);
  //     });
  //   } catch (e){
  //     setLoading(false);
  //   }
  };

   // 제목 수정
   function changeTitle(e) {
    const value = e.target.value;
    dispatch(emailAction.editTitle( { value }));
  }

  // 내용 수정
  function changeContent(e) {
    const value = e.target.value;
    dispatch(emailAction.editContent( { value }));
  }

  // 수신자 추가
  function addReceiver(name, phone, email) {
    dispatch(emailAction.addReceiver( { name, phone, email }));
  }

  // 수신자 일괄 추가
  function addReceivers(arr) {
    dispatch(emailAction.addReceivers({arr}));
  }

  // 수신자 삭제
  function deleteReceiver(phone) {
    dispatch(emailAction.deleteReceiver({phone}));
  }

  // 수신자 초기화
  function deleteAllReceiver() {
    dispatch(emailAction.deleteAllReceiver());
  }

  // 예약발송 스위치
  function changeSwitch(e){ 
    const checked = e.target.checked;
    dispatch(emailAction.editReservation({checked}));
  };
  

  // 날짜 수정
  function changeReservDate(e){
    const {name, value} = e.target;
    dispatch(emailAction.editReservDate( { name, value }));
  }

  // 시간 수정
  function changeReservTime(e){
    const {name, value} = e.target;
    dispatch(emailAction.editReservTime( { name, value }));
  }

  // 발신 이메일
  const [senderEmailList, setSenderEmailList] = useState([]);
  useEffect(()=>{
    axios.get(apiConfig.emailSelect).then(function (response) {
      setSenderEmailList(response.data);
    }).catch(function (error) {
    }).then(function() {
    });
  },[]);


  // 발신이메일 선택
  function changeSenderEmail(e){
    const value = e.target.value;
    dispatch(emailAction.editSender({value}));
  }

  // 템플릿
  const [templateList, setTemplateList] = useState([]);
  useEffect(()=>{
    axios.get(apiConfig.messageTemplateList).then(function (response) {
      setTemplateList(response.data.content);
    }).catch(function (error) {
    }).then(function() {
    });
  },[]);
  
  // 템플릿 선택
  function changeMessageTemplate(e){
    const value = e.target.value;
    dispatch(emailAction.editContent( { value }));
  }

  // 중계사 비율 타입 수정
  function editSendingRuleType(value){
    dispatch(emailAction.editSendingRuleType({value}));
  }

  function editBrokerRatio(e){
    const { value, name } = e.target;
    dispatch(emailAction.editBrokerRatio({value, name}));
  }

  return (
    <>
    <CToaster ref={toaster} push={toast} placement="top-end" />
    { loading?  <Loading /> : <>
    
      <CCard className="m-4">
        <CCardHeader>
          <CRow>
            <CCol lg={12} ><strong>이메일 발송 </strong></CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">


            <SelectReceiver 
              receiverList={receiverList}
              addReceiver={addReceiver}
              addReceivers={addReceivers}
              deleteReceiver={deleteReceiver}
              deleteAllReceiver={deleteAllReceiver}
            > </SelectReceiver>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">전송 시간</CFormLabel>
              <CCol className="col-sm-10">
                  <CFormSwitch label={"예약 발송 " + (reservYn == "Y" ?
                      (sending.reservDate=="" || sending.reservTime==""? "" : 
                      moment(sending.reservationTime, "YYYY-MM-DD hh:mm:ss").fromNow('')): "") } id="reserv_send" onChange={changeSwitch}/>
                  {reservYn == "Y" ? (<> <CRow>
                      <CCol xs={6}>
                        <CFormInput type="date" value={sending.reservDate}  onChange={(e) => changeReservDate(e)}/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormInput type="time"  value={sending.reservTime} onChange={(e) => changeReservTime(e)}/>
                    </CCol>
                  </CRow></>):null}
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">발신 이메일</CFormLabel>
              <CCol className="col-sm-10 p-0">
                  <CFormSelect onChange={(e) => changeSenderEmail(e)}>
                      <option value="">선택</option>
                      { senderEmailList.map((senderEmail)=>(
                          <option key={senderEmail.id} value={senderEmail.email}>{senderEmail.email} </option>
                      ))}
                  </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">전송 내용</CFormLabel>
              <CCol className="col-sm-10">
              
                <CRow>
                  <CInputGroup className="mb-1 p-0">
                    <CFormInput placeholder="제목" value={sending.title} onChange={(e) => changeTitle(e)}/>
                  </CInputGroup>                   
                </CRow>
                <CRow className="mb-1">
                  <CFormSelect onChange={(e) => changeMessageTemplate(e)}>
                    <option value="" >내용 템플릿 선택</option>
                    { templateList.map((messageTemplate)=>(
                      <option key={"template_"+messageTemplate.id} value={messageTemplate.content}>
                        {messageTemplate.title}
                      </option>
                    ))
                  }
                  </CFormSelect>
                </CRow>
                <CRow>
                  <CFormTextarea
                    rows="6"
                    onChange={(e)=>{changeContent(e)}}
                    value={sending.content}
                  />
                </CRow>
                <CRow className='mt-3'>
                  <CAccordion  activeItemKey={1}>
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>문자열 치환하기 (고객명 자동삽입기능)</CAccordionHeader>
                      <CAccordionBody>
                        <strong><code>%고객명%</code>을 입력하시면 고객명 항목에 있는 내용이 변환되어 입력됩니다.</strong>
                        <p>주소록 성명(이름)항목에 있는 내용이 입력되며 단문은 한글기준 3자(6byte), 장문은 제한 없습니다.</p>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </CRow>
          </CCol>
            </CRow>
            <SelectBroker 
            brokerList = {brokerList} 
            sendingRuleType={sending.sendingRuleType}
            editSendingRuleType = {editSendingRuleType}
            editBrokerRatio ={editBrokerRatio}
            />
            
          </CForm>
        </CCardBody>

        <CCardFooter>
          <CCol lg={12} className="text-end">
            <CButton color="success" variant="outline" onClick={onclickSend}>
              발송하기 
            </CButton>
          </CCol>
        </CCardFooter>
      </CCard> 
      </>
       }
    </>
  )

}

export default SendEmail