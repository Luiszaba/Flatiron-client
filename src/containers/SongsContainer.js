import React, { Component } from 'react';
import SongInput from './components/songs/SongInput';
import Song from './components/songs/Songs';
import { connect } from 'react-redux';

class SongsContainer extends Component {
    render() {
        
        return(
            <div>
                <SongInput 
                    addSong={this.props.addSong}
                />
                <Song 
                    songs={this.props.songs} 
                    deleteSong={this.props.deleteSong}
                />
            </div>
        )
    }


    renderSongs = () => this.props.songs.map((song, id) => 
        <Song 
            key={id} 
            text={song} 
        />)

    render() {
        return(
            <div>
                {this.renderSongs}
            </div>
        );
    }
}

const mapStateToProps = state => ({songs: state.props })
const mapDispatchToProps = dispatch => ({
    addSong: name => dispatch({type: "ADD_SONG", name }),
    deleteSong: id => dispatch({type: "DELETE_SONG", id})
});


export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer)

