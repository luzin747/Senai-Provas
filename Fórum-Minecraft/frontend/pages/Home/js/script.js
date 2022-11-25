


// FAZENDO O MENU DROPDOWN 
function menuDow() {

    var down = document.querySelector('.dropDown')

    down.classList.toggle('model')

}

function curtir() {
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
