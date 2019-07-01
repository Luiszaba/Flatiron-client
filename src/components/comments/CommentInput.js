import React, { Component } from 'react';
import App from './App';
import Song from './components/songs/Song';

class CommentInput extends Component {
    state = {
        text: ''
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment({
            text: this.state.text,
            songId: this.props.songId
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit} >
                
                    <label>Add Comment</label>
                    <input 
                    type="text"
                    name="comment"
                    value={this.state.text}
                    onChange={this.handleOnChange}
                    />

                </form>
            </div>
        );
    }
};

export default CommentInput;