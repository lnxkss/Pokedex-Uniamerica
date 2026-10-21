const btnPerfil = document.getElementById('btn-perfil');

function irParaOutraTela() {
    // Coloque exatamente o nome do arquivo .html da outra tela aqui:
    window.location.href = "perfil.html"; 
    
    
}

btnPerfil.addEventListener('click', irParaOutraTela);



