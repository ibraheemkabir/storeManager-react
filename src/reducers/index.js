import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import salesReducer from './salesReducer';

const rootReducer = combineReducers({
  authReducer,
  salesReducer,
  productsReducer
});

export default rootReducer;
