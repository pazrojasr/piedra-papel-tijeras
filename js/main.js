// Puntuaciones iniciales
let puntuacionJugador = 0;
let puntuacionComputadora = 0;

// Seleccionar los elementos del DOM
let signoJugador = document.getElementById("signoJugador");
let signoComputadora = document.getElementById("signoComputadora");
let puntuacionJugadorDOM = document.getElementById("puntuacionJugador");
let puntuacionComputadoraDOM = document.getElementById("puntuacionComputadora");
let infoPuntuacion = document.getElementById("infoPuntuacion");
let modalFinJuego = document.getElementById("modalFinJuego");
let mensajeFinJuego = document.getElementById("mensajeFinJuego");
let btnReiniciar = document.getElementById("btnReiniciar");
let superposicion = document.getElementById("superposicion");

// Función para obtener la elección de la computadora
function obtenerComputadora() {
  let opciones = ["👊", "✋", "✌"];
  let indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

// Función para determinar quién gana
function obtenerGanador(jugador, computadora) {
  if (jugador === computadora) {
    return "empate";
  } else if (
    (jugador === "👊" && computadora === "✌") ||
    (jugador === "✋" && computadora === "👊") ||
    (jugador === "✌" && computadora === "✋")
  ) {
    return "jugador";
  } else {
    return "computadora";
  }
}

// Actualizar el DOM con las nuevas puntuaciones y los signos
function actualizarDOM() {
  puntuacionJugadorDOM.innerText = `Jugador: ${puntuacionJugador}`;
  puntuacionComputadoraDOM.innerText = `PC: ${puntuacionComputadora}`;
  signoJugador.innerText = eleccionJugador;
  signoComputadora.innerText = eleccionComputadora;
}

// Juego principal
function jugar(eleccionJugador) {
  let eleccionComputadora = obtenerComputadora();
  let ganador = obtenerGanador(eleccionJugador, eleccionComputadora);

  if (ganador === "jugador") {
    puntuacionJugador++;
    infoPuntuacion.innerText = "¡Ganaste el punto!";
  } else if (ganador === "computadora") {
    puntuacionComputadora++;
    infoPuntuacion.innerText = "Perdiste el punto.";
  } else {
    infoPuntuacion.innerText = "Es un empate.";
  }

  actualizarDOM();

  if (puntuacionJugador === 5 || puntuacionComputadora === 5) {
    reiniciarJuego(); // Reinicia el juego automáticamente
  }
}

// Fin del juego
function finJuego() {
  modalFinJuego.style.display = "block";
  superposicion.style.display = "block";

  if (puntuacionJugador === 5) {
    mensajeFinJuego.innerText = "¡Ganaste el juego!";
  } else {
    mensajeFinJuego.innerText = "Perdiste el juego.";
  }
}

// Reiniciar el juego
function reiniciarJuego() {
  puntuacionJugador = 0;
  puntuacionComputadora = 0;
  signoJugador.innerText = "❔";
  signoComputadora.innerText = "❔";
  infoPuntuacion.innerText = "Elige tu movimiento";
  modalFinJuego.style.display = "none";
  superposicion.style.display = "none";
}

// Event listeners para los botones
document
  .getElementById("btnPiedra")
  .addEventListener("click", () => jugar("👊"));
document
  .getElementById("btnPapel")
  .addEventListener("click", () => jugar("✋"));
document
  .getElementById("btnTijeras")
  .addEventListener("click", () => jugar("✌"));
btnReiniciar.addEventListener("click", reiniciarJuego);
