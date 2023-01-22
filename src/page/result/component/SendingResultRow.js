import {CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

function SendingResultRow({rowIndex, sendingResult}) {
  // 상세 페이지 링크
  const tableRowClick = (e, id) => {
    // window.location.href = "/#/resultDetail/"+id;
    window.location.href = "/#/resultDetail/";
  }

  console.log(sendingResult);
  return(
    <CTableRow onClick={(e) => tableRowClick(e, sendingResult.sendingId)}>
      <CTableHeaderCell scope="row">{(rowIndex + 1).toString()}</CTableHeaderCell>
      <CTableDataCell>{sendingResult.sendingType}</CTableDataCell>
      <CTableDataCell>{sendingResult.totalMessage}</CTableDataCell>
      <CTableDataCell>{sendingResult.inputTime}</CTableDataCell>
      <CTableDataCell>{sendingResult.scheduleTime}</CTableDataCell>
      <CTableDataCell>{sendingResult.success.toString()}</CTableDataCell>
      <CTableDataCell>{sendingResult.failedMessage}</CTableDataCell>
      <CTableDataCell>{sendingResult.avgSpeed}</CTableDataCell>
      <CTableDataCell>{sendingResult.completeTime}</CTableDataCell>
    </CTableRow>


  );

}

SendingResultRow.propTypes  = {
  rowIndex : PropTypes.number.isRequired,
  sendingResult : PropTypes.shape({
    sendingId : PropTypes.number,
    sendingType : PropTypes.string,
    totalMessage : PropTypes.number,
    inputTime : PropTypes.number,
    scheduleTime : PropTypes.number,
    success : PropTypes.bool,
    failedMessage : PropTypes.number,
    avgSpeed : PropTypes.number,
    completeTime : PropTypes.number,
  }),
}

export default SendingResultRow;
