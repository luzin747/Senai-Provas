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

        // ESTA A CAMINHO
        if (p.hora_entrega != "" && p.hora_fim == "") {

            console.log(p.hora_entrega);

            novoCardPedido.querySelector('.idPedido').innerHTML = p.id_pedido
            novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
            novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
            novoCardPedido.querySelector('.hora_entrega').innerHTML = "Saiu para entrega: " + p.hora_entrega

            novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
            novoCardPedido.querySelector('.cidade').innerHTML += p.cidade
            novoCardPedido.querySelector('.bairro').innerHTML = p.bairro
            novoCardPedido.querySelector('.produto').innerHTML = p.produto

            var teste = p.preco.toString()

            console.log(teste)
            if (teste.length <= 2) {
                console.log('ssssssssssss');
                novoCardPedido.querySelector('.preco_total').innerHTML = "R$ " + p.preco + '.00'

            }
            if (teste.length > 2) {
                console.log('ssssxcfdsfdsfsdfafsefssssssssss');

                novoCardPedido.querySelector('.preco_total').innerHTML = "R$ " + p.preco
            }
            novoCardPedido.querySelector('.qtd').innerHTML = p.quantidade + " u - "

            var PedidoEntregue = document.createElement('button')
            PedidoEntregue.innerHTML = "Pedido Entregue"
            PedidoEntregue.classList = 'btnPedidoEntregue'
            PedidoEntregue.setAttribute('onClick', 'pedidoEntregue(this)')
            novoCardPedido.appendChild(PedidoEntregue)
            document.querySelector('.caminho').appendChild(novoCardPedido)
        }

        if (p.hora_entrega == "" && p.hora_fim == "") {

            console.log('ssssss')
            novoCardPedido.querySelector('.idPedido').innerHTML = p.id_pedido
            novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
            novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
            novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
            novoCardPedido.querySelector('.cidade').innerHTML += p.cidade
            novoCardPedido.querySelector('.bairro').innerHTML = p.bairro
            novoCardPedido.querySelector('.produto').innerHTML = p.produto
            novoCardPedido.querySelector('.preco_total').innerHTML = "R$ " + p.preco
            novoCardPedido.querySelector('.qtd').innerHTML = p.quantidade + " u - "
            var entregaEnviar = document.createElement('button')
            entregaEnviar.innerHTML = "Enviar entrega"
            entregaEnviar.classList = 'btnEntrega'
            entregaEnviar.setAttribute('onClick', 'enviar(this)')
            novoCardPedido.appendChild(entregaEnviar)

            var cancelarEntrega = document.createElement('button')
            cancelarEntrega.innerHTML = "Cancelar pedido"
            cancelarEntrega.classList = 'btnCancelar'
            cancelarEntrega.setAttribute('onClick', 'cancelar(this)')
            novoCardPedido.appendChild(cancelarEntrega)


            document.querySelector('.andamento').appendChild(novoCardPedido)
        }


    })

}

function enviar(e) {
    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    horaAtual = hora + ':' + minutos + ":" + segundos;

    var idPedido = e.parentNode.querySelector('.idPedido').innerHTML
    console.log(idPedido)


    let options = JSON.stringify({
        "id_pedido": idPedido,
        "hora_entrega": horaAtual,
        "hora_fim": ""
    })

    fetch("http://localhost:3000/Pedidos", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Pedido enviado");
            window.location.reload()

        })
}

function pedidoEntregue(e) {
    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    horaAtual = hora + ':' + minutos + ":" + segundos;

    var idPedido = e.parentNode.querySelector('.idPedido').innerHTML
    var hora = e.parentNode.querySelector('.hora_pedido').innerHTML
    console.log(hora)

    let options = JSON.stringify({
        "id_pedido": idPedido,
        "hora_entrega": hora,
        "hora_fim": horaAtual
    })

    fetch("http://localhost:3000/Pedidos", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            alert("Pedido entregue");
            window.location.reload()

        })

}

function cancelar(e) {
    var idPedido = e.parentNode.querySelector('.idPedido').innerHTML

    const options = { method: 'DELETE' };

    fetch('http://localhost:3000/Pedidos/idDel/' + idPedido, options)
        .then(response => response.json())
        .then(response => {
            alert("Pedido cancelado");
            window.location.reload()
        })



}