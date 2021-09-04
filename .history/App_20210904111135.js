import React from 'react';
import { View, Text } from 'react-native';
import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { connect } from 'react-redux';
import { changeLanguage } from './src/actions/language';
import { updateStoryList,updateStoryDetails } from './src/actions/story';
import  RootNavigator from './src/rootNavigator';
import theme from './src/theme';

const App = (props) => {
   
  return (
      <PaperProvider theme={theme}>
        <RootNavigator  theme={theme}/>
      </PaperProvider>
  );
}

const mapStateToProps = (state) =>{
    //console.log(state);
    return{
        language: state.globalReducer.language,
        stories: state.globalReducer.stories,
        story: state.globalReducer.story,
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        updateLang: (language) => dispatch(changeLanguage(language)),
        getStories: (stories) => dispatch(updateStoryList(stories)),
        getStory: (story) => dispatch(updateStoryDetails(story)),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;