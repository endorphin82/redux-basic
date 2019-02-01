import { connect } from "react-redux";

import List from "../components/List";
import { deleteTodo, toggleTodo, editTodo } from "../actions";
import {getFilteredTodos} from "../reducers";

const mapStateToProps = state => ({
  todos: getFilteredTodos(state)
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteTodo(id)),
  onToggle: id => dispatch(toggleTodo(id)),
  onEdit: (id, title) => dispatch(editTodo(id, title))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;