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
        }, 1000)
    }, [])

    const [tarefas, setTarefas] = useState([]);

    const listarTasks = () => {
        fetch('http://10.87.207.23:3000/Tarefas')
            .then(res => { return res.json() })
            .then(data => {
                setTarefas(data);
            })
    };

    const finalizarTask = async (id) => {
        console.log(id)

        var horaAtual
        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()

        var hora = String(hoje.getHours() + 0).padStart(2, '0')
        var minuto = String(hoje.getMinutes() + 0).padStart(2, '0')

        horaAtual = hora + ':' + minuto;

        // console.log(value)

        let data = {
            "id_task": id,
            "horario_final": horaAtual,
            "status": 2
        }

        console.log(data)
         const options = {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' }
         };
         options.body = JSON.stringify(data);
         fetch("http://localhost:3000/Tarefas", options)
           .then(resp => resp.status)
           .then(resp => {
             if (resp == 200) {

              alert('Task Finalizada com Sucesso')
            }
            else {
                alert("Erro Task")
            }
          })
          .catch((error) => {
            console.log('error', error);
          });
      };

      const cancelarTask = async (id) => {
        console.log(id)

        var horaAtual
        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()

        var hora = String(hoje.getHours() + 0).padStart(2, '0')
        var minuto = String(hoje.getMinutes() + 0).padStart(2, '0')

        horaAtual = hora + ':' + minuto;

        // console.log(value)

        let data = {
            "id_task": id,
            "status": 3
        }

        console.log(data)
         const options = {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' }
         };
         options.body = JSON.stringify(data);
         fetch("http://localhost:3000/Tarefas", options)
           .then(resp => resp.status)
           .then(resp => {
             if (resp == 200) {

              alert('Task Finalizada com Sucesso')
            }
            else {
                alert("Erro Task")
            }
          })
          .catch((error) => {
            console.log('error', error);
          });
      };




    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.containerHome}>
                    <View style={style.contTitle}>
                        <Text style={style.title} >Tasks - Abertas</Text>
                        
                    </View>

                    <View>
                        <Text style={style.title_pedidos_for_you}></Text>

                        {
                            tarefas.map((t, index) => {

                                if (t.status == 1) {
                                    return (
                                        <View style={style.cont_Task} key={index}>
                                            <Text>{t.id_task}</Text>
                                            <Text>Aberta: {t.horario_inicial}</Text>
                                            <Text>
                                                {t.descricao}
                                            </Text>

                                            <View style={style.cont_Btns}>
                                                <TouchableOpacity style={style.Btns_01} onPress={() => finalizarTask(t.id_task)}>
                                                    <Text style={style.txtBTN}>Finalizar</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={style.Btns_02} onPress={() => cancelarTask(t.id_task)}>
                                                    <Text style={style.txtBTN}>Cancelar</Text>

                                                </TouchableOpacity>

                                            </View>


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
