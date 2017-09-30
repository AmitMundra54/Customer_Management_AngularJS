"use strict";
function registeredUser(){
    return {
        restrict : 'E',
        scope : {

        },
        templateUrl : 'app/user/directives/registration/user-register.html',
        controller:function($scope){
            $scope.states = ['rajasthan','haryana','chandigarh'];
            $scope.user = {};
            console.log("EEEEEEEE",$scope.user);
            $scope.sign_in = function(user)
            {
                $scope.user = null;
                console.log("WWWWWWWWW",$scope.user);
            };


        }
    }
}

module.exports = registeredUser;