import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

class SongInput extends Component {
    constructor(props){
    super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            legnth: ''
        };
    }
    

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = event  => {
        event.preventDefault();
        this.props.addSong(this.state.name)
        this.setState({
            title: '',
            artist: '',
            genre: '',
            legnth: ''
        })
    };

    render() {
        return(
            <div className="form">
                <form onSubmit={event => this.handleOnSubmit(event)} >
                    
                    <p>
                    <label htmlFor="song_title">Title:</label>
                    <input 
                    type="text"
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <p>
                    <label htmlFor="song_artist">Artist:</label>
                    <input 
                    type="text"
                    name="artist" 
                    value={this.state.artist}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <p>
                    <label htmlFor="song_genre">Genre:</label>
                    <input 
                    type="text"
                    name="genre" 
                    value={this.state.genre}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <p>
                    <label htmlFor="song_length">Song Legnth:</label>
                    <input 
                    type="text"
                    name="legnth" 
                    value={this.state.legnth}
                    onChange={this.handleOnChange}
                    />
                    </p>

                    <button>Add Song</button>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addSong: formData => dispatch({type: 'ADD_SONG', payload: formData})
    };
};

export default connect(null, mapDispatchToProps)(SongInput);


