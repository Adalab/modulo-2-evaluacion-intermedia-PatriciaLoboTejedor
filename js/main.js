"use strict";

console.log(">> Ready :) <<");

const numberInput = document.querySelector(".js-number-input");
const buttonInput = document.querySelector(".js-button-input");
const clueInput = document.querySelector(".js-clue-input");
const accInput = document.querySelector(".js-acc-input");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

function getUserNumber() {
  const numberUser = numberInput.value;
  return console.log(numberUser);
}

function compareNumbers() {
  if (getUserNumber > getRandomNumber) {
    clueInput.innerHTML = "Demasiado alto";
  } else if (getUserNumber < getRandomNumber) {
    clueInput.innerHTML = "Demasiado bajo";
  } else if (getUserNumber > 100 || getUserNumber < 0) {
    clueInput.innerHTML = "El número debe estar entre 1 y 100";
  } else if (getUserNumber === getRandomNumber) {
    clueInput.innerHTML = "Has ganado campeona!!!";
  }
}
function accNumbers() {
  const accValue = accInput.value;
  let acc = 0;
  if (getUserNumber) {
    acc += 1;
  }
  return (accValue.innerHTML = acc);
}

function handlerNumber() {
  getUserNumber();
  compareNumbers();
  accNumbers();
}

buttonInput.addEventListener("click", handlerNumber);
