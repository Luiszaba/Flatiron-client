import React, { Component } from 'react';


class Comment extends Component {

    handleOnClick = () => {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        const {comment} = this.props
        return(
            <div>
                <li>
                    {comment.props.text}
                </li>
                <button onClick={() => this.props.deleteComment(comment.id)}> 
                Remove Comment 
                </button>
            </div>
        );
    }
};

export default Comment