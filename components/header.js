import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (

        <View style = {styles.header}>
            <Text style = {styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:100,
        height:80,
        paddingTop:38,
        backgroundColor:'coral'

    }
});

