import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    container: {
        backgroundColor: '#23124'
    },
    ImageBackground: {
        flex: '1',
        resizeMode: 'cover',
        height: '100vh'
    },
    containerLogin: {
        backgroundColor: "#f3f5f7",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        borderRadius: '2%'
    },

    imgLogin: {
        width: 60,
        height: 60
    },
    titleLogin: {
        color: 'black',
        marginTop: '3%',
        fontWeight: 700,
        fontSize: '16pt'
    },
    inputs: {
        margin: 10,
        border: '1px solid rgba(0,0,0,.3)',
        padding: 4,
        paddingLeft: 5,
        width: '68vw',
        borderRadius: 20,

    },
    containerBtnLogin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#09ac24',
        color: 'white',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 40,
        marginTop: '3%'

    },
    titleBtnLogin: {
        color: 'white',
        fontWeight: 700,
    },

    creeperIcon: {
        marginLeft: 5,
        width: 10,
        height: 10,
        marginTop: 1
    },

    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
    },
    containerTitleFacaLogin: {
        marginTop: '7%'
    },

    iconIon: {
        margin: 4,
        fontSize: '15pt',
    }
    
})

