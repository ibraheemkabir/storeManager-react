import actionTypes from '../actions/productActions/actiontypes';
import initialState from './initialState';

const { SALES_LOADING, FETCH_SALES_FAILURE, FETCH_SALES_SUCCESS } = actionTypes;

const { allSales } = initialState;

export default (state = allSales, action) => {
  switch (action.type) {
    case SALES_LOADING:
      return {
        ...state,
        productsIsLoading: true
      };
    case FETCH_SALES_SUCCESS:
      return {
        productsIsLoading: false,
        success: true,
        response: action.payload.data,
      };
    case FETCH_SALES_FAILURE:
      return {
        productsIsLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};
