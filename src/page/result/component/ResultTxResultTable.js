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
        id: 0,
        userId: "",
        resultSendingId: 0,
        txId: 0,
        brokerName: "",
        sendingType: "SMS",
        status: "COMPLETE",
        sender: "",
        receiver: "",
        success: true,
        failReason: null,
        title: "",
        mediaLink: "",
        content: "",
        inputTime: 0,
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
    totalElements: 1,
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
