var uri = 'https://patrimoniomongo.herokuapp.com/read/'
var uriCadastra = 'https://patrimoniomongo.herokuapp.com/create'

var conteudo = document.querySelector('.cont-Conteudo')

var items = []



function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            items = res.items;
            // console.log(prods)
            preencherProds();

        }
        )
        .catch(err => console.error(err))

        // //Excluir 
        // fetch(uriDepartas, options)
        // .then(res => res.json())
        // .then(res => {
        //     depto = res;
        //     excluir();
        // }
        // )
        // .catch(err => console.error(err));


    // fetch(uriProdut, options)
    //     .then(res => res.json())
    //     .then(res => {
    //         prod = res;
    //         preencherTabelaProd();
    //     }
    //     )
    //     .catch(err => console.error(err));
    // fetch(uriProdut, options)
    //     .then(res => res.json())
    //     .then(res => {
    //         prod = res;
    //         calcular();
    //     }
    //     )
    //     .catch(err => console.error(err));

    //     fetch(uriSolicita, options)
    //     .then(res => res.json())
    //     .then(res => {
    //         solicitas = res;
    //         preencherTabelaSolicita();
    //     }
    //     )
    //     .catch(err => console.error(err));
        
}

function preencherProds() {

    items.forEach(e => {
        
        var novoConteudo = conteudo.cloneNode(true)

        novoConteudo.classList.toggle("model")

        novoConteudo.querySelector('.img_prod').src = 'assets/' + e.img
        novoConteudo.querySelector('.serial_prod').innerHTML = e._id
        novoConteudo.querySelector('.cod_prod').innerHTML = e.ni
        novoConteudo.querySelector('.data_prod').innerHTML = e.aquisicao.slice(0,10)
        novoConteudo.querySelector('.nome_prod').innerHTML = e.denominacao
        // novoConteudo.querySelector('.nome_Dpto').innerHTML = e.valor
        // novoConteudo.querySelector('.nome_Dpto').innerHTML = e.Nome_Depto

        document.querySelector('.tbody').appendChild(novoConteudo)
        // console.log(i)
    })


    // teste.forEach(e => {

    // })

   

}

function mostrarModal() {

    // alert('asd')
    var modal = document.querySelector('.modal')
    // var botaoCancelar = document.querySelector('.b-cancel')
    // document.querySelector('#cont').style.background = '#2A2072';
    // document.querySelector('.corpo').toggle.style.background = 'red';

    modal.classList.toggle('model')

    var teste = document.querySelector('.teste')

    teste.classList.toggle('model')


}
function fecharModal() {
    // document.querySelector('#cont').style.background = '';
    var modal = document.querySelector('.modal')
    modal.classList.toggle('model')

    var teste = document.querySelector('.teste')

    teste.classList.toggle('model')

    
}
function cadastrar() {

    var ni = document.querySelector('.ni_prod').value
    var aquisicao = document.querySelector('.aquisi').value
    var denominacao = document.querySelector('.denomi').value
    var valor = document.querySelector('.valor').value
    var img = document.querySelector('.imagem').value


    let data = {
        "ni": ni,
        "aquisicao": aquisicao,
        "denominacao": denominacao,
        "valor": valor,
        "img": img,
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
            if (resp.ni !== undefined && resp.aquisicao !== undefined && resp.denominacao !== undefined && resp.valor !== undefined && resp.img) {
                alert("Produto cadastrado com sucesso.")
            } else {
            //     var modal = document.querySelector('.modal')

            //     modal.classList.toggle('modal')

            //    var mini = document.querySelector('.mini-modal')

            //    mini.classList.toggle('modal')

                alert("Produto Cadastrado com Sucesso")
                window.location.reload()


            }
        })
}
function excluir(e) {

    var id = e.parentNode.parentNode.querySelector('.serial_prod').innerHTML



    console.log(id)

    let data = {
        "id": id
    }

    var teste = 'https://patrimoniomongo.herokuapp.com/del/id/' + id
    console.log(data)

    fetch(teste, {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        console.log(resp)
        if(resp.id !== undefined) {
            alert("Produto Excluido Com Suesso! de vez agora");
            window.location.reload();
            
        }else {
            alert("Produto Excluido com Sucesso!");
            window.location.reload();
        }
    });
}

