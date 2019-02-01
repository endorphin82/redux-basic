export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGGLE_TODO = "TOGGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

let nextId = 5;

export function getTodos() {
  return fetch("api/todos")
    .then(response => response.json())
    .then(todos => ({
      type: GET_TODOS,
      todos
    }));
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    id: nextId++,
    title
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGGLE_TODO,
    id
  };
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    id,
    title
  };
}