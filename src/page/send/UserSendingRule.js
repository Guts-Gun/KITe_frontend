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

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/modules/auth';
import BrokerRatioList from './component/BrokerRatioList';


const UserSendingRule  = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  const [loading, setLoading] = useState(false); // 대기


  
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
  

  function changeBrokerRatio(e){
    const value = e.target.value;
    // prop.brokerList.map(function(broker) {
    //   if(broker.id == brokerId){
    //       broker.weight = e.target.value;
    //   }
  };
  


  return (
    <>
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
                    ></BrokerRatioList>                
                  </CCol>
                </CRow>
                <CCol lg={12} className="text-end">
              <CButton color="success" variant="outline">
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
                    ></BrokerRatioList>                
                  </CCol>
                </CRow>
                <CCol lg={12} className="text-end">
              <CButton color="success" variant="outline">
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