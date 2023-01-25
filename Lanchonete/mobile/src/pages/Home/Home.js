import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './style';

// import Home from '../Home/HomePage'

export default function Home({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.containerHome}>
                

<View style={style.contTitle}>
        <Text>Entregador</Text>

</View>

<View>
    <Text>Pedidos para Você</Text>
</View>




            </View>
        </View>

    );

}
