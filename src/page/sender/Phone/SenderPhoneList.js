import React,{useState,useEffect} from 'react'
import {
  CButton,
  CFormSelect,
  CFormInput,
  CInputGroup,
  CRow,CCol,
  CCard,CCardHeader,CCardBody,
  CTable,CTableHead,CTableBody,CTableHeaderCell,CTableRow} from '@coreui/react'
import { PhoneMakeModal } from './Component/PhoneMakeModal'
import { PhoneTableRow } from './Component/PhoneTableRow'
import ErrorComponent from 'src/component/error/ErrorComponent';

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { PhoneDeleteModal } from './Component/PhoneDeleteModal';
import { PhoneUpdateModal } from './Component/PhoneUpdateModal';
import { PhoneNotUpdateModal } from './Component/PhoneNotUpdateModal';
import { PhoneNotDeleteModal } from './Component/PhoneNotDeleteModal';
import Loading from 'src/lib/Loading/Loading';

function SenderPhoneList() {
  //data
  const [phoneData,setPhoneData] = useState([]);
  const [phoneDataFiltering,setPhoneDataFiltering] = useState([]);

  const [loading, setLoading] = useState(false);
  //GET DATA
  useEffect(()=>{
    setLoading(true);
    axios.get(apiConfig.phoneSelect)
    .then(function (response) {
        console.log(response.data);
        setLoading(false);
        setPhoneData(response.data);
        setPhoneDataFiltering(response.data);
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
    setSelect(select.filter(x => phoneDataFiltering.map(d=>d.id).includes(x)));
  },[phoneDataFiltering]);

  //filter  
  const [filterType,setFilterType] = useState("phone");
  const [filterValue,setFilterValue] = useState("");

  const onFilterTypeChange = (e) => (setFilterType(e.target.value));
  const onFilterValueChange = (e) => (setFilterValue(e.target.value));
  const onFilterSumbit = (e)=>{
    if(filterType==="phone"){
      setPhoneDataFiltering(phoneData.filter(d=>d.phone.toUpperCase().includes(filterValue.toUpperCase())));
    }
    if(filterType==="name"){
      setPhoneDataFiltering(phoneData.filter(d=>d.name.toUpperCase().includes(filterValue.toUpperCase())));
    }
  }
  const onFilterReset = () => {
    setPhoneDataFiltering(phoneData);
  };


  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발신 전화번호 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <CRow className="mb-3">
              <CCol className="col-sm-4"> 
                <PhoneMakeModal/>
                {select.length == 0?
                  <PhoneNotUpdateModal reason="하나를 선택해주세요"/>
                  :select.length >=2 ?
                    <PhoneNotUpdateModal reason="하나만 선택해주세요"/> 
                    :<PhoneUpdateModal prev={phoneData.filter(d=> d.id == select[0])[0]}/>
                }
                {select.length == 0?
                  <PhoneNotDeleteModal reason="하나 이상을 선택해주세요"/>
                  :<PhoneDeleteModal deleteList={select}/>
                }
              </CCol>
              <CCol className="col-sm-8"> 
                <CInputGroup>
                    <CFormSelect onChange={onFilterTypeChange}>
                      <option value="phone">전화번호 검색</option>
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
                              <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                    </CTable>
                  </div>
                  :phoneData.length===0 ?
                    <ErrorComponent log={"데이터가 없어요"}/>
                    : phoneDataFiltering.length === 0?
                      <ErrorComponent log={"검색한 결과가 없어요"}/> 
                      :<CTable>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">#</CTableHeaderCell>
                              <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                              <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {phoneDataFiltering.map(d=>(<PhoneTableRow key={d.id} id={d.id} name={d.name} phone={d.phone} onSelect={onSelect}/>))}
                          </CTableBody>
                      </CTable>
                }
              </CRow>
              <CRow className="mb-3 justify-content-end">
                  <p>＃발신 전화번호는 10개까지 추가 가능합니다.</p>
              </CRow>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default SenderPhoneList


