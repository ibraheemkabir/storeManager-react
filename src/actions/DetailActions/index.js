import { toast } from 'react-toastify';
import { AddCategories, AddProducts, getAllcategories } from '../../helpers/axiosCalls/products';
import actionTypes from './actionTypes';
import triggerLoading from '../authActions/loading';
import networkError from '../networkError/networkErrorAction';
import { networkErrorResponse } from '../../constants';

const {
  FETCH_CATEGORIES_LOADING,
  ADD_CATEGORIES_LOADING,
  ADD_PRODUCTS_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORIES_SUCCESS,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORIES_FAILURE,
} = actionTypes;

export const fetchcategoriesSuccess = payload => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload
});

export const addproductsSuccess = payload => ({
  type: ADD_PRODUCTS_SUCCESS,
  payload
});

export const addcategoriesSuccess = payload => ({
  type: ADD_CATEGORIES_SUCCESS,
  payload
});

export const fetchcategoriesFailure = payload => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload
});

export const addproductsFailure = payload => ({
  type: ADD_PRODUCTS_FAILURE,
  payload
});

export const addcategoriesFailure = payload => ({
  type: ADD_CATEGORIES_FAILURE,
  payload
});

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(FETCH_CATEGORIES_LOADING));
    const response = await getAllcategories();
    dispatch(fetchcategoriesSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchcategoriesFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};

export const addProducts = details => async (dispatch) => {
  try {
    dispatch(triggerLoading(ADD_PRODUCTS_LOADING));
    const response = await AddProducts(details);
    dispatch(addproductsSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(addproductsFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};

export const addCategories = details => async (dispatch) => {
  try {
    dispatch(triggerLoading(ADD_CATEGORIES_LOADING));
    const response = await AddCategories(details);
    dispatch(addcategoriesSuccess(response));
    toast.info(response.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(addcategoriesFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};
