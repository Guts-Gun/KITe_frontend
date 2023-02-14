import React from 'react'
import {CButton, CImage, CRow, CCallout,CCarousel, CCarouselItem, CCarouselCaption, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CCardFooter, CCardImage} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import HomeHeader from './HomeHeader';
import "./home.scss";
import mainImg1 from "../../assets/images/home/kite0.png";
import mainImg2 from "../../assets/images/home/kite1.png";

import { cilPaperPlane } from '@coreui/icons';

import BrokerInfoCardGroup from "./component/BrokerInfoCardGroup";

function BrokerInfoCardList() {
  return null;
}

const Home = () => {

  return (
    <>
      <HomeHeader></HomeHeader>
      <div className="home-wrapper mb-2">

        {/* 메인이미지 */}
        <div className="home-title">
            <CImage className='mt-5 main_img' src={mainImg1}/>
            <div className="d-grid gap-2 col-6 mx-auto">
              <CButton className='main_button' color="light" href="/#/sendSms" shape="rounded-pill" variant="outline" >
                <CIcon icon={cilPaperPlane} height={10}/>
                <span> 문자 발송하기</span>
              </CButton>
            </div>
        </div>
        <div className="home-title">
          <CImage className='main_img' src={mainImg2}/>
        </div>

      {/* <div className="home-contents"> */}
        {/* <span>중계사 정보</span> */}
        {/* <BrokerInfoCardGroup/> */}
      {/* </div> */}

        <div className="website">
          <span className='my-website-title me-1'> Guts&Gun</span>
          <a href="https://github.com/Guts-Gun" target="_blank" rel="noreferrer">github</a>
        </div>
      </div>
    </>

  )
}
export default Home;
