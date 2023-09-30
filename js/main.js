const saveName = () => {

    let valor = document.getElementById("playerName").value;

    sessionStorage.setItem("name", valor);

    window.location.href = "../result.html";
}