import {CTableDataCell, CTableHeaderCell, CTableRow,CButton} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

export function ResultTxDetailTableRow({rowIndex, resultTxTransfer}) {
  return (
    <CTableRow>
        <CTableDataCell>{resultTxTransfer.brokerId} </CTableDataCell>
        <CTableDataCell>{resultTxTransfer.sendingType}</CTableDataCell>
        <CTableDataCell>{resultTxTransfer.sendTime}</CTableDataCell>
        <CTableDataCell>{resultTxTransfer.completeTime}</CTableDataCell>
        <CTableDataCell>{resultTxTransfer.success}</CTableDataCell>
        <CTableDataCell>{resultTxTransfer.failReason}</CTableDataCell>
    </CTableRow>


  );

}

ResultTxDetailTableRow.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    resultTxTransfer: PropTypes.shape({
        id: PropTypes.number,
        txId: PropTypes.number,
        brokerId : PropTypes.number,
        success: PropTypes.string,
        failReason: PropTypes.string, 
        sendTime : PropTypes.number,
        completeTime : PropTypes.number,

        //추후 추가할것
        sendingType : PropTypes.string,
      }),
  }
