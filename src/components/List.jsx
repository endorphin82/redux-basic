import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const List = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <section className="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />)
      }
    </section>
  );
};


List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default List;