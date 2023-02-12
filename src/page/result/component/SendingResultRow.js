import {CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

function SendingResultRow({rowIndex, sendingResult}) {
  // 상세 페이지 링크
  const tableRowClick = (e, id) => {
    window.location.href = "/#/resultDetail/" + id;
    // window.location.href = "/#/resultDetail/";
  }

  return (
    <CTableRow onClick={(e) => tableRowClick(e, sendingResult.sendingId)}>
      <CTableHeaderCell scope="row">{(rowIndex + 1)}</CTableHeaderCell>
      <CTableDataCell>{sendingResult.sendingType}</CTableDataCell>
      <CTableDataCell>{sendingResult.totalMessage}</CTableDataCell>
      <CTableDataCell>{sendingResult.inputTime}</CTableDataCell>
      <CTableDataCell>{sendingResult.scheduleTime}</CTableDataCell>
      <CTableDataCell>{sendingResult.sendingStatus}</CTableDataCell>
      <CTableDataCell>{sendingResult.resultTxSuccessDto.failCnt}</CTableDataCell>
      <CTableDataCell>{sendingResult.avgLatency}</CTableDataCell>
      <CTableDataCell>{sendingResult.completeTime}</CTableDataCell>
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
