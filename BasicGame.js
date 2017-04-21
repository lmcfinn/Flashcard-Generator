var BasicCard = require("./BasicCard");
var inquirer = require("inquirer");


//Create content for the flash cards
var questions = [
	"Who was the first president of the United States?",
	"What city was the first U.S. capital?",
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

//Create a function to ask questions
function askQuestions() {

	if (count < 4) {

		inquirer.prompt([
		{
			name: "front",
			message: questions[count]
		},
	]).then(function(answers) {

			//Create new object based on the constructor
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






