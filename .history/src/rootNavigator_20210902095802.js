import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from './screens/HomeScreen';
import StoriesScreen  from './screens/StoriesScreen';
import StoryScreen  from './screens/StoryScreen';
import { NavigationContainer as NavigationContainerDrawer,createDrawerNavigator } from '@react-navigation/drawer';
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
function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }
export const DrawerNav = ()=>{
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainerDrawer>
            
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Article" component={Article} />
            </Drawer.Navigator>
            {/* <Drawer.Navigator
                screenOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
                }}
                initialRouteName="Home"
                >
                    <Drawer.Screen
                    name="Home"
                    options={{ drawerLabel: 'HOme' }}
                    component={HomeScreen} />
                    
                    <Drawer.Screen
                    name="Stories"
                    options={{ drawerLabel: 'Stories' }}
                    component={StoriesScreen} />

            </Drawer.Navigator> */}
        </NavigationContainerDrawer>
         
);
}

export default RootNavigator;