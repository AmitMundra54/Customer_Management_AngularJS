function userDetailDialogCtrl($scope, API, $mdDialog, $mdToast, user){

    $scope.userDetails = function()
    {

    }
    $scope.closeDialog = function() {
          $mdDialog.hide();
          }

};

module.exports = userDetailDialogCtrl;
