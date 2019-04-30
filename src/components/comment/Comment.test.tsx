import React from 'react';
import {shallow} from 'enzyme';
import Comment from './Comment';
import StoryComment from '../../models/StoryComment';

describe("<Comment />", () => {
    it("should render comment content", () => {
        const comment = fetchComment();

        const details = shallow(<Comment {...comment} />);
        const content = details.find('.content');

        expect(content.length).toBe(1);
        expect(content.html()).toContain(comment.content);
    });

    it("should render comment author name", () => {
        const comment = fetchComment();

        const details = shallow(<Comment {...comment} />);
        const author = details.find('.comment-meta a');

        expect(author.length).toBe(1);
        expect(author.text()).toEqual(comment.user);
    });
    
    it("should render time", () => {
        const comment = fetchComment();

        const details = shallow(<Comment {...comment} />);
        const time = details.find('.time-ago');

        expect(time.length).toBe(1);
        expect(time.text()).toEqual(comment.time_ago);
    });

    it("should render sub comments", () => {
        const comment = fetchComment(true);

        const details = shallow(<Comment {...comment} />);
        const comments = details.find('Comment');

        expect(comments.length).toBe(comment.comments_count);
    });
});

const fetchComment = (withComments = false) => {
    const story: StoryComment = {
        "id": 19790143,
        "user": "0xab",
        "time_ago": "18 minutes ago",
        "content": "I do research in computer vision and this paper is so bad it",
        "comments_count": 2,
        "level": 1,
        "url": "item?id=19790249"
    };

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
