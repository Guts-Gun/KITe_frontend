import React from "react";
import BrokerInfoCard from "./BrokerInfoCard";
import SendingInfoCard from "../../userconsole/component/SendingInfoCard";
import {CCardGroup} from "@coreui/react";

function BrokerInfoCardGroup() {

  const totalBroker = [
    { title: '1번 중계사', smsPrice: 100, emailPrice: 500, kakaoPrice: 150, speed: 1 },
    { title: '2번 중계사', smsPrice: 200, emailPrice: 124, kakaoPrice: 100, speed: 2 },
    { title: '3번 중계사', smsPrice: 400, emailPrice: 120, kakaoPrice: 140, speed: 3 },
  ];

  return (
    <CCardGroup className = 'mb-5'>
      {totalBroker.map((item, index) =>(
        <BrokerInfoCard key = {index} title={item.title} smsPrice={item.smsPrice} emailPrice={item.emailPrice} kakaoPrice={item.kakaoPrice} speed={item.speed} />
      ))}
    </CCardGroup>
  );

}

export default BrokerInfoCardGroup;
