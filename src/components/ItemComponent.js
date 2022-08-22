import React from'react';
import {Text,View,StyleSheet} from 'react-native';

const ItemComponent = ({name}) => {
    return <View style={Styles.itemContainer}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{name}</Text>
    </View>
}

export default ItemComponent;

const Styles = StyleSheet.create({
    itemContainer:{
        width:300,
        marginVertical:5,
        justifyContent:'center',
        padding:5,
        backgroundColor:'white',
        elevation:5,
        borderRadius:5
    }
})