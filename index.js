let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let durationText = document.querySelector(".duration-input");

let myTimer = new Timer(durationText, startButton, pauseButton);
