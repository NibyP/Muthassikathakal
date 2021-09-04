import React, { useState } from 'react';
import { Appbar, withTheme, useTheme, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Animated, {
//   interpolate, Extrapolate, withTiming, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle,
// } from 'react-native-reanimated';
import {
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const SearchbarCommon = ({ navigation, previous }) => {
  const theme = useTheme();
  const {
    dark, width, margin, navbar, normalize, ios
  } = useTheme();
  const { colors } = theme;//console.log(theme);
  const [searchQuery, setSearchQuery] = useState('');
  const _showDrawer = () => console.log('Show Drawer');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const onChangeSearch = () => console.log('Search');
  // animated styles
  // const anims = {
  //   search: useAnimatedStyle(() => ({
  //     zIndex: 10,
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     paddingTop: status,
  //     padding: margin / 2,
  //     justifyContent: 'space-between',
  //     backgroundColor: colors.background,
  //     shadowOpacity: interpolate(scrollY.value, [0, 20], [0, 0.75], Extrapolate.CLAMP),
  //   })),
  //   scrollView: useAnimatedStyle(() => ({
  //     opacity: interpolate(loaded.value, [0, 1], [0, 1], Extrapolate.CLAMP),
  //     transform: [
  //       { translateY: interpolate(loaded.value, [0, 1], [50, 0], Extrapolate.CLAMP) },
  //     ],
  //   })),
  // };
  const customstyles = StyleSheet.create({
    
    searchinput:{
        height: 50,
        marginTop: 2,
        width: '100%',
        borderWidth: 1,
        
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderColor: colors.background,
    }
  });

  return (
    <View style={{justifyContent:'center', }}>
      
        {/*<Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={customstyles.searchinput}
          icon={()=><Icon name="search" size={30} color="#900" style={{justifyContent:'center', paddingLeft:10}} />}
        />
        <Animated.View style={anims.search}>*/}
            <TextInput
              autoFocus
              value={searchQuery}
              autoCorrect={false}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Find your next book..."
              style={customstyles.searchInput}
            />
          {/*<Pressable onPress={goBack}>
            <Text bold style={customstyles.saveButton}>Done</Text>
          </Pressable>
        </Animated.View>*/}
      
    </View>
  );
  
};

export default withTheme(SearchbarCommon);
