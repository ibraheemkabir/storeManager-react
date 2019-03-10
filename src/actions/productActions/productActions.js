import { toast } from 'react-toastify';
import { getAllProducts } from '../../helpers/axiosCalls/products';
import actionTypes from './actiontypes';
import triggerLoading from '../authActions/loading';
import networkError from '../networkError/networkErrorAction';
import { networkErrorResponse } from '../../constants';

const { PRODUCTS_LOADING, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } = actionTypes;

export const fetchproductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
});

export const fetchproductsFailure = payload => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload
});

export const fetchproducts = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(PRODUCTS_LOADING));
    const response = await getAllProducts();
    dispatch(fetchproductsSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchproductsFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};
