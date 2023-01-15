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
import ErrorComponent from 'src/component/error/ErrorComponent';



function GroupList() {
  //group get
  const [groupData,setGroupData] = useState([]);
  //group filter
  const [groupDataFiltering,setGroupDataFiltering] = useState([]);

  //filter
  const [filter,setFilter] = useState("");
  const onFilterChange = (e) => (setFilter(e.target.value));
  const onFilterClick = (e) => setGroupDataFiltering(groupData.filter(d=>d.groupName.toUpperCase().includes(filter.toUpperCase())));
  const onFitlerReset = (e) => {
    setGroupDataFiltering(groupData);
  }

  useEffect(()=>{
    axios.get(apiConfig.groupSelect)
    .then(function (response) {
        console.log(response.data);
        setGroupData(response.data);
        setGroupDataFiltering(response.data);
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
                <CFormInput type="text" onChange={onFilterChange}/>
                <CButton color="danger" variant="outline" onClick={onFitlerReset}>초기화</CButton>
                <CButton variant="outline" onClick={onFilterClick}>검색</CButton>
              </CInputGroup>
            </CCol>
          </CForm>
        </CCol>

        <CRow>
          <CCard className="mb-4">
            <CCardBody>
              <CRow className = 'mt-3'>
                {groupData.length===0 
                  ?<ErrorComponent log={"데이터가 없어요"}/>
                  //백 연결 안했을 떄 테스트용  
                  //<GroupCard key={1} groupName={"데이터 못 갖고오는중~"} groupDescription={"아직없어"}/>
                  : groupDataFiltering.length === 0
                    ?<ErrorComponent log={"검색한 결과가 없어요"}/> 
                    :groupDataFiltering.map((d)=>(<GroupCard key={d.id} id={d.id} groupName={d.groupName} groupDescription={"아직없어"}/>))} 
              </CRow>
            </CCardBody>
          </CCard>
      </CRow>
      </CCardBody>
    </CCard>

  </div>
)}

export default GroupList





