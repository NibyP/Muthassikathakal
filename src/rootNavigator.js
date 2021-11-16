import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen  from './screens/HomeScreen';
import StoriesScreen  from './screens/StoriesScreen';
import StoryScreen  from './screens/StoryScreen';
import  AppMainHeader  from './components/AppHeader';
import  Menu  from './components/SideMenu';
import {navigationRef} from './rootNavigationRef';
import {HomeScreen}  from './screens/HomeScreen';



const RootNavigator = ({theme, initialScreen}) => {
    //console.log('root');console.log(navigation);
    const Stack = createStackNavigator();
    return (
            // <NavigationContainer theme={theme}  ref={navigationRef}>
                <Stack.Navigator 
                   
                    initialRouteName={initialScreen}
                    // screenOptions={{ 
                    //     header:  (props) => <AppMainHeader {...props}  />,
                    // }}
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
                    {/*options={{title:'Welcome to the world of Stories!!'}}*/}
                    <Stack.Screen
                        name="Stories"
                        component={StoriesScreen}
                    />
                    <Stack.Screen
                        name="Story"
                        component={StoryScreen}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{ headerTitle: 'Muthassikathakal' }}

                    />
                    
                </Stack.Navigator>
                
            // </NavigationContainer>
             
    );
}

export default RootNavigator;