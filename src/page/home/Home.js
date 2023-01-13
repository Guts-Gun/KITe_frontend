import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import HomeHeader from './HomeHeader';
import "./home.scss";
import mainImg from "../../assets/images/home/KITe.png";
import teamInfo from "../../assets/images/home/team.png";

const Home = () => {
  return (
    <>
    <HomeHeader></HomeHeader>
    <div className="home-wrapper">

      {/* 메인이미지 */}
      <div className="home-title">
          <CImage className='main_img' src={mainImg}/>
      </div>

      {/* 중계사 */}
      <div className="home-contents"> 
          test<br/>
          test<br/>
          test<br/>
          test<br/>
          test<br/>
          test<br/>
          test<br/>
      </div>
    
      
      <div className="about-project">
        <span>테스트</span>테스트
        <span> 테스트</span>테스트
      </div>

      {/* 발송하기버튼 */}
      <div className="home-contents">
            <CButton size="lg" color="primary">문자 발송하기</CButton>
      </div>
      <div className="small-home-contents">
          <CImage className='main_img' src={teamInfo}/>
          <a href="https://github.com/Guts-Gun" target="_blank" rel="noreferrer">
          Guts&Gun 🐰
        </a>
      </div>
    </div>
    </>
  )
}
export default Home;