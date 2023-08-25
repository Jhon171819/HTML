function pegarValores() {
    let x = document.getElementById("valor1").value;
    x = parseInt(x)
    let y = document.getElementById("valor2").value;
    y = parseInt(y)
    return {x, y}
}

function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}

function dividir() {
    const {x, y} = pegarValores()
    resultado = parseFloat(x / y).toFixed(2)
    document.getElementById("resultado").innerHTML = resultado;
}

function subtrair() {
    const {x, y} = pegarValores()
    document.getElementById("resultado").innerHTML = x - y;
}

function multiplicar() {
    const {x, y} = pegarValores()
    document.getElementById("resultado").innerHTML = x * y;
}

function somar() {
    const {x, y} = pegarValores()
    document.getElementById("resultado").innerHTML = x + y;
}
