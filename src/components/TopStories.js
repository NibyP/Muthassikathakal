import React, { useState,Component } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import {
  StatusBar,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleSideMenu,updateSideMenuState,onMenuItemSelected } from '../actions/sidemenu';




 const TopStories = (props) => {
  //console.log('Props');console.log(props.navigation);
  const { navigation } = props;
  const theme = useTheme();
  const { colors } = theme;//console.log('be happy niby');console.log(navigation.canGoBack);
  


  return (
    <View>
      <StatusBar
          backgroundColor={colors.primary}
          barStyle="light-content"
          hidden={false}
      />
      <Appbar.Header>
        {navigation.canGoBack() ? <Appbar.BackAction onPress={()=> navigation.goBack(null)} /> : <Appbar.Action icon="menu" onPress={()=>{_toggleDrawer()}}  style={{color:'white'}}/>}
        <Appbar.Content title="Muthassikathakal" subtitle="" titleStyle={{ color: colors.text, justifyContent: 'center', paddingLeft: 25 }} onPress={ () =>{navigation.navigate('Home');}}/>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        
      </Appbar.Header>
      
    </View>
  );
};

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
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withTheme
)(TopStories);


//export default withTheme(AppMainHeader);
