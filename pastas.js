const pastas = document.getElementById("folders");
const parametros = new URLSearchParams(window.location.search);
const pAtuais = parametros.get("id");

let contador = 0

let stringPastas = localStorage.getItem("arrayPastas")
let arrayPastas = JSON.parse(stringPastas);

function carregarPastas() {
    let id = 0
    pastas.innerHTML = `
    <a href="criarPastas.html" class="criacaodepastas">
    <img src="imgs/CriacaoDePastas.webp" alt="Pokedex" class="criacaodepastas">
    </a>

    <div class="pastaFav">
    <img src="imgs/favoritos.webp" alt="Pokedex" class="favoritoApenas" id="favoritos">
    <h2>Favoritos</h2>
    </div>
    `
if (arrayPastas !== null) {
    arrayPastas.forEach(pasta => {
        let nomeTrun = ""
        if (pasta.nome.length > 35) {
            nomeTrun = pasta.nome.substring(0, 40) + "..."
        } else {
            nomeTrun = pasta.nome
        }
        pastas.innerHTML += `
            <article class="pastas" id="${id}">
            <img src="https://www.freeiconspng.com/thumbs/check-mark-png/check-mark-png-black-transparent-18.png" alt="Ok" class="check" draggable="false">
            <img src="imgs/Pastas.webp" alt="Pasta" class="pastaApenas" draggable="false"/>
            <h2>${nomeTrun}</h2>
            <button type="button" class="reticencias">...</button>
            </article>
        `
        id++;
    });
    if (pAtuais == null) {
       const artigos = pastas.querySelectorAll('article')
       artigos.forEach(article => {
        article.addEventListener("click", inPasta)
       });
    }
}

localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))

if (parametros.size == 0) {
const botoes = document.querySelectorAll(".reticencias")
botoes.forEach(btn => {
    btn.addEventListener("click", function(event) {
        const artigo = event.target.closest('article');
        event.stopPropagation();

        artigo.removeEventListener("click", inPasta)
        artigo.classList.remove("pastas")
        artigo.classList.add("pastaRet")
        artigo.innerHTML = `
        <div class="linhaE">
        <p>Excluir pasta</p>
        </div>
        <h1 class="X">X</h1>
        <div class="linhaR">
        <p>Renomear pasta</p>
        </div>
        `
    
        const x = artigo.querySelector(".X")
            x.addEventListener("click", function(){
                artigo.classList.remove("pastaRet")
                artigo.classList.add("pastas")
                carregarPastas();
            })

        const excluir = artigo.querySelector(".linhaE")
            excluir.addEventListener("click", function(){
                arrayPastas.splice(Number(artigo.id), 1)
                localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))
                carregarPastas();
            })

        const renomear = artigo.querySelector(".linhaR")
        renomear.addEventListener("click", function(){
            artigo.innerHTML = `
            <p style="margin-top: -10px; margin-bottom: 10px">Novo nome:</p>
            <input type="text" placeholder="Insira um nome novo...">
            <button type="button">Renomear</button>
            `
        let inp = ""
        const input = artigo.querySelector("input")
        input.addEventListener("input", function(){
            inp = input.value
        })

        const btnR = artigo.querySelector("button")
        btnR.addEventListener("click", function(){
            if (inp !== "") {
            arrayPastas[Number(artigo.id)].nome = inp
            localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))
            carregarPastas();
            }
        })

        input.addEventListener("keydown", function(event){
            if (event.key == "Enter") {
                event.preventDefault();
                btnR.click();
            }
        })


        })
        
    })    
});
}
}

carregarPastas();

if (parametros.size !== 0) {
    const qualPasta = document.querySelector(".qualPasta")
    const quantasSelecionadas = qualPasta.querySelector("h1")
    qualPasta.style.display = "flex"

    if (arrayPastas !== null) {
        const pastasTodas = document.querySelectorAll(".pastas")

        pastasTodas.forEach(pasta => {

            function eventListenerLa() {
                const check = pasta.querySelector(".check")
                check.addEventListener("click", eventListenerLa)

                if (pastaImg.classList.contains('pastaSelecionada')) {
                    pastaImg.classList.remove('pastaSelecionada')
                    pastaImg.classList.add('pastaApenas')
                    check.style.opacity = "0"
                    check.style.zIndex = "-1"
                    contador--;
                    quantasSelecionadas.textContent = `[ ${contador} ]`

                } else {
                    pastaImg.classList.remove('pastaApenas')
                    pastaImg.classList.add('pastaSelecionada')
                    check.style.opacity = "0.5"
                    check.style.zIndex = "11"
                    contador++
                    quantasSelecionadas.textContent = `[ ${contador} ]`

                }
            }

            const pastaImg = pasta.querySelector(".pastaApenas")
            pastaImg.addEventListener("click", eventListenerLa)

        });
    }

    const confirmar = qualPasta.querySelector("button")
    confirmar.addEventListener("click", function() {
        const pastasSelecionadas = document.querySelectorAll(".pastaSelecionada")
        const favoritoSelecionado = document.querySelector(".favoritoSelecionado")

        if (favoritoSelecionado !== null) {
            const stringFav = localStorage.getItem("stringFav") || "[]";
            let arrayFav;

            if (stringFav.length > 0) {
                arrayFav = JSON.parse(stringFav)
            }

            if (arrayFav.includes(pAtuais)) {
                alert("Esse pokémon já está em Favoritos")
            } else {
            arrayFav.push(pAtuais)
            localStorage.setItem("stringFav", JSON.stringify(arrayFav))
            }   
        }

        pastasSelecionadas.forEach(pasta => {
            const idAtual = pasta.closest('article').id
            arrayPastas[idAtual].id = idAtual;

            if (arrayPastas[idAtual].pokemons.includes(pAtuais)) {
                alert("Esse pokémon já está em " + arrayPastas[idAtual].nome)
            } else {
            arrayPastas[idAtual].pokemons.push(pAtuais)
            }
        });
        localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))

        window.location.href = 'pastas.html'
})
}

function inPasta() {
    window.location.href = `inPasta.html?id=${this.id}`
}

const favoritos = document.querySelector("#favoritos")
favoritos.addEventListener("click", function() {

    if (parametros.size !== 0) {
    const qualPasta = document.querySelector(".qualPasta")
    const quantasSelecionadas = qualPasta.querySelector("h1")
        if (favoritos.classList.contains("favoritoApenas")) {
            favoritos.classList.remove("favoritoApenas")
            favoritos.classList.add("favoritoSelecionado")
            contador++;
            quantasSelecionadas.textContent = `[ ${contador} ]`
        } else {
            favoritos.classList.remove("favoritoSelecionado")
            favoritos.classList.add("favoritoApenas")
            contador--;
            quantasSelecionadas.textContent = `[ ${contador} ]`
        }

} else {
    window.location.href = "favoritos.html"
    }
})