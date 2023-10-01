// Save name player

const saveName = () => {
  let valor = document.getElementById("playerName").value;
  sessionStorage.setItem("name", valor);

};

// Colour Picker

window.addEventListener("load", startup, false);

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let arrayChosenColours = [];
function startup(event) {
    arrayColorPicker.map(
        (element) => {
            element.value = "#8a2be2";
            element.addEventListener("input", (event) => updateFirst(event, element), false);
            element.select();
        }
    )
}

const updateFirst = (event, element) => {

  let colorSquare = document.getElementById(`square${element.id}`);
  colorSquare.style.backgroundColor = event.target.value;
  let color = getComputedStyle(colorSquare).backgroundColor;
  arrayChosenColours[element.id] = color;
}
console.log(arrayChosenColours);
const saveChosenColours = () => {
  sessionStorage.setItem("chosenColours", JSON.stringify(arrayChosenColours));
  window.location.href = "./game.html";
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
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    window.onload = (event) => {
    selected.style.display = "flex";
};

// Game

window.addEventListener("load", ()=>howManyRows());

let board = document.getElementById("game");

const createRows = () => {
    let mainCol = document.createElement("div");
    mainCol.className = "col-12 d-flex";
    let squaresDiv = document.createElement("div");
    squaresDiv.className = "d-flex justify-content-evenly";

    for(let i=0; i < 4; i++){
        let eachSquare = document.createElement("div");
        eachSquare.className = "squareGame m-2";
        squaresDiv.appendChild(eachSquare)
    }

    let circlesDiv = document.createElement("div");
    circlesDiv.className = "d-flex justify-content-evenly align-items-center";

    for(let i=0; i < 4; i++){
        let eachCircle = document.createElement("div");
        eachCircle.className = "circle m-1";
        circlesDiv.appendChild(eachCircle)
    }

    mainCol.appendChild(squaresDiv);
    mainCol.appendChild(circlesDiv);
    board.appendChild(mainCol);
};
const howManyRows = () => {

  if (selectedLevel == "beginnerRow"){
      for (let i=0; i < 10; i++){
          createRows();
      }
  } else if (selectedLevel == "intermediateRow"){
      for (let i=0; i < 8; i++){
          createRows();
      }
  } else {
      for (let i=0; i < 6; i++){
          createRows();
      }
  }
}