"use strict";

// Constantes globales (campos generales)
// Constante numero usuaria
const numberInput = document.querySelector(".js-number-input");
// Constante botón prueba
const buttonInput = document.querySelector(".js-button-input");
// Constante valor input Pista
const clueText = document.querySelector(".js-clue");
// Constante valor input Acumulador
const accText = document.querySelector(".js-acc");
// Constante formulario
const form = document.querySelector(".js-form");
// Constante botón prueba
const buttonReset = document.querySelector(".js-button-reset");

// Función que genera nº aleatorio y lo pinta en consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Ejecución automática que genera el número aleatorio de 0-100
let randomNumber = getRandomNumber(100);
console.log(`El número aleatorio es ${randomNumber}`);

// Función recoger numero usuaria y pintarlo en consola
function getUserNumber() {
  const numberUser = parseInt(numberInput.value);
  return numberUser;
}

// Función que minimiza el uso de innerhtml de manera repetitiva
function clueTextHtml(clue) {
  clueText.innerHTML = clue;
}

// Función comparar número usuaria con número aleatorio para pintar pista en input
function compareNumbers() {
  const userNumberFunction = getUserNumber();
  if (userNumberFunction !== userNumberFunction) {
    clueTextHtml("Debes introducir un número");
  } else if (userNumberFunction > 100 || userNumberFunction < 0) {
    clueTextHtml("Pista: El número debe estar entre 1 y 100");
  } else if (userNumberFunction > randomNumber) {
    clueTextHtml("Pista: Demasiado alto");
  } else if (userNumberFunction < randomNumber) {
    clueTextHtml("Pista: Demasiado bajo");
  } else if (userNumberFunction === randomNumber) {
    clueTextHtml("Has ganado campeona!!!");
  }
}

// Función acumulador de intentos (sin bucles ni arrays)
function accNumbers() {
  accText.innerHTML = parseInt(accText.innerHTML) + 1;
}

// Función manejadora que recoje el proceso de juego completo
function handlerNumber() {
  getUserNumber();
  compareNumbers();
  accNumbers();
}

// Función que resetea el juego
function handlerReset() {
  // Vacío todos los campos, incluida la consola
  clueTextHtml("Pista: Escribe el número y dale a Prueba");
  accText.innerHTML = parseInt(0);
  numberInput.value = "";
  console.clear();
  // Genero nuevo número aleatorio y lo pinto en la consola
  randomNumber = getRandomNumber(100);
  console.log(`El número aleatorio es ${randomNumber}`);
}

// Evento que tiene lugar cuando la usuaria hace click en el botón
buttonInput.addEventListener("click", handlerNumber);

// Evento que tiene lugar cuando la usuaria pulsa enter del teclado
form.addEventListener("submit", handlerNumber);

// Botón de reset para vaciar el juego
buttonReset.addEventListener("click", handlerReset);
