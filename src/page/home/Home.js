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