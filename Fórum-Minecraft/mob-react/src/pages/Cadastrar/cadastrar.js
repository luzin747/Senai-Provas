import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MineIcon from './img/iconLogin.png'
import CreeperIcon from './img/creeperface.png'
import style from './style';


export default function LogoutPage({navigation}) {
    const [input, setInput] = useState('')
    const [hidePass, sideHidePass] = useState(true);


    const entrar =() => {
        navigation.navigate("Home")
    }


    return (
        <View style={style.container}>

            <ImageBackground
                source={'https://www.todofondos.net/wp-content/uploads/4k-minecraft-wallpapers-los-mejores-fondos-4k-minecraft-gratis.-fondo-de-pantalla-hd-1080p-de-minecraft.png'}
                style={style.ImageBackground} >



                <View style={style.containerLogin}>
                    <Image style={style.imgLogin} source={MineIcon} />

                    <Text style={style.titleLogin}>CADASTRAR FÓRUM</Text>

                    <View>
                        <TextInput style={style.inputs} placeholder='Insira seu Usuario' />

                        <TextInput style={style.inputs} placeholder='Insira sua Email'/>

                        <TextInput style={style.inputs} placeholder='Insira sua Senha' placeholderTextColor='black' value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass} />
                    </View>

                    <TouchableOpacity style={style.containerBtnLogin} onPress={entrar}>
                        <Text style={style.titleBtnLogin}>Cadastrar</Text>
                        <Image style={style.creeperIcon} source={CreeperIcon} />
                    </TouchableOpacity>

                    {/* <Text style={style.containerTitleFacaLogin}>Ou Faça Login com:</Text> */}

                    {/* <View style={style.containerIcons}>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-google'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-facebook'} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={style.iconIon} name={'logo-twitter'} /></TouchableOpacity>
                    </View> */}
                    
                    <TouchableOpacity><Text>Já Possui Conta?</Text></TouchableOpacity>
                </View>

            </ImageBackground>
        </View>

    );

}
