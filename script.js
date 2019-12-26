var tablero;
var pintar;
var color;
var pincel;
var pintura = false;

window.onload = function () {
    tablero = document.getElementById("drawboard");
    pintar = document.getElementById("pintar");
    color = document.getElementById("color");
    borrar = document.getElementById("borrar");

    tablero.addEventListener("click", activarPincel);
    pintar.addEventListener("click", crearTablero);
    borrar.addEventListener("click", borrarTablero);
}

function activarPincel() {
    if (pintura) {
        pintura = false;
    } else pintura = true;
}

function borrarTablero() {
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
}



function crearTablero() {
    let tamaño = prompt("Tamaño del lienzo (máximo 100");

    borrarTablero();

    for (let x = 0; x < tamaño; x++) {
        var fila = document.createElement("div");
        fila.setAttribute("id", "fila-" + x);
        tablero.appendChild(fila);

        for (let y = 0; y < tamaño; y++) {
            var celda = document.createElement("div");
            celda.setAttribute("id", "celda-" + x + "-" + y);
            celda.setAttribute("class", "celda");
            celda.setAttribute("style", "width:" + ((750 - tamaño * 2) / tamaño) + "; height:" + ((750 - tamaño * 2) / tamaño));

            celda.addEventListener("mouseover", function () {
                if (pintura) {
                    this.setAttribute("class", "pintado");
                }

            });
            fila.appendChild(celda);
        }



    }

}



