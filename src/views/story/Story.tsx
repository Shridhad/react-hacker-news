import React from 'react';
import {fetchItem} from '../../services/services';
import {RouteComponentProps} from 'react-router-dom';
import ItemDetails from '../../components/itemdetails/ItemDetails';
type TParams = { id: string };

export default class StoryView extends React.Component<RouteComponentProps<TParams>, {}> {
    state = {
        story: {}
    }
    componentDidMount() {
        const {params} = this.props.match;
        fetchItem(params.id)
            .then(story => this.setState({story}));
    }

    render() {
        return (
            <div className="story-view">
                {this.renderItemDetails(this.state.story)}
            </div>
        );
    }

    renderItemDetails(story: any) {
        return (
            <ItemDetails {...story}></ItemDetails>    
        );
    }
}
