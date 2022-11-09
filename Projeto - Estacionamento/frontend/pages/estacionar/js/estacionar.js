const uri = 'http://localhost:3000/vw_estacionar'
const uriEditar = 'http://localhost:3000/registro_estac'

var  estacionaTalbe = document.querySelector('.tickets')
var tickets = []

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
            mostrarModal();
      }
        )
      .catch(err => console.error(err));
}

function preencherTela() {
    tickets.forEach(e => {
        var novaEstacionaTable = estacionaTalbe.cloneNode(true)

        novaEstacionaTable.classList.remove('model')

        novaEstacionaTable.querySelector('.id_registro').innerHTML = e.id_registro
        novaEstacionaTable.querySelector('.clientes').innerHTML = e.clientes
        novaEstacionaTable.querySelector('.vagas').innerHTML = e.vagas
        novaEstacionaTable.querySelector('.categoria_vaga').innerHTML = e.categoria_vaga
        novaEstacionaTable.querySelector('.valor_h').innerHTML = e.valor_h
        novaEstacionaTable.querySelector('.carros').innerHTML = e.carros
        novaEstacionaTable.querySelector('.forma_pagamento').innerHTML = e.forma_pagamento
        novaEstacionaTable.querySelector('.status_pag').innerHTML = e.status_pag

        console.log(e.cpf)

        document.querySelector(".contTickets").appendChild(novaEstacionaTable)

    })

}

function editarCliente(e) {
  var mostrarModal = document.querySelector('.m-editar')

  // var id = e.parentNode.parentNode.querySelector('.idCli').innerHTML

  
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '#5e5e5e27';


  //PREENCHER OS INPUTS COM AS INFORMAÇÕES DO CLIENTE DESEJADO

  clientes.forEach(c => {

    // if(id == c.id_cliente) {

    //     document.querySelector('.cliName').innerHTML = c.nome

    //     var nome = document.querySelector('.nome').value  = c.nome
    //     var sobrenome = document.querySelector('.sobrenome').value = c.sobrenome
    //     var data_nasc = document.querySelector('.data_nasci').value = c.data_nasci
    //     var cpf = document.querySelector('.cpf').value = c.cpf
    //     var rg = document.querySelector('.rg').value = c.rg
    //     var email = document.querySelector('.email').value = c.email
    //     var telMovel = document.querySelector('.telMovel').value = c.celular
    //     var telFixo = document.querySelector('.fixo').value = c.telefone_fixo
    //     var cep = document.querySelector('.cep').value = c.cep
    //     var endereco = document.querySelector('.endereco').value = c.endereco
    //     var numero = document.querySelector('.numero').value = c.numero
    //     var bairro = document.querySelector('.bairro').value = c.bairro
    //     var cidade = document.querySelector('.cidade').value = c.cidade
    //     var uf = document.querySelector('.uf').value = c.uf
    //     var complemento = document.querySelector('.complemento').value = c.complemento
    //     var select_status = document.querySelector(".select_status").value = c.status_cli

    // }
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
