import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();
console.log(chronometer);

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	minDec.innerHTML = minutes[0];
	minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	secDec.innerHTML = seconds[0];
	secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    chronometer.startClick();
  } else {
    btnRight.textContent = "SPLIT";
    btnRight.className = "btn split";
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop;"
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => { //Quand on clique sur le bouton droit, si la classe est en button reset
  if (btnRight.className === "btn reset") {
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    chronometer.startClick();
  } else {
    btnRight.textContent = "SPLIT";
    btnRight.className = "btn split";      //   <<<< Il se passe ça
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop;"

    chronometer.stopClick();
  }
});

// I don't get this lab at all so I'm sorry I will review everything this weekend...