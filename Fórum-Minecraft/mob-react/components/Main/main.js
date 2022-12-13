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

export default function Main({ navigation }) {

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/Feed', options)
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


      <View style={styleM.contTitle}>
        <Text style={styleM.title}>Últimas Perguntas</Text>
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
                            if(post.id_User == u.id_user) {
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

function teste() {
  console.log('asdad')
}





