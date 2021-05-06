// HERE I DEFINE THE DOM OBJECTS
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-image');
const pokeMoves = document.querySelector('.poke-moves');

// FETCHING THE POKE API
const api_url = ('https://pokeapi.co/api/v2/pokemon/1');


// getPokemon is an asynchronous function since it’s marked with the async keyword.
// Await fetch starts an HTTP request to the API URL. Because the await keyword is present, the asynchronous function is paused until the request completes.
// When the request completes, response is assigned with the response object of the request.

async function getPokemon() {
    const response = await fetch(api_url);
    // waits until the request completes...
    const data = await response.json();
    console.log(data);

    // FETCHING THE API DATA AND SHOW IT IN THE DIV

    pokeName.textContent = data.name;
    pokeId.textContent = data.id;
    pokeFrontImage.src = data.sprites['front_default'];
    pokeMoves.textContent = data.moves;
}

getPokemon();