'use strict';

function loginCtrl($scope,$mdToast,$location){
    $scope.remember_login = false;
    $scope.username="amit";
    $scope.password="mundra";

    $scope.sign_in = function(){
        if ($scope.username=="amit" && $scope.password=="mundra"){
            $scope.username="";
            $scope.password="";
            $mdToast.show(
                $mdToast.simple()
                .textContent('Please Wait!')
                .position("bottom")
                .hideDelay(3000)
            );
            $location.path('/user');

        }
        else{
            $mdToast.show(
                $mdToast.simple()
                .textContent('Invalid Credentials!')
                .position("bottom")
                .hideDelay(3000)
            );
         };

        }
    } 

module.exports = loginCtrl;