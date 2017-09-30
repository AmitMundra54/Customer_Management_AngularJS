'use strict';

var moment = require('moment');
require('./login/login-module.js');
require('./shared/navbar-module.js');
require('./main-page/main-page-module.js');
require('./user/user-module.js')
require('angular-ui-router');
var API = require('./services/api-service.js');
// var vAccordion = 'v-accordion';

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.mainPage',
  'myApp.login',
  'myApp.navbar',
  'myApp.user',
  'ui.router',
  // 'vAccordion',
]);


myApp.constant("moment",moment);
myApp.config(['$locationProvider', '$routeProvider', '$stateProvider', function($locationProvider, $routeProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');

  $stateProvider.state('register',{
  url:'/register',
    templateUrl: 'app/user/registration/register.html',
    controller: "loginCtrl",
  });

  $routeProvider
  .when('/', {
    templateUrl: 'app/login/login.html',
    controller: 'loginCtrl'
  })
    .when('/user', {
    templateUrl: 'app/user/user.html',
    controller: 'userCtrl'
  })
  .when('/register', {
  templateUrl: 'app/user/registration/register.html',
  controller: 'userCtrl'
})
.when('/about', {
templateUrl: 'app/login/about.html',
controller: 'loginCtrl'
})

  .when('/homepage',{
    templateUrl:'/app/main-page/main-page.html',
    controller:'mainPageCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

myApp.factory('API', API);
