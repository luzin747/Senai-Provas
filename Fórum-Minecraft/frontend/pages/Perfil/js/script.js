var uriQuestions = 'http://localhost:3000/Perguntas'
var uriUsuarios = 'http://localhost:3000/Usuarios'
var uriRespostas = 'http://localhost:3000/Respostas'


var questions = []
var questionsAnswer = []
var usuariosAnsert = []

var userPergunta = []
var respostas = []

var usuarios = []


var cardResposta = document.querySelector('.answer')
var cardQuestion = document.querySelector('.questions')
var questRespostas = document.querySelector('.answer-card')

var secUserModal = document.querySelector('.usuarios-modal')
var secAdminModal = document.querySelector('.contribuidores')


function carregar() {

    const options = { method: 'GET' };

    fetch(uriQuestions, options)
        .then(res => res.json())
        .then(res => {
            questions = res;
            preencher();
        }
        )
        .catch(err => console.error(err));

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            usuarios = res;
            preencher();
        }
        )
        .catch(err => console.error(err));



    ativarFetchesPerguntas()
    var perfilAcoes = document.querySelector(".perfil-acoes")
    var acoes = document.querySelector(".acoes")
    var st = document.querySelector(".status").innerHTML

    const header = document.querySelector(".header-User")
    const tela2 = document.querySelector(".tela2")
    console.log(st)
    if (st === "Moderador") {
        header.classList.remove('tela2')
        var up = document.createElement('i')
        up.classList = ' bx bx-edit'
        up.setAttribute('onClick', 'abrirInfos(this)')
        acoes.appendChild(up)

        var del = document.createElement('button')
        del.classList = 'bx bxs-trash-alt'
        del.setAttribute('onClick', 'deleteUser(this)')

        perfilAcoes.appendChild(del)

    }

}
function deleteUser(e) {
    var idDel = document.querySelector(".inpIdUser").innerHTML
    let data = {
        "id_user": idDel,
    }

    fetch('http://localhost:3000/delete', {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })

        .then(res => { return res.json() })
        .then(resp => {

            var header = document.querySelector(".header-User")
           
            header.classList.add('tela2')
            ModalCreeper()
            header.cloneNode(true)
            setTimeout(() => {
                ModalCreeper()
                window.location.href = '../Home/index.html'
            }, 4300)
        })
}
function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal-certo')

    modalCerto.classList.add('model')
}

function abrirModalUpdate(){
    var confirmar = document.querySelector(".confirm")
    confirmar.classList.toggle('tela4')
}
function update(){
    var idUp = document.querySelector(".inpIdUser").innerHTML
    var nomeUp = document.querySelector(".inpNomeUser").innerHTML
    var emailUp = document.querySelector(".inpEmailUser").innerHTML
    var nickUp = document.querySelector(".inpNickUser").innerHTML
    var select_status = document.querySelector("#select_status")

    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'admin') { var status = 'admin' }
    if (seleStatus == 'usuario') { var status = 'usuario' }

    let options = JSON.stringify({
        "id_user": idUp,
        "nome_user": nomeUp,
        "nickname": nickUp,
        "email": emailUp,
        "status_user": status
    })
    console.log(options)

    fetch("http://localhost:3000/Usuarios", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(resp => { return resp })
        .then(resp => {
            var modalCerto = document.querySelector('.modal-certo')
                modalCerto.classList.remove('model')
                abrirModalUpdate()
            setTimeout(() => {
                esconderModalCheck()
                window.location.reload()
            }, 4350)
            
            
           
        })

}

function ModalCreeper() {
    var teste = document.querySelector(".teste")

    teste.classList.toggle('m')
    console.log("aaa")

}

function abrirInfos(e) {
    const sta = e.parentNode.parentNode.querySelector(".nome-user-modal").innerHTML
    const options = { method: 'GET' };

    fetch('http://localhost:3000/nick/' + sta, options)
        .then(response => response.json())
        .then(resp => {
            if(resp.erro === undefined) {
                localStorage.setItem("data", JSON.stringify({"nome": resp[0].nome_user, "email":resp[0].email, "nick": resp[0].nickname, "id":resp[0].id_user, "status":resp[0].status_user}))
                window.location.reload();
                window.location.href = '../Perfil/perfil.html'
                console.log(resp)
            }

           
        })
        
        console.log(sta)
}

function preencher() {

    document.querySelector('.qtdPerguntas').innerHTML = questions.length
    document.querySelector('.qtdUsuarios').innerHTML = usuarios.length

    usuarios.forEach(u => {



        if (u.status_user == 'usuario') {
            var novoUser = secUserModal.cloneNode(true)
            novoUser.classList.remove('model')
            novoUser.style.display = 'flex'

            novoUser.querySelector('.nome-user-modal').innerHTML = u.nickname
            document.querySelector('.agradecimentos').appendChild(novoUser)
        }

        if (u.status_user == 'admin') {

            var novoadmin = secAdminModal.cloneNode(true)
            novoadmin.classList.remove('model')
            novoadmin.style.display = 'flex'

            novoadmin.querySelector('.nome-admin-modal').innerHTML = u.nickname
            document.querySelector('.cont-contribuidores').appendChild(novoadmin)
        }
    })

}


function ativarFetchesPerguntas(e) {

    // var tema = e.querySelector('.nameTema').innerHTML

    var url = 'http://localhost:3000/Feed'
    const options = { method: 'GET' };

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            questions = res;
            cardsPerguntas(e);
        }
        )
        .catch(err => console.error(err));

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            usuarios = res;
            cardsPerguntas();
        }
        )
        .catch(err => console.error(err));

    fetch(uriRespostas, options)
        .then(res => res.json())
        .then(res => {
            respostas = res;
            cardsPerguntas();
        }
        )
        .catch(err => console.error(err));

}

var qtdRep = 0

var idIgual = false

function cardsPerguntas() {

    // questions.reverse()

    qtdRep += 1
    if (qtdRep == 1) {

        

        questions.forEach((q, i) => {


            if(q.id_User == userinfo2.id) {

            
            usuarios.forEach(u => {

                if (u.id_user == userinfo.id) {

                    idIgual = true
                }

            })


            if (idIgual == true) {
                console.log('é igual')


                var novoCardQuestion = cardQuestion.cloneNode(true)

                novoCardQuestion.classList.toggle('model')

                var idUsuario = q.id_User

                usuarios.forEach(u => {

                    if (idUsuario == u.id_user) {
                        novoCardQuestion.querySelector('.nome-user-card').innerHTML = u.nome_user

                    }

                })

                var data = q.data

                const [ano, mes, juncao] = data.split('-')

                var dia = juncao[0] + juncao[1]

                var dataCompleta = dia + '/' + mes + '/' + ano

                novoCardQuestion.querySelector('.id_usuario').innerHTML = q.id_User
                novoCardQuestion.querySelector('.id_pergunta').innerHTML = q.id_pergunta
                novoCardQuestion.querySelector('.data-question').innerHTML = '- ' + dataCompleta
                novoCardQuestion.querySelector('.question-p').innerHTML = q.pergunta
                novoCardQuestion.querySelector('.tema-card-question').innerHTML = q.tema

                document.querySelector('.container-cards').appendChild(novoCardQuestion)

            }



        }


        })


    }


}

function ativarModalResposta(e) {

    var btnVerMais = e.parentNode.querySelector('.cont-ver-mais-resposta')

    btnVerMais.classList.add('model')

    var uriRespostas = 'http://localhost:3000/Feed'

    const options = { method: 'GET' };

    fetch(uriRespostas, options)
        .then(res => res.json(e))
        .then(res => {
            respostas = res;
            modalRespostas(e);
        }
        )
        .catch(err => console.error(err));




}

function modalRespostas(e) {


    var id_perg = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML
    var mResposta = e.parentNode.parentNode.querySelector('.user-answer')

    mResposta.classList.remove('model')

    respostas.forEach(r => {


        if (id_perg == r.id_pergunta) {

            var divAC = document.createElement('div')
            divAC.classList.add('answer-card')

            // PRIMEIRA DIV
            var divHUA = document.createElement('div')
            divHUA.classList.add('header-user-answer')

            var imgResp = document.createElement('img')
            imgResp.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/160745e3-9f8c-46b9-a326-cc9efff1e5aa/d7kxdcf-094a44e7-d459-47b6-8bf8-689a3a84d106.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2MDc0NWUzLTlmOGMtNDZiOS1hMzI2LWNjOWVmZmYxZTVhYVwvZDdreGRjZi0wOTRhNDRlNy1kNDU5LTQ3YjYtOGJmOC02ODlhM2E4NGQxMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l8kabRud63qyIqTQtuZ-7PjI9yOxibEgYdsK2zaUHgc'

            var divUAT = document.createElement('div')
            divUAT.classList.add('user-answer-title')

            // ******* FORMATANDO A DATA ***********
            var data = r.dataResp

            const [ano, mes, juncao] = data.split('-')

            var dia = juncao[0] + juncao[1]

            var dataCompleta = dia + '/' + mes + '/' + ano

            //*********** FIM DA FORMATAÇÃO DA DATA *********** 

            var hTitleResp = document.createElement('h5')
            hTitleResp.classList.add('usuario-resp')
            hTitleResp.innerHTML = r.nickname

            var spanDR = document.createElement('span')
            spanDR.classList.add('data-resp')
            spanDR.innerHTML = dataCompleta

            divHUA.appendChild(imgResp)
            divHUA.appendChild(divUAT)
            divUAT.appendChild(hTitleResp)
            divUAT.appendChild(spanDR)

            //SEGUNDA DIV
            var divCAR = document.createElement('div')
            divCAR.classList.add('cont-answer-r')

            var pAR = document.createElement('p')
            pAR.classList.add('answer-r')
            pAR.innerHTML = r.resposta

            divCAR.appendChild(pAR)
            divAC.appendChild(divHUA)
            divAC.appendChild(divCAR)

            console.log(divAC)

            mResposta.appendChild(divAC)
        }

    })



}

function fechandoModal(e) {

    var btnVerMais = e.parentNode.parentNode.parentNode.querySelector('.cont-ver-mais-resposta')

    btnVerMais.classList.remove('model')
    console.log(btnVerMais)

    for (let i = 1; i > 0; i++) {
        var mResposta = e.parentNode.parentNode.querySelector('.user-answer')
        var secResp = document.querySelector('.answer-card')

        mResposta.classList.add('model')
        mResposta.removeChild(secResp)

    }

}

function modalPergunta() {
    var modalQuestion = document.querySelector('.modal-pergunta')
    var texto = document.querySelector('#txtPerguntar')

    texto.value = ''

    modalQuestion.classList.remove('model')

    document.querySelector('#container').style.opacity = '0.8'

    // var hoje = new Date()
    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()

    dataAtual = dia + '/' + mes + '/' + ano;

    document.querySelector('.data-modal-quest').innerHTML = dataAtual
}

function fecharModalPergunta() {
    var modalQuestion = document.querySelector('.modal-pergunta')

    modalQuestion.classList.toggle('model')
    document.querySelector('#container').style.opacity = ''

}

function cadastrarPergunta() {

    var hoje = new Date()
    var dia = String(hoje.getDate()).padStart(2, '0')
    var mes = String(hoje.getMonth() + 1).padStart(2, '0')
    var ano = hoje.getFullYear()

    dataFinal = ano + '/' + mes + '/' + dia;

    var txtPergunta = document.querySelector('#txtPerguntar').value

    if (txtPergunta.length > 0) {
        var select_status = document.querySelector(".select_status")
        let seleStatus = select_status.options[select_status.selectedIndex].value;
        if (seleStatus == 'crafts') { var tema = 'CRAFTS' }
        if (seleStatus == 'bugs') { var tema = 'BUGS' }
        if (seleStatus == 'dicas') { var tema = 'DICAS' }
        if (seleStatus == 'mods') { var tema = 'MODS' }

        let data = {
            "id_user": 2,
            "tema": tema,
            "pergunta": txtPergunta,
            "data": dataFinal

        }
        console.log(data)

        fetch(uriQuestions, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })

            .then(res => { return res.json() })
            .then(resp => {
                if (resp.id_user !== undefined && resp.tema !== undefined && resp.pergunta !== undefined && resp.data !== undefined) {
                    alert('Deu Certo!')
                }
            })
    }
    else {
        alert('Insira a Sua Pergunta antes de enviar!')
    }





}


// FAZENDO O MENU DROPDOWN 
function menuDow() {

    var down = document.querySelector('.dropDown')

    down.classList.toggle('model')

}
function curtir(e) {
    var curtirVazio = e.parentNode.querySelector('.curtir-vazio')
    var curtirCheio = e.parentNode.querySelector('.curtir-cheio')

    curtirVazio.classList.toggle('model')
    curtirCheio.classList.toggle('model')
}
function favoritar(e) {
    var favoritarVazio = e.parentNode.querySelector('.favoritar-vazio')
    var favoritarCheio = e.parentNode.querySelector('.favoritar-cheio')

    favoritarVazio.classList.toggle('model')
    favoritarCheio.classList.toggle('model')
}

//FILTRANDO
var search_btn = document.querySelector('.btn-filter')
const INPUT_BUSCA = document.querySelector('.inpFiltrar')
const PERGUNTAS = document.querySelector('.container-cards')

search_btn.addEventListener('click', () => {

    let expressao = INPUT_BUSCA.value

    let linhas = PERGUNTAS.getElementsByClassName('questions')

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

// var userinfo = JSON.parse(localStorage.getItem("info"));
// const emailUser = document.querySelector(".email");

// emailUser.innerHTML = userinfo.email;
// id.innerHTML = userinfo.id;

// const nickName = document.querySelector(".nicknameUser");
// const id = document.querySelector(".id");

// var userinfo = JSON.parse(localStorage.getItem("info"));

// document.querySelector(".nicknameUser").innerHTML = userinfo.nickname;
// document.querySelector(".inpNomeUser").value = userinfo.nome;
// document.querySelector(".inpEmailUser").value = userinfo.email;
// id.innerHTML = userinfo.id;



// INFOS DO USUARIO 
const emailUser = document.querySelector(".email");
const id = document.querySelector(".id");
const nick = document.querySelector(".nick");
const status = document.querySelector(".status");

var userinfo = JSON.parse(localStorage.getItem("info"));

emailUser.innerHTML = userinfo.email;
nick.innerHTML = userinfo.nick;
id.innerHTML = userinfo.id;
status.innerHTML = userinfo.status;
if (status.innerHTML == "admin") {
    status.innerHTML = "Moderador"
} else {
    status.innerHTML = "Usuário"
}

const nickname = document.querySelector(".inpNickUser");
const email = document.querySelector(".inpEmailUser");
const nomeUser = document.querySelector(".inpNomeUser");
const idUsuario = document.querySelector(".inpIdUser");

var userinfo2 = JSON.parse(localStorage.getItem("data"));

nickname.innerHTML = userinfo2.nick;
email.innerHTML = userinfo2.email;
nomeUser.innerHTML = userinfo2.nome;
idUsuario.innerHTML = userinfo2.id;


function testessss(e) {

    const TOPICO_DESEJADO = e.querySelector('.nameTema').innerHTML

    let expressao = TOPICO_DESEJADO

    let linhas = PERGUNTAS.getElementsByClassName('questions')

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

}