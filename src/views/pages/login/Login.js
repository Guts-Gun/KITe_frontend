import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'src/modules/auth'
import { login_modal } from 'src/modules/modal'

function request_login(email, password){
  return {
    email:email,
    password:password,
  }
}

function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [invalid,setInvalid]=useState(false);

  const dispatch=useDispatch();

  return (
    <>
      <CModalHeader>
        <h5 className="modal-title">Login</h5>
      </CModalHeader>
      <CModalBody>
        <CContainer>
          <h1>Login</h1>
          <p className="text-medium-emphasis">Sign In to your account</p>
          <CInputGroup className="mb-3">
            <CInputGroupText className={`${invalid ? "border-danger" : ""}`}>
              <CIcon icon={cilUser} />
            </CInputGroupText>
            <CFormInput 
              className={`${invalid ? "border-danger" : ""}`}
              placeholder="Email" 
              autoComplete="email" 
              onChange={event=>{
                setEmail(event.target.value)
              }}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText className={`${invalid ? "border-danger" : ""}`}>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              className={`${invalid ? "border-danger" : ""}`}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={event=>{
                setPassword(event.target.value)
              }}
            />
          </CInputGroup>
          <CRow>
            <CCol xs={5}>
              <CButton 
                color="primary" 
                className="px-3" 
                onClick={()=>{
                  axios.post("/auth/login",request_login(email,password)).then(response=>{
                    if(response.data.error==="NotFound"){
                      setInvalid(true)
                    }
                    else{
                      localStorage.setItem("email",response.data.email)
                      localStorage.setItem("username",response.data.username)
                      localStorage.setItem("accesstoken",response.data.token.access_token)
                      localStorage.setItem("refreshtoken",response.data.token.refresh_token)

                      dispatch(login({ //로그인 정보 리덕스 저장
                        email:response.data.email,
                        username:response.data.username,
                        accesstoken:response.data.token.access_token,
                        refreshtoken:response.data.token.refresh_token
                      }))
                      dispatch(login_modal({})) //로그인 모달 닫기
                      console.log(response.data)
                    }
                  })
                }}
              >
                Login
              </CButton>
              
            </CCol>
            { invalid &&
              <CCol xs={6}>
                <h5 className="text-danger text-end">Invalid Login</h5>
              </CCol>
            }
          </CRow>
        </CContainer>
      </CModalBody>
    </>
  )
}

export default Login;
