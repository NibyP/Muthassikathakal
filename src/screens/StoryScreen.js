import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const StoryScreen = ({navigation, route}) => { 
    const { storydetails, storyslug } = route.params;
    //console.log(storydetails)
    return (
        
        <View style={styles.container} >
                
                <Text style={styles.storyTitle}>{storydetails.story_title}</Text>
                <ScrollView vertical contentContainerStyle={{  alignItems: 'center',marginBottom: 5 }}>
                     <Text style={styles.storyDesc} >
                        {storydetails.story_full}


                     </Text>
                </ScrollView>
        </View>
    );
}
export default StoryScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ebfaf3',
        //backgroundColor:'#363946',
        paddingHorizontal:10,
        borderWidth: 2,
        borderColor:'#58ceb2',
        flex:1, 
        
    },
    
    storyImage:{
        resizeMode:'contain',
        flex: 1,
        width: (deviceWidth / 2)-35,
        height: deviceWidth / 2
    },
    storyTitle:{
        fontSize:25,
        textAlign:'center',
        marginVertical:10,
        paddingHorizontal:5,
        color:'black',
        borderWidth: 2,
        borderColor:'#58ceb2',


    },
    storyView:{
        backgroundColor: '#ebfaf3',
        //backgroundColor:'#363946',
        paddingHorizontal:10,
        borderWidth: 2,
        borderColor:'#58ceb2',
        flex:1
    },
    storyDesc:{
        color:'black',
        fontSize:20,
        paddingHorizontal:10,
        textAlign:'left',
        lineHeight:30,
        paddingTop:10,
        paddingBottom:120,
    },
});