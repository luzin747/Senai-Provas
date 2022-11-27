var uriUsuarios = 'http://localhost:3000/Usuarios'

var users = []

function ativar() {

    const options = { method: 'GET' };

    fetch(uriUsuarios, options)
        .then(res => res.json())
        .then(res => {
            users = res;
            logar();
        }
        )
        .catch(err => console.error(err));
    
}

function logar() {


    var inpUser = document.querySelector('#user').value
    var inpSenha = document.querySelector('#senha').value 

    var encontrado = false

    console.log(users)

    users.forEach(e => {

        if(inpUser == e.email && inpSenha == e.senha) {
            encontrado = true
        }

    })

    if(encontrado == true) {
        window.location.href = '../pages/Home/index.html'

    }else if (encontrado == false) {
        alert('Errouuu')

    }
}