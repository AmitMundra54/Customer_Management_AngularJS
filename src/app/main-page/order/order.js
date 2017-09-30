function orderView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/order/order.html',
        controller:function($scope){
        $scope.tableData =[ {
        "name":"Amit",
        "parameters":[{
        "product":"Iron",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720},
        {
        "product":"AC",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720},
        {
        "product":"TV",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720}
        ]},{
        "name":"Laxmi",
        "parameters":[{
        "product":"Cooler",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720},
        {
        "product":"Cream",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720},
        {
        "product":"Facewash",
        "date":"17-08-2017",
        "quantity":3,
        "rate":45,
        "total":720}
        ]}];

        }
    };
}
module.exports= orderView;