// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Routes from '../../../../components/routes';


// import { BsFillChatLeftDotsFill } from "react-icons/bs";

import Header from '../../../../components/Header/header'
import styleM from './styleDicas'


export default function DicasPage({ navigation }) {


    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/tema/dicas', options)
            .then(res => { return res.json() })
            .then(data => {
                setQuestions(data);
            })
    }, [questions]);
    useEffect(() => {
    }, []);


    const [usuarios, setUsuario] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/Usuarios', options)
            .then(res => { return res.json() })
            .then(data => {
                setUsuario(data);
            })
    }, [usuarios]);
    useEffect(() => {
    }, []);

    return (

        <View>

            <Header/>

            <View style={styleM.contTitle}>
                <Text style={styleM.title}>Dicas!</Text>
            </View>

            <View style={styleM.contCardQuestions}>


                {
                    questions.map((post, index) => {
                        return (
                            <View key={index}>

                                <View>

                                    <View style={styleM.questions}>

                                        <View style={styleM.cardQuestions}>
                                            <Image style={styleM.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />

                                            <View style={styleM.contTitleUser}>

                                                {
                                                    usuarios.map((u, i) => {
                                                        if (post.id_User == u.id_user) {
                                                            return (
                                                                <Text key={i}>{u.nome_user}</Text>
                                                            )
                                                        }

                                                    })
                                                }


                                                <Text>{post.tema}</Text>
                                            </View>
                                        </View>


                                        <Text>{post.pergunta}</Text>

                                        <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" />

                                        <View style={styleM.modalRespostas}>
                                            <Text style={styleM.titleModalRespostas}>RESPOSTAS</Text>

                                            <View style={styleM.containerAnswer}>
                                                <View style={styleM.userAnswer}>
                                                    <Image style={styleM.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />
                                                    <View>
                                                        <Text style={styleM.titleUserResp}>{post.nickname}</Text>
                                                        <Text style={styleM.dataResp}>{post.dataResp}</Text>
                                                    </View>



                                                </View>
                                                <Text style={styleM.resposta}>{post.resposta}</Text>

                                            </View>
                                        </View>

                                    </View>

                                </View>





                            </View>
                        )
                    })
                }
            </View>

        </View>

    );

}
