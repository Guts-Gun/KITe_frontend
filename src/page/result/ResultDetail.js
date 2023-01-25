import {CCard, CCardBody, CCardHeader,} from '@coreui/react';
import React, {useState} from 'react'
import SendingResultDetailInfo from "./component/SendingResultDetailInfo";
import SendingResultBrokerGraph from "./component/SendingResultBrokerGraph";
import PropTypes from "prop-types";
import ResultTxResultTable from "./component/ResultTxResultTable";

function ResultDetail() {
  const [sendingResultDetail,setSendingResultDetail] = useState([
    {sendingId : 1, sendingType : "SMS", totalSending : 100, inputTime : 0, scheduleTime : 0, success: "true", failureSending: 0, avgSpeed : 0, completeTime : 0 },
  ]);
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발송 결과 상세 페이지</strong>
        </CCardHeader>
        <CCardBody>
          <SendingResultDetailInfo sendingId={1}/>
          <SendingResultBrokerGraph sendingId={1}/>
          <ResultTxResultTable sendingId={1}/>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ResultDetail;


