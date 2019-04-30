import React from 'react';
import {fetchItems} from '../../services/services';
import ListItem from '../../components/listItem/ListItem';
import StoryItem from '../../models/StoryItem';

export default class HomeView extends React.Component {

    state = {
        stories: []
    }

    componentDidMount() {
        fetchItems("news")
            .then(stories => this.setState({stories}));
    }

    render() {
        return (
            <div className="home-view">
                {this.renderStories(this.state.stories)}
            </div>
        );
    }

    renderStories(stories: Array<StoryItem>) {
        return stories.map((story, index) => 
            <ListItem {...story} key={story.id}></ListItem>
        );
    }
}
