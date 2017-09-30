'use strict';

function API($http, $rootScope) {

     // var apiBase = 'http://app.advancedstructures.in/backend/';

      var apiBase = 'http://localhost:8000/';

      var API = function(apiBase) {
            this.apiBase = apiBase;
        };

        API.prototype.getApiBase = function() {
            return apiBase;
        };

        API.prototype.get = function(url, params) {
            return $http.get(url, params);
        };

        API.prototype.post = function(url, data) {
            return $http.post(url, data);
        };

        API.prototype.put = function(url, data) {
            return $http.put(url, data);
        };

        API.prototype.delete = function(url, data) {
            return $http.delete(url, data);
        };

        API.prototype.getUsers = function() {
            return this.get(this.apiBase + 'api/users/');
        };




        return new API(apiBase);
    }

module.exports = API;
