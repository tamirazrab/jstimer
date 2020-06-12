class Timer {
	constructor(durationText, startButton, pauseButton) {
		this.durationText = durationText;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		startButton.addEventListener("click", this.start);
	}

	start() {
		console.log("Hello there.");
		console.log(`You tolrddrd me to start timer for ${durationText}`);
		// Just a reminder if this start() function is called through event listener
		// this itself will point to the button element not to the instance of class.
	}
}

let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let durationText = document.querySelector(".duration-input").value;

let myTimer = new Timer(durationText, startButton, pauseButton);
