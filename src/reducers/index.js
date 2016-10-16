import actionTypes from '../actions/types';

const initStore = {
    todos: ['eat', 'sleep']
};

function _addTodo(state, action) {
    state.todos.push(action.todo);
    console.log(state);
    return state;
}

export default function (state = initStore, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return _addTodo(state, action);
        default:
            return state;
    }
};
