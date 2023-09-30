// Save name player

const saveName = () => {
  let valor = document.getElementById("playerName").value;
  sessionStorage.setItem("name", valor);
  window.addEventListener("load", startup, false);
};

// Colour Picker

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
function startup(event) {
  arrayColorPicker.map((elemento) => {
    colorPicker.value = "#8a2be2";
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
  }
  )
}

function updateFirst(event) {
  const colorSquare = document.getElementById("square1");
  colorSquare.style.backgroundColor = event.target.value;
}

function updateAll(event) {
  const colorSquare = document.getElementById("square1");
  colorSquare.style.backgroundColor = event.target.value;
}

// Hidden Rows

const saveLevelBeginner = () => {
    sessionStorage.setItem("level", "beginnerRow");
    window.location.href = "./colores.html";
}
const saveLevelIntermediate = () => {
    sessionStorage.setItem("level", "intermediateRow");
    window.location.href = "./colores.html";
}
window.onload = (event) => {
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    selected.style.display = "flex";
};
