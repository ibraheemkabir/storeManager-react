import actionTypes from '../actions/SaleActions/actionTypes';
import initialState from './initialState';

const { SALE_FAILURE, SALE_SUCCESS, SALE_LOADING } = actionTypes;

const { checkoutProducts } = initialState;

export default (state = checkoutProducts, action) => {
  switch (action.type) {
    case SALE_LOADING:
      return {
        ...state,
        productsIsLoading: true
      };
    case SALE_SUCCESS:
      console.log(action);

      return {
        productsIsLoading: false,
        success: true,
        response: action.payload.Order,
      };
    case SALE_FAILURE:
      return {
        productsIsLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};
