let inp = "";
const criar = document.querySelector(".botaoCriar"); 

const input = document.querySelector("input");
input.addEventListener("input", function() {
    inp = input.value.trim();
});

input.addEventListener("keydown", function(event){
            if (event.key == "Enter") {
                criar.click();
            }
        })


criar.addEventListener("click", function() {
    if (inp !== "") {
        let pastaAgora = {
            nome: inp,
            id: null,
            pokemons: []
        }

        let stringPastas = localStorage.getItem("arrayPastas")
        let arrayPastas = JSON.parse(stringPastas) || [];   
        arrayPastas.push(pastaAgora)

        localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))
        window.location.href = "pastas.html"
    }
});
