import "regenerator-runtime/runtime";
import Pokemon from './Pokemon';

// Creamos un array para los 151 pokemons.
var pokemons = [];

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#pokedex').style.visibility = 'visible';
    startPokedex();
});

const startPokedex = async () => {
    for(var i = 1; i <= 151; i++) {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                const data = result;
                const pokemon = new Pokemon (data);
                pushPokemon(pokemon);
               // console.log(pokemon);
            });
    }
    await showPokedex();
};

function pushPokemon(pokemon) {
    pokemons.push(pokemon);
}

const showPokedex = async () => {
    const pokedex = document.getElementById("pokedex");
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        pokedex.innerHTML +=    `<div class="card">
                                    <img src="${pokemons[i].pkm_back}">
                                    <img src="${pokemons[i].pkm_front}" class="front"><br>
                                    ${pokemons[i].id}. ${pokemons[i].name}<br>
                                </div>`
        /*while (aux != pokemons[i].pkm_type.length){
            pokedex.innerHTML +=    `<div class="type">
                                        ${pokemons[i].pkm_type[aux].type.name}&nbsp                           
                                    </div>`    
            aux++;    
        }*/
    }

}

