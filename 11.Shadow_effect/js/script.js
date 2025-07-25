'use strict';

const $HTML = document

const text = $HTML.querySelector('#text')
const light = $HTML.querySelector('#light')

$HTML.addEventListener('mousemove', (e) => {
  let mouseX = e.clientX
  let mouseY = e.clientY

  light.style.left= `${mouseX}px`
  light.style.top= `${mouseY}px`

  let distanceX = mouseX - text.offsetLeft - text.offsetWidth / 2
  let distanceY = mouseY - text.offsetTop - text.offsetHeight / 2

  let newShadow = ''

  for (let i = 0; i < 200; i++) {
    let shadowX = -distanceX * (i / 200)
    let shadowY = -distanceY * (i / 200)
    let opacity = 1 - (i / 100)

    newShadow += (newShadow ? ',' : '') + `${shadowX}px ${shadowY}px 0 rgba(33, 33, 33, ${opacity})`

    text.style.textShadow = newShadow
  }
})