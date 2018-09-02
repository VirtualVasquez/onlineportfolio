//sample urls and names only
var repository = {
	"projects": [
		{
			"name": "Undertale HangMan",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "burgers",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		},
		{
			"name": "vibez",
			"url": "https://virtualvasquez.github.io/Hangman-Game/"
		}
	]
}

$(document).ready(function(){
	var projectTemplate = $("#project-template").html();
	var compiledProjectTemplate = Handlebars.compile(projectTemplate);
	$(".content-container").html(compiledProjectTemplate(repository.projects[0]));

});