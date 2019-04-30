import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

describe("<ListItem />", () => {
    it("should render story title", () => {
        const story = fetchStory();

        const item = shallow(<ListItem {...story} />);
        const title = item.find('.item-title');

        expect(title.text()).toEqual(story.title);
    })
    
    it("should render story author name", () => {
        const story = fetchStory();

        const item = shallow(<ListItem {...story} />);
        const user = item.find('.item-meta.user a');

        expect(user.text()).toEqual(story.user);
    })

    it("should render story comment count", () => {
        const story = fetchStory();

        const item = shallow(<ListItem {...story} />);
        const count = item.find('.item-meta.comments-count');

        expect(count.text()).toEqual(`${story.comments_count} Comments`);
    })
});

const fetchStory = () => {
    return {
        "id": 19780387,
        "title": "Topics in Advanced Data Structures [pdf]",
        "points": 131,
        "user": "htiek",
        "time": 1556558376,
        "time_ago": "2 hours ago",
        "comments_count": 16,
        "type": "link",
        "url": "http://web.stanford.edu/class/cs166/handouts/100%20Suggested%20Final%20Project%20Topics.pdf",
        "domain": "web.stanford.edu"
    };
}
