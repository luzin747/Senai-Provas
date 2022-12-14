import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MineIcon from './img/iconLogin.png'
import CreeperIcon from './img/creeperface.png'
import style from './style';


export default function LogoutPage({ navigation }) {
    const [input, setInput] = useState('')
    const [hidePass, sideHidePass] = useState(true);


    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const Cadastrar = async () => {
        let credenciais = {
            "nome_user": nome + sobrenome,
            "nickname": nickname,
            "email": email,
            "senha": password,
            "status_user": "usuario"
        }

        console.log(credenciais)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(credenciais);
        fetch("http://localhost:3000/Usuarios", options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert('Cadastrado Com Sucesso')
                    navigation.navigate("Home")
                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', password);
            });
    };

    return (
        <View style={style.container}>

            <ImageBackground
                source={'https://www.todofondos.net/wp-content/uploads/4k-minecraft-wallpapers-los-mejores-fondos-4k-minecraft-gratis.-fondo-de-pantalla-hd-1080p-de-minecraft.png'}
                style={style.ImageBackground} >



                <View style={style.containerLogin}>
                    <Image style={style.imgLogin} source={MineIcon} />

                    <Text style={style.titleLogin}>CADASTRAR FÓRUM</Text>

                    <View>
                        <TextInput style={style.inputs} placeholder='Insira seu Nome*' value={nome} onChangeText={(texto) => setNome(texto)} />

                        <TextInput style={style.inputs} placeholder='Insira seu Sobrenome*' value={sobrenome} onChangeText={(texto) => setSobrenome(texto)} />

                        <TextInput style={style.inputs} placeholder='Insira seu Nickname*' value={nickname} onChangeText={(texto) => setNickname(texto)} />

                        <TextInput style={style.inputs} placeholder='Insira sua Email*' value={email} onChangeText={(texto) => setEmail(texto)} />

                        <TextInput style={style.inputs} placeholder='Insira sua Senha*' placeholderTextColor='black' value={password} onChangeText={(texto) => setPassword(texto)} secureTextEntry={hidePass} />
                    </View>

                    <TouchableOpacity style={style.containerBtnLogin} onPress={Cadastrar}>
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
