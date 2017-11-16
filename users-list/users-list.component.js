'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('usersList').
  component('usersList', {
    templateUrl: 'users-list/users-list.template.html',
    controller: ['$http', function UsersListController($http) {
      var self = this;

      self.addCl = function () {
        //alert(45);
      }

      // $http.get('phones/phones.json').then(function(response) {
      //   self.phones = response.data;
      // });

      $http.get('http://localhost:3000/users').then(function(response) {
          self.users = response.data;
      });

    }]
  });
