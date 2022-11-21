var uriPokemon = 'https://pokeapi.co/api/v2/pokemon/'

var cardsPokes = document.querySelector('.card-pokes')
var detailsPokes = document.querySelector('.poke-info')


function carregar() {

preencheCards()
   

}

function preencheCards() {

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for(let i = 1; i <= 15; i++) {

        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        
    }

    Promise.all(pokemonPromises)
      .then(pokemons => {
        console.log(pokemons)

        const lisPokemons = pokemons.reduce((accumulator, pokemon) => {

            var novoCardPokemons = cardsPokes.cloneNode(true)

            novoCardPokemons.classList.remove('model')

            novoCardPokemons.querySelector('.gif-poke').src = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
            novoCardPokemons.querySelector('.number-poke').innerHTML = pokemon.id
            novoCardPokemons.querySelector('.name-poke').innerHTML = pokemon.name
            var nomePokemon = pokemon.types.map(typeInfo => typeInfo.type.name)

            novoCardPokemons.querySelector('.type-poke').innerHTML = nomePokemon
            // novoCardPokemons.querySelector('.type-poke').innerHTML = pokemon.types[1].type.name

                        
            document.querySelector('.cont-card-pokes').appendChild(novoCardPokemons)
            

        }, '')
      })

}

var pokem = []

function ativarModal(e) {
    var id_poke = e.querySelector('.number-poke').innerHTML
    
    const options = { method: 'GET' };
    
    fetch(uriPokemon + id_poke, options)
    .then(res => res.json())
    .then(data => {
            pokem = data;  
            pokemonsDetails(e) 
            // console.log(uriPokemon + id_poke)
        }
        )
        .catch(err => console.error(err));
}


function pokemonsDetails(e) {

    var id_poke = e.querySelector('.number-poke').innerHTML


    console.log(pokem)

    detailsPokes.classList.remove('model')
    detailsPokes.querySelector('.img-poke').src = `img/images-pokes/${id_poke}.png`
    detailsPokes.querySelector('.number-poke').innerHTML = 'Nª' + pokem.id
    detailsPokes.querySelector('.name-poke').innerHTML = pokem.name

    var habilidade01 = pokem.abilities[0].ability.name
    var habilidade02 = pokem.abilities[1].ability.name

    detailsPokes.querySelector('.hb-1').innerHTML = habilidade01
    detailsPokes.querySelector('.hb-2').innerHTML = habilidade02

    var teste = pokem.types[0].type.name
    
        var tipePoke = document.querySelector('.type-poke-1')

        tipePoke.classList.remove('model')

        if(teste == 'normal'){detailsPokes.querySelector('.type-poke-1').style.background = '#ccc'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fighting'){detailsPokes.querySelector('.type-poke-1').style.background = '#fcc'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'flying'){detailsPokes.querySelector('.type-poke'-1).style.background = '#ccf'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'poison'){detailsPokes.querySelector('.type-poke-1').style.background = '#79556f'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ground'){detailsPokes.querySelector('.type-poke-1').style.background = '#ba8b65'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'rock'){detailsPokes.querySelector('.type-poke-1').style.background = '#888'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'bug'){detailsPokes.querySelector('.type-poke-1').style.background = '#e3cc74'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ghost'){detailsPokes.querySelector('.type-poke-1').style.background = '#d8c9f5'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'steel'){detailsPokes.querySelector('.type-poke-1').style.background = '#cfcfcf'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fire'){detailsPokes.querySelector('.type-poke-1').style.background = '#c15d4d'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'water'){detailsPokes.querySelector('.type-poke-1').style.background = '#669fb2'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'grass'){detailsPokes.querySelector('.type-poke-1').style.background = '#8bbe8b'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'electric'){detailsPokes.querySelector('.type-poke-1').style.background = '#faed75'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'psychic'){detailsPokes.querySelector('.type-poke-1').style.background = '#fa9bec'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ice'){detailsPokes.querySelector('.type-poke-1').style.background = '#9ff5ec'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'dragon'){detailsPokes.querySelector('.type-poke-1').style.background = '#ffedc9'; detailsPokes.querySelector('.type-poke').innerHTML = teste}
        if(teste == 'dark'){detailsPokes.querySelector('.type-poke-1').style.background = '#8f76c4'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fairy'){detailsPokes.querySelector('.type-poke-1').style.background = '#f8cfd3'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'red'){detailsPokes.querySelector('.type-poke-1').style.background = 'red'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}


    var hp = detailsPokes.querySelector('.hp').innerHTML = pokem.stats[0].base_stat
    var atack = detailsPokes.querySelector('.atack').innerHTML = pokem.stats[1].base_stat
    var def = detailsPokes.querySelector('.def').innerHTML = pokem.stats[2].base_stat
    var specialAttack = detailsPokes.querySelector('.special-atack').innerHTML = pokem.stats[3].base_stat
    var specialDefense = detailsPokes.querySelector('.special-defense').innerHTML = pokem.stats[4].base_stat
    var speed = detailsPokes.querySelector('.speed').innerHTML = pokem.stats[5].base_stat

    var tot = hp + atack + def + specialAttack + specialDefense + speed

    detailsPokes.querySelector('.total').innerHTML = tot

    detailsPokes.querySelector('.height').innerHTML = pokem.height / 10 + 'm'
    detailsPokes.querySelector('.weight').innerHTML = pokem.weight / 10 + 'kg'
    

    var imgBefore = id_poke - 1
    var imgAfter = Number(id_poke)

    detailsPokes.querySelector('.img-evolution-before').src = `img/images-pokes/${imgBefore}.png`
    detailsPokes.querySelector('.img-evolution-atual').src = `img/images-pokes/${id_poke}.png`
    detailsPokes.querySelector('.img-evolution-after').src = `img/images-pokes/${imgAfter + 1}.png`
    

}

function pokemonsDetailsNome(e) {

    var id_poke = e.querySelector('.number-poke').innerHTML


    console.log(pokem)

    detailsPokes.classList.remove('model')
    detailsPokes.querySelector('.img-poke').src = `img/images-pokes/${id_poke}.png`
    detailsPokes.querySelector('.number-poke').innerHTML = 'Nª' + pokem.id
    detailsPokes.querySelector('.name-poke').innerHTML = pokem.name

    var habilidade01 = pokem.abilities[0].ability.name
    var habilidade02 = pokem.abilities[1].ability.name

    detailsPokes.querySelector('.hb-1').innerHTML = habilidade01
    detailsPokes.querySelector('.hb-2').innerHTML = habilidade02

    var teste = pokem.types[0].type.name
    
        var tipePoke = document.querySelector('.type-poke-1')

        tipePoke.classList.remove('model')

        if(teste == 'normal'){detailsPokes.querySelector('.type-poke-1').style.background = '#ccc'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fighting'){detailsPokes.querySelector('.type-poke-1').style.background = '#fcc'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'flying'){detailsPokes.querySelector('.type-poke'-1).style.background = '#ccf'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'poison'){detailsPokes.querySelector('.type-poke-1').style.background = '#79556f'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ground'){detailsPokes.querySelector('.type-poke-1').style.background = '#ba8b65'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'rock'){detailsPokes.querySelector('.type-poke-1').style.background = '#888'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'bug'){detailsPokes.querySelector('.type-poke-1').style.background = '#e3cc74'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ghost'){detailsPokes.querySelector('.type-poke-1').style.background = '#d8c9f5'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'steel'){detailsPokes.querySelector('.type-poke-1').style.background = '#cfcfcf'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fire'){detailsPokes.querySelector('.type-poke-1').style.background = '#c15d4d'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'water'){detailsPokes.querySelector('.type-poke-1').style.background = '#669fb2'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'grass'){detailsPokes.querySelector('.type-poke-1').style.background = '#8bbe8b'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'electric'){detailsPokes.querySelector('.type-poke-1').style.background = '#faed75'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'psychic'){detailsPokes.querySelector('.type-poke-1').style.background = '#fa9bec'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'ice'){detailsPokes.querySelector('.type-poke-1').style.background = '#9ff5ec'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'dragon'){detailsPokes.querySelector('.type-poke-1').style.background = '#ffedc9'; detailsPokes.querySelector('.type-poke').innerHTML = teste}
        if(teste == 'dark'){detailsPokes.querySelector('.type-poke-1').style.background = '#8f76c4'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'fairy'){detailsPokes.querySelector('.type-poke-1').style.background = '#f8cfd3'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}
        if(teste == 'red'){detailsPokes.querySelector('.type-poke-1').style.background = 'red'; detailsPokes.querySelector('.type-poke-1').innerHTML = teste}


    var hp = detailsPokes.querySelector('.hp').innerHTML = pokem.stats[0].base_stat
    var atack = detailsPokes.querySelector('.atack').innerHTML = pokem.stats[1].base_stat
    var def = detailsPokes.querySelector('.def').innerHTML = pokem.stats[2].base_stat
    var specialAttack = detailsPokes.querySelector('.special-atack').innerHTML = pokem.stats[3].base_stat
    var specialDefense = detailsPokes.querySelector('.special-defense').innerHTML = pokem.stats[4].base_stat
    var speed = detailsPokes.querySelector('.speed').innerHTML = pokem.stats[5].base_stat

    var tot = hp + atack + def + specialAttack + specialDefense + speed

    detailsPokes.querySelector('.total').innerHTML = tot

    detailsPokes.querySelector('.height').innerHTML = pokem.height / 10 + 'm'
    detailsPokes.querySelector('.weight').innerHTML = pokem.weight / 10 + 'kg'
    

    var imgBefore = id_poke - 1
    var imgAfter = Number(id_poke)

    detailsPokes.querySelector('.img-evolution-before').src = `img/images-pokes/${imgBefore}.png`
    detailsPokes.querySelector('.img-evolution-atual').src = `img/images-pokes/${id_poke}.png`
    detailsPokes.querySelector('.img-evolution-after').src = `img/images-pokes/${imgAfter + 1}.png`
    

}


function procurarPokes() {
    var nomePoke = document.querySelector('.buscar').value  

    const options = { method: 'GET' };

    fetch(uriPokemon + nomePoke, options)
    .then(res => res.json())
    .then(data => {
            pokem = data;  
            pokemonsDetailsNome(e) 
            // console.log(uriPokemon + id_poke)
        }
        )
        .catch(err => console.error(err));
}

