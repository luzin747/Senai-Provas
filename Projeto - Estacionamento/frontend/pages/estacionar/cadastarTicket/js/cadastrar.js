var uriVagas = 'http://localhost:3000/vagas'
var uriCarros = 'http://localhost:3000/carros'
var uriRegistros = 'http://localhost:3000/registro_ticket'
var uriClientes = 'http://localhost:3000/clientes/vw_clientes'

var clientes = []

function carregar() {
    var inpValorHora = document.querySelector('.valor-Hora')

    inpValorHora.disabled = true

    //Calcula e Mostra a Data de Hoje com a Hora  e Também Desabilita o Inpute

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

    console.log(tipo)

    if (tipo == 'Véiculo-Pequeno') {
        var valorTotal = 'R$ 10,00'
    } else if (tipo == 'Véiculo-Médio') {
        var valorTotal = 'R$ 15,00'

    } else {
        var valorTotal = 'R$ 20,00'

    }

    document.querySelector('.valor-Hora').value = valorTotal
}

function ativar() {
    const options = { method: 'GET' };

    fetch(uriClientes, options)
        .then(res => res.json())
        .then(res => {
            clientes = res;
            cadastrarVagas()

        }
        )
        .catch(err => console.error(err));
}


var achou = false

function cadastrarVagas() {

    var cpf_cliente = document.querySelector('.cpf-cliente').value
    var num_vaga = document.querySelector('.numero-vaga').value


    console.log(clientes)

    if (num_vaga < 150) {



        clientes.forEach(c => {


            if (cpf_cliente == c.cpf) {
                achou = true
            }
        })

        if (achou == true) {

            var number_vaga = document.querySelector('.numero-vaga').value
            console.log(number_vaga)

            var select_status = document.querySelector(".tipo-Veiculo")
            let seleStatus = select_status.options[select_status.selectedIndex].value;
            if (seleStatus == 'Véiculo-Pequeno') { var tipo = 'Veículo Pequeno'; }
            if (seleStatus == 'Véiculo-Médio') { var tipo = 'Veículo Médio'; }
            if (seleStatus == 'Véiculo-Grande') { var tipo = 'Veículo Grande'; }

            // var valor_hora = document.querySelector('.valor-Hora').value



            let data = {
                "numero_vaga": number_vaga,
                "categoria_vaga": tipo,
                "valor_h": 15,
                "status_vaga": "Aberta"
            };

            fetch(uriVagas, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(data)
            })
                .then(res => { return res.json() })
                .then(resp => {
                    if (resp.numero_vaga !== undefined && resp.categoria_vaga !== undefined && resp.valor_h !== undefined) {
                        cadastrarCarros()
                    }
                    else {
                        var modalErro = document.querySelector('.modal-errado-vagas')

                        modalErro.classList.remove('model')

                        window.location.reload();

                    }
                })
        } else {
            var modalErro = document.querySelector('.modal-errado')

            modalErro.classList.remove('model')

            window.location.reload();

        }
    }
    else {
        alert('Erro! Vaga Não Existe')
        window.location.reload();

    }

}
function cadastrarCarros() {

    var placa = document.querySelector('.placa-veiculo').value
    var cpf_cliente = document.querySelector('.cpf-cliente').value
    var modelo = document.querySelector('.modelo-veiculo').value

    var select_status = document.querySelector(".tipo-Veiculo")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Véiculo-Pequeno') { var tipo = 'Pequeno'; }
    if (seleStatus == 'Véiculo-Médio') { var tipo = 'Médio'; }
    if (seleStatus == 'Véiculo-Grande') { var tipo = 'Grande'; }

    var data = {
        "placa": placa,
        "cpf_cliente": cpf_cliente,
        "marca": "NONE",
        "modelo": modelo,
        "categoria": tipo
    }

    fetch(uriCarros, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.placa !== undefined && resp.cpf_cliente !== undefined && resp.marca !== undefined & resp.modelo !== undefined & resp.categoria !== undefined) {
                registrarTickets()
            }
            else {
                var modalErro = document.querySelector('.modal-errado')

                modalErro.classList.remove('model')
            }
        })
}
function registrarTickets() {

    var numeroVaga = document.querySelector('.numero-vaga').value
    var placa = document.querySelector('.placa-veiculo').value
    var cpf = document.querySelector('.cpf-cliente').value

    var select_status = document.querySelector(".tipo-Veiculo")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Véiculo-Pequeno') { var tipo = 'Pequeno'; }
    if (seleStatus == 'Véiculo-Médio') { var tipo = 'Médio'; }
    if (seleStatus == 'Véiculo-Grande') { var tipo = 'Grande'; }

    var inpDataEntrada = document.querySelector('.data_entrada')

    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()

    var hora = hoje.getHours()
    var minutos = hoje.getMinutes()
    var segundos = hoje.getSeconds()
    // var segundos = hoje.getSeconds()

    dataAtual = dia + '/' + mes + '/' + ano;
    horaAtual = hora + ':' + minutos + ':' + segundos



    console.log()


    let data = {
        "number_vaga": numeroVaga,
        "placa_car": placa,
        "categoria_carro": tipo,
        "cpf_cli": cpf,
        "data_est": dataAtual,
        "h_entrada": horaAtual,
        "h_saida": null,
        "valor_final": "",
        "forma_pagamento": 'Em Aberto',
        "status_pag": "Aberto"
    }

    console.log(data)

    fetch(uriRegistros, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.number_vaga !== undefined && resp.placa_car !== undefined && resp.cpf_cli !== undefined && resp.h_entrada !== undefined && resp.h_saida !== undefined && resp.valor_final !== undefined && resp.forma_pagamento !== undefined && resp.status_pag !== undefined) {

                var modalCerto = document.querySelector('.modal-certo')
                modalCerto.classList.remove('model')

            } else {
                var modalErro = document.querySelector('.modal-errado')

                modalErro.classList.remove('model')

            }
        })
}





function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal-certo')

    modalCerto.classList.add('model')

    window.location.reload();
}
function esconderModalErrorVagas() {
    var modalErro = document.querySelector('.modal-errado-vagas')

    modalErro.classList.add('model')

}
function esconderModalErrorCpfs() {
    var modalErro = document.querySelector('.modal-errado')

    modalErro.classList.add('model')

}

