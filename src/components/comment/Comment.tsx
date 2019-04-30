import React from 'react';
import StoryComment from  '../../models/StoryComment';

import './Comment.css';

export default class Comment extends React.Component<StoryComment, {}> {
    render() {
        return (
            <div className="comment-details">
                <div className="comment-meta">
                    <span>by</span>
                    <a href={`https://news.ycombinator.com/user?id=${this.props.user}`} target="_blank" rel="noopener noreferrer">{this.props.user}</a>
                    <span className="time-ago">{this.props.time_ago}</span>
                </div>
                <p className="content" dangerouslySetInnerHTML={this.createMarkup()}></p>
                <div className="comments">
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        )
    }

    createMarkup() {
        return {__html: this.props.content}
    }

    renderComments(comments: Array<StoryComment> = []) {
        return comments.map(comment => <Comment {...comment} key={comment.id}/>);
    }
}