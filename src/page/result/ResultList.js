import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CRow,} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import MyPagination from "./component/MyPagination";
import SendingResultSearchOption from "./component/SendingResultSearchOption";


function ResultList() {

  const sendingResultPageDummy = {
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
  };

  const [sendingResultPage, setSendingResultPage] = useState(sendingResultPageDummy);

  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(apiConfig.resultSendingResult + "?page=" + page + "&size=" + limit)
      .then(function (response) {
        console.log('api 호출');
        setSendingResultPage(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setSendingResultPage(sendingResultPageDummy);
    }).then(function () {
      // 항상 실행
    });
  }, [page]);

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <CRow>
            <strong>발송 리스트</strong>
          </CRow>
        </CCardHeader>

        <CCardBody>
          <SendingResultSearchOption/>
          <CCard className="mt-4 mb-4">
            <SendingResultTable sendingResultList={sendingResultPage.content}/>
          </CCard>

          <MyPagination pagable={sendingResultPage.pageable} totalPages={sendingResultPage.totalPages} page={page}
                        setPage={setPage} first={sendingResultPage.first} last={sendingResultPage.last}/>
        </CCardBody>
      </CCard>


    </>
  );
}

export default ResultList;
