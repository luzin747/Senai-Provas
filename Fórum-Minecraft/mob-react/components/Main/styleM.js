import { StyleSheet } from 'react-native';



export default StyleSheet.create({ 
    
    container: {
        fontFamily: 'Poppins',
    },
    
    contTitle: {
        backgroundColor: '#212124',
        margin: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 6
    },
    title: {
        fontWeight: 500,
        fontSize:22, 
        color: 'white',
        padding: 5,
        fontWeight: 700,

    },

    contCardQuestions: {
        boxShadow: "0px 0px 3px black",
        margin: 10,
        padding: 4
    },

    cardQuestions: {
        display: 'flex',
        flexDirection: 'row',
  
    },

    imgUser: {
        marginRight: 5,
        width: 50,
        height: 50,
        borderRadius: 10
    },


    inpResp: {
        border: '1px solid rgba(0,0,0,.5)',
        width: '80%',
        marginTop: '3%',
        borderRadius: 15,
        marginLeft: '10%',
        padding: 2,
        paddingLeft: 10

    },
    containerSaveViewAnswer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 12,

    },

    contSaveCurtir: {
        display: 'flex',
        flexDirection: 'row'
    },

    iconIon: {
        fontSize: 22,
        marginLeft: 5,
        marginRight: 5,
    },

    iconIonMoreAnswer: {
        fontSize: 25,
        marginLeft: 5,
        marginRight: 5,
    },
    cardTopicsCrafts: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10 ,
        marginLeft: '14%',
        width: '75%',
        boxShadow: '0px 0px 3px #87653C',
        backgroundColor: '#87653C',
        borderRadius: 5
        
    },

    cardTopicsDicas: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10 ,
        marginLeft: '14%',
        width: '75%',
        boxShadow: '0px 0px 3px #342B6E',
        backgroundColor: '#342B6E',
        borderRadius: 5
        
    },

    cardTopicsBugs: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10 ,
        marginLeft: '14%',
        width: '75%',
        boxShadow: '0px 0px 3px #9D3AB4',
        backgroundColor: '#9D3AB4',
        borderRadius: 5
        
    },

    cardTopicsMods: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10 ,
        marginLeft: '14%',
        width: '75%',
        boxShadow: '0px 0px 3px #006D70',
        backgroundColor: '#006D70',
        borderRadius: 5
        
    },
    contTitleTopics: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '15%',
    },

    imgIconTopic: {
        margin: 8,
        width: 100,
        height: 100
    },
    titleTopics: {
        fontWeight: 700,
        color: 'white',
        fontSize: 16
    },
    contTitleBtnConferir: {
        border: '1px solid white',
        padding: 3,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,

    },
    titleBtnConefrir: {
        color: 'white',

    },

    modalRespostas: {
        backgroundColor: '#212124',
        padding: 2,
        marginTop: 7
    },
    titleModalRespostas: {
        fontSize: 17,
        textAlign: 'center',
        color: 'white',
        fontWeight: 500
    },
    containerAnswer: {
        backgroundColor: '#515153',
        margin: '2px',
        padding: 5
    },
    userAnswer: {
        display: 'flex',
        flexDirection: 'row'
    },

    
})

