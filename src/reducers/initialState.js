const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  allProducts: {
    productsIsLoading: false,
    success: false,
    response: '',
  },
  allSales: {
    SalesIsLoading: false,
    success: false,
    response: '',
  },
  allCategories: {
    CategoriesLoading: false,
    success: false,
    response: '',
  },
  checkoutProducts: {
    ProductsIsLoading: false,
    success: false,
    response: '',
  },
  addProduct: {
    AddingProductLoading: false,
    success: false,
    response: '',
  },
  addCategory: {
    AddingCategoriesLoading: false,
    success: false,
    response: '',
  },
};

export default initialState;
