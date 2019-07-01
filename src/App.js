import React, { Component } from 'react';
import CommentInput from './components/comments/CommentInput';
import Songs from './components/songs/Songs';
import SongInput from './components/songs/SongInput'
import SongService from './services/SongService';
import Comments from './components/comments/Comments'
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      comment: []
    }
  }

  componentDidMount() {
    SongService.fetchSongs()
    .then(songs => 
      this.setState({songs}))
  }

  addSong = song => { 
    SongService.createSong(song)
    .then(song => 
      this.setState({ 
        songs: this.state.songs.concat(song)[0] 
    }))
  }

  render() {
    return(
      <div className="app">
      <h1>Albums App</h1>

      <div className="navbar">
        <h2>Navigation</h2>
        <Nav />
      </div>
      
      <div className="sidebar">
        <h2>List of Songs</h2>
        <Songs songs={this.state.songs} />
      </div>

      <div className="createComment">
        <h2>Comments</h2>
        <CommentInput addComment={this.state.addComment} />
      </div>
      
      <div className="main-content">
        <h2>Add Song</h2>
        <SongInput addSong={this.state.addSong} />
      </div>

      <div className="comments">
        <h2>Everyone's Suggestions</h2>
        <Comments comments={this.state.comments} />
      </div>
    </div>
    )
  }
} 

  const mapStateToProps = state => {
    return { songs: state.songs,
             comments: state.comment }
  }
const Nav = (props) => {
  return(
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/comment_input" component={CommentInput} />
        <Route exact path="/song_input" component={SongInput} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/comments" component={Comments} />
      </div>
    </Router>
  )
}

export default connect(mapStateToProps)(App);
