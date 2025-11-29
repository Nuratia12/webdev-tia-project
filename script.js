document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const h2List = document.querySelectorAll("h2");

  title.textContent = "Belajar Javascript Dasar - Interaksi Pertama❤️";

  title.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
  });

  header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "#cc0000";
  });
  header.addEventListener("mouseout", () => {
    header.style.backgroundColor = "";
  });

  let fontToggled = false;

  document.addEventListener("keydown", (event) => {

    if (event.key === "f") {
      fontToggled = !fontToggled;
      h2List.forEach(h2 => {
        h2.style.fontSize = fontToggled ? "30px" : "";
      });
    }

    if (event.key === "d") {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        document.body.style.background = "";
      }
    }
  });

window.addEventListener("scroll", () => {
  if (document.body.classList.contains("dark-mode")) return;

  if (window.scrollY > 200) {
    document.body.style.background =
      "linear-gradient(135deg, #ff9999, #ff6666, #ff3333)";
  } else {
    document.body.style.background = ""; 
  }
});


});