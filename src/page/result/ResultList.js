import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CRow, CButton, CCol, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import SendingResultSearchOption from "./component/SendingResultSearchOption";
import {useSelector} from "react-redux";
import Loading from 'src/lib/Loading/Loading';
import Pagination from "react-js-pagination";
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

function ResultList() {

  const {auth} = useSelector(({auth}) => ({auth: auth}));
  let headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }


  const [loading, setLoading] = useState(false);

  const [resultList , setResultList] = useState([]);

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


  const [sendingType, setSendingType] = useState(null);
  const [sendingStatus, setSendingStatus] = useState(null);

  let defaultStartDt = new Date();
  defaultStartDt = defaultStartDt.setMonth(defaultStartDt.getMonth()-3);

  const [startDt, setStartDt] = useState(new Date(defaultStartDt));
  const [endDt, setEndDt] = useState(new Date());


  const handleFetch = (selectedPage) => {

    setLoading(true);
    let filter = "?page="+ selectedPage;
    if( sendingType != null){
      filter += "&sendingType=" + sendingType.target.value;
    }
    if( sendingStatus != null){
      filter += "&sendingStatus=" + sendingStatus.target.value;
    }
    const format1 = "YYYY-MM-DD HH:mm:ss";
    if( startDt != null){
      filter += "&startDt=" + moment(startDt).format(format1);
    }
    if( endDt != null){
      filter += "&endDt=" + moment(endDt).format(format1);
    }
    axios.get(apiConfig.resultSendingList + filter, {headers: headers})
    .then(response => {
      const data = response.data;
      setResultList(data.content);

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
              <CFormLabel>발송타입</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CInputGroup>
                <CFormSelect onChange={setSendingType}>
                  <option value="">선택</option>
                  <option value="SMS">SMS</option>
                  <option value="MMS">MMS</option>
                  <option value="EMAIL">EMAIL</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
            <CCol className="col-sm-3">
              <CFormLabel>상태</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CInputGroup>
                <CFormSelect onChange={setSendingStatus}>
                  <option value="">선택</option>
                  <option value="SUCCESS">성공</option>
                  <option value="PENDING">대기</option>
                  <option value="FAIL">실패</option>
                  <option value="SENDING">진행중</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow className='mt-1'>
            <CCol className="col-sm-3">
              <CFormLabel>등록 시각</CFormLabel>
            </CCol>
            <CCol className="col-sm-9">
              <CRow>
                <CInputGroup>
                  <DateTimePicker  onChange={setStartDt} value={startDt} />
                  <CInputGroupText>~</CInputGroupText>
                  <DateTimePicker onChange={setEndDt} value={endDt} />
                </CInputGroup>

              </CRow>
            </CCol>
          </CRow>

          <CRow className='mt-1'>
            <CCol lg={12} className="text-end">
              <CButton color="primary" variant="outline" onClick={()=>handleFetch(1)}>
                검색
              </CButton>
            </CCol>
          </CRow>


          <CCard className="mt-4 mb-4">
          { loading ? <Loading /> : <SendingResultTable sendingResultList={resultList}/>}
         
            {
              resultList.length > 0 ? (<Pagination key={pageData.page}
                activePage={pageData.page}
                itemsCountPerPage={pageData.size}
                totalItemsCount={pageData.totalElements}
                pageRangeDisplayed={10}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
              />) : ''
            }
          </CCard>
        </CCardBody>
      </CCard>


    </>
  );
}

export default ResultList;
