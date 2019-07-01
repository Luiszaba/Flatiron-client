import React, { Component } from 'react';
import Songs from './components/songs/Songs';
import SongInput from './components/songs/SongInput';
import Comments from './components/comments/Comments'
import SongService from './services/SongService';
import { connect } from 'react-redux'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    SongService.fetchSongs().then(songs => this.setState({songs}))
  }

  /*

  addSong = song => { 
    SongService.createSong(song).then(song => this.setState({ 
      songs: this.state.songs.concat(song)[0] 
    }))
  }
*/

  render() {
  return (
    <div className="App">
      <h1>Albums App</h1>

      <div className="navbar">
        <h2>Nav bar</h2>
          {<p>Navbar </p>}
      </div>
      
      <div className="sidebar">
        <p>Side bar</p>
          <Songs />
      </div>
      
      <div className="main-content">
        <p>Content</p>
        <SongInput />
        <Comments />
      </div>

    </div>
  );
  }
}

/*
ReactDOM.render((
  <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="playlists" component={Playlists} />
      <Route exact path="/addSong" component={AddSong} />
  </Router>
))
*/

const mapStateToProps = state => {
  return { songs: state.songs.playlists }
}

export default connect(mapStateToProps)(App);
