import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScrollView, View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contInput} onPress={() => {navigation.navigate('Historico de Vacinas')}} >
                <Image style={styles.logo} source={{ uri: "https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/arquivo.png" }} />
                <Text style={styles.title}>Historico de Vacinas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contInput} onPress={() => {navigation.navigate('Registrar Vacinas')}}>
                <Image style={styles.logo} source={{ uri: "https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/vacinacao.png" }} />
                <Text style={styles.title}>Registrar Vacinas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#505050'
    },
    contInput: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        padding: '5px',
        width: 160,
        height: 160,
        margin: 10,
        borderRadius: 25,
        boxShadow: '0px 0px 20px rgba(0,0,0,.8)'

    },
    logo: {
        height: 55,
        width: 55,
        marginBottom: 35,
        marginTop: 15,
    },
    title: {
        fontSize: 14.5,
        fontWeight: 'bold',
        // marginBottom: '5px',
        color: '#8a66fa'
        
    },
    item: {
        margin: '15px'
    },
    texTitle: {
        color: 'black',
    }
})