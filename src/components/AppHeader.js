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




 const AppMainHeader = (props) => {
  //console.log('Props');
  console.log(props.navigation.getState());
  const { navigation } = props;
  const theme = useTheme();
  const { colors } = theme;//console.log('be happy niby');console.log(navigation.canGoBack);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [active, setActive] = React.useState('');

  const _toggleDrawer = () => {props.toggleMenu();}

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');



  return (
    <View>
      <StatusBar
          backgroundColor={colors.primary}
          barStyle="light-content"
          hidden={false}
      />
      {navigation.canGoBack() ?
      <Appbar.Header style={{ backgroundColor: colors.background }}>
          <Appbar.BackAction onPress={()=> navigation.goBack(null)} />  
          <Appbar.Content title={props.options.headerTitle} titleStyle={{ color: colors.primary, justifyContent: 'center', fontSize:20,   }} />
          {/* <Appbar.Content title="Muthassikathakal" subtitle="" titleStyle={{ color: colors.primary, justifyContent: 'center', fontSize:30,  fontFamily:'playoutdemo' }} onPress={ () =>{navigation.navigate('Home');}}/> */}
      </Appbar.Header>
      :null
      }
      
      {/* <Appbar.Header style={{ backgroundColor: colors.background }}>
        {navigation.canGoBack() ? <Appbar.BackAction onPress={()=> navigation.goBack(null)} /> : <Appbar.Action icon="menu" onPress={()=>{_toggleDrawer()}}  style={{color:'red'}} />}
        <Appbar.Content title="Muthassikathakal" subtitle="" titleStyle={{ color: colors.primary, justifyContent: 'center', fontSize:30,  fontFamily:'playoutdemo' }} onPress={ () =>{navigation.navigate('Home');}}/>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header> */}

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
)(AppMainHeader);


//export default withTheme(AppMainHeader);
