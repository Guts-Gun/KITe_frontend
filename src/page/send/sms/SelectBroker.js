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
    CWidgetStatsF
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilMediaSkipForward, cilDollar } from '@coreui/icons';


const SelectBroker = () => {

      // 중계사 비율 - 탭
  const [activeKey2, setActiveKey2] = useState(1);
  const [brokerType, setBrokerType] = useState(1);

  const [brokerRatio1, setBrokerRatio1] = useState(40);
  const [brokerRatio2, setBrokerRatio2] = useState(40);
  const [brokerRatio3, setBrokerRatio3] = useState(20);

return (
    <>
    <CRow className="mb-3">
    <CFormLabel className="col-sm-1">중계사 비율</CFormLabel>
    <CCol className="col-sm-11">
        <CRow>
        <CNav role="tablist" variant="tabs">
            <CNavItem><CNavLink active={activeKey2 === 1} onClick={() => setActiveKey2(1)}> 중계사 비율 입력 </CNavLink> </CNavItem>
            <CNavItem><CNavLink active={activeKey2 === 2} onClick={() => setActiveKey2(2)}> 추천 리스트 </CNavLink></CNavItem>
        </CNav>
            
        <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey2 === 1}>
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
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                            data: [brokerRatio1, brokerRatio2, brokerRatio3],
                        },
                        ],
                    }}/>
                    </CCol>
                </CRow>
            </CTabPane>

            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey2 === 2}>
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
            </CTabPane>
            </CTabContent>
          
            </CRow>
        </CCol>
    </CRow>

</>)    


}

export default SelectBroker
