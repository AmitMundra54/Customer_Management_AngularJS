'use strict';

require('angular-material');
var userCtrl = require('./user.js');
var userDetailDialogCtrl = require('./dialogs/user-info-dialog-ctrl.js');
var userInfo = require('./directives/user-info/userDetail.js');
var registeredUser = require('./directives/registration/user-register-ctrl.js');
var userModule = angular.module('myApp.user',['ngRoute','ui.router','ngMaterial','ngAnimate',]);
userModule.controller('userCtrl',userCtrl);
userModule.controller('userDetailDialogCtrl',userDetailDialogCtrl);
userModule.directive('userInfo',userInfo);
userModule.directive('registeredUser',registeredUser);
