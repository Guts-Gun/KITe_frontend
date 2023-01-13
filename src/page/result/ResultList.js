import React  from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableHead,
  CTabContent,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCol,
  CFormLabel,
  CInputGroup,
  CFormSelect,
  CButton,
  CFormInput,
  CInputGroupText,
  CPagination,
  CPaginationItem,
} from '@coreui/react'


function ResultList() {



  // 상세 페이지 링크
  const tableRowClick = (e, id) => {
    // window.location.href = "/#/resultDetail/"+id;
    window.location.href = "/#/resultDetail/";
  }

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
                <CTable>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">발송타입</CTableHeaderCell>
                        <CTableHeaderCell scope="col">개수(건)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">등록시각</CTableHeaderCell>
                        <CTableHeaderCell scope="col">예약시각</CTableHeaderCell>
                        <CTableHeaderCell scope="col">성공여부</CTableHeaderCell>
                        <CTableHeaderCell scope="col">실패개수</CTableHeaderCell>
                        <CTableHeaderCell scope="col">평균속도(초)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">완료시각</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow onClick={(e) => tableRowClick(e, 1)}>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>SMS</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                            <CTableDataCell>23-01-06 11:39:11</CTableDataCell>
                            <CTableDataCell></CTableDataCell>
                            <CTableDataCell>성공</CTableDataCell>
                            <CTableDataCell>0</CTableDataCell>
                            <CTableDataCell>0.1</CTableDataCell>
                            <CTableDataCell>23-01-06 11:39:59</CTableDataCell>
                        </CTableRow>
                        <CTableRow onClick={(e) => tableRowClick(e, 2)}>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>SMS</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                            <CTableDataCell>23-01-06 12:39:11</CTableDataCell>
                            <CTableDataCell>23-01-06 12:50:00</CTableDataCell>
                            <CTableDataCell>성공</CTableDataCell>
                            <CTableDataCell>0</CTableDataCell>
                            <CTableDataCell>0.1</CTableDataCell>
                            <CTableDataCell>23-01-06 12:50:59</CTableDataCell>
                        </CTableRow>
                        <CTableRow onClick={(e) => tableRowClick(e, 3)}>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                            <CTableDataCell>Email</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                            <CTableDataCell>23-01-06 23:23:11</CTableDataCell>
                            <CTableDataCell></CTableDataCell>
                            <CTableDataCell>성공</CTableDataCell>
                            <CTableDataCell>0</CTableDataCell>
                            <CTableDataCell>0.1</CTableDataCell>
                            <CTableDataCell>23-01-06 23:23:59</CTableDataCell>
                        </CTableRow>
                        <CTableRow onClick={(e) => tableRowClick(e, 4)}>
                            <CTableHeaderCell scope="row">4</CTableHeaderCell>
                            <CTableDataCell>SMS</CTableDataCell>
                            <CTableDataCell>10</CTableDataCell>
                            <CTableDataCell>23-01-06 23:25:11</CTableDataCell>
                            <CTableDataCell></CTableDataCell>
                            <CTableDataCell>일부성공</CTableDataCell>
                            <CTableDataCell>10</CTableDataCell>
                            <CTableDataCell>0.1</CTableDataCell>
                            <CTableDataCell>23-01-06 23:25:59</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
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
