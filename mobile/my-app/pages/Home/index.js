import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ImageBackground, DataPi } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './style';

// import Home from '../Home/HomePage'

export default function Home({ navigation }) {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('Atualizando a Lista')
    //         listarProdutos()
    //     }, 1500)
    // }, [])

    // const [pedidos, setPedidos] = useState([]);

    // const listarProdutos = () => {
    //     fetch('http://10.87.207.23:3000/Pedidos')
    //         .then(res => { return res.json() })
    //         .then(data => {
    //             setPedidos(data);
    //         })
    // };

    // const PedidoEntregue = async (id) => {
    //     console.log(id)

    //     let data = {
    //       "id_usuario": 3,
    //       "id_perg": id,
    //       "resposta": respostaInp,
    //       "dataResp": "2022-12-14"
    //     }

    //     console.log(data)
    //     const options = {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' }
    //     };
    //     options.body = JSON.stringify(data);
    //     fetch("http://localhost:3000/Respostas", options)
    //       .then(resp => resp.status)
    //       .then(resp => {
    //         if (resp == 201) {

    //           alert('Pedido Entregue com Sucesso')
    //         }
    //         else {
    //           console.log("Erro Pedido")
    //         }
    //       })
    //       .catch((error) => {
    //         console.log('error', error);
    //       });
    //   };

    const [id_user, setIdUser] = useState("");
    const [tema, setTema] = useState("");
    const [Pergunta, setPergunta] = useState("");

    const [value, onChangeText] = React.useState("");

    const [selectedValue, setSelectedValue] = useState("");

    const Cadastrar = async () => {

        var horaAtual
        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()

        var hora = String(hoje.getHours() + 0).padStart(2, '0')
        var minuto = String(hoje.getMinutes() + 0).padStart(2, '0')

        horaAtual = hora + ':' + minuto;

        console.log(value)

        let data = {
            "descricao": value,
            "horario_inicial": horaAtual,
            "horario_final": null,
            "status": 1
        }

        console.log(data)

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(data);
        fetch("http://localhost:3000/Tarefas", options)
            .then(resp => {
                if (resp.status == 200) {

                    alert('Task Cadastrada com sucesso')
                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };


    return (
        <View style={style.container}>
            <View style={style.containerHome}>
                <View style={style.contTitle}>
                    <Text style={style.title} >Tasks Home</Text>

                </View>

                <View>
                    <Text style={style.title_pedidos_for_you}>Nova Tasks</Text>

                    <TextInput
                        style={style.txtInput}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />


                    <TouchableOpacity style={style.btnAdicionarTask} onPress={Cadastrar}>
                        <Text style={style.txtAdicionarTaks}>Adicionar Tarefa</Text>
                    </TouchableOpacity>


                </View>


                <View>
                    
                </View>



            </View>
        </View>

    );

}
