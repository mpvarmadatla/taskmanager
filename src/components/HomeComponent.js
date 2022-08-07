import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const HomeComponent = () =>{
    return (
        <View style={Styles.homeContainer}>
            <Text>TasK Manager</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomeComponent;