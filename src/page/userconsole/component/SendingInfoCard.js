import React from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CListGroup,
  CListGroupItem,
  CProgress,
  CProgressBar
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilSend} from "@coreui/icons";
import PropTypes from "prop-types";

function SendingInfoCard({sendingId, title, status, type, totalCount, successRate, detailLink}) {
  return (
      <CCol sm = {4}>
        <CCard>
          <CCardBody>
            <CCardTitle>
              <span>{title} </span>
              <CBadge color="primary" shape="rounded-pill">{status}</CBadge>
            </CCardTitle>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>타입 : {type}</CListGroupItem>
            <CListGroupItem>총 개수 : {totalCount}</CListGroupItem>

          </CListGroup>
          <CCardBody>
            <div className="progress-group-header">
              <CIcon className="me-2" icon={cilSend} size="lg" />
              <span>{status}</span>
              <span className="ms-auto fw-semibold">{successRate}%</span>
            </div>
            <CProgress className="mb-3">
              <CProgressBar color="success" value={successRate} />
              <CProgressBar color="danger" value={100 - successRate} />
            </CProgress>
            <CButton href={'/#/resultDetail'}>상세</CButton>
          </CCardBody>
        </CCard>
      </CCol>
  );
}
SendingInfoCard.defaultProps = {
  title: "title",
  type : "type",
  detailLink : '#',
};

SendingInfoCard.propTypes = {
  sendingId : PropTypes.number.isRequired,
  title : PropTypes.string,
  status : PropTypes.string,
  type : PropTypes.string,
  totalCount : PropTypes.number,
  successRate : PropTypes.number,
  detailLink : PropTypes.string
};

export default SendingInfoCard;
