document.addEventListener("DOMContentLoaded", () => {
  // Aplica o fade-in inicial
  document.body.classList.add("fade-in");

  // Adiciona transição suave entre páginas
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      e.preventDefault();

      // Adiciona fade-out e transição de cor
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});

