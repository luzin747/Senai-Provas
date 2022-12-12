// import { StatusBar } from 'expo-status-bar';]
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
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

export default function Main({navigation}) {

  

  // useEffect(() =>{
  //   fetch("http://localhost:3000/Perguntas")
  //   .then(res => { return res.json()})
  //   .then(data => {
  //     data = data.results;
  //     setPosts(data)
  //   })
  // },[posts]);
  // useEffect(() =>{
  // }, []);
  // const [posts, setPosts] = useState([]);




  return (
    <View>


      <View style={styleM.contTitle}>
        <Text style={styleM.title}>Últimas Perguntas</Text>
      </View>

      <View style={styleM.contCardQuestions}>

        <View style={styleM.cardQuestions}>
          <Image style={styleM.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />

          <View>
            <Text>Fulano da Silva</Text>
            <Text>Tema: Crafts</Text>
          </View>


        </View>

        <Text>loremasdadadsadadasdsadsadsada</Text>

        <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" />


        <View style={styleM.containerSaveViewAnswer}>
          {/* <View style={styleM.contSaveCurtir}>
            <TouchableOpacity>
              <Ionicons style={styleM.iconIon} name={'bookmark-outline'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons style={styleM.iconIon} name={'heart-outline'} />
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity style={styleM.contImageAdd} onPress={teste}>
            <Ionicons style={styleM.iconIonMoreAnswer} name={'chatbox-ellipses-outline'} />

            {/* <Image style={styleM.imageAdd} source={iconChat}/>  */}
          </TouchableOpacity>
        </View>

        <View style={styleM.modalRespostas}>
          <Text style={styleM.titleModalRespostas}>RESPOSTAS</Text>

          <View style={styleM.containerAnswer}>
            <View style={styleM.userAnswer}>
              <Image style={styleM.imgUser} source="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />
              <View>
                <Text>Fulano</Text>
                <Text>loremasdadadsadadasdsadsadsadassadad</Text>
              </View>
             


            </View>
            <Text>asdadadsadsadsadsadsadswd</Text>  

          </View>
        </View>

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
            <TouchableOpacity style={styleM.contTitleBtnConferir}><Text style={styleM.titleBtnConefrir} onPress={() => {navigation.navigate('Dicas')}}>CONFERIR</Text></TouchableOpacity>
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
      
    


    </View>

  );
}

function teste() {
  console.log('asdad')
}





