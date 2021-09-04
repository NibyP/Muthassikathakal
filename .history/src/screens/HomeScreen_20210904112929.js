// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import  SearchbarCommon  from '../components/SearchBar';

const HomeScreen = ({navigation, route}) => { 
    return (
        <View >
            <SearchbarCommon />
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
                        >
                        <Text>Read Story </Text>
            </TouchableOpacity>
        </View>

    );
}
export default HomeScreen;