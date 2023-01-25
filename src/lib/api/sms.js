import apiConfig from '../apiConfig';
import axios from 'axios';

const client = axios.create();

export const brokerList = ()=> client.get(apiConfig.brokerList);

