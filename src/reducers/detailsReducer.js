import actionTypes from '../actions/DetailActions/actionTypes';
import initialState from './initialState';

const { allCategories, addProduct, addCategory } = initialState;

export const fetchcategoriesreducer = (state = allCategories, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        CategoriesLoading: true
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        CategoriesLoading: false,
        success: true,
        response: action.payload.data,
      };
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        CategoriesLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};

export const addcategoriesreducer = (state = addCategory, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORIES_LOADING:
      return {
        ...state,
        AddingCategoriesLoading: true
      };
    case actionTypes.ADD_CATEGORIES_SUCCESS:
      return {
        AddingCategoriesLoading: false,
        success: true,
        response: action.payload.data,
      };
    case actionTypes.ADD_CATEGORIES_FAILURE:
      return {
        AddingCategoriesLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};

export const addproductsreducer = (state = addProduct, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_LOADING:
      return {
        ...state,
        AddingProductLoading: true
      };
    case actionTypes.ADD_PRODUCTS_SUCCESS:
      return {
        AddingProductLoading: false,
        success: true,
        response: action.payload.data,
      };
    case actionTypes.ADD_PRODUCTS_FAILURE:
      return {
        AddingProductLoading: false,
        success: false,
        response: action.payload.data.message,
      };
    default:
      return state;
  }
};
