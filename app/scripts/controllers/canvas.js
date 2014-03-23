'use strict';

angular.module('bmcApp')
  .controller('CanvasCtrl', function ($scope,$resource,$routeParams,$http) {


    var ID = $routeParams.id, Index = $routeParams.index
    $scope.Index = parseInt(Index)+1
  	var Canvas = $resource('/api/canvas/:id/:index',{id:'@id',index:'@index'},{update:{method:'PUT',params:{id:'@id',index:'@index'}}})

  	var init = function(){
      $http.get('/api/projects/'+ID)
        .success(function(d){
          console.log(d)
          $scope.Canvas = d.canvas[Index]

        })
  	}

    $scope.Update = function(){
      Canvas.update({id:ID,index:Index},$scope.Canvas).$promise.then(function(d){
        if(d){$scope.msg = "Canvas updated"
          init()
        }
      })
    }

  	init()
  });
