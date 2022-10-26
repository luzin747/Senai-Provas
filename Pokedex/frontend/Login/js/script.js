const users = [
    {
        'user': 'admin',
        'senha': 'admin'
    }
]

function logar() {

    var inpUser = document.querySelector('#user').value
    var inpSenha = document.querySelector('#senha').value 

    users.forEach(e => {

        if(inpUser == e.user && inpSenha == e.senha) {
            window. location. href = '../../Pages/Home/index.html'
        }else {
            alert('Errouuu')
        }

    })
}