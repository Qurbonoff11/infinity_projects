"use strict";

const $HTML = document;

const keyboard = $HTML.querySelector(".keyboard");
const keys = "1234567890qwertyuiopasdfghjklzxcvbnm".split("");

keys.forEach((key, idx) => {
  let keyDiv = $HTML.createElement("div");
  keyDiv.classList.add("key");

  let keyEl = $HTML.createElement("i");
  keyEl.setAttribute("data-key", key);

  keyEl.innerHTML = key.toUpperCase();
  keyDiv.appendChild(keyEl);

  keyboard.appendChild(keyDiv);

  if (key === "0" || key === "p" || key === "l") {
    let lineBreak = $HTML.createElement("div");
    lineBreak.classList.add("lineBreak");
    keyboard.appendChild(lineBreak);
  }
});

$HTML.addEventListener("keydown", (e) => {
  let keyEl = $HTML.querySelector(
    `.key i[data-key="${e.key.toLocaleLowerCase()}"]`
  );

  if (keyEl) keyEl.parentElement.classList.add("active");
});

$HTML.addEventListener("keyup", (e) => {
  let keyEl = $HTML.querySelector(
    `.key i[data-key="${e.key.toLocaleLowerCase()}"]`
  );

  if (keyEl) {
    keyEl.parentElement.classList.remove("active");
  }
});