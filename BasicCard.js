var inquirer = require("inquirer");

//Basic Card

function BasicCard(options) {
	this.front = options.front;
	this.back = options.back;
};

BasicCard.prototype.printInfo = function() {
	console.log("Your answer: " + this.front)
	console.log("Correct answer: " + this.back)
}


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
inquirer.prompt([
	{
		name: "front",
		message: "Who was the first president of the United States?"
	},
	
]).then(function(answers) {

	var firstPresident = new BasicCard({
		front: answers.front,
		back: "George Washington"
	});
	firstPresident.printInfo();
});

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