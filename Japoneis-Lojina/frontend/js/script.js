var uriLojinha = `http://localhost:3000/loja`

var loja = []

var linhaTabela = document.querySelector(".linha")
var secSaldo = document.querySelector(".saldo")

function loadLoja() {
    fetch(uriLojinha)
        .then(res => { return res.json() })
        .then(data => {
            loja = data;
            preencherTabela()
        })
}

function preencherTabela() {

    var saldoD = 0
    var saldoC = 0

    loja.forEach(linha => {
        if (linha.tipo == 'D') {
            var novaLinhaTabela = linhaTabela.cloneNode(true)

            novaLinhaTabela.classList.remove("model")

            novaLinhaTabela.querySelector(".nlanca").innerHTML = linha.n_lancamentos
            novaLinhaTabela.querySelector(".data").innerHTML = linha.datas
            novaLinhaTabela.querySelector(".descricao").innerHTML = linha.descricao
            var valores = novaLinhaTabela.querySelector(".valor").innerHTML = linha.valor

            saldoD = saldoD + Number(valores)
            novaLinhaTabela.querySelector(".tipo").innerHTML = 'Saida'

            document.querySelector(".table-D").appendChild(novaLinhaTabela)

        }


        else if (linha.tipo == 'C') {
            var novaLinhaTabela = linhaTabela.cloneNode(true)

            novaLinhaTabela.classList.remove("model")

            novaLinhaTabela.querySelector(".nlanca").innerHTML = linha.n_lancamentos
            novaLinhaTabela.querySelector(".data").innerHTML = linha.datas
            novaLinhaTabela.querySelector(".descricao").innerHTML = linha.descricao
            var valores = novaLinhaTabela.querySelector(".valor").innerHTML = linha.valor
            novaLinhaTabela.querySelector(".tipo").innerHTML = 'Entrada'

            document.querySelector(".table-C").appendChild(novaLinhaTabela)

            saldoC = saldoC + Number(valores)

        }

    })

    var valorTotal = saldoC - saldoD 


    document.querySelector('.saldo-tot').innerHTML = valorTotal

}

var contas = document.querySelectorAll('.valor')



const INPUT_BUSCA = document.getElementById('input-busca')
const TABELA_BEBIDASD = document.querySelector('.table-D')
const TABELA_BEBIDASC = document.querySelector('.table-C')
var button = document.querySelector('.button')


var tipos = document.querySelector('.SD').innerHTML

button.addEventListener('click', () => {


    var valortot = 0
    var pegaValorTot = 0

    var pega = INPUT_BUSCA.value


    var saldo = 0

    var pegaSaldo = 0

    loja.forEach(preco => {

        if (pega != preco.valor) {
            document.querySelector('.saldo-title').innerHTML = 'Insira Uma Data Para Filtrar'
        }


        if (preco.datas == pega) {

            pegaSaldo = preco.valor

            saldo = saldo + Number(pegaSaldo)

        }

        if (pega == '') {
            pegaValorTot = preco.valor
            valortot = valortot + Number(pegaValorTot)

            document.querySelector('.saldo-title').innerHTML = 'Saldo Acumulado - R$' + valortot
        } else if (saldo != 0) {

            document.querySelector('.saldo-title').innerHTML = 'Saldo do Dia - R$' + saldo
        }

    })



    let expressao = INPUT_BUSCA.value

    let linhas = TABELA_BEBIDASD.getElementsByTagName('tr')

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

button.addEventListener('click', () => {

    let expressao = INPUT_BUSCA.value

    let linhas = TABELA_BEBIDASC.getElementsByTagName('tr')

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


function modalCadastrar() {

    var modal = document.querySelector('.modal')
    document.querySelector('body').style.background = '#5e5e5e27';

    modal.classList.toggle('model')

    
    
    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia;
    
    console.log(dataAtual);
    
}

function fecharModal() {
    var modal = document.querySelector('.modal')

    modal.classList.toggle('model')

    document.querySelector('body').style.background = 'white';
    document.querySelector('table').style.visibility = '';



}

