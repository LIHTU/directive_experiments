
angular.module('colorDirective', []).
  controller('colorController', function($scope){
    $scope.temperatues = (function(){
      var colorCount = 50;
      var tempMin = -40;
      var tempMax = 120;
      var tempRange = tempMax-tempMin ;
      var innerTemps = [];
      for (var i=0; i<colorCount; i++){
        innerTemps.push(Math.floor(Math.random() * tempRange + tempMin))
      };
      console.log(innerTemps);
      return innerTemps;
    })();
    $scope.test = 'test';
  }).
  directive('toRgb', function(){
    return {
      restrict: 'E',
      controller: "colorController",
      controllerAs: '$ctrl',
      template: 'rgb stuff here. {{$ctrl.temperatures}}, {{test}}'
//      scope: false,

      }
    });