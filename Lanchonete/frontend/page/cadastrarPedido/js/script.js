function carregar(){
    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()
    dataAtual = ano + '-' + mes + '-' + dia;

    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    horaAtual = hora + ':' + minutos + ":" + segundos;

    document.querySelector(".dia").value = dataAtual
    document.querySelector(".hora_pedido").value = horaAtual

    let inpDia2 = document.querySelector(".dia")
    inpDia2.disabled = true

    let inptHora = document.querySelector(".hora_pedido")
    inptHora.disabled = true


}


function calcularPedido(){
    var select_produto = document.querySelector(".select_produto")
    let seleStatus = select_produto.options[select_produto.selectedIndex].value;
    if (seleStatus == 'selecionar') {var preco = '0'}
    if (seleStatus == 'refrigerante') { var preco = '5.00'}
    if (seleStatus == 'suco') { var preco = '6.00'}
    if (seleStatus == 'guaravita') { var preco = '5.00'}
    if (seleStatus == 'x-burguer') { var preco = '14.99'}
    if (seleStatus == 'x-bacon') { var preco = '18.99'}
    if (seleStatus == 'x-egg') { var preco = '16.99'}
    if (seleStatus == 'x-tudo') { var preco = '21.99'}
    if (seleStatus == 'x-frango') { var preco = '18.99'}
    let quantidade = document.querySelector(".quantidade").value;
    document.querySelector(".preco").value =  preco * quantidade ;
}

function cad() {
    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()
    dataAtual = ano + '-' + mes + '-' + dia;

    var hoje = new Date();
    var hora = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    horaAtual = hora + ':' + minutos + ":" + segundos;

    let cliente = document.querySelector(".cliente").value;
    let endereco = document.querySelector(".endereco").value;
    let bairro = document.querySelector(".bairro").value;
    let cidade = document.querySelector(".cidade").value;
    let quantidade = document.querySelector(".quantidade").value;
    let preco = document.querySelector(".preco").value;


    // let produto = document.querySelector(".produto").value;
    var select_produto = document.querySelector(".select_produto")
    let seleStatus = select_produto.options[select_produto.selectedIndex].value;
    if (seleStatus == 'refrigerante') { var produto = 'Refrigerante - Lata'}
    if (seleStatus == 'suco') { var produto = 'Suco de Laranja' }
    if (seleStatus == 'guaravita') { var produto = 'Guaravita - 500ml' }
    if (seleStatus == 'x-burguer') { var produto = 'X-Burguer' }
    if (seleStatus == 'x-egg') { var produto = 'X-Egg' }
    if (seleStatus == 'x-bacon') { var produto = 'X-Bacon' }
    if (seleStatus == 'x-tudo') { var produto = 'X-Tudo' }
    if (seleStatus == 'x-frango') { var produto = 'X-Frango' }

   
    var select_entregador = document.querySelector(".select_entregador")
    let seleEntregador = select_entregador.options[select_entregador.selectedIndex].value;
    if (seleEntregador == '1') { var entregador = '1'}
    if (seleEntregador == '2') { var entregador = '2'}
    if (seleEntregador == '3') { var entregador = '3'}
    if (seleEntregador == '4') { var entregador = '4'}

        let options = JSON.stringify({
            "cliente": cliente,
            "endereco": endereco,
            "bairro":bairro,
            "cidade":cidade,
            "produto": produto,
            "quantidade":quantidade,
            "preco":preco,
            "dia": dataAtual,
            "hora_pedido": horaAtual,
            "hora_entrega": "",
            "hora_fim": "",
            "entregador": entregador
        })

        fetch("http://localhost:3000/Pedidos", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": options
        })
            .then(resp => { return resp })
            .then(resp => {
                if(resp.produto == null || resp.cliente == null ||
                    resp.endereco == null || resp.quantidade == null || resp.entregador == null){
                    alert("Por favor, preencher todos os campos")
                }else{
                    alert("Seu pedido esta sendo preparado")
                    window.location.href = "../../Home/index.html"
                }
                
            })
    

}