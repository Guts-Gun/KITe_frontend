import React, {useEffect, useState} from 'react'
import {CCol, CRow} from "@coreui/react";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";

function SendingResultDetailInfo({sendingId}) {

  const sendingResultDetailInfoDummy = {
    id: 0,
    userId: "",
    sendingId: 0,
    sendingType: "SMS",
    sendingRuleType: "CUSTOM",
    success: true,
    totalMessage: 0,
    failedMessage: 0,
    avgLatency: 0,
    inputTime: 0,
    scheduleTime: null,
    startTime: 0,
    completeTime: 0,
    logTime: null,
    sendingStatus: "COMPLETE",
    resultTxSuccessDto: {
      sendingId: 0,
      successCnt: 0,
      failCnt: 0
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
      console.log(sendingResultDetailInfo);
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
          <p>등록 시간 : {new Date(sendingResultDetailInfo.inputTime).toLocaleString()+ " " + new Date(sendingResultDetailInfo.inputTime).getMilliseconds()}</p>
          {
            sendingResultDetailInfo.scheduleTime === null
              ? <p>예약 시간 : {"예약발송이 아닙니다."}</p>
              : <p>예약 시간 : {new Date(sendingResultDetailInfo.scheduleTime).toLocaleString()+ " " + new Date(sendingResultDetailInfo.scheduleTime).getMilliseconds()}</p>
          }
          <p>발송 상태 : {sendingResultDetailInfo.sendingStatus}</p>
          <p>실패 개수 : {sendingResultDetailInfo.resultTxSuccessDto.failCnt}</p>
          <p>평균 latency (ms): {sendingResultDetailInfo.avgLatency + " ms"} </p>
          <p>발송 시작 시간 : {new Date(sendingResultDetailInfo.startTime).toLocaleString()+ " " + new Date(sendingResultDetailInfo.startTime).getMilliseconds()} </p>

          {
            sendingResultDetailInfo.completeTime === null
              ? <p>발송 완료 시간 : {"아직 완료가 아닙니다."}</p>
              : <p>발송 완료 시간 : {new Date(sendingResultDetailInfo.completeTime).toLocaleString()+ " " + new Date(sendingResultDetailInfo.completeTime).getMilliseconds()}</p>
          }
        </CCol>
      </CRow>
    </CRow>
  )
}

SendingResultDetailInfo.propTypes = {
  sendingId: PropTypes.number.isRequired,
}

export default SendingResultDetailInfo;
