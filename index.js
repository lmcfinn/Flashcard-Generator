var inquirer = require("inquirer");

//Basic Card

// function BasicCard(options) {
// 	this.front = options.front;
// 	this.back = options.back;
// };

// BasicCard.prototype.printInfo = function() {
// 	console.log("Your answer: " + this.front)
// 	console.log("Correct answer: " + this.back)
// }


//Looping doesn't work right. All questions come out at once
// var questions = [
// 	"Who was the first president of the United States?",
// 	"What city was the first U.S. captial?",
// 	"What year was the U.S. Constitution ratified?",
// 	"Who was the first Secretary of Treasury?"
// ];

// var correctAnswers = [
// 	"George Washington",
// 	"Philadelphia",
// 	"1788",
// 	"Alexander Hamilton"
// ];

// for (var i = 0; i < 4; i++) {

// 	inquirer.prompt([
// 		{
// 			name: "front",
// 			message: questions[i]
// 		},
// 	]).then(function(answers) {

// 			var basicQuestion = new BasicCard({
// 				front: answers.front,
// 				back: correctAnswers[i]
// 			});
// 			basicQuestion.printInfo();
// 	});
// };



//Question 1
// inquirer.prompt([
// 	{
// 		name: "front",
// 		message: "Who was the first president of the United States?"
// 	},
	
// ]).then(function(answers) {

// 	var firstPresident = new BasicCard({
// 		front: answers.front,
// 		back: "George Washington"
// 	});
// 	firstPresident.printInfo();
// });

//Question 2
// inquirer.prompt([
// 	{
// 		name: "front",
// 		message: "What city was the first U.S. captial?"
// 	}
// ]).then(function(answers) {
// 	var firstCapital = new BasicCard({

// 		front: answers.front,
// 		back: "Philadelphia"
// 	})
// 	firstCapital.printInfo();
// })

//Cloze Card

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

// inquirer.prompt([
// 	{
// 		cloze: 
// 	}

// ])



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










