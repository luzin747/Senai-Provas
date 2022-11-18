const uriEditar = 'http://localhost:3000/registro_ticket/'
const uriDeletar = 'http://localhost:3000/carros'
const uriDeletarVagas = 'http://localhost:3000/vagas'


const uri = 'http://localhost:3000/mensalidades'

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

  var valorTotal = 0

    mensalistas.forEach(m => {

    var novoTrMensalistas = trMensalistas.cloneNode(true)

    novoTrMensalistas.classList.remove('model')

    valorTotal += m.valor_tot

    novoTrMensalistas.querySelector('.placa_veiculo').innerHTML = m.placa_car
    // novoTrMensalistas.querySelector('.nomeMensalista').innerHTML = 
    novoTrMensalistas.querySelector('.cpfMensalista').innerHTML = m.cpf_mensalista
    novoTrMensalistas.querySelector('.categoria').innerHTML = m.categoria_car
    novoTrMensalistas.querySelector('.valor_mensalidade').innerHTML = 'R$'+ m.valor_final +',00' 
    novoTrMensalistas.querySelector('.data_mensalidade').innerHTML = m.data_ent
    novoTrMensalistas.querySelector('.forma_pagamento').innerHTML = m.forma_pagamento



    document.querySelector('.contMensalistas').appendChild(novoTrMensalistas)

    })

    document.querySelector('.valor-total').innerHTML = valorTotal

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

  var id_ticket = e.parentNode.parentNode.querySelector('.idCli').innerHTML

  console.log(id_ticket)

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


function modalExcluir() {

  document.querySelector('body').style.background = '#5e5e5e27';

  var modalExcluir = document.querySelector('.modal-excluir')

  modalExcluir.classList.remove('model')
}

function esconderModalExcluir() {
  document.querySelector('body').style.background = '';

  var modalExcluir = document.querySelector('.modal-excluir')

  modalExcluir.classList.add('model')

  window.location.reload();

}



var search_btn = document.querySelector('.btn-filter')
const INPUT_BUSCA = document.querySelector('.search')
const TABELA_CLIENTES = document.querySelector('.contMensalistas')

search_btn.addEventListener('click', () => {

  let expressao = INPUT_BUSCA.value

  let linhas = TABELA_CLIENTES.getElementsByTagName('tr')

  for (let posicao in linhas) {
      if (true === isNaN(posicao)) {
          continue
      }

      let conteudoDaLinha = linhas[posicao].innerHTML

      if (true === conteudoDaLinha.includes(expressao)) {
          linhas[posicao].style.display = ''
      } else {
          linhas[posicao].style.display = 'none'

      }

  }

})
