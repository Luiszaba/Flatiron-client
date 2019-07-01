import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    render() {
        const { comments, deleteComment } = this.props;
        const listComments = comments.map(comment => {
            return(
                <Comment 
                    key={index} 
                    comment={comment} 
                    deleteComment={deleteComment} 
                 />
                ) 
            }
        )
        return(
            <div>
                <ul>
                    {listComments}
                </ul>
            </div>
        )
    }
}

export default Comments;
