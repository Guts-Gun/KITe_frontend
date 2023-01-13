import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem
} from "@coreui/react";
import PropTypes from "prop-types";
import SendingInfoCard from "../../userconsole/component/SendingInfoCard";

function BrokerInfoCard({title, smsPrice, emailPrice, kakaoPrice, speed}) {

  return (

    <CCard>
      <CCardBody>
        <CCardTitle>
          <span>{title}</span>
        </CCardTitle>
        <CCardHeader>상세</CCardHeader>
        <CListGroup flush>
          <CListGroupItem>sms 가격 : {smsPrice}</CListGroupItem>
          <CListGroupItem>email 가격 : {emailPrice}</CListGroupItem>
          <CListGroupItem>카카오톡 가격 : {kakaoPrice}</CListGroupItem>
          <CListGroupItem>평균 속도 : {speed} </CListGroupItem>
        </CListGroup>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>

  );
};
BrokerInfoCard.defaultProps = {
  title: "title",
};

BrokerInfoCard.propTypes = {
  title : PropTypes.string.isRequired,
  smsPrice : PropTypes.string,
  emailPrice : PropTypes.string,
  kakaoPrice : PropTypes.string,
  speed : PropTypes.string,
};


export default BrokerInfoCard;
