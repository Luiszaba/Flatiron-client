import React from 'react';
import App from './App';
import manageSongs from './reducers/manageSongs';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

//import * as serviceWorker from './serviceWorker';


const store = createStore(manageSongs, 
  applyMiddleware(thunk)
);


render(
        <Provider store={store}>
            <App />
        </Provider>,
document.getElementById('root')
);


//serviceWorker.unregister();

