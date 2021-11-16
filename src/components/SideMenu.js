import React, { useState,Component } from 'react';
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
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu,updateSideMenuState,onMenuItemSelected } from '../actions/sidemenu';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as RootNavigation from '../rootNavigationRef';

const window = Dimensions.get('window');


const MenuScreen = (props) => {
    //const navigation = useNavigation();

   //console.log('Curresnt');console.log(RootNavigation);
    return (
      props.sidemenu.isOpen?
      <View scrollsToTop={false} style={styles.container}>
        <View  style={styles.menu}>
            <View  style={styles.top}>
                <Text style={styles.logo}>Muthassikathakal</Text>
                <TouchableOpacity onPress={()=>{props.toggleMenu()}}  >
                    <Icon name="close" style={styles.close}/>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.itemview}>
                <Text
                style={styles.item}
                onPress={ () =>{props.toggleMenu(); RootNavigation.navigate('Home');}}
                >
                Home
                </Text>
            </View> */}
            <View style={styles.itemview}>
                <Text
                style={styles.item}
                onPress={ () =>{props.toggleMenu(); RootNavigation.navigate('Stories');}}
                >
                Stories
                </Text>
            </View>
            <View style={styles.itemview}>
                <Text
                style={styles.item}
                >
                Favorites
                </Text>
            </View>
            <View style={styles.itemview}>
                <Text
                style={styles.item}
                >
                About Us
                </Text>
            </View>
            <View style={styles.itemview}>
                <Text
                style={styles.item}
                >
                Feedback
                </Text>
            </View>
        </View>
    </View>
     :null
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
)(MenuScreen);

const styles = StyleSheet.create({
  
  container:{
    position: 'absolute',
    flex: 1,
    flexDirection:'row',
    zIndex: 5,
    alignSelf:'flex-start',
    //width: 'auto',
  },
  
  menu: {
    width: window.width - (window.width*10)/100,
    height: window.height - (window.height*10)/100,
    backgroundColor: 'white',
    padding: 20,
    
    marginHorizontal:'5%',
    marginVertical:'5%',
    alignSelf:'center',
    borderRadius:10,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  
  item: {
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 20,
    paddingLeft:20,
    paddingBottom: 20,
  },
  itemview:{
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    borderBottomStartRadius:20,
    borderBottomRightRadius:20,
    
  },
  close: {
    color:'grey',
    fontSize:40,
    alignSelf:'flex-end',
    paddingLeft:10,
    flex:1,
  },
  logo:{
    color:'black',
    fontSize:25,
    alignSelf:'center',
    flex:4,
    textAlign:'center'
  },
  top:{
    //   flex:1,
       flexDirection:'row',
       paddingBottom:20,
       paddingTop:10
  },
});
