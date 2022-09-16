var cardsVagas = document.querySelector('.vagasSec')
var cardsVagas2 = document.querySelector('.vagasSec2')
var cardsVagas3 = document.querySelector('.vagasSec3')

var rep = 51

var novoCardsVagas = cardsVagas.cloneNode(true)

for (var i = 2 ; i < 51 ; i++) {
    
    var paragrao1 = document.createElement('p')
    paragrao1.innerHTML = i

    var paragrao2 = document.createElement('p')
    paragrao2.innerHTML = i

    var paragrao3 = document.createElement('p')
    paragrao3.innerHTML = i
    
    document.querySelector('.mini1').appendChild(paragrao1)
    document.querySelector('.mini2').appendChild(paragrao2)
    document.querySelector('.mini3').appendChild(paragrao3)
    

}

