import actionTypes from '../actions/productActions/actiontypes';
import initialState from './initialState';

const { PRODUCTS_LOADING, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } = actionTypes;

const { allProducts } = initialState;

export default (state = allProducts, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        productsIsLoading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        productsIsLoading: false,
        success: true,
        response: action.payload.data,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        productsIsLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};
