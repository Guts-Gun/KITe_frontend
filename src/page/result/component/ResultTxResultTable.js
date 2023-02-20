import {CCol, CRow, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React, {useEffect, useState} from "react";
import ResultTxResultRow from "./ResultTxResultRow";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";
import MyPagination from "./MyPagination";

export function ResultTxResultTable({sendingId}) {
  const txResultListDummy = {
    content: [
      {
        id: 7398,
        userId: "lee",
        resultSendingId: 33,
        txId: 7398,
        brokerName: "SKT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01062924527",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7399,
        userId: "lee",
        resultSendingId: 33,
        txId: 7399,
        brokerName: "SKT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01019385123",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7400,
        userId: "lee",
        resultSendingId: 33,
        txId: 7400,
        brokerName: "SKT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01094014645",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7401,
        userId: "lee",
        resultSendingId: 33,
        txId: 7401,
        brokerName: "KT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01066032347",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7402,
        userId: "lee",
        resultSendingId: 33,
        txId: 7402,
        brokerName: "KT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01097244599",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7403,
        userId: "lee",
        resultSendingId: 33,
        txId: 7403,
        brokerName: "KT",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01032458775",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7404,
        userId: "lee",
        resultSendingId: 33,
        txId: 7404,
        brokerName: "LG",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01070626380",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7405,
        userId: "lee",
        resultSendingId: 33,
        txId: 7405,
        brokerName: "LG",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01039609400",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7406,
        userId: "lee",
        resultSendingId: 33,
        txId: 7406,
        brokerName: "LG",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01037791883",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      },
      {
        id: 7407,
        userId: "lee",
        resultSendingId: 33,
        txId: 7407,
        brokerName: "LG",
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01031179087",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "null",
        content: "대충 문자",
        inputTime: 1676865560282,
        scheduleTime: null,
        startTime: null,
        sendTime: null,
        completeTime: null
      }
    ],
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      pageSize: 20,
      pageNumber: 0,
      paged: true,
      unpaged: false
    },
    last: true,
    totalElements: 10,
    totalPages: 1,
    size: 20,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: true,
    numberOfElements: 10,
    empty: false
  }
  const [txResultList, setTxResultList] = useState(txResultListDummy);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(apiConfig.resultSendingTxResult.replace("{sendingId}", sendingId) + "?page=" + page + "&size=" + limit)
      .then(function (response) {
        setTxResultList(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
    }).then(function () {
      // 항상 실행
    });
  }, [page]);


  return (
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
                  <CTableHeaderCell scope="col">index</CTableHeaderCell>
                  <CTableHeaderCell scope="col">수신번호</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송상태</CTableHeaderCell>
                  <CTableHeaderCell scope="col">상세사유</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송내용</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송 중계사</CTableHeaderCell>
                  <CTableHeaderCell scope="col">상세정보</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  txResultList.content.map((sendingResult, index) => (
                    <ResultTxResultRow key={index} rowIndex={index} sendingId={sendingId} txResult={sendingResult}/>
                  ))
                }
              </CTableBody>
            </CTable>
          </CRow>
          <CRow className="mb-3 justify-content-center">
            <CCol lg={12}>
              <MyPagination pagable={txResultList.pageable} totalPages={txResultList.totalPages} page={page}
                            setPage={setPage} first={txResultList.first} last={txResultList.last}/>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </div>
  )
}

ResultTxResultTable.propTypes = {
  sendingId: PropTypes.number.isRequired,
}
export default ResultTxResultTable;
