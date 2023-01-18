import { CCard, CCardBody, CCardHeader, CCol, CPagination, CPaginationItem, CRow,
  CTable,CTableBody,CTableDataCell,CTableHead,CTableHeaderCell,CTableRow, } from '@coreui/react';
import { CChartBar, CChartDoughnut } from '@coreui/react-chartjs';
import React, {useState} from 'react'
import SendingResultDetailInfo from "./component/SendingResultDetailInfo";
import SendingResultBrokerGraph from "./component/SendingResultBrokerGraph";
import PropTypes from "prop-types";
function ResultDetail() {
  const [sendingResultDetail,setSendingResultDetail] = useState([
    {sendingId : 1, sendingType : "SMS", totalSending : 100, inputTime : 0, scheduleTime : 0, success: "true", failureSending: 0, avgSpeed : 0, completeTime : 0 },
  ]);
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발송 결과 상세 페이지</strong>
        </CCardHeader>
        <CCardBody>
          <SendingResultDetailInfo sendingId={1}/>
          <Graph sendingId={1}/>
          <Result/>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ResultDetail;

function Graph({sendingId}) {
  return (
    <div>
      <SendingResultBrokerGraph sendingId={sendingId}/>
    </div>
  );
}
Graph.propTypes = {
  sendingId : PropTypes.number.isRequired
}

function Result(){
  return(
    <div>
      <CRow>
        <CCol xs={12}>
          <CRow>
            <h1>발송 결과</h1>
          </CRow>
          <CRow>
            <CTable>
              <CTableHead>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="col">수신번호</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송상태</CTableHeaderCell>
                  <CTableHeaderCell scope="col">상세사유</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송제목</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송내용</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>010-2324-8257</CTableDataCell>
                  <CTableDataCell>결과 수신 실패</CTableDataCell>
                  <CTableDataCell>중계사 혼잡</CTableDataCell>
                  <CTableDataCell>올리브영 광고</CTableDataCell>
                  <CTableDataCell>김세빈 고객님에게...</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>010-2324-8257</CTableDataCell>
                  <CTableDataCell>결과 수신 실패</CTableDataCell>
                  <CTableDataCell>중계사 혼잡</CTableDataCell>
                  <CTableDataCell>올리브영 광고</CTableDataCell>
                  <CTableDataCell>김네빈 고객님에게...</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>010-2324-8257</CTableDataCell>
                  <CTableDataCell>결과 수신 실패</CTableDataCell>
                  <CTableDataCell>중계사 혼잡</CTableDataCell>
                  <CTableDataCell>올리브영 광고</CTableDataCell>
                  <CTableDataCell>김다섯빈 고객님에게...</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CRow>
          <CRow className="mb-3 justify-content-center">
            <CCol lg={12}>
              <CPagination align="center" aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </div>
  )
}
