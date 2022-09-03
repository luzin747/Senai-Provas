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

function preencherTabela(e) {

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

        

        else if(linha.tipo == 'C') {
            var novaLinhaTabela = linhaTabela.cloneNode(true)

            novaLinhaTabela.classList.remove("model")

            novaLinhaTabela.querySelector(".nlanca").innerHTML = linha.n_lancamentos
            novaLinhaTabela.querySelector(".data").innerHTML = linha.datas
            novaLinhaTabela.querySelector(".descricao").innerHTML = linha.descricao
            var valores =  novaLinhaTabela.querySelector(".valor").innerHTML = linha.valor
            novaLinhaTabela.querySelector(".tipo").innerHTML = 'Entrada'

            document.querySelector(".table-C").appendChild(novaLinhaTabela)

            saldoC = saldoC + Number(valores)

        }

       


    })
   
    var valorTotal = saldoD + saldoC

 
    document.querySelector('.saldo-tot').innerHTML = valorTotal




}

var contas = document.querySelectorAll('.valor')

console.log(contas)


// function somar() {

//     for(let )

// }

const INPUT_BUSCA = document.getElementById('input-busca')
const TABELA_BEBIDASD = document.querySelector('.table-D')
const TABELA_BEBIDASC = document.querySelector('.table-C')

INPUT_BUSCA.addEventListener('keyup', () => {

    
        let expressao = INPUT_BUSCA.value

        let linhas = TABELA_BEBIDASD.getElementsByTagName('tr')

        for (let posicao in linhas) {
            if (true === isNaN(posicao)) {
                continue
            }

            // console.log(posicao)

            // console.log(e.data)
            let conteudoDaLinha = linhas[posicao].innerHTML

            if(true === conteudoDaLinha.includes(expressao)){
                linhas[posicao].style.display = ''
            }else {
                linhas[posicao].style.display = 'none' 

            }

        }

    

})

INPUT_BUSCA.addEventListener('keyup', () => { 

    let expressao = INPUT_BUSCA.value

    let linhas = TABELA_BEBIDASC.getElementsByTagName('tr')

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue
        }

        // console.log(posicao)

        // console.log(e.data)
        let conteudoDaLinha = linhas[posicao].innerHTML

        if(true === conteudoDaLinha.includes(expressao)){
            linhas[posicao].style.display = ''
        }else {
            linhas[posicao].style.display = 'none' 

        }

    }

})

