export default interface StoryComment {
    id: number,
    level: number,
    url: string,
    user: string,
    time_ago: string,
    points?: number,
    content: string,
    comments_count: number,
    comments?: Array<StoryComment>
};
