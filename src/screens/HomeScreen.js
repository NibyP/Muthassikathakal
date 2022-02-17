import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import  SearchBar  from '../components/SearchBar';
import  TopStories  from '../components/TopStories';
// import  BottomBar  from '../components/BottomBar';
import { PageScrollView } from 'pagescrollview'
import RootNavigator from '../rootNavigator';
import CategorySlider from '../components/CategorySlider';
import LatestStories from '../components/LatestStories';
import RecommendedStories from '../components/RecommendedStories';
import SearchStories from '../components/SearchStories';
import StoriesScreen  from './StoriesScreen';
import StoryScreen  from './StoryScreen';
import  AppMainHeader  from '../components/AppHeader';

import { createStackNavigator } from '@react-navigation/stack';



export const HomeScreen = ({props})=> {
    


    return(
        <View style={{  flex: 1 }}>
            <PageScrollView backgroundColor='#ebf3f3' >
                
                <SearchBar />
                <TopStories />
                <CategorySlider />
                <LatestStories />
                <RecommendedStories />
                
            </PageScrollView>
        </View>
    );
}
const HomeStackScreen = ({navigation, route}) => { 
    const Stack = createStackNavigator();
    return (
            // <RootNavigator  theme={theme} initialScreen="HomeScreen"/>
                <Stack.Navigator 
                   
                   initialRouteName="HomeScreen"
                   
                   screenOptions={({ route, navigation }) => ({
                       header:  (props) => <AppMainHeader {...props}   {...route}  {...navigation}/>,
                       // headerTitleAlign: 'center',
                       // headerTitle: () => <SpreeLogo />,
                       // headerRight: (props) => <MaterialIcons style={{
                       //   marginHorizontal: 10,
                       // }}
                       // onPress={() => console.log(route, navigation)}
                       // name="clear" size={28} color="black" />
                     })}
               >
                   <Stack.Screen
                       name="Homes"
                       component={HomeScreen}
                       options={{ headerTitle: 'Muthassikathakal' }}

                   />
                   <Stack.Screen
                       name="StoriesStack"
                       component={StoriesScreen}
                   />
                   <Stack.Screen
                       name="Story"
                       component={StoryScreen}
                   />
                   
                   
               </Stack.Navigator>
    );
}
export default HomeStackScreen;
