const uri = 'http://localhost:3000/vw_estacionar';
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