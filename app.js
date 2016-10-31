(function(){
  'use strict';
  angular.module('MsgApp',[])
  .controller('MsgController',MsgController);

  MsgController.$inject=['$scope','$filter'];

  function MsgController($scope,$filter){
    $scope.name="Ayush";
    $scope.cost=10;
    $scope.stateOfBeing="Hungry";

    $scope.sayMessage=function(){
      var msg="Ayush is upset";
      var output=$filter('uppercase')(msg);
      return output;
    };
    $scope.fed=function(){
      $scope.stateOfBeing="Fed";
    };
  };
})();
