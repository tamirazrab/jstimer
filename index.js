class Timer {
	constructor(durationText, startButton, pauseButton) {
		this.durationText = durationText;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		startButton.addEventListener("click", this.start);
		pauseButton.addEventListener("click", this.pause);
	}

	start = () => {
		/*
			* Just a reminder if this start() function is called through event listener
			 * this itself will point to the button element not to the instance of class.
			 
			- Arrow function will solve this problem as the value of this in arrow function
			- will be equal to the value of this outside of arrow function.
			- If this modern style js is converted into old js using babel.
			- start function would be seen defined under constructor and since
			- outside of that arrow function is constructor in which this points
			- to the instance of class.
		*/

		this.intervalId = setInterval(this.tick, 1000); // calls the method every 1kms which is one second
		// it also returns integer ID which represents this interval going on - which can
		// later be used to cancel out this timer.
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
		console.log("Coming up every second.");
	};
}

let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let durationText = document.querySelector(".duration-input").value;

let myTimer = new Timer(durationText, startButton, pauseButton);
