import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard, CCardBody, CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CInputGroup,
  CFormCheck,
  CTable,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CInputGroupText,
  CFormTextarea,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
  CModalContent,
  CModalDialog,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react';
import TemplateDetail from './TemplateDetail';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import UsePromise from 'src/lib/usePromise';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'src/modules/auth';
import Loading from 'src/lib/Loading/Loading';
import Pagination from "react-js-pagination";


const TemplateList = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  
  const [visibleRegModal, setVisibleRegModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [templateList , setTemplateList] = useState([]);
  const [pageData, setPageData] = useState({
    totalPage: 0,
    page: 1,
    size: 0,
    start: 0,
    end: 0,
    prev: false,
    next: false,
    totalElements : 1
  })
  const [detail, setDetail] = useState(null);


  useEffect(() => {
    setLoading(true);
    handleFetch(1, '');
  }, []);

  const handleFetch = (selectedPage) => {
  setLoading(true);
  axios.get(apiConfig.messageTemplateList,{headers: headers})
  .then(response => {
    const data = response.data;
    setTemplateList(data.content);
    setPageData({
    totalPage: 0,
    page: data.number+1,
    size: data.size,
    start: 1,
    end: data.totalPages,
    prev: data.first? false: true,
    next: data.last? false: true,
    totalElements : data.totalElements
  }); 
    setLoading(false);
  })
  .catch(error => console.error('Error', error));
};

const handlePageChange = (selectedPage) => {
  handleFetch(selectedPage);
};

  const tableRowClick = (e, id) => {
    console.log(e);
    // window.location.href = "/#/survey/detail/"+id;
  }



  return (
    <>
    <CModal alignment="center" backdrop="static" visible={visibleRegModal} onClose={() => setVisibleRegModal(false)}>
      <CModalHeader>
        <CModalTitle>템플릿 등록</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon1">이름</CInputGroupText>
            <CFormInput value="" />
          </CInputGroup>
        <CInputGroup>
        <CInputGroupText>내용</CInputGroupText>
          <CFormTextarea aria-label="With textarea" rows="10" >
          </CFormTextarea>
        </CInputGroup>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" variant="outline" onClick={() => setVisibleRegModal(false)}>
          취소
        </CButton>
        <CButton color="success" variant="outline">저장</CButton>
      </CModalFooter>
    </CModal>

      <CCard className="m-4">
        <CCardHeader>
          <strong>템플릿 리스트 </strong>
          {/* <small></small> */}
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CRow className="mt-3 mb-3">
            <CCol sm={12} md={6}>
              <CRow className="mb-1">
              <CCol xs="auto" className="me-auto">
                  <CButton color="danger" size="sm" variant="outline">삭제</CButton>
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" size="sm" variant="outline" onClick={() => setVisibleRegModal(!visibleRegModal)}>등록</CButton>

                 </CCol>
              </CRow>
              <CTable hover>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                { loading ? <Loading /> : <>
                  { 
                    templateList.length > 0 ? 
                    templateList.map((data) => (
                    <>
                      <CTableRow key={data.id}>
                      <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault"/>
                      </CTableHeaderCell>
                      <CTableDataCell>템플릿1</CTableDataCell>
                    </CTableRow>
                    </>
                    ))
                  : '참여 목록이 없습니다.' }
                  </>}
                </CTableBody>
              </CTable>

            
              {
                  templateList.length > 0 ? (<Pagination
                    activePage={pageData.page}
                    itemsCountPerPage={pageData.size}
                    totalItemsCount={pageData.totalElements}
                    pageRangeDisplayed={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                  />) : ''
                }

            </CCol>

            <TemplateDetail detail ={detail}></TemplateDetail>

          
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  </>

  )
}

export default TemplateList
