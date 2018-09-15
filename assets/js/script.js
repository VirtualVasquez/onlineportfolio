const repository = {
	"projects": [
		{
			"name": "Undertale HangMan",
			"url": "https://virtualvasquez.github.io/Hangman-Game/",
		},
		{
			"name": "burgers",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "vibez",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "testing",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
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