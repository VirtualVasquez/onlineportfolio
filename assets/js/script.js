const repository = {
	"projects": [
		{
			"name": "Undertale HangMan",
			"url": "https://virtualvasquez.github.io/Hangman-Game/",
		},
		{
			"name": "Burgers",
			"url": "https://sleepy-fortress-91819.herokuapp.com/"
		},
		{
			"name": "Emerald Escalation",
			"url": "https://virtualvasquez.github.io/week-4-game/"
		},
		{
			"name": "Animating Anime",
			"url": "https://virtualvasquez.github.io/Ajax-Gifs/"
		},
		{
			// NOT A WEBSITE
			"name": "LIRI",
			"url": "https://github.com/VirtualVasquez/liri-node-app"
		},
		{
			//NOT A WEBSITE
			"name": "Node-MySQL Storefront",
			"url": "https://github.com/VirtualVasquez/Node-MySQL-Storefront"
		},
		{
			"name": "Friend Finder",
			"url": "https://obscure-fjord-17821.herokuapp.com/"
		},
		{
			"name": "Mega Man X Trivia Game",
			"url": "https://virtualvasquez.github.io/TriviaGame/"
		},	
		{
			"name": "Almanac JS",
			"url": "https://almanac-js.herokuapp.com/"
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