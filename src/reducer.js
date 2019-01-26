let state = 0;

const updateState = (state, action) => {
  if (action === 'INCREMENT') {
    return state + 1;
  } else if (action === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);
