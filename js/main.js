// Save name player

const saveName = () => {
  let valor = document.getElementById("playerName").value;
  sessionStorage.setItem("name", valor);

};

// Colour Picker

window.addEventListener("load", startup, false);

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);

function startup(event) {
    arrayColorPicker.map(
        (element) => {
            element.value = "#8a2be2";
            element.addEventListener("input", (event)=> updateFirst(event, element), false);
            element.addEventListener("change", (event)=> updateAll(event, element), false);
            element.select();
        }
    )
}

function updateFirst(event,element) {

    let colorSquare = document.getElementById(`square${element.id}`);
    colorSquare.style.backgroundColor = event.target.value;
}

function updateAll(event,element) {

    const colorSquare1 = document.getElementById(`square${element.id}`);
    colorSquare1.style.backgroundColor = event.target.value;
}

// Hidden Rows

const saveLevelBeginner = () => {
    sessionStorage.setItem("level", "beginnerRow");
    window.location.href = "./colours.html";
}
const saveLevelIntermediate = () => {
    sessionStorage.setItem("level", "intermediateRow");
    window.location.href = "./colours.html";
}
const saveLevelAdvanced = () => {
    sessionStorage.setItem("level", "advancedRow");
    window.location.href = "./colours.html";
}
window.onload = (event) => {
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    selected.style.display = "flex";
};
