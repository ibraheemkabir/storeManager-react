import axios from 'axios';
import { config } from '../jwt';

const gettoken = () => {
  const token = localStorage.getItem('authentication');
  const auth = { headers: { token } };
  return auth;
};
const getAllSales = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/sales', gettoken()
  );
  return response;
};

const getAllProducts = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/products', gettoken()
  );
  return response;
};

const getAllcategories = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/category', gettoken()
  );
  return response;
};

const AddProducts = async (details) => {
  const response = await axios.post(
    'https://store-maneger.herokuapp.com/api/v1/products', details, config
  );
  return response;
};

const AddCategories = async (details) => {
  const response = await axios.post(
    'https://store-maneger.herokuapp.com/api/v1/category', details, config
  );
  return response;
};

export { getAllSales, getAllProducts, AddProducts, AddCategories, getAllcategories };
