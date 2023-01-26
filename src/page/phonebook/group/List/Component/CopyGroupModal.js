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
import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

function CopyGroupModal({id,name,description,visible,setVisible}) {
  const [form, setForm] = useState({ id: id, groupName: "" });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const onSubmit = (e) => {
    axios.post(apiConfig.groupCopy, form)
      .then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      }).then(function () {
        // 항상 실행
      });
    setVisible(false);
  };
  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 복사</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={onSubmit} validated={true}>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              선택한 그룹 이름
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput placeholder={name} disabled/>
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              복사 할 그룹 이름
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput name="groupName" feedbackInvalid="이름 값은 필수입니다!" required onChange={onChange}/>
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              선택한 그룹 설명
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput placeholder={description} disabled/>
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              복사 할 그룹 설명
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput name="description" onChange={onChange}/>
            </div>
          </CRow>
          <CRow>
            <CCol xs={7}></CCol>
            <CCol xs={5} className="mt-3">
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="success" type="submit">그룹 복사</CButton>
            </CCol>
          </CRow>
        </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

CopyGroupModal.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string,
  description : PropTypes.string,
  visible:PropTypes.bool,
  setVisible:PropTypes.func
};

export default CopyGroupModal;
