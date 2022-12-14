import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import style from './styleCad'
import Header from '../../../components/Header/header'
import CreeperIcon from './img/creeperface.png'


const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable

        />
    );
}

export default function LogoutPage({ navigation }) {

    const [usuarios, setUsers] = useState([]);

    const getValue = async () => {
        try {
            const value = await AsyncStorage.getItem('usuarios')

            setUsers([value]);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getValue()
    }, [user])

    useEffect(() => {
        console.log(usuarios)
    }, [usuarios])

    const [user, setUser] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/Usuarios', options)
            .then(res => { return res.json() })
            .then(data => {
                setUser(data);
            })
    }, []);

    const [id_user, setIdUser] = useState("");
    const [tema, setTema] = useState("");
    const [Pergunta, setPergunta] = useState("");

    const Cadastrar = async () => {

        var dataAtual
        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()

        dataAtual = ano + '-' + mes + '-' + dia;



        let data = {
            "id_user": 1,
            "pergunta": value,
            "tema": selectedValue,
            "data": dataAtual
        }

        console.log(data)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(data);
        fetch("http://localhost:3000/Perguntas", options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {

                    alert('pegunta Cadastrada com sucesso')
                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };


    const entrar = () => {
        console.log(selectedValue)
        console.log(value)
    }

   
    
    


    const [value, onChangeText] = React.useState("");

    const [selectedValue, setSelectedValue] = useState("");



    return (
        <View>

            <Header />

            <View style={style.containerQuest}>

                <View style={style.contHeaderUser}>

                    <Image style={style.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />

                    <View>

                        {
                            
                            usuarios.map((u) => {
                                
                                let un = ""
                                var idUser = ""
                                let jsonU = JSON.parse(u)
                                
                                user.forEach((us, index) => {
                                    console.log("entrou map")
                                    if(jsonU.email == us.email) {
                                        console.log("entrou if")
                                        un = us.nickname
                                        idUser = us.id_usuario
                                        console.log(idUser)
                                            return(
                                                <View key={index}></View>
                                            )                                        
                                    }
                                })
                                return(<Text>{un} -{idUser}</Text>);
                            })
                        }
                        
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 35, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="SEM TEMA" value="" />
                            <Picker.Item label="CRAFTS" value="CRAFTS" />
                            <Picker.Item label="DICAS" value="DICAS" />
                            <Picker.Item label="BUGS" value="BUGS" />
                            <Picker.Item label="MODS" value="MODS" />
                        </Picker>
                    </View>
                </View>

                <UselessTextInput
                    multiline
                    numberOfLines={10}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={style.txtArea}
                />

                <TouchableOpacity style={style.btnEnviar} onPress={Cadastrar}>
                    <Text style={style.txtBtn}>Cadastrar Pergunta</Text>
                    <Image style={style.creeperIcon} source={CreeperIcon} />
                </TouchableOpacity>
            </View>
        </View>

    )
}