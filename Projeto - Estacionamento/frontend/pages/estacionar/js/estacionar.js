const uri = 'http://localhost:3000/vw_estacionar'
const uriEditar = 'http://localhost:3000/vw_estacionar'
const uriClientes = 'http://localhost:3000/clientes/vw_clientes'
const uriDeletar = 'http://localhost:3000/carros'
const uriDeletarVagas = 'http://localhost:3000/vagas'

var  estacionaTalbe = document.querySelector('.tickets')
var tickets = []
var nomeClientes = []

function carregar() {

    const options = {method: 'GET'};

    fetch(uri, options)
      .then(res => res.json())
      .then(res => {
        tickets = res;
            preencherTela();
      }
        )
      .catch(err => console.error(err));

      fetch(uriEditar, options)
      .then(res => res.json())
      .then(res => {
        clientes = res;
        editarCliente();
      }
        )
      .catch(err => console.error(err));

      fetch(uriClientes, options)
      .then(res => res.json())
      .then(res => {
        nomeClientes = res;
        editarCliente();
      }
        )
      .catch(err => console.error(err));

}

var qtdAbertos = 0
var qtdFechados = 0

function preencherTela() {
    tickets.forEach(e => {

      if(e.status_pag == 'Aberto') {
        qtdAbertos += 1
      }else if(e.status_cli == 'Pagos') {
        qtdFechados += 1
      }

        var novaEstacionaTable = estacionaTalbe.cloneNode(true)

        novaEstacionaTable.classList.remove('model')

        novaEstacionaTable.querySelector('.id_registro').innerHTML = e.ticket_id
        novaEstacionaTable.querySelector('.cpf-clientes').innerHTML = e.cpf_cliente
        novaEstacionaTable.querySelector('.vagas').innerHTML = e.number_vaga
        novaEstacionaTable.querySelector('.categoria_vaga').innerHTML = e.categoria_vaga
        novaEstacionaTable.querySelector('.valor_h').innerHTML = e.valor_h
        novaEstacionaTable.querySelector('.placa_veiculo').innerHTML = e.placa_carro
        novaEstacionaTable.querySelector('.forma_pagamento').innerHTML = e.forma_pagamento
        novaEstacionaTable.querySelector('.status_pag').innerHTML = e.status_pag

        document.querySelector(".contTickets").appendChild(novaEstacionaTable)

    })

    document.querySelector('.abertos').innerHTML = qtdAbertos
    document.querySelector('.fechados').innerHTML = qtdFechados
    document.querySelector('.qtd-tickets').innerHTML = tickets.length

}
function editarCliente(e) {
  var mostrarModal = document.querySelector('.m-editar')

  var id = e.parentNode.parentNode.querySelector('.cpf-clientes').innerHTML

  
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '#5e5e5e27';


  //PREENCHER OS INPUTS COM AS INFORMAÇÕES DO CLIENTE DESEJADO

  nomeClientes.forEach(n => {

    
    if(id == n.cpf) {

    console.log(n.Nome_cliente)

      
        document.querySelector('.cliName').innerHTML = n.Nome_cliente

    }
  })

  clientes.forEach(c => {

    if(id == c.cpf_cliente) {


      console.log(c.cpf_cliente)
          var id_vaga = document.querySelector('.id_vaga').innerHTML  = c.number_vaga
          var cpf = document.querySelector('.cpf').value = c.cpf_cliente
          var placa = document.querySelector('.placa').value = c.placa_carro

          var categoria_veiculo = c.categoria_vaga

          if(categoria_veiculo == 'Ve?culo Pequeno') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'Veículo Pequeno'
          }

          if(categoria_veiculo == 'Ve?culo M?dio') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'Veículo Médio'
            
          }
          if(categoria_veiculo == 'Ve?culo Grande') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'Veículo Grande'           
          }


          

          // var rg = document.querySelector('.rg').value = c.rg
          // var email = document.querySelector('.email').value = c.email
          // var telMovel = document.querySelector('.telMovel').value = c.celular
          // var telFixo = document.querySelector('.fixo').value = c.telefone_fixo
          // var cep = document.querySelector('.cep').value = c.cep
          // var endereco = document.querySelector('.endereco').value = c.endereco
          // var numero = document.querySelector('.numero').value = c.numero
          // var bairro = document.querySelector('.bairro').value = c.bairro
          // var cidade = document.querySelector('.cidade').value = c.cidade
          // var uf = document.querySelector('.uf').value = c.uf
          // var complemento = document.querySelector('.complemento').value = c.complemento
          // var select_status = document.querySelector(".select_status").value = c.status_cli

    }

    //     

    // }
  })
  
}


function deletarRegistro(e) {

  var id_ticket = e.parentNode.parentNode.querySelector('.placa_veiculo').innerHTML
  console.log(id_ticket)

  let data = {
    "placa": id_ticket
    
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
        }
    })


}
function deletarVaga(e) {
  var num_vaga = e.parentNode.parentNode.querySelector('.vagas').innerHTML

  console.log(num_vaga)

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
            alert('Vaga Deletada com sucesso')
        }
        else {

          alert('Erro ao Excluir Vaga')

            // var modalErro = document.querySelector('.modal-errado-vagas')

            // modalErro.classList.remove('model')
        }
    })
}



function fecharEditarCliente() {
  var mostrarModal = document.querySelector('.m-editar')
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '';
}

function fecharModal() {
  var modal = document.querySelector('.modal')
  modal.classList.toggle('model')

  document.querySelector('body').style.background = '';

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