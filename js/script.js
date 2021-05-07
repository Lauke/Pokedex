(() => {
    let api_url = 'https://pokeapi.co/api/v2/pokemon/1';
    let api_urlSpecies;
    let api_urlEvolve;

    // HERE I DEFINE THE DOM OBJECTS
    getData()
    let pokeName = document.querySelector('.poke-name');
    let pokeId = document.querySelector('.poke-id');
    let pokeFrontImage = document.querySelector('.poke-image');
    let pokeMoveOne = document.querySelector('.poke-move-one');
    let pokeMoveTwo = document.querySelector('.poke-move-two');
    let pokeMoveThree = document.querySelector('.poke-move-three');
    let pokeMoveFour = document.querySelector('.poke-move-four');
    let pokeEvolveName = document.querySelector('.poke-evolve-name');
    let pokeEvolveImageFront = document.querySelector('.evolve-image');
    let playerId = document.querySelector('.player-id');
    let name = prompt('Hello fellow trainer, what is your name?');

    // FETCHING THE POKE API
    getData()

    async function getData() {
        let response = await fetch(api_url)
        let data = await response.json();

        // THIS DISPLAYS THE SPECIFIC POKEMON ID & IMAGES
        playerId.innerHTML = ('Wavedex of ') + name;
        pokeName.innerHTML = (` ${data.name}`);
        pokeId.innerHTML = (`#${data.id}`);
        pokeFrontImage.src = data.sprites['front_default'];

        // IMPORTING THE ALL MOVES DATA (NOT THE BEST WAY, I HAVE TO IMPROVE THIS)
        pokeMoveOne.innerHTML = data.moves[0]['move']['name'];
        pokeMoveTwo.innerHTML = data.moves[1]['move']['name'];
        pokeMoveThree.innerHTML = data.moves[2]['move']['name'];
        pokeMoveFour.innerHTML = data.moves[3]['move']['name'];
        getDataDex();

    }

    // FETCHING THE API

    async function getDataDex() {
        let responseDex = await fetch(api_urlSpecies)
        let dataDex = await responseDex.json();
        if (dataDex['evolves_from_species']) {
            evolveName = dataDex['evolves_from_species']['name'];
            api_urlEvolve = 'https://pokeapi.co/api/v2/pokemon/' + evolveName;
            pokeEvolveName.innerHTML = (`This pokemon evolves from ${evolveName}`);
            getDataEvolve()

            // ADDED THE ELSE BECAUSE IF I WENT TO IVY AND BACK TO BULBA, BULBA SHOWED UP AS AN EVOLUTION (=INCORRECT)

        } else {
            evolveName = '';
            pokeEvolveName.innerHTML = ('');
            pokeEvolveImageFront.src = ('');
        }
    }

    // FETCHING THE FETCHING THE EVOLUTION

    async function getDataEvolve() {
        let responseEvolve = await fetch(api_urlEvolve)
        let dataEvolve = await responseEvolve.json();
        pokeEvolveImageFront.src = dataEvolve.sprites['front_default'];
    }

    /*    document.getElementById('btn-random').addEventListener('click', function () {
           let number = Math.floor(Math.random() * 898) + 1;
           api_url = "https://pokeapi.co/api/v2/pokemon/" + number;
           getData()
       }) */

    // METHOD WITH EVENT LISTENER

    document.getElementById('submitPoke').addEventListener('click', function () {
        let getId = (document.getElementById('inputPoke').value).toLowerCase();
        api_url = 'https://pokeapi.co/api/v2/pokemon/' + getId;
        api_urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/' + getId;
        getData()
    })

})();