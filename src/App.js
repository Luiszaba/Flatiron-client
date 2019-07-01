import React, { Component } from 'react';
import Songs from '../components/songs/Songs';
import SongInput from '../components/songs/SongInput';
import Comments from '../components/comments/Comments'
import SongService from '../services/SongService';
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
} 

  const mapStateToProps = state => {
    return { songs: state.songs.playlists }
  }


export default connect(mapStateToProps)(App);
