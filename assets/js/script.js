const repository = {
	"projects": [
		{
			"name": "Undertale HangMan",
			"url": "https://virtualvasquez.github.io/Hangman-Game/",
			"repo": "https://github.com/VirtualVasquez/Hangman-Game",
			"preview": "Hangman, made with javascript and determination."
		},
		{
			"name": "Emerald Escalation",
			"url": "https://virtualvasquez.github.io/week-4-game/",
			"repo": "https://github.com/VirtualVasquez/week-4-game",
			"preview": "A number game using bootsrap and jQuery. & Knuckles."
		},
		{
			"name": "Mega Man X Trivia Game",
			"url": "https://virtualvasquez.github.io/TriviaGame/",
			"repo": "https://github.com/VirtualVasquez/TriviaGame",
			"preview": "Test your knowledge of Mega Man X against the clock."
		},
		{
			"name": "Animating Anime",
			"url": "https://virtualvasquez.github.io/Ajax-Gifs/",
			"repo": "https://github.com/VirtualVasquez/Ajax-Gifs",
			"preview": "Using APIs to get you G-I-F's of A-ni-me."

		},
		{
			// NOT A WEBSITE
			"name": "LIRI",
			// NO URL AVAILABLE -- FIX REPO WITH SCREENSHOTS!
			"repo": "https://github.com/VirtualVasquez/week-4-game",
			"preview": "Hey LIRI, demonstrate APIs and Node.js in the terminal."
		},
		{
			//NOT A WEBSITE
			"name": "Node-MySQL Storefront",
			// NO URL AVIALABLE
			"repo": "https://github.com/VirtualVasquez/Node-MySQL-Storefront",
			"preview": "An introduction to MySQL Databases in the terminal."
		},
		{
			"name": "Friend Finder",
			"url": "https://obscure-fjord-17821.herokuapp.com/",
			"repo": "https://github.com/VirtualVasquez/FriendFinder",
			"preview": "An Express delivery of a new friend. "
		},
		{
			"name": "Burgers",
			"url": "https://sleepy-fortress-91819.herokuapp.com/",
			"repo": "https://github.com/VirtualVasquez/burger",
			"preview": "Getting a handle on your burgers, and serving them to and from a database."
		},	
		{
			"name": "Almanac JS",
			"url": "https://almanac-js.herokuapp.com/",
			"repo": "https://github.com/VirtualVasquez/Team-Fourtress",
			"preview": "A group effort to learn new javascript methods on a whim."
		}	
	]
}


const history = {
	"jobs": [
		{
			"title": "Bilingual Flooring Retail Associate",
			"shortcode": "thd",
			"start": "June 2014",
			"end": "December 2016",
			"descript": "Working in cooperation with members both in and outside of my department, my overall goal was to greet, qualify, recommmend, and close every customer. In addition, maintenance of our deparment, both virtually through information software applications, and physically, via upkeep of decorum using heavy machinery to restock and retrieve merchandise throughout the warehouse."
		},
		{
			"title": "Chiropractic Assistant",
			"shortcode": "usa",
			"start": "December 2016",
			"end": "April 2017",
			"descript": "Responsible for scheduling patients for their appointments, collecting patient information, keeping track of and charging for patient's payments, guiding patients through therapuetic exercises and stretches."
		},
		{"title": "Clinical Assistant - Inpatient Physical Therapy",
			"shortcode": "um",
			"start": "May 2017",
			"end": "Present (September 2018)",
			"descript": ""
		}

	]
}

$(document).ready(function(){
	var projectTemplate = $("#project-template").html();
	var compiledProjectTemplate = Handlebars.compile(projectTemplate);
	$("#targetOne").append(compiledProjectTemplate(repository));

	var jobTemplate = $("#job-template").html();
	var compiledJobTemplate = Handlebars.compile(jobTemplate);
	$("#targetTwo").html(compiledJobTemplate(history));
});