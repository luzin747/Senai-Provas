var uri = 'http://localhost:3000/vagas'
var uriClientes = 'http://localhost:3000/clientes/vw_clientes'
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

        fetch(uriClientes, options)
        .then(res => res.json())
        .then(res => {
            clientes = res;
            preencheCards();
        }
        )
        .catch(err => console.error(err));
}

function preencherVagas() {
   
    var tamanho = 0
    var achou = false
    var ocupadas = 0
    vagas.map(e => [
        
    ])
    for (var i = 1; i < 151; i++) {
    
        if (i <= 50) {

            var paragrao1 = document.createElement('p')

            achou = false
            
            // var paragrao = document.createElement('p')

            vagas.forEach(e => {
                if(i == e.id_vaga) {
                    // if(e.categoria_vaga == 'Ve?culo Pequeno')
                        
                        // paragrao1.id = 'teste'
                        
                        achou = true

                        tipo = e.categoria_vaga
                        
                        
                }
            })

            if(achou == true){

                if(tipo == 'Ve?culo Pequeno') {
                    paragrao1.classList = 'bx bx-cycling'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas+= 1
                }
                else if (tipo == 'Ve?culo M?dio') {
                    paragrao1.classList = 'bx bx-car'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas+= 1
                }

                else if (tipo == 'Ve?culo Grande') {
                    paragrao1.classList = 'bx bxs-truck'
                    document.querySelector('.mini1').appendChild(paragrao1)
                    ocupadas+= 1
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
                if(i == e.id_vaga) {
                    // if(e.categoria_vaga == 'Ve?culo M?dio')
                        
                        // paragrao1.id = 'teste'
                        
                        achou = true
                        tipo = e.categoria_vaga

                        
                }
            })

            if(achou == true){

                if(tipo == 'Ve?culo Pequeno') {
                    paragrao2.classList = 'bx bx-cycling'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas+= 1
                }
                else if (tipo == 'Ve?culo M?dio') {
                    paragrao2.classList = 'bx bx-car'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas+= 1
                }

                else if (tipo == 'Ve?culo Grande') {
                    paragrao2.classList = 'bx bxs-truck'
                    document.querySelector('.mini2').appendChild(paragrao2)
                    ocupadas+= 1
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
                if(i == e.id_vaga) {
                    // if(e.categoria_vaga == 'Ve?culo Grande')
                        
                        // paragrao1.id = 'teste'

                        achou = true
                        
                        tipo = e.categoria_vaga

                }
            })

            if(achou == true){

                if(tipo == 'Ve?culo Pequeno') {
                    paragrao3.classList = 'bx bx-cycling'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas+= 1
                }
                else if (tipo == 'Ve?culo M?dio') {
                    paragrao3.classList = 'bx bx-car'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas+= 1
                }

                else if (tipo == 'Ve?culo Grande') {
                    paragrao3.classList = 'bx bxs-truck'
                    document.querySelector('.mini3').appendChild(paragrao3)
                    ocupadas+= 1
                } 
            }
            else {
                paragrao3.innerHTML = i
                document.querySelector('.mini3').appendChild(paragrao3)
                tamanho += 1

            }
    
    }
    
}

//Qtd de Clientes Cadastrados



    
    document.querySelector('.qtd-vagas').innerHTML = tamanho
    document.querySelector('.vagas-livres').innerHTML = tamanho
    document.querySelector('.vagas-Ocupadas').innerHTML = ocupadas
    

    

}


function preencheCards() {

    var qtd = 0

    clientes.forEach(c => {
        qtd += 1
    })

    document.querySelector('.qtd_clientes').innerHTML = qtd

}



