import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";


function ResultList() {

  const [sendingResultList,setSendingResultList] = useState([
    {sendingId : 1, sendingType : "SMS", totalCount : 100, inputTime : 0, scheduleTime : 0, success: true, failureSending: 0, avgSpeed : 0, completeTime : 0 },
    {sendingId : 2, sendingType : "EMAIL", totalCount : 100, inputTime : 0, scheduleTime : 0, success: false, failureSending: 0, avgSpeed : 0, completeTime : 0 },
  ]);

  // useEffect(() => {
  //   setSendingResult([
  //     {id : 1, sendingType : "SMS"},
  //   ]);
  // })
  //
  // const sendingResultList = [
  //   {id : 1, sendingType : "SMS", totalCount : 100, inputTime : 0, scheduleTime : 0, success: "True", failureSending: 0, avgSpeed : 0, completeTime : 0 },
  // ];

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <CRow>
            <strong>발송 리스트</strong>
          </CRow>
        </CCardHeader>

        <CCardBody>
          <CRow className='mt-1'>
            <CCol className="col-sm-3">
              <CFormLabel >발송타입</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CInputGroup>
                <CFormSelect>
                  <option value="">SMS/MMS</option>
                  <option value="">e-mail</option>
                  <option value="">카카오톡</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mt-1'>
            <CCol className="col-sm-3">
              <CFormLabel >성공여부</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CInputGroup>
                <CFormSelect>
                  <option value="">성공</option>
                  <option value="">일부성공</option>
                  <option value="">실패</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mt-1'>
            <CCol className="col-sm-3">
              <CFormLabel >등록 시각</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CRow>
                <CInputGroup>
                  <CFormInput type="date"/>
                  <CFormInput type="time"/>
                  <CInputGroupText>~</CInputGroupText>
                  <CFormInput type="date"/>
                  <CFormInput type="time"/>
                </CInputGroup>

              </CRow>
            </CCol>
          </CRow>

          <CRow className='mt-1'>
            <CCol lg={12} className="text-end">
              <CButton color="primary" variant="outline">
                검색
              </CButton>
            </CCol>
          </CRow>

          <CCard className="mt-4 mb-4">
            <SendingResultTable sendingResultList={sendingResultList}/>
          </CCard>

          <CPagination align="center" aria-label="Page navigation example">
            <CPaginationItem aria-label="Previous" disabled>
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem active>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </CCardBody>
      </CCard>


    </>
  );
}

export default ResultList;
