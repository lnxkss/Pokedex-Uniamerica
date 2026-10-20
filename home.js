let contador = 0;

async function carregarPokes() {
    let offset = contador * 20;
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const dados = await resposta.json();

    dados.results.forEach(pokemon => {

    async function carregarPoke() {
    const resposta2 = await fetch(pokemon.url);
    const dados2 = await resposta2.json();

    const divPokemons = document.querySelector(".divPokemons");
    divPokemons.innerHTML += `
        <div class="cardPokemon" data-id="${dados2.id}">
            <img src="${dados2.sprites.front_default}" alt="${dados2.name}">
            <h2>${dados2.name}</h2>
        </div>
    `;
    }
    carregarPoke();
    })
}
carregarPokes();


const divPokemons = document.querySelector(".divPokemons");

divPokemons.addEventListener("click", function(event) {
    const pokeClicado = (event.target.closest(".cardPokemon").dataset.id);
    window.location.href = `detalhesP.html?id=${pokeClicado}`
});

const carregarMais = document.querySelector(".carregarM");
    carregarMais.addEventListener("click", function() {
        contador++;
        carregarPokes();
});