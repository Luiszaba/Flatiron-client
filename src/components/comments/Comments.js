import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    render() {
        const { comments, songId, deleteComment } = this.props;
        const visitorComments = comments.filter(comment => comment.songId === songId );

        const listComments = visitorComments.map((comment, index) => {
            return <Comment key={index} comment={comment} deleteComment={deleteComment} />
        })
        return(
            <div>
                <ul>
                    {listComments}
                </ul>
            </div>
        )
    }
}

export default Comments