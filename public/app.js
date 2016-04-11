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
			, completed: function(projectsService){
				return projectsService.getCompleted();
			}
		}
	})
	.state("completed", {
		templateUrl:"templates/completedProject.html"
		, url:"/projects/:id"
		, controller:"completedCtrl"
		, resolve: {
			current: function(projectsService, $stateParams){
				console.log($stateParams)
				return projectsService.getProjectById($stateParams.id);
			}
		}
	})
	.state("login", {
		templateUrl:"templates/login.html"
		, url:"/login"
		, controller:"loginCtrl"
	})
});

