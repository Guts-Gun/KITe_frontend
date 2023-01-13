import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle
} from '@coreui/react';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function MakeGroupModal() {
  const [visible, setVisible] = useState(false);

  //form
  const [form, setForm] = useState({ userId: 1, groupName: "" });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const onClick = (e) => {
    axios.post(apiConfig.group, form)
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
      <CButton color="success" variant="outline" onClick={() => setVisible(!visible)}>그룹 생성</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 생성</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CFormLabel name="userId">
              그룹 이름
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput name="groupName" onChange={(e) => onChange(e)} />
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              그룹 설명
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput name="groupDescription" onChange={(e) => onChange(e)} />
            </div>
            <CCol>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="success" onClick={onClick}>그룹 생성</CButton>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </>
  );
}
