document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("show");
      hamburger.classList.toggle("active"); // Optional: animate to X
    });
  });