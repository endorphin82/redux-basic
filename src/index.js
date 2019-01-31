import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import PropTypes from "prop-types";
// import { Provider } from "react-redux";

import reducer from "./reducers";
import todos from "./todos";
import App from "./App";

const store = createStore(reducer, todos);

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root"));