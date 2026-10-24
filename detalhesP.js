const link = (window.location.search);
const parametros = new URLSearchParams(link);
const pAtuais = parametros.get("id");

async function carregarPoke() {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pAtuais}/`);
    const dados = await resposta.json();

    const descricaoP = document.querySelector(".descricao");
    let corClasses = ["", ""];

    dados.types.forEach((tipo, i) => {
        if (tipo.type.name == "fire") {
        corClasses[i] = "#EE8130"
        tipo.type.name = "Fogo";

        } else if (tipo.type.name == "water") {
        tipo.type.name = "Água";
        corClasses[i] = "#6390F0"

        } else if (tipo.type.name == "grass") {
        tipo.type.name = "Planta";
        corClasses[i] = "#7AC74C"

        } else if (tipo.type.name == "electric") {
        tipo.type.name = "Elétrico";
        corClasses[i] = "#F7D02C"

        } else if (tipo.type.name == "ice") {
        tipo.type.name = "Gelo";
        corClasses[i] = "#96D9D6"

        } else if (tipo.type.name == "fighting") {
        tipo.type.name = "Lutador";
        corClasses[i] = "#C22E28"

        } else if (tipo.type.name == "poison") {
        tipo.type.name = "Venenoso";
        corClasses[i] = "#A33EA1"

        } else if (tipo.type.name == "rock") {
        tipo.type.name = "Pedra";
        corClasses[i] = "#B6A136"

        } else if (tipo.type.name == "ground") {
        tipo.type.name = "Terrestre";
        corClasses[i] = "#E2BF65"

        } else if (tipo.type.name == "steel") {
        tipo.type.name = "Aço";
        corClasses[i] = "#B7B7CE"

        } else if (tipo.type.name == "dragon") {
        tipo.type.name = "Dragão";
        corClasses[i] = "#6F35FC"

        } else if (tipo.type.name == "fairy") {
        tipo.type.name = "Fada";
        corClasses[i] = "#D685AD"

        } else if (tipo.type.name == "ghost") {
        tipo.type.name = "Fantasma";
        corClasses[i] = "#735797"

        } else if (tipo.type.name == "bug") {
        tipo.type.name = "Inseto";
        corClasses[i] = "#B6A136"

        } else if (tipo.type.name == "psychic") {
        tipo.type.name = "Psíquico";
        corClasses[i] = "#F95587"

        } else if (tipo.type.name == "dark") {
        tipo.type.name = "Sombrio";
        corClasses[i] = "#705746"

        } else if (tipo.type.name == "flying") {
        tipo.type.name = "Voador";
        corClasses[i] = "#A98FF3"

        }
        else if (tipo.type.name == "normal") {
        corClasses[i] = "#A8A77A"

        }

    });
    const tipos = dados.types.length > 1 
        ? `s:</strong> </p> <p class="tiposPoke" style="background-color: ${corClasses[0]};">${dados.types[0].type.name}</p> <p class="tiposPoke" style="background-color: ${corClasses[1]}";>${dados.types[1].type.name}` 
        : `:</strong> </p> <p class="tiposPoke" style="background-color: ${corClasses[0]};">${dados.types[0].type.name}`

    descricaoP.innerHTML = `
    <div class="descT">
        <h1>${dados.name}</h1>
    </div>
    <div class="descC">
        <p><strong>HP:</strong> ${dados.stats[0].base_stat}</p>
        <p><strong>Tipo${tipos}</p>
        <p><strong>Ataque:</strong> ${dados.stats[1].base_stat}</p>
        <p><strong>Defesa:</strong> ${dados.stats[2].base_stat}</p>
        <p><strong>Ataque Especial:</strong> ${dados.stats[3].base_stat}</p>
    </div>
`;


const sprite = document.querySelector(".spriteP");
sprite.innerHTML += `
    <button type="button" id="btnSprite" class="verShiny">VER SHINY</button>
    <div id=image><img src="${dados.sprites.front_default}"></div>
`;

const image = document.getElementById("image");
const btnSprite = document.getElementById("btnSprite");
btnSprite.addEventListener("click", function() {
    if (btnSprite.classList[0] == "verShiny") {

        btnSprite.classList.remove("verShiny")
        btnSprite.classList.add("verNormal")
        btnSprite.innerText = "VER NORMAL"

        image.innerHTML = `
        <img src="${dados.sprites.front_shiny}">
        `
    } else {
        btnSprite.classList.remove("verNormal")
        btnSprite.classList.add("verShiny")
        btnSprite.innerText = "VER SHINY"

        image.innerHTML = `
        <img src="${dados.sprites.front_default}">
        `
    }


})
}
    carregarPoke();






