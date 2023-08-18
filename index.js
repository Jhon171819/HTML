function modoClaro() {
    document.getElementById("B").style.backgroundColor = "white";
    document.getElementById("B").style.color = "black";
}
function modoEscuro() {
    document.getElementById("B").style.backgroundColor = "black";
    document.getElementById("B").style.color = "white";
}
function dividir() {
    let x = document.getElementById("Valor1").value;
    x = parseInt(x)
    let y = document.getElementById("Valor2").value;
    y = parseInt(y)
    resultado = parseFloat(x / y).toFixed(2)
    document.getElementById("Resultado").innerHTML = resultado;
}

function subtrair() {
    let x = document.getElementById("Valor1").value;
    x = parseInt(x)
    let y = document.getElementById("Valor2").value;
    y = parseInt(y)
    document.getElementById("Resultado").innerHTML = x - y;

}
function multiplicar() {
    let x = document.getElementById("Valor1").value;
    x = parseInt(x)
    let y = document.getElementById("Valor2").value;
    y = parseInt(y)
    document.getElementById("Resultado").innerHTML = x * y;
}

function somar() {
    let x = document.getElementById("Valor1").value;
    x = parseInt(x)
    let y = document.getElementById("Valor2").value;
    y = parseInt(y)
    document.getElementById("Resultado").innerHTML = x + y;
}