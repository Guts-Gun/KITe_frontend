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

export function ResultTxDetailModal({txId,txResult}) {
  const [visible, setVisible] = useState(false);


  /*
  //txDetailData get
  const [txDetailData,setTxDetailData] = useState([]);

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
            <p><b>수신 번호</b> : {txResult.receiver} </p>
            <p><b>제목</b> : {txResult.title}</p>
            <p><b>미디어링크</b> : {txResult.media_link}</p>
          </CRow>
          <CRow>
            <CCol sm={4}>  
                <CRow><h2>전송 내용</h2></CRow>
                <CCol  sm={12} md={10} className="mt-3">
                    <div className='custom_div'>
                      <div className='custom_msg'>
                      {txResult.content}<br/><br/>
                      </div>
                    </div>
                </CCol>
            </CCol>
            <CCol sm={8}>
              <CRow><h2>발송 결과</h2></CRow>
              <CRow className="mb-3">
                <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">브로커 정보</CTableHeaderCell>
                        <CTableHeaderCell scope="col">발송 타입</CTableHeaderCell>
                        <CTableHeaderCell scope="col">시작시간?/스케쥴시간?</CTableHeaderCell>
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
                        <CTableDataCell>2023.02.14</CTableDataCell>
                        <CTableDataCell>오류</CTableDataCell>
                        <CTableDataCell>브로커 장애</CTableDataCell>
                      </CTableRow>
                      <ResultTxDetailTableRow key={txId} rowIndex={txId} txResult={txResult}/>
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
  txId : PropTypes.number,
  txResult: PropTypes.shape({
    sendingId: PropTypes.number,
    txId:PropTypes.number,
    
    //default 정보
    title: PropTypes.string,
    content: PropTypes.string,
    media_link : PropTypes.string,

    sender: PropTypes.string,
    receiver: PropTypes.string,
  
    //broker 전송 여부에 따라 다름
    brokerId : PropTypes.number,
    sendingType: PropTypes.string,

    inputTime: PropTypes.number,
    startTime : PropTypes.number,
    scheduleTime: PropTypes.number,
    sendTime: PropTypes.number,
    completeTime: PropTypes.number,

    success: PropTypes.bool,
    failReason: PropTypes.string,
  }),
};