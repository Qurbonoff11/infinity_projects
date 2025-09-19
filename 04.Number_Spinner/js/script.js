"use strict";

const $HTML = document;

let x = 0;

let output = $HTML.querySelector("#output");
let meter = $HTML.querySelector(".meter");
let pulsBtn = $HTML.querySelector(".plus");
let minusBtn = $HTML.querySelector(".minus");

output.innerHTML = x;

/* Plus function */
const plus = () => {
  if (x >= 10) {
    return false;
  }

  if (x >= 7) {
    meter.style.background = "#f00";
    meter.style.filter = `drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)`;
  }

  output.innerHTML = ++x;
  meter.style.height = `${x * 10}%`;
};
pulsBtn.addEventListener("click", plus);

/* Minus function */
const minus = () => {
  if (x <= 0) {
    return false;
  }

  if (x <= 7) {
    meter.style.background = "#0f0";
    meter.style.filter = `drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0)`;
  }

  output.innerHTML = --x;
  meter.style.height = `${x * 10}%`;
};

minusBtn.addEventListener("click", minus);
