import React, { useState, Component, useEffect } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import {
  StatusBar,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu,updateSideMenuState,onMenuItemSelected } from '../actions/sidemenu';
import * as RootNavigation from '../rootNavigationRef';
import { useNavigation } from '@react-navigation/native';
import AppMainHeader  from '../components/AppHeader';
import { createStackNavigator } from '@react-navigation/stack';
import StoryScreen  from './StoryScreen';

const window = Dimensions.get('window');
const deviceWidth = Dimensions.get('window').width;

const CategoriesScreen = ({navigation, route}) => { 
    //console.log(route);
    const [isLoading, setLoading] = useState(true);
    const [categoryListDynamic, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://techieexplorer.com/demo/muthassikathakal/public/api/v1/storycategories?language=English&per_page=-1', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTU4ODFmYzliNTllNTI4ZGI5M2Q3MjRmYjRmNzdiYzFkNzc2NmMzYjE4NDIzZTc1OGNhMDczOGYyZjJmNDQ1MGZmMDA0ODg5YjFmMzgyODYiLCJpYXQiOjE2MjE1MTMyNjIsIm5iZiI6MTYyMTUxMzI2MiwiZXhwIjoxNjUzMDQ5MjYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HFRuMBZbRj36Gsxktx_ZOsgbWIsnISDsF9M3M-TfPAJUHj6m7m4FBzSp1MuTK6ffW-VTkM4BtOAsZGjDAK5a5wC4ttO22OQVP18xCmTBQ1Q2YMp-UwsBdGfSflXjv4DoxIwEeRF7B0hUp-L9IaucNuHgAFICrSldtDxwMOkn90sVU-oBx4c_VcaEMx3mHnU2yuOP803bHwpIQT0qYF40SZboiF5zkVJnKwyBVW4GFCaCeQkcvBiu9oXZuTfHz1rkQR9JDZ34BzNWIE4SiVJpbEwHjOYPJnVA9pTAj_BM7nEkCfR4pTdSHyxrTqUNeuisl4myfjq1OJjH4OpoDIm5DZA4nPIXID8wPOYS3hbY2Lv7LXKAuLvwlSK0nK1Pydrk4eey23CPXKw-B6-uNc2c1DAtCuo_nEdugwahov2U3OGUCMerQZf4hB79HfxXVgiu-gUPiW4mJL_BJCgpylPII1tvpxypHZVa7KpAjbwzHRV2U9wMeCwdv2YXfVWBkR6FnqUpEgaftlSSC_FUdNvvEJoNzHKGnbe_ng-gBvqZUpSNAzVhTHuZ9cIXjJk9wL5Glalgp4MOkE0NKS8ypaX3jpdDVAIgBjN66skiZnstcIOHHsGQnQcv-YWYRNOYs-bjKWaemzaf5WcL8Hmr24rdRdFoCXPH53jmmgE3QxK8J-o'
                }
            })
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return(
        <View style={styles.storyContainer} >
            
                <FlatList
                    contentContainerStyle={styles.storySlider}
                    horizontal={false}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    data={categoryListDynamic}
                    renderItem={({item}) => <View  style={styles.storyBox} onPress={ () => navigation.navigate('StoriesStack', { category:item.id,top_story:'' })}>
                    <TouchableOpacity style={styles.storyBtn} color="#8467fb"
                        onPress={ () => navigation.navigate('StoriesStack', { category:item.id,top_story:'' })}
                    >
                        
                        <Text style={{color:'white',textAlign:'center',fontSize:23,fontWeight:'bold'}}>{item.category_name}</Text>
                    </TouchableOpacity></View>}
                >


                </FlatList>

        </View>
    );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  
    storyContainer:{
      backgroundColor:'#ebf3f3',
      flexDirection:'row',
      flex:1,
      flexWrap:'wrap',
      paddingBottom: 50,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:20,
    },
    storySlider:{
        flexDirection:'column',
        flexGrow: 1,
        //alignItems:'center',
        marginHorizontal:20,
        
    },
    storyBox:{
        marginVertical:10,
        paddingHorizontal:50,
        paddingVertical:50,
        backgroundColor:'#58ceb2',
        borderRadius:10,
        //width:'90%'
    },
    storyBtn:{
        paddingHorizontal:10,
    },
    
    
    
  });