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

function GroupCard({groupId,groupName,groupDescription}){
    return(
        <CCol className = 'mb-4' xs={12} sm = {6} md = {4}>
            <CCard>
              <CCardBody>
                <CCardTitle>
                  <CRow className="mb-3">
                    <CCol lg={10}>
                      <CFormCheck id="flexCheckDefault"/>
                      <span className="ms-2">{groupName}</span>
                    </CCol>
                    <CCol lg={2} className="text-end">
                      <CDropdown alignment="end">
                        <CDropdownToggle color="transparent" caret={false} className="p-0">
                          <CIcon icon={cilHamburgerMenu}/>
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem>그룹 복사</CDropdownItem>
                          <CDropdownItem>수정</CDropdownItem>
                          <CDropdownItem>삭제</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CCol>
                  </CRow>
                  <CCardSubtitle className="mb-2 text-medium-emphasis">{groupDescription}</CCardSubtitle>
                </CCardTitle>
              </CCardBody>
              <CListGroup flush>  
                <CListGroupItem>인원 수 : 2000</CListGroupItem>
                <CListGroupItem>생성일 : 2022.03.21</CListGroupItem>
                <CListGroupItem>수정일 : 2022.03.25</CListGroupItem>
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
    groupId : PropTypes.string.isRequired,
    groupName : PropTypes.string,
    groupDescription : PropTypes.string,
};


export default GroupCard;