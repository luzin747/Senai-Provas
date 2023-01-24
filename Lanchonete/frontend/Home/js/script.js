var urlPedidos = 'http://localhost:3000/Pedidos'

var pedidos = []

var cardPedido = document.querySelector('.pedido')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlPedidos, options)
        .then(res => res.json())
        .then(res => {
            pedidos = res;
            pedidos();
        }
        )
        .catch(err => console.error(err));
}
 
function cad() {
    let inptCliente = document.querySelector("#nome").value;
    let inptEndereco = document.querySelector("#nick").value;
    let inptHora = document.querySelector("#email").value;
    let inptSenha = document.querySelector("#senha").value;

    if(inptNome == "" || inptNick == "" || inptEmail == "" || inptSenha == ""){
        alert("errado")
    }else{
        let options = JSON.stringify({
            "nome_user": inptNome,
            "nickname": inptNick,
            "email": inptEmail,
            "senha": inptSenha,
            "status_user": "usuario"
        })

        fetch("http://localhost:3000/Usuarios", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": options
        })
            .then(res => {
                if(res.status == 201){
                    alert('Funcionando')
                }
            })
    }
    
}

function pedidos() {

    pedidos.forEach(p => {

        var novoCardPedido = cardPedido.cloneNode(true)

        novoCardPedido.classList.remove('model')

        novoCardPedido.querySelector('.nome_cliente').innerHTML = p.inptCliente
        novoCardPedido.querySelector('.hora_pedido').innerHTML = p.inptCliente
        novoCardPedido.querySelector('.nome_cliente').innerHTML = p.inptCliente
        novoCardPedido.querySelector('.nome_cliente').innerHTML = p.inptCliente

    })

}