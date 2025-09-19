'use strict';

const $HTML = document

let btn = $HTML.querySelector(".btn");
let input = $HTML.querySelector("#hexCode");

const changeColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}


btn.addEventListener("click", () => {
  $HTML.body.style.backgroundColor = changeColor()
  input.innerHTML = changeColor()
})