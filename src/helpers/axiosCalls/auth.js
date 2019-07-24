import axios from 'axios';

const signupCall = async (user) => {
  const response = await axios.post(
    'https://store-maneger.herokuapp.com/api/v1/users/auth/signup',
    user
  );
  return response;
};

const loginCall = async (user) => {
  const response = await axios.post(
    'https://store-maneger.herokuapp.com/api/v1/users/auth/signin',
    user
  );
  return response;
};

export { signupCall, loginCall };
