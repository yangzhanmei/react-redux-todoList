import AddContainer from './containers/addTodo-container';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AddContainer />
    </Provider>,
    document.getElementById("content")
);
