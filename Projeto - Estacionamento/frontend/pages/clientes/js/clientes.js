const uri = 'http://localhost:3000/clientes/vw_clientes';
const uriTel = 'http://localhost:3000/telefones'
const uriAllClientes = 'http://localhost:3000/infoClientes'
const uriEditar = 'http://localhost:3000/clientes'

var cliTable = document.querySelector('.clientes')

var clientes = []
var allClientes = []

function carregar() {

  const options = { method: 'GET' };

  fetch(uri, options)
    .then(res => res.json())
    .then(res => {
      clientes = res;
      preencherTela();
      mostrarModal();
      editarCliente();
    }
    )
    .catch(err => console.error(err));

  fetch(uriTel, options)
    .then(res => res.json())
    .then(res => {
      telefones = res;
      mostrarModal();
    }
    )
    .catch(err => console.error(err));

    fetch(uriAllClientes, options)
    .then(res => res.json())
    .then(res => {
      allClientes = res;
      editarCliente();
    }
    )
    .catch(err => console.error(err));
}

function preencherTela() {
  clientes.forEach(e => {
    var novaListaCliente = cliTable.cloneNode(true)

    novaListaCliente.classList.remove('model')

    novaListaCliente.querySelector('.idCli').innerHTML = e.cliente_id
    novaListaCliente.querySelector('.nomeCli').innerHTML = e.Nome_cliente
    novaListaCliente.querySelector('.cpfCli').innerHTML = e.cpf
    novaListaCliente.querySelector('.emailCli').innerHTML = e.email
    novaListaCliente.querySelector('.status').innerHTML = e.status_cli

    console.log(e.cpf)

    document.querySelector(".contClientes").appendChild(novaListaCliente)

  })

}

function mostrarModal(e) {
  var modal = document.querySelector('.modal')
  var id = e.parentNode.parentNode.querySelector('.idCli').innerHTML
  var fixo = document.querySelector('.telFixo')
  var cel = document.querySelector('.celular')

  fixo.disabled = true
  cel.disabled = true

  clientes.forEach(n => {

    if (id == n.cliente_id) {
      document.querySelector('.Cliente').innerHTML = n.Nome_cliente

    }
  })

  telefones.forEach(cli => {
    if (id == cli.cliente_id) {

      document.querySelector('.telFixo').value = cli.fixo_Cliente
      document.querySelector('.celular').value = cli.cel_cliente

    }
  })

  document.querySelector('body').style.background = '#5e5e5e27';

  modal.classList.toggle('model')
}

function fecharModal() {
  var modal = document.querySelector('.modal')
  modal.classList.toggle('model')

  document.querySelector('body').style.background = '';

}

function excluirCliente(e) {
  var cpfLocation = e.parentNode.parentNode.querySelector('.cpfCli').innerHTML

  let data = {
    "cpf": cpfLocation
  }

  console.log(data)
  fetch('http://localhost:3000/clientes', {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(data)
  })
    .then(res => { return res.json() })
    .then(resp => {
      console.log(resp)
      if (resp.cpf !== undefined) {
        alert("Cliente Excluido Com Suesso!");
        window.location.reload();
      } else {
        alert("Erro ao Excluir Cliente")
        window.location.reload();
      }
    });

}


// FUNÇÕES PARA EDITAR O CLIENTE - ABRIR E FECHAR MODALS

function editarCliente(e) {
  var mostrarModal = document.querySelector('.m-editar')

  var id = e.parentNode.parentNode.querySelector('.idCli').innerHTML

  
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '#5e5e5e27';


  //PREENCHER OS INPUTS COM AS INFORMAÇÕES DO CLIENTE DESEJADO

  allClientes.forEach(c => {

    if(id == c.id_cliente) {

        document.querySelector('.cliName').innerHTML = c.nome

        var nome = document.querySelector('.nome').value  = c.nome
        var sobrenome = document.querySelector('.sobrenome').value = c.sobrenome
        var data_nasc = document.querySelector('.data_nasci').value = c.data_nasci
        var cpf = document.querySelector('.cpf').value = c.cpf
        var rg = document.querySelector('.rg').value = c.rg
        var email = document.querySelector('.email').value = c.email
        var telMovel = document.querySelector('.telMovel').value = c.celular
        var telFixo = document.querySelector('.fixo').value = c.telefone_fixo
        var cep = document.querySelector('.cep').value = c.cep
        var endereco = document.querySelector('.endereco').value = c.endereco
        var numero = document.querySelector('.numero').value = c.numero
        var bairro = document.querySelector('.bairro').value = c.bairro
        var cidade = document.querySelector('.cidade').value = c.cidade
        var uf = document.querySelector('.uf').value = c.uf
        var complemento = document.querySelector('.complemento').value = c.complemento
        var select_status = document.querySelector(".select_status").value = c.status_cli

    }
  })
  
}

function trocaStatus() {
  
}

function salvarEdicao(e) {
    var nome = document.querySelector('.nome').value  
    var sobrenome = document.querySelector('.sobrenome').value 
    var data_nasc = document.querySelector('.data_nasci').value
    var cpf = document.querySelector('.cpf').value 
    var rg = document.querySelector('.rg').value 
    var email = document.querySelector('.email').value
    var telMovel = document.querySelector('.telMovel').value 
    var telFixo = document.querySelector('.fixo').value 
    var cep = document.querySelector('.cep').value 
    var endereco = document.querySelector('.endereco').value 
    var numero = document.querySelector('.numero').value  
    var bairro = document.querySelector('.bairro').value 
    var cidade = document.querySelector('.cidade').value 
    var uf = document.querySelector('.uf').value 
    var complemento = document.querySelector('.complemento').value 
    var select_status = document.querySelector(".select_status")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Sim') {var ativo = 'Sim';} 
    if (seleStatus == 'Não') {var ativo = 'Não'; } 
  
    console.log(cpf)

    var data = {
      "nome": nome,
      "sobrenome": sobrenome,
      "data_nasci": data_nasc,
      "cpf": cpf,
      "rg": rg,
      "email": email,
      "celular": telMovel,
      "telefone_fixo": telFixo,
      "cep": cep,
      "endereco": endereco,
      "numero": numero,
      "bairro": bairro,
      "cidade": cidade,
      "uf": uf,
      "complemento": complemento,
      "status_cli": ativo,
    }

    fetch(uriEditar, {
      "method": "PUT",
      "headers": {
          "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
  })

      .then(res => { return res.json() })
      .then(resp => {
          if (resp.nome != undefined && resp.sobrenome != undefined && resp.data_nasci != undefined && resp.cpf != undefined && resp.rg != undefined && resp.celular != undefined && resp.telefone_fixo != undefined &&  resp.email != undefined && resp.cep != undefined && resp.endereco != undefined && resp.numero != undefined && resp.bairro !== undefined && resp.cidade !== undefined && resp.uf !== undefined && resp.complemento !== undefined && resp.status_cli != undefined) {
              alert("Cliente Editado com sucesso.")
              window.location.reload(true);
          } else {
              alert("Erro Quando Edita Cliente")

          }
      })
    
}

function fecharEditarCliente() {
  var mostrarModal = document.querySelector('.m-editar')
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '';
}


// FUNÇÕES PARA BUSCAR CLIENTE POR NOME
function buscarClientes() {
  
}