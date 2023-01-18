import React, {useState} from "react";
import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";
import {CChartBar, CChartDoughnut} from "@coreui/react-chartjs";
import PropTypes from "prop-types";

function SendingResultBrokerGraph({sendingId}) {
  const [sendingResultBroker, setSendingResultBroker] = useState(
    {
      brokerCount : {brokerName : ['LG', 'SKT', 'KT', 'aaa'], data: [40, 20, 80, 55] },
      brokerPFCount: {brokerName : ['LG-성공','LG-실패', 'SKT-성공','SKT-실패', 'KT-성공','KT-실패', 'aaa-성공','aaa-실패'], data: [40,2, 20,3, 80,4, 55,5] },
      brokerSpeed : {brokerName : ['LG', 'SKT', 'KT', 'aaa'], data: [40, 20, 80, 55]}
    }
  );

  return (
    <div>
      <CRow>
        <h1>중계사 정보</h1>
      </CRow>
      <CRow>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>분배 비율</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={
                  {
                    labels: sendingResultBroker.brokerCount.brokerName,
                    datasets: [
                      {
                        // 색 어칼지 생각해보기
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: sendingResultBroker.brokerCount.data,
                      },
                    ],
                  }
                }
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>전송 상황</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: sendingResultBroker.brokerPFCount.brokerName,
                  datasets: [
                    {
                      label: 'Count',
                      backgroundColor: '#f87979',
                      data: sendingResultBroker.brokerPFCount.data,
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>속도</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: sendingResultBroker.brokerSpeed.brokerName
                  ,
                  datasets: [
                    {
                      label: 'SPEED',
                      backgroundColor: '#f87979',
                      data: sendingResultBroker.brokerSpeed.data,
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>

  );
}
SendingResultBrokerGraph.propTypes = {
  sendingId : PropTypes.number.isRequired,
}
export default SendingResultBrokerGraph;
