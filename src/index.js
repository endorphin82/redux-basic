import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";
import { getTodos } from "./actions/todo";

fetch("api/todos")
  .then(response => response.json())
  .then(todos => store.dispatch(getTodos(todos)));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"));