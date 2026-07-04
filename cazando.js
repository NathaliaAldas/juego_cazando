let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");


function graficarGato() {
    let ancho = 100;
    let alto = 100;
    let x = (canvas.width - ancho) / 2;
    let y = (canvas.height - alto) / 2;

    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, ancho, alto);
}
