import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(() => {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
