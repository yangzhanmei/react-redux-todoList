import AddTodo from './containers/addTodo-container';
import TodoList from './containers/todoList-container';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return <div>
            <AddTodo/>
            <TodoList/>
        </div>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("content")
);
