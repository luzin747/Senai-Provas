const uri = 'http://localhost:3000/clientes/vw_clientes';
var  cliTable = document.querySelector('.clientes')
var clientes = []

function carregar() {

    const options = {method: 'GET'};

    fetch(uri, options)
      .then(res => res.json())
      .then(res => {
        clientes = res;
            preencherTela();
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
        novaListaCliente.querySelector('.emailCli').innerHTML = e.status_cli
        novaListaCliente.querySelector('.emailCli').innerHTML = e.tipo_tel
        novaListaCliente.querySelector('.emailCli').innerHTML = e.email

        console.log(e.cpf)

        document.querySelector(".contClientes").appendChild(novaListaCliente)

    })

}

function mostrarModal() {
    var modal = document.querySelector('.modal')

    document.querySelector('body').style.background = '#5e5e5e27';

    modal.classList.toggle('model')
}

function fecharModal() {
  var modal = document.querySelector('.modal')
  modal.classList.toggle('model')

  document.querySelector('body').style.background = '';
 
}