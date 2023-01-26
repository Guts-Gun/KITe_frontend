import React, { useState } from 'react';
import {
  CRow, CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle, CForm, CCol
} from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilXCircle  } from '@coreui/icons';

import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

function DeleteGroupModal({id,name,visible,setVisible}) {
  const onSubmit = (e) => {
    setVisible(false);
    axios.delete(apiConfig.groupDeleteSingle+"/"+id)
      .then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
  };
  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 복사</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={onSubmit} validated={true}>
            <CRow className="justify-content-center">
              <CCol xs={4} className="mt-3">
                  <CIcon icon={cilXCircle} size="6xl"/>
              </CCol>
            </CRow>
            <CRow className="justify-content-center mt-3 mb-3">
              선택한 {name} 그룹을 정말 삭제하시겠습니까?
            </CRow>
            <CRow>
              <CCol xs={7}></CCol>
              <CCol xs={5} className="mt-3">
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                <CButton color="danger" type="submit">그룹 삭제</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

DeleteGroupModal.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string,
  visible:PropTypes.bool,
  setVisible:PropTypes.func
};

export default DeleteGroupModal;
