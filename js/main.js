
// Save name player

const saveName = () => {

    let valor = document.getElementById("playerName").value;

    sessionStorage.setItem("name", valor);

    window.location.href = "../result.html";
}

// Colour Picker

function startup() {
    let colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = "#8a2be2";
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}

function updateAll(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}