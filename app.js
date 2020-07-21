var output = document.getElementById("output");
 
var calculator = {
    
    display: '0',           // what is currently displayed on the calculator
    power: false,           // whether or not the calculator is on or off
    operation: '?',         // what type of operation will be performed
    num1: 0,                // first number used for calculations
    num2: 0,                // second number used for calculations
 
    /*
    startCalculator: turns on calculator, makes all buttons functional. Also functions as a clear.
    event: when the ON/C button is clicked
    */
    startCalculator: function() {
        this.display = '0';
        this.power = true;
        this.operation = '?'
        this.num1 = 0;
        this.num2 = 0;
        output.innerHTML = this.display;
        output.style.color = "black";
    },
 
    /*
    appendNumber: adds a number to the last digit of the display
    event: when any number button is clicked
    param: number to be added to the end of the display
    */
    appendNumber: function(num) {
        if(this.power) {
            if (this.display == '0') {
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
 
        if (this.operation == '?'){
            this.operation = op;
            this.num1 = Number(this.display);
        } else {
            
            var result = 0;
            this.num2 = Number(this.display);
 
            switch(op) {
                case 'x':
                    result = (num1 * num2).toString();
                    break;
                case '/':
                    result = (num1 / num2).toString();
                    break;
                case '+':
                    result = (num1 + num2).toString();
                    break;
                case '-':
                    result = (num1 - num2).toString();
                    break;
            }
 
            if (result.length > 10){
                result = convertToExpo(result);
            }
            this.display = result;
            output.innerHTML = this.display;
        }
    }
};
 
function convertToExpo(num) {
 
    var tmp = Number(num);
    tmp = tmp.toExponential();
    num = tmp.toString();
 
    return num;
}
