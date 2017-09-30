function discountView(){
    return {
        restrict:'E',
        templateUrl:'app/main-page/discount-detail/discount-detail.html',
        controller:function($scope){
          $scope.tableData =[ {
        "name":"Iron",
        "parameters":[{
        "price":"2000",
        "discount":"400",
        "%discount":"20%",
        "remaining":45,
        "sold":720},
        {
        "price":"1000",
        "discount":"200",
        "%discount":"20%",
        "remaining":20,
        "sold":600},
        {
        "price":"4000",
        "discount":"800",
        "%discount":"20%",
        "remaining":10,
        "sold":30}
        ]},{
        "name":"AC",
        "parameters":[{
        "price":"20000",
        "discount":"4000",
        "%discount":"20%",
        "remaining":4,
        "sold":2},
        {
        "price":"40000",
        "discount":"8000",
        "%discount":"20%",
        "remaining":2,
        "sold":3},
        {
        "price":"6000",
        "discount":"12000",
        "%discount":"20%",
        "remaining":1,
        "sold":1}
        ]}];


        }
    };
}
module.exports= discountView;