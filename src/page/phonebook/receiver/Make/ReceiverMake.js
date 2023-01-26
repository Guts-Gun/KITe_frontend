import React ,{useState} from 'react'
import { CFormCheck,CFormLabel, CRow, 
  CCard,CCardHeader,CCardBody,CCol,
  CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell} from '@coreui/react'
import { cilPlus } from '@coreui/icons';

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


