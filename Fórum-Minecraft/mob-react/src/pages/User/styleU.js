import { StyleSheet } from 'react-native';



export default StyleSheet.create({ 
    
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

    userPng: {
        width: 60,
        height: 60,
        
    },

    contCardUser: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        margin: 10,
        boxShadow: '0px 0px 10px rgba(0,0,0,.5)',
        padding: 10
    },

    contNameUser: {
        marginLeft: 5,
        fontWeight: 600

    },
    contScroll: {
        height: '100vh'
    },

    
})

