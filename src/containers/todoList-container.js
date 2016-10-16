'use strict';
import TodoList from '../components/todoList.js';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TodoList);
