import React, {useEffect, useState, useRef} from 'react'
import {
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
  CModalContent,
  CModalDialog,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
  CToastClose
} from '@coreui/react';

const TemplateRegModal = (prop) => {

  useEffect(() => {
   if(!prop.visibleRegModal){
    init();
   }
  }, null);


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function clickRegMessageTemplate(){
    if(title === "" || title===null){
      prop.addToast(prop.exampleToast("제목을 확인해주세요."));
      return;
    }
    if(content === "" || content===null){
      prop.addToast(prop.exampleToast("내용을 확인해주세요."));
      return;
    }
    prop.clickRegMessageTemplate(title, content);
  }

  function init(){
    setTitle("");
    setContent("");
  }


  return (
    <CModal alignment="center" backdrop="static" visible={prop.visibleRegModal} onClose={() => prop.setVisibleRegModal(false)}>
    <CModalHeader>
      <CModalTitle>템플릿 등록</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">이름</CInputGroupText>
          <CFormInput value={title} onChange={(e) => setTitle(e.target. value)} />
        </CInputGroup>
      <CInputGroup>
      <CInputGroupText>내용</CInputGroupText>
        <CFormTextarea aria-label="With textarea" rows="10" value={content} onChange={(e) => setContent(e.target. value)}/>
      </CInputGroup>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" variant="outline" onClick={() => prop.setVisibleRegModal(false)}>
        취소
      </CButton>
      <CButton color="success" variant="outline" onClick={clickRegMessageTemplate}>저장</CButton>
    </CModalFooter>
  </CModal>
  )
}

export default TemplateRegModal
