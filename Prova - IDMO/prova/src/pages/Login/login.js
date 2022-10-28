import { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,Image, Touchable, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
    const [email, setEmail] = useState("user01@empresa.com");
    const [password, setPassword] = useState("teste1234");

    const users = [
        {
            "email":"fulano@gmail.com",
            "senha":"umdoistresquatro",
        },
        {
            "email":"beltrano@ig.com.br",
            "senha":"s3nh4",
        }
    ]

    return(
        <View style={styles.main}>

            <Image style={styles.logo} source={{uri:"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/dog.png"}} />

            <TextInput style={styles.input} placeholder='Informe o email' onChangeText={(value) => {setEmail(value)}} />
            <TextInput style={styles.input} placeholder='Informe sua senha' onChangeText={(value) => {setPassword(value)}} />

            <TouchableOpacity style={styles.Button} title="Login" onPress={() => {
                users.forEach(user => {
                    if(user.email === email && user.senha === password)  {
                        navigation.navigate("Home");

                    }
                 })
            }}>
                <Text style={styles.textButton}>Conectar</Text>
            </TouchableOpacity>
        </View>
    )

    
}




const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#505050'
    },
    logo: {
        height: 250,
        width: 250,
        marginBottom: 50,
        
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        shadowOffset: {width: 0, height: 1},
        boxShadow: '0px 0px 15px rgba(0,0,0,.5)',
        shadowOpacity: 3,
        marginBottom: 20
    },
    Button: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#8A66FA',
        borderRadius: 5,

    },
    textButton: {
        color: 'white',
        fontWeight: 700,
        fontSize: 20,
        paddingTop: '10px',
        paddingBottom: '10px',
    }
})