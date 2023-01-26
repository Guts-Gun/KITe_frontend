import React,{useState,useEffect,useRef} from 'react';
import { CListGroup ,CListGroupItem,CFormInput, CFormLabel, CRow, CFormSelect, CButton, CInputGroup, CCardBody, CCardFooter, CCol, CCallout } from '@coreui/react';
import { ReceiverItem } from "./ReceiverItem";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

import * as XLSX from "xlsx";

export function ExcelReceiverMake() {
  /*group list*/
  const [groupData,setGroupData] = useState([]);
  //get data
  useEffect(()=>{
    axios.get(apiConfig.groupSelectList)
    .then(function (response) {
        console.log(response.data);
        setGroupData(response.data);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
  },[]);

  /*api send data*/
  const [sendData, setSendData] = useState({groupId:-1,requestAddressList:[]});
  const onGroupChange = (e) => setSendData({ ...sendData, groupId: e.target.value });
  const onApiSend = () => {
    console.log(sendData);
    if(sendData.requestAddressList.length>=1){
      axios.post(apiConfig.phoneBookCreateList, sendData)
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
    }
  };

  /*list*/
  //form으로 추가한 전화번호 item 삭제
  const onDeleteItem = (i) => {
    console.log(i);
    const requestAddressList = Object.assign(sendData.requestAddressList);
    requestAddressList.splice(i,1);
    setSendData({ ...sendData, 
      requestAddressList:requestAddressList });
  }

  //form으로 추가한 전화번호 item 전체 삭제
  const onListReset = (e) => setSendData({ ...sendData, requestAddressList:[]});


  /*EXCEL 업로드*/
  function clickDownload(){
    window.location.href = apiConfig.downloadSampleFile;
  }

  const fileInput=useRef();
  const onClearAttachment=()=>{
        fileInput.current.value = "";
    };

  // file to JsonArray
  function readUploadFile(e){
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          addReceivers(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  function addReceivers(arr){
    if(arr.length >0){
      if(window.confirm("🐰 " + arr.length +"개의 주소록이 입력됩니다.\n🐰 중복된 번호는 추가되지 않습니다!")){
        onClearAttachment();
        setSendData({ ...sendData, requestAddressList:[...sendData.requestAddressList,...arr] })
      }           
    }
  }



  return (
    <div>
      <CCardBody>
        <CRow>
          <CCol className='col-sm-6'>
            <CRow className="mb-3 m-1">
              <CFormLabel>그룹</CFormLabel>
              <CInputGroup>
                <CFormSelect onChange={onGroupChange}>
                  <option value="-1">미그룹</option>
                  {groupData.map(d=><option key={d.id} value={d.id}>{d.groupName}</option>)}
                </CFormSelect>
              </CInputGroup>
            </CRow>
            <CRow className="mb-3 m-1">
              <CFormLabel>엑셀 파일 입력</CFormLabel>
              <CCallout color="primary">
                <CButton component="input" type="button" color="primary" value="샘플파일 다운로드" onClick={clickDownload}/><br />
                * 등록할 파일을 선택해 주세요. <br />
                * 반드시 위에 샘플 엑셀파일을 다운로드 하신 후 작성해서 등록해 주세요.
              </CCallout>
              <CInputGroup>
              <CFormInput type="file" accept=".xls,.xlsx" id="inputGroupFile04" ref={fileInput}  aria-label="Upload" 
                onChange={readUploadFile}/>
              </CInputGroup>
            </CRow>
          </CCol>
          {/* 오른쪽 */}
          <CCol className='col-sm-6'>
            <CListGroup className="mb-1">
              <CListGroupItem active className="d-flex">
                주소록 추가 대상 (총 {sendData.requestAddressList.length}명)
                <div className="ms-auto">
                  <CButton
                    color="light"
                    size="sm"
                    variant="outline"
                    shape="rounded-pill"
                    onClick={onListReset}
                  >
                    초기화
                  </CButton>
                </div>
              </CListGroupItem>
              <div className='custom_height'>
                {sendData.requestAddressList.map((d,i)=><ReceiverItem key={i} id={i} name={d.name} phone={d.phone} email={d.email} onDelete={onDeleteItem}/>)}
              </div>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CCol lg={12} className="text-end">
          <CButton color="success" variant="outline" variactive={true} disabled={false}
          onClick={onApiSend}>
            희원 추가
          </CButton>
        </CCol>
      </CCardFooter>
    </div>
  );
}
