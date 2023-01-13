import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import HomeHeader from './HomeHeader';
import "./home.scss";

const Home = () => {
  return (
    <>
    <HomeHeader></HomeHeader>
    <div className="home-wrapper">
      <div className="home-title">
        <span>K:ITe</span>에 오신걸 환영합니다!
      </div>
      <div className="home-contents">
        테스트<br/>
        테스트
      </div>
      <div className="about-project">
      테스트<br/>
        <span>테스트</span>테스트
        <span> 테스트</span>테스트
      </div>
      <div>
      <CRow className="ml-20 mr-20">
        <CCol className="col-md-3 col-lg-3">
          <img
            src="https://bootstrapmade.com/demo/themes/eStartup/img/about-img.png"
            alt=""
          />
          <h1>하이스</h1>
        </CCol>
        <CCol className="col-md-9 col-lg-9">
          <h1>
            <span className="bold">K:ITe</span> 를 소개합니다.
          </h1>
          <p>
            홀리몰리
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <ul className="s2__list">
            <li><i className=""></i>사용하기 쉬워요</li>
            <li><i className=""></i>다양한 선택지</li>
            <li><i className=""></i>자세한 결과화면</li>
            <li><i className=""></i> 실시간 중계사 추가</li>
            <li><i className=""></i>대체 발송 기능</li>
          </ul>
        </CCol>
      </CRow>
      </div>
      <div className="my-website">
        <a href="https://github.com/Guts-Gun" target="_blank" rel="noreferrer">
          Guts&Gun 🐰
        </a>
      </div>
    </div>
    </>
  )
}
export default Home;