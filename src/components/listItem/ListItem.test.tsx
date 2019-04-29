import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './listItem';

describe("<HomeView />", () => {
    it("renders HomeView with stories", () => {
        const story = {
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

        const div = document.createElement('div');
        ReactDOM.render(<ListItem {...story} />, div);
        
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});
