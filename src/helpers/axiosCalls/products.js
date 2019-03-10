import axios from 'axios';
import { config } from '../jwt';

const getAllProducts = async () => {
  const response = await axios.get(
    'https://store-maneger.herokuapp.com/api/v1/sales', config
  );
  return response;
};

export { getAllProducts };
