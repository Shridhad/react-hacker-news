import React from 'react';
import {shallow} from 'enzyme';
import ItemDetails from './ItemDetails';
import StoryItem from '../../models/StoryItem';

describe("<ItemDetails />", () => {
    it("should render list item", () => {
        const story = fetchStory();

        const details = shallow(<ItemDetails {...story} />);
        const listItems = details.find('ListItem');

        expect(listItems.length).toBe(1);
    });

    it("should render story item content", () => {
        const story = fetchStory(true);
        const details = shallow(<ItemDetails {...story} />);
        
        const content = details.find('.item-content');
        expect(content.length).toBe(1);
        expect(content.text()).toEqual(story.content);
    });

    it("should render comments", () => {
        const story = fetchStory(false, true);

        const details = shallow(<ItemDetails {...story} />);
        const comments = details.find('Comment');

        expect(comments.length).toBe(story.comments_count);
    });
});

const fetchStory = (withContent = false, withComments = false) => {
    const story: StoryItem = {
        "id": 19780387,
        "title": "Topics in Advanced Data Structures [pdf]",
        "points": 131,
        "user": "htiek",
        "time_ago": "2 hours ago",
        "comments_count": 2,
        "url": "http://web.stanford.edu/class/cs166/handouts/100%20Suggested%20Final%20Project%20Topics.pdf",
    };

    if (withContent) {
        story.content = "I set out to build a reverse address book.";
    }

    if (withComments) {
        story.comments = [
            {
                "id": 19790143,
                "user": "0xab",
                "time_ago": "18 minutes ago",
                "content": "<p>I do research in computer vision and this paper is so bad it",
                "comments_count": 1,
                "level": 1,
                "url": "item?id=19790249"
            },
            {
                "id": 19790143,
                "user": "0xab",
                "time_ago": "18 minutes ago",
                "content": "<p>I do research in computer vision and this paper is so bad it",
                "comments_count": 1,
                "level": 1,
                "url": "item?id=19790249"
            }
        ]
    }

    return story;
}
