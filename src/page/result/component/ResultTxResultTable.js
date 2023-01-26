import {
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import React, {useEffect, useState} from "react";
import SendingResultRow from "./SendingResultRow";
import ResultTxResultRow from "./ResultTxResultRow";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";
import SendingResultDetailInfo from "./SendingResultDetailInfo";
import MyPagination from "./MyPagination";

export function ResultTxResultTable({sendingId}) {

  const [txResultList, setTxResultList] = useState({
    "content": [
      {
        "id": 1,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 1,
        "brokerId": 1,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자1",
        "success": true,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      },
      {
        "id": 2,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 2,
        "brokerId": 2,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자2",
        "success": true,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      },
      {
        "id": 3,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 3,
        "brokerId": 3,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자3",
        "success": true,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      },
      {
        "id": 4,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 4,
        "brokerId": 1,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자4",
        "success": false,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      },
      {
        "id": 5,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 5,
        "brokerId": 2,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자5",
        "success": true,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      },
      {
        "id": 6,
        "userId": "1",
        "resultSendingId": 1,
        "txId": 6,
        "brokerId": 3,
        "sendingXId": 1,
        "sendingType": "SMS",
        "sender": "테스트번호",
        "receiver": "테스트 수신자6",
        "success": false,
        "failReason": null,
        "title": "테스트",
        "media_link": "테스트 링크",
        "content": "테스트 내용",
        "inputTime": 1,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": 6
      }
    ],
    "pageable": {
      "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
      },
      "offset": 0,
      "pageSize": 20,
      "pageNumber": 0,
      "paged": true,
      "unpaged": false
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 6,
    "size": 20,
    "number": 0,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "first": true,
    "numberOfElements": 6,
    "empty": false
  });
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(apiConfig.resultSendingTxResult + "/" + sendingId + "/tx" + "?page=" + page + "&size=" + limit)
      .then(function (response) {
        console.log(response.data);
        setTxResultList(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
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
                  <CTableHeaderCell scope="col">전송제목</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전송내용</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  txResultList.content.map((sendingResult, index) => (

                    <ResultTxResultRow key={index} rowIndex={index} txResult={sendingResult}/>
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
