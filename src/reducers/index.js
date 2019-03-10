import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import salesReducer from './salesReducer';
import checkOutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  authReducer,
  salesReducer,
  productsReducer,
  checkOutReducer
});

export default rootReducer;
