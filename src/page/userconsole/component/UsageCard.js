import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardTitle, CCarousel, CCarouselItem, CListGroup, CListGroupItem} from "@coreui/react";
import PropTypes from "prop-types";
import axios from "axios";
import apiConfig from "../../../lib/apiConfig";
import {useSelector} from "react-redux";


function UsageCarousel() {
  const {auth} = useSelector(({auth}) => ({auth: auth}));
  let headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }


  const totalUsagesDummy = [
    [
      {
        "sendingType": "SMS",
        "totalUsage": 1100,
        "usageCap": 100
      },
      {
        "sendingType": "MMS",
        "totalUsage": 1100,
        "usageCap": 100
      },
      {
        "sendingType": "KAKAO",
        "totalUsage": 1101340,
        "usageCap": 100
      },
      {
        "sendingType": "EMAIL",
        "totalUsage": 100110,
        "usageCap": 100
      }
    ]


  ];

  const [totalUsages, setTotalUsages] = useState([]);
  useEffect(() => {
    axios.get(apiConfig.resultUsage, {headers: headers})
      .then(function (response) {
        console.log('usage api');
        console.log(response.data);
        if (response.data.length > 0) {
          setTotalUsages(response.data);
        } else {
          console.log('place holder 삽입');
          setTotalUsages(totalUsagesDummy);
        }
      }).catch(function (error) {
      // 오류발생시 실행
      console.log('더미 삽입');
      setTotalUsages(totalUsagesDummy);
    }).then(function () {
      // 항상 실행
    });
  }, []);


  return (
    <CCarousel controls indicators dark>
      {
        totalUsages.map((item, index) => (
            <CCarouselItem key={index}>
              <UsageCard title={item.sendingType} sendingType={item.sendingType} totalUsage={item.totalUsage}
                         usageCap={item.usageCap}/>
            </CCarouselItem>
          )
        )
      }
    </CCarousel>
  )

}

export default UsageCarousel;

function UsageCard({title, sendingType, totalUsage, usageCap}) {
  return (
    <CCard>
      <CCardBody>
        <CCardTitle>
          <span>{title} </span>
        </CCardTitle>
        <CListGroup flush>
          <CListGroupItem>타입 : {sendingType}</CListGroupItem>
          <CListGroupItem>사용 한도 : {usageCap}</CListGroupItem>
          <CListGroupItem>총 사용량 : {totalUsage}</CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>
  );
}


UsageCard.propTypes = {
  title: PropTypes.string,
  sendingType: PropTypes.string,
  totalUsage: PropTypes.number,
  usageCap: PropTypes.number
};

