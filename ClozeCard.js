var inquirer = require("inquirer");

function ClozeCard(options) {
	this.cloze = options.cloze;
	this.partial = options.partial;
	this.fullText = options.fullText;
}

ClozeCard.prototype.printCloze = function() {
	console.log(this.cloze)
};

ClozeCard.prototype.printPartial = function() {
	console.log(this.partial)
};

ClozeCard.prototype.printFull = function() {
	console.log(this.fullText)
};

ClozeCard.prototype.printWrong = function() {
	console.log("Oops. Wrong answer.")
};


var firstPresident = new ClozeCard({
	cloze: "George Washington",
	partial: "... was the first president of the United States.",
	fullText: "George Washington was the president of the United States."
});

if (process.argv[2] == "cloze") {
	firstPresident.printCloze();
}

if (process.argv[2] == "partial") {
	firstPresident.printPartial();
}

if (process.argv[2] == "full") {
	firstPresident.printFull();
}

