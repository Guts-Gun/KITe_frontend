import React  from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow, CButtonGroup, CProgress,
  CBadge, CProgressBar
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from "@coreui/icons-react";
import {cibFacebook, cibGoogle, cibLinkedin, cibTwitter, cilCloudDownload} from "@coreui/icons";
import {CChartLine} from "@coreui/react-chartjs";
import {getStyle, hexToRgba} from "@coreui/utils";
import { CChart } from '@coreui/react-chartjs';
import { cilSend } from "@coreui/icons";
import { cilEnvelopeClosed } from "@coreui/icons";

import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';


function UserConsole() {

  return (
    <div>
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 className="card-title mb-0">

                </h4>
              </CCol>
            </CRow>


            <CRow className = 'mt-3'>
              <CCol sm={12}>
                <h4 id="traffic" className="card-title mb-0">
                  요약
                </h4>
              </CCol>
              <CCol sm = {6}>
                <CCarousel controls indicators dark>
                  <CCarouselItem>
                    <CCard>
                      <CCardBody>
                        <CCardTitle>
                          <span>메시지 사용량 </span>
                        </CCardTitle>
                        <CListGroup flush>
                          <CListGroupItem>타입 : sms</CListGroupItem>
                          <CListGroupItem>총 개수 : 1000</CListGroupItem>
                          <CListGroupItem>총 사용량 : 500</CListGroupItem>
                        </CListGroup>
                      </CCardBody>

                    </CCard>
                  </CCarouselItem>

                  <CCarouselItem>
                    <CCard>
                      <CCardBody>
                        <CCardTitle>
                          <span>email 사용량 </span>
                        </CCardTitle>
                        <CListGroup flush>
                          <CListGroupItem>타입 : email</CListGroupItem>
                          <CListGroupItem>총 개수 : 1000</CListGroupItem>
                          <CListGroupItem>총 사용량 : 500</CListGroupItem>
                        </CListGroup>
                      </CCardBody>

                    </CCard>
                  </CCarouselItem>

                  <CCarouselItem>
                    <CCard>
                      <CCardBody>
                        <CCardTitle>
                          <span>카카오 사용량 </span>
                        </CCardTitle>
                        <CListGroup flush>
                          <CListGroupItem>타입 : kakao</CListGroupItem>
                          <CListGroupItem>총 개수 : 1000</CListGroupItem>
                          <CListGroupItem>총 사용량 : 500</CListGroupItem>
                        </CListGroup>
                      </CCardBody>

                    </CCard>
                  </CCarouselItem>

                </CCarousel>
              </CCol>


              <CCol sm = {6}>
                <CCardGroup>
                  <CCard style={{ width: '18rem' }}>
                  <CCardBody>
                    <CCardTitle><CIcon className="me-2" icon={cilEnvelopeClosed} size="lg" />sms</CCardTitle>
                    <CCardSubtitle className="mb-2 text-medium-emphasis">sms</CCardSubtitle>
                    <CCardLink href="#">발송하기</CCardLink>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <CCardBody>
                    <CCardTitle><CIcon className="me-2" icon={cilEnvelopeClosed} size="lg" />email</CCardTitle>
                    <CCardSubtitle className="mb-2 text-medium-emphasis">email</CCardSubtitle>
                    <CCardLink href="#">발송하기</CCardLink>
                  </CCardBody>
                </CCard>
                </CCardGroup>

              </CCol>


            </CRow>


          </CCardBody>
        </CCard>
      </CRow>

      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  나의 발송
                </h4>
              </CCol>
              <CCol sm={7}>
                <CButtonGroup className="float-end ">
                  {['ALL', 'SMS', 'e-Mail', 'Kakao'].map((value) => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'ALL'}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>


            <CRow className = 'mt-3'>
              <CCol sm = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <span>2023-01-06 15:00:00 </span>
                      <CBadge color="primary" shape="rounded-pill">완료</CBadge>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>타입 : sms</CListGroupItem>
                    <CListGroupItem>총 개수 : 1000</CListGroupItem>

                  </CListGroup>
                  <CCardBody>
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={cilSend} size="lg" />
                      <span>성공</span>
                      <span className="ms-auto fw-semibold">95%</span>
                    </div>
                    <CProgress className="mb-3">
                      <CProgressBar color="success" value={95} />
                      <CProgressBar color="danger" value={5} />
                    </CProgress>
                    <CButton>상세</CButton>
                  </CCardBody>
                </CCard>
              </CCol>


              <CCol sm = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <span>2023-01-06 15:00:00 </span>
                      <CBadge color="dark" shape="rounded-pill">대기</CBadge>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>타입 : email</CListGroupItem>
                    <CListGroupItem>총 개수 : 1000</CListGroupItem>

                  </CListGroup>
                  <CCardBody>
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={cilSend} size="lg" />
                      <span> 대기 </span>
                    </div>
                    <CProgress className="mb-3">
                      <CProgressBar color={"dark"} value={100} />
                    </CProgress>
                    <CButton>상세</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <span>2023-01-06 15:00:00 </span>
                      <CBadge color="primary" shape="rounded-pill">완료</CBadge>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>타입 : sms</CListGroupItem>
                    <CListGroupItem>총 개수 : 1000</CListGroupItem>

                  </CListGroup>
                  <CCardBody>
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={cilSend} size="lg" />
                      <span>성공</span>
                      <span className="ms-auto fw-semibold">95%</span>
                    </div>
                    <CProgress className="mb-3">
                      <CProgressBar color="success" value={95} />
                      <CProgressBar color="danger" value={5} />
                    </CProgress>
                    <CButton>버튼</CButton>
                  </CCardBody>
                </CCard>
              </CCol>


            </CRow>


          </CCardBody>
        </CCard>


      </CRow>

    </div>
  );
}

export default UserConsole;
