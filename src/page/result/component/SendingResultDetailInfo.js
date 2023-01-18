import React, {useEffect, useState} from 'react'
import {CCol, CRow} from "@coreui/react";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import PropTypes from "prop-types";

function SendingResultDetailInfo({sendingId}) {
  const [sendingResultDetailInfo, setSendingResultDetailInfo] = useState(
    {sendingId : 1, sendingType : "SMS", totalSending : 100, inputTime : 0, scheduleTime : 0, success: "true", failureSending: 0, avgSpeed : 0, completeTime : 0 },
  );
  useEffect(()=>{
    axios.get(apiConfig.resultSendingResult + "/" + sendingId)
      .then(function (response) {
        console.log(response.data);
        setSendingResultDetailInfo(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
    }).then(function() {
      // 항상 실행
    });
  },[]);

  return (
    <CRow>
      <CRow>
        <h1>발송 정보</h1>
      </CRow>
      <CRow>
        <CCol xs={4}>
          <p>발송타입 : {sendingResultDetailInfo.sendingType}</p>
          <p>개수(건) : {sendingResultDetailInfo.totalSending}</p>
          <p>등록 시간 : {sendingResultDetailInfo.inputTime}</p>
          <p>예약 시간 : {sendingResultDetailInfo.scheduleTime}</p>
          <p>성공 여부 : {sendingResultDetailInfo.success}</p>
          <p>실패 개수 : {sendingResultDetailInfo.failureSending}</p>
          <p>평균 속도(초): {sendingResultDetailInfo.avgSpeed}</p>
          <p>완료 시간 : {sendingResultDetailInfo.completeTime}</p>
        </CCol>
      </CRow>
    </CRow>
  )
}

SendingResultDetailInfo.propTypes = {
  sendingId : PropTypes.number.isRequired,
}

export default SendingResultDetailInfo;
