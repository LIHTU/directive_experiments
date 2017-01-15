
angular.module('colorDirective', []).
  directive('toRgb', function(){
    return {
      scope: {
        temperatures: '='
      },
      restrict: 'E',
      controller: function() {
        // map num to color
        function tempToColor(temp) {
          var hex = "#";
          // get red

        }

        // create temp and color objects
        this.temperatures = (function(){
          var colorCount = 50;
          var tempMin = -40;
          var tempMax = 120;
          var tempRange = tempMax-tempMin ;
          var innerTemps = [];
          for (var i=0; i<colorCount; i++){
            innerTemps.push({val:Math.floor(Math.random() * tempRange + tempMin)});
            innerTemp[i].color = tempToColor(innerTemp[i].val)
          };
          console.log(innerTemps);
          return innerTemps;
        })();
        this.test2 = 'test2';
      },
      controllerAs: '$ctrl',
//      templateUrl: '../color-template.html'
      template:'<div><span ng-repeat="temp in $ctrl.temperatures"><span style="padding: 3px">{{temp.val}}</span></span></div>'
//      scope: false,

      }
    });