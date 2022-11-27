var uriQuestions = 'http://localhost:3000/Perguntas'
var uriUsuarios = 'http://localhost:3000/Usuarios'


var questions = []
var questionsAnswer = []
var usuarios = []


var cardResposta = document.querySelector('.answer')
var cardQuestion = document.querySelector('.questions')


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
}

function preencher() {

    document.querySelector('.qtdPerguntas').innerHTML = questions.length
    document.querySelector('.qtdUsuarios').innerHTML = usuarios.length


}



function ativarFetchesPerguntas() {

    const options = { method: 'GET' };

    fetch(uriQuestions, options)
        .then(res => res.json())
        .then(res => {
            questions = res;
            cardsPerguntas();
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

}
var qtdRep = 0
function cardsPerguntas() {

    console.log('entrando')

    qtdRep += 1

   questions.reverse()


    if (qtdRep == 1) {
        questions.forEach((q, i) => {

            if (i < 3) {
                var novoCardQuestion = cardQuestion.cloneNode(true)

                novoCardQuestion.classList.toggle('model')

                var idUsuario = q.id_User

                usuarios.forEach(u => {

                    if (idUsuario == u.id_user) {
                        novoCardQuestion.querySelector('.nome-user-card').innerHTML = u.nome_user

                    }

                })

                var data = q.data

                const [ano,mes,juncao] = data.split('-')
                
                var dia = juncao[0] + juncao[1]
                
                var dataCompleta = dia + ' ' + mes + ' ' + ano

                novoCardQuestion.querySelector('.id_pergunta').innerHTML = q.id_pergunta
                novoCardQuestion.querySelector('.data-question').innerHTML = '- ' +dataCompleta
                novoCardQuestion.querySelector('.question-p').innerHTML = q.pergunta
                novoCardQuestion.querySelector('.tema-card-question').innerHTML = q.tema

                document.querySelector('.container-cards').appendChild(novoCardQuestion)
            }

        })
    }


}

function ativarModalResposta(e) {

    
    var id_card = e.parentNode.parentNode.querySelector('.id_pergunta').innerHTML
    
    var uriTest = 'http://localhost:3000/Perguntas/' + id_card

    console.log(uriTest)
    
    const options = { method: 'GET' };

    fetch(uriTest, options)
        .then(res => res.json())
        .then(res => {
            questionsAnswer = res;
            modalRespostas();
        }
        )
        .catch(err => console.error(err));

        // fetch(uriUsuarios, options)
        // .then(res => res.json(e))
        // .then(res => {
        //     usuarios = res;
        //     modalRespostas();
        // }
        // )
        // .catch(err => console.error(err));

    
}


function modalRespostas() {

    


}



// FAZENDO O MENU DROPDOWN 
function menuDow() {

    var down = document.querySelector('.dropDown')

    down.classList.toggle('model')

}

function curtir(e) {
    var curtirVazio = document.querySelector('.curtir-vazio')
    var curtirCheio = document.querySelector('.curtir-cheio')

    curtirVazio.classList.toggle('model')
    curtirCheio.classList.toggle('model')
}

function favoritar() {
    var favoritarVazio = document.querySelector('.favoritar-vazio')
    var favoritarCheio = document.querySelector('.favoritar-cheio')

    favoritarVazio.classList.toggle('model')
    favoritarCheio.classList.toggle('model')
}
