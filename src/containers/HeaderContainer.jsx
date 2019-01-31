import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = state => ({
  todos: state
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;