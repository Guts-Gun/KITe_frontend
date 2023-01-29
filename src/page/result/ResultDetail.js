import {CCard, CCardBody, CCardHeader,} from '@coreui/react';
import React from 'react'
import SendingResultDetailInfo from "./component/SendingResultDetailInfo";
import SendingResultBrokerGraph from "./component/SendingResultBrokerGraph";
import ResultTxResultTable from "./component/ResultTxResultTable";

function ResultDetail() {
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


