var uriCadastra = 'http://localhost:3000/registro_estac'
const uriClientes = 'http://localhost:3000/clientes/vw_clientes'
const uriVagas = 'http://localhost:3000/vagas'


var clientes = []


function carregar() {


    //Calcula e Mostra a Data de Hoje com a Hora  e Também Desabilita o Inpute

    var inpValorHora = document.querySelector('.valor-Hora')

    inpValorHora.disabled = true

    var inpDataEntrada = document.querySelector('.data-Entrada')
    var inpDataSaida = document.querySelector('.data-Saida')


    inpDataEntrada.disabled = true
    inpDataSaida.disabled = true

    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()
    var hora = hoje.getHours()
    var minutos = hoje.getMinutes()
    // var segundos = hoje.getSeconds()

    document.querySelector('.data-Entrada').value = inpDataEntrada

    dataAtual = dia + '/' + mes + '/' + ano + ' - ' + hora + ':' + minutos;

    document.querySelector('.data-Entrada').value = dataAtual
    document.querySelector('.data-Saida').value = dataAtual + ' [Em Aberto] '



}


function valorHora() {
    //Calcula O Valor da Hora Perante o tipo do Veículo
    var inpValorHora = document.querySelector('.valor-Hora')
    var select = document.querySelector(".tipo-Veiculo")

    inpValorHora.disabled = true

    let tipo = select.options[select.selectedIndex].value;

    if (tipo == 'Veiculo-Pequeno') {
        var valorTotal = 'R$ 10,00'
    } else if (tipo == 'Veiculo-Medio') {
        var valorTotal = 'R$ 15,00'

    } else if(tipo == 'Veiculo-Grande') {
        var valorTotal = 'R$ 20,00'

    }

    document.querySelector('.valor-Hora').value = valorTotal
}

function cadastrarTiket() {

    


// PRIMEIRO CADASTRANDO A VAGA
    var number_vaga = document.querySelector('.num-vaga').value

    var select_status = document.querySelector(".tipo-Veiculo")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Veiculo-Pequeno') {var tipo = 'Veiculo Pequeno';} 
    if (seleStatus == 'Veiculo-Medio') {var tipo = 'Veiculo Medio'; } 
    if (seleStatus == 'Veiculo-Grande') {var tipo = 'Veiculo Grande'; } 
    
    var valor_hora = document.querySelector('.valor-Hora').value
  

    let vaga = {
        "number_vaga": number_vaga,
        "categoria_vaga": tipo,
        "valor_h": valor_hora,
    };

    console.log(vaga);

    fetch(uriVagas, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(vaga)
    })

        .then(res => { return res.json() })
        .then(resp => {
            if (resp.number_vaga !== undefined && resp.categoria_vaga !== undefined && resp.valor_h !== undefined) {
                alert("Vaga Cadastrada")
            } else {
                alert("Erro na Vaga")


            }
        })


// Conferindo se o CPF é Válido

const options = { method: 'GET' };

    fetch(uriClientes, options)
        .then(res => res.json())
        .then(res => {
            clientes = res;
        }
        )
        .catch(err => console.error(err));

    var cpf = document.querySelector('.cpf-cliente').value

    var achou = false
    
    clientes.forEach(c => {
        console.log(c.cpf)

        if (cpf == c.cpf) {
            achou = true
            var erro = document.querySelector('.ja_possui')

            erro.classList.add('model')

            console.log('Achou')
        } 
    })

    if (achou == false) {
        var erro = document.querySelector('.ja_possui')
        console.log('teste')   
        erro.classList.remove('model')
    }else if(achou == true) {
        var cpfEncontrado = cpf
    }
 
    var number_vaga = document.querySelector('.num-vaga').value
    var placa_car = document.querySelector('.placa-veiculo').value
    // var h_entrada = document.querySelector('').value
    // var h_saida = document.querySelector('').value
    // var valor_final = document.querySelector('').value
    // var forma_pagamento = document.querySelector('').value
    // var status_pag  = document.querySelector('').value

    let data = {
        "number_vaga": number_vaga,
        "placa_car": placa_car,
        "cpf_cli": cpfEncontrado,
        "h_entrada": '09:00',
        "h_saida": null,
        "valor_final": '',
        "forma_pagamento": '',
        "status_pag": 'Aberto',
    };

    console.log(data);

    fetch(uriCadastra, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })

        .then(res => { return res.json() })
        .then(resp => {
            if (resp.number_vaga !== undefined && resp.placa_car !== undefined && resp.cpfEncontrado !== undefined && resp.h_entrada !== undefined && resp.h_saida !== undefined && resp.valor_final !== undefined && resp.status_pag !== undefined) {
                alert("Cliente cadastrado com sucesso.")
            } else {
                alert("Erro Quando Cadastra Cliente")


            }
        })



}


