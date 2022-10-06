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

    var pegaSaldoC = 0
    var pegaSaldoD = 0

    var saldoC = 0 
    var saldoD = 0

    var pega = INPUT_BUSCA.value


    var saldo = 0

    // var pegaSaldo = 0

    loja.forEach(preco => {

        if (pega != preco.datas) {
            document.querySelector('.saldo-title').innerHTML = 'Insira Uma Data Para Filtrar'
        }

       

        if(pega == preco.datas) {

            if(preco.tipo == 'C') {

                pegaSaldoC = preco.valor
    
                saldoC = saldoC + Number(pegaSaldoC)
    
    
            }else if(preco.tipo == 'D') {
    
                pegaSaldoD = preco.valor
    
                saldoD = saldoD + Number(pegaSaldoD)
         
            }
        }    
    })

    var saldoTotal = saldoC - saldoD

   
    if (pega == '') {

        pegaValorTot = preco.valor
        valortot = valortot + Number(pegaValorTot)

        document.querySelector('.saldo-title').innerHTML = 'Saldo Acumulado - R$' + valortot
    }

    if (saldoTotal != 0) {
        document.querySelector('.saldo-title').innerHTML = 'Saldo do Dia - R$' + saldoTotal
    }

    

   

    

    

    



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
    var inpData = document.querySelector('.inpdata')

    inpData.disabled = true
    document.querySelector('body').style.background = '#5e5e5e27';

    modal.classList.toggle('model')

    
    
    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();

     dataAtual = ano + '-' + mes + '-' + dia;
    
    
    console.log(dataAtual);

    

    document.querySelector('.inpdata').value = dataAtual
    
}

function modalExcluir() {

   var valorInpLanca = document.querySelector('#id-lanca').value

   var inpId = document.querySelector('#inp-Id-Lancamento')
   var inpData = document.querySelector('#inp-Id-Data')
   var inpDescri = document.querySelector('#inp-id-Descricao')
   var inpValor = document.querySelector('#inp-id-Valor')
   var inpTipo = document.querySelector('#inp-id-Tipo')

   inpId.disabled = true
   inpData.disabled = true
   inpDescri.disabled = true
   inpValor.disabled = true
   inpTipo.disabled = true

    var achou = false

    loja.forEach(id => {

        console.log(valorInpLanca)
        if(valorInpLanca == id.n_lancamentos) {
            achou = true
        }
        
    })

    

   if(achou == true) {
        var modalExcluir = document.querySelector('.modalExcluir')
        var inpData = document.querySelector('.inpdata')

        inpData.disabled = true
        document.querySelector('body').style.background = '#5e5e5e27';

        modalExcluir.classList.toggle('model')

       loja.forEach(itens => {

        if(valorInpLanca == itens.n_lancamentos) {

            var tipos = ' '

            if(itens.tipo == 'D') {
                tipos = 'Saída'
            }
            else {
               tipos = 'Entrada'
            }

            modalExcluir.querySelector('#inp-Id-Lancamento').value = itens.n_lancamentos
            modalExcluir.querySelector('#inp-Id-Data').value = itens.datas
            modalExcluir.querySelector('#inp-id-Descricao').value = itens.descricao
            modalExcluir.querySelector('#inp-id-Valor').value = itens.valor
            modalExcluir.querySelector('#inp-id-Tipo').value =  tipos
 
            document.querySelector('.conts-inps').append(modalExcluir)
        }
           

       })
        
       
   }
   else {
    alert('Insira um ID Válido')
   }

       

    

    
    
}


function fecharModal() {
    var modal = document.querySelector('.modal')

    modal.classList.toggle('model')

    document.querySelector('body').style.background = 'white';
    document.querySelector('table').style.visibility = '';



}

function fecharModalExcluir() {
    var modalExcluir = document.querySelector('.modalExcluir')


    modalExcluir.classList.toggle('model')

    document.querySelector('body').style.background = 'white';
    document.querySelector('table').style.visibility = '';



}



function cadastrar() {

    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    console.log(dataAtual);

    var select = document.querySelector(".type")

    let tipo = select.options[select.selectedIndex].value;



    // let dataLan = document.querySelector("#descricaoLan").value;
    var descricao = document.querySelector("#descriLoja").value;
    let valor = document.querySelector(".values").value;

    if(tipo == 'Saida') {
        var types = 'D'
    }else {
        var types = 'C'
    }

    let data = {
        "descricao": descricao,
        "valor": valor,
        "tipo": types,
    };
    
    console.log(data );

    fetch(uriLojinha, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })

    .then(res => {return res.json()})
    .then(resp => {
        if (resp.descricao !== undefined) {
            alert("Lançamento cadastrado com sucesso.")
            window.location.reload()
        }else{
            alert("Falha ao cadastrar")
        }
     })
}

function excluir() {

    var idLanca = document.querySelector("#inp-Id-Lancamento").value

    let data = {
        "n_lancamento":idLanca
    }

    console.log(data)

    fetch("http://localhost:3000/loja", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.n_lancamento !== undefined) {
            alert("Lançamento Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir Lançamento !");
        }
    });
}





