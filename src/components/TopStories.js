import React, { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


 const TopStories = () => {
    const [slider1ActiveSlide, setslider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
    const navigation = useNavigation();
    //console.log(navigation);
        const [isLoading, setLoading] = useState(true);
        const [storyListDynamic, updatestoryList] = useState([]);
                
                useEffect(() => {
                    fetch('https://techieexplorer.com/demo/muthassikathakal/public/api/v1/stories?language=English&per_page=-1&top_story=yes', {
                            method: 'GET',
                            headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTU4ODFmYzliNTllNTI4ZGI5M2Q3MjRmYjRmNzdiYzFkNzc2NmMzYjE4NDIzZTc1OGNhMDczOGYyZjJmNDQ1MGZmMDA0ODg5YjFmMzgyODYiLCJpYXQiOjE2MjE1MTMyNjIsIm5iZiI6MTYyMTUxMzI2MiwiZXhwIjoxNjUzMDQ5MjYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HFRuMBZbRj36Gsxktx_ZOsgbWIsnISDsF9M3M-TfPAJUHj6m7m4FBzSp1MuTK6ffW-VTkM4BtOAsZGjDAK5a5wC4ttO22OQVP18xCmTBQ1Q2YMp-UwsBdGfSflXjv4DoxIwEeRF7B0hUp-L9IaucNuHgAFICrSldtDxwMOkn90sVU-oBx4c_VcaEMx3mHnU2yuOP803bHwpIQT0qYF40SZboiF5zkVJnKwyBVW4GFCaCeQkcvBiu9oXZuTfHz1rkQR9JDZ34BzNWIE4SiVJpbEwHjOYPJnVA9pTAj_BM7nEkCfR4pTdSHyxrTqUNeuisl4myfjq1OJjH4OpoDIm5DZA4nPIXID8wPOYS3hbY2Lv7LXKAuLvwlSK0nK1Pydrk4eey23CPXKw-B6-uNc2c1DAtCuo_nEdugwahov2U3OGUCMerQZf4hB79HfxXVgiu-gUPiW4mJL_BJCgpylPII1tvpxypHZVa7KpAjbwzHRV2U9wMeCwdv2YXfVWBkR6FnqUpEgaftlSSC_FUdNvvEJoNzHKGnbe_ng-gBvqZUpSNAzVhTHuZ9cIXjJk9wL5Glalgp4MOkE0NKS8ypaX3jpdDVAIgBjN66skiZnstcIOHHsGQnQcv-YWYRNOYs-bjKWaemzaf5WcL8Hmr24rdRdFoCXPH53jmmgE3QxK8J-o'
                            }
                        })
                    .then((response) => response.json())
                    .then((json) => updatestoryList(json.data))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
                }, []);
//class TopStories extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    //     };
        
    // }
    // state = {
    //     slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    // };
//   const { navigation } = this.props;
//   const theme = useTheme();
//   const { colors } = theme;//console.log('be happy niby');console.log(navigation.canGoBack);
  
  _renderItemWithParallax =  ({item, index}, parallaxProps)=> {
    //console.log(navigation);
        return (
            <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
            navigation={navigation}
            />
        );
    };
        
    // render(){
        
        return (
            <View>
                    <View style={styles.titleContainer}>
                        <Text  style={styles.titleText}>Top Stories</Text>
                        <TouchableOpacity   style={styles.viewMore} onPress={ () => navigation.navigate('Stories', { top_story:'yes' })}><Text>View All</Text></TouchableOpacity>
                    </View>
                    <Carousel
                        ref={c => _slider1Ref = c}
                        data={storyListDynamic}
                        renderItem={_renderItemWithParallax}
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
                        onSnapToItem={(index) => setslider1ActiveSlide(index) }
                        {...navigation}
                        //layout='stack'
                    />
            
            
            </View>
        );
    // }
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


//export const ENTRIES1 = storyListDynamic;
// [
    
//     {
//         title: 'Earlier this morning, NYC',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
//     },
//     {
//         title: 'Beautiful and dramatic Antelope Canyon',
//         subtitle: 'vvvvvvvvvvvv',
//         illustration: 'https://i.imgur.com/UYiroysl.jpg'
//     },
//     {
//         title: 'White Pocket Sunset',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//         illustration: 'https://i.imgur.com/MABUbpDl.jpg'
//     },
//     {
//         title: 'Acrocorinth, Greece',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//         illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
//     },
//     {
//         title: 'The lone tree, majestic landscape of New Zealand',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
//     },
//     {
//         title: 'Middle Earth, Germany',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'https://i.imgur.com/lceHsT6l.jpg'
//     }
// ];


 
