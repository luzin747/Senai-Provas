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
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.5)',
        padding: 4,
        paddingLeft: 5,
        width: '78vw',

    },
    
    containerBtnLogin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#09ac24',
        color: 'white',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        paddingRight: 15,
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

