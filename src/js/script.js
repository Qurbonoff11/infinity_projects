import { dataBase } from "./data.js";
// import img from './data.js'

// DOM
const $HTML = document;

// Card
const cardList = $HTML.querySelector(".card-list");

// Data
dataBase.map((item) => {

  let {img, title, description, link} = item

  let card = `
    <div class="card">
      <div class="card-image">
        <img class="card-img" src="${img}" alt="${title}">
      </div>
      <div class="card-content">
        <div class="text">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${description}</p>
        </div>
        <a class="card-link" target="_blank" href="${link}">
          <button id="cardBtn">See Project</button>
        </a>
      </div>
    </div>
  `;

  cardList.innerHTML += card
});

