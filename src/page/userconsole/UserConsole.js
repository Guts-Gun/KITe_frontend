import React from 'react'
import {CButtonGroup, CCard, CCardBody, CCol, CRow} from '@coreui/react'
import UsageCarousel from "./component/UsageCard";
import ShortCut from "./component/ShortCut";
import SendingInfoCardList from "./component/SendingInfoCard";
import {useSelector} from "react-redux";


function UserConsole() {

  const {auth} = useSelector(({auth}) => ({auth: auth}));
  var headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }

  console.log(auth);
  console.log(headers);

  return (
    <div>
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            {/* 이 crow가 왜 있는지 나도 잘 몰?루*/}
            <CRow>
              <CCol sm={5}>
                <h4 className="card-title mb-0">

                </h4>
              </CCol>
            </CRow>


            <CRow className='mt-3'>
              <CCol sm={12}>
                <h4 id="traffic" className="card-title mb-0">
                  요약
                </h4>
              </CCol>
              <CCol sm={6}>
                <UsageCarousel/>
              </CCol>

              <CCol sm={6}>
                <CRow>
                  <CButtonGroup role="group">
                    <ShortCut title={"sms"} link={'/#/sendSms'}/>
                    <ShortCut title={"email"} link={'#/sendEmail'}/>
                  </CButtonGroup>
                </CRow>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CRow>

      <CRow>
        <CCard className="mb-4">
          <SendingInfoCardList/>
        </CCard>
      </CRow>

    </div>
  );
}

export default UserConsole;
