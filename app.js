var output = document.getElementById("output");

var calculator = {
	
	display: '#', 			// what is currently displayed on the calculator
	power: false, 			// whether or not the calculator is on or off
	operation: '?', 		// what type of operation will be performed
	num1: 0,				// first numeber used for calculations
	num2: 0,				// second number used for calculations

	/*
	startCalculator: turns on calculator, makes all buttons functional. Also functions as a clear.
	event: when the ON/C button is clicked
	*/
	startCalculator: function() {
		this.display = '#';
		this.power = true;
		this.operation = '?'
		this.num1 = 0;
		this.num2 = 0;
		output.innerHTML = this.num1;
		output.style.color = "black";
	},

	/*
	appendNumber: adds a number to the last digit of the display
	event: when any number button is clicked
	param: number to be added to the end of the display
	*/
	appendNumber: function(num) {
		 
		if (this.power) {
			if (this.display == '#') {
				this.display = num;
			} else if (this.display.length < 10){
				this.display += num;
			}
			output.innerHTML = this.display;
		}
	},

	/*
	performOperation: it will perform whatever mathamatical operation the user has selected
	event: an operation button was clicked
	param: the operation that should be performed (x, /, +, -)
	*/
	performOperation: function(op) {
		if (this.power) {

			if (this.display != '#') {
				if (this.num1 == 0) {
					this.num1 = Number(this.display);
				} 
				else {
					this.num2 = Number(this.display);
					this.num1 = evaluate(this.num1, this.num2, this.operation)
					output.innerHTML = convertToExpo(this.num1);
				}
				this.display = '#';
			}
			this.operation = op;
		}
	},

	equalsOperation: function() {
		if (this.power && this.operation != '?') {

			if (this.display == "#") {
				if (this.num2 == 0) {
					this.num2 = this.num1;
				}
				this.num1 = evaluate(this.num1, this.num2, this.operation)
				output.innerHTML = this.num1; //convertToFit() goes around num1
			} else {
				this.num2 = Number(this.display);
				this.num1 = evaluate(this.num1, this.num2, this.operation);
				output.innerHTML = this.num1; //convertToFit() goes around num1
			}
			this.display = '#';
		}
	}
};

// work in progress come back to it after finishing the '.' button
function convertToFit(num) {

	if (num > 9999999999) {
		num = num.toExponential();
		var tmp = num.toString();
		tmp = tmp.substring()
	}

	return num;
}

function evaluate(num1, num2, op) {

	var result = 0;

	switch(op) {
		case 'x':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
	}
	return result;
}