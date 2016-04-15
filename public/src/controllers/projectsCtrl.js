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
			projectsService.getProjects().then(function(res){
				$scope.projects=res;
			});
		})
	}
	$scope.changeProjectStatus = function(id){
		projectsService.changeProjectStatus(id).then(function(res){
			projectsService.getCompleted().then(function(res){
				projectsService.getProjects().then(function(res){
					$scope.projects=res;
				})
				$scope.completed=res;
			})
		})
	}
	$scope.loadProject = function(id){		
		activeProject = id;
		projectsService.getProjectById(id).then(function(res){
			var stored = new Date(res.data.doc);		
			$scope.active = res.data;
			$scope.active.doc = stored.toLocaleDateString();
		})
		projectsService.getTasks(id).then(function(res){
			var docs = [];			
			for(var i = 0; i < res.length; i++){				
				res[i].doc = new Date(res[i].doc).toLocaleDateString();
				// if(res[i].status === true){
				// 	// document.getElementById("check").style.visibility = "visible"
				// }
			}			
			$scope.tasks=res;			
		});
	}
	$scope.addTask = function(task){
		projectsService.addTask(activeProject, task).then(function(res){
			projectsService.getTasks(activeProject).then(function(res){
				var docs = [];			
					for(var i = 0; i < res.length; i++){
						res[i].doc = new Date(res[i].doc).toLocaleDateString();
					}
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
	$scope.changeTaskStatus = function(id){
		projectsService.changeTaskStatus(id)
			.then(projectsService.getTasks(id))		
	}
})

