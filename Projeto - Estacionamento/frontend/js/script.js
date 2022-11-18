var uri = 'http://localhost:3000/vagas'
var uriCLientes = 'http://localhost:3000/clientes/vw_clientes'

var uriStatusAberto = 'http://localhost:3000/vw_estacionar'
var uriTicketsFechados = 'http://localhost:3000/mensalidades'

var uriMensaPagas = 'http://localhost:3000/mensalidades'
var uriMensaAbertas = 'http://localhost:3000/vw_estacionar'

var qtdMensaPagas = []
var qtdMensaAbertas = []

var vagas = []
var qtdClientes = []

var qtdTicketsAbertos = []
var qtdTicketsFechados = []

var cardsVagas = document.querySelector('.vagasSec')
var cardsVagas2 = document.querySelector('.vagasSec2')
var cardsVagas3 = document.querySelector('.vagasSec3')


function carregar() {

    const options = { method: 'GET' };

    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            vagas = res;
            preencherVagas();
        }
        )
        .catch(err => console.error(err));

    fetch(uriCLientes, options)
        .then(res => res.json())
        .then(res => {
            qtdClientes = res;
            cardsDetailsClientes();
        }
        )
        .catch(err => console.error(err));

    fetch(uriStatusAberto, options)
        .then(res => res.json())
        .then(res => {
            qtdTicketsAbertos = res;
            ticketsAbertos();
        }
        )
        .catch(err => console.error(err));

    fetch(uriTicketsFechados, options)
        .then(res => res.json())
        .then(res => {
            qtdTicketsFechados = res;
            ticketsFechados();
        }
        )
        .catch(err => console.error(err));

        fetch(uriMensaPagas, options)
        .then(res => res.json())
        .then(res => {
            qtdMensaPagas = res;
            mensaPagas();
        }
        )
        .catch(err => console.error(err));

        fetch(uriMensaAbertas, options)
        .then(res => res.json())
        .then(res => {
            qtdMensaAbertas = res;
            mensaAbertas();
        }
        )
        .catch(err => console.error(err));
}

function preencherVagas() {

    var tamanho = 0
    var achou = false
    var ocupadas = 0



    for (var i = 1; i < 151; i++) {

        if (i <= 50) {

            var paragrao1 = document.createElement('p')

            achou = false

            // var paragrao = document.createElement('p')

            vagas.forEach(e => {

                if (e.status_vaga == 'Aberta') {


                    if (i == e.numero_vaga) {
                        achou = true

                        tipo = e.categoria_vaga


                    }
                }
            })



            if (achou == true) {

                if (tipo == 'Ve?culo Pequeno' || tipo == 'Veículo Pequeno') {
                    paragrao1.classList = 'bx bx-cycling vaga'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas += 1
                }
                else if (tipo == 'Ve?culo M?dio' || tipo == 'Veículo Médio') {
                    paragrao1.classList = 'bx bx-car vaga'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas += 1
                }

                else if (tipo == 'Ve?culo Grande' || tipo == 'Veículo Grande') {
                    paragrao1.classList = 'bx bxs-truck vaga'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas += 1
                }


            }
            else {
                paragrao1.innerHTML = i
                document.querySelector('.mini1').appendChild(paragrao1)
                tamanho += 1

            }





        }
        else if (i >= 50 && i <= 100) {

            var paragrao2 = document.createElement('p')
            achou = false

            // var paragrao = document.createElement('p')

            vagas.forEach(e => {

                if (e.status_vaga == 'Aberta') {


                    if (i == e.numero_vaga) {
                        // if(e.categoria_vaga == 'Ve?culo M?dio')

                        // paragrao1.id = 'teste'

                        achou = true
                        tipo = e.categoria_vaga


                    }
                }
            })

            if (achou == true) {


                if (tipo == 'Ve?culo Pequeno' || tipo == 'Veículo Pequeno') {
                    paragrao2.classList = 'bx bx-cycling vaga'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas += 1
                }
                else if (tipo == 'Ve?culo M?dio' || tipo == 'Veículo Médio') {
                    paragrao2.classList = 'bx bx-car vaga'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas += 1
                }

                else if (tipo == 'Ve?culo Grande' || tipo == 'Veículo Grande') {
                    paragrao2.classList = 'bx bxs-truck vaga'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas += 1
                }


            }
            else {
                paragrao2.innerHTML = i
                document.querySelector('.mini2').appendChild(paragrao2)
                tamanho += 1

            }
        }
        else {
            var paragrao3 = document.createElement('p')
            achou = false

            // var paragrao = document.createElement('p')

            vagas.forEach(e => {

                if (e.status_vaga == 'Aberta') {


                    if (i == e.numero_vaga) {
                        // if(e.categoria_vaga == 'Ve?culo Grande')

                        // paragrao1.id = 'teste'

                        achou = true

                        tipo = e.categoria_vaga

                    }
                }

            })

            if (achou == true) {

                if (tipo == 'Ve?culo Pequeno' || tipo == 'Veículo Pequeno') {
                    paragrao3.classList = 'bx bx-cycling vaga'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas += 1
                }
                else if (tipo == 'Ve?culo M?dio' || tipo == 'Veículo Médio') {
                    paragrao3.classList = 'bx bx-car vaga'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas += 1
                }

                else if (tipo == 'Ve?culo Grande' || tipo == 'Veículo Grande') {
                    paragrao3.classList = 'bx bxs-truck vaga'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas += 1
                }


            }
            else {
                paragrao3.innerHTML = i
                document.querySelector('.mini3').appendChild(paragrao3)
                tamanho += 1

            }

        }

    }

    document.querySelector('.qtd-vagas').innerHTML = tamanho
    document.querySelector('.vagas-livres').innerHTML = tamanho
    document.querySelector('.vagas-Ocupadas').innerHTML = ocupadas




}

//PRENCHANDO OS CARDS COM AS INFORMAÇÕES

var qtdClientesAtivos = 0
var qtdClientesInativos = 0


function cardsDetailsClientes() {

    qtdClientes.forEach(q => {

        if(q.status_cli == 'Sim') {
            qtdClientesAtivos += 1
        } else if (q.status_cli == 'Não') {
            qtdClientesInativos += 1
        }
    })

    document.querySelector('.qtd-clientes').innerHTML = qtdClientes.length
    document.querySelector('.clientes-ativos').innerHTML = qtdClientesAtivos
    document.querySelector('.clientes-inativos').innerHTML = qtdClientesInativos

}

function mensaAbertas() {
    
    document.querySelector('.mensa-abertas').innerHTML = qtdMensaAbertas.length

}

function mensaPagas() {
    var valorTotal = 0

    qtdMensaPagas.forEach(p => {

        valorTotal = p.valor_tot

    })

    document.querySelector('.valor_total').innerHTML = valorTotal
    document.querySelector('.mensa-pagas').innerHTML = qtdMensaPagas.length
}

function ticketsAbertos() {

    document.querySelector('.abertos').innerHTML = qtdTicketsAbertos.length
}

function ticketsFechados() {

    document.querySelector('.pagas').innerHTML = qtdTicketsFechados.length

}






