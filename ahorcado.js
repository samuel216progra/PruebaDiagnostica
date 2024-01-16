const palabra = "comida";
let letrasCorrectas = new Set();

function checkLetter() {
    let input = document.getElementById("texto").value.toLowerCase();
    if (palabra.includes(input)) {
        letrasCorrectas.add(input);
        document.getElementById("texto").value = "";
    } else {
        document.getElementById("texto").disabled = true;
    }
}
