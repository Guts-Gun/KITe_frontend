import React, { useState,useEffect } from 'react';
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
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function PhoneMakeModal() {
  const [visible, setVisible] = useState(false);

    //전화번호
    const [inputReceiverPhone, setInputReceiverPhone] = useState("");
    const handlePressRPhone = (e) => {
      const regex = /\d{2,3}-\d{3,4}-\d{4}/g;
      setInputReceiverPhone(e.target.value);
      if(regex.test(e.target.value)===true) {
        setForm({ ...form, "phone": e.target.value.replace(/-/g, "")});
      }
      else{
        setForm({ ...form, "phone": null });
      }
    }
    useEffect(() => {
      if (inputReceiverPhone.length === 10) {
        setInputReceiverPhone(inputReceiverPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      }
      if (inputReceiverPhone.length === 13) {
        setInputReceiverPhone(inputReceiverPhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      }
    }, [inputReceiverPhone]);

  //form
  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const onSubmit = (e) => {
    const regex = /\d{2,3}-\d{3,4}-\d{4}/g;
    if(regex.test(e.target.value)===true) {
      setForm({ ...form, "phone": e.target.value.replace(/-/g, "")});
    }
    else{
      setForm({ ...form, "phone": null });
    }
  
    axios.post(apiConfig.phoneCreate, form)
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
      <CButton color="success" variant="outline" onClick={() => setVisible(!visible)}>생성</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>발신 전화번호 추가</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={onSubmit} validated={true}>
            <CRow className="mb-3">
              <CFormLabel>
                 이름
              </CFormLabel>
              <div className="col-sm-10">
                <CFormInput name="name" feedbackInvalid="이름 값은 필수입니다!" required 
                onChange={(e) => onChange(e)} />
              </div>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel>
                전화번호
              </CFormLabel>
              <div className="col-sm-10">
                <CFormInput name="phone" 
                  value={inputReceiverPhone}
                  pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                  onChange={handlePressRPhone} required/>
              </div>
            </CRow>
            <CRow>
              <CCol className="mt-3">
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                <CButton color="success" type="submit">생성</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}
