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


const SelectBroker = () => {

      // 중계사
  const [brokerType, setBrokerType] = useState("1");

  const [brokerRatio1, setBrokerRatio1] = useState(20);
  const [brokerRatio2, setBrokerRatio2] = useState(15);
  const [brokerRatio3, setBrokerRatio3] = useState(20);
  const [brokerRatio4, setBrokerRatio4] = useState(15);
  const [brokerRatio5, setBrokerRatio5] = useState(30);

  function changeBrokerType(e){
    setBrokerType(e.target.value);
  };


return (
    <>
    <CRow className="mb-3">
    <CFormLabel className="col-sm-1">중계사 비율</CFormLabel>
    <CCol className="col-sm-11">
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
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>KT</CTableDataCell>
                            <CTableDataCell>120</CTableDataCell>
                            {/* <CTableDataCell>KT</CTableDataCell> */}
                            <CTableDataCell><CFormInput type="number" value={brokerRatio1} onChange={(e) => setBrokerRatio1(e.target.value)} /></CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>LG</CTableDataCell>
                            <CTableDataCell>80</CTableDataCell>
                            {/* <CTableDataCell>LG</CTableDataCell> */}
                            <CTableDataCell><CFormInput type="number" value={brokerRatio2} onChange={(e) => setBrokerRatio2(e.target.value)}/></CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>SKT</CTableDataCell>
                            <CTableDataCell>70</CTableDataCell>
                            {/* <CTableDataCell>SKT</CTableDataCell> */}
                            <CTableDataCell><CFormInput type="number" value={brokerRatio3} onChange={(e) => setBrokerRatio3(e.target.value)} /></CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>broker4</CTableDataCell>
                            <CTableDataCell>150</CTableDataCell>
                            {/* <CTableDataCell>SKT</CTableDataCell> */}
                            <CTableDataCell><CFormInput type="number" value={brokerRatio4} onChange={(e) => setBrokerRatio4(e.target.value)} /></CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>broker5</CTableDataCell>
                            <CTableDataCell>150</CTableDataCell>
                            {/* <CTableDataCell>SKT</CTableDataCell> */}
                            <CTableDataCell><CFormInput type="number" value={brokerRatio5} onChange={(e) => setBrokerRatio5(e.target.value)} /></CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                    </CTable>
                </CCol>


                <CCol sm={12} md={4}>
                    <CChart
                    type="doughnut"
                    data={{
                        labels: ['KT', 'LG', 'SKT'],
                        datasets: [
                        {
                            backgroundColor: ['red', 'green', 'blue', 'pink', 'yellow'],
                            data: [brokerRatio1, brokerRatio2, brokerRatio3,  brokerRatio4, brokerRatio5],
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
                    onClick={() => setBrokerType(1)}
                    className={brokerType == 1? "custom_background_color":""}
                    color="primary"
                    icon={<CIcon icon={cilMediaSkipForward} height={24} />}
                    // title="Widget title"
                    value="속도 우선"/>
                </CCol>
                <CCol xs={6}>
                    <CWidgetStatsF
                    onClick={() => setBrokerType(2)}
                    className={brokerType == 2? "custom_background_color":""}
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
