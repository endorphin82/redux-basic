import { combineReducers } from "redux";

import { default as todos } from "./todo";
import { default as filter } from "./filter";

const reducer = combineReducers({
  todos,
  filter
});

export default reducer;