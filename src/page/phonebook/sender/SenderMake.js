import React from 'react'
import { CFormInput, CFormLabel, CRow, CFormSelect } from '@coreui/react'
function SenderMake() {
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
export default SenderMake
