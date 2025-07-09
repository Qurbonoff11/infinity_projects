'use strict';

const $HTML = document

let createNote = $HTML.querySelector('.create-box');
let notes = $HTML.querySelector('.notes')[0];
let input = $HTML.querySelector('#userInput')[0];
let createBtn = $HTML.querySelector('#create');

let i = 0

createBtn.addEventListener('click', () => {
  createNote.style.display = 'block';
})

const content = (e) => {
  if (e.keyCode == '13') {
    createNote.style.display = 'none';
  }
  console.log(e.keyCode);
}

createNote.addEventListener('keydown', content);
