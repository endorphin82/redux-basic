import React, { Component } from "react";

import Form from "../components/Form";
import { addTodo } from "../actions";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
    this.store.dispatch(addTodo(title));
  }

  render() {
    return (
      <Form onAdd={this.handleAdd}/>
    );
  }
}

export default FormContainer;