// var inquirer = require("inquirer");

//Build the constructor
function ClozeCard(options) {

	//Scope safe contructor
	if (this instanceof ClozeCard) {

		this.fullText = options.fullText;
		this.cloze = options.cloze;
		this.partial = options.fullText.replace(this.cloze, '...');

	} else {

		return new ClozeCard(options);
	}
}

ClozeCard.prototype.printErr = function(){

	console.log("Oops..." + "\n" + this.fullText);
}

//Export the module
module.exports = ClozeCard;



