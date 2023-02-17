import React, {useEffect, useState} from 'react'
import {CCol, CRow} from "@coreui/react";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";

function SendingResultDetailInfo({sendingId}) {

  const sendingResultDetailInfoDummy = {
    "id": 0,
    "sendingId": 0,
    "sendingType": "SMS",
    "sendingRuleType": "CUSTOM",
    "success": null,
    "totalMessage": 10,
    "failedMessage": null,
    "avgLatency": 0,
    "inputTime": 1676512454720,
    "scheduleTime": null,
    "startTime": null,
    "completeTime": null,
    "logTime": null,
    "sendingStatus": null,
    "resultTxSuccessDto": {
      "sendingId": 0,
      "successCnt": 0,
      "failCnt": 0
    }
  }
  const [sendingResultDetailInfo, setSendingResultDetailInfo] = useState(sendingResultDetailInfoDummy);
  useEffect(() => {
    axios.get(apiConfig.resultSendingResult.replace("{sendingId}", sendingId))
      .then(function (response) {
        setSendingResultDetailInfo(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
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
          <p>등록 시간 : {new Date(sendingResultDetailInfo.inputTime).toLocaleString()}</p>
          {
            sendingResultDetailInfo.scheduleTime === null
              ? <p>예약 시간 : {"예약발송이 아닙니다."}</p>
              : <p>예약 시간 : {new Date(sendingResultDetailInfo.scheduleTime).toLocaleString()}</p>
          }
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
