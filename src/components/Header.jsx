import React, { Component } from "react";
import PropTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

class Header extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = this.props.store.getState();
    return (
      <header>
        <Stats todos={todos}/>
        <h1>Redux Todo</h1>
        <Stopwatch/>
      </header>
    );
  }
}

Header.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Header;