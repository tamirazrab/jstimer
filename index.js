let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let durationText = document.querySelector(".duration-input");

let circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;

let myTimer = new Timer(durationText, startButton, pauseButton, {
	onStart() {
		console.log("Timer began");
	},
	onTick() {
		circle.setAttribute("stroke-dashoffset", currentOffset);
		currentOffset = currentOffset - 60;
	},
	onComplete() {
		console.log("Timer completed");
	},
});
