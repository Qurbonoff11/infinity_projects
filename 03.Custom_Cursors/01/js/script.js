'use strict';

const $HTML = document

let cursor = document.querySelector('.cursor')

$HTML.addEventListener('mousemove', (e) => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10)+"px; left: " + (e.pageX - 10) + "px;")
})

$HTML.addEventListener('click', () => {
  cursor.classList.add('expand')

  setTimeout(() => {
    cursor.classList.remove('expand')
  }, 500)
})