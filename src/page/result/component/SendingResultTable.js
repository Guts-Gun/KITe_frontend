import {CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import React from "react";
import SendingResultRow from "./SendingResultRow";
import PropTypes from "prop-types";
import ErrorComponent from 'src/component/error/ErrorComponent';


function SendingResultTable({sendingResultList}) {

  return(
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">발송타입</CTableHeaderCell>
          <CTableHeaderCell scope="col">개수(건)</CTableHeaderCell>
          <CTableHeaderCell scope="col">등록시각</CTableHeaderCell>
          <CTableHeaderCell scope="col">예약시각</CTableHeaderCell>
          <CTableHeaderCell scope="col">전송상태</CTableHeaderCell>
          <CTableHeaderCell scope="col">성공개수</CTableHeaderCell>
          <CTableHeaderCell scope="col">실패개수</CTableHeaderCell>
          <CTableHeaderCell scope="col">소요시간(ms)</CTableHeaderCell>
          <CTableHeaderCell scope="col">완료시각</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>

        { sendingResultList.length > 0 ? ( sendingResultList.map((sendingResult, index) =>(
          <SendingResultRow key = {index} rowIndex={index} sendingResult={sendingResult}/>
          )))
          : <ErrorComponent log={"검색한 결과가 없어요"}></ErrorComponent> 
        }

      </CTableBody>
    </CTable>
  );
}

SendingResultTable.propTypes = {
    sendingResultList : PropTypes.array,
};
export default SendingResultTable;
