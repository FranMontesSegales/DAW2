import fetch from 'node-fetch';

const treeckoP = fetch("https://pokeapi.co/api/v2/pokemon/treecko");
const mudkipP = fetch("https://pokeapi.co/api/v2/pokemon/mudkip");
const torchicP = fetch("https://pokeapi.co/api/v2/pokemon/torchic");

Promise.all([treeckoP, mudkipP, torchicP])
    .then(responses => {
        responses.forEach(r =>{
            r.json().then(pokemon => {
                console.log(pokemon.name);
            })
        });
    });