import React from 'react'
import { CFormInput, CFormLabel, CRow, CFormSelect,CButton,CInputGroup,CInputGroupText } from '@coreui/react'
function SenderMake() {
  return (
    <div>
      <SingleSenderMake/>
      <MultiSenderMake/>
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
      <CButton color="success" key="success" active={true} disabled={false}>
          희원 추가
      </CButton>
    </div>
  )
}


function MultiSenderMake(){
  return (
    <div>
      <CInputGroup>
        <CFormInput
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <CButton
          type="button"
          color="secondary"
          variant="outline"
          id="inputGroupFileAddon04"
        >
          엑셀확인
        </CButton>
      </CInputGroup>
    </div>
  )
}

