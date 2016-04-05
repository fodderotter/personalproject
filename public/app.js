var app = angular.module("PMapp", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state("home", {
		templateUrl:"templates/home.html"
		, url:"/"
		, controller:"homeCtrl"
	})
	.state("projects", {
		templateUrl:"templates/projects.html"
		, url:"/projects"
		, controller:"projectsCtrl"
		, resolve: {
			projects: function(projectsService){
				return projectsService.getProjects();
			}
		}
	})
});

