var users = [

    {
        "username": "admin" ,
        "password": "admin" 

    }

]

function logar() {

    var user = document.querySelector('.username').value
    var senha = document.querySelector('.senha').value

    users.forEach(e => {

        if(user == e.username && senha == e.password) {
            window. location="./pages/home/home.html"
        }
        else {
            alert('Crecenciais erradas')
        }
    })
}