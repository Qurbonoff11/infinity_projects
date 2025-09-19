"use strict";

import { songList } from "./data.js";

const $HTML = document;

const title = $HTML.querySelector(".title");
const audio = $HTML.querySelector("audio");
const prev = $HTML.querySelector(".prev");
const playPause = $HTML.querySelector(".playPause");
const next = $HTML.querySelector(".next");

let songPlaying = false;

const palySong = () => {
  songPlaying = true;
  audio.play();
  playPause.classList.add("active");
  playPause.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
};
const pauseSong = () => {
  songPlaying = false;
  audio.pause();
  playPause.classList.remove("active");
  playPause.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
};

playPause.addEventListener("click", () =>
  songPlaying ? pauseSong() : palySong()
);

const loadSong = (songList) => {
  title.innerHTML = songList.songName
  audio.src = songList.path
};

let i = 2

loadSong(songList[i])

const prevSong = () => {
  i--;
  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i])
  palySong()
};

const nextSong = () => {
  i++;
  if (i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i])
};

prev.addEventListener('click', prevSong)
next.addEventListener('click', nextSong)