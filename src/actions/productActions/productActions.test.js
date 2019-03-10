/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './productActions';
import actionTypes from './actiontypes';
import * as axios from '../../helpers/axiosCalls/products';
import { payload, fetchArticlesresponse, mockResponse } from '../../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('user authentication actions Signup', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.FETCH_PRODUCTS_SUCCESS} is fired`, () => {
    expect(actions.fetchproductsSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${
    actionTypes.FETCH_SALES_SUCCESS
  } is fired`, () => {
    expect(actions.fetchSalesSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_SALES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_PRODUCTS_FAILURE} is fired`, () => {
    expect(actions.fetchproductsFailure(payload)).toEqual({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload
    });
  });
});

it(`should return an action object once ${actionTypes.FETCH_SALES_FAILURE} is fired`, () => {
  expect(actions.fetchproductsFailure(payload)).toEqual({
    type: actionTypes.FETCH_SALES_FAILURE,
    payload
  });
});

describe('user authentication actions login', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should call the fetchproducts success dispatch function', async () => {
    axios.getAllProducts = jest.fn().mockResolvedValue(fetchArticlesresponse);
    await actions.fetchproducts()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  });


  it('should call the fetchsales success dispatch function', async () => {
    axios.getAllSales = jest.fn().mockResolvedValue(fetchArticlesresponse);
    await actions.fetchSalesSuccess(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should throw error', async () => {
    axios.getAllProducts = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchproducts(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(1);
    store.clearActions();
  });

  it('should throw error', async () => {
    axios.getAllSales = jest.fn(() => {
      throw { response: mockResponse };
    });
    try {
      await actions.fetchSales()(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.FETCH_SALES_FAILURE,
        payload: mockResponse
      });
    }
    store.clearActions();
  });
});
