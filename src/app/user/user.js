'use strict';

function userCtrl($scope, $mdToast, $location, $mdDialog, API){
	$scope.data = {
      selectedIndex: 0,
      secondLocked:  true,
      secondLabel:   "List View",
      bottom:        false
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
    $scope.items = ['BAC','GDH'];

    function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      };

$scope.showUserDetail = function(ev,users) {
    $mdDialog.show({
      templateUrl: 'app/user/dialogs/user-info-dialog.html',
      controller: DialogController,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      locals: {
           items: users
         },
    })
    .then(function(answer) {
    console.log("USER",answer);
      });
  };

    //Note:Non hard coded data from server
    // API.getUsers().then(function(response){
    // $scope.users = response.data;
    // });

    //Note:hard coded data 
    $scope.users  =

                [
                {
                "id":1,
                "name":"Amit",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"},
                {
                "id":2,
                "name":"Anshul",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            },
            {
                "id":3,
            	"name":"Ankit",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            },
             {
                "id":4,
            	"name":"Yash",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            },
            {
                "id":5,
                "name":"Praveen",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            },
            {
                "id":6,
                "name":"Saurabh",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            },
             {
                "id":7,
            	"name":"Shikha",
                "city":"Bangalore",
                "state":"Karnataka",
                "orderNo":"15BCS2015",
                "gender":"Male"
            }
            ];

    $scope.goToPerson = function(user, event) {
     $mdDialog.show(
     $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + user)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
};

  function DeleteDialogController($scope, $mdDialog, User) {
        $scope.user = User;
        $scope.deleteUser = function()
        {
            return User;
        };
        $scope.closeDialog = function() {
          $mdDialog.hide();
        };
      };

   $scope.AddCustomer = function(event){
    $mdDialog.show({
      templateUrl: 'app/user/directives/registration/user-register.html',
//      controller: registeredUser,
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
//      locals: {
//           User: user
//         },
//    }).then(function(response){

    });
};

   $scope.deleteUser = function(event, user) {
    $mdDialog.show({
      templateUrl: 'app/user/directives/delete-user/delete-user.html',
      controller: DeleteDialogController,
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      locals: {
           User: user
         },
    }).then(function(response){

    });
};

    function EditUserDialogController($scope, $mdDialog, User) {
        $scope.user = User;
        $scope.editUser = function()
        {
            return User;
        };
        $scope.closeDialog = function() {
          $mdDialog.hide();
        };
      };

    $scope.EditUser = function(event, user){
        $mdDialog.show({
      templateUrl: 'app/user/directives/edit-user/edit-user.html',
      controller: EditUserDialogController,
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      locals: {
           User: user
         },
    })
    }
}

module.exports = userCtrl;
