import React from "react";
import ReactDOM from "react-dom";
import * as UtilAPI from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {login} from './actions/session_actions'; 


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  //Testing
  window.UtilAPI = UtilAPI;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;

});