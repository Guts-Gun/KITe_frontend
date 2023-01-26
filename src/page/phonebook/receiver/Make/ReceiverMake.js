import React ,{useState} from 'react'
import { CFormCheck,CFormLabel, CRow, CButton,
  CCard,CCardHeader,CCardBody,CCol,
  CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
CListGroup,CListGroupItem} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus } from '@coreui/icons';

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';
import { SingleReceiverMake } from './Component/SingleReceiverMake';
import { MutiReceiverMake } from './Component/MutiReceiverMake';
import { ExcelReceiverMake } from './Component/ExcelReceiverMake';

function ReceiverMake() {
  // 발신번호 추가 - 단일/엑셀업로드 
  // single/excel/form
  const [sendPlus,setSendPlus] = useState("single");
  function radioChange(e){
    setSendPlus(e.target.value);
  }
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>주소록 추가</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CFormLabel className="col-sm-3">추가 방식</CFormLabel>
            <CCol className="col-sm-9">
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="single" label="단일" checked={sendPlus === "single"}onChange={radioChange} defaultChecked />
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="multi" label="다중" checked={sendPlus === "multi"}onChange={radioChange}/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="excel" label="Excel"checked={sendPlus === "excel"}onChange={radioChange}/>
            </CCol>
          </CRow>
        </CCardBody>
          {sendPlus === "single" ? <SingleReceiverMake/>:null}
          {sendPlus === "multi" ? <MutiReceiverMake/> :null}
          {sendPlus === "excel" ? <ExcelReceiverMake/> :null}
    </CCard>

    </div>
  )
}
export default ReceiverMake

export function AppendList(){
  return(
    <CListGroup className="mb-1">
      <CListGroupItem active className="d-flex">
          주소록 추가 대상 (총 10명) 
          <div className="ms-auto">
          <CButton
                color="light"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                초기화
              </CButton>
          </div>
      </CListGroupItem>
      <div className='custom_height'>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        <CListGroupItem  className="d-flex">
          <span>고솔비 (010-4010-9537)</span>
          <div className="ms-auto">
          <CButton
                color="danger"
                size="sm"
                variant="outline"
                shape="rounded-pill"
                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
              >
                <CIcon className="CButton" icon={cilMinus} size="sm"/>
              </CButton>
          </div>
        </CListGroupItem>
        </div>
    </CListGroup>
  )
}

