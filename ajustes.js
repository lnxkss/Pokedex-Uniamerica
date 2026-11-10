const certo = document.getElementById("excluir")

certo.addEventListener("click", function() {
    const janela = document.querySelector(".quadrado")
    const porta = document.querySelector(".preto")

    janela.classList.remove("quadrado")
    porta.classList.remove("preto")

    janela.classList.add("quadradoE")
    porta.classList.add("pretoE")
})

const simnao = document.querySelectorAll(".botao2")

simnao.forEach(botao => {
    botao.addEventListener("click", function(){
    const janela = document.querySelector(".quadradoE")
    const porta = document.querySelector(".pretoE")

    
    janela.classList.remove("quadradoE")
    porta.classList.remove("pretoE")

    janela.classList.add("quadrado")
    porta.classList.add("preto")
 
})
});



const perfil = document.getElementById("btn-perfil")
perfil.addEventListener("click", function(){
    window.location.href = "perfil.html";
})

function mudarIdioma(idioma) {
    const botoes = document.querySelectorAll('.botoes-idioma button');

    botoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    if (idioma === 'pt') {
        botoes[0].classList.add('ativo');
    } else {
        botoes[1].classList.add('ativo');
    }
}

