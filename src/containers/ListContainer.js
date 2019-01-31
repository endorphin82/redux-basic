import { connect } from "react-redux";

import List from "../components/List";
import { deleteTodo, toggleTodo, editTodo } from "../actions";

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos;
    case "COMPLETED":
      return todos.filter(todo => todo.completed);
    case "UNCOMPLETED":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteTodo(id)),
  onToggle: id => dispatch(toggleTodo(id)),
  onEdit: (id, title) => dispatch(editTodo(id, title))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;