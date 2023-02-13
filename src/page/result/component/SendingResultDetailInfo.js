import React, {useEffect, useState} from 'react'
import {CCol, CRow} from "@coreui/react";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";

function SendingResultDetailInfo({sendingId}) {

  const sendingResultDetailInfoDummy = {
    "id": 1,
    "userId": "solbitest",
    "sendingId": 1,
    "sendingType": "SMS",
    "sendingRuleType": "CUSTOM",
    "success": true,
    "totalMessage": 5,
    "failedMessage": null,
    "avgLatency": 3335,
    "inputTime": 1,
    "scheduleTime": 3,
    "startTime": 5,
    "completeTime": 2,
    "logTime": 2,
    "sendingStatus": "COMPLETE",
    "resultTxSuccessDto": {
      "sendingId": 1,
      "successCnt": 3,
      "failCnt": 2
    }
  }
  const [sendingResultDetailInfo, setSendingResultDetailInfo] = useState(sendingResultDetailInfoDummy);
  useEffect(() => {
    axios.get(apiConfig.resultSendingResult + "/" + sendingId)
      .then(function (response) {
        console.log(response.data);
        setSendingResultDetailInfo(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
    }).then(function () {
      // 항상 실행
    });
  }, []);

  return (
    <CRow>
      <CRow>
        <h1>발송 정보</h1>
      </CRow>
      <CRow>
        <CCol xs={4}>
          <p>발송타입 : {sendingResultDetailInfo.sendingType}</p>
          <p>개수(건) : {sendingResultDetailInfo.totalMessage}</p>
          <p>등록 시간 : {sendingResultDetailInfo.inputTime}</p>
          <p>예약 시간 : {sendingResultDetailInfo.scheduleTime}</p>
          <p>발송 상태 : {sendingResultDetailInfo.sendingStatus}</p>
          <p>실패 개수 : {sendingResultDetailInfo.resultTxSuccessDto.failCnt}</p>
          <p>평균 속도(ms): {sendingResultDetailInfo.avgLatency}</p>
          <p>완료 시간 : {sendingResultDetailInfo.completeTime}</p>
        </CCol>
      </CRow>
    </CRow>
  )
}

SendingResultDetailInfo.propTypes = {
  sendingId: PropTypes.number.isRequired,
}

export default SendingResultDetailInfo;
