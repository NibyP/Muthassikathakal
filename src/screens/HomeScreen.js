import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import  SearchbarCommon  from '../components/SearchBar';
import  TopStories  from '../components/TopStories';
import  BottomBar  from '../components/BottomBar';
import { PageScrollView } from 'pagescrollview'



const HomeScreen = ({navigation, route}) => { 
    //console.log('home');console.log(navigation);
    return (
        <View >
            <PageScrollView backgroundColor='#ebf3f3' >
            <SearchbarCommon />
            <TopStories />
            <Text>Welcome Home</Text>
            
            <TouchableOpacity 
                             onPress={ () => navigation.navigate('Stories')}
                             title="Stories"
                        >
                        <Text>Stories </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                             onPress={ () => navigation.navigate('Story')}
                             title="Read Story"
                             style={{paddingBottom:60}}
                        >
                        <Text>Read Story </Text>
            </TouchableOpacity>
            
            </PageScrollView>
            <BottomBar />
        </View>

    );
}
export default HomeScreen;