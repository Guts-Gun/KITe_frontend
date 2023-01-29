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
    {
      "type": "SMS",
      "usageCap": 1000,
      "usage": 0
    },
    {
      "type": "KAKAO",
      "usageCap": 1000,
      "usage": 0
    },
    {
      "type": "EMAIL",
      "usageCap": 1000,
      "usage": 0
    },


  ];

  const [totalUsages, setTotalUsages] = useState([]);
  useEffect(() => {
    axios.get(apiConfig.resultUsage, {headers : headers})
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
              <UsageCard title={item.type} type={item.type} usage={item.usage} usageCap={item.usageCap}/>
            </CCarouselItem>
          )
        )
      }
    </CCarousel>
  )

}

export default UsageCarousel;

function UsageCard({title, type, usage, usageCap}) {
  return (
    <CCard>
      <CCardBody>
        <CCardTitle>
          <span>{title} </span>
        </CCardTitle>
        <CListGroup flush>
          <CListGroupItem>타입 : {type}</CListGroupItem>
          <CListGroupItem>사용 한도 : {usageCap}</CListGroupItem>
          <CListGroupItem>총 사용량 : {usage}</CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>
  );
}


UsageCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  usage: PropTypes.number,
  usageCap: PropTypes.number
};

