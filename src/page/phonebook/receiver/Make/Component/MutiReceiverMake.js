import React,{useState,useEffect} from 'react';
import { CForm,CListGroup,CListGroupItem,CFormInput, CFormLabel, CRow, CFormSelect, CButton, CInputGroup, CCardBody, CCardFooter, CCol } from '@coreui/react';
import { ReceiverItem } from "./ReceiverItem";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function MutiReceiverMake() {
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

  /*api send data*/
  const [sendData, setSendData] = useState({groupId:-1,requestAddressList:[]});
  const onGroupChange = (e) => setSendData({ ...sendData, groupId: e.target.value });
  const onApiSend = () => {
    if(sendData.requestAddressList.length>=1){
      axios.post(apiConfig.phoneBookCreateList, sendData)
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

  /*form*/
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [email,setEmail] = useState();
  
  //이름
  const onChange = (e) => {
    setName(e.target.value);
  };
  
  //전화번호
  const [inputReceiverPhone, setInputReceiverPhone] = useState("");
  const handlePressRPhone = (e) => {
    const regex = /\d{2,3}-\d{3,4}-\d{4}/g;
    setInputReceiverPhone(e.target.value);
    if(regex.test(e.target.value)===true) {
      setPhone(e.target.value.replace(/-/g, ""));
    }
    else{
      setPhone(null);
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
      setEmail(e.target.value );
    }
    else{
      setEmail(null);
    }
  }

  //formCheck
  const formCheck = ()=>{
    if(!name){
        return false;
    }
    else if(email || phone){
        return true;
    }
    else{
      return false;
    }
  }
  //form추가
  const onFormSubmit = (e) => {
    if(formCheck()){
      setSendData({ ...sendData, 
        requestAddressList:[...sendData.requestAddressList,
        {name:name,phone:phone,email:email}] });
    }
  };

  //form으로 추가한 전화번호 item 삭제
  const onDeleteItem = (i) => {
    console.log(i);
    const requestAddressList = Object.assign(sendData.requestAddressList);
    requestAddressList.splice(i,1);
    setSendData({ ...sendData, 
      requestAddressList:requestAddressList });
  }

  //form으로 추가한 전화번호 item 전체 삭제
  const onListReset = (e) => setSendData({ ...sendData, requestAddressList:[]});



  return (
    <div>
      <CCardBody>
        <CRow>
          {/* 왼쪽 */}
          <CCol className='col-sm-6'>
            <CRow className="mb-3 m-1">그룹 선택</CRow>
            <CRow className="mb-3 m-1">
              <CInputGroup>
                <CFormSelect onChange={onGroupChange}>
                  <option value="-1">미그룹</option>
                  {groupData.map(d=><option key={d.id} value={d.id}>{d.groupName}</option>)}
                </CFormSelect>
              </CInputGroup>
            </CRow>

            <CRow className="mb-3 m-1"></CRow>

            <CRow className="mb-3 m-1">전화번호 추가</CRow>
            <CForm validated={true}>
              <CRow className="mb-3 m-1">
                <CFormLabel>이름</CFormLabel>
                <CInputGroup>
                  <CFormInput name="name" feedbackInvalid="이름 값은 필수입니다!" required 
                  onChange={(e) => onChange(e)} />
                </CInputGroup>
              </CRow>
              <CRow className="mb-3 m-1">
                <CFormLabel>전화번호</CFormLabel>
                <CInputGroup>
                  <CFormInput name="phone" 
                    value={inputReceiverPhone}
                    pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                    onChange={handlePressRPhone} />
                </CInputGroup>
              </CRow>
              <CRow className="mb-3 m-1">
                <CFormLabel>이메일</CFormLabel>
                <CInputGroup>
                  <CFormInput name="email" type="email"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
                  value={inputReceiverMail} onChange={handlePressREmail} />
                </CInputGroup>
              </CRow>
            </CForm>

            <CCol lg={12} className="text-end">
              <CButton variant="outline"
               onClick={onFormSubmit}> 추가</CButton>
            </CCol>

          </CCol>

          {/* 오른쪽 */}
          <CCol className='col-sm-6'>
            <CListGroup className="mb-1">
              <CListGroupItem active className="d-flex">
                주소록 추가 대상 (총 {sendData.requestAddressList.length}명)
                <div className="ms-auto">
                  <CButton
                    color="light"
                    size="sm"
                    variant="outline"
                    shape="rounded-pill"
                    onClick={onListReset}
                  >
                    초기화
                  </CButton>
                </div>
              </CListGroupItem>
              <div className='custom_height'>
                {sendData.requestAddressList.map((d,i)=><ReceiverItem key={i} id={i} name={d.name} phone={d.phone} email={d.email} onDelete={onDeleteItem}/>)}
              </div>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CCol lg={12} className="text-end">
          <CButton color="success" variant="outline" variactive={true} disabled={false}
          onClick={onApiSend}>
            희원 추가
          </CButton>
        </CCol>
      </CCardFooter>
    </div>
  );
}
