'use strict';
import AddTodo from '../components/addTodo.js';
import {connect} from 'react-redux';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (text)=>dispatch(actions.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
