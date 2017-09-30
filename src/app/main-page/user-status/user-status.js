function userStatusView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/user-status/user-status.html',
        controller:function($scope){
        	 $scope.Dark = function ($scope) {
     $scope.treedata=createSubTree(3, 4, "");
     $scope.showSelected = function(sel) {
         $scope.selectedNode = sel;
     };
 }

        }
    };
}
module.exports= userStatusView;