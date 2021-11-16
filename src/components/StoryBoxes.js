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

const window = Dimensions.get('window');
const deviceWidth = Dimensions.get('window').width;

// { categoryID, storyListDynamic }

const StoryBoxes = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [categoryID, changecategoryID] = useState('1');
  const [storyListDynamic, updatestoryList] = useState([]);
  
  useEffect(() => {
    fetch('https://techieexplorer.com/demo/muthassikathakal/public/api/v1/stories?language=English&per_page=-1&category='+categoryID, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTU4ODFmYzliNTllNTI4ZGI5M2Q3MjRmYjRmNzdiYzFkNzc2NmMzYjE4NDIzZTc1OGNhMDczOGYyZjJmNDQ1MGZmMDA0ODg5YjFmMzgyODYiLCJpYXQiOjE2MjE1MTMyNjIsIm5iZiI6MTYyMTUxMzI2MiwiZXhwIjoxNjUzMDQ5MjYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HFRuMBZbRj36Gsxktx_ZOsgbWIsnISDsF9M3M-TfPAJUHj6m7m4FBzSp1MuTK6ffW-VTkM4BtOAsZGjDAK5a5wC4ttO22OQVP18xCmTBQ1Q2YMp-UwsBdGfSflXjv4DoxIwEeRF7B0hUp-L9IaucNuHgAFICrSldtDxwMOkn90sVU-oBx4c_VcaEMx3mHnU2yuOP803bHwpIQT0qYF40SZboiF5zkVJnKwyBVW4GFCaCeQkcvBiu9oXZuTfHz1rkQR9JDZ34BzNWIE4SiVJpbEwHjOYPJnVA9pTAj_BM7nEkCfR4pTdSHyxrTqUNeuisl4myfjq1OJjH4OpoDIm5DZA4nPIXID8wPOYS3hbY2Lv7LXKAuLvwlSK0nK1Pydrk4eey23CPXKw-B6-uNc2c1DAtCuo_nEdugwahov2U3OGUCMerQZf4hB79HfxXVgiu-gUPiW4mJL_BJCgpylPII1tvpxypHZVa7KpAjbwzHRV2U9wMeCwdv2YXfVWBkR6FnqUpEgaftlSSC_FUdNvvEJoNzHKGnbe_ng-gBvqZUpSNAzVhTHuZ9cIXjJk9wL5Glalgp4MOkE0NKS8ypaX3jpdDVAIgBjN66skiZnstcIOHHsGQnQcv-YWYRNOYs-bjKWaemzaf5WcL8Hmr24rdRdFoCXPH53jmmgE3QxK8J-o'
            }
          })
      .then((response) => response.json())
      .then((json) => updatestoryList(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 
  return(
      <View style={styles.storyContainer} >

              <FlatList
                  contentContainerStyle={styles.storySlider}
                  horizontal={false}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  data={storyListDynamic}
                  renderItem={({item}) => <View  style={styles.storyBox}>
                  <TouchableOpacity style={styles.storyBtn} color="#8467fb"
                      onPress={ () => navigation.navigate('Story', { storyslug:item.slug, storydetails:item })}
                  >
                      <Image
                                          style={styles.storyImage}
                                          source={{uri:item.story_image+"?time=" + new Date()}}
                                        />
                      <Text style={{color:'grey',textAlign:'center',fontSize:13,fontWeight:'bold',width:160}}>{item.story_title}</Text>
                  </TouchableOpacity></View>}
               >


              </FlatList>

      </View>
  );
}


const mapStateToProps = (state) =>{
  //console.log(state);
  return{
      sidemenu: state.globalReducer.sidemenu,
  }
};
const mapDispatchToProps = (dispatch) =>{
  return{
      toggleMenu: (sidemenu) => dispatch(toggleSideMenu(sidemenu)),
      updateSideMenuState: (sidemenu) => dispatch(updateSideMenuState(sidemenu)),
      onMenuItemSelected: (sidemenu) => dispatch(onMenuItemSelected(sidemenu)),
  }
};

export default  compose(
  connect(mapStateToProps,mapDispatchToProps),
  withTheme,
)(StoryBoxes);

const styles = StyleSheet.create({
  
  storyContainer:{
    //backgroundColor:'#a5c2fb',
    flexDirection:'column',
    flex:1,
    flexWrap:'wrap',
    paddingBottom: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  storySlider:{
      flexDirection:'column',
      flexGrow: 1,
      alignItems:'center',
  },
  storyBox:{
      marginLeft: 5,
      marginVertical:10,

  },
  storyBtn:{
      paddingHorizontal:10,
  },
  storyImage:{
      resizeMode:'contain',
      flex: 1,
      width: (deviceWidth / 2)-35,
      height: deviceWidth / 2,
      borderRadius:5
  },
  storyTitle:{
      fontSize:25,
      textAlign:'center',
      marginVertical:10,
      paddingHorizontal:5,
      color:'gray',
      borderWidth: 2,
      borderColor:'#9658f4',


  },
});
