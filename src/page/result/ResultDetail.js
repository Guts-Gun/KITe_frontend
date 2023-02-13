import {CCard, CCardBody, CCardHeader,} from '@coreui/react';
import React from 'react'
import {useParams} from 'react-router-dom';
import SendingResultDetailInfo from "./component/SendingResultDetailInfo";
import SendingResultBrokerGraph from "./component/SendingResultBrokerGraph";
import ResultTxResultTable from "./component/ResultTxResultTable";

function ResultDetail() {


  let {sending_id} = useParams();
  console.log(Number(sending_id));


  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발송 결과 상세 페이지</strong>
        </CCardHeader>
        <CCardBody>
          <SendingResultDetailInfo sendingId={(sending_id)}/>
          <SendingResultBrokerGraph sendingId={sending_id}/>
          <ResultTxResultTable sendingId={sending_id}/>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ResultDetail;


