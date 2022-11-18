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

    var select_status = document.querySelector(".select_status")
    let seleStatus = select_status.options[select_status.selectedIndex].value;
    if (seleStatus == 'Sim') {var ativo = 'Sim';} 
    if (seleStatus == 'Não') {var ativo = 'Não'; } 

    var telFixo = document.querySelector('.telFixo').value
    var telMovel = document.querySelector('.telMovel').value

    

    // var temFixo = false
    // var temMovel = false
    
    // if(telFixo.length > 0) {
    //      temFixo = true
    // }else if(telMovel.length > 0) {
    //      temMovel = true
    // }

    let data = {
        "nome": nome,
        "sobrenome": sobrenome,
        "data_nasci": data_nasc,
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
        "status_cli": ativo,
        "telefone_fixo": telFixo,
        "celular": telMovel
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
            if (resp.nome !== undefined && resp.sobrenome !== undefined && resp.data_nasci !== undefined && resp.cpf !== undefined && resp.rg !== undefined && resp.email !== undefined && resp.cep !== undefined && resp.endereco !== undefined && resp.numero !== undefined && resp.bairro !== undefined && resp.cidade !== undefined && resp.uf !== undefined && resp.complemento !== undefined && resp.status_cli !== undefined) {
                var modalCerto = document.querySelector('.modal-certo')

                modalCerto.classList.remove('model')

            } else {

                var modalErro = document.querySelector('.modal-errado')

                modalErro.classList.remove('model')
            }
        })

}

function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal-certo')

    modalCerto.classList.add('model')

    window.location.reload();
}

function esconderModalError() {
    var modalErro = document.querySelector('.modal-errado')

    modalErro.classList.add('model')

}

