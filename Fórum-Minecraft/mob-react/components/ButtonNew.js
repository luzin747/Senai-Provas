import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button,TextInput  } from 'react-native';

import {Entypo} from '@expo/vector-icons'

export default function ButtonNew({focused,size, color}) {
    return (
        <View style={[styles.container, {backgroundColor: focused ? '#212124' : 'white'}]}>
            <Entypo style={[{color:focused ? 'white' : '#212124'}]} name="plus" color={color} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        boxShadow: '0px 0px 5px rgba(0,0,0,.3)'
    }
})