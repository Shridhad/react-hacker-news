import React from 'react';
import Comment from '../comment/Comment';
import ListItem from '../listItem/ListItem';
import StoryItem from '../../models/StoryItem';
import StoryComment from '../../models/StoryComment';

import './ItemDetails.css';

export default class ItemDetails extends React.Component<StoryItem, {}> {
    render() {
        return (
            <div className="item-details">
                <ListItem {...this.props}></ListItem>
                <div className="item-content">{this.props.content}</div>

                <div className="item-comments">
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        )
    }

    renderComments(comments: Array<StoryComment> = []) {
        return comments.map(comment => <Comment {...comment} key={comment.id}/>);
    }
}