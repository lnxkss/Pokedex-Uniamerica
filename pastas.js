const pastas = document.getElementById("folders");

let stringPastas = localStorage.getItem("arrayPastas")
let arrayPastas = JSON.parse(stringPastas);
let id = 0

pastas.innerHTML = `
    <a href="criarPastas.html">
    <img src="imgs/CriacaoDePastas.webp" alt="Pokedex" class="criacaodepastas">
    </a>
    `
function carregarPastas() {
if (arrayPastas !== null) {
    arrayPastas.forEach(pasta => {
        pastas.innerHTML += `
            <article class="pastas" id="${id}">
            <img src="imgs/Pastas.webp" alt="Pasta" width="215px"/>
            <h2>${pasta}</h2>
            <button type="button" class="reticencias">...</button>
            </article>
        `
        id++;
    });
}
}
carregarPastas();

const botoes = document.querySelectorAll(".reticencias")
botoes.forEach(btn => {
    btn.addEventListener("click", function(event) {
        const artigo = event.target.closest('article');
        artigo.classList.remove("pastas")
        artigo.classList.add("pastaRet")
        artigo.innerHTML = `
        <div class="linha">
        <p>Excluir pasta</p>
        </div>
        <h1 class="X">X</h1>
        <div class="linha">
        <p>Renomear pasta</p>
        </div>`
    })    
});


