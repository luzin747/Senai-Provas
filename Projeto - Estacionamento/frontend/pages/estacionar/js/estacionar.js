const uri = 'http://localhost:3000/vw_estacionar'
const uriEditar = 'http://localhost:3000/registro_ticket/'
const uriClientes = 'http://localhost:3000/clientes/vw_clientes'
const uriDeletar = 'http://localhost:3000/carros'
const uriDeletarVagas = 'http://localhost:3000/vagas'

var  estacionaTalbe = document.querySelector('.tickets')
var tickets = []
var nomeClientes = []
var clientes = []
var nomeCliente = [] 

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

      // fetch(uriClientes, options)
      // .then(res => res.json())
      // .then(res => {
      //   nomeClientes = res;
      //   editarCliente();
      // }
      //   )
      // .catch(err => console.error(err));

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
        novaEstacionaTable.querySelector('.categoria_vaga').innerHTML = e.categoria_carro
        novaEstacionaTable.querySelector('.valor_h').innerHTML = e.valor_h
        novaEstacionaTable.querySelector('.placa_veiculo').innerHTML = e.placa_carro
        novaEstacionaTable.querySelector('.forma_pagamento').innerHTML = e.forma_pagamento
        novaEstacionaTable.querySelector('.status_pag').innerHTML = e.status_pag

        document.querySelector(".contTickets").appendChild(novaEstacionaTable)

    })

    document.querySelector('.abertos').innerHTML = qtdAbertos
    // document.querySelector('.fechados').innerHTML = qtdFechados
    document.querySelector('.qtd-tickets').innerHTML = tickets.length

}

function ativar(e) {

  var id = e.parentNode.parentNode.querySelector('.id_registro').innerHTML

  const options = {method: 'GET'};

  fetch(uriEditar + id, options)
      .then(res => res.json())
      .then(res => {
        clientes = res;
        editarCliente(e);
      }
        )
      .catch(err => console.error(err));


  fetch(uriClientes, options)
      .then(res => res.json())
      .then(res => {
        nomeCliente = res;
        nomearCliente(e);
      }
        )
      .catch(err => console.error(err));
}

//Fun????o que Nomeia o Cliente no Modal 
function nomearCliente(e) {

  var cpfCliente = document.querySelector('.cpf').value

  nomeCliente.forEach(n => {
   
    if(cpfCliente == n.cpf) {
      
    document.querySelector('.cliName').innerHTML = n.Nome_cliente

    }

  })

}

function editarCliente(e) {

  var mostrarModal = document.querySelector('.m-editar')
  
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '#5e5e5e27';


  //PREENCHER OS INPUTS COM AS INFORMA????ES DO CLIENTE DESEJADO
   
  var id = e.parentNode.parentNode.querySelector('.cpf-clientes').innerHTML


  clientes.forEach(c => {
    if(id == c.cpf_cli) {


      console.log(c.cpf_cli)

          var id_vaga = document.querySelector('.id_vaga').innerHTML  = c.number_vaga

          document.querySelector('.ticket-id').value = c.ticket_id
          document.querySelector('.cpf').value = c.cpf_cli
          document.querySelector('.placa').value = c.placa_car
          document.querySelector('.data_entrada').value = c.data_est
          document.querySelector('.h_entrada').value = c.h_entrada

          var categoria_veiculo = c.categoria_carro

          if(categoria_veiculo == 'Pequeno' || categoria_veiculo == 'Ve??culo Pequeno' || categoria_veiculo == 'Ve?culo Pequeno') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'Pequeno'
          }

          if(categoria_veiculo == 'M??dio' || categoria_veiculo == 'Ve??culo M??dio' || categoria_veiculo == 'Ve?culo M?dio') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'M??dio'
            
          }
          if(categoria_veiculo == 'Grande'|| categoria_veiculo == 'Ve??culo Pequeno' || categoria_veiculo == 'Ve?culo Grande') {
            var categoria_veiculo = document.querySelector('.categoria_veiculo').value = 'Grande'           
          }
    }

  })
    
}

function ativarFechamento() {

  var id = e.parentNode.parentNode.querySelector('.id_registro').innerHTML

  const options = {method: 'GET'};

  fetch(uriEditar + id, options)
      .then(res => res.json())
      .then(res => {
        fecharIsTrue= res;
        edicao(e);
      }
        )
      .catch(err => console.error(err));
}

var fecharIsTrue = false

function edicao() {
      var status_vaga = document.querySelector(".select_status")
      let statusVvaga = status_vaga.options[status_vaga.selectedIndex].value;
      
      if (statusVvaga == 'Fechado') { fecharIsTrue = true }

      if(fecharIsTrue == true) {
        var placa_car = document.querySelector('.placa').value
        var cpf_cli = document.querySelector('.cpf').value
        var data_entrada = document.querySelector('.data_entrada').value
        var h_entrada = document.querySelector('.h_entrada').value
        var h_saida = document.querySelector('.h_saida').value
        var valor_final = document.querySelector('.valor_Total').value
        var forma_pagamento = document.querySelector('.formas_pagamentos').value
        var categoria_carro = document.querySelector('.categoria_veiculo').value
  
        const [n,valor,s] = valor_final.split(' ')
  
        console.log(valor)
  
        let data = {
          "mensalista":"Usuario", 
          "cpf_mensalista": cpf_cli,
          "placa_car": placa_car, 
          "categoria_car": categoria_carro,
          "data_ent": data_entrada, 
          "hora_ent": h_entrada,
          "hora_sai": h_saida,
          "valor_tot": valor, 
          "forma_pagamento": forma_pagamento,
          "stats_mensal":"Pago"
          }
  
      console.log(data)
  
      fetch('http://localhost:3000/mensalidades', {
          "method":"POST",
          "headers": {
              "Content-Type":"application/json"
          },
          "body":JSON.stringify(data)
      })
      .then(res => { return res.json() })
          .then(resp => {
              if (resp.mensalista !== undefined && resp.cpf_mensalista !== undefined && resp.placa_car !== undefined && resp.categoria_car  !== undefined && resp.hora_ent !== undefined && resp.hora_sai !== undefined && resp.valor_tot !== undefined &&  resp.data_ent !== undefined && resp.forma_pagamento !== undefined && resp.stats_mensal !== undefined ) {
                  
  
                  deletarVagaPosFechamento()
                  
              } 
          })
    }
      else {
        var modalErroFecharAntes = document.querySelector('.modal-errado-nao-existe')

        modalErroFecharAntes.classList.remove('model')
      }
      
}       


function fechandoVagas() {


  var id_vaga = document.querySelector('.id_vaga').innerHTML
  var categoria_veiculo = document.querySelector('.categoria_veiculo').value

  if(categoria_veiculo == 'Ve??culo Pequeno') {
    var valor_Hora = 10
  }
  else if(categoria_veiculo == 'Ve??culo M??dio' ) {
    var valor_Hora = 15
  }else if(categoria_veiculo == 'Ve??culo Grande') {
    var valor_Hora = 20
  }

  let data = {
    "numero_vaga": id_vaga,
		"categoria_vaga": "Ve??culo M??dio",
		"valor_h": valor_Hora,
		"status_vaga": "Fechada"
  }

console.log(data)

fetch('http://localhost:3000/vagas', {
    "method":"PUT",
    "headers": {
        "Content-Type":"application/json"
    },
    "body":JSON.stringify(data)
})
.then(res => { return res.json() })
    .then(resp => {
        if (resp.numero_vaga !== undefined &&resp.categoria_vaga !== undefined && resp.valor_h !== undefined && resp.status_vaga !== undefined) {


            
        } 
    })

}

function deletarVagaPosFechamento() {
  var num_vaga = document.querySelector('.id_vaga').innerHTML


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

          var modalCerto = document.querySelector('.modal-certo')
    
          modalCerto.classList.remove('model')
          

        }
    })
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



function fecharEditarCliente() {
  var mostrarModal = document.querySelector('.m-editar')
  mostrarModal.classList.toggle('model')
  document.querySelector('body').style.background = '';

  window.location.reload();

}

function fecharModal() {
  var modal = document.querySelector('.modal')
  modal.classList.toggle('model')

  document.querySelector('body').style.background = '';

  window.location.reload();


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

function esconderModalFecharAntes() {
  var modalErroFecharAntes = document.querySelector('.modal-errado-nao-existe')

  modalErroFecharAntes.classList.add('model')

}


function conferir() {
  
  var select_status = document.querySelector(".select_status")
  let seleStatus = select_status.options[select_status.selectedIndex].value;
  if (seleStatus == 'Fechado') {calcularHoras()} 
  
}
function calcularHoras() {
    
  var inpDataEntrada = document.querySelector('.data_entrada').value
  var inpHoraEntrada = document.querySelector('.h_entrada').value

  var dataHoraIn = inpDataEntrada + ' ' + inpHoraEntrada

    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()

    var hora = hoje.getHours()
    var minutos = hoje.getMinutes()
    var segundos = hoje.getSeconds()

    dataAtual = dia + '/' + mes + '/' + ano;
    horaAtual = hora + ':' + minutos + ':' + segundos

    var dataHoraOut = dataAtual + ' ' + horaAtual


  const dayHourIn = dataHoraIn

  const dayHourOut = dataHoraOut

  function convertDateHoursToMs(dateHour) {

    const [date, hours] = dateHour.split(' ')
    const [day, month, year] = date.split('/')
    const [hour , minutes , seconds] = hours.split(':')
  
    const newDate = new Date(year, month - 1, day , hour , minutes, seconds) 
  
    console.log(newDate.getTime())
    
    return newDate.getTime()


  }

  const stayedTimeInSeconds = (convertDateHoursToMs(dayHourOut) - convertDateHoursToMs(dayHourIn)) / 1000

  console.log(stayedTimeInSeconds)
  const dayInSeconds = 24 * 60 * 60
  const hourInSeconds = 60 * 60
  const minutesInSeconds = 60

  //formatar meus tempos de estadia
  const day = Math.floor(stayedTimeInSeconds / dayInSeconds)
  const hours = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24
  const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60
  const seconds = stayedTimeInSeconds % 60

  //Acrecentando
  var hora_saida = document.querySelector('.h_saida').value = horaAtual
  var temp_permanencia = document.querySelector('.tempo_permanencia').value = hours + ':' + minutes + ':' + '' + seconds


  //Condi????es Para Fazer o Calculo Final
  var categoria_veiculo = document.querySelector('.categoria_veiculo').value
  
  if(categoria_veiculo == 'Pequeno') {
    
    if(hours == 0) {

      var valorTotal = 10 * 1

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'
      
    }
    else {
      var valorTotal = 10 * hours

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'

    }

  }

  if(categoria_veiculo == 'M??dio') {
    
    if(hours == 0) {

      var valorTotal = 15 * 1

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'
      
    }
    else {
      var valorTotal = 15 * hours

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'

    }

  }

  if(categoria_veiculo == 'Grande') {
    
    if(hours == 0) {

      var valorTotal = 20 * 1

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'
      
    }
    else {
      var valorTotal = 20 * hours

      document.querySelector('.valor_Total').value = 'R$ ' + valorTotal + ' ,00'

    }

  }


}

function esconderModalCheck() {
  var modalCerto = document.querySelector('.modal-certo')

  modalCerto.classList.add('model')

  window.location.reload();
}



var search_btn = document.querySelector('.btn-filter')
const INPUT_BUSCA = document.querySelector('.search')
const TABELA_CLIENTES = document.querySelector('.contTickets')

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

