const pastas = document.getElementById("folders");

let stringPastas = localStorage.getItem("arrayPastas")
let arrayPastas = JSON.parse(stringPastas);

pastas.innerHTML = `
    <a href="criarPastas.html">
    <img src="imgs/CriacaoDePastas.webp" alt="Pokedex" class="criacaodepastas">
    </a>
    `

if (arrayPastas !== null) {
    arrayPastas.forEach(pasta => {
        pastas.innerHTML += `
            <article class="pastas">
            <img src="imgs/Pastas.webp" alt="Pasta" width="215px"/>
            <p>${pasta}</p>
            </article>
        `
    });
}