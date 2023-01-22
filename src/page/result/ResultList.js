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
  CRow,
} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import MyPagination from "./component/MyPagination";


function ResultList() {

  const [sendingResultPage, setSendingResultPage] = useState({
    content: [
      {
        id: 1,
        userId: "1",
        sendingId: 1,
        sendingType: "SMS",
        sendingRuleType: "CUSTOM",
        success: true,
        totalMessage: 10,
        failedMessage: 2,
        avgSpeed: 0.1,
        inputTime: 2,
        scheduleTime: 3,
        startTime: 4,
        completeTime: 5,
        logTime: 6
      }
    ],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 1,
      unpaged: false,
      paged: true
    },
    last: true,
    totalPages: 1,
    totalElements: 1,
    size: 1,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: true,
    numberOfElements: 1,
    empty: false
  });

  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(apiConfig.resultSendingResult + "?page=" + page + "&size=" + limit)
      .then(function (response) {
        setSendingResultPage(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setSendingResultPage([
        {
          content: [
            {
              id: 1,
              userId: "1",
              sendingId: 1,
              sendingType: "SMS",
              sendingRuleType: "CUSTOM",
              success: true,
              totalMessage: 10,
              failedMessage: 2,
              avgSpeed: 0.1,
              inputTime: 2,
              scheduleTime: 3,
              startTime: 4,
              completeTime: 5,
              logTime: 6
            }
          ],
          pageable: {
            sort: {
              empty: true,
              sorted: false,
              unsorted: true
            },
            offset: 0,
            pageNumber: 0,
            pageSize: 1,
            unpaged: false,
            paged: true
          },
          last: true,
          totalPages: 1,
          totalElements: 1,
          size: 1,
          number: 0,
          sort: {
            empty: true,
            sorted: false,
            unsorted: true
          },
          first: true,
          numberOfElements: 1,
          empty: false
        }
      ])
    }).then(function () {
      // 항상 실행
    });
  }, [page]);

  console.log(sendingResultPage);
  console.log(page);

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
              <CFormLabel>성공여부</CFormLabel>
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
              <CFormLabel>등록 시각</CFormLabel>
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
            <SendingResultTable sendingResultList={sendingResultPage.content}/>
          </CCard>

          <MyPagination pagable={sendingResultPage.pageable} totalPages={sendingResultPage.totalPages} page={page} setPage={setPage} first={sendingResultPage.first} last={sendingResultPage.last}  />
        </CCardBody>
      </CCard>


    </>
  );
}

export default ResultList;
