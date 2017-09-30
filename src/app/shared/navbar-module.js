"use strict";

require('angular-material');
var navbarCtrl = require('./navbar.js');
var navbarModule = angular.module('myApp.navbar',['ngRoute','ngMaterial']);
navbarModule.controller('navbarCtrl',navbarCtrl);