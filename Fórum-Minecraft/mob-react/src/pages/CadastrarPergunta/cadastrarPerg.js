import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button,TextInput, Picker  } from 'react-native';

import style from './styleCad'

export default function LogoutPage({navigation}) {

    return (
        <View>
            <Image />
            <View>
                <Text>Nome Do Usuario</Text>
                <Text>Tema : CRAFTS</Text>
            </View>

            <TextInput style={style.inpResp} />
        </View>
    )
}