import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios, { AxiosHeaders } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register_modal } from 'src/modules/modal'

function request_register(username, email, password){
  return {
    username:username,
    email:email,
    password:password,
  }
}

function Register(){
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [invalid,setInvalid]=useState(false);
  const [invalidTarget,setInvalidTarget]=useState("");
  const [comparepw,setComparepw]=useState(true)
  
  const dispatch=useDispatch()

  return (
    <>
      <CModalHeader>
        <h5 className="modal-title">Login</h5>
      </CModalHeader>
      <CModalBody>
        <CContainer>
          <h1>Register</h1>
          <p className="text-medium-emphasis">Create your account</p>
          <CInputGroup className="mb-3">
            <CInputGroupText className={`${invalidTarget==="Username" && invalid ? "border-danger" : ""}`}>
              <CIcon icon={cilUser} />
            </CInputGroupText>
            <CFormInput 
              className={`${invalidTarget==="Username" && invalid ? "border-danger" : ""}`}
              placeholder="Username" 
              autoComplete="username" 
              onChange={event=>{
                setUsername(event.target.value)
              }}
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText className={`${invalidTarget==="Email" && invalid ? "border-danger" : ""}`}>@</CInputGroupText>
            <CFormInput 
              className={`${invalidTarget==="Email" && invalid ? "border-danger" : ""}`}
              placeholder="Email" 
              autoComplete="email" 
              onChange={event=>{
                setEmail(event.target.value)
              }}
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={event=>{
                setPassword(event.target.value)
              }}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText className={`${!comparepw ? "border-danger" : ""}`}>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              className={`${!comparepw ? "border-danger" : ""}`}
              type="password"
              placeholder="Repeat password"
              autoComplete="new-password"
              onChange={event=>{
                if(event.target.value!==password){
                  setComparepw(false)
                }
                else{
                  setComparepw(true)
                }
              }}
            />
          </CInputGroup>
          <div className="d-grid">
            <CButton 
              color="success"
              onClick={()=>{
                axios.post("/auth/register",request_register(username,email,password)).then(response=>{
                  if(response.data.status==="invalid"){
                    setInvalid(true)
                    setInvalidTarget(response.data.invalid)
                  }
                  else{
                    dispatch(register_modal({}))
                  }
                })
              }}
            >
              Create Account
            </CButton>
          </div>
          { invalid &&
            <CCol xs={6}>
              <h5 className="text-danger text-end">Invalid {invalidTarget}</h5>
            </CCol>
          }
        </CContainer>
      </CModalBody>
    </>
  )
}

export default Register
