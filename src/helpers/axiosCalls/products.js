import axios from 'axios';
import { config } from '../jwt';

const getAllSales = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/sales', config
  );
  return response;
};

const getAllProducts = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/products', config
  );
  return response;
};

export { getAllSales, getAllProducts };
