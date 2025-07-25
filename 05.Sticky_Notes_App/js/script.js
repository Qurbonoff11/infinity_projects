'use strict';

const $HTML = document

let createNote = $HTML.querySelector('.create-box');
let notes = $HTML.querySelector('.notes');
let input = $HTML.querySelector('#userInput');
let createBtn = $HTML.querySelector('#create');

let i = 0

createBtn.addEventListener('click', () => {
  createNote.style.display = 'block';
})

const colorGenerate = () => {
  let colors = ['#C2FF3D', '#FF3DE8', '#3DC2FF', '#04E022', '#BC83E6', '#EBB328'];

  if (i >= colors.length - 1) {
    i = 0
  }
  return colors[i++];
}

const createNotes = (text) => {
  let note = document.createElement('div');
  note.className = 'note';

  note.innerHTML = `<div class="details"><h3>${text}</h3></div>`

  note.setAttribute("style", `background-color: ${colorGenerate()};`);

  note.addEventListener('dblclick', () => {
    note.remove();
  })

  notes.appendChild(note);
}

const content = (e) => {
  if (e.keyCode == '13') {
    createNotes(input.value);
    input.value = '';
    createNote.style.display = 'none';
  }
  console.log(e.keyCode);
}

createNote.addEventListener('keydown', content);