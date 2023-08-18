function WhiteMode() {
    document.getElementById("B").style.backgroundColor = "white";
    document.getElementById("B").style.color = "black";    
}
function DarkMode() {
    document.getElementById("B").style.backgroundColor = "black";
    document.getElementById("B").style.color = "white";
}

function soma() {
    let x = document.getElementById("Valor1").value;
    x = parseInt(x)
    let y = document.getElementById("Valor2").value;
    y = parseInt(y)
    document.getElementById("Show").innerHTML = x + y;
}