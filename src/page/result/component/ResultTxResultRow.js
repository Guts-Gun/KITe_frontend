import {CTableDataCell, CTableHeaderCell, CTableRow,CButton} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";
import { ResultTxDetailModal } from "./TxDetail/ResultTxDetailModal";

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
      <CTableDataCell><ResultTxDetailModal key={rowIndex} sendingId={txResult.sendingId} txId={txResult.txId}/></CTableDataCell>
    </CTableRow>


  );

}

ResultTxResultRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
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
}

export default ResultTxResultRow;
