import {CTableDataCell, CTableRow} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

function ResultTxDetailTableRow({rowIndex, resultTxTransfer}) {

  return (
    <CTableRow>
      <CTableDataCell>{resultTxTransfer.brokerName} </CTableDataCell>
      <CTableDataCell>{new Date(resultTxTransfer.sendTime).toLocaleString()}</CTableDataCell>
      <CTableDataCell>{new Date(resultTxTransfer.completeTime).toLocaleString()}</CTableDataCell>
      <CTableDataCell>{resultTxTransfer.success ? <p>성공</p> : <p>실패</p>}</CTableDataCell>
      <CTableDataCell>{resultTxTransfer.failReason}</CTableDataCell>
    </CTableRow>
  );

}


ResultTxDetailTableRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  resultTxTransfer: PropTypes.shape({
    id: PropTypes.number,
    brokerName: PropTypes.string,
    resultTxId: PropTypes.number,
    sendingType: PropTypes.string,
    sender: PropTypes.string,
    receiver: PropTypes.string,
    success: PropTypes.bool,
    failReason: PropTypes.string,
    mediaLink: PropTypes.string,
    content: PropTypes.string,
    inputTime: PropTypes.number,
    sendTime: PropTypes.number,
    completeTime: PropTypes.number,
  })
}

export default ResultTxDetailTableRow;

