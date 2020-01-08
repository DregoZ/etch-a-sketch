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
    clear = document.getElementById("clear");

    tablero.addEventListener("click", activarPincel);
    pintar.addEventListener("click", crearTablero);
    borrar.addEventListener("click", borrarTablero);
    clear.addEventListener("click", clearBoard);
    
}

function clearBoard() {
    /* estamos trabajando en ello */
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
    let tamano = prompt("Tamaño del lienzo (max. 100");

    if (tamano < 1) {
        alert("Tamaño mínimo 1");
        tamano = 1;
    }

    if (tamano > 100) {
        tamano = 100;
        alert("Tamaño máximo 100");
    }

    borrarTablero();

    for (let x = 0; x < tamano; x++) {
        var fila = document.createElement("div");
        fila.setAttribute("id", "fila-" + x);
        tablero.appendChild(fila);

        for (let y = 0; y < tamano; y++) {
         //   let currentVal = 'white';

            var celda = document.createElement("div");
            celda.setAttribute("id", "celda-" + x + "-" + y);
            celda.setAttribute("class", "celda");
            celda.setAttribute("value", "white");
            celda.setAttribute("style", "width:" + ((750 - tamano * 2) / tamano) + "; height:" + ((750 - tamano * 2) / tamano) + "; background-color:" + celda.getAttribute('value'));



            celda.addEventListener("mouseover", function () {
                celda.setAttribute("value", color.value);

                if (pintura) {
                    this.setAttribute("style", "width:" + ((750 - tamano * 2) / tamano) + "; height:" + ((750 - tamano * 2) / tamano) + "; background-color:" + celda.getAttribute('value'));
                }

            });
            fila.appendChild(celda);
        }



    }


    function newFunction() {
        let a = celda.value;
        console.log("valor:" + a);
    }
}



