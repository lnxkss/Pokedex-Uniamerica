const pokemons = [{
    id: 1,
    name: "Bulbasaur",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "Grass - Poison",
    hp: 45,
    attack: 49,
    defense: 49,
    special_attack: 65
},
{
    id: 2,
    name: "Ivysaur",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    type: "Grass - Poison",
    hp: 60,
    attack: 62,
    defense: 63,
    special_attack: 80
},
{
    id: 3,
    name: "Venusaur",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    type: "Grass - Poison",
    hp: 80,
    attack: 82,
    defense: 83,
    special_attack: 100
},
{
    id: 4,
    name: "Charmander",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: "Fire",
    hp: 39,
    attack: 52,
    defense: 43,
    special_attack: 60
},
{
    id: 5,
    name: "Charmeleon",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    type: "Fire",
    hp: 58,
    attack: 64,
    defense: 58,
    special_attack: 80
},
{
    id: 6,
    name: "Charizard",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    type: "Fire - Voador",
    hp: 78,
    attack: 84,
    defense: 78,
    special_attack: 109
},
{
    id: 7,
    name: "Squirtle",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: "Water",
    hp: 44,
    attack: 48,
    defense: 65,
    special_attack: 50
},
{
    id: 8,
    name: "Wartortle",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    type: "Water",
    hp: 59,
    attack: 63,
    defense: 80,
    special_attack: 65
},
{
    id: 9,
    name: "Blastoise",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    type: "Water",
    hp: 79,
    attack: 83,
    defense: 100,
    special_attack: 85
},
{
    id: 25,
    name: "Pikachu",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "Electric",
    hp: 35,
    attack: 55,
    defense: 40,
    special_attack: 50
},
{
    id: 26,
    name: "Raichu",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    type: "Electric",
    hp: 60,
    attack: 90,
    defense: 55,
    special_attack: 90
},
];

const divPokemons = document.querySelector(".divPokemons");

pokemons.forEach(pokemon => {

    divPokemons.innerHTML += `
        <div class="cardPokemon">
            <img src="${pokemon.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p><strong>Tipo:</strong> ${pokemon.type}</p>
            <p><strong>HP:</strong> ${pokemon.hp}</p>
            <p><strong>Defesa:</strong> ${pokemon.defense}</p>
            <p><strong>Ataque:</strong> ${pokemon.attack}</p>
            <p><strong>Ataque Especial:</strong> ${pokemon.special_attack}</p>
        </div>
    `;

});

const sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML += `
      <a class="menu-item" href="index.html">
        <img src="imgs/logo.webp" alt="Logo" class="logo" />
      </a>
      <a class="menu-item" href="index.html">
        <img src="imgs/home.webp" alt="Pokedex" class="menu-icon" />
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/pasta.webp" alt="Pokedex" class="menu-icon" />
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/config.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/perfil.webp" alt="Pokedex" class="menu-icon" />
      </a>
      <a class="menu-item" href="pokedex.html" class="menu-icon">Sair</a>
      <button id="menu-btn">></button>
    `;