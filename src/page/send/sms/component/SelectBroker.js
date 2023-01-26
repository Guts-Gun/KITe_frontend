import React, {useEffect, useState} from 'react'
import {
    CCol,
    CFormInput,
    CFormLabel,
    CRow,
    CTable,
    CTableHeaderCell,
    CTableBody,
    CTableRow,
    CTableHead,
    CTableDataCell,
    CNav, 
    CNavItem, 
    CNavLink,
    CTabContent, 
    CTabPane,
    CWidgetStatsF,
    CFormCheck
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilMediaSkipForward, cilDollar } from '@coreui/icons';


const SelectBroker = (prop) => {


    let ratioLabels = [];
    let ratioData = [];
    prop.brokerList.map(function(data) {
        ratioLabels.push(data.name);
        ratioData.push(data.weight);
    });

    function changeSendingRuleType(sendingRuleType){


    }

        // 중계사
    const [brokerType, setBrokerType] = useState("1");

    const [brokerRatio1, setBrokerRatio1] = useState(20);
    const [brokerRatio2, setBrokerRatio2] = useState(15);
    const [brokerRatio3, setBrokerRatio3] = useState(20);
    const [brokerRatio4, setBrokerRatio4] = useState(15);
    const [brokerRatio5, setBrokerRatio5] = useState(30);

    function changeBrokerType(e){
    setBrokerType(e.target.value);
    console.log(e.target.value);
    };

    function changeBrokerRatio(e){
        console.log(e.target.id);
        console.log(e.target.value);
    }
    return (
    <>
    <CRow className="mb-3">
    <CFormLabel className="col-sm-2">중계사 비율</CFormLabel>
    <CCol className="col-sm-10">
            <CFormCheck inline type="radio" name="brokerType" id="brokerType1" value="1" label="중계사 비율 선택" defaultChecked onChange={(event)=>{changeBrokerType(event)}}/>
            <CFormCheck inline type="radio" name="brokerType" id="brokerType2" value="2" label="추천 리스트" onChange={(event)=>{changeBrokerType(event)}}/>
        
        {brokerType === "1"? (<>
            <CRow>
                <CCol sm={12} md={8}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">중계사 이름</CTableHeaderCell>
                        <CTableHeaderCell scope="col">가격(원)</CTableHeaderCell>
                        {/* <CTableHeaderCell scope="col">속도</CTableHeaderCell> */}
                        <CTableHeaderCell scope="col">비율(%)</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {
                        prop.brokerList.map((broker, index)=>(<>
                            <CTableRow key={"broker"+broker.brokerId}>
                                <CTableHeaderCell scope="row">{broker.brokerId}</CTableHeaderCell>
                                <CTableDataCell>{broker.name}</CTableDataCell>
                                <CTableDataCell>{broker.price}</CTableDataCell>
                                {/* <CTableDataCell>KT</CTableDataCell> */}
                                <CTableDataCell><CFormInput id ={"broker_ck_"+broker.brokerId} type="number" value={broker.weight} onChange={(e) => changeBrokerRatio(e)} /></CTableDataCell>
                            </CTableRow>
                            </>
                        ))}
                    </CTableBody>
                    </CTable>
                </CCol>


                <CCol sm={12} md={4}>
                    <CChart
                    type="doughnut"
                    data={{
                        labels: ratioLabels,
                        datasets: [
                        {
                            backgroundColor: ['red', 'green', 'blue', 'pink', 'yellow'],
                            data: ratioData,
                        },
                        ],
                    }}/>
                </CCol>
            </CRow>
        </>):null}

        { brokerType === "2"? (<>
            <CRow className='mt-3'>
                <CCol xs={6}>
                    <CWidgetStatsF
                    onClick={() => changeSendingRuleType("SPEED")}
                    className={prop.sendingRuleType == "SPEED"? "custom_background_color":""}
                    color="primary"
                    icon={<CIcon icon={cilMediaSkipForward} height={24} />}
                    // title="Widget title"
                    value="속도 우선"/>
                </CCol>
                <CCol xs={6}>
                    <CWidgetStatsF
                    onClick={() => changeSendingRuleType("PRICE")}
                    className={prop.sendingRuleType == "PRICE"? "custom_background_color":""}
                    color="warning"
                    icon={<CIcon icon={cilDollar} height={24} />}
                    // title="Widget title"
                    value="가격 우선"/>
                </CCol>
            </CRow>
            </>):null}

        </CCol>
    </CRow>

    </>)    


    }

    export default SelectBroker
