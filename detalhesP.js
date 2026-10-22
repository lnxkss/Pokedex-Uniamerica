const link = (window.location.search);
const parametros = new URLSearchParams(link);
const pAtuais = parametros.get("id");

async function carregarPoke() {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pAtuais}/`);
    const dados = await resposta.json();

    const descricaoP = document.querySelector(".descricao");

    const tipos = dados.types.length > 1 
        ? `${dados.types[0].type.name} - ${dados.types[1].type.name}` 
        : dados.types[0].type.name;

    descricaoP.innerHTML = `
    <div class="descT">
        <h1>${dados.name}</h1>
    </div>
    <div class="descC">
        <p><strong>HP:</strong> ${dados.stats[0].base_stat}</p>
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Ataque:</strong> ${dados.stats[1].base_stat}</p>
        <p><strong>Defesa:</strong> ${dados.stats[2].base_stat}</p>
        <p><strong>Ataque Especial:</strong> ${dados.stats[3].base_stat}</p>
    </div>
`;

const sprite = document.querySelector(".spriteP");
sprite.innerHTML = `
    <img src="${dados.sprites.front_default}">
`;

    
}
    carregarPoke();




