import React,{ useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CButton,
  CFormInput,
  CInputGroup,
  CForm,
} from '@coreui/react'

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

import GroupCard from './Component/GroupCard';
import { MakeGroupModal } from './Component/MakeGroupModal';



function GroupList() {
  const [groupData,setGroupData] = useState([]);

  useEffect(()=>{
    axios.get(apiConfig.group)
    .then(function (response) {
        console.log(response.data);
        setGroupData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[]);

  
  return (
  <div>
    <CCard className="m-4">
      <CCardHeader>
        <strong>그룹 검색</strong>
      </CCardHeader>
      <CCardBody>

        <CCol className='mt-3 mb-3'>
          <CForm className="row">
            <CCol className="col-sm-2">
              <MakeGroupModal/>
            </CCol>
            <CCol className="col-sm-2">
              <CButton color="danger" variant="outline">
                  그룹 삭제
              </CButton>
            </CCol>
            <CCol className="col-sm-4">
            </CCol>
            <CCol className="col-sm-4">
              <CInputGroup>
                <CFormInput type="text"/>
                <CButton variant="outline">검색</CButton>
              </CInputGroup>
            </CCol>
          </CForm>
        </CCol>

        <CRow>
          <CCard className="mb-4">
            <CCardBody>
              <CRow className = 'mt-3'>
                {groupData.map((d,i)=>(<GroupCard key={d.id} groupName={d.groupName} groupDescription={"아직없어"}/>))}
              </CRow>
            </CCardBody>
          </CCard>
      </CRow>
      </CCardBody>
    </CCard>

  </div>
)}

export default GroupList




