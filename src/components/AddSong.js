import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            legnth: ''
        }
    }

    handleOnChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit =e => {
        e.preventDefault();
        const song = this.state;
        this.props.addSong(song)
        this.setState({
            title: '',
            artist: '',
            genre: '',
            length: ''
        })
    }

    render() {
        console.log(this.state)
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

                    <label htmlFor="song_length">Song Legnth:</label>
                    <input 
                    type="text"
                    name="legnth" 
                    value={this.state.legnth}
                    onChange={this.handleOnChange}
                    /><br />
                    <button>Add To Api</button>
                </form>
            </div>
        )
    }
}

export default AddSong;