import React from 'react';

const Songs = ({ songs }) => {
    const renderSongs = songs.map(song => 
        <span key={song.id}>{song.title}</span>
        
    )
    return (
        <div>{renderSongs}</div>
    )
}

export default Songs;