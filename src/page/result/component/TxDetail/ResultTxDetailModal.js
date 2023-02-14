import React, { useEffect,useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CTableDataCell,CForm, CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody
} from '@coreui/react';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import ErrorComponent from 'src/component/error/ErrorComponent';

import PropTypes from "prop-types";
import ResultTxDetailRow, { ResultTxDetailTableRow } from './ResultTxDetailTableRow';

export function ResultTxDetailModal({sendingId,txId}) {
  const [visible, setVisible] = useState(false);

  //txDetailData get
  const [txDetailData,setTxDetailData] = useState({
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
    "title": "제목제목",
    "mediaLink": "/hello/hello",
    "content": "몰?루",
    "inputTime": 1676258520737, //프론트 입력 시간
    "scheduleTime": 1676258520800, //스케쥴 시간
    "startTime": 1676258520933, //큐 삽입 시간
    "sendTime": 1676258520123,  //브로커 전송 시간
    "completeTime": 1676258520500, //브로커 전송 완로 시간 
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
});


//api붙이삼요 
   /*
  //get data
  useEffect(()=>{
    axios.get(apiConfig.phoneBookSelectList)
    .then(function (response) {
        console.log(response.data)
        setTxDetailData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[]);
  */



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
                <CCol  sm={12} md={10} className="mt-3">
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
                      {txDetailData? null: txDetailData.resultTxTransferList.map((d,i)=><ResultTxDetailTableRow key={i} rowIndex={i} resultTx={txDetailData} resultTxTransfer={d}/>)}
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
  sendingId : PropTypes.number,
  txId : PropTypes.number,
};