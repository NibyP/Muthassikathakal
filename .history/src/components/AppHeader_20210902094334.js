import React, { useState } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import {
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';




 const AppMainHeader = ({ navigation, previous }) => {

  const theme = useTheme();
  const { colors } = theme;//console.log(theme);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [active, setActive] = React.useState('');

  const _toggleDrawer = () => navigation.toggleDrawer();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');



  return (
    <View>
      <StatusBar
          backgroundColor={colors.background}
          barStyle="light-content"
          hidden={false}
      />
      <Appbar.Header>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : <Appbar.Action icon="menu" onPress={_toggleDrawer} />}
        <Appbar.Content title="Muthassikathakal" subtitle="" titleStyle={{ color: colors.text, justifyContent: 'center', paddingLeft: 25 }}/>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        
      </Appbar.Header>
      
    </View>
  );
};

export default withTheme(AppMainHeader);
