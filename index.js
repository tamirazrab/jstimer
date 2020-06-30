let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let durationText = document.querySelector(".duration-input");

let circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration = 0;

let myTimer = new Timer(durationText, startButton, pauseButton, {
	onStart(totalDuration) {
		console.log("Timer began");
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			"stroke-dashoffset",
			(perimeter * timeRemaining) / duration - perimeter
		);
	},
	onComplete() {
		console.log("Timer completed");
	},
});
