import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            length: ''
        }
    }
    handleOnChange = e => {
        const {n}
    }

    render() {
        return(
            <div className="form">
                <form onSubmit={this.handleOnSubmit}>

                    <label htmlFor="song_title">Title:</label>
                    <input 
                    type="text"
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleOnChange}
                    /><br />
                    
                    <label htmlFor="song_artist">Artist:</label>
                    <input 
                    type="text"
                    name="artist" 
                    value={this.state.artist}
                    onChange={this.handleOnChange}
                    />

                    <label htmlFor="song_genre">Genre:</label>
                    <input 
                    type="text"
                    name="genre" 
                    value={this.state.genre}
                    onChange={this.handleOnChange}
                    /><br />

                    <label htmlFor="song_length">Song Length:</label>
                    <input 
                    type="text"
                    name="length" 
                    value={this.state.length}
                    onChange={this.handleOnChange}
                    />
                    <button>Add To Api</button>
                </form>
            </div>
        )
    }
}

export default AddSong;