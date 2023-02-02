import React, {useEffect, useState, useRef} from 'react'
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
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
  CToastClose
} from '@coreui/react';
import TemplateDetail from './component/TemplateDetail';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import UsePromise from 'src/lib/usePromise';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'src/modules/auth';
import Loading from 'src/lib/Loading/Loading';
import Pagination from "react-js-pagination";
import ErrorComponent from 'src/component/error/ErrorComponent';
import moment from 'moment';
import TemplateRegModal from './component/TemplateRegModal';


const TemplateList = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  // 등록 모달
  const [visibleRegModal, setVisibleRegModal] = useState(false);

  // 클릭한 메세지 템플릿 상세 정보
  const [detail, setDetail] = useState(null);

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


  useEffect(() => {
    setLoading(false);
    handleFetch(1);
  }, []);


  // 메세지 템플릿 리스트 조회
  const handleFetch = (selectedPage) => {
  setLoading(true);
  axios.get(apiConfig.messageTemplateList+"?page="+ selectedPage,{headers: headers})
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

  // 페이지 클릭
  const handlePageChange = (selectedPage) => {
    handleFetch(selectedPage);
  };

  // 테이블 row 클릭
  const tableRowClick = (e, data) => {
    setDetail(data);
  }

  // 등록
  const clickRegMessageTemplate = (title, content) => {
    const body = {
        "title" : title,
        "content": content
    }
    setLoading(true);

    try {
      axios.post(apiConfig.createMessageTemplate, body, {headers: headers})
        .then((response) => {
          addToast(exampleToast("등록 완료"));
          setLoading(false);
          setVisibleRegModal(false);
          handleFetch(1);
        })
      .catch(function (error) {
      }).then(function() {
        setLoading(false);
      });
    } catch (e){
      setLoading(false);
    }

  }


  const [toast, addToast] = useState(0)
  const toaster = useRef();
  const exampleToast = (text) => (
    <CToast>
      <CToastHeader closeButton>
        <strong className="me-auto">🐰 KIT:e</strong>
      </CToastHeader>
      <CToastBody>{ text }</CToastBody>
    </CToast>
  )

  return (
    <>
      <CToaster ref={toaster} push={toast} placement="top-end" />

      <TemplateRegModal 
        visibleRegModal={visibleRegModal} 
        setVisibleRegModal={setVisibleRegModal}
        clickRegMessageTemplate={clickRegMessageTemplate}
        exampleToast={exampleToast}
        addToast={addToast}
      > </TemplateRegModal>

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
                    <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                { loading ? <Loading /> : 
                  
                    templateList.length > 0 ? 
                    templateList.map((data) => (
                      <CTableRow key={data.id} onClick={(e) => tableRowClick(e, data)}>
                          <CTableHeaderCell scope="row">
                          <CFormCheck id="flexCheckDefault"/>
                          </CTableHeaderCell>
                          <CTableDataCell>{data.title}</CTableDataCell>
                          <CTableDataCell>{moment(new Date(data.regDt)).format('YYYY-MM-DD HH:MM:SS')}</CTableDataCell>
                    </CTableRow>
                    ))
                  : <ErrorComponent log={"검색한 결과가 없어요"}></ErrorComponent> }
                  
                </CTableBody>
              </CTable>
              {
                  templateList.length > 0 ? (<Pagination key={pageData.page}
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
