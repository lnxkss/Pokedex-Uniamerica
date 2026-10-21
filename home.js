let contador = 0;

async function carregarPokes() {
    let offset = contador * 20;

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const dados = await resposta.json();

    const pokemonsCompletos = await Promise.all(
        dados.results.map(async pokemon => {
            const resposta2 = await fetch(pokemon.url);
            const dados2 = await resposta2.json();

            return dados2;
        })
    );

    const divPokemons = document.querySelector(".divPokemons");

    pokemonsCompletos.forEach(pokemon => {
        divPokemons.insertAdjacentHTML("beforeend", `
            <div class="cardPokemon" data-id="${pokemon.id}">
                <p>#${pokemon.id}</p>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
            </div>
        `);
    });
}

carregarPokes();

const divPokemons = document.querySelector(".divPokemons");

divPokemons.addEventListener("click", function(event) {
    const pokeClicado = event.target.closest(".cardPokemon");

    if (pokeClicado !== null) {
        window.location.href = `detalhesP.html?id=${pokeClicado.dataset.id}`;
    }
});

const carregarMais = document.querySelector(".carregarM");

carregarMais.addEventListener("click", function() {
    contador++;
    carregarPokes();
});