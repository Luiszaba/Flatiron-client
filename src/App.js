import React, { Component } from 'react';
import Songs from './components/Songs';
import SongService from './services/SongService';
import AddSong from './components/AddSong';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    SongService.fetchSongs().then(songs => this.setState({songs}))
  }

  addSong = song => { 
    SongService.createSong(song).then(song => this.setState({ 
      songs: this.state.songs.concat(song)[0] 
    }))
  }


  render() {
  return (
    <div className="App">
      <h1>Albums App</h1>

      <div className="navbar">
        <h2>nav bar</h2>
        {<Navbar />}
      </div>
      
      <div className="sidebar">
        <p>side bar</p>
      <Songs songs={this.state.songs}/>
      </div>
      
      <div className="main-content">
        <p>content</p>
        <AddSong addSong={this.addSong}/>
      </div>
    </div>
  );
  }
}

export default App;
