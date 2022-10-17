var uriDepartas = 'http://localhost:3000/solicitacoes/departamentos'
var uriProdut = 'http://localhost:3000/solicitacoes/produtos'
var uriSolicita = 'http://localhost:3000/solicitacoes/vw_solicitacoes/todas'
var uriCadastraSolicita = 'http://localhost:3000/solicitacoes/vw_solicitacoes/Umitem'
var uriDeletaDepto = 'http://localhost:3000/solicitacoes/departamentos'

var depto = []
var prod = []
var solicitas = [] 


var contDepartas = document.querySelector('.cont-Dpto')
var contProds = document.querySelector('.cont-Prod')
var contSolicita = document.querySelector('.cont_descri_solicita')

function carregar() {
    const options = { method: 'GET' };

    fetch(uriDepartas, options)
        .then(res => res.json())
        .then(res => {
            depto = res;
            preencher();
        }
        )
        .catch(err => console.error(err))

        // //Excluir 
        // fetch(uriDepartas, options)
        // .then(res => res.json())
        // .then(res => {
        //     depto = res;
        //     excluir();
        // }
        // )
        // .catch(err => console.error(err));


    fetch(uriProdut, options)
        .then(res => res.json())
        .then(res => {
            prod = res;
            preencherTabelaProd();
        }
        )
        .catch(err => console.error(err));
    fetch(uriProdut, options)
        .then(res => res.json())
        .then(res => {
            prod = res;
            calcular();
        }
        )
        .catch(err => console.error(err));

        fetch(uriSolicita, options)
        .then(res => res.json())
        .then(res => {
            solicitas = res;
            preencherTabelaSolicita();
        }
        )
        .catch(err => console.error(err));
        
}



function preencher() {
    depto.forEach((e, i) => {
        var novoContDepartas = contDepartas.cloneNode(true)

        novoContDepartas.classList.toggle("model")

        novoContDepartas.querySelector('.cod_Dpto').innerHTML = e.Cod_Depto
        novoContDepartas.querySelector('.nome_Dpto').innerHTML = e.Nome_Depto

        document.querySelector('.contTbody').appendChild(novoContDepartas)
        // console.log(i)
    })
}

function excluir(e) {

    // console.log(e.parentNode.parentNode.querySelector('.cod_Dpto').innerHTML)

    var cod_dpto = e.parentNode.parentNode.querySelector('.cod_Dpto').innerHTML

    console.log(cod_dpto)

    let data = {
        "Cod_Depto": cod_dpto
    }

    console.log(data)

    fetch(uriDeletaDepto, {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.Cod_Depto !== undefined) {
            alert("Departamento Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir Departamento !");
        }
    });


}

function preencherTabelaProd() {
    prod.forEach(e => {
        var novoContProds = contProds.cloneNode(true)

        novoContProds.classList.remove("model")

        novoContProds.querySelector('.cod_Prod').innerHTML = e.Cod_Produto
        novoContProds.querySelector('.nome_Prod').innerHTML = e.Nome_produto

        document.querySelector('.contTbodyProd').appendChild(novoContProds)
    })
}


// ********* Parte do Modal ************ //
function modal() {  

    // var aparecer = document.querySelector('.modal')
    // aparecer.classList.toggle('model')

    // var corpo_site = document.querySelector('#corpo')

    // corpo_site.style.background = '#0000001f'

    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    console.log(dataAtual);

    var data = document.querySelector('.dataSolicita')
    data.disabled = true    

    document.querySelector('.dataSolicita').value = dataAtual

    var total = document.querySelector('.total')
    total.disabled = true
}
function cadastrarProduto() {

    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var ano = hoje.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;

    var num_Solicita = document.querySelector('.inpSolicita').value

    // SELECT -- Departamentos --
    var select_dpto = document.querySelector(".sel-Dpto")
    let seleDepto = select_dpto.options[select_dpto.selectedIndex].value;
    if (seleDepto == '1000') {var departa = '1000'; var nome_Dep = 'Vendas' } 
    if (seleDepto == '2000') {var departa = '2000'; var nome_Dep = 'Compras' } 
    if (seleDepto == '2001') {var departa = '2001'; var nome_Dep = 'Recursos Humanos'}

    // SELECT -- Funcionários --
    var selectFunc = document.querySelector(".sel-Func")
    let seleFunc = selectFunc.options[selectFunc.selectedIndex].value;
    if (seleFunc == 100) { var cod_func = 100; var nome_func = 'Jose Pedro';}
    if (seleFunc == 150) { var cod_func = 150; var nome_func = 'Ana Pereira'; }
    if (seleFunc == 200) { var cod_func = 200; var nome_func = 'Maria da Silva'; }
    if (seleFunc == 300) { var cod_func = 300; var nome_func = 'Joao Antonio';}

    // SELECT -- Produto --
    var select_Prod = document.querySelector(".sel-Prod")
    let seleProd = select_Prod.options[select_Prod.selectedIndex].value;
    if (seleProd == '125') { var prod = '125'; var nome_prod = 'Parafuso'; var valorUnit = 10 }
    if (seleProd == '135') { var prod = '135'; var nome_prod = 'Arruela'; var valorUnit = 15 }
    if (seleProd == '145') { var prod = '145'; var nome_prod = 'Difusor'; var valorUnit = 20 }
    if (seleProd == '155') { var prod = '155'; var nome_prod = 'Paralama'; var valorUnit = 35 }


    var qtd_Prod = document.querySelector('.qtd').value

    var valorTotal = qtd_Prod * valorUnit


    let data = {
        "n_sol": num_Solicita,
        "depto": departa,
        "func": cod_func,
        "prod": prod,
        "qtd": qtd_Prod,
        "total": valorTotal,
    };

    console.log(data);

    fetch(uriCadastraSolicita, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })

        .then(res => { return res.json() })
        .then(resp => {
            if (resp.n_sol !== undefined && resp.depto !== undefined && resp.func !== undefined && resp.prod !== undefined && resp.qtd !== undefined && resp.total) {
                alert("Lançamento cadastrado com sucesso.")
                window.location.reload()
            } else {
                alert("Falha ao cadastrar")
            }
        })
}
function calcular() {

    var qtd = document.querySelector('.qtd')
    // var selectTipo = document.querySelector('')

    qtd.addEventListener('keyup', () => {
        // SELECT -- Produto --
        var select_Prod = document.querySelector(".sel-Prod")
        let seleProd = select_Prod.options[select_Prod.selectedIndex].value;
        if (seleProd == '125') { var prod = '125'; var valorUnit = 10 }
        if (seleProd == '135') { var prod = '135'; var valorUnit = 15 }
        if (seleProd == '145') { var prod = '145'; var valorUnit = 20 }
        if (seleProd == '155') { var prod = '155'; var valorUnit = 35 }



        var qtd_Prod = document.querySelector('.qtd').value

        var valorTotal = qtd_Prod * valorUnit

        document.querySelector('.total').value = 'R$' + valorTotal + ',00'

    })


}

// ********* Parte da Tabela Solicitacoes ********* //
function preencherTabelaSolicita() {

    solicitas.forEach(e => {

        var novoContSolicitacoes = contSolicita.cloneNode(true)

        novoContSolicitacoes.classList.toggle('model')
    
        novoContSolicitacoes.querySelector('.Num_Sol').innerHTML = e.Num_Sol
        novoContSolicitacoes.querySelector('.Data_Sol').innerHTML = e.Data_sol
        novoContSolicitacoes.querySelector('.Cod_Dpto').innerHTML = e.Cod_Depto
        novoContSolicitacoes.querySelector('.Nome_Dpto').innerHTML = e.Nome_Depto
        novoContSolicitacoes.querySelector('.Cod_Func').innerHTML = e.Cod_Func
        novoContSolicitacoes.querySelector('.Name_Func').innerHTML = e.Nome_Func
        novoContSolicitacoes.querySelector('.Cod_Produto').innerHTML = e.Cod_Produto
        novoContSolicitacoes.querySelector('.Nome_Produto').innerHTML = e.Nome_produto
        var qtd = novoContSolicitacoes.querySelector('.Qtde').innerHTML = e.Qtde
        var valor = novoContSolicitacoes.querySelector('.Valor').innerHTML = e.valor
        
        var total = qtd * valor

        novoContSolicitacoes.querySelector('.Total').innerHTML = total  

        document.querySelector('.descri_solicita').appendChild(novoContSolicitacoes)
    })

   
    
}
