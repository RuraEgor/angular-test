'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('userDetail').
  component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: ['$http', '$routeParams', '$location',
      function UserDetailController($http, $routeParams, $location) {
        var self = this;

        self.userId = $routeParams.userId;


        $http.get('http://localhost:3000/users/'  + $routeParams.userId).then(function(response) {
            self.user = response.data;
        });

        self.deleteUser = function deleteUser(){

          $http.delete('http://localhost:3000/users/'  + $routeParams.userId).then(function(response) {
            $location.path('/');
          });

        }
      }
    ]
  });
