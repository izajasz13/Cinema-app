import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import {store} from './store'
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />    
    </Provider>,
    document.querySelector('#root')
);