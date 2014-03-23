'use strict';

angular.module('bmcApp')
  .controller('MainCtrl', function ($scope,$resource) {

  	var Projects = $resource('/api/projects/:id',{id:'@id'},{update:{method:'PUT',params:{id:'@id'}}})

  	var init = function(){
  		Projects.query().$promise.then(function(d){
  			$scope.Projects = d
  		})
  	}

  	$scope.create = function(){
  		Projects.save({},$scope.N).$promise.then(function(d){
  			if(d){$('*').modal('hide')
  				$scope.err = null
  				$scope.N = null
  				init()
  			}
  			else $scope.err = "Error creating project. Reload and try again."
  		})
  	}

  	$scope.delete = function(id){
  		Projects.remove({id:id}).$promise.then(function(d){
  			init()
  		})
  	}

    $scope.edit_status = function(index){
      $scope.E = $scope.Projects[index]
    }

    $scope.edit = function(){
      Projects.update({id:$scope.E._id},$scope.E).$promise.then(function(d){
        if(d){$('*').modal('hide')
          $scope.err = null
          $scope.N = null
          init()
        }
        else $scope.err = "Error editing project. Reload and try again."
      })
    }

  	init()
  });
