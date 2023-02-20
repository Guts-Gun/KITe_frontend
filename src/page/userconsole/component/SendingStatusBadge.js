import {CBadge} from "@coreui/react";
import React from "react";
import PropTypes from "prop-types";

function SendingStatusBadge({status}) {
  switch (status) {
    case "COMPLETE": // 완료
      return (<CBadge color="primary">{status}</CBadge>)
    case "PENDING": // 대기
      return (<CBadge color="info">{status}</CBadge>)
    case "FAIL": // 실패
      return (<CBadge color="danger">{status}</CBadge>)
    case "DELAY": // 지연
      return (<CBadge color="warning">{status}</CBadge>)
    case "SENDING": // 진행중
      return (<CBadge color="success">{status}</CBadge>)
    default:
      return "";
  }
}

SendingStatusBadge.propTypes = {
    status : PropTypes.string.isRequired
}

export default SendingStatusBadge
