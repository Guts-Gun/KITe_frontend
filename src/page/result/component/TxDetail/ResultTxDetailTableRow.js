import {CTableDataCell, CTableHeaderCell, CTableRow,CButton} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

export function ResultTxDetailTableRow({rowIndex, txResult}) {
  console.log(txResult);
  return (
    <CTableRow>
        <CTableDataCell>{txResult.brokerId} </CTableDataCell>
        <CTableDataCell>{txResult.sendingType}</CTableDataCell>
        <CTableDataCell>{txResult.scheduleTime}</CTableDataCell>
        <CTableDataCell>{txResult.sendTime}</CTableDataCell>
        <CTableDataCell>{txResult.completeTime}</CTableDataCell>
        <CTableDataCell>{txResult.success}</CTableDataCell>
        <CTableDataCell>{txResult.failReason}</CTableDataCell>
    </CTableRow>


  );

}

ResultTxDetailTableRow.propTypes = {
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
