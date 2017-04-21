// var inquirer = require("inquirer");

//Basic Card
function BasicCard(options) {
	this.front = options.front;
	this.back = options.back;
};

BasicCard.prototype.printInfo = function() {
	console.log("Your answer: " + this.front)
	console.log("Correct answer: " + this.back)
}


module.exports = BasicCard;
