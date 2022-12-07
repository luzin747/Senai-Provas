// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// import { BsFillChatLeftDotsFill } from "react-icons/bs";

import style from '../../components/Header/styleH.js';

//CREEPER ICON HEADER
import creeper from '../Header/img/creeperIconBranco.png'

export default function Home() {
    return (
      <View style={style.container}>

        <Image style={style.imageStar} source="https://images6.alphacoders.com/108/1082090.jpg"/> 
        
        <View style={style.contTitleHeader}>

          {/* <View style={style.contImageTittle}> */}
          <Image style={style.imageIconCreeper} source={creeper}/> 
          <Text style={style.titleHeader}>RENASCRAFT</Text>
          <Image style={style.imageIconCreeper} source={creeper}/> 


          {/* </View> */}
            
          {/* <TouchableOpacity style={style.contImageAdd}>
            <Image style={style.imageAdd} source="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/add-43.png"/> 
          </TouchableOpacity> */}
        </View>

      </View>
    );
  }

  

