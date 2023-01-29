import React, {useEffect, useState} from "react";
import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";
import {CChartBar, CChartDoughnut} from "@coreui/react-chartjs";
import PropTypes from "prop-types";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";

function SendingResultBrokerGraph({sendingId}) {
  const sendingResultBrokerDummy = {
    "id": 1,
    "brokerCount": {
      "name": [
        "SK",
        "LG",
        "SKT"
      ],
      "data": [
        2,
        2,
        2
      ]
    },
    "brokerSuccessFail": {
      "name": [
        "SK-false",
        "SK-true",
        "LG-false",
        "LG-true",
        "SKT-false",
        "SKT-true"
      ],
      "data": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    "brokerSpeed": {
      "name": [
        "SK",
        "LG",
        "SKT"
      ],
      "data": [
        1.0,
        1.0,
        1.0
      ]
    }
  }
  const [sendingResultBroker, setSendingResultBroker] = useState(sendingResultBrokerDummy);

  useEffect(() => {
    axios.get(apiConfig.resultSendingBrokerResult + "/" + sendingId + "/broker")
      .then(function (response) {
        console.log(response.data);
        setSendingResultBroker(response.data);
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setSendingResultBroker(sendingResultBrokerDummy);
    }).then(function () {
      // 항상 실행
    });
  }, []);


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
                    labels: sendingResultBroker.brokerCount.name,
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


        {/*여기도 고민하기*/}
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>전송 상황</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: sendingResultBroker.brokerSuccessFail.name,
                  datasets: [
                    {
                      label: 'Count',
                      backgroundColor: '#f87979',
                      data: sendingResultBroker.brokerSuccessFail.data,
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
                  labels: sendingResultBroker.brokerSpeed.name,
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
  sendingId: PropTypes.number.isRequired,
}
export default SendingResultBrokerGraph;
