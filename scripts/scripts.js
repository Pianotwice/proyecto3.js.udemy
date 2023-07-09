let segundosRestantes;
let temporizador;

// Comenzamos el juego
function comenzarJuego() {
    document.getElementById("comenzar").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
    document.getElementById("preguntas").style.display = "block";
    document.getElementById("tiempo").style.display = "block";
    document.getElementById("entregar").style.display = "inline-block";
  
    segundosRestantes = 30;
    actualizarTemporizador();
    temporizador = setInterval(actualizarTemporizador, 1000);

    reproducirSonidoInicio();

}

function reproducirSonidoInicio() {
    let audioInicio = document.getElementById("audio-start");
    audioInicio.play();
}

// Esto actualizará el temporizador
function actualizarTemporizador() {
    let segundosSpan = document.getElementById("segundos");
    segundosSpan.textContent = segundosRestantes;
  
    if (segundosRestantes <= 0) {
        clearInterval(temporizador);
        mostrarGameOver();
    }
  
    segundosRestantes--;
}

// Mostramos la alerta "GAME OVER"
function mostrarGameOver() {
    alert("GAME OVER");
    reproducirSonidoGameOver();
    reiniciarJuego();
}

function reproducirSonidoGameOver() {
    let audioGameOver = document.getElementById("audio-gameover");
    audioGameOver.play();
}

function verificarRespuestas() {
    clearInterval(temporizador);

    mostrarFechaYRespuestas();
}

// Mostramos alerta con la fecha actual y las respuestas
function mostrarFechaYRespuestas() {
    let miFecha = new Date();
    let fechaFormateada = obtenerFechaFormateada(miFecha);
    let horaFormateada = obtenerHoraFormateada(miFecha);
  
    let formulario = document.getElementById("formulario");
    let respuestas = formulario.elements;
    let respuestasTexto = [];
  
    for (let i = 0; i < respuestas.length; i++) {
        respuestasTexto.push(respuestas[i].value);
    }
  
    alert("Fecha actual: " + fechaFormateada + "\nHora actual: " + horaFormateada + "\nRespuestas: " + respuestasTexto.join(", "));
}

// Esto va a generar el motor de reinicio el juego
function reiniciarJuego() {
    clearInterval(temporizador);
    document.getElementById("formulario").reset();
    document.getElementById("comenzar").style.display = "inline-block";
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("preguntas").style.display = "none";
    document.getElementById("tiempo").style.display = "none";
    document.getElementById("entregar").style.display = "none";
    document.getElementById("resultados").style.display = "none";
    document.getElementById("respuestas-list").innerHTML = "";
    detenerMusica();
}

// Obtenenemos la fecha formateada
function obtenerFechaFormateada(fecha) {
    var opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}
  
  // Obtenenemos la hora formateada
function obtenerHoraFormateada(fecha) {
    var opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return fecha.toLocaleTimeString('es-ES', opciones);
}