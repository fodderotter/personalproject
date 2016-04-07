app.controller("projectsCtrl", function($scope, projectsService, projects){
	$scope.projects = projects.data;
	$scope.addProject = function(project){
		projectsService.addProject(project).then(function(res){
			$scope.projects = projects.data;
		});
		$scope.project = null;
	}
	
	var activeProject;

	$scope.deleteProject = function(id){
		projectsService.deleteProject(id)
	};
	$scope.loadProject = function(id){		
		activeProject = id;
		projectsService.getTasks(id).then(function(res){
			$scope.tasks=res;
		});
	}
	$scope.addTask = function(task){
		projectsService.addTask(activeProject, task).then(function(res){
			projectsService.getTasks(activeProject).then(function(res){
				$scope.tasks=res;
			});
			$scope.task = null;
		})
	}
})

