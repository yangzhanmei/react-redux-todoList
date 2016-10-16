import React from 'react';

class AddTodo extends React.Component {
    render() {
        const {todos, onAddTodo} = this.props;
        return <div>
            <input type="text" ref="input"/>
            <button onClick={()=>onAddTodo(this.refs.input.value)}>+</button>
        </div>
    }
}

export default AddTodo;
