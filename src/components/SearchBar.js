import React, { useState,useEffect } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SearchStories from './SearchStories';
import { useNavigation } from '@react-navigation/native';

// import Animated, {
//   interpolate, Extrapolate, withTiming, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle,
// } from 'react-native-reanimated';
import {
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Keyboard
} from 'react-native';

const SearchBar = (props) => {
  const theme = useTheme();
  const {
    dark, width, margin, navbar, normalize, ios
  } = useTheme();
  //const { colors } = theme;//console.log(theme);
  const navigation = useNavigation();//console.log(navigation);

  const [searchQuery, setSearchQuery] = useState('');

  const _handleSearch = () => {console.log('Searching');}

  const _handleMore = () => console.log('Shown more');

  const onChangeSearch = () => {}
  const handleClear = () => {
    console.log('Clear');
    setClicked(false);
    Keyboard.dismiss();
    //setSearchPhrase('');
  }
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [storyListDynamic, updatestoryList] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [noResults, setResultEmpty] = useState(false);
    const [error, setError] = useState(null);
    

  const fetchData = (text) =>{
    
    setSearchPhrase(text);
    text.length ==0?setClicked(false):setClicked(true);
    const url = 'https://techieexplorer.com/demo/muthassikathakal/public/api/v1/stories?language=English&per_page=4&search='+text;
    //useEffect(() => {
      
      //text.length >2?
      if(text.length>2){
        setIsLoading(true);
        fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTU4ODFmYzliNTllNTI4ZGI5M2Q3MjRmYjRmNzdiYzFkNzc2NmMzYjE4NDIzZTc1OGNhMDczOGYyZjJmNDQ1MGZmMDA0ODg5YjFmMzgyODYiLCJpYXQiOjE2MjE1MTMyNjIsIm5iZiI6MTYyMTUxMzI2MiwiZXhwIjoxNjUzMDQ5MjYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HFRuMBZbRj36Gsxktx_ZOsgbWIsnISDsF9M3M-TfPAJUHj6m7m4FBzSp1MuTK6ffW-VTkM4BtOAsZGjDAK5a5wC4ttO22OQVP18xCmTBQ1Q2YMp-UwsBdGfSflXjv4DoxIwEeRF7B0hUp-L9IaucNuHgAFICrSldtDxwMOkn90sVU-oBx4c_VcaEMx3mHnU2yuOP803bHwpIQT0qYF40SZboiF5zkVJnKwyBVW4GFCaCeQkcvBiu9oXZuTfHz1rkQR9JDZ34BzNWIE4SiVJpbEwHjOYPJnVA9pTAj_BM7nEkCfR4pTdSHyxrTqUNeuisl4myfjq1OJjH4OpoDIm5DZA4nPIXID8wPOYS3hbY2Lv7LXKAuLvwlSK0nK1Pydrk4eey23CPXKw-B6-uNc2c1DAtCuo_nEdugwahov2U3OGUCMerQZf4hB79HfxXVgiu-gUPiW4mJL_BJCgpylPII1tvpxypHZVa7KpAjbwzHRV2U9wMeCwdv2YXfVWBkR6FnqUpEgaftlSSC_FUdNvvEJoNzHKGnbe_ng-gBvqZUpSNAzVhTHuZ9cIXjJk9wL5Glalgp4MOkE0NKS8ypaX3jpdDVAIgBjN66skiZnstcIOHHsGQnQcv-YWYRNOYs-bjKWaemzaf5WcL8Hmr24rdRdFoCXPH53jmmgE3QxK8J-o'
          }
        })
        .then((response) => response.json())
        .then((json) =>{ //console.log(json.data);
          updatestoryList(json.data);setIsLoading(false);
          if(json.data.length>0){
            
            setResultEmpty(false);
          }
          else{
            setIsLoading(false);
            setResultEmpty(true);
            //console.log(noResults);
          }
        })
        .catch((error) => {setIsLoading(false);console.error(error); setError(err);})
        .finally(() => setIsLoading(false));
      }
      //console.log('Fetched');
     // :'';
    //}, []);
   
  }
  
  return (
    <View style={{}}>
    
        <Searchbar
          placeholder="Find stories you like..."
          onChangeText={(text) => {
            //console.log(clicked)
            if (searchTimer) {
                clearTimeout(searchTimer);
                }
            //setInput(text);
            setSearchTimer(setTimeout(() => {
                fetchData(text);
              }, 1000),
              );
              }}
          //onIconPress={onChangeSearch}
          clearIcon={()=> <TouchableOpacity style={styles.clearBtn} color="#8467fb"
                              onPress={ () => handleClear()}
                          ><Entypo name="cross" style={!clicked ?styles.cleariconHide:styles.clearicon} /></TouchableOpacity>}
          //value={searchQuery}
          inputStyle={styles.searchinput}
          style={styles.container}
          icon={()=><Icon name="search" style={styles.icon} />}
          //value={noResults ?'':searchPhrase}
        />
         
       {!clicked ? (
            <></>
          ) : (
       <View style={styles.list__container} onStartShouldSetResponder={() => {setClicked(false);}}>
        
        {  (isLoading) ?
          (
            <View style={{ justifyContent:'center',marginVertical:20 }}>
              <ActivityIndicator size="large" color="#58ceb2" />
            </View>
          ):<></>}
          
        {  (error) ?
          (
            <View style={{ margin:10,paddingVertical:10,justifyContent:'center' }}>
              <Text style={{ fontSize: 16,color:'grey',textAlign:'center'}}>
                Error fetching data... Check your network connection!
              </Text>
            </View>
          ):<></>}
        {  (noResults) ?
          (
            <View style={{ margin:10,paddingVertical:10,justifyContent:'center' }}>
              <Text style={{ fontSize: 16,color:'grey',textAlign:'center'}}>
                Sorry... No Matching Stories!
              </Text>
            </View>
          ):<></>}

              <FlatList
                 contentContainerStyle={styles.flatlistContainer}
                  horizontal={false}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  data={storyListDynamic}
                  renderItem={({item}) => {
                      // when no input, show all
                      if (searchPhrase === "") {
                        return <Text style={{color:'grey',textAlign:'center',fontSize:13,fontWeight:'bold',width:160}}>Start typing to search...</Text>;
                      }
                      // filter of the name
                      else {
                        return <View  style={styles.resultBox}>
                        <TouchableOpacity style={styles.storyBtn} color="#8467fb"
                            onPress={ () => navigation.navigate('Story', { storyslug:item.slug, storydetails:item })}
                        >
                            
                            <Text style={{color:'grey',textAlign:'center',fontSize:16,fontWeight:'bold'}}>{item.story_title}</Text>
                        </TouchableOpacity></View>
                      }
                    }
                  }
               >


              </FlatList>
            
      </View>
      )} 
    </View>
  );
  
};

const styles = StyleSheet.create({
    
  searchinput:{
      borderColor: '#58ceb2',
      backgroundColor:'#fcfcfd',
      color:'#58ceb2',
      fontSize:16,
      //height:25
      textAlignVertical:'center'
  },
  container:{
    alignItems:'center',
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:50,
    height:50
  },
  icon:{
    color:'#58ceb2',
    fontSize:16,
    justifyContent:'center',
    //paddingLeft:10,

  },
  cleariconHide:{
    color:'#fcfcfd',
  },
  clearicon:{
    color:'red',
    fontSize:25,
    justifyContent:'center',
    //paddingLeft:10,

  },
  clearBtn:{
    flex:1,
    justifyContent:'center',
  },
  list__container: {
    margin: '4%',
    height: "85%",
    width: "92%",
    backgroundColor:'white',
    zIndex: 3, // works on ios
    elevation: 5, // works on android
    position:'relative'
  },
  resultBox:{
    paddingVertical:10,
    marginVertical:10,
    paddingVertical:5,
    //backgroundColor:'red',

  },
  flatlistContainer:{
    paddingHorizontal:10,
  }
});

export default withTheme(SearchBar);
