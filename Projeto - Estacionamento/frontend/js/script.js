var uri = 'http://localhost:3000/vagas'
var vagas = []

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
}

function preencherVagas() {
   
    var tamanho = 0
    vagas.map(e => [
        
    ])
    for (var i = 1; i < 151; i++) {
    
        if (i <= 50) {

            var paragrao1 = document.createElement('p')
            paragrao1.innerHTML = i
            document.querySelector('.mini1').appendChild(paragrao1)
            tamanho += 1
            
            vagas.forEach(e => {
                if(i == e.id_vaga) {
                    if(e.categoria_vaga == 'Ve?culo Pequeno')
                    paragrao1.classList = 'bx bx-cycling'
                    paragrao1.id = 'teste'
                    
                }
            })
        }
        else if (i >= 50 && i <= 100) {
            var paragrao2 = document.createElement('p')
            paragrao2.innerHTML = i
            document.querySelector('.mini2').appendChild(paragrao2)
            tamanho += 1
            vagas.forEach(e => {
                if(i == e.id_vaga) {
                paragrao2.style.background = "blue"
                    
                }
            })
        }
        else {
            var paragrao3 = document.createElement('p')
            paragrao3.innerHTML = i
            document.querySelector('.mini3').appendChild(paragrao3)
            tamanho += 1
            vagas.forEach(e => {
                if(i == e.id_vaga) {
                paragrao3.style.background = "green"
                    
                }
            })
        }
    
    }
    
    document.querySelector('.qtd-vagas').innerHTML = tamanho
    document.querySelector('.vagas-livres').innerHTML = tamanho
    

    

}






