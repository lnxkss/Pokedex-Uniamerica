const sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML += `
    
      <a class="menu-item" href="home.html">
        <img src="imgs/logo.webp" alt="Logo" class="logo"/>
      </a>

  <a class="menu-item" href="home.html">
    <img src="imgs/home.webp" alt="Home" class="menu-icon"
         data-icon-normal="imgs/home.webp"
         data-icon-ativo="imgs/homeP.webp"/>
    <span class="menu-text">Home</span>
  </a>

  <a class="menu-item" href="pastas.html">
    <img src="imgs/pasta.webp" alt="Pastas" class="menu-icon"
         data-icon-normal="imgs/pasta.webp"
         data-icon-ativo="imgs/pastaP.webp"/>
    <span class="menu-text">Pastas</span>
  </a>

  <a class="menu-item" href="ajustes.html">
    <img src="imgs/config.webp" alt="Configurações" class="menu-icon"
         data-icon-normal="imgs/config.webp"
         data-icon-ativo="imgs/configP.webp"/>
    <span class="menu-text">Ajustes</span>
  </a>

  <a class="menu-item" href="perfil.html">
    <img src="imgs/perfil.webp" alt="Perfil" class="menu-icon"
         data-icon-normal="imgs/perfil.webp"
         data-icon-ativo="imgs/perfilP.webp"/>
    <span class="menu-text">Perfil</span>
  </a>

  <a class="menu-item" href="pokedex.html">
    <span class="menu-text">Sair</span>
  </a>
  
  <button id="menu-btn">&gt;</button>
    `;

    const paginaAtual = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-item").forEach((item) => {
    const icone = item.querySelector(".menu-icon");

    if (!icone) return;

    const paginaDoItem = item.getAttribute("href").split("/").pop();

    if (paginaDoItem === paginaAtual) {
        icone.src = icone.dataset.iconAtivo || icone.src;
    }
});

const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("aberta");

    const aberta = sidebar.classList.contains("aberta");

    menuBtn.textContent = aberta ? "<" : ">";

    menuBtn.style.left = aberta ? "230px" : "100px";
});
