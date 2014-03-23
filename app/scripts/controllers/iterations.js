'use strict';

angular.module('bmcApp')
  .controller('IterationCtrl', function ($scope,$resource,$routeParams,$http) {


    var ID = $scope.ID = $routeParams.id
  	var Iteration = $resource('/api/iterations/:id/:index',{id:'@id',index:'@index'},{update:{method:'PUT',params:{id:'@id',index:'@index'}}})

  	var init = function(){
      $http.get('/api/projects/'+ID)
        .success(function(d){
          $scope.Iterations = d.canvas
        })
  	}

  	$scope.create = function(){
  		Iteration.save({id:ID},$scope.N).$promise.then(function(d){
  			if(d){$('*').modal('hide')
  				$scope.err = null
  				$scope.N = null
  				init()
  			}
  			else $scope.err = "Error creating project. Reload and try again."
  		})
  	}

  	$scope.delete = function(index){
  		Iteration.remove({id:ID,index:index}).$promise.then(function(d){
  			init()
  		})
  	}

    $scope.edit_status = function(index){
      $scope.E = $scope.Iterations[index]
      $scope.E.index = index
    }

    $scope.edit = function(){
      Iteration.update({id:ID,index:$scope.E.index},$scope.E).$promise.then(function(d){
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
