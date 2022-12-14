// import { StatusBar } from 'expo-status-bar';]
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styleM from './styleM'

import iconCraft from './img/1.png'
import iconDicas from './img/4.png'
import iconMods from './img/2.png'
import iconBugs from './img/3.png'
import iconChat from './img/chatIcon.png'
import { ActivityIndicator } from 'react-native-web';
import { cos } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

export default function Main({ navigation }) {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/Perguntas', options)
      .then(res => { return res.json() })
      .then(data => {
        setQuestions(data);
      })
  }, []);
  

  const [respostas, setrespostas] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/Respostas', options)
      .then(res => { return res.json() })
      .then(data => {
        setrespostas(data);
      })
  }, []);
  


  const [usuarios, setUsuario] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/Usuarios', options)
      .then(res => { return res.json() })
      .then(data => {
        setUsuario(data);
      })
  }, []);
  



  const [id_user, setIdUser] = useState("");
  const [tema, setTema] = useState("");
  const [Pergunta, setPergunta] = useState("");

  const CadastrarResposta = async (id) => {
    // var hoje = new Date()
    // var dia = String(hoje.getDate()).padStart(2, '0')
    // var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    // var ano = hoje.getFullYear()

    // dataAtual = ano + '-' + mes + '-' + dia;

    console.log(id)

    let data = {
      "id_usuario": 3,
      "id_perg": id,
      "resposta": respostaInp,
      "dataResp": "2022-12-14"
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

//   const  CadastrarResposta = () => {
//     console.log(respostaInp)
//     console.log(pergunta)
// }



  return (
    <View>


      <View style={styleM.contTitle}>
        <Text style={styleM.title}>Últimas Perguntas</Text>
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
                      <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={() => CadastrarResposta(post.id_pergunta)} />
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

      <View style={styleM.contTitle}>
        <Text style={styleM.title}>Tópicos</Text>
      </View>

      <View>
        <View style={styleM.cardTopicsCrafts}>

          <Image style={styleM.imgIconTopic} source={iconCraft} />

          <View style={styleM.contTitleTopics}>
            <Text style={styleM.titleTopics}>CRAFTS</Text>
            <TouchableOpacity style={styleM.contTitleBtnConferir}><Text style={styleM.titleBtnConefrir}>CONFERIR</Text></TouchableOpacity>
          </View>


        </View>

        <View style={styleM.cardTopicsBugs}>

          <Image style={styleM.imgIconTopic} source={iconBugs} />

          <View style={styleM.contTitleTopics}>
            <Text style={styleM.titleTopics}>BUGS</Text>
            <TouchableOpacity style={styleM.contTitleBtnConferir}><Text style={styleM.titleBtnConefrir}>CONFERIR</Text></TouchableOpacity>
          </View>


        </View>

        <View style={styleM.cardTopicsDicas}>

          <Image style={styleM.imgIconTopic} source={iconDicas} />

          <View style={styleM.contTitleTopics}>
            <Text style={styleM.titleTopics}>Dicas</Text>
            <TouchableOpacity style={styleM.contTitleBtnConferir}><Text style={styleM.titleBtnConefrir} onPress={() => { navigation.navigate('Dicas') }}>CONFERIR</Text></TouchableOpacity>
          </View>


        </View>

        <View style={styleM.cardTopicsMods}>

          <Image style={styleM.imgIconTopic} source={iconMods} />

          <View style={styleM.contTitleTopics}>
            <Text style={styleM.titleTopics}>MODS</Text>
            <TouchableOpacity style={styleM.contTitleBtnConferir}><Text style={styleM.titleBtnConefrir}>CONFERIR</Text></TouchableOpacity>
          </View>


        </View>
      </View>

    </View >

  );
}






