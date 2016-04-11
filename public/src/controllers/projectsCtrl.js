app.controller("projectsCtrl", function($scope, projectsService, projects, completed){
	$scope.projects = projects;
	$scope.completed = completed;
	var activeProject;
	var projTitle;

	// $scope.getCompleted = function(){
	// 	projectsService.getCompleted().then(function(res){
	// 		projectsService.getProjects().then(function(res){
	// 			$scope.projects=res;
	// 		})
	// 	})
	// }

	$scope.addProject = function(project){
		projectsService.addProject(project).then(function(res){
			projectsService.getProjects().then(function(res){
				$scope.projects=res;
			})
		});
		$scope.project = null;
	}		
	$scope.deleteProject = function(id){

		projectsService.deleteProject(id).then(function(res){
			projectsService.getProjects().getCompleted().then(function(res){
				$scope.projects=res;
			});
		})
	}
	$scope.changeStatus = function(id){
		projectsService.changeStatus(id).then(function(res){
			projectsService.getProjects().then(function(res){
				$scope.projects=res;
			})
		})
	}
	$scope.loadProject = function(id){		
		activeProject = id;
		projectsService.getProjectById(id).then(function(res){
			console.log(res);
			$scope.active = res.data.title;
		})
		console.log($scope.active)
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
	$scope.deleteTask = function(id){
		projectsService.deleteTask(id).then(function(res){
			projectsService.getTasks(activeProject).then(function(res){
				$scope.tasks=res;
			});
		})
	}
})

