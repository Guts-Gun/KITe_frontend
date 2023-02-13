import {CCol, CRow, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React, {useEffect, useState} from "react";
import ResultTxResultRow from "./ResultTxResultRow";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";
import MyPagination from "./MyPagination";

export function ResultTxResultTable({sendingId}) {
  const txResultListDummy = {
    "content": [
      {
        "id": 1,
        "userId": "solbitest",
        "resultSendingId": 1,
        "txId": 1,
        "brokerId": 1,
        "sendingType": "SMS",
        "sender": "01040109537",
        "receiver": "01011112222",
        "success": true,
        "failReason": null,
        "title": null,
        "mediaLink": null,
        "content": "몰?루",
        "inputTime": 1676258520737,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": null
      },
      {
        "id": 2,
        "userId": "solbitest",
        "resultSendingId": 1,
        "txId": 11,
        "brokerId": 2,
        "sendingType": "SMS",
        "sender": "01040109537",
        "receiver": "01011112222",
        "success": true,
        "failReason": null,
        "title": null,
        "mediaLink": null,
        "content": "몰?루",
        "inputTime": 1676258520737,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": null
      },
      {
        "id": 3,
        "userId": "solbitest",
        "resultSendingId": 1,
        "txId": 2,
        "brokerId": 3,
        "sendingType": "SMS",
        "sender": "01040109537",
        "receiver": "01011112222",
        "success": false,
        "failReason": null,
        "title": null,
        "mediaLink": null,
        "content": "몰?루",
        "inputTime": 1676258520737,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": null
      },
      {
        "id": 4,
        "userId": "solbitest",
        "resultSendingId": 1,
        "txId": 3,
        "brokerId": 1,
        "sendingType": "SMS",
        "sender": "01040109537",
        "receiver": "01011112222",
        "success": false,
        "failReason": null,
        "title": null,
        "mediaLink": null,
        "content": "몰?루",
        "inputTime": 1676258520737,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": null
      },
      {
        "id": 5,
        "userId": "solbitest",
        "resultSendingId": 1,
        "txId": 4,
        "brokerId": 2,
        "sendingType": "SMS",
        "sender": "01040109537",
        "receiver": "01011112222",
        "success": true,
        "failReason": null,
        "title": null,
        "mediaLink": null,
        "content": "몰?루",
        "inputTime": 1676258520737,
        "scheduleTime": null,
        "startTime": null,
        "sendTime": null,
        "completeTime": null
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
    "totalElements": 5,
    "totalPages": 1,
    "size": 20,
    "number": 0,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "first": true,
    "numberOfElements": 5,
    "empty": false
  }
  const [txResultList, setTxResultList] = useState(txResultListDummy);
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
      setTxResultList(txResultListDummy);
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
