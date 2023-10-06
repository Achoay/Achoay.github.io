
// Save name player

const saveName = () => {
    let name = document.getElementById("playerName").value;
    if (name == "") {
        sessionStorage.setItem("name", "Player 1");
    } else {
        sessionStorage.setItem("name", name);
    }
}
let name = sessionStorage.getItem("playerName")

// Colour Picker

window.addEventListener("load",() => startup());

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let objectChosenColours  = {};
const startup = () => {
    arrayColorPicker.map(
        (element) => {
            element.value = "#8a2be2";
            element.addEventListener("input", (event) => updateSquare(event, element));
            element.select();
        }
    )
}

const updateSquare = (event, element) => {
  let colorSquare = document.getElementById(`square${element.id}`);
  colorSquare.style.backgroundColor = event.target.value;
  let color = getComputedStyle(colorSquare).backgroundColor;
  objectChosenColours[element.id] = color;
}

const saveChosenColours = () => {
  sessionStorage.setItem("chosenColours", JSON.stringify(objectChosenColours));
  window.location.href = "./game.html";
}
let chosenColours = JSON.parse(sessionStorage.getItem("chosenColours"));
let arrayChosenColours = [];
const changeColoursToArray = () => {

    for (const property in chosenColours) {
        arrayChosenColours.push(chosenColours[property]);
    }
}
changeColoursToArray();

// Hidden Colour Rows

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
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    window.onload = (event) => {
    selected.style.display = "flex";
};

