// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';


import Header from '../../../components/Header/header'
import styleM from './styleTopics'


var i = 0




export default function TopicsPage({navigation}) {


    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/tema/dicas', options)
            .then(res => { return res.json() })
            .then(data => {
                setQuestions(data);

            })
    }, []);
    
    console.log(questions)


    const [questionsCrafts, setQuestionsCrafts] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/tema/crafts', options)
            .then(res => { return res.json() })
            .then(data => {
                setQuestionsCrafts(data);
            })
    }, [questions]);
    


    const [questionsBugs, setQuestionsBugs] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/tema/bugs', options)
            .then(res => { return res.json() })
            .then(data => {
                setQuestionsBugs(data);
            })
    }, []);
    


    const [questionsMods, setQuestionsMods] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('http://localhost:3000/tema/bugs', options)
            .then(res => { return res.json() })
            .then(data => {
                setQuestionsBugs(data);
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
   

    const [respostaDicas, setrespostaDicas] = useState("");
    const [respostaCrafts, setrespostaCrafts] = useState("");
    const [respostaMods, setrespostaMods] = useState("");
    const [respostaBugs, setrespostaBugs] = useState("");


    const [id_user, setIdUser] = useState("");
    const [tema, setTema] = useState("");
    const [Pergunta, setPergunta] = useState("");


    const  CadastrarResposta = () => {
        navigation.navigate("Home")
    }

    const CadastrarRespostaDicas = async (id) => {

        var dataAtual 

        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()
    
        dataAtual = ano + '-' + mes + '-' + dia;
       

        let data = {
            "id_pergunta": id,
            "id_usuario": 3,
            "id_perg": 4,
            "resposta": respostaDicas,
            "dataResp": dataAtual
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
                    window.location.reload()

                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const CadastrarRespostaCrafts = async (id) => {

        var dataAtual 

        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()
    
        dataAtual = ano + '-' + mes + '-' + dia;
       

        let data = {
            "id_usuario": 2,
            "id_perg": id,
            "resposta": respostaCrafts,
            "dataResp": dataAtual
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

                   location.reload()

                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const CadastrarRespostaBugs = async (id) => {

        var dataAtual 

        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()
    
        dataAtual = ano + '-' + mes + '-' + dia;
       

        let data = {
            "id_usuario": 2,
            "id_perg": id,
            "resposta": respostaBugs,
            "dataResp": dataAtual
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

                    window.location.reload()

                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const CadastrarRespostaMods = async (id) => {

        var dataAtual 

        var hoje = new Date()
        var dia = String(hoje.getDate()).padStart(2, '0')
        var mes = String(hoje.getMonth() + 1).padStart(2, '0')
        var ano = hoje.getFullYear()
    
        dataAtual = ano + '-' + mes + '-' + dia;
       

        let data = {
            "id_usuario": 2,
            "id_perg": id,
            "resposta": respostaMods,
            "dataResp": dataAtual
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

                    window.location.reload()

                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <ScrollView>

            <View>
                <Header />

                {/*******************  SESSÃO DICAS **********************/}

                <View style={styleM.contTitle}>
                    <Text style={styleM.title}>Dicas!</Text>
                </View>

                <ScrollView style={styleM.containerTopics}>


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
                                                    <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" onChangeText={(value) => { setrespostaDicas(value) }} />
                                                    <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={() => CadastrarRespostaDicas(post.id_pergunta)} />
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

                </ScrollView>

                {/*******************  FIM SESSÃO DICAS ********************/}


                {/*******************  SESSÃO CRAFTS **********************/}
                <View style={styleM.contTitle}>
                    <Text style={styleM.title}>Crafts!</Text>
                </View>

                <ScrollView style={styleM.containerTopics}>

                    <View style={styleM.contCardQuestions}>


                        {
                            questionsCrafts.map((post, indiceQuest) => {

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
                                                    <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" onChangeText={(value) => { setrespostaCrafts(value) }} />
                                                    <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={() => CadastrarRespostaCrafts(post.id_pergunta)} />
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

                </ScrollView>

                {/*******************  FIM SESSÃO CRAFTS ********************/}


                {/*******************  SESSÃO BUGS **********************/}
                <View style={styleM.contTitle}>
                    <Text style={styleM.title}>Bugs!</Text>
                </View>

                <ScrollView style={styleM.containerTopics}>

                    <View style={styleM.contCardQuestions}>


                        {
                            questionsBugs.map((post, indiceQuest) => {

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
                                                    <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" onChangeText={(value) => { setrespostaBugs(value) }} />
                                                    <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={() => CadastrarRespostaBugs(post.id_pergunta)} />
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

                </ScrollView>

                {/*******************  FIM SESSÃO BUGS ********************/}

                {/*******************  SESSÃO Mods **********************/}
                <View style={styleM.contTitle}>
                    <Text style={styleM.title}>Mods!</Text>
                </View>

                <ScrollView style={styleM.containerTopics}>

                    <View style={styleM.contCardQuestions}>


                        {
                            questionsMods.map((post, indiceQuest) => {

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
                                                    <TextInput style={styleM.inpResp} placeholder="Insira sua Resposta" onChangeText={(value) => { setrespostaMods(value) }} />
                                                    <Ionicons style={styleM.iconIon} name={'arrow-forward-circle-outline'} onPress={CadastrarRespostaMods(post.id_pergunta)} />
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

                </ScrollView>

                {/*******************  FIM SESSÃO Mods ********************/}







            </View>

        </ScrollView>
    );

}

