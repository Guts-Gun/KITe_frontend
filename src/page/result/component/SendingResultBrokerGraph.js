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
        "SKT",
        "KT"
      ],
      "color": [
        "#FF0000",
        "#1AFF00"
      ],
      "data": [
        2,
        1
      ]
    },
    "brokerSuccessFail": {
      "name": [
        "SKT- 성공",
        "SKT- 실패",
        "KT- 성공",
        "KT- 실패"
      ],
      "color": [
        "#FF0000",
        "#FF0000",
        "#1AFF00",
        "#1AFF00"
      ],
      "data": [
        1,
        1,
        1,
        0
      ]
    },
    "brokerSpeed": {
      "name": [
        "SKT",
        "KT"
      ],
      "color": [
        "#FF0000",
        "#1AFF00"
      ],
      "data": [
        4.0,
        9998.0
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
                        backgroundColor: sendingResultBroker.brokerCount.color,
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
                      backgroundColor: sendingResultBroker.brokerSuccessFail.color,
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
                      backgroundColor: sendingResultBroker.brokerSpeed.color,
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
