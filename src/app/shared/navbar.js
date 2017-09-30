'use strict';

function navbarCtrl($scope, API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ,$mdToast,$location,$rootScope,$window,$mdSidenav,$route,$state){
    $scope.title = 'Customer Management';
    $scope.userCall = function(){
        API.getUsers().then(function(data){
        console.log("AAAAAAAAAAAAAAAAAAAAA",data.data)})
    };
//     $rootScope.$watch('activeLink',function()
// {
//     $scope.active = $rootScope.activelink;
// });
// $scope.options = ['Home','Register','Login','Dashboard'];
// $scope.home = "Home";
// $scope.selectedOption = function(option)
//     {
//         $scope.navId='register';
//         $scope.active = option;
//     }

}

module.exports = navbarCtrl;