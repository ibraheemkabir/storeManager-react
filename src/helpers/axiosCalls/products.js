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

const getAllcategories = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/category', config
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
