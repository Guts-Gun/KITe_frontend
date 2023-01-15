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

function UpdateGroupModal({id,name,visible,setVisible}) {
  const [form, setForm] = useState({ id: id, groupName: "" });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const onSubmit = (e) => {
    axios.put(apiConfig.groupUpdate, form)
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
          <CModalTitle>그룹 수정</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CForm onSubmit={onSubmit} validated={true}>
              <CRow className="mb-3">
                <CFormLabel htmlFor="staticEmail">
                  현재 그룹 이름
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput placeholder={name} disabled/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword">
                  변경 할 이름
                </CFormLabel>
                <div className="col-sm-10">
                  <CFormInput name="groupName" feedbackInvalid="이름 값은 필수입니다!" required onChange={onChange}/>
                </div>
              </CRow>
              <CRow>
                <CCol className="mt-3">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="success" type="submit">그룹 수정</CButton>
                </CCol>
              </CRow>
            </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

UpdateGroupModal.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string,
  visible:PropTypes.bool,
  setVisible:PropTypes.func
};

export default UpdateGroupModal;
