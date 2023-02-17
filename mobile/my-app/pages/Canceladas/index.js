import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground, DataPi, ScrollView } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './style';

// import Home from '../Home/HomePage'

export default function Home({ navigation }) {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando a Lista')
            listarTasks()
        }, 1500)
    }, [])

    const [tarefasCanceladas, setTarefasCanceladas] = useState([]);

    const listarTasks = () => {
        fetch('http://10.87.207.23:3000/Tarefas')
            .then(res => { return res.json() })
            .then(data => {
                setTarefasCanceladas(data);
            })
    };

    


    return (
        <ScrollView>
        <View style={style.container}>
            <View style={style.containerHome}>
                <View style={style.contTitle}>
                    <Text style={style.title} >Tasks - Canceladas</Text>

                </View>

                <View>
                    <Text style={style.title_pedidos_for_you}></Text>

                    {
                        tarefasCanceladas.map((t, index) => {

                            if (t.status == 3) {
                                return (
                                    <View style={style.cont_Task} key={index}>
                                        <Text>{t.id_task}</Text>
                                        <Text>
                                            {t.descricao}
                                        </Text>

                                        {/* <View style={style.cont_Btns}>
                                            <TouchableOpacity style={style.Btns_01} onPress={() => finalizarTask(t.id_task)}>
                                                <Text style={style.txtBTN}>Finalizar</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={style.Btns_02}>
                                                <Text style={style.txtBTN}>Cancelar</Text>

                                            </TouchableOpacity>

                                        </View> */}


                                    </View>
                                )
                            }

                        })
                    }



                </View>


                <View>

                </View>



            </View>
        </View>
    </ScrollView>

    );

}
