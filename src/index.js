import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import * as serviceWorker from './serviceWorker';

let store = createStore(manageSongs)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


serviceWorker.unregister();
