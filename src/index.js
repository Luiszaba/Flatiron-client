import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import manageSongs from './reducers/manageSongs';


import * as serviceWorker from './serviceWorker';


/*
const link = {

}

const home = () => {
    return (
        <div>
            <h1>Final Project</h1>
        </div>
    )
}
*/


const store = createStore(manageSongs, 
    applyMiddleware(thunk)
    );

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


serviceWorker.unregister();

