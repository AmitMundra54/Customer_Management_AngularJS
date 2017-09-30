function dashboardView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/dashboard/dashboard.html',
        controller:function($scope,$mdDialog){
        $scope.catagories = ['User','Customer','teacher','Student'];
    }
        }
    };

module.exports= dashboardView;