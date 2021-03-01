import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/";
import userStore from "./store/userStoreFile.js"
ReactDOM.render(
  <Provider store={store}>
    {/* <Provider store={userStore}> */}
      <App />
    {/* </Provider> */}
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
