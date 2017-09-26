angular.module('colorsDemo', ['ngMaterial'])
.config(function ($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('forest')
    .primaryPalette('brown')
    .accentPalette('green');

  $mdIconProvider
    .defaultIconSet('material-design-icons-master/sprites/svg-sprite/svg-sprite-social-symbol.svg', 24);
})
.directive('regularCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'regularCard.tmpl.html',
    scope: {
      name: '@',
    }
  }
})
.directive('userCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'userCard.tmpl.html',
    scope: {
      name: '@',
      theme: '@'
    },
    controller: function ($scope) {
      $scope.name= $scope.name || 'Antonio';
      $scope.theme = $scope.theme || 'default';
    }


  }

  
})

.directive('tableCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'tableCard.tmpl.html',
      scope: {
        name: '@'
      },
      controller: function ($scope) {
        $scope.name= $scope.name || 'Desconocido';
      }
  
  
    }
})

.directive('menuTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'menuTable.tmpl.html',
      // scope: {
      //   name: '@'
      // },
      // controller: function ($scope) {
      //   $scope.name= $scope.name || 'Desconocido';
      // }
  
  
    }
})

;