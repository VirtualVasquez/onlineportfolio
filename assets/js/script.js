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
			"descript": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
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