var BasicCard = require("./BasicCard");
var inquirer = require("inquirer");

var questions = [
	"Who was the first president of the United States?",
	"What city was the first U.S. captial?",
	"What year was the U.S. Constitution ratified?",
	"Who was the first Secretary of Treasury?"
];

var correctAnswers = [
	"George Washington",
	"Philadelphia",
	"1788",
	"Alexander Hamilton"
];


var count = 0;

function askQuestions() {

	if (count < 4) {

		inquirer.prompt([
		{
			name: "front",
			message: questions[count]
		},
	]).then(function(answers) {

			var basicQuestion = new BasicCard({
				front: answers.front,
				back: correctAnswers[count]
			});
			basicQuestion.printInfo();

			count++; 

			askQuestions();

		});
	}
};

askQuestions();






