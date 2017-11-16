'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('userUpdate').
  component('userUpdate', {
    templateUrl: 'user-update/user-update.template.html',
    controller: ['$http', '$routeParams', '$location',
      function UserDetailController($http, $routeParams, $location) {
        var self = this;

        // $http.get('http://localhost:3000/users/'  + $routeParams.userId).then(function(response) {
        //     self.user = response.data;
        // });
        //
        // self.deleteUser = function deleteUser(){
        //
        //   $http.delete('http://localhost:3000/users/'  + $routeParams.userId).then(function(response) {
        //     $location.path('/');
        //   });
        // }

          var elem = angular.element(document.querySelector("body"));


        // $http.patch('http://localhost:3000/users/'  + $routeParams.userId, ).then(function () {
        //
        // });

      }
    ]
  });
