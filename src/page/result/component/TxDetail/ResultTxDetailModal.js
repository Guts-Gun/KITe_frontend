import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import axios from "axios";
import apiConfig from "../../../../lib/apiConfig";
import PropTypes from "prop-types";
import ResultTxDetailTableRow from "./ResultTxDetailTableRow";


export function ResultTxDetailModal({sendingId, txId}) {
  const [visible, setVisible] = useState(false);

  const TxDetailDataDummy = {
    id: 7398,
    userId: "lee",
    resultSendingId: 33,
    txId: 7398,
    brokerName: "SKT",
    sendingType: "SMS",
    sender: "01000001111",
    receiver: "01062924527",
    success: true,
    failReason: null,
    title: "",
    mediaLink: "null",
    content: "대충 문자",
    inputTime: 1676865560282,
    scheduleTime: null,
    startTime: 1676865561006,
    sendTime: 1676865561023,
    completeTime: 1676865561153,
    resultTxTransferList: [
      {
        id: 2618,
        resultTxId: 3257,
        brokerId: 1,
        sendingType: "SMS",
        sender: "01000001111",
        receiver: "01062924527",
        success: true,
        failReason: null,
        sendTime: 1676865561023,
        completeTime: 1676865561153
      }
    ]
  }
  //txDetailData get
  const [txDetailData, setTxDetailData] = useState(TxDetailDataDummy);


//api붙이삼요

  useEffect(() => {
    if (visible) {

      axios.get(apiConfig.resultSendingTxResultDetail.replace('{sendingId}', sendingId).replace('{txId}', txId))
        .then(function (response) {
          setTxDetailData(response.data);
          console.log(txDetailData);
        }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행

      });
    }
  }, [visible]);


  return (
    <>
      <CButton variant="outline" onClick={() => setVisible(!visible)}>상세 정보 보기</CButton>
      <CModal size="xl" alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>단일 전송 결과</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol sm={8}>
              <h2>전송 내용</h2>
              <p><b>수신 번호</b> : {txDetailData.receiver} </p>
              <p><b>제목</b> : {txDetailData.title}</p>
              <p><b>미디어링크</b> : {txDetailData.mediaLink === "null" ? <b> 미디어 첨부 안함 </b> :
                <b>{txDetailData.mediaLink}</b>} </p>
              <p><b>설정 중계사</b> : {txDetailData.brokerName}</p>
              <p><b>설정 전송 타입</b> : {txDetailData.sendingType}</p>
              <hr></hr>
              <p><b>사용자 입력 시간</b> : {new Date(txDetailData.startTime).toLocaleString()}</p>
              <p><b>스케쥴 시간</b> : {txDetailData.scheduleTime === null ? <b>{"예약발송이 아닙니다."}</b> :
                <b>{new Date(txDetailData.scheduleTime).toLocaleString()}</b>}</p>
              <p><b>전체 메시지 전송 시간</b> : {new Date(txDetailData.startTime).toLocaleString()}</p>
              <p><b>메세지 전송 시작 시간</b> : {new Date(txDetailData.sendTime).toLocaleString()}</p>
              <p><b>메세지 전송 완료 시간</b> : {new Date(txDetailData.completeTime).toLocaleString()}</p>
            </CCol>
            <CCol sm={4}>
              <CRow><h2>전송 내용</h2></CRow>
              <CCol sm={12} md={10} className="mt-3">
                <div className='custom_div'>
                  <div className='custom_msg'>
                    {txDetailData.content}<br/><br/>
                  </div>
                </div>
              </CCol>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CRow><h2>발송 결과</h2></CRow>
              <CRow className="mb-3">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">브로커 정보</CTableHeaderCell>
                      <CTableHeaderCell scope="col">전송시간</CTableHeaderCell>
                      <CTableHeaderCell scope="col">완료시간</CTableHeaderCell>
                      <CTableHeaderCell scope="col">성공</CTableHeaderCell>
                      <CTableHeaderCell scope="col">상세 사유</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {txDetailData.resultTxTransferList != null
                      ? txDetailData.resultTxTransferList.map((d, i) =>
                        <ResultTxDetailTableRow key={i} rowIndex={i} resultTxTransfer={d}/>)
                      : <d></d>}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </>
  );
}


ResultTxDetailModal.propTypes = {
  sendingId: PropTypes.number,
  txId: PropTypes.number,
};
