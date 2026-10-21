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
      
      
      <a class="menu-item" href="config.html">
        <img src="imgs/config.webp"
       alt="Configurações"
       class="menu-icon"
       data-icon-normal="imgs/config.webp"
       data-icon-ativo="imgs/config-preta.png"/>
      </a>


      <a class="menu-item" href="perfil.html">
        <img src="imgs/perfil.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html" class="menu-icon">Sair</a>
      <button id="menu-btn">></button>
    `;