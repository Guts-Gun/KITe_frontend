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
          <CFormInput value={prop.detail == null? "" : prop.detail.title} readOnly/>
        </CInputGroup>
      <CInputGroup>
      <CInputGroupText>내용</CInputGroupText>
        <CFormTextarea aria-label="With textarea" rows="10" value={prop.detail == null? "" : prop.detail.content} readOnly>
        </CFormTextarea>
      </CInputGroup>
    </CCol>
  )
}

export default TemplateDetail
