import {CTableDataCell, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";
import {ResultTxDetailModal} from "./TxDetail/ResultTxDetailModal";
import SendingStatusBadge from "../../userconsole/component/SendingStatusBadge";

function ResultTxResultRow({rowIndex, sendingId, txResult}) {

  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{(rowIndex + 1).toString()}</CTableHeaderCell>
      <CTableDataCell>{txResult.receiver}</CTableDataCell>
      <CTableDataCell><SendingStatusBadge status={txResult.status}/></CTableDataCell>
      <CTableDataCell>{txResult.failReason}</CTableDataCell>
      <CTableDataCell>{txResult.content}</CTableDataCell>
      <CTableDataCell>{txResult.brokerName}</CTableDataCell>
      <CTableDataCell><ResultTxDetailModal key={rowIndex} sendingId={sendingId} txId={txResult.txId}/></CTableDataCell>
    </CTableRow>


  );

}


ResultTxResultRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  sendingId: PropTypes.number,
  txResult: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.string,
    resultSendingId: PropTypes.number,
    txId: PropTypes.number,
    brokerName: PropTypes.string,
    sendingType: PropTypes.string,
    sender: PropTypes.string,
    status: PropTypes.string,
    receiver: PropTypes.string,
    success: PropTypes.bool,
    failReason: PropTypes.string,
    title: PropTypes.string,
    mediaLink: PropTypes.string,
    content: PropTypes.string,
    inputTime: PropTypes.number,
    scheduleTime: PropTypes.number,
    startTime: PropTypes.number,
    sendTime: PropTypes.number,
    completeTime: PropTypes.number,
  }),
}


export default ResultTxResultRow;
