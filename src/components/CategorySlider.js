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
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu,updateSideMenuState,onMenuItemSelected } from '../actions/sidemenu';
import * as RootNavigation from '../rootNavigationRef';
import { useNavigation } from '@react-navigation/native';

const window = Dimensions.get('window');

const CategorySlider = (props, { changeCategory }) => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [categoryListDynamic, setData] = useState([]);
//console.log(categoryListDynamic);
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
      <View style={styles.menuContainer} >
          <ScrollView horizontal contentContainerStyle={{  alignItems: 'center' }}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.menuslider, { alignSelf: 'flex-start',flexDirection:'row', }}
                  data={categoryListDynamic}
                  renderItem={({item}) => <View style={{ paddingHorizontal:8 }}>
                    {/* onPress={() => changeCategory(item.id)} */}
                   
                  <Button style={styles.buttonCateg} color="#58ceb2" title={item.category_name}  onPress={ () => navigation.navigate('StoriesStack', { category:item.id,top_story:'' })}></Button>
                  </View>}
               >
              </FlatList>
          )}
          </ScrollView>
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
)(CategorySlider);

const styles = StyleSheet.create({
  
  menuslider:{
    flexDirection:'row',
    alignItems:'center'
  },
  menuContainer:{
      backgroundColor:'#B3f0e1',
      height:60,
      flexDirection:'column'
  },
  buttonCateg:{
      height:50,
      width:60,
      marginLeft:10
  },
});
