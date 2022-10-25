var uriCadastra = 'http://localhost:3000/clientes'
var uriTell = 'http://localhost:3000/telefones'


function cadastrarCliente() {

    var nome = document.querySelector('.nome').value
    var sobrenome = document.querySelector('.sobrenome').value
    var data_nasc = document.querySelector('.data_nasci').value
    var cpf = document.querySelector('.cpf').value
    var rg = document.querySelector('.rg').value
    var email = document.querySelector('.email').value
    var cep = document.querySelector('.cep').value
    var endereco = document.querySelector('.endereco').value
    var numero = document.querySelector('.numero').value
    var bairro = document.querySelector('.bairro').value
    var cidade = document.querySelector('.cidade').value
    var uf = document.querySelector('.uf').value
    var complemento = document.querySelector('.complemento').value
    // var status_cli = document.querySelector('.status_cli').value

    var select_status = document.querySelector(".select_status")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Sim') {var ativo = 'Sim';} 
    if (seleStatus == 'Não') {var ativo = 'Não'; } 


    let data = {
        "nome": nome,
        "sobrenome": sobrenome,
        "data_nasc": data_nasc,
        "cpf": cpf,
        "rg": rg,
        "email": email,
        "cep": cep,
        "endereco": endereco,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "uf": uf,
        "complemento": complemento,
        "status_cli": ativo
    };

    console.log(data);

    fetch(uriCadastra, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })

        .then(res => { return res.json() })
        .then(resp => {
            if (resp.nome !== undefined && resp.sobrenome !== undefined && resp.data_nasc !== undefined && resp.cpf !== undefined && resp.rg !== undefined && resp.email !== undefined && resp.cep !== undefined && resp.endereco !== undefined && resp.numero !== undefined && resp.bairro !== undefined && resp.cidade !== undefined && resp.uf !== undefined && resp.complemento !== undefined && resp.status_cli !== undefined) {
                alert("Cliente cadastrado com sucesso.")
                window.location.reload()
            } else {
                alert("Erro Quando Cadastra")


            }
        })


        let telefone = {
            // "id_cli": nome,
            "tipo_tel": nome,
            "telefone": 
           
        };
    
        console.log(data);
    
        fetch(uriTell, {
            "method": "CREATE",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
    
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.nome !== undefined && resp.sobrenome !== undefined && resp.data_nasc !== undefined && resp.cpf !== undefined && resp.rg !== undefined && resp.email !== undefined && resp.cep !== undefined && resp.endereco !== undefined && resp.numero !== undefined && resp.bairro !== undefined && resp.cidade !== undefined && resp.uf !== undefined && resp.complemento !== undefined && resp.status_cli !== undefined) {
                    alert("Cliente cadastrado com sucesso.")
                    window.location.reload()
                } else {
                    alert("Erro Quando Cadastra")
    
    
                }
            })

}

