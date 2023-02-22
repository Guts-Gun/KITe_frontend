import React, {useEffect, useState} from "react";
import {
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
import {useSelector} from "react-redux";
import SendingStatusBadge from "./SendingStatusBadge";

function SendingInfoCardList() {
  const {auth} = useSelector(({auth}) => ({auth: auth}));
  var headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }


  const sendingListDummy = [
    {
      id: 0,
      sendingStatus: "COMPLETE",
      inputTime: 0,
      sendingRuleType: "CUSTOM",
      sendingType: "SMS",
      totalMessage: 0,
      title: "",
      mediaLink: null,
      content: "",
      sender: "",
      resultTxSuccessDto: {
        "sendingId": 0,
        "successCnt": 0,
        "failCnt": 0
      }
    }
  ]

  const [totalSendingInfo, setTotalSendingInfo] = useState([]);
  useEffect(() => {
    axios.get(apiConfig.resultSending, {headers: headers})
      .then(function (response) {
        setTotalSendingInfo(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
    }).then(function () {
      // 항상 실행
    });
  }, []);

  const filterList = ['ALL', 'MMS', 'SMS', ' EMAIL', 'KAKAO'];
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
            <span>{new Date(sendingInfo.inputTime).toLocaleString()} </span>
            <SendingStatusBadge status={sendingInfo.sendingStatus}/>
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
            <span
              className="ms-auto fw-semibold">{(sendingInfo.resultTxSuccessDto.successCnt / sendingInfo.totalMessage) * 100}%</span>
          </div>
          <CProgress className="mb-3">
            <CProgressBar color="success"
                          value={(sendingInfo.resultTxSuccessDto.successCnt / sendingInfo.totalMessage) * 100}/>
            <CProgressBar color="danger"
                          value={(sendingInfo.resultTxSuccessDto.failCnt / sendingInfo.totalMessage) * 100}/>
          </CProgress>
          <CButton href={'/#/resultDetail/' + sendingInfo.id}>상세</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  );
}

SendingInfoCard.propTypes = {
  sendingInfo: PropTypes.shape({
    id: PropTypes.number,
    sendingStatus: PropTypes.string,
    sendingRuleType: PropTypes.string,
    sendingType: PropTypes.string,
    totalMessage: PropTypes.number,
    title: PropTypes.string,
    mediaLink: PropTypes.string,
    content: PropTypes.string,
    sender: PropTypes.string,
    inputTime: PropTypes.number,
    resultTxSuccessDto: PropTypes.shape(
      {
        sendingId: PropTypes.number,
        successCnt: PropTypes.number,
        failCnt: PropTypes.number,
      }),
  })
};

