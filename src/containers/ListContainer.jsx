import React from "react";
import { connect } from "react-redux";

import List from "../components/List";
import { deleteTodo, toggleTodo, editTodo } from "../actions";

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  onDelete:id => dispatch(deleteTodo(id)),
  onToggle: id => dispatch(toggleTodo(id)),
  onEdit:(id, title) => dispatch(editTodo(id, title))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;