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


const BrokerRatioList = (prop) => {

    // 중계사 비율 선택 그래프
    let ratioLabels = [];
    let ratioData = [];
    let colorData = [];

    console.log(prop.userSendingRule);
    prop.brokerList.map(function(data) {
        ratioLabels.push(data.name);
        ratioData.push(data.weight);
        colorData.push(data.color);
    });

    
    function changeBrokerRatio(e){
        prop.changeBrokerRatio(prop.sendingType, e.target.value)

    }
    return (
        <CCol className="col-sm-10">
            <CRow>
                <CCol sm={12} md={8}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">중계사 이름</CTableHeaderCell>
                        <CTableHeaderCell scope="col">가격(원)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">지연율</CTableHeaderCell>
                        <CTableHeaderCell scope="col">비율(%)</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {
                        prop.brokerList.map((broker, index)=>(<>
                            <CTableRow key={ + "broker"+broker.id}>
                                <CTableHeaderCell scope="row">{broker.id}</CTableHeaderCell>
                                <CTableDataCell>{broker.name}</CTableDataCell>
                                <CTableDataCell>{broker.price}</CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput 
                                    id ={"ck_"+broker.id}
                                    name={broker.id}
                                    type="number" 
                                    value={broker.weight} 
                                    onChange={(e) => changeBrokerRatio(e)}
                                    min={0} max={100}/>
                                </CTableDataCell>
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
                            backgroundColor: colorData,
                            data: ratioData,
                        },
                        ],
                    }}/>
                </CCol>
            </CRow>
        </CCol>)    


    }

    export default BrokerRatioList
