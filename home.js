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
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=0`);
        const dados = await resposta.json();

        const resposta2 = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${dados.count}&offset=0`);
        const dados2 = await resposta2.json();
        return dados2.results;
        }

        const listaPoke = arrayPoke();
        

        
        const input = document.getElementById("pesquisaPokemon");
        input.addEventListener("input", async function() {
            if (input.value === "") {
                const pokemonPesquisado = document.querySelector(".pesquisando")
                pokemonPesquisado.innerHTML = "";
                pokemonPesquisado.style.opacity = "0";
            } else {

            const pokemonPesquisado = document.querySelector(".pesquisando")
            pokemonPesquisado.innerHTML = "";
                pokemonPesquisado.style.opacity = "1";

            const listaPoke2 = await listaPoke;
        

            const resultado = listaPoke2.filter(nome => {
                return nome.name.includes(input.value);
            });


            resultado.slice(0, 5).forEach(pokemon => {
                async function p() {
                    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    const dados = await resposta.json();

                const pokePesquisados = document.querySelector(".pesquisando");
                pokePesquisados.innerHTML += `
                    <div class="pokemonPesquisado">
                    <img src="${dados.sprites.front_default}" alt="">
                    <p>${dados.name}</p>
                    </div>
                `;
                }
                p();
            });
        }
});