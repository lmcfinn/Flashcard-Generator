// var inquirer = require("inquirer");

//Basic Card

//Build the constructor
function BasicCard(options) {
	this.front = options.front;
	this.back = options.back;
};

BasicCard.prototype.printInfo = function() {
	console.log("Your answer: " + this.front)
	console.log("Correct answer: " + this.back)
}

//Export the module
module.exports = BasicCard;
