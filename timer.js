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

		// For first time it produces an delay of 1 second which can be avoided by
		this.tick();
		// ... manually calling it at the start.

		this.intervalId = setInterval(this.tick, 1000);
		/*
		 Calls the method every 1kms which is one second it also returns integer ID which represents this interval going on - which can
		 later be used to cancel out this timer.
		*/
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
		/*
			- Two interesting approaches to the updating problem. 
			- One is to grab the value from DOM store it in the instance variable then subtract it every single time as second passes and then update the DOM as well.
			- Down side is we have to add event listener if user were to add new timer value we would have to watch for it every time.
			- Second approach is to get data from DOM and update it directly to the DOM.
			- This way we don't have to add event listener as we're getting directly from DOM every time.
		*/

		// this.durationText.value = parseFloat(this.durationText.value) - 1;
		// used parse float to convert string to decimal number.
		// Better way using getter and setter - magical syntax really nice.
		if (this.timeRemaining === 0) this.pause();
		else this.timeRemaining = this.timeRemaining - 1;
	};

	get timeRemaining() {
		return parseFloat(this.durationText.value);
	}

	set timeRemaining(time) {
		this.durationText.value = time;
	}
}
