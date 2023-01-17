import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import SendingResultRow from "./SendingResultRow";
import PropTypes from "prop-types";

function SendingResultTable({sendingResultList}) {
    const tableRowClick = (e, id) => {
    // window.location.href = "/#/resultDetail/"+id;
    window.location.href = "/#/resultDetail/";
  };

    console.log(sendingResultList);

  return(
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">발송타입</CTableHeaderCell>
          <CTableHeaderCell scope="col">개수(건)</CTableHeaderCell>
          <CTableHeaderCell scope="col">등록시각</CTableHeaderCell>
          <CTableHeaderCell scope="col">예약시각</CTableHeaderCell>
          <CTableHeaderCell scope="col">성공여부</CTableHeaderCell>
          <CTableHeaderCell scope="col">실패개수</CTableHeaderCell>
          <CTableHeaderCell scope="col">평균속도(초)</CTableHeaderCell>
          <CTableHeaderCell scope="col">완료시각</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {
          sendingResultList.map((sendingResult, index) =>(

            <SendingResultRow key = {index} rowIndex={index} sendingResult={sendingResult}/>
          ))
        }
      </CTableBody>
    </CTable>
  );
}

SendingResultTable.propTypes = {
    sendingResultList : PropTypes.array,
};
export default SendingResultTable;
