// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Routes from '../../../../components/routes';


// import { BsFillChatLeftDotsFill } from "react-icons/bs";

import Header from '../../../../components/Header/header'
import styleM from './styleDicas'


export default function DicasPage({navigation}) {

    return (
        <View>
            <Header />

            <View style={styleM.contTitle}>
                <Text style={styleM.title}>Dicas</Text>
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
                    <View style={styleM.contSaveCurtir}>
                        <TouchableOpacity>
                            <Ionicons style={styleM.iconIon} name={'bookmark-outline'} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons style={styleM.iconIon} name={'heart-outline'} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styleM.contImageAdd}>
                        <Ionicons style={styleM.iconIonMoreAnswer} name={'chatbox-ellipses-outline'} />

                        {/* <Image style={styleM.imageAdd} source={iconChat}/>  */}
                    </TouchableOpacity>
                </View>

                <View style={styleM.modalRespostas}>
                    <Text style={styleM.titleModalRespostas}>RESPOSTAS</Text>
                </View>

            </View>

        </View>
            // <NavigationContainer>
            //     <Routes />
            // </NavigationContainer>




    );

}
