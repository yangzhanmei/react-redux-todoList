import actionTypes from '../actions/types';

const initStore = {
    todos: ['eat', 'sleep']
};

function _addTodo(state, action) {
    return {todos: [...state.todos, action.todo]};
}

export default function (state = initStore, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return _addTodo(state, action);
        default:
            return state;
    }
};
