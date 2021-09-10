import React from 'react';
import { View, Text } from 'react-native';
import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { connect } from 'react-redux';
import { changeLanguage } from './src/actions/language';
import { updateStoryList,updateStoryDetails } from './src/actions/story';
import RootNavigator from './src/rootNavigator';
import theme from './src/theme';
import SideMenu from 'react-native-side-menu';
import MenuScreen from './src/components/SideMenu';
import { NavigationContainer } from '@react-navigation/native';


const App = (props) => {
  //console.log(navigation);
  const menu = <MenuScreen navigator={navigator} />;
  return (
    <SideMenu menu={menu} menuPosition="left">
      <PaperProvider theme={theme}>
          <RootNavigator  theme={theme}/>
      </PaperProvider>
    </SideMenu>
  );
}

const mapStateToProps = (state) =>{
    //console.log(state);
    return{
        language: state.globalReducer.language,
        stories: state.globalReducer.stories,
        story: state.globalReducer.story,
        sidemenu: state.globalReducer.sidemenu,
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