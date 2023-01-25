import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CForm
} from '@coreui/react';

import CIcon from "@coreui/icons-react";
import { cilXCircle } from '@coreui/icons';

import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';


export function DeleteBulkGroupModal({deleteList}) {
  const [visible, setVisible] = useState(false); 
  const onSubmit = (e) => {
    axios.delete(apiConfig.groupDeleteMulti,{data:deleteList})
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
      <CButton color="danger" variant="outline" onClick={() => setVisible(!visible)}>삭제</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 삭제</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={onSubmit}>
            <CRow className="justify-content-center">
              <CCol xs={4} className="mt-3">
                  <CIcon icon={cilXCircle} size="6xl"/>
              </CCol>
            </CRow>
            <CRow className="justify-content-center mt-3 mb-3">
              선택한 그룹을 정말 삭제하시겠습니까?
            </CRow>
            <CRow>
              <CCol xs={8}></CCol>
              <CCol xs={4} className="mt-3">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="danger" type="submit">삭제</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

DeleteBulkGroupModal.propTypes = {
  deleteList :PropTypes.array
};