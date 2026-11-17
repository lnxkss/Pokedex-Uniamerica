const divPokemons = document.querySelector('.divPokemons');
let modoRemover = 0;
let paraRemover = [];

const stringFav = localStorage.getItem('stringFav');
let arrayFav = JSON.parse(stringFav);

async function carregarPoke(pokemon) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const dados = await resposta.json();
    return dados.name;
}

async function exibirPokemons() {

    for(const pokemon of arrayFav) {
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
    if (modoRemover == 1) {
        
        const lixeiraExiste = pokeClicado.querySelector(".lixeira")

        if (lixeiraExiste === null) {
            paraRemover.push(Number(pokeClicado.dataset.id))

            pokeClicado.style.border = "5px solid red"
            pokeClicado.insertAdjacentHTML('beforeend', '<img class="lixeira" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png">')
        } else {
            paraRemover = paraRemover.filter(numero => numero !== Number(pokeClicado.dataset.id))

            lixeiraExiste.remove();
            pokeClicado.style.border = "none"
            
    }
}
    
    else {
        window.location.href = `detalhesP.html?id=${pokeClicado.dataset.id}`;
        }
    }
});
}

exibirPokemons();

const remover = document.querySelector(".remover")
remover.addEventListener("click", function() {
    const h1Remover = document.getElementById("h1Remover")
    const confirmar = document.querySelector(".confirmar")

    if (modoRemover == 1) {
        confirmar.style.transform = "translateX(-100%)"
        h1Remover.textContent = "Remover Pokémons"
        modoRemover = 0;
    } else {
        confirmar.style.transform = "translateX(0%)"
        h1Remover.textContent = "Cancelar"
        modoRemover = 1;
    }
})

const confirmar = document.querySelector(".confirmar")
confirmar.addEventListener("click", function() {
    arrayFav = arrayFav.filter(numero => !paraRemover.includes(Number(numero)));
    localStorage.setItem("stringFav", JSON.stringify(arrayFav))
    window.location.href = "favoritos.html"
})