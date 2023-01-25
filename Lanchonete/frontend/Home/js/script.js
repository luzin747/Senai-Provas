var urlPedidos = 'http://localhost:3000/Pedidos'

var pedidos = []

var cardPedido = document.querySelector('.pedido')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlPedidos, options)
        .then(res => res.json())
        .then(res => {
            pedidos = res;
            preencher();
        }
        )
        .catch(err => console.error(err));
}



function preencher() {

    pedidos.forEach(p => {

        var novoCardPedido = cardPedido.cloneNode(true)

        novoCardPedido.style.display = 'block'

        if(p.hora_entrega != "") {
            novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
            novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
            novoCardPedido.querySelector('.hora_entrega').innerHTML = p.hora_entrega
            novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
            novoCardPedido.querySelector('.produto').innerHTML = p.produto
    
            document.querySelector('.caminho').appendChild(novoCardPedido)
        }
        
        if(p.hora_entrega == " ") {

            console.log('ssssss')
            novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
            novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
            var teste = document.querySelector('.saiu_entrega_andamento')
            teste.style.display = 'none'
            novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
            novoCardPedido.querySelector('.produto').innerHTML = p.produto
    
            document.querySelector('.andamento').appendChild(novoCardPedido)
        }
      

    })

}