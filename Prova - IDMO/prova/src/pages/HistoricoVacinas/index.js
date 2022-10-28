import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HistoricoVacinas({ navigation, route }) {
    const [busca, setBusca] = useState("");


    var data 
    
    var resp = []

    var acertos = 0

    const ler = async() => {
        try{
            const val = await AsyncStorage.getItem('Regist')
            var teste = val != null ? JSON.parse(val) : null;
            data = teste

            console.log(val)

            historicos.push(data)
        }catch(err) {
            console.log(err)
        }
    }


    const historicos = [


        {
            "PET": "bichano",
            "Veterinário": "fulano",
            "Vacina": "vacinarius",
            "data": "27/10/2022",
        },
        {
            "PET": "fofurinha",
            "Veterinário": "beltrano",
            "Vacina": "vacininha",
            "data": "28/10/2022",
        },
        {
            "PET": "raivoso",
            "Veterinário": "fulano",
            "Vacina": "vacinarius",
            "data": "30/05/2023",
        },
        




    ]

    return (
        <View style={styles.container}>

            <TextInput placeholder='Digite para Buscar...' style={styles.input} onChangeText={(value) => setBusca(value)} />
            {
                historicos.map((item, index) => {
                    if (item.PET.toLowerCase().includes(busca.toLowerCase())) {
                        return (
                               <View style={styles.cards} key={index}>

                                <Text style={styles.texto}>PET : {item.PET}</Text>
                                <Text style={styles.texto}>Veterinario : {item.Veterinário}</Text>
                                <Text style={styles.texto}>Vacina : {item.Vacina}</Text>
                                <Text style={styles.texto}>Data : {item.data}</Text>
                            </View>
                        )
                    }

                })
            }
            {/* <TouchableOpacity placeholder='Ver no Console' style={styles.input} onPress={() => ler()} /> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#505050',
        paddingTop: 30

    },
    contInput: {
        backgroundColor: 'white',
        padding: '25px',
        height: 150,
        margin: 10,

    },
    logo: {
        height: 70,
        width: 70,
        marginBottom: 10,
        marginLeft: 30
    },
    title: {
        fontSize: '1.05rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    item: {
        margin: '15px'
    },
    texTitle: {
        color: 'black',
    },
    input: {
        width: "85%",
        height: 40,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        // shadowColor: "#7242F5",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        marginBottom: 20,
    },
    button: {
        width: "70px",
        marginLeft: 55
    },

    cards: {
        width: '90%',
        boxShadow: '0px 0px 10px rgba(0,0,0,.9)',
        padding: 10,
        marginBottom: 20
    },
    texto: {
        color: 'white',
        fontSize: 15
    }
})