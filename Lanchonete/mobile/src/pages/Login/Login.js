import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import MineIcon from './img/iconLogin.png'
import HamburguerIcon from './img/hamburguer.png'
import style from './style';

import Home from '../Home/Home'

export default function LogoutPage({ navigation }) {
    const [input, setInput] = useState('')
    const [hidePass, sideHidePass] = useState(true);


    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    // const Logar = async () => {
    //     let credenciais = {
    //         "email": email,
    //         "senha": input,
    //     }

    //     console.log(credenciais)
    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' }
    //     };
    //     options.body = JSON.stringify(credenciais);
    //     fetch("http://localhost:3000/login", options)
    //         .then(resp => resp.status)
    //         .then(async resp => {
    //             if (resp == 200) {

    //                 try{
    //                     console.log('Passando')
    //                     await AsyncStorage.setItem('usuarios', JSON.stringify(credenciais));

    //                 }catch(err)
    //                 {
    //                     console.log(err)

    //                 }

    //                 navigation.navigate("Home")
    //             }
    //             else {
    //                 console.log("Credeciais Incorretas")
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('error', error);
    //           });
    // };


    const Logar2 = async () => {

        if (usuario == '1' && input == "2") {
            entrar()
        }
    };


    const entrar = () => {
        navigation.navigate("Home")
    }


    return (
        <View style={style.container}>

            <View style={style.containerLogin}>
                <Image style={style.imgLogin} source={HamburguerIcon} />

                <Text style={style.titleLogin}>LOGIN LANCHONETE</Text>

                <View>
                    <TextInput style={style.inputs} placeholder='Insira seu Usuario' onChangeText={(value) => { setUsuario(value) }} />
                    <TextInput style={style.inputs} placeholder='Insira sua Senha' placeholderTextColor='black' value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass} />
                </View>

                <TouchableOpacity style={style.containerBtnLogin} onPress={Logar2}>
                    <Text style={style.titleBtnLogin}>Logar</Text>
                    {/* <Image style={style.creeperIcon} source={CreeperIcon} /> */}
                </TouchableOpacity>

                {/* <Text style={style.containerTitleFacaLogin}>Ou Faça Login com:</Text>
                    <View style={style.containerIcons}>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-google'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-facebook'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-twitter'} /></TouchableOpacity>
                    </View> */}

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Cadastrar') }}><Text>Cadastrar Agora!</Text></TouchableOpacity> */}
            </View>
        </View>

    );

}
