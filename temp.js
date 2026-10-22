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


    





        