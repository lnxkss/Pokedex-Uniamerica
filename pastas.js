const pastas = document.getElementById("folders");

let stringPastas = localStorage.getItem("arrayPastas")
let arrayPastas = JSON.parse(stringPastas);

const parametros = new URLSearchParams(window.location.search);
if (parametros.size !== 0) {
    const pAtuais = parametros.get("id");
    
}

function carregarPastas() {
    let id = 0
    pastas.innerHTML = `
    <a href="criarPastas.html" class="criacaodepastas">
    <img src="imgs/CriacaoDePastas.webp" alt="Pokedex" class="criacaodepastas">
    </a>
    `
if (arrayPastas !== null) {
    arrayPastas.forEach(pasta => {
        let nomeTrun = ""
        if (pasta.length > 35) {
            nomeTrun = pasta.substring(0, 40) + "..."
        } else {
            nomeTrun = pasta
        }
        pastas.innerHTML += `
            <article class="pastas" id="${id}">
            <img src="imgs/Pastas.webp" alt="Pasta" width="215px"/>
            <h2>${nomeTrun}</h2>
            <button type="button" class="reticencias">...</button>
            </article>
        `
        id++;
    });
}

const botoes = document.querySelectorAll(".reticencias")
botoes.forEach(btn => {
    btn.addEventListener("click", function(event) {
        const artigo = event.target.closest('article');
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
            arrayPastas[Number(artigo.id)] = inp
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

carregarPastas();



