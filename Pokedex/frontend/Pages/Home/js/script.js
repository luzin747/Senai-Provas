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

    var hb = pokem.abilities.length

    if(hb > 1) {
        detailsPokes.querySelector('.hb-1').innerHTML = pokem.abilities[0].ability.name
        detailsPokes.querySelector('.hb-2').innerHTML = pokem.abilities[1].ability.name
    }
    if(hb = 1) {
        detailsPokes.querySelector('.hb-1').innerHTML = pokem.abilities[0].ability.name
    }


    var tipo = pokem.types.length

    console.log(tipo)

//aq
if(tipo = 1) {
    var teste = pokem.types[0].type.name

    var tipePoke = document.querySelector('.type-poke-1')

    tipePoke.classList.remove('model')

    if(teste == 'normal'){tipePoke.style.background = '#ccc'; tipePoke.innerHTML = teste}
    if(teste == 'fighting'){tipePoke.style.background = '#fcc'; tipePoke.innerHTML = teste}
    if(teste == 'flying'){tipePoke.style.background = '#ccf'; tipePoke.innerHTML = teste}
    if(teste == 'poison'){tipePoke.style.background = '#79556f'; tipePoke.innerHTML = teste}
    if(teste == 'ground'){tipePoke.style.background = '#ba8b65'; tipePoke.innerHTML = teste}
    if(teste == 'rock'){tipePoke.style.background = '#888'; tipePoke.innerHTML = teste}
    if(teste == 'bug'){tipePoke.style.background = '#e3cc74'; tipePoke.innerHTML = teste}
    if(teste == 'ghost'){tipePoke.style.background = '#d8c9f5'; tipePoke.innerHTML = teste}
    if(teste == 'steel'){tipePoke.style.background = '#cfcfcf'; tipePoke.innerHTML = teste}
    if(teste == 'fire'){tipePoke.style.background = '#c15d4d'; tipePoke.innerHTML = teste}
    if(teste == 'water'){tipePoke.style.background = '#669fb2'; tipePoke.innerHTML = teste}
    if(teste == 'grass'){tipePoke.style.background = '#8bbe8b'; tipePoke.innerHTML = teste}
    if(teste == 'electric'){tipePoke.style.background = '#faed75'; tipePoke.innerHTML = teste}
    if(teste == 'psychic'){tipePoke.style.background = '#fa9bec'; tipePoke.innerHTML = teste}
    if(teste == 'ice'){tipePoke.style.background = '#9ff5ec'; tipePoke.innerHTML = teste}
    if(teste == 'dragon'){tipePoke.style.background = '#ffedc9';tipePoke.innerHTML.innerHTML = teste}
    if(teste == 'dark'){tipePoke.style.background = '#8f76c4'; tipePoke.innerHTML = teste}
    if(teste == 'fairy'){tipePoke.style.background = '#f8cfd3'; tipePoke.innerHTML = teste}
    if(teste == 'red'){tipePoke.style.background = 'red'; tipePoke.innerHTML = teste}
}

if(tipo > 1) {
    var teste = pokem.types[0].type.name
    var type02 = pokem.types[1].type.name

    console.log(type02)


    var tipePoke = document.querySelector('.type-poke-1')

    tipePoke.classList.remove('model')

    if(teste == 'normal'){tipePoke.style.background = '#ccc'; tipePoke.innerHTML = teste}
    if(teste == 'fighting'){tipePoke.style.background = '#fcc'; tipePoke.innerHTML = teste}
    if(teste == 'flying'){tipePoke.style.background = '#ccf'; tipePoke.innerHTML = teste}
    if(teste == 'poison'){tipePoke.style.background = '#79556f'; tipePoke.innerHTML = teste}
    if(teste == 'ground'){tipePoke.style.background = '#ba8b65'; tipePoke.innerHTML = teste}
    if(teste == 'rock'){tipePoke.style.background = '#888'; tipePoke.innerHTML = teste}
    if(teste == 'bug'){tipePoke.style.background = '#e3cc74'; tipePoke.innerHTML = teste}
    if(teste == 'ghost'){tipePoke.style.background = '#d8c9f5'; tipePoke.innerHTML = teste}
    if(teste == 'steel'){tipePoke.style.background = '#cfcfcf'; tipePoke.innerHTML = teste}
    if(teste == 'fire'){tipePoke.style.background = '#c15d4d'; tipePoke.innerHTML = teste}
    if(teste == 'water'){tipePoke.style.background = '#669fb2'; tipePoke.innerHTML = teste}
    if(teste == 'grass'){tipePoke.style.background = '#8bbe8b'; tipePoke.innerHTML = teste}
    if(teste == 'electric'){tipePoke.style.background = '#faed75'; tipePoke.innerHTML = teste}
    if(teste == 'psychic'){tipePoke.style.background = '#fa9bec'; tipePoke.innerHTML = teste}
    if(teste == 'ice'){tipePoke.style.background = '#9ff5ec'; tipePoke.innerHTML = teste}
    if(teste == 'dragon'){tipePoke.style.background = '#ffedc9';tipePoke.innerHTML.innerHTML = teste}
    if(teste == 'dark'){tipePoke.style.background = '#8f76c4'; tipePoke.innerHTML = teste}
    if(teste == 'fairy'){tipePoke.style.background = '#f8cfd3'; tipePoke.innerHTML = teste}
    if(teste == 'red'){tipePoke.style.background = 'red'; tipePoke.innerHTML = teste}


        var tipePoke2 = document.querySelector('.type-poke-2')

        tipePoke2.classList.remove('model')

        if(type02 == 'normal'){tipePoke2.style.background = '#ccc'; tipePoke2.innerHTML = type02}
        if(type02 == 'fighting'){tipePoke2.style.background = '#fcc'; tipePoke2.innerHTML = type02}
        if(type02 == 'flying'){tipePoke2.style.background = '#ccf'; tipePoke2.innerHTML = type02}
        if(type02 == 'poison'){tipePoke2.style.background = '#79556f'; tipePoke2.innerHTML = type02}
        if(type02 == 'ground'){tipePoke2.style.background = '#ba8b65'; tipePoke2.innerHTML = type02}
        if(type02 == 'rock'){tipePoke2.style.background = '#888'; tipePoke2.innerHTML = type02}
        if(type02 == 'bug'){tipePoke2.style.background = '#e3cc74'; tipePoke2.innerHTML = type02}
        if(type02 == 'ghost'){tipePoke2.style.background = '#d8c9f5'; tipePoke2.innerHTML = type02}
        if(type02 == 'steel'){tipePoke2.style.background = '#cfcfcf'; tipePoke2.innerHTML = type02}
        if(type02 == 'fire'){tipePoke2.style.background = '#c15d4d'; tipePoke2.innerHTML = type02}
        if(type02 == 'water'){tipePoke2.style.background = '#669fb2'; tipePoke2.innerHTML = type02}
        if(type02 == 'grass'){tipePoke2.style.background = '#8bbe8b'; tipePoke2.innerHTML = type02}
        if(type02 == 'electric'){tipePoke2.style.background = '#faed75'; tipePoke2.innerHTML = type02}
        if(type02 == 'psychic'){tipePoke2.style.background = '#fa9bec'; tipePoke2.innerHTML = type02}
        if(type02 == 'ice'){tipePoke2.style.background = '#9ff5ec'; tipePoke2.innerHTML = type02}
        if(type02 == 'dragon'){tipePoke2.style.background = '#ffedc9';tipePoke2.innerHTML.innerHTML = type02}
        if(type02 == 'dark'){tipePoke2.style.background = '#8f76c4'; tipePoke2.innerHTML = type02}
        if(type02 == 'fairy'){tipePoke2.style.background = '#f8cfd3'; tipePoke2.innerHTML = type02}
        if(type02 == 'red'){tipePoke2.style.background = 'red'; tipePoke2.innerHTML = type02}

        // console.log(tipePoke + tipePoke2)
    
}


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

    var id_poke = pokem.id

    console.log(pokem)

    detailsPokes.classList.remove('model')
    detailsPokes.querySelector('.img-poke').src = `img/images-pokes/${id_poke}.png`
    detailsPokes.querySelector('.number-poke').innerHTML = 'Nª' + pokem.id
    detailsPokes.querySelector('.name-poke').innerHTML = pokem.name

    var hb = pokem.abilities.length

    if(hb > 1) {
        detailsPokes.querySelector('.hb-1').innerHTML = pokem.abilities[0].ability.name
        detailsPokes.querySelector('.hb-2').innerHTML = pokem.abilities[1].ability.name
    }
    if(hb = 1) {
        detailsPokes.querySelector('.hb-1').innerHTML = pokem.abilities[0].ability.name
    }

    

    var tipo = pokem.types.length

//aq
if(tipo = 1) {
    var teste = pokem.types[0].type.name

    var tipePoke = document.querySelector('.type-poke-1')

    tipePoke.classList.remove('model')

    if(teste == 'normal'){tipePoke.style.background = '#ccc'; tipePoke.innerHTML = teste}
    if(teste == 'fighting'){tipePoke.style.background = '#fcc'; tipePoke.innerHTML = teste}
    if(teste == 'flying'){tipePoke.style.background = '#ccf'; tipePoke.innerHTML = teste}
    if(teste == 'poison'){tipePoke.style.background = '#79556f'; tipePoke.innerHTML = teste}
    if(teste == 'ground'){tipePoke.style.background = '#ba8b65'; tipePoke.innerHTML = teste}
    if(teste == 'rock'){tipePoke.style.background = '#888'; tipePoke.innerHTML = teste}
    if(teste == 'bug'){tipePoke.style.background = '#e3cc74'; tipePoke.innerHTML = teste}
    if(teste == 'ghost'){tipePoke.style.background = '#d8c9f5'; tipePoke.innerHTML = teste}
    if(teste == 'steel'){tipePoke.style.background = '#cfcfcf'; tipePoke.innerHTML = teste}
    if(teste == 'fire'){tipePoke.style.background = '#c15d4d'; tipePoke.innerHTML = teste}
    if(teste == 'water'){tipePoke.style.background = '#669fb2'; tipePoke.innerHTML = teste}
    if(teste == 'grass'){tipePoke.style.background = '#8bbe8b'; tipePoke.innerHTML = teste}
    if(teste == 'electric'){tipePoke.style.background = '#faed75'; tipePoke.innerHTML = teste}
    if(teste == 'psychic'){tipePoke.style.background = '#fa9bec'; tipePoke.innerHTML = teste}
    if(teste == 'ice'){tipePoke.style.background = '#9ff5ec'; tipePoke.innerHTML = teste}
    if(teste == 'dragon'){tipePoke.style.background = '#ffedc9';tipePoke.innerHTML.innerHTML = teste}
    if(teste == 'dark'){tipePoke.style.background = '#8f76c4'; tipePoke.innerHTML = teste}
    if(teste == 'fairy'){tipePoke.style.background = '#f8cfd3'; tipePoke.innerHTML = teste}
    if(teste == 'red'){tipePoke.style.background = 'red'; tipePoke.innerHTML = teste}
}

if(tipo > 1) {
    var teste = pokem.types[0].type.name
    var type02 = pokem.types[1].type.name

    console.log(type02)


    var tipePoke = document.querySelector('.type-poke-1')

    tipePoke.classList.remove('model')

    if(teste == 'normal'){tipePoke.style.background = '#ccc'; tipePoke.innerHTML = teste}
    if(teste == 'fighting'){tipePoke.style.background = '#fcc'; tipePoke.innerHTML = teste}
    if(teste == 'flying'){tipePoke.style.background = '#ccf'; tipePoke.innerHTML = teste}
    if(teste == 'poison'){tipePoke.style.background = '#79556f'; tipePoke.innerHTML = teste}
    if(teste == 'ground'){tipePoke.style.background = '#ba8b65'; tipePoke.innerHTML = teste}
    if(teste == 'rock'){tipePoke.style.background = '#888'; tipePoke.innerHTML = teste}
    if(teste == 'bug'){tipePoke.style.background = '#e3cc74'; tipePoke.innerHTML = teste}
    if(teste == 'ghost'){tipePoke.style.background = '#d8c9f5'; tipePoke.innerHTML = teste}
    if(teste == 'steel'){tipePoke.style.background = '#cfcfcf'; tipePoke.innerHTML = teste}
    if(teste == 'fire'){tipePoke.style.background = '#c15d4d'; tipePoke.innerHTML = teste}
    if(teste == 'water'){tipePoke.style.background = '#669fb2'; tipePoke.innerHTML = teste}
    if(teste == 'grass'){tipePoke.style.background = '#8bbe8b'; tipePoke.innerHTML = teste}
    if(teste == 'electric'){tipePoke.style.background = '#faed75'; tipePoke.innerHTML = teste}
    if(teste == 'psychic'){tipePoke.style.background = '#fa9bec'; tipePoke.innerHTML = teste}
    if(teste == 'ice'){tipePoke.style.background = '#9ff5ec'; tipePoke.innerHTML = teste}
    if(teste == 'dragon'){tipePoke.style.background = '#ffedc9';tipePoke.innerHTML.innerHTML = teste}
    if(teste == 'dark'){tipePoke.style.background = '#8f76c4'; tipePoke.innerHTML = teste}
    if(teste == 'fairy'){tipePoke.style.background = '#f8cfd3'; tipePoke.innerHTML = teste}
    if(teste == 'red'){tipePoke.style.background = 'red'; tipePoke.innerHTML = teste}


        var tipePoke2 = document.querySelector('.type-poke-2')

        tipePoke2.classList.remove('model')

        if(type02 == 'normal'){tipePoke2.style.background = '#ccc'; tipePoke2.innerHTML = type02}
        if(type02 == 'fighting'){tipePoke2.style.background = '#fcc'; tipePoke2.innerHTML = type02}
        if(type02 == 'flying'){tipePoke2.style.background = '#ccf'; tipePoke2.innerHTML = type02}
        if(type02 == 'poison'){tipePoke2.style.background = '#79556f'; tipePoke2.innerHTML = type02}
        if(type02 == 'ground'){tipePoke2.style.background = '#ba8b65'; tipePoke2.innerHTML = type02}
        if(type02 == 'rock'){tipePoke2.style.background = '#888'; tipePoke2.innerHTML = type02}
        if(type02 == 'bug'){tipePoke2.style.background = '#e3cc74'; tipePoke2.innerHTML = type02}
        if(type02 == 'ghost'){tipePoke2.style.background = '#d8c9f5'; tipePoke2.innerHTML = type02}
        if(type02 == 'steel'){tipePoke2.style.background = '#cfcfcf'; tipePoke2.innerHTML = type02}
        if(type02 == 'fire'){tipePoke2.style.background = '#c15d4d'; tipePoke2.innerHTML = type02}
        if(type02 == 'water'){tipePoke2.style.background = '#669fb2'; tipePoke2.innerHTML = type02}
        if(type02 == 'grass'){tipePoke2.style.background = '#8bbe8b'; tipePoke2.innerHTML = type02}
        if(type02 == 'electric'){tipePoke2.style.background = '#faed75'; tipePoke2.innerHTML = type02}
        if(type02 == 'psychic'){tipePoke2.style.background = '#fa9bec'; tipePoke2.innerHTML = type02}
        if(type02 == 'ice'){tipePoke2.style.background = '#9ff5ec'; tipePoke2.innerHTML = type02}
        if(type02 == 'dragon'){tipePoke2.style.background = '#ffedc9';tipePoke2.innerHTML.innerHTML = type02}
        if(type02 == 'dark'){tipePoke2.style.background = '#8f76c4'; tipePoke2.innerHTML = type02}
        if(type02 == 'fairy'){tipePoke2.style.background = '#f8cfd3'; tipePoke2.innerHTML = type02}
        if(type02 == 'red'){tipePoke2.style.background = 'red'; tipePoke2.innerHTML = type02}
    }

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

    var novoNome = nomePoke.toLowerCase()

    const options = { method: 'GET' };

    // console.log(uriPokemon + novoNome)

    fetch(uriPokemon + novoNome, options)
    .then(res => res.json())
    .then(data => {
            pokem = data;  
            pokemonsDetailsNome() 
            // console.log(uriPokemon + id_poke)
        }
        )
        .catch(err => console.error(err));
}

