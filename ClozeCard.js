var inquirer = require("inquirer");

//Build the constructor
function ClozeCard(options) {

	this.fullText = options.fullText;
	this.cloze = options.cloze;
	this.partial = options.fullText.replace(this.cloze, '...');
}

ClozeCard.prototype.printErr = function(){

	console.log("Wrong answer!");
}

//Create a new object
var firstPresident = new ClozeCard({
	cloze: "George Washington",
	fullText: "George Washington was the first President of the United States."
});

//Test if the construtor works
// console.log(firstPresident.fullText)
// console.log(firstPresident.cloze)
// console.log(firstPresident.partial)

//Create a function using npm inquirer
function askQuestions(){

	inquirer.prompt([

		{
			type: "input",
			name: "userGuess",
			message: firstPresident.partial
		},
	]).then(function(answers){
		if (answers.userGuess == firstPresident.cloze) {

			console.log("Correct!" + "\n" + firstPresident.fullText)
		
		} else{

			firstPresident.printErr()
		}
	})

 };

 askQuestions();






