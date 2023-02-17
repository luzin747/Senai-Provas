var urlPedidos = 'http://localhost:3000/Pedidos'
var relatorio = []
var cardPedido = document.querySelector('.pedidos')
function carregar() {
    const options = { method: 'GET' };
    fetch(urlPedidos, options)
        .then(res => res.json())
        .then(res => {
            relatorio = res;
            preencher();
        })
}


function preencher() {
    var valorTotal = 0    
    
    relatorio.forEach(r => {
        var lista = cardPedido.cloneNode(true)
        lista.classList.remove('model')
        if (r.hora_fim != "") {
            lista.querySelector('.idPedido').innerHTML += r.id_pedido            
            lista.querySelector('.nome_cliente').innerHTML += r.cliente            
            lista.querySelector('.hora_pedido').innerHTML += r.hora_pedido            
            lista.querySelector('.hora_entrega').innerHTML = "Entrega: " + r.hora_entrega            
            lista.querySelector('.endereco').innerHTML += r.endereco            
            lista.querySelector('.cidade').innerHTML += r.cidade            
            lista.querySelector('.bairro').innerHTML = r.bairro           
             lista.querySelector('.produto').innerHTML = r.produto            
             lista.querySelector('.preco_total').innerHTML += "R$ " + r.preco            
             lista.querySelector('.qtd').innerHTML += r.quantidade + " u - "            
             
             var total2 = valorTotal += r.preco            
            document.querySelector('.totalDia').innerHTML = "Total: R$" + Math.round(total2)   
            document.querySelector('.cont-pedido').appendChild(lista)
        }
    })
}


function teste() {
    alert('a')
}