import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import manageSongs from './reducers/manageSongs';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import SongInput from './components/songs/SongInput';


const Home = () => {
    return (
        <div>
            <h1>Final Project</h1>
        </div>
    )
}
const SongInput = () => {
    return(
    <div className="sidebar">
        <p>User Input</p>
          <SongInput />
      </div>
    )
}
const Songs = () => {
    return(
    <div className="main-content">
        <p>Songs</p>
          <Songs />
    </div>
    )
}
const Comments = () => {
    return(
    <div>
        <p>What others are saying</p>
          <Comments />
    </div>
    )
}
const CommentInput = () => {
    return(
        <div>
        <p>Speak your mind</p>
        <CommentInput />
        </div>
    )
}



const store = createStore(manageSongs, 
    applyMiddleware(thunk)
);

    ReactDOM.render((
        <Router>
            <React.Fragment>
            <Route exact path="/" component={ Home } />
            <Route exact path="/components/songs" component={Songs} />
            <Route exact path="/components/songinput" component={SongInput} />
            <Route exact path="/components/comments" component={Comments} />
            <Route exact path="/components/comments" component={CommentInput} />
            </React.Fragment>
        </Router>
      ))


render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


serviceWorker.unregister();

