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

  const _handleSearch = () => {console.log('Searching');}

  const _handleMore = () => console.log('Shown more');

  const onChangeSearch = () => {}
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
        borderColor: colors.background,
        backgroundColor:'#fcfcfd',
        color:'#58ceb2',
        fontSize:14,
        //height:25
        textAlignVertical:'center'
    },
    container:{
      alignItems:'center',
      marginHorizontal:20,
      marginVertical:10,
      borderRadius:50,
      height:40
    },
    icon:{
      color:'#58ceb2',
      fontSize:16,
      justifyContent:'center',
      paddingLeft:10,

    },
  });

  return (
    <View style={{}}>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{alignSelf:'center',}}
      /> */}
        <Searchbar
          placeholder="Find stories you like..."
          //onChangeText={onChangeSearch}
          //value={searchQuery}
          inputStyle={customstyles.searchinput}
          style={customstyles.container}
          icon={()=><Icon name="search" style={customstyles.icon} />}
        />
        {/*<Animated.View style={anims.search}>*/}
            {/* <TextInput
              value={searchQuery}
              autoCorrect={false}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Find your next book..."
              style={customstyles.searchInput}
            /> */}
          {/*<Pressable onPress={goBack}>
            <Text bold style={customstyles.saveButton}>Done</Text>
          </Pressable>
        </Animated.View>*/}
      
    </View>
  );
  
};

export default withTheme(SearchbarCommon);
