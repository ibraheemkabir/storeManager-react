import { toast } from 'react-toastify';
import sellProduct from '../../helpers/checkoutHelper';
import actionTypes from './actionTypes';
import triggerLoading from '../authActions/loading';
import networkError from '../networkError/networkErrorAction';
import { networkErrorResponse } from '../../constants';

const {
  SALE_LOADING,
  SALE_SUCCESS,
  SALE_FAILURE
} = actionTypes;

export const productSaleSuccess = payload => ({
  type: SALE_SUCCESS,
  payload
});

export const productsSaleFailure = payload => ({
  type: SALE_FAILURE,
  payload
});

export const sellproducts = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(SALE_LOADING));
    const response = await sellProduct();
    dispatch(productSaleSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(productsSaleFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};
