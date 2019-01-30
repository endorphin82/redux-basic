import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";

const App = ({ store }) => {
  return (
    <main>
      <Header store={store}/>

      <List store={store}/>

      <Form store={store}/>
    </main>
  );
};

App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};

export default App;
