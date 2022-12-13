import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';


import Header from '../../../components/Header/header'
import style from './styleU'

import user from './img/user.png'

export default function UserPage() {
    const [questions, setQuestions] = useState([]);


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

        <ScrollView>
            <View>
                <Header />


                <View style={style.contTitle}>
                    <Text style={style.title}>Moderadores</Text>
                </View>

                {
                    usuarios.map(u => {
                        if (u.status_user == 'admin') {
                            return (
                                <View style={style.contCardUser}>
                                    <Image source={user} style={style.userPng} />
                                    <View>
                                        <Text style={style.contNameUser}>{u.nickname}</Text>
                                    </View>
                                </View>
                            )
                        }

                    })

                }


                <View style={style.contTitle}>
                    <Text style={style.title}>Usuarios</Text>
                </View>


                {
                    usuarios.map(u => {
                        if (u.status_user == 'usuario') {
                            return (
                                <View style={style.contCardUser}>
                                    <Image source={user} style={style.userPng} />
                                    <View>
                                        <Text style={style.contNameUser}>{u.nickname}</Text>
                                    </View>
                                </View>
                            )
                        }

                    })

                }


            </View>
        </ScrollView>


    );

}
