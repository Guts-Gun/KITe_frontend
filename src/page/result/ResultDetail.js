import { CCard, CCardBody, CCardHeader, CCol, CPagination, CPaginationItem, CRow,
    CTable,CTableBody,CTableDataCell,CTableHead,CTableHeaderCell,CTableRow, } from '@coreui/react';
import { CChartBar, CChartDoughnut } from '@coreui/react-chartjs';
import React  from 'react'
function ResultDetail() {
    return (  
        <div>
            <CCard className="m-4">
                <CCardHeader>
                <strong>발송 결과 상세 페이지</strong>
                </CCardHeader>
                <CCardBody>
                    <Graph/>
                    <Result/>
                </CCardBody>
            </CCard>
        </div>
    );
}

export default ResultDetail;

function Graph() {
    return (  
        <div>
            <CRow>
                <CCol xs={4}>
                    <CCard className="mb-4">
                        <CCardHeader>분배 비율</CCardHeader>
                        <CCardBody>
                            <CChartDoughnut
                            data={{
                                labels: ['LG', 'SKT', 'KT'],
                                datasets: [
                                {
                                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                    data: [40, 20, 80],
                                },
                                ],
                            }}
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
                            labels: ['중계사1_성공','중계사1_실패','중계사2_성공','중계사2_실패','중계사3_성공','중계사3_실패'],
                            datasets: [
                            {
                                label: 'Count',
                                backgroundColor: '#f87979',
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
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
                            labels: ['LG', 'SKT', 'KT'],
                            datasets: [
                            {
                                label: 'SPEED',
                                backgroundColor: '#f87979',
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
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

function Result(){
    return(
        <div>
            <CRow>
                <CCol xs={5}>
                    <CRow>
                        <h1>발송통계</h1>
                    </CRow>
                    <CRow>
                        <CTable>
                        <CTableHead>
                        <CTableRow color="primary">
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">결과</CTableHeaderCell>
                            <CTableHeaderCell scope="col">건수</CTableHeaderCell>
                        </CTableRow>
                        </CTableHead>
                        <CTableBody>
                        <CTableRow>
                            <CTableDataCell>1</CTableDataCell>
                            <CTableDataCell>~한 이유로 성공</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>2</CTableDataCell>
                            <CTableDataCell>~한 이유로 실패</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>3</CTableDataCell>
                            <CTableDataCell>~한 이유로 성공</CTableDataCell>
                            <CTableDataCell>1000</CTableDataCell>
                        </CTableRow>
                        </CTableBody>
                        </CTable>
                    </CRow>
                    <CRow className="mb-3 justify-content-center">
                        <CCol lg={12}>
                        <CPagination align="center" aria-label="Page navigation example">
                            <CPaginationItem aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            </CPaginationItem>
                            <CPaginationItem>1</CPaginationItem>
                            <CPaginationItem>2</CPaginationItem>
                            <CPaginationItem>3</CPaginationItem>
                            <CPaginationItem aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        </CPagination>
                        </CCol>
                    </CRow>
                </CCol>
                <CCol xs={7}>
                    <CRow>
                        <h1>발송 결과</h1>
                    </CRow>
                    <CRow>
                        <CTable>
                            <CTableHead>
                            <CTableRow color="primary">
                                <CTableHeaderCell scope="col">수신번호</CTableHeaderCell>
                                <CTableHeaderCell scope="col">전송상태</CTableHeaderCell>
                                <CTableHeaderCell scope="col">상세사유</CTableHeaderCell>
                            </CTableRow>
                            </CTableHead>
                            <CTableBody>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                            </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CRow>
                    <CRow className="mb-3 justify-content-center">
                        <CCol lg={12}>
                        <CPagination align="center" aria-label="Page navigation example">
                            <CPaginationItem aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            </CPaginationItem>
                            <CPaginationItem>1</CPaginationItem>
                            <CPaginationItem>2</CPaginationItem>
                            <CPaginationItem>3</CPaginationItem>
                            <CPaginationItem aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        </CPagination>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        </div>
    )
}