const container = document.getElementById("container");
const SQUARES = 800;
const title = document.querySelector("#title");

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  title.style.color = color;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = " 0 0 2px #000";
}
