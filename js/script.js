// HERE I DEFINE THE DOM OBJECTS
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-image');
const pokeMoveOne = document.querySelector('.poke-move-one');
const pokeMoveTwo = document.querySelector('.poke-move-two');
const pokeMoveThree = document.querySelector('.poke-move-three');
const pokeMoveFour = document.querySelector('.poke-move-four');

// FETCHING THE POKE API
const api_url = ('https://pokeapi.co/api/v2/pokemon/1');


// getPokemon is an asynchronous function since it’s marked with the async keyword.
// Await fetch starts an HTTP request to the API URL. Because the await keyword is present, the asynchronous function is paused until the request completes.
// When the request completes, response is assigned with the response object of the request.

// THIS DISPLAYS ONE SPECIFIC POKEMON

async function getPokemon() {
    const response = await fetch(api_url);
    // waits until the request completes...
    const data = await response.json();
    console.log(data);

    // IMPORTING THE ALL MOVES DATA
    let allMoves = data.moves;

    // IMPORTING THE API DATA AND SHOW IT IN THE DIV
    pokeName.textContent = data.name;
    pokeId.textContent = data.id;
    pokeFrontImage.src = data.sprites['front_default'];

    // IMPORTING THE ALL MOVES DATA (NOT THE BEST WAY, I HAVE TO IMPROVE THIS)

    pokeMoveOne.textContent = data.moves[0]["move"]["name"];
    pokeMoveTwo.textContent = data.moves[1]["move"]["name"];
    pokeMoveThree.textContent = data.moves[2]["move"]["name"];
    pokeMoveFour.textContent = data.moves[3]["move"]["name"];

}

getPokemon();

// ENDING OF DISPLAY ONE SPECIFIC POKEMON