// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
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

  const [respostas, setrespostas] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/Respostas', options)
      .then(res => { return res.json() })
      .then(data => {
        setrespostas(data);
      })
  }, [respostas]);
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



  const [id_user, setIdUser] = useState("");
  const [tema, setTema] = useState("");
  const [Pergunta, setPergunta] = useState("");

  const CadastrarResposta = async () => {
    // var hoje = new Date()
    // var dia = String(hoje.getDate()).padStart(2, '0')
    // var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    // var ano = hoje.getFullYear()

    // dataAtual = ano + '-' + mes + '-' + dia;

    let data = {
      "id_usuario": 3,
      "id_perg": 7,
      "resposta": respostaInp,
      "dataResp": "2022-12-13"
    }

    console.log(data)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(data);
    fetch("http://localhost:3000/Respostas", options)
      .then(resp => resp.status)
      .then(resp => {
        if (resp == 201) {

          alert('Resposta Cadastrada com sucesso')

          respostaInp = ''
        }
        else {
          console.log("Credeciais Incorretas")
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };


  const [respostaInp, setrespostaInp] = useState("");
  const [pergunta, setPerguntas] = useState("");

    return (

        <View>

            <Header/>

            <View style={styleM.contTitle}>
                <Text style={styleM.title}>Dicas!</Text>
            </View>

            <View style={styleM.contCardQuestions}>


                {
                    questions.map((post, indiceQuest) => {

                        return (
                          <View key={indiceQuest}
                          >
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
            
                                <View style={styleM.contInpResp}>
                                  <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" onChangeText={(value) => { setrespostaInp(value) }} />
                                  <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={CadastrarResposta} />
                                </View>
            
                                <ScrollView style={styleM.ScrollViewResp}>
                                  <View style={styleM.modalRespostas}>
                                    <Text style={styleM.titleModalRespostas}>RESPOSTAS</Text>
            
                                    {
                                      respostas.map((resp, index) => {
            
            
                                        if (post.id_pergunta == resp.id_perg) {
            
                                          return (
                                            <View key={index} style={styleM.containerAnswer}>
                                              <View style={styleM.userAnswer}>
                                                <Image style={styleM.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />
                                                <View>
            
                                                  {
                                                    usuarios.map((u, i) => {
                                                      if (resp.id_usuario == u.id_user) {
            
                                                        return (
                                                          <Text key={i} style={styleM.titleUserResp}>{u.nickname}</Text>
                                                        )
                                                      }
            
                                                    })
                                                  }
                                                  {/* <Text style={styleM.titleUserResp}>{resp.nickname}</Text> */}
                                                  <Text style={styleM.dataResp}>{resp.dataResp}</Text>
                                                </View>
            
                                              </View>
                                              <Text style={styleM.resposta}>{resp.resposta}</Text>
            
                                            </View>
                                          )
            
            
                                        }
                                      })
            
                                    }
            
            
                                  </View>
                                </ScrollView>
            
            
            
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
