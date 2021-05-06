// FETCHING THE POKE API

const api_url = ('https://pokeapi.co/api/v2/pokemon/1');

async function getPokemon() {
    const response = await fetch (api_url);
    const data = await response.json();
    console.log(data);
}

getPokemon();

// OUTPUTS ALL THE POKEMON & THEIR MOVES ETC.

