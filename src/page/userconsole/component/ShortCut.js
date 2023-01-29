import React from "react";
import {CButton, CCard, CCardBody, CCardSubtitle, CCardTitle} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilEnvelopeClosed} from "@coreui/icons";
import PropTypes from "prop-types";

function ShortCut({title, link, icon}) {
  return (
    <CButton href={link} color="light" sm={6}>
      <CCard>
        <CCardBody>
          <CCardTitle><CIcon className="me-2" icon={cilEnvelopeClosed} size="lg"/>{title}</CCardTitle>
          <CCardSubtitle className="mb-2 text-medium-emphasis">{title}</CCardSubtitle>
          <CButton>발송하기</CButton>
        </CCardBody>
      </CCard>
    </CButton>
  );
}

ShortCut.defaultProps = {
  title: "title",
  type: "type",
  link: '#',
  icon: "cilEnvelopeClosed"
};

ShortCut.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string
};

export default ShortCut;
