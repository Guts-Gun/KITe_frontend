import React, { useEffect,useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CForm, CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody
} from '@coreui/react';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import ErrorComponent from 'src/component/error/ErrorComponent';
import { GroupPhoneTableRow } from './GroupPhoneTableRow';

import PropTypes from "prop-types";

export function GroupPhoneMakeModal({groupId}) {
  const [visible, setVisible] = useState(false);

  //phone get
  const [phoneData,setPhoneData] = useState([]);

  //get data
  useEffect(()=>{
    axios.get(apiConfig.phoneBookSelectList)
    .then(function (response) {
        console.log(response.data)
        setPhoneData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[]);

   //select(for update.delete)
   const [select,setSelect] = useState([]);
  
   useEffect(()=>{
    setSelect([]);
    },[visible]);


   const onSelect = (id,checked) => {
    console.log(select);
    console.log(id);
     if(checked===true){
       setSelect([...select,id])
     }
     if(checked===false){ 
       setSelect(select.filter(d=>d!=id));
     }
   };

  //submit
  const onSubmit = (e) => {
    console.log(select);
    if(select.length>=1){
      axios.post(apiConfig.groupPhoneCreate+"/"+groupId, select)
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
    }
  };
  return (
    <>
      <CButton color="success" variant="outline" onClick={() => setVisible(!visible)}>추가</CButton>
      <CModal size="lg" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 내 전화번호 추가</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CRow className="mb-3">
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
                    {phoneData==null
                      ?<ErrorComponent log={"데이터가 없어요"}/>
                      :phoneData.map(d=> <GroupPhoneTableRow key={d.userAddressId} id={d.userAddressId} name={d.name} email={d.email} phone={d.phone} groupList={d.groupList} onSelect={onSelect}/> ) 
                    } 
                  </CTableBody>
                </CTable>
            </CRow>
            <CRow>
              <CCol xs={9}></CCol>
                <CCol xs={3} className="mt-3">
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                <CButton color="success" type="submit" onClick={onSubmit}>생성</CButton>
                </CCol>
            </CRow>
        </CModalBody>
      </CModal>
    </>
  );
}


GroupPhoneMakeModal.propTypes = {
  groupId : PropTypes.number,
};