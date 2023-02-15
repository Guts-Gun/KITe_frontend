import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CForm
} from '@coreui/react';

import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function PhoneUpdateModal({prev}) {
  const [visible, setVisible] = useState(false);

  //form
  const [form, setForm] = useState({id:prev.id });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    axios.put(apiConfig.phoneUpdate, form)
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
      <CButton color="info" variant="outline" onClick={() => setVisible(!visible)}>수정</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>발신 전화번호 수정</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CForm onSubmit={onSubmit} validated={true}>
              <CRow className="mb-3">
                <CFormLabel>
                  수정 전 이름
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput placeholder={prev.name} disabled/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel>
                  전화번호
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput placeholder={prev.phone} disabled/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel>
                  수정 후 이름
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput name="name" feedbackInvalid="이름 값은 필수입니다!" required 
                  onChange={(e) => onChange(e)} />
                </div>
              </CRow>
              <CRow>
                <CCol xs={8}></CCol>
                <CCol xs={4} className="mt-3">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="info" type="submit">생성</CButton>
                </CCol>
              </CRow>
            </CForm>   
        </CModalBody>
      </CModal>
    </>
  );
}


PhoneUpdateModal.propTypes = {
  prev : PropTypes.object,
};
