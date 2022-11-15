const uriEditar = 'http://localhost:3000/registro_ticket/'
const uriDeletar = 'http://localhost:3000/carros'
const uriDeletarVagas = 'http://localhost:3000/vagas'


const uri = 'http://localhost:3000/ticket_pagos'

var mensalistas = []

var tickets = []
var nomeClientes = []
var clientes = []
var nomeCliente = [] 

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
    novoTrMensalistas.querySelector('.placa_veiculo').innerHTML = m.placa_carro
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


function deletarPlaca(e) {

  var placa_cara = e.parentNode.parentNode.querySelector('.placa_veiculo').innerHTML
  
  let data = {
    "placa": placa_cara
    
};


fetch(uriDeletar, {
    "method":"DELETE",
    "headers": {
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(data)
})
.then(res => { return res.json() })
    .then(resp => {
        if (resp.placa !== undefined) {

          deletarRegistro(e)
        }
    })


}

function deletarRegistro(e) {

  var id_ticket = e.parentNode.parentNode.querySelector('.id_registro').innerHTML

  let data = {
    "ticket_id": id_ticket
    
};


fetch(uriEditar, {
    "method":"DELETE",
    "headers": {
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(data)
})
.then(res => { return res.json() })
    .then(resp => {
        if (resp.ticket_id !== undefined) {

          deletarVaga(e)
        }
    })



}

function deletarVaga(e) {
  var num_vaga = e.parentNode.parentNode.querySelector('.vagas').innerHTML

  console.log(' Numero Vaga' + num_vaga)

  let data = {
    "numero_vaga": num_vaga
    
  };
  console.log(data)

fetch(uriDeletarVagas, {
    "method":"DELETE",
    "headers": {
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(data)
})
.then(res => { return res.json() })
    .then(resp => {
        if (resp.numero_vaga !== undefined) {
          modalExcluir()
        }
    })
}
