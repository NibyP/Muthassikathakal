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
import Carousel, { getInputRangeFromIndexes,Pagination }  from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import styles, { sliderWidth, itemWidth,colors } from '../../styles/SliderEntry';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { TouchableOpacity } from 'react-native-gesture-handler';


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


 //const TopStories = (props) => {
class TopStories extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
    state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
//   const { navigation } = this.props;
//   const theme = useTheme();
//   const { colors } = theme;//console.log('be happy niby');console.log(navigation.canGoBack);
  
  _renderItemWithParallax =  ({item, index}, parallaxProps)=> {
        return (
            <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
            />
        );
    };
    render(){
        return (
            <View>
                    <View style={styles.titleContainer}>
                        <Text  style={styles.titleText}>Top Stories</Text>
                        <TouchableOpacity   style={styles.viewMore}><Text>View All</Text></TouchableOpacity>
                    </View>
                    <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.8}//0.94
                    inactiveSlideOpacity={0.7}
                    activeSlideAlignment='center'
                    inactiveSlideShift={-20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={false}//true
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                    //layout='stack'
                />
            
            
            </View>
        );
    }
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


export const ENTRIES1 = [
    
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'vvvvvvvvvvvv',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];


 
