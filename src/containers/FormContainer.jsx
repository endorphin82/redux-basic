import { connect } from "react-redux";

import Form from "../components/Form";
import { addTodo } from "../actions";

const mapDispatchToProps = dispatch => ({
  onAdd: title => dispatch(addTodo(title))
});

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;