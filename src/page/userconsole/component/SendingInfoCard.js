import React, {useEffect, useState} from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CListGroup,
  CListGroupItem,
  CProgress,
  CProgressBar,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilSend} from "@coreui/icons";
import PropTypes from "prop-types";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import FilterButton from "./FilterButton";

function SendingInfoCardList() {
  const sendingListDummy = [
    {
      id: 1,
      userId: "solbitest",
      sendingId: 1,
      sendingType: "SMS",
      sendingRuleType: "CUSTOM",
      success: true,
      totalMessage: 10,
      failedMessage: 2,
      avgSpeed: 0.1,
      inputTime: 1,
      scheduleTime: 3,
      startTime: 4,
      completeTime: 5,
      logTime: 6,
      sendingStatus: null
    },
       {
      id: 2,
      userId: "solbitest",
      sendingId: 1,
      sendingType: "e-Mail",
      sendingRuleType: "CUSTOM",
      success: true,
      totalMessage: 10,
      failedMessage: 2,
      avgSpeed: 0.1,
      inputTime: 1,
      scheduleTime: 3,
      startTime: 4,
      completeTime: 5,
      logTime: 6,
      sendingStatus: null
    },
       {
      id: 3,
      userId: "solbitest",
      sendingId: 1,
      sendingType: "Kakao",
      sendingRuleType: "CUSTOM",
      success: true,
      totalMessage: 10,
      failedMessage: 2,
      avgSpeed: 0.1,
      inputTime: 1,
      scheduleTime: 3,
      startTime: 4,
      completeTime: 5,
      logTime: 6,
      sendingStatus: null
    },
    // {
    //   id: 2,
    //   title: "2023-01-07 15:00:00",
    //   status: "대기",
    //   sendingType: "e-Mail",
    //   totalSending: 2000,
    //   successRate: 0,
    //   detailLink: "#"
    // },
    // {
    //   id: 3,
    //   title: "2023-01-08 15:00:00",
    //   status: "완료",
    //   sendingType: "Kakao",
    //   totalSending: 1000,
    //   successRate: 99,
    //   detailLink: "#"
    // }
  ]

  const [totalSendingInfo, setTotalSendingInfo] = useState(sendingListDummy);
  useEffect(() => {
    axios.get(apiConfig.resultSendingResult)
      .then(function (response) {
        console.log(response.data.content);
        setTotalSendingInfo(response.data.content);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setTotalSendingInfo(sendingListDummy)
    }).then(function () {
      // 항상 실행
    });
  }, []);

  const filterList = ['ALL', 'SMS', 'e-Mail', 'Kakao'];
  const [sendingFilter, setSendingFilter] = useState("ALL");

  return (

    <CCardBody>
      <CRow>
        <CCol sm={5}>
          <h4 id="traffic" className="card-title mb-0">
            나의 발송
          </h4>
        </CCol>
        <CCol sm={7}>
          <FilterButton filterList={filterList} filter={sendingFilter} setFilter={setSendingFilter}/>
        </CCol>
      </CRow>


      <CRow className='mt-3'>
        {sendingFilter === "ALL"
          ? totalSendingInfo.map((sendingInfo, index) => (
            <SendingInfoCard key={index} sendingInfo={sendingInfo}/>))
          : totalSendingInfo.filter(sendingInfo => sendingInfo.sendingType === sendingFilter).map((sendingInfo, index) => (
            <SendingInfoCard key={index} sendingInfo={sendingInfo}/>))
        }
      </CRow>


    </CCardBody>

  );
}

export default SendingInfoCardList;

function SendingInfoCard({sendingInfo}) {
  return (
    <CCol sm={4}>
      <CCard>
        <CCardBody>
          <CCardTitle>
            <span>{sendingInfo.inputTime} </span>
            <CBadge color="primary" shape="rounded-pill">{sendingInfo.sendingStatus}</CBadge>
          </CCardTitle>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>타입 : {sendingInfo.sendingType}</CListGroupItem>
          <CListGroupItem>총 개수 : {sendingInfo.totalMessage}</CListGroupItem>

        </CListGroup>
        <CCardBody>
          <div className="progress-group-header">
            <CIcon className="me-2" icon={cilSend} size="lg"/>
            <span>{sendingInfo.sendingStatus}</span>
            <span className="ms-auto fw-semibold">{(sendingInfo.failedMessage/sendingInfo.totalMessage)*100}%</span>
          </div>
          <CProgress className="mb-3">
            <CProgressBar color="success" value={100 - (sendingInfo.failedMessage/sendingInfo.totalMessage)*100}/>
            <CProgressBar color="danger" value={(sendingInfo.failedMessage/sendingInfo.totalMessage)*100}/>
          </CProgress>
          <CButton href={'/#/resultDetail'}>상세</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  );
}

SendingInfoCard.propTypes = {
  sendingInfo: PropTypes.shape({
    sendingId: PropTypes.number,
    userId: PropTypes.string,
    sendingType: PropTypes.string,
    sendingRuleType: PropTypes.string,
    success: PropTypes.bool,
    totalMessage: PropTypes.number,
    failedMessage: PropTypes.number,
    avgSpeed: PropTypes.number,
    inputTime: PropTypes.number,
    scheduleTime: PropTypes.number,
    startTime: PropTypes.number,
    completeTime: PropTypes.number,
    sendingStatus: PropTypes.string
  })
};
