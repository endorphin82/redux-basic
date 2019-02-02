import { createStore } from "redux";

import reducer from "../reducers";

const addPromiseThunkSupport = store => {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action.then === "function") {
      return action.then(dispatch);
    } else if (typeof action === "function") {
      return action(dispatch);
    }

    return dispatch(action);
  };
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch = addPromiseThunkSupport(store);

export default store;