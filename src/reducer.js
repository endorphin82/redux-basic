let state = 0;

const updateState = (state, { type, amount }) => {
  if (type === "INCREMENT") {
    return state + amount;
  } else if (type === "DECREMENT") {
    return state - amount;
  } else {
    return state;
  }
};

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);
