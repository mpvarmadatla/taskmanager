import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity} from 'react-native';


const HomeComponent = () =>{
    const [task,setTask] = useState([])
    const [text,setText] = useState('')
    const onPress = () =>{
        const data = {
            taskname:text
        }
        setTask([...task,data])
    }
    return (
        <View style={Styles.homeContainer}>
            <View style={{alignItems:'center'}}>
            <Text style={{color:'#000',fontSize:26,fontWeight:'bold'}}>Task Manager</Text>
            </View>
            <View style={{alignItems:'center'}}>
                {task&& task.map((item)=><Text key={item.taskname}>{item.taskname}</Text>)}
            </View>
            <View style={{position:'absolute',bottom:20,left:100,flexDirection:'row'}}>
            <TextInput style={{width:200,marginRight:15,backgroundColor:'#fff',borderRadius:10,elevation:5}} onChangeText={(text)=>setText(text)}/>
            <TouchableOpacity style={{width:40,height:40,backgroundColor:'#fff',borderRadius:50,justifyContent:'center',alignItems:'center',elevation:5}} onPress={onPress}>
                <Text style={{fontSize:30,color:'#000',fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        padding:10,
        backgroundColor:'#9ED2C6'
    }
})

export default HomeComponent;