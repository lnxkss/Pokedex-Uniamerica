const link = (window.location.search);
const parametros = new URLSearchParams(link);
const pAtuais = parametros.get("id");
const pokemonEsc = pokemons.find(item => item.id == pAtuais);

const descricaoP = document.querySelector(".descricao");
descricaoP.innerHTML = `
    <div class="descT">
        <h1>${pokemonEsc.name}</h1>
    </div>
    <div class="descC">
        <p><strong>HP:</strong> ${pokemonEsc.hp}</p>
        <p><strong>Tipo:</strong> ${pokemonEsc.type}</p>
        <p><strong>Ataque:</strong> ${pokemonEsc.attack}</p>
        <p><strong>Defesa:</strong> ${pokemonEsc.defense}</p>
        <p><strong>Ataque Especial:</strong> ${pokemonEsc.special_attack}</p>
    </div>
`;

const sprite = document.querySelector(".spriteP");
sprite.innerHTML = `
    <img src="${pokemonEsc.front_default}">
`;




