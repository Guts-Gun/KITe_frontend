import React, {useRef, useEffect, useState} from 'react'
import {
  CCard, CCardBody, CCardHeader,
  CCol,
  CRow,

} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'src/modules/auth';


const MyPage = () => {
  
  const { auth } = useSelector(({auth})=> ({auth:auth}));
  var headers =null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken };
  }

  return (
    <>
      <CCard className="m-4">
        <CCardHeader>
          <CRow>
            <CCol lg={10} ><strong>마이 페이지</strong></CCol>
            <CCol lg={2} className="text-end">
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
        </CCardBody>
      </CCard> 
      </>
    
  )
}

export default MyPage