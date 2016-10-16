import React from 'react';

class TodoList extends React.Component {
    render() {
        const {todos} = this.props;

        const todoList = todos.map((todo, index)=> {
            return <div key={index}>
                <ul>
                    <li>{todo}</li>
                </ul>
            </div>
        });

        return <div>
            {todoList}
        </div>
    }
}

export default TodoList;