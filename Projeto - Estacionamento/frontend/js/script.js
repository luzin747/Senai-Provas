var cardsVagas = document.querySelector('.vagasSec')
var cardsVagas2 = document.querySelector('.vagasSec2')
var cardsVagas3 = document.querySelector('.vagasSec3')

var rep = 51

var novoCardsVagas = cardsVagas.cloneNode(true)

var tamanho = 0

for (var i = 1 ; i < 151 ; i++) {

    if(i <= 50) {
        var paragrao1 = document.createElement('p')
        paragrao1.innerHTML = i
        document.querySelector('.mini1').appendChild(paragrao1)
        tamanho +=1
    }
    else if(i >= 50 && i <= 100) {
        var paragrao2 = document.createElement('p')
        paragrao2.innerHTML = i
        document.querySelector('.mini2').appendChild(paragrao2)
        tamanho +=1
    }
    else {
        var paragrao3 = document.createElement('p')
        paragrao3.innerHTML = i
        document.querySelector('.mini3').appendChild(paragrao3)
        tamanho +=1
    }

}

document.querySelector('.qtd-vagas').innerHTML = tamanho
document.querySelector('.vagas-livres').innerHTML = tamanho

