import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MineIcon from './img/iconLogin.png'
import CreeperIcon from './img/creeperface.png'
import style from './style';

import Home from '../Home/HomePage'

export default function LogoutPage({navigation}) {
    const [input, setInput] = useState('')
    const [hidePass, sideHidePass] = useState(true);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   

    const Logar = async () => {
        let credenciais = {
            "email": email,
            "senha": input,
        }

        console.log(credenciais)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(credenciais);
        fetch("http://localhost:3000/login", options)
            .then(resp => resp.status)
            .then(async resp => {
                if (resp == 200) {

                    try{
                        console.log('Passando')
                        await AsyncStorage.setItem('usuarios', JSON.stringify(credenciais));

                    }catch(err)
                    {
                        console.log(err)

                    }

                    navigation.navigate("Home")
                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
              });
    };


    const  entrar = () => {
        navigation.navigate("Home")
    }

    
    return (
        <View style={style.container}>

            <ImageBackground
                source={'https://www.todofondos.net/wp-content/uploads/4k-minecraft-wallpapers-los-mejores-fondos-4k-minecraft-gratis.-fondo-de-pantalla-hd-1080p-de-minecraft.png'}
                style={style.ImageBackground} >

                <View style={style.containerLogin}>
                    <Image style={style.imgLogin} source={MineIcon} />

                    <Text style={style.titleLogin}>LOGIN F??RUM</Text>

                    <View>
                        <TextInput style={style.inputs} placeholder='Insira seu Email' onChangeText={(value) => { setEmail(value) }} />
                        <TextInput style={style.inputs} placeholder='Insira sua Senha' placeholderTextColor='black' value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass} />
                    </View>

                    <TouchableOpacity style={style.containerBtnLogin} onPress={Logar}>
                        <Text style={style.titleBtnLogin}>Logar</Text>
                        <Image style={style.creeperIcon} source={CreeperIcon} />
                    </TouchableOpacity>

                    <Text style={style.containerTitleFacaLogin}>Ou Fa??a Login com:</Text>
                    <View style={style.containerIcons}>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-google'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-facebook'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-twitter'} /></TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity  onPress={() => { navigation.navigate('Cadastrar') }}><Text>Cadastrar Agora!</Text></TouchableOpacity>
                </View>

            </ImageBackground>
        </View>

    );

}
