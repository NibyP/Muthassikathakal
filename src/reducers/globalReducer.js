import React from 'react';
import { CHANGE_LANGUAGE, UPDATE_STORYLIST, UPDATE_STORYDETAILS } from '../actions/types';

const initState = {
    language: 'english',
    stories: [],
    story: []
};

const globalReducer = (state = initState, action) => {
    //code for diff actions

    switch(action.type){

        case CHANGE_LANGUAGE : return {...state, language:action.language};
        case UPDATE_STORYLIST : return {...state, stories:action.stories};
        case UPDATE_STORYDETAILS : return {...state, story:action.story};
        default: return state;

    }
}

export default globalReducer;