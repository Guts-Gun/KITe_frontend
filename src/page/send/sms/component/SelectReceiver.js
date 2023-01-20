import React, {useEffect, useState} from 'react'
import {
    CButton,
    CCol,
    CFormInput,
    CFormLabel,
    CRow,
    CInputGroup,
    CListGroup,
    CListGroupItem,
    CFormSelect, 
    CFormCheck,
    CTable,
    CTableHeaderCell,
    CTableBody,
    CTableRow,
    CTableHead,
    CTableDataCell,
    CNav, 
    CNavItem, 
    CNavLink,
    CTabContent, 
    CTabPane,
    CCallout,
    CInputGroupText,
    CForm
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {cilUser, cilPhone, cilEnvelopeOpen, cilPlus, cilMinus} from '@coreui/icons';
import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import * as XLSX from "xlsx";


const SelectReceiver = (prop) => {

    // 수신자선택 - 탭
    const [activeKey, setActiveKey] = useState(1);
  

    // [입력]_____________________________________________________________________________________
    const [inputReceiverName, setInputReceiverName] = useState("");
    const [inputReceiverPhone, setInputReceiverPhone] = useState("");
    const [inputReceiverMail, setInputReceiverMail] = useState("");
    const [checkReceiverMail, setCheckReceiverMail] = useState(false);

    // 입력 수신자 추가
    function onclickAddReceiver(e){
      if(inputReceiverName===""){
        return;
      }
      if(!checkReceiverMail){
        return;
      }
      prop.addReceiver(inputReceiverName,inputReceiverPhone,inputReceiverMail);
      initInputReceiver();
    }

    function initInputReceiver(){
      setInputReceiverName("");
      setInputReceiverPhone("");
      setInputReceiverMail("");
      setCheckReceiverMail(false);
    }

    // 전화번호 입력
    const handlePressRPhone = (e) => {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        setInputReceiverPhone(e.target.value);
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

    // 이메일 입력
    const handlePressREmail = (e) => {
      const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      setInputReceiverMail(e.target.value);
      console.log(regExp.test(e.target.value));
      setCheckReceiverMail(regExp.test(e.target.value));
    }

    // 그룹_____________________________________________________________________________________

    // 그룹 리스트 조회
    const [groupData, setGroupData] = useState([]);
    useEffect(()=>{
      axios.get(apiConfig.groupSelect).then(function (response) {
        console.log(response.data);
          setGroupData(response.data);
      }).catch(function (error) {
      }).then(function() {
      });
    },[]);

    // 그룹 선택 시 해당 그룹의 주소록 조회
    const [selectedGroupReceiver, setSelectedGroupReceiver] = useState([]);
    function changeGroupId(id){ 
      console.log(id);
    }; 
  
    
    // 주소록검색_________________________________________________________________________________
    const [type, setType] = useState("");
    const [keyword, setKeyword] = useState("");

    

   // 엑셀업로드__________________________________________________________________________________
   function readUploadFile(e){
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
          const data = e.target.result;
          console.log(data);
          const workbook = XLSX.read(data, { type: "binary" });
          const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          addReceivers(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  function addReceivers(arr){
    if(window.confirm(arr.length +"개의 주소록이 입력됩니다.")){
      prop.addReceivers(arr);
    }           
  }

    // 수신자 삭제
    function onclickDeleteReceiver(e){
      console.log(e);

    }

    // 수신자 초기화
    function onclickDeleteAllReceiver(e){
      console.log(e);

    }


    return (
    <>
      <CRow className="mt-3 mb-3">
        <CFormLabel className="col-sm-2">수신자 선택</CFormLabel>
          <CCol xs={10}>
            <CRow>
            <CCol sm={12} md={6}>
              <CNav role="tablist" variant="tabs">
                <CNavItem><CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}> 입력 </CNavLink> </CNavItem>
                <CNavItem><CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}> 그룹 </CNavLink></CNavItem>
                <CNavItem><CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}> 주소록 </CNavLink></CNavItem>
                <CNavItem><CNavLink active={activeKey === 4} onClick={() => setActiveKey(4)}> 엑셀 업로드 </CNavLink></CNavItem>
              </CNav>

              <CTabContent>
                  <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                    <CRow className="mt-3">
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          <CIcon icon={cilUser} size="sm"></CIcon>
                        </CInputGroupText>
                        <CFormInput placeholder="이름" aria-label="Username" value={inputReceiverName} onChange={(e) => setInputReceiverName(e.target.value)} required/>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          <CIcon icon={cilPhone} size="sm"></CIcon>
                        </CInputGroupText>
                          <CFormInput placeholder="전화번호" aria-label="phone number" value={inputReceiverPhone} onChange={handlePressRPhone} required/>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          <CIcon icon={cilEnvelopeOpen} size="sm"></CIcon>
                        </CInputGroupText>
                        {checkReceiverMail? 
                          <CFormInput placeholder="이메일 주소" aria-label="email" value={inputReceiverMail} onChange={handlePressREmail} required/> 
                        :
                          <CFormInput placeholder="이메일 주소" aria-label="email" value={inputReceiverMail} onChange={handlePressREmail} invalid required/>
                        }
                      </CInputGroup>
                  </CRow>
                    <CCol lg={12} className="text-end">
                      <CButton onClick={onclickAddReceiver} color="success" variant="outline">
                        추가 
                      </CButton>
                    </CCol>
                  </CTabPane>

                  <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                    <CRow className="mt-1">
                      <CInputGroup className="mb-1">
                          <CFormSelect onChange={(e) => changeGroupId(e.target.value)}>
                          <option>선택</option>
                          {
                          groupData.map((group)=>(
                            <option key={group.id} value={group.id}>{group.groupName} </option>
                          ))} 
                          </CFormSelect>
                        </CInputGroup>
                        <CTable>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">#</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody className='custom_height'>
                          {
                          selectedGroupReceiver.map((groupReceiver)=>(
                            <CTableRow key={groupReceiver.id}>
                              <CTableHeaderCell scope="row">
                              <CFormCheck id={groupReceiver.id} defaultChecked/>
                              </CTableHeaderCell>
                              <CTableDataCell>{groupReceiver.name}</CTableDataCell>
                              <CTableDataCell>{groupReceiver.phone}</CTableDataCell>
                              <CTableDataCell>{groupReceiver.email}</CTableDataCell>
                            </CTableRow>
                            ))} 
                          </CTableBody>
                        </CTable>

                        {selectedGroupReceiver.size > 0 ? (
                            <CCol lg={12} className="text-end">
                            <CButton color="success" variant="outline">
                              추가 
                            </CButton>
                          </CCol>
                        ): <CCol lg={12} className="text-center">
                          <span> 결과가 없습니다.</span>
                          </CCol>}
                      
                      </CRow>
                  </CTabPane>
                  <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                    <CRow className="mt-1">
                      <CInputGroup className="mb-1">
                        <CFormSelect onChange={(e) => setType(e.target.value)}>
                          <option value="Phone">번호 검색</option>
                          <option value="Name">이름 검색</option>
                        </CFormSelect>
                        <CFormInput type="text" onChange={(e) => setKeyword(e.target.value)}/>
                        <CButton variant="outline" >검색</CButton>
                      </CInputGroup>
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                                <CIcon
                                  className="CButton"
                                  icon={cilPlus}
                                  size="sm"
                                  // onClick={(e) => {
                                  //   addSendItemHandler(e, member)
                                  // }}
                                ></CIcon>
                              </CTableHeaderCell>
                              <CTableDataCell>고솔비</CTableDataCell>
                              <CTableDataCell>010-4010-9537</CTableDataCell>
                              <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                                <CIcon
                                  className="CButton"
                                  icon={cilPlus}
                                  size="sm"
                                  // onClick={(e) => {
                                  //   addSendItemHandler(e, member)
                                  // }}
                                ></CIcon>
                              </CTableHeaderCell>
                              <CTableDataCell>고솔비</CTableDataCell>
                              <CTableDataCell>010-4010-9537</CTableDataCell>
                              <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CRow>
                  </CTabPane>
                  <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                    <CCallout color="primary">
                    <CButton component="input" type="button" color="primary" value="샘플파일 다운로드"/><br/>
                      * 등록할 파일을 선택해 주세요. <br/>
                      * 반드시 위에 샘플 엑셀파일을 다운로드 하신 후 작성해서 등록해 주세요.
                    </CCallout>
                    <CInputGroup>
                      <CFormInput type="file" accept=".xls,.xlsx" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" 
                      onChange={readUploadFile}/>
                    </CInputGroup>
                  </CTabPane>
              </CTabContent>


            </CCol>
            <CCol sm={12} md={6}>
              <CListGroup className="mb-1">
                  <CListGroupItem active className="d-flex">
                      전송 대상 (총 { prop.receiverList.length} 명) 
                      <div className="ms-auto">
                        <CButton color="light" size="sm" variant="outline" shape="rounded-pill" onClick={onclickDeleteAllReceiver}>
                          초기화
                        </CButton>
                      </div>
                  </CListGroupItem>
                  <div className='custom_height'>
                    {prop.receiverList.map((receiver)=>(

                      <CListGroupItem key={receiver.receiver} className="d-flex">
                      <CCol sm={11}>
                        <span className='me-3'>{receiver.name}</span>
                        <span className='me-3'>{receiver.phone}</span> 
                        <span className='me-3'>{receiver.email}</span>
                      </CCol>
                      <CCol sm={1}>
                          <CButton
                              color="danger"
                              size="sm"
                              variant="outline"
                              shape="rounded-pill"
                              onClick={onclickDeleteReceiver}
                            >
                              <CIcon className="CButton" icon={cilMinus} size="sm"/>
                            </CButton>
                        </CCol>
                      </CListGroupItem>
                    ))} 
                  </div>
              </CListGroup>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  ) 
}

export default SelectReceiver

