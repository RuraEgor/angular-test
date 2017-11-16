'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('userForm').
  component('userForm', {
    templateUrl: 'user-form/user-form.template.html',
    controller: ['$http', '$routeParams', '$location',
      function UserDetailController($http, $routeParams, $location) {
        var self = this;

        $http.get('http://localhost:3000/users/'  + $routeParams.userId).then(function(response) {
            self.user = response.data;
        });

        this.query;
        this.email;

        self.submit = function (){

            var formData = [];
            var znInput = angular.element(document.querySelector(".first-name"));
            formData[0] = znInput[0].value;


            var dataUser = {
                "firstName": this.query,
                "lastName": "Cornora",
                "someText": "hello",
                "description": "Какое-то описание"
            }

            $http.post('http://localhost:3000/users/', dataUser).then(function(response) {
                self.user = response.data;
            });
        }
      }
    ]
  });
