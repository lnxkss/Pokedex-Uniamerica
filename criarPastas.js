let inp = "";
const input = document.querySelector("input");
input.addEventListener("input", function() {
    inp = input.value;
});

const criar = document.querySelector(".botaoCriar"); 
criar.addEventListener("click", function() {
    let stringPastas = localStorage.getItem("arrayPastas")

        let arrayPastas = stringPastas ? JSON.parse(stringPastas) : [];   
        arrayPastas.push(inp)

        localStorage.setItem("arrayPastas", JSON.stringify(arrayPastas))
        window.location.href = "pastas.html"
});
