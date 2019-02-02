import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";
import { requestTodos ,getTodos } from "./actions/todo";

store.dispatch(requestTodos());
store.dispatch(getTodos());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"));