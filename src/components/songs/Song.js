import React, { Component } from 'react';
import SongsContainer from '../../containers/SongsContainer';

class Song extends Component {

  handleOnClick() {
    this.props.deleteSong(this.props.song.id)
  }

  render() {
    const { song } = this.props;

    return (

      <div>
        <li>
          {song.text}
          <button onClick={() => this.handleOnClick()}> Delete </button>
          <SongsContainer song={song}/>
        </li>
      </div>
      
    );
  }
};

export default Song;