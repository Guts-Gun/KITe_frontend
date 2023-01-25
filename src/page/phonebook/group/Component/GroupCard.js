import React,{ useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardLink,
    CCardSubtitle,
    CCardTitle,
    CRow,
    CCol,
    CFormCheck,
    CListGroup,
    CListGroupItem,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import PropTypes from "prop-types";
import {cilHamburgerMenu } from "@coreui/icons";
import CopyGroupModal from './CopyGroupModal';
import UpdateGroupModal from './UpdateGroupModal';
import DeleteGroupModal from './DeleteGroupModal';

function GroupCard({id,groupName,groupDescription,regDt,modDt,addressCount,onSelect}){
  const [visibleCopy, setVisibleCopy] = useState(false);  
  const [visibleUpdate, setVisibleUpdate] = useState(false); 
  const [visibleDelete, setVisibleDelete] = useState(false); 

  const onCheck = (e,id) =>{
    onSelect(id,e.target.checked);
  }

  const onlyDate = (d) => {
    const date = new Date(d);
    return date.getFullYear() + ". " + date.getMonth()+1 + ". " + date.getDate();
  }
    return(
        <CCol className = 'mb-4' xs={12} sm = {6} md = {4}>
            <CCard>
              <CCardBody>
                <CCardTitle>
                  <CRow className="mb-3">
                    <CCol lg={10}>
                      <CFormCheck onChange={(e)=>onCheck(e,id)}/>
                      <span className="ms-2">{groupName}</span>
                    </CCol>
                    <CCol lg={2} className="text-end">
                      <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={false} className="p-0">
                          <CIcon icon={cilHamburgerMenu}/>
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={()=>setVisibleCopy(true)}>복사</CDropdownItem>
                          <CopyGroupModal  id={id} name={groupName} description={groupDescription} visible={visibleCopy} setVisible={setVisibleCopy}/>

                          <CDropdownItem onClick={()=>setVisibleUpdate(true)}>수정</CDropdownItem>
                          <UpdateGroupModal id={id} name={groupName} description={groupDescription} visible={visibleUpdate} setVisible={setVisibleUpdate}/>
                          
                          <CDropdownItem onClick={()=>setVisibleDelete(true)}>삭제</CDropdownItem>
                          <DeleteGroupModal id={id} name={groupName} visible={visibleDelete} setVisible={setVisibleDelete}/>
                        </CDropdownMenu>
                      </CDropdown>
                    </CCol>
                  </CRow>
                  <CCardSubtitle className="mb-2 text-medium-emphasis">{groupDescription}</CCardSubtitle>
                </CCardTitle>
              </CCardBody>
              <CListGroup flush>  
                <CListGroupItem>인원 수 : {addressCount}</CListGroupItem>
                <CListGroupItem>생성일 : {onlyDate(regDt)}</CListGroupItem>
                <CListGroupItem>수정일 : {onlyDate(modDt)}</CListGroupItem>
              </CListGroup>
              <CCardBody>
                <CRow>
                <CCol>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                </CCol>
                </CRow>
              </CCardBody>
            </CCard>
        </CCol> 
  )
}



GroupCard.propTypes = {
    id : PropTypes.number,
    groupName : PropTypes.string,
    groupDescription : PropTypes.string,
    regDt : PropTypes.string,
    modDt : PropTypes.string,
    addressCount : PropTypes.number,
    onSelect : PropTypes.func
};


export default GroupCard;