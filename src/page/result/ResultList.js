import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CRow,} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import MyPagination from "./component/MyPagination";
import SendingResultSearchOption from "./component/SendingResultSearchOption";
import {useSelector} from "react-redux";


function ResultList() {

  const {auth} = useSelector(({auth}) => ({auth: auth}));
  let headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }

  const sendingResultPageDummy = {
    "content": [
      {
        "id": 1,
        "userId": "solbitest",
        "sendingId": 1,
        "sendingType": "SMS",
        "sendingRuleType": null,
        "success": null,
        "totalMessage": 5,
        "failedMessage": null,
        "avgLatency": null,
        "inputTime": null,
        "scheduleTime": null,
        "startTime": null,
        "completeTime": null,
        "logTime": null,
        "sendingStatus": null
      },
      {
        "id": 2,
        "userId": "solbitest",
        "sendingId": 2,
        "sendingType": "MMS",
        "sendingRuleType": null,
        "success": null,
        "totalMessage": 1000,
        "failedMessage": null,
        "avgLatency": null,
        "inputTime": null,
        "scheduleTime": null,
        "startTime": null,
        "completeTime": null,
        "logTime": null,
        "sendingStatus": null
      }
    ],
    "pageable": {
      "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
      },
      "offset": 0,
      "pageSize": 2,
      "pageNumber": 0,
      "paged": true,
      "unpaged": false
    },
    "last": false,
    "totalPages": 4,
    "totalElements": 7,
    "size": 2,
    "number": 0,
    "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
    },
    "first": true,
    "numberOfElements": 2,
    "empty": false
  };

  const [sendingResultPage, setSendingResultPage] = useState({content: [],});

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(apiConfig.resultSendingResult + "?page=" + page + "&size=" + limit, {headers: headers})
      .then(function (response) {
        console.log('api 호출');
        setSendingResultPage(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setSendingResultPage(sendingResultPageDummy);
    }).then(function () {
      // 항상 실행
      setSendingResultPage(sendingResultPageDummy);
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
