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
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  update(acton) {
    this._state = this._updateState(this._state, acton);
    this._callbacks.forEach(callback => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

const unsubscribe = store.subscribe(() => console.log("State changed1", store.state));
store.subscribe(() => console.log("State changed2", store.state));

store.update(incrementAction);
unsubscribe();
store.update(decrementAction);

store.update({});