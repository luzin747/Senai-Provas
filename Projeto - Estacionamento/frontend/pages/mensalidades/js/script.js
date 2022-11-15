const uri = 'http://localhost:3000/ticket_pagos'

var mensalistas = []

var trMensalistas = document.querySelector('.mensalistas')

function carregar() {

    const options = {method: 'GET'};

    fetch(uri, options)
      .then(res => res.json())
      .then(res => {
        mensalistas = res;
            preencherTabelaMensalidades();
      }
        )
      .catch(err => console.error(err));
 

}

function preencherTabelaMensalidades() {


    mensalistas.forEach(m => {

    var novoTrMensalistas = trMensalistas.cloneNode(true)

    novoTrMensalistas.classList.remove('model')

    novoTrMensalistas.querySelector('.idCli').innerHTML = m.ticket_id
    novoTrMensalistas.querySelector('.number_vaga').innerHTML = m.number_vaga
    // novoTrMensalistas.querySelector('.nomeMensalista').innerHTML = 
    novoTrMensalistas.querySelector('.cpfMensalista').innerHTML = m.cpf_cliente
    novoTrMensalistas.querySelector('.categoria').innerHTML = m.categoria_vaga
    novoTrMensalistas.querySelector('.valor_mensalidade').innerHTML = 'R$'+ m.valor_final +',00' 
    novoTrMensalistas.querySelector('.data_mensalidade').innerHTML = m.data_est
    novoTrMensalistas.querySelector('.forma_pagamento').innerHTML = m.forma_pagamento

    document.querySelector('.contMensalistas').appendChild(novoTrMensalistas)

    })

    document.querySelector('.qtd-cliente-pagos').innerHTML = mensalistas.length

}