import { toast } from 'react-toastify';
import { getAllProducts, getAllSales } from '../../helpers/axiosCalls/products';
import actionTypes from './actiontypes';
import triggerLoading from '../authActions/loading';
import networkError from '../networkError/networkErrorAction';
import { networkErrorResponse } from '../../constants';

const {
  PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SALES_FAILURE,
  FETCH_SALES_SUCCESS,
  SALES_LOADING } = actionTypes;

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


export const fetchSalesSuccess = payload => ({
  type: FETCH_SALES_SUCCESS,
  payload
});

export const fetchSalesFailure = payload => ({
  type: FETCH_SALES_FAILURE,
  payload
});

export const fetchSales = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(SALES_LOADING));
    const response = await getAllSales();
    dispatch(fetchSalesSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchSalesFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};
