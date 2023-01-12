import React from 'react'
import {CCard, CCardBody, CCardTitle, CListGroup, CListGroupItem} from "@coreui/react";
import PropTypes from "prop-types";

function UsageCard({title, type, usage, totalUsage}) {
  return (
    <CCard>
      <CCardBody>
        <CCardTitle>
          <span>{title} </span>
        </CCardTitle>
        <CListGroup flush>
          <CListGroupItem>타입 : {type}</CListGroupItem>
          <CListGroupItem>총 개수 : {totalUsage}</CListGroupItem>
          <CListGroupItem>총 사용량 : {usage}</CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>
  );
}
UsageCard.defaultProps = {
  title: "title",
  usage: "usage",
  totalUsage: "total",
  type : "type"
};

UsageCard.propTypes = {
  title : PropTypes.string,
  type : PropTypes.string,
  usage : PropTypes.string,
  totalUsage : PropTypes.string
};
export default UsageCard;
