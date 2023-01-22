import React from 'react'
import {CButton, CImage, CRow, CCallout,CCarousel, CCarouselItem, CCarouselCaption, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CCardFooter, CCardImage} from '@coreui/react'
import HomeHeader from './HomeHeader';
import "./home.scss";
import mainImg from "../../assets/images/home/kite1.png";
import teamInfo from "../../assets/images/home/team.png";



import BrokerInfoCardGroup from "./component/BrokerInfoCardGroup";

function BrokerInfoCardList() {
  return null;
}

const Home = () => {

  return (
    <>
      <HomeHeader></HomeHeader>
      <div className="home-wrapper mb-5">

        {/* 메인이미지 */}
        <div className="home-title">
            <CImage className='mt-1 main_img' src={mainImg}/>
        </div>


      <div className="home-contents">
        {/* 발송하기버튼 */}
        <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-5">
          <CButton size="lg" color="primary" href="sendSms" shape="rounded-pill">문자 발송하기</CButton>
        </div>

        {/* 중계사 */}
        <span>중계사 정보</span>
          <BrokerInfoCardGroup/>
        </div>

        <div className="website">
          <span className='my-website-title me-1'> Guts&Gun</span>
          <a href="https://github.com/Guts-Gun" target="_blank" rel="noreferrer">github</a>
        </div>
      </div>
    </>

  )
}
export default Home;
