(function () {
    'use strict'

    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider

            .when('/menu', {
                template: '<menu-component></menu-component>',
                controllerAs: 'vm'
            })

            .when('/comics', {
                template: '<comics-component></comics-component>',
                controllerAs: 'vm'
            })



            .otherwise({
                redirectTo: '/menu'
            });
    }
    angular
    .module('marvel')
    .config(config);
})();
