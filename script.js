document.addEventListener("DOMContentLoaded", () => {

  const glow = document.querySelector(".cursor-glow");
  const card = document.querySelector(".image-card");

  // Menú hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu-wrapper");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Cursor glow
  document.addEventListener("mousemove", (e) => {
    if (glow) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
  });

  // Sparkles mágicos
  card.addEventListener("click", (e) => {

    for (let i = 0; i < 3; i++) {

      const sparkle = document.createElement("span");
      sparkle.classList.add("falling-sparkle");

      // Posición inicial (donde hiciste click)
      sparkle.style.left = e.clientX + "px";
      sparkle.style.top = e.clientY + "px";

      // Tamaño aleatorio
      const size = Math.random() * 8 + 6;
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";

      // Desplazamiento lateral aleatorio
      const randomX = (Math.random() - 0.5) * 200;
      sparkle.style.setProperty("--random-x", randomX + "px");

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 3000);
    }

  });

});

