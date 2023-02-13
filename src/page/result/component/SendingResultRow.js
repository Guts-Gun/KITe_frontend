import {CTableDataCell, CTableHeaderCell, CTableRow, CBadge} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';



function SendingResultRow({rowIndex, sendingResult}) {

  const format1 = "YYYY-MM-DD HH:mm:ss";
  const inputTimeFormat = moment(new Date(sendingResult.inputTime)).format(format1);
  const scheduleTimeFormat = moment(new Date(sendingResult.scheduleTime)).format(format1);
  const completeTimeFormat = moment(new Date(sendingResult.completeTime)).format(format1);

  function getstatusText(status){
    switch(status) {
      case "COMPLETE": // 완료
        return (<CBadge color="primary">{status}</CBadge>)
      case "PENDING": // 대기
        return (<CBadge color="info">{status}</CBadge>)
      case "FAIL": // 실패
        return (<CBadge color="danger">{status}</CBadge>)
      case "DELAY": // 지연
        return (<CBadge color="warning">{status}</CBadge>)
      case "SENDING": // 진행중
        return (<CBadge color="success">{status}</CBadge>)
      default:
       return "";
    }
  }
  // 상세 페이지 링크
  const tableRowClick = (e, id) => {
    window.location.href = "/#/resultDetail/" + id;
  }

  return (
    <CTableRow onClick={(e) => tableRowClick(e, sendingResult.sendingId)}>
      <CTableHeaderCell scope="row">{(rowIndex + 1)}</CTableHeaderCell>
      <CTableDataCell>{sendingResult.sendingType}</CTableDataCell>
      <CTableDataCell>{sendingResult.totalMessage}</CTableDataCell>
      <CTableDataCell>{sendingResult.inputTime == null? "" : inputTimeFormat}</CTableDataCell>
      <CTableDataCell>{sendingResult.scheduleTime == null? "" : scheduleTimeFormat}</CTableDataCell>
      <CTableDataCell>{getstatusText(sendingResult.sendingStatus)}</CTableDataCell>
      <CTableDataCell>{sendingResult.resultTxSuccessDto.successCnt}</CTableDataCell>
      <CTableDataCell>{sendingResult.resultTxSuccessDto.failCnt}</CTableDataCell>
      <CTableDataCell>{sendingResult.avgLatency}</CTableDataCell>
      <CTableDataCell>{sendingResult.completeTime == null? "" : completeTimeFormat}</CTableDataCell>
    </CTableRow>
  );

}

SendingResultRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  sendingResult: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.string,
    sendingId: PropTypes.number,
    sendingType: PropTypes.string,
    sendingRuleType: PropTypes.string,
    success: PropTypes.bool,
    totalMessage: PropTypes.number,
    failedMessage: PropTypes.number,
    avgLatency: PropTypes.number,
    inputTime: PropTypes.number,
    scheduleTime: PropTypes.number,
    startTime: PropTypes.number,
    completeTime: PropTypes.number,
    logTime: PropTypes.number,
    sendingStatus: PropTypes.string,
    resultTxSuccessDto: PropTypes.shape(
      {
        sendingId: PropTypes.number,
        successCnt: PropTypes.number,
        failCnt: PropTypes.number,
      }),
  })
}

export default SendingResultRow;
