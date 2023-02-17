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
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';

import PropTypes from "prop-types";
import {ResultTxDetailTableRow} from './ResultTxDetailTableRow';
import axios from "axios";
import apiConfig from "../../../../lib/apiConfig";

export function ResultTxDetailModal({sendingId, txId}) {
  const [visible, setVisible] = useState(false);

  const TxDetailDataDummy = {
    "id": 1,
    "userId": "solbitest",
    "resultSendingId": 1,
    "txId": 1,
    "brokerId": 1,
    "sendingType": "SMS",
    "sender": "01040109537",
    "receiver": "01011112222",
    "success": true,
    "failReason": null,
    "title": null,
    "mediaLink": null,
    "content": "몰?루",
    "inputTime": 1676258520737,
    "scheduleTime": null,
    "startTime": null,
    "sendTime": null,
    "completeTime": null,
    "resultTxTransferList": [
      {
        "id": 1,
        "txId": 1,
        "brokerId": 1,
        "success": true,
        "failReason": null,
        "sendTime": 1,
        "completeTime": 5
      },
      {
        "id": 2,
        "txId": 1,
        "brokerId": 1,
        "success": false,
        "failReason": null,
        "sendTime": 1,
        "completeTime": 5
      }
    ]
  };
  //txDetailData get
  const [txDetailData, setTxDetailData] = useState(TxDetailDataDummy);


//api붙이삼요

  useEffect(() => {
    if (visible) {

      axios.get(apiConfig.resultSendingTxResultDetail.replace('{sendingId}', sendingId).replace('{txId}', txId))
        .then(function (response) {
          setTxDetailData(response.data);
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
              <p><b>미디어링크</b> : {txDetailData.media_link}</p>
              <p><b>설정 중계사</b> : {txDetailData.brokerId}</p>
              <p><b>설정 전송 타입</b> : {txDetailData.sendingType}</p>
              <hr></hr>
              <p><b>사용자 입력 시간</b> : {txDetailData.startTime}</p>
              <p><b>스케쥴 시간</b> : {txDetailData.scheduleTime}</p>
              <p><b>큐 삽입 시간 ??</b> : {txDetailData.startTime}</p>
              <p><b>메세지 전송 시작 시간</b> : {txDetailData.sendTime}</p>
              <p><b>메세지 전송 완료 시간</b> : {txDetailData.completeTime}</p>
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
                    <CTableRow>
                      <CTableDataCell>브로커 이름 </CTableDataCell>
                      <CTableDataCell>대체 발송</CTableDataCell>
                      <CTableDataCell>2023.02.14</CTableDataCell>
                      <CTableDataCell>2023.02.14</CTableDataCell>
                      <CTableDataCell>실패</CTableDataCell>
                      <CTableDataCell>브로커 장애</CTableDataCell>
                    </CTableRow>
                    {txDetailData ? null : txDetailData.resultTxTransferList.map((d, i) => <ResultTxDetailTableRow
                      key={i} rowIndex={i} resultTx={txDetailData} resultTxTransfer={d}/>)}
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
