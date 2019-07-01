import React, { Component } from 'react';
import Song from './Song';

class Songs extends Component{
    render() {

        const { songs, deleteSong } = this.props;
        const songList = songs.map (song => {    
        return(
            <Song 
                key={song.id}
                song={song}
                deleteSong={deleteSong}
            />
            )
        }
    )

    return (
        <li>{songList}</li>
        )
    }
}

export default Songs;