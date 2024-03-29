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
    id: 0,
    userId: "",
    resultSendingId: 0,
    txId: 0,
    brokerName: "",
    sendingType: "",
    sender: "",
    receiver: "",
    success: null,
    failReason: null,
    title: "",
    mediaLink: null,
    content: "",
    inputTime: null,
    scheduleTime: null,
    startTime: null,
    sendTime: null,
    completeTime: null,
    resultTxTransferList: [
      {
        id: 0,
        resultTxId: 0,
        brokerId: null,
        sendingType: "",
        sender: "",
        receiver: "",
        success: null,
        failReason: null,
        sendTime: null,
        completeTime: null
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
              <p><b>사용자 입력 시간</b> : {new Date(txDetailData.startTime).toLocaleString() + " " + new Date(txDetailData.startTime).getMilliseconds()} </p>
              <p><b>스케쥴 시간</b> : {txDetailData.scheduleTime === null ? <b>{"예약발송이 아닙니다."}</b> :
                <b>{new Date(txDetailData.scheduleTime + " " + new Date(txDetailData.scheduleTime).getMilliseconds()).toLocaleString()}</b>}</p>
              <p><b>전체 메시지 전송 시간</b> : {new Date(txDetailData.startTime).toLocaleString() + " " + new Date(txDetailData.startTime).getMilliseconds()}</p>
              <p><b>메세지 전송 시작 시간</b> : {new Date(txDetailData.sendTime).toLocaleString() + " " + new Date(txDetailData.sendTime).getMilliseconds()}</p>
              <p><b>메세지 전송 완료 시간</b> : {new Date(txDetailData.completeTime).toLocaleString() + " " + new Date(txDetailData.completeTime).getMilliseconds()}</p>
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
