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
import {useSelector} from "react-redux";

function SendingInfoCardList() {
  const {auth} = useSelector(({auth}) => ({auth: auth}));
  var headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }


  const sendingListDummy = [
    {
      "id": 1,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "CUSTOM",
      "sendingType": "SMS",
      "totalMessage": 2,
      "title": null,
      "mediaLink": null,
      "content": "테스트 내용",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 1,
        "successCnt": 3,
        "failCnt": 2
      }
    },
    {
      "id": 2,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "SPEED",
      "sendingType": "SMS",
      "totalMessage": 3,
      "title": null,
      "mediaLink": null,
      "content": "테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용테스트 내용",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 2,
        "successCnt": 2,
        "failCnt": 3
      }
    },
    {
      "id": 3,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "PRICE",
      "sendingType": "SMS",
      "totalMessage": 2,
      "title": null,
      "mediaLink": null,
      "content": "%고객명% 안녕",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 3,
        "successCnt": 1,
        "failCnt": 0
      }
    },
    {
      "id": 5,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "CUSTOM",
      "sendingType": "SMS",
      "totalMessage": 2,
      "title": null,
      "mediaLink": null,
      "content": "테스트 내용",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 5,
        "successCnt": 0,
        "failCnt": 0
      }
    },
    {
      "id": 6,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "CUSTOM",
      "sendingType": "SMS",
      "totalMessage": 2,
      "title": null,
      "mediaLink": null,
      "content": "테스트 내용",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 6,
        "successCnt": 0,
        "failCnt": 0
      }
    },
    {
      "id": 7,
      "sendingStatus": null,
      "inputTime": null,
      "sendingRuleType": "CUSTOM",
      "sendingType": "SMS",
      "totalMessage": 2,
      "title": null,
      "mediaLink": null,
      "content": "테스트 내용살려줘살려줘살려줘살려줘",
      "sender": "01040109537",
      "resultTxSuccessDto": {
        "sendingId": 7,
        "successCnt": 0,
        "failCnt": 0
      }
    }
  ]

  const [totalSendingInfo, setTotalSendingInfo] = useState([]);
  useEffect(() => {
    axios.get(apiConfig.resultSending, {headers: headers})
      .then(function (response) {
        console.log(response.data);
        setTotalSendingInfo(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setTotalSendingInfo(sendingListDummy)
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
            <span
              className="ms-auto fw-semibold">{(sendingInfo.resultTxSuccessDto.successCnt / sendingInfo.totalMessage) * 100}%</span>
          </div>
          <CProgress className="mb-3">
            <CProgressBar color="success"
                          value={(sendingInfo.resultTxSuccessDto.successCnt / sendingInfo.totalMessage) * 100}/>
            <CProgressBar color="danger"
                          value={(sendingInfo.resultTxSuccessDto.failCnt / sendingInfo.totalMessage) * 100}/>
          </CProgress>
          <CButton href={'/#/resultDetail/'+ sendingInfo.id}>상세</CButton>
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

