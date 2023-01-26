import React,{ useState,useEffect} from 'react'
import {
  CButton,
  CFormSelect,
  CFormInput,
  CInputGroup,
  CRow,CCol,
  CCard,CCardHeader,CCardBody,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,CPaginationItem,
  CFormLabel,
} from '@coreui/react'


import {useSearchParams,useNavigate } from "react-router-dom";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

import { PhoneTableRow } from './Component/PhoneTableRow'
import { PhoneBookDeleteModal } from './Component/PhoneBookDeleteModal';
import { PhoneBookNotDeleteModal } from './Component/PhoneBookNotDeleteModal';

import ErrorComponent from 'src/component/error/ErrorComponent';



let paramUrl;
function ReceiverList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const page = searchParams.get('page');

  const navigate = useNavigate();


  //group get
  const [phoneBookData,setPhoneBookData] = useState([]);

  //get data
  useEffect(()=>{
    if(name===null && email ==null && phone==null){
      paramUrl = "/receiverList?"+"page=";
      axios.get(apiConfig.phoneBookSelectPage,{params :{page:page}})
      .then(function (response) {
          console.log(response.data);
          setPhoneBookData(response.data);
      }).catch(function (error) {
          // 오류발생시 실행
      }).then(function() {
          // 항상 실행
      });
    }
    else{
      if(name!=null){
        paramUrl = "/receiverList?"+"name="+name+"&page=";
        axios.get(apiConfig.phoneBookSelectPageFilter,{params :{name:name,page:page}})
        .then(function (response) {
            console.log(response.data);
            setPhoneBookData(response.data);
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
      }
      if(phone!=null){
        paramUrl = "/receiverList?"+"phone="+phone+"&page=";
        axios.get(apiConfig.phoneBookSelectPageFilter,{params :{phone:phone,page:page}})
        .then(function (response) {
            console.log(response.data);
            setPhoneBookData(response.data);
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
      }
      if(email!=null){
        paramUrl = "/receiverList?"+"email="+email+"&page=";
        axios.get(apiConfig.phoneBookSelectPageFilter,{params :{email:email,page:page}})
        .then(function (response) {
            console.log(response.data);
            setPhoneBookData(response.data);
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
      }
    }
  },[]);

  //select
  const [select,setSelect] = useState([]);
  const onSelect = (id,checked) => {
    if(checked===true){
      setSelect([...select,id])
    }
    if(checked===false){ 
      setSelect(select.filter(d=>d!=id));
    }
  };

  //filter  
  const [filterType,setFilterType] = useState("phone");
  const [filterValue,setFilterValue] = useState("");

  const onFilterTypeChange = (e) => (setFilterType(e.target.value));
  const onFilterValueChange = (e) => (setFilterValue(e.target.value));
  const onFilterSumbit = (e)=>{
    navigate("/receiverList?"+filterType+"="+filterValue+"&page=0");
    window.location.reload();
  };
  const onFilterReset = () => {
    navigate("/receiverList?"+"page=0");
    window.location.reload();
  };

  console.log(paramUrl);
  //pagination
  const pagenationLimit = 5;
  const onClickPagination = (num) => {
    console.log(num);
    console.log(paramUrl+num);
    navigate(paramUrl+num);
    window.location.reload();
  }


  
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>주소록 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <CRow className="mb-3">
              <CRow>
                <CCol className="col-sm-2"> 
                  <CFormLabel>필터</CFormLabel>
                </CCol>
                <CCol className="col-sm-10"> 
                <CInputGroup>
                    <CFormSelect onChange={onFilterTypeChange}>
                      <option value="phone">번호</option>
                      <option value="name">이름</option>
                      <option value="email">이메일</option>
                      </CFormSelect>
                    <CFormInput type="text"  onChange={onFilterValueChange}/>
                    <CButton color="danger" variant="outline" onClick={onFilterReset}>초기화</CButton>
                    <CButton variant="outline" onClick={onFilterSumbit}>검색</CButton>
                </CInputGroup>
                </CCol>
              </CRow>
            </CRow>
            <CRow>
              <CCol className="col-sm-2"> 
                <CFormLabel>변경</CFormLabel>
              </CCol>
              <CCol className="col-sm-2"> 
              {select.length == 0?
                  <PhoneBookNotDeleteModal reason="하나 이상을 선택해주세요"/>
                  :<PhoneBookDeleteModal deleteList={select}/>
              }
              </CCol>
            </CRow>
          </CRow>
          <CRow className="mt-3 mb-3">
            <CFormLabel className="mt-3 mb-3">주소록</CFormLabel>
            <CRow className="mb-3">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                  <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
                  <CTableHeaderCell scope="col">그룹</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {phoneBookData.length===0 
                  ?<ErrorComponent log={"데이터가 없어요"}/>
                  :phoneBookData.map(d=> <PhoneTableRow key={d.userAddressId} id={d.userAddressId} name={d.name} email={d.email} phone={d.phone} groupList={d.groupList} onSelect={onSelect}/> ) 
                } 
              </CTableBody>
            </CTable>
            </CRow>
          </CRow>
          <CRow className="mb-3 justify-content-center">
            <CCol lg={12}>
              <CPagination align="center" aria-label="Page navigation example">
                {parseInt(page)-1===-1?
                null
                :<CPaginationItem onClick={()=>onClickPagination(parseInt(page)-1)} >{parseInt(page)}</CPaginationItem>
                }
                <CPaginationItem onClick={()=>onClickPagination(parseInt(page))}>{parseInt(page)+1}</CPaginationItem>
                {phoneBookData.length < pagenationLimit?
                null
                :<CPaginationItem onClick={()=>onClickPagination(parseInt(page)+1)}>{parseInt(page)+2}</CPaginationItem>
                }
              </CPagination>
            </CCol>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default ReceiverList


