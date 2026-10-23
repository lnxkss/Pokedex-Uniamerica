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

 const botaoAbrirLogin = document.querySelector("#cadastrar-se");
const botaoFecharLogin = document.querySelector("#botaoFecharLogin");
const modalLogin = document.querySelector("#modalLogin");

const botaoAbrirCadastro = document.querySelector("#crieUmaConta");
const botaoFecharCadastro = document.querySelector("#botaoFecharCadastro");
const modalCadastro = document.querySelector("#modalCadastro");

botaoAbrirLogin.addEventListener("click", () => {
    modalLogin.showModal(); 
});

botaoFecharLogin.addEventListener("click", () => {
    modalLogin.close();
});

modalLogin.addEventListener('click', function(event) {
    const rect = modalLogin.getBoundingClientRect();
    const clicouFora = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );
    if (clicouFora) {
        modalLogin.close();
    }
});

botaoAbrirCadastro.addEventListener("click", () => {
    modalLogin.close();
    modalCadastro.showModal();
});

botaoFecharCadastro.addEventListener("click", () => {
    modalCadastro.close();
});

modalCadastro.addEventListener('click', function(event) {
    const rect = modalCadastro.getBoundingClientRect();
    const clicouFora = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );
    if (clicouFora) {
        modalCadastro.close();
    }
});


const botaoEsqueciSenha = document.querySelector("#RecuperarSenha_Btn");
const botaoFecharRecuperar = document.querySelector("#botaoFecharRecuperar");
const modalRecuperarSenha = document.querySelector("#modalRecuperarSenha");
const recuperarSenhaForm = document.querySelector("#RecuperarSenhaForm");

botaoEsqueciSenha.addEventListener("click", (event) => {
    event.preventDefault(); 
    modalLogin.close();     
    modalRecuperarSenha.showModal(); 
});

botaoFecharRecuperar.addEventListener("click", () => {
    modalRecuperarSenha.close();
});

modalRecuperarSenha.addEventListener('click', function(event) {
    const rect = modalRecuperarSenha.getBoundingClientRect();
    const clicouFora = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );
    if (clicouFora) {
        modalRecuperarSenha.close();
    }
});




const olhos = document.querySelectorAll('.inputImg img');

olhos.forEach(imagemOlho => {
  imagemOlho.addEventListener('click', () => {
  
    const container = imagemOlho.closest('.inputImg');
    const inputSenha = container.querySelector('input');

    if (inputSenha.type === 'password') {
      inputSenha.type = 'text';
      imagemOlho.src = 'imgs/olhoAberto.webp';
      imagemOlho.alt = 'Esconder Senha';
    } else {
      inputSenha.type = 'password';
      imagemOlho.src = 'imgs/olhoFechado.webp';
      imagemOlho.alt = 'Mostrar Senha';
    }
  });
});

const campos = document.querySelectorAll('input[required]');

campos.forEach(campo => {
  campo.addEventListener('invalid', function () {
    if (this.value === '') {
      this.setCustomValidity('Por favor, preencha este campo.');
    } else {
      this.setCustomValidity('');
    }
  });
  campo.addEventListener('input', function () {
    this.setCustomValidity('');
  });
});





