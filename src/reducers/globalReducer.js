import React from 'react';
import { CHANGE_LANGUAGE, UPDATE_STORYLIST, UPDATE_STORYDETAILS, TOGGLE_SIDEMENU, UPDATE_SIDEMENUSTATE, ON_SIDEMENUITEM_SELECTED } from '../actions/types';

const initState = {
    language: 'english',
    stories: [],
    story: [],
    sidemenu:{
        isOpen: false,
        selectedItem: 'Home',
    },
      
};

const globalReducer = (state = initState, action) => {
    //code for diff actions

    switch(action.type){

        case CHANGE_LANGUAGE : return {...state, language:action.language};
        case UPDATE_STORYLIST : return {...state, stories:action.stories};
        case UPDATE_STORYDETAILS : return {...state, story:action.story};
        case TOGGLE_SIDEMENU : console.log('toggle clicked');return {...state, sidemenu:{isOpen: !state.sidemenu.isOpen,selectedItem: 'Home'}};
        case UPDATE_SIDEMENUSTATE : return {...state, sidemenu:action.sidemenu};
        case ON_SIDEMENUITEM_SELECTED : return {...state, sidemenu:action.sidemenu};
        default: return state;

    }
}

export default globalReducer;