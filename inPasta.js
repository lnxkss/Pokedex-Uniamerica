const parametros = new URLSearchParams(window.location.search);
const pAtuais = parametros.get("id");
const divPokemons = document.querySelector('.divPokemons');

let modoRemover = 0;
let paraRemover = [];

const stringPastas = localStorage.getItem('arrayPastas');
let arrayPastas = JSON.parse(stringPastas);

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

const nomePagP = document.querySelector('.nomePagP')
nomePagP.innerHTML = `<u>${arrayPastas[pAtuais].nome}</u>`

const remover = document.querySelector(".remover")
remover.addEventListener("click", function() {
    const h1Remover = document.getElementById("h1Remover")
    const confirmar = document.querySelector(".confirmar")

    if (modoRemover == 1) {
        const lixeiras = document.querySelectorAll(".lixeira")

        lixeiras.forEach(lixeira => {
            lixeira.closest(".cardPokemon").style.border = "none"
            lixeira.remove();
        });
        confirmar.style.transform = "translateX(-100%)"
        h1Remover.textContent = "Remover Pokémons"
        modoRemover = 0;

        paraRemover = []
    } else {
        confirmar.style.transform = "translateX(0%)"
        h1Remover.textContent = "Cancelar"
        modoRemover = 1;
    }
})

const confirmar = document.querySelector(".confirmar")
confirmar.addEventListener("click", function() {
    arrayPastas[pAtuais].pokemons = arrayPastas[pAtuais].pokemons.filter(numero => !paraRemover.includes(Number(numero)));
    localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))
    window.location.reload()
})