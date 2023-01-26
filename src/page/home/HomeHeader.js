import React, { useState } from 'react'
import "./home.css";
import "./header.scss";
import {Link} from "react-router-dom";
import Login from 'src/views/pages/login/Login';
import { 
  CButton, 
  CModal, 
  CModalFooter 
} from '@coreui/react';
import Register from 'src/views/pages/register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login_modal, register_modal } from 'src/modules/modal';
import { initializeForm } from 'src/modules/auth';

const HomeHeader = () => {
  const modal_mode=useSelector(state=>state.modal.login_modal)

  const dispatch=useDispatch()
  
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">
          <span>K:ITe</span>
        </Link>
      </div>
      <div className="header-menu">
        <Link onClick={()=>{ 
          if(localStorage.getItem("email")){
            dispatch(initializeForm({}))
            localStorage.clear()
            window.location.reload()
          }
          else{
            dispatch(login_modal({}))
          }
        }}>{localStorage.getItem("email") ? "로그아웃" : "로그인"}</Link>
      </div>
      { modal_mode && <LoginModal/> }
    </div>
  );
};

function LoginModal(){
  const [modal, setModal] = useState(true);
  const modal_mode=useSelector(state=>state.modal.register_modal)

  const dispatch=useDispatch()

  return (
    <CModal
      visible={modal} 
      onClose={() => setModal(false)}
    >
      { modal_mode ? <Register/> : <Login/> }
      <CModalFooter>
        <CButton
          color="primary"
          onClick={()=>{
            dispatch(register_modal({}))
          }}
        >
          { modal_mode ? "Login now" : "Register now"}
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default HomeHeader;