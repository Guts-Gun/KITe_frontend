import React,{useState,useEffect} from 'react'
import {
  CButton,
  CFormSelect,
  CFormInput,
  CInputGroup,
  CRow,CCol,
  CCard,CCardHeader,CCardBody,
  CTable,CTableHead,CTableBody,CTableHeaderCell,CTableRow} from '@coreui/react'
import { EmailMakeModal } from './Component/EmailMakeModal'
import { EmailTableRow } from './Component/EmailTableRow'
import ErrorComponent from 'src/component/error/ErrorComponent';

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { EmailDeleteModal } from './Component/EmailDeleteModal';
import { EmailUpdateModal } from './Component/EmailUpdateModal';
import { EmailNotUpdateModal } from './Component/EmailNotUpdateModal';
import { EmailNotDeleteModal } from './Component/EmailNotDeleteModal';
import Loading from 'src/lib/Loading/Loading';

function SenderEmailList() {
  //data
  const [emailData,setEmailData] = useState([]);
  const [emailDataFiltering,setEmailDataFiltering] = useState([]);

  const [loading, setLoading] = useState(false);
  //GET DATA
  useEffect(()=>{
    setLoading(true);
    axios.get(apiConfig.emailSelect)
    .then(function (response) {
        console.log(response.data);
        setLoading(false);
        setEmailData(response.data);
        setEmailDataFiltering(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
        setLoading(false);
    }).then(function() {
        // 항상 실행
        setLoading(false);
    });
  },[]);
  

  //select(for update.delete)
  const [select,setSelect] = useState([]);
  const onSelect = (id,checked) => {
    if(checked===true){
      setSelect([...select,id])
    }
    if(checked===false){ 
      setSelect(select.filter(d=>d!=id));
    }
  };

  useEffect(() => {
    //교집합
    setSelect(select.filter(x => emailDataFiltering.map(d=>d.id).includes(x)));
  },[emailDataFiltering]);

  //filter  
  const [filterType,setFilterType] = useState("email");
  const [filterValue,setFilterValue] = useState("");

  const onFilterTypeChange = (e) => (setFilterType(e.target.value));
  const onFilterValueChange = (e) => (setFilterValue(e.target.value));
  const onFilterSumbit = (e)=>{
    if(filterType==="email"){
      setEmailDataFiltering(emailData.filter(d=>d.email.toUpperCase().includes(filterValue.toUpperCase())));
    }
    if(filterType==="name"){
      setEmailDataFiltering(emailData.filter(d=>d.name.toUpperCase().includes(filterValue.toUpperCase())));
    }
  }
  const onFilterReset = () => {
    setEmailDataFiltering(emailData);
  };


  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발신 이메일 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <CRow className="mb-3">
              <CCol className="col-sm-4"> 
                <EmailMakeModal/>
                {select.length == 0?
                  <EmailNotUpdateModal reason="하나를 선택해주세요"/>
                  :select.length >=2 ?
                    <EmailNotUpdateModal reason="하나만 선택해주세요"/> 
                    :<EmailUpdateModal prev={emailData.filter(d=> d.id == select[0])[0]}/>
                }
                {select.length == 0?
                  <EmailNotDeleteModal reason="하나 이상을 선택해주세요"/>
                  :<EmailDeleteModal deleteList={select}/>
                }
              </CCol>
              <CCol className="col-sm-8"> 
                <CInputGroup>
                    <CFormSelect onChange={onFilterTypeChange}>
                      <option value="email">이메일 검색</option>
                      <option value="name">이름 검색</option>
                    </CFormSelect>
                    <CFormInput onChange={onFilterValueChange} type="text"/> 
                  <CButton color="danger" variant="outline" onClick={onFilterReset} >초기화</CButton>   
                  <CButton variant="outline" onClick={onFilterSumbit}>검색</CButton>      
                  </CInputGroup>
              </CCol>
            </CRow>
          </CRow>
          <CRow className="mt-3 mb-3">
            <CRow className="mb-3">
               {loading?
                  <div>
                    <Loading />
                    <CTable>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">#</CTableHeaderCell>
                              <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                              <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                    </CTable>
                  </div>
                  :emailData.length===0 ?
                    <ErrorComponent log={"데이터가 없어요"}/>
                    : emailDataFiltering.length === 0?
                      <ErrorComponent log={"검색한 결과가 없어요"}/> 
                      :<CTable>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">#</CTableHeaderCell>
                              <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                              <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {emailDataFiltering.map(d=>(<EmailTableRow key={d.id} id={d.id} name={d.name} email={d.email} onSelect={onSelect}/>))}
                          </CTableBody>
                      </CTable>
                }
              </CRow>
              <CRow className="mb-3 justify-content-end">
                  <p>＃발신 이메일은 10개까지 추가 가능합니다.</p>
              </CRow>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default SenderEmailList


