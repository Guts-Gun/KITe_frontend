import apiConfig from '../apiConfig';
import axios from 'axios';

export const brokerList = ()=> axios.get(apiConfig.brokerList);
export const smsBrokerList = ()=> axios.get(apiConfig.brokerTypeList,{  params: {
    "sendingType":"SMS"
}});

