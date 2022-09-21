const pokemonContainer = document.querySelector(".pokemon-container");
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        crearPokemon(data);
    })
}
function aleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)  
}
let num1 = aleatorio(1,893)
let num2 = num1+5;
function fetchPokemons(numero){ 
    for (let i = num1; i <= numero; i++){
        fetchPokemon(i);
    } 
}

function crearPokemon(pokemon){
    const card = document.createElement('div'); //crea un div
    card.classList.add('pokemon-block');     //se crea la clase

    const imgcontenedor = document.createElement('div');
    imgcontenedor.classList.add('img-container');

    const imgpokemon = document.createElement('img'); //crea una imagen
    imgpokemon.src = pokemon.sprites.front_default; // se llama desde la api

    imgcontenedor.appendChild(imgpokemon);
     
    const numero = document.createElement('p');
    numero.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const nombre = document.createElement('p');
    nombre.classList.add('name');
    nombre.textContent = pokemon.name;

    card.appendChild(imgcontenedor)
    card.appendChild(numero)
    card.appendChild(nombre)
    
    pokemonContainer.appendChild(card);
}
fetchPokemons(num2);

