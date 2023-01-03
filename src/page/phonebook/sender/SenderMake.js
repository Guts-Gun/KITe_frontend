import React ,{useState} from 'react'
import { CFormCheck,CFormInput, CFormLabel, CRow, CFormSelect,CButton,CInputGroup,
  CCard,CCardHeader,CCardBody,CCardFooter,CCol,
  CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell } from '@coreui/react'
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
            <div className="col-sm-9">
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="single" label="단일" checked={sendPlus === "single"}onChange={radioChange} defaultChecked />
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="multi" label="다중" checked={sendPlus === "multi"}onChange={radioChange}/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="excel" label="Excel"checked={sendPlus === "excel"}onChange={radioChange}/>
            </div>
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
      <CInputGroup className="mb-1">
              <CFormSelect>
                <option value="Phone">그룹1</option>
                <option value="Phone">그룹2</option>
              </CFormSelect>
            </CInputGroup>
      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
          이름
      </CFormLabel>
      <CFormInput id="inputPassword" />
      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
          전화번호
      </CFormLabel>
      <CFormInput id="inputPassword" />
      <CButton variant="outline">추가</CButton>
      <CRow>
        <CButton color="danger" variant="outline">삭제</CButton>
      </CRow>
      <PhoneBookList/>
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

