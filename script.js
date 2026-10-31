
const menuButton = document.getElementById("menuButton");
const openProject = document.getElementById("openProject");
const startCreating = document.getElementById("startCreating");
const editor = document.getElementById("editor");

// Menu principal
menuButton.addEventListener("click", () => {
  const existingMenu = document.querySelector(".quick-menu");

  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  const menu = document.createElement("nav");
  menu.className = "quick-menu";

  menu.innerHTML = `
    <a href="#project">Meu projeto</a>
    <a href="#tools">Ferramentas</a>
    <a href="#editor">Editor de HQ</a>
  `;

  document.querySelector(".topbar").after(menu);
});

// Abrir projeto
openProject.addEventListener("click", () => {
  editor.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Começar a criar
startCreating.addEventListener("click", () => {
  alert("Bem-vindo ao editor do FF Comic Studio! Em breve você poderá montar suas HQs aqui.");
});

// Ferramentas
document.querySelectorAll(".tool-card").forEach((card) => {
  card.addEventListener("click", () => {
    const tool = card.dataset.tool;

    const messages = {
      characters: "A biblioteca de personagens está sendo preparada.",
      scenes: "A biblioteca de cenários está sendo preparada.",
      pages: "O editor de páginas está sendo desenvolvido.",
      export: "A exportação de HQs será implementada em breve."
    };

    alert(messages[tool]);
  });
});

