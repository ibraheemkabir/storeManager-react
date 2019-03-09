import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getUser = async (user) => {
  const response = await axios.get(`https://store-maneger.herokuapp.com/api/v1/users/${user}`);
  return response;
};
