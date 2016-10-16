import types from './types';

export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        todo: todo
    }
}
