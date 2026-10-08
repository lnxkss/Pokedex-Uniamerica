const sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML += `
      <a class="menu-item" href="index.html">
        <img src="imgs/logo.webp" alt="Logo" class="logo"/>
      </a>
      <a class="menu-item" href="index.html">
        <img src="imgs/home.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/pasta.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/config.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html">
        <img src="imgs/perfil.webp" alt="Pokedex" class="menu-icon"/>
      </a>
      <a class="menu-item" href="pokedex.html" class="menu-icon">Sair</a>
      <button id="menu-btn">></button>
    `;