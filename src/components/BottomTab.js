import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen  from '../screens/HomeScreen';
import StoriesStackScreen  from '../screens/StoriesScreen';
import FavouritesScreen  from '../screens/FavouritesScreen';
import CategoriesScreen  from '../screens/CategoriesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused? 'ios-home-sharp': 'ios-home-outline';
                } else if (route.name === 'Favourites') {
                    iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
                }
                else if (route.name === 'Categories') {
                    iconName = focused ? 'ios-apps-sharp' : 'ios-apps-outline';
                }
                else if (route.name === 'Stories') {
                    iconName = focused ? 'ios-book-sharp' : 'ios-book-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#58ceb2',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:50},
            tabBarLabelStyle:{paddingBottom:3},
            tabBarVisible: false,
            tabBarHideOnKeyboard:true

        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false,tabBarVisible: false}} />
        {/* <Tab.Screen name="Favourites" component={FavouritesScreen} /> */}
        <Tab.Screen name="Stories" component={StoriesStackScreen} options={{headerShown: false,tabBarVisible: false}} initialParams={{ category: '',top_story: '' }}/>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        {/* <Tab.Screen name="Story" component={StoryScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}