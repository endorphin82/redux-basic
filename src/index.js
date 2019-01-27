import React from "react";
import ReactDOM from "react-dom";

// import { createStore } from "./redux";
import { createStore } from "redux";

const initialState = { count: 0 };

const reducer = (state = {count:0}, { type, amount }) => {
  switch (type) {
    case "INCREMENT":
      return { count: state.count + amount };
    case "DECREMENT":
      return { count: state.count - amount };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const incrementAction = { type: "INCREMENT", amount: 1 };
const decrementAction = { type: "DECREMENT", amount: 1 };
const resetAction = { type: "RESET" };

const store = createStore(reducer, initialState);

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    // atata forceUpdate
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    store.dispatch(incrementAction);
  }

  decrement() {
    store.dispatch(decrementAction);
  }

  reset() {
    store.dispatch(resetAction);
  }

  render() {
    const count = store.getState().count;
    return (
      <div className="counter">
        <span className="count">{count}</span>

        <div className="buttons">
          <button className="decrement" onClick={this.decrement}>-</button>
          <button className="reset" onClick={this.reset}>R</button>
          <button className="increment" onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById("root"));