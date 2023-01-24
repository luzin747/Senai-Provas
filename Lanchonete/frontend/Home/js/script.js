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

        novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
        novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
        novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
        novoCardPedido.querySelector('.produto').innerHTML = p.produto

        console.log(p.hora_fim)

        if (p.hora_entregue = "") {

            console.log('asasadada')
                        
            document.querySelector('.caminho').appendChild(novoCardPedido)

        }

        document.querySelector('.andamento').appendChild(novoCardPedido)

    })

}