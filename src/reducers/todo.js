import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGGLE_TODO,
  GET_TODOS
} from "../actions";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGGLE_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;

    case EDIT_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;
  }
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case TOGGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));
    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));
    default:
      return state;
  }
};

export const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case "ALL":
      return state;
    case "COMPLETED":
      return state.filter(todo => todo.completed);
    case "UNCOMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
