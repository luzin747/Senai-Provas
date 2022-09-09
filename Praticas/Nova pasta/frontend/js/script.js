var uriClientes = `http://localhost:3000/locadora/clientes`
var uriFilmes = `http://localhost:3000/locadora/filmes`
var uriLocaçoes = `http://localhost:3000/locadora/locacoes`

var clientes = []
var filmes = []
var locacoes = []

var linhaTabelaClientes = document.querySelector(".tCliente")
var linhaTabelaDevolucoes = document.querySelector(".tDevolucoes")

var tabelaClientes = document.querySelector('.table-clientes')
var tabelaDevolucoes = document.querySelector('.table-devolucoes')


// var secSaldo = document.querySelector(".saldo")

function loadLoja() {
    fetch(uriClientes)
        .then(res => { return res.json() })
        .then(data => {
            clientes = data;
            preencherTabela()

        })

        fetch(uriFilmes)
        .then(res => { return res.json() })
        .then(data => {
            filmes = data;
            preencherTabela()

        })

        

        fetch(uriLocaçoes)
        .then(res => { return res.json() })
        .then(data => {
            locacoes = data;
            preencherTabela()

        })


        // fetch(uriLocaçoes)
        // .then(res => { return res.json() })
        // .then(data2 => {
        //     locacoes = data2;
        //     preencherTabela()
        //     // preencherTabela2()
        // })

        // fetch(uriFilmes)
        // .then(res => { return res.json() })
        // .then(data => {
        //     filmes = data;
        //     preencherTabela()
        //     // preencherTabela2()
        // })
        
}

function preencherTabela() {


    clientes.forEach(cli => {

        var novaLinhaClientes = linhaTabelaClientes.cloneNode(true)

        novaLinhaClientes.classList.toggle('model')

        novaLinhaClientes.querySelector('.codCli').innerHTML = cli.codigo

        novaLinhaClientes.querySelector('.nomeCli').innerHTML = cli.nome
        novaLinhaClientes.querySelector('.endereco').innerHTML = cli.endereco
        novaLinhaClientes.querySelector('.tell').innerHTML = cli.telefone

        document.querySelector('.t-pai').appendChild(novaLinhaClientes)

        locacoes.forEach(loc => {
            var novaLinhaDevolucoes = linhaTabelaDevolucoes.cloneNode(true)
            
            novaLinhaDevolucoes.classList.toggle('model')
            
            console.log(loc.cod_cli)

            
            if(loc.cod_cli == cli.codigo) {
                
                console.log(cli.codigo)
                    
                console.log('ta entrando')
                novaLinhaDevolucoes.querySelector('.nomeCli').innerHTML = cli.nome
                novaLinhaDevolucoes.querySelector('.telefoneCli').innerHTML = cli.telefone
                filmes.forEach(film => {
                    if(loc.cod_film == film.cod_film) {
                        novaLinhaDevolucoes.querySelector('.filme').innerHTML = film.nome
    
                    }
                })
                novaLinhaDevolucoes.querySelector('.dataLoca').innerHTML =  loc.data_loca
                novaLinhaDevolucoes.querySelector('.dataDevo').innerHTML =  loc.data_devolucao
    
                document.querySelector('.t-pai-dev').appendChild(novaLinhaDevolucoes)
    
    
            }
    
            
            
    
        })

    })

    


}

function mostrarDev() {
    
}
    



