import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
import logger from "redux-logger";

import './index.css';
import App from './App';
// import { createApp } from "./App";
// const App = createApp();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
window.reduxStore = store;


// const App = createApp();
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

