import React,{useState,useEffect} from 'react';
import {CForm,
   CFormInput, CFormLabel, CRow, CFormSelect, CButton, CCardBody, CCardFooter, CCol } from '@coreui/react';

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function SingleReceiverMake() {
  /*group list*/
  const [groupData,setGroupData] = useState([]);
  //get data
  useEffect(()=>{
    axios.get(apiConfig.groupSelectList)
    .then(function (response) {
        setGroupData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[]);


  /*form*/
  const [form, setForm] = useState({groupId:-1});
  const onGroupChange = (e) => setForm({ ...form, groupId: e.target.value });
  
  //이름
  const onChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  
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

  //이메일
  const [inputReceiverMail, setInputReceiverMail] = useState("");
  const handlePressREmail = (e) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    setInputReceiverMail(e.target.value);
    if(regExp.test(e.target.value)){
      setForm({ ...form, "email": e.target.value });
    }
    else{
      setForm({ ...form, "email": null });
    }
  }

  //formCheck
  const formCheck = ()=>{
    console.log(form.name);
    console.log(form.email);
    console.log(form.phone);
    if(!form.name){
        return false;
    }
    else if(form.email || form.phone){
        return true;
    }
    else{
      return false;
    }
  }
  const onSubmit = (e) => {
    console.log(form);
    if(formCheck()){
      axios.post(apiConfig.phoneBookCreate, form)
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
    }
  };

  


  return (
    <div>
      <CCardBody>
        <CForm validated={true}>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            그룹
          </CFormLabel>
          <div className="col-sm-10">
            <CFormSelect onChange={onGroupChange}>
              <option value="-1">미그룹</option>
              {groupData.map(d=><option key={d.id} value={d.id}>{d.groupName}</option>)}
            </CFormSelect>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
            이름
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput name="name" feedbackInvalid="이름 값은 필수입니다!" required 
            onChange={(e) => onChange(e)}/>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            전화번호
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput name="phone" 
            value={inputReceiverPhone}
            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
            onChange={handlePressRPhone}/>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            이메일
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput name="email" type="email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
            value={inputReceiverMail} onChange={handlePressREmail}/>
          </div>
        </CRow>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CCol lg={12} className="text-end">
          <CButton color="success" variant="outline" variactive={true} disabled={false}
          onClick={onSubmit}>
            희원 추가
          </CButton>
        </CCol>
      </CCardFooter>
    </div>
  );
}
