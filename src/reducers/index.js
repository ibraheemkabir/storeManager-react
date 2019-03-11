import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import salesReducer from './salesReducer';
import checkOutReducer from './checkoutReducer';
import { addcategoriesreducer, addproductsreducer, fetchcategoriesreducer } from './detailsReducer';

const rootReducer = combineReducers({
  authReducer,
  salesReducer,
  productsReducer,
  checkOutReducer,
  addcategoriesreducer,
  addproductsreducer,
  fetchcategoriesreducer
});

export default rootReducer;
