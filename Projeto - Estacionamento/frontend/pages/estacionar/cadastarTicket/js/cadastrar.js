var uriCadastra = 'http://localhost:3000/registro_estac'
const uriClientes = 'http://localhost:3000/clientes/vw_clientes'

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

    console.log(tipo)

    if (tipo == 'Véiculo Pequeno') {
        var valorTotal = 'R$ 10,00'
    } else if (tipo == 'Véiculo Médio') {
        var valorTotal = 'R$ 15,00'

    } else {
        var valorTotal = 'R$ 20,00'

    }

    document.querySelector('.valor-Hora').value = valorTotal
}

function cadastrarTiket() {

    const options = { method: 'GET' };

    fetch(uriClientes, options)
        .then(res => res.json())
        .then(res => {
            clientes = res;
        }
        )
        .catch(err => console.error(err));

    // var valorHora = document.querySelector('.valor-Hora').value
    // var numVaga = document.querySelector('.num-vaga').value
    // var placa = document.querySelector('.placa-veiculo').value
    var cpf = document.querySelector('.cpf-cliente').value
    // var modeloVeiculo = document.querySelector('.modelo-veiculo').value
    // const dataEntrada = document.querySelector('.data-Entrada').value
    // var dataSaida = document.querySelector('.data-Saida').value

    var achou = false
    

    if (cpf.length == 0) {
        var erro = document.querySelector('.ja_possui')

        erro.classList.toggle('model')
    }

    clientes.forEach(c => {
        if (cpf == c.cpf) {
            achou = true

            var erro = document.querySelector('.ja_possui')

            erro.classList('model')
        }
    })

    if (achou == false) {
        var erro = document.querySelector('.ja_possui')

        erro.classList.toggle('model')
    }


   


}
