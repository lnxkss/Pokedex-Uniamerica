function aplicarTraducao() {
    const idiomaSalvo = localStorage.getItem("idiomaSelecionado");

    if (!idiomaSalvo || idiomaSalvo === 'pt') return;

    const esperarWidget = setInterval(() => {
        const widget = document.querySelector('.gtranslate_wrapper');
        
        if (widget && typeof doGTranslate === 'function') {
            widget.dispatchEvent(new Event('pointerenter'));
            
            setTimeout(() => {
                doGTranslate('pt|' + idiomaSalvo);
            }, 500);

            clearInterval(esperarWidget);
        }
    }, 200);

    setTimeout(() => clearInterval(esperarWidget), 8000);
}

window.addEventListener("load", aplicarTraducao);
