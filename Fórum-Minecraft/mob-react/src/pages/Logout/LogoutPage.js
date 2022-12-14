import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import * as React from 'react';


import style from './style';


const  Logout = () => {
    console.log('entrando')
    // navigation.navigate("Login")
}


export default function LogoutPage({ navigation }) {


    
    return (

        <View style={style.container}>


            <Text  style={style.containerTitle}>Deseja Sair?</Text>

            <TouchableOpacity style={style.containerButton} onPress={Logout}>
                <Text style={style.containerButtonTittle}>SIM</Text>
            </TouchableOpacity>

        </View>


    );

}
