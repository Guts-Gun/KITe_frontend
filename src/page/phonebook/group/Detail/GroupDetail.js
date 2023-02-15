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
  CFormLabel,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

import {useSearchParams} from "react-router-dom";

import ErrorComponent from 'src/component/error/ErrorComponent';
import { GroupPhoneTableRow } from './Component/GroupPhoneTableRow';
import { GroupPhoneDeleteModal } from './Component/GroupPhoneDeleteModal';
import { GroupPhoneNotDeleteModal } from './Component/GroupPhoneNotDeleteModal';
import { GroupPhoneMakeModal } from './Component/GroupPhoneMakeModal';
import Loading from 'src/lib/Loading/Loading';

function GroupDetailList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  //group get
  const [groupData,setGroupData] = useState([]);

  const [loading, setLoading] = useState(false);

  console.log(loading);
  

  //get data
  useEffect(()=>{
    setLoading(true);
    axios.get(apiConfig.groupSelectDetail+"/"+Number(id))
    .then(function (response) {
        setLoading(false);
        console.log(response.data)
        setGroupData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
        setLoading(false);
    }).then(function() {
        // 항상 실행
        setLoading(false);
    });
  },[]);


  //select(for update.delete)
  const [select,setSelect] = useState([]);
  const onSelect = (id,checked) => {
    if(checked===true){
      setSelect([...select,id])
    }
    if(checked===false){ 
      setSelect(select.filter(d=>d!=id));
    }
  };


  return (
  <div>
    <CCard className="m-4">
      <CCardHeader>
        <strong>그룹 상세 정보</strong>
      </CCardHeader>
      <CCardBody>
            <CRow>
              <CCol className="col-sm-2"> 
                <CFormLabel>이름</CFormLabel>
              </CCol>
              <CCol className="col-sm-10"> 
                <p><b>{groupData.groupName}</b></p>
              </CCol>
            </CRow>
            <CRow>
              <CCol className="col-sm-2"> 
                <CFormLabel>설명</CFormLabel>
              </CCol>
              <CCol className="col-sm-10"> 
                <p><b>{!groupData.description?"":groupData.description}</b></p>
              </CCol>
            </CRow>
            <CRow>
              <CCol className="col-sm-2"> 
                <CFormLabel>등록날짜</CFormLabel>
              </CCol>
              <CCol className="col-sm-10"> 
                <p><b>{!groupData.regDt?"":groupData.regDt}</b></p>
              </CCol>
            </CRow>
            <CRow>
              <CCol className="col-sm-2"> 
                <CFormLabel>수정날짜</CFormLabel>
              </CCol>
              <CCol className="col-sm-10"> 
                <p><b>{!groupData.modDt?" ":groupData.modDt}</b></p>
              </CCol>
            </CRow>
          <CRow className="mt-3 mb-3">
            <CCol className="col-sm-2"> 
              <CFormLabel className="mt-3 mb-3">주소록 편집</CFormLabel>
            </CCol>
            <CCol className="col-sm-4"> 
              <GroupPhoneMakeModal groupId={Number(id)}/>
              {select.length == 0?
                  <GroupPhoneNotDeleteModal reason="하나 이상을 선택해주세요"/>
                  :<GroupPhoneDeleteModal  groupId={id} deleteList={select}/>
                }
            </CCol>
          </CRow>
          <CRow className="mt-3 mb-3">
            <CFormLabel className="mt-3 mb-3">주소록 내역</CFormLabel>
            <CRow className="mb-3">
            {loading?
            <div>
              <Loading/>
              <CCol xs={1}></CCol>
              <CCol xs={10}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                      <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                      <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
                      <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                </CTable>
                <p>총 {groupData.addressList==null? 0:groupData.addressList.length}개의 주소록이 그룹에 속해있습니다.</p>
              </CCol>
              <CCol xs={1}></CCol>
            </div>
            :<div>
              <CCol xs={1}></CCol>
              <CCol xs={10}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                      <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                      <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
                      <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                      {groupData.addressList!==undefined?groupData.addressList.map(d=> <GroupPhoneTableRow key={d.userAddressId} id={d.userAddressId} name={d.name} email={d.email} phone={d.phone} groupList={d.groupList} onSelect={onSelect}/>):null} 
                  </CTableBody>
                </CTable>
                <p>총 {groupData.addressList==null? 0:groupData.addressList.length}개의 주소록이 그룹에 속해있습니다.</p>
              </CCol>
              <CCol xs={1}></CCol>
            </div>
            }
            </CRow>
          </CRow>
        </CCardBody>
    </CCard>

  </div>
)}

export default GroupDetailList





