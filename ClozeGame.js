var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");


var statements =[

	{
		cloze: "George Washington",
		fullText: "George Washington was the first President of the United States."
	},
	{
		cloze: "Philadelphia",
		fullText: "Philadelphiawas the first U.S. captial."
	},
	{
		cloze: "1788",
		fullText: "The U.S. Constitution was ratified in 1788."
	},
	{
		cloze: "Alexander Hamilton",
		fullText: "Alexander Hamilton was the first Secretary of Treasury."
	}

];

// console.log(statements[1].cloze)

var finalQ = [];

for (var i = 0; i < statements.length; i++) {
	var question = ClozeCard({
		cloze: statements[i].cloze, 
		fullText: statements[i].fullText
	});
	finalQ.push(question);
}

// console.log(finalQ[0].partial)
// console.log(finalQ[0].printErr())

var count = 0;

function askQuestions() {

	if (count < 4) {

		inquirer.prompt([
			{
				type: "input",
				name: "userGuess",
				message: finalQ[count].partial
			},
		]).then(function(answers) {
			if (answers.userGuess.toLowerCase() == finalQ[count].cloze.toLowerCase()) {
			console.log("Correct!" + "\n" + finalQ[count].fullText)
		} else{
			finalQ[count].printErr()
		}
			count++; 
			askQuestions();

		});
	}
};

askQuestions();

