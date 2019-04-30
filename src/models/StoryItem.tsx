import StoryComment from './StoryComment';

export default interface StoryItem {
    id: number,
    title: string,
    url: string,
    user: string,
    time_ago: string,
    points: number,
    content?: string,
    comments_count: number,
    comments?: Array<StoryComment>
};
