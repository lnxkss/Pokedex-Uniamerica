// --- 1. Lógica do modal de Excluir Conta ---
const certo = document.getElementById("excluir");

if (certo) {
    certo.addEventListener("click", function() {
        const janela = document.querySelector(".quadrado");
        const porta = document.querySelector(".preto");

        janela.classList.remove("quadrado");
        porta.classList.remove("preto");

        janela.classList.add("quadradoE");
        porta.classList.add("pretoE");
    });
}

const simnao = document.querySelectorAll(".botao2");

simnao.forEach(botao => {
    botao.addEventListener("click", function(){
        const janela = document.querySelector(".quadradoE");
        const porta = document.querySelector(".pretoE");

        janela.classList.remove("quadradoE");
        porta.classList.remove("pretoE");

        janela.classList.add("quadrado");
        porta.classList.add("preto");
    });
});

// --- 2. Lógica do Perfil ---
const perfil = document.getElementById("btn-perfil");
if (perfil) {
    perfil.addEventListener("click", function(){
        window.location.href = "perfil.html";
    });
}

// --- 3. Sua função original que muda o Idioma (Com Memória) ---
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

    // Salva a escolha no navegador
    localStorage.setItem("idiomaSelecionado", idioma);

    // Aciona o motor do GTranslate por trás dos panos
    if (typeof doGTranslate === 'function') {
        doGTranslate('pt|' + idioma);
    }
}

// Verifica se já tinha um idioma salvo logo ao carregar a página de Ajustes
document.addEventListener("DOMContentLoaded", function() {
    const idiomaSalvo = localStorage.getItem("idiomaSelecionado");
    if (idiomaSalvo && idiomaSalvo !== 'pt') {
        setTimeout(() => {
            mudarIdioma(idiomaSalvo);
        }, 500);
    }
});
