import React from "react";
import ReactDOM from "react-dom";
import * as UtilAPI from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  //Testing
  window.UtilAPI = UtilAPI;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});