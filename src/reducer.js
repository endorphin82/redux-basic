const updateState = (state, { type, amount }) => {
  if (type === "INCREMENT") {
    return state + amount;
  } else if (type === "DECREMENT") {
    return state - amount;
  } else {
    return state;
  }
};

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
  }

  get state() {
    return this._state;
  }

  update(acton) {
    this._state = this._updateState(this._state, acton);
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);
