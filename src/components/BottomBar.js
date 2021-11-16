import React, { useState, useRef } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen  from '../screens/HomeScreen';
import StoriesScreen  from '../screens/StoriesScreen';
import FavouritesScreen  from '../screens/FavouritesScreen';
import CategoriesScreen  from '../screens/CategoriesScreen';
//import StoryScreen  from '../screens/StoryScreen';


StatusBar.setBarStyle('dark-content');

// const HomeStack = createStackNavigator();
// function HomeStackScreen() {
//  return (
//    <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={HomeScreen} />             
//     <HomeStack.Screen name="Details" component={DetailsScreen} />
//    </HomeStack.Navigator>
//   );
// }
const BottomBar = props => {

    const { navigation,route } = props;
    const [type, setType] = useState('up');
    const ref = useRef();
//console.log(ref);
    const onClickButton = () => {
        if (type === 'down') {
            setType('down');
            alert('Change type curve down');
        } else {
            setType('up');
            alert('Change type curve up');
        }
    }

    const _renderIcon = (routeName: string, selectTab: string) => {
        let icon = '';

        switch (routeName) {
            case 'Home':
                icon = 'ios-home-sharp';
                break;
            case 'Favourites':
                icon = 'heart';
                break;
            case 'Stories':
                icon = 'book-sharp';
                break;
            case 'Categories':
                icon = 'apps-sharp';
                break;    
        }

        return (
            <View style={{
                alignItems: 'center'
            }}>
            <Ionicons name={icon} size={23} color={routeName === selectTab ? '#58ceb2' : 'gray'} />
            <Text style={{ position: 'absolute', color: routeName === selectTab ? '#58ceb2' : 'gray', marginTop:25, fontSize:12 }}>{routeName}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <CurvedBottomBar.Navigator
                ref={ref}
                style={[type === 'down' && {backgroundColor: '#F5F5F5'}]}
                type={type}
                height={65}
                circleWidth={55}
                bgColor="white"
                borderTopLeftRight={true}
                lazy={true}
                initialRouteName="Home"
                renderCircle={() => (
                    <TouchableOpacity
                        style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}
                    >
                        {/* <Ionicons name="chatbubbles-outline" size={23} /> */}
                        <Image source={require('../../assets/images/logo.png')} style={{ width: 58, height: 58, borderRadius:58 }}/>
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigation }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation(routeName)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {_renderIcon(routeName, selectTab)}
                    </TouchableOpacity>
                );
                }}
                
                >
                <CurvedBottomBar.Screen
                    name="Home"
                    position="left"
                    component={()=><HomeStackScreen {...navigation} {...route}/>}
                />
                <CurvedBottomBar.Screen
                    name="Favourites"
                    component={() => <FavouritesScreen  {...navigation} {...route}/>}
                    position="left"
                />
                <CurvedBottomBar.Screen
                    name="Stories"
                    component={ () => <StoriesScreen  {...navigation} {...route}/>}
                    position="right"
                    
                />
                <CurvedBottomBar.Screen
                    name="Categories"
                    component={() => <CategoriesScreen  {...navigation} {...route}/>}
                    position="right"
                />
                {/* <CurvedBottomBar.Screen
                    name="Story"
                    component={() => <StoryScreen  {...navigation} {...route}/>}
                    position="right"
                /> */}
            </CurvedBottomBar.Navigator>
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#58ceb2",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 28
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: "#58ceb2",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#58ceb2'
    },
    img: {
        width: 30,
        height: 30,
    }
});

