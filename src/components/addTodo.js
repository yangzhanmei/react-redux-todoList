import React from 'react';

class AddTodo extends React.Component {
    render() {
        const {onAddTodo} = this.props;
        return <div>
            <input type="text" ref="input" placeholder="what do you want to do ?"/>
            <button onClick={()=>onAddTodo(this.refs.input.value)}>+</button>
        </div>
    }
}

export default AddTodo;
