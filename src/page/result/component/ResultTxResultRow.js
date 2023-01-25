import {CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

function ResultTxResultRow({rowIndex, txResult}) {
  // 상세 페이지 링크
  const tableRowClick = (e, id) => {
    //window.location.href = "/#/resultDetail/"+id;
    window.location.href = "/#/resultDetail/";
  }

  console.log(txResult);
  return (
    <CTableRow onClick={(e) => tableRowClick(e, txResult.sendingId)}>
      <CTableHeaderCell scope="row">{(rowIndex + 1).toString()}</CTableHeaderCell>
      <CTableDataCell>{txResult.receiver}</CTableDataCell>
      <CTableDataCell>{txResult.success.toString()}</CTableDataCell>
      <CTableDataCell>{txResult.failReason}</CTableDataCell>
      <CTableDataCell>{txResult.title}</CTableDataCell>
      <CTableDataCell>{txResult.content.toString()}</CTableDataCell>
    </CTableRow>


  );

}

ResultTxResultRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  txResult: PropTypes.shape({
    sendingId: PropTypes.number,
    sendingType: PropTypes.string,
    receiver: PropTypes.string,
    failReason: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    inputTime: PropTypes.number,
    scheduleTime: PropTypes.number,
    success: PropTypes.bool,
    failedMessage: PropTypes.number,
    avgSpeed: PropTypes.number,
    completeTime: PropTypes.number,
  }),
}

export default ResultTxResultRow;
