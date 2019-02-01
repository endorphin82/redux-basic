import { combineReducers } from "redux";

import todos, * as fromTodos from "./todo";
import { default as filter } from "./filter";

const reducer = combineReducers({
  todos,
  filter
});

export default reducer;

export function getFilteredTodos(state) {
  return fromTodos.getFilteredTodos(state.todos, state.filter);
}