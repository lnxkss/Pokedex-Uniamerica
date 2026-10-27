const btnPerfil = document.getElementById('btn-perfil');

function irParaOutraTela() {
    
    window.location.href = "perfil.html"; 
    
}

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

simnao.addEventListener("click", function(){
    const janela = document.querySelector(".quadrado")
    const porta = document.querySelector(".preto")

    
    janela.classList.remove("quadradoE")
    porta.classList.remove("pretoE")

    janela.classList.add("quadrado")
    porta.classList.add("preto")
 
})


