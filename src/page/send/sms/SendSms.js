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
import phoneImg from 'src/assets/images/phone.png';
import guide1 from 'src/assets/images/guide/guide1.png';
import guide2 from 'src/assets/images/guide/guide2.png';
import guide3 from 'src/assets/images/guide/guide3.png';
import guide4 from 'src/assets/images/guide/guide4.png';
import SelectBroker from './component/SelectBroker';
import SelectReceiver from './component/SelectReceiver';

import { useSelector, useDispatch } from 'react-redux';
import * as smsAction from "../../../modules/sms";
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { useNavigate } from 'react-router-dom';
import Loading from 'src/lib/Loading/Loading';
import { auth } from 'src/modules/auth';



const SendSms = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // 대기


  const dispatch = useDispatch();
  const { receiverList, sending, reservYn, sender, replaceSender, brokerList } = useSelector(({ sms }) => ({
    receiverList : sms.receiverList,
    sending : sms.sendingDto,
    reservYn : sms.reservYn,
    sender : sms.sender,
    replaceSender : sms.replaceSender,
    brokerList : sms.brokerList,
  }));
  
  // 메뉴얼 보기
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(smsAction.initializeForm()); // 초기화
    dispatch(smsAction.editBrokerList()); // 중계사 리스트
  }, []);


  const [toast, addToast] = useState(0);
  const toaster = useRef();

  const messageToast = (text) => (
    <CToast>
      <CToastHeader closeButton>
      <strong className="me-auto">KIT:e</strong>
        {/* <small>7 min ago</small> */}
      </CToastHeader>
      <CToastBody>{ text }</CToastBody>
    </CToast>
  );


  // 발송 요청
 function onclickSend(){

  if(receiverList.length<1){
    console.log("test");
    addToast(messageToast("수신자를 선택해주세요."));
    return;
  }
  if(sender == null){
    addToast(messageToast("발신번호를 선택해주세요."));
    return;
  }
  if(sending.contentLength <1){
    addToast(messageToast("메시지 내용을 입력해주세요."));
    return;
  }

  if(sending.sendingRuleType == "CUSTOM"){
    let totalWeight = 0;
    brokerList.map(function(broker) {
      totalWeight += Number(broker.weight);
    });
    console.log(totalWeight);
    if(totalWeight != 100){
      addToast(messageToast("중계사 비율을 정확하게 입력해주세요."));
      return;
    }
  }


  const body = {
    receiverList : receiverList,
    sendingDTO : sending,
    reservYn : reservYn,
    sender : sender,
    replaceSender :replaceSender,
    brokerList : brokerList,
  };
  console.log(body);
  
  setLoading(true);
    try {
      axios.post(apiConfig.sendRequest, body, {headers: headers})
        .then((response) => {
          addToast(messageToast("발송 요청 완료"));
          alert("발송 요청 완료");
          navigate('/#/userConsole');
        })
      .catch(function (error) {
      }).then(function() {
        setLoading(false);
      });
    } catch (e){
      setLoading(false);
    }
};

  // 내용 수정
  function changeContent(e) {
    const { value, name } = e.target;
    dispatch(smsAction.editContent( { value, name }));
  }

  // 수신자 추가
  function addReceiver(name, phone, email) {
    console.log(name, phone, email);
    dispatch(smsAction.addReceiver( { name, phone, email }));
  }

  // 수신자 일괄 추가
  function addReceivers(arr) {
    dispatch(smsAction.addReceivers({arr}));
  }

  // 수신자 삭제
  function deleteReceiver(phone) {
    dispatch(smsAction.deleteReceiver({phone}));
  }

  // 수신자 초기화
  function deleteAllReceiver() {
    dispatch(smsAction.deleteAllReceiver());
  }

  // 예약발송 스위치
  function changeSwitch(e){ 
    const checked = e.target.checked;
    dispatch(smsAction.editReservation({checked}));
  };
  
  // 발신번호
  const [senderPhoneList, setSenderPhoneList] = useState([]);
  useEffect(()=>{
    axios.get(apiConfig.phoneSelect).then(function (response) {
      setSenderPhoneList(response.data);
    }).catch(function (error) {
    }).then(function() {
    });
  },[]);

  // 발신번호 선택
  function changeSenderPhone(e){
    const value = e.target.value;
    dispatch(smsAction.editSender({value}));
  }

  // 대체발송 스위치
  function changeSendReplaceSwitch(e){ 
    const checked = e.target.checked;
    dispatch(smsAction.editSenderReplace({checked}));
  };

  // 템플릿
  const [template, setTemplate] = useState("");
  
  // 중계사 비율 타입 수정
  function editSendingRuleType(value){
    dispatch(smsAction.editSendingRuleType({value}));
  }

  function editBrokerRatio(e){
    const { value, name } = e.target;
    dispatch(smsAction.editBrokerRatio({value, name}));
  }

  return (
    <>
    <CToaster ref={toaster} push={toast} placement="top-end" />
    { loading?  <Loading /> : <>
      <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>SMS/MMS 발송 매뉴얼</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CRow className='mb-3'>
            <p>1. 수신자 선택</p>
            <CImage src={guide3} width={100}/>
            <CImage src={guide4} width={100}/>
          </CRow>
          <CRow>
            <p>2. 내용 입력 및 중계사 분배 비율 설정</p>
            <CImage src={guide1} width={100}/>
            <CImage src={guide2} width={100}/>
          </CRow>
        </COffcanvasBody>
      </COffcanvas>

      <CCard className="m-4">
        <CCardHeader>
          <CRow>
            <CCol lg={10} ><strong>SMS/MMS 발송 </strong></CCol>
            <CCol lg={2} className="text-end">
              <CButton onClick={() => setVisible(true)}>가이드보기</CButton>
            </CCol>
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
              <CCol xs={10}>
                  <CFormSwitch label="예약 발송" id="reserv_send" onChange={changeSwitch}/>
                  {reservYn == "Y" ? (<> <CRow>
                      <CCol xs={6}>
                        <CFormInput type="date"/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormInput type="time" />
                    </CCol>
                  </CRow></>):null}
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">발신 번호</CFormLabel>
              <CCol xs={10}>
                 <CInputGroup className="mb-1">
                  <CFormSelect onChange={(e) => changeSenderPhone(e)}>
                        <option value="">선택</option>
                        { senderPhoneList.map((senderPhone)=>(
                            <option key={senderPhone.id} value={senderPhone.phone}>{senderPhone.phone} </option>
                        ))}
                      </CFormSelect>
                </CInputGroup>
              </CCol>
            </CRow>
            <CRow className="mb-3">
            <CFormLabel className="col-sm-2">대체발송</CFormLabel>
              <CCol xs={10}>
                <CFormSwitch label="발송 실패 시 대체 플랫폼 발송 " id="formSwitchCheckChecked" onChange={changeSendReplaceSwitch}/>
                {sending.replaceYn == "Y" ? 
                (<CInputGroup className="mb-1">
                <CFormSelect>
                        <option value="">선택</option>
                      </CFormSelect>
                </CInputGroup> ) :  null}
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">문자 분류</CFormLabel>
              <CCol className="col-sm-10">
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="광고" defaultChecked/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="2" label="단순알림(공지)"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="3" label="공직선거" />
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="4" label="수신동의확인" />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-2">전송 내용</CFormLabel>
              <CCol className="col-sm-10">
                <CRow>
                  <CCol sm={12} md={7}>
                    <p>전송상태 / <code>{ sending.contentLength >= 140? "단문메시지(SMS)" : "장문메세지(MMS)" }</code></p>
                  
                    <CRow className="mb-1">
                      <CFormSelect onChange={(e) => setTemplate(e.target.value)}>
                        <option value="" >내용 템플릿 선택</option>
                      </CFormSelect>
                    </CRow>
                    <CRow>
                      <CFormTextarea
                        rows="6"
                        text="140byte 초과 및 이미지나 동영상 첨부 시 MMS"
                        onChange={(e)=>{changeContent(e)}}
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
                  <CCol  sm={12} md={5} className="mt-3">
                    <div className='custom_div'>
                      <div className='custom_msg'>
                        [미리보기]<br/><br/>
                        { sending.content.split("\n").map((line, i) => {
                            return (
                              <span key={i}> {line}<br /></span>
                            );
                          })
                        }
                      </div>
                    </div>
                </CCol>
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

export default SendSms