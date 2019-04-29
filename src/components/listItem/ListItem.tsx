import React from 'react';
import StoryItem from '../../models/StoryItem';

import './ListItem.css';

export default class ListItem extends React.Component<StoryItem, {}> {
    render() {
        return (
            <div className="list-item">
                <div className="item-title">
                    <a href={this.props.url} target="_blank">{this.props.title}</a>
                </div>
                <div className="item-details">
                    <span className="item-meta points">{this.props.points} Points</span>
                    <span className="item-meta user">by <a target="_blank" href={`https://news.ycombinator.com/user?id=${this.props.user}`}>{this.props.user}</a>
                    </span>
                    <span className="item-meta time-ago">
                        <a href={`/item/${this.props.id}`}>{this.props.time_ago}</a>
                    </span>
                    <span className="item-meta comments-count">
                        <a href={`/item/${this.props.id}`}>{this.props.comments_count} Comments</a>
                    </span>
                </div>
            </div>
        )
    }
}