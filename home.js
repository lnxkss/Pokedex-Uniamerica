const divPokemons = document.querySelector(".divPokemons");

pokemons.forEach(pokemon => {

    divPokemons.innerHTML += `
        <div class="cardPokemon" data-id="${pokemon.id}">
            <img src="${pokemon.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
        </div>
    `;
})



const cardPokemon = document.querySelectorAll(".cardPokemon");

    cardPokemon.forEach(card => {
    card.addEventListener("click", function() {
    window.location.href = `detalhesP.html?id=${card.dataset.id}`
});
})