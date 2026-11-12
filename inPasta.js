const parametros = new URLSearchParams(window.location.search);
const pAtuais = parametros.get("id");
const divPokemons = document.querySelector('.divPokemons');

const stringPastas = localStorage.getItem('arrayPastas');
const arrayPastas = JSON.parse(stringPastas);

async function carregarPoke(pokemon) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const dados = await resposta.json();
    return dados.name;
}

async function exibirPokemons() {
    const listaPokemons = arrayPastas[pAtuais].pokemons;

    for (const pokemon of listaPokemons) {
        const nome = await carregarPoke(pokemon);
        
        divPokemons.innerHTML += `
            <article class="cardPokemon" data-id="${pokemon}">
                <p>#${pokemon}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png" alt="${nome}">
                <h2>${nome}</h2>
            </article>
        `;
    }

    divPokemons.addEventListener("click", function(event) {
    const pokeClicado = event.target.closest(".cardPokemon");

    if (pokeClicado !== null) {
        window.location.href = `detalhesP.html?id=${pokeClicado.dataset.id}`;
    }
});
}

exibirPokemons();


