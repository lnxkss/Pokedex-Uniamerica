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

        async function arrayPoke() {
            async function temp() {
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=0`);
                const dados = await resposta.json();
                return dados.count;
        }
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${await temp()}&offset=0`);
        const dados = await resposta.json();
        return dados.results;
        }


        const input = document.getElementById("pesquisaPokemon");
        input.addEventListener("input", async function() {
        const listaPoke = await arrayPoke();

            const resultado = listaPoke.filter(nome => {
                return nome.name.includes(input.value);
            });
            console.log(resultado)

            resultado.forEach(pokemon => {
                const pokePesquisados = document.querySelector(".pesquisando");
                pokePesquisados.innerHTML += `
                    <div class="pokemonPesquisado">
                    <img src="imgs/logo.webp" alt="">
                    <p>${pokemon.name}</p>
                    </div>
                `;
            });
        

});


    





        