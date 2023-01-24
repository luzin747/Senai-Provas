






function cad() {
    let cliente = document.querySelector(".cliente").value;
    let endereco = document.querySelector(".endereco").value;
    let produto = document.querySelector(".produto").value;
    let entregador = document.querySelector(".entregador").value;

    
        let options = JSON.stringify({
            "cliente": cliente,
            "endereco": endereco,
            "produto": produto,
            "dia": '12/12/1212',
            "hora_pedido": "11:00",
            "hora_entrega": "",
            "hora_fim": "",
            "entregador": entregador
        })

        fetch("http://localhost:3000/Pedidos", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": options
        })
            .then(res => {
                if (res.status == 201) {
                    alert('Funcionando')
                }
            })
    

}