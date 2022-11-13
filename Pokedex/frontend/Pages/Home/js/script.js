
var cardsPokes = document.querySelector('.card-pokes')
var detailsPokes = document.querySelector('.poke-info')


function carregar() {

preencheCards()
   

}

function preencheCards() {

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for(let i = 1; i <= 150; i++) {

        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        
    }

    Promise.all(pokemonPromises)
      .then(pokemons => {
        console.log(pokemons)

        const lisPokemons = pokemons.reduce((accumulator, pokemon) => {

            var novoCardPokemons = cardsPokes.cloneNode(true)

            novoCardPokemons.classList.remove('model')

            novoCardPokemons.querySelector('.number-poke').innerHTML = pokemon.id
            novoCardPokemons.querySelector('.name-poke').innerHTML = pokemon.name
            var nomePokemon = pokemon.types.map(typeInfo => typeInfo.type.name)

            novoCardPokemons.querySelector('.type-poke').innerHTML = nomePokemon

                        
            document.querySelector('.cont-card-pokes').appendChild(novoCardPokemons)
            

        }, '')
      })

}



function pokemonsDetails(e) {
    var uriPokemon = 'https://pokeapi.co/api/v2/pokemon/5'
    // var id_poke = e.querySelector('.number-poke').innerHTML
    
    var pokem = []
    const options = { method: 'GET' };
    
    fetch(uriPokemon, options)
    .then(res => res.json())
    .then(res => {
            pokem = res;   
        }
        )
        .catch(err => console.error(err));
        
        console.log(pokem)

        // pokem.forEach(p => {

        //     if(id_poke == p.id) {
        //         var novoDetailsPokes = detailsPokes.cloneNode(true)

        //         novoDetailsPokes.toggle('model')
        
        //         novoDetailsPokes.querySelector('.img-poke').src = `img/images-pokes/${id_poke}.png`
        //         novoDetailsPokes.querySelector('.number-poke').innerHTML = p.id
        //         novoDetailsPokes.querySelector('.name-poke').innerHTML = p.name

                
        //         document.querySelector('.cont-poke-info').appendChild(novoDetailsPokes)
        //     }

        // })
}


