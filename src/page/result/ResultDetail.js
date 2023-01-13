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
                <h1>발송 정보</h1>
            </CRow>
            <CRow>
                <CCol xs={4}>
                    <p>발송타입 : sms</p>
                    <p>개수(건) : 1000</p>
                    <p>등록 시간 : 23-01-06 11:39:11</p>
                    <p>예약 시간 : -</p>
                    <p>성공 여부 : 성공</p>
                    <p>실패 개수 : 0</p>
                    <p>평균 속도(초): 0.1</p>
                    <p>완료 시간 : 23-01-06 11:39:30</p>
                </CCol>
            </CRow>
            <CRow>
                <h1>중계사 정보</h1>
            </CRow>
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
                <CCol xs={12}>
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
                                <CTableHeaderCell scope="col">전송제목</CTableHeaderCell>
                                <CTableHeaderCell scope="col">전송내용</CTableHeaderCell>
                            </CTableRow>
                            </CTableHead>
                            <CTableBody>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                                <CTableDataCell>올리브영 광고</CTableDataCell>
                                <CTableDataCell>김세빈 고객님에게...</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                                <CTableDataCell>올리브영 광고</CTableDataCell>
                                <CTableDataCell>김네빈 고객님에게...</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>010-2324-8257</CTableDataCell>
                                <CTableDataCell>결과 수신 실패</CTableDataCell>
                                <CTableDataCell>중계사 혼잡</CTableDataCell>
                                <CTableDataCell>올리브영 광고</CTableDataCell>
                                <CTableDataCell>김다섯빈 고객님에게...</CTableDataCell>
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