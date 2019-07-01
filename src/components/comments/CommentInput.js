import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentInput extends Component {
    constructor(props) { 
    super(props)
    this.state = {
        comment: ''
        };
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment(this.state.name)
        this.setState({
            comment: ''
        });
    }


    render() {
        return(
            <div className="form">
                <form onSubmit={event => this.handleOnSubmit(event)} >

                    <p>
                    <label>Add Comment</label>
                    <input 
                    type="text"
                    name="comment"
                    value={this.state.text}
                    onChange={event => this.handleOnChange(event)}
                    />
                    </p>
                    <button>Add Comment</button>

                </form>
            </div>
        );
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addComment: formData => dispatch({type: 'ADD_COMMENT', payload: formData})
    };
};

export default connect(null, mapDispatchToProps)(CommentInput)