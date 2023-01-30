import React, {useEffect, useState} from 'react'
import {
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  
} from '@coreui/react';

const TemplateDetail = (prop) => {
  console.log(prop);

  return (
    <CCol sm={12} md={6}>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">이름</CInputGroupText>
          <CFormInput value="템플릿2" readOnly/>
        </CInputGroup>
      <CInputGroup>
      <CInputGroupText>내용</CInputGroupText>
        <CFormTextarea aria-label="With textarea" rows="10" value={"문자 발송 내용 템플릿 테스트22"} readOnly>
        </CFormTextarea>
      </CInputGroup>
    </CCol>
  )
}

export default TemplateDetail
