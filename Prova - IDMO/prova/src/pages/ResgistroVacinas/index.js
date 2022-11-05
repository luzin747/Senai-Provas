
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Registro({ navigation }) {

    

    const [nome, setNome] = useState("");
    const [medicoVeterinario, setMedicoVeterinario] = useState("");
    const [nomeVacina, setNomeVacina] = useState("");
    const [dataAplicacao, setdataAplicacao] = useState("");
    


    
    const salvar = async () => {
        
        var val = []
        
        var testando = [
            {
                'PET': nome,
                'Veterinário': medicoVeterinario,
                'Vacina': nomeVacina,
                'data': dataAplicacao

            }
        ]

        try {
            val.push(testando)
            const jsonValue = JSON.stringify(val)
            await AsyncStorage.setItem('Regist', jsonValue)
  
            console.log(val)
          } catch(err) {
            console.log(err)
          }
        }
    
    
    
    return (
        <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Nome do Pet' onChangeText={(value) => {setNome(value)}} />
        <TextInput style={styles.input} placeholder='Nome do Medico Veterinario' onChangeText={(value) => {setMedicoVeterinario(value)}} />
        <TextInput style={styles.input} placeholder='Nome da Vacina' onChangeText={(value) => {setNomeVacina(value)}} />
        <TextInput style={styles.input} placeholder='Data da Aplicação' onChangeText={(value) => {setdataAplicacao(value)}} />


        

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Historico de Vacinas', salvar())}}>
            <Text style={styles.Textbutton}>Registrar</Text>
        </TouchableOpacity>
            
        </View>
    );
}

function mostrar() {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
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
        width: "70%",
        height: 45,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        // shadowColor: "#7242F5",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        marginBottom: 20,
        marginLeft: 55
    },
    button: {
        width: "70px",
        marginLeft: 55,
        textAlign: 'center',
        backgroundColor: '#8a66fa',
        width: '70%',
        padding: 11,
        borderRadius: 5

    },
    Textbutton: {
        color:'white',
        fontWeight: 700,
        fontSize: 20
    }
})