import React ,{useState} from 'react'
import { CFormCheck,CFormInput, CFormLabel, CRow, CFormSelect,CButton,CInputGroup,
  CCard,CCardHeader,CCardBody,CCardFooter,CCol,
  CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
CListGroup,CListGroupItem} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus } from '@coreui/icons';
import PhoneBookList from 'src/component/sender/PhoneBookList';
function SenderMake() {
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
          <strong>발신번호 추가</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-3">추가 방식</CFormLabel>
            <CCol className="col-sm-9">
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="single" label="단일" checked={sendPlus === "single"}onChange={radioChange} defaultChecked />
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="multi" label="다중" checked={sendPlus === "multi"}onChange={radioChange}/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="excel" label="Excel"checked={sendPlus === "excel"}onChange={radioChange}/>
            </CCol>
          </CRow>
          <CRow className="mb-3">
          {sendPlus === "single" ? <SingleSenderMake/>:null}
          {sendPlus === "multi" ? <MutiSenderMake/> :null}
          {sendPlus === "excel" ? <ExcelSenderMake/> :null}
          </CRow>
        </CCardBody>
      <CCardFooter>
          <CCol lg={12} className="text-end">
            <CButton color="success" variant="outline" variactive={true} disabled={false}>
              희원 추가
            </CButton>
          </CCol>
        </CCardFooter>
    </CCard>

    </div>
  )
}
export default SenderMake

function SingleSenderMake(){
  return (
    <div>
      <CRow className="mb-3">
        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
          이름
        </CFormLabel>
        <div className="col-sm-10">
          <CFormInput id="inputPassword" />
        </div>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
          전화번호
        </CFormLabel>
        <div className="col-sm-10">
          <CFormInput id="inputPassword" />
        </div>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
          그룹
        </CFormLabel>
        <div className="col-sm-10">
          <CFormSelect aria-label="Default select example">
            <option value="1">호</option>
            <option value="2">잇</option>
            <option value="3">잇</option>
          </CFormSelect>
        </div>
      </CRow> 
    </div>
  )
}

function MutiSenderMake(){
  return(
    <div>
      <CRow>
        <CCol className='col-sm-6'>
          <CRow className="mb-3 m-1">
            <CFormLabel>그룹</CFormLabel>
            <CInputGroup>
              <CFormSelect>
                <option value="Phone">그룹1</option>
                <option value="Phone">그룹2</option>
              </CFormSelect>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3 m-1">
            <CFormLabel>이름</CFormLabel>
            <CFormInput id="inputPassword" />
          </CRow>
          <CRow className="mb-3 m-1">
            <CFormLabel>전화번호</CFormLabel>
            <CFormInput id="inputPassword" />
          </CRow>
          <CCol lg={12} className="text-end">
            <CButton variant="outline">추가</CButton>
          </CCol>
        </CCol>
        <CCol className='col-sm-6'>
          <AppendList/>
        </CCol>
      </CRow>
    </div>
  )
}


function ExcelSenderMake(){
  return (
    <div>
      <CInputGroup className="mb-1">
              <CFormSelect>
                <option value="Phone">그룹1</option>
                <option value="Phone">그룹2</option>
              </CFormSelect>
            </CInputGroup>
      <CInputGroup>
        <CFormInput
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <CButton
          type="button"
          variant="outline"
          id="inputGroupFileAddon04"
        >
          엑셀확인
        </CButton>
      </CInputGroup>
      <PhoneBookList/>
    </div>
  )
}


function AppendList(){
  return(
    <CListGroup className="mb-1">
      <CListGroupItem active className="d-flex">
          발신번호 추가 대상 (총 10명) 
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

