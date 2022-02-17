import React, { useState } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';

const SearchBar = (props) => {
  
  
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
  
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

// const customstyles = StyleSheet.create({
    
//   searchinput:{
//       borderColor: colors.background,
//       backgroundColor:'#fcfcfd',
//       color:'#58ceb2',
//       fontSize:16,
//       //height:25
//       textAlignVertical:'center'
//   },
//   container:{
//     alignItems:'center',
//     marginHorizontal:20,
//     marginVertical:20,
//     borderRadius:50,
//     height:50
//   },
//   icon:{
//     color:'#58ceb2',
//     fontSize:16,
//     justifyContent:'center',
//     paddingLeft:10,

//   },
// });

export default withTheme(SearchBar);
