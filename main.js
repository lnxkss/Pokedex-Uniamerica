const sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML += `
      <a class="menu-item" href="home.html">
        <img src="imgs/logo.webp" alt="Logo" class="logo"/>
      </a>
      <a class="menu-item" href="home.html">
        <img src="imgs/home.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pastas.html">
        <img src="imgs/pasta.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="ajustes.html">
        <img src="imgs/config.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="perfil.html">
        <img src="imgs/perfil.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="sair.html">
        <img src="imgs/sair.webp" style="width: 100%; margin-top: -20px; opacity: 0.4 ;" alt="Pokedex" class="menu-icon"/>
      </a>
      
    `;

    const head = document.querySelector("head");
    head.innerHTML += `
    <style>
        .gtranslate_wrapper, #goog-gt-tt, .skiptranslate {
            display: none !important;
        }
        body {
            top: 0 !important;
        }
    </style>
    `