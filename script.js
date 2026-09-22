const pokemons = [{
    id: 1,
    name: "Bulbasaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    tipo: "Grama - Veneno",
    geracao: 1,
    hp: 45,
    atk: 49,
    def: 49,
    esp: 65
},
{
    id: 2,
    name: "Ivysaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    tipo: "Grama - Veneno",
    geracao: 1,
    hp: 60,
    atk: 62,
    def: 63,
    esp: 80
},
{
    id: 3,
    name: "Venusaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    tipo: "Grama - Veneno",
    geracao: 1,
    hp: 80,
    atk: 82,
    def: 83,
    esp: 100
},
{
    id: 4,
    name: "Charmander",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    tipo: "Fogo",
    geracao: 1,
    hp: 39,
    atk: 52,
    def: 43,
    esp: 60
},
{
    id: 5,
    name: "Charmeleon",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    tipo: "Fogo",
    geracao: 1,
    hp: 58,
    atk: 64,
    def: 58,
    esp: 80
},
{
    id: 6,
    name: "Charizard",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    tipo: "Fogo - Voador",
    geracao: 1,
    hp: 78,
    atk: 84,
    def: 78,
    esp: 109
},
{
    id: 7,
    name: "Squirtle",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    tipo: "Água",
    geracao: 1,
    hp: 44,
    atk: 48,
    def: 65,
    esp: 50
},
{
    id: 8,
    name: "Wartortle",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    tipo: "Água",
    geracao: 1,
    hp: 59,
    atk: 63,
    def: 80,
    esp: 65
},
{
    id: 9,
    name: "Blastoise",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    tipo: "Água",
    geracao: 1,
    hp: 79,
    atk: 83,
    def: 100,
    esp: 85
},
{
    id: 25,
    name: "Pikachu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    tipo: "Elétrico",
    geracao: 1,
    hp: 35,
    atk: 55,
    def: 40,
    esp: 50
},
{
    id: 26,
    name: "Raichu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    tipo: "Elétrico",
    geracao: 1,
    hp: 60,
    atk: 90,
    def: 55,
    esp: 90
},
];

const divPokemons = document.querySelector(".divPokemons");

pokemons.forEach(pokemon => {

    divPokemons.innerHTML += `
        <div class="cardPokemon">
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
            <p><strong>Geração:</strong> ${pokemon.geracao}</p>
            <p><strong>HP:</strong> ${pokemon.hp}</p>
            <p><strong>Defesa:</strong> ${pokemon.def}</p>
            <p><strong>Ataque:</strong> ${pokemon.atk}</p>
            <p><strong>Ataque Especial:</strong> ${pokemon.esp}</p>
        </div>
    `;

});