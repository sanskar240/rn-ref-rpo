import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function TodoItem({item,pressHandler}){
    return (
       <TouchableOpacity onPress={()=>pressHandler(item.key)} >
        <Text style = {styles.item}>{item.text}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:60,
        marginTop:60,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})