import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';
import * as React from 'react';


import Header from '../../../components/Header/header'
import style from './styleU'

import user from './img/user.png'

export default function UserPage() {
    return (
        
        <ScrollView>
            <View>
                <Header />


                <View style={style.contTitle}>
                    <Text style={style.title}>Moderadores</Text>
                </View>

                <View style={style.contCardUser}>
                    <Image source={user} style={style.userPng} />
                    <View>
                        <Text style={style.contNameUser}>RENAS ALA PANDA</Text>
                    </View>
                </View>

                <View style={style.contTitle}>
                    <Text style={style.title}>Usuarios</Text>
                </View>


                <View style={style.contCardUser}>
                    <Image source={user} style={style.userPng} />
                    <View>
                        <Text style={style.contNameUser}>RENAS ALA PANDA</Text>
                    </View>
                </View>

                <View style={style.contCardUser}>
                    <Image source={user} style={style.userPng} />
                    <View>
                        <Text style={style.contNameUser}>RENAS ALA PANDA</Text>
                    </View>
                </View>

                <View style={style.contCardUser}>
                    <Image source={user} style={style.userPng} />
                    <View>
                        <Text style={style.contNameUser}>RENAS ALA PANDA</Text>
                    </View>
                </View>

                <View style={style.contCardUser}>
                    <Image source={user} style={style.userPng} />
                    <View>
                        <Text style={style.contNameUser}>RENAS ALA PANDA</Text>
                    </View>
                </View>

            </View>
        </ScrollView>


    );

}
