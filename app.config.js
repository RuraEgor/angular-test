'use strict';

angular.
  module('usersApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/form', {
          template: '<user-form></user-form>'
        }).
        when('/user/update/:userId', {
          template: '<user-update></user-update>'
        }).
        when('/user/:userId', {
            template: '<user-detail></user-detail>'
        }).
        otherwise('');
    }
  ]);
