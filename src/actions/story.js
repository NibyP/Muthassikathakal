import { UPDATE_STORYLIST,UPDATE_STORYDETAILS } from './types';

export const updateStoryList = (stories) =>(
    {
        type: UPDATE_STORYLIST,
        data: stories
    }
);
export const updateStoryDetails = (story) =>(
    {
        type: UPDATE_STORYDETAILS,
        data: story
    }
)