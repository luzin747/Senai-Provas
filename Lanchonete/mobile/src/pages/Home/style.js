import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    
    ImageBackground: {
        flex: '1',
        resizeMode: 'cover',
    },

    container: {
        height: '100%',
        backgroundColor: "#212124",
    },
    containerHome: {
        backgroundColor: "#fff",
        display: 'flex',
        // alignItems: 'center',
        height: '100%',
        margin: '2%',
        padding: 10,
        borderRadius: '1%'
    },

    contTitle: {
        margin: 0,
    },

    title: {
        fontSize:25,
        textAlign: 'center'
    },

    title_pedidos_for_you: {
        fontSize: 17,
        marginTop: 20,
    },

    pedidos: {
        marginTop: 10,
        boxShadow: '0px 0px 10px rgba(0,0,0,.3)',
        padding: 5,
    },

    cliente_details: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 3,
    },

    cliente_details_title: {
        fontWeight: 'bold',
        marginRight: 5,
        marginLeft: 5
    },
    cont_cliente_details_pedido: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 8
    },

    cliente_details_pedido: {
        display: 'flex',
        flexDirection: 'Colum',
       
    },
    cliente_details_pedido_title: {
        fontWeight: 'bold',
    },
    cliente_details_pedido_preco: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid rgba(0,0,0,.1)',
        padding: 5
       
    },

    btn_entrega: {
        backgroundColor: '#dd3507',
        marginTop: 10,
        borderRadius: 5
    },

    title_btn_entrega: {
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    }
   
    
})

