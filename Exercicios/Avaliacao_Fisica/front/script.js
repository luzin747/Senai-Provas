var uriPacientes = 'http://localhost:3000/paciente'

var pacientes = []

var linhaTabelas = document.querySelector('.td_paciente')

function carregar() {
    const options = { method: 'GET' };

    fetch(uriPacientes, options)
        .then(res => res.json())
        .then(res => {
            pacientes = res;
            preencherTabela()
        }
        )
        .catch(err => console.error(err));
}

function preencherTabela() {

    pacientes.forEach(p => {

        var novalinhaTabelas = linhaTabelas.cloneNode(true)
        novalinhaTabelas.classList.remove('model')

        console.log(p);

        novalinhaTabelas.querySelector('.id').innerHTML = p.id_paciente
        novalinhaTabelas.querySelector('.nome').innerHTML = p.nome_completo
        novalinhaTabelas.querySelector('.data').innerHTML = p.nascimento
        novalinhaTabelas.querySelector('.peso').innerHTML = p.peso + 'kg'
        novalinhaTabelas.querySelector('.altura').innerHTML = p.altura + 'm'

        const dataString = p.nascimento;

        // Cria uma nova instância do objeto Date com a data em questão
        const data = new Date(dataString);

        // Obtém o ano da data
        const ano = data.getFullYear();

        // Imprime o ano no console
        console.log(`O ano da data é ${ano}.`);

        const anoAtual = new Date().getFullYear();

        const anoNascimento = ano; // Substitua pelo ano de nascimento da pessoa

        // Calcula a idade da pessoa
        novalinhaTabelas.querySelector('.idade').innerHTML = anoAtual - anoNascimento;


        const peso = p.peso; // Substitua pelo peso da pessoa em kg
        const altura = p.altura; // Substitua pela altura da pessoa em metros

        // Calcula o índice de massa corporal (IMC)
        const imc = peso / (altura * altura);

        novalinhaTabelas.querySelector('.imc').innerHTML = imc.toFixed(2)


        let diagnostico;
        if (imc < 18.5) {
            diagnostico = "Abaixo do peso";
        } else if (imc < 25) {
            diagnostico = "Peso normal";
        } else if (imc < 30) {
            diagnostico = "Sobrepeso";
        } else if (imc < 35) {
            diagnostico = "Obesidade grau 1";
        } else if (imc < 40) {
            diagnostico = "Obesidade grau 2";
        } else {
            diagnostico = "Obesidade grau 3";
        }

        novalinhaTabelas.querySelector('.diagnostico').innerHTML = diagnostico

        document.querySelector('.tbody').appendChild(novalinhaTabelas)


    })

}



function Cadastrar() {

    var nome = document.querySelector('.nome_forms').value
    var data = document.querySelector('.data_forms').value
    var peso = document.querySelector('.peso_forms').value
    var altura = document.querySelector('.altura_forms').value

    let paciente = {
        "nome_completo": nome,
        "nascimento": data,
        "peso": peso,
        "altura": altura

    }

    fetch(uriPacientes, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(paciente)
    })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                alert('Castrado com Sucesso')

                window.location.reload();
            }

        })
}

function Excluir(e) {

    var id = e.parentNode.parentNode.querySelector('.id').innerHTML
    var nome = e.parentNode.parentNode.querySelector('.nome').innerHTML
    var data = e.parentNode.parentNode.querySelector('.data').innerHTML
    var peso = e.parentNode.parentNode.querySelector('.peso').innerHTML
    var altura = e.parentNode.parentNode.querySelector('.altura').innerHTML



    let paciente = {
        "nome_completo": nome,
        "nascimento": data,
        "peso": peso,
        "altura": altura

    }

    console.log(paciente);

    fetch(uriPacientes + '/' + id, {
        "method": "Delete",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(paciente)
    })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                alert('Excluido com Sucesso')

                window.location.reload();
            }

        })
}