// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './screens/HomeScreen';
import StoriesScreen  from './screens/StoriesScreen';
import StoryScreen  from './screens/StoryScreen';
import  AppMainHeader  from './components/AppHeader';


  
const RootNavigator = ({theme}) => {
    
    const Stack = createStackNavigator();
    return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName="Home"
                    screenOptions={{ 
                        header:  (props) => <AppMainHeader {...props}  />,
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerTitle: 'Muthassikathakal' }}

                    />{/*options={{title:'Welcome to the world of Stories!!'}}*/}
                    <Stack.Screen
                        name="Stories"
                        component={StoriesScreen}
                    />
                    <Stack.Screen
                        name="Story"
                        component={StoryScreen}
                    />
                </Stack.Navigator>
                
            </NavigationContainer>
             
    );
}

export default RootNavigator;