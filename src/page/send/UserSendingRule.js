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

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { auth } from 'src/modules/auth';
import BrokerRatioList from './component/BrokerRatioList';
import email from 'src/modules/email';


const UserSendingRule  = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  const [loading, setLoading] = useState(false); // 대기

  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const messageToast = (text) => (
    <CToast>
      <CToastHeader closeButton>
      <strong className="me-auto">🐰 KIT:e</strong>
      </CToastHeader>
      <CToastBody>{ text }</CToastBody>
    </CToast>
  );
 

  // 메시지 중계사 리스트
  const [msgBrokerList, setmsgBrokerList] = useState([]);
  useEffect(()=>{
    axios.get(apiConfig.userSendingRuleInfo,{params: { "sendingType":"SMS"}}).then(function (response) {
      setmsgBrokerList(response.data);
    }).catch(function (error) {
    }).then(function() {
    });
  },[]);
  
  // 이메일 중계사 리스트
  const [emailBrokerList, setEmailBrokerList] = useState([]);
  useEffect(()=>{
    axios.get(apiConfig.userSendingRuleInfo,{params: { "sendingType":"EMAIL"}}).then(function (response) {
      setEmailBrokerList(response.data);
    }).catch(function (error) {
    }).then(function() {
    });
  },[]);
  

  function changeMsgBrokerWeight(e){
    const brokerId = e.target.id.replace("ck_","");
      msgBrokerList.map(function(broker) {
        if(broker.id == brokerId){
            broker.weight = e.target.value;
        }
    });
    setmsgBrokerList(msgBrokerList);
  }

  function changeEmailBrokerWeight(e){
    const brokerId = e.target.id.replace("ck_","");
    emailBrokerList.map(function(broker) {
      if(broker.id == brokerId){
          broker.weight = e.target.value;
      }
    });
    setEmailBrokerList(emailBrokerList);
  }

  function saveMsgUserSendingRule(){
    let userSendingRuleDtoList =[];
    let totalWeight = 0;
    msgBrokerList.map(function(broker) {
      totalWeight += Number(broker.weight);
      userSendingRuleDtoList.push({ 
        id: broker.user_sending_rule_id == null? null:broker.user_sending_rule_id,
        brokerId: broker.id,
        weight: broker.weight == null? 0 : broker.weight
      })
    });
    if(totalWeight != 100){
      addToast(messageToast("중계사 비율을 정확하게 입력해주세요."));
      return;
    }

    save(userSendingRuleDtoList);
  }

  function saveEmailUserSendingRule(){
    let userSendingRuleDtoList =[];
    let totalWeight = 0;
    emailBrokerList.map(function(broker) {
      totalWeight += Number(broker.weight);
      userSendingRuleDtoList.push({ 
        id: broker.user_sending_rule_id == null? null:broker.user_sending_rule_id,
        brokerId: broker.id,
        weight: broker.weight == null? 0 : broker.weight
      })
    });
    if(totalWeight != 100){
      addToast(messageToast("중계사 비율을 정확하게 입력해주세요."));
      return;
    }
    save(userSendingRuleDtoList);
  }

  function save(userSendingRuleDtoList){
    axios.post(apiConfig.userSendingRuleReg, userSendingRuleDtoList, {headers: headers})
    .then((response) => {
        addToast(messageToast("저장 완료"));
    })
    .catch(function (error) {
    }).then(function() {
      setLoading(false);
    });
  }
  

  
  return (
    <>
      <CToaster ref={toaster} push={toast} placement="top-end" />
      <CCard className="m-4">
        <CCardHeader>
          <CRow>
            <CCol lg={10} ><strong>기본 분배 비율 설정</strong></CCol>
            <CCol lg={2} className="text-end">
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCard className="mb-1">
              <CCardBody>
                <CRow className="mt-3 mb-3">
                  <CFormLabel className="col-sm-2">메시지</CFormLabel>
                  <CCol xs={10}>
                    <BrokerRatioList 
                      sendingType={"MSG"} 
                      brokerList={msgBrokerList}
                      changeBrokerRatio={changeMsgBrokerWeight}
                    ></BrokerRatioList>                
                  </CCol>
                </CRow>
                <CCol lg={12} className="text-end">
              <CButton name='msg' color="success" variant="outline" onClick={saveMsgUserSendingRule}>
                저장 
              </CButton>
            </CCol>
              </CCardBody>
            </CCard>
            <CCard className="mb-1">
              <CCardBody>
                <CRow>
                  <CFormLabel className="col-sm-2">이메일</CFormLabel>
                  <CCol xs={10}>
                    <BrokerRatioList
                      sendingType={"EMAIL"}
                      brokerList={emailBrokerList}
                      changeBrokerRatio={changeEmailBrokerWeight}
                    ></BrokerRatioList>
                  </CCol>
                </CRow>
                <CCol lg={12} className="text-end">
              <CButton name='email' color="success" variant="outline" onClick={saveEmailUserSendingRule}>
                저장 
              </CButton>
            </CCol>
              </CCardBody>
            </CCard>
            
          </CForm>
        </CCardBody>

      </CCard> 
      </>
    
  )
}

export default UserSendingRule