"use strict";

console.log(">> Ready :) <<");

// Variables globales (campos generales)
// Variable numero usuaria
const numberInput = document.querySelector(".js-number-input");
console.log(numberInput);
// Variable botón prueba
const buttonInput = document.querySelector(".js-button-input");
// Variable valor input Pista
const clueText = document.querySelector(".js-clue");
/*clueInput.innerHTML = "Pista: Escribe un número y dale a Prueba";*/
// Variable valor input Acumulador
const accText = document.querySelector(".js-acc");

// Función genera nº aleatorio y pintarlo en consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randoNumber = getRandomNumber(100);
console.log(`El número aleatorio es ${randoNumber}`);

// Función recoger numero usuaria y pintarlo en consola
function getUserNumber() {
  const numberUser = parseInt(numberInput.value);
  console.log(numberUser);
  return numberUser;
}
console.log(`El número escrito por la usuaria es ${getUserNumber()}`);

// Función comparar número usuaria con número aleatorio para pintar pista en input
function compareNumbers() {
  if (getUserNumber() > randoNumber) {
    clueText.innerHTML = "Pista: Demasiado alto";
  } else if (getUserNumber() < randoNumber) {
    clueText.innerHTML = "Pista: Demasiado bajo";
  } else if (getUserNumber() > 100 || getUserNumber() < 0) {
    clueText.innerHTML = "Pista: El número debe estar entre 1 y 100";
  } /*else if (getUserNumber === "") {
    clueText.innerHTML = "Pista: El número debe estar entre 1 y 100";
  }*/ else if (getUserNumber() === randoNumber) {
    clueText.innerHTML = "Has ganado campeona!!!";
  }
}

// Función acumulador de intentos (sin bucles ni arrays)
function accNumbers() {
  accText.innerHTML = parseInt(accText.innerHTML) + 1;
}

// Función manejadora que recoje el proceso completo
function handlerNumber() {
  getUserNumber();
  compareNumbers();
  accNumbers();
}

// Evento que tiene lugar cuando la usuaria hace click en el botón
buttonInput.addEventListener("click", handlerNumber);
