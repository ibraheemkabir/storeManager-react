import axios from 'axios';
import { config } from '../jwt';

const sale = (salesDetails) => {
  const response = axios({
    url: 'https://store-maneger.herokuapp.com/api/v1/sales',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export default sale;

const sellCart = (saleid, salesDetails) => {
  const response = axios.post(`https://store-maneger.herokuapp.com/api/v1/sales/cart/${saleid}`, salesDetails, config);
  return response;
};

export { sale, sellCart };
