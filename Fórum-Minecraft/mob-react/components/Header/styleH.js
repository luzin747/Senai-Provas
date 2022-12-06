import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    container: {
        backgroundColor: '#23123'
    },

    imageStar: {
        width: "100%",
        height: "25vh",
        
    },
    titleHeader: {
        color: 'white',
        fontWeight: 700,
        fontSize: 33,
    },
    contTitleHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: "#212124",
        top: -20,
        padding: 5
    },

    contImageTittle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageIconCreeper: {
        width: "12%",
        height: "3.5vh",
        marginRight: 10,
    },
    contImageAdd: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 6,
        paddingRight: 6,
        marginTop: 5
    },
    imageAdd: {
        width: 33,
        height : 30,
    }
    
})

